exports.id = 709;
exports.ids = [709];
exports.modules = {

/***/ 702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Meta)
/* harmony export */ });
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(364);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_AppConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(608);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const Meta = props => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("meta", {
        charSet: "UTF-8"
      }, "charset"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1"
      }, "viewport"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("link", {
        rel: "apple-touch-icon",
        href: `${router.basePath}/apple-touch-icon.png`
      }, "apple"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `${router.basePath}/favicon-32x32.png`
      }, "icon32"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `${router.basePath}/favicon-16x16.png`
      }, "icon16"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("link", {
        rel: "icon",
        href: `${router.basePath}/favicon.ico`
      }, "favicon")]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_0__.NextSeo, {
      title: props.title,
      description: props.description,
      canonical: props.canonical,
      openGraph: {
        title: props.title,
        description: props.description,
        url: props.canonical,
        locale: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_3__/* .AppConfig.locale */ .X.locale,
        site_name: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_3__/* .AppConfig.site_name */ .X.site_name
      }
    })]
  });
};



/***/ }),

/***/ 937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(664);
/* harmony import */ var _utils_AppConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Main = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
  className: "antialiased w-full text-gray-700",
  children: [props.meta, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "max-w-screen-md mx-auto",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "border-b border-gray-300",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "pt-16 pb-8",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "font-bold text-3xl text-gray-900",
          children: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_1__/* .AppConfig.title */ .X.title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "text-xl",
          children: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_1__/* .AppConfig.description */ .X.description
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "flex flex-wrap text-xl",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
            className: "mr-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
              href: "/",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                className: "text-gray-700 border-none hover:text-gray-900",
                children: "Home"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
            className: "mr-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
              href: "/about/",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                className: "text-gray-700 border-none hover:text-gray-900",
                children: "About"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
            className: "mr-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
              className: "text-gray-700 border-none hover:text-gray-900",
              href: "https://github.com/ixartz/Next-js-Boilerplate",
              children: "GitHub"
            })
          })]
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "py-5 text-xl content",
      children: props.children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "border-t border-gray-300 text-center py-8 text-sm",
      children: ["\xA9 Copyright ", new Date().getFullYear(), " ", _utils_AppConfig__WEBPACK_IMPORTED_MODULE_1__/* .AppConfig.title */ .X.title, ". Powered with", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        role: "img",
        "aria-label": "Love",
        children: "\u2665"
      }), ' ', "by ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
        href: "https://creativedesignsguru.com",
        children: "CreativeDesignsGuru"
      })]
    })]
  })]
});



/***/ }),

/***/ 608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ AppConfig)
/* harmony export */ });
const AppConfig = {
  site_name: 'Starter',
  title: 'Nextjs Starter',
  description: 'Starter code for your Nextjs Boilerplate with Tailwind CSS',
  locale: 'en'
};

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;