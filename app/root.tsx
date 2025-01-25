import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./styles/global.css";

export const links: LinksFunction = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ff8d35" />

        <link
          id="favicon"
          rel="shortcut icon"
          href="/favicon-white.ico"
          media="(prefers-color-scheme: no-preference)"
          type="image/ico"
        />
        <link
          rel="shortcut icon"
          href="/favicon-white.ico"
          media="(prefers-color-scheme: dark)"
          type="image/ico"
        />
        <link
          rel="shortcut icon"
          href="/favicon-black.ico"
          media="(prefers-color-scheme: light)"
          type="image/ico"
        />

        <script></script>

        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
