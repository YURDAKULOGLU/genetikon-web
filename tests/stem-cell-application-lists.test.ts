import { describe, expect, it } from "vitest";
import lists from "../src/lib/content/stem-cell-application-lists.json";
import source from "./fixtures/stem-cell-source-paragraphs.json";

describe("owner-supplied application documents", () => {
  it("preserves every original DOCX paragraph and its order", () => {
    expect(lists.en.map(document => [
      document.title,
      ...document.groups.flatMap(group => [group.heading, ...group.items]),
    ])).toEqual(source);
  });

  for (const locale of ["tr", "ru", "ka", "az"] as const) {
    it(`${locale}: translates both lists without missing groups or numbered items`, () => {
      expect(lists[locale]).toHaveLength(2);
      lists[locale].forEach((document, index) => {
        const original = lists.en[index]!;
        expect(document.title.trim()).toBeTruthy();
        expect(document.title).not.toBe(original.title);
        expect(document.groups.map(group => group.items.length))
          .toEqual(original.groups.map(group => group.items.length));
        document.groups.forEach((group, groupIndex) => {
          const originalGroup = original.groups[groupIndex]!;
          expect(group.heading[0]).toBe(originalGroup.heading[0]);
          group.items.forEach((item, itemIndex) => {
            expect(item.trim()).toBeTruthy();
            const prefix = originalGroup.items[itemIndex]!.match(/^[A-C]\d+/)?.[0];
            if (prefix) expect(item.startsWith(prefix)).toBe(true);
          });
        });
      });
    });
  }
});
