/* @ds-bundle: {"format":4,"namespace":"IntermediairUitzendbureauDesignSystem_650bf4","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"ContentCard","sourcePath":"components/cards/ContentCard.jsx"},{"name":"JobCard","sourcePath":"components/cards/JobCard.jsx"},{"name":"Quote","sourcePath":"components/cards/Quote.jsx"},{"name":"Breadcrumb","sourcePath":"components/display/Breadcrumb.jsx"},{"name":"CategoryLabel","sourcePath":"components/display/CategoryLabel.jsx"},{"name":"Icon","sourcePath":"components/display/Icon.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SearchBar","sourcePath":"components/forms/SearchBar.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"d54f1f64417c","components/cards/ContentCard.jsx":"39a8d5cd65d2","components/cards/JobCard.jsx":"78a6fc061ffc","components/cards/Quote.jsx":"a56e45e54073","components/display/Breadcrumb.jsx":"d2b23ee44760","components/display/CategoryLabel.jsx":"9688056d8843","components/display/Icon.jsx":"d6b7afa425c9","components/display/Tag.jsx":"f5aa06f470b9","components/forms/Input.jsx":"a3c9b73bec83","components/forms/SearchBar.jsx":"b4398e14cfc5","components/forms/Select.jsx":"ee5573b94f7d","ui_kits/website/FilterPanel.jsx":"90acd82c0493","ui_kits/website/HeroSearch.jsx":"000a709fc32e","ui_kits/website/JobGrid.jsx":"84128940d22b","ui_kits/website/SiteFooter.jsx":"be074815ee90","ui_kits/website/SiteHeader.jsx":"6f75f60aa3ca"},"inlinedExternals":[],"unexposedExports":[{"name":"iconNames","sourcePath":"components/display/Icon.jsx"}]} */

(() => {

const __ds_ns = (window.IntermediairUitzendbureauDesignSystem_650bf4 = window.IntermediairUitzendbureauDesignSystem_650bf4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ArrowRight = ({
  size = 16
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true",
  style: {
    flex: "0 0 auto",
    transition: "transform var(--iu-motion-fast) var(--iu-ease)"
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 12h15M13 6l6 6-6 6",
  stroke: "currentColor",
  strokeWidth: "2.4",
  strokeLinecap: "square",
  strokeLinejoin: "miter"
}));
const base = {
  display: "inline-flex",
  alignItems: "center",
  gap: "var(--iu-space-2)",
  fontFamily: "var(--iu-font-body)",
  fontSize: "var(--iu-button)",
  fontWeight: 700,
  lineHeight: 1,
  textDecoration: "none",
  cursor: "pointer",
  border: "var(--iu-border-width) solid transparent",
  borderRadius: "var(--iu-radius)",
  padding: "18px 32px",
  transition: "background var(--iu-motion-base) var(--iu-ease), color var(--iu-motion-base) var(--iu-ease), border-color var(--iu-motion-base) var(--iu-ease)",
  WebkitTapHighlightColor: "transparent"
};
const sizes = {
  sm: {
    padding: "12px 20px",
    fontSize: "14px"
  },
  md: {},
  lg: {
    padding: "22px 40px",
    fontSize: "18px"
  }
};

/**
 * Primary IU action button. Rectangular, bold, optional right arrow that
 * nudges on hover. Variants: dark (default), brand, outline, text.
 */
function Button({
  variant = "dark",
  size = "md",
  arrow = false,
  as = "button",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    dark: {
      rest: {
        background: "var(--iu-ink)",
        color: "var(--iu-paper)",
        borderColor: "var(--iu-ink)"
      },
      hover: {
        background: "var(--iu-brand)",
        color: "var(--iu-paper)",
        borderColor: "var(--iu-brand)"
      }
    },
    brand: {
      rest: {
        background: "var(--iu-brand)",
        color: "var(--iu-paper)",
        borderColor: "var(--iu-brand)"
      },
      hover: {
        background: "var(--iu-ink)",
        color: "var(--iu-paper)",
        borderColor: "var(--iu-ink)"
      }
    },
    outline: {
      rest: {
        background: "var(--iu-paper)",
        color: "var(--iu-ink)",
        borderColor: "var(--iu-ink)"
      },
      hover: {
        background: "var(--iu-ink)",
        color: "var(--iu-paper)",
        borderColor: "var(--iu-ink)"
      }
    },
    text: {
      rest: {
        background: "transparent",
        color: "var(--iu-ink)",
        borderColor: "transparent",
        padding: "0",
        textDecoration: "underline",
        textUnderlineOffset: "3px",
        textDecorationThickness: "2px"
      },
      hover: {
        background: "transparent",
        color: "var(--iu-brand)",
        borderColor: "transparent"
      }
    }
  };
  const v = variants[variant] || variants.dark;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    onMouseEnter: e => {
      setHover(true);
      rest.onMouseEnter?.(e);
    },
    onMouseLeave: e => {
      setHover(false);
      rest.onMouseLeave?.(e);
    },
    style: {
      ...base,
      ...sizes[size],
      ...v.rest,
      ...(hover ? v.hover : null),
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", null, children), arrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: variant === "text" ? "var(--iu-brand)" : "currentColor",
      transform: hover ? "translateX(5px)" : "translateX(0)",
      transition: "transform var(--iu-motion-fast) var(--iu-ease)"
    }
  }, /*#__PURE__*/React.createElement(ArrowRight, null)));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial/quote block — big orange quote marks, direct statement with the
 * key line bold, compact name + role. Optional portrait to the left.
 */
function Quote({
  quote,
  boldQuote,
  name,
  role,
  image,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      display: "flex",
      gap: "var(--iu-space-8)",
      alignItems: "flex-start",
      background: "var(--iu-surface)",
      padding: "40px",
      margin: 0,
      borderRadius: "var(--iu-radius)",
      flexWrap: "wrap",
      ...style
    }
  }), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name ? `Portret van ${name}` : "",
    style: {
      width: "120px",
      height: "120px",
      objectFit: "cover",
      borderRadius: "var(--iu-radius)",
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 320px",
      display: "flex",
      flexDirection: "column",
      gap: "var(--iu-space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "Georgia, serif",
      fontSize: "56px",
      lineHeight: 0.6,
      color: "var(--iu-brand)",
      fontWeight: 700
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--iu-font-body)",
      fontSize: "20px",
      lineHeight: 1.5,
      color: "var(--iu-ink)"
    }
  }, boldQuote && /*#__PURE__*/React.createElement("strong", null, boldQuote, " "), quote), (name || role) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--iu-font-body)",
      fontSize: "14px"
    }
  }, name && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--iu-brand)",
      fontWeight: 700
    }
  }, name), role && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--iu-ink)",
      display: "block",
      marginTop: "2px"
    }
  }, role))));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Quote.jsx", error: String((e && e.message) || e) }); }

// components/display/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Breadcrumb trail. Parent links grey + underlined; current page black and
 * not linked. Rendered as a nav landmark.
 */
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Kruimelpad"
  }, rest, {
    style: {
      fontFamily: "var(--iu-font-body)",
      fontSize: "14px",
      ...style
    }
  }), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "var(--iu-space-2)"
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--iu-space-2)"
      }
    }, last || !it.href ? /*#__PURE__*/React.createElement("span", {
      "aria-current": last ? "page" : undefined,
      style: {
        color: "var(--iu-ink)",
        fontWeight: last ? 700 : 400
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        color: "var(--iu-muted)",
        textDecoration: "underline",
        textUnderlineOffset: "2px"
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: "var(--iu-muted)"
      }
    }, "/"));
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/display/CategoryLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small rectangular category label. Orange (brand) by default — the flag that
 * sits on job/content cards (Bouw, Industrie, Techniek …); "grey" variant for
 * quiet content categories.
 */
function CategoryLabel({
  variant = "brand",
  children,
  style,
  ...rest
}) {
  const styles = variant === "grey" ? {
    background: "var(--iu-surface)",
    color: "var(--iu-ink)"
  } : {
    background: "var(--iu-brand)",
    color: "var(--iu-paper)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-block",
      fontFamily: "var(--iu-font-body)",
      fontSize: "13px",
      fontWeight: 700,
      lineHeight: 1,
      padding: "6px 12px",
      borderRadius: "var(--iu-radius)",
      ...styles,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { CategoryLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/CategoryLabel.jsx", error: String((e && e.message) || e) }); }

// components/cards/ContentCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nieuws/content card — large image on top, white body with a grey category
 * label, Gilam title, short summary and a text-link CTA. Fully clickable.
 */
function ContentCard({
  image,
  imageAlt = "",
  category,
  title,
  summary,
  cta = "Lees meer",
  href = "#",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      textDecoration: "none",
      background: "var(--iu-paper)",
      border: "1px solid var(--iu-border)",
      borderRadius: "var(--iu-radius)",
      overflow: "hidden",
      transform: hover ? "translateY(-3px)" : "translateY(0)",
      transition: "transform var(--iu-motion-base) var(--iu-ease)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16 / 10",
      overflow: "hidden",
      background: "var(--iu-surface)"
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: hover ? "scale(1.03)" : "scale(1)",
      transition: "transform var(--iu-motion-base) var(--iu-ease)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--iu-space-3)",
      padding: "24px 26px 28px"
    }
  }, category && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.CategoryLabel, {
    variant: "grey"
  }, category)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--iu-font-display)",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: 1.15,
      color: "var(--iu-ink)"
    }
  }, title), summary && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--iu-font-body)",
      fontSize: "16px",
      lineHeight: 1.6875,
      color: "var(--iu-ink)",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, summary), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "span",
    variant: "text",
    arrow: true
  }, cta)));
}
Object.assign(__ds_scope, { ContentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ContentCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide-derived line paths (ISC). IU uses simple functional line icons at
   14–18px, tinted orange for metadata. See ICONOGRAPHY in readme.md. */
const PATHS = {
  "arrow-right": "M5 12h14M13 5l7 7-7 7",
  clock: "M12 6v6l4 2 M12 21a9 9 0 100-18 9 9 0 000 18z",
  "map-pin": "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z M12 10a2 2 0 100-4 2 2 0 000 4z",
  "graduation-cap": "M22 10L12 5 2 10l10 5 10-5z M6 12v5c0 1 3 3 6 3s6-2 6-3v-5",
  coins: "M8 14a6 6 0 100-12 6 6 0 000 12z M16 22a6 6 0 100-12 6 6 0 000 12z",
  clock2: "M12 6v6l4 2",
  user: "M20 21a8 8 0 10-16 0 M12 11a4 4 0 100-8 4 4 0 000 8z",
  search: "M11 19a8 8 0 100-16 8 8 0 000 16z M21 21l-4.3-4.3",
  briefcase: "M20 7H4a1 1 0 00-1 1v11a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1z M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2",
  clock3: "M12 7v5l3 2",
  phone: "M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.5-1.1a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z",
  mail: "M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z M3 6l9 7 9-7",
  menu: "M4 6h16M4 12h16M4 18h16",
  check: "M20 6L9 17l-5-5"
};

/**
 * Simple functional line icon. Inherits currentColor; default 16px. Use the
 * orange brand colour for metadata icons next to text.
 */
function Icon({
  name,
  size = 16,
  color = "currentColor",
  strokeWidth = 2,
  style,
  ...rest
}) {
  const d = PATHS[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    focusable: "false",
    style: {
      flex: "0 0 auto",
      display: "inline-block",
      verticalAlign: "middle",
      ...style
    }
  }, rest), d && d.split(" M").map((seg, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: i === 0 ? seg : "M" + seg,
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
const iconNames = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, iconNames });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Icon.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Light-grey metadata tag with an optional small orange icon — used for job
 * meta (uren, plaats, opleiding, salaris). Rectangular, no radius.
 */
function Tag({
  icon,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--iu-space-2)",
      background: "var(--iu-surface)",
      color: "var(--iu-ink)",
      fontFamily: "var(--iu-font-body)",
      fontSize: "14px",
      fontWeight: 500,
      padding: "6px 12px",
      borderRadius: "var(--iu-radius)",
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    color: "var(--iu-brand)"
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/cards/JobCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vacaturekaart — white card, 1px grey border, orange accent bar at the bottom.
 * Category flag, Gilam title, meta tags and a dark "Bekijk vacature" CTA.
 */
function JobCard({
  category,
  title,
  meta = [],
  description,
  cta = "Bekijk vacature",
  href = "#",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--iu-space-4)",
      background: "var(--iu-paper)",
      border: "1px solid var(--iu-border)",
      borderBottom: `var(--iu-accent-bar) solid var(--iu-brand)`,
      borderRadius: "var(--iu-radius)",
      padding: "28px 30px",
      transform: hover ? "translateY(-3px)" : "translateY(0)",
      transition: "transform var(--iu-motion-base) var(--iu-ease)",
      ...style
    }
  }), category && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.CategoryLabel, null, category)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--iu-font-display)",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: 1.15,
      color: "var(--iu-ink)"
    }
  }, title), meta.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--iu-space-2)"
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i,
    icon: m.icon
  }, m.label))), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--iu-font-body)",
      fontSize: "16px",
      lineHeight: 1.6875,
      color: "var(--iu-ink)"
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--iu-space-1)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "a",
    href: href,
    variant: "dark",
    arrow: true
  }, cta)));
}
Object.assign(__ds_scope, { JobCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/JobCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Rectangular IU text input with a permanent label. White field, 1px grey
 * border, hard corners, black/orange 2px focus outline.
 */
function Input({
  label,
  id,
  hint,
  error,
  type = "text",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? `iu-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--iu-space-2)",
      fontFamily: "var(--iu-font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "14px",
      fontWeight: 700,
      color: "var(--iu-ink)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    id: fieldId,
    type: type,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": hint || error ? `${fieldId}-desc` : undefined,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      fontFamily: "var(--iu-font-body)",
      fontSize: "16px",
      color: "var(--iu-ink)",
      background: "var(--iu-paper)",
      borderRadius: "var(--iu-radius)",
      border: `1px solid ${error ? "var(--iu-brand)" : "var(--iu-border)"}`,
      padding: "20px 16px",
      outline: focus ? `2px solid ${error ? "var(--iu-brand)" : "var(--iu-ink)"}` : "2px solid transparent",
      outlineOffset: "2px",
      transition: "outline-color var(--iu-motion-fast) var(--iu-ease)",
      ...style
    }
  })), (hint || error) && /*#__PURE__*/React.createElement("span", {
    id: `${fieldId}-desc`,
    style: {
      fontSize: "14px",
      color: error ? "var(--iu-brand)" : "var(--iu-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IU search bar — a text field and a square button fused into one rectangle,
 * no gap, no radius. Button is black (default) or orange (brand).
 */
function SearchBar({
  placeholder = "Zoek jouw baan",
  buttonVariant = "dark",
  onSearch,
  buttonLabel = "Zoeken",
  defaultValue = "",
  style,
  ...rest
}) {
  const [value, setValue] = React.useState(defaultValue);
  const [focus, setFocus] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    onSearch?.(value);
  };
  const btnBg = buttonVariant === "brand" ? "var(--iu-brand)" : "var(--iu-ink)";
  return /*#__PURE__*/React.createElement("form", _extends({
    role: "search",
    onSubmit: submit
  }, rest, {
    style: {
      display: "flex",
      width: "100%",
      background: "var(--iu-paper)",
      border: `1px solid ${focus ? "var(--iu-ink)" : "var(--iu-border)"}`,
      outline: focus ? "2px solid var(--iu-ink)" : "2px solid transparent",
      outlineOffset: "2px",
      transition: "outline-color var(--iu-motion-fast) var(--iu-ease)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "search",
    value: value,
    placeholder: placeholder,
    "aria-label": placeholder,
    onChange: e => setValue(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: "1 1 auto",
      minWidth: 0,
      border: "none",
      outline: "none",
      fontFamily: "var(--iu-font-body)",
      fontSize: "16px",
      color: "var(--iu-ink)",
      background: "transparent",
      padding: "18px 16px"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": buttonLabel,
    style: {
      flex: "0 0 auto",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "60px",
      border: "none",
      cursor: "pointer",
      color: "var(--iu-paper)",
      background: btnBg,
      transition: "background var(--iu-motion-base) var(--iu-ease)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--iu-brand-ink)",
    onMouseLeave: e => e.currentTarget.style.background = btnBg
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 20,
    color: "var(--iu-paper)"
  })));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IU select — same height, hard corners and border as Input, with a custom
 * orange chevron. Keeps the rectangular form language.
 */
function Select({
  label,
  id,
  options = [],
  hint,
  style,
  children,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? `iu-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--iu-space-2)",
      fontFamily: "var(--iu-font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "14px",
      fontWeight: 700,
      color: "var(--iu-ink)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    id: fieldId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      fontFamily: "var(--iu-font-body)",
      fontSize: "16px",
      color: "var(--iu-ink)",
      background: "var(--iu-paper)",
      borderRadius: "var(--iu-radius)",
      border: "1px solid var(--iu-border)",
      padding: "20px 44px 20px 16px",
      outline: focus ? "2px solid var(--iu-ink)" : "2px solid transparent",
      outlineOffset: "2px",
      transition: "outline-color var(--iu-motion-fast) var(--iu-ease)",
      cursor: "pointer",
      ...style
    }
  }), children || options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const text = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "16px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    stroke: "var(--iu-brand)",
    strokeWidth: "2.4",
    strokeLinecap: "square"
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--iu-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FilterPanel.jsx
try { (() => {
const {
  Input,
  Select,
  Button,
  Icon
} = window.IntermediairUitzendbureauDesignSystem_650bf4;
const SECTORS = [{
  label: "Techniek",
  n: 42
}, {
  label: "Industrie",
  n: 38
}, {
  label: "Transport en Logistiek",
  n: 27
}, {
  label: "Bouw",
  n: 19
}, {
  label: "Kantoor",
  n: 12
}, {
  label: "Overig",
  n: 8
}];
function FilterPanel() {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      fontFamily: "var(--iu-font-body)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--iu-font-display)",
      fontWeight: 900,
      fontSize: "32px",
      margin: "0 0 20px",
      color: "var(--iu-ink)"
    }
  }, "Filters"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Zoekterm",
    placeholder: "Bijv. monteur"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Plaats",
    placeholder: "Zwolle"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Afstand",
    options: ["5 km", "10 km", "25 km", "50 km", "Heel Nederland"]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "brand",
    arrow: true,
    style: {
      width: "100%",
      justifyContent: "center"
    }
  }, "Zoeken")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--iu-border)",
      margin: "28px 0",
      paddingTop: "24px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--iu-font-display)",
      fontWeight: 700,
      fontSize: "18px",
      margin: "0 0 14px",
      color: "var(--iu-ink)"
    }
  }, "Vakgebied"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }
  }, SECTORS.map(s => /*#__PURE__*/React.createElement("label", {
    key: s.label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "16px",
      color: "var(--iu-ink)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    style: {
      width: "18px",
      height: "18px",
      accentColor: "var(--iu-brand)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--iu-muted)"
    }
  }, s.n))))));
}
window.FilterPanel = FilterPanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FilterPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HeroSearch.jsx
try { (() => {
const {
  SearchBar,
  Button
} = window.IntermediairUitzendbureauDesignSystem_650bf4;
function HeroSearch({
  onSearch
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--iu-hero-radial)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "20px",
      right: "24px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "sm",
    arrow: true
  }, "Nieuwe baan? Schrijf je in!")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--iu-container)",
      margin: "0 auto",
      padding: "0 24px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "end",
      minHeight: "440px",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "end"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/beelden.jpg",
    alt: "Medewerker met karakter bijt op een tablet",
    style: {
      width: "100%",
      maxWidth: "460px",
      display: "block",
      mixBlendMode: "multiply"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: "64px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--iu-font-display)",
      fontWeight: 900,
      fontSize: "clamp(56px,6vw,88px)",
      lineHeight: 0.9,
      color: "var(--iu-ink)",
      margin: "0 0 24px"
    }
  }, "Gaan met", /*#__PURE__*/React.createElement("br", null), "die baan!"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "460px"
    }
  }, /*#__PURE__*/React.createElement(SearchBar, {
    placeholder: "Zoek jouw baan",
    onSearch: onSearch
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--iu-font-body)",
      fontSize: "15px",
      color: "var(--iu-ink)",
      margin: "12px 0 0"
    }
  }, "Of ga ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onSearch?.("");
    },
    style: {
      color: "var(--iu-ink)",
      fontWeight: 700
    }
  }, "direct naar alle vacatures!")))));
}
window.HeroSearch = HeroSearch;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HeroSearch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/JobGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  JobCard,
  Button
} = window.IntermediairUitzendbureauDesignSystem_650bf4;
const JOBS = [{
  category: "Bouw",
  title: "Monteur kozijnen",
  meta: [{
    icon: "clock",
    label: "40 uur"
  }, {
    icon: "map-pin",
    label: "Twello"
  }]
}, {
  category: "Industrie",
  title: "Allround medewerker metaaltechniek",
  meta: [{
    icon: "clock",
    label: "40 uur"
  }, {
    icon: "map-pin",
    label: "Wilp gld"
  }]
}, {
  category: "Techniek",
  title: "Grondwerker Zwolle",
  meta: [{
    icon: "clock",
    label: "32 – 40 uur"
  }, {
    icon: "map-pin",
    label: "Zwolle"
  }]
}, {
  category: "Overig",
  title: "Productiemedewerker metaal",
  meta: [{
    icon: "clock",
    label: "32 – 40 uur"
  }, {
    icon: "map-pin",
    label: "Haaksbergen"
  }]
}, {
  category: "Transport en Logistiek",
  title: "Verhuizer / vrachtwagenchauffeur",
  meta: [{
    icon: "clock",
    label: "36 – 40 uur"
  }, {
    icon: "map-pin",
    label: "Zwolle"
  }]
}, {
  category: "Transport en Logistiek",
  title: "Logistiek medewerker",
  meta: [{
    icon: "clock",
    label: "32 – 40 uur"
  }, {
    icon: "map-pin",
    label: "Zwolle"
  }]
}];
function JobGrid({
  jobs = JOBS,
  onOpen,
  columns = 3,
  showAllTile = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: "20px"
    }
  }, jobs.map((j, i) => /*#__PURE__*/React.createElement(JobCard, _extends({
    key: i
  }, j, {
    onClick: () => onOpen?.(j),
    style: {
      cursor: "pointer"
    }
  }))), showAllTile && /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen?.(null);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: "var(--iu-ink)",
      color: "var(--iu-paper)",
      padding: "30px",
      textDecoration: "none",
      minHeight: "180px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--iu-font-display)",
      fontWeight: 900,
      fontSize: "32px",
      lineHeight: 1.05
    }
  }, "Bekijk alle", /*#__PURE__*/React.createElement("br", null), "vacatures"), /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7",
    stroke: "var(--iu-brand)",
    strokeWidth: "2.4",
    strokeLinecap: "square"
  })))));
}
window.JobGrid = JobGrid;
window.JOBS = JOBS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/JobGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
const {
  Icon
} = window.IntermediairUitzendbureauDesignSystem_650bf4;
function SiteFooter() {
  const cols = [["Diensten", "Vacatures", "50+ Werkt", "Inloggen"], ["Vakgebieden", "Partners", "Kennisbank", "Werken bij"]];
  const cities = ["Zwolle", "Deventer", "Apeldoorn", "Lichtenvoorde"];
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--iu-surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--iu-container)",
      margin: "0 auto",
      padding: "56px 24px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/beeldmerk.png",
    alt: "",
    style: {
      height: "40px",
      display: "block",
      marginBottom: "16px"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--iu-font-display)",
      fontWeight: 700,
      fontSize: "22px",
      margin: "0 0 16px",
      color: "var(--iu-ink)"
    }
  }, "Intermediair Uitzendbureau"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "8px 24px",
      maxWidth: "280px"
    }
  }, cities.map(c => /*#__PURE__*/React.createElement("a", {
    key: c,
    href: "#",
    style: {
      fontSize: "14px",
      color: "var(--iu-ink)",
      textDecoration: "underline",
      textUnderlineOffset: "2px"
    }
  }, c))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--iu-font-body)",
      fontSize: "14px",
      color: "var(--iu-muted)",
      margin: "24px 0 0"
    }
  }, "Onderdeel van IU Groep")), cols.map((col, i) => /*#__PURE__*/React.createElement("ul", {
    key: i,
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, col.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--iu-font-body)",
      fontSize: "16px",
      fontWeight: 700,
      color: l === "Inloggen" || l === "Werken bij" ? "var(--iu-brand)" : "var(--iu-ink)",
      textDecoration: "none"
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--iu-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--iu-container)",
      margin: "0 auto",
      padding: "18px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--iu-font-body)",
      fontSize: "13px",
      color: "var(--iu-paper)"
    }
  }, "Copyright \xA9 2026 Intermediair Uitzendbureau \xB7 Privacy- & cookieverklaring"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px"
    }
  }, ["phone", "mail", "user"].map(n => /*#__PURE__*/React.createElement(Icon, {
    key: n,
    name: n,
    size: 18,
    color: "var(--iu-paper)"
  }))))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
const {
  Icon
} = window.IntermediairUitzendbureauDesignSystem_650bf4;
function SiteHeader({
  active = "Vacatures",
  onNavigate
}) {
  const links = ["Vacatures", "Werkgever", "Over ons", "Actueel", "Contact"];
  const arrowed = {
    Vacatures: true,
    Werkgever: true
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: "var(--iu-paper)",
      borderBottom: "1px solid var(--iu-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--iu-container)",
      margin: "0 auto",
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate?.("home");
    },
    style: {
      display: "inline-flex",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "Intermediair Uitzendbureau",
    style: {
      height: "46px",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      background: "var(--iu-surface)",
      padding: "6px"
    }
  }, links.map(l => {
    const isActive = l === active;
    return /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate?.(l);
      },
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--iu-font-body)",
        fontSize: "16px",
        fontWeight: 700,
        color: isActive ? "var(--iu-brand)" : "var(--iu-ink)",
        textDecoration: "none",
        padding: "12px 16px"
      }
    }, l, arrowed[l] && /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14,
      color: "var(--iu-brand)"
    }));
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--iu-font-body)",
      fontSize: "16px",
      fontWeight: 700,
      color: "var(--iu-ink)",
      textDecoration: "none",
      padding: "12px 16px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 16,
    color: "var(--iu-brand)"
  }), "Inloggen", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14,
    color: "var(--iu-brand)"
  })))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ContentCard = __ds_scope.ContentCard;

__ds_ns.JobCard = __ds_scope.JobCard;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.CategoryLabel = __ds_scope.CategoryLabel;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.Select = __ds_scope.Select;

})();
