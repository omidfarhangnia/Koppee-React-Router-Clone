import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./styles/app.css";
import { useEffect, useState } from "react";

export const links: Route.LinksFunction = () => [
  { rel: "preload", href: "https://fonts.googleapis.com" },
  {
    rel: "preload",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
  },
];

function InitialLoader() {
  return (
    <div id="initial__loader" className="initial__loader">
      <div className="initial__loader--container">
        <span className="initial__loader--boxes"></span>
        <span className="initial__loader--boxes"></span>
        <span className="initial__loader--boxes"></span>
        <span className="initial__loader--boxes"></span>
        <span className="initial__loader--boxes"></span>
        <span className="initial__loader--boxes"></span>
        <span className="initial__loader--boxes"></span>
        <span className="initial__loader--boxes"></span>
        <span className="initial__loader--boxes"></span>
      </div>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      const loader = document.getElementById("initial__loader");
      if (loader) {
        setTimeout(() => {
          loader.classList.add("fade-out");

          const onAnimationEnd = () => {
            setIsLoading(false);
            loader.removeEventListener("animationend", onAnimationEnd);
          };

          loader.addEventListener("animationend", onAnimationEnd);
        }, 500);
      }
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Koppee React Router Clone</title>
        <meta
          name="description"
          content="This project is a clone of the open-source Koppee template by ThemeWagon. Built with React and React Router for learning and practice purposes. Original Template: https://themewagon.com/themes/koppee/"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {isLoading && <InitialLoader />}
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

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
