import { useEffect } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import styles from "./styles/index.css";
import aosStyle from "aos/dist/aos.css";
import favicon from "./components/favicon.png";
import Aos from "aos";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: aosStyle },
    { rel: "icon", href: favicon },
  ];
}

export const meta: MetaFunction = () => {
  const description = `Hi, I'm Travis!`;
  return {
    description,
    keywords:
      "travis,microsoft,developer,software,react,javascript,typescript,photography",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@hartra34",
    "twitter:site": "@hartra34",
    "twitter:title": "Travis Harris",
    "twitter:description": description,
  };
};

const Layout: React.FC = () => {
  useEffect(() => {
    // Animate on scroll library initialization settings
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <div className="site-wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default function App() {
  return (
    <Document>
      <Layout></Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <div>
        <h1>There was an error</h1>
        <p>{error.message}</p>
        <hr />
        <p>
          Hey, developer, you should replace this with what you want your users
          to see.
        </p>
      </div>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <h1>
        {caught.status}: {caught.statusText}
      </h1>
      {message}
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  console.log(process.env.NODE_ENV);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
