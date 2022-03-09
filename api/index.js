var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/travisharris/code/personalSite/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_react = require("react");
var import_remix4 = __toESM(require_remix());

// app/components/Footer.tsx
init_react();
var import_fa = require("react-icons/fa");
var import_ai = require("react-icons/ai");

// app/components/Global/globals.ts
init_react();
var gitHubURL = "https://github.com/hartra344";
var linkedInURL = "https://www.linkedin.com/in/travis-harris/";
var twitterURL = "https://www.twitter.com/hartra34";
var twitterTag = "@hartra34";

// app/components/Footer.tsx
var Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("section", {
    className: "footer social-media"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "footer-icon",
    href: gitHubURL,
    title: "GitHub",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement(import_ai.AiFillGithub, {
    title: "GitHub icon"
  })), /* @__PURE__ */ React.createElement("a", {
    className: "footer-icon",
    href: linkedInURL,
    title: "LinkedIn",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement(import_fa.FaLinkedinIn, {
    title: "LinkedIn icon"
  })), /* @__PURE__ */ React.createElement("a", {
    className: "footer-icon",
    href: twitterURL,
    title: "Twitter",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement(import_fa.FaTwitter, {
    title: "Twitter icon"
  }))), /* @__PURE__ */ React.createElement("p", null, "\xA9 ", year, " Travis Harris"));
};
var Footer_default = Footer;

// app/components/Header/Header.tsx
init_react();

// app/components/Header/Nav.tsx
init_react();
var import_remix2 = __toESM(require_remix());
var import_fa2 = require("react-icons/fa");
var import_ai2 = require("react-icons/ai");
var Nav = ({ handleShowHide }) => {
  return /* @__PURE__ */ React.createElement("nav", {
    onClick: handleShowHide,
    className: "main-nav"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/photography"
  }, "Photography")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-social-media"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "nav-social-icon",
    href: gitHubURL,
    title: "GitHub",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement(import_ai2.AiFillGithub, null)), /* @__PURE__ */ React.createElement("a", {
    className: "nav-social-icon",
    href: linkedInURL,
    title: "LinkedIn",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement(import_fa2.FaLinkedinIn, null)), /* @__PURE__ */ React.createElement("a", {
    className: "nav-social-icon",
    href: twitterURL,
    title: "Twitter",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement(import_fa2.FaTwitter, null)))));
};
var Nav_default = Nav;

// app/components/Header/Header.tsx
var import_react_use = require("react-use");

// app/components/Global/icon.tsx
init_react();
var hamburgerIcon = /* @__PURE__ */ React.createElement("svg", {
  "aria-label": "menu hamburger icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, /* @__PURE__ */ React.createElement("path", {
  d: "M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
}));
var closeIcon = /* @__PURE__ */ React.createElement("svg", {
  className: "closeIcon",
  "aria-label": "menu close icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, /* @__PURE__ */ React.createElement("path", {
  d: "M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
}));
var myLogo = /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 379.04 444.12",
  height: "40px",
  width: "40px"
}, /* @__PURE__ */ React.createElement("title", null, "Travis Harris Logo"), /* @__PURE__ */ React.createElement("defs", null), /* @__PURE__ */ React.createElement("g", {
  id: "Layer_2",
  "data-name": "Layer 2"
}, /* @__PURE__ */ React.createElement("g", {
  id: "Layer_1-2",
  "data-name": "Layer 1"
}, /* @__PURE__ */ React.createElement("path", {
  fill: "#336699",
  d: "M117.61,146.9V383.74L76.18,342.31V185.16A480.43,480.43,0,0,1,0,160.07V109.9A434,434,0,0,0,76.18,138Q96.61,143.43,117.61,146.9Z"
}), /* @__PURE__ */ React.createElement("path", {
  fill: "#336699",
  d: "M379,110.87v50A480.32,480.32,0,0,1,309.51,184V342L268.08,383.4V146.11q21-3.71,41.43-9.38A437.5,437.5,0,0,0,379,110.87Z"
}), /* @__PURE__ */ React.createElement("path", {
  fill: "#336699",
  d: "M379,1.31V59.6A390.59,390.59,0,0,1,309.51,89,391.52,391.52,0,0,1,268.08,99.6a397.59,397.59,0,0,1-53.27,6.8q-12.09.75-24.28.74t-24.29-.74a394.26,394.26,0,0,1-48.63-5.92,394.89,394.89,0,0,1-41.43-10A390.88,390.88,0,0,1,0,58.5V0A345.17,345.17,0,0,0,76.18,37.8a343,343,0,0,0,41.43,11.64,344,344,0,0,0,48.63,6.86q12,.84,24.29.84t24.28-.84a345.59,345.59,0,0,0,53.27-7.89,343.16,343.16,0,0,0,41.43-12.27A344.38,344.38,0,0,0,379,1.31Z"
}), /* @__PURE__ */ React.createElement("rect", {
  fill: "#336699",
  x: "117.61",
  y: "245.38",
  width: "150.47",
  height: "44.29"
}), /* @__PURE__ */ React.createElement("path", {
  fill: "#336699",
  d: "M214.81,106.4V213.27H166.24V106.4q12.09.75,24.29.74T214.81,106.4Z"
}), /* @__PURE__ */ React.createElement("polygon", {
  fill: "#336699",
  points: "214.81 325.64 214.81 420.82 191.51 444.12 166.24 418.85 166.24 325.64 214.81 325.64"
}))));

// app/components/Header/Header.tsx
var import_remix3 = __toESM(require_remix());
var Header = () => {
  const mediaQuery = (0, import_react_use.useMedia)("(min-width: 576px)");
  const [navOpen, toggleNav] = (0, import_react_use.useToggle)(false);
  const navOpenV = navOpen && !mediaQuery;
  (0, import_react_use.useLockBodyScroll)(navOpenV);
  return /* @__PURE__ */ React.createElement("header", {
    className: navOpenV ? "active" : void 0
  }, /* @__PURE__ */ React.createElement("div", {
    className: "top-bar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header-logo-container"
  }, /* @__PURE__ */ React.createElement(import_remix3.NavLink, {
    to: "/",
    className: "header-logo"
  }, myLogo)), /* @__PURE__ */ React.createElement("button", {
    onClick: toggleNav,
    className: "btn-main-nav",
    onMouseDown: (e) => {
      e.preventDefault();
    }
  }, !navOpenV ? hamburgerIcon : closeIcon), /* @__PURE__ */ React.createElement(Nav_default, {
    handleShowHide: toggleNav
  })));
};
var Header_default = Header;

// app/styles/index.css
var styles_default = "/build/_assets/index-SPWCAZG2.css";

// node_modules/aos/dist/aos.css
var aos_default = "/build/_assets/aos-MWVDMGNB.css";

// app/components/favicon.png
var favicon_default = "/build/_assets/favicon-X6UWYWNZ.png";

// route:/Users/travisharris/code/personalSite/app/root.tsx
var import_aos2 = __toESM(require("aos"));
function links() {
  return [
    { rel: "stylesheet", href: styles_default },
    { rel: "stylesheet", href: aos_default },
    { rel: "icon", href: favicon_default }
  ];
}
var meta = () => {
  const description = `Hi, I'm Travis!`;
  return {
    description,
    keywords: "travis,microsoft,developer,software,react,javascript,typescript,photography",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@hartra34",
    "twitter:site": "@hartra34",
    "twitter:title": "Travis Harris",
    "twitter:description": description
  };
};
var Layout = ({ children }) => {
  (0, import_react.useEffect)(() => {
    import_aos2.default.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100
    });
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "site-wrapper"
  }, /* @__PURE__ */ React.createElement(Header_default, null), /* @__PURE__ */ React.createElement(import_remix4.Outlet, null), /* @__PURE__ */ React.createElement(Footer_default, null));
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see.")));
}
function CatchBoundary() {
  let caught = (0, import_remix4.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message);
}
function Document({
  children,
  title
}) {
  console.log("development");
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
}

// route:/Users/travisharris/code/personalSite/app/routes/photography.tsx
var photography_exports = {};
__export(photography_exports, {
  default: () => Index
});
init_react();
var import_react_router = require("react-router");
function Index() {
  return /* @__PURE__ */ React.createElement(import_react_router.Outlet, null);
}

// route:/Users/travisharris/code/personalSite/app/routes/photography/index.tsx
var photography_exports2 = {};
__export(photography_exports2, {
  default: () => Index2,
  links: () => links2,
  meta: () => meta2
});
init_react();

// app/components/Gallery/Gallery.tsx
init_react();
var import_react3 = __toESM(require("react"));
var import_resize_observer_polyfill = __toESM(require("resize-observer-polyfill"));

// app/components/Gallery/Photo.tsx
init_react();
var import_react2 = __toESM(require("react"));
var import_remix_image = __toESM(require("remix-image"));
var cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  left: void 0,
  top: void 0
};
var Photo = ({
  photo,
  margin,
  direction,
  top,
  left
}) => {
  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }
  return /* @__PURE__ */ import_react2.default.createElement("a", {
    key: photo.name,
    "data-lg-size": `${photo.width * 2}-${photo.height * 2}`,
    "data-slide-name": photo.name,
    "data-tweet-text": `${photo.caption} - by ${twitterTag}`,
    "data-pinterest-text": `${photo.caption} - by Travis Harris`,
    "data-facebook-text": `${photo.caption} - by Travis Harris`,
    className: "gallery-item",
    "data-src": `photos/${photo.file}`,
    "data-sub-html": `<h4 style="color:#eee"> Travis Harris ${photo.caption ? `- ${photo.caption}` : ""}</h4><p>${photo.cameraMake} ${photo.cameraModel} </p><p> ${photo.lens}</p><p>${photo.focalLength}mm | ${photo.shutterSpeed}s | f${photo.fstop} | ${photo.iso} iso</p> `,
    style: __spreadValues({ margin, height: photo.height, width: photo.width }, cont)
  }, /* @__PURE__ */ import_react2.default.createElement(import_remix_image.default, {
    src: `photos/${photo.file}`,
    alt: photo.caption
  }));
};
var Photo_default = Photo;

// app/components/Gallery/layouts/columns.js
init_react();

// app/components/Gallery/utils/round.js
init_react();
var round = (value, decimals) => {
  if (!decimals)
    decimals = 0;
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
};

// app/components/Gallery/layouts/columns.js
var computeColumnLayout = ({
  photos,
  columns,
  containerWidth,
  margin
}) => {
  let colWidth = (containerWidth - margin * 2 * columns) / columns;
  const photosWithSizes = photos.map((photo) => {
    const newHeight = photo.height / photo.width * colWidth;
    return __spreadProps(__spreadValues({}, photo), {
      width: round(colWidth, 1),
      height: round(newHeight, 1)
    });
  });
  const colLeftPositions = [];
  const colCurrTopPositions = [];
  for (var i = 0; i < columns; i++) {
    colLeftPositions[i] = round(i * (colWidth + margin * 2), 1);
    colCurrTopPositions[i] = 0;
  }
  const photosPositioned = photosWithSizes.map((photo) => {
    const smallestCol = colCurrTopPositions.reduce((acc, item, i2) => {
      acc = item < colCurrTopPositions[acc] ? i2 : acc;
      return acc;
    }, 0);
    photo.top = colCurrTopPositions[smallestCol];
    photo.left = colLeftPositions[smallestCol];
    colCurrTopPositions[smallestCol] = colCurrTopPositions[smallestCol] + photo.height + margin * 2;
    const tallestCol = colCurrTopPositions.reduce((acc, item, i2) => {
      acc = item > colCurrTopPositions[acc] ? i2 : acc;
      return acc;
    }, 0);
    photo.containerHeight = colCurrTopPositions[tallestCol];
    return photo;
  });
  return photosPositioned;
};

// app/components/Gallery/layouts/justified.js
init_react();

// app/components/Gallery/utils/ratio.js
init_react();
var ratio = ({ width, height }) => round(width / height, 2);

// app/components/Gallery/utils/dijkstra.js
init_react();

// app/components/Gallery/utils/binary-heap.js
init_react();
function BinaryHeap(scoreFunction) {
  this.content = [];
  this.scoreFunction = scoreFunction;
}
BinaryHeap.prototype = {
  push: function(element) {
    this.content.push(element);
    this.bubbleUp(this.content.length - 1);
  },
  pop: function() {
    var result = this.content[0];
    var end = this.content.pop();
    if (this.content.length > 0) {
      this.content[0] = end;
      this.sinkDown(0);
    }
    return result;
  },
  remove: function(node) {
    var length = this.content.length;
    for (var i = 0; i < length; i++) {
      if (this.content[i] != node)
        continue;
      var end = this.content.pop();
      if (i == length - 1)
        break;
      this.content[i] = end;
      this.bubbleUp(i);
      this.sinkDown(i);
      break;
    }
  },
  size: function() {
    return this.content.length;
  },
  bubbleUp: function(n) {
    var element = this.content[n], score = this.scoreFunction(element);
    while (n > 0) {
      var parentN = Math.floor((n + 1) / 2) - 1, parent = this.content[parentN];
      if (score >= this.scoreFunction(parent))
        break;
      this.content[parentN] = element;
      this.content[n] = parent;
      n = parentN;
    }
  },
  sinkDown: function(n) {
    var length = this.content.length, element = this.content[n], elemScore = this.scoreFunction(element);
    while (true) {
      var child2N = (n + 1) * 2, child1N = child2N - 1;
      var swap = null;
      if (child1N < length) {
        var child1 = this.content[child1N], child1Score = this.scoreFunction(child1);
        if (child1Score < elemScore)
          swap = child1N;
      }
      if (child2N < length) {
        var child2 = this.content[child2N], child2Score = this.scoreFunction(child2);
        if (child2Score < (swap == null ? elemScore : child1Score))
          swap = child2N;
      }
      if (swap == null)
        break;
      this.content[n] = this.content[swap];
      this.content[swap] = element;
      n = swap;
    }
  }
};

// app/components/Gallery/utils/dijkstra.js
var buildPrecedentsMap = (graph, startNode, endNode) => {
  const precedentsMap = {};
  const visited = {};
  const storedShortestPaths = {};
  storedShortestPaths[startNode] = 0;
  const pQueue = new BinaryHeap(function(n) {
    return n.weight;
  });
  pQueue.push({ id: startNode, weight: 0 });
  while (pQueue.size()) {
    const shortestNode = pQueue.pop();
    const shortestNodeId = shortestNode.id;
    if (visited[shortestNodeId])
      continue;
    const neighboringNodes = graph(shortestNodeId) || {};
    visited[shortestNodeId] = 1;
    for (let neighbor in neighboringNodes) {
      const newTotalWeight = shortestNode.weight + neighboringNodes[neighbor];
      if (typeof storedShortestPaths[neighbor] === "undefined" || storedShortestPaths[neighbor] > newTotalWeight) {
        storedShortestPaths[neighbor] = newTotalWeight;
        pQueue.push({ id: neighbor, weight: newTotalWeight });
        precedentsMap[neighbor] = shortestNodeId;
      }
    }
  }
  if (typeof storedShortestPaths[endNode] === "undefined") {
    throw new Error(`There is no path from ${startNode} to ${endNode}`);
  }
  return precedentsMap;
};
var getPathFromPrecedentsMap = (precedentsMap, endNode) => {
  const nodes = [];
  let n = endNode;
  let precedent;
  while (n) {
    nodes.push(n);
    precedent = precedentsMap[n];
    n = precedentsMap[n];
  }
  return nodes.reverse();
};
var findShortestPath = (graph, startNode, endNode) => {
  const precedentsMap = buildPrecedentsMap(graph, startNode, endNode);
  return getPathFromPrecedentsMap(precedentsMap, endNode);
};

// app/components/Gallery/layouts/justified.js
var getCommonHeight = (row, containerWidth, margin) => {
  const rowWidth = containerWidth - row.length * (margin * 2);
  const totalAspectRatio = row.reduce((acc, photo) => acc + ratio(photo), 0);
  return rowWidth / totalAspectRatio;
};
var cost = (photos, i, j, width, targetHeight, margin) => {
  const row = photos.slice(i, j);
  const commonHeight = getCommonHeight(row, width, margin);
  return Math.pow(Math.abs(commonHeight - targetHeight), 2);
};
var makeGetNeighbors = (targetHeight, containerWidth, photos, limitNodeSearch, margin) => (start) => {
  const results = {};
  start = +start;
  results[+start] = 0;
  for (let i = start + 1; i < photos.length + 1; ++i) {
    if (i - start > limitNodeSearch)
      break;
    results[i.toString()] = cost(photos, start, i, containerWidth, targetHeight, margin);
  }
  return results;
};
var computeRowLayout = ({
  containerWidth,
  limitNodeSearch,
  targetRowHeight,
  margin,
  photos
}) => {
  const getNeighbors = makeGetNeighbors(targetRowHeight, containerWidth, photos, limitNodeSearch, margin);
  let path = findShortestPath(getNeighbors, "0", photos.length);
  path = path.map((node) => +node);
  for (let i = 1; i < path.length; ++i) {
    const row = photos.slice(path[i - 1], path[i]);
    const height = getCommonHeight(row, containerWidth, margin);
    for (let j = path[i - 1]; j < path[i]; ++j) {
      photos[j].width = round(height * ratio(photos[j]), 1);
      photos[j].height = height;
    }
  }
  return photos;
};

// app/components/Gallery/utils/findIdealNodeSearch.js
init_react();
var findIdealNodeSearch = ({ targetRowHeight, containerWidth }) => {
  const rowAR = containerWidth / targetRowHeight;
  return round(rowAR / 1.5) + 8;
};

// app/components/Gallery/Gallery.tsx
var import_react4 = __toESM(require("lightgallery/react"));
var import_thumbnail = __toESM(require("lightgallery/plugins/thumbnail"));
var import_zoom = __toESM(require("lightgallery/plugins/zoom"));
var import_hash = __toESM(require("lightgallery/plugins/hash"));
var import_share = __toESM(require("lightgallery/plugins/share"));
var Gallery = import_react3.default.memo(function Gallery2({
  photos,
  onClick,
  direction = "row",
  margin = 2,
  limitNodeSearch,
  targetRowHeight = 300,
  columns,
  renderImage
}) {
  const [containerWidth, setContainerWidth] = (0, import_react3.useState)(0);
  const galleryEl = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    let animationFrameID = null;
    const observer = new import_resize_observer_polyfill.default((entries) => {
      const newWidth = entries[0].contentRect.width;
      if (containerWidth !== newWidth) {
        animationFrameID = window.requestAnimationFrame(() => {
          setContainerWidth(Math.floor(newWidth));
        });
      }
    });
    observer.observe(galleryEl.current);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrameID);
    };
  });
  const handleClick = (event, { index: index2 }) => {
    onClick(event, {
      index: index2,
      photo: photos[index2],
      previous: photos[index2 - 1] || null,
      next: photos[index2 + 1] || null
    });
  };
  if (!containerWidth)
    return /* @__PURE__ */ import_react3.default.createElement("div", {
      ref: galleryEl
    }, "\xA0");
  const width = containerWidth - 1;
  let galleryStyle, thumbs;
  if (direction === "row") {
    if (typeof limitNodeSearch === "function") {
      limitNodeSearch = limitNodeSearch(containerWidth);
    }
    if (typeof targetRowHeight === "function") {
      targetRowHeight = targetRowHeight(containerWidth);
    }
    if (limitNodeSearch === void 0) {
      limitNodeSearch = 2;
      if (containerWidth >= 450) {
        limitNodeSearch = findIdealNodeSearch({
          containerWidth,
          targetRowHeight
        });
      }
    }
    galleryStyle = { display: "flex", flexWrap: "wrap", flexDirection: "row" };
    thumbs = computeRowLayout({
      containerWidth: width,
      limitNodeSearch,
      targetRowHeight,
      margin,
      photos
    });
  }
  if (direction === "column") {
    if (typeof columns === "function") {
      columns = columns(containerWidth);
    }
    if (columns === void 0) {
      columns = 1;
      if (containerWidth >= 500)
        columns = 2;
      if (containerWidth >= 900)
        columns = 3;
      if (containerWidth >= 1500)
        columns = 4;
    }
    galleryStyle = { position: "relative" };
    thumbs = computeColumnLayout({
      containerWidth: width,
      columns,
      margin,
      photos
    });
    galleryStyle.height = thumbs[thumbs.length - 1].containerHeight;
  }
  const renderComponent = renderImage || Photo_default;
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "react-photo-gallery--gallery"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    ref: galleryEl,
    style: galleryStyle
  }, /* @__PURE__ */ import_react3.default.createElement(import_react4.default, {
    plugins: [import_thumbnail.default, import_zoom.default, import_hash.default, import_share.default],
    mode: "lg-fade",
    licenseKey: "9DFC44F2-0E4543E3-83FD2640-996B2792"
  }, thumbs.map((thumb, index2) => {
    const _a = thumb, { left, top, containerHeight } = _a, photo = __objRest(_a, ["left", "top", "containerHeight"]);
    return renderComponent({
      left,
      top,
      key: thumb.key || thumb.src,
      containerHeight,
      index: index2,
      margin,
      direction,
      onClick: onClick ? handleClick : null,
      photo
    });
  }))));
});
var Gallery_default = Gallery;

// route:/Users/travisharris/code/personalSite/app/routes/photography/index.tsx
var import_framer_motion = require("framer-motion");
var import_react_use2 = require("react-use");

// app/components/photoData.json
var photoData_default = [
  {
    name: "gucci_sun",
    file: "gucci_sun.jpg",
    caption: "Gucci Starting Outside",
    createdAt: 1639202419134,
    width: 2048,
    height: 1222,
    artist: "travis harris",
    shutterSpeed: "1/60",
    focalLength: "85",
    fstop: 1.8,
    lens: "FE 85mm F1.8",
    cameraMake: "SONY",
    cameraModel: "ILCE-1",
    iso: 100
  },
  {
    name: "DeerLights",
    file: "deer_lights.jpg",
    caption: "The Christmas Deer",
    createdAt: 1639202690119,
    width: 2048,
    height: 1365,
    artist: "travis harris",
    shutterSpeed: "1/60",
    focalLength: "55",
    fstop: 2.8,
    lens: "24-70mm F2.8 DG DN | Art 019",
    cameraMake: "SONY",
    cameraModel: "ILCE-1",
    iso: 1e3
  },
  {
    name: "pikebusy",
    file: "pikebusy.jpg",
    caption: "Busy night at pike place",
    createdAt: 1639202739197,
    width: 2048,
    height: 1365,
    artist: "travis harris",
    shutterSpeed: "4/1",
    focalLength: "43",
    fstop: 8,
    lens: "24-70mm F2.8 DG DN | Art 019",
    cameraMake: "SONY",
    cameraModel: "ILCE-1",
    iso: 100
  },
  {
    name: "pikelow",
    file: "pikelow.jpg",
    caption: "Pike Place Closing Time",
    createdAt: 1639202757895,
    width: 2048,
    height: 1365,
    artist: "travis harris",
    shutterSpeed: "2/1",
    focalLength: "24",
    fstop: 14,
    lens: "24-70mm F2.8 DG DN | Art 019",
    cameraMake: "SONY",
    cameraModel: "ILCE-1",
    iso: 500
  },
  {
    name: "kerrysunset",
    file: "kerrysunset.jpg",
    caption: "Sunset at Kerry Park",
    createdAt: 1639202785507,
    width: 2048,
    height: 1152,
    artist: "travis harris",
    shutterSpeed: "1/8",
    focalLength: "100",
    fstop: 8,
    lens: "FE 100-400mm F4.5-5.6 GM OSS",
    cameraMake: "SONY",
    cameraModel: "ILCE-1",
    iso: 100
  },
  {
    name: "ferris_wheel_bw",
    file: "ferris_wheel_bw.jpg",
    caption: "Ferris Wheel",
    createdAt: 1639948909825,
    width: 1365,
    height: 2048,
    artist: "travis harris",
    shutterSpeed: "1/320",
    focalLength: "36",
    fstop: 2.8,
    lens: "24-70mm F2.8 DG DN | Art 019",
    cameraMake: "SONY",
    cameraModel: "ILCE-1",
    iso: 100
  },
  {
    name: "Rainier",
    file: "rainier.jpg",
    caption: "Mt Rainier From Lake Tapps",
    createdAt: 1644645619134,
    width: 8173,
    height: 4597,
    artist: "travis harris",
    shutterSpeed: "1/20",
    focalLength: "96",
    fstop: 8,
    lens: "FE 70-200mm F2.8 GM OSS II",
    cameraMake: "SONY",
    cameraModel: "ILCE-1",
    iso: 100
  },
  {
    name: "SelfPhoto",
    file: "selfphoto.jpg",
    caption: "",
    createdAt: 1641856990761,
    width: 1024,
    height: 683,
    artist: "travis harris",
    shutterSpeed: "1/160",
    focalLength: "170",
    fstop: 2.8,
    lens: "FE 70-200mm F2.8 GM OSS II",
    cameraMake: "SONY",
    cameraModel: "ILCE-1",
    iso: 100
  },
  {
    name: "vinh_corner_dev_17",
    file: "vinh_corner_dev_17.jpg",
    caption: "Christmas in the City",
    createdAt: 1639794520424,
    width: 1365,
    height: 2048,
    artist: "travis harris",
    shutterSpeed: "1/100",
    focalLength: "50",
    fstop: 1.2,
    lens: "FE 50mm F1.2 GM",
    cameraMake: "SONY",
    cameraModel: "ILCE-1",
    iso: 400
  }
];

// route:/Users/travisharris/code/personalSite/app/routes/photography/index.tsx
var meta2 = () => {
  return {
    title: "Travis Harris - Photography",
    description: `Hi, I'm Travis. I'm an engineering manager at Microsoft, a Front End Developer and an Ameteur Photographer`
  };
};
function links2() {
  return [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.3.0/css/lightgallery-bundle.min.css"
    }
  ];
}
function Index2() {
  const medium = (0, import_react_use2.useMedia)("(min-width: 720px)");
  const large = (0, import_react_use2.useMedia)("(min-width: 1728px)");
  let cols = 1;
  if (large) {
    cols = 3;
  } else if (medium) {
    cols = 2;
  }
  return /* @__PURE__ */ React.createElement(import_framer_motion.motion.div, {
    className: "photography-container main-wrapper",
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { ease: "easeInOut", duration: 0.6 }
  }, /* @__PURE__ */ React.createElement(Gallery_default, {
    photos: photoData_default.sort((a, b) => b.createdAt - a.createdAt),
    direction: "column",
    columns: cols
  }));
}

// route:/Users/travisharris/code/personalSite/app/routes/blog/$post.tsx
var post_exports = {};
__export(post_exports, {
  default: () => BlogPost
});
init_react();
function BlogPost() {
  return /* @__PURE__ */ React.createElement("div", null, "Loading");
}

// route:/Users/travisharris/code/personalSite/app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog
});
init_react();
function Blog() {
  return /* @__PURE__ */ React.createElement("div", null, "Blog");
}

// route:/Users/travisharris/code/personalSite/app/routes/api/image.ts
var image_exports = {};
__export(image_exports, {
  loader: () => loader
});
init_react();
var import_server2 = require("remix-image/server");
var config = {
  selfUrl: "http://localhost:3000",
  cache: new import_server2.DiskCache()
};
var loader = ({ request }) => {
  return (0, import_server2.imageLoader)(config, request);
};

// route:/Users/travisharris/code/personalSite/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  meta: () => meta3
});
init_react();
var import_framer_motion2 = require("framer-motion");
var import_react_rotating_text = __toESM(require("react-rotating-text"));
var meta3 = () => {
  return {
    title: "Travis Harris"
  };
};
var index = () => {
  return /* @__PURE__ */ React.createElement(import_framer_motion2.motion.div, {
    className: "home-container main-wrapper",
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { ease: "easeInOut", duration: 0.3 }
  }, /* @__PURE__ */ React.createElement("section", {
    className: "landing"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "landing-content",
    "data-aos": "fade-up",
    "data-aos-delay": "200"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text"
  }, /* @__PURE__ */ React.createElement("h1", null, "I'm Travis Harris"), /* @__PURE__ */ React.createElement("p", null, "A", " ", /* @__PURE__ */ React.createElement(import_react_rotating_text.default, {
    items: ["Developer", "Dev Manager", "Photographer", "Gamer"]
  }), " ", "based in Seattle, Washington")))));
};
var routes_default = index;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "bd87f639", "entry": { "module": "/build/entry.client-5NVUNSMK.js", "imports": ["/build/_shared/chunk-FQ76AOSE.js", "/build/_shared/chunk-6FVCLLRC.js", "/build/_shared/chunk-VQYBAUSQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-RAQ4TL45.js", "imports": ["/build/_shared/chunk-MQDMDXLW.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/api/image": { "id": "routes/api/image", "parentId": "root", "path": "api/image", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/api/image-QXGM2SNV.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$post": { "id": "routes/blog/$post", "parentId": "root", "path": "blog/:post", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$post-32PJDJYE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-SG4VILPI.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-WLI5YAXL.js", "imports": ["/build/_shared/chunk-7VSQBK5N.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/photography": { "id": "routes/photography", "parentId": "root", "path": "photography", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/photography-RRN6KQ7D.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/photography/index": { "id": "routes/photography/index", "parentId": "routes/photography", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/photography/index-QGYWFMIB.js", "imports": ["/build/_shared/chunk-MQDMDXLW.js", "/build/_shared/chunk-7VSQBK5N.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-BD87F639.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/photography": {
    id: "routes/photography",
    parentId: "root",
    path: "photography",
    index: void 0,
    caseSensitive: void 0,
    module: photography_exports
  },
  "routes/photography/index": {
    id: "routes/photography/index",
    parentId: "routes/photography",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: photography_exports2
  },
  "routes/blog/$post": {
    id: "routes/blog/$post",
    parentId: "root",
    path: "blog/:post",
    index: void 0,
    caseSensitive: void 0,
    module: post_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: true,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/api/image": {
    id: "routes/api/image",
    parentId: "root",
    path: "api/image",
    index: void 0,
    caseSensitive: void 0,
    module: image_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy90cmF2aXNoYXJyaXMvY29kZS9wZXJzb25hbFNpdGUvYXBwL3Jvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvR2xvYmFsL2dsb2JhbHMudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL05hdi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvR2xvYmFsL2ljb24udHN4IiwgInJvdXRlOi9Vc2Vycy90cmF2aXNoYXJyaXMvY29kZS9wZXJzb25hbFNpdGUvYXBwL3JvdXRlcy9waG90b2dyYXBoeS50c3giLCAicm91dGU6L1VzZXJzL3RyYXZpc2hhcnJpcy9jb2RlL3BlcnNvbmFsU2l0ZS9hcHAvcm91dGVzL3Bob3RvZ3JhcGh5L2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9HYWxsZXJ5L0dhbGxlcnkudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0dhbGxlcnkvUGhvdG8udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0dhbGxlcnkvbGF5b3V0cy9jb2x1bW5zLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0dhbGxlcnkvdXRpbHMvcm91bmQuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvR2FsbGVyeS9sYXlvdXRzL2p1c3RpZmllZC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9HYWxsZXJ5L3V0aWxzL3JhdGlvLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0dhbGxlcnkvdXRpbHMvZGlqa3N0cmEuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvR2FsbGVyeS91dGlscy9iaW5hcnktaGVhcC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9HYWxsZXJ5L3V0aWxzL2ZpbmRJZGVhbE5vZGVTZWFyY2guanMiLCAicm91dGU6L1VzZXJzL3RyYXZpc2hhcnJpcy9jb2RlL3BlcnNvbmFsU2l0ZS9hcHAvcm91dGVzL2Jsb2cvJHBvc3QudHN4IiwgInJvdXRlOi9Vc2Vycy90cmF2aXNoYXJyaXMvY29kZS9wZXJzb25hbFNpdGUvYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvdHJhdmlzaGFycmlzL2NvZGUvcGVyc29uYWxTaXRlL2FwcC9yb3V0ZXMvYXBpL2ltYWdlLnRzIiwgInJvdXRlOi9Vc2Vycy90cmF2aXNoYXJyaXMvY29kZS9wZXJzb25hbFNpdGUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvdHJhdmlzaGFycmlzL2NvZGUvcGVyc29uYWxTaXRlL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy90cmF2aXNoYXJyaXMvY29kZS9wZXJzb25hbFNpdGUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy90cmF2aXNoYXJyaXMvY29kZS9wZXJzb25hbFNpdGUvYXBwL3JvdXRlcy9waG90b2dyYXBoeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL3RyYXZpc2hhcnJpcy9jb2RlL3BlcnNvbmFsU2l0ZS9hcHAvcm91dGVzL3Bob3RvZ3JhcGh5L2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvdHJhdmlzaGFycmlzL2NvZGUvcGVyc29uYWxTaXRlL2FwcC9yb3V0ZXMvYmxvZy8kcG9zdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3RyYXZpc2hhcnJpcy9jb2RlL3BlcnNvbmFsU2l0ZS9hcHAvcm91dGVzL2Jsb2cvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy90cmF2aXNoYXJyaXMvY29kZS9wZXJzb25hbFNpdGUvYXBwL3JvdXRlcy9hcGkvaW1hZ2UudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL3RyYXZpc2hhcnJpcy9jb2RlL3BlcnNvbmFsU2l0ZS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvcGhvdG9ncmFwaHlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bob3RvZ3JhcGh5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBob3RvZ3JhcGh5XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9waG90b2dyYXBoeS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcGhvdG9ncmFwaHkvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9waG90b2dyYXBoeVwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvJHBvc3RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvJHBvc3RcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy86cG9zdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYXBpL2ltYWdlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hcGkvaW1hZ2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXBpL2ltYWdlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE1ldGFGdW5jdGlvbixcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlQ2F0Y2gsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuaW1wb3J0IGFvc1N0eWxlIGZyb20gXCJhb3MvZGlzdC9hb3MuY3NzXCI7XG5pbXBvcnQgZmF2aWNvbiBmcm9tIFwiLi9jb21wb25lbnRzL2Zhdmljb24ucG5nXCI7XG5pbXBvcnQgQW9zIGZyb20gXCJhb3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBhb3NTdHlsZSB9LFxuICAgIHsgcmVsOiBcImljb25cIiwgaHJlZjogZmF2aWNvbiB9LFxuICBdO1xufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGBIaSwgSSdtIFRyYXZpcyFgO1xuICByZXR1cm4ge1xuICAgIGRlc2NyaXB0aW9uLFxuICAgIGtleXdvcmRzOlxuICAgICAgXCJ0cmF2aXMsbWljcm9zb2Z0LGRldmVsb3Blcixzb2Z0d2FyZSxyZWFjdCxqYXZhc2NyaXB0LHR5cGVzY3JpcHQscGhvdG9ncmFwaHlcIixcbiAgICBcInR3aXR0ZXI6Y2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcbiAgICBcInR3aXR0ZXI6Y3JlYXRvclwiOiBcIkBoYXJ0cmEzNFwiLFxuICAgIFwidHdpdHRlcjpzaXRlXCI6IFwiQGhhcnRyYTM0XCIsXG4gICAgXCJ0d2l0dGVyOnRpdGxlXCI6IFwiVHJhdmlzIEhhcnJpc1wiLFxuICAgIFwidHdpdHRlcjpkZXNjcmlwdGlvblwiOiBkZXNjcmlwdGlvbixcbiAgfTtcbn07XG5cblxuY29uc3QgTGF5b3V0OiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBBbmltYXRlIG9uIHNjcm9sbCBsaWJyYXJ5IGluaXRpYWxpemF0aW9uIHNldHRpbmdzXG4gICAgQW9zLmluaXQoe1xuICAgICAgZHVyYXRpb246IDgwMCxcbiAgICAgIGVhc2luZzogXCJlYXNlLWluLW91dFwiLFxuICAgICAgb25jZTogdHJ1ZSxcbiAgICAgIG9mZnNldDogMTAwLFxuICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLXdyYXBwZXJcIj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vZG9jcy9lbi92MS9hcGkvY29udmVudGlvbnMjZXJyb3Jib3VuZGFyeVxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT1cIkVycm9yIVwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlRoZXJlIHdhcyBhbiBlcnJvcjwvaDE+XG4gICAgICAgIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEhleSwgZGV2ZWxvcGVyLCB5b3Ugc2hvdWxkIHJlcGxhY2UgdGhpcyB3aXRoIHdoYXQgeW91IHdhbnQgeW91ciB1c2Vyc1xuICAgICAgICAgIHRvIHNlZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vZG9jcy9lbi92MS9hcGkvY29udmVudGlvbnMjY2F0Y2hib3VuZGFyeVxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGxldCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuXG4gIGxldCBtZXNzYWdlO1xuICBzd2l0Y2ggKGNhdWdodC5zdGF0dXMpIHtcbiAgICBjYXNlIDQwMTpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIE9vcHMhIExvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IHlvdSBkbyBub3QgaGF2ZSBhY2Nlc3NcbiAgICAgICAgICB0by5cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDA0OlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+T29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgZG9lcyBub3QgZXhpc3QuPC9wPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihjYXVnaHQuZGF0YSB8fCBjYXVnaHQuc3RhdHVzVGV4dCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cbiAgICAgIDxoMT5cbiAgICAgICAge2NhdWdodC5zdGF0dXN9OiB7Y2F1Z2h0LnN0YXR1c1RleHR9XG4gICAgICA8L2gxPlxuICAgICAge21lc3NhZ2V9XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRG9jdW1lbnQoe1xuICBjaGlsZHJlbixcbiAgdGl0bGUsXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHRpdGxlPzogc3RyaW5nO1xufSkge1xuICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVik7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IEZhTGlua2VkaW5JbiwgRmFUd2l0dGVyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBBaUZpbGxHaXRodWIgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7IGdpdEh1YlVSTCwgbGlua2VkSW5VUkwsIHR3aXR0ZXJVUkwgfSBmcm9tIFwiLi9HbG9iYWwvZ2xvYmFsc1wiO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB5ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xuICByZXR1cm4gKFxuICAgIDxmb290ZXI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb290ZXIgc29jaWFsLW1lZGlhXCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLWljb25cIlxuICAgICAgICAgIGhyZWY9e2dpdEh1YlVSTH1cbiAgICAgICAgICB0aXRsZT1cIkdpdEh1YlwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxBaUZpbGxHaXRodWIgdGl0bGU9XCJHaXRIdWIgaWNvblwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb290ZXItaWNvblwiXG4gICAgICAgICAgaHJlZj17bGlua2VkSW5VUkx9XG4gICAgICAgICAgdGl0bGU9XCJMaW5rZWRJblwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGYUxpbmtlZGluSW4gdGl0bGU9XCJMaW5rZWRJbiBpY29uXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvb3Rlci1pY29uXCJcbiAgICAgICAgICBocmVmPXt0d2l0dGVyVVJMfVxuICAgICAgICAgIHRpdGxlPVwiVHdpdHRlclwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGYVR3aXR0ZXIgdGl0bGU9XCJUd2l0dGVyIGljb25cIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxwPiZjb3B5OyB7eWVhcn0gVHJhdmlzIEhhcnJpczwvcD5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsICJleHBvcnQgY29uc3QgZ2l0SHViVVJMID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9oYXJ0cmEzNDQnO1xuZXhwb3J0IGNvbnN0IGxpbmtlZEluVVJMID0gJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi90cmF2aXMtaGFycmlzLyc7XG5leHBvcnQgY29uc3QgdHdpdHRlclVSTCA9ICdodHRwczovL3d3dy50d2l0dGVyLmNvbS9oYXJ0cmEzNCdcbmV4cG9ydCBjb25zdCB0d2l0dGVyVGFnID0gJ0BoYXJ0cmEzNCciLCAiaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcbmltcG9ydCB7IHVzZUxvY2tCb2R5U2Nyb2xsLCB1c2VUb2dnbGUsIHVzZU1lZGlhIH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuaW1wb3J0IHsgaGFtYnVyZ2VySWNvbiwgY2xvc2VJY29uLCBteUxvZ28gfSBmcm9tIFwiLi4vR2xvYmFsL2ljb25cIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBtZWRpYVF1ZXJ5ID0gdXNlTWVkaWEoXCIobWluLXdpZHRoOiA1NzZweClcIik7XG4gIGNvbnN0IFtuYXZPcGVuLCB0b2dnbGVOYXZdID0gdXNlVG9nZ2xlKGZhbHNlKTtcblxuICBjb25zdCBuYXZPcGVuViA9IG5hdk9wZW4gJiYgIW1lZGlhUXVlcnk7XG4gIHVzZUxvY2tCb2R5U2Nyb2xsKG5hdk9wZW5WKTtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17bmF2T3BlblYgPyBcImFjdGl2ZVwiIDogdW5kZWZpbmVkfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImhlYWRlci1sb2dvXCI+XG4gICAgICAgICAgICB7bXlMb2dvfVxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVOYXZ9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLW1haW4tbmF2XCJcbiAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgeyFuYXZPcGVuViA/IGhhbWJ1cmdlckljb24gOiBjbG9zZUljb259XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8TmF2IGhhbmRsZVNob3dIaWRlPXt0b2dnbGVOYXZ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsICJpbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBGYUxpbmtlZGluSW4sIEZhVHdpdHRlciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgQWlGaWxsR2l0aHViIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyBnaXRIdWJVUkwsIGxpbmtlZEluVVJMLCB0d2l0dGVyVVJMIH0gZnJvbSBcIi4uL0dsb2JhbC9nbG9iYWxzXCI7XG5cbmNvbnN0IE5hdiA9ICh7IGhhbmRsZVNob3dIaWRlIH06IHsgaGFuZGxlU2hvd0hpZGU6ICgpID0+IGFueSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG5hdiBvbkNsaWNrPXtoYW5kbGVTaG93SGlkZX0gY2xhc3NOYW1lPVwibWFpbi1uYXZcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL1wiPkhvbWU8L05hdkxpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9waG90b2dyYXBoeVwiPlBob3RvZ3JhcGh5PC9OYXZMaW5rPlxuICAgICAgICA8L2xpPlxuXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtc29jaWFsLW1lZGlhXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1zb2NpYWwtaWNvblwiXG4gICAgICAgICAgICBocmVmPXtnaXRIdWJVUkx9XG4gICAgICAgICAgICB0aXRsZT1cIkdpdEh1YlwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFpRmlsbEdpdGh1YiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LXNvY2lhbC1pY29uXCJcbiAgICAgICAgICAgIGhyZWY9e2xpbmtlZEluVVJMfVxuICAgICAgICAgICAgdGl0bGU9XCJMaW5rZWRJblwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZhTGlua2VkaW5JbiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LXNvY2lhbC1pY29uXCJcbiAgICAgICAgICAgIGhyZWY9e3R3aXR0ZXJVUkx9XG4gICAgICAgICAgICB0aXRsZT1cIlR3aXR0ZXJcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGYVR3aXR0ZXIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIiwgIi8vdmFyaWFibGVzIGZvciBTVkcgaWNvbnNcblxuLy9tYWluIHNpdGUgbmF2IGhhbWJ1cmdlciBpY29uXG5leHBvcnQgY29uc3QgaGFtYnVyZ2VySWNvbiA9IChcbiAgPHN2Z1xuICAgIGFyaWEtbGFiZWw9XCJtZW51IGhhbWJ1cmdlciBpY29uXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB3aWR0aD1cIjI0XCJcbiAgICBoZWlnaHQ9XCIyNFwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gID5cbiAgICA8cGF0aCBkPVwiTTI0IDZoLTI0di00aDI0djR6bTAgNGgtMjR2NGgyNHYtNHptMCA4aC0yNHY0aDI0di00elwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuLy9tYWluIHNpdGUgbmF2IGNsb3NlIGljb25cbmV4cG9ydCBjb25zdCBjbG9zZUljb24gPSAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9XCJjbG9zZUljb25cIlxuICAgIGFyaWEtbGFiZWw9XCJtZW51IGNsb3NlIGljb25cIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHdpZHRoPVwiMjRcIlxuICAgIGhlaWdodD1cIjI0XCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgPlxuICAgIDxwYXRoIGQ9XCJNMjQgMjAuMTg4bC04LjMxNS04LjIwOSA4LjItOC4yODItMy42OTctMy42OTctOC4yMTIgOC4zMTgtOC4zMS04LjIwMy0zLjY2NiAzLjY2NiA4LjMyMSA4LjI0LTguMjA2IDguMzEzIDMuNjY2IDMuNjY2IDguMjM3LTguMzE4IDguMjg1IDguMjAzelwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IG15TG9nbyA9IChcbiAgPHN2Z1xuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHZpZXdCb3g9XCIwIDAgMzc5LjA0IDQ0NC4xMlwiXG4gICAgaGVpZ2h0PVwiNDBweFwiXG4gICAgd2lkdGg9XCI0MHB4XCJcbiAgPlxuICAgIDx0aXRsZT5UcmF2aXMgSGFycmlzIExvZ288L3RpdGxlPlxuICAgIDxkZWZzPjwvZGVmcz5cbiAgICA8ZyBpZD1cIkxheWVyXzJcIiBkYXRhLW5hbWU9XCJMYXllciAyXCI+XG4gICAgICA8ZyBpZD1cIkxheWVyXzEtMlwiIGRhdGEtbmFtZT1cIkxheWVyIDFcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsPVwiIzMzNjY5OVwiXG4gICAgICAgICAgZD1cIk0xMTcuNjEsMTQ2LjlWMzgzLjc0TDc2LjE4LDM0Mi4zMVYxODUuMTZBNDgwLjQzLDQ4MC40MywwLDAsMSwwLDE2MC4wN1YxMDkuOUE0MzQsNDM0LDAsMCwwLDc2LjE4LDEzOFE5Ni42MSwxNDMuNDMsMTE3LjYxLDE0Ni45WlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbD1cIiMzMzY2OTlcIlxuICAgICAgICAgIGQ9XCJNMzc5LDExMC44N3Y1MEE0ODAuMzIsNDgwLjMyLDAsMCwxLDMwOS41MSwxODRWMzQyTDI2OC4wOCwzODMuNFYxNDYuMTFxMjEtMy43MSw0MS40My05LjM4QTQzNy41LDQzNy41LDAsMCwwLDM3OSwxMTAuODdaXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsPVwiIzMzNjY5OVwiXG4gICAgICAgICAgZD1cIk0zNzksMS4zMVY1OS42QTM5MC41OSwzOTAuNTksMCwwLDEsMzA5LjUxLDg5LDM5MS41MiwzOTEuNTIsMCwwLDEsMjY4LjA4LDk5LjZhMzk3LjU5LDM5Ny41OSwwLDAsMS01My4yNyw2LjhxLTEyLjA5Ljc1LTI0LjI4Ljc0dC0yNC4yOS0uNzRhMzk0LjI2LDM5NC4yNiwwLDAsMS00OC42My01LjkyLDM5NC44OSwzOTQuODksMCwwLDEtNDEuNDMtMTBBMzkwLjg4LDM5MC44OCwwLDAsMSwwLDU4LjVWMEEzNDUuMTcsMzQ1LjE3LDAsMCwwLDc2LjE4LDM3LjhhMzQzLDM0MywwLDAsMCw0MS40MywxMS42NCwzNDQsMzQ0LDAsMCwwLDQ4LjYzLDYuODZxMTIsLjg0LDI0LjI5Ljg0dDI0LjI4LS44NGEzNDUuNTksMzQ1LjU5LDAsMCwwLDUzLjI3LTcuODksMzQzLjE2LDM0My4xNiwwLDAsMCw0MS40My0xMi4yN0EzNDQuMzgsMzQ0LjM4LDAsMCwwLDM3OSwxLjMxWlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxyZWN0XG4gICAgICAgICAgZmlsbD1cIiMzMzY2OTlcIlxuICAgICAgICAgIHg9XCIxMTcuNjFcIlxuICAgICAgICAgIHk9XCIyNDUuMzhcIlxuICAgICAgICAgIHdpZHRoPVwiMTUwLjQ3XCJcbiAgICAgICAgICBoZWlnaHQ9XCI0NC4yOVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbD1cIiMzMzY2OTlcIlxuICAgICAgICAgIGQ9XCJNMjE0LjgxLDEwNi40VjIxMy4yN0gxNjYuMjRWMTA2LjRxMTIuMDkuNzUsMjQuMjkuNzRUMjE0LjgxLDEwNi40WlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwb2x5Z29uXG4gICAgICAgICAgZmlsbD1cIiMzMzY2OTlcIlxuICAgICAgICAgIHBvaW50cz1cIjIxNC44MSAzMjUuNjQgMjE0LjgxIDQyMC44MiAxOTEuNTEgNDQ0LjEyIDE2Ni4yNCA0MTguODUgMTY2LjI0IDMyNS42NCAyMTQuODEgMzI1LjY0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICA8L2c+XG4gIDwvc3ZnPlxuKTtcbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gPE91dGxldCAvPjtcbn1cbiIsICJpbXBvcnQgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dhbGxlcnkvR2FsbGVyeVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZU1lZGlhIH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9waG90b0RhdGEuanNvblwiO1xuXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJUcmF2aXMgSGFycmlzIC0gUGhvdG9ncmFwaHlcIixcbiAgICBkZXNjcmlwdGlvbjogYEhpLCBJJ20gVHJhdmlzLiBJJ20gYW4gZW5naW5lZXJpbmcgbWFuYWdlciBhdCBNaWNyb3NvZnQsIGEgRnJvbnQgRW5kIERldmVsb3BlciBhbmQgYW4gQW1ldGV1ciBQaG90b2dyYXBoZXJgLFxuICB9O1xufTtcbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9saWdodGdhbGxlcnkvMi4zLjAvY3NzL2xpZ2h0Z2FsbGVyeS1idW5kbGUubWluLmNzc1wiLFxuICAgIH0sXG4gIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBtZWRpdW0gPSB1c2VNZWRpYShcIihtaW4td2lkdGg6IDcyMHB4KVwiKTtcbiAgY29uc3QgbGFyZ2UgPSB1c2VNZWRpYShcIihtaW4td2lkdGg6IDE3MjhweClcIik7XG5cbiAgbGV0IGNvbHMgPSAxO1xuICBpZiAobGFyZ2UpIHtcbiAgICBjb2xzID0gMztcbiAgfSBlbHNlIGlmIChtZWRpdW0pIHtcbiAgICBjb2xzID0gMjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBjbGFzc05hbWU9XCJwaG90b2dyYXBoeS1jb250YWluZXIgbWFpbi13cmFwcGVyXCJcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICB0cmFuc2l0aW9uPXt7IGVhc2U6IFwiZWFzZUluT3V0XCIsIGR1cmF0aW9uOiAwLjYgfX1cbiAgICA+XG4gICAgICA8R2FsbGVyeVxuICAgICAgICBwaG90b3M9e2RhdGEuc29ydCgoYSwgYikgPT4gYi5jcmVhdGVkQXQgLSBhLmNyZWF0ZWRBdCkgYXMgYW55fVxuICAgICAgICBkaXJlY3Rpb249e1wiY29sdW1uXCJ9XG4gICAgICAgIGNvbHVtbnM9e2NvbHN9XG4gICAgICAvPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSBcInJlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbFwiO1xuaW1wb3J0IFBob3RvLCB7IFBob3RvUHJvcHMgfSBmcm9tIFwiLi9QaG90b1wiO1xuaW1wb3J0IHsgY29tcHV0ZUNvbHVtbkxheW91dCB9IGZyb20gXCIuL2xheW91dHMvY29sdW1uc1wiO1xuaW1wb3J0IHsgY29tcHV0ZVJvd0xheW91dCB9IGZyb20gXCIuL2xheW91dHMvanVzdGlmaWVkXCI7XG5pbXBvcnQgeyBmaW5kSWRlYWxOb2RlU2VhcmNoIH0gZnJvbSBcIi4vdXRpbHMvZmluZElkZWFsTm9kZVNlYXJjaFwiO1xuaW1wb3J0IExpZ2h0R2FsbGVyeSBmcm9tIFwibGlnaHRnYWxsZXJ5L3JlYWN0XCI7XG5pbXBvcnQgbGdUaHVtYm5haWwgZnJvbSBcImxpZ2h0Z2FsbGVyeS9wbHVnaW5zL3RodW1ibmFpbFwiO1xuaW1wb3J0IGxnWm9vbSBmcm9tIFwibGlnaHRnYWxsZXJ5L3BsdWdpbnMvem9vbVwiO1xuaW1wb3J0IGxnSGFzaCBmcm9tICdsaWdodGdhbGxlcnkvcGx1Z2lucy9oYXNoJztcbmltcG9ydCBsZ1NoYXJlIGZyb20gJ2xpZ2h0Z2FsbGVyeS9wbHVnaW5zL3NoYXJlJztcbmNvbnN0IEdhbGxlcnkgPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIEdhbGxlcnkoe1xuICBwaG90b3MsXG4gIG9uQ2xpY2ssXG4gIGRpcmVjdGlvbiA9IFwicm93XCIsXG4gIG1hcmdpbiA9IDIsXG4gIGxpbWl0Tm9kZVNlYXJjaCxcbiAgdGFyZ2V0Um93SGVpZ2h0ID0gMzAwLFxuICBjb2x1bW5zLFxuICByZW5kZXJJbWFnZSxcbn06IEdhbGxlcnlQcm9wVHlwZXMpIHtcbiAgY29uc3QgW2NvbnRhaW5lcldpZHRoLCBzZXRDb250YWluZXJXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgZ2FsbGVyeUVsID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGFuaW1hdGlvbkZyYW1lSUQ6IGFueSA9IG51bGw7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgIC8vIG9ubHkgZG8gc29tZXRoaW5nIGlmIHdpZHRoIGNoYW5nZXNcbiAgICAgIGNvbnN0IG5ld1dpZHRoID0gZW50cmllc1swXS5jb250ZW50UmVjdC53aWR0aDtcbiAgICAgIGlmIChjb250YWluZXJXaWR0aCAhPT0gbmV3V2lkdGgpIHtcbiAgICAgICAgLy8gcHV0IGluIGFuIGFuaW1hdGlvbiBmcmFtZSB0byBzdG9wIFwiYmVuaWduIGVycm9yc1wiIGZyb21cbiAgICAgICAgLy8gUmVzaXpPYnNlcnZlciBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTM4NDEyMC9yZXNpemVvYnNlcnZlci1sb29wLWxpbWl0LWV4Y2VlZGVkXG4gICAgICAgIGFuaW1hdGlvbkZyYW1lSUQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBzZXRDb250YWluZXJXaWR0aChNYXRoLmZsb29yKG5ld1dpZHRoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZ2FsbGVyeUVsLmN1cnJlbnQgYXMgYW55KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSUQpO1xuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50OiBhbnksIHsgaW5kZXggfTogYW55KSA9PiB7XG4gICAgb25DbGljayhldmVudCwge1xuICAgICAgaW5kZXgsXG4gICAgICBwaG90bzogcGhvdG9zW2luZGV4XSxcbiAgICAgIHByZXZpb3VzOiBwaG90b3NbaW5kZXggLSAxXSB8fCBudWxsLFxuICAgICAgbmV4dDogcGhvdG9zW2luZGV4ICsgMV0gfHwgbnVsbCxcbiAgICB9KTtcbiAgfTtcblxuICAvLyBubyBjb250YWluZXJXaWR0aCB1bnRpbCBhZnRlciBmaXJzdCByZW5kZXIgd2l0aCByZWZzLCBza2lwIGNhbGN1bGF0aW9ucyBhbmQgcmVuZGVyIG5vdGhpbmdcbiAgaWYgKCFjb250YWluZXJXaWR0aCkgcmV0dXJuIDxkaXYgcmVmPXtnYWxsZXJ5RWx9PiZuYnNwOzwvZGl2PjtcbiAgLy8gc3VidHJhY3QgMSBwaXhlbCBiZWNhdXNlIHRoZSBicm93c2VyIG1heSByb3VuZCB1cCBhIHBpeGVsXG4gIGNvbnN0IHdpZHRoID0gY29udGFpbmVyV2lkdGggLSAxO1xuICBsZXQgZ2FsbGVyeVN0eWxlOiBhbnksIHRodW1iczogYW55O1xuXG4gIGlmIChkaXJlY3Rpb24gPT09IFwicm93XCIpIHtcbiAgICAvLyBhbGxvdyB1c2VyIHRvIGNhbGN1bGF0ZSBsaW1pdE5vZGVTZWFyY2ggZnJvbSBjb250YWluZXJXaWR0aFxuICAgIGlmICh0eXBlb2YgbGltaXROb2RlU2VhcmNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxpbWl0Tm9kZVNlYXJjaCA9IGxpbWl0Tm9kZVNlYXJjaChjb250YWluZXJXaWR0aCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGFyZ2V0Um93SGVpZ2h0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRhcmdldFJvd0hlaWdodCA9IHRhcmdldFJvd0hlaWdodChjb250YWluZXJXaWR0aCk7XG4gICAgfVxuICAgIC8vIHNldCBob3cgbWFueSBuZWlnaGJvcmluZyBub2RlcyB0aGUgZ3JhcGggd2lsbCB2aXNpdFxuICAgIGlmIChsaW1pdE5vZGVTZWFyY2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgbGltaXROb2RlU2VhcmNoID0gMjtcbiAgICAgIGlmIChjb250YWluZXJXaWR0aCA+PSA0NTApIHtcbiAgICAgICAgbGltaXROb2RlU2VhcmNoID0gZmluZElkZWFsTm9kZVNlYXJjaCh7XG4gICAgICAgICAgY29udGFpbmVyV2lkdGgsXG4gICAgICAgICAgdGFyZ2V0Um93SGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnYWxsZXJ5U3R5bGUgPSB7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4V3JhcDogXCJ3cmFwXCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIgfTtcbiAgICB0aHVtYnMgPSBjb21wdXRlUm93TGF5b3V0KHtcbiAgICAgIGNvbnRhaW5lcldpZHRoOiB3aWR0aCxcbiAgICAgIGxpbWl0Tm9kZVNlYXJjaCxcbiAgICAgIHRhcmdldFJvd0hlaWdodCxcbiAgICAgIG1hcmdpbixcbiAgICAgIHBob3RvcyxcbiAgICB9KTtcbiAgfVxuICBpZiAoZGlyZWN0aW9uID09PSBcImNvbHVtblwiKSB7XG4gICAgLy8gYWxsb3cgdXNlciB0byBjYWxjdWxhdGUgY29sdW1ucyBmcm9tIGNvbnRhaW5lcldpZHRoXG4gICAgaWYgKHR5cGVvZiBjb2x1bW5zID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbHVtbnMgPSBjb2x1bW5zKGNvbnRhaW5lcldpZHRoKTtcbiAgICB9XG4gICAgLy8gc2V0IGRlZmF1bHQgYnJlYWtwb2ludHMgaWYgdXNlciBkb2Vzbid0IHNwZWNpZnkgY29sdW1ucyBwcm9wXG4gICAgaWYgKGNvbHVtbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29sdW1ucyA9IDE7XG4gICAgICBpZiAoY29udGFpbmVyV2lkdGggPj0gNTAwKSBjb2x1bW5zID0gMjtcbiAgICAgIGlmIChjb250YWluZXJXaWR0aCA+PSA5MDApIGNvbHVtbnMgPSAzO1xuICAgICAgaWYgKGNvbnRhaW5lcldpZHRoID49IDE1MDApIGNvbHVtbnMgPSA0O1xuICAgIH1cbiAgICBnYWxsZXJ5U3R5bGUgPSB7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfTtcbiAgICB0aHVtYnMgPSBjb21wdXRlQ29sdW1uTGF5b3V0KHtcbiAgICAgIGNvbnRhaW5lcldpZHRoOiB3aWR0aCxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBtYXJnaW4sXG4gICAgICBwaG90b3MsXG4gICAgfSk7XG4gICAgZ2FsbGVyeVN0eWxlLmhlaWdodCA9IHRodW1ic1t0aHVtYnMubGVuZ3RoIC0gMV0uY29udGFpbmVySGVpZ2h0O1xuICB9XG5cbiAgY29uc3QgcmVuZGVyQ29tcG9uZW50ID0gcmVuZGVySW1hZ2UgfHwgUGhvdG87XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1waG90by1nYWxsZXJ5LS1nYWxsZXJ5XCI+XG4gICAgICA8ZGl2IHJlZj17Z2FsbGVyeUVsfSBzdHlsZT17Z2FsbGVyeVN0eWxlfT5cbiAgICAgICAgPExpZ2h0R2FsbGVyeVxuICAgICAgICAgIHBsdWdpbnM9e1tsZ1RodW1ibmFpbCwgbGdab29tLCBsZ0hhc2gsIGxnU2hhcmVdfVxuICAgICAgICAgIG1vZGU9XCJsZy1mYWRlXCJcbiAgICAgICAgICBsaWNlbnNlS2V5PVwiOURGQzQ0RjItMEU0NTQzRTMtODNGRDI2NDAtOTk2QjI3OTJcIlxuICAgICAgICA+XG4gICAgICAgICAge3RodW1icy5tYXAoKHRodW1iOiBhbnksIGluZGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbGVmdCwgdG9wLCBjb250YWluZXJIZWlnaHQsIC4uLnBob3RvIH0gPSB0aHVtYjtcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJDb21wb25lbnQoe1xuICAgICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICAgIGtleTogdGh1bWIua2V5IHx8IHRodW1iLnNyYyxcbiAgICAgICAgICAgICAgY29udGFpbmVySGVpZ2h0LFxuICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgbWFyZ2luLFxuICAgICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IG9uQ2xpY2sgPyBoYW5kbGVDbGljayA6IG51bGwsXG4gICAgICAgICAgICAgIHBob3RvLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvTGlnaHRHYWxsZXJ5PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBHYWxsZXJ5UHJvcFR5cGVzIHtcbiAgcGhvdG9zOiBQaG90b1Byb3BzW107XG4gIGRpcmVjdGlvbj86IHN0cmluZztcbiAgb25DbGljaz86IGFueTtcbiAgY29sdW1ucz86IGFueTtcbiAgdGFyZ2V0Um93SGVpZ2h0PzogYW55O1xuICBsaW1pdE5vZGVTZWFyY2g/OiBhbnk7XG4gIG1hcmdpbj86IG51bWJlcjtcbiAgcmVuZGVySW1hZ2U/OiBhbnk7XG59XG5cbmV4cG9ydCB7IFBob3RvIH07XG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlbmRlckltYWdlUHJvcHMgfSBmcm9tIFwicmVhY3QtcGhvdG8tZ2FsbGVyeVwiO1xuaW1wb3J0IHsgdHdpdHRlclRhZyB9IGZyb20gXCIuLi9HbG9iYWwvZ2xvYmFsc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJyZW1peC1pbWFnZVwiO1xuXG5jb25zdCBjb250ID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VlZVwiLFxuICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIiBhcyBhbnksXG4gIGxlZnQ6IHVuZGVmaW5lZCBhcyBhbnksXG4gIHRvcDogdW5kZWZpbmVkIGFzIGFueSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGhvdG9Qcm9wcyB7XG4gIGFsdDogc3RyaW5nO1xuICBzY29yZT86IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBmaWxlOiBzdHJpbmc7XG4gIGNhcHRpb246IHN0cmluZztcbiAgY3JlYXRlZEF0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBhcnRpc3Q6IHN0cmluZztcbiAgc2h1dHRlclNwZWVkOiBzdHJpbmc7XG4gIGZvY2FsTGVuZ3RoOiBzdHJpbmc7XG4gIGZzdG9wOiBudW1iZXI7XG4gIGxlbnM6IHN0cmluZztcbiAgY2FtZXJhTWFrZTogc3RyaW5nO1xuICBjYW1lcmFNb2RlbDogc3RyaW5nO1xuICBpc286IG51bWJlcjtcbn1cbmNvbnN0IFBob3RvOiBSZWFjdC5Db21wb25lbnRUeXBlPFJlbmRlckltYWdlUHJvcHM8UGhvdG9Qcm9wcz4+ID0gKHtcbiAgcGhvdG8sXG4gIG1hcmdpbixcbiAgZGlyZWN0aW9uLFxuICB0b3AsXG4gIGxlZnQsXG59KSA9PiB7XG4gIGlmIChkaXJlY3Rpb24gPT09IFwiY29sdW1uXCIpIHtcbiAgICBjb250LnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGNvbnQubGVmdCA9IGxlZnQ7XG4gICAgY29udC50b3AgPSB0b3A7XG4gIH1cbiAgcmV0dXJuIChcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkXG4gICAgPGFcbiAgICAgIGtleT17cGhvdG8ubmFtZX1cbiAgICAgIGRhdGEtbGctc2l6ZT17YCR7cGhvdG8ud2lkdGgqMn0tJHtwaG90by5oZWlnaHQqMn1gfVxuICAgICAgZGF0YS1zbGlkZS1uYW1lPXtwaG90by5uYW1lfVxuICAgICAgZGF0YS10d2VldC10ZXh0PXtgJHtwaG90by5jYXB0aW9ufSAtIGJ5ICR7dHdpdHRlclRhZ31gfVxuICAgICAgZGF0YS1waW50ZXJlc3QtdGV4dD17YCR7cGhvdG8uY2FwdGlvbn0gLSBieSBUcmF2aXMgSGFycmlzYH1cbiAgICAgIGRhdGEtZmFjZWJvb2stdGV4dD17YCR7cGhvdG8uY2FwdGlvbn0gLSBieSBUcmF2aXMgSGFycmlzYH1cbiAgICAgIGNsYXNzTmFtZT1cImdhbGxlcnktaXRlbVwiXG4gICAgICBkYXRhLXNyYz17YHBob3Rvcy8ke3Bob3RvLmZpbGV9YH1cbiAgICAgIGRhdGEtc3ViLWh0bWw9e2A8aDQgc3R5bGU9XCJjb2xvcjojZWVlXCI+IFRyYXZpcyBIYXJyaXMgJHtcbiAgICAgICAgcGhvdG8uY2FwdGlvbiA/IGAtICR7cGhvdG8uY2FwdGlvbn1gIDogXCJcIlxuICAgICAgfTwvaDQ+PHA+JHtwaG90by5jYW1lcmFNYWtlfSAke3Bob3RvLmNhbWVyYU1vZGVsfSA8L3A+PHA+ICR7XG4gICAgICAgIHBob3RvLmxlbnNcbiAgICAgIH08L3A+PHA+JHtwaG90by5mb2NhbExlbmd0aH1tbSB8ICR7cGhvdG8uc2h1dHRlclNwZWVkfXMgfCBmJHtcbiAgICAgICAgcGhvdG8uZnN0b3BcbiAgICAgIH0gfCAke3Bob3RvLmlzb30gaXNvPC9wPiBgfVxuICAgICAgc3R5bGU9e3sgbWFyZ2luLCBoZWlnaHQ6IHBob3RvLmhlaWdodCwgd2lkdGg6IHBob3RvLndpZHRoLCAuLi5jb250IH19XG4gICAgPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz17YHBob3Rvcy8ke3Bob3RvLmZpbGV9YH1cbiAgICAgICAgYWx0PXtwaG90by5jYXB0aW9ufVxuICAgICAgLz5cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaG90bztcbiIsICJpbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9yb3VuZFwiO1xuXG4vLyBjb21wdXRlIHNpemVzIGZvciBjb2x1bW4gZGlyZWN0ZWQgbGF5b3V0c1xuZXhwb3J0IGNvbnN0IGNvbXB1dGVDb2x1bW5MYXlvdXQgPSAoe1xuICBwaG90b3MsXG4gIGNvbHVtbnMsXG4gIGNvbnRhaW5lcldpZHRoLFxuICBtYXJnaW4sXG59KSA9PiB7XG4gIC8vIGNhbGN1bGF0ZSBlYWNoIGNvbFdpZHRoIGJhc2VkIG9uIHRvdGFsIHdpZHRoIGFuZCBjb2x1bW4gYW1vdW50XG4gIGxldCBjb2xXaWR0aCA9IChjb250YWluZXJXaWR0aCAtIG1hcmdpbiAqIDIgKiBjb2x1bW5zKSAvIGNvbHVtbnM7XG5cbiAgLy8gbWFwIHRocm91Z2ggZWFjaCBwaG90byB0byBhc3NpZ24gYWRqdXN0ZWQgaGVpZ2h0IGFuZCB3aWR0aCBiYXNlZCBvbiBjb2xXaWR0aFxuICBjb25zdCBwaG90b3NXaXRoU2l6ZXMgPSBwaG90b3MubWFwKChwaG90bykgPT4ge1xuICAgIGNvbnN0IG5ld0hlaWdodCA9IChwaG90by5oZWlnaHQgLyBwaG90by53aWR0aCkgKiBjb2xXaWR0aDtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucGhvdG8sXG4gICAgICB3aWR0aDogcm91bmQoY29sV2lkdGgsIDEpLFxuICAgICAgaGVpZ2h0OiByb3VuZChuZXdIZWlnaHQsIDEpLFxuICAgIH07XG4gIH0pO1xuXG4gIC8vIHN0b3JlIGFsbCBwb3NzaWJsZSBsZWZ0IHBvc2l0aW9uc1xuICAvLyBhbmQgY3VycmVudCB0b3AgcG9zaXRpb25zIGZvciBlYWNoIGNvbHVtblxuICBjb25zdCBjb2xMZWZ0UG9zaXRpb25zID0gW107XG4gIGNvbnN0IGNvbEN1cnJUb3BQb3NpdGlvbnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5zOyBpKyspIHtcbiAgICBjb2xMZWZ0UG9zaXRpb25zW2ldID0gcm91bmQoaSAqIChjb2xXaWR0aCArIG1hcmdpbiAqIDIpLCAxKTtcbiAgICBjb2xDdXJyVG9wUG9zaXRpb25zW2ldID0gMDtcbiAgfVxuXG4gIC8vIG1hcCB0aHJvdWdoIGVhY2ggcGhvdG8sIHRoZW4gcmVkdWNlIHRocnUgZWFjaCBcImNvbHVtblwiXG4gIC8vIGZpbmQgY29sdW1uIHdpdGggdGhlIHNtYWxsZXN0IGhlaWdodCBhbmQgYXNzaWduIHRvIHBob3RvJ3MgJ3RvcCdcbiAgLy8gdXBkYXRlIHRoYXQgY29sdW1uJ3MgaGVpZ2h0IHdpdGggdGhpcyBwaG90bydzIGhlaWdodFxuICBjb25zdCBwaG90b3NQb3NpdGlvbmVkID0gcGhvdG9zV2l0aFNpemVzLm1hcCgocGhvdG8pID0+IHtcbiAgICBjb25zdCBzbWFsbGVzdENvbCA9IGNvbEN1cnJUb3BQb3NpdGlvbnMucmVkdWNlKChhY2MsIGl0ZW0sIGkpID0+IHtcbiAgICAgIGFjYyA9IGl0ZW0gPCBjb2xDdXJyVG9wUG9zaXRpb25zW2FjY10gPyBpIDogYWNjO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKTtcblxuICAgIHBob3RvLnRvcCA9IGNvbEN1cnJUb3BQb3NpdGlvbnNbc21hbGxlc3RDb2xdO1xuICAgIHBob3RvLmxlZnQgPSBjb2xMZWZ0UG9zaXRpb25zW3NtYWxsZXN0Q29sXTtcbiAgICBjb2xDdXJyVG9wUG9zaXRpb25zW3NtYWxsZXN0Q29sXSA9XG4gICAgICBjb2xDdXJyVG9wUG9zaXRpb25zW3NtYWxsZXN0Q29sXSArIHBob3RvLmhlaWdodCArIG1hcmdpbiAqIDI7XG5cbiAgICAvLyBzdG9yZSB0aGUgdGFsbGVzdCBjb2wgdG8gdXNlIGZvciBnYWxsZXJ5IGhlaWdodCBiZWNhdXNlIG9mIGFicyBwb3NpdGlvbmVkIGVsZW1lbnRzXG4gICAgY29uc3QgdGFsbGVzdENvbCA9IGNvbEN1cnJUb3BQb3NpdGlvbnMucmVkdWNlKChhY2MsIGl0ZW0sIGkpID0+IHtcbiAgICAgIGFjYyA9IGl0ZW0gPiBjb2xDdXJyVG9wUG9zaXRpb25zW2FjY10gPyBpIDogYWNjO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKTtcbiAgICBwaG90by5jb250YWluZXJIZWlnaHQgPSBjb2xDdXJyVG9wUG9zaXRpb25zW3RhbGxlc3RDb2xdO1xuICAgIHJldHVybiBwaG90bztcbiAgfSk7XG4gIHJldHVybiBwaG90b3NQb3NpdGlvbmVkO1xufTtcbiIsICJleHBvcnQgY29uc3Qgcm91bmQgPSAodmFsdWUsIGRlY2ltYWxzKSA9PiB7XG4gICAgaWYgKCFkZWNpbWFscykgZGVjaW1hbHMgPSAwO1xuICAgIHJldHVybiBOdW1iZXIoTWF0aC5yb3VuZCh2YWx1ZSArICdlJyArIGRlY2ltYWxzKSArICdlLScgKyBkZWNpbWFscyk7XG4gIH07IiwgImltcG9ydCB7IHJhdGlvIH0gZnJvbSBcIi4uL3V0aWxzL3JhdGlvXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9yb3VuZFwiO1xuaW1wb3J0IHsgZmluZFNob3J0ZXN0UGF0aCB9IGZyb20gXCIuLi91dGlscy9kaWprc3RyYVwiO1xuXG4vLyBjb21wdXRlIHNpemVzIGJ5IGNyZWF0aW5nIGEgZ3JhcGggd2l0aCByb3dzIGFzIGVkZ2VzIGFuZCBwaG90byB0byBicmVhayBvbiBhcyBub2Rlc1xuLy8gdG8gY2FsY3VsYXRlIHRoZSBzaW5nbGUgYmVzdCBsYXlvdXQgdXNpbmcgRGlqa3N0cmEncyBmaW5kU2hvcnRlc3RQYXRcblxuLy8gZ2V0IHRoZSBoZWlnaHQgZm9yIGEgc2V0IG9mIHBob3RvcyBpbiBhIHBvdGVudGlhbCByb3dcbmNvbnN0IGdldENvbW1vbkhlaWdodCA9IChyb3csIGNvbnRhaW5lcldpZHRoLCBtYXJnaW4pID0+IHtcbiAgY29uc3Qgcm93V2lkdGggPSBjb250YWluZXJXaWR0aCAtIHJvdy5sZW5ndGggKiAobWFyZ2luICogMik7XG4gIGNvbnN0IHRvdGFsQXNwZWN0UmF0aW8gPSByb3cucmVkdWNlKChhY2MsIHBob3RvKSA9PiBhY2MgKyByYXRpbyhwaG90byksIDApO1xuICByZXR1cm4gcm93V2lkdGggLyB0b3RhbEFzcGVjdFJhdGlvO1xufTtcblxuLy8gY2FsY3VsYXRlIHRoZSBjb3N0IG9mIGJyZWFraW5nIGF0IHRoaXMgbm9kZSAoZWRnZSB3ZWlnaHQpXG5jb25zdCBjb3N0ID0gKHBob3RvcywgaSwgaiwgd2lkdGgsIHRhcmdldEhlaWdodCwgbWFyZ2luKSA9PiB7XG4gIGNvbnN0IHJvdyA9IHBob3Rvcy5zbGljZShpLCBqKTtcbiAgY29uc3QgY29tbW9uSGVpZ2h0ID0gZ2V0Q29tbW9uSGVpZ2h0KHJvdywgd2lkdGgsIG1hcmdpbik7XG4gIHJldHVybiBNYXRoLnBvdyhNYXRoLmFicyhjb21tb25IZWlnaHQgLSB0YXJnZXRIZWlnaHQpLCAyKTtcbn07XG5cbi8vIHJldHVybiBmdW5jdGlvbiB0aGF0IGdldHMgdGhlIG5laWdoYm9yaW5nIG5vZGVzIG9mIG5vZGUgYW5kIHJldHVybnMgY29zdHNcbmNvbnN0IG1ha2VHZXROZWlnaGJvcnMgPVxuICAodGFyZ2V0SGVpZ2h0LCBjb250YWluZXJXaWR0aCwgcGhvdG9zLCBsaW1pdE5vZGVTZWFyY2gsIG1hcmdpbikgPT5cbiAgKHN0YXJ0KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IHt9O1xuICAgIHN0YXJ0ID0gK3N0YXJ0O1xuICAgIHJlc3VsdHNbK3N0YXJ0XSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0ICsgMTsgaSA8IHBob3Rvcy5sZW5ndGggKyAxOyArK2kpIHtcbiAgICAgIGlmIChpIC0gc3RhcnQgPiBsaW1pdE5vZGVTZWFyY2gpIGJyZWFrO1xuICAgICAgcmVzdWx0c1tpLnRvU3RyaW5nKCldID0gY29zdChcbiAgICAgICAgcGhvdG9zLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgaSxcbiAgICAgICAgY29udGFpbmVyV2lkdGgsXG4gICAgICAgIHRhcmdldEhlaWdodCxcbiAgICAgICAgbWFyZ2luXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVSb3dMYXlvdXQgPSAoe1xuICBjb250YWluZXJXaWR0aCxcbiAgbGltaXROb2RlU2VhcmNoLFxuICB0YXJnZXRSb3dIZWlnaHQsXG4gIG1hcmdpbixcbiAgcGhvdG9zLFxufSkgPT4ge1xuICAvLyBjb25zdCB0ID0gK25ldyBEYXRlKCk7XG4gIGNvbnN0IGdldE5laWdoYm9ycyA9IG1ha2VHZXROZWlnaGJvcnMoXG4gICAgdGFyZ2V0Um93SGVpZ2h0LFxuICAgIGNvbnRhaW5lcldpZHRoLFxuICAgIHBob3RvcyxcbiAgICBsaW1pdE5vZGVTZWFyY2gsXG4gICAgbWFyZ2luXG4gICk7XG4gIGxldCBwYXRoID0gZmluZFNob3J0ZXN0UGF0aChnZXROZWlnaGJvcnMsIFwiMFwiLCBwaG90b3MubGVuZ3RoKTtcbiAgcGF0aCA9IHBhdGgubWFwKChub2RlKSA9PiArbm9kZSk7XG4gIC8vIGNvbnNvbGUubG9nKGB0aW1lIHRvIGZpbmQgdGhlIHNob3J0ZXN0IHBhdGg6ICR7KCtuZXcgRGF0ZSgpIC0gdCl9IG1zYCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aC5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IHJvdyA9IHBob3Rvcy5zbGljZShwYXRoW2kgLSAxXSwgcGF0aFtpXSk7XG4gICAgY29uc3QgaGVpZ2h0ID0gZ2V0Q29tbW9uSGVpZ2h0KHJvdywgY29udGFpbmVyV2lkdGgsIG1hcmdpbik7XG4gICAgZm9yIChsZXQgaiA9IHBhdGhbaSAtIDFdOyBqIDwgcGF0aFtpXTsgKytqKSB7XG4gICAgICBwaG90b3Nbal0ud2lkdGggPSByb3VuZChoZWlnaHQgKiByYXRpbyhwaG90b3Nbal0pLCAxKTtcbiAgICAgIHBob3Rvc1tqXS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBwaG90b3M7XG59O1xuIiwgImltcG9ydCB7IHJvdW5kIH0gZnJvbSAnLi9yb3VuZCc7XG5cbi8vIHJldHVybiB0d28gZGVjaW1hbCBwbGFjZXMgcm91bmRlZCBudW1iZXJcbmV4cG9ydCBjb25zdCByYXRpbyA9ICh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gcm91bmQod2lkdGggLyBoZWlnaHQsIDIpOyIsICJpbXBvcnQgeyBCaW5hcnlIZWFwIH0gZnJvbSBcIi4vYmluYXJ5LWhlYXBcIjtcblxuY29uc3QgYnVpbGRQcmVjZWRlbnRzTWFwID0gKGdyYXBoLCBzdGFydE5vZGUsIGVuZE5vZGUpID0+IHtcbiAgLy8gc3RvcmUgdGhlIHByZXZpb3VzIHZlcnRleCBvZiB0aGUgc2hvcnRlc3QgcGF0aCBvZiBhcnJpdmFsXG4gIGNvbnN0IHByZWNlZGVudHNNYXAgPSB7fTtcblxuICAvLyBzdG9yZSBub2RlcyBhbHJlYWR5IHZpc2l0ZWRcbiAgY29uc3QgdmlzaXRlZCA9IHt9O1xuXG4gIC8vIHN0b3JlL3VwZGF0ZSBvbmx5IHRoZSBzaG9ydGVzdCBlZGdlIHdlaWdodHMgbWVhc3VyZWRcbiAgLy8gdGhlIHB1cnBvc2Ugb2YgdGhpcyBpcyBvYmplY3QgaXMgY29uc3RhbnQgdGltZSBsb29rdXAgdnMuIGJpbmFyeSBoZWFwIGxvb2t1cCBPKG4pXG4gIGNvbnN0IHN0b3JlZFNob3J0ZXN0UGF0aHMgPSB7fTtcbiAgc3RvcmVkU2hvcnRlc3RQYXRoc1tzdGFydE5vZGVdID0gMDtcblxuICAvLyBwcmlvcml0eSBxdWV1ZSBvZiBBTEwgbm9kZXMgYW5kIHN0b3JlZFNob3J0ZXN0UGF0aHNcbiAgLy8gZG9uJ3QgYm90aGVyIHRvIGRlbGV0ZSB0aGVtIGJlY2F1c2UgaXQncyBmYXN0ZXIgdG8gbG9vayBhdCB2aXNpdGVkP1xuICBjb25zdCBwUXVldWUgPSBuZXcgQmluYXJ5SGVhcChmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBuLndlaWdodDtcbiAgfSk7XG4gIHBRdWV1ZS5wdXNoKHsgaWQ6IHN0YXJ0Tm9kZSwgd2VpZ2h0OiAwIH0pO1xuXG4gIHdoaWxlIChwUXVldWUuc2l6ZSgpKSB7XG4gICAgLy8gcG9wIG5vZGUgd2l0aCBzaG9ydGVzdCB0b3RhbCB3ZWlnaHQgZnJvbSBzdGFydCBub2RlXG4gICAgY29uc3Qgc2hvcnRlc3ROb2RlID0gcFF1ZXVlLnBvcCgpO1xuICAgIGNvbnN0IHNob3J0ZXN0Tm9kZUlkID0gc2hvcnRlc3ROb2RlLmlkO1xuXG4gICAgLy8gaWYgYWxyZWFkeSB2aXNpdGVkLCBjb250aW51ZVxuICAgIGlmICh2aXNpdGVkW3Nob3J0ZXN0Tm9kZUlkXSkgY29udGludWU7XG5cbiAgICAvLyB2aXNpdCBuZWlnaGJvcmluZyBub2Rlc1xuICAgIGNvbnN0IG5laWdoYm9yaW5nTm9kZXMgPSBncmFwaChzaG9ydGVzdE5vZGVJZCkgfHwge307XG4gICAgdmlzaXRlZFtzaG9ydGVzdE5vZGVJZF0gPSAxO1xuXG4gICAgLy8gbWVldCB0aGUgbmVpZ2hib3JzLCBsb29raW5nIGZvciBzaG9ydGVyIHBhdGhzXG4gICAgZm9yIChsZXQgbmVpZ2hib3IgaW4gbmVpZ2hib3JpbmdOb2Rlcykge1xuICAgICAgLy8gd2VpZ2h0IG9mIHBhdGggZnJvbSBzdGFydE5vZGUgdG8gdGhpcyBuZWlnaGJvclxuICAgICAgY29uc3QgbmV3VG90YWxXZWlnaHQgPSBzaG9ydGVzdE5vZGUud2VpZ2h0ICsgbmVpZ2hib3JpbmdOb2Rlc1tuZWlnaGJvcl07XG5cbiAgICAgIC8vIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgbWVldGluZyB0aGUgbmVpZ2hib3IgT1IgaWYgdGhlIG5ldyB0b3RhbCB3ZWlnaHQgZnJvbVxuICAgICAgLy8gc3RhcnQgbm9kZSB0byB0aGlzIG5laWdoYm9yIG5vZGUgaXMgZ3JlYXRlciB0aGFuIHRoZSBvbGQgd2VpZ2h0IHBhdGgsIHVwZGF0ZSBpdCxcbiAgICAgIC8vIGFuZCB1cGRhdGUgcHJlY2VkZW50IG5vZGVcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIHN0b3JlZFNob3J0ZXN0UGF0aHNbbmVpZ2hib3JdID09PSBcInVuZGVmaW5lZFwiIHx8XG4gICAgICAgIHN0b3JlZFNob3J0ZXN0UGF0aHNbbmVpZ2hib3JdID4gbmV3VG90YWxXZWlnaHRcbiAgICAgICkge1xuICAgICAgICBzdG9yZWRTaG9ydGVzdFBhdGhzW25laWdoYm9yXSA9IG5ld1RvdGFsV2VpZ2h0O1xuICAgICAgICBwUXVldWUucHVzaCh7IGlkOiBuZWlnaGJvciwgd2VpZ2h0OiBuZXdUb3RhbFdlaWdodCB9KTtcbiAgICAgICAgcHJlY2VkZW50c01hcFtuZWlnaGJvcl0gPSBzaG9ydGVzdE5vZGVJZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHN0b3JlZFNob3J0ZXN0UGF0aHNbZW5kTm9kZV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vIHBhdGggZnJvbSAke3N0YXJ0Tm9kZX0gdG8gJHtlbmROb2RlfWApO1xuICB9XG5cbiAgcmV0dXJuIHByZWNlZGVudHNNYXA7XG59O1xuXG4vLyBidWlsZCB0aGUgcm91dGUgZnJvbSBwcmVjZWRlbnQgbm9kZSB2ZXJ0aWNlc1xuY29uc3QgZ2V0UGF0aEZyb21QcmVjZWRlbnRzTWFwID0gKHByZWNlZGVudHNNYXAsIGVuZE5vZGUpID0+IHtcbiAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgbGV0IG4gPSBlbmROb2RlO1xuICBsZXQgcHJlY2VkZW50O1xuICB3aGlsZSAobikge1xuICAgIG5vZGVzLnB1c2gobik7XG4gICAgcHJlY2VkZW50ID0gcHJlY2VkZW50c01hcFtuXTtcbiAgICBuID0gcHJlY2VkZW50c01hcFtuXTtcbiAgfVxuICByZXR1cm4gbm9kZXMucmV2ZXJzZSgpO1xufTtcblxuLy8gYnVpbGQgdGhlIHByZWNlZGVudHNNYXAgYW5kIGZpbmQgdGhlIHNob3J0ZXN0IHBhdGggZnJvbSBpdFxuZXhwb3J0IGNvbnN0IGZpbmRTaG9ydGVzdFBhdGggPSAoZ3JhcGgsIHN0YXJ0Tm9kZSwgZW5kTm9kZSkgPT4ge1xuICBjb25zdCBwcmVjZWRlbnRzTWFwID0gYnVpbGRQcmVjZWRlbnRzTWFwKGdyYXBoLCBzdGFydE5vZGUsIGVuZE5vZGUpO1xuICByZXR1cm4gZ2V0UGF0aEZyb21QcmVjZWRlbnRzTWFwKHByZWNlZGVudHNNYXAsIGVuZE5vZGUpO1xufTtcbiIsICIvKlxuQ29weXJpZ2h0IDIwMDctMjAxMyBNYXJpam4gSGF2ZXJiZWtlIGZyaW4gXCJFbG9xdWVudCBKYXZhc2NyaXB0LCAxc3QgRWRpdGlvblwiXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBCaW5hcnlIZWFwKHNjb3JlRnVuY3Rpb24pIHtcbiAgdGhpcy5jb250ZW50ID0gW107XG4gIHRoaXMuc2NvcmVGdW5jdGlvbiA9IHNjb3JlRnVuY3Rpb247XG59XG5cbkJpbmFyeUhlYXAucHJvdG90eXBlID0ge1xuICBwdXNoOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIEFkZCB0aGUgbmV3IGVsZW1lbnQgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gICAgdGhpcy5jb250ZW50LnB1c2goZWxlbWVudCk7XG4gICAgLy8gQWxsb3cgaXQgdG8gYnViYmxlIHVwLlxuICAgIHRoaXMuYnViYmxlVXAodGhpcy5jb250ZW50Lmxlbmd0aCAtIDEpO1xuICB9LFxuXG4gIHBvcDogZnVuY3Rpb24gKCkge1xuICAgIC8vIFN0b3JlIHRoZSBmaXJzdCBlbGVtZW50IHNvIHdlIGNhbiByZXR1cm4gaXQgbGF0ZXIuXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuY29udGVudFswXTtcbiAgICAvLyBHZXQgdGhlIGVsZW1lbnQgYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gICAgdmFyIGVuZCA9IHRoaXMuY29udGVudC5wb3AoKTtcbiAgICAvLyBJZiB0aGVyZSBhcmUgYW55IGVsZW1lbnRzIGxlZnQsIHB1dCB0aGUgZW5kIGVsZW1lbnQgYXQgdGhlXG4gICAgLy8gc3RhcnQsIGFuZCBsZXQgaXQgc2luayBkb3duLlxuICAgIGlmICh0aGlzLmNvbnRlbnQubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jb250ZW50WzBdID0gZW5kO1xuICAgICAgdGhpcy5zaW5rRG93bigwKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICByZW1vdmU6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuY29udGVudC5sZW5ndGg7XG4gICAgLy8gVG8gcmVtb3ZlIGEgdmFsdWUsIHdlIG11c3Qgc2VhcmNoIHRocm91Z2ggdGhlIGFycmF5IHRvIGZpbmRcbiAgICAvLyBpdC5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5jb250ZW50W2ldICE9IG5vZGUpIGNvbnRpbnVlO1xuICAgICAgLy8gV2hlbiBpdCBpcyBmb3VuZCwgdGhlIHByb2Nlc3Mgc2VlbiBpbiAncG9wJyBpcyByZXBlYXRlZFxuICAgICAgLy8gdG8gZmlsbCB1cCB0aGUgaG9sZS5cbiAgICAgIHZhciBlbmQgPSB0aGlzLmNvbnRlbnQucG9wKCk7XG4gICAgICAvLyBJZiB0aGUgZWxlbWVudCB3ZSBwb3BwZWQgd2FzIHRoZSBvbmUgd2UgbmVlZGVkIHRvIHJlbW92ZSxcbiAgICAgIC8vIHdlJ3JlIGRvbmUuXG4gICAgICBpZiAoaSA9PSBsZW5ndGggLSAxKSBicmVhaztcbiAgICAgIC8vIE90aGVyd2lzZSwgd2UgcmVwbGFjZSB0aGUgcmVtb3ZlZCBlbGVtZW50IHdpdGggdGhlIHBvcHBlZFxuICAgICAgLy8gb25lLCBhbmQgYWxsb3cgaXQgdG8gZmxvYXQgdXAgb3Igc2luayBkb3duIGFzIGFwcHJvcHJpYXRlLlxuICAgICAgdGhpcy5jb250ZW50W2ldID0gZW5kO1xuICAgICAgdGhpcy5idWJibGVVcChpKTtcbiAgICAgIHRoaXMuc2lua0Rvd24oaSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH0sXG5cbiAgc2l6ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoO1xuICB9LFxuXG4gIGJ1YmJsZVVwOiBmdW5jdGlvbiAobikge1xuICAgIC8vIEZldGNoIHRoZSBlbGVtZW50IHRoYXQgaGFzIHRvIGJlIG1vdmVkLlxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5jb250ZW50W25dLFxuICAgICAgc2NvcmUgPSB0aGlzLnNjb3JlRnVuY3Rpb24oZWxlbWVudCk7XG4gICAgLy8gV2hlbiBhdCAwLCBhbiBlbGVtZW50IGNhbiBub3QgZ28gdXAgYW55IGZ1cnRoZXIuXG4gICAgd2hpbGUgKG4gPiAwKSB7XG4gICAgICAvLyBDb21wdXRlIHRoZSBwYXJlbnQgZWxlbWVudCdzIGluZGV4LCBhbmQgZmV0Y2ggaXQuXG4gICAgICB2YXIgcGFyZW50TiA9IE1hdGguZmxvb3IoKG4gKyAxKSAvIDIpIC0gMSxcbiAgICAgICAgcGFyZW50ID0gdGhpcy5jb250ZW50W3BhcmVudE5dO1xuICAgICAgLy8gSWYgdGhlIHBhcmVudCBoYXMgYSBsZXNzZXIgc2NvcmUsIHRoaW5ncyBhcmUgaW4gb3JkZXIgYW5kIHdlXG4gICAgICAvLyBhcmUgZG9uZS5cbiAgICAgIGlmIChzY29yZSA+PSB0aGlzLnNjb3JlRnVuY3Rpb24ocGFyZW50KSkgYnJlYWs7XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgc3dhcCB0aGUgcGFyZW50IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudCBhbmRcbiAgICAgIC8vIGNvbnRpbnVlLlxuICAgICAgdGhpcy5jb250ZW50W3BhcmVudE5dID0gZWxlbWVudDtcbiAgICAgIHRoaXMuY29udGVudFtuXSA9IHBhcmVudDtcbiAgICAgIG4gPSBwYXJlbnROO1xuICAgIH1cbiAgfSxcblxuICBzaW5rRG93bjogZnVuY3Rpb24gKG4pIHtcbiAgICAvLyBMb29rIHVwIHRoZSB0YXJnZXQgZWxlbWVudCBhbmQgaXRzIHNjb3JlLlxuICAgIHZhciBsZW5ndGggPSB0aGlzLmNvbnRlbnQubGVuZ3RoLFxuICAgICAgZWxlbWVudCA9IHRoaXMuY29udGVudFtuXSxcbiAgICAgIGVsZW1TY29yZSA9IHRoaXMuc2NvcmVGdW5jdGlvbihlbGVtZW50KTtcblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAvLyBDb21wdXRlIHRoZSBpbmRpY2VzIG9mIHRoZSBjaGlsZCBlbGVtZW50cy5cbiAgICAgIHZhciBjaGlsZDJOID0gKG4gKyAxKSAqIDIsXG4gICAgICAgIGNoaWxkMU4gPSBjaGlsZDJOIC0gMTtcbiAgICAgIC8vIFRoaXMgaXMgdXNlZCB0byBzdG9yZSB0aGUgbmV3IHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50LFxuICAgICAgLy8gaWYgYW55LlxuICAgICAgdmFyIHN3YXAgPSBudWxsO1xuICAgICAgLy8gSWYgdGhlIGZpcnN0IGNoaWxkIGV4aXN0cyAoaXMgaW5zaWRlIHRoZSBhcnJheSkuLi5cbiAgICAgIGlmIChjaGlsZDFOIDwgbGVuZ3RoKSB7XG4gICAgICAgIC8vIExvb2sgaXQgdXAgYW5kIGNvbXB1dGUgaXRzIHNjb3JlLlxuICAgICAgICB2YXIgY2hpbGQxID0gdGhpcy5jb250ZW50W2NoaWxkMU5dLFxuICAgICAgICAgIGNoaWxkMVNjb3JlID0gdGhpcy5zY29yZUZ1bmN0aW9uKGNoaWxkMSk7XG4gICAgICAgIC8vIElmIHRoZSBzY29yZSBpcyBsZXNzIHRoYW4gb3VyIGVsZW1lbnQncywgd2UgbmVlZCB0byBzd2FwLlxuICAgICAgICBpZiAoY2hpbGQxU2NvcmUgPCBlbGVtU2NvcmUpIHN3YXAgPSBjaGlsZDFOO1xuICAgICAgfVxuICAgICAgLy8gRG8gdGhlIHNhbWUgY2hlY2tzIGZvciB0aGUgb3RoZXIgY2hpbGQuXG4gICAgICBpZiAoY2hpbGQyTiA8IGxlbmd0aCkge1xuICAgICAgICB2YXIgY2hpbGQyID0gdGhpcy5jb250ZW50W2NoaWxkMk5dLFxuICAgICAgICAgIGNoaWxkMlNjb3JlID0gdGhpcy5zY29yZUZ1bmN0aW9uKGNoaWxkMik7XG4gICAgICAgIGlmIChjaGlsZDJTY29yZSA8IChzd2FwID09IG51bGwgPyBlbGVtU2NvcmUgOiBjaGlsZDFTY29yZSkpXG4gICAgICAgICAgc3dhcCA9IGNoaWxkMk47XG4gICAgICB9XG5cbiAgICAgIC8vIE5vIG5lZWQgdG8gc3dhcCBmdXJ0aGVyLCB3ZSBhcmUgZG9uZS5cbiAgICAgIGlmIChzd2FwID09IG51bGwpIGJyZWFrO1xuXG4gICAgICAvLyBPdGhlcndpc2UsIHN3YXAgYW5kIGNvbnRpbnVlLlxuICAgICAgdGhpcy5jb250ZW50W25dID0gdGhpcy5jb250ZW50W3N3YXBdO1xuICAgICAgdGhpcy5jb250ZW50W3N3YXBdID0gZWxlbWVudDtcbiAgICAgIG4gPSBzd2FwO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJpbmFyeUhlYXA7XG4iLCAiaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi9yb3VuZFwiO1xuXG4vLyBndWVzc3RpbWF0ZSBob3cgbWFueSBuZWlnaGJvcmluZyBub2RlcyBzaG91bGQgYmUgc2VhcmNoZWQgYmFzZWQgb25cbi8vIHRoZSBhc3BlY3QgcmF0aW8gb2YgdGhlIGNvbnRhaW5lciB3aXRoIGltYWdlcyBoYXZpbmcgYW4gYXZnIEFSIG9mIDEuNVxuLy8gYXMgdGhlIG1pbmltdW0gYW1vdW50IG9mIHBob3RvcyBwZXIgcm93LCBwbHVzIHNvbWUgbm9kZXNcbmV4cG9ydCBjb25zdCBmaW5kSWRlYWxOb2RlU2VhcmNoID0gKHsgdGFyZ2V0Um93SGVpZ2h0LCBjb250YWluZXJXaWR0aCB9KSA9PiB7XG4gIGNvbnN0IHJvd0FSID0gY29udGFpbmVyV2lkdGggLyB0YXJnZXRSb3dIZWlnaHQ7XG4gIHJldHVybiByb3VuZChyb3dBUiAvIDEuNSkgKyA4O1xufTtcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nUG9zdCgpIHtcblxuICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4gIHJldHVybiA8ZGl2PkJsb2c8L2Rpdj47XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgaW1hZ2VMb2FkZXIsIERpc2tDYWNoZSB9IGZyb20gXCJyZW1peC1pbWFnZS9zZXJ2ZXJcIjtcblxuY29uc3QgY29uZmlnID0ge1xuICBzZWxmVXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxuICBjYWNoZTogbmV3IERpc2tDYWNoZSgpLFxufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGltYWdlTG9hZGVyKGNvbmZpZywgcmVxdWVzdCk7XG59O1xuIiwgImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUmVhY3RSb3RhdGluZ1RleHQgZnJvbSBcInJlYWN0LXJvdGF0aW5nLXRleHRcIjtcbmltcG9ydCB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJUcmF2aXMgSGFycmlzXCIsXG4gIH07XG59O1xuY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT1cImhvbWUtY29udGFpbmVyIG1haW4td3JhcHBlclwiXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBlYXNlOiBcImVhc2VJbk91dFwiLCBkdXJhdGlvbjogMC4zIH19XG4gICAgPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGFuZGluZ1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwibGFuZGluZy1jb250ZW50XCJcbiAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxuICAgICAgICAgIGRhdGEtYW9zLWRlbGF5PVwiMjAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgPGgxPkknbSBUcmF2aXMgSGFycmlzPC9oMT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBBe1wiIFwifVxuICAgICAgICAgICAgICA8UmVhY3RSb3RhdGluZ1RleHRcbiAgICAgICAgICAgICAgICBpdGVtcz17W1wiRGV2ZWxvcGVyXCIsIFwiRGV2IE1hbmFnZXJcIiwgXCJQaG90b2dyYXBoZXJcIiwgXCJHYW1lclwiXX1cbiAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgIGJhc2VkIGluIFNlYXR0bGUsIFdhc2hpbmd0b25cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonYmQ4N2Y2MzknLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LTVOVlVOU01LLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1GUTc2QU9TRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZGVkNMTFJDLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVlFZQkFVU1EuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVJBUTRUTDQ1LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NUURNRFhMVy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2FwaS9pbWFnZSc6eydpZCc6J3JvdXRlcy9hcGkvaW1hZ2UnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXBpL2ltYWdlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FwaS9pbWFnZS1RWEdNMlNOVi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy8kcG9zdCc6eydpZCc6J3JvdXRlcy9ibG9nLyRwb3N0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvOnBvc3QnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy8kcG9zdC0zMlBKREpZRS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYmxvZy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL2luZGV4LVNHNFZJTFBJLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtV0xJNVlBWEwuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTdWU1FCSzVOLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9waG90b2dyYXBoeSc6eydpZCc6J3JvdXRlcy9waG90b2dyYXBoeScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwaG90b2dyYXBoeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9waG90b2dyYXBoeS1SUk42S1E3RC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bob3RvZ3JhcGh5L2luZGV4Jzp7J2lkJzoncm91dGVzL3Bob3RvZ3JhcGh5L2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvcGhvdG9ncmFwaHknLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcGhvdG9ncmFwaHkvaW5kZXgtUUdZV0ZNSUIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU1RRE1EWExXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstN1ZTUUJLNU4uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1CRDg3RjYzOS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNB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
