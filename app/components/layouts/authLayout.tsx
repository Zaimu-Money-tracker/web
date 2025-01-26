import { Link } from "@remix-run/react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex gap-8 h-screen">
      <section className="flex w-4/10 items-center justify-center p-12">
        <article className="grid w-full h-full bg-linear-to-b from-primary to-secondary p-8 rounded-4xl">
          <header>
            <Link
              className="flex gap-3 items-center w-fit"
              to="/"
              aria-label="Zaimu Main Page"
            >
              <img
                width={32}
                height={32}
                className="aspect-auto"
                src="/icons/zaimu_white_logo.webp"
                alt="Zaimu Logo"
              />
              <span className="text-white font-black text-2xl">Zaimu</span>
            </Link>
          </header>
        </article>
      </section>

      {children}
    </main>
  );
}
