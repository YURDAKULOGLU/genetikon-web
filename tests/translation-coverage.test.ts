import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { departmentsContent, pagesContent, legalContent } from "../src/lib/content/site-content";
import type { LT } from "../src/lib/content/site-content";

function fields(value: unknown, path = ""): Array<[string, LT]> {
  if (!value || typeof value !== "object") return [];
  if ("en" in value && typeof value.en === "string") return [[path, value as LT]];
  return Object.entries(value).flatMap(([key, child]) => fields(child, path ? `${path}.${key}` : key));
}

const source = fields({ departmentsContent, pagesContent, legalContent });
const numbers = (text: string) => (text.match(/\d+(?:[,.]\d+)*/g) ?? [])
  .map(value => value.replace(/[,.]/g, "")).sort();

describe("complete preview translations without changing clinical figures", () => {
  for (const locale of ["ru", "ka", "az"] as const) {
    it(`${locale}: all 302 fields are present and displayed`, () => {
      const dictionary = JSON.parse(readFileSync(new URL(`../src/lib/content/translations/${locale}.json`, import.meta.url), "utf8"));
      expect(source).toHaveLength(302);
      expect(Object.keys(dictionary).sort()).toEqual(source.map(([key]) => key).sort());
      for (const [key, value] of source) {
        expect(value[locale]?.trim(), key).toBeTruthy();
        expect(value[locale], key).toBe(dictionary[key]);
        if (value.en.length > 25) expect(value[locale], key).not.toBe(value.en);
      }
    });

    it(`${locale}: source numbers, contact destinations and unresolved abbreviations are preserved`, () => {
      for (const [key, value] of source) {
        const translated = value[locale] ?? "";
        expect(numbers(translated), key).toEqual(numbers(value.en));
        for (const token of value.en.match(/\b(?:NIPT|T21|T18|T13|FISH|PCR|IVF|ICSI|OPU|PGT|PGD|PES|KVKK|GDPR)\b/g) ?? []) {
          expect(translated, `${key}: ${token}`).toContain(token);
        }
        for (const email of value.en.match(/[\w.+-]+@[\w.-]+\.[a-z]+/gi) ?? []) {
          expect(translated, key).toContain(email);
        }
        if (value.en.includes("Genetikon Genetics Center")) expect(translated, key).toContain("Genetikon Genetics Center");
      }
    });
  }
});


describe("shared interface dictionaries", () => {
  const read = (locale: string) => JSON.parse(readFileSync(new URL(`../messages/${locale}.json`, import.meta.url), "utf8"));
  const paths = (value: Record<string, unknown>, prefix = ""): string[] =>
    Object.entries(value).flatMap(([key, child]) => {
      const path = prefix ? `${prefix}.${key}` : key;
      return child && typeof child === "object" ? paths(child as Record<string, unknown>, path) : [path];
    });
  for (const locale of ["tr", "ru", "ka", "az"]) {
    it(`${locale}: contains every interface key`, () => {
      expect(paths(read(locale)).sort()).toEqual(paths(read("en")).sort());
    });
  }
});
