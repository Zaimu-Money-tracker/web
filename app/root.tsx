import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./styles/global.css";
import { useEffect } from "react";

export const links: LinksFunction = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const faviconLight = document.getElementById(
      "faviconLight"
    ) as HTMLLinkElement;
    const faviconDark = document.getElementById(
      "faviconDark"
    ) as HTMLLinkElement;

    const handleShow = () => {
      if (document.hidden) {
        faviconLight.href = "/favicon-white-sad.ico";
        faviconDark.href = "/favicon-black-sad.ico";
      } else {
        faviconLight.href = "/favicon-white.ico";
        faviconDark.href = "/favicon-black.ico";
      }
    };

    window.addEventListener("visibilitychange", handleShow);
  });

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ff8d35" />

        <link
          id="faviconLight"
          rel="shortcut icon"
          href="/favicon-white.ico"
          media="(prefers-color-scheme: dark)"
          type="image/ico"
        />
        <link
          id="faviconDark"
          rel="shortcut icon"
          href="/favicon-black.ico"
          media="(prefers-color-scheme: light)"
          type="image/ico"
        />

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
