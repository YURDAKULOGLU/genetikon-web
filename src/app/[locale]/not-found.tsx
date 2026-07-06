import { Link } from "@/lib/i18n/navigation";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="font-mono text-sm tracking-widest text-brand-700">404</p>
      <h1 className="mt-3 font-serif text-4xl text-brand-800">Page not found</h1>
      <p className="mt-4 text-ink-muted">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-brand-700 px-6 py-3 font-medium text-white hover:bg-brand-800"
      >
        Back to home
      </Link>
    </div>
  );
}
