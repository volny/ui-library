import { createElement, PureComponent, Component, Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var styles = { "box": "_0 _25 _2p", "xsDisplayNone": "_1", "xsDisplayFlex": "_2", "xsDisplayBlock": "_3", "xsDisplayInlineBlock": "_4", "smDisplayNone": "_5", "smDisplayFlex": "_6", "smDisplayBlock": "_7", "smDisplayInlineBlock": "_8", "mdDisplayNone": "_9", "mdDisplayFlex": "_a", "mdDisplayBlock": "_b", "mdDisplayInlineBlock": "_c", "lgDisplayNone": "_d", "lgDisplayFlex": "_e", "lgDisplayBlock": "_f", "lgDisplayInlineBlock": "_g", "xsDirectionRow": "_h", "xsDirectionColumn": "_i", "smDirectionRow": "_j", "smDirectionColumn": "_k", "mdDirectionRow": "_l", "mdDirectionColumn": "_m", "lgDirectionRow": "_n", "lgDirectionColumn": "_o", "xsCol0": "_p", "xsCol1": "_q _3m", "xsCol2": "_r _3n", "xsCol3": "_s _3o", "xsCol4": "_t _3p", "xsCol5": "_u _3q", "xsCol6": "_v _3r", "xsCol7": "_w _3s", "xsCol8": "_x _3t", "xsCol9": "_y _3u", "xsCol10": "_z _3v", "xsCol11": "_10 _3w", "xsCol12": "_11 _3x", "smCol0": "_12", "smCol1": "_13 _3y", "smCol2": "_14 _3z", "smCol3": "_15 _40", "smCol4": "_16 _41", "smCol5": "_17 _42", "smCol6": "_18 _43", "smCol7": "_19 _44", "smCol8": "_1a _45", "smCol9": "_1b _46", "smCol10": "_1c _47", "smCol11": "_1d _48", "smCol12": "_1e _49", "mdCol0": "_1f", "mdCol1": "_1g _4a", "mdCol2": "_1h _4b", "mdCol3": "_1i _4c", "mdCol4": "_1j _4d", "mdCol5": "_1k _4e", "mdCol6": "_1l _4f", "mdCol7": "_1m _4g", "mdCol8": "_1n _4h", "mdCol9": "_1o _4i", "mdCol10": "_1p _4j", "mdCol11": "_1q _4k", "mdCol12": "_1r _4l", "lgCol0": "_1s", "lgCol1": "_1t _4m", "lgCol2": "_1u _4n", "lgCol3": "_1v _4o", "lgCol4": "_1w _4p", "lgCol5": "_1x _4q", "lgCol6": "_1y _4r", "lgCol7": "_1z _4s", "lgCol8": "_20 _4t", "lgCol9": "_21 _4u", "lgCol10": "_22 _4v", "lgCol11": "_23 _4w", "lgCol12": "_24 _4x" };

var borders = { "border": "_4y", "borderTop": "_4z", "borderRight": "_50", "borderBottom": "_51", "borderLeft": "_52", "square": "_53", "circle": "_54", "pill": "_55", "rounded": "_56", "roundedTop": "_57", "roundedRight": "_58", "roundedBottom": "_59", "roundedLeft": "_5a", "noBorder": "_5b" };

var colors = { "red": "_5c", "redBg": "_5d", "white": "_5e", "whiteBg": "_5f", "lightGray": "_5g", "lightGrayBg": "_5h", "gray": "_5i", "grayBg": "_5j", "darkGray": "_5k", "darkGrayBg": "_5l", "green": "_5m", "greenBg": "_5n", "pine": "_5o", "pineBg": "_5p", "olive": "_5q", "oliveBg": "_5r", "blue": "_5s", "blueBg": "_5t", "navy": "_5u", "navyBg": "_5v", "midnight": "_5w", "midnightBg": "_5x", "purple": "_5y", "purpleBg": "_5z", "orchid": "_60", "orchidBg": "_61", "eggplant": "_62", "eggplantBg": "_63", "maroon": "_64", "maroonBg": "_65", "watermelon": "_66", "watermelonBg": "_67", "orange": "_68", "orangeBg": "_69", "transparentBg": "_6a", "lightWashBg": "_6b", "darkWashBg": "_6c" };

var layout = { "block": "_27", "inline": "_28", "inlineBlock": "_29", "table": "_2a", "overflowHidden": "_2b", "overflowScroll": "_2c", "overflowScrollX": "_2d", "overflowScrollY": "_2e", "overflowAuto": "_2f", "fit": "_2g", "relative": "_2h", "fixed": "_2i", "absolute": "_2j", "sticky": "_2k", "top0": "_2l", "right0": "_2m", "bottom0": "_2n", "left0": "_2o", "borderBox": "_2p", "-webkit-box-flex": "_2q", "-webkit-flex": "_2q", "-ms-flex": "_2q", "flex": "_2q", "smFlex": "_2r", "mdFlex": "_2s", "lgFlex": "_2t", "flexColumn": "_2u", "flexWrap": "_2v", "itemsStart": "_2w", "itemsEnd": "_2x", "itemsCenter": "_2y", "itemsBaseline": "_2z", "itemsStretch": "_30", "selfStart": "_31", "selfEnd": "_32", "selfCenter": "_33", "selfBaseline": "_34", "selfStretch": "_35", "justifyStart": "_36", "justifyEnd": "_37", "justifyCenter": "_38", "justifyBetween": "_39", "justifyAround": "_3a", "contentStart": "_3b", "contentEnd": "_3c", "contentCenter": "_3d", "contentBetween": "_3e", "contentAround": "_3f", "contentStretch": "_3g", "flexGrow": "_3h", "flexNone": "_3i", "orderFirst": "_3j", "orderLast": "_3k" };

var whitespace = { "marginTop1": "_6d", "marginRight1": "_6e", "marginBottom1": "_6f", "marginLeft1": "_6g", "marginTopN1": "_6h", "marginRightN1": "_6i", "marginBottomN1": "_6j", "marginLeftN1": "_6k", "paddingY1": "_6l", "paddingX1": "_6m", "marginTop2": "_6n", "marginRight2": "_6o", "marginBottom2": "_6p", "marginLeft2": "_6q", "marginTopN2": "_6r", "marginRightN2": "_6s", "marginBottomN2": "_6t", "marginLeftN2": "_6u", "paddingY2": "_6v", "paddingX2": "_6w", "marginTop3": "_6x", "marginRight3": "_6y", "marginBottom3": "_6z", "marginLeft3": "_70", "marginTopN3": "_71", "marginRightN3": "_72", "marginBottomN3": "_73", "marginLeftN3": "_74", "paddingY3": "_75", "paddingX3": "_76", "marginTop4": "_77", "marginRight4": "_78", "marginBottom4": "_79", "marginLeft4": "_7a", "marginTopN4": "_7b", "marginRightN4": "_7c", "marginBottomN4": "_7d", "marginLeftN4": "_7e", "paddingY4": "_7f", "paddingX4": "_7g", "marginTop5": "_7h", "marginRight5": "_7i", "marginBottom5": "_7j", "marginLeft5": "_7k", "marginTopN5": "_7l", "marginRightN5": "_7m", "marginBottomN5": "_7n", "marginLeftN5": "_7o", "paddingY5": "_7p", "paddingX5": "_7q", "marginTop6": "_7r", "marginRight6": "_7s", "marginBottom6": "_7t", "marginLeft6": "_7u", "marginTopN6": "_7v", "marginRightN6": "_7w", "marginBottomN6": "_7x", "marginLeftN6": "_7y", "paddingY6": "_7z", "paddingX6": "_80", "marginTop7": "_81", "marginRight7": "_82", "marginBottom7": "_83", "marginLeft7": "_84", "marginTopN7": "_85", "marginRightN7": "_86", "marginBottomN7": "_87", "marginLeftN7": "_88", "paddingY7": "_89", "paddingX7": "_8a", "marginTop8": "_8b", "marginRight8": "_8c", "marginBottom8": "_8d", "marginLeft8": "_8e", "marginTopN8": "_8f", "marginRightN8": "_8g", "marginBottomN8": "_8h", "marginLeftN8": "_8i", "paddingY8": "_8j", "paddingX8": "_8k", "marginTop9": "_8l", "marginRight9": "_8m", "marginBottom9": "_8n", "marginLeft9": "_8o", "marginTopN9": "_8p", "marginRightN9": "_8q", "marginBottomN9": "_8r", "marginLeftN9": "_8s", "paddingY9": "_8t", "paddingX9": "_8u", "marginTop10": "_8v", "marginRight10": "_8w", "marginBottom10": "_8x", "marginLeft10": "_8y", "marginTopN10": "_8z", "marginRightN10": "_90", "marginBottomN10": "_91", "marginLeftN10": "_92", "paddingY10": "_93", "paddingX10": "_94", "marginTop11": "_95", "marginRight11": "_96", "marginBottom11": "_97", "marginLeft11": "_98", "marginTopN11": "_99", "marginRightN11": "_9a", "marginBottomN11": "_9b", "marginLeftN11": "_9c", "paddingY11": "_9d", "paddingX11": "_9e", "marginTop12": "_9f", "marginRight12": "_9g", "marginBottom12": "_9h", "marginLeft12": "_9i", "marginTopN12": "_9j", "marginRightN12": "_9k", "marginBottomN12": "_9l", "marginLeftN12": "_9m", "paddingY12": "_9n", "paddingX12": "_9o", "smMarginTop1": "_9p", "smMarginRight1": "_9q", "smMarginBottom1": "_9r", "smMarginLeft1": "_9s", "smMarginTopN1": "_9t", "smMarginRightN1": "_9u", "smMarginBottomN1": "_9v", "smMarginLeftN1": "_9w", "smPaddingY1": "_9x", "smPaddingX1": "_9y", "smMarginTop2": "_9z", "smMarginRight2": "_a0", "smMarginBottom2": "_a1", "smMarginLeft2": "_a2", "smMarginTopN2": "_a3", "smMarginRightN2": "_a4", "smMarginBottomN2": "_a5", "smMarginLeftN2": "_a6", "smPaddingY2": "_a7", "smPaddingX2": "_a8", "smMarginTop3": "_a9", "smMarginRight3": "_aa", "smMarginBottom3": "_ab", "smMarginLeft3": "_ac", "smMarginTopN3": "_ad", "smMarginRightN3": "_ae", "smMarginBottomN3": "_af", "smMarginLeftN3": "_ag", "smPaddingY3": "_ah", "smPaddingX3": "_ai", "smMarginTop4": "_aj", "smMarginRight4": "_ak", "smMarginBottom4": "_al", "smMarginLeft4": "_am", "smMarginTopN4": "_an", "smMarginRightN4": "_ao", "smMarginBottomN4": "_ap", "smMarginLeftN4": "_aq", "smPaddingY4": "_ar", "smPaddingX4": "_as", "smMarginTop5": "_at", "smMarginRight5": "_au", "smMarginBottom5": "_av", "smMarginLeft5": "_aw", "smMarginTopN5": "_ax", "smMarginRightN5": "_ay", "smMarginBottomN5": "_az", "smMarginLeftN5": "_b0", "smPaddingY5": "_b1", "smPaddingX5": "_b2", "smMarginTop6": "_b3", "smMarginRight6": "_b4", "smMarginBottom6": "_b5", "smMarginLeft6": "_b6", "smMarginTopN6": "_b7", "smMarginRightN6": "_b8", "smMarginBottomN6": "_b9", "smMarginLeftN6": "_ba", "smPaddingY6": "_bb", "smPaddingX6": "_bc", "smMarginTop7": "_bd", "smMarginRight7": "_be", "smMarginBottom7": "_bf", "smMarginLeft7": "_bg", "smMarginTopN7": "_bh", "smMarginRightN7": "_bi", "smMarginBottomN7": "_bj", "smMarginLeftN7": "_bk", "smPaddingY7": "_bl", "smPaddingX7": "_bm", "smMarginTop8": "_bn", "smMarginRight8": "_bo", "smMarginBottom8": "_bp", "smMarginLeft8": "_bq", "smMarginTopN8": "_br", "smMarginRightN8": "_bs", "smMarginBottomN8": "_bt", "smMarginLeftN8": "_bu", "smPaddingY8": "_bv", "smPaddingX8": "_bw", "smMarginTop9": "_bx", "smMarginRight9": "_by", "smMarginBottom9": "_bz", "smMarginLeft9": "_c0", "smMarginTopN9": "_c1", "smMarginRightN9": "_c2", "smMarginBottomN9": "_c3", "smMarginLeftN9": "_c4", "smPaddingY9": "_c5", "smPaddingX9": "_c6", "smMarginTop10": "_c7", "smMarginRight10": "_c8", "smMarginBottom10": "_c9", "smMarginLeft10": "_ca", "smMarginTopN10": "_cb", "smMarginRightN10": "_cc", "smMarginBottomN10": "_cd", "smMarginLeftN10": "_ce", "smPaddingY10": "_cf", "smPaddingX10": "_cg", "smMarginTop11": "_ch", "smMarginRight11": "_ci", "smMarginBottom11": "_cj", "smMarginLeft11": "_ck", "smMarginTopN11": "_cl", "smMarginRightN11": "_cm", "smMarginBottomN11": "_cn", "smMarginLeftN11": "_co", "smPaddingY11": "_cp", "smPaddingX11": "_cq", "smMarginTop12": "_cr", "smMarginRight12": "_cs", "smMarginBottom12": "_ct", "smMarginLeft12": "_cu", "smMarginTopN12": "_cv", "smMarginRightN12": "_cw", "smMarginBottomN12": "_cx", "smMarginLeftN12": "_cy", "smPaddingY12": "_cz", "smPaddingX12": "_d0", "mdMarginTop1": "_d1", "mdMarginRight1": "_d2", "mdMarginBottom1": "_d3", "mdMarginLeft1": "_d4", "mdMarginTopN1": "_d5", "mdMarginRightN1": "_d6", "mdMarginBottomN1": "_d7", "mdMarginLeftN1": "_d8", "mdPaddingY1": "_d9", "mdPaddingX1": "_da", "mdMarginTop2": "_db", "mdMarginRight2": "_dc", "mdMarginBottom2": "_dd", "mdMarginLeft2": "_de", "mdMarginTopN2": "_df", "mdMarginRightN2": "_dg", "mdMarginBottomN2": "_dh", "mdMarginLeftN2": "_di", "mdPaddingY2": "_dj", "mdPaddingX2": "_dk", "mdMarginTop3": "_dl", "mdMarginRight3": "_dm", "mdMarginBottom3": "_dn", "mdMarginLeft3": "_do", "mdMarginTopN3": "_dp", "mdMarginRightN3": "_dq", "mdMarginBottomN3": "_dr", "mdMarginLeftN3": "_ds", "mdPaddingY3": "_dt", "mdPaddingX3": "_du", "mdMarginTop4": "_dv", "mdMarginRight4": "_dw", "mdMarginBottom4": "_dx", "mdMarginLeft4": "_dy", "mdMarginTopN4": "_dz", "mdMarginRightN4": "_e0", "mdMarginBottomN4": "_e1", "mdMarginLeftN4": "_e2", "mdPaddingY4": "_e3", "mdPaddingX4": "_e4", "mdMarginTop5": "_e5", "mdMarginRight5": "_e6", "mdMarginBottom5": "_e7", "mdMarginLeft5": "_e8", "mdMarginTopN5": "_e9", "mdMarginRightN5": "_ea", "mdMarginBottomN5": "_eb", "mdMarginLeftN5": "_ec", "mdPaddingY5": "_ed", "mdPaddingX5": "_ee", "mdMarginTop6": "_ef", "mdMarginRight6": "_eg", "mdMarginBottom6": "_eh", "mdMarginLeft6": "_ei", "mdMarginTopN6": "_ej", "mdMarginRightN6": "_ek", "mdMarginBottomN6": "_el", "mdMarginLeftN6": "_em", "mdPaddingY6": "_en", "mdPaddingX6": "_eo", "mdMarginTop7": "_ep", "mdMarginRight7": "_eq", "mdMarginBottom7": "_er", "mdMarginLeft7": "_es", "mdMarginTopN7": "_et", "mdMarginRightN7": "_eu", "mdMarginBottomN7": "_ev", "mdMarginLeftN7": "_ew", "mdPaddingY7": "_ex", "mdPaddingX7": "_ey", "mdMarginTop8": "_ez", "mdMarginRight8": "_f0", "mdMarginBottom8": "_f1", "mdMarginLeft8": "_f2", "mdMarginTopN8": "_f3", "mdMarginRightN8": "_f4", "mdMarginBottomN8": "_f5", "mdMarginLeftN8": "_f6", "mdPaddingY8": "_f7", "mdPaddingX8": "_f8", "mdMarginTop9": "_f9", "mdMarginRight9": "_fa", "mdMarginBottom9": "_fb", "mdMarginLeft9": "_fc", "mdMarginTopN9": "_fd", "mdMarginRightN9": "_fe", "mdMarginBottomN9": "_ff", "mdMarginLeftN9": "_fg", "mdPaddingY9": "_fh", "mdPaddingX9": "_fi", "mdMarginTop10": "_fj", "mdMarginRight10": "_fk", "mdMarginBottom10": "_fl", "mdMarginLeft10": "_fm", "mdMarginTopN10": "_fn", "mdMarginRightN10": "_fo", "mdMarginBottomN10": "_fp", "mdMarginLeftN10": "_fq", "mdPaddingY10": "_fr", "mdPaddingX10": "_fs", "mdMarginTop11": "_ft", "mdMarginRight11": "_fu", "mdMarginBottom11": "_fv", "mdMarginLeft11": "_fw", "mdMarginTopN11": "_fx", "mdMarginRightN11": "_fy", "mdMarginBottomN11": "_fz", "mdMarginLeftN11": "_g0", "mdPaddingY11": "_g1", "mdPaddingX11": "_g2", "mdMarginTop12": "_g3", "mdMarginRight12": "_g4", "mdMarginBottom12": "_g5", "mdMarginLeft12": "_g6", "mdMarginTopN12": "_g7", "mdMarginRightN12": "_g8", "mdMarginBottomN12": "_g9", "mdMarginLeftN12": "_ga", "mdPaddingY12": "_gb", "mdPaddingX12": "_gc", "lgMarginTop1": "_gd", "lgMarginRight1": "_ge", "lgMarginBottom1": "_gf", "lgMarginLeft1": "_gg", "lgMarginTopN1": "_gh", "lgMarginRightN1": "_gi", "lgMarginBottomN1": "_gj", "lgMarginLeftN1": "_gk", "lgPaddingY1": "_gl", "lgPaddingX1": "_gm", "lgMarginTop2": "_gn", "lgMarginRight2": "_go", "lgMarginBottom2": "_gp", "lgMarginLeft2": "_gq", "lgMarginTopN2": "_gr", "lgMarginRightN2": "_gs", "lgMarginBottomN2": "_gt", "lgMarginLeftN2": "_gu", "lgPaddingY2": "_gv", "lgPaddingX2": "_gw", "lgMarginTop3": "_gx", "lgMarginRight3": "_gy", "lgMarginBottom3": "_gz", "lgMarginLeft3": "_h0", "lgMarginTopN3": "_h1", "lgMarginRightN3": "_h2", "lgMarginBottomN3": "_h3", "lgMarginLeftN3": "_h4", "lgPaddingY3": "_h5", "lgPaddingX3": "_h6", "lgMarginTop4": "_h7", "lgMarginRight4": "_h8", "lgMarginBottom4": "_h9", "lgMarginLeft4": "_ha", "lgMarginTopN4": "_hb", "lgMarginRightN4": "_hc", "lgMarginBottomN4": "_hd", "lgMarginLeftN4": "_he", "lgPaddingY4": "_hf", "lgPaddingX4": "_hg", "lgMarginTop5": "_hh", "lgMarginRight5": "_hi", "lgMarginBottom5": "_hj", "lgMarginLeft5": "_hk", "lgMarginTopN5": "_hl", "lgMarginRightN5": "_hm", "lgMarginBottomN5": "_hn", "lgMarginLeftN5": "_ho", "lgPaddingY5": "_hp", "lgPaddingX5": "_hq", "lgMarginTop6": "_hr", "lgMarginRight6": "_hs", "lgMarginBottom6": "_ht", "lgMarginLeft6": "_hu", "lgMarginTopN6": "_hv", "lgMarginRightN6": "_hw", "lgMarginBottomN6": "_hx", "lgMarginLeftN6": "_hy", "lgPaddingY6": "_hz", "lgPaddingX6": "_i0", "lgMarginTop7": "_i1", "lgMarginRight7": "_i2", "lgMarginBottom7": "_i3", "lgMarginLeft7": "_i4", "lgMarginTopN7": "_i5", "lgMarginRightN7": "_i6", "lgMarginBottomN7": "_i7", "lgMarginLeftN7": "_i8", "lgPaddingY7": "_i9", "lgPaddingX7": "_ia", "lgMarginTop8": "_ib", "lgMarginRight8": "_ic", "lgMarginBottom8": "_id", "lgMarginLeft8": "_ie", "lgMarginTopN8": "_if", "lgMarginRightN8": "_ig", "lgMarginBottomN8": "_ih", "lgMarginLeftN8": "_ii", "lgPaddingY8": "_ij", "lgPaddingX8": "_ik", "lgMarginTop9": "_il", "lgMarginRight9": "_im", "lgMarginBottom9": "_in", "lgMarginLeft9": "_io", "lgMarginTopN9": "_ip", "lgMarginRightN9": "_iq", "lgMarginBottomN9": "_ir", "lgMarginLeftN9": "_is", "lgPaddingY9": "_it", "lgPaddingX9": "_iu", "lgMarginTop10": "_iv", "lgMarginRight10": "_iw", "lgMarginBottom10": "_ix", "lgMarginLeft10": "_iy", "lgMarginTopN10": "_iz", "lgMarginRightN10": "_j0", "lgMarginBottomN10": "_j1", "lgMarginLeftN10": "_j2", "lgPaddingY10": "_j3", "lgPaddingX10": "_j4", "lgMarginTop11": "_j5", "lgMarginRight11": "_j6", "lgMarginBottom11": "_j7", "lgMarginLeft11": "_j8", "lgMarginTopN11": "_j9", "lgMarginRightN11": "_ja", "lgMarginBottomN11": "_jb", "lgMarginLeftN11": "_jc", "lgPaddingY11": "_jd", "lgPaddingX11": "_je", "lgMarginTop12": "_jf", "lgMarginRight12": "_jg", "lgMarginBottom12": "_jh", "lgMarginLeft12": "_ji", "lgMarginTopN12": "_jj", "lgMarginRightN12": "_jk", "lgMarginBottomN12": "_jl", "lgMarginLeftN12": "_jm", "lgPaddingY12": "_jn", "lgPaddingX12": "_jo" };

var whitespace$1 = { "mlAuto": "_jp", "mrAuto": "_jq", "m0": "_jr", "mt0": "_js", "mr0": "_jt", "mb0": "_ju", "ml0": "_jv", "p0": "_jw", "px0": "_jx", "py0": "_jy", "m1": "_jz", "mt1": "_k0", "mr1": "_k1", "mb1": "_k2", "ml1": "_k3", "mn1": "_k4", "mtn1": "_k5", "mbn1": "_k6", "mln1": "_k7", "mrn1": "_k8", "mxn1": "_k9", "myn1": "_ka", "p1": "_kb", "px1": "_kc", "py1": "_kd", "m2": "_ke", "mt2": "_kf", "mr2": "_kg", "mb2": "_kh", "ml2": "_ki", "mn2": "_kj", "mtn2": "_kk", "mbn2": "_kl", "mln2": "_km", "mrn2": "_kn", "mxn2": "_ko", "myn2": "_kp", "p2": "_kq", "px2": "_kr", "py2": "_ks", "m3": "_kt", "mt3": "_ku", "mr3": "_kv", "mb3": "_kw", "ml3": "_kx", "mn3": "_ky", "mtn3": "_kz", "mbn3": "_l0", "mln3": "_l1", "mrn3": "_l2", "mxn3": "_l3", "myn3": "_l4", "p3": "_l5", "px3": "_l6", "py3": "_l7", "m4": "_l8", "mt4": "_l9", "mr4": "_la", "mb4": "_lb", "ml4": "_lc", "mn4": "_ld", "mtn4": "_le", "mbn4": "_lf", "mln4": "_lg", "mrn4": "_lh", "mxn4": "_li", "myn4": "_lj", "p4": "_lk", "px4": "_ll", "py4": "_lm", "m5": "_ln", "mt5": "_lo", "mr5": "_lp", "mb5": "_lq", "ml5": "_lr", "mn5": "_ls", "mtn5": "_lt", "mbn5": "_lu", "mln5": "_lv", "mrn5": "_lw", "mxn5": "_lx", "myn5": "_ly", "p5": "_lz", "px5": "_m0", "py5": "_m1", "m6": "_m2", "mt6": "_m3", "mr6": "_m4", "mb6": "_m5", "ml6": "_m6", "mn6": "_m7", "mtn6": "_m8", "mbn6": "_m9", "mln6": "_ma", "mrn6": "_mb", "mxn6": "_mc", "myn6": "_md", "p6": "_me", "px6": "_mf", "py6": "_mg" };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var identity = function identity() {
  return {
    className: new Set(),
    inlineStyle: {}
  };
};

/*

Style is a monoid that capture the "to-be-applied" styles (inline and classes)
for a Box. It's basically set that is closed under an associative binary
operation and has an identity element such that for all HA HA HA. Yes, it's a
monoid, which sounds scary but it's not really and actually super useful. All
that means is that basically you can do two things with it:

    1. concat(concat(a, b), c) === concat(a, concat(b, c));
    2. concat(identity(), a) === concat(a, identity()) === a;

What that means is that it's really easy to compose styles together and the
order in which you do so doesn't really matter.

*/

// TODO: This type should be opaque, however the Babel parser doesn't support
//       the opaque syntax yet.


var fromClassName = function fromClassName() {
  for (var _len = arguments.length, classNames = Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  return {
    className: new Set(classNames),
    inlineStyle: {}
  };
};

var fromInlineStyle = function fromInlineStyle(inlineStyle) {
  return {
    className: new Set(),
    inlineStyle: inlineStyle
  };
};

var concat = function concat(styles) {
  return styles.reduce(function (_ref, _ref2) {
    var classNameA = _ref.className,
        inlineStyleA = _ref.inlineStyle;
    var classNameB = _ref2.className,
        inlineStyleB = _ref2.inlineStyle;
    return {
      className: new Set([].concat(toConsumableArray(classNameA), toConsumableArray(classNameB))),
      inlineStyle: _extends({}, inlineStyleA, inlineStyleB)
    };
  }, identity());
};

var mapClassName = function mapClassName(fn) {
  return function (_ref3) {
    var className = _ref3.className,
        inlineStyle = _ref3.inlineStyle;
    return {
      className: new Set(Array.from(className).map(fn)),
      inlineStyle: inlineStyle
    };
  };
};

var toProps = function toProps(_ref4) {
  var className = _ref4.className,
      inlineStyle = _ref4.inlineStyle;

  var props = {};

  if (className.size > 0) {
    // Sorting here ensures that classNames are always stable, reducing diff
    // churn. Box usually has a small number of properties so it's not a perf
    // concern.
    props.className = Array.from(className).sort().join(' ');
  }

  if (Object.keys(inlineStyle).length > 0) {
    props.style = inlineStyle;
  }

  return props;
};

/*

Transforms

These are a collection of a few functors that take values and returns Style's. OMG, I used the word functor - it's really just a fancy word for function.

*/

// Adds a classname when a property is present.
//
//     <Box top />
//
var toggle = function toggle() {
  for (var _len = arguments.length, classNames = Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  return function (val) {
    return val ? fromClassName.apply(undefined, classNames) : identity();
  };
};

// Maps string values to classes
//
//     <Box alignItems="center" />
//
var mapping = function mapping(map) {
  return function (val) {
    return Object.prototype.hasOwnProperty.call(map, val) ? fromClassName(map[val]) : identity();
  };
};

// Maps a range of integers to a range of classnames
//
//     <Box padding={1} />
//
var range = function range(scale) {
  return function (n) {
    return fromClassName('' + scale + (n < 0 ? 'N' + Math.abs(n) : n));
  };
};

// Like `range`, maps a range of integers to a range of classnames, excluding
// zero values.
//
//     <Box padding={0} />
var rangeWithoutZero = function rangeWithoutZero(scale) {
  return function (n) {
    return n === 0 ? identity() : range(scale)(n);
  };
};

// Binds a string classname to the value in an object. Useful when interacting
// with ranges that need to come dynamically from a style object. This is
// similar to the NPM package 'classnames/bind'.
var bind = function bind(fn, scope) {
  return function (val) {
    return mapClassName(function (name) {
      return scope[name];
    })(fn(val));
  };
};

// This takes a series of the previously defined functors, runs them all
// against a value and returns the set of their classnames.
var union = function union() {
  for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function (val) {
    return concat(fns.map(function (fn) {
      return fn(val);
    }));
  };
};

/*

# ProTypes

Box's type definition is exhaustive. With the exception of `dangerouslySetInlineStyle`, values shouldn't be ambigious. That means that we have to type out things like boints, but that's also where Box's magic lies. Also, by putting in extra effort around type definitions here, we can skip extra runtime typechecks in the transformers for performance.

*/

// --

/*

# Transformers

This is where the meat and the bones of Box's transforms are. You can read more about the DSL in `./transforms.js`, but basically they are a small declarative way of specifying how a property (i.e. `marginTop={4}`) gets turned into a CSS class (`marginTop4`).

There's a little preamble here, but it culminates in a big object mapping the actual property names to the transformer values.

*/

var marginTop = bind(rangeWithoutZero('marginTop'), whitespace);
var marginRight = bind(rangeWithoutZero('marginRight'), whitespace);
var marginBottom = bind(rangeWithoutZero('marginBottom'), whitespace);
var marginLeft = bind(rangeWithoutZero('marginLeft'), whitespace);
var margin = union(marginTop, marginBottom, marginLeft, marginRight);

var smMarginTop = bind(rangeWithoutZero('smMarginTop'), whitespace);
var smMarginRight = bind(rangeWithoutZero('smMarginRight'), whitespace);
var smMarginBottom = bind(rangeWithoutZero('smMarginBottom'), whitespace);
var smMarginLeft = bind(rangeWithoutZero('smMarginLeft'), whitespace);
var smMargin = union(smMarginTop, smMarginBottom, smMarginLeft, smMarginRight);

var mdMarginTop = bind(rangeWithoutZero('mdMarginTop'), whitespace);
var mdMarginRight = bind(rangeWithoutZero('mdMarginRight'), whitespace);
var mdMarginBottom = bind(rangeWithoutZero('mdMarginBottom'), whitespace);
var mdMarginLeft = bind(rangeWithoutZero('mdMarginLeft'), whitespace);
var mdMargin = union(mdMarginTop, mdMarginBottom, mdMarginLeft, mdMarginRight);

var lgMarginTop = bind(rangeWithoutZero('lgMarginTop'), whitespace);
var lgMarginRight = bind(rangeWithoutZero('lgMarginRight'), whitespace);
var lgMarginBottom = bind(rangeWithoutZero('lgMarginBottom'), whitespace);
var lgMarginLeft = bind(rangeWithoutZero('lgMarginLeft'), whitespace);
var lgMargin = union(lgMarginTop, lgMarginBottom, lgMarginLeft, lgMarginRight);

var paddingX = bind(rangeWithoutZero('paddingX'), whitespace);
var paddingY = bind(rangeWithoutZero('paddingY'), whitespace);
var padding = union(paddingX, paddingY);

var smPaddingX = bind(rangeWithoutZero('smPaddingX'), whitespace);
var smPaddingY = bind(rangeWithoutZero('smPaddingY'), whitespace);
var smPadding = union(smPaddingX, smPaddingY);

var mdPaddingX = bind(rangeWithoutZero('mdPaddingX'), whitespace);
var mdPaddingY = bind(rangeWithoutZero('mdPaddingY'), whitespace);
var mdPadding = union(mdPaddingX, mdPaddingY);

var lgPaddingX = bind(rangeWithoutZero('lgPaddingX'), whitespace);
var lgPaddingY = bind(rangeWithoutZero('lgPaddingY'), whitespace);
var lgPadding = union(lgPaddingX, lgPaddingY);

/*

These functions are legacy. I'd like to get rid of most of this file's dependency on importing `./style.js` directly once these are removed.

*/

var prefix = function prefix(pre) {
  return mapClassName(function (name) {
    return '' + pre + name;
  });
};
var display = function display(value) {
  switch (value) {
    case 'flex':
      return fromClassName('DisplayFlex', 'DirectionRow');
    case 'flexColumn':
      return fromClassName('DisplayFlex', 'DirectionColumn');
    case 'inlineBlock':
      return fromClassName('DisplayInlineBlock');
    case false:
      return fromClassName('DisplayNone');
    default:
      /* block */
      return fromClassName('DisplayBlock');
  }
};
var column = range('Col');

var formatIntBoint = function formatIntBoint(x) {
  return x < 0 ? 'n' + Math.abs(x) : x.toString();
};

/*

It's preferable to put new properties into that object directly just so it's easier to read.

*/

var propToFn = {
  xs: function xs(value) {
    if (!value) {
      return identity();
    }
    return mapClassName(function (c) {
      return styles[c];
    })(prefix('xs')(concat([value.column ? column(value.column) : identity(), typeof value.display !== 'undefined' ? display(value.display) : identity()])));
  },
  sm: function sm(value) {
    if (!value) {
      return identity();
    }
    return mapClassName(function (c) {
      return styles[c];
    })(prefix('sm')(concat([value.column ? column(value.column) : identity(), typeof value.display !== 'undefined' ? display(value.display) : identity()])));
  },
  md: function md(value) {
    if (!value) {
      return identity();
    }
    return mapClassName(function (c) {
      return styles[c];
    })(prefix('md')(concat([value.column ? column(value.column) : identity(), typeof value.display !== 'undefined' ? display(value.display) : identity()])));
  },
  lg: function lg(value) {
    if (!value) {
      return identity();
    }
    return mapClassName(function (c) {
      return styles[c];
    })(prefix('lg')(concat([value.column ? column(value.column) : identity(), typeof value.display !== 'undefined' ? display(value.display) : identity()])));
  },

  display: mapping({
    none: styles.xsDisplayNone,
    flex: styles.xsDisplayFlex,
    block: styles.xsDisplayBlock,
    inlineBlock: styles.xsDisplayInlineBlock
  }),
  column: bind(range('xsCol'), styles),
  direction: mapping({
    row: styles.xsDirectionRow,
    column: styles.xsDirectionColumn
  }),

  smDisplay: mapping({
    none: styles.smDisplayNone,
    flex: styles.smDisplayFlex,
    block: styles.smDisplayBlock,
    inlineBlock: styles.smDisplayInlineBlock
  }),
  smColumn: bind(range('smCol'), styles),
  smDirection: mapping({
    row: styles.smDirectionRow,
    column: styles.smDirectionColumn
  }),

  mdDisplay: mapping({
    none: styles.mdDisplayNone,
    flex: styles.mdDisplayFlex,
    block: styles.mdDisplayBlock,
    inlineBlock: styles.mdDisplayInlineBlock
  }),
  mdColumn: bind(range('mdCol'), styles),
  mdDirection: mapping({
    row: styles.mdDirectionRow,
    column: styles.mdDirectionColumn
  }),

  lgDisplay: mapping({
    none: styles.lgDisplayNone,
    flex: styles.lgDisplayFlex,
    block: styles.lgDisplayBlock,
    inlineBlock: styles.lgDisplayInlineBlock
  }),
  lgColumn: bind(range('lgCol'), styles),
  lgDirection: mapping({
    row: styles.lgDirectionRow,
    column: styles.lgDirectionColumn
  }),

  alignContent: mapping({
    start: layout.contentStart,
    end: layout.contentEnd,
    center: layout.contentCenter,
    between: layout.contentBetween,
    around: layout.contentAround
    // default: stretch
  }),
  alignItems: mapping({
    start: layout.itemsStart,
    end: layout.itemsEnd,
    center: layout.itemsCenter,
    baseline: layout.itemsBaseline
    // default: stretch
  }),
  alignSelf: mapping({
    start: layout.selfStart,
    end: layout.selfEnd,
    center: layout.selfCenter,
    baseline: layout.selfBaseline,
    stretch: layout.selfStretch
    // default: auto
  }),
  bottom: toggle(layout.bottom0),
  color: mapping({
    blue: colors.blueBg,
    darkGray: colors.darkGrayBg,
    pine: colors.pineBg,
    gray: colors.grayBg,
    red: colors.redBg,
    olive: colors.oliveBg,
    lightGray: colors.lightGrayBg,
    white: colors.whiteBg,
    orange: colors.orangeBg,
    green: colors.greenBg,
    navy: colors.navyBg,
    midnight: colors.midnightBg,
    purple: colors.purpleBg,
    orchid: colors.orchidBg,
    eggplant: colors.eggplantBg,
    maroon: colors.maroonBg,
    watermelon: colors.watermelonBg,
    lightWash: colors.lightWashBg,
    darkWash: colors.darkWashBg
    // default: transparent
  }),
  fit: toggle(layout.fit),
  flex: mapping({
    grow: layout.flexGrow,
    none: layout.flexNone
    // default: shrink
  }),
  height: function (_height) {
    function height(_x) {
      return _height.apply(this, arguments);
    }

    height.toString = function () {
      return _height.toString();
    };

    return height;
  }(function (height) {
    return fromInlineStyle({ height: height });
  }),
  justifyContent: mapping({
    end: layout.justifyEnd,
    center: layout.justifyCenter,
    between: layout.justifyBetween,
    around: layout.justifyAround
    // default: start
  }),
  left: toggle(layout.left0),
  deprecatedMargin: function deprecatedMargin(value) {
    var mt = identity();
    var mb = identity();
    var ml = identity();
    var mr = identity();
    switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
      case 'number':
        return fromClassName(whitespace$1['m' + formatIntBoint(value)]);
      case 'object':
        if (value.top) {
          mt = fromClassName(whitespace$1['mt' + formatIntBoint(value.top)]);
        }

        if (value.bottom) {
          mb = fromClassName(whitespace$1['mb' + formatIntBoint(value.bottom)]);
        }

        if (value.left) {
          ml = fromClassName(value.left === 'auto' ? whitespace$1.mlAuto : whitespace$1['ml' + formatIntBoint(value.left)]);
        }

        if (value.right) {
          mr = fromClassName(value.right === 'auto' ? whitespace$1.mrAuto : whitespace$1['mr' + formatIntBoint(value.right)]);
        }
        return concat([mt, mb, ml, mr]);
      default:
        return identity();
    }
  },
  margin: margin,
  marginTop: marginTop,
  marginRight: marginRight,
  marginBottom: marginBottom,
  marginLeft: marginLeft,
  smMargin: smMargin,
  smMarginTop: smMarginTop,
  smMarginRight: smMarginRight,
  smMarginBottom: smMarginBottom,
  smMarginLeft: smMarginLeft,
  mdMargin: mdMargin,
  mdMarginTop: mdMarginTop,
  mdMarginRight: mdMarginRight,
  mdMarginBottom: mdMarginBottom,
  mdMarginLeft: mdMarginLeft,
  lgMargin: lgMargin,
  lgMarginTop: lgMarginTop,
  lgMarginRight: lgMarginRight,
  lgMarginBottom: lgMarginBottom,
  lgMarginLeft: lgMarginLeft,
  maxHeight: function (_maxHeight) {
    function maxHeight(_x2) {
      return _maxHeight.apply(this, arguments);
    }

    maxHeight.toString = function () {
      return _maxHeight.toString();
    };

    return maxHeight;
  }(function (maxHeight) {
    return fromInlineStyle({ maxHeight: maxHeight });
  }),
  maxWidth: function (_maxWidth) {
    function maxWidth(_x3) {
      return _maxWidth.apply(this, arguments);
    }

    maxWidth.toString = function () {
      return _maxWidth.toString();
    };

    return maxWidth;
  }(function (maxWidth) {
    return fromInlineStyle({ maxWidth: maxWidth });
  }),
  minHeight: function (_minHeight) {
    function minHeight(_x4) {
      return _minHeight.apply(this, arguments);
    }

    minHeight.toString = function () {
      return _minHeight.toString();
    };

    return minHeight;
  }(function (minHeight) {
    return fromInlineStyle({ minHeight: minHeight });
  }),
  minWidth: function (_minWidth) {
    function minWidth(_x5) {
      return _minWidth.apply(this, arguments);
    }

    minWidth.toString = function () {
      return _minWidth.toString();
    };

    return minWidth;
  }(function (minWidth) {
    return fromInlineStyle({ minWidth: minWidth });
  }),
  overflow: mapping({
    hidden: layout.overflowHidden,
    scroll: layout.overflowScroll,
    auto: layout.overflowAuto,
    scrollX: layout.overflowScrollX,
    scrollY: layout.overflowScrollY
    // default: visible
  }),
  deprecatedPadding: function deprecatedPadding(value) {
    switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
      case 'number':
        return fromClassName(whitespace$1['p' + value]);
      case 'object':
        return concat([value.x ? fromClassName(whitespace$1['px' + value.x]) : identity(), value.y ? fromClassName(whitespace$1['py' + value.y]) : identity()]);
      default:
        return identity();
    }
  },
  padding: padding,
  paddingX: paddingX,
  paddingY: paddingY,
  smPadding: smPadding,
  smPaddingX: smPaddingX,
  smPaddingY: smPaddingY,
  mdPadding: mdPadding,
  mdPaddingX: mdPaddingX,
  mdPaddingY: mdPaddingY,
  lgPadding: lgPadding,
  lgPaddingX: lgPaddingX,
  lgPaddingY: lgPaddingY,
  position: mapping({
    absolute: layout.absolute,
    relative: layout.relative,
    fixed: layout.fixed
    // default: static
  }),
  right: toggle(layout.right0),
  shape: mapping({
    circle: borders.circle,
    pill: borders.pill,
    rounded: borders.rounded,
    roundedBottom: borders.roundedBottom,
    roundedLeft: borders.roundedLeft,
    roundedRight: borders.roundedRight,
    roundedTop: borders.roundedTop
    // default: square
  }),
  top: toggle(layout.top0),
  width: function (_width) {
    function width(_x6) {
      return _width.apply(this, arguments);
    }

    width.toString = function () {
      return _width.toString();
    };

    return width;
  }(function (width) {
    return fromInlineStyle({ width: width });
  }),
  wrap: toggle(layout.flexWrap),
  dangerouslySetInlineStyle: function dangerouslySetInlineStyle(value) {
    return value && value.__style ? fromInlineStyle(value.__style) : identity();
  }
};

/*

# The Component

*/

var contains = function contains(key, arr) {
  return arr.indexOf(key) >= 0;
};
var omit = function omit(keys, obj) {
  return Object.keys(obj).reduce(function (acc, k) {
    if (contains(k, keys)) {
      return acc;
    }
    return _extends({}, acc, defineProperty({}, k, obj[k]));
  }, {});
};

function Box(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);

  // Flow can't reason about the constant nature of Object.keys so we can't use
  // a functional (reduce) style here.

  // Box is a "pass-through" component, meaning that if you pass properties to
  // it that it doesn't know about (`aria-label` for instance) it passes
  // directly back to the underlying `<div/>`. That's generally useful, but
  // we'd also like to strip out a few naughty properties that break style
  // encapsulation (className, style) or accessibility (onClick).
  var blacklist = ['onClick', 'className', 'style'];

  // All Box's are box-sized by default, so we start off building up the styles
  // to be applied with a Box base class.
  var s = fromClassName(styles.box);

  // This loops through each property and if it exists in the previously
  // defined transform map, concatentes the resulting styles to the base
  // styles. If there's a match, we also don't pass through that property. This
  // means Box's runtime is only dependent on the number of properties passed
  // to it (which is typically small) instead of the total number of possible
  // properties (~30 or so). While it may ~feel~ like Box is innefficient, its
  // biggest performance impact is on startup time because there's so much code
  // here.

  // eslint-disable-next-line no-restricted-syntax
  for (var prop in props) {
    if (Object.prototype.hasOwnProperty.call(propToFn, prop)) {
      var fn = propToFn[prop];
      var value = props[prop];
      blacklist = blacklist.concat(prop);
      s = concat([s, fn(value)]);
    }
  }

  // And... magic!
  return createElement(
    'div',
    _extends({}, omit(blacklist, props), toProps(s)),
    children
  );
}

/*

# PropTypes

And we're done here :)

*/

var ColumnPropType = PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

var MarginPropType = PropTypes.oneOf([-12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

var PaddingPropType = PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

Box.propTypes = {
  children: PropTypes.node,
  dangerouslySetInlineStyle: PropTypes.exact({
    __style: PropTypes.object
  }),

  xs: PropTypes.exact({
    display: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['flex', 'flexColumn', 'inlineBlock'])]),
    column: PropTypes.number
  }),
  sm: PropTypes.exact({
    display: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['flex', 'flexColumn', 'inlineBlock'])]),
    column: PropTypes.number
  }),
  md: PropTypes.exact({
    display: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['flex', 'flexColumn', 'inlineBlock'])]),
    column: PropTypes.number
  }),
  lg: PropTypes.exact({
    display: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['flex', 'flexColumn', 'inlineBlock'])]),
    column: PropTypes.number
  }),
  deprecatedMargin: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])])
  })]),
  deprecatedPadding: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })]),

  display: PropTypes.oneOf(['none', 'flex', 'block', 'inlineBlock']),
  direction: PropTypes.oneOf(['row', 'column']),
  column: ColumnPropType,

  smDisplay: PropTypes.oneOf(['none', 'flex', 'block', 'inlineBlock']),
  smDirection: PropTypes.oneOf(['row', 'column']),
  smColumn: ColumnPropType,

  mdDisplay: PropTypes.oneOf(['none', 'flex', 'block', 'inlineBlock']),
  mdDirection: PropTypes.oneOf(['row', 'column']),
  mdColumn: ColumnPropType,

  lgDisplay: PropTypes.oneOf(['none', 'flex', 'block', 'inlineBlock']),
  lgDirection: PropTypes.oneOf(['row', 'column']),
  lgColumn: ColumnPropType,

  alignContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'stretch']),
  alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  alignSelf: PropTypes.oneOf(['auto', 'start', 'end', 'center', 'baseline', 'stretch']),
  bottom: PropTypes.bool,
  color: PropTypes.oneOf(['blue', 'darkGray', 'darkWash', 'eggplant', 'gray', 'green', 'lightGray', 'lightWash', 'maroon', 'midnight', 'navy', 'olive', 'orange', 'orchid', 'pine', 'purple', 'red', 'transparent', 'watermelon', 'white']),
  fit: PropTypes.bool,
  flex: PropTypes.oneOf(['grow', 'shrink', 'none']),
  grow: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
  left: PropTypes.bool,

  margin: MarginPropType,
  marginTop: MarginPropType,
  marginRight: MarginPropType,
  marginBottom: MarginPropType,
  marginLeft: MarginPropType,

  smMargin: MarginPropType,
  smMarginTop: MarginPropType,
  smMarginRight: MarginPropType,
  smMarginBottom: MarginPropType,
  smMarginLeft: MarginPropType,

  mdMargin: MarginPropType,
  mdMarginTop: MarginPropType,
  mdMarginRight: MarginPropType,
  mdMarginBottom: MarginPropType,
  mdMarginLeft: MarginPropType,

  lgMargin: MarginPropType,
  lgMarginTop: MarginPropType,
  lgMarginRight: MarginPropType,
  lgMarginBottom: MarginPropType,
  lgMarginLeft: MarginPropType,

  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  overflow: PropTypes.oneOf(['visible', 'hidden', 'scroll', 'scrollX', 'scrollY', 'auto']),

  padding: PaddingPropType,
  paddingX: PaddingPropType,
  paddingY: PaddingPropType,

  smPadding: PaddingPropType,
  smPaddingX: PaddingPropType,
  smPaddingY: PaddingPropType,

  mdPadding: PaddingPropType,
  mdPaddingX: PaddingPropType,
  mdPaddingY: PaddingPropType,

  lgPadding: PaddingPropType,
  lgPaddingX: PaddingPropType,
  lgPaddingY: PaddingPropType,

  position: PropTypes.oneOf(['static', 'absolute', 'relative', 'fixed']),
  right: PropTypes.bool,
  shape: PropTypes.oneOf(['square', 'rounded', 'pill', 'circle', 'roundedTop', 'roundedBottom', 'roundedLeft', 'roundedRight']),
  top: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  wrap: PropTypes.bool
};

var styles$1 = { "icon": "_mh", "iconBlock": "_mi _27" };

var add = 'M22.00,10.00 L14.00,10.00 L14.00,2.00 C14.00,0.90 13.10,0.00 12.00,0.00 C10.90,0.00 10.00,0.90 10.00,2.00 L10.00,10.00 L2.00,10.00 C0.90,10.00 0.00,10.90 0.00,12.00 C0.00,13.10 0.90,14.00 2.00,14.00 L10.00,14.00 L10.00,22.00 C10.00,23.10 10.90,24.00 12.00,24.00 C13.10,24.00 14.00,23.10 14.00,22.00 L14.00,14.00 L22.00,14.00 C23.10,14.00 24.00,13.10 24.00,12.00 C24.00,10.90 23.10,10.00 22.00,10.00';

var addCircle = 'M17.75,13.25 L13.25,13.25 L13.25,17.75 C13.25,18.44 12.69,19.00 12.00,19.00 C11.31,19.00 10.75,18.44 10.75,17.75 L10.75,13.25 L6.25,13.25 C5.56,13.25 5.00,12.69 5.00,12.00 C5.00,11.31 5.56,10.75 6.25,10.75 L10.75,10.75 L10.75,6.25 C10.75,5.56 11.31,5.00 12.00,5.00 C12.69,5.00 13.25,5.56 13.25,6.25 L13.25,10.75 L17.75,10.75 C18.44,10.75 19.00,11.31 19.00,12.00 C19.00,12.69 18.44,13.25 17.75,13.25 M12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00';

var addPin = 'M21.50,8.69 C22.99,9.56 24.00,11.15 24.00,13.00 L20.00,13.00 L20.00,20.96 L19.00,23.00 L18.00,20.96 L18.00,13.00 L14.00,13.00 C14.00,11.15 15.01,9.56 16.50,8.69 L16.50,2.93 C15.64,2.71 15.00,1.93 15.00,1.00 L23.00,1.00 C23.00,1.93 22.36,2.71 21.50,2.93 L21.50,8.69 Z M10.25,9.50 C10.94,9.50 11.50,10.06 11.50,10.75 C11.50,11.44 10.94,12.00 10.25,12.00 L7.00,12.00 L7.00,15.25 C7.00,15.94 6.44,16.50 5.75,16.50 C5.06,16.50 4.50,15.94 4.50,15.25 L4.50,12.00 L1.25,12.00 C0.56,12.00 0.00,11.44 0.00,10.75 C0.00,10.06 0.56,9.50 1.25,9.50 L4.50,9.50 L4.50,6.25 C4.50,5.56 5.06,5.00 5.75,5.00 C6.44,5.00 7.00,5.56 7.00,6.25 L7.00,9.50 L10.25,9.50 Z';

var arrowBack = 'M17.28,24.00 C16.71,24.00 16.14,23.78 15.70,23.34 L4.50,12.00 L15.70,0.66 C16.57,-0.22 17.98,-0.22 18.85,0.66 C19.72,1.54 19.72,2.96 18.85,3.84 L10.79,12.00 L18.85,20.16 C19.72,21.04 19.72,22.46 18.85,23.34 C18.41,23.78 17.85,24.00 17.28,24.00';

var arrowCircleForward = 'M12.94,16.07 C12.45,16.55 11.66,16.55 11.17,16.07 C10.68,15.58 10.68,14.79 11.17,14.30 L12.23,13.23 L8.25,13.23 C7.56,13.23 7.00,12.67 7.00,11.98 C7.00,11.29 7.56,10.73 8.25,10.73 L12.20,10.73 L11.17,9.70 C10.68,9.21 10.68,8.42 11.17,7.93 C11.66,7.45 12.45,7.45 12.94,7.93 L17.00,12.00 L12.94,16.07 Z M12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00 L12.00,0.00 Z';

var arrowDown = 'M12.00,19.50 L0.66,8.29 C-0.22,7.43 -0.22,6.02 0.66,5.15 C1.54,4.28 2.96,4.28 3.84,5.15 L12.00,13.21 L20.16,5.15 C21.04,4.28 22.46,4.28 23.34,5.15 C24.22,6.02 24.22,7.43 23.34,8.29 L12.00,19.50 Z';

var arrowForward = 'M6.72,24.00 C7.29,24.00 7.86,23.78 8.29,23.34 L19.50,12.00 L8.29,0.66 C7.43,-0.22 6.02,-0.22 5.15,0.66 C4.28,1.54 4.28,2.96 5.15,3.84 L13.21,12.00 L5.15,20.16 C4.28,21.04 4.28,22.46 5.15,23.34 C5.58,23.78 6.15,24.00 6.72,24.00';

var arrowUp = 'M21.75,19.50 C21.17,19.50 20.60,19.28 20.16,18.85 L12.00,10.79 L3.84,18.85 C2.96,19.72 1.54,19.72 0.66,18.85 C-0.22,17.98 -0.22,16.57 0.66,15.70 L12.00,4.50 L23.34,15.70 C24.22,16.57 24.22,17.98 23.34,18.85 C22.90,19.28 22.33,19.50 21.75,19.50';

var bell = 'M12.00,24.00 C10.34,24.00 9.00,22.66 9.00,21.00 L15.00,21.00 C15.00,22.66 13.66,24.00 12.00,24.00 Z M19.00,13.17 C20.58,14.69 21.67,16.72 22.00,19.00 L2.00,19.00 C2.33,16.72 3.42,14.69 5.00,13.17 L5.00,7.00 C5.00,3.13 8.13,0.00 12.00,0.00 C15.87,0.00 19.00,3.13 19.00,7.00 L19.00,13.17 Z';

var camera = 'M6.36,4.99 L8.56,2.00 L15.44,2.00 L17.64,4.99 L20.73,4.99 C22.53,4.99 24.00,6.48 24.00,8.32 L24.00,18.67 C24.00,20.51 22.53,22.00 20.73,22.00 L3.27,22.00 C1.47,22.00 0.00,20.51 0.00,18.67 L0.00,8.32 C0.00,6.48 1.47,4.99 3.27,4.99 L6.36,4.99 Z M12.00,7.22 C8.83,7.22 6.26,9.79 6.26,12.96 C6.26,16.13 8.83,18.70 12.00,18.70 C15.17,18.70 17.74,16.13 17.74,12.96 C17.74,9.79 15.17,7.22 12.00,7.22 M12.00,9.95 C13.66,9.95 15.01,11.30 15.01,12.96 C15.01,14.62 13.66,15.97 12.00,15.97 C10.34,15.97 8.99,14.62 8.99,12.96 C8.99,11.30 10.34,9.95 12.00,9.95';

var cancel = 'M15.18,12.00 L22.34,4.84 C23.22,3.96 23.22,2.54 22.34,1.66 C21.46,0.78 20.04,0.78 19.16,1.66 L12.00,8.82 L4.84,1.66 C3.96,0.78 2.54,0.78 1.66,1.66 C0.78,2.54 0.78,3.96 1.66,4.84 L8.82,12.00 L1.66,19.16 C0.78,20.04 0.78,21.46 1.66,22.34 C2.10,22.78 2.67,23.00 3.25,23.00 C3.83,23.00 4.40,22.78 4.84,22.34 L12.00,15.18 L19.16,22.34 C19.60,22.78 20.17,23.00 20.75,23.00 C21.33,23.00 21.90,22.78 22.34,22.34 C23.22,21.46 23.22,20.04 22.34,19.16 L15.18,12.00 Z';

var check = 'M9.17,21.75 L0.73,12.79 C-0.24,11.75 -0.24,10.08 0.73,9.04 C1.71,8.01 3.28,8.01 4.26,9.04 L9.17,14.26 L19.74,3.03 C20.72,1.99 22.29,1.99 23.27,3.03 C24.24,4.06 24.24,5.74 23.27,6.77 L9.17,21.75 Z';

var checkCircle = 'M18.88,9.88 L10.22,18.55 L5.10,13.42 C4.61,12.93 4.61,12.14 5.10,11.65 C5.58,11.16 6.38,11.16 6.86,11.65 L10.22,15.01 L17.12,8.12 C17.61,7.63 18.40,7.63 18.88,8.12 C19.37,8.61 19.37,9.40 18.88,9.88 M12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00';

var circleOutline = 'M12.00,0.00 C5.40,0.00 0.00,5.40 0.00,12.00 C0.00,18.60 5.40,24.00 12.00,24.00 C18.60,24.00 24.00,18.60 24.00,12.00 C24.00,5.40 18.60,0.00 12.00,0.00 L12.00,0.00 Z M12.00,22.20 C6.45,22.20 1.80,17.70 1.80,12.00 C1.80,6.30 6.30,1.80 12.00,1.80 C17.70,1.80 22.20,6.30 22.20,12.00 C22.20,17.70 17.55,22.20 12.00,22.20 L12.00,22.20 Z';

var clear = 'M15.18,16.95 L12.00,13.77 L8.82,16.95 C8.33,17.44 7.54,17.44 7.05,16.95 C6.56,16.46 6.56,15.67 7.05,15.18 L10.23,12.00 L7.05,8.82 C6.56,8.33 6.56,7.54 7.05,7.05 C7.54,6.56 8.33,6.56 8.82,7.05 L12.00,10.23 L15.18,7.05 C15.67,6.56 16.46,6.56 16.95,7.05 C17.44,7.54 17.44,8.33 16.95,8.82 L13.77,12.00 L16.95,15.18 C17.44,15.67 17.44,16.46 16.95,16.95 C16.46,17.44 15.67,17.44 15.18,16.95 M24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00';

var clock = 'M17.83,17.83 C17.46,18.19 16.98,18.38 16.50,18.38 C16.02,18.38 15.54,18.19 15.17,17.83 L10.13,12.78 L10.13,6.00 C10.13,4.96 10.96,4.13 12.00,4.13 C13.04,4.13 13.88,4.96 13.88,6.00 L13.88,11.22 L17.83,15.17 C18.56,15.91 18.56,17.09 17.83,17.83 M12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00';

var cog = 'M12.00,15.95 C9.79,15.95 8.00,14.16 8.00,11.95 C8.00,9.74 9.79,7.95 12.00,7.95 C14.21,7.95 16.00,9.74 16.00,11.95 C16.00,14.16 14.21,15.95 12.00,15.95 L12.00,15.95 Z M12.00,0.50 L2.00,6.25 L2.00,17.75 L12.00,23.50 L22.00,17.75 L22.00,6.25 L12.00,0.50 Z';

var compass = 'M12.87,12.90 C13.36,12.41 13.36,11.62 12.87,11.13 C12.38,10.64 11.59,10.64 11.10,11.13 C10.61,11.62 10.61,12.41 11.10,12.90 C11.59,13.39 12.38,13.39 12.87,12.90 M15.14,14.03 C14.93,14.55 14.52,14.96 14.00,15.16 L5.62,18.38 L8.84,10.00 C9.04,9.48 9.45,9.07 9.97,8.86 L18.58,5.42 L15.14,14.03 Z M20.49,3.51 C15.80,-1.17 8.20,-1.17 3.51,3.51 C-1.17,8.20 -1.17,15.80 3.51,20.49 C8.20,25.17 15.80,25.17 20.49,20.49 C25.17,15.80 25.17,8.20 20.49,3.51 L20.49,3.51 Z';

var dash = 'M20.00,16.00 L4.00,16.00 C1.80,16.00 0.00,14.20 0.00,12.00 C0.00,9.80 1.80,8.00 4.00,8.00 L20.00,8.00 C22.20,8.00 24.00,9.80 24.00,12.00 C24.00,14.20 22.20,16.00 20.00,16.00';

var edit = 'M13.39,6.02 L17.98,10.61 L7.10,21.50 L1.00,23.00 L2.50,16.90 L13.39,6.02 Z M22.05,1.95 C23.32,3.22 23.32,5.28 22.05,6.55 L19.75,8.85 L15.15,4.25 L17.45,1.95 C18.72,0.68 20.78,0.68 22.05,1.95 Z';

var ellipsis = 'M12.00,9.00 C10.34,9.00 9.00,10.34 9.00,12.00 C9.00,13.66 10.34,15.00 12.00,15.00 C13.66,15.00 15.00,13.66 15.00,12.00 C15.00,10.34 13.66,9.00 12.00,9.00 M3.00,9.00 C4.66,9.00 6.00,10.34 6.00,12.00 C6.00,13.66 4.66,15.00 3.00,15.00 C1.34,15.00 0.00,13.66 0.00,12.00 C0.00,10.34 1.34,9.00 3.00,9.00 Z M21.00,9.00 C22.66,9.00 24.00,10.34 24.00,12.00 C24.00,13.66 22.66,15.00 21.00,15.00 C19.34,15.00 18.00,13.66 18.00,12.00 C18.00,10.34 19.34,9.00 21.00,9.00 Z';

var ellipsisCircleOutline = 'M12.00,10.50 C12.90,10.50 13.50,11.10 13.50,12.00 C13.50,12.90 12.90,13.50 12.00,13.50 C11.10,13.50 10.50,12.90 10.50,12.00 C10.50,11.10 11.10,10.50 12.00,10.50 L12.00,10.50 Z M7.50,10.50 C8.40,10.50 9.00,11.10 9.00,12.00 C9.00,12.90 8.40,13.50 7.50,13.50 C6.60,13.50 6.00,12.90 6.00,12.00 C6.00,11.10 6.60,10.50 7.50,10.50 L7.50,10.50 Z M16.50,10.50 C17.40,10.50 18.00,11.10 18.00,12.00 C18.00,12.90 17.40,13.50 16.50,13.50 C15.60,13.50 15.00,12.90 15.00,12.00 C15.00,11.10 15.60,10.50 16.50,10.50 L16.50,10.50 Z M12.00,0.00 C5.40,0.00 0.00,5.40 0.00,12.00 C0.00,18.60 5.40,24.00 12.00,24.00 C18.60,24.00 24.00,18.60 24.00,12.00 C24.00,5.40 18.60,0.00 12.00,0.00 L12.00,0.00 Z M12.00,22.20 C6.45,22.20 1.80,17.70 1.80,12.00 C1.80,6.30 6.30,1.80 12.00,1.80 C17.70,1.80 22.20,6.30 22.20,12.00 C22.20,17.70 17.55,22.20 12.00,22.20 L12.00,22.20 Z';

var facebook = 'M16.63,24.00 L16.63,14.74 L19.73,14.74 C19.89,13.51 20.04,12.32 20.21,11.08 C20.04,11.06 19.89,11.04 19.75,11.04 C18.82,11.03 17.90,11.02 16.97,11.04 C16.68,11.04 16.59,10.95 16.60,10.66 C16.63,9.84 16.60,9.02 16.67,8.20 C16.74,7.49 17.18,7.12 17.91,7.08 C18.59,7.05 19.27,7.05 19.96,7.06 C20.24,7.06 20.34,6.97 20.34,6.68 C20.32,5.80 20.33,4.92 20.33,4.04 C20.33,3.88 20.35,3.72 20.10,3.70 C18.74,3.58 17.38,3.40 16.03,3.75 C14.24,4.20 13.17,5.40 12.91,7.20 C12.75,8.29 12.81,9.41 12.78,10.52 C12.76,11.03 12.77,11.03 12.26,11.03 C11.51,11.03 10.75,11.04 10.00,11.03 C9.71,11.02 9.62,11.12 9.62,11.41 C9.64,12.41 9.63,13.40 9.62,14.40 C9.62,14.65 9.70,14.74 9.96,14.74 C10.78,14.72 11.60,14.74 12.43,14.73 C12.67,14.72 12.78,14.77 12.78,15.05 C12.77,17.93 12.77,20.81 12.78,23.70 C12.78,23.91 12.71,24.00 12.48,24.00 C8.75,23.99 5.02,24.00 1.29,23.99 C0.58,23.99 0.03,23.42 0.01,22.71 C-0.01,22.32 0.00,21.94 0.00,21.56 C0.00,14.88 0.00,8.20 0.00,1.51 C0.00,0.51 0.52,0.00 1.52,0.00 C8.51,-0.00 15.51,-0.00 22.50,0.00 C23.48,0.00 24.00,0.52 24.00,1.50 C24.00,8.50 24.00,15.51 24.00,22.52 C24.00,23.47 23.47,24.00 22.52,24.00 C20.69,24.00 18.86,24.00 17.03,24.00 L16.63,24.00 Z';

var faceHappy = 'M16.46,10.88 C15.54,10.88 14.79,10.13 14.79,9.21 C14.79,8.28 15.54,7.53 16.46,7.53 C17.39,7.53 18.14,8.28 18.14,9.21 C18.14,10.13 17.39,10.88 16.46,10.88 M12.02,20.71 C9.08,20.71 6.64,18.75 6.67,15.81 C6.68,13.69 8.39,15.27 12.00,15.26 C15.60,15.25 17.32,13.62 17.32,15.81 C17.33,18.76 14.97,20.71 12.02,20.71 M6.09,9.21 C6.09,8.28 6.84,7.53 7.77,7.53 C8.69,7.53 9.44,8.28 9.44,9.21 C9.44,10.13 8.69,10.88 7.77,10.88 C6.84,10.88 6.09,10.13 6.09,9.21 M24.00,11.99 C23.99,5.37 18.62,0.00 12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.62,24.00 23.99,18.63 24.00,12.01 C24.00,12.01 24.00,12.00 24.00,12.00 C24.00,12.00 24.00,11.99 24.00,11.99';

var faceSad = 'M16.46,10.88 C15.54,10.88 14.79,10.13 14.79,9.21 C14.79,8.28 15.54,7.53 16.46,7.53 C17.39,7.53 18.14,8.28 18.14,9.21 C18.14,10.13 17.39,10.88 16.46,10.88 L16.46,10.88 Z M17.09,17.84 C16.81,18.44 16.09,18.70 15.49,18.42 C15.41,18.38 15.16,18.30 14.75,18.20 C14.01,18.04 13.10,17.93 12.00,17.93 C10.90,17.93 9.99,18.04 9.25,18.20 C8.84,18.30 8.59,18.38 8.51,18.42 C7.91,18.70 7.19,18.44 6.91,17.84 C6.63,17.24 6.89,16.53 7.49,16.25 C7.73,16.14 8.14,15.99 8.72,15.86 C9.63,15.66 10.72,15.53 12.00,15.53 C13.28,15.53 14.37,15.66 15.28,15.86 C15.86,15.99 16.27,16.14 16.51,16.25 C17.11,16.53 17.37,17.24 17.09,17.84 L17.09,17.84 Z M6.09,9.21 C6.09,8.28 6.84,7.53 7.77,7.53 C8.69,7.53 9.44,8.28 9.44,9.21 C9.44,10.13 8.69,10.88 7.77,10.88 C6.84,10.88 6.09,10.13 6.09,9.21 L6.09,9.21 Z M24.00,11.99 C24.00,5.37 18.62,0.00 12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.62,24.00 24.00,18.63 24.00,12.01 L24.00,12.00 L24.00,11.99 Z';

var faceSmiley = 'M16.50,11.00 C15.67,11.00 15.00,10.33 15.00,9.50 C15.00,8.67 15.67,8.00 16.50,8.00 C17.33,8.00 18.00,8.67 18.00,9.50 C18.00,10.33 17.33,11.00 16.50,11.00 M16.95,16.95 C15.63,18.27 13.87,19.00 12.00,19.00 C10.13,19.00 8.37,18.27 7.05,16.95 C6.66,16.56 6.66,15.93 7.05,15.54 C7.44,15.15 8.07,15.15 8.47,15.54 C9.41,16.48 10.66,17.00 12.00,17.00 C13.34,17.00 14.59,16.48 15.54,15.54 C15.93,15.14 16.56,15.15 16.95,15.54 C17.34,15.93 17.34,16.56 16.95,16.95 M6.00,9.50 C6.00,8.67 6.67,8.00 7.50,8.00 C8.33,8.00 9.00,8.67 9.00,9.50 C9.00,10.33 8.33,11.00 7.50,11.00 C6.67,11.00 6.00,10.33 6.00,9.50 M12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00';

var filter = 'M24.00,3.50 C24.00,2.40 23.10,1.50 22.00,1.50 L2.00,1.50 C0.90,1.50 0.00,2.40 0.00,3.50 C0.00,4.05 0.22,4.55 0.58,4.91 L0.58,4.91 L9.00,13.46 L9.00,22.50 L15.00,20.50 L15.00,13.45 L23.37,4.95 C23.76,4.59 24.00,4.07 24.00,3.50';

var flag = 'M17.00,7.50 L22.00,0.00 L2.00,0.00 L2.00,22.00 C2.00,23.10 2.90,24.00 4.00,24.00 C5.10,24.00 6.00,23.10 6.00,22.00 L6.00,15.00 L22.00,15.00 L17.00,7.50 Z';

var flashlight = 'M18.00,19.00 C18.55,19.00 19.00,18.55 19.00,18.00 L19.00,14.00 L14.00,14.00 L14.00,19.00 L18.00,19.00 Z M18.00,24.00 L14.00,24.00 L14.00,14.00 L24.00,14.00 L24.00,18.00 C24.00,21.31 21.31,24.00 18.00,24.00 L18.00,24.00 Z M6.00,19.00 L10.00,19.00 L10.00,14.00 L5.00,14.00 L5.00,18.00 C5.00,18.55 5.45,19.00 6.00,19.00 L6.00,19.00 Z M6.00,24.00 C2.69,24.00 0.00,21.31 0.00,18.00 L0.00,14.00 L10.00,14.00 L10.00,24.00 L6.00,24.00 Z M18.00,5.00 L14.00,5.00 L14.00,10.00 L19.00,10.00 L19.00,6.00 C19.00,5.45 18.55,5.00 18.00,5.00 L18.00,5.00 Z M18.00,0.00 C21.31,0.00 24.00,2.69 24.00,6.00 L24.00,10.00 L14.00,10.00 L14.00,0.00 L18.00,0.00 Z M6.00,5.00 C5.45,5.00 5.00,5.45 5.00,6.00 L5.00,10.00 L10.00,10.00 L10.00,5.00 L6.00,5.00 Z M6.00,0.00 L10.00,0.00 L10.00,10.00 L0.00,10.00 L0.00,6.00 C0.00,2.69 2.69,0.00 6.00,0.00 L6.00,0.00 Z';

var globe = 'M15.49,20.83 C16.36,18.82 16.86,16.08 16.97,13.25 L21.41,13.25 C20.95,16.71 18.63,19.58 15.49,20.83 L15.49,20.83 Z M2.59,13.25 L7.03,13.25 C7.14,16.08 7.64,18.82 8.52,20.83 C5.37,19.58 3.05,16.71 2.59,13.25 L2.59,13.25 Z M8.52,3.17 C7.64,5.18 7.14,7.92 7.03,10.75 L2.59,10.75 C3.05,7.29 5.37,4.42 8.52,3.17 L8.52,3.17 Z M9.53,10.75 C9.76,5.43 11.40,2.54 12.00,2.50 L12.01,2.50 C12.68,2.56 14.25,5.51 14.47,10.75 L9.53,10.75 Z M12.01,21.50 C12.01,21.50 12.01,21.50 12.00,21.50 C11.40,21.46 9.76,18.57 9.53,13.25 L14.47,13.25 C14.25,18.49 12.68,21.44 12.01,21.50 L12.01,21.50 Z M21.41,10.75 L16.97,10.75 C16.86,7.92 16.36,5.18 15.49,3.17 C18.63,4.42 20.95,7.29 21.41,10.75 L21.41,10.75 Z M24.00,12.00 C24.00,5.39 18.62,0.01 12.01,0.00 C12.01,0.00 12.01,0.00 12.01,0.00 L12.00,0.00 L12.00,0.00 C5.38,0.00 0.00,5.38 0.00,12.00 C0.00,18.62 5.38,24.00 12.00,24.00 L12.00,24.00 L12.01,24.00 C12.01,24.00 12.01,24.00 12.01,24.00 C18.62,24.00 24.00,18.61 24.00,12.00 L24.00,12.00 Z';

var graphBar = 'M9.50,24.00 L9.50,4.50 C9.50,3.12 10.62,2.00 12.00,2.00 C13.38,2.00 14.50,3.12 14.50,4.50 L14.50,24.00 L9.50,24.00 Z M18.00,10.50 C18.00,9.12 19.12,8.00 20.50,8.00 C21.88,8.00 23.00,9.12 23.00,10.50 L23.00,24.00 L18.00,24.00 L18.00,10.50 Z M1.00,24.00 L1.00,13.50 C1.00,12.12 2.12,11.00 3.50,11.00 C4.88,11.00 6.00,12.12 6.00,13.50 L6.00,24.00 L1.00,24.00 Z';

var knoop = 'M15.00,10.50 C14.17,10.50 13.50,9.83 13.50,9.00 C13.50,8.17 14.17,7.50 15.00,7.50 C15.83,7.50 16.50,8.17 16.50,9.00 C16.50,9.83 15.83,10.50 15.00,10.50 M15.00,16.50 C14.17,16.50 13.50,15.83 13.50,15.00 C13.50,14.17 14.17,13.50 15.00,13.50 C15.83,13.50 16.50,14.17 16.50,15.00 C16.50,15.83 15.83,16.50 15.00,16.50 M9.00,10.50 C8.17,10.50 7.50,9.83 7.50,9.00 C7.50,8.17 8.17,7.50 9.00,7.50 C9.83,7.50 10.50,8.17 10.50,9.00 C10.50,9.83 9.83,10.50 9.00,10.50 M9.00,16.50 C8.17,16.50 7.50,15.83 7.50,15.00 C7.50,14.17 8.17,13.50 9.00,13.50 C9.83,13.50 10.50,14.17 10.50,15.00 C10.50,15.83 9.83,16.50 9.00,16.50 M12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00';

var lightbulb = 'M20.00,8.00 C20.00,10.23 19.09,12.24 17.61,13.70 L17.63,13.70 C16.64,14.67 16.03,16.01 16.00,17.50 L16.00,17.50 L16.00,19.00 L8.00,19.00 L8.00,17.50 L8.00,17.50 C7.97,16.00 7.35,14.65 6.36,13.67 C4.90,12.22 4.00,10.22 4.00,8.00 C4.00,3.58 7.58,0.00 12.00,0.00 C16.42,0.00 20.00,3.58 20.00,8.00 Z M8.00,22.50 L8.00,21.00 L16.00,21.00 L16.00,22.50 C16.00,23.33 15.33,24.00 14.50,24.00 L9.50,24.00 C8.67,24.00 8.00,23.33 8.00,22.50 Z';

var handle = 'M3.00,15.00 L21.00,15.00 C21.55,15.00 22.00,15.45 22.00,16.00 C22.00,16.55 21.55,17.00 21.00,17.00 L3.00,17.00 C2.45,17.00 2.00,16.55 2.00,16.00 C2.00,15.45 2.45,15.00 3.00,15.00 Z M3.00,11.00 L21.00,11.00 C21.55,11.00 22.00,11.45 22.00,12.00 C22.00,12.55 21.55,13.00 21.00,13.00 L3.00,13.00 C2.45,13.00 2.00,12.55 2.00,12.00 C2.00,11.45 2.45,11.00 3.00,11.00 Z M3.00,7.00 L21.00,7.00 C21.55,7.00 22.00,7.45 22.00,8.00 C22.00,8.55 21.55,9.00 21.00,9.00 L3.00,9.00 C2.45,9.00 2.00,8.55 2.00,8.00 C2.00,7.45 2.45,7.00 3.00,7.00 Z';

var heart = 'M11.98,22.25 L1.82,11.95 C-0.28,9.83 -0.65,6.40 1.18,4.03 C3.37,1.19 7.44,1.00 9.88,3.47 L11.98,5.61 L13.93,3.63 C16.03,1.50 19.41,1.13 21.75,2.98 C24.55,5.21 24.74,9.33 22.30,11.80 L11.98,22.25 Z';

var heartBroken = 'M11.98,22.25 L1.82,11.95 C-0.28,9.83 -0.65,6.40 1.18,4.03 C3.37,1.19 7.44,1.00 9.88,3.47 L11.98,5.61 L13.93,3.63 C16.03,1.50 19.41,1.13 21.75,2.98 C24.55,5.21 24.74,9.33 22.30,11.80 L11.98,22.25 Z M15.30,9.54 C15.70,9.14 15.70,8.48 15.30,8.08 C14.90,7.68 14.25,7.68 13.85,8.08 L12.00,9.94 L10.15,8.08 C9.75,7.68 9.10,7.68 8.70,8.08 C8.30,8.48 8.30,9.14 8.70,9.54 L10.55,11.40 L8.70,13.26 C8.30,13.66 8.30,14.31 8.70,14.71 C9.10,15.11 9.75,15.12 10.15,14.71 L12.00,12.85 L13.85,14.71 C14.25,15.12 14.90,15.12 15.30,14.71 C15.70,14.31 15.70,13.66 15.30,13.26 L13.45,11.40 L15.30,9.54 Z';

var link = 'M21.00,15.05 C22.10,15.05 23.00,15.95 23.00,17.05 L23.00,21.00 C23.00,22.10 22.10,23.00 21.00,23.00 L3.00,23.00 C1.90,23.00 1.00,22.10 1.00,21.00 L1.00,3.00 C1.00,1.90 1.90,1.00 3.00,1.00 L7.00,1.00 C8.10,1.00 9.00,1.90 9.00,3.00 C9.00,4.11 8.10,5.00 7.00,5.00 L5.00,5.00 L5.00,19.00 L19.00,19.00 L19.00,17.05 C19.00,15.95 19.90,15.05 21.00,15.05 Z M12.00,14.00 C11.49,14.00 10.98,13.80 10.59,13.41 C9.80,12.63 9.80,11.37 10.59,10.59 L16.16,5.00 L14.00,5.01 L14.00,5.01 C12.90,5.01 12.00,4.11 12.00,3.01 C12.00,1.90 12.89,1.01 14.00,1.01 L20.99,1.00 L21.00,1.00 L22.99,1.00 L22.99,3.00 L22.99,3.00 L23.00,10.00 C23.00,11.10 22.11,12.00 21.00,12.00 L21.00,12.00 C19.90,12.00 19.00,11.11 19.00,10.00 L19.00,7.83 L13.41,13.41 C13.02,13.80 12.51,14.00 12.00,14.00 Z';

var location = 'M12.00,4.50 C13.66,4.50 15.00,5.84 15.00,7.50 C15.00,9.16 13.66,10.50 12.00,10.50 C10.34,10.50 9.00,9.16 9.00,7.50 C9.00,5.84 10.34,4.50 12.00,4.50 M19.50,7.50 C19.50,3.36 16.14,0.00 12.00,0.00 C7.86,0.00 4.50,3.36 4.50,7.50 C4.50,8.80 4.86,10.00 5.44,11.06 L5.40,11.06 L12.00,24.00 L18.60,11.06 L18.56,11.06 C19.14,10.00 19.50,8.80 19.50,7.50';

var lock = 'M8.00,10.00 L8.00,7.00 C8.00,4.79 9.79,3.00 12.00,3.00 C14.21,3.00 16.00,4.79 16.00,7.00 L16.00,10.00 L8.00,10.00 Z M19.00,10.02 L19.00,7.00 C19.00,3.14 15.86,0.00 12.00,0.00 C8.14,0.00 5.00,3.14 5.00,7.00 L5.00,10.02 C3.91,11.48 3.25,13.29 3.25,15.25 C3.25,20.08 7.17,24.00 12.00,24.00 C16.83,24.00 20.75,20.08 20.75,15.25 C20.75,13.29 20.09,11.48 19.00,10.02 L19.00,10.02 Z';

var menu = 'M21.50,9.50 C22.88,9.50 24.00,10.63 24.00,12.00 C24.00,13.38 22.88,14.50 21.50,14.50 L2.50,14.50 C1.13,14.50 0.00,13.38 0.00,12.00 C0.00,10.63 1.13,9.50 2.50,9.50 L21.50,9.50 Z M2.50,6.50 C1.13,6.50 0.00,5.38 0.00,4.00 C0.00,2.63 1.13,1.50 2.50,1.50 L21.50,1.50 C22.88,1.50 24.00,2.63 24.00,4.00 C24.00,5.38 22.88,6.50 21.50,6.50 L2.50,6.50 Z M21.50,17.50 C22.88,17.50 24.00,18.63 24.00,20.00 C24.00,21.38 22.88,22.50 21.50,22.50 L2.50,22.50 C1.13,22.50 0.00,21.38 0.00,20.00 C0.00,18.63 1.13,17.50 2.50,17.50 L21.50,17.50 Z';

var move = 'M14.30,18.17 C14.79,17.68 15.58,17.68 16.07,18.17 C16.56,18.66 16.56,19.45 16.07,19.93 L12.00,24.00 L7.93,19.93 C7.45,19.45 7.45,18.66 7.93,18.17 C8.42,17.68 9.21,17.68 9.70,18.17 L10.75,19.21 L10.75,15.25 C10.75,14.56 11.31,14.00 12.00,14.00 C12.69,14.00 13.25,14.56 13.25,15.25 L13.25,19.21 L14.30,18.17 Z M4.79,13.25 L5.83,14.30 C6.32,14.79 6.32,15.58 5.83,16.07 C5.35,16.55 4.55,16.55 4.07,16.07 L0.00,12.00 L4.07,7.93 C4.55,7.45 5.35,7.45 5.83,7.93 C6.32,8.42 6.32,9.21 5.83,9.70 L4.79,10.75 L8.75,10.75 C9.44,10.75 10.00,11.31 10.00,12.00 C10.00,12.69 9.44,13.25 8.75,13.25 L4.79,13.25 Z M19.93,7.93 L24.00,12.00 L19.93,16.07 C19.45,16.55 18.66,16.55 18.17,16.07 C17.68,15.58 17.68,14.79 18.17,14.30 L19.21,13.25 L15.25,13.25 C14.56,13.25 14.00,12.69 14.00,12.00 C14.00,11.31 14.56,10.75 15.25,10.75 L19.21,10.75 L18.17,9.70 C17.68,9.21 17.68,8.42 18.17,7.93 C18.66,7.45 19.45,7.45 19.93,7.93 Z M9.70,5.83 C9.21,6.32 8.42,6.32 7.93,5.83 C7.45,5.34 7.45,4.55 7.93,4.07 L12.00,-0.00 L16.07,4.07 C16.56,4.55 16.56,5.34 16.07,5.83 C15.58,6.32 14.79,6.32 14.30,5.83 L13.25,4.79 L13.25,8.75 C13.25,9.44 12.69,10.00 12.00,10.00 C11.31,10.00 10.75,9.44 10.75,8.75 L10.75,4.79 L9.70,5.83 Z';

var pause = 'M7.00,0.00 C8.65,0.00 10.00,1.35 10.00,3.00 L10.00,21.00 C10.00,22.65 8.65,24.00 7.00,24.00 C5.35,24.00 4.00,22.65 4.00,21.00 L4.00,3.00 C4.00,1.35 5.35,0.00 7.00,0.00 Z M17.00,0.00 C18.65,0.00 20.00,1.35 20.00,3.00 L20.00,21.00 C20.00,22.65 18.65,24.00 17.00,24.00 C15.35,24.00 14.00,22.65 14.00,21.00 L14.00,3.00 C14.00,1.35 15.35,0.00 17.00,0.00 Z';

var people = 'M18.00,14.00 C21.31,14.00 24.00,16.69 24.00,20.00 L24.00,22.00 L0.00,22.00 L0.00,19.50 C0.00,15.36 3.36,12.00 7.50,12.00 C10.22,12.00 12.59,13.45 13.91,15.62 C14.98,14.62 16.42,14.00 18.00,14.00 Z M7.50,11.00 C5.01,11.00 3.00,8.98 3.00,6.50 C3.00,4.01 5.01,2.00 7.50,2.00 C9.98,2.00 12.00,4.01 12.00,6.50 C12.00,8.98 9.98,11.00 7.50,11.00 Z M18.00,13.00 C16.34,13.00 15.00,11.66 15.00,10.00 C15.00,8.34 16.34,7.00 18.00,7.00 C19.66,7.00 21.00,8.34 21.00,10.00 C21.00,11.66 19.66,13.00 18.00,13.00 Z';

var person = 'M12.00,12.00 C6.62,12.00 2.25,16.48 2.25,22.00 L2.25,24.00 L21.75,24.00 L21.75,22.00 C21.75,16.48 17.39,12.00 12.00,12.00 M12.00,10.00 C14.69,10.00 16.88,7.76 16.88,5.00 C16.88,2.24 14.69,0.00 12.00,0.00 C9.31,0.00 7.13,2.24 7.13,5.00 C7.13,7.76 9.31,10.00 12.00,10.00';

var personAdd = 'M16.50,11.50 C14.02,11.50 12.00,9.48 12.00,7.00 C12.00,4.51 14.02,2.50 16.50,2.50 C18.98,2.50 21.00,4.51 21.00,7.00 C21.00,9.48 18.98,11.50 16.50,11.50 Z M9.25,12.50 L6.50,12.50 L6.50,15.25 C6.50,15.94 5.94,16.50 5.25,16.50 C4.56,16.50 4.00,15.94 4.00,15.25 L4.00,12.50 L1.25,12.50 C0.56,12.50 0.00,11.94 0.00,11.25 C0.00,10.56 0.56,10.00 1.25,10.00 L4.00,10.00 L4.00,7.25 C4.00,6.56 4.56,6.00 5.25,6.00 C5.94,6.00 6.50,6.56 6.50,7.25 L6.50,10.00 L9.25,10.00 C9.94,10.00 10.50,10.56 10.50,11.25 C10.50,11.94 9.94,12.50 9.25,12.50 Z M16.50,12.50 C20.64,12.50 24.00,15.86 24.00,20.00 L24.00,21.50 L9.00,21.50 L9.00,20.00 C9.00,15.86 12.36,12.50 16.50,12.50 Z';

var pin = 'M18.00,13.50 C18.00,11.28 16.79,9.35 15.00,8.31 L15.00,2.45 C16.14,2.22 17.00,1.21 17.00,0.00 L7.00,0.00 C7.00,1.21 7.86,2.22 9.00,2.45 L9.00,8.31 C7.21,9.35 6.00,11.28 6.00,13.50 L11.00,13.50 L11.00,21.96 L12.00,24.00 L13.00,21.96 L13.00,13.50 L18.00,13.50 Z';

var pinHide = 'M9.13,6.37 C9.62,6.85 9.62,7.64 9.13,8.13 L6.52,10.75 L9.13,13.37 C9.62,13.85 9.62,14.64 9.13,15.13 C8.65,15.62 7.86,15.62 7.37,15.13 L4.75,12.52 L2.13,15.13 C1.65,15.62 0.85,15.62 0.37,15.13 C-0.12,14.64 -0.12,13.85 0.37,13.37 L2.98,10.75 L0.37,8.13 C-0.12,7.64 -0.12,6.85 0.37,6.37 C0.85,5.88 1.65,5.88 2.13,6.37 L4.75,8.98 L7.37,6.37 C7.86,5.88 8.65,5.88 9.13,6.37 Z M20.50,8.69 C21.99,9.56 23.00,11.15 23.00,13.00 L19.00,13.00 L19.00,20.96 L18.00,23.00 L17.00,20.96 L17.00,13.00 L13.00,13.00 C13.00,11.15 14.01,9.56 15.50,8.69 L15.50,2.93 C14.64,2.71 14.00,1.93 14.00,1.00 L22.00,1.00 C22.00,1.93 21.36,2.71 20.50,2.93 L20.50,8.69 Z';

var pinterest = 'M0.00,12.00 C0.00,17.12 3.21,21.50 7.73,23.22 C7.62,22.28 7.50,20.74 7.75,19.65 C7.97,18.72 9.16,13.71 9.16,13.71 C9.16,13.71 8.80,13.00 8.80,11.94 C8.80,10.28 9.76,9.04 10.96,9.04 C11.98,9.04 12.47,9.80 12.47,10.72 C12.47,11.75 11.82,13.28 11.48,14.70 C11.20,15.89 12.08,16.86 13.25,16.86 C15.37,16.86 17.01,14.62 17.01,11.39 C17.01,8.53 14.95,6.53 12.02,6.53 C8.62,6.53 6.62,9.08 6.62,11.71 C6.62,12.74 7.02,13.84 7.51,14.44 C7.61,14.56 7.62,14.66 7.59,14.78 C7.50,15.16 7.30,15.97 7.26,16.14 C7.21,16.35 7.09,16.40 6.86,16.30 C5.37,15.60 4.44,13.42 4.44,11.67 C4.44,7.90 7.18,4.44 12.33,4.44 C16.48,4.44 19.70,7.39 19.70,11.34 C19.70,15.46 17.10,18.77 13.50,18.77 C12.29,18.77 11.15,18.14 10.76,17.40 C10.76,17.40 10.16,19.68 10.02,20.24 C9.73,21.32 8.95,22.69 8.47,23.47 C9.58,23.82 10.77,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00';

var play = 'M20.62,9.48 L6.63,0.48 C4.63,-0.80 2.00,0.63 2.00,3.00 L2.00,3.06 L2.00,21.00 C2.00,23.37 4.63,24.80 6.63,23.52 L20.62,14.52 C22.46,13.34 22.46,10.66 20.62,9.48';

var questionMark = 'M14.34,21.20 C14.34,22.77 13.15,24.00 11.56,24.00 C9.98,24.00 8.79,22.77 8.79,21.20 C8.79,19.63 9.98,18.40 11.56,18.40 C13.15,18.40 14.34,19.63 14.34,21.20 M11.81,10.32 C13.22,9.09 15.11,8.27 15.11,6.45 C15.11,5.00 13.87,4.09 12.16,4.09 C10.04,4.09 8.64,5.57 8.61,7.52 L3.75,7.52 C3.88,3.30 6.96,0.00 12.34,0.00 C17.20,0.00 20.25,2.52 20.25,6.32 C20.25,8.68 19.16,10.13 17.95,11.10 C16.27,12.43 15.11,12.99 14.46,13.71 C13.96,14.28 13.84,14.75 13.81,15.66 L9.45,15.66 C9.45,13.02 10.10,11.76 11.81,10.32';

var remove = 'M17.75,13.25 L6.25,13.25 C5.56,13.25 5.00,12.69 5.00,12.00 C5.00,11.31 5.56,10.75 6.25,10.75 L17.75,10.75 C18.44,10.75 19.00,11.31 19.00,12.00 C19.00,12.69 18.44,13.25 17.75,13.25 M12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00';

var report = 'M7.91,18.89 C9.11,19.60 10.51,20.01 12.00,20.01 C16.42,20.01 20.01,16.42 20.01,12.00 C20.01,10.51 19.60,9.11 18.89,7.91 L7.91,18.89 Z M5.09,16.06 L16.06,5.09 C14.87,4.39 13.48,3.99 12.00,3.99 C7.58,3.99 3.99,7.58 3.99,12.00 C3.99,13.48 4.39,14.87 5.09,16.06 Z M12.00,24.00 C5.37,24.00 0.00,18.63 0.00,12.00 C0.00,5.37 5.37,0.00 12.00,0.00 C18.63,0.00 24.00,5.37 24.00,12.00 C24.00,18.63 18.63,24.00 12.00,24.00 Z';

var search = 'M10.00,16.00 C6.69,16.00 4.00,13.31 4.00,10.00 C4.00,6.69 6.69,4.00 10.00,4.00 C13.31,4.00 16.00,6.69 16.00,10.00 C16.00,13.31 13.31,16.00 10.00,16.00 M23.12,18.88 L18.86,14.62 C19.59,13.24 20.00,11.67 20.00,10.00 C20.00,4.48 15.52,0.00 10.00,0.00 C4.48,0.00 0.00,4.48 0.00,10.00 C0.00,15.52 4.48,20.00 10.00,20.00 C11.67,20.00 13.24,19.59 14.62,18.86 L18.88,23.12 C20.05,24.29 21.95,24.29 23.12,23.12 C24.29,21.95 24.29,20.05 23.12,18.88';

var send = 'M6.00 6.00 L0.00 12.00 L7.67 14.56 L21.00 3.00 L9.44 16.34 L12.00 24.00 L18.00 18.00 L24.00 0.00 ';

var share = 'M21.00,14.00 C22.10,14.00 23.00,14.90 23.00,16.00 L23.00,22.00 C23.00,23.10 22.10,24.00 21.00,24.00 L3.00,24.00 C1.90,24.00 1.00,23.10 1.00,22.00 L1.00,16.00 C1.00,14.90 1.90,14.00 3.00,14.00 C4.10,14.00 5.00,14.90 5.00,16.00 L5.00,20.00 L19.00,20.00 L19.00,16.00 C19.00,14.90 19.90,14.00 21.00,14.00 Z M8.82,8.84 C8.04,9.62 6.77,9.63 5.99,8.84 C5.21,8.06 5.20,6.80 5.98,6.02 L11.99,0.00 L18.01,6.01 C18.79,6.79 18.80,8.06 18.02,8.84 C17.24,9.62 15.97,9.63 15.19,8.84 L13.99,7.65 L13.99,13.83 C13.99,14.93 13.10,15.83 11.99,15.83 C10.89,15.83 9.99,14.93 9.99,13.83 L9.99,7.66 L8.82,8.84 Z';

var shoppingBag = 'M9.50,5.00 C9.50,3.62 10.62,2.50 12.00,2.50 C13.38,2.50 14.50,3.62 14.50,5.00 L14.50,7.00 L9.50,7.00 L9.50,5.00 Z M17.00,7.00 L17.00,5.00 C17.00,2.24 14.76,0.00 12.00,0.00 C9.24,0.00 7.00,2.24 7.00,5.00 L7.00,7.00 L2.00,7.00 L2.00,22.00 C2.00,23.10 2.90,24.00 4.00,24.00 L20.00,24.00 C21.10,24.00 22.00,23.10 22.00,22.00 L22.00,7.00 L17.00,7.00 Z';

var smiley = 'M12.03,19.29 L11.97,19.29 C8.49,19.26 7.05,16.98 6.99,16.88 C6.74,16.47 6.85,15.92 7.26,15.66 C7.65,15.39 8.18,15.51 8.43,15.92 C8.49,16.00 9.49,17.50 12.00,17.51 C14.51,17.50 15.52,15.91 15.56,15.84 C15.81,15.43 16.34,15.30 16.74,15.56 C17.13,15.82 17.26,16.36 17.02,16.77 C16.96,16.87 15.52,19.26 12.03,19.29 Z M18.00,9.43 C18.00,10.38 17.23,11.14 16.29,11.14 C15.34,11.14 14.57,10.38 14.57,9.43 C14.57,8.48 15.34,7.71 16.29,7.71 C17.23,7.71 18.00,8.48 18.00,9.43 Z M6.00,9.43 C6.00,8.48 6.77,7.71 7.71,7.71 C8.66,7.71 9.43,8.48 9.43,9.43 C9.43,10.38 8.66,11.14 7.71,11.14 C6.77,11.14 6.00,10.38 6.00,9.43 Z';

var smileyOutline = 'M12.03,19.29 L11.97,19.29 C8.49,19.26 7.05,16.98 6.99,16.88 C6.74,16.47 6.85,15.92 7.26,15.66 C7.65,15.39 8.18,15.51 8.43,15.92 C8.49,16.00 9.49,17.50 12.00,17.51 C14.51,17.50 15.52,15.91 15.56,15.84 C15.81,15.43 16.34,15.30 16.74,15.56 C17.13,15.82 17.26,16.36 17.02,16.77 C16.96,16.87 15.52,19.26 12.03,19.29 Z M18.00,9.43 C18.00,10.38 17.23,11.14 16.29,11.14 C15.34,11.14 14.57,10.38 14.57,9.43 C14.57,8.48 15.34,7.71 16.29,7.71 C17.23,7.71 18.00,8.48 18.00,9.43 Z M6.00,9.43 C6.00,8.48 6.77,7.71 7.71,7.71 C8.66,7.71 9.43,8.48 9.43,9.43 C9.43,10.38 8.66,11.14 7.71,11.14 C6.77,11.14 6.00,10.38 6.00,9.43 Z M12.00,0.00 C5.40,0.00 0.00,5.40 0.00,12.00 C0.00,18.60 5.40,24.00 12.00,24.00 C18.60,24.00 24.00,18.60 24.00,12.00 C24.00,5.40 18.60,0.00 12.00,0.00 L12.00,0.00 Z M12.00,22.20 C6.45,22.20 1.80,17.70 1.80,12.00 C1.80,6.30 6.30,1.80 12.00,1.80 C17.70,1.80 22.20,6.30 22.20,12.00 C22.20,17.70 17.55,22.20 12.00,22.20 L12.00,22.20 Z';

var sound = 'M20.48,3.51 C22.75,5.78 24.00,8.79 24.00,12.00 C24.00,15.20 22.75,18.22 20.49,20.48 C20.24,20.73 19.92,20.85 19.60,20.85 C19.28,20.85 18.96,20.73 18.72,20.48 C18.23,20.00 18.23,19.21 18.72,18.72 C20.51,16.92 21.50,14.54 21.50,12.00 C21.50,9.46 20.51,7.07 18.71,5.28 C18.23,4.79 18.23,4.00 18.71,3.51 C19.20,3.02 19.99,3.02 20.48,3.51 Z M5.00,7.94 L5.00,7.96 L12.00,1.00 L12.00,23.00 L5.00,16.91 L5.00,16.94 L2.00,16.94 C0.90,16.94 0.00,16.04 0.00,14.94 L0.00,9.94 C0.00,8.83 0.90,7.94 2.00,7.94 L5.00,7.94 Z M16.95,7.05 C18.27,8.37 19.00,10.13 19.00,12.00 C19.00,13.87 18.27,15.63 16.95,16.95 C16.71,17.19 16.39,17.31 16.07,17.31 C15.75,17.31 15.43,17.19 15.18,16.95 C14.69,16.46 14.69,15.67 15.18,15.18 C16.03,14.33 16.50,13.20 16.50,12.00 C16.50,10.80 16.03,9.67 15.18,8.82 C14.69,8.33 14.69,7.54 15.18,7.05 C15.67,6.56 16.46,6.56 16.95,7.05 Z';

var speech = 'M12.00,0.00 C5.85,0.00 0.75,4.94 0.75,11.08 C0.75,13.78 1.65,16.32 3.45,18.27 L2.10,23.51 C1.95,23.81 2.40,24.11 2.70,23.96 L7.95,21.41 C9.30,21.86 10.65,22.16 12.00,22.16 C18.15,22.16 23.25,17.22 23.25,11.08 C23.25,4.94 18.15,0.00 12.00,0.00';

var speechEllipsis = 'M18.00,12.50 C17.17,12.50 16.50,11.83 16.50,11.00 C16.50,10.17 17.17,9.50 18.00,9.50 C18.83,9.50 19.50,10.17 19.50,11.00 C19.50,11.83 18.83,12.50 18.00,12.50 M12.00,12.50 C11.17,12.50 10.50,11.83 10.50,11.00 C10.50,10.17 11.17,9.50 12.00,9.50 C12.83,9.50 13.50,10.17 13.50,11.00 C13.50,11.83 12.83,12.50 12.00,12.50 M6.00,12.50 C5.17,12.50 4.50,11.83 4.50,11.00 C4.50,10.17 5.17,9.50 6.00,9.50 C6.83,9.50 7.50,10.17 7.50,11.00 C7.50,11.83 6.83,12.50 6.00,12.50 M12.00,0.00 C5.92,0.00 1.00,4.92 1.00,11.00 C1.00,13.65 1.94,16.09 3.50,17.99 L2.00,24.00 L7.34,20.95 C8.75,21.62 10.33,22.00 12.00,22.00 C18.07,22.00 23.00,17.07 23.00,11.00 C23.00,4.92 18.07,0.00 12.00,0.00';

var tag = 'M6.00,8.00 C7.10,8.00 8.00,7.10 8.00,6.00 C8.00,4.90 7.10,4.00 6.00,4.00 C4.90,4.00 4.00,4.90 4.00,6.00 C4.00,7.10 4.90,8.00 6.00,8.00 M13.36,1.80 L22.20,10.64 C23.27,11.70 23.27,13.43 22.20,14.49 L14.49,22.20 C13.43,23.27 11.70,23.27 10.64,22.20 L1.80,13.36 C1.29,12.85 1.00,12.16 1.00,11.44 L1.00,3.73 C1.00,2.22 2.22,1.00 3.73,1.00 L11.44,1.00 C12.16,1.00 12.85,1.29 13.36,1.80';

var icons = {
  add: add,
  'add-circle': addCircle,
  'add-pin': addPin,
  'arrow-back': arrowBack,
  'arrow-circle-forward': arrowCircleForward,
  'arrow-down': arrowDown,
  'arrow-forward': arrowForward,
  'arrow-up': arrowUp,
  bell: bell,
  camera: camera,
  cancel: cancel,
  check: check,
  'check-circle': checkCircle,
  'circle-outline': circleOutline,
  clear: clear,
  clock: clock,
  cog: cog,
  compass: compass,
  dash: dash,
  edit: edit,
  ellipsis: ellipsis,
  'ellipsis-circle-outline': ellipsisCircleOutline,
  facebook: facebook,
  'face-happy': faceHappy,
  'face-sad': faceSad,
  'face-smiley': faceSmiley,
  filter: filter,
  flag: flag,
  flashlight: flashlight,
  globe: globe,
  'graph-bar': graphBar,
  handle: handle,
  heart: heart,
  'heart-broken': heartBroken,
  knoop: knoop,
  lightbulb: lightbulb,
  link: link,
  location: location,
  lock: lock,
  menu: menu,
  move: move,
  pause: pause,
  people: people,
  person: person,
  'person-add': personAdd,
  pin: pin,
  'pin-hide': pinHide,
  pinterest: pinterest,
  play: play,
  'question-mark': questionMark,
  remove: remove,
  report: report,
  search: search,
  'shopping-bag': shoppingBag,
  smiley: smiley,
  'smiley-outline': smileyOutline,
  send: send,
  share: share,
  sound: sound,
  speech: speech,
  'speech-ellipsis': speechEllipsis,
  tag: tag
};

var IconNames = Object.keys(icons);

function Icon(props) {
  var accessibilityLabel = props.accessibilityLabel,
      _props$color = props.color,
      color = _props$color === undefined ? 'gray' : _props$color,
      icon = props.icon,
      inline = props.inline,
      _props$size = props.size,
      size = _props$size === undefined ? 16 : _props$size;


  var cs = classnames(styles$1.icon, colors[color], defineProperty({}, styles$1.iconBlock, !inline));

  var path = icons[icon];

  var ariaHidden = accessibilityLabel === '' ? true : null;

  return createElement(
    'svg',
    {
      className: cs,
      height: size,
      width: size,
      viewBox: '0 0 24 24',
      'aria-hidden': ariaHidden,
      'aria-label': accessibilityLabel,
      role: 'img'
    },
    createElement(
      'title',
      null,
      accessibilityLabel
    ),
    createElement('path', { d: path })
  );
}

Icon.icons = IconNames;

Icon.propTypes = {
  accessibilityLabel: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['blue', 'darkGray', 'eggplant', 'gray', 'green', 'lightGray', 'maroon', 'midnight', 'navy', 'olive', 'orange', 'orchid', 'pine', 'purple', 'red', 'watermelon', 'white']),
  icon: PropTypes.oneOf(IconNames).isRequired,
  inline: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

var styles$2 = { "img": "_mj _27 _3x _2j", "scaled-img": "_mk _2h", "contain": "_ml _mk _2h", "cover": "_mm _mk _2h" };

var shouldScaleImage = function shouldScaleImage(fit) {
  return fit === 'cover' || fit === 'contain';
};

var Image = function (_React$PureComponent) {
  inherits(Image, _React$PureComponent);

  function Image() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Image);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref, [this].concat(args))), _this), _this.handleLoad = function () {
      if (_this.props.onLoad) {
        _this.props.onLoad();
      }
    }, _this.handleError = function () {
      if (_this.props.onError) {
        _this.props.onError();
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Image, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (shouldScaleImage(this.props.fit)) {
        this.loadImage();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          fit = _props.fit,
          src = _props.src;

      if (shouldScaleImage(fit) && prevProps.src !== src) {
        this.loadImage();
      }
    }
  }, {
    key: 'loadImage',
    value: function loadImage() {
      if (typeof window !== 'undefined') {
        var image = new window.Image();
        image.onload = this.handleLoad;
        image.onerror = this.handleError;
        image.src = this.props.src;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          alt = _props2.alt,
          color = _props2.color,
          children = _props2.children,
          fit = _props2.fit,
          naturalHeight = _props2.naturalHeight,
          naturalWidth = _props2.naturalWidth,
          sizes = _props2.sizes,
          src = _props2.src,
          srcSet = _props2.srcSet;


      var isScaledImage = shouldScaleImage(fit);
      var childContent = children ? createElement(
        Box,
        { position: 'absolute', top: true, left: true, bottom: true, right: true, overflow: 'hidden' },
        children
      ) : null;

      return isScaledImage ? createElement(
        'div',
        {
          'aria-label': alt,
          className: styles$2[fit],
          style: {
            backgroundColor: color,
            backgroundImage: 'url(\'' + src + '\')'
          },
          role: 'img'
        },
        childContent
      ) : createElement(
        Box,
        {
          position: 'relative',
          dangerouslySetInlineStyle: {
            __style: {
              backgroundColor: color,
              paddingBottom: naturalHeight / naturalWidth * 100 + '%'
            }
          }
        },
        createElement('img', {
          alt: alt,
          className: styles$2.img,
          onError: this.handleError,
          onLoad: this.handleLoad,
          sizes: sizes,
          src: src,
          srcSet: srcSet
        }),
        childContent
      );
    }
  }]);
  return Image;
}(PureComponent);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  children: PropTypes.node,
  color: PropTypes.string,
  fit: PropTypes.oneOf(['contain', 'cover', 'none']),
  naturalHeight: PropTypes.number.isRequired,
  naturalWidth: PropTypes.number.isRequired,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  sizes: PropTypes.string,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string
};
Image.defaultProps = {
  color: 'transparent',
  fit: 'none'
};

var styles$3 = { "Mask": "_mn _2b _2h", "square": "_mo _53", "rounded": "_mp _56", "circle": "_mq _54", "wash": "_mr _2j _2n _2o _2m _2l" };

function Mask(props) {
  var children = props.children,
      _props$shape = props.shape,
      shape = _props$shape === undefined ? 'square' : _props$shape,
      width = props.width,
      height = props.height,
      _props$wash = props.wash,
      wash = _props$wash === undefined ? false : _props$wash;

  return createElement(
    'div',
    { className: classnames(styles$3.Mask, styles$3[shape]), style: { width: width, height: height } },
    children,
    wash && createElement('div', { className: styles$3.wash })
  );
}

Mask.propTypes = {
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  shape: PropTypes.oneOf(['circle', 'rounded', 'square']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  wash: PropTypes.bool
};

var typography = { "antialiased": "_ms", "sansSerif": "_mt", "letterSpacing": "_mu", "leadingShort": "_mv", "leadingTall": "_mw", "fontWeightNormal": "_mx", "fontWeightBold": "_my", "fontStyleRegular": "_mz", "fontStyleItalic": "_n0", "underline": "_n1", "noUnderline": "_n2", "breakWord": "_n3", "truncate": "_n4", "alignLeft": "_n5", "alignRight": "_n6", "alignCenter": "_n7", "textJustify": "_n8" };

var Square = function Square(props) {
  return createElement(
    Box,
    _extends({}, props, { position: 'relative' }),
    createElement(Box, {
      dangerouslySetInlineStyle: { __style: { paddingBottom: '100%' } },
      position: 'relative'
    }),
    createElement(
      Box,
      { position: 'absolute', top: true, left: true, bottom: true, right: true },
      props.children
    )
  );
};

var DefaultAvatar = function DefaultAvatar(_ref) {
  var name = _ref.name;

  var firstInitial = [].concat(toConsumableArray(name))[0].toUpperCase();
  return createElement(
    Square,
    { color: 'gray', shape: 'circle' },
    createElement(
      'svg',
      {
        width: '100%',
        viewBox: '-50 -50 100 100',
        version: '1.1',
        preserveAspectRatio: 'xMidYMid meet',
        xmlns: 'http://www.w3.org/2000/svg'
      },
      createElement(
        'title',
        null,
        name
      ),
      createElement(
        'text',
        {
          fontSize: '50px',
          fill: '#fff',
          dominantBaseline: 'central',
          textAnchor: 'middle',
          className: [typography.antialiased, typography.sansSerif, typography.leadingSmall, typography.fontWeightBold].join(' ')
        },
        firstInitial
      )
    )
  );
};

var sizes = {
  sm: 24,
  md: 40,
  lg: 72
};

function Avatar(_ref2) {
  var name = _ref2.name,
      size = _ref2.size,
      src = _ref2.src,
      verified = _ref2.verified;

  var width = size ? sizes[size] : '100%';
  var height = size ? sizes[size] : '';
  return createElement(
    Box,
    {
      color: 'white',
      dangerouslySetInlineStyle: {
        __style: {
          boxShadow: '0 0 0 2px #fff'
        }
      },
      width: width,
      height: height,
      position: 'relative',
      shape: 'circle'
    },
    src ? createElement(
      Mask,
      { shape: 'circle', wash: true },
      createElement(Image, {
        alt: name,
        color: '#EFEFEF',
        naturalHeight: 1,
        naturalWidth: 1,
        src: src
      })
    ) : createElement(DefaultAvatar, { name: name }),
    verified && createElement(
      Box,
      {
        position: 'absolute',
        width: '20%',
        height: '20%',
        minWidth: 8,
        minHeight: 8,
        dangerouslySetInlineStyle: {
          __style: {
            bottom: '4%',
            right: '4%'
          }
        }
      },
      createElement(
        Box,
        {
          color: 'white',
          width: '100%',
          height: '100%',
          shape: 'circle',
          dangerouslySetInlineStyle: {
            __style: {
              boxShadow: '0 0 0 2px #fff'
            }
          }
        },
        createElement(Icon, {
          color: 'red',
          icon: 'check-circle',
          accessibilityLabel: '',
          size: '100%'
        })
      )
    )
  );
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  verified: PropTypes.bool
};

var styles$4 = { "button": "_n9 _2p", "solid": "_na _5b", "enabled": "_nb _25 _nn", "sm": "_nc", "md": "_nd", "lg": "_ne", "block": "_nf _3x _27", "inline": "_ng _29", "disabled": "_nh _5h", "gray": "_ni _5h", "red": "_nj _5d", "blue": "_nk _5t", "transparent": "_nl _6a", "white": "_nm _5f" };

var styles$5 = { "Text": "_nv _ms _mt _mu", "fontSize1": "_nw", "fontSize2": "_nx", "fontSize3": "_ny", "fontSize4": "_nz", "fontSize5": "_o0", "smFontSize1": "_o1", "smFontSize2": "_o2", "smFontSize3": "_o3", "smFontSize4": "_o4", "smFontSize5": "_o5", "mdFontSize1": "_o6", "mdFontSize2": "_o7", "mdFontSize3": "_o8", "mdFontSize4": "_o9", "mdFontSize5": "_oa", "lgFontSize1": "_ob", "lgFontSize2": "_oc", "lgFontSize3": "_od", "lgFontSize4": "_oe", "lgFontSize5": "_of" };

var SIZE_SCALE = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5
};

function Text(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === undefined ? 'left' : _ref$align,
      _ref$bold = _ref.bold,
      bold = _ref$bold === undefined ? false : _ref$bold,
      children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'darkGray' : _ref$color,
      _ref$inline = _ref.inline,
      inline = _ref$inline === undefined ? false : _ref$inline,
      _ref$italic = _ref.italic,
      italic = _ref$italic === undefined ? false : _ref$italic,
      _ref$overflow = _ref.overflow,
      overflow = _ref$overflow === undefined ? 'breakWord' : _ref$overflow,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 'md' : _ref$size,
      smSize = _ref.smSize,
      mdSize = _ref.mdSize,
      lgSize = _ref.lgSize,
      _ref$leading = _ref.leading,
      leading = _ref$leading === undefined ? 'short' : _ref$leading,
      _ref$truncate = _ref.truncate,
      truncate = _ref$truncate === undefined ? false : _ref$truncate,
      _ref$__dangerouslyInc = _ref.__dangerouslyIncreaseLineHeight,
      __dangerouslyIncreaseLineHeight = _ref$__dangerouslyInc === undefined ? false : _ref$__dangerouslyInc;

  var scale = SIZE_SCALE[size];
  var smScale = SIZE_SCALE[smSize];
  var mdScale = SIZE_SCALE[mdSize];
  var lgScale = SIZE_SCALE[lgSize];

  var cs = classnames(styles$5.Text, styles$5['fontSize' + scale], lgSize && styles$5['lgFontSize' + lgScale], mdSize && styles$5['mdFontSize' + mdScale], smSize && styles$5['smFontSize' + smScale], color === 'blue' && colors.blue, color === 'darkGray' && colors.darkGray, color === 'eggplant' && colors.eggplant, color === 'gray' && colors.gray, color === 'green' && colors.green, color === 'lightGray' && colors.lightGray, color === 'maroon' && colors.maroon, color === 'midnight' && colors.midnight, color === 'navy' && colors.navy, color === 'olive' && colors.olive, color === 'orange' && colors.orange, color === 'orchid' && colors.orchid, color === 'pine' && colors.pine, color === 'purple' && colors.purple, color === 'red' && colors.red, color === 'watermelon' && colors.watermelon, color === 'white' && colors.white, leading === 'short' && typography.leadingShort, (leading === 'tall' || __dangerouslyIncreaseLineHeight) && typography.leadingTall, align === 'center' && typography.alignCenter, align === 'justify' && typography.alignJustify, align === 'left' && typography.alignLeft, align === 'right' && typography.alignRight, overflow === 'breakWord' && typography.breakWord, italic && typography.fontStyleItalic, !italic && typography.fontStyleNormal, bold && typography.fontWeightBold, !bold && typography.fontWeightNormal, truncate && typography.truncate);
  var Tag = inline ? 'span' : 'div';

  return createElement(
    Tag,
    _extends({
      className: cs
    }, truncate && typeof children === 'string' ? { title: children } : null),
    children
  );
}

Text.propTypes = {
  __dangerouslyIncreaseLineHeight: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
  bold: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.oneOf(['green', 'pine', 'olive', 'blue', 'navy', 'midnight', 'purple', 'orchid', 'eggplant', 'maroon', 'watermelon', 'orange', 'darkGray', 'gray', 'lightGray', 'red', 'white']),
  inline: PropTypes.bool,
  italic: PropTypes.bool,
  leading: PropTypes.oneOf(['tall', 'short']),
  lgSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  mdSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  overflow: PropTypes.oneOf(['normal', 'breakWord']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  smSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  truncate: PropTypes.bool
};

function Button(props) {
  var _classnames;

  var accessibilityExpanded = props.accessibilityExpanded,
      accessibilityHaspopup = props.accessibilityHaspopup,
      accessibilityLabel = props.accessibilityLabel,
      _props$color = props.color,
      color = _props$color === undefined ? 'gray' : _props$color,
      _props$disabled = props.disabled,
      disabled = _props$disabled === undefined ? false : _props$disabled,
      _props$inline = props.inline,
      inline = _props$inline === undefined ? false : _props$inline,
      name = props.name,
      onClick = props.onClick,
      _props$size = props.size,
      size = _props$size === undefined ? 'md' : _props$size,
      text = props.text,
      _props$type = props.type,
      type = _props$type === undefined ? 'button' : _props$type;


  var textColor = {
    blue: 'white',
    gray: 'darkGray',
    red: 'white',
    transparent: 'white',
    white: 'darkGray'
  };

  var classes = classnames(styles$4.button, (_classnames = {}, defineProperty(_classnames, styles$4.sm, size === 'sm'), defineProperty(_classnames, styles$4.md, size === 'md'), defineProperty(_classnames, styles$4.lg, size === 'lg'), defineProperty(_classnames, styles$4.solid, color !== 'transparent'), defineProperty(_classnames, styles$4[color], !disabled), defineProperty(_classnames, styles$4.disabled, disabled), defineProperty(_classnames, styles$4.enabled, !disabled), defineProperty(_classnames, styles$4.inline, inline), defineProperty(_classnames, styles$4.block, !inline), _classnames));

  return createElement(
    'button',
    {
      'aria-expanded': accessibilityExpanded,
      'aria-haspopup': accessibilityHaspopup,
      'aria-label': accessibilityLabel,
      className: classes,
      disabled: disabled,
      name: name,
      onClick: function (_onClick) {
        function onClick(_x) {
          return _onClick.apply(this, arguments);
        }

        onClick.toString = function () {
          return _onClick.toString();
        };

        return onClick;
      }(function (event) {
        return onClick && onClick({ event: event });
      }),
      type: type
    },
    createElement(
      Text,
      {
        align: 'center',
        bold: true,
        color: disabled ? 'gray' : textColor[color],
        overflow: 'normal',
        size: size
      },
      text
    )
  );
}

Button.propTypes = {
  accessibilityExpanded: PropTypes.bool,
  accessibilityHaspopup: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'gray', 'red', 'transparent', 'white']),
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit'])
};

var styles$6 = { "card": "_og _2j _56 _2l _2m _2n _2o", "hover": "_oh", "animateIn": "_oi" };

var Card = function (_React$Component) {
  inherits(Card, _React$Component);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseEnter = function (event) {
      var onMouseEnter = _this.props.onMouseEnter;

      _this.setState({ hovered: true }, onMouseEnter && function () {
        return onMouseEnter({ event: event });
      });
    }, _this.handleMouseLeave = function (event) {
      var onMouseLeave = _this.props.onMouseLeave;

      _this.setState({ hovered: false }, onMouseLeave && function () {
        return onMouseLeave({ event: event });
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Card, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          image = _props.image;
      var hovered = this.state.hovered;


      var classes = classnames(styles$6.card, defineProperty({}, styles$6.hover, active || active == null && hovered));

      return createElement(
        Box,
        {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          position: 'relative'
        },
        image && createElement(
          Box,
          { marginBottom: 1 },
          image
        ),
        createElement(
          Box,
          null,
          children
        ),
        createElement('div', { className: classes })
      );
    }
  }]);
  return Card;
}(Component);

Card.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  image: PropTypes.node,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

var styles$7 = { "check": "_oj _27 _2p _2q _2y _38", "checkEnabled": "_ok _nn", "checkDarkGray": "_ol _5l", "checkGray": "_om _5j", "checkLightGray": "_on _5h", "checkWhite": "_oo _5f", "checkFocused": "_op _26", "checkSm": "_oq", "checkMd": "_or", "input": "_os _2j _jr", "inputEnabled": "_ot _nn", "inputSm": "_ou", "inputMd": "_ov" };

var Checkbox = function (_React$Component) {
  inherits(Checkbox, _React$Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false
    }, _this.handleChange = function (event) {
      var checked = event.target.checked;

      _this.props.onChange({ event: event, checked: checked });
    }, _this.handleBlur = function () {
      return _this.setState({ focused: false });
    }, _this.handleFocus = function () {
      return _this.setState({ focused: true });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Checkbox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.indeterminate) {
        this.setIndeterminate(!!this.props.indeterminate);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(previousProps) {
      if (previousProps.indeterminate !== this.props.indeterminate) {
        this.setIndeterminate(!!this.props.indeterminate);
      }
    }
  }, {
    key: 'setIndeterminate',
    value: function setIndeterminate(indeterminate) {
      if (this.input) {
        this.input.indeterminate = indeterminate;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _this2 = this,
          _classnames2;

      var _props = this.props,
          checked = _props.checked,
          disabled = _props.disabled,
          id = _props.id,
          indeterminate = _props.indeterminate,
          name = _props.name,
          size = _props.size;

      return createElement(
        Box,
        { position: 'relative' },
        createElement('input', {
          checked: checked,
          className: classnames(styles$7.input, (_classnames = {}, defineProperty(_classnames, styles$7.inputEnabled, !disabled), defineProperty(_classnames, styles$7.indeterminate, indeterminate), defineProperty(_classnames, styles$7.inputSm, size === 'sm'), defineProperty(_classnames, styles$7.inputMd, size === 'md'), _classnames)),
          disabled: disabled,
          id: id,
          name: name,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          ref: function ref(el) {
            _this2.input = el;
          },
          type: 'checkbox'
        }),
        createElement(
          'div',
          {
            className: classnames(styles$7.check,
            // eslint-disable-next-line no-nested-ternary
            disabled ? checked || indeterminate ? styles$7.checkGray : styles$7.checkLightGray : checked || indeterminate ? styles$7.checkDarkGray : styles$7.checkWhite, (_classnames2 = {}, defineProperty(_classnames2, styles$7.checkEnabled, !disabled), defineProperty(_classnames2, styles$7.checkFocused, this.state.focused), defineProperty(_classnames2, styles$7.checkMd, size === 'md'), defineProperty(_classnames2, styles$7.checkSm, size === 'sm'), _classnames2))
          },
          (checked || indeterminate) && createElement(Icon, {
            accessibilityLabel: '',
            color: 'white',
            icon: indeterminate ? 'dash' : 'check',
            size: size === 'sm' ? 8 : 12
          })
        )
      );
    }
  }]);
  return Checkbox;
}(Component);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  indeterminate: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['sm', 'md'])
};
Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  indeterminate: false,
  size: 'md'
};

var Collection = function (_React$PureComponent) {
  inherits(Collection, _React$PureComponent);

  function Collection() {
    classCallCheck(this, Collection);
    return possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).apply(this, arguments));
  }

  createClass(Collection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Item = _props.Item,
          layout$$1 = _props.layout,
          _props$viewportTop = _props.viewportTop,
          viewportTop = _props$viewportTop === undefined ? 0 : _props$viewportTop,
          _props$viewportLeft = _props.viewportLeft,
          viewportLeft = _props$viewportLeft === undefined ? 0 : _props$viewportLeft;

      // Calculate the full dimensions of the item layer

      var width = Math.max.apply(Math, toConsumableArray(layout$$1.map(function (item) {
        return item.left + item.width;
      })));
      var height = Math.max.apply(Math, toConsumableArray(layout$$1.map(function (item) {
        return item.top + item.height;
      })));

      // Default the viewport to being the full width of the content layer
      var _props2 = this.props,
          _props2$viewportWidth = _props2.viewportWidth,
          viewportWidth = _props2$viewportWidth === undefined ? width : _props2$viewportWidth,
          _props2$viewportHeigh = _props2.viewportHeight,
          viewportHeight = _props2$viewportHeigh === undefined ? height : _props2$viewportHeigh;

      // Calculates which items from the item layer to render in the viewport
      // layer.

      var items = layout$$1.reduce(function (acc, position, idx) {
        if (position.top + position.height > viewportTop && position.top < viewportHeight + viewportTop && position.left < viewportWidth + viewportLeft && position.left + position.width > viewportLeft) {
          acc.push(_extends({ idx: idx }, position));
        }
        return acc;
      }, []);

      return createElement(
        'div',
        { className: layout.relative, style: { width: width, height: height } },
        items.map(function (_ref) {
          var idx = _ref.idx,
              style = objectWithoutProperties(_ref, ['idx']);
          return createElement(
            'div',
            { key: idx, className: layout.absolute, style: style },
            createElement(Item, { idx: idx })
          );
        })
      );
    }
  }]);
  return Collection;
}(PureComponent);

Collection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  Item: PropTypes.any,
  layout: PropTypes.arrayOf(PropTypes.exact({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired),
  viewportHeight: PropTypes.number,
  viewportLeft: PropTypes.number,
  viewportTop: PropTypes.number,
  viewportWidth: PropTypes.number
};
Collection.defaultProps = {
  layout: [],
  viewportLeft: 0,
  viewportTop: 0
};

var styles$8 = { "deprecatedColumn": "_ow", "xsCol0": "_ox", "xsCol1": "_oy _3m", "xsCol2": "_oz _3n", "xsCol3": "_p0 _3o", "xsCol4": "_p1 _3p", "xsCol5": "_p2 _3q", "xsCol6": "_p3 _3r", "xsCol7": "_p4 _3s", "xsCol8": "_p5 _3t", "xsCol9": "_p6 _3u", "xsCol10": "_p7 _3v", "xsCol11": "_p8 _3w", "xsCol12": "_p9 _3x", "smCol0": "_pa", "smCol1": "_pb _3y", "smCol2": "_pc _3z", "smCol3": "_pd _40", "smCol4": "_pe _41", "smCol5": "_pf _42", "smCol6": "_pg _43", "smCol7": "_ph _44", "smCol8": "_pi _45", "smCol9": "_pj _46", "smCol10": "_pk _47", "smCol11": "_pl _48", "smCol12": "_pm _49", "mdCol0": "_pn", "mdCol1": "_po _4a", "mdCol2": "_pp _4b", "mdCol3": "_pq _4c", "mdCol4": "_pr _4d", "mdCol5": "_ps _4e", "mdCol6": "_pt _4f", "mdCol7": "_pu _4g", "mdCol8": "_pv _4h", "mdCol9": "_pw _4i", "mdCol10": "_px _4j", "mdCol11": "_py _4k", "mdCol12": "_pz _4l", "lgCol0": "_q0", "lgCol1": "_q1 _4m", "lgCol2": "_q2 _4n", "lgCol3": "_q3 _4o", "lgCol4": "_q4 _4p", "lgCol5": "_q5 _4q", "lgCol6": "_q6 _4r", "lgCol7": "_q7 _4s", "lgCol8": "_q8 _4t", "lgCol9": "_q9 _4u", "lgCol10": "_qa _4v", "lgCol11": "_qb _4w", "lgCol12": "_qc _4x" };

function Column(props) {
  var children = props.children;

  var cs = classnames((props.xs || props.sm || props.md || props.lg) && styles$8.deprecatedColumn, props.xs && styles$8['xsCol' + props.xs], props.sm && styles$8['smCol' + props.sm], props.md && styles$8['mdCol' + props.md], props.lg && styles$8['lgCol' + props.lg], props.span && styles$8['xsCol' + props.span], props.smSpan && styles$8['smCol' + props.smSpan], props.mdSpan && styles$8['mdCol' + props.mdSpan], props.lgSpan && styles$8['lgCol' + props.lgSpan]);
  return createElement(
    'div',
    { className: cs },
    children
  );
}

Column.propTypes = {
  children: PropTypes.node,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  span: PropTypes.number,
  smSpan: PropTypes.number,
  mdSpan: PropTypes.number,
  lgSpan: PropTypes.number
};

function Container(props) {
  var children = props.children;

  return createElement(
    Box,
    { justifyContent: 'center', display: 'flex' },
    createElement(
      Box,
      { maxWidth: 800, width: '100%' },
      children
    )
  );
}

Container.propTypes = {
  children: PropTypes.node
};

var styles$9 = { "divider": "_qd _27 _4z _jr" };

function Divider() {
  return createElement('hr', { className: styles$9.divider });
}

function Caret(props) {
  var direction = props.direction;

  var path = void 0;
  switch (direction) {
    case 'up':
      path = 'M0 0 L12 12 L24 0';
      break;
    case 'right':
      path = 'M24 0 L12 12 L24 24';
      break;
    case 'down':
      path = 'M0 24 L12 12 L24 24';
      break;
    case 'left':
      path = 'M0 0 L12 12 L0 24';
      break;
    default:
  }

  return createElement(
    'svg',
    { width: '24', height: '24' },
    createElement('path', { d: path })
  );
}

Caret.propTypes = {
  direction: PropTypes.oneOf(['up', 'right', 'down', 'left'])
};

var styles$10 = { "container": "_qe _2j", "contents": "_qf _2j _27 _2p _56", "dimensions": "_qg", "innerContents": "_qh _2q _2f _56", "caret": "_qi _2j" };

/* Needed until this Flow issue is fixed: https://github.com/facebook/flow/issues/380 */
/* eslint quote-props: 0 */
var SPACES_INDEX_MAP = {
  '0': 'up',
  '1': 'right',
  '2': 'down',
  '3': 'left'
};

var DIR_INDEX_MAP = {
  up: 0,
  right: 1,
  down: 2,
  left: 3
};

var MARGIN = 24;
var CARET_HEIGHT = 24;
var CARET_OFFSET_FROM_SIDE = 24;
var BORDER_RADIUS = 8;

/**
 * Determines the main direction the flyout opens
 */
function getMainDir(flyoutSize, idealDirection, triggerRect, windowSize) {
  // Calculates the available space if we were to place the flyout in the 4 main directions
  // to determine which 'quadrant' to position the flyout inside of
  var up = triggerRect.top - flyoutSize.height - CARET_HEIGHT;
  var right = windowSize.width - flyoutSize.width - CARET_HEIGHT - triggerRect.right;
  var down = windowSize.height - flyoutSize.height - CARET_HEIGHT - triggerRect.bottom;
  var left = triggerRect.left - flyoutSize.width - CARET_HEIGHT;

  // overrides available space when the trigger is close to the edge of the screen
  // trigger is too close to top/bottom of screen for left & right flyouts
  if (triggerRect.top < BORDER_RADIUS || windowSize.height - triggerRect.bottom < BORDER_RADIUS) {
    left = 0;
    right = 0;
  }

  // trigger is too close to the left/right of screen for up & down flyouts
  if (triggerRect.left < BORDER_RADIUS || windowSize.width - triggerRect.right < BORDER_RADIUS) {
    up = 0;
    down = 0;
  }

  var spaces = [up, right, down, left];

  // Identify best direction of available spaces
  var max = Math.max.apply(Math, spaces);

  // Chose the main direction for the flyout based on available spaces & user preference
  var mainDir = void 0;
  if (idealDirection && spaces[DIR_INDEX_MAP[idealDirection]] > 0) {
    // user pref
    mainDir = idealDirection;
  } else {
    // If no direction pref, chose the direction in which there is the most space available
    mainDir = SPACES_INDEX_MAP[spaces.indexOf(max)];
  }
  return mainDir;
}

/**
 * Determines the sub direction of how the flyout is positioned within the main dir
 */
function getSubDir(flyoutSize, mainDir, triggerRect, windowSize) {
  // Now that we have the main direction, chose from 3 caret placements for that direction
  var offset = void 0;
  var triggerMid = void 0;
  var windowSpaceAvailable = void 0;

  if (mainDir === 'right' || mainDir === 'left') {
    offset = flyoutSize.height / 2;
    triggerMid = triggerRect.top + (triggerRect.bottom - triggerRect.top) / 2;
    windowSpaceAvailable = windowSize.height;
  } else {
    // (mainDir === 'up' || mainDir === 'down')
    offset = flyoutSize.width / 2;
    triggerMid = triggerRect.left + (triggerRect.right - triggerRect.left) / 2;
    windowSpaceAvailable = windowSize.width;
  }

  var aboveOrLeft = triggerMid - offset - MARGIN;
  var belowOrRight = windowSpaceAvailable - triggerMid - offset - MARGIN;
  var subDir = void 0;
  if (aboveOrLeft > 0 && belowOrRight > 0) {
    // caret should go in middle b/c it can
    subDir = 'middle';
  } else if (belowOrRight > 0) {
    // caret should go at top for left/right and left for up/down
    subDir = mainDir === 'left' || mainDir === 'right' ? 'up' : 'left';
  } else {
    // caret should go at bottom for left/right and right for up/down
    subDir = mainDir === 'left' || mainDir === 'right' ? 'down' : 'right';
  }
  return subDir;
}

/**
 * Calculates the amount the flyout & caret need to shift over to align with designs
 */
function calcEdgeShifts(subDir, triggerRect, windowSize) {
  // Target values for flyout and caret shifts
  var flyoutVerticalShift = CARET_OFFSET_FROM_SIDE - (triggerRect.height - CARET_HEIGHT) / 2;
  var flyoutHorizontalShift = CARET_OFFSET_FROM_SIDE - (triggerRect.width - CARET_HEIGHT) / 2;
  var caretVerticalShift = CARET_HEIGHT;
  var caretHorizontalShift = CARET_HEIGHT;

  // Covers edge case where trigger is in a corner and we need to adjust the offset of the caret
  // to something smaller than normal in order
  var isCloseVertically = triggerRect.top - flyoutVerticalShift < 0 || triggerRect.bottom + flyoutVerticalShift > windowSize.height;
  var isCloseHorizontally = triggerRect.left - flyoutHorizontalShift < 0 || triggerRect.right + flyoutHorizontalShift > windowSize.width;
  if (isCloseVertically) {
    flyoutVerticalShift = BORDER_RADIUS - (triggerRect.height - CARET_HEIGHT) / 2;
    caretVerticalShift = BORDER_RADIUS;
  }
  if (isCloseHorizontally) {
    flyoutHorizontalShift = BORDER_RADIUS - (triggerRect.width - CARET_HEIGHT) / 2;
    caretHorizontalShift = BORDER_RADIUS;
  }

  return {
    flyout: {
      x: flyoutHorizontalShift,
      y: flyoutVerticalShift
    },
    caret: {
      x: caretHorizontalShift,
      y: caretVerticalShift
    }
  };
}

/**
 * Calculates flyout and caret offsets for styling
 */
function adjustOffsets(base, edgeShift, flyoutSize, mainDir, subDir, triggerRect) {
  var flyoutLeft = base.left;
  var flyoutTop = base.top;

  var caretTop = mainDir === 'down' ? -CARET_HEIGHT : null;
  var caretRight = mainDir === 'left' ? -CARET_HEIGHT : null;
  var caretBottom = null;
  var caretLeft = mainDir === 'right' ? -CARET_HEIGHT : null;

  if (subDir === 'up') {
    flyoutTop = base.top - edgeShift.flyout.y;
    caretTop = edgeShift.caret.y;
  } else if (subDir === 'down') {
    flyoutTop = base.top - flyoutSize.height + triggerRect.height + edgeShift.flyout.y;
    caretBottom = edgeShift.caret.y;
  } else if (subDir === 'left') {
    flyoutLeft = base.left - edgeShift.flyout.x;
    caretLeft = edgeShift.caret.x;
  } else if (subDir === 'right') {
    flyoutLeft = base.left - flyoutSize.width + triggerRect.width + edgeShift.flyout.x;
    caretRight = edgeShift.caret.x;
  } else if (subDir === 'middle') {
    if (mainDir === 'left' || mainDir === 'right') {
      var triggerMid = flyoutTop + triggerRect.height / 2;
      flyoutTop = triggerMid - flyoutSize.height / 2;
      caretTop = (flyoutSize.height - CARET_HEIGHT) / 2;
    }
    if (mainDir === 'up' || mainDir === 'down') {
      var _triggerMid = flyoutLeft + triggerRect.width / 2;
      flyoutLeft = _triggerMid - flyoutSize.width / 2;
      caretLeft = (flyoutSize.width - CARET_HEIGHT) / 2;
    }
  }

  return {
    flyoutOffset: {
      top: flyoutTop,
      left: flyoutLeft
    },
    caretOffset: {
      top: caretTop,
      right: caretRight,
      bottom: caretBottom,
      left: caretLeft
    }
  };
}

/* Calculates baseline top and left offset for flyout */
function baseOffsets(relativeOffset, flyoutSize, mainDir, triggerRect, windowSize) {
  var HALF_CARET = CARET_HEIGHT / 2;
  // TOP OFFSET
  var top = void 0;
  if (mainDir === 'down') {
    top = windowSize.scrollY + triggerRect.bottom + HALF_CARET;
  } else if (mainDir === 'up') {
    top = windowSize.scrollY + (triggerRect.top - flyoutSize.height - HALF_CARET);
  } else {
    // left and right
    top = windowSize.scrollY + triggerRect.top;
  }

  // LEFT OFFSET
  var left = void 0;
  if (mainDir === 'left') {
    left = windowSize.scrollX + (triggerRect.left - flyoutSize.width - HALF_CARET);
  } else if (mainDir === 'right') {
    left = windowSize.scrollX + triggerRect.right + HALF_CARET;
  } else {
    // down and up
    left = windowSize.scrollX + triggerRect.left;
  }

  // Adjusts for the relative parent container
  top -= relativeOffset.y;
  left -= relativeOffset.x;
  return { top: top, left: left };
}

var Contents = function (_React$Component) {
  inherits(Contents, _React$Component);

  function Contents() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Contents);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Contents.__proto__ || Object.getPrototypeOf(Contents)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      flyoutOffset: {
        top: undefined,
        right: undefined,
        bottom: undefined,
        left: undefined
      },
      caretOffset: {
        top: undefined,
        right: undefined,
        bottom: undefined,
        left: undefined
      },
      mainDir: null
    }, _this.setFlyoutPosition = function (props) {
      var relativeOffset = props.relativeOffset,
          idealDirection = props.idealDirection,
          positionRelativeToAnchor = props.positionRelativeToAnchor,
          triggerRect = props.triggerRect,
          width = props.width;


      var windowSize = {
        height: window.innerHeight,
        width: window.innerWidth,
        scrollY: positionRelativeToAnchor ? 0 : window.scrollY, // scroll not needed for relative elements
        scrollX: positionRelativeToAnchor ? 0 : window.scrollX
      };

      var flyoutSize = {
        height: _this.flyout ? _this.flyout.clientHeight : 0,
        width: width
      };

      // First choose one of 4 main direction
      var mainDir = getMainDir(flyoutSize, idealDirection, triggerRect, windowSize);

      // Now that we have the main direction, chose from 3 caret placements for that direction
      var subDir = getSubDir(flyoutSize, mainDir, triggerRect, windowSize);

      // Gets the base offset that positions the flyout based on the main direction only
      var base = baseOffsets(relativeOffset, flyoutSize, mainDir, triggerRect, windowSize);

      // Gets the edge shifts for the flyout
      var edgeShifts = calcEdgeShifts(subDir, triggerRect, windowSize);

      // Adjusts for the subdirection of the caret

      var _adjustOffsets = adjustOffsets(base, edgeShifts, flyoutSize, mainDir, subDir, triggerRect),
          flyoutOffset = _adjustOffsets.flyoutOffset,
          caretOffset = _adjustOffsets.caretOffset;

      _this.setState({
        caretOffset: caretOffset,
        flyoutOffset: flyoutOffset,
        mainDir: mainDir
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Contents, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.setFlyoutPosition(this.props);
      setTimeout(function () {
        if (_this2.props.shouldFocus && _this2.flyout) {
          _this2.flyout.focus();
        }
      });
      document.addEventListener('click', this.props.onClick, true);
      window.addEventListener('resize', this.props.onResize);
      window.addEventListener('keydown', this.props.onKeyDown);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setFlyoutPosition(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.props.onClick, true);
      window.removeEventListener('resize', this.props.onResize);
      window.removeEventListener('keydown', this.props.onKeyDown);
    }

    /**
     * Determines the main direciton, sub direction, and corresponding offsets needed
     * to correctly position the offset
     */

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          bgColor = _props.bgColor,
          children = _props.children,
          width = _props.width;

      // Needed to prevent UI thrashing

      var visibility = this.state.mainDir === null ? 'hidden' : 'visible';
      var background = bgColor + 'Bg';
      var stroke = bgColor === 'white' ? '#efefef' : null;
      var borderColor = bgColor === 'white' ? 'lightGray' : bgColor;

      return createElement(
        'div',
        {
          className: styles$10.container,
          style: _extends({ stroke: stroke, visibility: visibility }, this.state.flyoutOffset)
        },
        createElement(
          'div',
          {
            className: classnames(colors[background], colors[borderColor], styles$10.dimensions, styles$10.contents),
            ref: function ref(c) {
              _this3.flyout = c;
            },
            tabIndex: -1
          },
          createElement(
            'div',
            {
              className: classnames(styles$10.dimensions, styles$10.innerContents),
              style: { width: width }
            },
            children
          ),
          createElement(
            'div',
            {
              className: classnames(colors[bgColor], styles$10.caret),
              style: _extends({}, this.state.caretOffset)
            },
            createElement(Caret, { direction: this.state.mainDir })
          )
        )
      );
    }
  }]);
  return Contents;
}(Component);
Contents.propTypes = {
  bgColor: PropTypes.oneOf(['darkGray', 'white', 'orange']),
  children: PropTypes.node,
  idealDirection: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onResize: PropTypes.func.isRequired,
  relativeOffset: PropTypes.exact({ x: PropTypes.number, y: PropTypes.number }),
  positionRelativeToAnchor: PropTypes.bool,
  shouldFocus: PropTypes.bool,
  triggerRect: PropTypes.exact({
    bottom: PropTypes.number,
    height: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
    width: PropTypes.number
  }),
  width: PropTypes.number
};

var SIZE_WIDTH_MAP = {
  xs: 185,
  sm: 230,
  md: 284,
  lg: 320,
  xl: 375
};

var ESCAPE_KEY_CODE = 27;

var Controller = function (_React$Component) {
  inherits(Controller, _React$Component);

  function Controller() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Controller);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Controller.__proto__ || Object.getPrototypeOf(Controller)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      relativeOffset: {
        x: 0,
        y: 0
      },
      triggerBoundingRect: {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0
      }
    }, _this.handleKeyDown = function (event) {
      if (event.keyCode === ESCAPE_KEY_CODE) {
        _this.props.onDismiss();
      }
    }, _this.handlePageClick = function (event) {
      if (event.target instanceof Node && _this.props.anchor && !_this.props.anchor.contains(event.target) && _this.contents && !_this.contents.contains(event.target)) {
        _this.props.onDismiss();
      }
    }, _this.updateTriggerRect = function (props) {
      var anchor = props.anchor,
          positionRelativeToAnchor = props.positionRelativeToAnchor;


      var triggerBoundingRect = void 0;
      var relativeOffset = void 0;
      if (anchor) {
        triggerBoundingRect = anchor.getBoundingClientRect();

        // Needed for correct positioning within Contents.js
        relativeOffset = {
          x: positionRelativeToAnchor ? triggerBoundingRect.left - anchor.offsetLeft : 0,
          y: positionRelativeToAnchor ? triggerBoundingRect.top - anchor.offsetTop : 0
        };
      }

      _this.setState({ relativeOffset: relativeOffset, triggerBoundingRect: triggerBoundingRect });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Controller, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateTriggerRect(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updateTriggerRect(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          anchor = _props.anchor,
          bgColor = _props.bgColor,
          children = _props.children,
          idealDirection = _props.idealDirection,
          positionRelativeToAnchor = _props.positionRelativeToAnchor,
          shouldFocus = _props.shouldFocus;

      if (!anchor) {
        return null;
      }
      var size = this.props.size ? this.props.size : 'sm';
      var width = typeof size === 'string' ? SIZE_WIDTH_MAP[size] : size;
      return createElement(
        Box,
        null,
        createElement(
          'div',
          {
            ref: function ref(c) {
              _this2.contents = c;
            }
          },
          this.contents ? createElement(
            Contents,
            {
              bgColor: bgColor,
              idealDirection: idealDirection,
              onClick: this.handlePageClick,
              onKeyDown: this.handleKeyDown,
              onResize: this.updateTriggerRect,
              positionRelativeToAnchor: positionRelativeToAnchor,
              relativeOffset: this.state.relativeOffset,
              shouldFocus: shouldFocus,
              triggerRect: this.state.triggerBoundingRect,
              width: width
            },
            children
          ) : null
        )
      );
    }
  }]);
  return Controller;
}(Component);


Controller.propTypes = {
  anchor: PropTypes.shape({
    contains: PropTypes.func,
    getBoundingClientRect: PropTypes.func
  }),
  bgColor: PropTypes.oneOf(['darkGray', 'white', 'orange']),
  children: PropTypes.node,
  idealDirection: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  onDismiss: PropTypes.func.isRequired,
  positionRelativeToAnchor: PropTypes.bool,
  shouldFocus: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])] // default: sm
  )
};

function ErrorFlyout(props) {
  var anchor = props.anchor,
      id = props.id,
      idealDirection = props.idealDirection,
      message = props.message,
      onDismiss = props.onDismiss,
      _props$positionRelati = props.positionRelativeToAnchor,
      positionRelativeToAnchor = _props$positionRelati === undefined ? true : _props$positionRelati,
      size = props.size;


  if (!anchor) {
    return null;
  }

  return createElement(
    Controller,
    {
      anchor: anchor,
      bgColor: 'orange',
      idealDirection: idealDirection,
      onDismiss: onDismiss,
      positionRelativeToAnchor: positionRelativeToAnchor,
      size: size
    },
    createElement(
      Box,
      { padding: 3 },
      createElement(
        Text,
        { bold: true, color: 'white' },
        createElement(
          'span',
          { id: id },
          message
        )
      )
    )
  );
}

ErrorFlyout.propTypes = {
  anchor: PropTypes.shape({
    contains: PropTypes.func,
    getBoundingClientRect: PropTypes.func
  }),
  idealDirection: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  message: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  positionRelativeToAnchor: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

var FetchItems = function (_React$PureComponent) {
  inherits(FetchItems, _React$PureComponent);

  function FetchItems() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, FetchItems);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FetchItems.__proto__ || Object.getPrototypeOf(FetchItems)).call.apply(_ref, [this].concat(args))), _this), _this.check = function () {
      var _this$props = _this.props,
          containerHeight = _this$props.containerHeight,
          isAtEnd = _this$props.isAtEnd,
          isFetching = _this$props.isFetching,
          fetchMore = _this$props.fetchMore,
          scrollHeight = _this$props.scrollHeight,
          scrollTop = _this$props.scrollTop;


      if (isAtEnd || isFetching || !fetchMore) {
        return;
      }
      var scrollBuffer = containerHeight * 3;

      if (scrollTop + scrollBuffer > scrollHeight) {
        fetchMore();
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(FetchItems, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      setTimeout(this.check);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.check();
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return FetchItems;
}(PureComponent);

FetchItems.propTypes = {
  containerHeight: PropTypes.number.isRequired,
  isAtEnd: PropTypes.bool,
  isFetching: PropTypes.bool.isRequired,
  fetchMore: PropTypes.func,
  scrollHeight: PropTypes.number.isRequired,
  scrollTop: PropTypes.number.isRequired
};

var styles$11 = { "Masonry": "_qj _2h", "Masonry__Item": "_qk _2j", "Masonry__Item__Mounted": "_ql" };

function getScrollContainer(scrollContainer) {
  return typeof scrollContainer === 'function' ? scrollContainer() : scrollContainer;
}

var ScrollContainer = function (_React$Component) {
  inherits(ScrollContainer, _React$Component);

  function ScrollContainer() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ScrollContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ScrollContainer.__proto__ || Object.getPrototypeOf(ScrollContainer)).call.apply(_ref, [this].concat(args))), _this), _this.getScrollContainerRef = function () {
      return _this.scrollContainer;
    }, _this.handleScroll = function (event) {
      _this.props.onScroll(event);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ScrollContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var scrollContainer = getScrollContainer(this.props.scrollContainer);
      if (!scrollContainer) {
        return;
      }
      this.updateScrollContainer(scrollContainer);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextScrollContainer = getScrollContainer(nextProps.scrollContainer);
      if (!nextScrollContainer || nextScrollContainer === this.scrollContainer) {
        return;
      }
      this.updateScrollContainer(nextScrollContainer);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.scrollContainer) {
        this.scrollContainer.removeEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: 'updateScrollContainer',
    value: function updateScrollContainer(scrollContainer) {
      if (this.scrollContainer) {
        // cleanup existing scroll container if it exists
        this.scrollContainer.removeEventListener('scroll', this.handleScroll);
      }
      this.scrollContainer = scrollContainer;
      this.scrollContainer.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      return Children.only(this.props.children);
    }
  }]);
  return ScrollContainer;
}(Component);

ScrollContainer.propTypes = {
  children: PropTypes.element.isRequired,
  onScroll: PropTypes.func.isRequired,
  scrollContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
};

function throttle(fn) {
  var threshhold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  var last = void 0;
  var deferTimer = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var now = Date.now();
    if (last && now < last + threshhold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(undefined, toConsumableArray(args));
      }, threshhold);
    } else {
      last = now;
      fn.apply(undefined, toConsumableArray(args));
    }
  };
}

var MeasurementStore = function () {
  function MeasurementStore() {
    classCallCheck(this, MeasurementStore);
    this.map = new WeakMap();
  }

  createClass(MeasurementStore, [{
    key: 'get',
    value: function get$$1(key) {
      return this.map.get(key);
    }
  }, {
    key: 'has',
    value: function has(key) {
      return this.map.has(key);
    }
  }, {
    key: 'set',
    value: function set$$1(key, value) {
      this.map.set(key, value);
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.map = new WeakMap();
    }
  }]);
  return MeasurementStore;
}();

function getElementHeight(element) {
  return element === window ? window.innerHeight : element.clientHeight;
}

function getWindowScrollPos() {
  if (window.scrollY !== undefined) {
    // Modern browser
    return window.scrollY;
  } else if (document.documentElement && document.documentElement.scrollTop !== undefined) {
    // IE support.
    return document.documentElement.scrollTop;
  }
  return 0;
}

function getRelativeScrollTop(element) {
  return element === window ? getWindowScrollPos() : element.scrollTop - element.getBoundingClientRect().top;
}

function getScrollHeight(element) {
  return element === window && document.documentElement ? document.documentElement.scrollHeight : element.scrollHeight;
}

function getScrollPos(element) {
  return element === window ? getWindowScrollPos() : element.scrollTop;
}

var DefaultLayoutSymbol = Symbol('default');
var UniformRowLayoutSymbol = Symbol('uniformRow');

var mindex = function mindex(arr) {
  var idx = 0;
  for (var i = 0; i < arr.length; i += 1) {
    if (arr[i] < arr[idx]) {
      idx = i;
    }
  }
  return idx;
};


var offscreen = function offscreen(width) {
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
  return {
    top: -9999,
    left: -9999,
    width: width,
    height: height
  };
};

var defaultLayout = (function (_ref) {
  var cache = _ref.cache,
      _ref$columnWidth = _ref.columnWidth,
      columnWidth = _ref$columnWidth === undefined ? 236 : _ref$columnWidth,
      _ref$gutter = _ref.gutter,
      gutter = _ref$gutter === undefined ? 14 : _ref$gutter,
      _ref$minCols = _ref.minCols,
      minCols = _ref$minCols === undefined ? 2 : _ref$minCols,
      width = _ref.width;
  return function (items) {
    if (width == null) {
      return items.map(function () {
        return offscreen(columnWidth);
      });
    }

    var columnWidthAndGutter = columnWidth + gutter;
    var columnCount = Math.max(Math.floor((width + gutter) / columnWidthAndGutter), minCols);
    // the total height of each column
    var heights = new Array(columnCount).fill(0);
    var centerOffset = Math.max(Math.floor((width - columnWidthAndGutter * columnCount + gutter) / 2), 0);

    return items.reduce(function (acc, item) {
      var positions = acc;
      // $FlowFixMe
      var height = cache.get(item);
      var position = void 0;

      if (height == null) {
        position = offscreen(columnWidth);
      } else {
        var heightAndGutter = height + gutter;
        var col = mindex(heights);
        var top = heights[col];
        var left = col * columnWidthAndGutter + centerOffset;

        heights[col] += heightAndGutter;
        position = { top: top, left: left, width: columnWidth, height: height };
      }
      positions.push(position);
      return positions;
    }, []);
  };
});

var offscreen$1 = function offscreen(width) {
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
  return {
    top: -9999,
    left: -9999,
    width: width,
    height: height
  };
};


var uniformRowLayout = (function (_ref) {
  var cache = _ref.cache,
      _ref$columnWidth = _ref.columnWidth,
      columnWidth = _ref$columnWidth === undefined ? 236 : _ref$columnWidth,
      _ref$gutter = _ref.gutter,
      gutter = _ref$gutter === undefined ? 14 : _ref$gutter,
      width = _ref.width,
      _ref$minCols = _ref.minCols,
      minCols = _ref$minCols === undefined ? 3 : _ref$minCols;
  return function (items) {
    if (width == null) {
      return items.map(function () {
        return offscreen$1(columnWidth);
      });
    }

    var columnWidthAndGutter = columnWidth + gutter;
    var columnCount = Math.max(Math.floor((width + gutter) / columnWidthAndGutter), minCols);

    var positions = [];
    var heights = [];

    for (var i = 0; i < items.length; i += 1) {
      var position = void 0;
      var height = cache.get(items[i]);

      if (height == null) {
        position = offscreen$1(columnWidth);
      } else {
        var column = i % columnCount;
        var row = Math.floor(i / columnCount);

        if (column === 0 || height > heights[row]) {
          heights[row] = height;
        }

        var top = row > 0 ? heights.slice(0, row).reduce(function (sum, y) {
          return sum + y + gutter;
        }, 0) : 0;

        position = {
          top: top,
          left: column * columnWidthAndGutter,
          width: columnWidth,
          height: height
        };
      }
      positions.push(position);
    }
    return positions;
  };
});

var mindex$1 = function mindex(arr) {
  var idx = 0;
  for (var i = 0; i < arr.length; i += 1) {
    if (arr[i] < arr[idx]) {
      idx = i;
    }
  }
  return idx;
};


var fullWidthLayout = (function (_ref) {
  var _ref$gutter = _ref.gutter,
      gutter = _ref$gutter === undefined ? 0 : _ref$gutter,
      cache = _ref.cache,
      _ref$minCols = _ref.minCols,
      minCols = _ref$minCols === undefined ? 2 : _ref$minCols,
      _ref$idealColumnWidth = _ref.idealColumnWidth,
      idealColumnWidth = _ref$idealColumnWidth === undefined ? 240 : _ref$idealColumnWidth,
      width = _ref.width;

  if (width == null) {
    return function (items) {
      return items.map(function () {
        return {
          top: Infinity,
          left: Infinity,
          width: Infinity,
          height: Infinity
        };
      });
    };
  }

  // "This is kind of crazy!" - you
  // Yes, indeed. The "guessing" here is meant to replicate the pass that the
  // original implementation takes with CSS.
  var colguess = Math.floor(width / idealColumnWidth);
  var columnCount = Math.max(Math.floor((width - colguess * gutter) / idealColumnWidth), minCols);
  var columnWidth = Math.floor(width / columnCount);

  return function (items) {
    // the total height of each column
    var heights = new Array(columnCount).fill(0);

    return items.reduce(function (acc, item) {
      var positions = acc;
      var height = cache.get(item);
      var position = void 0;

      if (height == null) {
        position = {
          top: Infinity,
          left: Infinity,
          width: columnWidth,
          height: Infinity
        };
      } else {
        var col = mindex$1(heights);
        var top = heights[col];
        var left = col * columnWidth + gutter / 2;

        heights[col] += height;
        position = {
          top: top,
          left: left,
          width: columnWidth - gutter,
          height: height
        };
      }

      positions.push(position);
      return positions;
    }, []);
  };
});

var MasonryLayout = function MasonryLayout() {
  classCallCheck(this, MasonryLayout);
};

var UniformRowLayout = function UniformRowLayout() {
  classCallCheck(this, UniformRowLayout);
};

var RESIZE_DEBOUNCE = 300;
// Multiplied against container height.
// The amount of extra buffer space for populating visible items.
var VIRTUAL_BUFFER_FACTOR = 0.7;

var ExperimentalMasonry = function (_React$Component) {
  inherits(ExperimentalMasonry, _React$Component);
  createClass(ExperimentalMasonry, null, [{
    key: 'createMeasurementStore',
    value: function createMeasurementStore() {
      return new MeasurementStore();
    }
  }]);

  function ExperimentalMasonry(props) {
    classCallCheck(this, ExperimentalMasonry);

    var _this = possibleConstructorReturn(this, (ExperimentalMasonry.__proto__ || Object.getPrototypeOf(ExperimentalMasonry)).call(this, props));

    _this.setGridWrapperRef = function (ref) {
      _this.gridWrapper = ref;
    };

    _this.setScrollContainerRef = function (ref) {
      _this.scrollContainer = ref;
    };

    _this.handleResize = function () {
      if (_this.resizeTimeout) {
        clearTimeout(_this.resizeTimeout);
      }
      _this.resizeTimeout = setTimeout(function () {
        if (_this.gridWrapper) {
          _this.setState({ width: _this.gridWrapper.clientWidth });
        }
      }, RESIZE_DEBOUNCE);
    };

    _this.updateScrollPosition = throttle(function () {
      if (!_this.scrollContainer) {
        return;
      }
      var scrollContainer = _this.scrollContainer.getScrollContainerRef();

      if (!scrollContainer) {
        return;
      }

      _this.setState({
        scrollTop: getScrollPos(scrollContainer)
      });
    });

    _this.fetchMore = function () {
      var loadItems = _this.props.loadItems;

      if (loadItems && typeof loadItems === 'function') {
        _this.setState({
          isFetching: true
        }, function () {
          return loadItems({ from: _this.props.items.length });
        });
      }
    };

    _this.renderMasonryComponent = function (itemData, idx, position) {
      var _this$props = _this.props,
          Component$$1 = _this$props.comp,
          virtualize = _this$props.virtualize;
      var top = position.top,
          left = position.left,
          width = position.width,
          height = position.height;


      var isVisible = void 0;
      if (_this.props.scrollContainer) {
        var virtualBuffer = _this.containerHeight * VIRTUAL_BUFFER_FACTOR;
        var offsetScrollPos = _this.state.scrollTop - _this.containerOffset;
        var viewportTop = offsetScrollPos - virtualBuffer;
        var viewportBottom = offsetScrollPos + _this.containerHeight + virtualBuffer;

        isVisible = !(position.top + position.height < viewportTop || position.top > viewportBottom);
      } else {
        // if no scroll container is passed in, items should always be visible
        isVisible = true;
      }

      var itemComponent = createElement(
        'div',
        {
          key: 'item-' + idx,
          className: [styles$11.Masonry__Item, styles$11.Masonry__Item__Mounted].join(' '),
          'data-grid-item': true,
          style: _extends({
            top: 0,
            left: 0,
            transform: 'translateX(' + left + 'px) translateY(' + top + 'px)',
            WebkitTransform: 'translateX(' + left + 'px) translateY(' + top + 'px)',
            width: width,
            height: height
          }, virtualize || isVisible ? {} : { display: 'none', transition: 'none' })
        },
        createElement(Component$$1, { data: itemData, itemIdx: idx, isMeasuring: false })
      );

      return virtualize ? isVisible && itemComponent || null : itemComponent;
    };

    _this.containerHeight = 0;
    _this.containerOffset = 0;

    _this.state = {
      hasPendingMeasurements: props.items.some(function (item) {
        return !!item && !props.measurementStore.has(item);
      }),
      isFetching: false,
      scrollTop: 0,
      width: undefined
    };
    return _this;
  }

  createClass(ExperimentalMasonry, [{
    key: 'componentDidMount',


    /**
     * Adds hooks after the component mounts.
     */
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleResize);

      var width = this.gridWrapper ? this.gridWrapper.clientWidth : this.state.width;

      this.measureContainer();

      var scrollTop = this.state.scrollTop;

      if (this.scrollContainer != null) {
        var _scrollContainer = this.scrollContainer.getScrollContainerRef();
        if (_scrollContainer) {
          scrollTop = getScrollPos(_scrollContainer);
        }
      }

      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ scrollTop: scrollTop, width: width });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var items = _ref.items,
          measurementStore = _ref.measurementStore;

      // whenever we're receiving new props, determine whether any items need to be measured
      // TODO - we should treat items as immutable
      var hasPendingMeasurements = items.some(function (item) {
        return !measurementStore.has(item);
      });
      // Shallow compare all items, if any change reflow the grid.
      for (var i = 0; i < items.length; i += 1) {
        // We've reached the end of our current props and everything matches.
        // If we hit this case it means we need to insert new items.
        if (this.props.items[i] === undefined) {
          this.setState({
            hasPendingMeasurements: hasPendingMeasurements,
            isFetching: false
          });
          return;
        }

        // Reset grid items when:
        if (
        // An item object ref does not match.
        items[i] !== this.props.items[i] ||
        // Or less items than we currently have are passed in.
        items.length < this.props.items.length) {
          this.setState({
            hasPendingMeasurements: hasPendingMeasurements,
            isFetching: false
          });
          return;
        }
      }

      // Reset items if new items array is empty.
      if (items.length === 0 && this.props.items.length > 0) {
        this.setState({
          hasPendingMeasurements: hasPendingMeasurements,
          isFetching: false
        });
      } else if (hasPendingMeasurements !== this.state.hasPendingMeasurements) {
        // make sure we always update hasPendingMeasurements
        this.setState({
          hasPendingMeasurements: hasPendingMeasurements
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          measurementStore = _props.measurementStore;


      clearTimeout(this.measureTimeout);
      this.measureTimeout = setTimeout(function () {
        _this2.measureContainer();
      });

      if (prevState.width != null && this.state.width !== prevState.width) {
        measurementStore.reset();
      }
      // calculate whether we still have pending measurements
      var hasPendingMeasurements = items.some(function (item) {
        return !!item && !measurementStore.has(item);
      });
      if (hasPendingMeasurements || hasPendingMeasurements !== this.state.hasPendingMeasurements || prevState.width == null) {
        this.insertAnimationFrame = requestAnimationFrame(function () {
          _this2.setState({
            hasPendingMeasurements: hasPendingMeasurements
          });
        });
      }
    }

    /**
     * Remove listeners when unmounting.
     */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.insertAnimationFrame) {
        cancelAnimationFrame(this.insertAnimationFrame);
      }
      clearTimeout(this.measureTimeout);
      clearTimeout(this.resizeTimeout);
      window.removeEventListener('resize', this.handleResize);
    }

    /**
     * Delays resize handling in case the scroll container is still being resized.
     */

  }, {
    key: 'measureContainer',
    value: function measureContainer() {
      if (this.scrollContainer != null) {
        var _scrollContainer2 = this.scrollContainer;

        var scrollContainerRef = _scrollContainer2.getScrollContainerRef();
        if (scrollContainerRef) {
          this.containerHeight = getElementHeight(scrollContainerRef);
          var el = this.gridWrapper;
          if (el instanceof HTMLElement) {
            var relativeScrollTop = getRelativeScrollTop(scrollContainerRef);
            this.containerOffset = el.getBoundingClientRect().top + relativeScrollTop;
          }
        }
      }
    }

    /**
     * Clear measurements/positions and force a reflow of the entire grid.
     * Only use this if absolutely necessary - ex: We need to reflow items if the
     * number of columns we would display should change after a resize.
     */

  }, {
    key: 'reflow',
    value: function reflow() {
      this.props.measurementStore.reset();
      this.measureContainer();
      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          columnWidth = _props2.columnWidth,
          Component$$1 = _props2.comp,
          flexible = _props2.flexible,
          gutter = _props2.gutterWidth,
          measurementStore = _props2.measurementStore,
          items = _props2.items,
          minCols = _props2.minCols;
      var _state = this.state,
          hasPendingMeasurements = _state.hasPendingMeasurements,
          width = _state.width;


      var layout = void 0;
      if (flexible && width !== null) {
        layout = fullWidthLayout({
          gutter: gutter,
          cache: measurementStore,
          minCols: minCols,
          idealColumnWidth: columnWidth,
          width: width
        });
      } else if (this.props.layout === UniformRowLayoutSymbol || this.props.layout instanceof UniformRowLayout) {
        layout = uniformRowLayout({
          cache: measurementStore,
          columnWidth: columnWidth,
          gutter: gutter,
          minCols: minCols,
          width: width
        });
      } else {
        layout = defaultLayout({
          cache: measurementStore,
          columnWidth: columnWidth,
          gutter: gutter,
          minCols: minCols,
          width: width
        });
      }

      var gridBody = void 0;
      if (width == null && hasPendingMeasurements) {
        // When hyrdating from a server render, we don't have the width of the grid
        // and the measurement store is empty
        gridBody = createElement(
          'div',
          {
            className: styles$11.Masonry,
            style: { height: 0, width: '100%' },
            ref: this.setGridWrapperRef
          },
          items.filter(function (item) {
            return item;
          }).map(function (item, i) {
            return createElement(
              'div',
              { // keep this in sync with renderMasonryComponent
                className: 'static',
                'data-grid-item': true,
                key: i,
                style: {
                  top: 0,
                  left: 0,
                  transform: 'translateX(0px) translateY(0px)',
                  WebkitTransform: 'translateX(0px) translateY(0px)',
                  width: flexible ? undefined : columnWidth // we can't set a width for server rendered flexible items
                },
                ref: function ref(el) {
                  if (el && !flexible) {
                    // only measure flexible items on client
                    measurementStore.set(item, el.clientHeight);
                  }
                }
              },
              createElement(Component$$1, { data: item, itemIdx: i, isMeasuring: false })
            );
          })
        );
      } else if (width == null) {
        // When the width is empty (usually after a re-mount) render an empty
        // div to collect the width for layout
        gridBody = createElement('div', { style: { width: '100%' }, ref: this.setGridWrapperRef });
      } else {
        // Full layout is possible
        var itemsToRender = items.filter(function (item) {
          return item && measurementStore.has(item);
        });
        var itemsToMeasure = items.filter(function (item) {
          return item && !measurementStore.has(item);
        }).slice(0, minCols);

        var positions = layout(itemsToRender);
        var measuringPositions = layout(itemsToMeasure);
        var height = Math.max.apply(Math, toConsumableArray(positions.map(function (pos) {
          return pos.top + pos.height;
        })));
        gridBody = createElement(
          'div',
          { style: { width: '100%' }, ref: this.setGridWrapperRef },
          createElement(
            'div',
            { className: styles$11.Masonry, style: { height: height, width: width } },
            itemsToRender.map(function (item, i) {
              return _this3.renderMasonryComponent(item, i, positions[i]);
            })
          ),
          createElement(
            'div',
            { className: styles$11.Masonry, style: { width: width } },
            itemsToMeasure.map(function (data, i) {
              var position = measuringPositions[i];
              return createElement(
                'div',
                {
                  key: 'measuring-' + i,
                  style: _extends({
                    visibility: 'hidden',
                    position: 'absolute'
                  }, position),
                  ref: function ref(el) {
                    if (el) {
                      measurementStore.set(data, el.clientHeight);
                    }
                  }
                },
                createElement(Component$$1, { data: data, itemIdx: i, isMeasuring: true })
              );
            })
          ),
          this.scrollContainer && createElement(FetchItems, {
            containerHeight: this.containerHeight,
            fetchMore: this.fetchMore,
            isFetching: this.state.isFetching || this.state.hasPendingMeasurements,
            scrollHeight: height,
            scrollTop: this.state.scrollTop
          })
        );
      }

      return this.props.scrollContainer ? createElement(
        ScrollContainer,
        {
          ref: this.setScrollContainerRef,
          onScroll: this.updateScrollPosition,
          scrollContainer: this.props.scrollContainer
        },
        gridBody
      ) : gridBody;
    }
  }]);
  return ExperimentalMasonry;
}(Component);

ExperimentalMasonry.propTypes = {
  /**
   * The preferred/target item width. If `flexible` is set, the item width will
   * grow to fill column space, and shrink to fit if below min columns.
   */
  columnWidth: PropTypes.number,

  /**
   * The component to render.
   */
  /* eslint react/no-unused-prop-types: 0 */
  comp: PropTypes.func.isRequired,

  /**
   * The preferred/target item width. Item width will grow to fill
   * column space, and shrink to fit if below min columns.
   */
  flexible: PropTypes.bool,

  /**
   * The amount of space between each item.
   */
  gutterWidth: PropTypes.number,

  /**
   * An array of all objects to display in the grid.
   */
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,

  /**
   * Measurement Store
   */
  measurementStore: PropTypes.instanceOf(MeasurementStore),

  /**
   * A callback which the grid calls when we need to load more items as the user scrolls.
   * The callback should update the state of the items, and pass those in as props
   * to this component.
   */
  loadItems: PropTypes.func,

  /**
   * Minimum number of columns to display.
   */
  minCols: PropTypes.number,

  /**
   * Function that the grid calls to get the scroll container.
   * This is required if the grid is expected to be scrollable.
   */
  scrollContainer: PropTypes.func,

  /**
   * Whether or not this instance is server rendered.
   * TODO: If true, generate and output CSS for the initial server render.
   */
  serverRender: PropTypes.bool,

  /**
   * Whether or not to use actual virtualization
   */
  virtualize: PropTypes.bool
};
ExperimentalMasonry.defaultProps = {
  columnWidth: 236,
  measurementStore: new MeasurementStore(),
  minCols: 3,
  serverRender: false,
  layout: DefaultLayoutSymbol,
  loadItems: function loadItems() {},
  virtualize: false
};

var Flyout = function (_React$PureComponent) {
  inherits(Flyout, _React$PureComponent);

  function Flyout() {
    classCallCheck(this, Flyout);
    return possibleConstructorReturn(this, (Flyout.__proto__ || Object.getPrototypeOf(Flyout)).apply(this, arguments));
  }

  createClass(Flyout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          anchor = _props.anchor,
          children = _props.children,
          idealDirection = _props.idealDirection,
          _props$positionRelati = _props.positionRelativeToAnchor,
          positionRelativeToAnchor = _props$positionRelati === undefined ? true : _props$positionRelati,
          onDismiss = _props.onDismiss,
          size = _props.size;


      if (!anchor) {
        return null;
      }

      return createElement(
        Controller,
        {
          anchor: anchor,
          bgColor: 'white',
          idealDirection: idealDirection,
          onDismiss: onDismiss,
          positionRelativeToAnchor: positionRelativeToAnchor,
          shouldFocus: true,
          size: size
        },
        children
      );
    }
  }]);
  return Flyout;
}(PureComponent);


Flyout.propTypes = {
  anchor: PropTypes.shape({
    contains: PropTypes.func,
    getBoundingClientRect: PropTypes.func
  }),
  children: PropTypes.node,
  idealDirection: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  onDismiss: PropTypes.func.isRequired,
  positionRelativeToAnchor: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])] // default: sm
  )
};

var styles$12 = { "wash": "_qm _2j _2l _2o _2m _2n" };

var BORDER_WIDTH = 2;

var AVATAR_SIZES = {
  sm: 24,
  md: 40,
  lg: 72
};

var DEFAULT_AVATAR_TEXT_SIZES = {
  sm: 7,
  md: 11,
  lg: 21
};

var avatarLayout = function avatarLayout(n, size) {
  switch (n) {
    case 1:
      return [{ top: 0, left: 0, width: size, height: size }];
    case 2:
      return [{
        top: 0,
        left: 0,
        width: size / 2 - BORDER_WIDTH / 2,
        height: size
      }, {
        top: 0,
        left: size / 2 + BORDER_WIDTH / 2,
        width: size / 2 - BORDER_WIDTH / 2,
        height: size
      }];
    default:
      return [{
        top: 0,
        left: 0,
        width: size / 2 - BORDER_WIDTH / 2,
        height: size
      }, {
        top: 0,
        left: size / 2 + BORDER_WIDTH / 2,
        width: size / 2,
        height: size / 2 - BORDER_WIDTH / 2
      }, {
        top: size / 2 + BORDER_WIDTH / 2,
        left: size / 2 + BORDER_WIDTH / 2,
        width: size / 2,
        height: size / 2 - BORDER_WIDTH / 2
      }];
  }
};

var degToRad = function degToRad(deg) {
  return deg * (Math.PI / 180);
};

var DefaultAvatar$1 = function DefaultAvatar(props) {
  var fontSize = props.fontSize,
      height = props.height,
      name = props.name,
      textLayout = props.textLayout;

  var size = AVATAR_SIZES[props.size];

  var quarterPadding = Math.floor((size / 2 - fontSize) / 2 * Math.sin(degToRad(45)));

  var initial = createElement(
    Text,
    { bold: true, color: 'white' },
    createElement(
      Box,
      {
        dangerouslySetInlineStyle: {
          __style: {
            fontSize: fontSize,
            lineHeight: fontSize + 'px'
          }
        }
      },
      [].concat(toConsumableArray(name))[0].toUpperCase()
    )
  );

  switch (textLayout) {
    case 'bottomLeft':
      return createElement(
        Box,
        {
          'aria-label': name,
          color: 'gray',
          height: height,
          display: 'flex',
          alignItems: 'end',
          dangerouslySetInlineStyle: {
            __style: {
              padding: quarterPadding
            }
          }
        },
        initial
      );
    case 'topLeft':
      return createElement(
        Box,
        {
          'aria-label': name,
          color: 'gray',
          height: height,
          display: 'flex',
          alignItems: 'start',
          dangerouslySetInlineStyle: {
            __style: {
              padding: quarterPadding
            }
          }
        },
        initial
      );
    default:
      return createElement(
        Box,
        {
          'aria-label': name,
          color: 'gray',
          height: height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        initial
      );
  }
};

function GroupAvatar(props) {
  var collaborators = props.collaborators,
      size = props.size;

  var layout = avatarLayout(collaborators.length, AVATAR_SIZES[size]);
  var avatarSize = AVATAR_SIZES[size];
  return createElement(
    Box,
    {
      color: 'white',
      height: avatarSize,
      overflow: 'hidden',
      shape: 'circle',
      width: avatarSize,
      dangerouslySetInlineStyle: {
        __style: {
          boxShadow: '0 0 0 2px #fff',
          // willChange: transform fixes a strange behavior where the border of the children
          // are not properly trimmed even though overflow: hidden is set
          willChange: 'transform'
        }
      }
    },
    createElement(Collection, {
      layout: layout,
      Item: function Item(_ref) {
        var idx = _ref.idx;
        var _collaborators$idx = collaborators[idx],
            name = _collaborators$idx.name,
            src = _collaborators$idx.src;
        var _layout$idx = layout[idx],
            width = _layout$idx.width,
            height = _layout$idx.height;

        var fontSize = collaborators.length === 1 ? DEFAULT_AVATAR_TEXT_SIZES[props.size] * 2 : DEFAULT_AVATAR_TEXT_SIZES[props.size];
        if (!src) {
          return createElement(DefaultAvatar$1, {
            name: name,
            fontSize: fontSize,
            textLayout: collaborators.length >= 3 ? ['center', 'bottomLeft', 'topLeft'][idx] : 'center',
            height: height,
            size: size
          });
        }
        return createElement(
          Box,
          { position: 'relative', width: width, height: height },
          createElement(Image, {
            alt: name,
            color: '#EFEFEF',
            src: src,
            naturalWidth: 1,
            naturalHeight: 1,
            fit: 'cover'
          }),
          createElement('div', { className: styles$12.wash })
        );
      }
    })
  );
}

GroupAvatar.propTypes = {
  collaborators: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    src: PropTypes.string
  })).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired
};

var styles$13 = { "Heading": "_qn _ms _mt _mu _mv", "fontSize1": "_qo", "fontSize2": "_qp", "fontSize3": "_qq", "fontSize4": "_qr", "fontSize5": "_qs", "smFontSize1": "_qt", "smFontSize2": "_qu", "smFontSize3": "_qv", "smFontSize4": "_qw", "smFontSize5": "_qx", "mdFontSize1": "_qy", "mdFontSize2": "_qz", "mdFontSize3": "_r0", "mdFontSize4": "_r1", "mdFontSize5": "_r2", "lgFontSize1": "_r3", "lgFontSize2": "_r4", "lgFontSize3": "_r5", "lgFontSize4": "_r6", "lgFontSize5": "_r7" };

var defaultHeadingLevels = {
  xs: 5,
  sm: 4,
  md: 3,
  lg: 2,
  xl: 1
};

var SIZE_SCALE$1 = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5
};

function Heading(props) {
  var accessibilityLevel = props.accessibilityLevel,
      children = props.children,
      _props$color = props.color,
      color = _props$color === undefined ? 'darkGray' : _props$color,
      _props$id = props.id,
      id = _props$id === undefined ? null : _props$id,
      lgSize = props.lgSize,
      mdSize = props.mdSize,
      _props$overflow = props.overflow,
      overflow = _props$overflow === undefined ? 'breakWord' : _props$overflow,
      _props$size = props.size,
      size = _props$size === undefined ? 'md' : _props$size,
      smSize = props.smSize,
      _props$truncate = props.truncate,
      truncate = _props$truncate === undefined ? false : _props$truncate;


  var cs = classnames(styles$13.Heading, styles$13['fontSize' + SIZE_SCALE$1[size]], smSize && styles$13['smFontSize' + SIZE_SCALE$1[smSize]], mdSize && styles$13['mdFontSize' + SIZE_SCALE$1[mdSize]], lgSize && styles$13['lgFontSize' + SIZE_SCALE$1[lgSize]], colors[color], overflow === 'breakWord' && typography.breakWord, truncate && typography.truncate);

  var headingLevel = accessibilityLevel || defaultHeadingLevels[size];
  return createElement('h' + headingLevel, _extends({
    className: cs,
    id: id
  }, truncate && typeof children === 'string' ? { title: children } : null), children);
}

Heading.propTypes = {
  accessibilityLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node,
  color: PropTypes.oneOf(['blue', 'darkGray', 'eggplant', 'gray', 'green', 'lightGray', 'maroon', 'midnight', 'navy', 'olive', 'orange', 'orchid', 'pine', 'purple', 'red', 'watermelon', 'white']),
  id: PropTypes.string,
  overflow: PropTypes.oneOf(['normal', 'breakWord']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  smSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  mdSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  lgSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  truncate: PropTypes.bool
};

var styles$14 = { "button": "_r8 _27 _5b _jw _nn" };

var styles$15 = { "pog": "_r9 _54 _2q _2y _38", "focused": "_ra _26", "transparent": "_rb _6a", "hovered": "_rc", "white": "_rd _5f", "active": "_re", "lightGray": "_rf _5h" };

var SIZE_NAME_TO_PIXEL = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56
};

var defaultIconButtonIconColors = {
  transparent: 'gray',
  lightGray: 'gray',
  white: 'gray'
};

function Pog(props) {
  var _classnames;

  var _props$active = props.active,
      active = _props$active === undefined ? false : _props$active,
      _props$bgColor = props.bgColor,
      bgColor = _props$bgColor === undefined ? 'transparent' : _props$bgColor,
      _props$focused = props.focused,
      focused = _props$focused === undefined ? false : _props$focused,
      _props$hovered = props.hovered,
      hovered = _props$hovered === undefined ? false : _props$hovered,
      _props$iconColor = props.iconColor,
      iconColor = _props$iconColor === undefined ? defaultIconButtonIconColors[bgColor] : _props$iconColor,
      icon = props.icon,
      _props$size = props.size,
      size = _props$size === undefined ? 'md' : _props$size;


  var iconSize = SIZE_NAME_TO_PIXEL[size] / 2;

  var inlineStyle = {
    height: SIZE_NAME_TO_PIXEL[size],
    width: SIZE_NAME_TO_PIXEL[size]
  };

  var classes = classnames(styles$15.pog, styles$15[bgColor], (_classnames = {}, defineProperty(_classnames, styles$15.active, active), defineProperty(_classnames, styles$15.focused, focused), defineProperty(_classnames, styles$15.hovered, hovered && !focused && !active), _classnames));

  return createElement(
    'div',
    { className: classes, style: inlineStyle },
    createElement(
      Box,
      { shape: 'circle' },
      createElement(Icon, {
        color: iconColor,
        icon: icon,
        size: iconSize,
        accessibilityLabel: ''
      })
    )
  );
}

Pog.propTypes = {
  active: PropTypes.bool,
  bgColor: PropTypes.oneOf(['transparent', 'lightGray', 'white']),
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  iconColor: PropTypes.oneOf(['gray', 'darkGray', 'red', 'blue', 'white']),
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.oneOf(Object.keys(SIZE_NAME_TO_PIXEL))
};

var IconButton = function (_React$Component) {
  inherits(IconButton, _React$Component);

  function IconButton() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, IconButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = IconButton.__proto__ || Object.getPrototypeOf(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: false,
      focused: false,
      hovered: false
    }, _this.handleBlur = function () {
      return _this.setState({ focused: false });
    }, _this.handleFocus = function () {
      _this.setState({ focused: true });
    }, _this.handleMouseDown = function () {
      _this.setState({ active: true });
    }, _this.handleMouseEnter = function () {
      _this.setState({ hovered: true });
    }, _this.handleMouseLeave = function () {
      _this.setState({
        active: false,
        hovered: false
      });
    }, _this.handleMouseUp = function () {
      _this.setState({ active: false });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(IconButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          accessibilityExpanded = _props.accessibilityExpanded,
          accessibilityHaspopup = _props.accessibilityHaspopup,
          accessibilityLabel = _props.accessibilityLabel,
          bgColor = _props.bgColor,
          iconColor = _props.iconColor,
          icon = _props.icon,
          size = _props.size,
          onClick = _props.onClick;
      var _state = this.state,
          active = _state.active,
          focused = _state.focused,
          hovered = _state.hovered;


      return createElement(
        'button',
        {
          'aria-expanded': accessibilityExpanded,
          'aria-haspopup': accessibilityHaspopup,
          'aria-label': accessibilityLabel,
          className: styles$14.button,
          onBlur: this.handleBlur,
          onClick: function (_onClick) {
            function onClick(_x) {
              return _onClick.apply(this, arguments);
            }

            onClick.toString = function () {
              return _onClick.toString();
            };

            return onClick;
          }(function (event) {
            return onClick && onClick({ event: event });
          }),
          onFocus: this.handleFocus,
          onMouseDown: this.handleMouseDown,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onMouseUp: this.handleMouseUp,
          type: 'button'
        },
        createElement(Pog, {
          active: active,
          bgColor: bgColor,
          focused: focused,
          hovered: hovered,
          iconColor: iconColor,
          icon: icon,
          size: size
        })
      );
    }
  }]);
  return IconButton;
}(Component);

IconButton.propTypes = {
  accessibilityExpanded: PropTypes.bool,
  accessibilityHaspopup: PropTypes.bool,
  accessibilityLabel: PropTypes.string.isRequired,
  bgColor: PropTypes.oneOf(['transparent', 'lightGray', 'white']),
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  iconColor: PropTypes.oneOf(['gray', 'darkGray', 'red', 'blue', 'white']),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

var styles$16 = { "label": "_rg _27 _nn" };

function Label(props) {
  var children = props.children,
      htmlFor = props.htmlFor;


  return createElement(
    'label',
    { className: styles$16.label, htmlFor: htmlFor },
    children
  );
}

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string.isRequired
};

/*
  Much of the math and understanding about this component comes from @vjeaux's
  excellent blog post on image resizing.

  http://blog.vjeux.com/2013/image/css-container-and-cover.html

  I highly recommend you read that first before continuing on reading.
*/

var aspectRatio = function aspectRatio(width, height) {
  return width / height;
};

function Letterbox(_ref) {
  var children = _ref.children,
      contentAspectRatio = _ref.contentAspectRatio,
      height = _ref.height,
      width = _ref.width;

  var viewportAspectRatio = aspectRatio(width, height);

  var contentHeight = void 0;
  var contentWidth = void 0;

  if (contentAspectRatio < viewportAspectRatio) {
    contentWidth = width;
    contentHeight = width / contentAspectRatio;
  } else {
    contentWidth = height * contentAspectRatio;
    contentHeight = height;
  }

  var offsetTop = (contentHeight - height) / -2;
  var offsetLeft = (contentWidth - width) / -2;

  return createElement(
    Mask,
    { width: width, height: height },
    createElement(
      'div',
      { style: { marginTop: offsetTop, marginLeft: offsetLeft } },
      createElement(
        Mask,
        { width: contentWidth, height: contentHeight },
        children
      )
    )
  );
}

Letterbox.propTypes = {
  children: PropTypes.node,
  contentAspectRatio: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

var styles$17 = { "link": "_rh _n2", "accessibleFocusStyle": "_ri _25", "block": "_rj _27" };

var TAB_KEY_CODE = 9;

var Link = function (_React$Component) {
  inherits(Link, _React$Component);

  function Link() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      enableFocusStyles: true
    }, _this.handleClick = function (event) {
      var _this$props = _this.props,
          href = _this$props.href,
          onClick = _this$props.onClick;

      if (onClick && href) {
        onClick({ event: event });
      }
    }, _this.handleMouseDown = function () {
      var _this$props2 = _this.props,
          href = _this$props2.href,
          target = _this$props2.target;

      if (target === 'blank' && href) {
        _this.setState({ enableFocusStyles: false });
      }
    }, _this.handleKeyUp = function (event) {
      var _this$props3 = _this.props,
          href = _this$props3.href,
          target = _this$props3.target;

      if (target === 'blank' && event.keyCode === TAB_KEY_CODE && href) {
        _this.setState({ enableFocusStyles: true });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Link, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          _props$inline = _props.inline,
          inline = _props$inline === undefined ? false : _props$inline,
          _props$target = _props.target,
          target = _props$target === undefined ? null : _props$target,
          href = _props.href;

      var rel = target === 'blank' ? 'noopener noreferrer' : null;
      var linkTarget = target ? '_' + target : null;

      return createElement(
        'a',
        {
          className: classnames(styles$17.link, this.state.enableFocusStyles ? styles$17.accessibleFocusStyle : '', inline ? '' : styles$17.block),
          href: href,
          onMouseDown: this.handleMouseDown,
          onKeyUp: this.handleKeyUp,
          onClick: this.handleClick,
          rel: rel,
          target: linkTarget
        },
        children
      );
    }
  }]);
  return Link;
}(Component);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  onClick: PropTypes.func,
  target: PropTypes.oneOf([null, 'self', 'blank'])
};

var styles$18 = { "Masonry": "_rk _2h", "Masonry__Item": "_rl _2j", "Masonry__Item__Mounted": "_rm" };

var MeasurementStore$2 = function () {
  function MeasurementStore() {
    classCallCheck(this, MeasurementStore);
    this.map = new WeakMap();
  }

  createClass(MeasurementStore, [{
    key: 'get',
    value: function get$$1(key) {
      return this.map.get(key);
    }
  }, {
    key: 'has',
    value: function has(key) {
      return this.map.has(key);
    }
  }, {
    key: 'set',
    value: function set$$1(key, value) {
      this.map.set(key, value);
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.map = new WeakMap();
    }
  }]);
  return MeasurementStore;
}();

var DefaultLayoutSymbol$1 = Symbol('default');
var UniformRowLayoutSymbol$1 = Symbol('uniformRow');

var mindex$2 = function mindex(arr) {
  var idx = 0;
  for (var i = 0; i < arr.length; i += 1) {
    if (arr[i] < arr[idx]) {
      idx = i;
    }
  }
  return idx;
};


var offscreen$2 = function offscreen(width) {
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
  return {
    top: -9999,
    left: -9999,
    width: width,
    height: height
  };
};

var defaultLayout$1 = (function (_ref) {
  var cache = _ref.cache,
      _ref$columnWidth = _ref.columnWidth,
      columnWidth = _ref$columnWidth === undefined ? 236 : _ref$columnWidth,
      _ref$gutter = _ref.gutter,
      gutter = _ref$gutter === undefined ? 14 : _ref$gutter,
      _ref$minCols = _ref.minCols,
      minCols = _ref$minCols === undefined ? 2 : _ref$minCols,
      width = _ref.width;
  return function (items) {
    if (width == null) {
      return items.map(function () {
        return offscreen$2(columnWidth);
      });
    }

    var columnWidthAndGutter = columnWidth + gutter;
    var columnCount = Math.max(Math.floor((width + gutter) / columnWidthAndGutter), minCols);
    // the total height of each column
    var heights = new Array(columnCount).fill(0);
    var centerOffset = Math.max(Math.floor((width - columnWidthAndGutter * columnCount + gutter) / 2), 0);

    return items.reduce(function (acc, item) {
      var positions = acc;
      // $FlowFixMe
      var height = cache.get(item);
      var position = void 0;

      if (height == null) {
        position = offscreen$2(columnWidth);
      } else {
        var heightAndGutter = height + gutter;
        var col = mindex$2(heights);
        var top = heights[col];
        var left = col * columnWidthAndGutter + centerOffset;

        heights[col] += heightAndGutter;
        position = { top: top, left: left, width: columnWidth, height: height };
      }
      positions.push(position);
      return positions;
    }, []);
  };
});

var offscreen$3 = function offscreen(width) {
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
  return {
    top: -9999,
    left: -9999,
    width: width,
    height: height
  };
};


var uniformRowLayout$1 = (function (_ref) {
  var cache = _ref.cache,
      _ref$columnWidth = _ref.columnWidth,
      columnWidth = _ref$columnWidth === undefined ? 236 : _ref$columnWidth,
      _ref$gutter = _ref.gutter,
      gutter = _ref$gutter === undefined ? 14 : _ref$gutter,
      width = _ref.width,
      _ref$minCols = _ref.minCols,
      minCols = _ref$minCols === undefined ? 3 : _ref$minCols;
  return function (items) {
    if (width == null) {
      return items.map(function () {
        return offscreen$3(columnWidth);
      });
    }

    var columnWidthAndGutter = columnWidth + gutter;
    var columnCount = Math.max(Math.floor((width + gutter) / columnWidthAndGutter), minCols);

    var positions = [];
    var heights = [];

    for (var i = 0; i < items.length; i += 1) {
      var position = void 0;
      var height = cache.get(items[i]);

      if (height == null) {
        position = offscreen$3(columnWidth);
      } else {
        var column = i % columnCount;
        var row = Math.floor(i / columnCount);

        if (column === 0 || height > heights[row]) {
          heights[row] = height;
        }

        var top = row > 0 ? heights.slice(0, row).reduce(function (sum, y) {
          return sum + y + gutter;
        }, 0) : 0;

        position = {
          top: top,
          left: column * columnWidthAndGutter,
          width: columnWidth,
          height: height
        };
      }
      positions.push(position);
    }
    return positions;
  };
});

var mindex$3 = function mindex(arr) {
  var idx = 0;
  for (var i = 0; i < arr.length; i += 1) {
    if (arr[i] < arr[idx]) {
      idx = i;
    }
  }
  return idx;
};


var fullWidthLayout$1 = (function (_ref) {
  var _ref$gutter = _ref.gutter,
      gutter = _ref$gutter === undefined ? 0 : _ref$gutter,
      cache = _ref.cache,
      _ref$minCols = _ref.minCols,
      minCols = _ref$minCols === undefined ? 2 : _ref$minCols,
      _ref$idealColumnWidth = _ref.idealColumnWidth,
      idealColumnWidth = _ref$idealColumnWidth === undefined ? 240 : _ref$idealColumnWidth,
      width = _ref.width;

  if (width == null) {
    return function (items) {
      return items.map(function () {
        return {
          top: Infinity,
          left: Infinity,
          width: Infinity,
          height: Infinity
        };
      });
    };
  }

  // "This is kind of crazy!" - you
  // Yes, indeed. The "guessing" here is meant to replicate the pass that the
  // original implementation takes with CSS.
  var colguess = Math.floor(width / idealColumnWidth);
  var columnCount = Math.max(Math.floor((width - colguess * gutter) / idealColumnWidth), minCols);
  var columnWidth = Math.floor(width / columnCount);

  return function (items) {
    // the total height of each column
    var heights = new Array(columnCount).fill(0);

    return items.reduce(function (acc, item) {
      var positions = acc;
      var height = cache.get(item);
      var position = void 0;

      if (height == null) {
        position = {
          top: Infinity,
          left: Infinity,
          width: columnWidth,
          height: Infinity
        };
      } else {
        var col = mindex$3(heights);
        var top = heights[col];
        var left = col * columnWidth + gutter / 2;

        heights[col] += height;
        position = {
          top: top,
          left: left,
          width: columnWidth - gutter,
          height: height
        };
      }

      positions.push(position);
      return positions;
    }, []);
  };
});

var RESIZE_DEBOUNCE$1 = 300;
// Multiplied against container height.
// The amount of extra buffer space for populating visible items.
var VIRTUAL_BUFFER_FACTOR$1 = 0.7;

var layoutNumberToCssDimension = function layoutNumberToCssDimension(n) {
  return n !== Infinity ? n : undefined;
};

var Masonry = function (_React$Component) {
  inherits(Masonry, _React$Component);
  createClass(Masonry, null, [{
    key: 'createMeasurementStore',
    value: function createMeasurementStore() {
      return new MeasurementStore$2();
    }
  }]);

  function Masonry(props) {
    classCallCheck(this, Masonry);

    var _this = possibleConstructorReturn(this, (Masonry.__proto__ || Object.getPrototypeOf(Masonry)).call(this, props));

    _this.setGridWrapperRef = function (ref) {
      _this.gridWrapper = ref;
    };

    _this.setScrollContainerRef = function (ref) {
      _this.scrollContainer = ref;
    };

    _this.handleResize = function () {
      if (_this.resizeTimeout) {
        clearTimeout(_this.resizeTimeout);
      }
      _this.resizeTimeout = setTimeout(function () {
        if (_this.gridWrapper) {
          _this.setState({ width: _this.gridWrapper.clientWidth });
        }
      }, RESIZE_DEBOUNCE$1);
    };

    _this.updateScrollPosition = throttle(function () {
      if (!_this.scrollContainer) {
        return;
      }
      var scrollContainer = _this.scrollContainer.getScrollContainerRef();

      if (!scrollContainer) {
        return;
      }

      _this.setState({
        scrollTop: getScrollPos(scrollContainer)
      });
    });

    _this.fetchMore = function () {
      var loadItems = _this.props.loadItems;

      if (loadItems && typeof loadItems === 'function') {
        _this.setState({
          isFetching: true
        }, function () {
          return loadItems({ from: _this.props.items.length });
        });
      }
    };

    _this.renderMasonryComponent = function (itemData, idx, position) {
      var _this$props = _this.props,
          Component$$1 = _this$props.comp,
          virtualize = _this$props.virtualize;
      var top = position.top,
          left = position.left,
          width = position.width,
          height = position.height;


      var isVisible = void 0;
      if (_this.props.scrollContainer) {
        var virtualBuffer = _this.containerHeight * VIRTUAL_BUFFER_FACTOR$1;
        var offsetScrollPos = _this.state.scrollTop - _this.containerOffset;
        var viewportTop = offsetScrollPos - virtualBuffer;
        var viewportBottom = offsetScrollPos + _this.containerHeight + virtualBuffer;

        isVisible = !(position.top + position.height < viewportTop || position.top > viewportBottom);
      } else {
        // if no scroll container is passed in, items should always be visible
        isVisible = true;
      }

      var itemComponent = createElement(
        'div',
        {
          key: 'item-' + idx,
          className: [styles$18.Masonry__Item, styles$18.Masonry__Item__Mounted].join(' '),
          'data-grid-item': true,
          style: _extends({
            top: 0,
            left: 0,
            transform: 'translateX(' + left + 'px) translateY(' + top + 'px)',
            WebkitTransform: 'translateX(' + left + 'px) translateY(' + top + 'px)',
            width: layoutNumberToCssDimension(width),
            height: layoutNumberToCssDimension(height)
          }, virtualize || isVisible ? {} : { display: 'none', transition: 'none' })
        },
        createElement(Component$$1, { data: itemData, itemIdx: idx, isMeasuring: false })
      );

      return virtualize ? isVisible && itemComponent || null : itemComponent;
    };

    _this.containerHeight = 0;
    _this.containerOffset = 0;

    _this.state = {
      hasPendingMeasurements: props.items.some(function (item) {
        return !!item && !props.measurementStore.has(item);
      }),
      isFetching: false,
      scrollTop: 0,
      width: undefined
    };
    return _this;
  }

  createClass(Masonry, [{
    key: 'componentDidMount',


    /**
     * Adds hooks after the component mounts.
     */
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleResize);

      var width = this.gridWrapper ? this.gridWrapper.clientWidth : this.state.width;

      this.measureContainer();

      var scrollTop = this.state.scrollTop;

      if (this.scrollContainer != null) {
        var _scrollContainer = this.scrollContainer.getScrollContainerRef();
        if (_scrollContainer) {
          scrollTop = getScrollPos(_scrollContainer);
        }
      }

      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ scrollTop: scrollTop, width: width });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var items = _ref.items,
          measurementStore = _ref.measurementStore;

      // whenever we're receiving new props, determine whether any items need to be measured
      // TODO - we should treat items as immutable
      var hasPendingMeasurements = items.some(function (item) {
        return !measurementStore.has(item);
      });
      // Shallow compare all items, if any change reflow the grid.
      for (var i = 0; i < items.length; i += 1) {
        // We've reached the end of our current props and everything matches.
        // If we hit this case it means we need to insert new items.
        if (this.props.items[i] === undefined) {
          this.setState({
            hasPendingMeasurements: hasPendingMeasurements,
            isFetching: false
          });
          return;
        }

        // Reset grid items when:
        if (
        // An item object ref does not match.
        items[i] !== this.props.items[i] ||
        // Or less items than we currently have are passed in.
        items.length < this.props.items.length) {
          this.setState({
            hasPendingMeasurements: hasPendingMeasurements,
            isFetching: false
          });
          return;
        }
      }

      // Reset items if new items array is empty.
      if (items.length === 0 && this.props.items.length > 0) {
        this.setState({
          hasPendingMeasurements: hasPendingMeasurements,
          isFetching: false
        });
      } else if (hasPendingMeasurements !== this.state.hasPendingMeasurements) {
        // make sure we always update hasPendingMeasurements
        this.setState({
          hasPendingMeasurements: hasPendingMeasurements
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          measurementStore = _props.measurementStore;


      clearTimeout(this.measureTimeout);
      this.measureTimeout = setTimeout(function () {
        _this2.measureContainer();
      });

      if (prevState.width != null && this.state.width !== prevState.width) {
        measurementStore.reset();
      }
      // calculate whether we still have pending measurements
      var hasPendingMeasurements = items.some(function (item) {
        return !!item && !measurementStore.has(item);
      });
      if (hasPendingMeasurements || hasPendingMeasurements !== this.state.hasPendingMeasurements || prevState.width == null) {
        this.insertAnimationFrame = requestAnimationFrame(function () {
          _this2.setState({
            hasPendingMeasurements: hasPendingMeasurements
          });
        });
      }
    }

    /**
     * Remove listeners when unmounting.
     */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.insertAnimationFrame) {
        cancelAnimationFrame(this.insertAnimationFrame);
      }
      clearTimeout(this.measureTimeout);
      clearTimeout(this.resizeTimeout);
      window.removeEventListener('resize', this.handleResize);
    }

    /**
     * Delays resize handling in case the scroll container is still being resized.
     */

  }, {
    key: 'measureContainer',
    value: function measureContainer() {
      if (this.scrollContainer != null) {
        var _scrollContainer2 = this.scrollContainer;

        var scrollContainerRef = _scrollContainer2.getScrollContainerRef();
        if (scrollContainerRef) {
          this.containerHeight = getElementHeight(scrollContainerRef);
          var el = this.gridWrapper;
          if (el instanceof HTMLElement) {
            var relativeScrollTop = getRelativeScrollTop(scrollContainerRef);
            this.containerOffset = el.getBoundingClientRect().top + relativeScrollTop;
          }
        }
      }
    }

    /**
     * Clear measurements/positions and force a reflow of the entire grid.
     * Only use this if absolutely necessary - ex: We need to reflow items if the
     * number of columns we would display should change after a resize.
     */

  }, {
    key: 'reflow',
    value: function reflow() {
      this.props.measurementStore.reset();
      this.measureContainer();
      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          columnWidth = _props2.columnWidth,
          Component$$1 = _props2.comp,
          flexible = _props2.flexible,
          gutter = _props2.gutterWidth,
          measurementStore = _props2.measurementStore,
          items = _props2.items,
          minCols = _props2.minCols;
      var _state = this.state,
          hasPendingMeasurements = _state.hasPendingMeasurements,
          width = _state.width;


      var layout = void 0;
      if (flexible && width !== null) {
        layout = fullWidthLayout$1({
          gutter: gutter,
          cache: measurementStore,
          minCols: minCols,
          idealColumnWidth: columnWidth,
          width: width
        });
      } else if (this.props.layout === UniformRowLayoutSymbol$1 || this.props.layout instanceof UniformRowLayout) {
        layout = uniformRowLayout$1({
          cache: measurementStore,
          columnWidth: columnWidth,
          gutter: gutter,
          minCols: minCols,
          width: width
        });
      } else {
        layout = defaultLayout$1({
          cache: measurementStore,
          columnWidth: columnWidth,
          gutter: gutter,
          minCols: minCols,
          width: width
        });
      }

      var gridBody = void 0;
      if (width == null && hasPendingMeasurements) {
        // When hyrdating from a server render, we don't have the width of the grid
        // and the measurement store is empty
        gridBody = createElement(
          'div',
          {
            className: styles$18.Masonry,
            style: { height: 0, width: '100%' },
            ref: this.setGridWrapperRef
          },
          items.filter(function (item) {
            return item;
          }).map(function (item, i) {
            return createElement(
              'div',
              { // keep this in sync with renderMasonryComponent
                className: 'static',
                'data-grid-item': true,
                key: i,
                style: {
                  top: 0,
                  left: 0,
                  transform: 'translateX(0px) translateY(0px)',
                  WebkitTransform: 'translateX(0px) translateY(0px)',
                  width: flexible ? undefined : layoutNumberToCssDimension(columnWidth) // we can't set a width for server rendered flexible items
                },
                ref: function ref(el) {
                  if (el && !flexible) {
                    // only measure flexible items on client
                    measurementStore.set(item, el.clientHeight);
                  }
                }
              },
              createElement(Component$$1, { data: item, itemIdx: i, isMeasuring: false })
            );
          })
        );
      } else if (width == null) {
        // When the width is empty (usually after a re-mount) render an empty
        // div to collect the width for layout
        gridBody = createElement('div', { style: { width: '100%' }, ref: this.setGridWrapperRef });
      } else {
        // Full layout is possible
        var itemsToRender = items.filter(function (item) {
          return item && measurementStore.has(item);
        });
        var itemsToMeasure = items.filter(function (item) {
          return item && !measurementStore.has(item);
        }).slice(0, minCols);

        var positions = layout(itemsToRender);
        var measuringPositions = layout(itemsToMeasure);
        var height = Math.max.apply(Math, toConsumableArray(positions.map(function (pos) {
          return pos.top + pos.height;
        })));
        gridBody = createElement(
          'div',
          { style: { width: '100%' }, ref: this.setGridWrapperRef },
          createElement(
            'div',
            { className: styles$18.Masonry, style: { height: height, width: width } },
            itemsToRender.map(function (item, i) {
              return _this3.renderMasonryComponent(item, i, positions[i]);
            })
          ),
          createElement(
            'div',
            { className: styles$18.Masonry, style: { width: width } },
            itemsToMeasure.map(function (data, i) {
              var position = measuringPositions[i];
              return createElement(
                'div',
                {
                  key: 'measuring-' + i,
                  style: _extends({
                    visibility: 'hidden',
                    position: 'absolute'
                  }, position),
                  ref: function ref(el) {
                    if (el) {
                      measurementStore.set(data, el.clientHeight);
                    }
                  }
                },
                createElement(Component$$1, { data: data, itemIdx: i, isMeasuring: true })
              );
            })
          ),
          this.scrollContainer && createElement(FetchItems, {
            containerHeight: this.containerHeight,
            fetchMore: this.fetchMore,
            isFetching: this.state.isFetching || this.state.hasPendingMeasurements,
            scrollHeight: height,
            scrollTop: this.state.scrollTop
          })
        );
      }

      return this.props.scrollContainer ? createElement(
        ScrollContainer,
        {
          ref: this.setScrollContainerRef,
          onScroll: this.updateScrollPosition,
          scrollContainer: this.props.scrollContainer
        },
        gridBody
      ) : gridBody;
    }
  }]);
  return Masonry;
}(Component);

Masonry.propTypes = {
  /**
   * The preferred/target item width. If `flexible` is set, the item width will
   * grow to fill column space, and shrink to fit if below min columns.
   */
  columnWidth: PropTypes.number,

  /**
   * The component to render.
   */
  /* eslint react/no-unused-prop-types: 0 */
  comp: PropTypes.func.isRequired,

  /**
   * The preferred/target item width. Item width will grow to fill
   * column space, and shrink to fit if below min columns.
   */
  flexible: PropTypes.bool,

  /**
   * The amount of space between each item.
   */
  gutterWidth: PropTypes.number,

  /**
   * An array of all objects to display in the grid.
   */
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,

  /**
   * Measurement Store
   */
  measurementStore: PropTypes.instanceOf(MeasurementStore$2),

  /**
   * A callback which the grid calls when we need to load more items as the user scrolls.
   * The callback should update the state of the items, and pass those in as props
   * to this component.
   */
  loadItems: PropTypes.func,

  /**
   * Minimum number of columns to display.
   */
  minCols: PropTypes.number,

  /**
   * Function that the grid calls to get the scroll container.
   * This is required if the grid is expected to be scrollable.
   */
  scrollContainer: PropTypes.func,

  /**
   * Whether or not this instance is server rendered.
   * TODO: If true, generate and output CSS for the initial server render.
   */
  serverRender: PropTypes.bool,

  /**
   * Whether or not to use actual virtualization
   */
  virtualize: PropTypes.bool
};
Masonry.defaultProps = {
  columnWidth: 236,
  measurementStore: new MeasurementStore$2(),
  minCols: 3,
  serverRender: false,
  layout: DefaultLayoutSymbol$1,
  loadItems: function loadItems() {},
  virtualize: false
};

var styles$19 = { "overlay": "_rn", "container": "_ro", "wrapper": "_rp" };

var sm = "(min-width: 576px)";
var md = "(min-width: 768px)";
var lg = "(min-width: 1312px)";
var breakpoints = {
	sm: sm,
	md: md,
	lg: lg
};

var column$1 = { "col": "_3l", "xsCol1": "_3m", "xsCol2": "_3n", "xsCol3": "_3o", "xsCol4": "_3p", "xsCol5": "_3q", "xsCol6": "_3r", "xsCol7": "_3s", "xsCol8": "_3t", "xsCol9": "_3u", "xsCol10": "_3v", "xsCol11": "_3w", "xsCol12": "_3x", "smCol1": "_3y", "smCol2": "_3z", "smCol3": "_40", "smCol4": "_41", "smCol5": "_42", "smCol6": "_43", "smCol7": "_44", "smCol8": "_45", "smCol9": "_46", "smCol10": "_47", "smCol11": "_48", "smCol12": "_49", "mdCol1": "_4a", "mdCol2": "_4b", "mdCol3": "_4c", "mdCol4": "_4d", "mdCol5": "_4e", "mdCol6": "_4f", "mdCol7": "_4g", "mdCol8": "_4h", "mdCol9": "_4i", "mdCol10": "_4j", "mdCol11": "_4k", "mdCol12": "_4l", "lgCol1": "_4m", "lgCol2": "_4n", "lgCol3": "_4o", "lgCol4": "_4p", "lgCol5": "_4q", "lgCol6": "_4r", "lgCol7": "_4s", "lgCol8": "_4t", "lgCol9": "_4u", "lgCol10": "_4v", "lgCol11": "_4w", "lgCol12": "_4x" };

var cursor = { "pointer": "_nn", "zoomIn": "_no", "zoomOut": "_np", "copy": "_nq", "move": "_nr", "noDrop": "_ns", "grab": "_nt", "grabbing": "_nu" };

var SIZE_WIDTH_MAP$1 = {
  sm: 414,
  md: 544,
  lg: 804
};

var ESCAPE_KEY_CODE$1 = 27;

var Modal = function (_React$Component) {
  inherits(Modal, _React$Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      breakpoint: 'xs',
      windowHeight: undefined
    }, _this.getCurrentBreakpoint = function () {
      var size = 'xs';
      Object.keys(breakpoints).forEach(function (point) {
        if (window.matchMedia(breakpoints[point]).matches) {
          size = point;
        }
      });
      return size;
    }, _this.handleClose = function () {
      _this.props.onDismiss();
    }, _this.handlePageClick = function (event) {
      if (event.target instanceof Node && _this.container && _this.container.contains(event.target) && _this.modal && !_this.modal.contains(event.target)) {
        _this.handleClose();
      }
    }, _this.handleKeyDown = function (event) {
      if (event.keyCode === ESCAPE_KEY_CODE$1) {
        _this.handleClose();
      }
    }, _this.updateBreakpoint = function () {
      var size = _this.getCurrentBreakpoint();
      if (size !== _this.state.breakpoint || window.innerHeight !== _this.state.windowHeight) {
        _this.setState({ breakpoint: size, windowHeight: window.innerHeight });
      }
    }, _this.restrictFocus = function (event) {
      if (event.target instanceof Node && _this.modal && !_this.modal.contains(event.target)) {
        _this.modal.focus();
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this.handlePageClick);
      window.addEventListener('keydown', this.handleKeyDown);
      window.addEventListener('resize', this.updateBreakpoint);
      document.addEventListener('focus', this.restrictFocus, true);
      this.priorFocus = document.activeElement;
      this.updateBreakpoint();
      if (document.body) {
        document.body.style.overflow = 'hidden'; // Prevents background scrolling
      }
      if (this.modal && this.modal.focus) {
        // Checking this.modal.focus to address a bug in IE11
        // Though the modal exists, this.modal.focus may be null
        // See http://www.mkyong.com/javascript/focus-is-not-working-in-ie-solution/
        this.modal.focus();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handlePageClick);
      window.removeEventListener('keydown', this.handleKeyDown);
      window.removeEventListener('resize', this.updateBreakpoint);
      document.removeEventListener('focus', this.restrictFocus, true);

      if (document.body) {
        document.body.style.overflow = ''; // Reenables background scrolling
      }
      if (this.priorFocus && this.priorFocus.focus) {
        // Checking this.priorFocus.focus to address a bug in IE11
        this.priorFocus.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          accessibilityCloseLabel = _props.accessibilityCloseLabel,
          accessibilityModalLabel = _props.accessibilityModalLabel,
          children = _props.children,
          footer = _props.footer,
          heading = _props.heading,
          _props$role = _props.role,
          role = _props$role === undefined ? 'dialog' : _props$role,
          _props$size = _props.size,
          size = _props$size === undefined ? 'sm' : _props$size;

      var width = SIZE_WIDTH_MAP$1[size];

      var container = [layout.fixed, layout.borderBox, layout.flex, layout.justifyCenter, layout.left0, layout.top0];
      var containerClasses = this.state.breakpoint === 'xs' ? classnames(container, layout.itemsEnd, layout.bottom0, column$1.xsCol12) : classnames(container, layout.itemsCenter, column$1.xsCol12, styles$19.container);

      var wrapper = [layout.fit, layout.relative];
      var wrapperClasses = this.state.breakpoint === 'xs' ? classnames(wrapper, colors.whiteBg, whitespace$1.m0, layout.selfEnd) : classnames(wrapper, colors.whiteBg, borders.rounded, styles$19.wrapper);

      var overlay = [layout.absolute, layout.left0, layout.top0, cursor.zoomOut];
      var overlayClasses = classnames(overlay, styles$19.overlay, colors.darkGrayBg, column$1.xsCol12);

      return createElement(
        'div',
        {
          'aria-label': accessibilityModalLabel,
          className: containerClasses,
          ref: function ref(c) {
            _this2.container = c;
          },
          role: role
        },
        createElement('div', { className: overlayClasses }),
        createElement(
          'div',
          {
            className: wrapperClasses,
            ref: function ref(c) {
              _this2.modal = c;
            },
            tabIndex: -1,
            style: { width: width }
          },
          createElement(
            Box,
            {
              maxHeight: '90vh',
              position: 'relative',
              xs: { display: 'flexColumn' }
            },
            createElement(
              Box,
              { fit: true },
              role === 'dialog' ? createElement(
                Box,
                {
                  dangerouslySetInlineStyle: {
                    __style: { paddingLeft: 50, paddingRight: 50 }
                  },
                  display: 'flex',
                  justifyContent: 'center',
                  paddingY: 5
                },
                createElement(
                  Heading,
                  { size: 'xs', accessibilityLevel: 1 },
                  heading
                )
              ) : createElement(
                Box,
                { display: 'flex', padding: 4 },
                createElement(
                  Heading,
                  { size: 'lg', accessibilityLevel: 1 },
                  heading
                )
              ),
              role === 'dialog' && createElement(
                Box,
                { padding: 2, position: 'absolute', top: true, right: true },
                createElement(IconButton, {
                  accessibilityLabel: accessibilityCloseLabel,
                  icon: 'cancel',
                  onClick: this.handleClose
                })
              ),
              role === 'dialog' && createElement(Divider, null)
            ),
            createElement(
              Box,
              { flex: 'grow', overflow: 'auto', position: 'relative' },
              children
            ),
            createElement(
              Box,
              { fit: true },
              footer && createElement(
                Box,
                null,
                role === 'dialog' && createElement(Divider, null),
                createElement(
                  Box,
                  { padding: 4 },
                  footer
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Modal;
}(Component);


Modal.propTypes = {
  children: PropTypes.node,
  accessibilityCloseLabel: PropTypes.string.isRequired,
  footer: PropTypes.node,
  heading: PropTypes.string.isRequired,
  accessibilityModalLabel: PropTypes.string.isRequired,
  onDismiss: PropTypes.func,
  role: PropTypes.oneOf(['alertdialog', 'dialog']),
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

var styles$20 = { "innerCircle": "_rq _2j _54 _5l", "InnerAnimation": "_rr", "outerCircle": "_rs _2j _54 _5l", "OuterAnimation": "_rt" };

function Pulsar(props) {
  var paused = props.paused,
      _props$size = props.size,
      size = _props$size === undefined ? 96 : _props$size;


  return createElement(
    Box,
    {
      dangerouslySetInlineStyle: {
        __style: {
          animationIterationCount: paused ? 0 : 'infinite',
          outline: 'none',
          boxShadow: 'none'
        }
      },
      display: paused ? 'none' : 'block',
      height: size,
      position: 'relative',
      width: size
    },
    createElement('div', { className: styles$20.innerCircle }),
    createElement('div', { className: styles$20.outerCircle })
  );
}

Pulsar.propTypes = {
  paused: PropTypes.bool,
  size: PropTypes.number
};

var styles$21 = { "RadioButton": "_ru _27 _2p _54 _2q _2y _38", "RadioButtonSm": "_rv", "RadioButtonMd": "_rw", "RadioButtonIsFocused": "_rx _26", "RadioButtonWhiteBg": "_ry _5f", "RadioButtonLightGrayBg": "_rz _5h", "Input": "_s0 _2j _jr", "InputEnabled": "_s1 _nn", "InputSm": "_s2", "InputMd": "_s3", "Check": "_s4 _54", "CheckEnabled": "_s5 _5l", "CheckDisabled": "_s6 _5j" };

var RadioButton = function (_React$Component) {
  inherits(RadioButton, _React$Component);

  function RadioButton() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, RadioButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false
    }, _this.handleChange = function (event) {
      var checked = event.target.checked;

      _this.props.onChange({ checked: checked, event: event });
    }, _this.handleBlur = function () {
      return _this.setState({ focused: false });
    }, _this.handleFocus = function () {
      _this.setState({ focused: true });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(RadioButton, [{
    key: 'render',
    value: function render() {
      var _classnames, _classnames2, _classnames3;

      var _props = this.props,
          checked = _props.checked,
          disabled = _props.disabled,
          id = _props.id,
          name = _props.name,
          size = _props.size,
          value = _props.value;

      return createElement(
        'div',
        {
          className: classnames(styles$21.RadioButton, (_classnames = {}, defineProperty(_classnames, styles$21.RadioButtonIsFocused, this.state.focused), defineProperty(_classnames, styles$21.RadioButtonSm, size === 'sm'), defineProperty(_classnames, styles$21.RadioButtonMd, size === 'md'), defineProperty(_classnames, styles$21.RadioButtonWhiteBg, !disabled || checked), defineProperty(_classnames, styles$21.RadioButtonLightGrayBg, disabled && !checked), _classnames))
        },
        createElement('input', {
          checked: checked,
          className: classnames(styles$21.Input, (_classnames2 = {}, defineProperty(_classnames2, styles$21.InputEnabled, !disabled), defineProperty(_classnames2, styles$21.InputSm, size === 'sm'), defineProperty(_classnames2, styles$21.InputMd, size === 'md'), _classnames2)),
          disabled: disabled,
          id: id,
          name: name,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          type: 'radio',
          value: value
        }),
        checked && createElement('div', {
          className: classnames(styles$21.Check, (_classnames3 = {}, defineProperty(_classnames3, styles$21.CheckSm, size === 'sm'), defineProperty(_classnames3, styles$21.CheckMd, size === 'md'), defineProperty(_classnames3, styles$21.CheckEnabled, !disabled), defineProperty(_classnames3, styles$21.CheckDisabled, disabled), _classnames3))
        })
      );
    }
  }]);
  return RadioButton;
}(Component);

RadioButton.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md'])
};
RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  size: 'md'
};

var ScrollFetch = function (_React$PureComponent) {
  inherits(ScrollFetch, _React$PureComponent);

  function ScrollFetch() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ScrollFetch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ScrollFetch.__proto__ || Object.getPrototypeOf(ScrollFetch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      containerHeight: 0,
      scrollHeight: 0,
      scrollTop: 0
    }, _this.getScrollHeight = function () {
      var container = _this.props.container;

      if (!container) {
        return 0;
      }
      return getScrollHeight(container);
    }, _this.updatePosition = throttle(function () {
      _this.setState(_this.getScrollState());
    }), _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ScrollFetch, [{
    key: 'componentDidMount',


    /**
     * Adds scroll listener after the component mounts.
     */
    value: function componentDidMount() {
      var _this2 = this;

      var container = this.props.container;

      if (!container) {
        return;
      }
      setTimeout(function () {
        _this2.setState(_extends({
          containerHeight: getElementHeight(container)
        }, _this2.getScrollState()));
      });
    }

    /**
     * Update scroll buffer and check after the component updates.
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // setTimeout so the parent component can calculate renderHeight().
      this.updatePosition();
    }

    /**
     * Returns the scrollable content height.
     */

  }, {
    key: 'getScrollState',
    value: function getScrollState() {
      var _props = this.props,
          container = _props.container,
          renderHeight = _props.renderHeight;

      if (!container) {
        return null;
      }
      var scrollHeight = renderHeight || this.getScrollHeight;

      return {
        scrollHeight: scrollHeight(),
        scrollTop: getScrollPos(container)
      };
    }

    /**
     * Fetches additional items if needed.
     */

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          containerHeight = _state.containerHeight,
          scrollHeight = _state.scrollHeight,
          scrollTop = _state.scrollTop;
      var _props2 = this.props,
          container = _props2.container,
          fetchMore = _props2.fetchMore,
          isAtEnd = _props2.isAtEnd,
          isFetching = _props2.isFetching;


      var props = {
        containerHeight: containerHeight,
        fetchMore: fetchMore,
        isAtEnd: isAtEnd,
        isFetching: isFetching,
        scrollHeight: scrollHeight,
        scrollTop: scrollTop
      };

      if (!container || isAtEnd) {
        return null;
      }
      return createElement(
        ScrollContainer,
        {
          onScroll: this.updatePosition,
          scrollContainer: container
        },
        createElement(FetchItems, props)
      );
    }
  }]);
  return ScrollFetch;
}(PureComponent);


ScrollFetch.propTypes = {
  /**
   * The scroll container to use. Defaults to window.
   */
  container: PropTypes.shape({
    addEventListener: PropTypes.func,
    removeEventListener: PropTypes.func
  }),
  renderHeight: PropTypes.func,
  isAtEnd: PropTypes.bool,
  isFetching: PropTypes.bool,
  fetchMore: PropTypes.func
};

ScrollFetch.defaultProps = {
  container: typeof window !== 'undefined' ? window : null
};

var styles$22 = { "input": "_s7 _25 _4y _2p _5k _nv _ms _mt _mu _ny _mv _my _5h _3x", "clear": "_s8 _5b _nn _76 _75 _2h" };

var SearchField = function (_React$Component) {
  inherits(SearchField, _React$Component);

  function SearchField() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, SearchField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = SearchField.__proto__ || Object.getPrototypeOf(SearchField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false,
      hovered: false
    }, _this.handleChange = function (event) {
      _this.props.onChange({
        value: event.currentTarget.value,
        syntheticEvent: event
      });
    }, _this.handleClear = function (event) {
      _this.props.onChange({
        value: '',
        syntheticEvent: event
      });
    }, _this.handleMouseEnter = function () {
      return _this.setState({ hovered: true });
    }, _this.handleMouseLeave = function () {
      return _this.setState({ hovered: false });
    }, _this.handleFocus = function (event) {
      _this.setState({ focused: true });

      if (_this.props.onFocus) {
        _this.props.onFocus({
          value: event.currentTarget.value,
          syntheticEvent: event
        });
      }
    }, _this.handleBlur = function (event) {
      _this.setState({ focused: false });

      if (_this.props.onBlur) {
        _this.props.onBlur({ event: event });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(SearchField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          accessibilityLabel = _props.accessibilityLabel,
          id = _props.id,
          placeholder = _props.placeholder,
          value = _props.value;

      // This mirrors the built in browser behavior. If there's a value, show the
      // clear button if you're hovering or if you've focused on the field

      var showClear = (this.state.focused || this.state.hovered) && value && value.length > 0;

      return createElement(
        Box,
        {
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          color: 'white'
        },
        createElement(
          Box,
          {
            dangerouslySetInlineStyle: {
              __style: {
                pointerEvents: 'none',
                // Added the following lines for Safari support
                top: '50%',
                transform: 'translateY(-50%)'
              }
            },
            position: 'absolute',
            left: true,
            paddingX: 4
          },
          createElement(Icon, { icon: 'search', accessibilityLabel: '' })
        ),
        createElement('input', {
          'aria-label': accessibilityLabel,
          className: styles$22.input,
          id: id,
          onChange: this.handleChange,
          placeholder: placeholder,
          role: 'searchbox',
          type: 'search',
          value: value
        }),
        showClear && createElement(
          Box,
          { position: 'absolute', right: true, top: true },
          createElement(
            'button',
            {
              className: styles$22.clear,
              onClick: this.handleClear,
              tabIndex: -1,
              type: 'button'
            },
            createElement(Icon, { icon: 'clear', accessibilityLabel: '' })
          )
        )
      );
    }
  }]);
  return SearchField;
}(Component);

SearchField.propTypes = {
  accessibilityLabel: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

var styles$23 = { "SegmentedControl": "_s9 _5h _2q _39", "item": "_sa _25 _3h _jr _5b _nn", "md": "_sb", "lg": "_sc", "itemIsNotSelected": "_sd", "itemIsSelected": "_se _5f" };

function SegmentedControl(props) {
  var items = props.items,
      onChange = props.onChange,
      selectedItemIndex = props.selectedItemIndex,
      _props$size = props.size,
      size = _props$size === undefined ? 'md' : _props$size;

  return createElement(
    'div',
    { className: styles$23.SegmentedControl, role: 'tablist' },
    items.map(function (item, i) {
      var _classnames;

      var isSelected = i === selectedItemIndex;
      var cs = classnames(styles$23.item, (_classnames = {}, defineProperty(_classnames, styles$23.md, size === 'md'), defineProperty(_classnames, styles$23.lg, size === 'lg'), defineProperty(_classnames, styles$23.itemIsNotSelected, !isSelected), defineProperty(_classnames, styles$23.itemIsSelected, isSelected), _classnames));
      return createElement(
        'button',
        {
          'aria-selected': isSelected,
          className: cs,
          key: i,
          onClick: function onClick(e) {
            return onChange({ event: e, activeIndex: i });
          },
          role: 'tab'
        },
        createElement(
          Text,
          {
            bold: true,
            color: isSelected ? 'darkGray' : 'gray',
            align: 'center',
            size: size
          },
          item
        )
      );
    })
  );
}

SegmentedControl.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedItemIndex: PropTypes.number.isRequired
};

var styles$24 = { "select": "_sf _25 _nv _ms _mt _mu _ny _mv _5k _nn _2h _6a _3x", "normal": "_sg", "errored": "_sh", "enabled": "_si _5k _5f", "disabled": "_sj _5i _5h" };

var SelectList = function (_React$Component) {
  inherits(SelectList, _React$Component);

  function SelectList() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, SelectList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = SelectList.__proto__ || Object.getPrototypeOf(SelectList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false,
      errorIsOpen: false
    }, _this.handleOnChange = function (event) {
      if (event.target instanceof HTMLSelectElement && _this.props.value !== event.target.value) {
        _this.props.onChange({ event: event, value: event.target.value });

        if (_this.props.errorMessage) {
          _this.setState({ errorIsOpen: false });
        }
      }
    }, _this.handleBlur = function () {
      if (_this.props.errorMessage) {
        _this.setState({ errorIsOpen: false });
      }
    }, _this.handleFocus = function () {
      if (_this.props.errorMessage) {
        _this.setState({ errorIsOpen: true });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(SelectList, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.errorMessage !== this.props.errorMessage) {
        this.setState({ errorIsOpen: !!nextProps.errorMessage });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          disabled = _props.disabled,
          errorMessage = _props.errorMessage,
          id = _props.id,
          idealErrorDirection = _props.idealErrorDirection,
          name = _props.name,
          options = _props.options,
          placeholder = _props.placeholder,
          value = _props.value;


      var classes = classnames(styles$24.select, disabled ? styles$24.disabled : styles$24.enabled, errorMessage ? styles$24.errored : styles$24.normal);

      return createElement(
        Box,
        {
          color: disabled ? 'lightGray' : 'white',
          dangerouslySetInlineStyle: { __style: { borderRadius: 4 } },
          display: 'flex',
          position: 'relative',
          width: '100%'
        },
        createElement(
          Box,
          {
            alignItems: 'center',
            bottom: true,
            dangerouslySetInlineStyle: {
              __style: { paddingRight: 14, paddingTop: 2 }
            },
            display: 'flex',
            position: 'absolute',
            right: true,
            top: true
          },
          createElement(Icon, {
            icon: 'arrow-down',
            size: 12,
            color: disabled ? 'gray' : 'darkGray',
            accessibilityLabel: ''
          })
        ),
        createElement(
          'select',
          {
            'aria-describedby': errorMessage && this.state.focused ? id + '-gestalt-error' : null,
            'aria-invalid': errorMessage ? 'true' : 'false',
            className: classes,
            disabled: disabled,
            id: id,
            name: name,
            onBlur: this.handleBlur,
            onFocus: this.handleFocus,
            onChange: this.handleOnChange,
            ref: function ref(c) {
              _this2.select = c;
            },
            value: value
          },
          placeholder && !value && createElement(
            'option',
            { selected: true, disabled: true, value: true, hidden: true },
            placeholder
          ),
          options.map(function (option) {
            return createElement(
              'option',
              { key: option.value, value: option.value },
              option.label
            );
          })
        ),
        errorMessage && this.state.errorIsOpen && createElement(ErrorFlyout, {
          anchor: this.select,
          id: id + '-gestalt-error',
          idealDirection: idealErrorDirection,
          message: errorMessage,
          onDismiss: function onDismiss() {
            return _this2.setState({ errorIsOpen: false });
          },
          size: 'sm'
        })
      );
    }
  }]);
  return SelectList;
}(Component);

SelectList.propTypes = {
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  idealErrorDirection: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.exact({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  placeholder: PropTypes.string,
  value: PropTypes.string
};
SelectList.defaultProps = {
  disabled: false,
  idealErrorDirection: 'right',
  options: []
};

var styles$25 = { "icon": "_sk _27", "spin": "_sl" };

var SIZE = 40;

function Spinner(_ref) {
  var accessibilityLabel = _ref.accessibilityLabel,
      show = _ref.show;

  return show ? createElement(
    Box,
    { xs: { display: 'flex' }, justifyContent: 'around', overflow: 'hidden' },
    createElement(
      'div',
      { className: styles$25.icon },
      createElement(Icon, {
        icon: 'knoop',
        accessibilityLabel: accessibilityLabel,
        size: SIZE
      })
    )
  ) : createElement('div', null);
}

Spinner.propTypes = {
  show: PropTypes.bool.isRequired,
  accessibilityLabel: PropTypes.string.isRequired
};

function Sticky(props) {
  var _props$dangerouslySet = props.dangerouslySetZIndex,
      dangerouslySetZIndex = _props$dangerouslySet === undefined ? { __zIndex: 1 } : _props$dangerouslySet,
      children = props.children;

  var style = {
    top: typeof props.top === 'number' ? props.top : undefined,
    left: typeof props.left === 'number' ? props.left : undefined,
    right: typeof props.right === 'number' ? props.right : undefined,
    bottom: typeof props.bottom === 'number' ? props.bottom : undefined,
    // eslint-disable-next-line no-underscore-dangle
    zIndex: dangerouslySetZIndex.__zIndex
  };
  return createElement(
    'div',
    { className: layout.sticky, style: style },
    children
  );
}

var styles$26 = { "switch": "_sm _27 _2p _2h", "focused": "_sn _26", "switchDarkGray": "_so _5l", "switchGray": "_sp _5j", "switchLightGray": "_sq _5h", "switchWhite": "_sr _5f", "slider": "_ss _2p _2j _5f _54", "sliderRight": "_st", "sliderLeft": "_su", "sliderDark": "_sv", "sliderLight": "_sw", "checkbox": "_sx _2j _3x _jr _5b _jw", "checkboxEnabled": "_sy _nn" };

var Switch = function (_React$Component) {
  inherits(Switch, _React$Component);

  function Switch() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Switch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false
    }, _this.handleBlur = function () {
      return _this.setState({ focused: false });
    }, _this.handleChange = function (event) {
      var checked = event.target.checked;

      _this.props.onChange({
        event: event,
        value: checked
      });
    }, _this.handleFocus = function () {
      _this.setState({ focused: true });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Switch, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          id = _props.id,
          name = _props.name,
          switched = _props.switched;


      var switchStyles = classnames(styles$26.switch, defineProperty({}, styles$26.focused, this.state.focused),
      // eslint-disable-next-line no-nested-ternary
      disabled ? switched ? styles$26.switchGray : styles$26.switchLightGray : switched ? styles$26.switchDarkGray : styles$26.switchWhite);

      var sliderStyles = classnames(styles$26.slider, switched ? styles$26.sliderRight : styles$26.sliderLeft, switched && !disabled ? styles$26.sliderDark : styles$26.sliderLight);

      var inputStyles = classnames(styles$26.checkbox, defineProperty({}, styles$26.checkboxEnabled, !disabled));

      return createElement(
        'div',
        { className: switchStyles },
        createElement('input', {
          checked: switched,
          className: inputStyles,
          disabled: disabled,
          id: id,
          name: name,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          type: 'checkbox'
        }),
        createElement('div', { className: sliderStyles })
      );
    }
  }]);
  return Switch;
}(Component);

Switch.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  switched: PropTypes.bool
};
Switch.defaultProps = {
  disabled: false,
  switched: false
};

var styles$27 = { "Tabs": "_sz _2q", "tab": "_t0 _25 _2q _2u undefined _5b _55 _jr _nn", "tabIsNotActive": "_t1 _6a _5i", "tabIsActive": "_t2 _5h _5k" };

var Tabs = function (_React$Component) {
  inherits(Tabs, _React$Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focusedTabIndex: undefined,
      hoveredTabIndex: undefined
    }, _this.handleTabClick = function (i, e) {
      var onChange = _this.props.onChange;

      onChange({ activeTabIndex: i, event: e });
    }, _this.handleTabFocus = function (i) {
      return _this.setState({ focusedTabIndex: i });
    }, _this.handleTabBlur = function () {
      return _this.setState({ focusedTabIndex: undefined });
    }, _this.handleTabMouseEnter = function (i) {
      return _this.setState({ hoveredTabIndex: i });
    }, _this.handleTabMouseLeave = function () {
      return _this.setState({ hoveredTabIndex: undefined });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Tabs, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          tabs = _props.tabs,
          activeTabIndex = _props.activeTabIndex;
      var _state = this.state,
          focusedTabIndex = _state.focusedTabIndex,
          hoveredTabIndex = _state.hoveredTabIndex;

      return createElement(
        'div',
        { className: styles$27.Tabs, role: 'tablist' },
        tabs.map(function (_ref2, i) {
          var _classnames;

          var text = _ref2.text,
              href = _ref2.href;

          var isActive = i === activeTabIndex;
          var isHovered = i === hoveredTabIndex;
          var isFocused = i === focusedTabIndex;
          var cs = classnames(styles$27.tab, (_classnames = {}, defineProperty(_classnames, styles$27.tabIsNotActive, !isActive), defineProperty(_classnames, styles$27.tabIsActive, isActive), _classnames));
          return createElement(
            'a',
            {
              'aria-selected': isActive,
              className: cs,
              href: href,
              key: i,
              onClick: function onClick(e) {
                return _this2.handleTabClick(i, e);
              },
              onFocus: function onFocus() {
                return _this2.handleTabFocus(i);
              },
              onBlur: _this2.handleTabBlur,
              onMouseEnter: function onMouseEnter() {
                return _this2.handleTabMouseEnter(i);
              },
              onMouseLeave: _this2.handleTabMouseLeave,
              role: 'tab'
            },
            createElement(
              Text,
              {
                bold: true,
                color: isActive || isHovered || isFocused ? 'darkGray' : 'gray',
                size: 'md'
              },
              text
            )
          );
        })
      );
    }
  }]);
  return Tabs;
}(Component);

Tabs.propTypes = {
  activeTabIndex: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.exact({
    text: PropTypes.node,
    href: PropTypes.string
  })).isRequired,
  onChange: PropTypes.func.isRequired
};

var styles$28 = { "textArea": "_t3 _25 _2p _nv _ms _mt _mu _ny _mw _3x", "normal": "_t4", "errored": "_t5", "enabled": "_t6 _5k _5f", "disabled": "_t7 _5i _5h" };

var TextArea = function (_React$Component) {
  inherits(TextArea, _React$Component);

  function TextArea() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TextArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false,
      errorIsOpen: false
    }, _this.handleChange = function (event) {
      if (event.target instanceof HTMLTextAreaElement) {
        _this.props.onChange({
          event: event,
          value: event.target.value
        });

        if (_this.props.errorMessage) {
          _this.setState({ errorIsOpen: true });
        }
      }
    }, _this.handleBlur = function (event) {
      if (_this.props.errorMessage) {
        _this.setState({ errorIsOpen: false });
      }
      if (event.target instanceof HTMLTextAreaElement && _this.props.onBlur) {
        _this.props.onBlur({
          event: event,
          value: event.target.value
        });
      }
    }, _this.handleFocus = function (event) {
      if (_this.props.errorMessage) {
        _this.setState({ errorIsOpen: true });
      }
      if (event.target instanceof HTMLTextAreaElement && _this.props.onFocus) {
        _this.props.onFocus({
          event: event,
          value: event.target.value
        });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TextArea, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.errorMessage !== this.props.errorMessage) {
        this.setState({ errorIsOpen: !!nextProps.errorMessage });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          disabled = _props.disabled,
          errorMessage = _props.errorMessage,
          id = _props.id,
          idealErrorDirection = _props.idealErrorDirection,
          name = _props.name,
          placeholder = _props.placeholder,
          rows = _props.rows,
          value = _props.value;


      var classes = classnames(styles$28.textArea, disabled ? styles$28.disabled : styles$28.enabled, errorMessage ? styles$28.errored : styles$28.normal);

      return createElement(
        'span',
        null,
        createElement('textarea', {
          'aria-describedby': errorMessage && this.state.focused ? id + '-gestalt-error' : null,
          'aria-invalid': errorMessage ? 'true' : 'false',
          className: classes,
          disabled: disabled,
          id: id,
          name: name,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          placeholder: placeholder,
          ref: function ref(c) {
            _this2.textarea = c;
          },
          rows: rows,
          value: value
        }),
        errorMessage && this.state.errorIsOpen ? createElement(ErrorFlyout, {
          anchor: this.textarea,
          id: id + '-gestalt-error',
          idealDirection: idealErrorDirection,
          message: errorMessage,
          onDismiss: function onDismiss() {
            return _this2.setState({ errorIsOpen: false });
          },
          size: 'sm'
        }) : null
      );
    }
  }]);
  return TextArea;
}(Component);

TextArea.propTypes = {
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  idealErrorDirection: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string
};
TextArea.defaultProps = {
  disabled: false,
  idealErrorDirection: 'right',
  rows: 3
};

var styles$29 = { "textField": "_t8 _25 _2p _nv _ms _mt _mu _ny _mv _3x", "normal": "_t9", "errored": "_ta", "enabled": "_tb _5k _5f", "disabled": "_tc _5i _5h" };

var TextField = function (_React$Component) {
  inherits(TextField, _React$Component);

  function TextField() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TextField.__proto__ || Object.getPrototypeOf(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false,
      errorIsOpen: false
    }, _this.handleChange = function (event) {
      if (event.target instanceof HTMLInputElement) {
        _this.props.onChange({
          event: event,
          value: event.target.value
        });
      }
    }, _this.handleBlur = function (event) {
      if (_this.props.errorMessage) {
        _this.setState({ errorIsOpen: false });
      }
      if (event.target instanceof HTMLInputElement && _this.props.onBlur) {
        _this.props.onBlur({
          event: event,
          value: event.target.value
        });
      }
    }, _this.handleFocus = function (event) {
      if (_this.props.errorMessage) {
        _this.setState({ errorIsOpen: true });
      }
      if (event.target instanceof HTMLInputElement && _this.props.onFocus) {
        _this.props.onFocus({
          event: event,
          value: event.target.value
        });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TextField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.errorMessage !== this.props.errorMessage) {
        this.setState({ errorIsOpen: !!nextProps.errorMessage });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          autoComplete = _props.autoComplete,
          disabled = _props.disabled,
          errorMessage = _props.errorMessage,
          hasError = _props.hasError,
          id = _props.id,
          idealErrorDirection = _props.idealErrorDirection,
          name = _props.name,
          placeholder = _props.placeholder,
          type = _props.type,
          value = _props.value;


      var classes = classnames(styles$29.textField, disabled ? styles$29.disabled : styles$29.enabled, hasError || errorMessage ? styles$29.errored : styles$29.normal);

      // type='number' doesn't work on ios safari without a pattern
      // https://stackoverflow.com/questions/14447668/input-type-number-is-not-showing-a-number-keypad-on-ios
      var pattern = type === 'number' ? '\\d*' : undefined;

      return createElement(
        'span',
        null,
        createElement('input', {
          'aria-describedby': errorMessage && this.state.focused ? id + '-gestalt-error' : null,
          'aria-invalid': errorMessage || hasError ? 'true' : 'false',
          autoComplete: autoComplete,
          className: classes,
          disabled: disabled,
          id: id,
          name: name,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          pattern: pattern,
          placeholder: placeholder,
          ref: function ref(c) {
            _this2.textfield = c;
          },
          type: type,
          value: value
        }),
        errorMessage && this.state.errorIsOpen && createElement(ErrorFlyout, {
          anchor: this.textfield,
          id: id + '-gestalt-error',
          idealDirection: idealErrorDirection,
          message: errorMessage,
          onDismiss: function onDismiss() {
            return _this2.setState({ errorIsOpen: false });
          },
          size: 'sm'
        })
      );
    }
  }]);
  return TextField;
}(Component);

TextField.propTypes = {
  autoComplete: PropTypes.oneOf(['current-password', 'on', 'off', 'username']),
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  id: PropTypes.string.isRequired,
  idealErrorDirection: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['date', 'email', 'number', 'password', 'text', 'url']),
  value: PropTypes.string
};
TextField.defaultProps = {
  disabled: false,
  hasError: false,
  idealErrorDirection: 'right',
  type: 'text'
};

function Toast(props) {
  var _props$color = props.color,
      color = _props$color === undefined ? 'darkGray' : _props$color,
      icon = props.icon,
      thumbnail = props.thumbnail,
      text = props.text;


  var contents = void 0;
  // Confirmation Toasts
  if (text instanceof Array && text.length > 1) {
    contents = createElement(
      Box,
      { xs: { display: 'flex' } },
      createElement(
        Box,
        { xs: { display: 'flexColumn' }, flex: 'none', justifyContent: 'center' },
        thumbnail ? createElement(
          Mask,
          { shape: 'rounded', height: 48, width: 48 },
          thumbnail
        ) : null
      ),
      createElement(
        Box,
        {
          xs: { display: 'flexColumn' },
          justifyContent: 'center',
          dangerouslySetInlineStyle: { __style: { paddingLeft: 10 } }
        },
        createElement(
          Box,
          {
            dangerouslySetInlineStyle: { __style: { fontWeight: 'normal' } }
          },
          createElement(
            Text,
            { color: 'white', size: 'lg' },
            text[0]
          )
        ),
        createElement(
          Text,
          { bold: true, color: 'white', size: 'lg' },
          text[1]
        )
      )
    );
  } else {
    // Toasts as Guides
    contents = createElement(
      Box,
      {
        xs: { display: 'flex' },
        justifyContent: 'between',
        alignItems: 'center'
      },
      createElement(
        Text,
        { bold: true, color: 'white', size: 'lg' },
        text
      ),
      icon && createElement(
        Box,
        { dangerouslySetInlineStyle: { __style: { paddingLeft: 24 } } },
        createElement(Icon, { accessibilityLabel: '', color: 'white', icon: icon, size: 36 })
      )
    );
  }

  return createElement(
    Box,
    { marginBottom: 3, paddingX: 4, maxWidth: 376, width: '100vw' },
    createElement(
      Box,
      { color: color, fit: true, paddingX: 8, paddingY: 5, shape: 'pill' },
      contents
    )
  );
}

Toast.propTypes = {
  color: PropTypes.oneOf(['darkGray', 'orange']),
  icon: PropTypes.oneOf(['arrow-circle-forward']), // leaving open to additional icons in the future
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  thumbnail: PropTypes.element
};

function Tooltip(props) {
  var anchor = props.anchor,
      children = props.children,
      idealDirection = props.idealDirection,
      onDismiss = props.onDismiss,
      _props$positionRelati = props.positionRelativeToAnchor,
      positionRelativeToAnchor = _props$positionRelati === undefined ? true : _props$positionRelati,
      _props$size = props.size,
      size = _props$size === undefined ? 'md' : _props$size;


  if (!anchor) {
    return null;
  }

  return createElement(
    Controller,
    {
      anchor: anchor,
      bgColor: 'darkGray',
      idealDirection: idealDirection,
      positionRelativeToAnchor: positionRelativeToAnchor,
      onDismiss: onDismiss,
      size: size
    },
    createElement(
      Box,
      { column: 12, padding: 3 },
      children
    )
  );
}

Tooltip.propTypes = {
  anchor: PropTypes.shape({
    contains: PropTypes.func,
    getBoundingClientRect: PropTypes.func
  }),
  children: PropTypes.node,
  idealDirection: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  onDismiss: PropTypes.func.isRequired,
  positionRelativeToAnchor: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

var styles$30 = { "touchable": "_td _25", "fullHeight": "_te", "fullWidth": "_tf _3x", "square": "_tg _53", "circle": "_th _54", "rounded": "_ti _56", "roundedTop": "_tj _57", "roundedRight": "_tk _58", "roundedBottom": "_tl _59", "roundedLeft": "_tm _5a", "pill": "_tn _55", "pointer": "_to _nn", "zoomIn": "_tp _no", "zoomOut": "_tq _np", "copy": "_tr _nq", "move": "_ts _nr", "noDrop": "_tt _ns", "grab": "_tu _nt", "grabbing": "_tv _nu" };

var SPACE_CHAR_CODE = 32;
var ENTER_CHAR_CODE = 13;

var Touchable = function (_React$Component) {
  inherits(Touchable, _React$Component);

  function Touchable() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Touchable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Touchable.__proto__ || Object.getPrototypeOf(Touchable)).call.apply(_ref, [this].concat(args))), _this), _this.handleKeyPress = function (event) {
      var onTouch = _this.props.onTouch;
      // Check to see if space or enter were pressed

      if (onTouch && (event.charCode === SPACE_CHAR_CODE || event.charCode === ENTER_CHAR_CODE)) {
        // Prevent the default action to stop scrolling when space is pressed
        event.preventDefault();
        onTouch({ event: event });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Touchable, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          children = _props.children,
          _props$fullWidth = _props.fullWidth,
          fullWidth = _props$fullWidth === undefined ? true : _props$fullWidth,
          fullHeight = _props.fullHeight,
          _props$mouseCursor = _props.mouseCursor,
          mouseCursor = _props$mouseCursor === undefined ? 'pointer' : _props$mouseCursor,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          onTouch = _props.onTouch,
          _props$shape = _props.shape,
          shape = _props$shape === undefined ? 'square' : _props$shape;


      var classes = classnames(styles$30.touchable, styles$30[mouseCursor], styles$30[shape], (_classnames = {}, defineProperty(_classnames, styles$30.fullHeight, fullHeight), defineProperty(_classnames, styles$30.fullWidth, fullWidth), _classnames));

      return createElement(
        'div',
        {
          className: classes,
          onClick: function onClick(event) {
            return onTouch && onTouch({ event: event });
          },
          onMouseEnter: function (_onMouseEnter) {
            function onMouseEnter(_x) {
              return _onMouseEnter.apply(this, arguments);
            }

            onMouseEnter.toString = function () {
              return _onMouseEnter.toString();
            };

            return onMouseEnter;
          }(function (event) {
            return onMouseEnter && onMouseEnter({ event: event });
          }),
          onMouseLeave: function (_onMouseLeave) {
            function onMouseLeave(_x2) {
              return _onMouseLeave.apply(this, arguments);
            }

            onMouseLeave.toString = function () {
              return _onMouseLeave.toString();
            };

            return onMouseLeave;
          }(function (event) {
            return onMouseLeave && onMouseLeave({ event: event });
          }),
          onKeyPress: this.handleKeyPress,
          role: 'button',
          tabIndex: '0'
        },
        children
      );
    }
  }]);
  return Touchable;
}(Component);


Touchable.propTypes = {
  children: PropTypes.node,
  fullHeight: PropTypes.bool,
  fullWidth: PropTypes.bool,
  mouseCursor: PropTypes.oneOf(['copy', 'grab', 'grabbing', 'move', 'noDrop', 'pointer', 'zoomIn', 'zoomOut']),
  onTouch: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  shape: PropTypes.oneOf(['square', 'rounded', 'pill', 'circle', 'roundedTop', 'roundedBottom', 'roundedLeft', 'roundedRight'])
};

export { Avatar, Box, Button, Card, Checkbox, Collection, Column, Container, Divider, ErrorFlyout, ExperimentalMasonry, Flyout, GroupAvatar, Heading, Icon, IconButton, Image, Label, Letterbox, Link, Mask, Masonry, MasonryLayout as MasonryDefaultLayout, UniformRowLayout as MasonryUniformRowLayout, Modal, Pog, Pulsar, RadioButton, ScrollFetch, SearchField, SegmentedControl, SelectList, Spinner, Sticky, Switch, Tabs, Text, TextArea, TextField, Toast, Tooltip, Touchable };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdGFsdC5lcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL0JveC9zdHlsZS5qcyIsIi4uL3NyYy9Cb3gvdHJhbnNmb3Jtcy5qcyIsIi4uL3NyYy9Cb3gvQm94LmpzIiwiLi4vc3JjL0ljb24vaWNvbnMvaW5kZXguanMiLCIuLi9zcmMvSWNvbi9JY29uLmpzIiwiLi4vc3JjL0ltYWdlL0ltYWdlLmpzIiwiLi4vc3JjL01hc2svTWFzay5qcyIsIi4uL3NyYy9BdmF0YXIvQXZhdGFyLmpzIiwiLi4vc3JjL1RleHQvVGV4dC5qcyIsIi4uL3NyYy9CdXR0b24vQnV0dG9uLmpzIiwiLi4vc3JjL0NhcmQvQ2FyZC5qcyIsIi4uL3NyYy9DaGVja2JveC9DaGVja2JveC5qcyIsIi4uL3NyYy9Db2xsZWN0aW9uL0NvbGxlY3Rpb24uanMiLCIuLi9zcmMvQ29sdW1uL0NvbHVtbi5qcyIsIi4uL3NyYy9Db250YWluZXIvQ29udGFpbmVyLmpzIiwiLi4vc3JjL0RpdmlkZXIvRGl2aWRlci5qcyIsIi4uL3NyYy9GbHlvdXRVdGlscy9DYXJldC5qcyIsIi4uL3NyYy9GbHlvdXRVdGlscy9Db250ZW50cy5qcyIsIi4uL3NyYy9GbHlvdXRVdGlscy9Db250cm9sbGVyLmpzIiwiLi4vc3JjL0Vycm9yRmx5b3V0L0Vycm9yRmx5b3V0LmpzIiwiLi4vc3JjL1Njcm9sbEZldGNoL0ZldGNoSXRlbXMuanMiLCIuLi9zcmMvU2Nyb2xsRmV0Y2gvU2Nyb2xsQ29udGFpbmVyLmpzIiwiLi4vc3JjL3Rocm90dGxlLmpzIiwiLi4vc3JjL0V4cGVyaW1lbnRhbE1hc29ucnkvTWVhc3VyZW1lbnRTdG9yZS5qcyIsIi4uL3NyYy9TY3JvbGxGZXRjaC9zY3JvbGxVdGlscy5qcyIsIi4uL3NyYy9FeHBlcmltZW50YWxNYXNvbnJ5L2xlZ2FjeUxheW91dFN5bWJvbHMuanMiLCIuLi9zcmMvRXhwZXJpbWVudGFsTWFzb25yeS9kZWZhdWx0TGF5b3V0LmpzIiwiLi4vc3JjL0V4cGVyaW1lbnRhbE1hc29ucnkvdW5pZm9ybVJvd0xheW91dC5qcyIsIi4uL3NyYy9FeHBlcmltZW50YWxNYXNvbnJ5L2Z1bGxXaWR0aExheW91dC5qcyIsIi4uL3NyYy9NYXNvbnJ5L2xheW91dC9tYXNvbnJ5LmpzIiwiLi4vc3JjL01hc29ucnkvbGF5b3V0L3VuaWZvcm1Sb3cuanMiLCIuLi9zcmMvRXhwZXJpbWVudGFsTWFzb25yeS9NYXNvbnJ5LmpzIiwiLi4vc3JjL0ZseW91dC9GbHlvdXQuanMiLCIuLi9zcmMvR3JvdXBBdmF0YXIvR3JvdXBBdmF0YXIuanMiLCIuLi9zcmMvSGVhZGluZy9IZWFkaW5nLmpzIiwiLi4vc3JjL1BvZy9Qb2cuanMiLCIuLi9zcmMvSWNvbkJ1dHRvbi9JY29uQnV0dG9uLmpzIiwiLi4vc3JjL0xhYmVsL0xhYmVsLmpzIiwiLi4vc3JjL0xldHRlcmJveC9MZXR0ZXJib3guanMiLCIuLi9zcmMvTGluay9MaW5rLmpzIiwiLi4vc3JjL01hc29ucnkvTWVhc3VyZW1lbnRTdG9yZS5qcyIsIi4uL3NyYy9NYXNvbnJ5L2xlZ2FjeUxheW91dFN5bWJvbHMuanMiLCIuLi9zcmMvTWFzb25yeS9kZWZhdWx0TGF5b3V0LmpzIiwiLi4vc3JjL01hc29ucnkvdW5pZm9ybVJvd0xheW91dC5qcyIsIi4uL3NyYy9NYXNvbnJ5L2Z1bGxXaWR0aExheW91dC5qcyIsIi4uL3NyYy9NYXNvbnJ5L01hc29ucnkuanMiLCIuLi9zcmMvTW9kYWwvTW9kYWwuanMiLCIuLi9zcmMvUHVsc2FyL1B1bHNhci5qcyIsIi4uL3NyYy9SYWRpb0J1dHRvbi9SYWRpb0J1dHRvbi5qcyIsIi4uL3NyYy9TY3JvbGxGZXRjaC9TY3JvbGxGZXRjaC5qcyIsIi4uL3NyYy9TZWFyY2hGaWVsZC9TZWFyY2hGaWVsZC5qcyIsIi4uL3NyYy9TZWdtZW50ZWRDb250cm9sL1NlZ21lbnRlZENvbnRyb2wuanMiLCIuLi9zcmMvU2VsZWN0TGlzdC9TZWxlY3RMaXN0LmpzIiwiLi4vc3JjL1NwaW5uZXIvU3Bpbm5lci5qcyIsIi4uL3NyYy9TdGlja3kvU3RpY2t5LmpzIiwiLi4vc3JjL1N3aXRjaC9Td2l0Y2guanMiLCIuLi9zcmMvVGFicy9UYWJzLmpzIiwiLi4vc3JjL1RleHRBcmVhL1RleHRBcmVhLmpzIiwiLi4vc3JjL1RleHRGaWVsZC9UZXh0RmllbGQuanMiLCIuLi9zcmMvVG9hc3QvVG9hc3QuanMiLCIuLi9zcmMvVG9vbHRpcC9Ub29sdGlwLmpzIiwiLi4vc3JjL1RvdWNoYWJsZS9Ub3VjaGFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogQGZsb3cgKi9cblxuLypcblxuU3R5bGUgaXMgYSBtb25vaWQgdGhhdCBjYXB0dXJlIHRoZSBcInRvLWJlLWFwcGxpZWRcIiBzdHlsZXMgKGlubGluZSBhbmQgY2xhc3NlcylcbmZvciBhIEJveC4gSXQncyBiYXNpY2FsbHkgc2V0IHRoYXQgaXMgY2xvc2VkIHVuZGVyIGFuIGFzc29jaWF0aXZlIGJpbmFyeVxub3BlcmF0aW9uIGFuZCBoYXMgYW4gaWRlbnRpdHkgZWxlbWVudCBzdWNoIHRoYXQgZm9yIGFsbCBIQSBIQSBIQS4gWWVzLCBpdCdzIGFcbm1vbm9pZCwgd2hpY2ggc291bmRzIHNjYXJ5IGJ1dCBpdCdzIG5vdCByZWFsbHkgYW5kIGFjdHVhbGx5IHN1cGVyIHVzZWZ1bC4gQWxsXG50aGF0IG1lYW5zIGlzIHRoYXQgYmFzaWNhbGx5IHlvdSBjYW4gZG8gdHdvIHRoaW5ncyB3aXRoIGl0OlxuXG4gICAgMS4gY29uY2F0KGNvbmNhdChhLCBiKSwgYykgPT09IGNvbmNhdChhLCBjb25jYXQoYiwgYykpO1xuICAgIDIuIGNvbmNhdChpZGVudGl0eSgpLCBhKSA9PT0gY29uY2F0KGEsIGlkZW50aXR5KCkpID09PSBhO1xuXG5XaGF0IHRoYXQgbWVhbnMgaXMgdGhhdCBpdCdzIHJlYWxseSBlYXN5IHRvIGNvbXBvc2Ugc3R5bGVzIHRvZ2V0aGVyIGFuZCB0aGVcbm9yZGVyIGluIHdoaWNoIHlvdSBkbyBzbyBkb2Vzbid0IHJlYWxseSBtYXR0ZXIuXG5cbiovXG5cbi8vIFRPRE86IFRoaXMgdHlwZSBzaG91bGQgYmUgb3BhcXVlLCBob3dldmVyIHRoZSBCYWJlbCBwYXJzZXIgZG9lc24ndCBzdXBwb3J0XG4vLyAgICAgICB0aGUgb3BhcXVlIHN5bnRheCB5ZXQuXG50eXBlIFN0eWxlID0ge3xcbiAgY2xhc3NOYW1lOiBTZXQ8c3RyaW5nPixcbiAgaW5saW5lU3R5bGU6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG58fTtcblxuZXhwb3J0IGNvbnN0IGlkZW50aXR5ID0gKCk6IFN0eWxlID0+ICh7XG4gIGNsYXNzTmFtZTogbmV3IFNldCgpLFxuICBpbmxpbmVTdHlsZToge30sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZyb21DbGFzc05hbWUgPSAoLi4uY2xhc3NOYW1lczogQXJyYXk8c3RyaW5nPik6IFN0eWxlID0+ICh7XG4gIGNsYXNzTmFtZTogbmV3IFNldChjbGFzc05hbWVzKSxcbiAgaW5saW5lU3R5bGU6IHt9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmcm9tSW5saW5lU3R5bGUgPSAoaW5saW5lU3R5bGU6IHtcbiAgW2tleTogc3RyaW5nXTogYW55LFxufSk6IFN0eWxlID0+ICh7XG4gIGNsYXNzTmFtZTogbmV3IFNldCgpLFxuICBpbmxpbmVTdHlsZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgY29uY2F0ID0gKHN0eWxlczogQXJyYXk8U3R5bGU+KTogU3R5bGUgPT5cbiAgc3R5bGVzLnJlZHVjZShcbiAgICAoXG4gICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lQSwgaW5saW5lU3R5bGU6IGlubGluZVN0eWxlQSB9LFxuICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZUIsIGlubGluZVN0eWxlOiBpbmxpbmVTdHlsZUIgfVxuICAgICkgPT4gKHtcbiAgICAgIGNsYXNzTmFtZTogbmV3IFNldChbLi4uY2xhc3NOYW1lQSwgLi4uY2xhc3NOYW1lQl0pLFxuICAgICAgaW5saW5lU3R5bGU6IHsgLi4uaW5saW5lU3R5bGVBLCAuLi5pbmxpbmVTdHlsZUIgfSxcbiAgICB9KSxcbiAgICBpZGVudGl0eSgpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBtYXBDbGFzc05hbWUgPSAoZm46ICh4OiBzdHJpbmcpID0+IHN0cmluZykgPT4gKHtcbiAgY2xhc3NOYW1lLFxuICBpbmxpbmVTdHlsZSxcbn06IFN0eWxlKTogU3R5bGUgPT4gKHtcbiAgY2xhc3NOYW1lOiBuZXcgU2V0KEFycmF5LmZyb20oY2xhc3NOYW1lKS5tYXAoZm4pKSxcbiAgaW5saW5lU3R5bGUsXG59KTtcblxuZXhwb3J0IGNvbnN0IHRvUHJvcHMgPSAoe1xuICBjbGFzc05hbWUsXG4gIGlubGluZVN0eWxlLFxufTogU3R5bGUpOiB7IGNsYXNzTmFtZTogc3RyaW5nLCBzdHlsZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB9ID0+IHtcbiAgY29uc3QgcHJvcHMgPSB7fTtcblxuICBpZiAoY2xhc3NOYW1lLnNpemUgPiAwKSB7XG4gICAgLy8gU29ydGluZyBoZXJlIGVuc3VyZXMgdGhhdCBjbGFzc05hbWVzIGFyZSBhbHdheXMgc3RhYmxlLCByZWR1Y2luZyBkaWZmXG4gICAgLy8gY2h1cm4uIEJveCB1c3VhbGx5IGhhcyBhIHNtYWxsIG51bWJlciBvZiBwcm9wZXJ0aWVzIHNvIGl0J3Mgbm90IGEgcGVyZlxuICAgIC8vIGNvbmNlcm4uXG4gICAgcHJvcHMuY2xhc3NOYW1lID0gQXJyYXkuZnJvbShjbGFzc05hbWUpXG4gICAgICAuc29ydCgpXG4gICAgICAuam9pbignICcpO1xuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGlubGluZVN0eWxlKS5sZW5ndGggPiAwKSB7XG4gICAgcHJvcHMuc3R5bGUgPSBpbmxpbmVTdHlsZTtcbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn07XG4iLCJpbXBvcnQgeyBjb25jYXQsIGZyb21DbGFzc05hbWUsIGlkZW50aXR5LCBtYXBDbGFzc05hbWUgfSBmcm9tICcuL3N0eWxlJztcblxuLypcblxuVHJhbnNmb3Jtc1xuXG5UaGVzZSBhcmUgYSBjb2xsZWN0aW9uIG9mIGEgZmV3IGZ1bmN0b3JzIHRoYXQgdGFrZSB2YWx1ZXMgYW5kIHJldHVybnMgU3R5bGUncy4gT01HLCBJIHVzZWQgdGhlIHdvcmQgZnVuY3RvciAtIGl0J3MgcmVhbGx5IGp1c3QgYSBmYW5jeSB3b3JkIGZvciBmdW5jdGlvbi5cblxuKi9cblxuLy8gQWRkcyBhIGNsYXNzbmFtZSB3aGVuIGEgcHJvcGVydHkgaXMgcHJlc2VudC5cbi8vXG4vLyAgICAgPEJveCB0b3AgLz5cbi8vXG5leHBvcnQgY29uc3QgdG9nZ2xlID0gKC4uLmNsYXNzTmFtZXMpID0+IHZhbCA9PlxuICB2YWwgPyBmcm9tQ2xhc3NOYW1lKC4uLmNsYXNzTmFtZXMpIDogaWRlbnRpdHkoKTtcblxuLy8gTWFwcyBzdHJpbmcgdmFsdWVzIHRvIGNsYXNzZXNcbi8vXG4vLyAgICAgPEJveCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgLz5cbi8vXG5leHBvcnQgY29uc3QgbWFwcGluZyA9IG1hcCA9PiB2YWwgPT5cbiAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1hcCwgdmFsKVxuICAgID8gZnJvbUNsYXNzTmFtZShtYXBbdmFsXSlcbiAgICA6IGlkZW50aXR5KCk7XG5cbi8vIE1hcHMgYSByYW5nZSBvZiBpbnRlZ2VycyB0byBhIHJhbmdlIG9mIGNsYXNzbmFtZXNcbi8vXG4vLyAgICAgPEJveCBwYWRkaW5nPXsxfSAvPlxuLy9cbmV4cG9ydCBjb25zdCByYW5nZSA9IHNjYWxlID0+IG4gPT5cbiAgZnJvbUNsYXNzTmFtZShgJHtzY2FsZX0ke24gPCAwID8gYE4ke01hdGguYWJzKG4pfWAgOiBufWApO1xuXG4vLyBMaWtlIGByYW5nZWAsIG1hcHMgYSByYW5nZSBvZiBpbnRlZ2VycyB0byBhIHJhbmdlIG9mIGNsYXNzbmFtZXMsIGV4Y2x1ZGluZ1xuLy8gemVybyB2YWx1ZXMuXG4vL1xuLy8gICAgIDxCb3ggcGFkZGluZz17MH0gLz5cbmV4cG9ydCBjb25zdCByYW5nZVdpdGhvdXRaZXJvID0gc2NhbGUgPT4gbiA9PlxuICBuID09PSAwID8gaWRlbnRpdHkoKSA6IHJhbmdlKHNjYWxlKShuKTtcblxuLy8gQmluZHMgYSBzdHJpbmcgY2xhc3NuYW1lIHRvIHRoZSB2YWx1ZSBpbiBhbiBvYmplY3QuIFVzZWZ1bCB3aGVuIGludGVyYWN0aW5nXG4vLyB3aXRoIHJhbmdlcyB0aGF0IG5lZWQgdG8gY29tZSBkeW5hbWljYWxseSBmcm9tIGEgc3R5bGUgb2JqZWN0LiBUaGlzIGlzXG4vLyBzaW1pbGFyIHRvIHRoZSBOUE0gcGFja2FnZSAnY2xhc3NuYW1lcy9iaW5kJy5cbmV4cG9ydCBjb25zdCBiaW5kID0gKGZuLCBzY29wZSkgPT4gdmFsID0+XG4gIG1hcENsYXNzTmFtZShuYW1lID0+IHNjb3BlW25hbWVdKShmbih2YWwpKTtcblxuLy8gVGhpcyB0YWtlcyBhIHNlcmllcyBvZiB0aGUgcHJldmlvdXNseSBkZWZpbmVkIGZ1bmN0b3JzLCBydW5zIHRoZW0gYWxsXG4vLyBhZ2FpbnN0IGEgdmFsdWUgYW5kIHJldHVybnMgdGhlIHNldCBvZiB0aGVpciBjbGFzc25hbWVzLlxuZXhwb3J0IGNvbnN0IHVuaW9uID0gKC4uLmZucykgPT4gdmFsID0+IGNvbmNhdChmbnMubWFwKGZuID0+IGZuKHZhbCkpKTtcbiIsIi8vIEBmbG93XG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxuLypcblxuIyBXZWxjb21lIHRvIEJveCFcblxuVGhpcyBndWlkZSB3aWxsIGhlbHAgeW91IG5hdmlnYXRlIGFuZCB1bmRlcnN0YW5kIGl0cyBkZXNpZ24uIFRoaXMgZmlsZSBpcyByb3VnaGx5IG9yZ2FuaXplZCBsaWtlOlxuXG4gIDEuIEZsb3cgVHlwZXNcbiAgMi4gUHJvcCB0cmFuc2Zvcm1lcnNcbiAgMy4gQm94IGl0c2VsZlxuICA0LiBQcm9wVHlwZXNcblxuSSdsbCBleHBsYWluIGVhY2ggcGFydCBhcyB3ZSBnbyB0aHJvdWdoLiBKdXN0IHJlbWVtYmVyLCBpZiB5b3Ugd2FudCB0byBtYWtlIHVwZGF0ZXMsIFBMRUFTRSBQTEVBU0UgUExFQVNFIHVwZGF0ZSB0aGUgRmxvdyBUeXBlcyAmIFByb3BUeXBlcyAoZXZlbiB0aG91Z2ggdGhleSBsb29rIHNjYXJ5KS5cblxuKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Cb3guY3NzJztcbmltcG9ydCBib3JkZXJzIGZyb20gJy4uL0JvcmRlcnMuY3NzJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vQ29sb3JzLmNzcyc7XG5pbXBvcnQgbGF5b3V0IGZyb20gJy4uL0xheW91dC5jc3MnO1xuaW1wb3J0IHdoaXRlc3BhY2UgZnJvbSAnLi93aGl0ZXNwYWNlLmNzcyc7XG5pbXBvcnQgd2hpdGVzcGFjZUxlZ2FjeSBmcm9tICcuLi9XaGl0ZXNwYWNlLmNzcyc7XG5pbXBvcnQge1xuICBjb25jYXQsXG4gIGZyb21DbGFzc05hbWUsXG4gIGZyb21JbmxpbmVTdHlsZSxcbiAgaWRlbnRpdHksXG4gIG1hcENsYXNzTmFtZSxcbiAgdG9Qcm9wcyxcbn0gZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQge1xuICB1bmlvbixcbiAgYmluZCxcbiAgcmFuZ2UsXG4gIHRvZ2dsZSxcbiAgbWFwcGluZyxcbiAgcmFuZ2VXaXRob3V0WmVybyxcbn0gZnJvbSAnLi90cmFuc2Zvcm1zJztcblxuLypcblxuIyBQcm9UeXBlc1xuXG5Cb3gncyB0eXBlIGRlZmluaXRpb24gaXMgZXhoYXVzdGl2ZS4gV2l0aCB0aGUgZXhjZXB0aW9uIG9mIGBkYW5nZXJvdXNseVNldElubGluZVN0eWxlYCwgdmFsdWVzIHNob3VsZG4ndCBiZSBhbWJpZ2lvdXMuIFRoYXQgbWVhbnMgdGhhdCB3ZSBoYXZlIHRvIHR5cGUgb3V0IHRoaW5ncyBsaWtlIGJvaW50cywgYnV0IHRoYXQncyBhbHNvIHdoZXJlIEJveCdzIG1hZ2ljIGxpZXMuIEFsc28sIGJ5IHB1dHRpbmcgaW4gZXh0cmEgZWZmb3J0IGFyb3VuZCB0eXBlIGRlZmluaXRpb25zIGhlcmUsIHdlIGNhbiBza2lwIGV4dHJhIHJ1bnRpbWUgdHlwZWNoZWNrcyBpbiB0aGUgdHJhbnNmb3JtZXJzIGZvciBwZXJmb3JtYW5jZS5cblxuKi9cblxudHlwZSBOYXRCb2ludCA9IDEgfCAyIHwgMyB8IDQgfCA1IHwgNjtcbnR5cGUgSW50Qm9pbnQgPSAtNiB8IC01IHwgLTQgfCAtMyB8IC0yIHwgLTEgfCBOYXRCb2ludDtcbnR5cGUgRGlzcGxheSA9ICdub25lJyB8ICdmbGV4JyB8ICdibG9jaycgfCAnaW5saW5lQmxvY2snO1xudHlwZSBEaXJlY3Rpb24gPSAncm93JyB8ICdjb2x1bW4nO1xudHlwZSBDb2x1bW4gPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xudHlwZSBSZXNwb25zaXZlUHJvcHMgPSB7XG4gIGNvbHVtbj86IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMixcbiAgZGlzcGxheT86IGJvb2xlYW4gfCAnZmxleCcgfCAnZmxleENvbHVtbicgfCAnaW5saW5lQmxvY2snLFxufTtcbnR5cGUgTWFyZ2luID1cbiAgfCAtMTJcbiAgfCAtMTFcbiAgfCAtMTBcbiAgfCAtOVxuICB8IC04XG4gIHwgLTdcbiAgfCAtNlxuICB8IC01XG4gIHwgLTRcbiAgfCAtM1xuICB8IC0yXG4gIHwgLTFcbiAgfCAwXG4gIHwgMVxuICB8IDJcbiAgfCAzXG4gIHwgNFxuICB8IDVcbiAgfCA2XG4gIHwgN1xuICB8IDhcbiAgfCA5XG4gIHwgMTBcbiAgfCAxMVxuICB8IDEyO1xudHlwZSBQYWRkaW5nID0gMCB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcbnR5cGUgUHJvcFR5cGUgPSB7XG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT86IHsgX19zdHlsZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB9LFxuXG4gIHhzPzogUmVzcG9uc2l2ZVByb3BzLFxuICBzbT86IFJlc3BvbnNpdmVQcm9wcyxcbiAgbWQ/OiBSZXNwb25zaXZlUHJvcHMsXG4gIGxnPzogUmVzcG9uc2l2ZVByb3BzLFxuICBkZXByZWNhdGVkUGFkZGluZz86IE5hdEJvaW50IHwgeyB4PzogTmF0Qm9pbnQsIHk/OiBOYXRCb2ludCB9LFxuICBkZXByZWNhdGVkTWFyZ2luPzpcbiAgICB8IEludEJvaW50XG4gICAgfCB7XG4gICAgICAgIHRvcD86IEludEJvaW50LFxuICAgICAgICByaWdodD86IEludEJvaW50IHwgJ2F1dG8nLFxuICAgICAgICBib3R0b20/OiBJbnRCb2ludCxcbiAgICAgICAgbGVmdD86IEludEJvaW50IHwgJ2F1dG8nLFxuICAgICAgfSxcblxuICBkaXNwbGF5PzogRGlzcGxheSxcbiAgY29sdW1uPzogQ29sdW1uLFxuICBkaXJlY3Rpb24/OiBEaXJlY3Rpb24sXG4gIHNtRGlzcGxheT86IERpc3BsYXksXG4gIHNtQ29sdW1uPzogQ29sdW1uLFxuICBzbURpcmVjdGlvbj86IERpcmVjdGlvbixcbiAgbWREaXNwbGF5PzogRGlzcGxheSxcbiAgbWRDb2x1bW4/OiBDb2x1bW4sXG4gIG1kRGlyZWN0aW9uPzogRGlyZWN0aW9uLFxuICBsZ0Rpc3BsYXk/OiBEaXNwbGF5LFxuICBsZ0NvbHVtbj86IENvbHVtbixcbiAgbGdEaXJlY3Rpb24/OiBEaXJlY3Rpb24sXG5cbiAgYWxpZ25Db250ZW50PzogJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnYmV0d2VlbicgfCAnYXJvdW5kJyB8ICdzdHJldGNoJyxcbiAgYWxpZ25JdGVtcz86ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ2Jhc2VsaW5lJyB8ICdzdHJldGNoJyxcbiAgYWxpZ25TZWxmPzogJ2F1dG8nIHwgJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnYmFzZWxpbmUnIHwgJ3N0cmV0Y2gnLFxuICBib3R0b20/OiBib29sZWFuLFxuICBjb2xvcj86XG4gICAgfCAnYmx1ZSdcbiAgICB8ICdkYXJrR3JheSdcbiAgICB8ICdkYXJrV2FzaCdcbiAgICB8ICdlZ2dwbGFudCdcbiAgICB8ICdncmF5J1xuICAgIHwgJ2dyZWVuJ1xuICAgIHwgJ2xpZ2h0R3JheSdcbiAgICB8ICdsaWdodFdhc2gnXG4gICAgfCAnbWFyb29uJ1xuICAgIHwgJ21pZG5pZ2h0J1xuICAgIHwgJ25hdnknXG4gICAgfCAnb2xpdmUnXG4gICAgfCAnb3JhbmdlJ1xuICAgIHwgJ29yY2hpZCdcbiAgICB8ICdwaW5lJ1xuICAgIHwgJ3B1cnBsZSdcbiAgICB8ICdyZWQnXG4gICAgfCAndHJhbnNwYXJlbnQnXG4gICAgfCAnd2F0ZXJtZWxvbidcbiAgICB8ICd3aGl0ZScsXG4gIGZpdD86IGJvb2xlYW4sXG4gIGZsZXg/OiAnZ3JvdycgfCAnc2hyaW5rJyB8ICdub25lJyxcbiAgaGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nLFxuICBqdXN0aWZ5Q29udGVudD86ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ2JldHdlZW4nIHwgJ2Fyb3VuZCcsXG4gIGxlZnQ/OiBib29sZWFuLFxuXG4gIG1hcmdpbj86IE1hcmdpbixcbiAgbWFyZ2luVG9wPzogTWFyZ2luLFxuICBtYXJnaW5SaWdodD86IE1hcmdpbixcbiAgbWFyZ2luQm90dG9tPzogTWFyZ2luLFxuICBtYXJnaW5MZWZ0PzogTWFyZ2luLFxuXG4gIHNtTWFyZ2luPzogTWFyZ2luLFxuICBzbU1hcmdpblRvcD86IE1hcmdpbixcbiAgc21NYXJnaW5SaWdodD86IE1hcmdpbixcbiAgc21NYXJnaW5Cb3R0b20/OiBNYXJnaW4sXG4gIHNtTWFyZ2luTGVmdD86IE1hcmdpbixcblxuICBtZE1hcmdpbj86IE1hcmdpbixcbiAgbWRNYXJnaW5Ub3A/OiBNYXJnaW4sXG4gIG1kTWFyZ2luUmlnaHQ/OiBNYXJnaW4sXG4gIG1kTWFyZ2luQm90dG9tPzogTWFyZ2luLFxuICBtZE1hcmdpbkxlZnQ/OiBNYXJnaW4sXG5cbiAgbGdNYXJnaW4/OiBNYXJnaW4sXG4gIGxnTWFyZ2luVG9wPzogTWFyZ2luLFxuICBsZ01hcmdpblJpZ2h0PzogTWFyZ2luLFxuICBsZ01hcmdpbkJvdHRvbT86IE1hcmdpbixcbiAgbGdNYXJnaW5MZWZ0PzogTWFyZ2luLFxuXG4gIG1heEhlaWdodD86IG51bWJlciB8IHN0cmluZyxcbiAgbWF4V2lkdGg/OiBudW1iZXIgfCBzdHJpbmcsXG4gIG1pbkhlaWdodD86IG51bWJlciB8IHN0cmluZyxcbiAgbWluV2lkdGg/OiBudW1iZXIgfCBzdHJpbmcsXG5cbiAgb3ZlcmZsb3c/OiAndmlzaWJsZScgfCAnaGlkZGVuJyB8ICdzY3JvbGwnIHwgJ3Njcm9sbFgnIHwgJ3Njcm9sbFknIHwgJ2F1dG8nLFxuXG4gIHBhZGRpbmc/OiBQYWRkaW5nLFxuICBzbVBhZGRpbmc/OiBQYWRkaW5nLFxuICBtZFBhZGRpbmc/OiBQYWRkaW5nLFxuICBsZ1BhZGRpbmc/OiBQYWRkaW5nLFxuXG4gIHBhZGRpbmdYPzogUGFkZGluZyxcbiAgc21QYWRkaW5nWD86IFBhZGRpbmcsXG4gIG1kUGFkZGluZ1g/OiBQYWRkaW5nLFxuICBsZ1BhZGRpbmdYPzogUGFkZGluZyxcblxuICBwYWRkaW5nWT86IFBhZGRpbmcsXG4gIHNtUGFkZGluZ1k/OiBQYWRkaW5nLFxuICBtZFBhZGRpbmdZPzogUGFkZGluZyxcbiAgbGdQYWRkaW5nWT86IFBhZGRpbmcsXG5cbiAgcG9zaXRpb24/OiAnc3RhdGljJyB8ICdhYnNvbHV0ZScgfCAncmVsYXRpdmUnIHwgJ2ZpeGVkJyxcbiAgcmlnaHQ/OiBib29sZWFuLFxuICBzaGFwZT86XG4gICAgfCAnc3F1YXJlJ1xuICAgIHwgJ3JvdW5kZWQnXG4gICAgfCAncGlsbCdcbiAgICB8ICdjaXJjbGUnXG4gICAgfCAncm91bmRlZFRvcCdcbiAgICB8ICdyb3VuZGVkQm90dG9tJ1xuICAgIHwgJ3JvdW5kZWRMZWZ0J1xuICAgIHwgJ3JvdW5kZWRSaWdodCcsXG4gIHNocmluaz86IGJvb2xlYW4sXG4gIHRvcD86IGJvb2xlYW4sXG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nLFxuICB3cmFwPzogYm9vbGVhbixcbn07XG5cbi8vIC0tXG5cbi8qXG5cbiMgVHJhbnNmb3JtZXJzXG5cblRoaXMgaXMgd2hlcmUgdGhlIG1lYXQgYW5kIHRoZSBib25lcyBvZiBCb3gncyB0cmFuc2Zvcm1zIGFyZS4gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhlIERTTCBpbiBgLi90cmFuc2Zvcm1zLmpzYCwgYnV0IGJhc2ljYWxseSB0aGV5IGFyZSBhIHNtYWxsIGRlY2xhcmF0aXZlIHdheSBvZiBzcGVjaWZ5aW5nIGhvdyBhIHByb3BlcnR5IChpLmUuIGBtYXJnaW5Ub3A9ezR9YCkgZ2V0cyB0dXJuZWQgaW50byBhIENTUyBjbGFzcyAoYG1hcmdpblRvcDRgKS5cblxuVGhlcmUncyBhIGxpdHRsZSBwcmVhbWJsZSBoZXJlLCBidXQgaXQgY3VsbWluYXRlcyBpbiBhIGJpZyBvYmplY3QgbWFwcGluZyB0aGUgYWN0dWFsIHByb3BlcnR5IG5hbWVzIHRvIHRoZSB0cmFuc2Zvcm1lciB2YWx1ZXMuXG5cbiovXG5cbmNvbnN0IG1hcmdpblRvcCA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbWFyZ2luVG9wJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWFyZ2luUmlnaHQgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ21hcmdpblJpZ2h0JyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWFyZ2luQm90dG9tID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtYXJnaW5Cb3R0b20nKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBtYXJnaW5MZWZ0ID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtYXJnaW5MZWZ0JyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWFyZ2luID0gdW5pb24obWFyZ2luVG9wLCBtYXJnaW5Cb3R0b20sIG1hcmdpbkxlZnQsIG1hcmdpblJpZ2h0KTtcblxuY29uc3Qgc21NYXJnaW5Ub3AgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ3NtTWFyZ2luVG9wJyksIHdoaXRlc3BhY2UpO1xuY29uc3Qgc21NYXJnaW5SaWdodCA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnc21NYXJnaW5SaWdodCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IHNtTWFyZ2luQm90dG9tID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdzbU1hcmdpbkJvdHRvbScpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IHNtTWFyZ2luTGVmdCA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnc21NYXJnaW5MZWZ0JyksIHdoaXRlc3BhY2UpO1xuY29uc3Qgc21NYXJnaW4gPSB1bmlvbihcbiAgc21NYXJnaW5Ub3AsXG4gIHNtTWFyZ2luQm90dG9tLFxuICBzbU1hcmdpbkxlZnQsXG4gIHNtTWFyZ2luUmlnaHRcbik7XG5cbmNvbnN0IG1kTWFyZ2luVG9wID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtZE1hcmdpblRvcCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IG1kTWFyZ2luUmlnaHQgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ21kTWFyZ2luUmlnaHQnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBtZE1hcmdpbkJvdHRvbSA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbWRNYXJnaW5Cb3R0b20nKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBtZE1hcmdpbkxlZnQgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ21kTWFyZ2luTGVmdCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IG1kTWFyZ2luID0gdW5pb24oXG4gIG1kTWFyZ2luVG9wLFxuICBtZE1hcmdpbkJvdHRvbSxcbiAgbWRNYXJnaW5MZWZ0LFxuICBtZE1hcmdpblJpZ2h0XG4pO1xuXG5jb25zdCBsZ01hcmdpblRvcCA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbGdNYXJnaW5Ub3AnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBsZ01hcmdpblJpZ2h0ID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdsZ01hcmdpblJpZ2h0JyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbGdNYXJnaW5Cb3R0b20gPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ2xnTWFyZ2luQm90dG9tJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbGdNYXJnaW5MZWZ0ID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdsZ01hcmdpbkxlZnQnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBsZ01hcmdpbiA9IHVuaW9uKFxuICBsZ01hcmdpblRvcCxcbiAgbGdNYXJnaW5Cb3R0b20sXG4gIGxnTWFyZ2luTGVmdCxcbiAgbGdNYXJnaW5SaWdodFxuKTtcblxuY29uc3QgcGFkZGluZ1ggPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ3BhZGRpbmdYJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgcGFkZGluZ1kgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ3BhZGRpbmdZJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgcGFkZGluZyA9IHVuaW9uKHBhZGRpbmdYLCBwYWRkaW5nWSk7XG5cbmNvbnN0IHNtUGFkZGluZ1ggPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ3NtUGFkZGluZ1gnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBzbVBhZGRpbmdZID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdzbVBhZGRpbmdZJyksIHdoaXRlc3BhY2UpO1xuY29uc3Qgc21QYWRkaW5nID0gdW5pb24oc21QYWRkaW5nWCwgc21QYWRkaW5nWSk7XG5cbmNvbnN0IG1kUGFkZGluZ1ggPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ21kUGFkZGluZ1gnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBtZFBhZGRpbmdZID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtZFBhZGRpbmdZJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWRQYWRkaW5nID0gdW5pb24obWRQYWRkaW5nWCwgbWRQYWRkaW5nWSk7XG5cbmNvbnN0IGxnUGFkZGluZ1ggPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ2xnUGFkZGluZ1gnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBsZ1BhZGRpbmdZID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdsZ1BhZGRpbmdZJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbGdQYWRkaW5nID0gdW5pb24obGdQYWRkaW5nWCwgbGdQYWRkaW5nWSk7XG5cbi8qXG5cblRoZXNlIGZ1bmN0aW9ucyBhcmUgbGVnYWN5LiBJJ2QgbGlrZSB0byBnZXQgcmlkIG9mIG1vc3Qgb2YgdGhpcyBmaWxlJ3MgZGVwZW5kZW5jeSBvbiBpbXBvcnRpbmcgYC4vc3R5bGUuanNgIGRpcmVjdGx5IG9uY2UgdGhlc2UgYXJlIHJlbW92ZWQuXG5cbiovXG5cbmNvbnN0IHByZWZpeCA9IChwcmU6IHN0cmluZykgPT4gbWFwQ2xhc3NOYW1lKG5hbWUgPT4gYCR7cHJlfSR7bmFtZX1gKTtcbmNvbnN0IGRpc3BsYXkgPSB2YWx1ZSA9PiB7XG4gIHN3aXRjaCAodmFsdWUpIHtcbiAgICBjYXNlICdmbGV4JzpcbiAgICAgIHJldHVybiBmcm9tQ2xhc3NOYW1lKCdEaXNwbGF5RmxleCcsICdEaXJlY3Rpb25Sb3cnKTtcbiAgICBjYXNlICdmbGV4Q29sdW1uJzpcbiAgICAgIHJldHVybiBmcm9tQ2xhc3NOYW1lKCdEaXNwbGF5RmxleCcsICdEaXJlY3Rpb25Db2x1bW4nKTtcbiAgICBjYXNlICdpbmxpbmVCbG9jayc6XG4gICAgICByZXR1cm4gZnJvbUNsYXNzTmFtZSgnRGlzcGxheUlubGluZUJsb2NrJyk7XG4gICAgY2FzZSBmYWxzZTpcbiAgICAgIHJldHVybiBmcm9tQ2xhc3NOYW1lKCdEaXNwbGF5Tm9uZScpO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvKiBibG9jayAqL1xuICAgICAgcmV0dXJuIGZyb21DbGFzc05hbWUoJ0Rpc3BsYXlCbG9jaycpO1xuICB9XG59O1xuY29uc3QgY29sdW1uID0gcmFuZ2UoJ0NvbCcpO1xuXG5jb25zdCBmb3JtYXRJbnRCb2ludCA9IHggPT4gKHggPCAwID8gYG4ke01hdGguYWJzKHgpfWAgOiB4LnRvU3RyaW5nKCkpO1xuXG4vKlxuXG5JdCdzIHByZWZlcmFibGUgdG8gcHV0IG5ldyBwcm9wZXJ0aWVzIGludG8gdGhhdCBvYmplY3QgZGlyZWN0bHkganVzdCBzbyBpdCdzIGVhc2llciB0byByZWFkLlxuXG4qL1xuXG5jb25zdCBwcm9wVG9GbiA9IHtcbiAgeHM6IHZhbHVlID0+IHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gaWRlbnRpdHkoKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcENsYXNzTmFtZShjID0+IHN0eWxlc1tjXSkoXG4gICAgICBwcmVmaXgoJ3hzJykoXG4gICAgICAgIGNvbmNhdChbXG4gICAgICAgICAgdmFsdWUuY29sdW1uID8gY29sdW1uKHZhbHVlLmNvbHVtbikgOiBpZGVudGl0eSgpLFxuICAgICAgICAgIHR5cGVvZiB2YWx1ZS5kaXNwbGF5ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBkaXNwbGF5KHZhbHVlLmRpc3BsYXkpXG4gICAgICAgICAgICA6IGlkZW50aXR5KCksXG4gICAgICAgIF0pXG4gICAgICApXG4gICAgKTtcbiAgfSxcbiAgc206IHZhbHVlID0+IHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gaWRlbnRpdHkoKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcENsYXNzTmFtZShjID0+IHN0eWxlc1tjXSkoXG4gICAgICBwcmVmaXgoJ3NtJykoXG4gICAgICAgIGNvbmNhdChbXG4gICAgICAgICAgdmFsdWUuY29sdW1uID8gY29sdW1uKHZhbHVlLmNvbHVtbikgOiBpZGVudGl0eSgpLFxuICAgICAgICAgIHR5cGVvZiB2YWx1ZS5kaXNwbGF5ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBkaXNwbGF5KHZhbHVlLmRpc3BsYXkpXG4gICAgICAgICAgICA6IGlkZW50aXR5KCksXG4gICAgICAgIF0pXG4gICAgICApXG4gICAgKTtcbiAgfSxcbiAgbWQ6IHZhbHVlID0+IHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gaWRlbnRpdHkoKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcENsYXNzTmFtZShjID0+IHN0eWxlc1tjXSkoXG4gICAgICBwcmVmaXgoJ21kJykoXG4gICAgICAgIGNvbmNhdChbXG4gICAgICAgICAgdmFsdWUuY29sdW1uID8gY29sdW1uKHZhbHVlLmNvbHVtbikgOiBpZGVudGl0eSgpLFxuICAgICAgICAgIHR5cGVvZiB2YWx1ZS5kaXNwbGF5ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBkaXNwbGF5KHZhbHVlLmRpc3BsYXkpXG4gICAgICAgICAgICA6IGlkZW50aXR5KCksXG4gICAgICAgIF0pXG4gICAgICApXG4gICAgKTtcbiAgfSxcbiAgbGc6IHZhbHVlID0+IHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gaWRlbnRpdHkoKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcENsYXNzTmFtZShjID0+IHN0eWxlc1tjXSkoXG4gICAgICBwcmVmaXgoJ2xnJykoXG4gICAgICAgIGNvbmNhdChbXG4gICAgICAgICAgdmFsdWUuY29sdW1uID8gY29sdW1uKHZhbHVlLmNvbHVtbikgOiBpZGVudGl0eSgpLFxuICAgICAgICAgIHR5cGVvZiB2YWx1ZS5kaXNwbGF5ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBkaXNwbGF5KHZhbHVlLmRpc3BsYXkpXG4gICAgICAgICAgICA6IGlkZW50aXR5KCksXG4gICAgICAgIF0pXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICBkaXNwbGF5OiBtYXBwaW5nKHtcbiAgICBub25lOiBzdHlsZXMueHNEaXNwbGF5Tm9uZSxcbiAgICBmbGV4OiBzdHlsZXMueHNEaXNwbGF5RmxleCxcbiAgICBibG9jazogc3R5bGVzLnhzRGlzcGxheUJsb2NrLFxuICAgIGlubGluZUJsb2NrOiBzdHlsZXMueHNEaXNwbGF5SW5saW5lQmxvY2ssXG4gIH0pLFxuICBjb2x1bW46IGJpbmQocmFuZ2UoJ3hzQ29sJyksIHN0eWxlcyksXG4gIGRpcmVjdGlvbjogbWFwcGluZyh7XG4gICAgcm93OiBzdHlsZXMueHNEaXJlY3Rpb25Sb3csXG4gICAgY29sdW1uOiBzdHlsZXMueHNEaXJlY3Rpb25Db2x1bW4sXG4gIH0pLFxuXG4gIHNtRGlzcGxheTogbWFwcGluZyh7XG4gICAgbm9uZTogc3R5bGVzLnNtRGlzcGxheU5vbmUsXG4gICAgZmxleDogc3R5bGVzLnNtRGlzcGxheUZsZXgsXG4gICAgYmxvY2s6IHN0eWxlcy5zbURpc3BsYXlCbG9jayxcbiAgICBpbmxpbmVCbG9jazogc3R5bGVzLnNtRGlzcGxheUlubGluZUJsb2NrLFxuICB9KSxcbiAgc21Db2x1bW46IGJpbmQocmFuZ2UoJ3NtQ29sJyksIHN0eWxlcyksXG4gIHNtRGlyZWN0aW9uOiBtYXBwaW5nKHtcbiAgICByb3c6IHN0eWxlcy5zbURpcmVjdGlvblJvdyxcbiAgICBjb2x1bW46IHN0eWxlcy5zbURpcmVjdGlvbkNvbHVtbixcbiAgfSksXG5cbiAgbWREaXNwbGF5OiBtYXBwaW5nKHtcbiAgICBub25lOiBzdHlsZXMubWREaXNwbGF5Tm9uZSxcbiAgICBmbGV4OiBzdHlsZXMubWREaXNwbGF5RmxleCxcbiAgICBibG9jazogc3R5bGVzLm1kRGlzcGxheUJsb2NrLFxuICAgIGlubGluZUJsb2NrOiBzdHlsZXMubWREaXNwbGF5SW5saW5lQmxvY2ssXG4gIH0pLFxuICBtZENvbHVtbjogYmluZChyYW5nZSgnbWRDb2wnKSwgc3R5bGVzKSxcbiAgbWREaXJlY3Rpb246IG1hcHBpbmcoe1xuICAgIHJvdzogc3R5bGVzLm1kRGlyZWN0aW9uUm93LFxuICAgIGNvbHVtbjogc3R5bGVzLm1kRGlyZWN0aW9uQ29sdW1uLFxuICB9KSxcblxuICBsZ0Rpc3BsYXk6IG1hcHBpbmcoe1xuICAgIG5vbmU6IHN0eWxlcy5sZ0Rpc3BsYXlOb25lLFxuICAgIGZsZXg6IHN0eWxlcy5sZ0Rpc3BsYXlGbGV4LFxuICAgIGJsb2NrOiBzdHlsZXMubGdEaXNwbGF5QmxvY2ssXG4gICAgaW5saW5lQmxvY2s6IHN0eWxlcy5sZ0Rpc3BsYXlJbmxpbmVCbG9jayxcbiAgfSksXG4gIGxnQ29sdW1uOiBiaW5kKHJhbmdlKCdsZ0NvbCcpLCBzdHlsZXMpLFxuICBsZ0RpcmVjdGlvbjogbWFwcGluZyh7XG4gICAgcm93OiBzdHlsZXMubGdEaXJlY3Rpb25Sb3csXG4gICAgY29sdW1uOiBzdHlsZXMubGdEaXJlY3Rpb25Db2x1bW4sXG4gIH0pLFxuXG4gIGFsaWduQ29udGVudDogbWFwcGluZyh7XG4gICAgc3RhcnQ6IGxheW91dC5jb250ZW50U3RhcnQsXG4gICAgZW5kOiBsYXlvdXQuY29udGVudEVuZCxcbiAgICBjZW50ZXI6IGxheW91dC5jb250ZW50Q2VudGVyLFxuICAgIGJldHdlZW46IGxheW91dC5jb250ZW50QmV0d2VlbixcbiAgICBhcm91bmQ6IGxheW91dC5jb250ZW50QXJvdW5kLFxuICAgIC8vIGRlZmF1bHQ6IHN0cmV0Y2hcbiAgfSksXG4gIGFsaWduSXRlbXM6IG1hcHBpbmcoe1xuICAgIHN0YXJ0OiBsYXlvdXQuaXRlbXNTdGFydCxcbiAgICBlbmQ6IGxheW91dC5pdGVtc0VuZCxcbiAgICBjZW50ZXI6IGxheW91dC5pdGVtc0NlbnRlcixcbiAgICBiYXNlbGluZTogbGF5b3V0Lml0ZW1zQmFzZWxpbmUsXG4gICAgLy8gZGVmYXVsdDogc3RyZXRjaFxuICB9KSxcbiAgYWxpZ25TZWxmOiBtYXBwaW5nKHtcbiAgICBzdGFydDogbGF5b3V0LnNlbGZTdGFydCxcbiAgICBlbmQ6IGxheW91dC5zZWxmRW5kLFxuICAgIGNlbnRlcjogbGF5b3V0LnNlbGZDZW50ZXIsXG4gICAgYmFzZWxpbmU6IGxheW91dC5zZWxmQmFzZWxpbmUsXG4gICAgc3RyZXRjaDogbGF5b3V0LnNlbGZTdHJldGNoLFxuICAgIC8vIGRlZmF1bHQ6IGF1dG9cbiAgfSksXG4gIGJvdHRvbTogdG9nZ2xlKGxheW91dC5ib3R0b20wKSxcbiAgY29sb3I6IG1hcHBpbmcoe1xuICAgIGJsdWU6IGNvbG9ycy5ibHVlQmcsXG4gICAgZGFya0dyYXk6IGNvbG9ycy5kYXJrR3JheUJnLFxuICAgIHBpbmU6IGNvbG9ycy5waW5lQmcsXG4gICAgZ3JheTogY29sb3JzLmdyYXlCZyxcbiAgICByZWQ6IGNvbG9ycy5yZWRCZyxcbiAgICBvbGl2ZTogY29sb3JzLm9saXZlQmcsXG4gICAgbGlnaHRHcmF5OiBjb2xvcnMubGlnaHRHcmF5QmcsXG4gICAgd2hpdGU6IGNvbG9ycy53aGl0ZUJnLFxuICAgIG9yYW5nZTogY29sb3JzLm9yYW5nZUJnLFxuICAgIGdyZWVuOiBjb2xvcnMuZ3JlZW5CZyxcbiAgICBuYXZ5OiBjb2xvcnMubmF2eUJnLFxuICAgIG1pZG5pZ2h0OiBjb2xvcnMubWlkbmlnaHRCZyxcbiAgICBwdXJwbGU6IGNvbG9ycy5wdXJwbGVCZyxcbiAgICBvcmNoaWQ6IGNvbG9ycy5vcmNoaWRCZyxcbiAgICBlZ2dwbGFudDogY29sb3JzLmVnZ3BsYW50QmcsXG4gICAgbWFyb29uOiBjb2xvcnMubWFyb29uQmcsXG4gICAgd2F0ZXJtZWxvbjogY29sb3JzLndhdGVybWVsb25CZyxcbiAgICBsaWdodFdhc2g6IGNvbG9ycy5saWdodFdhc2hCZyxcbiAgICBkYXJrV2FzaDogY29sb3JzLmRhcmtXYXNoQmcsXG4gICAgLy8gZGVmYXVsdDogdHJhbnNwYXJlbnRcbiAgfSksXG4gIGZpdDogdG9nZ2xlKGxheW91dC5maXQpLFxuICBmbGV4OiBtYXBwaW5nKHtcbiAgICBncm93OiBsYXlvdXQuZmxleEdyb3csXG4gICAgbm9uZTogbGF5b3V0LmZsZXhOb25lLFxuICAgIC8vIGRlZmF1bHQ6IHNocmlua1xuICB9KSxcbiAgaGVpZ2h0OiBoZWlnaHQgPT4gZnJvbUlubGluZVN0eWxlKHsgaGVpZ2h0IH0pLFxuICBqdXN0aWZ5Q29udGVudDogbWFwcGluZyh7XG4gICAgZW5kOiBsYXlvdXQuanVzdGlmeUVuZCxcbiAgICBjZW50ZXI6IGxheW91dC5qdXN0aWZ5Q2VudGVyLFxuICAgIGJldHdlZW46IGxheW91dC5qdXN0aWZ5QmV0d2VlbixcbiAgICBhcm91bmQ6IGxheW91dC5qdXN0aWZ5QXJvdW5kLFxuICAgIC8vIGRlZmF1bHQ6IHN0YXJ0XG4gIH0pLFxuICBsZWZ0OiB0b2dnbGUobGF5b3V0LmxlZnQwKSxcbiAgZGVwcmVjYXRlZE1hcmdpbjogdmFsdWUgPT4ge1xuICAgIGxldCBtdCA9IGlkZW50aXR5KCk7XG4gICAgbGV0IG1iID0gaWRlbnRpdHkoKTtcbiAgICBsZXQgbWwgPSBpZGVudGl0eSgpO1xuICAgIGxldCBtciA9IGlkZW50aXR5KCk7XG4gICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIHJldHVybiBmcm9tQ2xhc3NOYW1lKHdoaXRlc3BhY2VMZWdhY3lbYG0ke2Zvcm1hdEludEJvaW50KHZhbHVlKX1gXSk7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAodmFsdWUudG9wKSB7XG4gICAgICAgICAgbXQgPSBmcm9tQ2xhc3NOYW1lKFxuICAgICAgICAgICAgd2hpdGVzcGFjZUxlZ2FjeVtgbXQke2Zvcm1hdEludEJvaW50KHZhbHVlLnRvcCl9YF1cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmJvdHRvbSkge1xuICAgICAgICAgIG1iID0gZnJvbUNsYXNzTmFtZShcbiAgICAgICAgICAgIHdoaXRlc3BhY2VMZWdhY3lbYG1iJHtmb3JtYXRJbnRCb2ludCh2YWx1ZS5ib3R0b20pfWBdXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZWZ0KSB7XG4gICAgICAgICAgbWwgPSBmcm9tQ2xhc3NOYW1lKFxuICAgICAgICAgICAgdmFsdWUubGVmdCA9PT0gJ2F1dG8nXG4gICAgICAgICAgICAgID8gd2hpdGVzcGFjZUxlZ2FjeS5tbEF1dG9cbiAgICAgICAgICAgICAgOiB3aGl0ZXNwYWNlTGVnYWN5W2BtbCR7Zm9ybWF0SW50Qm9pbnQodmFsdWUubGVmdCl9YF1cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLnJpZ2h0KSB7XG4gICAgICAgICAgbXIgPSBmcm9tQ2xhc3NOYW1lKFxuICAgICAgICAgICAgdmFsdWUucmlnaHQgPT09ICdhdXRvJ1xuICAgICAgICAgICAgICA/IHdoaXRlc3BhY2VMZWdhY3kubXJBdXRvXG4gICAgICAgICAgICAgIDogd2hpdGVzcGFjZUxlZ2FjeVtgbXIke2Zvcm1hdEludEJvaW50KHZhbHVlLnJpZ2h0KX1gXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmNhdChbbXQsIG1iLCBtbCwgbXJdKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBpZGVudGl0eSgpO1xuICAgIH1cbiAgfSxcbiAgbWFyZ2luLFxuICBtYXJnaW5Ub3AsXG4gIG1hcmdpblJpZ2h0LFxuICBtYXJnaW5Cb3R0b20sXG4gIG1hcmdpbkxlZnQsXG4gIHNtTWFyZ2luLFxuICBzbU1hcmdpblRvcCxcbiAgc21NYXJnaW5SaWdodCxcbiAgc21NYXJnaW5Cb3R0b20sXG4gIHNtTWFyZ2luTGVmdCxcbiAgbWRNYXJnaW4sXG4gIG1kTWFyZ2luVG9wLFxuICBtZE1hcmdpblJpZ2h0LFxuICBtZE1hcmdpbkJvdHRvbSxcbiAgbWRNYXJnaW5MZWZ0LFxuICBsZ01hcmdpbixcbiAgbGdNYXJnaW5Ub3AsXG4gIGxnTWFyZ2luUmlnaHQsXG4gIGxnTWFyZ2luQm90dG9tLFxuICBsZ01hcmdpbkxlZnQsXG4gIG1heEhlaWdodDogbWF4SGVpZ2h0ID0+IGZyb21JbmxpbmVTdHlsZSh7IG1heEhlaWdodCB9KSxcbiAgbWF4V2lkdGg6IG1heFdpZHRoID0+IGZyb21JbmxpbmVTdHlsZSh7IG1heFdpZHRoIH0pLFxuICBtaW5IZWlnaHQ6IG1pbkhlaWdodCA9PiBmcm9tSW5saW5lU3R5bGUoeyBtaW5IZWlnaHQgfSksXG4gIG1pbldpZHRoOiBtaW5XaWR0aCA9PiBmcm9tSW5saW5lU3R5bGUoeyBtaW5XaWR0aCB9KSxcbiAgb3ZlcmZsb3c6IG1hcHBpbmcoe1xuICAgIGhpZGRlbjogbGF5b3V0Lm92ZXJmbG93SGlkZGVuLFxuICAgIHNjcm9sbDogbGF5b3V0Lm92ZXJmbG93U2Nyb2xsLFxuICAgIGF1dG86IGxheW91dC5vdmVyZmxvd0F1dG8sXG4gICAgc2Nyb2xsWDogbGF5b3V0Lm92ZXJmbG93U2Nyb2xsWCxcbiAgICBzY3JvbGxZOiBsYXlvdXQub3ZlcmZsb3dTY3JvbGxZLFxuICAgIC8vIGRlZmF1bHQ6IHZpc2libGVcbiAgfSksXG4gIGRlcHJlY2F0ZWRQYWRkaW5nOiB2YWx1ZSA9PiB7XG4gICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIHJldHVybiBmcm9tQ2xhc3NOYW1lKHdoaXRlc3BhY2VMZWdhY3lbYHAke3ZhbHVlfWBdKTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiBjb25jYXQoW1xuICAgICAgICAgIHZhbHVlLnhcbiAgICAgICAgICAgID8gZnJvbUNsYXNzTmFtZSh3aGl0ZXNwYWNlTGVnYWN5W2BweCR7dmFsdWUueH1gXSlcbiAgICAgICAgICAgIDogaWRlbnRpdHkoKSxcbiAgICAgICAgICB2YWx1ZS55XG4gICAgICAgICAgICA/IGZyb21DbGFzc05hbWUod2hpdGVzcGFjZUxlZ2FjeVtgcHkke3ZhbHVlLnl9YF0pXG4gICAgICAgICAgICA6IGlkZW50aXR5KCksXG4gICAgICAgIF0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGlkZW50aXR5KCk7XG4gICAgfVxuICB9LFxuICBwYWRkaW5nLFxuICBwYWRkaW5nWCxcbiAgcGFkZGluZ1ksXG4gIHNtUGFkZGluZyxcbiAgc21QYWRkaW5nWCxcbiAgc21QYWRkaW5nWSxcbiAgbWRQYWRkaW5nLFxuICBtZFBhZGRpbmdYLFxuICBtZFBhZGRpbmdZLFxuICBsZ1BhZGRpbmcsXG4gIGxnUGFkZGluZ1gsXG4gIGxnUGFkZGluZ1ksXG4gIHBvc2l0aW9uOiBtYXBwaW5nKHtcbiAgICBhYnNvbHV0ZTogbGF5b3V0LmFic29sdXRlLFxuICAgIHJlbGF0aXZlOiBsYXlvdXQucmVsYXRpdmUsXG4gICAgZml4ZWQ6IGxheW91dC5maXhlZCxcbiAgICAvLyBkZWZhdWx0OiBzdGF0aWNcbiAgfSksXG4gIHJpZ2h0OiB0b2dnbGUobGF5b3V0LnJpZ2h0MCksXG4gIHNoYXBlOiBtYXBwaW5nKHtcbiAgICBjaXJjbGU6IGJvcmRlcnMuY2lyY2xlLFxuICAgIHBpbGw6IGJvcmRlcnMucGlsbCxcbiAgICByb3VuZGVkOiBib3JkZXJzLnJvdW5kZWQsXG4gICAgcm91bmRlZEJvdHRvbTogYm9yZGVycy5yb3VuZGVkQm90dG9tLFxuICAgIHJvdW5kZWRMZWZ0OiBib3JkZXJzLnJvdW5kZWRMZWZ0LFxuICAgIHJvdW5kZWRSaWdodDogYm9yZGVycy5yb3VuZGVkUmlnaHQsXG4gICAgcm91bmRlZFRvcDogYm9yZGVycy5yb3VuZGVkVG9wLFxuICAgIC8vIGRlZmF1bHQ6IHNxdWFyZVxuICB9KSxcbiAgdG9wOiB0b2dnbGUobGF5b3V0LnRvcDApLFxuICB3aWR0aDogd2lkdGggPT4gZnJvbUlubGluZVN0eWxlKHsgd2lkdGggfSksXG4gIHdyYXA6IHRvZ2dsZShsYXlvdXQuZmxleFdyYXApLFxuICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlOiB2YWx1ZSA9PlxuICAgIHZhbHVlICYmIHZhbHVlLl9fc3R5bGUgPyBmcm9tSW5saW5lU3R5bGUodmFsdWUuX19zdHlsZSkgOiBpZGVudGl0eSgpLFxufTtcblxuLypcblxuIyBUaGUgQ29tcG9uZW50XG5cbiovXG5cbmNvbnN0IGNvbnRhaW5zID0gKGtleSwgYXJyKSA9PiBhcnIuaW5kZXhPZihrZXkpID49IDA7XG5jb25zdCBvbWl0ID0gKGtleXMsIG9iaikgPT5cbiAgT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywgaykgPT4ge1xuICAgIGlmIChjb250YWlucyhrLCBrZXlzKSkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFjYyxcbiAgICAgIFtrXTogb2JqW2tdLFxuICAgIH07XG4gIH0sIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm94KHsgY2hpbGRyZW4sIC4uLnByb3BzIH06IFByb3BUeXBlKSB7XG4gIC8vIEZsb3cgY2FuJ3QgcmVhc29uIGFib3V0IHRoZSBjb25zdGFudCBuYXR1cmUgb2YgT2JqZWN0LmtleXMgc28gd2UgY2FuJ3QgdXNlXG4gIC8vIGEgZnVuY3Rpb25hbCAocmVkdWNlKSBzdHlsZSBoZXJlLlxuXG4gIC8vIEJveCBpcyBhIFwicGFzcy10aHJvdWdoXCIgY29tcG9uZW50LCBtZWFuaW5nIHRoYXQgaWYgeW91IHBhc3MgcHJvcGVydGllcyB0b1xuICAvLyBpdCB0aGF0IGl0IGRvZXNuJ3Qga25vdyBhYm91dCAoYGFyaWEtbGFiZWxgIGZvciBpbnN0YW5jZSkgaXQgcGFzc2VzXG4gIC8vIGRpcmVjdGx5IGJhY2sgdG8gdGhlIHVuZGVybHlpbmcgYDxkaXYvPmAuIFRoYXQncyBnZW5lcmFsbHkgdXNlZnVsLCBidXRcbiAgLy8gd2UnZCBhbHNvIGxpa2UgdG8gc3RyaXAgb3V0IGEgZmV3IG5hdWdodHkgcHJvcGVydGllcyB0aGF0IGJyZWFrIHN0eWxlXG4gIC8vIGVuY2Fwc3VsYXRpb24gKGNsYXNzTmFtZSwgc3R5bGUpIG9yIGFjY2Vzc2liaWxpdHkgKG9uQ2xpY2spLlxuICBsZXQgYmxhY2tsaXN0ID0gWydvbkNsaWNrJywgJ2NsYXNzTmFtZScsICdzdHlsZSddO1xuXG4gIC8vIEFsbCBCb3gncyBhcmUgYm94LXNpemVkIGJ5IGRlZmF1bHQsIHNvIHdlIHN0YXJ0IG9mZiBidWlsZGluZyB1cCB0aGUgc3R5bGVzXG4gIC8vIHRvIGJlIGFwcGxpZWQgd2l0aCBhIEJveCBiYXNlIGNsYXNzLlxuICBsZXQgcyA9IGZyb21DbGFzc05hbWUoc3R5bGVzLmJveCk7XG5cbiAgLy8gVGhpcyBsb29wcyB0aHJvdWdoIGVhY2ggcHJvcGVydHkgYW5kIGlmIGl0IGV4aXN0cyBpbiB0aGUgcHJldmlvdXNseVxuICAvLyBkZWZpbmVkIHRyYW5zZm9ybSBtYXAsIGNvbmNhdGVudGVzIHRoZSByZXN1bHRpbmcgc3R5bGVzIHRvIHRoZSBiYXNlXG4gIC8vIHN0eWxlcy4gSWYgdGhlcmUncyBhIG1hdGNoLCB3ZSBhbHNvIGRvbid0IHBhc3MgdGhyb3VnaCB0aGF0IHByb3BlcnR5LiBUaGlzXG4gIC8vIG1lYW5zIEJveCdzIHJ1bnRpbWUgaXMgb25seSBkZXBlbmRlbnQgb24gdGhlIG51bWJlciBvZiBwcm9wZXJ0aWVzIHBhc3NlZFxuICAvLyB0byBpdCAod2hpY2ggaXMgdHlwaWNhbGx5IHNtYWxsKSBpbnN0ZWFkIG9mIHRoZSB0b3RhbCBudW1iZXIgb2YgcG9zc2libGVcbiAgLy8gcHJvcGVydGllcyAofjMwIG9yIHNvKS4gV2hpbGUgaXQgbWF5IH5mZWVsfiBsaWtlIEJveCBpcyBpbm5lZmZpY2llbnQsIGl0c1xuICAvLyBiaWdnZXN0IHBlcmZvcm1hbmNlIGltcGFjdCBpcyBvbiBzdGFydHVwIHRpbWUgYmVjYXVzZSB0aGVyZSdzIHNvIG11Y2ggY29kZVxuICAvLyBoZXJlLlxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICBmb3IgKGNvbnN0IHByb3AgaW4gcHJvcHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BUb0ZuLCBwcm9wKSkge1xuICAgICAgY29uc3QgZm4gPSBwcm9wVG9Gbltwcm9wXTtcbiAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcF07XG4gICAgICBibGFja2xpc3QgPSBibGFja2xpc3QuY29uY2F0KHByb3ApO1xuICAgICAgcyA9IGNvbmNhdChbcywgZm4odmFsdWUpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQW5kLi4uIG1hZ2ljIVxuICByZXR1cm4gKFxuICAgIDxkaXYgey4uLm9taXQoYmxhY2tsaXN0LCBwcm9wcyl9IHsuLi50b1Byb3BzKHMpfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLypcblxuIyBQcm9wVHlwZXNcblxuQW5kIHdlJ3JlIGRvbmUgaGVyZSA6KVxuXG4qL1xuXG5jb25zdCBDb2x1bW5Qcm9wVHlwZSA9IFByb3BUeXBlcy5vbmVPZihbXG4gIDAsXG4gIDEsXG4gIDIsXG4gIDMsXG4gIDQsXG4gIDUsXG4gIDYsXG4gIDcsXG4gIDgsXG4gIDksXG4gIDEwLFxuICAxMSxcbiAgMTIsXG5dKTtcblxuY29uc3QgTWFyZ2luUHJvcFR5cGUgPSBQcm9wVHlwZXMub25lT2YoW1xuICAtMTIsXG4gIC0xMSxcbiAgLTEwLFxuICAtOSxcbiAgLTgsXG4gIC03LFxuICAtNixcbiAgLTUsXG4gIC00LFxuICAtMyxcbiAgLTIsXG4gIC0xLFxuICAwLFxuICAxLFxuICAyLFxuICAzLFxuICA0LFxuICA1LFxuICA2LFxuICA3LFxuICA4LFxuICA5LFxuICAxMCxcbiAgMTEsXG4gIDEyLFxuXSk7XG5cbmNvbnN0IFBhZGRpbmdQcm9wVHlwZSA9IFByb3BUeXBlcy5vbmVPZihbXG4gIDAsXG4gIDEsXG4gIDIsXG4gIDMsXG4gIDQsXG4gIDUsXG4gIDYsXG4gIDcsXG4gIDgsXG4gIDksXG4gIDEwLFxuICAxMSxcbiAgMTIsXG5dKTtcblxuQm94LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlOiBQcm9wVHlwZXMuZXhhY3Qoe1xuICAgIF9fc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIH0pLFxuXG4gIHhzOiBQcm9wVHlwZXMuZXhhY3Qoe1xuICAgIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydmbGV4JywgJ2ZsZXhDb2x1bW4nLCAnaW5saW5lQmxvY2snXSksXG4gICAgXSksXG4gICAgY29sdW1uOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgc206IFByb3BUeXBlcy5leGFjdCh7XG4gICAgZGlzcGxheTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2ZsZXgnLCAnZmxleENvbHVtbicsICdpbmxpbmVCbG9jayddKSxcbiAgICBdKSxcbiAgICBjb2x1bW46IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxuICBtZDogUHJvcFR5cGVzLmV4YWN0KHtcbiAgICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnZmxleCcsICdmbGV4Q29sdW1uJywgJ2lubGluZUJsb2NrJ10pLFxuICAgIF0pLFxuICAgIGNvbHVtbjogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIGxnOiBQcm9wVHlwZXMuZXhhY3Qoe1xuICAgIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydmbGV4JywgJ2ZsZXhDb2x1bW4nLCAnaW5saW5lQmxvY2snXSksXG4gICAgXSksXG4gICAgY29sdW1uOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgZGVwcmVjYXRlZE1hcmdpbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgdG9wOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgYm90dG9tOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbGVmdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKV0pLFxuICAgICAgcmlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSldKSxcbiAgICB9KSxcbiAgXSksXG4gIGRlcHJlY2F0ZWRQYWRkaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgeTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB9KSxcbiAgXSksXG5cbiAgZGlzcGxheTogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdmbGV4JywgJ2Jsb2NrJywgJ2lubGluZUJsb2NrJ10pLFxuICBkaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ3JvdycsICdjb2x1bW4nXSksXG4gIGNvbHVtbjogQ29sdW1uUHJvcFR5cGUsXG5cbiAgc21EaXNwbGF5OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ2ZsZXgnLCAnYmxvY2snLCAnaW5saW5lQmxvY2snXSksXG4gIHNtRGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydyb3cnLCAnY29sdW1uJ10pLFxuICBzbUNvbHVtbjogQ29sdW1uUHJvcFR5cGUsXG5cbiAgbWREaXNwbGF5OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ2ZsZXgnLCAnYmxvY2snLCAnaW5saW5lQmxvY2snXSksXG4gIG1kRGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydyb3cnLCAnY29sdW1uJ10pLFxuICBtZENvbHVtbjogQ29sdW1uUHJvcFR5cGUsXG5cbiAgbGdEaXNwbGF5OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ2ZsZXgnLCAnYmxvY2snLCAnaW5saW5lQmxvY2snXSksXG4gIGxnRGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydyb3cnLCAnY29sdW1uJ10pLFxuICBsZ0NvbHVtbjogQ29sdW1uUHJvcFR5cGUsXG5cbiAgYWxpZ25Db250ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdzdGFydCcsXG4gICAgJ2VuZCcsXG4gICAgJ2NlbnRlcicsXG4gICAgJ2JldHdlZW4nLFxuICAgICdhcm91bmQnLFxuICAgICdzdHJldGNoJyxcbiAgXSksXG4gIGFsaWduSXRlbXM6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3N0YXJ0JyxcbiAgICAnZW5kJyxcbiAgICAnY2VudGVyJyxcbiAgICAnYmFzZWxpbmUnLFxuICAgICdzdHJldGNoJyxcbiAgXSksXG4gIGFsaWduU2VsZjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnYXV0bycsXG4gICAgJ3N0YXJ0JyxcbiAgICAnZW5kJyxcbiAgICAnY2VudGVyJyxcbiAgICAnYmFzZWxpbmUnLFxuICAgICdzdHJldGNoJyxcbiAgXSksXG4gIGJvdHRvbTogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdibHVlJyxcbiAgICAnZGFya0dyYXknLFxuICAgICdkYXJrV2FzaCcsXG4gICAgJ2VnZ3BsYW50JyxcbiAgICAnZ3JheScsXG4gICAgJ2dyZWVuJyxcbiAgICAnbGlnaHRHcmF5JyxcbiAgICAnbGlnaHRXYXNoJyxcbiAgICAnbWFyb29uJyxcbiAgICAnbWlkbmlnaHQnLFxuICAgICduYXZ5JyxcbiAgICAnb2xpdmUnLFxuICAgICdvcmFuZ2UnLFxuICAgICdvcmNoaWQnLFxuICAgICdwaW5lJyxcbiAgICAncHVycGxlJyxcbiAgICAncmVkJyxcbiAgICAndHJhbnNwYXJlbnQnLFxuICAgICd3YXRlcm1lbG9uJyxcbiAgICAnd2hpdGUnLFxuICBdKSxcbiAgZml0OiBQcm9wVHlwZXMuYm9vbCxcbiAgZmxleDogUHJvcFR5cGVzLm9uZU9mKFsnZ3JvdycsICdzaHJpbmsnLCAnbm9uZSddKSxcbiAgZ3JvdzogUHJvcFR5cGVzLmJvb2wsXG4gIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBqdXN0aWZ5Q29udGVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnc3RhcnQnLFxuICAgICdlbmQnLFxuICAgICdjZW50ZXInLFxuICAgICdiZXR3ZWVuJyxcbiAgICAnYXJvdW5kJyxcbiAgXSksXG4gIGxlZnQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIG1hcmdpbjogTWFyZ2luUHJvcFR5cGUsXG4gIG1hcmdpblRvcDogTWFyZ2luUHJvcFR5cGUsXG4gIG1hcmdpblJpZ2h0OiBNYXJnaW5Qcm9wVHlwZSxcbiAgbWFyZ2luQm90dG9tOiBNYXJnaW5Qcm9wVHlwZSxcbiAgbWFyZ2luTGVmdDogTWFyZ2luUHJvcFR5cGUsXG5cbiAgc21NYXJnaW46IE1hcmdpblByb3BUeXBlLFxuICBzbU1hcmdpblRvcDogTWFyZ2luUHJvcFR5cGUsXG4gIHNtTWFyZ2luUmlnaHQ6IE1hcmdpblByb3BUeXBlLFxuICBzbU1hcmdpbkJvdHRvbTogTWFyZ2luUHJvcFR5cGUsXG4gIHNtTWFyZ2luTGVmdDogTWFyZ2luUHJvcFR5cGUsXG5cbiAgbWRNYXJnaW46IE1hcmdpblByb3BUeXBlLFxuICBtZE1hcmdpblRvcDogTWFyZ2luUHJvcFR5cGUsXG4gIG1kTWFyZ2luUmlnaHQ6IE1hcmdpblByb3BUeXBlLFxuICBtZE1hcmdpbkJvdHRvbTogTWFyZ2luUHJvcFR5cGUsXG4gIG1kTWFyZ2luTGVmdDogTWFyZ2luUHJvcFR5cGUsXG5cbiAgbGdNYXJnaW46IE1hcmdpblByb3BUeXBlLFxuICBsZ01hcmdpblRvcDogTWFyZ2luUHJvcFR5cGUsXG4gIGxnTWFyZ2luUmlnaHQ6IE1hcmdpblByb3BUeXBlLFxuICBsZ01hcmdpbkJvdHRvbTogTWFyZ2luUHJvcFR5cGUsXG4gIGxnTWFyZ2luTGVmdDogTWFyZ2luUHJvcFR5cGUsXG5cbiAgbWF4SGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIG1heFdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIG1pbkhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBtaW5XaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIG92ZXJmbG93OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICd2aXNpYmxlJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnc2Nyb2xsJyxcbiAgICAnc2Nyb2xsWCcsXG4gICAgJ3Njcm9sbFknLFxuICAgICdhdXRvJyxcbiAgXSksXG5cbiAgcGFkZGluZzogUGFkZGluZ1Byb3BUeXBlLFxuICBwYWRkaW5nWDogUGFkZGluZ1Byb3BUeXBlLFxuICBwYWRkaW5nWTogUGFkZGluZ1Byb3BUeXBlLFxuXG4gIHNtUGFkZGluZzogUGFkZGluZ1Byb3BUeXBlLFxuICBzbVBhZGRpbmdYOiBQYWRkaW5nUHJvcFR5cGUsXG4gIHNtUGFkZGluZ1k6IFBhZGRpbmdQcm9wVHlwZSxcblxuICBtZFBhZGRpbmc6IFBhZGRpbmdQcm9wVHlwZSxcbiAgbWRQYWRkaW5nWDogUGFkZGluZ1Byb3BUeXBlLFxuICBtZFBhZGRpbmdZOiBQYWRkaW5nUHJvcFR5cGUsXG5cbiAgbGdQYWRkaW5nOiBQYWRkaW5nUHJvcFR5cGUsXG4gIGxnUGFkZGluZ1g6IFBhZGRpbmdQcm9wVHlwZSxcbiAgbGdQYWRkaW5nWTogUGFkZGluZ1Byb3BUeXBlLFxuXG4gIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoWydzdGF0aWMnLCAnYWJzb2x1dGUnLCAncmVsYXRpdmUnLCAnZml4ZWQnXSksXG4gIHJpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hhcGU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3NxdWFyZScsXG4gICAgJ3JvdW5kZWQnLFxuICAgICdwaWxsJyxcbiAgICAnY2lyY2xlJyxcbiAgICAncm91bmRlZFRvcCcsXG4gICAgJ3JvdW5kZWRCb3R0b20nLFxuICAgICdyb3VuZGVkTGVmdCcsXG4gICAgJ3JvdW5kZWRSaWdodCcsXG4gIF0pLFxuICB0b3A6IFByb3BUeXBlcy5ib29sLFxuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB3cmFwOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0IGFkZCBmcm9tICcuL2FkZC5zdmcnO1xuaW1wb3J0IGFkZENpcmNsZSBmcm9tICcuL2FkZC1jaXJjbGUuc3ZnJztcbmltcG9ydCBhZGRQaW4gZnJvbSAnLi9hZGQtcGluLnN2Zyc7XG5pbXBvcnQgYXJyb3dCYWNrIGZyb20gJy4vYXJyb3ctYmFjay5zdmcnO1xuaW1wb3J0IGFycm93Q2lyY2xlRm9yd2FyZCBmcm9tICcuL2Fycm93LWNpcmNsZS1mb3J3YXJkLnN2Zyc7XG5pbXBvcnQgYXJyb3dEb3duIGZyb20gJy4vYXJyb3ctZG93bi5zdmcnO1xuaW1wb3J0IGFycm93Rm9yd2FyZCBmcm9tICcuL2Fycm93LWZvcndhcmQuc3ZnJztcbmltcG9ydCBhcnJvd1VwIGZyb20gJy4vYXJyb3ctdXAuc3ZnJztcbmltcG9ydCBiZWxsIGZyb20gJy4vYmVsbC5zdmcnO1xuaW1wb3J0IGNhbWVyYSBmcm9tICcuL2NhbWVyYS5zdmcnO1xuaW1wb3J0IGNhbmNlbCBmcm9tICcuL2NhbmNlbC5zdmcnO1xuaW1wb3J0IGNoZWNrIGZyb20gJy4vY2hlY2suc3ZnJztcbmltcG9ydCBjaGVja0NpcmNsZSBmcm9tICcuL2NoZWNrLWNpcmNsZS5zdmcnO1xuaW1wb3J0IGNpcmNsZU91dGxpbmUgZnJvbSAnLi9jaXJjbGUtb3V0bGluZS5zdmcnO1xuaW1wb3J0IGNsZWFyIGZyb20gJy4vY2xlYXIuc3ZnJztcbmltcG9ydCBjbG9jayBmcm9tICcuL2Nsb2NrLnN2Zyc7XG5pbXBvcnQgY29nIGZyb20gJy4vY29nLnN2Zyc7XG5pbXBvcnQgY29tcGFzcyBmcm9tICcuL2NvbXBhc3Muc3ZnJztcbmltcG9ydCBkYXNoIGZyb20gJy4vZGFzaC5zdmcnO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0LnN2Zyc7XG5pbXBvcnQgZWxsaXBzaXMgZnJvbSAnLi9lbGxpcHNpcy5zdmcnO1xuaW1wb3J0IGVsbGlwc2lzQ2lyY2xlT3V0bGluZSBmcm9tICcuL2VsbGlwc2lzLWNpcmNsZS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnLi9mYWNlYm9vay5zdmcnO1xuaW1wb3J0IGZhY2VIYXBweSBmcm9tICcuL2ZhY2UtaGFwcHkuc3ZnJztcbmltcG9ydCBmYWNlU2FkIGZyb20gJy4vZmFjZS1zYWQuc3ZnJztcbmltcG9ydCBmYWNlU21pbGV5IGZyb20gJy4vZmFjZS1zbWlsZXkuc3ZnJztcbmltcG9ydCBmaWx0ZXIgZnJvbSAnLi9maWx0ZXIuc3ZnJztcbmltcG9ydCBmbGFnIGZyb20gJy4vZmxhZy5zdmcnO1xuaW1wb3J0IGZsYXNobGlnaHQgZnJvbSAnLi9mbGFzaGxpZ2h0LnN2Zyc7XG5pbXBvcnQgZ2xvYmUgZnJvbSAnLi9nbG9iZS5zdmcnO1xuaW1wb3J0IGdyYXBoQmFyIGZyb20gJy4vZ3JhcGgtYmFyLnN2Zyc7XG5pbXBvcnQga25vb3AgZnJvbSAnLi9rbm9vcC5zdmcnO1xuaW1wb3J0IGxpZ2h0YnVsYiBmcm9tICcuL2xpZ2h0YnVsYi5zdmcnO1xuaW1wb3J0IGhhbmRsZSBmcm9tICcuL2hhbmRsZS5zdmcnO1xuaW1wb3J0IGhlYXJ0IGZyb20gJy4vaGVhcnQuc3ZnJztcbmltcG9ydCBoZWFydEJyb2tlbiBmcm9tICcuL2hlYXJ0LWJyb2tlbi5zdmcnO1xuaW1wb3J0IGxpbmsgZnJvbSAnLi9saW5rLnN2Zyc7XG5pbXBvcnQgbG9jYXRpb24gZnJvbSAnLi9sb2NhdGlvbi5zdmcnO1xuaW1wb3J0IGxvY2sgZnJvbSAnLi9sb2NrLnN2Zyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuc3ZnJztcbmltcG9ydCBtb3ZlIGZyb20gJy4vbW92ZS5zdmcnO1xuaW1wb3J0IHBhdXNlIGZyb20gJy4vcGF1c2Uuc3ZnJztcbmltcG9ydCBwZW9wbGUgZnJvbSAnLi9wZW9wbGUuc3ZnJztcbmltcG9ydCBwZXJzb24gZnJvbSAnLi9wZXJzb24uc3ZnJztcbmltcG9ydCBwZXJzb25BZGQgZnJvbSAnLi9wZXJzb24tYWRkLnN2Zyc7XG5pbXBvcnQgcGluIGZyb20gJy4vcGluLnN2Zyc7XG5pbXBvcnQgcGluSGlkZSBmcm9tICcuL3Bpbi1oaWRlLnN2Zyc7XG5pbXBvcnQgcGludGVyZXN0IGZyb20gJy4vcGludGVyZXN0LnN2Zyc7XG5pbXBvcnQgcGxheSBmcm9tICcuL3BsYXkuc3ZnJztcbmltcG9ydCBxdWVzdGlvbk1hcmsgZnJvbSAnLi9xdWVzdGlvbi1tYXJrLnN2Zyc7XG5pbXBvcnQgcmVtb3ZlIGZyb20gJy4vcmVtb3ZlLnN2Zyc7XG5pbXBvcnQgcmVwb3J0IGZyb20gJy4vcmVwb3J0LnN2Zyc7XG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vc2VhcmNoLnN2Zyc7XG5pbXBvcnQgc2VuZCBmcm9tICcuL3NlbmQuc3ZnJztcbmltcG9ydCBzaGFyZSBmcm9tICcuL3NoYXJlLnN2Zyc7XG5pbXBvcnQgc2hvcHBpbmdCYWcgZnJvbSAnLi9zaG9wcGluZy1iYWcuc3ZnJztcbmltcG9ydCBzbWlsZXkgZnJvbSAnLi9zbWlsZXkuc3ZnJztcbmltcG9ydCBzbWlsZXlPdXRsaW5lIGZyb20gJy4vc21pbGV5LW91dGxpbmUuc3ZnJztcbmltcG9ydCBzb3VuZCBmcm9tICcuL3NvdW5kLnN2Zyc7XG5pbXBvcnQgc3BlZWNoIGZyb20gJy4vc3BlZWNoLnN2Zyc7XG5pbXBvcnQgc3BlZWNoRWxsaXBzaXMgZnJvbSAnLi9zcGVlY2gtZWxsaXBzaXMuc3ZnJztcbmltcG9ydCB0YWcgZnJvbSAnLi90YWcuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGQsXG4gICdhZGQtY2lyY2xlJzogYWRkQ2lyY2xlLFxuICAnYWRkLXBpbic6IGFkZFBpbixcbiAgJ2Fycm93LWJhY2snOiBhcnJvd0JhY2ssXG4gICdhcnJvdy1jaXJjbGUtZm9yd2FyZCc6IGFycm93Q2lyY2xlRm9yd2FyZCxcbiAgJ2Fycm93LWRvd24nOiBhcnJvd0Rvd24sXG4gICdhcnJvdy1mb3J3YXJkJzogYXJyb3dGb3J3YXJkLFxuICAnYXJyb3ctdXAnOiBhcnJvd1VwLFxuICBiZWxsLFxuICBjYW1lcmEsXG4gIGNhbmNlbCxcbiAgY2hlY2ssXG4gICdjaGVjay1jaXJjbGUnOiBjaGVja0NpcmNsZSxcbiAgJ2NpcmNsZS1vdXRsaW5lJzogY2lyY2xlT3V0bGluZSxcbiAgY2xlYXIsXG4gIGNsb2NrLFxuICBjb2csXG4gIGNvbXBhc3MsXG4gIGRhc2gsXG4gIGVkaXQsXG4gIGVsbGlwc2lzLFxuICAnZWxsaXBzaXMtY2lyY2xlLW91dGxpbmUnOiBlbGxpcHNpc0NpcmNsZU91dGxpbmUsXG4gIGZhY2Vib29rLFxuICAnZmFjZS1oYXBweSc6IGZhY2VIYXBweSxcbiAgJ2ZhY2Utc2FkJzogZmFjZVNhZCxcbiAgJ2ZhY2Utc21pbGV5JzogZmFjZVNtaWxleSxcbiAgZmlsdGVyLFxuICBmbGFnLFxuICBmbGFzaGxpZ2h0LFxuICBnbG9iZSxcbiAgJ2dyYXBoLWJhcic6IGdyYXBoQmFyLFxuICBoYW5kbGUsXG4gIGhlYXJ0LFxuICAnaGVhcnQtYnJva2VuJzogaGVhcnRCcm9rZW4sXG4gIGtub29wLFxuICBsaWdodGJ1bGIsXG4gIGxpbmssXG4gIGxvY2F0aW9uLFxuICBsb2NrLFxuICBtZW51LFxuICBtb3ZlLFxuICBwYXVzZSxcbiAgcGVvcGxlLFxuICBwZXJzb24sXG4gICdwZXJzb24tYWRkJzogcGVyc29uQWRkLFxuICBwaW4sXG4gICdwaW4taGlkZSc6IHBpbkhpZGUsXG4gIHBpbnRlcmVzdCxcbiAgcGxheSxcbiAgJ3F1ZXN0aW9uLW1hcmsnOiBxdWVzdGlvbk1hcmssXG4gIHJlbW92ZSxcbiAgcmVwb3J0LFxuICBzZWFyY2gsXG4gICdzaG9wcGluZy1iYWcnOiBzaG9wcGluZ0JhZyxcbiAgc21pbGV5LFxuICAnc21pbGV5LW91dGxpbmUnOiBzbWlsZXlPdXRsaW5lLFxuICBzZW5kLFxuICBzaGFyZSxcbiAgc291bmQsXG4gIHNwZWVjaCxcbiAgJ3NwZWVjaC1lbGxpcHNpcyc6IHNwZWVjaEVsbGlwc2lzLFxuICB0YWcsXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JY29uLmNzcyc7XG5pbXBvcnQgaWNvbnMgZnJvbSAnLi9pY29ucyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL0NvbG9ycy5jc3MnO1xuXG50eXBlIFByb3BzID0ge1xuICBhY2Nlc3NpYmlsaXR5TGFiZWw6IHN0cmluZyxcbiAgY29sb3I/OlxuICAgIHwgJ2JsdWUnXG4gICAgfCAnZGFya0dyYXknXG4gICAgfCAnZWdncGxhbnQnXG4gICAgfCAnZ3JheSdcbiAgICB8ICdncmVlbidcbiAgICB8ICdsaWdodEdyYXknXG4gICAgfCAnbWFyb29uJ1xuICAgIHwgJ21pZG5pZ2h0J1xuICAgIHwgJ25hdnknXG4gICAgfCAnb2xpdmUnXG4gICAgfCAnb3JhbmdlJ1xuICAgIHwgJ29yY2hpZCdcbiAgICB8ICdwaW5lJ1xuICAgIHwgJ3B1cnBsZSdcbiAgICB8ICdyZWQnXG4gICAgfCAnd2F0ZXJtZWxvbidcbiAgICB8ICd3aGl0ZScsXG4gIGljb246ICRLZXlzPHR5cGVvZiBpY29ucz4sXG4gIGlubGluZT86IGJvb2xlYW4sXG4gIHNpemU/OiBudW1iZXIgfCBzdHJpbmcsXG59O1xuXG5jb25zdCBJY29uTmFtZXMgPSBPYmplY3Qua2V5cyhpY29ucyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb24ocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgYWNjZXNzaWJpbGl0eUxhYmVsLCBjb2xvciA9ICdncmF5JywgaWNvbiwgaW5saW5lLCBzaXplID0gMTYgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNzID0gY2xhc3NuYW1lcyhzdHlsZXMuaWNvbiwgY29sb3JzW2NvbG9yXSwge1xuICAgIFtzdHlsZXMuaWNvbkJsb2NrXTogIWlubGluZSxcbiAgfSk7XG5cbiAgY29uc3QgcGF0aCA9IGljb25zW2ljb25dO1xuXG4gIGNvbnN0IGFyaWFIaWRkZW4gPSBhY2Nlc3NpYmlsaXR5TGFiZWwgPT09ICcnID8gdHJ1ZSA6IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9e2NzfVxuICAgICAgaGVpZ2h0PXtzaXplfVxuICAgICAgd2lkdGg9e3NpemV9XG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIGFyaWEtaGlkZGVuPXthcmlhSGlkZGVufVxuICAgICAgYXJpYS1sYWJlbD17YWNjZXNzaWJpbGl0eUxhYmVsfVxuICAgICAgcm9sZT1cImltZ1wiXG4gICAgPlxuICAgICAgPHRpdGxlPnthY2Nlc3NpYmlsaXR5TGFiZWx9PC90aXRsZT5cbiAgICAgIDxwYXRoIGQ9e3BhdGh9IC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbkljb24uaWNvbnMgPSBJY29uTmFtZXM7XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICBhY2Nlc3NpYmlsaXR5TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ2JsdWUnLFxuICAgICdkYXJrR3JheScsXG4gICAgJ2VnZ3BsYW50JyxcbiAgICAnZ3JheScsXG4gICAgJ2dyZWVuJyxcbiAgICAnbGlnaHRHcmF5JyxcbiAgICAnbWFyb29uJyxcbiAgICAnbWlkbmlnaHQnLFxuICAgICduYXZ5JyxcbiAgICAnb2xpdmUnLFxuICAgICdvcmFuZ2UnLFxuICAgICdvcmNoaWQnLFxuICAgICdwaW5lJyxcbiAgICAncHVycGxlJyxcbiAgICAncmVkJyxcbiAgICAnd2F0ZXJtZWxvbicsXG4gICAgJ3doaXRlJyxcbiAgXSksXG4gIGljb246IFByb3BUeXBlcy5vbmVPZihJY29uTmFtZXMpLmlzUmVxdWlyZWQsXG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94L0JveCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW1hZ2UuY3NzJztcblxuY29uc3Qgc2hvdWxkU2NhbGVJbWFnZSA9IGZpdCA9PiBmaXQgPT09ICdjb3ZlcicgfHwgZml0ID09PSAnY29udGFpbic7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhbHQ6IHN0cmluZyxcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBjb2xvcjogc3RyaW5nLFxuICBmaXQ6ICdjb250YWluJyB8ICdjb3ZlcicgfCAnbm9uZScsXG4gIG5hdHVyYWxIZWlnaHQ6IG51bWJlcixcbiAgbmF0dXJhbFdpZHRoOiBudW1iZXIsXG4gIG9uRXJyb3I/OiAoKSA9PiB2b2lkLFxuICBvbkxvYWQ/OiAoKSA9PiB2b2lkLFxuICBzaXplcz86IHN0cmluZyxcbiAgc3JjOiBzdHJpbmcsXG4gIHNyY1NldD86IHN0cmluZyxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZml0OiBQcm9wVHlwZXMub25lT2YoWydjb250YWluJywgJ2NvdmVyJywgJ25vbmUnXSksXG4gICAgbmF0dXJhbEhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG5hdHVyYWxXaWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG9uRXJyb3I6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTG9hZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2l6ZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc3JjU2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgZml0OiAnbm9uZScsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHNob3VsZFNjYWxlSW1hZ2UodGhpcy5wcm9wcy5maXQpKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzKSB7XG4gICAgY29uc3QgeyBmaXQsIHNyYyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc2hvdWxkU2NhbGVJbWFnZShmaXQpICYmIHByZXZQcm9wcy5zcmMgIT09IHNyYykge1xuICAgICAgdGhpcy5sb2FkSW1hZ2UoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVMb2FkID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uTG9hZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkxvYWQoKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25FcnJvcikge1xuICAgICAgdGhpcy5wcm9wcy5vbkVycm9yKCk7XG4gICAgfVxuICB9O1xuXG4gIGxvYWRJbWFnZSgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gdGhpcy5oYW5kbGVMb2FkO1xuICAgICAgaW1hZ2Uub25lcnJvciA9IHRoaXMuaGFuZGxlRXJyb3I7XG4gICAgICBpbWFnZS5zcmMgPSB0aGlzLnByb3BzLnNyYztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWx0LFxuICAgICAgY29sb3IsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGZpdCxcbiAgICAgIG5hdHVyYWxIZWlnaHQsXG4gICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICBzaXplcyxcbiAgICAgIHNyYyxcbiAgICAgIHNyY1NldCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGlzU2NhbGVkSW1hZ2UgPSBzaG91bGRTY2FsZUltYWdlKGZpdCk7XG4gICAgY29uc3QgY2hpbGRDb250ZW50ID0gY2hpbGRyZW4gPyAoXG4gICAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiB0b3AgbGVmdCBib3R0b20gcmlnaHQgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Cb3g+XG4gICAgKSA6IG51bGw7XG5cbiAgICByZXR1cm4gaXNTY2FsZWRJbWFnZSA/IChcbiAgICAgIDxkaXZcbiAgICAgICAgYXJpYS1sYWJlbD17YWx0fVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tmaXRdfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke3NyY30nKWAsXG4gICAgICAgIH19XG4gICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgPlxuICAgICAgICB7Y2hpbGRDb250ZW50fVxuICAgICAgPC9kaXY+XG4gICAgKSA6IChcbiAgICAgIDxCb3hcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgICBfX3N0eWxlOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogYCR7bmF0dXJhbEhlaWdodCAvIG5hdHVyYWxXaWR0aCAqIDEwMH0lYCxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgYWx0PXthbHR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfVxuICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaGFuZGxlRXJyb3J9XG4gICAgICAgICAgb25Mb2FkPXt0aGlzLmhhbmRsZUxvYWR9XG4gICAgICAgICAgc2l6ZXM9e3NpemVzfVxuICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgIHNyY1NldD17c3JjU2V0fVxuICAgICAgICAvPlxuICAgICAgICB7Y2hpbGRDb250ZW50fVxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWFzay5jc3MnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBoZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmcsXG4gIHNoYXBlPzogJ2NpcmNsZScgfCAncm91bmRlZCcgfCAnc3F1YXJlJyxcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmcsXG4gIHdhc2g/OiBib29sZWFuLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hc2socHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHNoYXBlID0gJ3NxdWFyZScsIHdpZHRoLCBoZWlnaHQsIHdhc2ggPSBmYWxzZSB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5NYXNrLCBzdHlsZXNbc2hhcGVdKX0gc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHt3YXNoICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2FzaH0gLz59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbk1hc2sucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBzaGFwZTogUHJvcFR5cGVzLm9uZU9mKFsnY2lyY2xlJywgJ3JvdW5kZWQnLCAnc3F1YXJlJ10pLFxuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB3YXNoOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94L0JveCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uL0ljb24nO1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL0ltYWdlL0ltYWdlJztcbmltcG9ydCBNYXNrIGZyb20gJy4uL01hc2svTWFzayc7XG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tICcuLi9UeXBvZ3JhcGh5LmNzcyc7XG5cbmNvbnN0IFNxdWFyZSA9IChwcm9wczogKikgPT4gKFxuICA8Qm94IHsuLi5wcm9wc30gcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgIDxCb3hcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3sgX19zdHlsZTogeyBwYWRkaW5nQm90dG9tOiAnMTAwJScgfSB9fVxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgLz5cbiAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiB0b3AgbGVmdCBib3R0b20gcmlnaHQ+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Cb3g+XG4gIDwvQm94PlxuKTtcblxuY29uc3QgRGVmYXVsdEF2YXRhciA9ICh7IG5hbWUgfTogeyBuYW1lOiBzdHJpbmcgfSkgPT4ge1xuICBjb25zdCBmaXJzdEluaXRpYWwgPSBbLi4ubmFtZV1bMF0udG9VcHBlckNhc2UoKTtcbiAgcmV0dXJuIChcbiAgICA8U3F1YXJlIGNvbG9yPVwiZ3JheVwiIHNoYXBlPVwiY2lyY2xlXCI+XG4gICAgICA8c3ZnXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIHZpZXdCb3g9XCItNTAgLTUwIDEwMCAxMDBcIlxuICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgID5cbiAgICAgICAgPHRpdGxlPntuYW1lfTwvdGl0bGU+XG4gICAgICAgIDx0ZXh0XG4gICAgICAgICAgZm9udFNpemU9XCI1MHB4XCJcbiAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgZG9taW5hbnRCYXNlbGluZT1cImNlbnRyYWxcIlxuICAgICAgICAgIHRleHRBbmNob3I9XCJtaWRkbGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgICAgdHlwb2dyYXBoeS5hbnRpYWxpYXNlZCxcbiAgICAgICAgICAgIHR5cG9ncmFwaHkuc2Fuc1NlcmlmLFxuICAgICAgICAgICAgdHlwb2dyYXBoeS5sZWFkaW5nU21hbGwsXG4gICAgICAgICAgICB0eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxuICAgICAgICAgIF0uam9pbignICcpfVxuICAgICAgICA+XG4gICAgICAgICAge2ZpcnN0SW5pdGlhbH1cbiAgICAgICAgPC90ZXh0PlxuICAgICAgPC9zdmc+XG4gICAgPC9TcXVhcmU+XG4gICk7XG59O1xuXG50eXBlIEF2YXRhclByb3BzID0ge3xcbiAgbmFtZTogc3RyaW5nLFxuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnLFxuICBzcmM/OiBzdHJpbmcsXG4gIHZlcmlmaWVkPzogYm9vbGVhbixcbnx9O1xuXG5jb25zdCBzaXplcyA9IHtcbiAgc206IDI0LFxuICBtZDogNDAsXG4gIGxnOiA3Mixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF2YXRhcih7IG5hbWUsIHNpemUsIHNyYywgdmVyaWZpZWQgfTogQXZhdGFyUHJvcHMpIHtcbiAgY29uc3Qgd2lkdGggPSBzaXplID8gc2l6ZXNbc2l6ZV0gOiAnMTAwJSc7XG4gIGNvbnN0IGhlaWdodCA9IHNpemUgPyBzaXplc1tzaXplXSA6ICcnO1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17e1xuICAgICAgICBfX3N0eWxlOiB7XG4gICAgICAgICAgYm94U2hhZG93OiAnMCAwIDAgMnB4ICNmZmYnLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICBzaGFwZT1cImNpcmNsZVwiXG4gICAgPlxuICAgICAge3NyYyA/IChcbiAgICAgICAgPE1hc2sgc2hhcGU9XCJjaXJjbGVcIiB3YXNoPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgYWx0PXtuYW1lfVxuICAgICAgICAgICAgY29sb3I9XCIjRUZFRkVGXCJcbiAgICAgICAgICAgIG5hdHVyYWxIZWlnaHQ9ezF9XG4gICAgICAgICAgICBuYXR1cmFsV2lkdGg9ezF9XG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAvPlxuICAgICAgICA8L01hc2s+XG4gICAgICApIDogKFxuICAgICAgICA8RGVmYXVsdEF2YXRhciBuYW1lPXtuYW1lfSAvPlxuICAgICAgKX1cbiAgICAgIHt2ZXJpZmllZCAmJiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICB3aWR0aD1cIjIwJVwiXG4gICAgICAgICAgaGVpZ2h0PVwiMjAlXCJcbiAgICAgICAgICBtaW5XaWR0aD17OH1cbiAgICAgICAgICBtaW5IZWlnaHQ9ezh9XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17e1xuICAgICAgICAgICAgX19zdHlsZToge1xuICAgICAgICAgICAgICBib3R0b206ICc0JScsXG4gICAgICAgICAgICAgIHJpZ2h0OiAnNCUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICBzaGFwZT1cImNpcmNsZVwiXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7XG4gICAgICAgICAgICAgIF9fc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDAgMCAycHggI2ZmZicsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgaWNvbj1cImNoZWNrLWNpcmNsZVwiXG4gICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD1cIlwiXG4gICAgICAgICAgICAgIHNpemU9XCIxMDAlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuQXZhdGFyLnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtJywgJ21kJywgJ2xnJ10pLFxuICB2ZXJpZmllZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vQ29sb3JzLmNzcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dC5jc3MnO1xuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSAnLi4vVHlwb2dyYXBoeS5jc3MnO1xuXG5jb25zdCBTSVpFX1NDQUxFOiB7IFtzaXplOiA/c3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gIHhzOiAxLFxuICBzbTogMixcbiAgbWQ6IDMsXG4gIGxnOiA0LFxuICB4bDogNSxcbn07XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhbGlnbj86ICdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJyB8ICdqdXN0aWZ5JyxcbiAgYm9sZD86IGJvb2xlYW4sXG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgY29sb3I/OlxuICAgIHwgJ2dyZWVuJ1xuICAgIHwgJ3BpbmUnXG4gICAgfCAnb2xpdmUnXG4gICAgfCAnYmx1ZSdcbiAgICB8ICduYXZ5J1xuICAgIHwgJ21pZG5pZ2h0J1xuICAgIHwgJ3B1cnBsZSdcbiAgICB8ICdvcmNoaWQnXG4gICAgfCAnZWdncGxhbnQnXG4gICAgfCAnbWFyb29uJ1xuICAgIHwgJ3dhdGVybWVsb24nXG4gICAgfCAnb3JhbmdlJ1xuICAgIHwgJ2RhcmtHcmF5J1xuICAgIHwgJ2dyYXknXG4gICAgfCAnbGlnaHRHcmF5J1xuICAgIHwgJ3JlZCdcbiAgICB8ICd3aGl0ZScsXG4gIGlubGluZT86IGJvb2xlYW4sXG4gIGl0YWxpYz86IGJvb2xlYW4sXG4gIG92ZXJmbG93PzogJ25vcm1hbCcgfCAnYnJlYWtXb3JkJyxcbiAgc2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnLFxuICBzbVNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyxcbiAgbWRTaXplPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcsXG4gIGxnU2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnLFxuICBsZWFkaW5nPzogJ3RhbGwnIHwgJ3Nob3J0JyxcbiAgdHJ1bmNhdGU/OiBib29sZWFuLFxuICBfX2Rhbmdlcm91c2x5SW5jcmVhc2VMaW5lSGVpZ2h0PzogYm9vbGVhbixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0KHtcbiAgYWxpZ24gPSAnbGVmdCcsXG4gIGJvbGQgPSBmYWxzZSxcbiAgY2hpbGRyZW4sXG4gIGNvbG9yID0gJ2RhcmtHcmF5JyxcbiAgaW5saW5lID0gZmFsc2UsXG4gIGl0YWxpYyA9IGZhbHNlLFxuICBvdmVyZmxvdyA9ICdicmVha1dvcmQnLFxuICBzaXplID0gJ21kJyxcbiAgc21TaXplLFxuICBtZFNpemUsXG4gIGxnU2l6ZSxcbiAgbGVhZGluZyA9ICdzaG9ydCcsXG4gIHRydW5jYXRlID0gZmFsc2UsXG4gIF9fZGFuZ2Vyb3VzbHlJbmNyZWFzZUxpbmVIZWlnaHQgPSBmYWxzZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNjYWxlID0gU0laRV9TQ0FMRVtzaXplXTtcbiAgY29uc3Qgc21TY2FsZSA9IFNJWkVfU0NBTEVbc21TaXplXTtcbiAgY29uc3QgbWRTY2FsZSA9IFNJWkVfU0NBTEVbbWRTaXplXTtcbiAgY29uc3QgbGdTY2FsZSA9IFNJWkVfU0NBTEVbbGdTaXplXTtcblxuICBjb25zdCBjcyA9IGN4KFxuICAgIHN0eWxlcy5UZXh0LFxuICAgIHN0eWxlc1tgZm9udFNpemUke3NjYWxlfWBdLFxuICAgIGxnU2l6ZSAmJiBzdHlsZXNbYGxnRm9udFNpemUke2xnU2NhbGV9YF0sXG4gICAgbWRTaXplICYmIHN0eWxlc1tgbWRGb250U2l6ZSR7bWRTY2FsZX1gXSxcbiAgICBzbVNpemUgJiYgc3R5bGVzW2BzbUZvbnRTaXplJHtzbVNjYWxlfWBdLFxuICAgIGNvbG9yID09PSAnYmx1ZScgJiYgY29sb3JzLmJsdWUsXG4gICAgY29sb3IgPT09ICdkYXJrR3JheScgJiYgY29sb3JzLmRhcmtHcmF5LFxuICAgIGNvbG9yID09PSAnZWdncGxhbnQnICYmIGNvbG9ycy5lZ2dwbGFudCxcbiAgICBjb2xvciA9PT0gJ2dyYXknICYmIGNvbG9ycy5ncmF5LFxuICAgIGNvbG9yID09PSAnZ3JlZW4nICYmIGNvbG9ycy5ncmVlbixcbiAgICBjb2xvciA9PT0gJ2xpZ2h0R3JheScgJiYgY29sb3JzLmxpZ2h0R3JheSxcbiAgICBjb2xvciA9PT0gJ21hcm9vbicgJiYgY29sb3JzLm1hcm9vbixcbiAgICBjb2xvciA9PT0gJ21pZG5pZ2h0JyAmJiBjb2xvcnMubWlkbmlnaHQsXG4gICAgY29sb3IgPT09ICduYXZ5JyAmJiBjb2xvcnMubmF2eSxcbiAgICBjb2xvciA9PT0gJ29saXZlJyAmJiBjb2xvcnMub2xpdmUsXG4gICAgY29sb3IgPT09ICdvcmFuZ2UnICYmIGNvbG9ycy5vcmFuZ2UsXG4gICAgY29sb3IgPT09ICdvcmNoaWQnICYmIGNvbG9ycy5vcmNoaWQsXG4gICAgY29sb3IgPT09ICdwaW5lJyAmJiBjb2xvcnMucGluZSxcbiAgICBjb2xvciA9PT0gJ3B1cnBsZScgJiYgY29sb3JzLnB1cnBsZSxcbiAgICBjb2xvciA9PT0gJ3JlZCcgJiYgY29sb3JzLnJlZCxcbiAgICBjb2xvciA9PT0gJ3dhdGVybWVsb24nICYmIGNvbG9ycy53YXRlcm1lbG9uLFxuICAgIGNvbG9yID09PSAnd2hpdGUnICYmIGNvbG9ycy53aGl0ZSxcbiAgICBsZWFkaW5nID09PSAnc2hvcnQnICYmIHR5cG9ncmFwaHkubGVhZGluZ1Nob3J0LFxuICAgIChsZWFkaW5nID09PSAndGFsbCcgfHwgX19kYW5nZXJvdXNseUluY3JlYXNlTGluZUhlaWdodCkgJiZcbiAgICAgIHR5cG9ncmFwaHkubGVhZGluZ1RhbGwsXG4gICAgYWxpZ24gPT09ICdjZW50ZXInICYmIHR5cG9ncmFwaHkuYWxpZ25DZW50ZXIsXG4gICAgYWxpZ24gPT09ICdqdXN0aWZ5JyAmJiB0eXBvZ3JhcGh5LmFsaWduSnVzdGlmeSxcbiAgICBhbGlnbiA9PT0gJ2xlZnQnICYmIHR5cG9ncmFwaHkuYWxpZ25MZWZ0LFxuICAgIGFsaWduID09PSAncmlnaHQnICYmIHR5cG9ncmFwaHkuYWxpZ25SaWdodCxcbiAgICBvdmVyZmxvdyA9PT0gJ2JyZWFrV29yZCcgJiYgdHlwb2dyYXBoeS5icmVha1dvcmQsXG4gICAgaXRhbGljICYmIHR5cG9ncmFwaHkuZm9udFN0eWxlSXRhbGljLFxuICAgICFpdGFsaWMgJiYgdHlwb2dyYXBoeS5mb250U3R5bGVOb3JtYWwsXG4gICAgYm9sZCAmJiB0eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxuICAgICFib2xkICYmIHR5cG9ncmFwaHkuZm9udFdlaWdodE5vcm1hbCxcbiAgICB0cnVuY2F0ZSAmJiB0eXBvZ3JhcGh5LnRydW5jYXRlXG4gICk7XG4gIGNvbnN0IFRhZyA9IGlubGluZSA/ICdzcGFuJyA6ICdkaXYnO1xuXG4gIHJldHVybiAoXG4gICAgPFRhZ1xuICAgICAgY2xhc3NOYW1lPXtjc31cbiAgICAgIHsuLi4odHJ1bmNhdGUgJiYgdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHsgdGl0bGU6IGNoaWxkcmVuIH1cbiAgICAgICAgOiBudWxsKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UYWc+XG4gICk7XG59XG5cblRleHQucHJvcFR5cGVzID0ge1xuICBfX2Rhbmdlcm91c2x5SW5jcmVhc2VMaW5lSGVpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJywgJ2p1c3RpZnknXSksXG4gIGJvbGQ6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdncmVlbicsXG4gICAgJ3BpbmUnLFxuICAgICdvbGl2ZScsXG4gICAgJ2JsdWUnLFxuICAgICduYXZ5JyxcbiAgICAnbWlkbmlnaHQnLFxuICAgICdwdXJwbGUnLFxuICAgICdvcmNoaWQnLFxuICAgICdlZ2dwbGFudCcsXG4gICAgJ21hcm9vbicsXG4gICAgJ3dhdGVybWVsb24nLFxuICAgICdvcmFuZ2UnLFxuICAgICdkYXJrR3JheScsXG4gICAgJ2dyYXknLFxuICAgICdsaWdodEdyYXknLFxuICAgICdyZWQnLFxuICAgICd3aGl0ZScsXG4gIF0pLFxuICBpbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuICBpdGFsaWM6IFByb3BUeXBlcy5ib29sLFxuICBsZWFkaW5nOiBQcm9wVHlwZXMub25lT2YoWyd0YWxsJywgJ3Nob3J0J10pLFxuICBsZ1NpemU6IFByb3BUeXBlcy5vbmVPZihbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10pLFxuICBtZFNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10pLFxuICBvdmVyZmxvdzogUHJvcFR5cGVzLm9uZU9mKFsnbm9ybWFsJywgJ2JyZWFrV29yZCddKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXSksXG4gIHNtU2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXSksXG4gIHRydW5jYXRlOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iLCIvLyBAZmxvd1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b24uY3NzJztcbmltcG9ydCBUZXh0IGZyb20gJy4uL1RleHQvVGV4dCc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhY2Nlc3NpYmlsaXR5RXhwYW5kZWQ/OiBib29sZWFuLFxuICBhY2Nlc3NpYmlsaXR5SGFzcG9wdXA/OiBib29sZWFuLFxuICBhY2Nlc3NpYmlsaXR5TGFiZWw/OiBzdHJpbmcsXG4gIGNvbG9yPzogJ2dyYXknIHwgJ3JlZCcgfCAnYmx1ZScgfCAndHJhbnNwYXJlbnQnIHwgJ3doaXRlJyxcbiAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICBpbmxpbmU/OiBib29sZWFuLFxuICBuYW1lPzogc3RyaW5nLFxuICBvbkNsaWNrPzogKHsgZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8PiB9KSA9PiB2b2lkLFxuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnLFxuICB0ZXh0OiBzdHJpbmcsXG4gIHR5cGU/OiAnc3VibWl0JyB8ICdidXR0b24nLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbihwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGFjY2Vzc2liaWxpdHlFeHBhbmRlZCxcbiAgICBhY2Nlc3NpYmlsaXR5SGFzcG9wdXAsXG4gICAgYWNjZXNzaWJpbGl0eUxhYmVsLFxuICAgIGNvbG9yID0gJ2dyYXknLFxuICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgaW5saW5lID0gZmFsc2UsXG4gICAgbmFtZSxcbiAgICBvbkNsaWNrLFxuICAgIHNpemUgPSAnbWQnLFxuICAgIHRleHQsXG4gICAgdHlwZSA9ICdidXR0b24nLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgdGV4dENvbG9yID0ge1xuICAgIGJsdWU6ICd3aGl0ZScsXG4gICAgZ3JheTogJ2RhcmtHcmF5JyxcbiAgICByZWQ6ICd3aGl0ZScsXG4gICAgdHJhbnNwYXJlbnQ6ICd3aGl0ZScsXG4gICAgd2hpdGU6ICdkYXJrR3JheScsXG4gIH07XG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoc3R5bGVzLmJ1dHRvbiwge1xuICAgIFtzdHlsZXMuc21dOiBzaXplID09PSAnc20nLFxuICAgIFtzdHlsZXMubWRdOiBzaXplID09PSAnbWQnLFxuICAgIFtzdHlsZXMubGddOiBzaXplID09PSAnbGcnLFxuICAgIFtzdHlsZXMuc29saWRdOiBjb2xvciAhPT0gJ3RyYW5zcGFyZW50JyxcbiAgICBbc3R5bGVzW2NvbG9yXV06ICFkaXNhYmxlZCxcbiAgICBbc3R5bGVzLmRpc2FibGVkXTogZGlzYWJsZWQsXG4gICAgW3N0eWxlcy5lbmFibGVkXTogIWRpc2FibGVkLFxuICAgIFtzdHlsZXMuaW5saW5lXTogaW5saW5lLFxuICAgIFtzdHlsZXMuYmxvY2tdOiAhaW5saW5lLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGFyaWEtZXhwYW5kZWQ9e2FjY2Vzc2liaWxpdHlFeHBhbmRlZH1cbiAgICAgIGFyaWEtaGFzcG9wdXA9e2FjY2Vzc2liaWxpdHlIYXNwb3B1cH1cbiAgICAgIGFyaWEtbGFiZWw9e2FjY2Vzc2liaWxpdHlMYWJlbH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIG5hbWU9e25hbWV9XG4gICAgICBvbkNsaWNrPXtldmVudCA9PiBvbkNsaWNrICYmIG9uQ2xpY2soeyBldmVudCB9KX1cbiAgICAgIHR5cGU9e3R5cGV9XG4gICAgPlxuICAgICAgPFRleHRcbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICBib2xkXG4gICAgICAgIGNvbG9yPXtkaXNhYmxlZCA/ICdncmF5JyA6IHRleHRDb2xvcltjb2xvcl19XG4gICAgICAgIG92ZXJmbG93PVwibm9ybWFsXCJcbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L1RleHQ+XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGFjY2Vzc2liaWxpdHlFeHBhbmRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGFjY2Vzc2liaWxpdHlIYXNwb3B1cDogUHJvcFR5cGVzLmJvb2wsXG4gIGFjY2Vzc2liaWxpdHlMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2JsdWUnLCAnZ3JheScsICdyZWQnLCAndHJhbnNwYXJlbnQnLCAnd2hpdGUnXSksXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtJywgJ21kJywgJ2xnJ10pLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2J1dHRvbicsICdzdWJtaXQnXSksXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQm94IGZyb20gJy4uL0JveC9Cb3gnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FyZC5jc3MnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgYWN0aXZlPzogP2Jvb2xlYW4sXG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgaW1hZ2U/OiBSZWFjdC5Ob2RlLFxuICBvbk1vdXNlRW50ZXI/OiAoeyBldmVudDogU3ludGhldGljTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4gfSkgPT4gdm9pZCxcbiAgb25Nb3VzZUxlYXZlPzogKHsgZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+IH0pID0+IHZvaWQsXG58fTtcblxudHlwZSBTdGF0ZSA9IHt8XG4gIGhvdmVyZWQ6IGJvb2xlYW4sXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBpbWFnZTogUHJvcFR5cGVzLm5vZGUsXG4gICAgb25Nb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICBob3ZlcmVkOiBmYWxzZSxcbiAgfTtcblxuICBoYW5kbGVNb3VzZUVudGVyID0gKGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25Nb3VzZUVudGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7IGhvdmVyZWQ6IHRydWUgfSxcbiAgICAgIG9uTW91c2VFbnRlciAmJiAoKCkgPT4gb25Nb3VzZUVudGVyKHsgZXZlbnQgfSkpXG4gICAgKTtcbiAgfTtcblxuICBoYW5kbGVNb3VzZUxlYXZlID0gKGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25Nb3VzZUxlYXZlIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7IGhvdmVyZWQ6IGZhbHNlIH0sXG4gICAgICBvbk1vdXNlTGVhdmUgJiYgKCgpID0+IG9uTW91c2VMZWF2ZSh7IGV2ZW50IH0pKVxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlLCBjaGlsZHJlbiwgaW1hZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBob3ZlcmVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoc3R5bGVzLmNhcmQsIHtcbiAgICAgIC8vIElmLCBsaWtlIEBjaHJpc2xsb3lkLCB5b3UgY2FuJ3QgcmVtZW1iZXIgSmF2YXNjcmlwdCBlcXVhbGl0eSBydWxlcyxcbiAgICAgIC8vID09IG51bGwgY2hlY2tzIGZvciBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgYW5kIGxlYXZlcyBvdXQgYGZhbHNlYC5cbiAgICAgIFtzdHlsZXMuaG92ZXJdOiBhY3RpdmUgfHwgKGFjdGl2ZSA9PSBudWxsICYmIGhvdmVyZWQpLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgID5cbiAgICAgICAge2ltYWdlICYmIDxCb3ggbWFyZ2luQm90dG9tPXsxfT57aW1hZ2V9PC9Cb3g+fVxuICAgICAgICA8Qm94PntjaGlsZHJlbn08L0JveD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IC8+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NoZWNrYm94LmNzcyc7XG5pbXBvcnQgQm94IGZyb20gJy4uL0JveC9Cb3gnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbi9JY29uJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNoZWNrZWQ/OiBib29sZWFuLFxuICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gIGlkOiBzdHJpbmcsXG4gIGluZGV0ZXJtaW5hdGU/OiBib29sZWFuLFxuICBuYW1lPzogc3RyaW5nLFxuICBvbkNoYW5nZTogKHsgZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8PiwgY2hlY2tlZDogYm9vbGVhbiB9KSA9PiB2b2lkLFxuICBzaXplPzogJ3NtJyB8ICdtZCcsXG58fTtcblxudHlwZSBTdGF0ZSA9IHt8XG4gIGZvY3VzZWQ6IGJvb2xlYW4sXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW5kZXRlcm1pbmF0ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbScsICdtZCddKSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBpbmRldGVybWluYXRlOiBmYWxzZSxcbiAgICBzaXplOiAnbWQnLFxuICB9O1xuXG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICBmb2N1c2VkOiBmYWxzZSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pbmRldGVybWluYXRlKSB7XG4gICAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGUoISF0aGlzLnByb3BzLmluZGV0ZXJtaW5hdGUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2aW91c1Byb3BzOiBQcm9wcykge1xuICAgIGlmIChwcmV2aW91c1Byb3BzLmluZGV0ZXJtaW5hdGUgIT09IHRoaXMucHJvcHMuaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgdGhpcy5zZXRJbmRldGVybWluYXRlKCEhdGhpcy5wcm9wcy5pbmRldGVybWluYXRlKTtcbiAgICB9XG4gIH1cblxuICBzZXRJbmRldGVybWluYXRlKGluZGV0ZXJtaW5hdGU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgdGhpcy5pbnB1dC5pbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZTtcbiAgICB9XG4gIH1cblxuICBpbnB1dDogP0hUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBTeW50aGV0aWNJbnB1dEV2ZW50PD4pID0+IHtcbiAgICBjb25zdCB7IGNoZWNrZWQgfSA9IGV2ZW50LnRhcmdldDtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgZXZlbnQsIGNoZWNrZWQgfSk7XG4gIH07XG5cbiAgaGFuZGxlQmx1ciA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiBmYWxzZSB9KTtcbiAgaGFuZGxlRm9jdXMgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogdHJ1ZSB9KTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGVja2VkLCBkaXNhYmxlZCwgaWQsIGluZGV0ZXJtaW5hdGUsIG5hbWUsIHNpemUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuaW5wdXQsIHtcbiAgICAgICAgICAgIFtzdHlsZXMuaW5wdXRFbmFibGVkXTogIWRpc2FibGVkLFxuICAgICAgICAgICAgW3N0eWxlcy5pbmRldGVybWluYXRlXTogaW5kZXRlcm1pbmF0ZSxcbiAgICAgICAgICAgIFtzdHlsZXMuaW5wdXRTbV06IHNpemUgPT09ICdzbScsXG4gICAgICAgICAgICBbc3R5bGVzLmlucHV0TWRdOiBzaXplID09PSAnbWQnLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBlbDtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBzdHlsZXMuY2hlY2ssXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgID8gY2hlY2tlZCB8fCBpbmRldGVybWluYXRlXG4gICAgICAgICAgICAgICAgPyBzdHlsZXMuY2hlY2tHcmF5XG4gICAgICAgICAgICAgICAgOiBzdHlsZXMuY2hlY2tMaWdodEdyYXlcbiAgICAgICAgICAgICAgOiBjaGVja2VkIHx8IGluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgICAgICA/IHN0eWxlcy5jaGVja0RhcmtHcmF5XG4gICAgICAgICAgICAgICAgOiBzdHlsZXMuY2hlY2tXaGl0ZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgW3N0eWxlcy5jaGVja0VuYWJsZWRdOiAhZGlzYWJsZWQsXG4gICAgICAgICAgICAgIFtzdHlsZXMuY2hlY2tGb2N1c2VkXTogdGhpcy5zdGF0ZS5mb2N1c2VkLFxuICAgICAgICAgICAgICBbc3R5bGVzLmNoZWNrTWRdOiBzaXplID09PSAnbWQnLFxuICAgICAgICAgICAgICBbc3R5bGVzLmNoZWNrU21dOiBzaXplID09PSAnc20nLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICB7KGNoZWNrZWQgfHwgaW5kZXRlcm1pbmF0ZSkgJiYgKFxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPVwiXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGljb249e2luZGV0ZXJtaW5hdGUgPyAnZGFzaCcgOiAnY2hlY2snfVxuICAgICAgICAgICAgICBzaXplPXtzaXplID09PSAnc20nID8gOCA6IDEyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG4vKlxuICAjIENvbGxlY3Rpb25cblxuICBDb2xsZWN0aW9uIGlzIGNvbXBvbmVudCB0aGF0IGNhbiBhYnNvbHV0ZWx5IHBvc2l0aW9uIGFuZCB2aXJ0dWFsaXplIGl0ZW1zLiBJdCdzIG1lYW50IHRvIGJlIGFuIGV4dGVyZW1seSBzaW1wbGUgd29ya2hvcnNlIHRvIHJlLWltcGxlbWVudCBjdXN0b20gbGF5b3V0cy4gSXQncyBub3QgcGVyZmVjdCBmb3IgYWxsIHNpdHVhdGlvbnMgYnV0IGl0IGRvZXMgaGF2ZSBhIGNsb3NlZCBBUEkgYW5kIGlzIHByZXR0eSBwZXJmb3JtYW50LlxuXG4gICMjIEhvdyBpdCB3b3Jrc1xuXG4gIFRoZXJlIGFyZSB0d28gY2VudHJhbCBjb25jZXB0cyB0byBDb2xsZWN0aW9uIC0gdGhlIGNvbnRlbnQgbGF5ZXIgYW5kIHRoZSB2aWV3cG9ydCBsYXllci5cblxuICBDb250ZW50IGxheWVyICAgICAgICAgICAgICAgVmlld3BvcnQgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRlIGxheWVyXG5cbiAgKy0tLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tKyAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLStcbiAgfCAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfCAgICAgICAgICB8ICAgICAgICAgICAgICAgIHxcbiAgfCArLS0rICstLSsgKy0tKyB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfCAgICAgICAgICB8ICAgICAgICAgICAgICAgIHxcbiAgfCB8ICB8IHwgIHwgfCAgfCB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfCAgICAgICAgICB8ICAgICAgICAgICAgICAgIHxcbiAgfCB8ICB8IHwgIHwgfCAgfCB8ICAgICAgICAgIHwgKy0tLS0tLS0tLS0tLSsgfCAgICAgICAgICB8ICstLS0tLS0tLS0tLS0rIHxcbiAgfCArLS0rIHwgIHwgfCAgfCB8ICAgICAgICAgIHwgfCAgICAgICAgICAgIHwgfCAgICAgICAgICB8IHwtLSsgfCAgfCB8ICB8IHxcbiAgfCAgICAgIHwgIHwgKy0tKyB8ICAgICAgICAgIHwgfCAgICAgICAgICAgIHwgfCAgICAgICAgICB8IHwgICAgfCAgfCArLS18IHxcbiAgfCArLS0rICstLSsgICAgICB8ICAgICAgICAgIHwgfCAgICAgICAgICAgIHwgfCAgICAgICAgICB8IHwtLSsgKy0tKyAgICB8IHxcbiAgfCB8ICB8ICAgICAgKy0tKyB8ICstLS0tLS0+IHwgfCAgICAgICAgICAgIHwgfCArLS0tLS0tPiB8IHwgIHwgICAgICArLS18IHxcbiAgfCArLS0rICstLSsgfCAgfCB8ICAgICAgICAgIHwgfCAgICAgICAgICAgIHwgfCAgICAgICAgICB8IHwtLSsgKy0tKyB8ICB8IHxcbiAgfCAgICAgIHwgIHwgfCAgfCB8ICAgICAgICAgIHwgfCAgICAgICAgICAgIHwgfCAgICAgICAgICB8IHwgICAgfCAgfCB8ICB8IHxcbiAgfCArLS0rIHwgIHwgKy0tKyB8ICAgICAgICAgIHwgfCAgICAgICAgICAgIHwgfCAgICAgICAgICB8IHwtLSsgfCAgfCArLS18IHxcbiAgfCB8ICB8IHwgIHwgICAgICB8ICAgICAgICAgIHwgfCAgICAgICAgICAgIHwgfCAgICAgICAgICB8IHwgIHwgfCAgfCAgICB8IHxcbiAgfCB8ICB8IHwgIHwgKy0tKyB8ICAgICAgICAgIHwgKy0tLS0tLS0tLS0tLSsgfCAgICAgICAgICB8ICstLS0tLS0tLS0tLS0rIHxcbiAgfCB8ICB8IHwgIHwgfCAgfCB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfCAgICAgICAgICB8ICAgICAgICAgICAgICAgIHxcbiAgfCArLS0rICstLSsgKy0tKyB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfCAgICAgICAgICB8ICAgICAgICAgICAgICAgIHxcbiAgfCAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfCAgICAgICAgICB8ICAgICAgICAgICAgICAgIHxcbiAgKy0tLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tKyAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLStcblxuICBZb3UgcG9zaXRpb24geW91ciBpdGVtcyBpbiB0aGUgdmlydHVhbCBjb250ZW50IGxheWVyLCB0aGVuIHlvdSBkZWZpbmUgdGhlIHZpZXdwb3J0IGxheWVyIChieSBkZWZhdWx0IHRoaXMgaXMgdGhlIGZ1bGwgc2l6ZSBvZiB0aGUgY29udGVudCBsYXllcikuIENvbGxlY3Rpb24gdGhlbiB0YWtlcyB0aG9zZSBpdGVtcywgYW5kIHRoZSB2aWV3cG9ydCByZW5kZXJpbmcgdGhlIGNvbnRlbnQgbGF5ZXIgd2l0aCBvbmx5IHRoZSBpdGVtcyB0aGF0IGZpdCBpbnNpZGUgdGhlIHZpZXdwb3J0LlxuXG4gICMjIEFzc3VtcHRpb25zXG5cbiAgMS4gWW91ciBsYXlvdXQgaXMgcHJlLWNhbGN1bGF0ZWQuIENvbGxlY3Rpb24gZXhwZWN0cyBsYXlvdXQgdG8gYmUgcGFzc2VkIGluIGFzIGEgcHJvcGVydHkuIElmIHlvdXIgbGF5b3V0IGlzbid0IHJlYWR5IChpLmUuIHNvbWV0aGluZyBuZWVkcyB0byBiZSBtZWFzdXJlZCkgdGhlIGNhbGxlciBuZWVkcyB0byBmaWd1cmUgdGhhdCBvdXQuXG4gIDIuIFBhc3NlZCBpbiBJdGVtIGFyZSBzb21ld2hhdCBwdXJlIC0gdGhleSBjYW4gYmUgbW91bnRlZCBhbmQgdW5tb3VudGVkIGF0IGFueXRpbWUgc28gSXRlbSdzIGxpZmVjeWNsZSBtZXRob2RzIG5lZWQgdG8gYWNjb3VudCBmb3IgdGhhdC5cbiAgMy4gUGFzc2VkIGluIEl0ZW1zIGFyZSBib3VuZCB0byB0aGVpciBkYXRhLXNvdXJjZSBzZXBlcmF0ZWx5LiBBbGwgdGhleSByZWNlaXZlIGlzIGFuIGluZGV4LCBzbyB0aGV5IG5lZWQgdG8gaGF2ZSBhbnkgZXh0ZXJuYWwgZGF0YSBzb3VyY2VzIGluIHNjb3BlLlxuICA0LiBUaGUgdmlld3BvcnQgY2FuIGJlIGFueSBzaXplLiBNb3N0IHdpbmRvd2luZy9yZWN5Y2xpbmcgc29sdXRpb25zIGltcGxlbWVudCBzb21lIHNvcnQgb2Ygb3ZlcnNjYW5uaW5nLCBob3dldmVyIENvbGxlY3Rpb24gbGVhdmVzIHRoaXMgdXAgdGhlIHRoZSBwYXJlbnQuXG5cbiovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGxheW91dFN0eWxlcyBmcm9tICcuLi9MYXlvdXQuY3NzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIEl0ZW06ICh7IGlkeDogbnVtYmVyIH0pID0+IFJlYWN0Lk5vZGUsXG4gIGxheW91dDogQXJyYXk8e3xcbiAgICB0b3A6IG51bWJlcixcbiAgICBsZWZ0OiBudW1iZXIsXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICBoZWlnaHQ6IG51bWJlcixcbiAgfH0+LFxuICB2aWV3cG9ydFRvcD86IG51bWJlcixcbiAgdmlld3BvcnRMZWZ0PzogbnVtYmVyLFxuICB2aWV3cG9ydFdpZHRoPzogbnVtYmVyLFxuICB2aWV3cG9ydEhlaWdodD86IG51bWJlcixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsZWN0aW9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcywgdm9pZD4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlc1xuICAgIEl0ZW06IFByb3BUeXBlcy5hbnksXG4gICAgbGF5b3V0OiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5leGFjdCh7XG4gICAgICAgIHRvcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBsZWZ0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgfSkuaXNSZXF1aXJlZFxuICAgICksXG4gICAgdmlld3BvcnRIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdmlld3BvcnRMZWZ0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHZpZXdwb3J0VG9wOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHZpZXdwb3J0V2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsYXlvdXQ6IFtdLFxuICAgIHZpZXdwb3J0TGVmdDogMCxcbiAgICB2aWV3cG9ydFRvcDogMCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBJdGVtLCBsYXlvdXQsIHZpZXdwb3J0VG9wID0gMCwgdmlld3BvcnRMZWZ0ID0gMCB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZnVsbCBkaW1lbnNpb25zIG9mIHRoZSBpdGVtIGxheWVyXG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCguLi5sYXlvdXQubWFwKGl0ZW0gPT4gaXRlbS5sZWZ0ICsgaXRlbS53aWR0aCkpO1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KC4uLmxheW91dC5tYXAoaXRlbSA9PiBpdGVtLnRvcCArIGl0ZW0uaGVpZ2h0KSk7XG5cbiAgICAvLyBEZWZhdWx0IHRoZSB2aWV3cG9ydCB0byBiZWluZyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgY29udGVudCBsYXllclxuICAgIGNvbnN0IHsgdmlld3BvcnRXaWR0aCA9IHdpZHRoLCB2aWV3cG9ydEhlaWdodCA9IGhlaWdodCB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIENhbGN1bGF0ZXMgd2hpY2ggaXRlbXMgZnJvbSB0aGUgaXRlbSBsYXllciB0byByZW5kZXIgaW4gdGhlIHZpZXdwb3J0XG4gICAgLy8gbGF5ZXIuXG4gICAgY29uc3QgaXRlbXMgPSBsYXlvdXQucmVkdWNlKChhY2MsIHBvc2l0aW9uLCBpZHgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgcG9zaXRpb24udG9wICsgcG9zaXRpb24uaGVpZ2h0ID4gdmlld3BvcnRUb3AgJiZcbiAgICAgICAgcG9zaXRpb24udG9wIDwgdmlld3BvcnRIZWlnaHQgKyB2aWV3cG9ydFRvcCAmJlxuICAgICAgICBwb3NpdGlvbi5sZWZ0IDwgdmlld3BvcnRXaWR0aCArIHZpZXdwb3J0TGVmdCAmJlxuICAgICAgICBwb3NpdGlvbi5sZWZ0ICsgcG9zaXRpb24ud2lkdGggPiB2aWV3cG9ydExlZnRcbiAgICAgICkge1xuICAgICAgICBhY2MucHVzaCh7IGlkeCwgLi4ucG9zaXRpb24gfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bGF5b3V0U3R5bGVzLnJlbGF0aXZlfSBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19PlxuICAgICAgICB7aXRlbXMubWFwKCh7IGlkeCwgLi4uc3R5bGUgfSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT17bGF5b3V0U3R5bGVzLmFic29sdXRlfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgPEl0ZW0gaWR4PXtpZHh9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiLyogQGZsb3cgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db2x1bW4uY3NzJztcblxudHlwZSBEZXByZWNhdGVkQ29sdW1ucyA9IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcbnR5cGUgQ29sdW1ucyA9IDAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XG5cbnR5cGUgQ29sdW1uUHJvcHMgPVxuICB8IHt8XG4gICAgICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gICAgICBzcGFuOiBDb2x1bW5zLFxuICAgICAgc21TcGFuPzogQ29sdW1ucyxcbiAgICAgIG1kU3Bhbj86IENvbHVtbnMsXG4gICAgICBsZ1NwYW4/OiBDb2x1bW5zLFxuICAgIHx9XG4gIHwge3xcbiAgICAgIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgICAgIHhzPzogRGVwcmVjYXRlZENvbHVtbnMsXG4gICAgICBzbT86IERlcHJlY2F0ZWRDb2x1bW5zLFxuICAgICAgbWQ/OiBEZXByZWNhdGVkQ29sdW1ucyxcbiAgICAgIGxnPzogRGVwcmVjYXRlZENvbHVtbnMsXG4gICAgfH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbHVtbihwcm9wczogQ29sdW1uUHJvcHMpIHtcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNvbnN0IGNzID0gY2xhc3NuYW1lcyhcbiAgICAocHJvcHMueHMgfHwgcHJvcHMuc20gfHwgcHJvcHMubWQgfHwgcHJvcHMubGcpICYmIHN0eWxlcy5kZXByZWNhdGVkQ29sdW1uLFxuICAgIHByb3BzLnhzICYmIHN0eWxlc1tgeHNDb2wke3Byb3BzLnhzfWBdLFxuICAgIHByb3BzLnNtICYmIHN0eWxlc1tgc21Db2wke3Byb3BzLnNtfWBdLFxuICAgIHByb3BzLm1kICYmIHN0eWxlc1tgbWRDb2wke3Byb3BzLm1kfWBdLFxuICAgIHByb3BzLmxnICYmIHN0eWxlc1tgbGdDb2wke3Byb3BzLmxnfWBdLFxuICAgIHByb3BzLnNwYW4gJiYgc3R5bGVzW2B4c0NvbCR7cHJvcHMuc3Bhbn1gXSxcbiAgICBwcm9wcy5zbVNwYW4gJiYgc3R5bGVzW2BzbUNvbCR7cHJvcHMuc21TcGFufWBdLFxuICAgIHByb3BzLm1kU3BhbiAmJiBzdHlsZXNbYG1kQ29sJHtwcm9wcy5tZFNwYW59YF0sXG4gICAgcHJvcHMubGdTcGFuICYmIHN0eWxlc1tgbGdDb2wke3Byb3BzLmxnU3Bhbn1gXVxuICApO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NzfT57Y2hpbGRyZW59PC9kaXY+O1xufVxuXG5Db2x1bW4ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHhzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzbTogUHJvcFR5cGVzLm51bWJlcixcbiAgbWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxnOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzcGFuOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzbVNwYW46IFByb3BUeXBlcy5udW1iZXIsXG4gIG1kU3BhbjogUHJvcFR5cGVzLm51bWJlcixcbiAgbGdTcGFuOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gvQm94JztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxCb3gganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAgPEJveCBtYXhXaWR0aD17ODAwfSB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RpdmlkZXIuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGl2aWRlcigpIHtcbiAgcmV0dXJuIDxociBjbGFzc05hbWU9e3N0eWxlcy5kaXZpZGVyfSAvPjtcbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICBkaXJlY3Rpb24/OiA/J3VwJyB8ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJldChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBkaXJlY3Rpb24gfSA9IHByb3BzO1xuICBsZXQgcGF0aDtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlICd1cCc6XG4gICAgICBwYXRoID0gJ00wIDAgTDEyIDEyIEwyNCAwJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHBhdGggPSAnTTI0IDAgTDEyIDEyIEwyNCAyNCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkb3duJzpcbiAgICAgIHBhdGggPSAnTTAgMjQgTDEyIDEyIEwyNCAyNCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIHBhdGggPSAnTTAgMCBMMTIgMTIgTDAgMjQnO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICAgIDxwYXRoIGQ9e3BhdGh9IC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbkNhcmV0LnByb3BUeXBlcyA9IHtcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWyd1cCcsICdyaWdodCcsICdkb3duJywgJ2xlZnQnXSksXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDYXJldCBmcm9tICcuL0NhcmV0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250ZW50cy5jc3MnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9Db2xvcnMuY3NzJztcblxuLyogTmVlZGVkIHVudGlsIHRoaXMgRmxvdyBpc3N1ZSBpcyBmaXhlZDogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzM4MCAqL1xuLyogZXNsaW50IHF1b3RlLXByb3BzOiAwICovXG5jb25zdCBTUEFDRVNfSU5ERVhfTUFQID0ge1xuICAnMCc6ICd1cCcsXG4gICcxJzogJ3JpZ2h0JyxcbiAgJzInOiAnZG93bicsXG4gICczJzogJ2xlZnQnLFxufTtcblxuY29uc3QgRElSX0lOREVYX01BUCA9IHtcbiAgdXA6IDAsXG4gIHJpZ2h0OiAxLFxuICBkb3duOiAyLFxuICBsZWZ0OiAzLFxufTtcblxuY29uc3QgTUFSR0lOID0gMjQ7XG5leHBvcnQgY29uc3QgQ0FSRVRfSEVJR0hUID0gMjQ7XG5jb25zdCBDQVJFVF9PRkZTRVRfRlJPTV9TSURFID0gMjQ7XG5leHBvcnQgY29uc3QgQk9SREVSX1JBRElVUyA9IDg7XG5cbnR5cGUgTWFpbkRpciA9ID8oJ3VwJyB8ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcpO1xudHlwZSBTdWJEaXIgPSAndXAnIHwgJ3JpZ2h0JyB8ICdkb3duJyB8ICdsZWZ0JyB8ICdtaWRkbGUnO1xuXG50eXBlIENsaWVudFJlY3QgPSB7XG4gIGJvdHRvbTogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgbGVmdDogbnVtYmVyLFxuICByaWdodDogbnVtYmVyLFxuICB0b3A6IG51bWJlcixcbiAgd2lkdGg6IG51bWJlcixcbn07XG5cbnR5cGUgQ29udHJvbGxlclByb3BzID0ge3xcbiAgYW5jaG9yPzogSFRNTEVsZW1lbnQsXG4gIGJnQ29sb3I6ICdkYXJrR3JheScgfCAnd2hpdGUnIHwgJ29yYW5nZScsXG4gIGNoaWxkcmVuPzogYW55LFxuICBpZGVhbERpcmVjdGlvbj86ICd1cCcgfCAncmlnaHQnIHwgJ2Rvd24nIHwgJ2xlZnQnLFxuICBvbkRpc21pc3M6ICgpID0+IHZvaWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcjogYm9vbGVhbixcbiAgc2hvdWxkRm9jdXM/OiBib29sZWFuLFxuICBzaXplPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBudW1iZXIsXG58fTtcblxudHlwZSBXaW5kb3cgPSB7XG4gIGhlaWdodDogbnVtYmVyLFxuICB3aWR0aDogbnVtYmVyLFxuICBzY3JvbGxZOiBudW1iZXIsXG4gIHNjcm9sbFg6IG51bWJlcixcbn07XG5cbnR5cGUgRmx5b3V0ID0geyBoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlciB9O1xuXG50eXBlIFNoaWZ0ID0geyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xuXG50eXBlIEVkZ2VTaGlmdCA9IHsgY2FyZXQ6IFNoaWZ0LCBmbHlvdXQ6IFNoaWZ0IH07XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBiZ0NvbG9yOiAnZGFya0dyYXknIHwgJ3doaXRlJyB8ICdvcmFuZ2UnLFxuICBjaGlsZHJlbj86IGFueSxcbiAgaWRlYWxEaXJlY3Rpb24/OiAndXAnIHwgJ3JpZ2h0JyB8ICdkb3duJyB8ICdsZWZ0JyxcbiAgb25DbGljazogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCxcbiAgb25LZXlEb3duOiAoZXZlbnQ6IHsga2V5Q29kZTogbnVtYmVyIH0pID0+IHZvaWQsXG4gIG9uUmVzaXplOiBDb250cm9sbGVyUHJvcHMgPT4gdm9pZCxcbiAgcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yPzogYm9vbGVhbixcbiAgcmVsYXRpdmVPZmZzZXQ6IHtcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICB9LFxuICBzaG91bGRGb2N1cz86IGJvb2xlYW4sXG4gIHRyaWdnZXJSZWN0OiBDbGllbnRSZWN0LFxuICB3aWR0aDogbnVtYmVyLFxufH07XG5cbnR5cGUgU3RhdGUgPSB7XG4gIGZseW91dE9mZnNldDoge1xuICAgIHRvcDogP251bWJlcixcbiAgICBsZWZ0OiA/bnVtYmVyLFxuICB9LFxuICBjYXJldE9mZnNldDoge1xuICAgIHRvcDogP251bWJlcixcbiAgICByaWdodDogP251bWJlcixcbiAgICBib3R0b206ID9udW1iZXIsXG4gICAgbGVmdDogP251bWJlcixcbiAgfSxcbiAgbWFpbkRpcjogP01haW5EaXIsXG59O1xuXG4vKipcbiAqIERldGVybWluZXMgdGhlIG1haW4gZGlyZWN0aW9uIHRoZSBmbHlvdXQgb3BlbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1haW5EaXIoXG4gIGZseW91dFNpemU6IEZseW91dCxcbiAgaWRlYWxEaXJlY3Rpb246IE1haW5EaXIsXG4gIHRyaWdnZXJSZWN0OiBDbGllbnRSZWN0LFxuICB3aW5kb3dTaXplOiBXaW5kb3dcbikge1xuICAvLyBDYWxjdWxhdGVzIHRoZSBhdmFpbGFibGUgc3BhY2UgaWYgd2Ugd2VyZSB0byBwbGFjZSB0aGUgZmx5b3V0IGluIHRoZSA0IG1haW4gZGlyZWN0aW9uc1xuICAvLyB0byBkZXRlcm1pbmUgd2hpY2ggJ3F1YWRyYW50JyB0byBwb3NpdGlvbiB0aGUgZmx5b3V0IGluc2lkZSBvZlxuICBsZXQgdXAgPSB0cmlnZ2VyUmVjdC50b3AgLSBmbHlvdXRTaXplLmhlaWdodCAtIENBUkVUX0hFSUdIVDtcbiAgbGV0IHJpZ2h0ID1cbiAgICB3aW5kb3dTaXplLndpZHRoIC0gZmx5b3V0U2l6ZS53aWR0aCAtIENBUkVUX0hFSUdIVCAtIHRyaWdnZXJSZWN0LnJpZ2h0O1xuICBsZXQgZG93biA9XG4gICAgd2luZG93U2l6ZS5oZWlnaHQgLSBmbHlvdXRTaXplLmhlaWdodCAtIENBUkVUX0hFSUdIVCAtIHRyaWdnZXJSZWN0LmJvdHRvbTtcbiAgbGV0IGxlZnQgPSB0cmlnZ2VyUmVjdC5sZWZ0IC0gZmx5b3V0U2l6ZS53aWR0aCAtIENBUkVUX0hFSUdIVDtcblxuICAvLyBvdmVycmlkZXMgYXZhaWxhYmxlIHNwYWNlIHdoZW4gdGhlIHRyaWdnZXIgaXMgY2xvc2UgdG8gdGhlIGVkZ2Ugb2YgdGhlIHNjcmVlblxuICAvLyB0cmlnZ2VyIGlzIHRvbyBjbG9zZSB0byB0b3AvYm90dG9tIG9mIHNjcmVlbiBmb3IgbGVmdCAmIHJpZ2h0IGZseW91dHNcbiAgaWYgKFxuICAgIHRyaWdnZXJSZWN0LnRvcCA8IEJPUkRFUl9SQURJVVMgfHxcbiAgICB3aW5kb3dTaXplLmhlaWdodCAtIHRyaWdnZXJSZWN0LmJvdHRvbSA8IEJPUkRFUl9SQURJVVNcbiAgKSB7XG4gICAgbGVmdCA9IDA7XG4gICAgcmlnaHQgPSAwO1xuICB9XG5cbiAgLy8gdHJpZ2dlciBpcyB0b28gY2xvc2UgdG8gdGhlIGxlZnQvcmlnaHQgb2Ygc2NyZWVuIGZvciB1cCAmIGRvd24gZmx5b3V0c1xuICBpZiAoXG4gICAgdHJpZ2dlclJlY3QubGVmdCA8IEJPUkRFUl9SQURJVVMgfHxcbiAgICB3aW5kb3dTaXplLndpZHRoIC0gdHJpZ2dlclJlY3QucmlnaHQgPCBCT1JERVJfUkFESVVTXG4gICkge1xuICAgIHVwID0gMDtcbiAgICBkb3duID0gMDtcbiAgfVxuXG4gIGNvbnN0IHNwYWNlcyA9IFt1cCwgcmlnaHQsIGRvd24sIGxlZnRdO1xuXG4gIC8vIElkZW50aWZ5IGJlc3QgZGlyZWN0aW9uIG9mIGF2YWlsYWJsZSBzcGFjZXNcbiAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4uc3BhY2VzKTtcblxuICAvLyBDaG9zZSB0aGUgbWFpbiBkaXJlY3Rpb24gZm9yIHRoZSBmbHlvdXQgYmFzZWQgb24gYXZhaWxhYmxlIHNwYWNlcyAmIHVzZXIgcHJlZmVyZW5jZVxuICBsZXQgbWFpbkRpcjtcbiAgaWYgKGlkZWFsRGlyZWN0aW9uICYmIHNwYWNlc1tESVJfSU5ERVhfTUFQW2lkZWFsRGlyZWN0aW9uXV0gPiAwKSB7XG4gICAgLy8gdXNlciBwcmVmXG4gICAgbWFpbkRpciA9IGlkZWFsRGlyZWN0aW9uO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIG5vIGRpcmVjdGlvbiBwcmVmLCBjaG9zZSB0aGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZXJlIGlzIHRoZSBtb3N0IHNwYWNlIGF2YWlsYWJsZVxuICAgIG1haW5EaXIgPSBTUEFDRVNfSU5ERVhfTUFQW3NwYWNlcy5pbmRleE9mKG1heCldO1xuICB9XG4gIHJldHVybiBtYWluRGlyO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgdGhlIHN1YiBkaXJlY3Rpb24gb2YgaG93IHRoZSBmbHlvdXQgaXMgcG9zaXRpb25lZCB3aXRoaW4gdGhlIG1haW4gZGlyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdWJEaXIoXG4gIGZseW91dFNpemU6IEZseW91dCxcbiAgbWFpbkRpcjogTWFpbkRpcixcbiAgdHJpZ2dlclJlY3Q6IENsaWVudFJlY3QsXG4gIHdpbmRvd1NpemU6IFdpbmRvd1xuKSB7XG4gIC8vIE5vdyB0aGF0IHdlIGhhdmUgdGhlIG1haW4gZGlyZWN0aW9uLCBjaG9zZSBmcm9tIDMgY2FyZXQgcGxhY2VtZW50cyBmb3IgdGhhdCBkaXJlY3Rpb25cbiAgbGV0IG9mZnNldDtcbiAgbGV0IHRyaWdnZXJNaWQ7XG4gIGxldCB3aW5kb3dTcGFjZUF2YWlsYWJsZTtcblxuICBpZiAobWFpbkRpciA9PT0gJ3JpZ2h0JyB8fCBtYWluRGlyID09PSAnbGVmdCcpIHtcbiAgICBvZmZzZXQgPSBmbHlvdXRTaXplLmhlaWdodCAvIDI7XG4gICAgdHJpZ2dlck1pZCA9IHRyaWdnZXJSZWN0LnRvcCArICh0cmlnZ2VyUmVjdC5ib3R0b20gLSB0cmlnZ2VyUmVjdC50b3ApIC8gMjtcbiAgICB3aW5kb3dTcGFjZUF2YWlsYWJsZSA9IHdpbmRvd1NpemUuaGVpZ2h0O1xuICB9IGVsc2Uge1xuICAgIC8vIChtYWluRGlyID09PSAndXAnIHx8IG1haW5EaXIgPT09ICdkb3duJylcbiAgICBvZmZzZXQgPSBmbHlvdXRTaXplLndpZHRoIC8gMjtcbiAgICB0cmlnZ2VyTWlkID0gdHJpZ2dlclJlY3QubGVmdCArICh0cmlnZ2VyUmVjdC5yaWdodCAtIHRyaWdnZXJSZWN0LmxlZnQpIC8gMjtcbiAgICB3aW5kb3dTcGFjZUF2YWlsYWJsZSA9IHdpbmRvd1NpemUud2lkdGg7XG4gIH1cblxuICBjb25zdCBhYm92ZU9yTGVmdCA9IHRyaWdnZXJNaWQgLSBvZmZzZXQgLSBNQVJHSU47XG4gIGNvbnN0IGJlbG93T3JSaWdodCA9IHdpbmRvd1NwYWNlQXZhaWxhYmxlIC0gdHJpZ2dlck1pZCAtIG9mZnNldCAtIE1BUkdJTjtcbiAgbGV0IHN1YkRpcjtcbiAgaWYgKGFib3ZlT3JMZWZ0ID4gMCAmJiBiZWxvd09yUmlnaHQgPiAwKSB7XG4gICAgLy8gY2FyZXQgc2hvdWxkIGdvIGluIG1pZGRsZSBiL2MgaXQgY2FuXG4gICAgc3ViRGlyID0gJ21pZGRsZSc7XG4gIH0gZWxzZSBpZiAoYmVsb3dPclJpZ2h0ID4gMCkge1xuICAgIC8vIGNhcmV0IHNob3VsZCBnbyBhdCB0b3AgZm9yIGxlZnQvcmlnaHQgYW5kIGxlZnQgZm9yIHVwL2Rvd25cbiAgICBzdWJEaXIgPSBtYWluRGlyID09PSAnbGVmdCcgfHwgbWFpbkRpciA9PT0gJ3JpZ2h0JyA/ICd1cCcgOiAnbGVmdCc7XG4gIH0gZWxzZSB7XG4gICAgLy8gY2FyZXQgc2hvdWxkIGdvIGF0IGJvdHRvbSBmb3IgbGVmdC9yaWdodCBhbmQgcmlnaHQgZm9yIHVwL2Rvd25cbiAgICBzdWJEaXIgPSBtYWluRGlyID09PSAnbGVmdCcgfHwgbWFpbkRpciA9PT0gJ3JpZ2h0JyA/ICdkb3duJyA6ICdyaWdodCc7XG4gIH1cbiAgcmV0dXJuIHN1YkRpcjtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhbW91bnQgdGhlIGZseW91dCAmIGNhcmV0IG5lZWQgdG8gc2hpZnQgb3ZlciB0byBhbGlnbiB3aXRoIGRlc2lnbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGNFZGdlU2hpZnRzKFxuICBzdWJEaXI6IFN1YkRpcixcbiAgdHJpZ2dlclJlY3Q6IENsaWVudFJlY3QsXG4gIHdpbmRvd1NpemU6IFdpbmRvd1xuKSB7XG4gIC8vIFRhcmdldCB2YWx1ZXMgZm9yIGZseW91dCBhbmQgY2FyZXQgc2hpZnRzXG4gIGxldCBmbHlvdXRWZXJ0aWNhbFNoaWZ0ID1cbiAgICBDQVJFVF9PRkZTRVRfRlJPTV9TSURFIC0gKHRyaWdnZXJSZWN0LmhlaWdodCAtIENBUkVUX0hFSUdIVCkgLyAyO1xuICBsZXQgZmx5b3V0SG9yaXpvbnRhbFNoaWZ0ID1cbiAgICBDQVJFVF9PRkZTRVRfRlJPTV9TSURFIC0gKHRyaWdnZXJSZWN0LndpZHRoIC0gQ0FSRVRfSEVJR0hUKSAvIDI7XG4gIGxldCBjYXJldFZlcnRpY2FsU2hpZnQgPSBDQVJFVF9IRUlHSFQ7XG4gIGxldCBjYXJldEhvcml6b250YWxTaGlmdCA9IENBUkVUX0hFSUdIVDtcblxuICAvLyBDb3ZlcnMgZWRnZSBjYXNlIHdoZXJlIHRyaWdnZXIgaXMgaW4gYSBjb3JuZXIgYW5kIHdlIG5lZWQgdG8gYWRqdXN0IHRoZSBvZmZzZXQgb2YgdGhlIGNhcmV0XG4gIC8vIHRvIHNvbWV0aGluZyBzbWFsbGVyIHRoYW4gbm9ybWFsIGluIG9yZGVyXG4gIGNvbnN0IGlzQ2xvc2VWZXJ0aWNhbGx5ID1cbiAgICB0cmlnZ2VyUmVjdC50b3AgLSBmbHlvdXRWZXJ0aWNhbFNoaWZ0IDwgMCB8fFxuICAgIHRyaWdnZXJSZWN0LmJvdHRvbSArIGZseW91dFZlcnRpY2FsU2hpZnQgPiB3aW5kb3dTaXplLmhlaWdodDtcbiAgY29uc3QgaXNDbG9zZUhvcml6b250YWxseSA9XG4gICAgdHJpZ2dlclJlY3QubGVmdCAtIGZseW91dEhvcml6b250YWxTaGlmdCA8IDAgfHxcbiAgICB0cmlnZ2VyUmVjdC5yaWdodCArIGZseW91dEhvcml6b250YWxTaGlmdCA+IHdpbmRvd1NpemUud2lkdGg7XG4gIGlmIChpc0Nsb3NlVmVydGljYWxseSkge1xuICAgIGZseW91dFZlcnRpY2FsU2hpZnQgPVxuICAgICAgQk9SREVSX1JBRElVUyAtICh0cmlnZ2VyUmVjdC5oZWlnaHQgLSBDQVJFVF9IRUlHSFQpIC8gMjtcbiAgICBjYXJldFZlcnRpY2FsU2hpZnQgPSBCT1JERVJfUkFESVVTO1xuICB9XG4gIGlmIChpc0Nsb3NlSG9yaXpvbnRhbGx5KSB7XG4gICAgZmx5b3V0SG9yaXpvbnRhbFNoaWZ0ID1cbiAgICAgIEJPUkRFUl9SQURJVVMgLSAodHJpZ2dlclJlY3Qud2lkdGggLSBDQVJFVF9IRUlHSFQpIC8gMjtcbiAgICBjYXJldEhvcml6b250YWxTaGlmdCA9IEJPUkRFUl9SQURJVVM7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZseW91dDoge1xuICAgICAgeDogZmx5b3V0SG9yaXpvbnRhbFNoaWZ0LFxuICAgICAgeTogZmx5b3V0VmVydGljYWxTaGlmdCxcbiAgICB9LFxuICAgIGNhcmV0OiB7XG4gICAgICB4OiBjYXJldEhvcml6b250YWxTaGlmdCxcbiAgICAgIHk6IGNhcmV0VmVydGljYWxTaGlmdCxcbiAgICB9LFxuICB9O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgZmx5b3V0IGFuZCBjYXJldCBvZmZzZXRzIGZvciBzdHlsaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RPZmZzZXRzKFxuICBiYXNlOiB7IHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIgfSxcbiAgZWRnZVNoaWZ0OiBFZGdlU2hpZnQsXG4gIGZseW91dFNpemU6IEZseW91dCxcbiAgbWFpbkRpcjogTWFpbkRpcixcbiAgc3ViRGlyOiBTdWJEaXIsXG4gIHRyaWdnZXJSZWN0OiBDbGllbnRSZWN0XG4pIHtcbiAgbGV0IGZseW91dExlZnQgPSBiYXNlLmxlZnQ7XG4gIGxldCBmbHlvdXRUb3AgPSBiYXNlLnRvcDtcblxuICBsZXQgY2FyZXRUb3AgPSBtYWluRGlyID09PSAnZG93bicgPyAtQ0FSRVRfSEVJR0hUIDogbnVsbDtcbiAgbGV0IGNhcmV0UmlnaHQgPSBtYWluRGlyID09PSAnbGVmdCcgPyAtQ0FSRVRfSEVJR0hUIDogbnVsbDtcbiAgbGV0IGNhcmV0Qm90dG9tID0gbnVsbDtcbiAgbGV0IGNhcmV0TGVmdCA9IG1haW5EaXIgPT09ICdyaWdodCcgPyAtQ0FSRVRfSEVJR0hUIDogbnVsbDtcblxuICBpZiAoc3ViRGlyID09PSAndXAnKSB7XG4gICAgZmx5b3V0VG9wID0gYmFzZS50b3AgLSBlZGdlU2hpZnQuZmx5b3V0Lnk7XG4gICAgY2FyZXRUb3AgPSBlZGdlU2hpZnQuY2FyZXQueTtcbiAgfSBlbHNlIGlmIChzdWJEaXIgPT09ICdkb3duJykge1xuICAgIGZseW91dFRvcCA9XG4gICAgICBiYXNlLnRvcCAtIGZseW91dFNpemUuaGVpZ2h0ICsgdHJpZ2dlclJlY3QuaGVpZ2h0ICsgZWRnZVNoaWZ0LmZseW91dC55O1xuICAgIGNhcmV0Qm90dG9tID0gZWRnZVNoaWZ0LmNhcmV0Lnk7XG4gIH0gZWxzZSBpZiAoc3ViRGlyID09PSAnbGVmdCcpIHtcbiAgICBmbHlvdXRMZWZ0ID0gYmFzZS5sZWZ0IC0gZWRnZVNoaWZ0LmZseW91dC54O1xuICAgIGNhcmV0TGVmdCA9IGVkZ2VTaGlmdC5jYXJldC54O1xuICB9IGVsc2UgaWYgKHN1YkRpciA9PT0gJ3JpZ2h0Jykge1xuICAgIGZseW91dExlZnQgPVxuICAgICAgYmFzZS5sZWZ0IC0gZmx5b3V0U2l6ZS53aWR0aCArIHRyaWdnZXJSZWN0LndpZHRoICsgZWRnZVNoaWZ0LmZseW91dC54O1xuICAgIGNhcmV0UmlnaHQgPSBlZGdlU2hpZnQuY2FyZXQueDtcbiAgfSBlbHNlIGlmIChzdWJEaXIgPT09ICdtaWRkbGUnKSB7XG4gICAgaWYgKG1haW5EaXIgPT09ICdsZWZ0JyB8fCBtYWluRGlyID09PSAncmlnaHQnKSB7XG4gICAgICBjb25zdCB0cmlnZ2VyTWlkID0gZmx5b3V0VG9wICsgdHJpZ2dlclJlY3QuaGVpZ2h0IC8gMjtcbiAgICAgIGZseW91dFRvcCA9IHRyaWdnZXJNaWQgLSBmbHlvdXRTaXplLmhlaWdodCAvIDI7XG4gICAgICBjYXJldFRvcCA9IChmbHlvdXRTaXplLmhlaWdodCAtIENBUkVUX0hFSUdIVCkgLyAyO1xuICAgIH1cbiAgICBpZiAobWFpbkRpciA9PT0gJ3VwJyB8fCBtYWluRGlyID09PSAnZG93bicpIHtcbiAgICAgIGNvbnN0IHRyaWdnZXJNaWQgPSBmbHlvdXRMZWZ0ICsgdHJpZ2dlclJlY3Qud2lkdGggLyAyO1xuICAgICAgZmx5b3V0TGVmdCA9IHRyaWdnZXJNaWQgLSBmbHlvdXRTaXplLndpZHRoIC8gMjtcbiAgICAgIGNhcmV0TGVmdCA9IChmbHlvdXRTaXplLndpZHRoIC0gQ0FSRVRfSEVJR0hUKSAvIDI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmbHlvdXRPZmZzZXQ6IHtcbiAgICAgIHRvcDogZmx5b3V0VG9wLFxuICAgICAgbGVmdDogZmx5b3V0TGVmdCxcbiAgICB9LFxuICAgIGNhcmV0T2Zmc2V0OiB7XG4gICAgICB0b3A6IGNhcmV0VG9wLFxuICAgICAgcmlnaHQ6IGNhcmV0UmlnaHQsXG4gICAgICBib3R0b206IGNhcmV0Qm90dG9tLFxuICAgICAgbGVmdDogY2FyZXRMZWZ0LFxuICAgIH0sXG4gIH07XG59XG5cbi8qIENhbGN1bGF0ZXMgYmFzZWxpbmUgdG9wIGFuZCBsZWZ0IG9mZnNldCBmb3IgZmx5b3V0ICovXG5leHBvcnQgZnVuY3Rpb24gYmFzZU9mZnNldHMoXG4gIHJlbGF0aXZlT2Zmc2V0OiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sXG4gIGZseW91dFNpemU6IEZseW91dCxcbiAgbWFpbkRpcjogTWFpbkRpcixcbiAgdHJpZ2dlclJlY3Q6IENsaWVudFJlY3QsXG4gIHdpbmRvd1NpemU6IFdpbmRvd1xuKSB7XG4gIGNvbnN0IEhBTEZfQ0FSRVQgPSBDQVJFVF9IRUlHSFQgLyAyO1xuICAvLyBUT1AgT0ZGU0VUXG4gIGxldCB0b3A7XG4gIGlmIChtYWluRGlyID09PSAnZG93bicpIHtcbiAgICB0b3AgPSB3aW5kb3dTaXplLnNjcm9sbFkgKyB0cmlnZ2VyUmVjdC5ib3R0b20gKyBIQUxGX0NBUkVUO1xuICB9IGVsc2UgaWYgKG1haW5EaXIgPT09ICd1cCcpIHtcbiAgICB0b3AgPVxuICAgICAgd2luZG93U2l6ZS5zY3JvbGxZICsgKHRyaWdnZXJSZWN0LnRvcCAtIGZseW91dFNpemUuaGVpZ2h0IC0gSEFMRl9DQVJFVCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gbGVmdCBhbmQgcmlnaHRcbiAgICB0b3AgPSB3aW5kb3dTaXplLnNjcm9sbFkgKyB0cmlnZ2VyUmVjdC50b3A7XG4gIH1cblxuICAvLyBMRUZUIE9GRlNFVFxuICBsZXQgbGVmdDtcbiAgaWYgKG1haW5EaXIgPT09ICdsZWZ0Jykge1xuICAgIGxlZnQgPVxuICAgICAgd2luZG93U2l6ZS5zY3JvbGxYICsgKHRyaWdnZXJSZWN0LmxlZnQgLSBmbHlvdXRTaXplLndpZHRoIC0gSEFMRl9DQVJFVCk7XG4gIH0gZWxzZSBpZiAobWFpbkRpciA9PT0gJ3JpZ2h0Jykge1xuICAgIGxlZnQgPSB3aW5kb3dTaXplLnNjcm9sbFggKyB0cmlnZ2VyUmVjdC5yaWdodCArIEhBTEZfQ0FSRVQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gZG93biBhbmQgdXBcbiAgICBsZWZ0ID0gd2luZG93U2l6ZS5zY3JvbGxYICsgdHJpZ2dlclJlY3QubGVmdDtcbiAgfVxuXG4gIC8vIEFkanVzdHMgZm9yIHRoZSByZWxhdGl2ZSBwYXJlbnQgY29udGFpbmVyXG4gIHRvcCAtPSByZWxhdGl2ZU9mZnNldC55O1xuICBsZWZ0IC09IHJlbGF0aXZlT2Zmc2V0Lng7XG4gIHJldHVybiB7IHRvcCwgbGVmdCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGZseW91dE9mZnNldDoge1xuICAgICAgdG9wOiB1bmRlZmluZWQsXG4gICAgICByaWdodDogdW5kZWZpbmVkLFxuICAgICAgYm90dG9tOiB1bmRlZmluZWQsXG4gICAgICBsZWZ0OiB1bmRlZmluZWQsXG4gICAgfSxcbiAgICBjYXJldE9mZnNldDoge1xuICAgICAgdG9wOiB1bmRlZmluZWQsXG4gICAgICByaWdodDogdW5kZWZpbmVkLFxuICAgICAgYm90dG9tOiB1bmRlZmluZWQsXG4gICAgICBsZWZ0OiB1bmRlZmluZWQsXG4gICAgfSxcbiAgICBtYWluRGlyOiBudWxsLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0Rmx5b3V0UG9zaXRpb24odGhpcy5wcm9wcyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5zaG91bGRGb2N1cyAmJiB0aGlzLmZseW91dCkge1xuICAgICAgICB0aGlzLmZseW91dC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcm9wcy5vbkNsaWNrLCB0cnVlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5wcm9wcy5vblJlc2l6ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnByb3BzLm9uS2V5RG93bik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUHJvcHMpIHtcbiAgICB0aGlzLnNldEZseW91dFBvc2l0aW9uKG5leHRQcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJvcHMub25DbGljaywgdHJ1ZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucHJvcHMub25SZXNpemUpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5wcm9wcy5vbktleURvd24pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIG1haW4gZGlyZWNpdG9uLCBzdWIgZGlyZWN0aW9uLCBhbmQgY29ycmVzcG9uZGluZyBvZmZzZXRzIG5lZWRlZFxuICAgKiB0byBjb3JyZWN0bHkgcG9zaXRpb24gdGhlIG9mZnNldFxuICAgKi9cbiAgc2V0Rmx5b3V0UG9zaXRpb24gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgcmVsYXRpdmVPZmZzZXQsXG4gICAgICBpZGVhbERpcmVjdGlvbixcbiAgICAgIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcixcbiAgICAgIHRyaWdnZXJSZWN0LFxuICAgICAgd2lkdGgsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgY29uc3Qgd2luZG93U2l6ZSA9IHtcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgc2Nyb2xsWTogcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yID8gMCA6IHdpbmRvdy5zY3JvbGxZLCAvLyBzY3JvbGwgbm90IG5lZWRlZCBmb3IgcmVsYXRpdmUgZWxlbWVudHNcbiAgICAgIHNjcm9sbFg6IHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvciA/IDAgOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICB9O1xuXG4gICAgY29uc3QgZmx5b3V0U2l6ZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5mbHlvdXQgPyB0aGlzLmZseW91dC5jbGllbnRIZWlnaHQgOiAwLFxuICAgICAgd2lkdGgsXG4gICAgfTtcblxuICAgIC8vIEZpcnN0IGNob29zZSBvbmUgb2YgNCBtYWluIGRpcmVjdGlvblxuICAgIGNvbnN0IG1haW5EaXIgPSBnZXRNYWluRGlyKFxuICAgICAgZmx5b3V0U2l6ZSxcbiAgICAgIGlkZWFsRGlyZWN0aW9uLFxuICAgICAgdHJpZ2dlclJlY3QsXG4gICAgICB3aW5kb3dTaXplXG4gICAgKTtcblxuICAgIC8vIE5vdyB0aGF0IHdlIGhhdmUgdGhlIG1haW4gZGlyZWN0aW9uLCBjaG9zZSBmcm9tIDMgY2FyZXQgcGxhY2VtZW50cyBmb3IgdGhhdCBkaXJlY3Rpb25cbiAgICBjb25zdCBzdWJEaXIgPSBnZXRTdWJEaXIoZmx5b3V0U2l6ZSwgbWFpbkRpciwgdHJpZ2dlclJlY3QsIHdpbmRvd1NpemUpO1xuXG4gICAgLy8gR2V0cyB0aGUgYmFzZSBvZmZzZXQgdGhhdCBwb3NpdGlvbnMgdGhlIGZseW91dCBiYXNlZCBvbiB0aGUgbWFpbiBkaXJlY3Rpb24gb25seVxuICAgIGNvbnN0IGJhc2UgPSBiYXNlT2Zmc2V0cyhcbiAgICAgIHJlbGF0aXZlT2Zmc2V0LFxuICAgICAgZmx5b3V0U2l6ZSxcbiAgICAgIG1haW5EaXIsXG4gICAgICB0cmlnZ2VyUmVjdCxcbiAgICAgIHdpbmRvd1NpemVcbiAgICApO1xuXG4gICAgLy8gR2V0cyB0aGUgZWRnZSBzaGlmdHMgZm9yIHRoZSBmbHlvdXRcbiAgICBjb25zdCBlZGdlU2hpZnRzID0gY2FsY0VkZ2VTaGlmdHMoc3ViRGlyLCB0cmlnZ2VyUmVjdCwgd2luZG93U2l6ZSk7XG5cbiAgICAvLyBBZGp1c3RzIGZvciB0aGUgc3ViZGlyZWN0aW9uIG9mIHRoZSBjYXJldFxuICAgIGNvbnN0IHsgZmx5b3V0T2Zmc2V0LCBjYXJldE9mZnNldCB9ID0gYWRqdXN0T2Zmc2V0cyhcbiAgICAgIGJhc2UsXG4gICAgICBlZGdlU2hpZnRzLFxuICAgICAgZmx5b3V0U2l6ZSxcbiAgICAgIG1haW5EaXIsXG4gICAgICBzdWJEaXIsXG4gICAgICB0cmlnZ2VyUmVjdFxuICAgICk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNhcmV0T2Zmc2V0LFxuICAgICAgZmx5b3V0T2Zmc2V0LFxuICAgICAgbWFpbkRpcixcbiAgICB9KTtcbiAgfTtcblxuICBmbHlvdXQ6ID9IVE1MRWxlbWVudDtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBiZ0NvbG9yLCBjaGlsZHJlbiwgd2lkdGggfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBOZWVkZWQgdG8gcHJldmVudCBVSSB0aHJhc2hpbmdcbiAgICBjb25zdCB2aXNpYmlsaXR5ID0gdGhpcy5zdGF0ZS5tYWluRGlyID09PSBudWxsID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGAke2JnQ29sb3J9QmdgO1xuICAgIGNvbnN0IHN0cm9rZSA9IGJnQ29sb3IgPT09ICd3aGl0ZScgPyAnI2VmZWZlZicgOiBudWxsO1xuICAgIGNvbnN0IGJvcmRlckNvbG9yID0gYmdDb2xvciA9PT0gJ3doaXRlJyA/ICdsaWdodEdyYXknIDogYmdDb2xvcjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cbiAgICAgICAgc3R5bGU9e3sgc3Ryb2tlLCB2aXNpYmlsaXR5LCAuLi50aGlzLnN0YXRlLmZseW91dE9mZnNldCB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgY29sb3JzW2JhY2tncm91bmRdLFxuICAgICAgICAgICAgY29sb3JzW2JvcmRlckNvbG9yXSxcbiAgICAgICAgICAgIHN0eWxlcy5kaW1lbnNpb25zLFxuICAgICAgICAgICAgc3R5bGVzLmNvbnRlbnRzXG4gICAgICAgICAgKX1cbiAgICAgICAgICByZWY9e2MgPT4ge1xuICAgICAgICAgICAgdGhpcy5mbHlvdXQgPSBjO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5kaW1lbnNpb25zLCBzdHlsZXMuaW5uZXJDb250ZW50cyl9XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY29sb3JzW2JnQ29sb3JdLCBzdHlsZXMuY2FyZXQpfVxuICAgICAgICAgICAgc3R5bGU9e3sgLi4udGhpcy5zdGF0ZS5jYXJldE9mZnNldCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJldCBkaXJlY3Rpb249e3RoaXMuc3RhdGUubWFpbkRpcn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8qIGVzbGludCByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlczogMCAqL1xuQ29udGVudHMucHJvcFR5cGVzID0ge1xuICBiZ0NvbG9yOiBQcm9wVHlwZXMub25lT2YoWydkYXJrR3JheScsICd3aGl0ZScsICdvcmFuZ2UnXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaWRlYWxEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ3VwJywgJ3JpZ2h0JywgJ2Rvd24nLCAnbGVmdCddKSxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblJlc2l6ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVsYXRpdmVPZmZzZXQ6IFByb3BUeXBlcy5leGFjdCh7IHg6IFByb3BUeXBlcy5udW1iZXIsIHk6IFByb3BUeXBlcy5udW1iZXIgfSksXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3VsZEZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHJpZ2dlclJlY3Q6IFByb3BUeXBlcy5leGFjdCh7XG4gICAgYm90dG9tOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsZWZ0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRvcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gvQm94JztcbmltcG9ydCBDb250ZW50cyBmcm9tICcuL0NvbnRlbnRzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFuY2hvcj86IEhUTUxFbGVtZW50LFxuICBiZ0NvbG9yOiAnZGFya0dyYXknIHwgJ3doaXRlJyB8ICdvcmFuZ2UnLFxuICBjaGlsZHJlbj86IGFueSxcbiAgaWRlYWxEaXJlY3Rpb24/OiAndXAnIHwgJ3JpZ2h0JyB8ICdkb3duJyB8ICdsZWZ0JyxcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkLFxuICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3I6IGJvb2xlYW4sXG4gIHNob3VsZEZvY3VzPzogYm9vbGVhbixcbiAgc2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgbnVtYmVyLFxufH07XG5cbmNvbnN0IFNJWkVfV0lEVEhfTUFQID0ge1xuICB4czogMTg1LFxuICBzbTogMjMwLFxuICBtZDogMjg0LFxuICBsZzogMzIwLFxuICB4bDogMzc1LFxufTtcblxuY29uc3QgRVNDQVBFX0tFWV9DT0RFID0gMjc7XG5cbnR5cGUgQ2xpZW50UmVjdCA9IHtcbiAgYm90dG9tOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBsZWZ0OiBudW1iZXIsXG4gIHJpZ2h0OiBudW1iZXIsXG4gIHRvcDogbnVtYmVyLFxuICB3aWR0aDogbnVtYmVyLFxufTtcblxudHlwZSBTdGF0ZSA9IHtcbiAgcmVsYXRpdmVPZmZzZXQ6IHtcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICB9LFxuICB0cmlnZ2VyQm91bmRpbmdSZWN0OiBDbGllbnRSZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIHJlbGF0aXZlT2Zmc2V0OiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9LFxuICAgIHRyaWdnZXJCb3VuZGluZ1JlY3Q6IHtcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIHdpZHRoOiAwLFxuICAgIH0sXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVUcmlnZ2VyUmVjdCh0aGlzLnByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQcm9wcykge1xuICAgIHRoaXMudXBkYXRlVHJpZ2dlclJlY3QobmV4dFByb3BzKTtcbiAgfVxuXG4gIGNvbnRlbnRzOiA/SFRNTEVsZW1lbnQ7XG5cbiAgaGFuZGxlS2V5RG93biA9IChldmVudDogeyBrZXlDb2RlOiBudW1iZXIgfSkgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEVfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMucHJvcHMub25EaXNtaXNzKCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZVBhZ2VDbGljayA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBpZiAoXG4gICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiBOb2RlICYmXG4gICAgICB0aGlzLnByb3BzLmFuY2hvciAmJlxuICAgICAgIXRoaXMucHJvcHMuYW5jaG9yLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgIHRoaXMuY29udGVudHMgJiZcbiAgICAgICF0aGlzLmNvbnRlbnRzLmNvbnRhaW5zKGV2ZW50LnRhcmdldClcbiAgICApIHtcbiAgICAgIHRoaXMucHJvcHMub25EaXNtaXNzKCk7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZVRyaWdnZXJSZWN0ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgYW5jaG9yLCBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3IgfSA9IHByb3BzO1xuXG4gICAgbGV0IHRyaWdnZXJCb3VuZGluZ1JlY3Q7XG4gICAgbGV0IHJlbGF0aXZlT2Zmc2V0O1xuICAgIGlmIChhbmNob3IpIHtcbiAgICAgIHRyaWdnZXJCb3VuZGluZ1JlY3QgPSBhbmNob3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIC8vIE5lZWRlZCBmb3IgY29ycmVjdCBwb3NpdGlvbmluZyB3aXRoaW4gQ29udGVudHMuanNcbiAgICAgIHJlbGF0aXZlT2Zmc2V0ID0ge1xuICAgICAgICB4OiBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3JcbiAgICAgICAgICA/IHRyaWdnZXJCb3VuZGluZ1JlY3QubGVmdCAtIGFuY2hvci5vZmZzZXRMZWZ0XG4gICAgICAgICAgOiAwLFxuICAgICAgICB5OiBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3JcbiAgICAgICAgICA/IHRyaWdnZXJCb3VuZGluZ1JlY3QudG9wIC0gYW5jaG9yLm9mZnNldFRvcFxuICAgICAgICAgIDogMCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbGF0aXZlT2Zmc2V0LCB0cmlnZ2VyQm91bmRpbmdSZWN0IH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhbmNob3IsXG4gICAgICBiZ0NvbG9yLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZGVhbERpcmVjdGlvbixcbiAgICAgIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcixcbiAgICAgIHNob3VsZEZvY3VzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghYW5jaG9yKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMucHJvcHMuc2l6ZSA/IHRoaXMucHJvcHMuc2l6ZSA6ICdzbSc7XG4gICAgY29uc3Qgd2lkdGggPSB0eXBlb2Ygc2l6ZSA9PT0gJ3N0cmluZycgPyBTSVpFX1dJRFRIX01BUFtzaXplXSA6IHNpemU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3g+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e2MgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50cyA9IGM7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLmNvbnRlbnRzID8gKFxuICAgICAgICAgICAgPENvbnRlbnRzXG4gICAgICAgICAgICAgIGJnQ29sb3I9e2JnQ29sb3J9XG4gICAgICAgICAgICAgIGlkZWFsRGlyZWN0aW9uPXtpZGVhbERpcmVjdGlvbn1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVQYWdlQ2xpY2t9XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICAgICAgICBvblJlc2l6ZT17dGhpcy51cGRhdGVUcmlnZ2VyUmVjdH1cbiAgICAgICAgICAgICAgcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yPXtwb3NpdGlvblJlbGF0aXZlVG9BbmNob3J9XG4gICAgICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0PXt0aGlzLnN0YXRlLnJlbGF0aXZlT2Zmc2V0fVxuICAgICAgICAgICAgICBzaG91bGRGb2N1cz17c2hvdWxkRm9jdXN9XG4gICAgICAgICAgICAgIHRyaWdnZXJSZWN0PXt0aGlzLnN0YXRlLnRyaWdnZXJCb3VuZGluZ1JlY3R9XG4gICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9Db250ZW50cz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG5cbkNvbnRyb2xsZXIucHJvcFR5cGVzID0ge1xuICBhbmNob3I6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29udGFpbnM6IFByb3BUeXBlcy5mdW5jLFxuICAgIGdldEJvdW5kaW5nQ2xpZW50UmVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIH0pLFxuICBiZ0NvbG9yOiBQcm9wVHlwZXMub25lT2YoWydkYXJrR3JheScsICd3aGl0ZScsICdvcmFuZ2UnXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaWRlYWxEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ3VwJywgJ3JpZ2h0JywgJ2Rvd24nLCAnbGVmdCddKSxcbiAgb25EaXNtaXNzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3I6IFByb3BUeXBlcy5ib29sLFxuICBzaG91bGRGb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXSksIC8vIGRlZmF1bHQ6IHNtXG4gIF0pLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm94IGZyb20gJy4uL0JveC9Cb3gnO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi4vRmx5b3V0VXRpbHMvQ29udHJvbGxlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi4vVGV4dC9UZXh0JztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFuY2hvcjogP2FueSxcbiAgaWQ/OiBzdHJpbmcsXG4gIGlkZWFsRGlyZWN0aW9uPzogJ3VwJyB8ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcsXG4gIG1lc3NhZ2U6IHN0cmluZyxcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkLFxuICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3I/OiBib29sZWFuLFxuICBzaXplPzogJ3hzJyB8ICdzbScgfCAnbWQnIC8qIGRlZmF1bHQgc20gKi8sXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3JGbHlvdXQocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBhbmNob3IsXG4gICAgaWQsXG4gICAgaWRlYWxEaXJlY3Rpb24sXG4gICAgbWVzc2FnZSxcbiAgICBvbkRpc21pc3MsXG4gICAgcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yID0gdHJ1ZSxcbiAgICBzaXplLFxuICB9ID0gcHJvcHM7XG5cbiAgaWYgKCFhbmNob3IpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRyb2xsZXJcbiAgICAgIGFuY2hvcj17YW5jaG9yfVxuICAgICAgYmdDb2xvcj1cIm9yYW5nZVwiXG4gICAgICBpZGVhbERpcmVjdGlvbj17aWRlYWxEaXJlY3Rpb259XG4gICAgICBvbkRpc21pc3M9e29uRGlzbWlzc31cbiAgICAgIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcj17cG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yfVxuICAgICAgc2l6ZT17c2l6ZX1cbiAgICA+XG4gICAgICA8Qm94IHBhZGRpbmc9ezN9PlxuICAgICAgICA8VGV4dCBib2xkIGNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAgICA8c3BhbiBpZD17aWR9PnttZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250cm9sbGVyPlxuICApO1xufVxuXG5FcnJvckZseW91dC5wcm9wVHlwZXMgPSB7XG4gIGFuY2hvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250YWluczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgfSksXG4gIGlkZWFsRGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWyd1cCcsICdyaWdodCcsICdkb3duJywgJ2xlZnQnXSksXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb25EaXNtaXNzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3I6IFByb3BUeXBlcy5ib29sLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgY29udGFpbmVySGVpZ2h0OiBudW1iZXIsXG4gIGlzQXRFbmQ/OiBib29sZWFuLFxuICBpc0ZldGNoaW5nOiBib29sZWFuLFxuICBmZXRjaE1vcmU/OiBGdW5jdGlvbixcbiAgc2Nyb2xsSGVpZ2h0OiBudW1iZXIsXG4gIHNjcm9sbFRvcDogbnVtYmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hJdGVtcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb250YWluZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBpc0F0RW5kOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0ZldGNoaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGZldGNoTW9yZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2Nyb2xsSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgc2Nyb2xsVG9wOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc2V0VGltZW91dCh0aGlzLmNoZWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBjaGVjayA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjb250YWluZXJIZWlnaHQsXG4gICAgICBpc0F0RW5kLFxuICAgICAgaXNGZXRjaGluZyxcbiAgICAgIGZldGNoTW9yZSxcbiAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgIHNjcm9sbFRvcCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChpc0F0RW5kIHx8IGlzRmV0Y2hpbmcgfHwgIWZldGNoTW9yZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzY3JvbGxCdWZmZXIgPSBjb250YWluZXJIZWlnaHQgKiAzO1xuXG4gICAgaWYgKHNjcm9sbFRvcCArIHNjcm9sbEJ1ZmZlciA+IHNjcm9sbEhlaWdodCkge1xuICAgICAgZmV0Y2hNb3JlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGlsZHJlbj86IGFueSxcbiAgb25TY3JvbGw6IChldmVudDogRXZlbnQpID0+IHZvaWQsXG4gIHNjcm9sbENvbnRhaW5lcjogP0hUTUxFbGVtZW50IHwgKCgpID0+ID9IVE1MRWxlbWVudCksXG58fTtcblxuZnVuY3Rpb24gZ2V0U2Nyb2xsQ29udGFpbmVyKHNjcm9sbENvbnRhaW5lcikge1xuICByZXR1cm4gdHlwZW9mIHNjcm9sbENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2Nyb2xsQ29udGFpbmVyKClcbiAgICA6IHNjcm9sbENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG4gICAgb25TY3JvbGw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2Nyb2xsQ29udGFpbmVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pXG4gICAgICAuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSBnZXRTY3JvbGxDb250YWluZXIodGhpcy5wcm9wcy5zY3JvbGxDb250YWluZXIpO1xuICAgIGlmICghc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudXBkYXRlU2Nyb2xsQ29udGFpbmVyKHNjcm9sbENvbnRhaW5lcik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUHJvcHMpIHtcbiAgICBjb25zdCBuZXh0U2Nyb2xsQ29udGFpbmVyID0gZ2V0U2Nyb2xsQ29udGFpbmVyKG5leHRQcm9wcy5zY3JvbGxDb250YWluZXIpO1xuICAgIGlmICghbmV4dFNjcm9sbENvbnRhaW5lciB8fCBuZXh0U2Nyb2xsQ29udGFpbmVyID09PSB0aGlzLnNjcm9sbENvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVNjcm9sbENvbnRhaW5lcihuZXh0U2Nyb2xsQ29udGFpbmVyKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnNjcm9sbENvbnRhaW5lcikge1xuICAgICAgdGhpcy5zY3JvbGxDb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNjcm9sbENvbnRhaW5lclJlZiA9ICgpID0+IHRoaXMuc2Nyb2xsQ29udGFpbmVyO1xuXG4gIHVwZGF0ZVNjcm9sbENvbnRhaW5lcihzY3JvbGxDb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICAvLyBjbGVhbnVwIGV4aXN0aW5nIHNjcm9sbCBjb250YWluZXIgaWYgaXQgZXhpc3RzXG4gICAgICB0aGlzLnNjcm9sbENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgfVxuICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyID0gc2Nyb2xsQ29udGFpbmVyO1xuICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcbiAgfVxuXG4gIGhhbmRsZVNjcm9sbCA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2Nyb2xsKGV2ZW50KTtcbiAgfTtcblxuICBzY3JvbGxDb250YWluZXI6ID9IVE1MRWxlbWVudDtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZShmbjogKCkgPT4gdm9pZCwgdGhyZXNoaG9sZDogbnVtYmVyID0gMTAwKSB7XG4gIGxldCBsYXN0O1xuICBsZXQgZGVmZXJUaW1lcjtcbiAgcmV0dXJuICguLi5hcmdzOiBhbnkpID0+IHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGlmIChsYXN0ICYmIG5vdyA8IGxhc3QgKyB0aHJlc2hob2xkKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZGVmZXJUaW1lcik7XG4gICAgICBkZWZlclRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxhc3QgPSBub3c7XG4gICAgICAgIGZuKC4uLmFyZ3MpO1xuICAgICAgfSwgdGhyZXNoaG9sZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3QgPSBub3c7XG4gICAgICBmbiguLi5hcmdzKTtcbiAgICB9XG4gIH07XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBDYWNoZSB9IGZyb20gJy4vQ2FjaGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWFzdXJlbWVudFN0b3JlPFQsIFY+IGltcGxlbWVudHMgQ2FjaGU8VCwgVj4ge1xuICBtYXA6IFdlYWtNYXA8VCwgVj4gPSBuZXcgV2Vha01hcCgpO1xuXG4gIGdldChrZXk6IFQpOiA/ViB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmdldChrZXkpO1xuICB9XG5cbiAgaGFzKGtleTogVCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXMoa2V5KTtcbiAgfVxuXG4gIHNldChrZXk6IFQsIHZhbHVlOiBWKTogdm9pZCB7XG4gICAgdGhpcy5tYXAuc2V0KGtleSwgdmFsdWUpO1xuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5tYXAgPSBuZXcgV2Vha01hcCgpO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRIZWlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICByZXR1cm4gZWxlbWVudCA9PT0gd2luZG93ID8gd2luZG93LmlubmVySGVpZ2h0IDogZWxlbWVudC5jbGllbnRIZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxQb3MoKSB7XG4gIGlmICh3aW5kb3cuc2Nyb2xsWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gTW9kZXJuIGJyb3dzZXJcbiAgICByZXR1cm4gd2luZG93LnNjcm9sbFk7XG4gIH0gZWxzZSBpZiAoXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAhPT0gdW5kZWZpbmVkXG4gICkge1xuICAgIC8vIElFIHN1cHBvcnQuXG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWxhdGl2ZVNjcm9sbFRvcChlbGVtZW50OiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gIHJldHVybiBlbGVtZW50ID09PSB3aW5kb3dcbiAgICA/IGdldFdpbmRvd1Njcm9sbFBvcygpXG4gICAgOiBlbGVtZW50LnNjcm9sbFRvcCAtIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsSGVpZ2h0KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgcmV0dXJuIGVsZW1lbnQgPT09IHdpbmRvdyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgICA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHRcbiAgICA6IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsUG9zKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgcmV0dXJuIGVsZW1lbnQgPT09IHdpbmRvdyA/IGdldFdpbmRvd1Njcm9sbFBvcygpIDogZWxlbWVudC5zY3JvbGxUb3A7XG59XG4iLCJleHBvcnQgY29uc3QgRGVmYXVsdExheW91dFN5bWJvbCA9IFN5bWJvbCgnZGVmYXVsdCcpO1xuZXhwb3J0IGNvbnN0IFVuaWZvcm1Sb3dMYXlvdXRTeW1ib2wgPSBTeW1ib2woJ3VuaWZvcm1Sb3cnKTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgdHlwZSB7IENhY2hlIH0gZnJvbSAnLi9DYWNoZSc7XG5cbmNvbnN0IG1pbmRleCA9IGFyciA9PiB7XG4gIGxldCBpZHggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcnJbaV0gPCBhcnJbaWR4XSkge1xuICAgICAgaWR4ID0gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlkeDtcbn07XG5cbmNvbnN0IG9mZnNjcmVlbiA9ICh3aWR0aCwgaGVpZ2h0ID0gSW5maW5pdHkpID0+ICh7XG4gIHRvcDogLTk5OTksXG4gIGxlZnQ6IC05OTk5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IDxUPih7XG4gIGNhY2hlLFxuICBjb2x1bW5XaWR0aCA9IDIzNixcbiAgZ3V0dGVyID0gMTQsXG4gIG1pbkNvbHMgPSAyLFxuICB3aWR0aCxcbn06IHt8XG4gIGNvbHVtbldpZHRoPzogbnVtYmVyLFxuICBndXR0ZXI/OiBudW1iZXIsXG4gIGNhY2hlOiBDYWNoZTxULCBudW1iZXI+LFxuICBtaW5Db2xzPzogbnVtYmVyLFxuICB3aWR0aD86ID9udW1iZXIsXG58fSkgPT4gKGl0ZW1zOiBBcnJheTwqPikgPT4ge1xuICBpZiAod2lkdGggPT0gbnVsbCkge1xuICAgIHJldHVybiBpdGVtcy5tYXAoKCkgPT4gb2Zmc2NyZWVuKGNvbHVtbldpZHRoKSk7XG4gIH1cblxuICBjb25zdCBjb2x1bW5XaWR0aEFuZEd1dHRlciA9IGNvbHVtbldpZHRoICsgZ3V0dGVyO1xuICBjb25zdCBjb2x1bW5Db3VudCA9IE1hdGgubWF4KFxuICAgIE1hdGguZmxvb3IoKHdpZHRoICsgZ3V0dGVyKSAvIGNvbHVtbldpZHRoQW5kR3V0dGVyKSxcbiAgICBtaW5Db2xzXG4gICk7XG4gIC8vIHRoZSB0b3RhbCBoZWlnaHQgb2YgZWFjaCBjb2x1bW5cbiAgY29uc3QgaGVpZ2h0cyA9IG5ldyBBcnJheShjb2x1bW5Db3VudCkuZmlsbCgwKTtcbiAgY29uc3QgY2VudGVyT2Zmc2V0ID0gTWF0aC5tYXgoXG4gICAgTWF0aC5mbG9vcigod2lkdGggLSBjb2x1bW5XaWR0aEFuZEd1dHRlciAqIGNvbHVtbkNvdW50ICsgZ3V0dGVyKSAvIDIpLFxuICAgIDBcbiAgKTtcblxuICByZXR1cm4gaXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBhY2M7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIGNvbnN0IGhlaWdodCA9IGNhY2hlLmdldChpdGVtKTtcbiAgICBsZXQgcG9zaXRpb247XG5cbiAgICBpZiAoaGVpZ2h0ID09IG51bGwpIHtcbiAgICAgIHBvc2l0aW9uID0gb2Zmc2NyZWVuKGNvbHVtbldpZHRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaGVpZ2h0QW5kR3V0dGVyID0gaGVpZ2h0ICsgZ3V0dGVyO1xuICAgICAgY29uc3QgY29sID0gbWluZGV4KGhlaWdodHMpO1xuICAgICAgY29uc3QgdG9wID0gaGVpZ2h0c1tjb2xdO1xuICAgICAgY29uc3QgbGVmdCA9IGNvbCAqIGNvbHVtbldpZHRoQW5kR3V0dGVyICsgY2VudGVyT2Zmc2V0O1xuXG4gICAgICBoZWlnaHRzW2NvbF0gKz0gaGVpZ2h0QW5kR3V0dGVyO1xuICAgICAgcG9zaXRpb24gPSB7IHRvcCwgbGVmdCwgd2lkdGg6IGNvbHVtbldpZHRoLCBoZWlnaHQgfTtcbiAgICB9XG4gICAgcG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0sIFtdKTtcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBDYWNoZSB9IGZyb20gJy4vQ2FjaGUnO1xuXG5jb25zdCBvZmZzY3JlZW4gPSAod2lkdGgsIGhlaWdodCA9IEluZmluaXR5KSA9PiAoe1xuICB0b3A6IC05OTk5LFxuICBsZWZ0OiAtOTk5OSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCA8VD4oe1xuICBjYWNoZSxcbiAgY29sdW1uV2lkdGggPSAyMzYsXG4gIGd1dHRlciA9IDE0LFxuICB3aWR0aCxcbiAgbWluQ29scyA9IDMsXG59OiB7fFxuICBjYWNoZTogQ2FjaGU8VCwgbnVtYmVyPixcbiAgY29sdW1uV2lkdGg/OiBudW1iZXIsXG4gIGd1dHRlcj86IG51bWJlcixcbiAgd2lkdGg/OiA/bnVtYmVyLFxuICBtaW5Db2xzPzogbnVtYmVyLFxufH0pID0+IChpdGVtczogQXJyYXk8VD4pID0+IHtcbiAgaWYgKHdpZHRoID09IG51bGwpIHtcbiAgICByZXR1cm4gaXRlbXMubWFwKCgpID0+IG9mZnNjcmVlbihjb2x1bW5XaWR0aCkpO1xuICB9XG5cbiAgY29uc3QgY29sdW1uV2lkdGhBbmRHdXR0ZXIgPSBjb2x1bW5XaWR0aCArIGd1dHRlcjtcbiAgY29uc3QgY29sdW1uQ291bnQgPSBNYXRoLm1heChcbiAgICBNYXRoLmZsb29yKCh3aWR0aCArIGd1dHRlcikgLyBjb2x1bW5XaWR0aEFuZEd1dHRlciksXG4gICAgbWluQ29sc1xuICApO1xuXG4gIGNvbnN0IHBvc2l0aW9ucyA9IFtdO1xuICBjb25zdCBoZWlnaHRzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGxldCBwb3NpdGlvbjtcbiAgICBjb25zdCBoZWlnaHQgPSBjYWNoZS5nZXQoaXRlbXNbaV0pO1xuXG4gICAgaWYgKGhlaWdodCA9PSBudWxsKSB7XG4gICAgICBwb3NpdGlvbiA9IG9mZnNjcmVlbihjb2x1bW5XaWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGkgJSBjb2x1bW5Db3VudDtcbiAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaSAvIGNvbHVtbkNvdW50KTtcblxuICAgICAgaWYgKGNvbHVtbiA9PT0gMCB8fCBoZWlnaHQgPiBoZWlnaHRzW3Jvd10pIHtcbiAgICAgICAgaGVpZ2h0c1tyb3ddID0gaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0b3AgPVxuICAgICAgICByb3cgPiAwXG4gICAgICAgICAgPyBoZWlnaHRzLnNsaWNlKDAsIHJvdykucmVkdWNlKChzdW0sIHkpID0+IHN1bSArIHkgKyBndXR0ZXIsIDApXG4gICAgICAgICAgOiAwO1xuXG4gICAgICBwb3NpdGlvbiA9IHtcbiAgICAgICAgdG9wLFxuICAgICAgICBsZWZ0OiBjb2x1bW4gKiBjb2x1bW5XaWR0aEFuZEd1dHRlcixcbiAgICAgICAgd2lkdGg6IGNvbHVtbldpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICB9O1xuICAgIH1cbiAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbik7XG4gIH1cbiAgcmV0dXJuIHBvc2l0aW9ucztcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBDYWNoZSB9IGZyb20gJy4vQ2FjaGUnO1xuXG5jb25zdCBtaW5kZXggPSBhcnIgPT4ge1xuICBsZXQgaWR4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYXJyW2ldIDwgYXJyW2lkeF0pIHtcbiAgICAgIGlkeCA9IGk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpZHg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCA8VD4oe1xuICBndXR0ZXIgPSAwLFxuICBjYWNoZSxcbiAgbWluQ29scyA9IDIsXG4gIGlkZWFsQ29sdW1uV2lkdGggPSAyNDAsXG4gIHdpZHRoLFxufToge3xcbiAgZ3V0dGVyPzogbnVtYmVyLFxuICBjYWNoZTogQ2FjaGU8VCwgbnVtYmVyPixcbiAgbWluQ29scz86IG51bWJlcixcbiAgaWRlYWxDb2x1bW5XaWR0aD86IG51bWJlcixcbiAgd2lkdGg/OiA/bnVtYmVyLFxufH0pID0+IHtcbiAgaWYgKHdpZHRoID09IG51bGwpIHtcbiAgICByZXR1cm4gKGl0ZW1zOiBBcnJheTwqPikgPT5cbiAgICAgIGl0ZW1zLm1hcCgoKSA9PiAoe1xuICAgICAgICB0b3A6IEluZmluaXR5LFxuICAgICAgICBsZWZ0OiBJbmZpbml0eSxcbiAgICAgICAgd2lkdGg6IEluZmluaXR5LFxuICAgICAgICBoZWlnaHQ6IEluZmluaXR5LFxuICAgICAgfSkpO1xuICB9XG5cbiAgLy8gXCJUaGlzIGlzIGtpbmQgb2YgY3JhenkhXCIgLSB5b3VcbiAgLy8gWWVzLCBpbmRlZWQuIFRoZSBcImd1ZXNzaW5nXCIgaGVyZSBpcyBtZWFudCB0byByZXBsaWNhdGUgdGhlIHBhc3MgdGhhdCB0aGVcbiAgLy8gb3JpZ2luYWwgaW1wbGVtZW50YXRpb24gdGFrZXMgd2l0aCBDU1MuXG4gIGNvbnN0IGNvbGd1ZXNzID0gTWF0aC5mbG9vcih3aWR0aCAvIGlkZWFsQ29sdW1uV2lkdGgpO1xuICBjb25zdCBjb2x1bW5Db3VudCA9IE1hdGgubWF4KFxuICAgIE1hdGguZmxvb3IoKHdpZHRoIC0gY29sZ3Vlc3MgKiBndXR0ZXIpIC8gaWRlYWxDb2x1bW5XaWR0aCksXG4gICAgbWluQ29sc1xuICApO1xuICBjb25zdCBjb2x1bW5XaWR0aCA9IE1hdGguZmxvb3Iod2lkdGggLyBjb2x1bW5Db3VudCk7XG5cbiAgcmV0dXJuIChpdGVtczogQXJyYXk8VD4pID0+IHtcbiAgICAvLyB0aGUgdG90YWwgaGVpZ2h0IG9mIGVhY2ggY29sdW1uXG4gICAgY29uc3QgaGVpZ2h0cyA9IG5ldyBBcnJheShjb2x1bW5Db3VudCkuZmlsbCgwKTtcblxuICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gYWNjO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gY2FjaGUuZ2V0KGl0ZW0pO1xuICAgICAgbGV0IHBvc2l0aW9uO1xuXG4gICAgICBpZiAoaGVpZ2h0ID09IG51bGwpIHtcbiAgICAgICAgcG9zaXRpb24gPSB7XG4gICAgICAgICAgdG9wOiBJbmZpbml0eSxcbiAgICAgICAgICBsZWZ0OiBJbmZpbml0eSxcbiAgICAgICAgICB3aWR0aDogY29sdW1uV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBJbmZpbml0eSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbCA9IG1pbmRleChoZWlnaHRzKTtcbiAgICAgICAgY29uc3QgdG9wID0gaGVpZ2h0c1tjb2xdO1xuICAgICAgICBjb25zdCBsZWZ0ID0gY29sICogY29sdW1uV2lkdGggKyBndXR0ZXIgLyAyO1xuXG4gICAgICAgIGhlaWdodHNbY29sXSArPSBoZWlnaHQ7XG4gICAgICAgIHBvc2l0aW9uID0ge1xuICAgICAgICAgIHRvcCxcbiAgICAgICAgICBsZWZ0LFxuICAgICAgICAgIHdpZHRoOiBjb2x1bW5XaWR0aCAtIGd1dHRlcixcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgIHJldHVybiBwb3NpdGlvbnM7XG4gICAgfSwgW10pO1xuICB9O1xufTtcbiIsIi8vIEBmbG93XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNvbnJ5TGF5b3V0IHt9XG4iLCIvLyBAZmxvd1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pZm9ybVJvd0xheW91dCB7fVxuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRmV0Y2hJdGVtcyBmcm9tICcuLi9TY3JvbGxGZXRjaC9GZXRjaEl0ZW1zJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NYXNvbnJ5LmNzcyc7XG5pbXBvcnQgU2Nyb2xsQ29udGFpbmVyIGZyb20gJy4uL1Njcm9sbEZldGNoL1Njcm9sbENvbnRhaW5lcic7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi4vdGhyb3R0bGUnO1xuaW1wb3J0IHR5cGUgeyBDYWNoZSB9IGZyb20gJy4vQ2FjaGUnO1xuaW1wb3J0IE1lYXN1cmVtZW50U3RvcmUgZnJvbSAnLi9NZWFzdXJlbWVudFN0b3JlJztcbmltcG9ydCB7XG4gIGdldEVsZW1lbnRIZWlnaHQsXG4gIGdldFJlbGF0aXZlU2Nyb2xsVG9wLFxuICBnZXRTY3JvbGxQb3MsXG59IGZyb20gJy4uL1Njcm9sbEZldGNoL3Njcm9sbFV0aWxzJztcbmltcG9ydCB7XG4gIERlZmF1bHRMYXlvdXRTeW1ib2wsXG4gIFVuaWZvcm1Sb3dMYXlvdXRTeW1ib2wsXG59IGZyb20gJy4vbGVnYWN5TGF5b3V0U3ltYm9scyc7XG5pbXBvcnQgZGVmYXVsdExheW91dCBmcm9tICcuL2RlZmF1bHRMYXlvdXQnO1xuaW1wb3J0IHVuaWZvcm1Sb3dMYXlvdXQgZnJvbSAnLi91bmlmb3JtUm93TGF5b3V0JztcbmltcG9ydCBmdWxsV2lkdGhMYXlvdXQgZnJvbSAnLi9mdWxsV2lkdGhMYXlvdXQnO1xuaW1wb3J0IExlZ2FjeU1hc29ucnlMYXlvdXQgZnJvbSAnLi4vTWFzb25yeS9sYXlvdXQvbWFzb25yeSc7XG5pbXBvcnQgTGVnYWN5VW5pZm9ybVJvd0xheW91dCBmcm9tICcuLi9NYXNvbnJ5L2xheW91dC91bmlmb3JtUm93JztcblxudHlwZSBQcm9wczxUPiA9IHt8XG4gIGNvbHVtbldpZHRoPzogbnVtYmVyLFxuICBjb21wOiBSZWFjdC5Db21wb25lbnRUeXBlPHtcbiAgICBkYXRhOiBULFxuICAgIGl0ZW1JZHg6IG51bWJlcixcbiAgICBpc01lYXN1cmluZzogYm9vbGVhbixcbiAgfT4sXG4gIGZsZXhpYmxlPzogYm9vbGVhbixcbiAgZ3V0dGVyV2lkdGg/OiBudW1iZXIsXG4gIGl0ZW1zOiBBcnJheTxUPixcbiAgbWVhc3VyZW1lbnRTdG9yZTogQ2FjaGU8VCwgKj4sXG4gIG1pbkNvbHM6IG51bWJlcixcbiAgbGF5b3V0PzpcbiAgICB8IERlZmF1bHRMYXlvdXRTeW1ib2xcbiAgICB8IFVuaWZvcm1Sb3dMYXlvdXRTeW1ib2xcbiAgICB8IExlZ2FjeU1hc29ucnlMYXlvdXRcbiAgICB8IExlZ2FjeVVuaWZvcm1Sb3dMYXlvdXQsXG4gIC8vIFN1cHBvcnQgbGVnYWN5IGxvYWRJdGVtcyB1c2FnZS5cbiAgLy8gVE9ETzogU2ltcGxpZnkgbm9uIGZhbHNleSBmbG93dHlwZS5cbiAgbG9hZEl0ZW1zPzpcbiAgICB8IGZhbHNlXG4gICAgfCAoKFxuICAgICAgICA/e1xuICAgICAgICAgIGZyb206IG51bWJlcixcbiAgICAgICAgfVxuICAgICAgKSA9PiB2b2lkIHwgYm9vbGVhbiB8IHt9KSxcbiAgc2Nyb2xsQ29udGFpbmVyPzogKCkgPT4gSFRNTEVsZW1lbnQsXG4gIHNlcnZlclJlbmRlcj86IGJvb2xlYW4sXG4gIHZpcnR1YWxpemU/OiBib29sZWFuLFxufH07XG5cbnR5cGUgU3RhdGUgPSB7fFxuICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzOiBib29sZWFuLFxuICBpc0ZldGNoaW5nOiBib29sZWFuLFxuICBzY3JvbGxUb3A6IG51bWJlcixcbiAgd2lkdGg6ID9udW1iZXIsXG58fTtcblxuY29uc3QgUkVTSVpFX0RFQk9VTkNFID0gMzAwO1xuLy8gTXVsdGlwbGllZCBhZ2FpbnN0IGNvbnRhaW5lciBoZWlnaHQuXG4vLyBUaGUgYW1vdW50IG9mIGV4dHJhIGJ1ZmZlciBzcGFjZSBmb3IgcG9wdWxhdGluZyB2aXNpYmxlIGl0ZW1zLlxuY29uc3QgVklSVFVBTF9CVUZGRVJfRkFDVE9SID0gMC43O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcmltZW50YWxNYXNvbnJ5PFQ+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQcm9wczxUPixcbiAgU3RhdGVcbj4ge1xuICBzdGF0aWMgY3JlYXRlTWVhc3VyZW1lbnRTdG9yZSgpIHtcbiAgICByZXR1cm4gbmV3IE1lYXN1cmVtZW50U3RvcmUoKTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIHByZWZlcnJlZC90YXJnZXQgaXRlbSB3aWR0aC4gSWYgYGZsZXhpYmxlYCBpcyBzZXQsIHRoZSBpdGVtIHdpZHRoIHdpbGxcbiAgICAgKiBncm93IHRvIGZpbGwgY29sdW1uIHNwYWNlLCBhbmQgc2hyaW5rIHRvIGZpdCBpZiBiZWxvdyBtaW4gY29sdW1ucy5cbiAgICAgKi9cbiAgICBjb2x1bW5XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgdG8gcmVuZGVyLlxuICAgICAqL1xuICAgIC8qIGVzbGludCByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlczogMCAqL1xuICAgIGNvbXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJlZmVycmVkL3RhcmdldCBpdGVtIHdpZHRoLiBJdGVtIHdpZHRoIHdpbGwgZ3JvdyB0byBmaWxsXG4gICAgICogY29sdW1uIHNwYWNlLCBhbmQgc2hyaW5rIHRvIGZpdCBpZiBiZWxvdyBtaW4gY29sdW1ucy5cbiAgICAgKi9cbiAgICBmbGV4aWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gZWFjaCBpdGVtLlxuICAgICAqL1xuICAgIGd1dHRlcldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgYWxsIG9iamVjdHMgdG8gZGlzcGxheSBpbiB0aGUgZ3JpZC5cbiAgICAgKi9cbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIE1lYXN1cmVtZW50IFN0b3JlXG4gICAgICovXG4gICAgbWVhc3VyZW1lbnRTdG9yZTogUHJvcFR5cGVzLmluc3RhbmNlT2YoTWVhc3VyZW1lbnRTdG9yZSksXG5cbiAgICAvKipcbiAgICAgKiBBIGNhbGxiYWNrIHdoaWNoIHRoZSBncmlkIGNhbGxzIHdoZW4gd2UgbmVlZCB0byBsb2FkIG1vcmUgaXRlbXMgYXMgdGhlIHVzZXIgc2Nyb2xscy5cbiAgICAgKiBUaGUgY2FsbGJhY2sgc2hvdWxkIHVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGl0ZW1zLCBhbmQgcGFzcyB0aG9zZSBpbiBhcyBwcm9wc1xuICAgICAqIHRvIHRoaXMgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGxvYWRJdGVtczogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBNaW5pbXVtIG51bWJlciBvZiBjb2x1bW5zIHRvIGRpc3BsYXkuXG4gICAgICovXG4gICAgbWluQ29sczogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgdGhlIGdyaWQgY2FsbHMgdG8gZ2V0IHRoZSBzY3JvbGwgY29udGFpbmVyLlxuICAgICAqIFRoaXMgaXMgcmVxdWlyZWQgaWYgdGhlIGdyaWQgaXMgZXhwZWN0ZWQgdG8gYmUgc2Nyb2xsYWJsZS5cbiAgICAgKi9cbiAgICBzY3JvbGxDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhpcyBpbnN0YW5jZSBpcyBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAgICogVE9ETzogSWYgdHJ1ZSwgZ2VuZXJhdGUgYW5kIG91dHB1dCBDU1MgZm9yIHRoZSBpbml0aWFsIHNlcnZlciByZW5kZXIuXG4gICAgICovXG4gICAgc2VydmVyUmVuZGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHVzZSBhY3R1YWwgdmlydHVhbGl6YXRpb25cbiAgICAgKi9cbiAgICB2aXJ0dWFsaXplOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbHVtbldpZHRoOiAyMzYsXG4gICAgbWVhc3VyZW1lbnRTdG9yZTogbmV3IE1lYXN1cmVtZW50U3RvcmUoKSxcbiAgICBtaW5Db2xzOiAzLFxuICAgIHNlcnZlclJlbmRlcjogZmFsc2UsXG4gICAgbGF5b3V0OiBEZWZhdWx0TGF5b3V0U3ltYm9sLFxuICAgIGxvYWRJdGVtczogKCkgPT4ge30sXG4gICAgdmlydHVhbGl6ZTogZmFsc2UsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzPFQ+KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jb250YWluZXJIZWlnaHQgPSAwO1xuICAgIHRoaXMuY29udGFpbmVyT2Zmc2V0ID0gMDtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzOiBwcm9wcy5pdGVtcy5zb21lKFxuICAgICAgICBpdGVtID0+ICEhaXRlbSAmJiAhcHJvcHMubWVhc3VyZW1lbnRTdG9yZS5oYXMoaXRlbSlcbiAgICAgICksXG4gICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlOiBTdGF0ZTtcblxuICAvKipcbiAgICogQWRkcyBob29rcyBhZnRlciB0aGUgY29tcG9uZW50IG1vdW50cy5cbiAgICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG5cbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ3JpZFdyYXBwZXJcbiAgICAgID8gdGhpcy5ncmlkV3JhcHBlci5jbGllbnRXaWR0aFxuICAgICAgOiB0aGlzLnN0YXRlLndpZHRoO1xuXG4gICAgdGhpcy5tZWFzdXJlQ29udGFpbmVyKCk7XG5cbiAgICBsZXQgeyBzY3JvbGxUb3AgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHRoaXMuc2Nyb2xsQ29udGFpbmVyICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IHRoaXMuc2Nyb2xsQ29udGFpbmVyLmdldFNjcm9sbENvbnRhaW5lclJlZigpO1xuICAgICAgaWYgKHNjcm9sbENvbnRhaW5lcikge1xuICAgICAgICBzY3JvbGxUb3AgPSBnZXRTY3JvbGxQb3Moc2Nyb2xsQ29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGlkLW1vdW50LXNldC1zdGF0ZVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzY3JvbGxUb3AsIHdpZHRoIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IGl0ZW1zLCBtZWFzdXJlbWVudFN0b3JlIH06IFByb3BzPFQ+KSB7XG4gICAgLy8gd2hlbmV2ZXIgd2UncmUgcmVjZWl2aW5nIG5ldyBwcm9wcywgZGV0ZXJtaW5lIHdoZXRoZXIgYW55IGl0ZW1zIG5lZWQgdG8gYmUgbWVhc3VyZWRcbiAgICAvLyBUT0RPIC0gd2Ugc2hvdWxkIHRyZWF0IGl0ZW1zIGFzIGltbXV0YWJsZVxuICAgIGNvbnN0IGhhc1BlbmRpbmdNZWFzdXJlbWVudHMgPSBpdGVtcy5zb21lKFxuICAgICAgaXRlbSA9PiAhbWVhc3VyZW1lbnRTdG9yZS5oYXMoaXRlbSlcbiAgICApO1xuICAgIC8vIFNoYWxsb3cgY29tcGFyZSBhbGwgaXRlbXMsIGlmIGFueSBjaGFuZ2UgcmVmbG93IHRoZSBncmlkLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIC8vIFdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiBvdXIgY3VycmVudCBwcm9wcyBhbmQgZXZlcnl0aGluZyBtYXRjaGVzLlxuICAgICAgLy8gSWYgd2UgaGl0IHRoaXMgY2FzZSBpdCBtZWFucyB3ZSBuZWVkIHRvIGluc2VydCBuZXcgaXRlbXMuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pdGVtc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMsXG4gICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFJlc2V0IGdyaWQgaXRlbXMgd2hlbjpcbiAgICAgIGlmIChcbiAgICAgICAgLy8gQW4gaXRlbSBvYmplY3QgcmVmIGRvZXMgbm90IG1hdGNoLlxuICAgICAgICBpdGVtc1tpXSAhPT0gdGhpcy5wcm9wcy5pdGVtc1tpXSB8fFxuICAgICAgICAvLyBPciBsZXNzIGl0ZW1zIHRoYW4gd2UgY3VycmVudGx5IGhhdmUgYXJlIHBhc3NlZCBpbi5cbiAgICAgICAgaXRlbXMubGVuZ3RoIDwgdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzLFxuICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlc2V0IGl0ZW1zIGlmIG5ldyBpdGVtcyBhcnJheSBpcyBlbXB0eS5cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwICYmIHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMsXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChoYXNQZW5kaW5nTWVhc3VyZW1lbnRzICE9PSB0aGlzLnN0YXRlLmhhc1BlbmRpbmdNZWFzdXJlbWVudHMpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBhbHdheXMgdXBkYXRlIGhhc1BlbmRpbmdNZWFzdXJlbWVudHNcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogUHJvcHM8VD4sIHByZXZTdGF0ZTogU3RhdGUpIHtcbiAgICBjb25zdCB7IGl0ZW1zLCBtZWFzdXJlbWVudFN0b3JlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMubWVhc3VyZVRpbWVvdXQpO1xuICAgIHRoaXMubWVhc3VyZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubWVhc3VyZUNvbnRhaW5lcigpO1xuICAgIH0pO1xuXG4gICAgaWYgKHByZXZTdGF0ZS53aWR0aCAhPSBudWxsICYmIHRoaXMuc3RhdGUud2lkdGggIT09IHByZXZTdGF0ZS53aWR0aCkge1xuICAgICAgbWVhc3VyZW1lbnRTdG9yZS5yZXNldCgpO1xuICAgIH1cbiAgICAvLyBjYWxjdWxhdGUgd2hldGhlciB3ZSBzdGlsbCBoYXZlIHBlbmRpbmcgbWVhc3VyZW1lbnRzXG4gICAgY29uc3QgaGFzUGVuZGluZ01lYXN1cmVtZW50cyA9IGl0ZW1zLnNvbWUoXG4gICAgICBpdGVtID0+ICEhaXRlbSAmJiAhbWVhc3VyZW1lbnRTdG9yZS5oYXMoaXRlbSlcbiAgICApO1xuICAgIGlmIChcbiAgICAgIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMgfHxcbiAgICAgIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMgIT09IHRoaXMuc3RhdGUuaGFzUGVuZGluZ01lYXN1cmVtZW50cyB8fFxuICAgICAgcHJldlN0YXRlLndpZHRoID09IG51bGxcbiAgICApIHtcbiAgICAgIHRoaXMuaW5zZXJ0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgbGlzdGVuZXJzIHdoZW4gdW5tb3VudGluZy5cbiAgICovXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmluc2VydEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmluc2VydEFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMubWVhc3VyZVRpbWVvdXQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gIH1cblxuICBzZXRHcmlkV3JhcHBlclJlZiA9IChyZWY6ID9IVE1MRWxlbWVudCkgPT4ge1xuICAgIHRoaXMuZ3JpZFdyYXBwZXIgPSByZWY7XG4gIH07XG5cbiAgc2V0U2Nyb2xsQ29udGFpbmVyUmVmID0gKHJlZjogP1Njcm9sbENvbnRhaW5lcikgPT4ge1xuICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyID0gcmVmO1xuICB9O1xuXG4gIHByb3BzOiBQcm9wczwqPjtcbiAgY29udGFpbmVySGVpZ2h0OiBudW1iZXI7XG4gIGNvbnRhaW5lck9mZnNldDogbnVtYmVyO1xuICBncmlkV3JhcHBlcjogP0hUTUxFbGVtZW50O1xuICBpbnNlcnRBbmltYXRpb25GcmFtZTogQW5pbWF0aW9uRnJhbWVJRDtcbiAgbWVhc3VyZVRpbWVvdXQ6IFRpbWVvdXRJRDtcbiAgcmVzaXplVGltZW91dDogVGltZW91dElEO1xuICBzY3JvbGxDb250YWluZXI6ID9TY3JvbGxDb250YWluZXI7XG5cbiAgLyoqXG4gICAqIERlbGF5cyByZXNpemUgaGFuZGxpbmcgaW4gY2FzZSB0aGUgc2Nyb2xsIGNvbnRhaW5lciBpcyBzdGlsbCBiZWluZyByZXNpemVkLlxuICAgKi9cbiAgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnJlc2l6ZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuICAgIH1cbiAgICB0aGlzLnJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdyaWRXcmFwcGVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogdGhpcy5ncmlkV3JhcHBlci5jbGllbnRXaWR0aCB9KTtcbiAgICAgIH1cbiAgICB9LCBSRVNJWkVfREVCT1VOQ0UpO1xuICB9O1xuXG4gIHVwZGF0ZVNjcm9sbFBvc2l0aW9uID0gdGhyb3R0bGUoKCkgPT4ge1xuICAgIGlmICghdGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gdGhpcy5zY3JvbGxDb250YWluZXIuZ2V0U2Nyb2xsQ29udGFpbmVyUmVmKCk7XG5cbiAgICBpZiAoIXNjcm9sbENvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2Nyb2xsVG9wOiBnZXRTY3JvbGxQb3Moc2Nyb2xsQ29udGFpbmVyKSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgbWVhc3VyZUNvbnRhaW5lcigpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIgIT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBzY3JvbGxDb250YWluZXIgfSA9IHRoaXM7XG4gICAgICBjb25zdCBzY3JvbGxDb250YWluZXJSZWYgPSBzY3JvbGxDb250YWluZXIuZ2V0U2Nyb2xsQ29udGFpbmVyUmVmKCk7XG4gICAgICBpZiAoc2Nyb2xsQ29udGFpbmVyUmVmKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gZ2V0RWxlbWVudEhlaWdodChzY3JvbGxDb250YWluZXJSZWYpO1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZ3JpZFdyYXBwZXI7XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgcmVsYXRpdmVTY3JvbGxUb3AgPSBnZXRSZWxhdGl2ZVNjcm9sbFRvcChzY3JvbGxDb250YWluZXJSZWYpO1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyT2Zmc2V0ID1cbiAgICAgICAgICAgIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHJlbGF0aXZlU2Nyb2xsVG9wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIG1lYXN1cmVtZW50cy9wb3NpdGlvbnMgYW5kIGZvcmNlIGEgcmVmbG93IG9mIHRoZSBlbnRpcmUgZ3JpZC5cbiAgICogT25seSB1c2UgdGhpcyBpZiBhYnNvbHV0ZWx5IG5lY2Vzc2FyeSAtIGV4OiBXZSBuZWVkIHRvIHJlZmxvdyBpdGVtcyBpZiB0aGVcbiAgICogbnVtYmVyIG9mIGNvbHVtbnMgd2Ugd291bGQgZGlzcGxheSBzaG91bGQgY2hhbmdlIGFmdGVyIGEgcmVzaXplLlxuICAgKi9cbiAgcmVmbG93KCkge1xuICAgIHRoaXMucHJvcHMubWVhc3VyZW1lbnRTdG9yZS5yZXNldCgpO1xuICAgIHRoaXMubWVhc3VyZUNvbnRhaW5lcigpO1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGZldGNoTW9yZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGxvYWRJdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobG9hZEl0ZW1zICYmIHR5cGVvZiBsb2FkSXRlbXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiBsb2FkSXRlbXMoeyBmcm9tOiB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCB9KVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyTWFzb25yeUNvbXBvbmVudCA9IChpdGVtRGF0YTogVCwgaWR4OiBudW1iZXIsIHBvc2l0aW9uOiAqKSA9PiB7XG4gICAgY29uc3QgeyBjb21wOiBDb21wb25lbnQsIHZpcnR1YWxpemUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQgfSA9IHBvc2l0aW9uO1xuXG4gICAgbGV0IGlzVmlzaWJsZTtcbiAgICBpZiAodGhpcy5wcm9wcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IHZpcnR1YWxCdWZmZXIgPSB0aGlzLmNvbnRhaW5lckhlaWdodCAqIFZJUlRVQUxfQlVGRkVSX0ZBQ1RPUjtcbiAgICAgIGNvbnN0IG9mZnNldFNjcm9sbFBvcyA9IHRoaXMuc3RhdGUuc2Nyb2xsVG9wIC0gdGhpcy5jb250YWluZXJPZmZzZXQ7XG4gICAgICBjb25zdCB2aWV3cG9ydFRvcCA9IG9mZnNldFNjcm9sbFBvcyAtIHZpcnR1YWxCdWZmZXI7XG4gICAgICBjb25zdCB2aWV3cG9ydEJvdHRvbSA9XG4gICAgICAgIG9mZnNldFNjcm9sbFBvcyArIHRoaXMuY29udGFpbmVySGVpZ2h0ICsgdmlydHVhbEJ1ZmZlcjtcblxuICAgICAgaXNWaXNpYmxlID0gIShcbiAgICAgICAgcG9zaXRpb24udG9wICsgcG9zaXRpb24uaGVpZ2h0IDwgdmlld3BvcnRUb3AgfHxcbiAgICAgICAgcG9zaXRpb24udG9wID4gdmlld3BvcnRCb3R0b21cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIG5vIHNjcm9sbCBjb250YWluZXIgaXMgcGFzc2VkIGluLCBpdGVtcyBzaG91bGQgYWx3YXlzIGJlIHZpc2libGVcbiAgICAgIGlzVmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbUNvbXBvbmVudCA9IChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtgaXRlbS0ke2lkeH1gfVxuICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMuTWFzb25yeV9fSXRlbSwgc3R5bGVzLk1hc29ucnlfX0l0ZW1fX01vdW50ZWRdLmpvaW4oXG4gICAgICAgICAgJyAnXG4gICAgICAgICl9XG4gICAgICAgIGRhdGEtZ3JpZC1pdGVtXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke2xlZnR9cHgpIHRyYW5zbGF0ZVkoJHt0b3B9cHgpYCxcbiAgICAgICAgICBXZWJraXRUcmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7bGVmdH1weCkgdHJhbnNsYXRlWSgke3RvcH1weClgLFxuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAuLi4odmlydHVhbGl6ZSB8fCBpc1Zpc2libGVcbiAgICAgICAgICAgID8ge31cbiAgICAgICAgICAgIDogeyBkaXNwbGF5OiAnbm9uZScsIHRyYW5zaXRpb246ICdub25lJyB9KSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbXBvbmVudCBkYXRhPXtpdGVtRGF0YX0gaXRlbUlkeD17aWR4fSBpc01lYXN1cmluZz17ZmFsc2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuIHZpcnR1YWxpemUgPyAoaXNWaXNpYmxlICYmIGl0ZW1Db21wb25lbnQpIHx8IG51bGwgOiBpdGVtQ29tcG9uZW50O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjb2x1bW5XaWR0aCxcbiAgICAgIGNvbXA6IENvbXBvbmVudCxcbiAgICAgIGZsZXhpYmxlLFxuICAgICAgZ3V0dGVyV2lkdGg6IGd1dHRlcixcbiAgICAgIG1lYXN1cmVtZW50U3RvcmUsXG4gICAgICBpdGVtcyxcbiAgICAgIG1pbkNvbHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzLCB3aWR0aCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGxldCBsYXlvdXQ7XG4gICAgaWYgKGZsZXhpYmxlICYmIHdpZHRoICE9PSBudWxsKSB7XG4gICAgICBsYXlvdXQgPSBmdWxsV2lkdGhMYXlvdXQoe1xuICAgICAgICBndXR0ZXIsXG4gICAgICAgIGNhY2hlOiBtZWFzdXJlbWVudFN0b3JlLFxuICAgICAgICBtaW5Db2xzLFxuICAgICAgICBpZGVhbENvbHVtbldpZHRoOiBjb2x1bW5XaWR0aCxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5sYXlvdXQgPT09IFVuaWZvcm1Sb3dMYXlvdXRTeW1ib2wgfHxcbiAgICAgIHRoaXMucHJvcHMubGF5b3V0IGluc3RhbmNlb2YgTGVnYWN5VW5pZm9ybVJvd0xheW91dFxuICAgICkge1xuICAgICAgbGF5b3V0ID0gdW5pZm9ybVJvd0xheW91dCh7XG4gICAgICAgIGNhY2hlOiBtZWFzdXJlbWVudFN0b3JlLFxuICAgICAgICBjb2x1bW5XaWR0aCxcbiAgICAgICAgZ3V0dGVyLFxuICAgICAgICBtaW5Db2xzLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXlvdXQgPSBkZWZhdWx0TGF5b3V0KHtcbiAgICAgICAgY2FjaGU6IG1lYXN1cmVtZW50U3RvcmUsXG4gICAgICAgIGNvbHVtbldpZHRoLFxuICAgICAgICBndXR0ZXIsXG4gICAgICAgIG1pbkNvbHMsXG4gICAgICAgIHdpZHRoLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGdyaWRCb2R5O1xuICAgIGlmICh3aWR0aCA9PSBudWxsICYmIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMpIHtcbiAgICAgIC8vIFdoZW4gaHlyZGF0aW5nIGZyb20gYSBzZXJ2ZXIgcmVuZGVyLCB3ZSBkb24ndCBoYXZlIHRoZSB3aWR0aCBvZiB0aGUgZ3JpZFxuICAgICAgLy8gYW5kIHRoZSBtZWFzdXJlbWVudCBzdG9yZSBpcyBlbXB0eVxuICAgICAgZ3JpZEJvZHkgPSAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5NYXNvbnJ5fVxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMCwgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgIHJlZj17dGhpcy5zZXRHcmlkV3JhcHBlclJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIHtpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtKS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYgLy8ga2VlcCB0aGlzIGluIHN5bmMgd2l0aCByZW5kZXJNYXNvbnJ5Q29tcG9uZW50XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0YXRpY1wiXG4gICAgICAgICAgICAgIGRhdGEtZ3JpZC1pdGVtXG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpJyxcbiAgICAgICAgICAgICAgICBXZWJraXRUcmFuc2Zvcm06ICd0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogZmxleGlibGUgPyB1bmRlZmluZWQgOiBjb2x1bW5XaWR0aCwgLy8gd2UgY2FuJ3Qgc2V0IGEgd2lkdGggZm9yIHNlcnZlciByZW5kZXJlZCBmbGV4aWJsZSBpdGVtc1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWwgJiYgIWZsZXhpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAvLyBvbmx5IG1lYXN1cmUgZmxleGlibGUgaXRlbXMgb24gY2xpZW50XG4gICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudFN0b3JlLnNldChpdGVtLCBlbC5jbGllbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCBkYXRhPXtpdGVtfSBpdGVtSWR4PXtpfSBpc01lYXN1cmluZz17ZmFsc2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAod2lkdGggPT0gbnVsbCkge1xuICAgICAgLy8gV2hlbiB0aGUgd2lkdGggaXMgZW1wdHkgKHVzdWFsbHkgYWZ0ZXIgYSByZS1tb3VudCkgcmVuZGVyIGFuIGVtcHR5XG4gICAgICAvLyBkaXYgdG8gY29sbGVjdCB0aGUgd2lkdGggZm9yIGxheW91dFxuICAgICAgZ3JpZEJvZHkgPSA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gcmVmPXt0aGlzLnNldEdyaWRXcmFwcGVyUmVmfSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRnVsbCBsYXlvdXQgaXMgcG9zc2libGVcbiAgICAgIGNvbnN0IGl0ZW1zVG9SZW5kZXIgPSBpdGVtcy5maWx0ZXIoXG4gICAgICAgIGl0ZW0gPT4gaXRlbSAmJiBtZWFzdXJlbWVudFN0b3JlLmhhcyhpdGVtKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGl0ZW1zVG9NZWFzdXJlID0gaXRlbXNcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gJiYgIW1lYXN1cmVtZW50U3RvcmUuaGFzKGl0ZW0pKVxuICAgICAgICAuc2xpY2UoMCwgbWluQ29scyk7XG5cbiAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGxheW91dChpdGVtc1RvUmVuZGVyKTtcbiAgICAgIGNvbnN0IG1lYXN1cmluZ1Bvc2l0aW9ucyA9IGxheW91dChpdGVtc1RvTWVhc3VyZSk7XG4gICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCguLi5wb3NpdGlvbnMubWFwKHBvcyA9PiBwb3MudG9wICsgcG9zLmhlaWdodCkpO1xuICAgICAgZ3JpZEJvZHkgPSAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSByZWY9e3RoaXMuc2V0R3JpZFdyYXBwZXJSZWZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWFzb25yeX0gc3R5bGU9e3sgaGVpZ2h0LCB3aWR0aCB9fT5cbiAgICAgICAgICAgIHtpdGVtc1RvUmVuZGVyLm1hcCgoaXRlbSwgaSkgPT5cbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJNYXNvbnJ5Q29tcG9uZW50KGl0ZW0sIGksIHBvc2l0aW9uc1tpXSlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYXNvbnJ5fSBzdHlsZT17eyB3aWR0aCB9fT5cbiAgICAgICAgICAgIHtpdGVtc1RvTWVhc3VyZS5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBtZWFzdXJpbmdQb3NpdGlvbnNbaV07XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtgbWVhc3VyaW5nLSR7aX1gfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAuLi5wb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnRTdG9yZS5zZXQoZGF0YSwgZWwuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IGRhdGE9e2RhdGF9IGl0ZW1JZHg9e2l9IGlzTWVhc3VyaW5nIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHt0aGlzLnNjcm9sbENvbnRhaW5lciAmJiAoXG4gICAgICAgICAgICA8RmV0Y2hJdGVtc1xuICAgICAgICAgICAgICBjb250YWluZXJIZWlnaHQ9e3RoaXMuY29udGFpbmVySGVpZ2h0fVxuICAgICAgICAgICAgICBmZXRjaE1vcmU9e3RoaXMuZmV0Y2hNb3JlfVxuICAgICAgICAgICAgICBpc0ZldGNoaW5nPXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzRmV0Y2hpbmcgfHwgdGhpcy5zdGF0ZS5oYXNQZW5kaW5nTWVhc3VyZW1lbnRzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgIHNjcm9sbFRvcD17dGhpcy5zdGF0ZS5zY3JvbGxUb3B9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zY3JvbGxDb250YWluZXIgPyAoXG4gICAgICA8U2Nyb2xsQ29udGFpbmVyXG4gICAgICAgIHJlZj17dGhpcy5zZXRTY3JvbGxDb250YWluZXJSZWZ9XG4gICAgICAgIG9uU2Nyb2xsPXt0aGlzLnVwZGF0ZVNjcm9sbFBvc2l0aW9ufVxuICAgICAgICBzY3JvbGxDb250YWluZXI9e3RoaXMucHJvcHMuc2Nyb2xsQ29udGFpbmVyfVxuICAgICAgPlxuICAgICAgICB7Z3JpZEJvZHl9XG4gICAgICA8L1Njcm9sbENvbnRhaW5lcj5cbiAgICApIDogKFxuICAgICAgZ3JpZEJvZHlcbiAgICApO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4uL0ZseW91dFV0aWxzL0NvbnRyb2xsZXInO1xuXG50eXBlIFByb3BzID0ge3xcbiAgYW5jaG9yOiA/YW55LFxuICBjaGlsZHJlbj86IGFueSxcbiAgaWRlYWxEaXJlY3Rpb24/OiAndXAnIHwgJ3JpZ2h0JyB8ICdkb3duJyB8ICdsZWZ0JyxcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkLFxuICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3I/OiBib29sZWFuLFxuICBzaXplPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBudW1iZXIsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmx5b3V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYW5jaG9yLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZGVhbERpcmVjdGlvbixcbiAgICAgIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvciA9IHRydWUsXG4gICAgICBvbkRpc21pc3MsXG4gICAgICBzaXplLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFhbmNob3IpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udHJvbGxlclxuICAgICAgICBhbmNob3I9e2FuY2hvcn1cbiAgICAgICAgYmdDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgaWRlYWxEaXJlY3Rpb249e2lkZWFsRGlyZWN0aW9ufVxuICAgICAgICBvbkRpc21pc3M9e29uRGlzbWlzc31cbiAgICAgICAgcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yPXtwb3NpdGlvblJlbGF0aXZlVG9BbmNob3J9XG4gICAgICAgIHNob3VsZEZvY3VzXG4gICAgICAgIHNpemU9e3NpemV9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ29udHJvbGxlcj5cbiAgICApO1xuICB9XG59XG5cbkZseW91dC5wcm9wVHlwZXMgPSB7XG4gIGFuY2hvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250YWluczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgfSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaWRlYWxEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ3VwJywgJ3JpZ2h0JywgJ2Rvd24nLCAnbGVmdCddKSxcbiAgb25EaXNtaXNzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3I6IFByb3BUeXBlcy5ib29sLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vbmVPZihbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10pLCAvLyBkZWZhdWx0OiBzbVxuICBdKSxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Hcm91cEF2YXRhci5jc3MnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gvQm94JztcbmltcG9ydCBUZXh0IGZyb20gJy4uL1RleHQvVGV4dCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vSW1hZ2UvSW1hZ2UnO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSAnLi4vQ29sbGVjdGlvbi9Db2xsZWN0aW9uJztcblxuY29uc3QgQk9SREVSX1dJRFRIID0gMjtcblxuY29uc3QgQVZBVEFSX1NJWkVTID0ge1xuICBzbTogMjQsXG4gIG1kOiA0MCxcbiAgbGc6IDcyLFxufTtcblxuY29uc3QgREVGQVVMVF9BVkFUQVJfVEVYVF9TSVpFUyA9IHtcbiAgc206IDcsXG4gIG1kOiAxMSxcbiAgbGc6IDIxLFxufTtcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNvbGxhYm9yYXRvcnM6IEFycmF5PHt8XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHNyYz86IHN0cmluZyxcbiAgfH0+LFxuICBzaXplOiAnc20nIHwgJ21kJyB8ICdsZycsXG58fTtcblxuY29uc3QgYXZhdGFyTGF5b3V0ID0gKG4sIHNpemUpID0+IHtcbiAgc3dpdGNoIChuKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIFt7IHRvcDogMCwgbGVmdDogMCwgd2lkdGg6IHNpemUsIGhlaWdodDogc2l6ZSB9XTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgd2lkdGg6IHNpemUgLyAyIC0gQk9SREVSX1dJRFRIIC8gMixcbiAgICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogc2l6ZSAvIDIgKyBCT1JERVJfV0lEVEggLyAyLFxuICAgICAgICAgIHdpZHRoOiBzaXplIC8gMiAtIEJPUkRFUl9XSURUSCAvIDIsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHdpZHRoOiBzaXplIC8gMiAtIEJPUkRFUl9XSURUSCAvIDIsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IHNpemUgLyAyICsgQk9SREVSX1dJRFRIIC8gMixcbiAgICAgICAgICB3aWR0aDogc2l6ZSAvIDIsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplIC8gMiAtIEJPUkRFUl9XSURUSCAvIDIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0b3A6IHNpemUgLyAyICsgQk9SREVSX1dJRFRIIC8gMixcbiAgICAgICAgICBsZWZ0OiBzaXplIC8gMiArIEJPUkRFUl9XSURUSCAvIDIsXG4gICAgICAgICAgd2lkdGg6IHNpemUgLyAyLFxuICAgICAgICAgIGhlaWdodDogc2l6ZSAvIDIgLSBCT1JERVJfV0lEVEggLyAyLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgfVxufTtcblxuY29uc3QgZGVnVG9SYWQgPSBkZWcgPT4gZGVnICogKE1hdGguUEkgLyAxODApO1xuXG5jb25zdCBEZWZhdWx0QXZhdGFyID0gKHByb3BzOiB7XG4gIGhlaWdodDogbnVtYmVyLFxuICBuYW1lOiBzdHJpbmcsXG4gIHRleHRMYXlvdXQ6ICdjZW50ZXInIHwgJ3RvcExlZnQnIHwgJ2JvdHRvbUxlZnQnLFxuICBzaXplOiAnc20nIHwgJ21kJyB8ICdsZycsXG4gIGZvbnRTaXplOiBudW1iZXIsXG59KSA9PiB7XG4gIGNvbnN0IHsgZm9udFNpemUsIGhlaWdodCwgbmFtZSwgdGV4dExheW91dCB9ID0gcHJvcHM7XG4gIGNvbnN0IHNpemUgPSBBVkFUQVJfU0laRVNbcHJvcHMuc2l6ZV07XG5cbiAgY29uc3QgcXVhcnRlclBhZGRpbmcgPSBNYXRoLmZsb29yKFxuICAgIChzaXplIC8gMiAtIGZvbnRTaXplKSAvIDIgKiBNYXRoLnNpbihkZWdUb1JhZCg0NSkpXG4gICk7XG5cbiAgY29uc3QgaW5pdGlhbCA9IChcbiAgICA8VGV4dCBib2xkIGNvbG9yPVwid2hpdGVcIj5cbiAgICAgIDxCb3hcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17e1xuICAgICAgICAgIF9fc3R5bGU6IHtcbiAgICAgICAgICAgIGZvbnRTaXplLFxuICAgICAgICAgICAgbGluZUhlaWdodDogYCR7Zm9udFNpemV9cHhgLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtbLi4ubmFtZV1bMF0udG9VcHBlckNhc2UoKX1cbiAgICAgIDwvQm94PlxuICAgIDwvVGV4dD5cbiAgKTtcblxuICBzd2l0Y2ggKHRleHRMYXlvdXQpIHtcbiAgICBjYXNlICdib3R0b21MZWZ0JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBhcmlhLWxhYmVsPXtuYW1lfVxuICAgICAgICAgIGNvbG9yPVwiZ3JheVwiXG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJlbmRcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgICAgIF9fc3R5bGU6IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogcXVhcnRlclBhZGRpbmcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7aW5pdGlhbH1cbiAgICAgICAgPC9Cb3g+XG4gICAgICApO1xuICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGFyaWEtbGFiZWw9e25hbWV9XG4gICAgICAgICAgY29sb3I9XCJncmF5XCJcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cInN0YXJ0XCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7XG4gICAgICAgICAgICBfX3N0eWxlOiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IHF1YXJ0ZXJQYWRkaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2luaXRpYWx9XG4gICAgICAgIDwvQm94PlxuICAgICAgKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGFyaWEtbGFiZWw9e25hbWV9XG4gICAgICAgICAgY29sb3I9XCJncmF5XCJcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAge2luaXRpYWx9XG4gICAgICAgIDwvQm94PlxuICAgICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JvdXBBdmF0YXIocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgY29sbGFib3JhdG9ycywgc2l6ZSB9ID0gcHJvcHM7XG4gIGNvbnN0IGxheW91dCA9IGF2YXRhckxheW91dChjb2xsYWJvcmF0b3JzLmxlbmd0aCwgQVZBVEFSX1NJWkVTW3NpemVdKTtcbiAgY29uc3QgYXZhdGFyU2l6ZSA9IEFWQVRBUl9TSVpFU1tzaXplXTtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgIGhlaWdodD17YXZhdGFyU2l6ZX1cbiAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgIHNoYXBlPVwiY2lyY2xlXCJcbiAgICAgIHdpZHRoPXthdmF0YXJTaXplfVxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17e1xuICAgICAgICBfX3N0eWxlOiB7XG4gICAgICAgICAgYm94U2hhZG93OiAnMCAwIDAgMnB4ICNmZmYnLFxuICAgICAgICAgIC8vIHdpbGxDaGFuZ2U6IHRyYW5zZm9ybSBmaXhlcyBhIHN0cmFuZ2UgYmVoYXZpb3Igd2hlcmUgdGhlIGJvcmRlciBvZiB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAvLyBhcmUgbm90IHByb3Blcmx5IHRyaW1tZWQgZXZlbiB0aG91Z2ggb3ZlcmZsb3c6IGhpZGRlbiBpcyBzZXRcbiAgICAgICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENvbGxlY3Rpb25cbiAgICAgICAgbGF5b3V0PXtsYXlvdXR9XG4gICAgICAgIEl0ZW09eyh7IGlkeCB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBuYW1lLCBzcmMgfSA9IGNvbGxhYm9yYXRvcnNbaWR4XTtcbiAgICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGxheW91dFtpZHhdO1xuICAgICAgICAgIGNvbnN0IGZvbnRTaXplID1cbiAgICAgICAgICAgIGNvbGxhYm9yYXRvcnMubGVuZ3RoID09PSAxXG4gICAgICAgICAgICAgID8gREVGQVVMVF9BVkFUQVJfVEVYVF9TSVpFU1twcm9wcy5zaXplXSAqIDJcbiAgICAgICAgICAgICAgOiBERUZBVUxUX0FWQVRBUl9URVhUX1NJWkVTW3Byb3BzLnNpemVdO1xuICAgICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8RGVmYXVsdEF2YXRhclxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgZm9udFNpemU9e2ZvbnRTaXplfVxuICAgICAgICAgICAgICAgIHRleHRMYXlvdXQ9e1xuICAgICAgICAgICAgICAgICAgY29sbGFib3JhdG9ycy5sZW5ndGggPj0gM1xuICAgICAgICAgICAgICAgICAgICA/IFsnY2VudGVyJywgJ2JvdHRvbUxlZnQnLCAndG9wTGVmdCddW2lkeF1cbiAgICAgICAgICAgICAgICAgICAgOiAnY2VudGVyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCb3ggcG9zaXRpb249XCJyZWxhdGl2ZVwiIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgY29sb3I9XCIjRUZFRkVGXCJcbiAgICAgICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGg9ezF9XG4gICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodD17MX1cbiAgICAgICAgICAgICAgICBmaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2FzaH0gLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvQm94PlxuICApO1xufVxuXG5Hcm91cEF2YXRhci5wcm9wVHlwZXMgPSB7XG4gIGNvbGxhYm9yYXRvcnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5leGFjdCh7XG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSlcbiAgKS5pc1JlcXVpcmVkLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbScsICdtZCcsICdsZyddKS5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9Db2xvcnMuY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkaW5nLmNzcyc7XG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tICcuLi9UeXBvZ3JhcGh5LmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhY2Nlc3NpYmlsaXR5TGV2ZWw/OiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYsXG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgY29sb3I/OlxuICAgIHwgJ2JsdWUnXG4gICAgfCAnZGFya0dyYXknXG4gICAgfCAnZWdncGxhbnQnXG4gICAgfCAnZ3JheSdcbiAgICB8ICdncmVlbidcbiAgICB8ICdsaWdodEdyYXknXG4gICAgfCAnbWFyb29uJ1xuICAgIHwgJ21pZG5pZ2h0J1xuICAgIHwgJ25hdnknXG4gICAgfCAnb2xpdmUnXG4gICAgfCAnb3JhbmdlJ1xuICAgIHwgJ29yY2hpZCdcbiAgICB8ICdwaW5lJ1xuICAgIHwgJ3B1cnBsZSdcbiAgICB8ICdyZWQnXG4gICAgfCAnd2F0ZXJtZWxvbidcbiAgICB8ICd3aGl0ZScsXG4gIGlkPzogc3RyaW5nLFxuICBsZ1NpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyxcbiAgbWRTaXplPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcsXG4gIG92ZXJmbG93PzogJ25vcm1hbCcgfCAnYnJlYWtXb3JkJyxcbiAgc2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnLFxuICBzbVNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyxcbiAgdHJ1bmNhdGU/OiBib29sZWFuLFxufH07XG5cbmNvbnN0IGRlZmF1bHRIZWFkaW5nTGV2ZWxzID0ge1xuICB4czogNSxcbiAgc206IDQsXG4gIG1kOiAzLFxuICBsZzogMixcbiAgeGw6IDEsXG59O1xuXG5jb25zdCBTSVpFX1NDQUxFOiB7IFtzaXplOiA/c3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gIHhzOiAxLFxuICBzbTogMixcbiAgbWQ6IDMsXG4gIGxnOiA0LFxuICB4bDogNSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRpbmcocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBhY2Nlc3NpYmlsaXR5TGV2ZWwsXG4gICAgY2hpbGRyZW4sXG4gICAgY29sb3IgPSAnZGFya0dyYXknLFxuICAgIGlkID0gbnVsbCxcbiAgICBsZ1NpemUsXG4gICAgbWRTaXplLFxuICAgIG92ZXJmbG93ID0gJ2JyZWFrV29yZCcsXG4gICAgc2l6ZSA9ICdtZCcsXG4gICAgc21TaXplLFxuICAgIHRydW5jYXRlID0gZmFsc2UsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjcyA9IGN4KFxuICAgIHN0eWxlcy5IZWFkaW5nLFxuICAgIHN0eWxlc1tgZm9udFNpemUke1NJWkVfU0NBTEVbc2l6ZV19YF0sXG4gICAgc21TaXplICYmIHN0eWxlc1tgc21Gb250U2l6ZSR7U0laRV9TQ0FMRVtzbVNpemVdfWBdLFxuICAgIG1kU2l6ZSAmJiBzdHlsZXNbYG1kRm9udFNpemUke1NJWkVfU0NBTEVbbWRTaXplXX1gXSxcbiAgICBsZ1NpemUgJiYgc3R5bGVzW2BsZ0ZvbnRTaXplJHtTSVpFX1NDQUxFW2xnU2l6ZV19YF0sXG4gICAgY29sb3JzW2NvbG9yXSxcbiAgICBvdmVyZmxvdyA9PT0gJ2JyZWFrV29yZCcgJiYgdHlwb2dyYXBoeS5icmVha1dvcmQsXG4gICAgdHJ1bmNhdGUgJiYgdHlwb2dyYXBoeS50cnVuY2F0ZVxuICApO1xuXG4gIGNvbnN0IGhlYWRpbmdMZXZlbCA9IGFjY2Vzc2liaWxpdHlMZXZlbCB8fCBkZWZhdWx0SGVhZGluZ0xldmVsc1tzaXplXTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgYGgke2hlYWRpbmdMZXZlbH1gLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogY3MsXG4gICAgICBpZCxcbiAgICAgIC4uLih0cnVuY2F0ZSAmJiB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnXG4gICAgICAgID8geyB0aXRsZTogY2hpbGRyZW4gfVxuICAgICAgICA6IG51bGwpLFxuICAgIH0sXG4gICAgY2hpbGRyZW5cbiAgKTtcbn1cblxuSGVhZGluZy5wcm9wVHlwZXMgPSB7XG4gIGFjY2Vzc2liaWxpdHlMZXZlbDogUHJvcFR5cGVzLm9uZU9mKFsxLCAyLCAzLCA0LCA1LCA2XSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ2JsdWUnLFxuICAgICdkYXJrR3JheScsXG4gICAgJ2VnZ3BsYW50JyxcbiAgICAnZ3JheScsXG4gICAgJ2dyZWVuJyxcbiAgICAnbGlnaHRHcmF5JyxcbiAgICAnbWFyb29uJyxcbiAgICAnbWlkbmlnaHQnLFxuICAgICduYXZ5JyxcbiAgICAnb2xpdmUnLFxuICAgICdvcmFuZ2UnLFxuICAgICdvcmNoaWQnLFxuICAgICdwaW5lJyxcbiAgICAncHVycGxlJyxcbiAgICAncmVkJyxcbiAgICAnd2F0ZXJtZWxvbicsXG4gICAgJ3doaXRlJyxcbiAgXSksXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvdmVyZmxvdzogUHJvcFR5cGVzLm9uZU9mKFsnbm9ybWFsJywgJ2JyZWFrV29yZCddKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXSksXG4gIHNtU2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXSksXG4gIG1kU2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXSksXG4gIGxnU2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXSksXG4gIHRydW5jYXRlOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gvQm94JztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24vSWNvbic7XG5pbXBvcnQgaWNvbnMgZnJvbSAnLi4vSWNvbi9pY29ucyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUG9nLmNzcyc7XG5cbmNvbnN0IFNJWkVfTkFNRV9UT19QSVhFTCA9IHtcbiAgeHM6IDI0LFxuICBzbTogMzIsXG4gIG1kOiA0MCxcbiAgbGc6IDQ4LFxuICB4bDogNTYsXG59O1xuXG50eXBlIFByb3BzID0ge3xcbiAgYWN0aXZlPzogYm9vbGVhbixcbiAgYmdDb2xvcj86ICd0cmFuc3BhcmVudCcgfCAnbGlnaHRHcmF5JyB8ICd3aGl0ZScsXG4gIGZvY3VzZWQ/OiBib29sZWFuLFxuICBob3ZlcmVkPzogYm9vbGVhbixcbiAgaWNvbkNvbG9yPzogJ2dyYXknIHwgJ2RhcmtHcmF5JyB8ICdyZWQnIHwgJ2JsdWUnIHwgJ3doaXRlJyxcbiAgaWNvbjogJEtleXM8dHlwZW9mIGljb25zPixcbiAgc2l6ZT86ICRLZXlzPHR5cGVvZiBTSVpFX05BTUVfVE9fUElYRUw+LFxufH07XG5cbmNvbnN0IGRlZmF1bHRJY29uQnV0dG9uSWNvbkNvbG9ycyA9IHtcbiAgdHJhbnNwYXJlbnQ6ICdncmF5JyxcbiAgbGlnaHRHcmF5OiAnZ3JheScsXG4gIHdoaXRlOiAnZ3JheScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2cocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmUgPSBmYWxzZSxcbiAgICBiZ0NvbG9yID0gJ3RyYW5zcGFyZW50JyxcbiAgICBmb2N1c2VkID0gZmFsc2UsXG4gICAgaG92ZXJlZCA9IGZhbHNlLFxuICAgIGljb25Db2xvciA9IGRlZmF1bHRJY29uQnV0dG9uSWNvbkNvbG9yc1tiZ0NvbG9yXSxcbiAgICBpY29uLFxuICAgIHNpemUgPSAnbWQnLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaWNvblNpemUgPSBTSVpFX05BTUVfVE9fUElYRUxbc2l6ZV0gLyAyO1xuXG4gIGNvbnN0IGlubGluZVN0eWxlID0ge1xuICAgIGhlaWdodDogU0laRV9OQU1FX1RPX1BJWEVMW3NpemVdLFxuICAgIHdpZHRoOiBTSVpFX05BTUVfVE9fUElYRUxbc2l6ZV0sXG4gIH07XG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoc3R5bGVzLnBvZywgc3R5bGVzW2JnQ29sb3JdLCB7XG4gICAgW3N0eWxlcy5hY3RpdmVdOiBhY3RpdmUsXG4gICAgW3N0eWxlcy5mb2N1c2VkXTogZm9jdXNlZCxcbiAgICBbc3R5bGVzLmhvdmVyZWRdOiBob3ZlcmVkICYmICFmb2N1c2VkICYmICFhY3RpdmUsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IHN0eWxlPXtpbmxpbmVTdHlsZX0+XG4gICAgICA8Qm94IHNoYXBlPVwiY2lyY2xlXCI+XG4gICAgICAgIHsvKlxuICAgICAgICAgIFdlJ3JlIGV4cGxpY2l0bHkgc2V0dGluZyBhbiBlbXB0eSBzdHJpbmcgYXMgYSBsYWJlbCBvbiB0aGUgSWNvbiBzaW5jZSB3ZVxuICAgICAgICAgIGFscmVhZHkgaGF2ZSBhbiBhcmlhLWxhYmVsIG9uIHRoZSBidXR0b24gY29udGFpbmVyLlxuICAgICAgICAgIFRoaXMgaXMgc2ltaWxhciB0byBoYXZpbmcgZW1wdHkgYGFsdGAgYXR0cmlidXRlczpcbiAgICAgICAgICBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9hY2Nlc3NpYmlsaXR5LXRpcC1lbXB0eS1hbHQtYXR0cmlidXRlc1xuICAgICAgICAqL31cbiAgICAgICAgPEljb25cbiAgICAgICAgICBjb2xvcj17aWNvbkNvbG9yfVxuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgc2l6ZT17aWNvblNpemV9XG4gICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPVwiXCJcbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Qb2cucHJvcFR5cGVzID0ge1xuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICBiZ0NvbG9yOiBQcm9wVHlwZXMub25lT2YoWyd0cmFuc3BhcmVudCcsICdsaWdodEdyYXknLCAnd2hpdGUnXSksXG4gIGZvY3VzZWQ6IFByb3BUeXBlcy5ib29sLFxuICBob3ZlcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaWNvbkNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydncmF5JywgJ2RhcmtHcmF5JywgJ3JlZCcsICdibHVlJywgJ3doaXRlJ10pLFxuICBpY29uOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoaWNvbnMpKS5pc1JlcXVpcmVkLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoU0laRV9OQU1FX1RPX1BJWEVMKSksXG59O1xuIiwiLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ljb25CdXR0b24uY3NzJztcbmltcG9ydCBpY29ucyBmcm9tICcuLi9JY29uL2ljb25zJztcbmltcG9ydCBQb2cgZnJvbSAnLi4vUG9nL1BvZyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhY2Nlc3NpYmlsaXR5RXhwYW5kZWQ/OiBib29sZWFuLFxuICBhY2Nlc3NpYmlsaXR5SGFzcG9wdXA/OiBib29sZWFuLFxuICBhY2Nlc3NpYmlsaXR5TGFiZWw6IHN0cmluZyxcbiAgYmdDb2xvcj86ICd0cmFuc3BhcmVudCcgfCAnbGlnaHRHcmF5JyB8ICd3aGl0ZScsXG4gIGljb25Db2xvcj86ICdncmF5JyB8ICdkYXJrR3JheScgfCAncmVkJyB8ICdibHVlJyB8ICd3aGl0ZScsXG4gIGljb246ICRLZXlzPHR5cGVvZiBpY29ucz4sXG4gIG9uQ2xpY2s/OiAoeyBldmVudDogU3ludGhldGljTW91c2VFdmVudDw+IH0pID0+IHZvaWQsXG4gIHNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyxcbnx9O1xuXG50eXBlIFN0YXRlID0ge3xcbiAgYWN0aXZlOiBib29sZWFuLFxuICBmb2N1c2VkOiBib29sZWFuLFxuICBob3ZlcmVkOiBib29sZWFuLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25CdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWNjZXNzaWJpbGl0eUV4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBhY2Nlc3NpYmlsaXR5SGFzcG9wdXA6IFByb3BUeXBlcy5ib29sLFxuICAgIGFjY2Vzc2liaWxpdHlMYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGJnQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ3RyYW5zcGFyZW50JywgJ2xpZ2h0R3JheScsICd3aGl0ZSddKSxcbiAgICBpY29uOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoaWNvbnMpKS5pc1JlcXVpcmVkLFxuICAgIGljb25Db2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnZ3JheScsICdkYXJrR3JheScsICdyZWQnLCAnYmx1ZScsICd3aGl0ZSddKSxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSxcbiAgfTtcblxuICBzdGF0ZTogU3RhdGUgPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBmb2N1c2VkOiBmYWxzZSxcbiAgICBob3ZlcmVkOiBmYWxzZSxcbiAgfTtcblxuICBoYW5kbGVCbHVyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IGZhbHNlIH0pO1xuICBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogdHJ1ZSB9KTtcbiAgfTtcbiAgaGFuZGxlTW91c2VEb3duID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IHRydWUgfSk7XG4gIH07XG4gIGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IHRydWUgfSk7XG4gIH07XG4gIGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgaG92ZXJlZDogZmFsc2UsXG4gICAgfSk7XG4gIH07XG4gIGhhbmRsZU1vdXNlVXAgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogZmFsc2UgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFjY2Vzc2liaWxpdHlFeHBhbmRlZCxcbiAgICAgIGFjY2Vzc2liaWxpdHlIYXNwb3B1cCxcbiAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbCxcbiAgICAgIGJnQ29sb3IsXG4gICAgICBpY29uQ29sb3IsXG4gICAgICBpY29uLFxuICAgICAgc2l6ZSxcbiAgICAgIG9uQ2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7IGFjdGl2ZSwgZm9jdXNlZCwgaG92ZXJlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9e2FjY2Vzc2liaWxpdHlFeHBhbmRlZH1cbiAgICAgICAgYXJpYS1oYXNwb3B1cD17YWNjZXNzaWJpbGl0eUhhc3BvcHVwfVxuICAgICAgICBhcmlhLWxhYmVsPXthY2Nlc3NpYmlsaXR5TGFiZWx9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IG9uQ2xpY2sgJiYgb25DbGljayh7IGV2ZW50IH0pfVxuICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVNb3VzZURvd259XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVNb3VzZUVudGVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZU1vdXNlVXB9XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgPlxuICAgICAgICA8UG9nXG4gICAgICAgICAgYWN0aXZlPXthY3RpdmV9XG4gICAgICAgICAgYmdDb2xvcj17YmdDb2xvcn1cbiAgICAgICAgICBmb2N1c2VkPXtmb2N1c2VkfVxuICAgICAgICAgIGhvdmVyZWQ9e2hvdmVyZWR9XG4gICAgICAgICAgaWNvbkNvbG9yPXtpY29uQ29sb3J9XG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAvPlxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGFiZWwuY3NzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgaHRtbEZvcjogc3RyaW5nLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhYmVsKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCBodG1sRm9yIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0gaHRtbEZvcj17aHRtbEZvcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9sYWJlbD5cbiAgKTtcbn1cblxuTGFiZWwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGh0bWxGb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBNYXNrIGZyb20gJy4uL01hc2svTWFzayc7XG5cbi8qXG4gIE11Y2ggb2YgdGhlIG1hdGggYW5kIHVuZGVyc3RhbmRpbmcgYWJvdXQgdGhpcyBjb21wb25lbnQgY29tZXMgZnJvbSBAdmplYXV4J3NcbiAgZXhjZWxsZW50IGJsb2cgcG9zdCBvbiBpbWFnZSByZXNpemluZy5cblxuICBodHRwOi8vYmxvZy52amV1eC5jb20vMjAxMy9pbWFnZS9jc3MtY29udGFpbmVyLWFuZC1jb3Zlci5odG1sXG5cbiAgSSBoaWdobHkgcmVjb21tZW5kIHlvdSByZWFkIHRoYXQgZmlyc3QgYmVmb3JlIGNvbnRpbnVpbmcgb24gcmVhZGluZy5cbiovXG5cbmNvbnN0IGFzcGVjdFJhdGlvID0gKHdpZHRoLCBoZWlnaHQpID0+IHdpZHRoIC8gaGVpZ2h0O1xuXG50eXBlIFByb3BzID0ge3xcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBjb250ZW50QXNwZWN0UmF0aW86IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIHdpZHRoOiBudW1iZXIsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGV0dGVyYm94KHtcbiAgY2hpbGRyZW4sXG4gIGNvbnRlbnRBc3BlY3RSYXRpbyxcbiAgaGVpZ2h0LFxuICB3aWR0aCxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHZpZXdwb3J0QXNwZWN0UmF0aW8gPSBhc3BlY3RSYXRpbyh3aWR0aCwgaGVpZ2h0KTtcblxuICBsZXQgY29udGVudEhlaWdodDtcbiAgbGV0IGNvbnRlbnRXaWR0aDtcblxuICBpZiAoY29udGVudEFzcGVjdFJhdGlvIDwgdmlld3BvcnRBc3BlY3RSYXRpbykge1xuICAgIGNvbnRlbnRXaWR0aCA9IHdpZHRoO1xuICAgIGNvbnRlbnRIZWlnaHQgPSB3aWR0aCAvIGNvbnRlbnRBc3BlY3RSYXRpbztcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50V2lkdGggPSBoZWlnaHQgKiBjb250ZW50QXNwZWN0UmF0aW87XG4gICAgY29udGVudEhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGNvbnN0IG9mZnNldFRvcCA9IChjb250ZW50SGVpZ2h0IC0gaGVpZ2h0KSAvIC0yO1xuICBjb25zdCBvZmZzZXRMZWZ0ID0gKGNvbnRlbnRXaWR0aCAtIHdpZHRoKSAvIC0yO1xuXG4gIHJldHVybiAoXG4gICAgPE1hc2sgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogb2Zmc2V0VG9wLCBtYXJnaW5MZWZ0OiBvZmZzZXRMZWZ0IH19PlxuICAgICAgICA8TWFzayB3aWR0aD17Y29udGVudFdpZHRofSBoZWlnaHQ9e2NvbnRlbnRIZWlnaHR9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9NYXNrPlxuICAgICAgPC9kaXY+XG4gICAgPC9NYXNrPlxuICApO1xufVxuXG5MZXR0ZXJib3gucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNvbnRlbnRBc3BlY3RSYXRpbzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaW5rLmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gIGhyZWY6IHN0cmluZyxcbiAgaW5saW5lPzogYm9vbGVhbixcbiAgb25DbGljaz86ICh7IGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PD4gfSkgPT4gdm9pZCxcbiAgdGFyZ2V0PzogbnVsbCB8ICdzZWxmJyB8ICdibGFuaycsXG58fTtcblxudHlwZSBTdGF0ZSA9IHt8XG4gIGVuYWJsZUZvY3VzU3R5bGVzOiBib29sZWFuLFxufH07XG5cbmNvbnN0IFRBQl9LRVlfQ09ERSA9IDk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgaHJlZjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMub25lT2YoW251bGwsICdzZWxmJywgJ2JsYW5rJ10pLFxuICB9O1xuXG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICBlbmFibGVGb2N1c1N0eWxlczogdHJ1ZSxcbiAgfTtcblxuICBoYW5kbGVDbGljayA9IChldmVudDogU3ludGhldGljTW91c2VFdmVudDw+KSA9PiB7XG4gICAgY29uc3QgeyBocmVmLCBvbkNsaWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChvbkNsaWNrICYmIGhyZWYpIHtcbiAgICAgIG9uQ2xpY2soeyBldmVudCB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlTW91c2VEb3duID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaHJlZiwgdGFyZ2V0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0YXJnZXQgPT09ICdibGFuaycgJiYgaHJlZikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVuYWJsZUZvY3VzU3R5bGVzOiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlS2V5VXAgPSAoZXZlbnQ6IFN5bnRoZXRpY0tleWJvYXJkRXZlbnQ8PikgPT4ge1xuICAgIGNvbnN0IHsgaHJlZiwgdGFyZ2V0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0YXJnZXQgPT09ICdibGFuaycgJiYgZXZlbnQua2V5Q29kZSA9PT0gVEFCX0tFWV9DT0RFICYmIGhyZWYpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVGb2N1c1N0eWxlczogdHJ1ZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGlubGluZSA9IGZhbHNlLCB0YXJnZXQgPSBudWxsLCBocmVmIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHJlbCA9IHRhcmdldCA9PT0gJ2JsYW5rJyA/ICdub29wZW5lciBub3JlZmVycmVyJyA6IG51bGw7XG4gICAgY29uc3QgbGlua1RhcmdldCA9IHRhcmdldCA/IGBfJHt0YXJnZXR9YCA6IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICBzdHlsZXMubGluayxcbiAgICAgICAgICB0aGlzLnN0YXRlLmVuYWJsZUZvY3VzU3R5bGVzID8gc3R5bGVzLmFjY2Vzc2libGVGb2N1c1N0eWxlIDogJycsXG4gICAgICAgICAgaW5saW5lID8gJycgOiBzdHlsZXMuYmxvY2tcbiAgICAgICAgKX1cbiAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlTW91c2VEb3dufVxuICAgICAgICBvbktleVVwPXt0aGlzLmhhbmRsZUtleVVwfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICByZWw9e3JlbH1cbiAgICAgICAgdGFyZ2V0PXtsaW5rVGFyZ2V0fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgQ2FjaGUgfSBmcm9tICcuL0NhY2hlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhc3VyZW1lbnRTdG9yZTxULCBWPiBpbXBsZW1lbnRzIENhY2hlPFQsIFY+IHtcbiAgbWFwOiBXZWFrTWFwPFQsIFY+ID0gbmV3IFdlYWtNYXAoKTtcblxuICBnZXQoa2V5OiBUKTogP1Yge1xuICAgIHJldHVybiB0aGlzLm1hcC5nZXQoa2V5KTtcbiAgfVxuXG4gIGhhcyhrZXk6IFQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzKGtleSk7XG4gIH1cblxuICBzZXQoa2V5OiBULCB2YWx1ZTogVik6IHZvaWQge1xuICAgIHRoaXMubWFwLnNldChrZXksIHZhbHVlKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMubWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IERlZmF1bHRMYXlvdXRTeW1ib2wgPSBTeW1ib2woJ2RlZmF1bHQnKTtcbmV4cG9ydCBjb25zdCBVbmlmb3JtUm93TGF5b3V0U3ltYm9sID0gU3ltYm9sKCd1bmlmb3JtUm93Jyk7XG4iLCIvLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBDYWNoZSB9IGZyb20gJy4vQ2FjaGUnO1xuXG5jb25zdCBtaW5kZXggPSBhcnIgPT4ge1xuICBsZXQgaWR4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYXJyW2ldIDwgYXJyW2lkeF0pIHtcbiAgICAgIGlkeCA9IGk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpZHg7XG59O1xuXG5jb25zdCBvZmZzY3JlZW4gPSAod2lkdGgsIGhlaWdodCA9IEluZmluaXR5KSA9PiAoe1xuICB0b3A6IC05OTk5LFxuICBsZWZ0OiAtOTk5OSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCA8VD4oe1xuICBjYWNoZSxcbiAgY29sdW1uV2lkdGggPSAyMzYsXG4gIGd1dHRlciA9IDE0LFxuICBtaW5Db2xzID0gMixcbiAgd2lkdGgsXG59OiB7fFxuICBjb2x1bW5XaWR0aD86IG51bWJlcixcbiAgZ3V0dGVyPzogbnVtYmVyLFxuICBjYWNoZTogQ2FjaGU8VCwgbnVtYmVyPixcbiAgbWluQ29scz86IG51bWJlcixcbiAgd2lkdGg/OiA/bnVtYmVyLFxufH0pID0+IChpdGVtczogQXJyYXk8Kj4pID0+IHtcbiAgaWYgKHdpZHRoID09IG51bGwpIHtcbiAgICByZXR1cm4gaXRlbXMubWFwKCgpID0+IG9mZnNjcmVlbihjb2x1bW5XaWR0aCkpO1xuICB9XG5cbiAgY29uc3QgY29sdW1uV2lkdGhBbmRHdXR0ZXIgPSBjb2x1bW5XaWR0aCArIGd1dHRlcjtcbiAgY29uc3QgY29sdW1uQ291bnQgPSBNYXRoLm1heChcbiAgICBNYXRoLmZsb29yKCh3aWR0aCArIGd1dHRlcikgLyBjb2x1bW5XaWR0aEFuZEd1dHRlciksXG4gICAgbWluQ29sc1xuICApO1xuICAvLyB0aGUgdG90YWwgaGVpZ2h0IG9mIGVhY2ggY29sdW1uXG4gIGNvbnN0IGhlaWdodHMgPSBuZXcgQXJyYXkoY29sdW1uQ291bnQpLmZpbGwoMCk7XG4gIGNvbnN0IGNlbnRlck9mZnNldCA9IE1hdGgubWF4KFxuICAgIE1hdGguZmxvb3IoKHdpZHRoIC0gY29sdW1uV2lkdGhBbmRHdXR0ZXIgKiBjb2x1bW5Db3VudCArIGd1dHRlcikgLyAyKSxcbiAgICAwXG4gICk7XG5cbiAgcmV0dXJuIGl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gYWNjO1xuICAgIC8vICRGbG93Rml4TWVcbiAgICBjb25zdCBoZWlnaHQgPSBjYWNoZS5nZXQoaXRlbSk7XG4gICAgbGV0IHBvc2l0aW9uO1xuXG4gICAgaWYgKGhlaWdodCA9PSBudWxsKSB7XG4gICAgICBwb3NpdGlvbiA9IG9mZnNjcmVlbihjb2x1bW5XaWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGhlaWdodEFuZEd1dHRlciA9IGhlaWdodCArIGd1dHRlcjtcbiAgICAgIGNvbnN0IGNvbCA9IG1pbmRleChoZWlnaHRzKTtcbiAgICAgIGNvbnN0IHRvcCA9IGhlaWdodHNbY29sXTtcbiAgICAgIGNvbnN0IGxlZnQgPSBjb2wgKiBjb2x1bW5XaWR0aEFuZEd1dHRlciArIGNlbnRlck9mZnNldDtcblxuICAgICAgaGVpZ2h0c1tjb2xdICs9IGhlaWdodEFuZEd1dHRlcjtcbiAgICAgIHBvc2l0aW9uID0geyB0b3AsIGxlZnQsIHdpZHRoOiBjb2x1bW5XaWR0aCwgaGVpZ2h0IH07XG4gICAgfVxuICAgIHBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9LCBbXSk7XG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgQ2FjaGUgfSBmcm9tICcuL0NhY2hlJztcblxuY29uc3Qgb2Zmc2NyZWVuID0gKHdpZHRoLCBoZWlnaHQgPSBJbmZpbml0eSkgPT4gKHtcbiAgdG9wOiAtOTk5OSxcbiAgbGVmdDogLTk5OTksXG4gIHdpZHRoLFxuICBoZWlnaHQsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgPFQ+KHtcbiAgY2FjaGUsXG4gIGNvbHVtbldpZHRoID0gMjM2LFxuICBndXR0ZXIgPSAxNCxcbiAgd2lkdGgsXG4gIG1pbkNvbHMgPSAzLFxufToge3xcbiAgY2FjaGU6IENhY2hlPFQsIG51bWJlcj4sXG4gIGNvbHVtbldpZHRoPzogbnVtYmVyLFxuICBndXR0ZXI/OiBudW1iZXIsXG4gIHdpZHRoPzogP251bWJlcixcbiAgbWluQ29scz86IG51bWJlcixcbnx9KSA9PiAoaXRlbXM6IEFycmF5PFQ+KSA9PiB7XG4gIGlmICh3aWR0aCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcCgoKSA9PiBvZmZzY3JlZW4oY29sdW1uV2lkdGgpKTtcbiAgfVxuXG4gIGNvbnN0IGNvbHVtbldpZHRoQW5kR3V0dGVyID0gY29sdW1uV2lkdGggKyBndXR0ZXI7XG4gIGNvbnN0IGNvbHVtbkNvdW50ID0gTWF0aC5tYXgoXG4gICAgTWF0aC5mbG9vcigod2lkdGggKyBndXR0ZXIpIC8gY29sdW1uV2lkdGhBbmRHdXR0ZXIpLFxuICAgIG1pbkNvbHNcbiAgKTtcblxuICBjb25zdCBwb3NpdGlvbnMgPSBbXTtcbiAgY29uc3QgaGVpZ2h0cyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBsZXQgcG9zaXRpb247XG4gICAgY29uc3QgaGVpZ2h0ID0gY2FjaGUuZ2V0KGl0ZW1zW2ldKTtcblxuICAgIGlmIChoZWlnaHQgPT0gbnVsbCkge1xuICAgICAgcG9zaXRpb24gPSBvZmZzY3JlZW4oY29sdW1uV2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb2x1bW4gPSBpICUgY29sdW1uQ291bnQ7XG4gICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGkgLyBjb2x1bW5Db3VudCk7XG5cbiAgICAgIGlmIChjb2x1bW4gPT09IDAgfHwgaGVpZ2h0ID4gaGVpZ2h0c1tyb3ddKSB7XG4gICAgICAgIGhlaWdodHNbcm93XSA9IGhlaWdodDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9wID1cbiAgICAgICAgcm93ID4gMFxuICAgICAgICAgID8gaGVpZ2h0cy5zbGljZSgwLCByb3cpLnJlZHVjZSgoc3VtLCB5KSA9PiBzdW0gKyB5ICsgZ3V0dGVyLCAwKVxuICAgICAgICAgIDogMDtcblxuICAgICAgcG9zaXRpb24gPSB7XG4gICAgICAgIHRvcCxcbiAgICAgICAgbGVmdDogY29sdW1uICogY29sdW1uV2lkdGhBbmRHdXR0ZXIsXG4gICAgICAgIHdpZHRoOiBjb2x1bW5XaWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgfTtcbiAgICB9XG4gICAgcG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICB9XG4gIHJldHVybiBwb3NpdGlvbnM7XG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgQ2FjaGUgfSBmcm9tICcuL0NhY2hlJztcblxuY29uc3QgbWluZGV4ID0gYXJyID0+IHtcbiAgbGV0IGlkeCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFycltpXSA8IGFycltpZHhdKSB7XG4gICAgICBpZHggPSBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaWR4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgPFQ+KHtcbiAgZ3V0dGVyID0gMCxcbiAgY2FjaGUsXG4gIG1pbkNvbHMgPSAyLFxuICBpZGVhbENvbHVtbldpZHRoID0gMjQwLFxuICB3aWR0aCxcbn06IHt8XG4gIGd1dHRlcj86IG51bWJlcixcbiAgY2FjaGU6IENhY2hlPFQsIG51bWJlcj4sXG4gIG1pbkNvbHM/OiBudW1iZXIsXG4gIGlkZWFsQ29sdW1uV2lkdGg/OiBudW1iZXIsXG4gIHdpZHRoPzogP251bWJlcixcbnx9KSA9PiB7XG4gIGlmICh3aWR0aCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIChpdGVtczogQXJyYXk8Kj4pID0+XG4gICAgICBpdGVtcy5tYXAoKCkgPT4gKHtcbiAgICAgICAgdG9wOiBJbmZpbml0eSxcbiAgICAgICAgbGVmdDogSW5maW5pdHksXG4gICAgICAgIHdpZHRoOiBJbmZpbml0eSxcbiAgICAgICAgaGVpZ2h0OiBJbmZpbml0eSxcbiAgICAgIH0pKTtcbiAgfVxuXG4gIC8vIFwiVGhpcyBpcyBraW5kIG9mIGNyYXp5IVwiIC0geW91XG4gIC8vIFllcywgaW5kZWVkLiBUaGUgXCJndWVzc2luZ1wiIGhlcmUgaXMgbWVhbnQgdG8gcmVwbGljYXRlIHRoZSBwYXNzIHRoYXQgdGhlXG4gIC8vIG9yaWdpbmFsIGltcGxlbWVudGF0aW9uIHRha2VzIHdpdGggQ1NTLlxuICBjb25zdCBjb2xndWVzcyA9IE1hdGguZmxvb3Iod2lkdGggLyBpZGVhbENvbHVtbldpZHRoKTtcbiAgY29uc3QgY29sdW1uQ291bnQgPSBNYXRoLm1heChcbiAgICBNYXRoLmZsb29yKCh3aWR0aCAtIGNvbGd1ZXNzICogZ3V0dGVyKSAvIGlkZWFsQ29sdW1uV2lkdGgpLFxuICAgIG1pbkNvbHNcbiAgKTtcbiAgY29uc3QgY29sdW1uV2lkdGggPSBNYXRoLmZsb29yKHdpZHRoIC8gY29sdW1uQ291bnQpO1xuXG4gIHJldHVybiAoaXRlbXM6IEFycmF5PFQ+KSA9PiB7XG4gICAgLy8gdGhlIHRvdGFsIGhlaWdodCBvZiBlYWNoIGNvbHVtblxuICAgIGNvbnN0IGhlaWdodHMgPSBuZXcgQXJyYXkoY29sdW1uQ291bnQpLmZpbGwoMCk7XG5cbiAgICByZXR1cm4gaXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGFjYztcbiAgICAgIGNvbnN0IGhlaWdodCA9IGNhY2hlLmdldChpdGVtKTtcbiAgICAgIGxldCBwb3NpdGlvbjtcblxuICAgICAgaWYgKGhlaWdodCA9PSBudWxsKSB7XG4gICAgICAgIHBvc2l0aW9uID0ge1xuICAgICAgICAgIHRvcDogSW5maW5pdHksXG4gICAgICAgICAgbGVmdDogSW5maW5pdHksXG4gICAgICAgICAgd2lkdGg6IGNvbHVtbldpZHRoLFxuICAgICAgICAgIGhlaWdodDogSW5maW5pdHksXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb2wgPSBtaW5kZXgoaGVpZ2h0cyk7XG4gICAgICAgIGNvbnN0IHRvcCA9IGhlaWdodHNbY29sXTtcbiAgICAgICAgY29uc3QgbGVmdCA9IGNvbCAqIGNvbHVtbldpZHRoICsgZ3V0dGVyIC8gMjtcblxuICAgICAgICBoZWlnaHRzW2NvbF0gKz0gaGVpZ2h0O1xuICAgICAgICBwb3NpdGlvbiA9IHtcbiAgICAgICAgICB0b3AsXG4gICAgICAgICAgbGVmdCxcbiAgICAgICAgICB3aWR0aDogY29sdW1uV2lkdGggLSBndXR0ZXIsXG4gICAgICAgICAgaGVpZ2h0LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbik7XG4gICAgICByZXR1cm4gcG9zaXRpb25zO1xuICAgIH0sIFtdKTtcbiAgfTtcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBGZXRjaEl0ZW1zIGZyb20gJy4uL1Njcm9sbEZldGNoL0ZldGNoSXRlbXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01hc29ucnkuY3NzJztcbmltcG9ydCBTY3JvbGxDb250YWluZXIgZnJvbSAnLi4vU2Nyb2xsRmV0Y2gvU2Nyb2xsQ29udGFpbmVyJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuLi90aHJvdHRsZSc7XG5pbXBvcnQgdHlwZSB7IENhY2hlIH0gZnJvbSAnLi9DYWNoZSc7XG5pbXBvcnQgTWVhc3VyZW1lbnRTdG9yZSBmcm9tICcuL01lYXN1cmVtZW50U3RvcmUnO1xuaW1wb3J0IHtcbiAgZ2V0RWxlbWVudEhlaWdodCxcbiAgZ2V0UmVsYXRpdmVTY3JvbGxUb3AsXG4gIGdldFNjcm9sbFBvcyxcbn0gZnJvbSAnLi4vU2Nyb2xsRmV0Y2gvc2Nyb2xsVXRpbHMnO1xuaW1wb3J0IHtcbiAgRGVmYXVsdExheW91dFN5bWJvbCxcbiAgVW5pZm9ybVJvd0xheW91dFN5bWJvbCxcbn0gZnJvbSAnLi9sZWdhY3lMYXlvdXRTeW1ib2xzJztcbmltcG9ydCBkZWZhdWx0TGF5b3V0IGZyb20gJy4vZGVmYXVsdExheW91dCc7XG5pbXBvcnQgdW5pZm9ybVJvd0xheW91dCBmcm9tICcuL3VuaWZvcm1Sb3dMYXlvdXQnO1xuaW1wb3J0IGZ1bGxXaWR0aExheW91dCBmcm9tICcuL2Z1bGxXaWR0aExheW91dCc7XG5pbXBvcnQgTGVnYWN5TWFzb25yeUxheW91dCBmcm9tICcuLi9NYXNvbnJ5L2xheW91dC9tYXNvbnJ5JztcbmltcG9ydCBMZWdhY3lVbmlmb3JtUm93TGF5b3V0IGZyb20gJy4uL01hc29ucnkvbGF5b3V0L3VuaWZvcm1Sb3cnO1xuXG50eXBlIFByb3BzPFQ+ID0ge3xcbiAgY29sdW1uV2lkdGg/OiBudW1iZXIsXG4gIGNvbXA6IFJlYWN0LkNvbXBvbmVudFR5cGU8e1xuICAgIGRhdGE6IFQsXG4gICAgaXRlbUlkeDogbnVtYmVyLFxuICAgIGlzTWVhc3VyaW5nOiBib29sZWFuLFxuICB9PixcbiAgZmxleGlibGU/OiBib29sZWFuLFxuICBndXR0ZXJXaWR0aD86IG51bWJlcixcbiAgaXRlbXM6IEFycmF5PFQ+LFxuICBtZWFzdXJlbWVudFN0b3JlOiBDYWNoZTxULCAqPixcbiAgbWluQ29sczogbnVtYmVyLFxuICBsYXlvdXQ/OlxuICAgIHwgRGVmYXVsdExheW91dFN5bWJvbFxuICAgIHwgVW5pZm9ybVJvd0xheW91dFN5bWJvbFxuICAgIHwgTGVnYWN5TWFzb25yeUxheW91dFxuICAgIHwgTGVnYWN5VW5pZm9ybVJvd0xheW91dCxcbiAgLy8gU3VwcG9ydCBsZWdhY3kgbG9hZEl0ZW1zIHVzYWdlLlxuICAvLyBUT0RPOiBTaW1wbGlmeSBub24gZmFsc2V5IGZsb3d0eXBlLlxuICBsb2FkSXRlbXM/OlxuICAgIHwgZmFsc2VcbiAgICB8ICgoXG4gICAgICAgID97XG4gICAgICAgICAgZnJvbTogbnVtYmVyLFxuICAgICAgICB9XG4gICAgICApID0+IHZvaWQgfCBib29sZWFuIHwge30pLFxuICBzY3JvbGxDb250YWluZXI/OiAoKSA9PiBIVE1MRWxlbWVudCxcbiAgc2VydmVyUmVuZGVyPzogYm9vbGVhbixcbiAgdmlydHVhbGl6ZT86IGJvb2xlYW4sXG58fTtcblxudHlwZSBTdGF0ZSA9IHt8XG4gIGhhc1BlbmRpbmdNZWFzdXJlbWVudHM6IGJvb2xlYW4sXG4gIGlzRmV0Y2hpbmc6IGJvb2xlYW4sXG4gIHNjcm9sbFRvcDogbnVtYmVyLFxuICB3aWR0aDogP251bWJlcixcbnx9O1xuXG5jb25zdCBSRVNJWkVfREVCT1VOQ0UgPSAzMDA7XG4vLyBNdWx0aXBsaWVkIGFnYWluc3QgY29udGFpbmVyIGhlaWdodC5cbi8vIFRoZSBhbW91bnQgb2YgZXh0cmEgYnVmZmVyIHNwYWNlIGZvciBwb3B1bGF0aW5nIHZpc2libGUgaXRlbXMuXG5jb25zdCBWSVJUVUFMX0JVRkZFUl9GQUNUT1IgPSAwLjc7XG5cbmNvbnN0IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uID0gbiA9PiAobiAhPT0gSW5maW5pdHkgPyBuIDogdW5kZWZpbmVkKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzb25yeTxUPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wczxUPiwgU3RhdGU+IHtcbiAgc3RhdGljIGNyZWF0ZU1lYXN1cmVtZW50U3RvcmUoKSB7XG4gICAgcmV0dXJuIG5ldyBNZWFzdXJlbWVudFN0b3JlKCk7XG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBwcmVmZXJyZWQvdGFyZ2V0IGl0ZW0gd2lkdGguIElmIGBmbGV4aWJsZWAgaXMgc2V0LCB0aGUgaXRlbSB3aWR0aCB3aWxsXG4gICAgICogZ3JvdyB0byBmaWxsIGNvbHVtbiBzcGFjZSwgYW5kIHNocmluayB0byBmaXQgaWYgYmVsb3cgbWluIGNvbHVtbnMuXG4gICAgICovXG4gICAgY29sdW1uV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHRvIHJlbmRlci5cbiAgICAgKi9cbiAgICAvKiBlc2xpbnQgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXM6IDAgKi9cbiAgICBjb21wOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHByZWZlcnJlZC90YXJnZXQgaXRlbSB3aWR0aC4gSXRlbSB3aWR0aCB3aWxsIGdyb3cgdG8gZmlsbFxuICAgICAqIGNvbHVtbiBzcGFjZSwgYW5kIHNocmluayB0byBmaXQgaWYgYmVsb3cgbWluIGNvbHVtbnMuXG4gICAgICovXG4gICAgZmxleGlibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIGVhY2ggaXRlbS5cbiAgICAgKi9cbiAgICBndXR0ZXJXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGFsbCBvYmplY3RzIHRvIGRpc3BsYXkgaW4gdGhlIGdyaWQuXG4gICAgICovXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBNZWFzdXJlbWVudCBTdG9yZVxuICAgICAqL1xuICAgIG1lYXN1cmVtZW50U3RvcmU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE1lYXN1cmVtZW50U3RvcmUpLFxuXG4gICAgLyoqXG4gICAgICogQSBjYWxsYmFjayB3aGljaCB0aGUgZ3JpZCBjYWxscyB3aGVuIHdlIG5lZWQgdG8gbG9hZCBtb3JlIGl0ZW1zIGFzIHRoZSB1c2VyIHNjcm9sbHMuXG4gICAgICogVGhlIGNhbGxiYWNrIHNob3VsZCB1cGRhdGUgdGhlIHN0YXRlIG9mIHRoZSBpdGVtcywgYW5kIHBhc3MgdGhvc2UgaW4gYXMgcHJvcHNcbiAgICAgKiB0byB0aGlzIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBsb2FkSXRlbXM6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogTWluaW11bSBudW1iZXIgb2YgY29sdW1ucyB0byBkaXNwbGF5LlxuICAgICAqL1xuICAgIG1pbkNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHRoZSBncmlkIGNhbGxzIHRvIGdldCB0aGUgc2Nyb2xsIGNvbnRhaW5lci5cbiAgICAgKiBUaGlzIGlzIHJlcXVpcmVkIGlmIHRoZSBncmlkIGlzIGV4cGVjdGVkIHRvIGJlIHNjcm9sbGFibGUuXG4gICAgICovXG4gICAgc2Nyb2xsQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoaXMgaW5zdGFuY2UgaXMgc2VydmVyIHJlbmRlcmVkLlxuICAgICAqIFRPRE86IElmIHRydWUsIGdlbmVyYXRlIGFuZCBvdXRwdXQgQ1NTIGZvciB0aGUgaW5pdGlhbCBzZXJ2ZXIgcmVuZGVyLlxuICAgICAqL1xuICAgIHNlcnZlclJlbmRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byB1c2UgYWN0dWFsIHZpcnR1YWxpemF0aW9uXG4gICAgICovXG4gICAgdmlydHVhbGl6ZTogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2x1bW5XaWR0aDogMjM2LFxuICAgIG1lYXN1cmVtZW50U3RvcmU6IG5ldyBNZWFzdXJlbWVudFN0b3JlKCksXG4gICAgbWluQ29sczogMyxcbiAgICBzZXJ2ZXJSZW5kZXI6IGZhbHNlLFxuICAgIGxheW91dDogRGVmYXVsdExheW91dFN5bWJvbCxcbiAgICBsb2FkSXRlbXM6ICgpID0+IHt9LFxuICAgIHZpcnR1YWxpemU6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wczxUPikge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gMDtcbiAgICB0aGlzLmNvbnRhaW5lck9mZnNldCA9IDA7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50czogcHJvcHMuaXRlbXMuc29tZShcbiAgICAgICAgaXRlbSA9PiAhIWl0ZW0gJiYgIXByb3BzLm1lYXN1cmVtZW50U3RvcmUuaGFzKGl0ZW0pXG4gICAgICApLFxuICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cblxuICBzdGF0ZTogU3RhdGU7XG5cbiAgLyoqXG4gICAqIEFkZHMgaG9va3MgYWZ0ZXIgdGhlIGNvbXBvbmVudCBtb3VudHMuXG4gICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdyaWRXcmFwcGVyXG4gICAgICA/IHRoaXMuZ3JpZFdyYXBwZXIuY2xpZW50V2lkdGhcbiAgICAgIDogdGhpcy5zdGF0ZS53aWR0aDtcblxuICAgIHRoaXMubWVhc3VyZUNvbnRhaW5lcigpO1xuXG4gICAgbGV0IHsgc2Nyb2xsVG9wIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICh0aGlzLnNjcm9sbENvbnRhaW5lciAhPSBudWxsKSB7XG4gICAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSB0aGlzLnNjcm9sbENvbnRhaW5lci5nZXRTY3JvbGxDb250YWluZXJSZWYoKTtcbiAgICAgIGlmIChzY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsUG9zKHNjcm9sbENvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC1tb3VudC1zZXQtc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKHsgc2Nyb2xsVG9wLCB3aWR0aCB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoeyBpdGVtcywgbWVhc3VyZW1lbnRTdG9yZSB9OiBQcm9wczxUPikge1xuICAgIC8vIHdoZW5ldmVyIHdlJ3JlIHJlY2VpdmluZyBuZXcgcHJvcHMsIGRldGVybWluZSB3aGV0aGVyIGFueSBpdGVtcyBuZWVkIHRvIGJlIG1lYXN1cmVkXG4gICAgLy8gVE9ETyAtIHdlIHNob3VsZCB0cmVhdCBpdGVtcyBhcyBpbW11dGFibGVcbiAgICBjb25zdCBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzID0gaXRlbXMuc29tZShcbiAgICAgIGl0ZW0gPT4gIW1lYXN1cmVtZW50U3RvcmUuaGFzKGl0ZW0pXG4gICAgKTtcbiAgICAvLyBTaGFsbG93IGNvbXBhcmUgYWxsIGl0ZW1zLCBpZiBhbnkgY2hhbmdlIHJlZmxvdyB0aGUgZ3JpZC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAvLyBXZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2Ygb3VyIGN1cnJlbnQgcHJvcHMgYW5kIGV2ZXJ5dGhpbmcgbWF0Y2hlcy5cbiAgICAgIC8vIElmIHdlIGhpdCB0aGlzIGNhc2UgaXQgbWVhbnMgd2UgbmVlZCB0byBpbnNlcnQgbmV3IGl0ZW1zLlxuICAgICAgaWYgKHRoaXMucHJvcHMuaXRlbXNbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzLFxuICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXNldCBncmlkIGl0ZW1zIHdoZW46XG4gICAgICBpZiAoXG4gICAgICAgIC8vIEFuIGl0ZW0gb2JqZWN0IHJlZiBkb2VzIG5vdCBtYXRjaC5cbiAgICAgICAgaXRlbXNbaV0gIT09IHRoaXMucHJvcHMuaXRlbXNbaV0gfHxcbiAgICAgICAgLy8gT3IgbGVzcyBpdGVtcyB0aGFuIHdlIGN1cnJlbnRseSBoYXZlIGFyZSBwYXNzZWQgaW4uXG4gICAgICAgIGl0ZW1zLmxlbmd0aCA8IHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyxcbiAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXNldCBpdGVtcyBpZiBuZXcgaXRlbXMgYXJyYXkgaXMgZW1wdHkuXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzLFxuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaGFzUGVuZGluZ01lYXN1cmVtZW50cyAhPT0gdGhpcy5zdGF0ZS5oYXNQZW5kaW5nTWVhc3VyZW1lbnRzKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgd2UgYWx3YXlzIHVwZGF0ZSBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzPFQ+LCBwcmV2U3RhdGU6IFN0YXRlKSB7XG4gICAgY29uc3QgeyBpdGVtcywgbWVhc3VyZW1lbnRTdG9yZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLm1lYXN1cmVUaW1lb3V0KTtcbiAgICB0aGlzLm1lYXN1cmVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1lYXN1cmVDb250YWluZXIoKTtcbiAgICB9KTtcblxuICAgIGlmIChwcmV2U3RhdGUud2lkdGggIT0gbnVsbCAmJiB0aGlzLnN0YXRlLndpZHRoICE9PSBwcmV2U3RhdGUud2lkdGgpIHtcbiAgICAgIG1lYXN1cmVtZW50U3RvcmUucmVzZXQoKTtcbiAgICB9XG4gICAgLy8gY2FsY3VsYXRlIHdoZXRoZXIgd2Ugc3RpbGwgaGF2ZSBwZW5kaW5nIG1lYXN1cmVtZW50c1xuICAgIGNvbnN0IGhhc1BlbmRpbmdNZWFzdXJlbWVudHMgPSBpdGVtcy5zb21lKFxuICAgICAgaXRlbSA9PiAhIWl0ZW0gJiYgIW1lYXN1cmVtZW50U3RvcmUuaGFzKGl0ZW0pXG4gICAgKTtcbiAgICBpZiAoXG4gICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzIHx8XG4gICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzICE9PSB0aGlzLnN0YXRlLmhhc1BlbmRpbmdNZWFzdXJlbWVudHMgfHxcbiAgICAgIHByZXZTdGF0ZS53aWR0aCA9PSBudWxsXG4gICAgKSB7XG4gICAgICB0aGlzLmluc2VydEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGxpc3RlbmVycyB3aGVuIHVubW91bnRpbmcuXG4gICAqL1xuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5pbnNlcnRBbmltYXRpb25GcmFtZSkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5pbnNlcnRBbmltYXRpb25GcmFtZSk7XG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aGlzLm1lYXN1cmVUaW1lb3V0KTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICB9XG5cbiAgc2V0R3JpZFdyYXBwZXJSZWYgPSAocmVmOiA/SFRNTEVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmdyaWRXcmFwcGVyID0gcmVmO1xuICB9O1xuXG4gIHNldFNjcm9sbENvbnRhaW5lclJlZiA9IChyZWY6ID9TY3JvbGxDb250YWluZXIpID0+IHtcbiAgICB0aGlzLnNjcm9sbENvbnRhaW5lciA9IHJlZjtcbiAgfTtcblxuICBwcm9wczogUHJvcHM8Kj47XG4gIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xuICBjb250YWluZXJPZmZzZXQ6IG51bWJlcjtcbiAgZ3JpZFdyYXBwZXI6ID9IVE1MRWxlbWVudDtcbiAgaW5zZXJ0QW5pbWF0aW9uRnJhbWU6IEFuaW1hdGlvbkZyYW1lSUQ7XG4gIG1lYXN1cmVUaW1lb3V0OiBUaW1lb3V0SUQ7XG4gIHJlc2l6ZVRpbWVvdXQ6IFRpbWVvdXRJRDtcbiAgc2Nyb2xsQ29udGFpbmVyOiA/U2Nyb2xsQ29udGFpbmVyO1xuXG4gIC8qKlxuICAgKiBEZWxheXMgcmVzaXplIGhhbmRsaW5nIGluIGNhc2UgdGhlIHNjcm9sbCBjb250YWluZXIgaXMgc3RpbGwgYmVpbmcgcmVzaXplZC5cbiAgICovXG4gIGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5yZXNpemVUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KTtcbiAgICB9XG4gICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5ncmlkV3JhcHBlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2lkdGg6IHRoaXMuZ3JpZFdyYXBwZXIuY2xpZW50V2lkdGggfSk7XG4gICAgICB9XG4gICAgfSwgUkVTSVpFX0RFQk9VTkNFKTtcbiAgfTtcblxuICB1cGRhdGVTY3JvbGxQb3NpdGlvbiA9IHRocm90dGxlKCgpID0+IHtcbiAgICBpZiAoIXRoaXMuc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IHRoaXMuc2Nyb2xsQ29udGFpbmVyLmdldFNjcm9sbENvbnRhaW5lclJlZigpO1xuXG4gICAgaWYgKCFzY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNjcm9sbFRvcDogZ2V0U2Nyb2xsUG9zKHNjcm9sbENvbnRhaW5lciksXG4gICAgfSk7XG4gIH0pO1xuXG4gIG1lYXN1cmVDb250YWluZXIoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsQ29udGFpbmVyICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgc2Nyb2xsQ29udGFpbmVyIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyUmVmID0gc2Nyb2xsQ29udGFpbmVyLmdldFNjcm9sbENvbnRhaW5lclJlZigpO1xuICAgICAgaWYgKHNjcm9sbENvbnRhaW5lclJlZikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lckhlaWdodCA9IGdldEVsZW1lbnRIZWlnaHQoc2Nyb2xsQ29udGFpbmVyUmVmKTtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmdyaWRXcmFwcGVyO1xuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIGNvbnN0IHJlbGF0aXZlU2Nyb2xsVG9wID0gZ2V0UmVsYXRpdmVTY3JvbGxUb3Aoc2Nyb2xsQ29udGFpbmVyUmVmKTtcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lck9mZnNldCA9XG4gICAgICAgICAgICBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyByZWxhdGl2ZVNjcm9sbFRvcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBtZWFzdXJlbWVudHMvcG9zaXRpb25zIGFuZCBmb3JjZSBhIHJlZmxvdyBvZiB0aGUgZW50aXJlIGdyaWQuXG4gICAqIE9ubHkgdXNlIHRoaXMgaWYgYWJzb2x1dGVseSBuZWNlc3NhcnkgLSBleDogV2UgbmVlZCB0byByZWZsb3cgaXRlbXMgaWYgdGhlXG4gICAqIG51bWJlciBvZiBjb2x1bW5zIHdlIHdvdWxkIGRpc3BsYXkgc2hvdWxkIGNoYW5nZSBhZnRlciBhIHJlc2l6ZS5cbiAgICovXG4gIHJlZmxvdygpIHtcbiAgICB0aGlzLnByb3BzLm1lYXN1cmVtZW50U3RvcmUucmVzZXQoKTtcbiAgICB0aGlzLm1lYXN1cmVDb250YWluZXIoKTtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBmZXRjaE1vcmUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBsb2FkSXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGxvYWRJdGVtcyAmJiB0eXBlb2YgbG9hZEl0ZW1zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4gbG9hZEl0ZW1zKHsgZnJvbTogdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGggfSlcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlck1hc29ucnlDb21wb25lbnQgPSAoaXRlbURhdGE6IFQsIGlkeDogbnVtYmVyLCBwb3NpdGlvbjogKikgPT4ge1xuICAgIGNvbnN0IHsgY29tcDogQ29tcG9uZW50LCB2aXJ0dWFsaXplIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0IH0gPSBwb3NpdGlvbjtcblxuICAgIGxldCBpc1Zpc2libGU7XG4gICAgaWYgKHRoaXMucHJvcHMuc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCB2aXJ0dWFsQnVmZmVyID0gdGhpcy5jb250YWluZXJIZWlnaHQgKiBWSVJUVUFMX0JVRkZFUl9GQUNUT1I7XG4gICAgICBjb25zdCBvZmZzZXRTY3JvbGxQb3MgPSB0aGlzLnN0YXRlLnNjcm9sbFRvcCAtIHRoaXMuY29udGFpbmVyT2Zmc2V0O1xuICAgICAgY29uc3Qgdmlld3BvcnRUb3AgPSBvZmZzZXRTY3JvbGxQb3MgLSB2aXJ0dWFsQnVmZmVyO1xuICAgICAgY29uc3Qgdmlld3BvcnRCb3R0b20gPVxuICAgICAgICBvZmZzZXRTY3JvbGxQb3MgKyB0aGlzLmNvbnRhaW5lckhlaWdodCArIHZpcnR1YWxCdWZmZXI7XG5cbiAgICAgIGlzVmlzaWJsZSA9ICEoXG4gICAgICAgIHBvc2l0aW9uLnRvcCArIHBvc2l0aW9uLmhlaWdodCA8IHZpZXdwb3J0VG9wIHx8XG4gICAgICAgIHBvc2l0aW9uLnRvcCA+IHZpZXdwb3J0Qm90dG9tXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBubyBzY3JvbGwgY29udGFpbmVyIGlzIHBhc3NlZCBpbiwgaXRlbXMgc2hvdWxkIGFsd2F5cyBiZSB2aXNpYmxlXG4gICAgICBpc1Zpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1Db21wb25lbnQgPSAoXG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17YGl0ZW0tJHtpZHh9YH1cbiAgICAgICAgY2xhc3NOYW1lPXtbc3R5bGVzLk1hc29ucnlfX0l0ZW0sIHN0eWxlcy5NYXNvbnJ5X19JdGVtX19Nb3VudGVkXS5qb2luKFxuICAgICAgICAgICcgJ1xuICAgICAgICApfVxuICAgICAgICBkYXRhLWdyaWQtaXRlbVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtsZWZ0fXB4KSB0cmFuc2xhdGVZKCR7dG9wfXB4KWAsXG4gICAgICAgICAgV2Via2l0VHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke2xlZnR9cHgpIHRyYW5zbGF0ZVkoJHt0b3B9cHgpYCxcbiAgICAgICAgICB3aWR0aDogbGF5b3V0TnVtYmVyVG9Dc3NEaW1lbnNpb24od2lkdGgpLFxuICAgICAgICAgIGhlaWdodDogbGF5b3V0TnVtYmVyVG9Dc3NEaW1lbnNpb24oaGVpZ2h0KSxcbiAgICAgICAgICAuLi4odmlydHVhbGl6ZSB8fCBpc1Zpc2libGVcbiAgICAgICAgICAgID8ge31cbiAgICAgICAgICAgIDogeyBkaXNwbGF5OiAnbm9uZScsIHRyYW5zaXRpb246ICdub25lJyB9KSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbXBvbmVudCBkYXRhPXtpdGVtRGF0YX0gaXRlbUlkeD17aWR4fSBpc01lYXN1cmluZz17ZmFsc2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuIHZpcnR1YWxpemUgPyAoaXNWaXNpYmxlICYmIGl0ZW1Db21wb25lbnQpIHx8IG51bGwgOiBpdGVtQ29tcG9uZW50O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjb2x1bW5XaWR0aCxcbiAgICAgIGNvbXA6IENvbXBvbmVudCxcbiAgICAgIGZsZXhpYmxlLFxuICAgICAgZ3V0dGVyV2lkdGg6IGd1dHRlcixcbiAgICAgIG1lYXN1cmVtZW50U3RvcmUsXG4gICAgICBpdGVtcyxcbiAgICAgIG1pbkNvbHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzLCB3aWR0aCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGxldCBsYXlvdXQ7XG4gICAgaWYgKGZsZXhpYmxlICYmIHdpZHRoICE9PSBudWxsKSB7XG4gICAgICBsYXlvdXQgPSBmdWxsV2lkdGhMYXlvdXQoe1xuICAgICAgICBndXR0ZXIsXG4gICAgICAgIGNhY2hlOiBtZWFzdXJlbWVudFN0b3JlLFxuICAgICAgICBtaW5Db2xzLFxuICAgICAgICBpZGVhbENvbHVtbldpZHRoOiBjb2x1bW5XaWR0aCxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5sYXlvdXQgPT09IFVuaWZvcm1Sb3dMYXlvdXRTeW1ib2wgfHxcbiAgICAgIHRoaXMucHJvcHMubGF5b3V0IGluc3RhbmNlb2YgTGVnYWN5VW5pZm9ybVJvd0xheW91dFxuICAgICkge1xuICAgICAgbGF5b3V0ID0gdW5pZm9ybVJvd0xheW91dCh7XG4gICAgICAgIGNhY2hlOiBtZWFzdXJlbWVudFN0b3JlLFxuICAgICAgICBjb2x1bW5XaWR0aCxcbiAgICAgICAgZ3V0dGVyLFxuICAgICAgICBtaW5Db2xzLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXlvdXQgPSBkZWZhdWx0TGF5b3V0KHtcbiAgICAgICAgY2FjaGU6IG1lYXN1cmVtZW50U3RvcmUsXG4gICAgICAgIGNvbHVtbldpZHRoLFxuICAgICAgICBndXR0ZXIsXG4gICAgICAgIG1pbkNvbHMsXG4gICAgICAgIHdpZHRoLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGdyaWRCb2R5O1xuICAgIGlmICh3aWR0aCA9PSBudWxsICYmIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMpIHtcbiAgICAgIC8vIFdoZW4gaHlyZGF0aW5nIGZyb20gYSBzZXJ2ZXIgcmVuZGVyLCB3ZSBkb24ndCBoYXZlIHRoZSB3aWR0aCBvZiB0aGUgZ3JpZFxuICAgICAgLy8gYW5kIHRoZSBtZWFzdXJlbWVudCBzdG9yZSBpcyBlbXB0eVxuICAgICAgZ3JpZEJvZHkgPSAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5NYXNvbnJ5fVxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMCwgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgIHJlZj17dGhpcy5zZXRHcmlkV3JhcHBlclJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIHtpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtKS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYgLy8ga2VlcCB0aGlzIGluIHN5bmMgd2l0aCByZW5kZXJNYXNvbnJ5Q29tcG9uZW50XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0YXRpY1wiXG4gICAgICAgICAgICAgIGRhdGEtZ3JpZC1pdGVtXG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpJyxcbiAgICAgICAgICAgICAgICBXZWJraXRUcmFuc2Zvcm06ICd0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogZmxleGlibGVcbiAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICA6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKGNvbHVtbldpZHRoKSwgLy8gd2UgY2FuJ3Qgc2V0IGEgd2lkdGggZm9yIHNlcnZlciByZW5kZXJlZCBmbGV4aWJsZSBpdGVtc1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWwgJiYgIWZsZXhpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAvLyBvbmx5IG1lYXN1cmUgZmxleGlibGUgaXRlbXMgb24gY2xpZW50XG4gICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudFN0b3JlLnNldChpdGVtLCBlbC5jbGllbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCBkYXRhPXtpdGVtfSBpdGVtSWR4PXtpfSBpc01lYXN1cmluZz17ZmFsc2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAod2lkdGggPT0gbnVsbCkge1xuICAgICAgLy8gV2hlbiB0aGUgd2lkdGggaXMgZW1wdHkgKHVzdWFsbHkgYWZ0ZXIgYSByZS1tb3VudCkgcmVuZGVyIGFuIGVtcHR5XG4gICAgICAvLyBkaXYgdG8gY29sbGVjdCB0aGUgd2lkdGggZm9yIGxheW91dFxuICAgICAgZ3JpZEJvZHkgPSA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gcmVmPXt0aGlzLnNldEdyaWRXcmFwcGVyUmVmfSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRnVsbCBsYXlvdXQgaXMgcG9zc2libGVcbiAgICAgIGNvbnN0IGl0ZW1zVG9SZW5kZXIgPSBpdGVtcy5maWx0ZXIoXG4gICAgICAgIGl0ZW0gPT4gaXRlbSAmJiBtZWFzdXJlbWVudFN0b3JlLmhhcyhpdGVtKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGl0ZW1zVG9NZWFzdXJlID0gaXRlbXNcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gJiYgIW1lYXN1cmVtZW50U3RvcmUuaGFzKGl0ZW0pKVxuICAgICAgICAuc2xpY2UoMCwgbWluQ29scyk7XG5cbiAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGxheW91dChpdGVtc1RvUmVuZGVyKTtcbiAgICAgIGNvbnN0IG1lYXN1cmluZ1Bvc2l0aW9ucyA9IGxheW91dChpdGVtc1RvTWVhc3VyZSk7XG4gICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCguLi5wb3NpdGlvbnMubWFwKHBvcyA9PiBwb3MudG9wICsgcG9zLmhlaWdodCkpO1xuICAgICAgZ3JpZEJvZHkgPSAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSByZWY9e3RoaXMuc2V0R3JpZFdyYXBwZXJSZWZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWFzb25yeX0gc3R5bGU9e3sgaGVpZ2h0LCB3aWR0aCB9fT5cbiAgICAgICAgICAgIHtpdGVtc1RvUmVuZGVyLm1hcCgoaXRlbSwgaSkgPT5cbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJNYXNvbnJ5Q29tcG9uZW50KGl0ZW0sIGksIHBvc2l0aW9uc1tpXSlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYXNvbnJ5fSBzdHlsZT17eyB3aWR0aCB9fT5cbiAgICAgICAgICAgIHtpdGVtc1RvTWVhc3VyZS5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBtZWFzdXJpbmdQb3NpdGlvbnNbaV07XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtgbWVhc3VyaW5nLSR7aX1gfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAuLi5wb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnRTdG9yZS5zZXQoZGF0YSwgZWwuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IGRhdGE9e2RhdGF9IGl0ZW1JZHg9e2l9IGlzTWVhc3VyaW5nIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHt0aGlzLnNjcm9sbENvbnRhaW5lciAmJiAoXG4gICAgICAgICAgICA8RmV0Y2hJdGVtc1xuICAgICAgICAgICAgICBjb250YWluZXJIZWlnaHQ9e3RoaXMuY29udGFpbmVySGVpZ2h0fVxuICAgICAgICAgICAgICBmZXRjaE1vcmU9e3RoaXMuZmV0Y2hNb3JlfVxuICAgICAgICAgICAgICBpc0ZldGNoaW5nPXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzRmV0Y2hpbmcgfHwgdGhpcy5zdGF0ZS5oYXNQZW5kaW5nTWVhc3VyZW1lbnRzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgIHNjcm9sbFRvcD17dGhpcy5zdGF0ZS5zY3JvbGxUb3B9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zY3JvbGxDb250YWluZXIgPyAoXG4gICAgICA8U2Nyb2xsQ29udGFpbmVyXG4gICAgICAgIHJlZj17dGhpcy5zZXRTY3JvbGxDb250YWluZXJSZWZ9XG4gICAgICAgIG9uU2Nyb2xsPXt0aGlzLnVwZGF0ZVNjcm9sbFBvc2l0aW9ufVxuICAgICAgICBzY3JvbGxDb250YWluZXI9e3RoaXMucHJvcHMuc2Nyb2xsQ29udGFpbmVyfVxuICAgICAgPlxuICAgICAgICB7Z3JpZEJvZHl9XG4gICAgICA8L1Njcm9sbENvbnRhaW5lcj5cbiAgICApIDogKFxuICAgICAgZ3JpZEJvZHlcbiAgICApO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gvQm94JztcbmltcG9ydCBEaXZpZGVyIGZyb20gJy4uL0RpdmlkZXIvRGl2aWRlcic7XG5pbXBvcnQgSGVhZGluZyBmcm9tICcuLi9IZWFkaW5nL0hlYWRpbmcnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi4vSWNvbkJ1dHRvbi9JY29uQnV0dG9uJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01vZGFsLmNzcyc7XG5pbXBvcnQgYm9yZGVycyBmcm9tICcuLi9Cb3JkZXJzLmNzcyc7XG5pbXBvcnQgYnJlYWtwb2ludHMgZnJvbSAnLi4vYnJlYWtwb2ludHMuanNvbic7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL0NvbG9ycy5jc3MnO1xuaW1wb3J0IGNvbHVtbiBmcm9tICcuLi9Db2x1bW4uY3NzJztcbmltcG9ydCBjdXJzb3IgZnJvbSAnLi4vQ3Vyc29yLmNzcyc7XG5pbXBvcnQgbGF5b3V0IGZyb20gJy4uL0xheW91dC5jc3MnO1xuaW1wb3J0IHdoaXRlc3BhY2UgZnJvbSAnLi4vV2hpdGVzcGFjZS5jc3MnO1xuXG5jb25zdCBTSVpFX1dJRFRIX01BUCA9IHtcbiAgc206IDQxNCxcbiAgbWQ6IDU0NCxcbiAgbGc6IDgwNCxcbn07XG5cbmNvbnN0IEVTQ0FQRV9LRVlfQ09ERSA9IDI3O1xuXG50eXBlIFByb3BzID0ge3xcbiAgYWNjZXNzaWJpbGl0eUNsb3NlTGFiZWw6IHN0cmluZyxcbiAgYWNjZXNzaWJpbGl0eU1vZGFsTGFiZWw6IHN0cmluZyxcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBmb290ZXI/OiBSZWFjdC5Ob2RlLFxuICBoZWFkaW5nOiBzdHJpbmcsXG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZCxcbiAgcm9sZT86ICdhbGVydGRpYWxvZycgfCAnZGlhbG9nJyxcbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyxcbnx9O1xuXG50eXBlIFN0YXRlID0ge1xuICBicmVha3BvaW50OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnLFxuICB3aW5kb3dIZWlnaHQ6ID9udW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGJyZWFrcG9pbnQ6ICd4cycsXG4gICAgd2luZG93SGVpZ2h0OiB1bmRlZmluZWQsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVBhZ2VDbGljayk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZUJyZWFrcG9pbnQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5yZXN0cmljdEZvY3VzLCB0cnVlKTtcbiAgICB0aGlzLnByaW9yRm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHRoaXMudXBkYXRlQnJlYWtwb2ludCgpO1xuICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7IC8vIFByZXZlbnRzIGJhY2tncm91bmQgc2Nyb2xsaW5nXG4gICAgfVxuICAgIGlmICh0aGlzLm1vZGFsICYmIHRoaXMubW9kYWwuZm9jdXMpIHtcbiAgICAgIC8vIENoZWNraW5nIHRoaXMubW9kYWwuZm9jdXMgdG8gYWRkcmVzcyBhIGJ1ZyBpbiBJRTExXG4gICAgICAvLyBUaG91Z2ggdGhlIG1vZGFsIGV4aXN0cywgdGhpcy5tb2RhbC5mb2N1cyBtYXkgYmUgbnVsbFxuICAgICAgLy8gU2VlIGh0dHA6Ly93d3cubWt5b25nLmNvbS9qYXZhc2NyaXB0L2ZvY3VzLWlzLW5vdC13b3JraW5nLWluLWllLXNvbHV0aW9uL1xuICAgICAgdGhpcy5tb2RhbC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVQYWdlQ2xpY2spO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVCcmVha3BvaW50KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMucmVzdHJpY3RGb2N1cywgdHJ1ZSk7XG5cbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnOyAvLyBSZWVuYWJsZXMgYmFja2dyb3VuZCBzY3JvbGxpbmdcbiAgICB9XG4gICAgaWYgKHRoaXMucHJpb3JGb2N1cyAmJiB0aGlzLnByaW9yRm9jdXMuZm9jdXMpIHtcbiAgICAgIC8vIENoZWNraW5nIHRoaXMucHJpb3JGb2N1cy5mb2N1cyB0byBhZGRyZXNzIGEgYnVnIGluIElFMTFcbiAgICAgIHRoaXMucHJpb3JGb2N1cy5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRCcmVha3BvaW50ID0gKCkgPT4ge1xuICAgIGxldCBzaXplID0gJ3hzJztcbiAgICBPYmplY3Qua2V5cyhicmVha3BvaW50cykuZm9yRWFjaChwb2ludCA9PiB7XG4gICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoYnJlYWtwb2ludHNbcG9pbnRdKS5tYXRjaGVzKSB7XG4gICAgICAgIHNpemUgPSBwb2ludDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2l6ZTtcbiAgfTtcblxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uRGlzbWlzcygpO1xuICB9O1xuXG4gIGhhbmRsZVBhZ2VDbGljayA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBpZiAoXG4gICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiBOb2RlICYmXG4gICAgICB0aGlzLmNvbnRhaW5lciAmJlxuICAgICAgdGhpcy5jb250YWluZXIuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgdGhpcy5tb2RhbCAmJlxuICAgICAgIXRoaXMubW9kYWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICkge1xuICAgICAgdGhpcy5oYW5kbGVDbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiB7IGtleUNvZGU6IG51bWJlciB9KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5oYW5kbGVDbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGVCcmVha3BvaW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldEN1cnJlbnRCcmVha3BvaW50KCk7XG4gICAgaWYgKFxuICAgICAgc2l6ZSAhPT0gdGhpcy5zdGF0ZS5icmVha3BvaW50IHx8XG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgIT09IHRoaXMuc3RhdGUud2luZG93SGVpZ2h0XG4gICAgKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYnJlYWtwb2ludDogc2l6ZSwgd2luZG93SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlc3RyaWN0Rm9jdXMgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgaWYgKFxuICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgTm9kZSAmJlxuICAgICAgdGhpcy5tb2RhbCAmJlxuICAgICAgIXRoaXMubW9kYWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICkge1xuICAgICAgdGhpcy5tb2RhbC5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBjb250YWluZXI6ID9IVE1MRWxlbWVudDtcbiAgbW9kYWw6ID9IVE1MRWxlbWVudDtcbiAgcHJpb3JGb2N1czogP0hUTUxFbGVtZW50O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhY2Nlc3NpYmlsaXR5Q2xvc2VMYWJlbCxcbiAgICAgIGFjY2Vzc2liaWxpdHlNb2RhbExhYmVsLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBmb290ZXIsXG4gICAgICBoZWFkaW5nLFxuICAgICAgcm9sZSA9ICdkaWFsb2cnLFxuICAgICAgc2l6ZSA9ICdzbScsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgd2lkdGggPSBTSVpFX1dJRFRIX01BUFtzaXplXTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IFtcbiAgICAgIGxheW91dC5maXhlZCxcbiAgICAgIGxheW91dC5ib3JkZXJCb3gsXG4gICAgICBsYXlvdXQuZmxleCxcbiAgICAgIGxheW91dC5qdXN0aWZ5Q2VudGVyLFxuICAgICAgbGF5b3V0LmxlZnQwLFxuICAgICAgbGF5b3V0LnRvcDAsXG4gICAgXTtcbiAgICBjb25zdCBjb250YWluZXJDbGFzc2VzID1cbiAgICAgIHRoaXMuc3RhdGUuYnJlYWtwb2ludCA9PT0gJ3hzJ1xuICAgICAgICA/IGNsYXNzbmFtZXMoY29udGFpbmVyLCBsYXlvdXQuaXRlbXNFbmQsIGxheW91dC5ib3R0b20wLCBjb2x1bW4ueHNDb2wxMilcbiAgICAgICAgOiBjbGFzc25hbWVzKFxuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgbGF5b3V0Lml0ZW1zQ2VudGVyLFxuICAgICAgICAgICAgY29sdW1uLnhzQ29sMTIsXG4gICAgICAgICAgICBzdHlsZXMuY29udGFpbmVyXG4gICAgICAgICAgKTtcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBbbGF5b3V0LmZpdCwgbGF5b3V0LnJlbGF0aXZlXTtcbiAgICBjb25zdCB3cmFwcGVyQ2xhc3NlcyA9XG4gICAgICB0aGlzLnN0YXRlLmJyZWFrcG9pbnQgPT09ICd4cydcbiAgICAgICAgPyBjbGFzc25hbWVzKHdyYXBwZXIsIGNvbG9ycy53aGl0ZUJnLCB3aGl0ZXNwYWNlLm0wLCBsYXlvdXQuc2VsZkVuZClcbiAgICAgICAgOiBjbGFzc25hbWVzKHdyYXBwZXIsIGNvbG9ycy53aGl0ZUJnLCBib3JkZXJzLnJvdW5kZWQsIHN0eWxlcy53cmFwcGVyKTtcblxuICAgIGNvbnN0IG92ZXJsYXkgPSBbXG4gICAgICBsYXlvdXQuYWJzb2x1dGUsXG4gICAgICBsYXlvdXQubGVmdDAsXG4gICAgICBsYXlvdXQudG9wMCxcbiAgICAgIGN1cnNvci56b29tT3V0LFxuICAgIF07XG4gICAgY29uc3Qgb3ZlcmxheUNsYXNzZXMgPSBjbGFzc25hbWVzKFxuICAgICAgb3ZlcmxheSxcbiAgICAgIHN0eWxlcy5vdmVybGF5LFxuICAgICAgY29sb3JzLmRhcmtHcmF5QmcsXG4gICAgICBjb2x1bW4ueHNDb2wxMlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBhcmlhLWxhYmVsPXthY2Nlc3NpYmlsaXR5TW9kYWxMYWJlbH1cbiAgICAgICAgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc2VzfVxuICAgICAgICByZWY9e2MgPT4ge1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gYztcbiAgICAgICAgfX1cbiAgICAgICAgcm9sZT17cm9sZX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e292ZXJsYXlDbGFzc2VzfSAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXt3cmFwcGVyQ2xhc3Nlc31cbiAgICAgICAgICByZWY9e2MgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RhbCA9IGM7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGggfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIG1heEhlaWdodD1cIjkwdmhcIlxuICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICB4cz17eyBkaXNwbGF5OiAnZmxleENvbHVtbicgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IGZpdD5cbiAgICAgICAgICAgICAge3JvbGUgPT09ICdkaWFsb2cnID8gKFxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgX19zdHlsZTogeyBwYWRkaW5nTGVmdDogNTAsIHBhZGRpbmdSaWdodDogNTAgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nWT17NX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwieHNcIiBhY2Nlc3NpYmlsaXR5TGV2ZWw9ezF9PlxuICAgICAgICAgICAgICAgICAgICB7aGVhZGluZ31cbiAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgcGFkZGluZz17NH0+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwibGdcIiBhY2Nlc3NpYmlsaXR5TGV2ZWw9ezF9PlxuICAgICAgICAgICAgICAgICAgICB7aGVhZGluZ31cbiAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge3JvbGUgPT09ICdkaWFsb2cnICYmIChcbiAgICAgICAgICAgICAgICA8Qm94IHBhZGRpbmc9ezJ9IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiB0b3AgcmlnaHQ+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2FjY2Vzc2liaWxpdHlDbG9zZUxhYmVsfVxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtyb2xlID09PSAnZGlhbG9nJyAmJiA8RGl2aWRlciAvPn1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBmbGV4PVwiZ3Jvd1wiIG92ZXJmbG93PVwiYXV0b1wiIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94IGZpdD5cbiAgICAgICAgICAgICAge2Zvb3RlciAmJiAoXG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgIHtyb2xlID09PSAnZGlhbG9nJyAmJiA8RGl2aWRlciAvPn1cbiAgICAgICAgICAgICAgICAgIDxCb3ggcGFkZGluZz17NH0+e2Zvb3Rlcn08L0JveD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTW9kYWwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGFjY2Vzc2liaWxpdHlDbG9zZUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGZvb3RlcjogUHJvcFR5cGVzLm5vZGUsXG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYWNjZXNzaWJpbGl0eU1vZGFsTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb25EaXNtaXNzOiBQcm9wVHlwZXMuZnVuYyxcbiAgcm9sZTogUHJvcFR5cGVzLm9uZU9mKFsnYWxlcnRkaWFsb2cnLCAnZGlhbG9nJ10pLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbScsICdtZCcsICdsZyddKSxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gvQm94JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHVsc2FyLmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhdXNlZD86IGJvb2xlYW4sXG4gIHNpemU/OiBudW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdWxzYXIocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgcGF1c2VkLCBzaXplID0gOTYgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17e1xuICAgICAgICBfX3N0eWxlOiB7XG4gICAgICAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IHBhdXNlZCA/IDAgOiAnaW5maW5pdGUnLFxuICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgICBkaXNwbGF5PXtwYXVzZWQgPyAnbm9uZScgOiAnYmxvY2snfVxuICAgICAgaGVpZ2h0PXtzaXplfVxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICB3aWR0aD17c2l6ZX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlubmVyQ2lyY2xlfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdXRlckNpcmNsZX0gLz5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuUHVsc2FyLnByb3BUeXBlcyA9IHtcbiAgcGF1c2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1JhZGlvQnV0dG9uLmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGVja2VkPzogYm9vbGVhbixcbiAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICBpZDogc3RyaW5nLFxuICBuYW1lPzogc3RyaW5nLFxuICBvbkNoYW5nZTogKHtcbiAgICBldmVudDogU3ludGhldGljSW5wdXRFdmVudDw+LFxuICAgIGNoZWNrZWQ6IGJvb2xlYW4sXG4gIH0pID0+IHZvaWQsXG4gIHZhbHVlOiBzdHJpbmcsXG4gIHNpemU/OiAnc20nIHwgJ21kJyxcbnx9O1xuXG50eXBlIFN0YXRlID0ge3xcbiAgZm9jdXNlZDogYm9vbGVhbixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpb0J1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc20nLCAnbWQnXSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc2l6ZTogJ21kJyxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBmb2N1c2VkOiBmYWxzZSxcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8PikgPT4ge1xuICAgIGNvbnN0IHsgY2hlY2tlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBjaGVja2VkLCBldmVudCB9KTtcbiAgfTtcblxuICBoYW5kbGVCbHVyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IGZhbHNlIH0pO1xuICBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogdHJ1ZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGVja2VkLCBkaXNhYmxlZCwgaWQsIG5hbWUsIHNpemUsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuUmFkaW9CdXR0b24sIHtcbiAgICAgICAgICBbc3R5bGVzLlJhZGlvQnV0dG9uSXNGb2N1c2VkXTogdGhpcy5zdGF0ZS5mb2N1c2VkLFxuICAgICAgICAgIFtzdHlsZXMuUmFkaW9CdXR0b25TbV06IHNpemUgPT09ICdzbScsXG4gICAgICAgICAgW3N0eWxlcy5SYWRpb0J1dHRvbk1kXTogc2l6ZSA9PT0gJ21kJyxcbiAgICAgICAgICBbc3R5bGVzLlJhZGlvQnV0dG9uV2hpdGVCZ106ICFkaXNhYmxlZCB8fCBjaGVja2VkLFxuICAgICAgICAgIFtzdHlsZXMuUmFkaW9CdXR0b25MaWdodEdyYXlCZ106IGRpc2FibGVkICYmICFjaGVja2VkLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLklucHV0LCB7XG4gICAgICAgICAgICBbc3R5bGVzLklucHV0RW5hYmxlZF06ICFkaXNhYmxlZCxcbiAgICAgICAgICAgIFtzdHlsZXMuSW5wdXRTbV06IHNpemUgPT09ICdzbScsXG4gICAgICAgICAgICBbc3R5bGVzLklucHV0TWRdOiBzaXplID09PSAnbWQnLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgLz5cbiAgICAgICAge2NoZWNrZWQgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuQ2hlY2ssIHtcbiAgICAgICAgICAgICAgW3N0eWxlcy5DaGVja1NtXTogc2l6ZSA9PT0gJ3NtJyxcbiAgICAgICAgICAgICAgW3N0eWxlcy5DaGVja01kXTogc2l6ZSA9PT0gJ21kJyxcbiAgICAgICAgICAgICAgW3N0eWxlcy5DaGVja0VuYWJsZWRdOiAhZGlzYWJsZWQsXG4gICAgICAgICAgICAgIFtzdHlsZXMuQ2hlY2tEaXNhYmxlZF06IGRpc2FibGVkLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZldGNoSXRlbXMgZnJvbSAnLi9GZXRjaEl0ZW1zJztcbmltcG9ydCBTY3JvbGxDb250YWluZXIgZnJvbSAnLi9TY3JvbGxDb250YWluZXInO1xuaW1wb3J0IHsgZ2V0RWxlbWVudEhlaWdodCwgZ2V0U2Nyb2xsSGVpZ2h0LCBnZXRTY3JvbGxQb3MgfSBmcm9tICcuL3Njcm9sbFV0aWxzJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuLi90aHJvdHRsZSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNvbnRhaW5lcj86IEhUTUxFbGVtZW50LFxuICBpc0F0RW5kPzogYm9vbGVhbixcbiAgaXNGZXRjaGluZzogYm9vbGVhbixcbiAgZmV0Y2hNb3JlPzogRnVuY3Rpb24sXG4gIHJlbmRlckhlaWdodD86ICgpID0+IG51bWJlcixcbn07XG5cbnR5cGUgU3RhdGUgPSB7XG4gIGNvbnRhaW5lckhlaWdodDogbnVtYmVyLFxuICBzY3JvbGxIZWlnaHQ6IG51bWJlcixcbiAgc2Nyb2xsVG9wOiBudW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxGZXRjaCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IHt9O1xuXG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICBjb250YWluZXJIZWlnaHQ6IDAsXG4gICAgc2Nyb2xsSGVpZ2h0OiAwLFxuICAgIHNjcm9sbFRvcDogMCxcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBzY3JvbGwgbGlzdGVuZXIgYWZ0ZXIgdGhlIGNvbXBvbmVudCBtb3VudHMuXG4gICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250YWluZXJIZWlnaHQ6IGdldEVsZW1lbnRIZWlnaHQoY29udGFpbmVyKSxcbiAgICAgICAgLi4udGhpcy5nZXRTY3JvbGxTdGF0ZSgpLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHNjcm9sbCBidWZmZXIgYW5kIGNoZWNrIGFmdGVyIHRoZSBjb21wb25lbnQgdXBkYXRlcy5cbiAgICovXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAvLyBzZXRUaW1lb3V0IHNvIHRoZSBwYXJlbnQgY29tcG9uZW50IGNhbiBjYWxjdWxhdGUgcmVuZGVySGVpZ2h0KCkuXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNjcm9sbGFibGUgY29udGVudCBoZWlnaHQuXG4gICAqL1xuICBnZXRTY3JvbGxIZWlnaHQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0U2Nyb2xsSGVpZ2h0KGNvbnRhaW5lcik7XG4gIH07XG5cbiAgZ2V0U2Nyb2xsU3RhdGUoKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIHJlbmRlckhlaWdodCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHJlbmRlckhlaWdodCB8fCB0aGlzLmdldFNjcm9sbEhlaWdodDtcblxuICAgIHJldHVybiB7XG4gICAgICBzY3JvbGxIZWlnaHQ6IHNjcm9sbEhlaWdodCgpLFxuICAgICAgc2Nyb2xsVG9wOiBnZXRTY3JvbGxQb3MoY29udGFpbmVyKSxcbiAgICB9O1xuICB9XG5cbiAgc2Nyb2xsQnVmZmVyOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYWRkaXRpb25hbCBpdGVtcyBpZiBuZWVkZWQuXG4gICAqL1xuICB1cGRhdGVQb3NpdGlvbiA9IHRocm90dGxlKCgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U2Nyb2xsU3RhdGUoKSk7XG4gIH0pO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBzY3JvbGxUb3AgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGZldGNoTW9yZSwgaXNBdEVuZCwgaXNGZXRjaGluZyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgY29udGFpbmVySGVpZ2h0LFxuICAgICAgZmV0Y2hNb3JlLFxuICAgICAgaXNBdEVuZCxcbiAgICAgIGlzRmV0Y2hpbmcsXG4gICAgICBzY3JvbGxIZWlnaHQsXG4gICAgICBzY3JvbGxUb3AsXG4gICAgfTtcblxuICAgIGlmICghY29udGFpbmVyIHx8IGlzQXRFbmQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFNjcm9sbENvbnRhaW5lclxuICAgICAgICBvblNjcm9sbD17dGhpcy51cGRhdGVQb3NpdGlvbn1cbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyPXtjb250YWluZXJ9XG4gICAgICA+XG4gICAgICAgIDxGZXRjaEl0ZW1zIHsuLi5wcm9wc30gLz5cbiAgICAgIDwvU2Nyb2xsQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuU2Nyb2xsRmV0Y2gucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIHNjcm9sbCBjb250YWluZXIgdG8gdXNlLiBEZWZhdWx0cyB0byB3aW5kb3cuXG4gICAqL1xuICBjb250YWluZXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIH0pLFxuICByZW5kZXJIZWlnaHQ6IFByb3BUeXBlcy5mdW5jLFxuICBpc0F0RW5kOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNGZXRjaGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGZldGNoTW9yZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5TY3JvbGxGZXRjaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRhaW5lcjogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBudWxsLFxufTtcbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VhcmNoRmllbGQuY3NzJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94L0JveCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uL0ljb24nO1xuXG50eXBlIFByb3BzID0ge3xcbiAgYWNjZXNzaWJpbGl0eUxhYmVsOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcsXG4gIG9uQmx1cj86ICh7IGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PiB9KSA9PiB2b2lkLFxuICBvbkNoYW5nZTogKHtcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIHN5bnRoZXRpY0V2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcbiAgfSkgPT4gdm9pZCxcbiAgb25Gb2N1cz86ICh7XG4gICAgdmFsdWU6IHN0cmluZyxcbiAgICBzeW50aGV0aWNFdmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXG4gIH0pID0+IHZvaWQsXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxuICB2YWx1ZT86IHN0cmluZyxcbnx9O1xuXG50eXBlIFN0YXRlID0ge3xcbiAgZm9jdXNlZDogYm9vbGVhbixcbiAgaG92ZXJlZDogYm9vbGVhbixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY2Nlc3NpYmlsaXR5TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgIGhvdmVyZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgIHZhbHVlOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgICAgc3ludGhldGljRXZlbnQ6IGV2ZW50LFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNsZWFyID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgc3ludGhldGljRXZlbnQ6IGV2ZW50LFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogdHJ1ZSB9KTtcbiAgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiBmYWxzZSB9KTtcbiAgaGFuZGxlRm9jdXMgPSAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IHRydWUgfSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRm9jdXMoe1xuICAgICAgICB2YWx1ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgc3ludGhldGljRXZlbnQ6IGV2ZW50LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBoYW5kbGVCbHVyID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiBmYWxzZSB9KTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoeyBldmVudCB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWNjZXNzaWJpbGl0eUxhYmVsLCBpZCwgcGxhY2Vob2xkZXIsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gVGhpcyBtaXJyb3JzIHRoZSBidWlsdCBpbiBicm93c2VyIGJlaGF2aW9yLiBJZiB0aGVyZSdzIGEgdmFsdWUsIHNob3cgdGhlXG4gICAgLy8gY2xlYXIgYnV0dG9uIGlmIHlvdSdyZSBob3ZlcmluZyBvciBpZiB5b3UndmUgZm9jdXNlZCBvbiB0aGUgZmllbGRcbiAgICBjb25zdCBzaG93Q2xlYXIgPVxuICAgICAgKHRoaXMuc3RhdGUuZm9jdXNlZCB8fCB0aGlzLnN0YXRlLmhvdmVyZWQpICYmIHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxuICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7XG4gICAgICAgICAgICBfX3N0eWxlOiB7XG4gICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgLy8gQWRkZWQgdGhlIGZvbGxvd2luZyBsaW5lcyBmb3IgU2FmYXJpIHN1cHBvcnRcbiAgICAgICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgbGVmdFxuICAgICAgICAgIHBhZGRpbmdYPXs0fVxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gaWNvbj1cInNlYXJjaFwiIGFjY2Vzc2liaWxpdHlMYWJlbD1cIlwiIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBhcmlhLWxhYmVsPXthY2Nlc3NpYmlsaXR5TGFiZWx9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgcm9sZT1cInNlYXJjaGJveFwiXG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAvPlxuICAgICAgICB7c2hvd0NsZWFyICYmIChcbiAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiByaWdodCB0b3A+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsZWFyfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsZWFyfVxuICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvbiBpY29uPVwiY2xlYXJcIiBhY2Nlc3NpYmlsaXR5TGFiZWw9XCJcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi4vVGV4dC9UZXh0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWdtZW50ZWRDb250cm9sLmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBpdGVtczogQXJyYXk8c3RyaW5nPixcbiAgb25DaGFuZ2U6ICh7IGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PD4sIGFjdGl2ZUluZGV4OiBudW1iZXIgfSkgPT4gdm9pZCxcbiAgc2VsZWN0ZWRJdGVtSW5kZXg6IG51bWJlcixcbiAgc2l6ZT86ICdtZCcgfCAnbGcnLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlZ21lbnRlZENvbnRyb2wocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgaXRlbXMsIG9uQ2hhbmdlLCBzZWxlY3RlZEl0ZW1JbmRleCwgc2l6ZSA9ICdtZCcgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VnbWVudGVkQ29udHJvbH0gcm9sZT1cInRhYmxpc3RcIj5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGkgPT09IHNlbGVjdGVkSXRlbUluZGV4O1xuICAgICAgICBjb25zdCBjcyA9IGNsYXNzbmFtZXMoc3R5bGVzLml0ZW0sIHtcbiAgICAgICAgICBbc3R5bGVzLm1kXTogc2l6ZSA9PT0gJ21kJyxcbiAgICAgICAgICBbc3R5bGVzLmxnXTogc2l6ZSA9PT0gJ2xnJyxcbiAgICAgICAgICBbc3R5bGVzLml0ZW1Jc05vdFNlbGVjdGVkXTogIWlzU2VsZWN0ZWQsXG4gICAgICAgICAgW3N0eWxlcy5pdGVtSXNTZWxlY3RlZF06IGlzU2VsZWN0ZWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NzfVxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBvbkNoYW5nZSh7IGV2ZW50OiBlLCBhY3RpdmVJbmRleDogaSB9KX1cbiAgICAgICAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgIGJvbGRcbiAgICAgICAgICAgICAgY29sb3I9e2lzU2VsZWN0ZWQgPyAnZGFya0dyYXknIDogJ2dyYXknfVxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblNlZ21lbnRlZENvbnRyb2wucHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZEl0ZW1JbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gvQm94JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEVycm9yRmx5b3V0IGZyb20gJy4uL0Vycm9yRmx5b3V0L0Vycm9yRmx5b3V0JztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24vSWNvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VsZWN0TGlzdC5jc3MnO1xuXG50eXBlIFN0YXRlID0ge1xuICBmb2N1c2VkOiBib29sZWFuLFxuICBlcnJvcklzT3BlbjogYm9vbGVhbixcbn07XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmcsXG4gIGRpc2FibGVkPzogYm9vbGVhbixcbiAgaWQ6IHN0cmluZyxcbiAgaWRlYWxFcnJvckRpcmVjdGlvbj86ICd1cCcgfCAncmlnaHQnIHwgJ2Rvd24nIHwgJ2xlZnQnIC8qIGRlZmF1bHQ6IHJpZ2h0ICovLFxuICBuYW1lPzogc3RyaW5nLFxuICBvbkNoYW5nZTogKHsgZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8PiwgdmFsdWU6IHN0cmluZyB9KSA9PiB2b2lkLFxuICBvcHRpb25zOiBBcnJheTx7XG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICB2YWx1ZTogc3RyaW5nLFxuICB9PixcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmcsXG4gIHZhbHVlPzogP3N0cmluZyxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBlcnJvck1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpZGVhbEVycm9yRGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuZXhhY3Qoe1xuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgfSlcbiAgICApLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlkZWFsRXJyb3JEaXJlY3Rpb246ICdyaWdodCcsXG4gICAgb3B0aW9uczogW10sXG4gIH07XG5cbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgIGVycm9ySXNPcGVuOiBmYWxzZSxcbiAgfTtcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmVycm9yTWVzc2FnZSAhPT0gdGhpcy5wcm9wcy5lcnJvck1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcklzT3BlbjogISFuZXh0UHJvcHMuZXJyb3JNZXNzYWdlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdDogP0hUTUxTZWxlY3RFbGVtZW50O1xuXG4gIGhhbmRsZU9uQ2hhbmdlID0gKGV2ZW50OiBTeW50aGV0aWNJbnB1dEV2ZW50PD4pID0+IHtcbiAgICBpZiAoXG4gICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJlxuICAgICAgdGhpcy5wcm9wcy52YWx1ZSAhPT0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgZXZlbnQsIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IGZhbHNlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmVycm9yTWVzc2FnZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ySXNPcGVuOiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IHRydWUgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgIGlkLFxuICAgICAgaWRlYWxFcnJvckRpcmVjdGlvbixcbiAgICAgIG5hbWUsXG4gICAgICBvcHRpb25zLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICB2YWx1ZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxuICAgICAgc3R5bGVzLnNlbGVjdCxcbiAgICAgIGRpc2FibGVkID8gc3R5bGVzLmRpc2FibGVkIDogc3R5bGVzLmVuYWJsZWQsXG4gICAgICBlcnJvck1lc3NhZ2UgPyBzdHlsZXMuZXJyb3JlZCA6IHN0eWxlcy5ub3JtYWxcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgY29sb3I9e2Rpc2FibGVkID8gJ2xpZ2h0R3JheScgOiAnd2hpdGUnfVxuICAgICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7IF9fc3R5bGU6IHsgYm9yZGVyUmFkaXVzOiA0IH0gfX1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIGJvdHRvbVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgICAgIF9fc3R5bGU6IHsgcGFkZGluZ1JpZ2h0OiAxNCwgcGFkZGluZ1RvcDogMiB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgIHJpZ2h0XG4gICAgICAgICAgdG9wXG4gICAgICAgID5cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgaWNvbj1cImFycm93LWRvd25cIlxuICAgICAgICAgICAgc2l6ZT17MTJ9XG4gICAgICAgICAgICBjb2xvcj17ZGlzYWJsZWQgPyAnZ3JheScgOiAnZGFya0dyYXknfVxuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPVwiXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICYmIHRoaXMuc3RhdGUuZm9jdXNlZCA/IGAke2lkfS1nZXN0YWx0LWVycm9yYCA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgYXJpYS1pbnZhbGlkPXtlcnJvck1lc3NhZ2UgPyAndHJ1ZScgOiAnZmFsc2UnfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICByZWY9e2MgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QgPSBjO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICA+XG4gICAgICAgICAge3BsYWNlaG9sZGVyICYmXG4gICAgICAgICAgICAhdmFsdWUgJiYgKFxuICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIGRpc2FibGVkIHZhbHVlIGhpZGRlbj5cbiAgICAgICAgICAgICAgICB7cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICB7b3B0aW9ucy5tYXAob3B0aW9uID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxuICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICB7ZXJyb3JNZXNzYWdlICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5lcnJvcklzT3BlbiAmJiAoXG4gICAgICAgICAgICA8RXJyb3JGbHlvdXRcbiAgICAgICAgICAgICAgYW5jaG9yPXt0aGlzLnNlbGVjdH1cbiAgICAgICAgICAgICAgaWQ9e2Ake2lkfS1nZXN0YWx0LWVycm9yYH1cbiAgICAgICAgICAgICAgaWRlYWxEaXJlY3Rpb249e2lkZWFsRXJyb3JEaXJlY3Rpb259XG4gICAgICAgICAgICAgIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IGZhbHNlIH0pfVxuICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQm94IGZyb20gJy4uL0JveC9Cb3gnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbi9JY29uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TcGlubmVyLmNzcyc7XG5cbmNvbnN0IFNJWkUgPSA0MDtcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFjY2Vzc2liaWxpdHlMYWJlbDogc3RyaW5nLFxuICBzaG93OiBib29sZWFuLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwaW5uZXIoeyBhY2Nlc3NpYmlsaXR5TGFiZWwsIHNob3cgfTogUHJvcHMpIHtcbiAgcmV0dXJuIHNob3cgPyAoXG4gICAgPEJveCB4cz17eyBkaXNwbGF5OiAnZmxleCcgfX0ganVzdGlmeUNvbnRlbnQ9XCJhcm91bmRcIiBvdmVyZmxvdz1cImhpZGRlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufT5cbiAgICAgICAgPEljb25cbiAgICAgICAgICBpY29uPVwia25vb3BcIlxuICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YWNjZXNzaWJpbGl0eUxhYmVsfVxuICAgICAgICAgIHNpemU9e1NJWkV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKSA6IChcbiAgICA8ZGl2IC8+XG4gICk7XG59XG5cblNwaW5uZXIucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBhY2Nlc3NpYmlsaXR5TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbGF5b3V0IGZyb20gJy4uL0xheW91dC5jc3MnO1xuXG50eXBlIFRocmVzaG9sZCA9XG4gIHwge3wgdG9wOiBudW1iZXIgfH1cbiAgfCB7fCBib3R0b206IG51bWJlciB8fVxuICB8IHt8IGxlZnQ6IG51bWJlciB8fVxuICB8IHt8IHJpZ2h0OiBudW1iZXIgfH1cbiAgfCB7fCB0b3A6IG51bWJlciwgYm90dG9tOiBudW1iZXIgfH1cbiAgfCB7fCBsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIgfH1cbiAgfCB7fCB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlciB8fTtcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNoaWxkcmVuOiBSZWFjdC5Ob2RlLFxuICBkYW5nZXJvdXNseVNldFpJbmRleD86IHsgX196SW5kZXg6IG51bWJlciB9LFxuICAuLi5UaHJlc2hvbGQsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RpY2t5KHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGRhbmdlcm91c2x5U2V0WkluZGV4ID0geyBfX3pJbmRleDogMSB9LCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHRvcDogdHlwZW9mIHByb3BzLnRvcCA9PT0gJ251bWJlcicgPyBwcm9wcy50b3AgOiB1bmRlZmluZWQsXG4gICAgbGVmdDogdHlwZW9mIHByb3BzLmxlZnQgPT09ICdudW1iZXInID8gcHJvcHMubGVmdCA6IHVuZGVmaW5lZCxcbiAgICByaWdodDogdHlwZW9mIHByb3BzLnJpZ2h0ID09PSAnbnVtYmVyJyA/IHByb3BzLnJpZ2h0IDogdW5kZWZpbmVkLFxuICAgIGJvdHRvbTogdHlwZW9mIHByb3BzLmJvdHRvbSA9PT0gJ251bWJlcicgPyBwcm9wcy5ib3R0b20gOiB1bmRlZmluZWQsXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgekluZGV4OiBkYW5nZXJvdXNseVNldFpJbmRleC5fX3pJbmRleCxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17bGF5b3V0LnN0aWNreX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3dpdGNoLmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gIGlkOiBzdHJpbmcsXG4gIG5hbWU/OiBzdHJpbmcsXG4gIG9uQ2hhbmdlOiAoeyBldmVudDogU3ludGhldGljSW5wdXRFdmVudDw+LCB2YWx1ZTogYm9vbGVhbiB9KSA9PiB2b2lkLFxuICBzd2l0Y2hlZD86IGJvb2xlYW4sXG58fTtcblxudHlwZSBTdGF0ZSA9IHt8XG4gIGZvY3VzZWQ6IGJvb2xlYW4sXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpdGNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc3dpdGNoZWQ6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHN3aXRjaGVkOiBmYWxzZSxcbiAgfTtcblxuICBzdGF0ZTogU3RhdGUgPSB7XG4gICAgZm9jdXNlZDogZmFsc2UsXG4gIH07XG5cbiAgaGFuZGxlQmx1ciA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiBmYWxzZSB9KTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8PikgPT4ge1xuICAgIGNvbnN0IHsgY2hlY2tlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgZXZlbnQsXG4gICAgICB2YWx1ZTogY2hlY2tlZCxcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogdHJ1ZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCwgaWQsIG5hbWUsIHN3aXRjaGVkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qgc3dpdGNoU3R5bGVzID0gY2xhc3NuYW1lcyhcbiAgICAgIHN0eWxlcy5zd2l0Y2gsXG4gICAgICB7XG4gICAgICAgIFtzdHlsZXMuZm9jdXNlZF06IHRoaXMuc3RhdGUuZm9jdXNlZCxcbiAgICAgIH0sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgIGRpc2FibGVkXG4gICAgICAgID8gc3dpdGNoZWQgPyBzdHlsZXMuc3dpdGNoR3JheSA6IHN0eWxlcy5zd2l0Y2hMaWdodEdyYXlcbiAgICAgICAgOiBzd2l0Y2hlZCA/IHN0eWxlcy5zd2l0Y2hEYXJrR3JheSA6IHN0eWxlcy5zd2l0Y2hXaGl0ZVxuICAgICk7XG5cbiAgICBjb25zdCBzbGlkZXJTdHlsZXMgPSBjbGFzc25hbWVzKFxuICAgICAgc3R5bGVzLnNsaWRlcixcbiAgICAgIHN3aXRjaGVkID8gc3R5bGVzLnNsaWRlclJpZ2h0IDogc3R5bGVzLnNsaWRlckxlZnQsXG4gICAgICBzd2l0Y2hlZCAmJiAhZGlzYWJsZWQgPyBzdHlsZXMuc2xpZGVyRGFyayA6IHN0eWxlcy5zbGlkZXJMaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBpbnB1dFN0eWxlcyA9IGNsYXNzbmFtZXMoc3R5bGVzLmNoZWNrYm94LCB7XG4gICAgICBbc3R5bGVzLmNoZWNrYm94RW5hYmxlZF06ICFkaXNhYmxlZCxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3dpdGNoU3R5bGVzfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2hlY2tlZD17c3dpdGNoZWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dFN0eWxlc31cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NsaWRlclN0eWxlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0L1RleHQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RhYnMuY3NzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFjdGl2ZVRhYkluZGV4OiBudW1iZXIsXG4gIHRhYnM6IEFycmF5PHt8XG4gICAgdGV4dDogYW55LFxuICAgIGhyZWY6IHN0cmluZyxcbiAgfH0+LFxuICBvbkNoYW5nZTogKHtcbiAgICBldmVudDogU3ludGhldGljTW91c2VFdmVudDw+LFxuICAgIGFjdGl2ZVRhYkluZGV4OiBudW1iZXIsXG4gIH0pID0+IHZvaWQsXG58fTtcblxudHlwZSBTdGF0ZSA9IHt8XG4gIGZvY3VzZWRUYWJJbmRleDogP251bWJlcixcbiAgaG92ZXJlZFRhYkluZGV4OiA/bnVtYmVyLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZlVGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0YWJzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5leGFjdCh7XG4gICAgICAgIHRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICAgICAgICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgfSlcbiAgICApLmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGZvY3VzZWRUYWJJbmRleDogdW5kZWZpbmVkLFxuICAgIGhvdmVyZWRUYWJJbmRleDogdW5kZWZpbmVkLFxuICB9O1xuXG4gIGhhbmRsZVRhYkNsaWNrID0gKGk6IG51bWJlciwgZTogU3ludGhldGljTW91c2VFdmVudDw+KSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvbkNoYW5nZSh7IGFjdGl2ZVRhYkluZGV4OiBpLCBldmVudDogZSB9KTtcbiAgfTtcblxuICBoYW5kbGVUYWJGb2N1cyA9IChpOiBudW1iZXIpID0+IHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkVGFiSW5kZXg6IGkgfSk7XG4gIGhhbmRsZVRhYkJsdXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZFRhYkluZGV4OiB1bmRlZmluZWQgfSk7XG5cbiAgaGFuZGxlVGFiTW91c2VFbnRlciA9IChpOiBudW1iZXIpID0+IHRoaXMuc2V0U3RhdGUoeyBob3ZlcmVkVGFiSW5kZXg6IGkgfSk7XG4gIGhhbmRsZVRhYk1vdXNlTGVhdmUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaG92ZXJlZFRhYkluZGV4OiB1bmRlZmluZWQgfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGFicywgYWN0aXZlVGFiSW5kZXggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBmb2N1c2VkVGFiSW5kZXgsIGhvdmVyZWRUYWJJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYWJzfSByb2xlPVwidGFibGlzdFwiPlxuICAgICAgICB7dGFicy5tYXAoKHsgdGV4dCwgaHJlZiB9LCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBpID09PSBhY3RpdmVUYWJJbmRleDtcbiAgICAgICAgICBjb25zdCBpc0hvdmVyZWQgPSBpID09PSBob3ZlcmVkVGFiSW5kZXg7XG4gICAgICAgICAgY29uc3QgaXNGb2N1c2VkID0gaSA9PT0gZm9jdXNlZFRhYkluZGV4O1xuICAgICAgICAgIGNvbnN0IGNzID0gY2xhc3NuYW1lcyhzdHlsZXMudGFiLCB7XG4gICAgICAgICAgICBbc3R5bGVzLnRhYklzTm90QWN0aXZlXTogIWlzQWN0aXZlLFxuICAgICAgICAgICAgW3N0eWxlcy50YWJJc0FjdGl2ZV06IGlzQWN0aXZlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBhcmlhLXNlbGVjdGVkPXtpc0FjdGl2ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc31cbiAgICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZTogU3ludGhldGljTW91c2VFdmVudDw+KSA9PiB0aGlzLmhhbmRsZVRhYkNsaWNrKGksIGUpfVxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB0aGlzLmhhbmRsZVRhYkZvY3VzKGkpfVxuICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlVGFiQmx1cn1cbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLmhhbmRsZVRhYk1vdXNlRW50ZXIoaSl9XG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVUYWJNb3VzZUxlYXZlfVxuICAgICAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBib2xkXG4gICAgICAgICAgICAgICAgY29sb3I9e2lzQWN0aXZlIHx8IGlzSG92ZXJlZCB8fCBpc0ZvY3VzZWQgPyAnZGFya0dyYXknIDogJ2dyYXknfVxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEVycm9yRmx5b3V0IGZyb20gJy4uL0Vycm9yRmx5b3V0L0Vycm9yRmx5b3V0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0QXJlYS5jc3MnO1xuXG50eXBlIFN0YXRlID0ge1xuICBmb2N1c2VkOiBib29sZWFuLFxuICBlcnJvcklzT3BlbjogYm9vbGVhbixcbn07XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmcsXG4gIGRpc2FibGVkPzogYm9vbGVhbixcbiAgaWQ6IHN0cmluZyxcbiAgaWRlYWxFcnJvckRpcmVjdGlvbj86ICd1cCcgfCAncmlnaHQnIHwgJ2Rvd24nIHwgJ2xlZnQnIC8qIGRlZmF1bHQ6IHJpZ2h0ICovLFxuICBuYW1lPzogc3RyaW5nLFxuICBvbkJsdXI/OiAoeyBldmVudDogU3ludGhldGljRm9jdXNFdmVudDw+LCB2YWx1ZTogc3RyaW5nIH0pID0+IHZvaWQsXG4gIG9uQ2hhbmdlOiAoeyBldmVudDogU3ludGhldGljSW5wdXRFdmVudDw+LCB2YWx1ZTogc3RyaW5nIH0pID0+IHZvaWQsXG4gIG9uRm9jdXM/OiAoeyBldmVudDogU3ludGhldGljRm9jdXNFdmVudDw+LCB2YWx1ZTogc3RyaW5nIH0pID0+IHZvaWQsXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxuICByb3dzPzogbnVtYmVyIC8qIGRlZmF1bHQ6IDMgKi8sXG4gIHZhbHVlPzogc3RyaW5nLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBlcnJvck1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpZGVhbEVycm9yRGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByb3dzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlkZWFsRXJyb3JEaXJlY3Rpb246ICdyaWdodCcsXG4gICAgcm93czogMyxcbiAgfTtcblxuICBzdGF0ZTogU3RhdGUgPSB7XG4gICAgZm9jdXNlZDogZmFsc2UsXG4gICAgZXJyb3JJc09wZW46IGZhbHNlLFxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuZXJyb3JNZXNzYWdlICE9PSB0aGlzLnByb3BzLmVycm9yTWVzc2FnZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ySXNPcGVuOiAhIW5leHRQcm9wcy5lcnJvck1lc3NhZ2UgfSk7XG4gICAgfVxuICB9XG5cbiAgdGV4dGFyZWE6ID9IVE1MRWxlbWVudDtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8PikgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcklzT3BlbjogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQmx1ciA9IChldmVudDogU3ludGhldGljRm9jdXNFdmVudDw+KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IGZhbHNlIH0pO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCAmJiB0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoe1xuICAgICAgICBldmVudCxcbiAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVGb2N1cyA9IChldmVudDogU3ludGhldGljRm9jdXNFdmVudDw+KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IHRydWUgfSk7XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50ICYmIHRoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgaWQsXG4gICAgICBpZGVhbEVycm9yRGlyZWN0aW9uLFxuICAgICAgbmFtZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcm93cyxcbiAgICAgIHZhbHVlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoXG4gICAgICBzdHlsZXMudGV4dEFyZWEsXG4gICAgICBkaXNhYmxlZCA/IHN0eWxlcy5kaXNhYmxlZCA6IHN0eWxlcy5lbmFibGVkLFxuICAgICAgZXJyb3JNZXNzYWdlID8gc3R5bGVzLmVycm9yZWQgOiBzdHlsZXMubm9ybWFsXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5mb2N1c2VkID8gYCR7aWR9LWdlc3RhbHQtZXJyb3JgIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9e2Vycm9yTWVzc2FnZSA/ICd0cnVlJyA6ICdmYWxzZSd9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgcmVmPXtjID0+IHtcbiAgICAgICAgICAgIHRoaXMudGV4dGFyZWEgPSBjO1xuICAgICAgICAgIH19XG4gICAgICAgICAgcm93cz17cm93c31cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIC8+XG4gICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5lcnJvcklzT3BlbiA/IChcbiAgICAgICAgICA8RXJyb3JGbHlvdXRcbiAgICAgICAgICAgIGFuY2hvcj17dGhpcy50ZXh0YXJlYX1cbiAgICAgICAgICAgIGlkPXtgJHtpZH0tZ2VzdGFsdC1lcnJvcmB9XG4gICAgICAgICAgICBpZGVhbERpcmVjdGlvbj17aWRlYWxFcnJvckRpcmVjdGlvbn1cbiAgICAgICAgICAgIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVycm9ySXNPcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEVycm9yRmx5b3V0IGZyb20gJy4uL0Vycm9yRmx5b3V0L0Vycm9yRmx5b3V0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0RmllbGQuY3NzJztcblxudHlwZSBTdGF0ZSA9IHtcbiAgZm9jdXNlZDogYm9vbGVhbixcbiAgZXJyb3JJc09wZW46IGJvb2xlYW4sXG59O1xuXG50eXBlIFByb3BzID0ge3xcbiAgYXV0b0NvbXBsZXRlPzogJ2N1cnJlbnQtcGFzc3dvcmQnIHwgJ29uJyB8ICdvZmYnIHwgJ3VzZXJuYW1lJyxcbiAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmcsXG4gIGhhc0Vycm9yPzogYm9vbGVhbixcbiAgaWQ6IHN0cmluZyxcbiAgaWRlYWxFcnJvckRpcmVjdGlvbj86ICd1cCcgfCAncmlnaHQnIHwgJ2Rvd24nIHwgJ2xlZnQnIC8qIGRlZmF1bHQ6IHJpZ2h0ICovLFxuICBuYW1lPzogc3RyaW5nLFxuICBvbkJsdXI/OiAoeyBldmVudDogU3ludGhldGljRm9jdXNFdmVudDw+LCB2YWx1ZTogc3RyaW5nIH0pID0+IHZvaWQsXG4gIG9uQ2hhbmdlOiAoeyBldmVudDogU3ludGhldGljSW5wdXRFdmVudDw+LCB2YWx1ZTogc3RyaW5nIH0pID0+IHZvaWQsXG4gIG9uRm9jdXM/OiAoeyBldmVudDogU3ludGhldGljRm9jdXNFdmVudDw+LCB2YWx1ZTogc3RyaW5nIH0pID0+IHZvaWQsXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxuICB0eXBlPzogJ2RhdGUnIHwgJ2VtYWlsJyB8ICdudW1iZXInIHwgJ3Bhc3N3b3JkJyB8ICd0ZXh0JyB8ICd1cmwnLFxuICB2YWx1ZT86IHN0cmluZyxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0RmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgJ2N1cnJlbnQtcGFzc3dvcmQnLFxuICAgICAgJ29uJyxcbiAgICAgICdvZmYnLFxuICAgICAgJ3VzZXJuYW1lJyxcbiAgICBdKSxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXJyb3JNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhhc0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlkZWFsRXJyb3JEaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICAnZGF0ZScsXG4gICAgICAnZW1haWwnLFxuICAgICAgJ251bWJlcicsXG4gICAgICAncGFzc3dvcmQnLFxuICAgICAgJ3RleHQnLFxuICAgICAgJ3VybCcsXG4gICAgXSksXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaGFzRXJyb3I6IGZhbHNlLFxuICAgIGlkZWFsRXJyb3JEaXJlY3Rpb246ICdyaWdodCcsXG4gICAgdHlwZTogJ3RleHQnLFxuICB9O1xuXG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICBmb2N1c2VkOiBmYWxzZSxcbiAgICBlcnJvcklzT3BlbjogZmFsc2UsXG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5lcnJvck1lc3NhZ2UgIT09IHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46ICEhbmV4dFByb3BzLmVycm9yTWVzc2FnZSB9KTtcbiAgICB9XG4gIH1cblxuICB0ZXh0ZmllbGQ6ID9IVE1MRWxlbWVudDtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8PikgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQmx1ciA9IChldmVudDogU3ludGhldGljRm9jdXNFdmVudDw+KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IGZhbHNlIH0pO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiB0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoe1xuICAgICAgICBldmVudCxcbiAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVGb2N1cyA9IChldmVudDogU3ludGhldGljRm9jdXNFdmVudDw+KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IHRydWUgfSk7XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIHRoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGF1dG9Db21wbGV0ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgaGFzRXJyb3IsXG4gICAgICBpZCxcbiAgICAgIGlkZWFsRXJyb3JEaXJlY3Rpb24sXG4gICAgICBuYW1lLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICB0eXBlLFxuICAgICAgdmFsdWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhcbiAgICAgIHN0eWxlcy50ZXh0RmllbGQsXG4gICAgICBkaXNhYmxlZCA/IHN0eWxlcy5kaXNhYmxlZCA6IHN0eWxlcy5lbmFibGVkLFxuICAgICAgaGFzRXJyb3IgfHwgZXJyb3JNZXNzYWdlID8gc3R5bGVzLmVycm9yZWQgOiBzdHlsZXMubm9ybWFsXG4gICAgKTtcblxuICAgIC8vIHR5cGU9J251bWJlcicgZG9lc24ndCB3b3JrIG9uIGlvcyBzYWZhcmkgd2l0aG91dCBhIHBhdHRlcm5cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNDQ0NzY2OC9pbnB1dC10eXBlLW51bWJlci1pcy1ub3Qtc2hvd2luZy1hLW51bWJlci1rZXlwYWQtb24taW9zXG4gICAgY29uc3QgcGF0dGVybiA9IHR5cGUgPT09ICdudW1iZXInID8gJ1xcXFxkKicgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICYmIHRoaXMuc3RhdGUuZm9jdXNlZCA/IGAke2lkfS1nZXN0YWx0LWVycm9yYCA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgYXJpYS1pbnZhbGlkPXtlcnJvck1lc3NhZ2UgfHwgaGFzRXJyb3IgPyAndHJ1ZScgOiAnZmFsc2UnfVxuICAgICAgICAgIGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgICAgcGF0dGVybj17cGF0dGVybn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgcmVmPXtjID0+IHtcbiAgICAgICAgICAgIHRoaXMudGV4dGZpZWxkID0gYztcbiAgICAgICAgICB9fVxuICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAvPlxuICAgICAgICB7ZXJyb3JNZXNzYWdlICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5lcnJvcklzT3BlbiAmJiAoXG4gICAgICAgICAgICA8RXJyb3JGbHlvdXRcbiAgICAgICAgICAgICAgYW5jaG9yPXt0aGlzLnRleHRmaWVsZH1cbiAgICAgICAgICAgICAgaWQ9e2Ake2lkfS1nZXN0YWx0LWVycm9yYH1cbiAgICAgICAgICAgICAgaWRlYWxEaXJlY3Rpb249e2lkZWFsRXJyb3JEaXJlY3Rpb259XG4gICAgICAgICAgICAgIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IGZhbHNlIH0pfVxuICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm94IGZyb20gJy4uL0JveC9Cb3gnO1xuaW1wb3J0IE1hc2sgZnJvbSAnLi4vTWFzay9NYXNrJztcbmltcG9ydCBUZXh0IGZyb20gJy4uL1RleHQvVGV4dCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uL0ljb24nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNvbG9yPzogJ2RhcmtHcmF5JyB8ICdvcmFuZ2UnLFxuICBpY29uPzogJ2Fycm93LWNpcmNsZS1mb3J3YXJkJywgLy8gbGVhdmluZyBvcGVuIHRvIGFkZGl0aW9uYWwgaWNvbnMgaW4gdGhlIGZ1dHVyZVxuICB0ZXh0OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LFxuICB0aHVtYm5haWw/OiBSZWFjdC5FbGVtZW50PGFueT4sXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9hc3QocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgY29sb3IgPSAnZGFya0dyYXknLCBpY29uLCB0aHVtYm5haWwsIHRleHQgfSA9IHByb3BzO1xuXG4gIGxldCBjb250ZW50cztcbiAgLy8gQ29uZmlybWF0aW9uIFRvYXN0c1xuICBpZiAodGV4dCBpbnN0YW5jZW9mIEFycmF5ICYmIHRleHQubGVuZ3RoID4gMSkge1xuICAgIGNvbnRlbnRzID0gKFxuICAgICAgPEJveCB4cz17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgIDxCb3ggeHM9e3sgZGlzcGxheTogJ2ZsZXhDb2x1bW4nIH19IGZsZXg9XCJub25lXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICB7dGh1bWJuYWlsID8gKFxuICAgICAgICAgICAgPE1hc2sgc2hhcGU9XCJyb3VuZGVkXCIgaGVpZ2h0PXs0OH0gd2lkdGg9ezQ4fT5cbiAgICAgICAgICAgICAge3RodW1ibmFpbH1cbiAgICAgICAgICAgIDwvTWFzaz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICB4cz17eyBkaXNwbGF5OiAnZmxleENvbHVtbicgfX1cbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17eyBfX3N0eWxlOiB7IHBhZGRpbmdMZWZ0OiAxMCB9IH19XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7IF9fc3R5bGU6IHsgZm9udFdlaWdodDogJ25vcm1hbCcgfSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIiBzaXplPVwibGdcIj5cbiAgICAgICAgICAgICAge3RleHRbMF19XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cIndoaXRlXCIgc2l6ZT1cImxnXCI+XG4gICAgICAgICAgICB7dGV4dFsxXX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUb2FzdHMgYXMgR3VpZGVzXG4gICAgY29udGVudHMgPSAoXG4gICAgICA8Qm94XG4gICAgICAgIHhzPXt7IGRpc3BsYXk6ICdmbGV4JyB9fVxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImJldHdlZW5cIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cIndoaXRlXCIgc2l6ZT1cImxnXCI+XG4gICAgICAgICAge3RleHR9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAge2ljb24gJiYgKFxuICAgICAgICAgIDxCb3ggZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17eyBfX3N0eWxlOiB7IHBhZGRpbmdMZWZ0OiAyNCB9IH19PlxuICAgICAgICAgICAgPEljb24gYWNjZXNzaWJpbGl0eUxhYmVsPVwiXCIgY29sb3I9XCJ3aGl0ZVwiIGljb249e2ljb259IHNpemU9ezM2fSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBtYXJnaW5Cb3R0b209ezN9IHBhZGRpbmdYPXs0fSBtYXhXaWR0aD17Mzc2fSB3aWR0aD1cIjEwMHZ3XCI+XG4gICAgICA8Qm94IGNvbG9yPXtjb2xvcn0gZml0IHBhZGRpbmdYPXs4fSBwYWRkaW5nWT17NX0gc2hhcGU9XCJwaWxsXCI+XG4gICAgICAgIHtjb250ZW50c31cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuXG5Ub2FzdC5wcm9wVHlwZXMgPSB7XG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydkYXJrR3JheScsICdvcmFuZ2UnXSksXG4gIGljb246IFByb3BUeXBlcy5vbmVPZihbJ2Fycm93LWNpcmNsZS1mb3J3YXJkJ10pLCAvLyBsZWF2aW5nIG9wZW4gdG8gYWRkaXRpb25hbCBpY29ucyBpbiB0aGUgZnV0dXJlXG4gIHRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIF0pLmlzUmVxdWlyZWQsXG4gIHRodW1ibmFpbDogUHJvcFR5cGVzLmVsZW1lbnQsXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94L0JveCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi4vRmx5b3V0VXRpbHMvQ29udHJvbGxlcic7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhbmNob3I6ID9hbnksXG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgaWRlYWxEaXJlY3Rpb24/OiAndXAnIHwgJ3JpZ2h0JyB8ICdkb3duJyB8ICdsZWZ0JyxcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkLFxuICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3I/OiBib29sZWFuLFxuICBzaXplPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgLyogZGVmYXVsdCBtZCAqLyxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb29sdGlwKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7XG4gICAgYW5jaG9yLFxuICAgIGNoaWxkcmVuLFxuICAgIGlkZWFsRGlyZWN0aW9uLFxuICAgIG9uRGlzbWlzcyxcbiAgICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3IgPSB0cnVlLFxuICAgIHNpemUgPSAnbWQnLFxuICB9ID0gcHJvcHM7XG5cbiAgaWYgKCFhbmNob3IpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRyb2xsZXJcbiAgICAgIGFuY2hvcj17YW5jaG9yfVxuICAgICAgYmdDb2xvcj1cImRhcmtHcmF5XCJcbiAgICAgIGlkZWFsRGlyZWN0aW9uPXtpZGVhbERpcmVjdGlvbn1cbiAgICAgIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcj17cG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yfVxuICAgICAgb25EaXNtaXNzPXtvbkRpc21pc3N9XG4gICAgICBzaXplPXtzaXplfVxuICAgID5cbiAgICAgIDxCb3ggY29sdW1uPXsxMn0gcGFkZGluZz17M30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udHJvbGxlcj5cbiAgKTtcbn1cblxuVG9vbHRpcC5wcm9wVHlwZXMgPSB7XG4gIGFuY2hvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250YWluczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgfSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaWRlYWxEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ3VwJywgJ3JpZ2h0JywgJ2Rvd24nLCAnbGVmdCddKSxcbiAgb25EaXNtaXNzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3I6IFByb3BUeXBlcy5ib29sLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSxcbn07XG4iLCIvLyBAZmxvd1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVG91Y2hhYmxlLmNzcyc7XG5cbnR5cGUgU2hhcGUgPVxuICB8ICdzcXVhcmUnXG4gIHwgJ3JvdW5kZWQnXG4gIHwgJ3BpbGwnXG4gIHwgJ2NpcmNsZSdcbiAgfCAncm91bmRlZFRvcCdcbiAgfCAncm91bmRlZEJvdHRvbSdcbiAgfCAncm91bmRlZExlZnQnXG4gIHwgJ3JvdW5kZWRSaWdodCc7XG5cbnR5cGUgTW91c2VDdXJzb3IgPVxuICB8ICdjb3B5J1xuICB8ICdncmFiJ1xuICB8ICdncmFiYmluZydcbiAgfCAnbW92ZSdcbiAgfCAnbm9Ecm9wJ1xuICB8ICdwb2ludGVyJ1xuICB8ICd6b29tSW4nXG4gIHwgJ3pvb21PdXQnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBmdWxsSGVpZ2h0PzogYm9vbGVhbixcbiAgZnVsbFdpZHRoPzogYm9vbGVhbixcbiAgbW91c2VDdXJzb3I/OiBNb3VzZUN1cnNvcixcbiAgb25Nb3VzZUVudGVyPzogKHsgZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8PiB9KSA9PiB2b2lkLFxuICBvbk1vdXNlTGVhdmU/OiAoeyBldmVudDogU3ludGhldGljTW91c2VFdmVudDw+IH0pID0+IHZvaWQsXG4gIG9uVG91Y2g/OiAoeyBldmVudDogU3ludGhldGljTW91c2VFdmVudDw+IH0pID0+IHZvaWQsXG4gIHNoYXBlPzogU2hhcGUsXG58fTtcblxuY29uc3QgU1BBQ0VfQ0hBUl9DT0RFID0gMzI7XG5jb25zdCBFTlRFUl9DSEFSX0NPREUgPSAxMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2hhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIGhhbmRsZUtleVByZXNzID0gKGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PD4pID0+IHtcbiAgICBjb25zdCB7IG9uVG91Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHNwYWNlIG9yIGVudGVyIHdlcmUgcHJlc3NlZFxuICAgIGlmIChcbiAgICAgIG9uVG91Y2ggJiZcbiAgICAgIChldmVudC5jaGFyQ29kZSA9PT0gU1BBQ0VfQ0hBUl9DT0RFIHx8IGV2ZW50LmNoYXJDb2RlID09PSBFTlRFUl9DSEFSX0NPREUpXG4gICAgKSB7XG4gICAgICAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGFjdGlvbiB0byBzdG9wIHNjcm9sbGluZyB3aGVuIHNwYWNlIGlzIHByZXNzZWRcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBvblRvdWNoKHsgZXZlbnQgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGZ1bGxXaWR0aCA9IHRydWUsXG4gICAgICBmdWxsSGVpZ2h0LFxuICAgICAgbW91c2VDdXJzb3IgPSAncG9pbnRlcicsXG4gICAgICBvbk1vdXNlRW50ZXIsXG4gICAgICBvbk1vdXNlTGVhdmUsXG4gICAgICBvblRvdWNoLFxuICAgICAgc2hhcGUgPSAnc3F1YXJlJyxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxuICAgICAgc3R5bGVzLnRvdWNoYWJsZSxcbiAgICAgIHN0eWxlc1ttb3VzZUN1cnNvcl0sXG4gICAgICBzdHlsZXNbc2hhcGVdLFxuICAgICAge1xuICAgICAgICBbc3R5bGVzLmZ1bGxIZWlnaHRdOiBmdWxsSGVpZ2h0LFxuICAgICAgICBbc3R5bGVzLmZ1bGxXaWR0aF06IGZ1bGxXaWR0aCxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgICBvbkNsaWNrPXtldmVudCA9PiBvblRvdWNoICYmIG9uVG91Y2goeyBldmVudCB9KX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXtldmVudCA9PiBvbk1vdXNlRW50ZXIgJiYgb25Nb3VzZUVudGVyKHsgZXZlbnQgfSl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17ZXZlbnQgPT4gb25Nb3VzZUxlYXZlICYmIG9uTW91c2VMZWF2ZSh7IGV2ZW50IH0pfVxuICAgICAgICBvbktleVByZXNzPXt0aGlzLmhhbmRsZUtleVByZXNzfVxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Ub3VjaGFibGUucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGZ1bGxIZWlnaHQ6IFByb3BUeXBlcy5ib29sLFxuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuICBtb3VzZUN1cnNvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnY29weScsXG4gICAgJ2dyYWInLFxuICAgICdncmFiYmluZycsXG4gICAgJ21vdmUnLFxuICAgICdub0Ryb3AnLFxuICAgICdwb2ludGVyJyxcbiAgICAnem9vbUluJyxcbiAgICAnem9vbU91dCcsXG4gIF0pLFxuICBvblRvdWNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2hhcGU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3NxdWFyZScsXG4gICAgJ3JvdW5kZWQnLFxuICAgICdwaWxsJyxcbiAgICAnY2lyY2xlJyxcbiAgICAncm91bmRlZFRvcCcsXG4gICAgJ3JvdW5kZWRCb3R0b20nLFxuICAgICdyb3VuZGVkTGVmdCcsXG4gICAgJ3JvdW5kZWRSaWdodCcsXG4gIF0pLFxufTtcbiJdLCJuYW1lcyI6WyJpZGVudGl0eSIsIlNldCIsImZyb21DbGFzc05hbWUiLCJjbGFzc05hbWVzIiwiZnJvbUlubGluZVN0eWxlIiwiaW5saW5lU3R5bGUiLCJjb25jYXQiLCJzdHlsZXMiLCJyZWR1Y2UiLCJjbGFzc05hbWVBIiwiY2xhc3NOYW1lIiwiaW5saW5lU3R5bGVBIiwiY2xhc3NOYW1lQiIsImlubGluZVN0eWxlQiIsIm1hcENsYXNzTmFtZSIsImZuIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwidG9Qcm9wcyIsInByb3BzIiwic2l6ZSIsInNvcnQiLCJqb2luIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInN0eWxlIiwidG9nZ2xlIiwidmFsIiwibWFwcGluZyIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInJhbmdlIiwic2NhbGUiLCJuIiwiTWF0aCIsImFicyIsInJhbmdlV2l0aG91dFplcm8iLCJiaW5kIiwic2NvcGUiLCJuYW1lIiwidW5pb24iLCJmbnMiLCJtYXJnaW5Ub3AiLCJ3aGl0ZXNwYWNlIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwibWFyZ2luIiwic21NYXJnaW5Ub3AiLCJzbU1hcmdpblJpZ2h0Iiwic21NYXJnaW5Cb3R0b20iLCJzbU1hcmdpbkxlZnQiLCJzbU1hcmdpbiIsIm1kTWFyZ2luVG9wIiwibWRNYXJnaW5SaWdodCIsIm1kTWFyZ2luQm90dG9tIiwibWRNYXJnaW5MZWZ0IiwibWRNYXJnaW4iLCJsZ01hcmdpblRvcCIsImxnTWFyZ2luUmlnaHQiLCJsZ01hcmdpbkJvdHRvbSIsImxnTWFyZ2luTGVmdCIsImxnTWFyZ2luIiwicGFkZGluZ1giLCJwYWRkaW5nWSIsInBhZGRpbmciLCJzbVBhZGRpbmdYIiwic21QYWRkaW5nWSIsInNtUGFkZGluZyIsIm1kUGFkZGluZ1giLCJtZFBhZGRpbmdZIiwibWRQYWRkaW5nIiwibGdQYWRkaW5nWCIsImxnUGFkZGluZ1kiLCJsZ1BhZGRpbmciLCJwcmVmaXgiLCJwcmUiLCJkaXNwbGF5IiwidmFsdWUiLCJjb2x1bW4iLCJmb3JtYXRJbnRCb2ludCIsIngiLCJ0b1N0cmluZyIsInByb3BUb0ZuIiwiYyIsInhzRGlzcGxheU5vbmUiLCJ4c0Rpc3BsYXlGbGV4IiwieHNEaXNwbGF5QmxvY2siLCJ4c0Rpc3BsYXlJbmxpbmVCbG9jayIsInhzRGlyZWN0aW9uUm93IiwieHNEaXJlY3Rpb25Db2x1bW4iLCJzbURpc3BsYXlOb25lIiwic21EaXNwbGF5RmxleCIsInNtRGlzcGxheUJsb2NrIiwic21EaXNwbGF5SW5saW5lQmxvY2siLCJzbURpcmVjdGlvblJvdyIsInNtRGlyZWN0aW9uQ29sdW1uIiwibWREaXNwbGF5Tm9uZSIsIm1kRGlzcGxheUZsZXgiLCJtZERpc3BsYXlCbG9jayIsIm1kRGlzcGxheUlubGluZUJsb2NrIiwibWREaXJlY3Rpb25Sb3ciLCJtZERpcmVjdGlvbkNvbHVtbiIsImxnRGlzcGxheU5vbmUiLCJsZ0Rpc3BsYXlGbGV4IiwibGdEaXNwbGF5QmxvY2siLCJsZ0Rpc3BsYXlJbmxpbmVCbG9jayIsImxnRGlyZWN0aW9uUm93IiwibGdEaXJlY3Rpb25Db2x1bW4iLCJsYXlvdXQiLCJjb250ZW50U3RhcnQiLCJjb250ZW50RW5kIiwiY29udGVudENlbnRlciIsImNvbnRlbnRCZXR3ZWVuIiwiY29udGVudEFyb3VuZCIsIml0ZW1zU3RhcnQiLCJpdGVtc0VuZCIsIml0ZW1zQ2VudGVyIiwiaXRlbXNCYXNlbGluZSIsInNlbGZTdGFydCIsInNlbGZFbmQiLCJzZWxmQ2VudGVyIiwic2VsZkJhc2VsaW5lIiwic2VsZlN0cmV0Y2giLCJib3R0b20wIiwiY29sb3JzIiwiYmx1ZUJnIiwiZGFya0dyYXlCZyIsInBpbmVCZyIsImdyYXlCZyIsInJlZEJnIiwib2xpdmVCZyIsImxpZ2h0R3JheUJnIiwid2hpdGVCZyIsIm9yYW5nZUJnIiwiZ3JlZW5CZyIsIm5hdnlCZyIsIm1pZG5pZ2h0QmciLCJwdXJwbGVCZyIsIm9yY2hpZEJnIiwiZWdncGxhbnRCZyIsIm1hcm9vbkJnIiwid2F0ZXJtZWxvbkJnIiwibGlnaHRXYXNoQmciLCJkYXJrV2FzaEJnIiwiZml0IiwiZmxleEdyb3ciLCJmbGV4Tm9uZSIsImhlaWdodCIsImp1c3RpZnlFbmQiLCJqdXN0aWZ5Q2VudGVyIiwianVzdGlmeUJldHdlZW4iLCJqdXN0aWZ5QXJvdW5kIiwibGVmdDAiLCJtdCIsIm1iIiwibWwiLCJtciIsIndoaXRlc3BhY2VMZWdhY3kiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwibWxBdXRvIiwicmlnaHQiLCJtckF1dG8iLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1pbldpZHRoIiwib3ZlcmZsb3dIaWRkZW4iLCJvdmVyZmxvd1Njcm9sbCIsIm92ZXJmbG93QXV0byIsIm92ZXJmbG93U2Nyb2xsWCIsIm92ZXJmbG93U2Nyb2xsWSIsInkiLCJhYnNvbHV0ZSIsInJlbGF0aXZlIiwiZml4ZWQiLCJyaWdodDAiLCJib3JkZXJzIiwiY2lyY2xlIiwicGlsbCIsInJvdW5kZWQiLCJyb3VuZGVkQm90dG9tIiwicm91bmRlZExlZnQiLCJyb3VuZGVkUmlnaHQiLCJyb3VuZGVkVG9wIiwidG9wMCIsIndpZHRoIiwiZmxleFdyYXAiLCJfX3N0eWxlIiwiY29udGFpbnMiLCJrZXkiLCJhcnIiLCJpbmRleE9mIiwib21pdCIsIm9iaiIsImFjYyIsImsiLCJCb3giLCJjaGlsZHJlbiIsImJsYWNrbGlzdCIsInMiLCJib3giLCJwcm9wIiwiUmVhY3QuY3JlYXRlRWxlbWVudCIsIkNvbHVtblByb3BUeXBlIiwiUHJvcFR5cGVzIiwib25lT2YiLCJNYXJnaW5Qcm9wVHlwZSIsIlBhZGRpbmdQcm9wVHlwZSIsInByb3BUeXBlcyIsIm5vZGUiLCJleGFjdCIsIm9iamVjdCIsIm9uZU9mVHlwZSIsImJvb2wiLCJudW1iZXIiLCJzaGFwZSIsInN0cmluZyIsImFkZENpcmNsZSIsImFkZFBpbiIsImFycm93QmFjayIsImFycm93Q2lyY2xlRm9yd2FyZCIsImFycm93RG93biIsImFycm93Rm9yd2FyZCIsImFycm93VXAiLCJjaGVja0NpcmNsZSIsImNpcmNsZU91dGxpbmUiLCJlbGxpcHNpc0NpcmNsZU91dGxpbmUiLCJmYWNlSGFwcHkiLCJmYWNlU2FkIiwiZmFjZVNtaWxleSIsImdyYXBoQmFyIiwiaGVhcnRCcm9rZW4iLCJwZXJzb25BZGQiLCJwaW5IaWRlIiwicXVlc3Rpb25NYXJrIiwic2hvcHBpbmdCYWciLCJzbWlsZXlPdXRsaW5lIiwic3BlZWNoRWxsaXBzaXMiLCJJY29uTmFtZXMiLCJpY29ucyIsIkljb24iLCJhY2Nlc3NpYmlsaXR5TGFiZWwiLCJjb2xvciIsImljb24iLCJpbmxpbmUiLCJjcyIsImNsYXNzbmFtZXMiLCJpY29uQmxvY2siLCJwYXRoIiwiYXJpYUhpZGRlbiIsImlzUmVxdWlyZWQiLCJzaG91bGRTY2FsZUltYWdlIiwiSW1hZ2UiLCJoYW5kbGVMb2FkIiwib25Mb2FkIiwiaGFuZGxlRXJyb3IiLCJvbkVycm9yIiwibG9hZEltYWdlIiwicHJldlByb3BzIiwic3JjIiwid2luZG93IiwiaW1hZ2UiLCJvbmxvYWQiLCJvbmVycm9yIiwiYWx0IiwibmF0dXJhbEhlaWdodCIsIm5hdHVyYWxXaWR0aCIsInNpemVzIiwic3JjU2V0IiwiaXNTY2FsZWRJbWFnZSIsImNoaWxkQ29udGVudCIsImltZyIsIlJlYWN0IiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsIk1hc2siLCJ3YXNoIiwiY3giLCJTcXVhcmUiLCJwYWRkaW5nQm90dG9tIiwiRGVmYXVsdEF2YXRhciIsImZpcnN0SW5pdGlhbCIsInRvVXBwZXJDYXNlIiwidHlwb2dyYXBoeSIsImFudGlhbGlhc2VkIiwic2Fuc1NlcmlmIiwibGVhZGluZ1NtYWxsIiwiZm9udFdlaWdodEJvbGQiLCJBdmF0YXIiLCJ2ZXJpZmllZCIsIlNJWkVfU0NBTEUiLCJUZXh0IiwiYWxpZ24iLCJib2xkIiwiaXRhbGljIiwib3ZlcmZsb3ciLCJzbVNpemUiLCJtZFNpemUiLCJsZ1NpemUiLCJsZWFkaW5nIiwidHJ1bmNhdGUiLCJfX2Rhbmdlcm91c2x5SW5jcmVhc2VMaW5lSGVpZ2h0Iiwic21TY2FsZSIsIm1kU2NhbGUiLCJsZ1NjYWxlIiwiYmx1ZSIsImRhcmtHcmF5IiwiZWdncGxhbnQiLCJncmF5IiwiZ3JlZW4iLCJsaWdodEdyYXkiLCJtYXJvb24iLCJtaWRuaWdodCIsIm5hdnkiLCJvbGl2ZSIsIm9yYW5nZSIsIm9yY2hpZCIsInBpbmUiLCJwdXJwbGUiLCJyZWQiLCJ3YXRlcm1lbG9uIiwid2hpdGUiLCJsZWFkaW5nU2hvcnQiLCJsZWFkaW5nVGFsbCIsImFsaWduQ2VudGVyIiwiYWxpZ25KdXN0aWZ5IiwiYWxpZ25MZWZ0IiwiYWxpZ25SaWdodCIsImJyZWFrV29yZCIsImZvbnRTdHlsZUl0YWxpYyIsImZvbnRTdHlsZU5vcm1hbCIsImZvbnRXZWlnaHROb3JtYWwiLCJUYWciLCJ0aXRsZSIsIkJ1dHRvbiIsImFjY2Vzc2liaWxpdHlFeHBhbmRlZCIsImFjY2Vzc2liaWxpdHlIYXNwb3B1cCIsImRpc2FibGVkIiwib25DbGljayIsInRleHQiLCJ0eXBlIiwidGV4dENvbG9yIiwiY2xhc3NlcyIsImJ1dHRvbiIsInNtIiwibWQiLCJsZyIsInNvbGlkIiwiZW5hYmxlZCIsImJsb2NrIiwiZXZlbnQiLCJDYXJkIiwic3RhdGUiLCJoYW5kbGVNb3VzZUVudGVyIiwib25Nb3VzZUVudGVyIiwic2V0U3RhdGUiLCJob3ZlcmVkIiwiaGFuZGxlTW91c2VMZWF2ZSIsIm9uTW91c2VMZWF2ZSIsImFjdGl2ZSIsImNhcmQiLCJob3ZlciIsIkNoZWNrYm94IiwiaGFuZGxlQ2hhbmdlIiwiY2hlY2tlZCIsInRhcmdldCIsIm9uQ2hhbmdlIiwiaGFuZGxlQmx1ciIsImZvY3VzZWQiLCJoYW5kbGVGb2N1cyIsImluZGV0ZXJtaW5hdGUiLCJzZXRJbmRldGVybWluYXRlIiwicHJldmlvdXNQcm9wcyIsImlucHV0IiwiaWQiLCJpbnB1dEVuYWJsZWQiLCJpbnB1dFNtIiwiaW5wdXRNZCIsImVsIiwiY2hlY2siLCJjaGVja0dyYXkiLCJjaGVja0xpZ2h0R3JheSIsImNoZWNrRGFya0dyYXkiLCJjaGVja1doaXRlIiwiY2hlY2tFbmFibGVkIiwiY2hlY2tGb2N1c2VkIiwiY2hlY2tNZCIsImNoZWNrU20iLCJDb2xsZWN0aW9uIiwiSXRlbSIsInZpZXdwb3J0VG9wIiwidmlld3BvcnRMZWZ0IiwibWF4IiwiaXRlbSIsInZpZXdwb3J0V2lkdGgiLCJ2aWV3cG9ydEhlaWdodCIsIml0ZW1zIiwicG9zaXRpb24iLCJpZHgiLCJwdXNoIiwibGF5b3V0U3R5bGVzIiwiYW55IiwiYXJyYXlPZiIsIkNvbHVtbiIsInhzIiwiZGVwcmVjYXRlZENvbHVtbiIsInNwYW4iLCJzbVNwYW4iLCJtZFNwYW4iLCJsZ1NwYW4iLCJDb250YWluZXIiLCJEaXZpZGVyIiwiZGl2aWRlciIsIkNhcmV0IiwiZGlyZWN0aW9uIiwiU1BBQ0VTX0lOREVYX01BUCIsIkRJUl9JTkRFWF9NQVAiLCJNQVJHSU4iLCJDQVJFVF9IRUlHSFQiLCJDQVJFVF9PRkZTRVRfRlJPTV9TSURFIiwiQk9SREVSX1JBRElVUyIsImdldE1haW5EaXIiLCJmbHlvdXRTaXplIiwiaWRlYWxEaXJlY3Rpb24iLCJ0cmlnZ2VyUmVjdCIsIndpbmRvd1NpemUiLCJ1cCIsImRvd24iLCJzcGFjZXMiLCJtYWluRGlyIiwiZ2V0U3ViRGlyIiwib2Zmc2V0IiwidHJpZ2dlck1pZCIsIndpbmRvd1NwYWNlQXZhaWxhYmxlIiwiYWJvdmVPckxlZnQiLCJiZWxvd09yUmlnaHQiLCJzdWJEaXIiLCJjYWxjRWRnZVNoaWZ0cyIsImZseW91dFZlcnRpY2FsU2hpZnQiLCJmbHlvdXRIb3Jpem9udGFsU2hpZnQiLCJjYXJldFZlcnRpY2FsU2hpZnQiLCJjYXJldEhvcml6b250YWxTaGlmdCIsImlzQ2xvc2VWZXJ0aWNhbGx5IiwiaXNDbG9zZUhvcml6b250YWxseSIsImFkanVzdE9mZnNldHMiLCJiYXNlIiwiZWRnZVNoaWZ0IiwiZmx5b3V0TGVmdCIsImZseW91dFRvcCIsImNhcmV0VG9wIiwiY2FyZXRSaWdodCIsImNhcmV0Qm90dG9tIiwiY2FyZXRMZWZ0IiwiZmx5b3V0IiwiY2FyZXQiLCJiYXNlT2Zmc2V0cyIsInJlbGF0aXZlT2Zmc2V0IiwiSEFMRl9DQVJFVCIsInNjcm9sbFkiLCJzY3JvbGxYIiwiQ29udGVudHMiLCJ1bmRlZmluZWQiLCJzZXRGbHlvdXRQb3NpdGlvbiIsInBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvciIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudEhlaWdodCIsImVkZ2VTaGlmdHMiLCJmbHlvdXRPZmZzZXQiLCJjYXJldE9mZnNldCIsInNob3VsZEZvY3VzIiwiZm9jdXMiLCJhZGRFdmVudExpc3RlbmVyIiwib25SZXNpemUiLCJvbktleURvd24iLCJuZXh0UHJvcHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYmdDb2xvciIsInZpc2liaWxpdHkiLCJiYWNrZ3JvdW5kIiwic3Ryb2tlIiwiYm9yZGVyQ29sb3IiLCJjb250YWluZXIiLCJkaW1lbnNpb25zIiwiY29udGVudHMiLCJpbm5lckNvbnRlbnRzIiwiU0laRV9XSURUSF9NQVAiLCJFU0NBUEVfS0VZX0NPREUiLCJDb250cm9sbGVyIiwiaGFuZGxlS2V5RG93biIsImtleUNvZGUiLCJvbkRpc21pc3MiLCJoYW5kbGVQYWdlQ2xpY2siLCJOb2RlIiwiYW5jaG9yIiwidXBkYXRlVHJpZ2dlclJlY3QiLCJ0cmlnZ2VyQm91bmRpbmdSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsIkVycm9yRmx5b3V0IiwibWVzc2FnZSIsIkZldGNoSXRlbXMiLCJjb250YWluZXJIZWlnaHQiLCJpc0F0RW5kIiwiaXNGZXRjaGluZyIsImZldGNoTW9yZSIsInNjcm9sbEhlaWdodCIsInNjcm9sbFRvcCIsInNjcm9sbEJ1ZmZlciIsImdldFNjcm9sbENvbnRhaW5lciIsInNjcm9sbENvbnRhaW5lciIsIlNjcm9sbENvbnRhaW5lciIsImdldFNjcm9sbENvbnRhaW5lclJlZiIsImhhbmRsZVNjcm9sbCIsIm9uU2Nyb2xsIiwidXBkYXRlU2Nyb2xsQ29udGFpbmVyIiwibmV4dFNjcm9sbENvbnRhaW5lciIsIm9ubHkiLCJlbGVtZW50IiwidGhyb3R0bGUiLCJ0aHJlc2hob2xkIiwibGFzdCIsImRlZmVyVGltZXIiLCJhcmdzIiwibm93IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJNZWFzdXJlbWVudFN0b3JlIiwiV2Vha01hcCIsImdldCIsImhhcyIsInNldCIsImdldEVsZW1lbnRIZWlnaHQiLCJnZXRXaW5kb3dTY3JvbGxQb3MiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImdldFJlbGF0aXZlU2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsSGVpZ2h0IiwiZ2V0U2Nyb2xsUG9zIiwiRGVmYXVsdExheW91dFN5bWJvbCIsIlN5bWJvbCIsIlVuaWZvcm1Sb3dMYXlvdXRTeW1ib2wiLCJtaW5kZXgiLCJpIiwib2Zmc2NyZWVuIiwiSW5maW5pdHkiLCJjYWNoZSIsImNvbHVtbldpZHRoIiwiZ3V0dGVyIiwibWluQ29scyIsImNvbHVtbldpZHRoQW5kR3V0dGVyIiwiY29sdW1uQ291bnQiLCJmbG9vciIsImhlaWdodHMiLCJmaWxsIiwiY2VudGVyT2Zmc2V0IiwicG9zaXRpb25zIiwiaGVpZ2h0QW5kR3V0dGVyIiwiY29sIiwicm93Iiwic2xpY2UiLCJzdW0iLCJpZGVhbENvbHVtbldpZHRoIiwiY29sZ3Vlc3MiLCJNYXNvbnJ5TGF5b3V0IiwiVW5pZm9ybVJvd0xheW91dCIsIlJFU0laRV9ERUJPVU5DRSIsIlZJUlRVQUxfQlVGRkVSX0ZBQ1RPUiIsIkV4cGVyaW1lbnRhbE1hc29ucnkiLCJzZXRHcmlkV3JhcHBlclJlZiIsInJlZiIsImdyaWRXcmFwcGVyIiwic2V0U2Nyb2xsQ29udGFpbmVyUmVmIiwiaGFuZGxlUmVzaXplIiwicmVzaXplVGltZW91dCIsImNsaWVudFdpZHRoIiwidXBkYXRlU2Nyb2xsUG9zaXRpb24iLCJsb2FkSXRlbXMiLCJyZW5kZXJNYXNvbnJ5Q29tcG9uZW50IiwiaXRlbURhdGEiLCJDb21wb25lbnQiLCJjb21wIiwidmlydHVhbGl6ZSIsImlzVmlzaWJsZSIsInZpcnR1YWxCdWZmZXIiLCJvZmZzZXRTY3JvbGxQb3MiLCJjb250YWluZXJPZmZzZXQiLCJ2aWV3cG9ydEJvdHRvbSIsIml0ZW1Db21wb25lbnQiLCJNYXNvbnJ5X19JdGVtIiwiTWFzb25yeV9fSXRlbV9fTW91bnRlZCIsInRyYW5zaXRpb24iLCJzb21lIiwibWVhc3VyZW1lbnRTdG9yZSIsIm1lYXN1cmVDb250YWluZXIiLCJoYXNQZW5kaW5nTWVhc3VyZW1lbnRzIiwicHJldlN0YXRlIiwibWVhc3VyZVRpbWVvdXQiLCJyZXNldCIsImluc2VydEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsQ29udGFpbmVyUmVmIiwiSFRNTEVsZW1lbnQiLCJyZWxhdGl2ZVNjcm9sbFRvcCIsImZvcmNlVXBkYXRlIiwiZmxleGlibGUiLCJndXR0ZXJXaWR0aCIsImZ1bGxXaWR0aExheW91dCIsIkxlZ2FjeVVuaWZvcm1Sb3dMYXlvdXQiLCJ1bmlmb3JtUm93TGF5b3V0IiwiZGVmYXVsdExheW91dCIsImdyaWRCb2R5IiwiTWFzb25yeSIsImZpbHRlciIsIml0ZW1zVG9SZW5kZXIiLCJpdGVtc1RvTWVhc3VyZSIsIm1lYXN1cmluZ1Bvc2l0aW9ucyIsInBvcyIsImRhdGEiLCJpbnN0YW5jZU9mIiwiRmx5b3V0IiwiQk9SREVSX1dJRFRIIiwiQVZBVEFSX1NJWkVTIiwiREVGQVVMVF9BVkFUQVJfVEVYVF9TSVpFUyIsImF2YXRhckxheW91dCIsImRlZ1RvUmFkIiwiZGVnIiwiUEkiLCJmb250U2l6ZSIsInRleHRMYXlvdXQiLCJxdWFydGVyUGFkZGluZyIsInNpbiIsImluaXRpYWwiLCJHcm91cEF2YXRhciIsImNvbGxhYm9yYXRvcnMiLCJhdmF0YXJTaXplIiwiZGVmYXVsdEhlYWRpbmdMZXZlbHMiLCJIZWFkaW5nIiwiYWNjZXNzaWJpbGl0eUxldmVsIiwiaGVhZGluZ0xldmVsIiwiU0laRV9OQU1FX1RPX1BJWEVMIiwiZGVmYXVsdEljb25CdXR0b25JY29uQ29sb3JzIiwiUG9nIiwiaWNvbkNvbG9yIiwiaWNvblNpemUiLCJwb2ciLCJJY29uQnV0dG9uIiwiaGFuZGxlTW91c2VEb3duIiwiaGFuZGxlTW91c2VVcCIsIkxhYmVsIiwiaHRtbEZvciIsImxhYmVsIiwiYXNwZWN0UmF0aW8iLCJMZXR0ZXJib3giLCJjb250ZW50QXNwZWN0UmF0aW8iLCJ2aWV3cG9ydEFzcGVjdFJhdGlvIiwiY29udGVudEhlaWdodCIsImNvbnRlbnRXaWR0aCIsIlRBQl9LRVlfQ09ERSIsIkxpbmsiLCJoYW5kbGVDbGljayIsImhyZWYiLCJlbmFibGVGb2N1c1N0eWxlcyIsImhhbmRsZUtleVVwIiwicmVsIiwibGlua1RhcmdldCIsImxpbmsiLCJhY2Nlc3NpYmxlRm9jdXNTdHlsZSIsImxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uIiwiTW9kYWwiLCJnZXRDdXJyZW50QnJlYWtwb2ludCIsImJyZWFrcG9pbnRzIiwiZm9yRWFjaCIsIm1hdGNoTWVkaWEiLCJwb2ludCIsIm1hdGNoZXMiLCJoYW5kbGVDbG9zZSIsIm1vZGFsIiwidXBkYXRlQnJlYWtwb2ludCIsImJyZWFrcG9pbnQiLCJ3aW5kb3dIZWlnaHQiLCJyZXN0cmljdEZvY3VzIiwicHJpb3JGb2N1cyIsImFjdGl2ZUVsZW1lbnQiLCJib2R5IiwiYWNjZXNzaWJpbGl0eUNsb3NlTGFiZWwiLCJhY2Nlc3NpYmlsaXR5TW9kYWxMYWJlbCIsImZvb3RlciIsImhlYWRpbmciLCJyb2xlIiwiYm9yZGVyQm94IiwiZmxleCIsImNvbnRhaW5lckNsYXNzZXMiLCJ4c0NvbDEyIiwid3JhcHBlciIsIndyYXBwZXJDbGFzc2VzIiwibTAiLCJvdmVybGF5IiwiY3Vyc29yIiwiem9vbU91dCIsIm92ZXJsYXlDbGFzc2VzIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJQdWxzYXIiLCJwYXVzZWQiLCJpbm5lckNpcmNsZSIsIm91dGVyQ2lyY2xlIiwiUmFkaW9CdXR0b24iLCJSYWRpb0J1dHRvbklzRm9jdXNlZCIsIlJhZGlvQnV0dG9uU20iLCJSYWRpb0J1dHRvbk1kIiwiUmFkaW9CdXR0b25XaGl0ZUJnIiwiUmFkaW9CdXR0b25MaWdodEdyYXlCZyIsIklucHV0IiwiSW5wdXRFbmFibGVkIiwiSW5wdXRTbSIsIklucHV0TWQiLCJDaGVjayIsIkNoZWNrU20iLCJDaGVja01kIiwiQ2hlY2tFbmFibGVkIiwiQ2hlY2tEaXNhYmxlZCIsIlNjcm9sbEZldGNoIiwidXBkYXRlUG9zaXRpb24iLCJnZXRTY3JvbGxTdGF0ZSIsInJlbmRlckhlaWdodCIsIlNlYXJjaEZpZWxkIiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsZWFyIiwib25Gb2N1cyIsIm9uQmx1ciIsInBsYWNlaG9sZGVyIiwic2hvd0NsZWFyIiwiY2xlYXIiLCJTZWdtZW50ZWRDb250cm9sIiwic2VsZWN0ZWRJdGVtSW5kZXgiLCJpc1NlbGVjdGVkIiwiaXRlbUlzTm90U2VsZWN0ZWQiLCJpdGVtSXNTZWxlY3RlZCIsImUiLCJhY3RpdmVJbmRleCIsIlNlbGVjdExpc3QiLCJoYW5kbGVPbkNoYW5nZSIsIkhUTUxTZWxlY3RFbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JJc09wZW4iLCJpZGVhbEVycm9yRGlyZWN0aW9uIiwib3B0aW9ucyIsInNlbGVjdCIsImVycm9yZWQiLCJub3JtYWwiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nVG9wIiwib3B0aW9uIiwiU0laRSIsIlNwaW5uZXIiLCJzaG93IiwiU3RpY2t5IiwiZGFuZ2Vyb3VzbHlTZXRaSW5kZXgiLCJfX3pJbmRleCIsInN0aWNreSIsIlN3aXRjaCIsInN3aXRjaGVkIiwic3dpdGNoU3R5bGVzIiwic3dpdGNoIiwic3dpdGNoR3JheSIsInN3aXRjaExpZ2h0R3JheSIsInN3aXRjaERhcmtHcmF5Iiwic3dpdGNoV2hpdGUiLCJzbGlkZXJTdHlsZXMiLCJzbGlkZXIiLCJzbGlkZXJSaWdodCIsInNsaWRlckxlZnQiLCJzbGlkZXJEYXJrIiwic2xpZGVyTGlnaHQiLCJpbnB1dFN0eWxlcyIsImNoZWNrYm94IiwiY2hlY2tib3hFbmFibGVkIiwiVGFicyIsImhhbmRsZVRhYkNsaWNrIiwiYWN0aXZlVGFiSW5kZXgiLCJoYW5kbGVUYWJGb2N1cyIsImZvY3VzZWRUYWJJbmRleCIsImhhbmRsZVRhYkJsdXIiLCJoYW5kbGVUYWJNb3VzZUVudGVyIiwiaG92ZXJlZFRhYkluZGV4IiwiaGFuZGxlVGFiTW91c2VMZWF2ZSIsInRhYnMiLCJpc0FjdGl2ZSIsImlzSG92ZXJlZCIsImlzRm9jdXNlZCIsInRhYiIsInRhYklzTm90QWN0aXZlIiwidGFiSXNBY3RpdmUiLCJUZXh0QXJlYSIsIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCJyb3dzIiwidGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIlRleHRGaWVsZCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJhdXRvQ29tcGxldGUiLCJoYXNFcnJvciIsInRleHRGaWVsZCIsInBhdHRlcm4iLCJ0ZXh0ZmllbGQiLCJUb2FzdCIsInRodW1ibmFpbCIsImZvbnRXZWlnaHQiLCJUb29sdGlwIiwiU1BBQ0VfQ0hBUl9DT0RFIiwiRU5URVJfQ0hBUl9DT0RFIiwiVG91Y2hhYmxlIiwiaGFuZGxlS2V5UHJlc3MiLCJvblRvdWNoIiwiY2hhckNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImZ1bGxXaWR0aCIsImZ1bGxIZWlnaHQiLCJtb3VzZUN1cnNvciIsInRvdWNoYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCTyxJQUFNQSxXQUFXLFNBQVhBLFFBQVc7U0FBYztlQUN6QixJQUFJQyxHQUFKLEVBRHlCO2lCQUV2QjtHQUZTO0NBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1AsQUFBTyxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCO29DQUFJQyxVQUFKO2NBQUE7OztTQUEwQztlQUMxRCxJQUFJRixHQUFKLENBQVFFLFVBQVIsQ0FEMEQ7aUJBRXhEO0dBRmM7Q0FBdEI7O0FBS1AsQUFBTyxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLFdBQUQ7U0FFakI7ZUFDRCxJQUFJSixHQUFKLEVBREM7O0dBRmlCO0NBQXhCOztBQU9QLEFBQU8sSUFBTUssU0FBUyxTQUFUQSxNQUFTLENBQUNDLE1BQUQ7U0FDcEJBLE9BQU9DLE1BQVAsQ0FDRTtRQUNlQyxVQURmLFFBQ0lDLFNBREo7UUFDd0NDLFlBRHhDLFFBQzJCTixXQUQzQjtRQUVlTyxVQUZmLFNBRUlGLFNBRko7UUFFd0NHLFlBRnhDLFNBRTJCUixXQUYzQjtXQUdNO2lCQUNPLElBQUlKLEdBQUosNkJBQVlRLFVBQVoscUJBQTJCRyxVQUEzQixHQURQO2dDQUVjRCxZQUFsQixFQUFtQ0UsWUFBbkM7S0FMRjtHQURGLEVBUUViLFVBUkYsQ0FEb0I7Q0FBZjs7QUFZUCxBQUFPLElBQU1jLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxFQUFEO1NBQStCO1FBQ3pETCxTQUR5RCxTQUN6REEsU0FEeUQ7UUFFekRMLFdBRnlELFNBRXpEQSxXQUZ5RDtXQUd0QztpQkFDUixJQUFJSixHQUFKLENBQVFlLE1BQU1DLElBQU4sQ0FBV1AsU0FBWCxFQUFzQlEsR0FBdEIsQ0FBMEJILEVBQTFCLENBQVIsQ0FEUTs7S0FIc0M7R0FBL0I7Q0FBckI7O0FBUVAsQUFBTyxJQUFNSSxVQUFVLFNBQVZBLE9BQVUsUUFHNEM7TUFGakVULFNBRWlFLFNBRmpFQSxTQUVpRTtNQURqRUwsV0FDaUUsU0FEakVBLFdBQ2lFOztNQUMzRGUsUUFBUSxFQUFkOztNQUVJVixVQUFVVyxJQUFWLEdBQWlCLENBQXJCLEVBQXdCOzs7O1VBSWhCWCxTQUFOLEdBQWtCTSxNQUFNQyxJQUFOLENBQVdQLFNBQVgsRUFDZlksSUFEZSxHQUVmQyxJQUZlLENBRVYsR0FGVSxDQUFsQjs7O01BS0VDLE9BQU9DLElBQVAsQ0FBWXBCLFdBQVosRUFBeUJxQixNQUF6QixHQUFrQyxDQUF0QyxFQUF5QztVQUNqQ0MsS0FBTixHQUFjdEIsV0FBZDs7O1NBR0tlLEtBQVA7Q0FuQks7O0FDNURQOzs7Ozs7Ozs7Ozs7QUFZQSxBQUFPLElBQU1RLFNBQVMsU0FBVEEsTUFBUztvQ0FBSXpCLFVBQUo7Y0FBQTs7O1NBQW1CO1dBQ3ZDMEIsTUFBTTNCLCtCQUFpQkMsVUFBakIsQ0FBTixHQUFxQ0gsVUFERTtHQUFuQjtDQUFmOzs7Ozs7QUFPUCxBQUFPLElBQU04QixVQUFVLFNBQVZBLE9BQVU7U0FBTztXQUM1Qk4sT0FBT08sU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDZixHQUFyQyxFQUEwQ1csR0FBMUMsSUFDSTNCLGNBQWNnQixJQUFJVyxHQUFKLENBQWQsQ0FESixHQUVJN0IsVUFId0I7R0FBUDtDQUFoQjs7Ozs7O0FBU1AsQUFBTyxJQUFNa0MsUUFBUSxTQUFSQSxLQUFRO1NBQVM7V0FDNUJoQyxtQkFBaUJpQyxLQUFqQixJQUF5QkMsSUFBSSxDQUFKLFNBQVlDLEtBQUtDLEdBQUwsQ0FBU0YsQ0FBVCxDQUFaLEdBQTRCQSxDQUFyRCxFQUQ0QjtHQUFUO0NBQWQ7Ozs7OztBQU9QLEFBQU8sSUFBTUcsbUJBQW1CLFNBQW5CQSxnQkFBbUI7U0FBUztXQUN2Q0gsTUFBTSxDQUFOLEdBQVVwQyxVQUFWLEdBQXVCa0MsTUFBTUMsS0FBTixFQUFhQyxDQUFiLENBRGdCO0dBQVQ7Q0FBekI7Ozs7O0FBTVAsQUFBTyxJQUFNSSxPQUFPLFNBQVBBLElBQU8sQ0FBQ3pCLEVBQUQsRUFBSzBCLEtBQUw7U0FBZTtXQUNqQzNCLGFBQWE7YUFBUTJCLE1BQU1DLElBQU4sQ0FBUjtLQUFiLEVBQWtDM0IsR0FBR2MsR0FBSCxDQUFsQyxDQURpQztHQUFmO0NBQWI7Ozs7QUFLUCxBQUFPLElBQU1jLFFBQVEsU0FBUkEsS0FBUTtxQ0FBSUMsR0FBSjtPQUFBOzs7U0FBWTtXQUFPdEMsT0FBT3NDLElBQUkxQixHQUFKLENBQVE7YUFBTUgsR0FBR2MsR0FBSCxDQUFOO0tBQVIsQ0FBUCxDQUFQO0dBQVo7Q0FBZDs7QUNKUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxTEEsSUFBTWdCLFlBQVlMLEtBQUtELGlCQUFpQixXQUFqQixDQUFMLEVBQW9DTyxVQUFwQyxDQUFsQjtBQUNBLElBQU1DLGNBQWNQLEtBQUtELGlCQUFpQixhQUFqQixDQUFMLEVBQXNDTyxVQUF0QyxDQUFwQjtBQUNBLElBQU1FLGVBQWVSLEtBQUtELGlCQUFpQixjQUFqQixDQUFMLEVBQXVDTyxVQUF2QyxDQUFyQjtBQUNBLElBQU1HLGFBQWFULEtBQUtELGlCQUFpQixZQUFqQixDQUFMLEVBQXFDTyxVQUFyQyxDQUFuQjtBQUNBLElBQU1JLFNBQVNQLE1BQU1FLFNBQU4sRUFBaUJHLFlBQWpCLEVBQStCQyxVQUEvQixFQUEyQ0YsV0FBM0MsQ0FBZjs7QUFFQSxJQUFNSSxjQUFjWCxLQUFLRCxpQkFBaUIsYUFBakIsQ0FBTCxFQUFzQ08sVUFBdEMsQ0FBcEI7QUFDQSxJQUFNTSxnQkFBZ0JaLEtBQUtELGlCQUFpQixlQUFqQixDQUFMLEVBQXdDTyxVQUF4QyxDQUF0QjtBQUNBLElBQU1PLGlCQUFpQmIsS0FBS0QsaUJBQWlCLGdCQUFqQixDQUFMLEVBQXlDTyxVQUF6QyxDQUF2QjtBQUNBLElBQU1RLGVBQWVkLEtBQUtELGlCQUFpQixjQUFqQixDQUFMLEVBQXVDTyxVQUF2QyxDQUFyQjtBQUNBLElBQU1TLFdBQVdaLE1BQ2ZRLFdBRGUsRUFFZkUsY0FGZSxFQUdmQyxZQUhlLEVBSWZGLGFBSmUsQ0FBakI7O0FBT0EsSUFBTUksY0FBY2hCLEtBQUtELGlCQUFpQixhQUFqQixDQUFMLEVBQXNDTyxVQUF0QyxDQUFwQjtBQUNBLElBQU1XLGdCQUFnQmpCLEtBQUtELGlCQUFpQixlQUFqQixDQUFMLEVBQXdDTyxVQUF4QyxDQUF0QjtBQUNBLElBQU1ZLGlCQUFpQmxCLEtBQUtELGlCQUFpQixnQkFBakIsQ0FBTCxFQUF5Q08sVUFBekMsQ0FBdkI7QUFDQSxJQUFNYSxlQUFlbkIsS0FBS0QsaUJBQWlCLGNBQWpCLENBQUwsRUFBdUNPLFVBQXZDLENBQXJCO0FBQ0EsSUFBTWMsV0FBV2pCLE1BQ2ZhLFdBRGUsRUFFZkUsY0FGZSxFQUdmQyxZQUhlLEVBSWZGLGFBSmUsQ0FBakI7O0FBT0EsSUFBTUksY0FBY3JCLEtBQUtELGlCQUFpQixhQUFqQixDQUFMLEVBQXNDTyxVQUF0QyxDQUFwQjtBQUNBLElBQU1nQixnQkFBZ0J0QixLQUFLRCxpQkFBaUIsZUFBakIsQ0FBTCxFQUF3Q08sVUFBeEMsQ0FBdEI7QUFDQSxJQUFNaUIsaUJBQWlCdkIsS0FBS0QsaUJBQWlCLGdCQUFqQixDQUFMLEVBQXlDTyxVQUF6QyxDQUF2QjtBQUNBLElBQU1rQixlQUFleEIsS0FBS0QsaUJBQWlCLGNBQWpCLENBQUwsRUFBdUNPLFVBQXZDLENBQXJCO0FBQ0EsSUFBTW1CLFdBQVd0QixNQUNma0IsV0FEZSxFQUVmRSxjQUZlLEVBR2ZDLFlBSGUsRUFJZkYsYUFKZSxDQUFqQjs7QUFPQSxJQUFNSSxXQUFXMUIsS0FBS0QsaUJBQWlCLFVBQWpCLENBQUwsRUFBbUNPLFVBQW5DLENBQWpCO0FBQ0EsSUFBTXFCLFdBQVczQixLQUFLRCxpQkFBaUIsVUFBakIsQ0FBTCxFQUFtQ08sVUFBbkMsQ0FBakI7QUFDQSxJQUFNc0IsVUFBVXpCLE1BQU11QixRQUFOLEVBQWdCQyxRQUFoQixDQUFoQjs7QUFFQSxJQUFNRSxhQUFhN0IsS0FBS0QsaUJBQWlCLFlBQWpCLENBQUwsRUFBcUNPLFVBQXJDLENBQW5CO0FBQ0EsSUFBTXdCLGFBQWE5QixLQUFLRCxpQkFBaUIsWUFBakIsQ0FBTCxFQUFxQ08sVUFBckMsQ0FBbkI7QUFDQSxJQUFNeUIsWUFBWTVCLE1BQU0wQixVQUFOLEVBQWtCQyxVQUFsQixDQUFsQjs7QUFFQSxJQUFNRSxhQUFhaEMsS0FBS0QsaUJBQWlCLFlBQWpCLENBQUwsRUFBcUNPLFVBQXJDLENBQW5CO0FBQ0EsSUFBTTJCLGFBQWFqQyxLQUFLRCxpQkFBaUIsWUFBakIsQ0FBTCxFQUFxQ08sVUFBckMsQ0FBbkI7QUFDQSxJQUFNNEIsWUFBWS9CLE1BQU02QixVQUFOLEVBQWtCQyxVQUFsQixDQUFsQjs7QUFFQSxJQUFNRSxhQUFhbkMsS0FBS0QsaUJBQWlCLFlBQWpCLENBQUwsRUFBcUNPLFVBQXJDLENBQW5CO0FBQ0EsSUFBTThCLGFBQWFwQyxLQUFLRCxpQkFBaUIsWUFBakIsQ0FBTCxFQUFxQ08sVUFBckMsQ0FBbkI7QUFDQSxJQUFNK0IsWUFBWWxDLE1BQU1nQyxVQUFOLEVBQWtCQyxVQUFsQixDQUFsQjs7Ozs7Ozs7QUFRQSxJQUFNRSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsR0FBRDtTQUFpQmpFLGFBQWE7Z0JBQVdpRSxHQUFYLEdBQWlCckMsSUFBakI7R0FBYixDQUFqQjtDQUFmO0FBQ0EsSUFBTXNDLFVBQVUsU0FBVkEsT0FBVSxRQUFTO1VBQ2ZDLEtBQVI7U0FDTyxNQUFMO2FBQ1MvRSxjQUFjLGFBQWQsRUFBNkIsY0FBN0IsQ0FBUDtTQUNHLFlBQUw7YUFDU0EsY0FBYyxhQUFkLEVBQTZCLGlCQUE3QixDQUFQO1NBQ0csYUFBTDthQUNTQSxjQUFjLG9CQUFkLENBQVA7U0FDRyxLQUFMO2FBQ1NBLGNBQWMsYUFBZCxDQUFQOzs7YUFHT0EsY0FBYyxjQUFkLENBQVA7O0NBWk47QUFlQSxJQUFNZ0YsU0FBU2hELE1BQU0sS0FBTixDQUFmOztBQUVBLElBQU1pRCxpQkFBaUIsU0FBakJBLGNBQWlCO1NBQU1DLElBQUksQ0FBSixTQUFZL0MsS0FBS0MsR0FBTCxDQUFTOEMsQ0FBVCxDQUFaLEdBQTRCQSxFQUFFQyxRQUFGLEVBQWxDO0NBQXZCOzs7Ozs7OztBQVFBLElBQU1DLFdBQVc7TUFDWCxtQkFBUztRQUNQLENBQUNMLEtBQUwsRUFBWTthQUNIakYsVUFBUDs7V0FFS2MsYUFBYTthQUFLUCxPQUFPZ0YsQ0FBUCxDQUFMO0tBQWIsRUFDTFQsT0FBTyxJQUFQLEVBQ0V4RSxPQUFPLENBQ0wyRSxNQUFNQyxNQUFOLEdBQWVBLE9BQU9ELE1BQU1DLE1BQWIsQ0FBZixHQUFzQ2xGLFVBRGpDLEVBRUwsT0FBT2lGLE1BQU1ELE9BQWIsS0FBeUIsV0FBekIsR0FDSUEsUUFBUUMsTUFBTUQsT0FBZCxDQURKLEdBRUloRixVQUpDLENBQVAsQ0FERixDQURLLENBQVA7R0FMYTtNQWdCWCxtQkFBUztRQUNQLENBQUNpRixLQUFMLEVBQVk7YUFDSGpGLFVBQVA7O1dBRUtjLGFBQWE7YUFBS1AsT0FBT2dGLENBQVAsQ0FBTDtLQUFiLEVBQ0xULE9BQU8sSUFBUCxFQUNFeEUsT0FBTyxDQUNMMkUsTUFBTUMsTUFBTixHQUFlQSxPQUFPRCxNQUFNQyxNQUFiLENBQWYsR0FBc0NsRixVQURqQyxFQUVMLE9BQU9pRixNQUFNRCxPQUFiLEtBQXlCLFdBQXpCLEdBQ0lBLFFBQVFDLE1BQU1ELE9BQWQsQ0FESixHQUVJaEYsVUFKQyxDQUFQLENBREYsQ0FESyxDQUFQO0dBcEJhO01BK0JYLG1CQUFTO1FBQ1AsQ0FBQ2lGLEtBQUwsRUFBWTthQUNIakYsVUFBUDs7V0FFS2MsYUFBYTthQUFLUCxPQUFPZ0YsQ0FBUCxDQUFMO0tBQWIsRUFDTFQsT0FBTyxJQUFQLEVBQ0V4RSxPQUFPLENBQ0wyRSxNQUFNQyxNQUFOLEdBQWVBLE9BQU9ELE1BQU1DLE1BQWIsQ0FBZixHQUFzQ2xGLFVBRGpDLEVBRUwsT0FBT2lGLE1BQU1ELE9BQWIsS0FBeUIsV0FBekIsR0FDSUEsUUFBUUMsTUFBTUQsT0FBZCxDQURKLEdBRUloRixVQUpDLENBQVAsQ0FERixDQURLLENBQVA7R0FuQ2E7TUE4Q1gsbUJBQVM7UUFDUCxDQUFDaUYsS0FBTCxFQUFZO2FBQ0hqRixVQUFQOztXQUVLYyxhQUFhO2FBQUtQLE9BQU9nRixDQUFQLENBQUw7S0FBYixFQUNMVCxPQUFPLElBQVAsRUFDRXhFLE9BQU8sQ0FDTDJFLE1BQU1DLE1BQU4sR0FBZUEsT0FBT0QsTUFBTUMsTUFBYixDQUFmLEdBQXNDbEYsVUFEakMsRUFFTCxPQUFPaUYsTUFBTUQsT0FBYixLQUF5QixXQUF6QixHQUNJQSxRQUFRQyxNQUFNRCxPQUFkLENBREosR0FFSWhGLFVBSkMsQ0FBUCxDQURGLENBREssQ0FBUDtHQWxEYTs7V0E4RE44QixRQUFRO1VBQ1R2QixPQUFPaUYsYUFERTtVQUVUakYsT0FBT2tGLGFBRkU7V0FHUmxGLE9BQU9tRixjQUhDO2lCQUlGbkYsT0FBT29GO0dBSmIsQ0E5RE07VUFvRVBuRCxLQUFLTixNQUFNLE9BQU4sQ0FBTCxFQUFxQjNCLE1BQXJCLENBcEVPO2FBcUVKdUIsUUFBUTtTQUNadkIsT0FBT3FGLGNBREs7WUFFVHJGLE9BQU9zRjtHQUZOLENBckVJOzthQTBFSi9ELFFBQVE7VUFDWHZCLE9BQU91RixhQURJO1VBRVh2RixPQUFPd0YsYUFGSTtXQUdWeEYsT0FBT3lGLGNBSEc7aUJBSUp6RixPQUFPMEY7R0FKWCxDQTFFSTtZQWdGTHpELEtBQUtOLE1BQU0sT0FBTixDQUFMLEVBQXFCM0IsTUFBckIsQ0FoRks7ZUFpRkZ1QixRQUFRO1NBQ2R2QixPQUFPMkYsY0FETztZQUVYM0YsT0FBTzRGO0dBRkosQ0FqRkU7O2FBc0ZKckUsUUFBUTtVQUNYdkIsT0FBTzZGLGFBREk7VUFFWDdGLE9BQU84RixhQUZJO1dBR1Y5RixPQUFPK0YsY0FIRztpQkFJSi9GLE9BQU9nRztHQUpYLENBdEZJO1lBNEZML0QsS0FBS04sTUFBTSxPQUFOLENBQUwsRUFBcUIzQixNQUFyQixDQTVGSztlQTZGRnVCLFFBQVE7U0FDZHZCLE9BQU9pRyxjQURPO1lBRVhqRyxPQUFPa0c7R0FGSixDQTdGRTs7YUFrR0ozRSxRQUFRO1VBQ1h2QixPQUFPbUcsYUFESTtVQUVYbkcsT0FBT29HLGFBRkk7V0FHVnBHLE9BQU9xRyxjQUhHO2lCQUlKckcsT0FBT3NHO0dBSlgsQ0FsR0k7WUF3R0xyRSxLQUFLTixNQUFNLE9BQU4sQ0FBTCxFQUFxQjNCLE1BQXJCLENBeEdLO2VBeUdGdUIsUUFBUTtTQUNkdkIsT0FBT3VHLGNBRE87WUFFWHZHLE9BQU93RztHQUZKLENBekdFOztnQkE4R0RqRixRQUFRO1dBQ2JrRixPQUFPQyxZQURNO1NBRWZELE9BQU9FLFVBRlE7WUFHWkYsT0FBT0csYUFISzthQUlYSCxPQUFPSSxjQUpJO1lBS1pKLE9BQU9LOztHQUxILENBOUdDO2NBc0hIdkYsUUFBUTtXQUNYa0YsT0FBT00sVUFESTtTQUViTixPQUFPTyxRQUZNO1lBR1ZQLE9BQU9RLFdBSEc7Y0FJUlIsT0FBT1M7O0dBSlAsQ0F0SEc7YUE2SEozRixRQUFRO1dBQ1ZrRixPQUFPVSxTQURHO1NBRVpWLE9BQU9XLE9BRks7WUFHVFgsT0FBT1ksVUFIRTtjQUlQWixPQUFPYSxZQUpBO2FBS1JiLE9BQU9jOztHQUxQLENBN0hJO1VBcUlQbEcsT0FBT29GLE9BQU9lLE9BQWQsQ0FySU87U0FzSVJqRyxRQUFRO1VBQ1BrRyxPQUFPQyxNQURBO2NBRUhELE9BQU9FLFVBRko7VUFHUEYsT0FBT0csTUFIQTtVQUlQSCxPQUFPSSxNQUpBO1NBS1JKLE9BQU9LLEtBTEM7V0FNTkwsT0FBT00sT0FORDtlQU9GTixPQUFPTyxXQVBMO1dBUU5QLE9BQU9RLE9BUkQ7WUFTTFIsT0FBT1MsUUFURjtXQVVOVCxPQUFPVSxPQVZEO1VBV1BWLE9BQU9XLE1BWEE7Y0FZSFgsT0FBT1ksVUFaSjtZQWFMWixPQUFPYSxRQWJGO1lBY0xiLE9BQU9jLFFBZEY7Y0FlSGQsT0FBT2UsVUFmSjtZQWdCTGYsT0FBT2dCLFFBaEJGO2dCQWlCRGhCLE9BQU9pQixZQWpCTjtlQWtCRmpCLE9BQU9rQixXQWxCTDtjQW1CSGxCLE9BQU9tQjs7R0FuQlosQ0F0SVE7T0E0SlZ2SCxPQUFPb0YsT0FBT29DLEdBQWQsQ0E1SlU7UUE2SlR0SCxRQUFRO1VBQ05rRixPQUFPcUMsUUFERDtVQUVOckMsT0FBT3NDOztHQUZULENBN0pTOzs7Ozs7Ozs7OztJQWtLUDtXQUFVbEosZ0JBQWdCLEVBQUVtSixjQUFGLEVBQWhCLENBQVY7R0FBUixDQWxLZTtrQkFtS0N6SCxRQUFRO1NBQ2pCa0YsT0FBT3dDLFVBRFU7WUFFZHhDLE9BQU95QyxhQUZPO2FBR2J6QyxPQUFPMEMsY0FITTtZQUlkMUMsT0FBTzJDOztHQUpELENBbktEO1FBMEtUL0gsT0FBT29GLE9BQU80QyxLQUFkLENBMUtTO29CQTJLRyxpQ0FBUztRQUNyQkMsS0FBSzdKLFVBQVQ7UUFDSThKLEtBQUs5SixVQUFUO1FBQ0krSixLQUFLL0osVUFBVDtRQUNJZ0ssS0FBS2hLLFVBQVQ7bUJBQ2VpRixLQUFmLHlDQUFlQSxLQUFmO1dBQ08sUUFBTDtlQUNTL0UsY0FBYytKLG1CQUFxQjlFLGVBQWVGLEtBQWYsQ0FBckIsQ0FBZCxDQUFQO1dBQ0csUUFBTDtZQUNNQSxNQUFNaUYsR0FBVixFQUFlO2VBQ1JoSyxjQUNIK0osb0JBQXNCOUUsZUFBZUYsTUFBTWlGLEdBQXJCLENBQXRCLENBREcsQ0FBTDs7O1lBS0VqRixNQUFNa0YsTUFBVixFQUFrQjtlQUNYakssY0FDSCtKLG9CQUFzQjlFLGVBQWVGLE1BQU1rRixNQUFyQixDQUF0QixDQURHLENBQUw7OztZQUtFbEYsTUFBTW1GLElBQVYsRUFBZ0I7ZUFDVGxLLGNBQ0grRSxNQUFNbUYsSUFBTixLQUFlLE1BQWYsR0FDSUgsYUFBaUJJLE1BRHJCLEdBRUlKLG9CQUFzQjlFLGVBQWVGLE1BQU1tRixJQUFyQixDQUF0QixDQUhELENBQUw7OztZQU9FbkYsTUFBTXFGLEtBQVYsRUFBaUI7ZUFDVnBLLGNBQ0grRSxNQUFNcUYsS0FBTixLQUFnQixNQUFoQixHQUNJTCxhQUFpQk0sTUFEckIsR0FFSU4sb0JBQXNCOUUsZUFBZUYsTUFBTXFGLEtBQXJCLENBQXRCLENBSEQsQ0FBTDs7ZUFNS2hLLE9BQU8sQ0FBQ3VKLEVBQUQsRUFBS0MsRUFBTCxFQUFTQyxFQUFULEVBQWFDLEVBQWIsQ0FBUCxDQUFQOztlQUVPaEssVUFBUDs7R0FqTlM7Z0JBQUE7c0JBQUE7MEJBQUE7NEJBQUE7d0JBQUE7b0JBQUE7MEJBQUE7OEJBQUE7Z0NBQUE7NEJBQUE7b0JBQUE7MEJBQUE7OEJBQUE7Z0NBQUE7NEJBQUE7b0JBQUE7MEJBQUE7OEJBQUE7Z0NBQUE7NEJBQUE7Ozs7Ozs7Ozs7O0lBd09KO1dBQWFJLGdCQUFnQixFQUFFb0ssb0JBQUYsRUFBaEIsQ0FBYjtHQUFYLENBeE9lOzs7Ozs7Ozs7OztJQXlPTDtXQUFZcEssZ0JBQWdCLEVBQUVxSyxrQkFBRixFQUFoQixDQUFaO0dBQVYsQ0F6T2U7Ozs7Ozs7Ozs7O0lBME9KO1dBQWFySyxnQkFBZ0IsRUFBRXNLLG9CQUFGLEVBQWhCLENBQWI7R0FBWCxDQTFPZTs7Ozs7Ozs7Ozs7SUEyT0w7V0FBWXRLLGdCQUFnQixFQUFFdUssa0JBQUYsRUFBaEIsQ0FBWjtHQUFWLENBM09lO1lBNE9MN0ksUUFBUTtZQUNSa0YsT0FBTzRELGNBREM7WUFFUjVELE9BQU82RCxjQUZDO1VBR1Y3RCxPQUFPOEQsWUFIRzthQUlQOUQsT0FBTytELGVBSkE7YUFLUC9ELE9BQU9nRTs7R0FMUixDQTVPSztxQkFvUEksa0NBQVM7bUJBQ1gvRixLQUFmLHlDQUFlQSxLQUFmO1dBQ08sUUFBTDtlQUNTL0UsY0FBYytKLG1CQUFxQmhGLEtBQXJCLENBQWQsQ0FBUDtXQUNHLFFBQUw7ZUFDUzNFLE9BQU8sQ0FDWjJFLE1BQU1HLENBQU4sR0FDSWxGLGNBQWMrSixvQkFBc0JoRixNQUFNRyxDQUE1QixDQUFkLENBREosR0FFSXBGLFVBSFEsRUFJWmlGLE1BQU1nRyxDQUFOLEdBQ0kvSyxjQUFjK0osb0JBQXNCaEYsTUFBTWdHLENBQTVCLENBQWQsQ0FESixHQUVJakwsVUFOUSxDQUFQLENBQVA7O2VBU09BLFVBQVA7O0dBbFFTO2tCQUFBO29CQUFBO29CQUFBO3NCQUFBO3dCQUFBO3dCQUFBO3NCQUFBO3dCQUFBO3dCQUFBO3NCQUFBO3dCQUFBO3dCQUFBO1lBaVJMOEIsUUFBUTtjQUNOa0YsT0FBT2tFLFFBREQ7Y0FFTmxFLE9BQU9tRSxRQUZEO1dBR1RuRSxPQUFPb0U7O0dBSE4sQ0FqUks7U0F1UlJ4SixPQUFPb0YsT0FBT3FFLE1BQWQsQ0F2UlE7U0F3UlJ2SixRQUFRO1lBQ0x3SixRQUFRQyxNQURIO1VBRVBELFFBQVFFLElBRkQ7YUFHSkYsUUFBUUcsT0FISjttQkFJRUgsUUFBUUksYUFKVjtpQkFLQUosUUFBUUssV0FMUjtrQkFNQ0wsUUFBUU0sWUFOVDtnQkFPRE4sUUFBUU87O0dBUGYsQ0F4UlE7T0FrU1ZqSyxPQUFPb0YsT0FBTzhFLElBQWQsQ0FsU1U7Ozs7Ozs7Ozs7O0lBbVNSO1dBQVMxTCxnQkFBZ0IsRUFBRTJMLFlBQUYsRUFBaEIsQ0FBVDtHQUFQLENBblNlO1FBb1NUbkssT0FBT29GLE9BQU9nRixRQUFkLENBcFNTOzZCQXFTWTtXQUN6Qi9HLFNBQVNBLE1BQU1nSCxPQUFmLEdBQXlCN0wsZ0JBQWdCNkUsTUFBTWdILE9BQXRCLENBQXpCLEdBQTBEak0sVUFEakM7O0NBclM3Qjs7Ozs7Ozs7QUErU0EsSUFBTWtNLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxHQUFELEVBQU1DLEdBQU47U0FBY0EsSUFBSUMsT0FBSixDQUFZRixHQUFaLEtBQW9CLENBQWxDO0NBQWpCO0FBQ0EsSUFBTUcsT0FBTyxTQUFQQSxJQUFPLENBQUM3SyxJQUFELEVBQU84SyxHQUFQO1NBQ1gvSyxPQUFPQyxJQUFQLENBQVk4SyxHQUFaLEVBQWlCL0wsTUFBakIsQ0FBd0IsVUFBQ2dNLEdBQUQsRUFBTUMsQ0FBTixFQUFZO1FBQzlCUCxTQUFTTyxDQUFULEVBQVloTCxJQUFaLENBQUosRUFBdUI7YUFDZCtLLEdBQVA7O3dCQUdHQSxHQURMLHFCQUVHQyxDQUZILEVBRU9GLElBQUlFLENBQUosQ0FGUDtHQUpGLEVBUUcsRUFSSCxDQURXO0NBQWI7O0FBV0EsQUFBZSxTQUFTQyxHQUFULE9BQStDO01BQWhDQyxRQUFnQyxRQUFoQ0EsUUFBZ0M7TUFBbkJ2TCxLQUFtQjs7Ozs7Ozs7OztNQVN4RHdMLFlBQVksQ0FBQyxTQUFELEVBQVksV0FBWixFQUF5QixPQUF6QixDQUFoQjs7OztNQUlJQyxJQUFJM00sY0FBY0ssT0FBT3VNLEdBQXJCLENBQVI7Ozs7Ozs7Ozs7OztPQVlLLElBQU1DLElBQVgsSUFBbUIzTCxLQUFuQixFQUEwQjtRQUNwQkksT0FBT08sU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDcUQsUUFBckMsRUFBK0N5SCxJQUEvQyxDQUFKLEVBQTBEO1VBQ2xEaE0sS0FBS3VFLFNBQVN5SCxJQUFULENBQVg7VUFDTTlILFFBQVE3RCxNQUFNMkwsSUFBTixDQUFkO2tCQUNZSCxVQUFVdE0sTUFBVixDQUFpQnlNLElBQWpCLENBQVo7VUFDSXpNLE9BQU8sQ0FBQ3VNLENBQUQsRUFBSTlMLEdBQUdrRSxLQUFILENBQUosQ0FBUCxDQUFKOzs7OztTQU1GK0g7O2lCQUFTVixLQUFLTSxTQUFMLEVBQWdCeEwsS0FBaEIsQ0FBVCxFQUFxQ0QsUUFBUTBMLENBQVIsQ0FBckM7O0dBREY7Ozs7Ozs7Ozs7O0FBZUYsSUFBTUksaUJBQWlCQyxVQUFVQyxLQUFWLENBQWdCLENBQ3JDLENBRHFDLEVBRXJDLENBRnFDLEVBR3JDLENBSHFDLEVBSXJDLENBSnFDLEVBS3JDLENBTHFDLEVBTXJDLENBTnFDLEVBT3JDLENBUHFDLEVBUXJDLENBUnFDLEVBU3JDLENBVHFDLEVBVXJDLENBVnFDLEVBV3JDLEVBWHFDLEVBWXJDLEVBWnFDLEVBYXJDLEVBYnFDLENBQWhCLENBQXZCOztBQWdCQSxJQUFNQyxpQkFBaUJGLFVBQVVDLEtBQVYsQ0FBZ0IsQ0FDckMsQ0FBQyxFQURvQyxFQUVyQyxDQUFDLEVBRm9DLEVBR3JDLENBQUMsRUFIb0MsRUFJckMsQ0FBQyxDQUpvQyxFQUtyQyxDQUFDLENBTG9DLEVBTXJDLENBQUMsQ0FOb0MsRUFPckMsQ0FBQyxDQVBvQyxFQVFyQyxDQUFDLENBUm9DLEVBU3JDLENBQUMsQ0FUb0MsRUFVckMsQ0FBQyxDQVZvQyxFQVdyQyxDQUFDLENBWG9DLEVBWXJDLENBQUMsQ0Fab0MsRUFhckMsQ0FicUMsRUFjckMsQ0FkcUMsRUFlckMsQ0FmcUMsRUFnQnJDLENBaEJxQyxFQWlCckMsQ0FqQnFDLEVBa0JyQyxDQWxCcUMsRUFtQnJDLENBbkJxQyxFQW9CckMsQ0FwQnFDLEVBcUJyQyxDQXJCcUMsRUFzQnJDLENBdEJxQyxFQXVCckMsRUF2QnFDLEVBd0JyQyxFQXhCcUMsRUF5QnJDLEVBekJxQyxDQUFoQixDQUF2Qjs7QUE0QkEsSUFBTUUsa0JBQWtCSCxVQUFVQyxLQUFWLENBQWdCLENBQ3RDLENBRHNDLEVBRXRDLENBRnNDLEVBR3RDLENBSHNDLEVBSXRDLENBSnNDLEVBS3RDLENBTHNDLEVBTXRDLENBTnNDLEVBT3RDLENBUHNDLEVBUXRDLENBUnNDLEVBU3RDLENBVHNDLEVBVXRDLENBVnNDLEVBV3RDLEVBWHNDLEVBWXRDLEVBWnNDLEVBYXRDLEVBYnNDLENBQWhCLENBQXhCOztBQWdCQVQsSUFBSVksU0FBSixHQUFnQjtZQUNKSixVQUFVSyxJQUROOzZCQUVhTCxVQUFVTSxLQUFWLENBQWdCO2FBQ2hDTixVQUFVTztHQURNLENBRmI7O01BTVZQLFVBQVVNLEtBQVYsQ0FBZ0I7YUFDVE4sVUFBVVEsU0FBVixDQUFvQixDQUMzQlIsVUFBVVMsSUFEaUIsRUFFM0JULFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsWUFBVCxFQUF1QixhQUF2QixDQUFoQixDQUYyQixDQUFwQixDQURTO1lBS1ZELFVBQVVVO0dBTGhCLENBTlU7TUFhVlYsVUFBVU0sS0FBVixDQUFnQjthQUNUTixVQUFVUSxTQUFWLENBQW9CLENBQzNCUixVQUFVUyxJQURpQixFQUUzQlQsVUFBVUMsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxZQUFULEVBQXVCLGFBQXZCLENBQWhCLENBRjJCLENBQXBCLENBRFM7WUFLVkQsVUFBVVU7R0FMaEIsQ0FiVTtNQW9CVlYsVUFBVU0sS0FBVixDQUFnQjthQUNUTixVQUFVUSxTQUFWLENBQW9CLENBQzNCUixVQUFVUyxJQURpQixFQUUzQlQsVUFBVUMsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxZQUFULEVBQXVCLGFBQXZCLENBQWhCLENBRjJCLENBQXBCLENBRFM7WUFLVkQsVUFBVVU7R0FMaEIsQ0FwQlU7TUEyQlZWLFVBQVVNLEtBQVYsQ0FBZ0I7YUFDVE4sVUFBVVEsU0FBVixDQUFvQixDQUMzQlIsVUFBVVMsSUFEaUIsRUFFM0JULFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsWUFBVCxFQUF1QixhQUF2QixDQUFoQixDQUYyQixDQUFwQixDQURTO1lBS1ZELFVBQVVVO0dBTGhCLENBM0JVO29CQWtDSVYsVUFBVVEsU0FBVixDQUFvQixDQUNwQ1IsVUFBVVUsTUFEMEIsRUFFcENWLFVBQVVXLEtBQVYsQ0FBZ0I7U0FDVFgsVUFBVVUsTUFERDtZQUVOVixVQUFVVSxNQUZKO1VBR1JWLFVBQVVRLFNBQVYsQ0FBb0IsQ0FBQ1IsVUFBVVUsTUFBWCxFQUFtQlYsVUFBVUMsS0FBVixDQUFnQixDQUFDLE1BQUQsQ0FBaEIsQ0FBbkIsQ0FBcEIsQ0FIUTtXQUlQRCxVQUFVUSxTQUFWLENBQW9CLENBQUNSLFVBQVVVLE1BQVgsRUFBbUJWLFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELENBQWhCLENBQW5CLENBQXBCO0dBSlQsQ0FGb0MsQ0FBcEIsQ0FsQ0o7cUJBMkNLRCxVQUFVUSxTQUFWLENBQW9CLENBQ3JDUixVQUFVVSxNQUQyQixFQUVyQ1YsVUFBVVcsS0FBVixDQUFnQjtPQUNYWCxVQUFVVSxNQURDO09BRVhWLFVBQVVVO0dBRmYsQ0FGcUMsQ0FBcEIsQ0EzQ0w7O1dBbURMVixVQUFVQyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsT0FBakIsRUFBMEIsYUFBMUIsQ0FBaEIsQ0FuREs7YUFvREhELFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxLQUFELEVBQVEsUUFBUixDQUFoQixDQXBERztVQXFETkYsY0FyRE07O2FBdURIQyxVQUFVQyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsT0FBakIsRUFBMEIsYUFBMUIsQ0FBaEIsQ0F2REc7ZUF3RERELFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxLQUFELEVBQVEsUUFBUixDQUFoQixDQXhEQztZQXlESkYsY0F6REk7O2FBMkRIQyxVQUFVQyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsT0FBakIsRUFBMEIsYUFBMUIsQ0FBaEIsQ0EzREc7ZUE0RERELFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxLQUFELEVBQVEsUUFBUixDQUFoQixDQTVEQztZQTZESkYsY0E3REk7O2FBK0RIQyxVQUFVQyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsT0FBakIsRUFBMEIsYUFBMUIsQ0FBaEIsQ0EvREc7ZUFnRURELFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxLQUFELEVBQVEsUUFBUixDQUFoQixDQWhFQztZQWlFSkYsY0FqRUk7O2dCQW1FQUMsVUFBVUMsS0FBVixDQUFnQixDQUM1QixPQUQ0QixFQUU1QixLQUY0QixFQUc1QixRQUg0QixFQUk1QixTQUo0QixFQUs1QixRQUw0QixFQU01QixTQU40QixDQUFoQixDQW5FQTtjQTJFRkQsVUFBVUMsS0FBVixDQUFnQixDQUMxQixPQUQwQixFQUUxQixLQUYwQixFQUcxQixRQUgwQixFQUkxQixVQUowQixFQUsxQixTQUwwQixDQUFoQixDQTNFRTthQWtGSEQsVUFBVUMsS0FBVixDQUFnQixDQUN6QixNQUR5QixFQUV6QixPQUZ5QixFQUd6QixLQUh5QixFQUl6QixRQUp5QixFQUt6QixVQUx5QixFQU16QixTQU55QixDQUFoQixDQWxGRztVQTBGTkQsVUFBVVMsSUExRko7U0EyRlBULFVBQVVDLEtBQVYsQ0FBZ0IsQ0FDckIsTUFEcUIsRUFFckIsVUFGcUIsRUFHckIsVUFIcUIsRUFJckIsVUFKcUIsRUFLckIsTUFMcUIsRUFNckIsT0FOcUIsRUFPckIsV0FQcUIsRUFRckIsV0FScUIsRUFTckIsUUFUcUIsRUFVckIsVUFWcUIsRUFXckIsTUFYcUIsRUFZckIsT0FacUIsRUFhckIsUUFicUIsRUFjckIsUUFkcUIsRUFlckIsTUFmcUIsRUFnQnJCLFFBaEJxQixFQWlCckIsS0FqQnFCLEVBa0JyQixhQWxCcUIsRUFtQnJCLFlBbkJxQixFQW9CckIsT0FwQnFCLENBQWhCLENBM0ZPO09BaUhURCxVQUFVUyxJQWpIRDtRQWtIUlQsVUFBVUMsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE1BQW5CLENBQWhCLENBbEhRO1FBbUhSRCxVQUFVUyxJQW5IRjtVQW9ITlQsVUFBVVEsU0FBVixDQUFvQixDQUFDUixVQUFVVSxNQUFYLEVBQW1CVixVQUFVWSxNQUE3QixDQUFwQixDQXBITTtrQkFxSEVaLFVBQVVDLEtBQVYsQ0FBZ0IsQ0FDOUIsT0FEOEIsRUFFOUIsS0FGOEIsRUFHOUIsUUFIOEIsRUFJOUIsU0FKOEIsRUFLOUIsUUFMOEIsQ0FBaEIsQ0FySEY7UUE0SFJELFVBQVVTLElBNUhGOztVQThITlAsY0E5SE07YUErSEhBLGNBL0hHO2VBZ0lEQSxjQWhJQztnQkFpSUFBLGNBaklBO2NBa0lGQSxjQWxJRTs7WUFvSUpBLGNBcElJO2VBcUlEQSxjQXJJQztpQkFzSUNBLGNBdElEO2tCQXVJRUEsY0F2SUY7Z0JBd0lBQSxjQXhJQTs7WUEwSUpBLGNBMUlJO2VBMklEQSxjQTNJQztpQkE0SUNBLGNBNUlEO2tCQTZJRUEsY0E3SUY7Z0JBOElBQSxjQTlJQTs7WUFnSkpBLGNBaEpJO2VBaUpEQSxjQWpKQztpQkFrSkNBLGNBbEpEO2tCQW1KRUEsY0FuSkY7Z0JBb0pBQSxjQXBKQTs7YUFzSkhGLFVBQVVRLFNBQVYsQ0FBb0IsQ0FBQ1IsVUFBVVUsTUFBWCxFQUFtQlYsVUFBVVksTUFBN0IsQ0FBcEIsQ0F0Skc7WUF1SkpaLFVBQVVRLFNBQVYsQ0FBb0IsQ0FBQ1IsVUFBVVUsTUFBWCxFQUFtQlYsVUFBVVksTUFBN0IsQ0FBcEIsQ0F2Skk7YUF3SkhaLFVBQVVRLFNBQVYsQ0FBb0IsQ0FBQ1IsVUFBVVUsTUFBWCxFQUFtQlYsVUFBVVksTUFBN0IsQ0FBcEIsQ0F4Skc7WUF5SkpaLFVBQVVRLFNBQVYsQ0FBb0IsQ0FBQ1IsVUFBVVUsTUFBWCxFQUFtQlYsVUFBVVksTUFBN0IsQ0FBcEIsQ0F6Skk7O1lBMkpKWixVQUFVQyxLQUFWLENBQWdCLENBQ3hCLFNBRHdCLEVBRXhCLFFBRndCLEVBR3hCLFFBSHdCLEVBSXhCLFNBSndCLEVBS3hCLFNBTHdCLEVBTXhCLE1BTndCLENBQWhCLENBM0pJOztXQW9LTEUsZUFwS0s7WUFxS0pBLGVBcktJO1lBc0tKQSxlQXRLSTs7YUF3S0hBLGVBeEtHO2NBeUtGQSxlQXpLRTtjQTBLRkEsZUExS0U7O2FBNEtIQSxlQTVLRztjQTZLRkEsZUE3S0U7Y0E4S0ZBLGVBOUtFOzthQWdMSEEsZUFoTEc7Y0FpTEZBLGVBakxFO2NBa0xGQSxlQWxMRTs7WUFvTEpILFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxRQUFELEVBQVcsVUFBWCxFQUF1QixVQUF2QixFQUFtQyxPQUFuQyxDQUFoQixDQXBMSTtTQXFMUEQsVUFBVVMsSUFyTEg7U0FzTFBULFVBQVVDLEtBQVYsQ0FBZ0IsQ0FDckIsUUFEcUIsRUFFckIsU0FGcUIsRUFHckIsTUFIcUIsRUFJckIsUUFKcUIsRUFLckIsWUFMcUIsRUFNckIsZUFOcUIsRUFPckIsYUFQcUIsRUFRckIsY0FScUIsQ0FBaEIsQ0F0TE87T0FnTVRELFVBQVVTLElBaE1EO1NBaU1QVCxVQUFVUSxTQUFWLENBQW9CLENBQUNSLFVBQVVVLE1BQVgsRUFBbUJWLFVBQVVZLE1BQTdCLENBQXBCLENBak1PO1FBa01SWixVQUFVUztDQWxNbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDanFCQSxZQUFlO1VBQUE7Z0JBRUNJLFNBRkQ7YUFHRkMsTUFIRTtnQkFJQ0MsU0FKRDswQkFLV0Msa0JBTFg7Z0JBTUNDLFNBTkQ7bUJBT0lDLFlBUEo7Y0FRREMsT0FSQztZQUFBO2dCQUFBO2dCQUFBO2NBQUE7a0JBYUdDLFdBYkg7b0JBY0tDLGFBZEw7Y0FBQTtjQUFBO1VBQUE7a0JBQUE7WUFBQTtZQUFBO29CQUFBOzZCQXNCY0MscUJBdEJkO29CQUFBO2dCQXdCQ0MsU0F4QkQ7Y0F5QkRDLE9BekJDO2lCQTBCRUMsVUExQkY7Z0JBQUE7WUFBQTt3QkFBQTtjQUFBO2VBK0JBQyxRQS9CQTtnQkFBQTtjQUFBO2tCQWtDR0MsV0FsQ0g7Y0FBQTtzQkFBQTtZQUFBO29CQUFBO1lBQUE7WUFBQTtZQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBNkNDQyxTQTdDRDtVQUFBO2NBK0NEQyxPQS9DQztzQkFBQTtZQUFBO21CQWtESUMsWUFsREo7Z0JBQUE7Z0JBQUE7Z0JBQUE7a0JBc0RHQyxXQXRESDtnQkFBQTtvQkF3REtDLGFBeERMO1lBQUE7Y0FBQTtjQUFBO2dCQUFBO3FCQTZETUMsY0E3RE47O0NBQWY7O0FDL0JBLElBQU1DLFlBQVk1TixPQUFPQyxJQUFQLENBQVk0TixLQUFaLENBQWxCOztBQUVBLEFBQWUsU0FBU0MsSUFBVCxDQUFjbE8sS0FBZCxFQUE0QjtNQUNqQ21PLGtCQURpQyxHQUMrQm5PLEtBRC9CLENBQ2pDbU8sa0JBRGlDO3FCQUMrQm5PLEtBRC9CLENBQ2JvTyxLQURhO01BQ2JBLEtBRGEsZ0NBQ0wsTUFESztNQUNHQyxJQURILEdBQytCck8sS0FEL0IsQ0FDR3FPLElBREg7TUFDU0MsTUFEVCxHQUMrQnRPLEtBRC9CLENBQ1NzTyxNQURUO29CQUMrQnRPLEtBRC9CLENBQ2lCQyxJQURqQjtNQUNpQkEsSUFEakIsK0JBQ3dCLEVBRHhCOzs7TUFHbkNzTyxLQUFLQyxXQUFXclAsU0FBT2tQLElBQWxCLEVBQXdCekgsT0FBT3dILEtBQVAsQ0FBeEIscUJBQ1JqUCxTQUFPc1AsU0FEQyxFQUNXLENBQUNILE1BRFosRUFBWDs7TUFJTUksT0FBT1QsTUFBTUksSUFBTixDQUFiOztNQUVNTSxhQUFhUix1QkFBdUIsRUFBdkIsR0FBNEIsSUFBNUIsR0FBbUMsSUFBdEQ7O1NBR0V2Qzs7O2lCQUNhMkMsRUFEYjtjQUVVdE8sSUFGVjthQUdTQSxJQUhUO2VBSVUsV0FKVjtxQkFLZTBPLFVBTGY7b0JBTWNSLGtCQU5kO1lBT087Ozs7OztLQVBQOzRCQVVRLEdBQUdPLElBQVQ7R0FYSjs7O0FBZ0JGUixLQUFLRCxLQUFMLEdBQWFELFNBQWI7O0FBRUFFLEtBQUtoQyxTQUFMLEdBQWlCO3NCQUNLSixVQUFVWSxNQUFWLENBQWlCa0MsVUFEdEI7U0FFUjlDLFVBQVVDLEtBQVYsQ0FBZ0IsQ0FDckIsTUFEcUIsRUFFckIsVUFGcUIsRUFHckIsVUFIcUIsRUFJckIsTUFKcUIsRUFLckIsT0FMcUIsRUFNckIsV0FOcUIsRUFPckIsUUFQcUIsRUFRckIsVUFScUIsRUFTckIsTUFUcUIsRUFVckIsT0FWcUIsRUFXckIsUUFYcUIsRUFZckIsUUFacUIsRUFhckIsTUFicUIsRUFjckIsUUFkcUIsRUFlckIsS0FmcUIsRUFnQnJCLFlBaEJxQixFQWlCckIsT0FqQnFCLENBQWhCLENBRlE7UUFxQlRELFVBQVVDLEtBQVYsQ0FBZ0JpQyxTQUFoQixFQUEyQlksVUFyQmxCO1VBc0JQOUMsVUFBVVMsSUF0Qkg7UUF1QlRULFVBQVVRLFNBQVYsQ0FBb0IsQ0FBQ1IsVUFBVVUsTUFBWCxFQUFtQlYsVUFBVVksTUFBN0IsQ0FBcEI7Q0F2QlI7Ozs7QUMxREEsSUFBTW1DLG1CQUFtQixTQUFuQkEsZ0JBQW1CO1NBQU83RyxRQUFRLE9BQVIsSUFBbUJBLFFBQVEsU0FBbEM7Q0FBekI7O0lBZ0JxQjhHOzs7Ozs7Ozs7Ozs7OzttTEFpQ25CQyxhQUFhLFlBQU07VUFDYixNQUFLL08sS0FBTCxDQUFXZ1AsTUFBZixFQUF1QjtjQUNoQmhQLEtBQUwsQ0FBV2dQLE1BQVg7O2FBSUpDLGNBQWMsWUFBTTtVQUNkLE1BQUtqUCxLQUFMLENBQVdrUCxPQUFmLEVBQXdCO2NBQ2pCbFAsS0FBTCxDQUFXa1AsT0FBWDs7Ozs7Ozt3Q0FyQmdCO1VBQ2RMLGlCQUFpQixLQUFLN08sS0FBTCxDQUFXZ0ksR0FBNUIsQ0FBSixFQUFzQzthQUMvQm1ILFNBQUw7Ozs7O3VDQUllQyxXQUFrQjttQkFDZCxLQUFLcFAsS0FEUztVQUMzQmdJLEdBRDJCLFVBQzNCQSxHQUQyQjtVQUN0QnFILEdBRHNCLFVBQ3RCQSxHQURzQjs7VUFFL0JSLGlCQUFpQjdHLEdBQWpCLEtBQXlCb0gsVUFBVUMsR0FBVixLQUFrQkEsR0FBL0MsRUFBb0Q7YUFDN0NGLFNBQUw7Ozs7O2dDQWdCUTtVQUNOLE9BQU9HLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7WUFDM0JDLFFBQVEsSUFBSUQsT0FBT1IsS0FBWCxFQUFkO2NBQ01VLE1BQU4sR0FBZSxLQUFLVCxVQUFwQjtjQUNNVSxPQUFOLEdBQWdCLEtBQUtSLFdBQXJCO2NBQ01JLEdBQU4sR0FBWSxLQUFLclAsS0FBTCxDQUFXcVAsR0FBdkI7Ozs7OzZCQUlLO29CQVdILEtBQUtyUCxLQVhGO1VBRUwwUCxHQUZLLFdBRUxBLEdBRks7VUFHTHRCLEtBSEssV0FHTEEsS0FISztVQUlMN0MsUUFKSyxXQUlMQSxRQUpLO1VBS0x2RCxHQUxLLFdBS0xBLEdBTEs7VUFNTDJILGFBTkssV0FNTEEsYUFOSztVQU9MQyxZQVBLLFdBT0xBLFlBUEs7VUFRTEMsS0FSSyxXQVFMQSxLQVJLO1VBU0xSLEdBVEssV0FTTEEsR0FUSztVQVVMUyxNQVZLLFdBVUxBLE1BVks7OztVQWFEQyxnQkFBZ0JsQixpQkFBaUI3RyxHQUFqQixDQUF0QjtVQUNNZ0ksZUFBZXpFLFdBQ25CSztXQUFBO1VBQUssVUFBUyxVQUFkLEVBQXlCLFNBQXpCLEVBQTZCLFVBQTdCLEVBQWtDLFlBQWxDLEVBQXlDLFdBQXpDLEVBQStDLFVBQVMsUUFBeEQ7O09BRG1CLEdBSWpCLElBSko7O2FBTU9tRSxnQkFDTG5FOzs7d0JBQ2M4RCxHQURkO3FCQUVhdlEsU0FBTzZJLEdBQVAsQ0FGYjtpQkFHUzs2QkFDWW9HLEtBRFo7d0NBRW9CaUIsR0FBekI7V0FMSjtnQkFPTzs7O09BUkYsR0FhTHpEO1dBQUE7O29CQUNXLFVBRFg7cUNBRTZCO3FCQUNoQjsrQkFDVXdDLEtBRFY7NkJBRVd1QixnQkFBZ0JDLFlBQWhCLEdBQStCLEdBQWpEOzs7OztlQUtHRixHQURQO3FCQUVhdlEsU0FBTzhRLEdBRnBCO21CQUdXLEtBQUtoQixXQUhoQjtrQkFJVSxLQUFLRixVQUpmO2lCQUtTYyxLQUxUO2VBTU9SLEdBTlA7a0JBT1VTO1VBaEJaOztPQWJGOzs7O0VBMUUrQkk7O0FBQWRwQixNQUNaNUMsWUFBWTtPQUNaSixVQUFVWSxNQUFWLENBQWlCa0MsVUFETDtZQUVQOUMsVUFBVUssSUFGSDtTQUdWTCxVQUFVWSxNQUhBO09BSVpaLFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixNQUFyQixDQUFoQixDQUpZO2lCQUtGRCxVQUFVVSxNQUFWLENBQWlCb0MsVUFMZjtnQkFNSDlDLFVBQVVVLE1BQVYsQ0FBaUJvQyxVQU5kO1dBT1I5QyxVQUFVcUUsSUFQRjtVQVFUckUsVUFBVXFFLElBUkQ7U0FTVnJFLFVBQVVZLE1BVEE7T0FVWlosVUFBVVksTUFBVixDQUFpQmtDLFVBVkw7VUFXVDlDLFVBQVVZOztBQVpEb0MsTUFlWnNCLGVBQWU7U0FDYixhQURhO09BRWY7Ozs7O0FDekJNLFNBQVNDLElBQVQsQ0FBY3JRLEtBQWQsRUFBNEI7TUFDakN1TCxRQURpQyxHQUMyQnZMLEtBRDNCLENBQ2pDdUwsUUFEaUM7cUJBQzJCdkwsS0FEM0IsQ0FDdkJ5TSxLQUR1QjtNQUN2QkEsS0FEdUIsZ0NBQ2YsUUFEZTtNQUNMOUIsS0FESyxHQUMyQjNLLEtBRDNCLENBQ0wySyxLQURLO01BQ0V4QyxNQURGLEdBQzJCbkksS0FEM0IsQ0FDRW1JLE1BREY7b0JBQzJCbkksS0FEM0IsQ0FDVXNRLElBRFY7TUFDVUEsSUFEViwrQkFDaUIsS0FEakI7O1NBR3ZDMUU7O01BQUssV0FBVzJFLFdBQUdwUixTQUFPa1IsSUFBVixFQUFnQmxSLFNBQU9zTixLQUFQLENBQWhCLENBQWhCLEVBQWdELE9BQU8sRUFBRTlCLFlBQUYsRUFBU3hDLGNBQVQsRUFBdkQ7WUFBQTtZQUVXeUQsdUJBQUssV0FBV3pNLFNBQU9tUixJQUF2QjtHQUhiOzs7QUFRRkQsS0FBS25FLFNBQUwsR0FBaUI7WUFDTEosVUFBVUssSUFETDtVQUVQTCxVQUFVUSxTQUFWLENBQW9CLENBQUNSLFVBQVVVLE1BQVgsRUFBbUJWLFVBQVVZLE1BQTdCLENBQXBCLENBRk87U0FHUlosVUFBVUMsS0FBVixDQUFnQixDQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLFFBQXRCLENBQWhCLENBSFE7U0FJUkQsVUFBVVEsU0FBVixDQUFvQixDQUFDUixVQUFVVSxNQUFYLEVBQW1CVixVQUFVWSxNQUE3QixDQUFwQixDQUpRO1FBS1RaLFVBQVVTO0NBTGxCOzs7O0FDZkEsSUFBTWlFLFNBQVMsU0FBVEEsTUFBUyxDQUFDeFEsS0FBRDtTQUNiNEw7T0FBQTtpQkFBUzVMLEtBQVQsSUFBZ0IsVUFBUyxVQUF6QjtrQkFDRyxHQUFEO2lDQUM2QixFQUFFNkssU0FBUyxFQUFFNEYsZUFBZSxNQUFqQixFQUFYLEVBRDdCO2dCQUVXO01BSGI7O1NBS0U7UUFBSyxVQUFTLFVBQWQsRUFBeUIsU0FBekIsRUFBNkIsVUFBN0IsRUFBa0MsWUFBbEMsRUFBeUMsV0FBekM7WUFDU2xGOztHQVBFO0NBQWY7O0FBWUEsSUFBTW1GLGdCQUFnQixTQUFoQkEsYUFBZ0IsT0FBZ0M7TUFBN0JwUCxJQUE2QixRQUE3QkEsSUFBNkI7O01BQzlDcVAsZUFBZSw0QkFBSXJQLElBQUosR0FBVSxDQUFWLEVBQWFzUCxXQUFiLEVBQXJCO1NBRUVoRjtVQUFBO01BQVEsT0FBTSxNQUFkLEVBQXFCLE9BQU0sUUFBM0I7Ozs7ZUFFVSxNQURSO2lCQUVVLGlCQUZWO2lCQUdVLEtBSFY7NkJBSXNCLGVBSnRCO2VBS1E7Ozs7OztPQUxSOzs7O29CQVNhLE1BRFg7Z0JBRU8sTUFGUDs0QkFHbUIsU0FIbkI7c0JBSWEsUUFKYjtxQkFLYSxDQUNUaUYsV0FBV0MsV0FERixFQUVURCxXQUFXRSxTQUZGLEVBR1RGLFdBQVdHLFlBSEYsRUFJVEgsV0FBV0ksY0FKRixFQUtUOVEsSUFMUyxDQUtKLEdBTEk7Ozs7O0dBZm5CO0NBRkY7O0FBc0NBLElBQU0wUCxRQUFRO01BQ1IsRUFEUTtNQUVSLEVBRlE7TUFHUjtDQUhOOztBQU1BLEFBQWUsU0FBU3FCLE1BQVQsUUFBNEQ7TUFBMUM1UCxJQUEwQyxTQUExQ0EsSUFBMEM7TUFBcENyQixJQUFvQyxTQUFwQ0EsSUFBb0M7TUFBOUJvUCxHQUE4QixTQUE5QkEsR0FBOEI7TUFBekI4QixRQUF5QixTQUF6QkEsUUFBeUI7O01BQ25FeEcsUUFBUTFLLE9BQU80UCxNQUFNNVAsSUFBTixDQUFQLEdBQXFCLE1BQW5DO01BQ01rSSxTQUFTbEksT0FBTzRQLE1BQU01UCxJQUFOLENBQVAsR0FBcUIsRUFBcEM7U0FFRTJMO09BQUE7O2FBQ1EsT0FEUjtpQ0FFNkI7aUJBQ2hCO3FCQUNJOztPQUpqQjthQU9TakIsS0FQVDtjQVFVeEMsTUFSVjtnQkFTVyxVQVRYO2FBVVE7O1VBR0p5RDtVQUFBO1FBQU0sT0FBTSxRQUFaLEVBQXFCLFVBQXJCO29CQUNHLEtBQUQ7YUFDT3RLLElBRFA7ZUFFUSxTQUZSO3VCQUdpQixDQUhqQjtzQkFJZ0IsQ0FKaEI7YUFLTytOOztLQVBWLEdBV0N6RCxjQUFDLGFBQUQsSUFBZSxNQUFNdEssSUFBckIsR0F2Qko7Z0JBMEJJc0s7U0FBQTs7a0JBQ1csVUFEWDtlQUVRLEtBRlI7Z0JBR1MsS0FIVDtrQkFJWSxDQUpaO21CQUthLENBTGI7bUNBTTZCO21CQUNoQjtvQkFDQyxJQUREO21CQUVBOzs7OztXQUlYOztpQkFDUSxPQURSO2lCQUVRLE1BRlI7a0JBR1MsTUFIVDtpQkFJUSxRQUpSO3FDQUs2QjtxQkFDaEI7eUJBQ0k7Ozs7c0JBSWQsSUFBRDtpQkFDUSxLQURSO2dCQUVPLGNBRlA7OEJBR3FCLEVBSHJCO2dCQUlPOzs7O0dBdkRqQjs7O0FBZ0VGc0YsT0FBT2hGLFNBQVAsR0FBbUI7UUFDWEosVUFBVVksTUFBVixDQUFpQmtDLFVBRE47T0FFWjlDLFVBQVVZLE1BRkU7UUFHWFosVUFBVUMsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQUFoQixDQUhXO1lBSVBELFVBQVVTO0NBSnRCOzs7Ozs7QUMzSEEsSUFBTTZFLGFBQTBDO01BQzFDLENBRDBDO01BRTFDLENBRjBDO01BRzFDLENBSDBDO01BSTFDLENBSjBDO01BSzFDO0NBTE47O0FBMENBLEFBQWUsU0FBU0MsSUFBVCxPQWVMO3dCQWRSQyxLQWNRO01BZFJBLEtBY1EsOEJBZEEsTUFjQTt1QkFiUkMsSUFhUTtNQWJSQSxJQWFRLDZCQWJELEtBYUM7TUFaUmhHLFFBWVEsUUFaUkEsUUFZUTt3QkFYUjZDLEtBV1E7TUFYUkEsS0FXUSw4QkFYQSxVQVdBO3lCQVZSRSxNQVVRO01BVlJBLE1BVVEsK0JBVkMsS0FVRDt5QkFUUmtELE1BU1E7TUFUUkEsTUFTUSwrQkFUQyxLQVNEOzJCQVJSQyxRQVFRO01BUlJBLFFBUVEsaUNBUkcsV0FRSDt1QkFQUnhSLElBT1E7TUFQUkEsSUFPUSw2QkFQRCxJQU9DO01BTlJ5UixNQU1RLFFBTlJBLE1BTVE7TUFMUkMsTUFLUSxRQUxSQSxNQUtRO01BSlJDLE1BSVEsUUFKUkEsTUFJUTswQkFIUkMsT0FHUTtNQUhSQSxPQUdRLGdDQUhFLE9BR0Y7MkJBRlJDLFFBRVE7TUFGUkEsUUFFUSxpQ0FGRyxLQUVIO21DQURSQywrQkFDUTtNQURSQSwrQkFDUSx5Q0FEMEIsS0FDMUI7O01BQ0ZoUixRQUFRcVEsV0FBV25SLElBQVgsQ0FBZDtNQUNNK1IsVUFBVVosV0FBV00sTUFBWCxDQUFoQjtNQUNNTyxVQUFVYixXQUFXTyxNQUFYLENBQWhCO01BQ01PLFVBQVVkLFdBQVdRLE1BQVgsQ0FBaEI7O01BRU1yRCxLQUFLZ0MsV0FDVHBSLFNBQU9rUyxJQURFLEVBRVRsUyxzQkFBa0I0QixLQUFsQixDQUZTLEVBR1Q2USxVQUFVelMsd0JBQW9CK1MsT0FBcEIsQ0FIRCxFQUlUUCxVQUFVeFMsd0JBQW9COFMsT0FBcEIsQ0FKRCxFQUtUUCxVQUFVdlMsd0JBQW9CNlMsT0FBcEIsQ0FMRCxFQU1UNUQsVUFBVSxNQUFWLElBQW9CeEgsT0FBT3VMLElBTmxCLEVBT1QvRCxVQUFVLFVBQVYsSUFBd0J4SCxPQUFPd0wsUUFQdEIsRUFRVGhFLFVBQVUsVUFBVixJQUF3QnhILE9BQU95TCxRQVJ0QixFQVNUakUsVUFBVSxNQUFWLElBQW9CeEgsT0FBTzBMLElBVGxCLEVBVVRsRSxVQUFVLE9BQVYsSUFBcUJ4SCxPQUFPMkwsS0FWbkIsRUFXVG5FLFVBQVUsV0FBVixJQUF5QnhILE9BQU80TCxTQVh2QixFQVlUcEUsVUFBVSxRQUFWLElBQXNCeEgsT0FBTzZMLE1BWnBCLEVBYVRyRSxVQUFVLFVBQVYsSUFBd0J4SCxPQUFPOEwsUUFidEIsRUFjVHRFLFVBQVUsTUFBVixJQUFvQnhILE9BQU8rTCxJQWRsQixFQWVUdkUsVUFBVSxPQUFWLElBQXFCeEgsT0FBT2dNLEtBZm5CLEVBZ0JUeEUsVUFBVSxRQUFWLElBQXNCeEgsT0FBT2lNLE1BaEJwQixFQWlCVHpFLFVBQVUsUUFBVixJQUFzQnhILE9BQU9rTSxNQWpCcEIsRUFrQlQxRSxVQUFVLE1BQVYsSUFBb0J4SCxPQUFPbU0sSUFsQmxCLEVBbUJUM0UsVUFBVSxRQUFWLElBQXNCeEgsT0FBT29NLE1BbkJwQixFQW9CVDVFLFVBQVUsS0FBVixJQUFtQnhILE9BQU9xTSxHQXBCakIsRUFxQlQ3RSxVQUFVLFlBQVYsSUFBMEJ4SCxPQUFPc00sVUFyQnhCLEVBc0JUOUUsVUFBVSxPQUFWLElBQXFCeEgsT0FBT3VNLEtBdEJuQixFQXVCVHRCLFlBQVksT0FBWixJQUF1QmhCLFdBQVd1QyxZQXZCekIsRUF3QlQsQ0FBQ3ZCLFlBQVksTUFBWixJQUFzQkUsK0JBQXZCLEtBQ0VsQixXQUFXd0MsV0F6QkosRUEwQlQvQixVQUFVLFFBQVYsSUFBc0JULFdBQVd5QyxXQTFCeEIsRUEyQlRoQyxVQUFVLFNBQVYsSUFBdUJULFdBQVcwQyxZQTNCekIsRUE0QlRqQyxVQUFVLE1BQVYsSUFBb0JULFdBQVcyQyxTQTVCdEIsRUE2QlRsQyxVQUFVLE9BQVYsSUFBcUJULFdBQVc0QyxVQTdCdkIsRUE4QlRoQyxhQUFhLFdBQWIsSUFBNEJaLFdBQVc2QyxTQTlCOUIsRUErQlRsQyxVQUFVWCxXQUFXOEMsZUEvQlosRUFnQ1QsQ0FBQ25DLE1BQUQsSUFBV1gsV0FBVytDLGVBaENiLEVBaUNUckMsUUFBUVYsV0FBV0ksY0FqQ1YsRUFrQ1QsQ0FBQ00sSUFBRCxJQUFTVixXQUFXZ0QsZ0JBbENYLEVBbUNUL0IsWUFBWWpCLFdBQVdpQixRQW5DZCxDQUFYO01BcUNNZ0MsTUFBTXhGLFNBQVMsTUFBVCxHQUFrQixLQUE5Qjs7U0FHRTFDO09BQUE7O2lCQUNhMkM7T0FDTnVELFlBQVksT0FBT3ZHLFFBQVAsS0FBb0IsUUFBaEMsR0FDRCxFQUFFd0ksT0FBT3hJLFFBQVQsRUFEQyxHQUVELElBSk47O0dBREY7OztBQVlGOEYsS0FBS25GLFNBQUwsR0FBaUI7bUNBQ2tCSixVQUFVUyxJQUQ1QjtTQUVSVCxVQUFVQyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsU0FBNUIsQ0FBaEIsQ0FGUTtRQUdURCxVQUFVUyxJQUhEO1lBSUxULFVBQVVLLElBSkw7U0FLUkwsVUFBVUMsS0FBVixDQUFnQixDQUNyQixPQURxQixFQUVyQixNQUZxQixFQUdyQixPQUhxQixFQUlyQixNQUpxQixFQUtyQixNQUxxQixFQU1yQixVQU5xQixFQU9yQixRQVBxQixFQVFyQixRQVJxQixFQVNyQixVQVRxQixFQVVyQixRQVZxQixFQVdyQixZQVhxQixFQVlyQixRQVpxQixFQWFyQixVQWJxQixFQWNyQixNQWRxQixFQWVyQixXQWZxQixFQWdCckIsS0FoQnFCLEVBaUJyQixPQWpCcUIsQ0FBaEIsQ0FMUTtVQXdCUEQsVUFBVVMsSUF4Qkg7VUF5QlBULFVBQVVTLElBekJIO1dBMEJOVCxVQUFVQyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBaEIsQ0ExQk07VUEyQlBELFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsQ0FBaEIsQ0EzQk87VUE0QlBELFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsQ0FBaEIsQ0E1Qk87WUE2QkxELFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxRQUFELEVBQVcsV0FBWCxDQUFoQixDQTdCSztRQThCVEQsVUFBVUMsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixDQUFoQixDQTlCUztVQStCUEQsVUFBVUMsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixDQUFoQixDQS9CTztZQWdDTEQsVUFBVVM7Q0FoQ3RCOztBQ3JHZSxTQUFTeUgsTUFBVCxDQUFnQmhVLEtBQWhCLEVBQThCOzs7TUFFekNpVSxxQkFGeUMsR0FhdkNqVSxLQWJ1QyxDQUV6Q2lVLHFCQUZ5QztNQUd6Q0MscUJBSHlDLEdBYXZDbFUsS0FidUMsQ0FHekNrVSxxQkFIeUM7TUFJekMvRixrQkFKeUMsR0FhdkNuTyxLQWJ1QyxDQUl6Q21PLGtCQUp5QztxQkFhdkNuTyxLQWJ1QyxDQUt6Q29PLEtBTHlDO01BS3pDQSxLQUx5QyxnQ0FLakMsTUFMaUM7d0JBYXZDcE8sS0FidUMsQ0FNekNtVSxRQU55QztNQU16Q0EsUUFOeUMsbUNBTTlCLEtBTjhCO3NCQWF2Q25VLEtBYnVDLENBT3pDc08sTUFQeUM7TUFPekNBLE1BUHlDLGlDQU9oQyxLQVBnQztNQVF6Q2hOLElBUnlDLEdBYXZDdEIsS0FidUMsQ0FRekNzQixJQVJ5QztNQVN6QzhTLE9BVHlDLEdBYXZDcFUsS0FidUMsQ0FTekNvVSxPQVR5QztvQkFhdkNwVSxLQWJ1QyxDQVV6Q0MsSUFWeUM7TUFVekNBLElBVnlDLCtCQVVsQyxJQVZrQztNQVd6Q29VLElBWHlDLEdBYXZDclUsS0FidUMsQ0FXekNxVSxJQVh5QztvQkFhdkNyVSxLQWJ1QyxDQVl6Q3NVLElBWnlDO01BWXpDQSxJQVp5QywrQkFZbEMsUUFaa0M7OztNQWVyQ0MsWUFBWTtVQUNWLE9BRFU7VUFFVixVQUZVO1NBR1gsT0FIVztpQkFJSCxPQUpHO1dBS1Q7R0FMVDs7TUFRTUMsVUFBVWhHLFdBQVdyUCxTQUFPc1YsTUFBbEIsaURBQ2J0VixTQUFPdVYsRUFETSxFQUNEelUsU0FBUyxJQURSLCtCQUViZCxTQUFPd1YsRUFGTSxFQUVEMVUsU0FBUyxJQUZSLCtCQUdiZCxTQUFPeVYsRUFITSxFQUdEM1UsU0FBUyxJQUhSLCtCQUliZCxTQUFPMFYsS0FKTSxFQUlFekcsVUFBVSxhQUpaLCtCQUtialAsU0FBT2lQLEtBQVAsQ0FMYSxFQUtHLENBQUMrRixRQUxKLCtCQU1iaFYsU0FBT2dWLFFBTk0sRUFNS0EsUUFOTCwrQkFPYmhWLFNBQU8yVixPQVBNLEVBT0ksQ0FBQ1gsUUFQTCwrQkFRYmhWLFNBQU9tUCxNQVJNLEVBUUdBLE1BUkgsK0JBU2JuUCxTQUFPNFYsS0FUTSxFQVNFLENBQUN6RyxNQVRILGdCQUFoQjs7U0FhRTFDOzs7dUJBQ2lCcUkscUJBRGpCO3VCQUVpQkMscUJBRmpCO29CQUdjL0Ysa0JBSGQ7aUJBSWFxRyxPQUpiO2dCQUtZTCxRQUxaO1lBTVE3UyxJQU5SOzs7Ozs7Ozs7OztRQU9XO2VBQVM4UyxXQUFXQSxRQUFRLEVBQUVZLFlBQUYsRUFBUixDQUFwQjtPQUFULENBUEY7WUFRUVY7OztVQUVOOztlQUNRLFFBRFI7a0JBQUE7ZUFHU0gsV0FBVyxNQUFYLEdBQW9CSSxVQUFVbkcsS0FBVixDQUg3QjtrQkFJVyxRQUpYO2NBS1FuTzs7OztHQWhCWjs7O0FBd0JGK1QsT0FBTzlILFNBQVAsR0FBbUI7eUJBQ01KLFVBQVVTLElBRGhCO3lCQUVNVCxVQUFVUyxJQUZoQjtzQkFHR1QsVUFBVVksTUFIYjtTQUlWWixVQUFVQyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsS0FBakIsRUFBd0IsYUFBeEIsRUFBdUMsT0FBdkMsQ0FBaEIsQ0FKVTtZQUtQRCxVQUFVUyxJQUxIO1VBTVRULFVBQVVTLElBTkQ7UUFPWFQsVUFBVVksTUFQQztXQVFSWixVQUFVcUUsSUFSRjtRQVNYckUsVUFBVUMsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQUFoQixDQVRXO1FBVVhELFVBQVVZLE1BQVYsQ0FBaUJrQyxVQVZOO1FBV1g5QyxVQUFVQyxLQUFWLENBQWdCLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBaEI7Q0FYUjs7OztJQzlEcUJrSjs7Ozs7Ozs7Ozs7Ozs7aUxBU25CQyxRQUFlO2VBQ0o7YUFHWEMsbUJBQW1CLFVBQUNILEtBQUQsRUFBZ0Q7VUFDekRJLFlBRHlELEdBQ3hDLE1BQUtwVixLQURtQyxDQUN6RG9WLFlBRHlEOztZQUU1REMsUUFBTCxDQUNFLEVBQUVDLFNBQVMsSUFBWCxFQURGLEVBRUVGLGdCQUFpQjtlQUFNQSxhQUFhLEVBQUVKLFlBQUYsRUFBYixDQUFOO09BRm5CO2FBTUZPLG1CQUFtQixVQUFDUCxLQUFELEVBQWdEO1VBQ3pEUSxZQUR5RCxHQUN4QyxNQUFLeFYsS0FEbUMsQ0FDekR3VixZQUR5RDs7WUFFNURILFFBQUwsQ0FDRSxFQUFFQyxTQUFTLEtBQVgsRUFERixFQUVFRSxnQkFBaUI7ZUFBTUEsYUFBYSxFQUFFUixZQUFGLEVBQWIsQ0FBTjtPQUZuQjs7Ozs7OzZCQU1PO21CQUM2QixLQUFLaFYsS0FEbEM7VUFDQ3lWLE1BREQsVUFDQ0EsTUFERDtVQUNTbEssUUFEVCxVQUNTQSxRQURUO1VBQ21CZ0UsS0FEbkIsVUFDbUJBLEtBRG5CO1VBRUMrRixPQUZELEdBRWEsS0FBS0osS0FGbEIsQ0FFQ0ksT0FGRDs7O1VBSURkLFVBQVVoRyxXQUFXclAsU0FBT3VXLElBQWxCLHFCQUdidlcsU0FBT3dXLEtBSE0sRUFHRUYsVUFBV0EsVUFBVSxJQUFWLElBQWtCSCxPQUgvQixFQUFoQjs7YUFPRTFKO1dBQUE7O3dCQUNnQixLQUFLdUosZ0JBRHJCO3dCQUVnQixLQUFLSSxnQkFGckI7b0JBR1c7O2lCQUVDM0o7YUFBQTtZQUFLLGNBQWMsQ0FBbkI7O1NBTFo7O2FBTUU7OztTQU5GOytCQU9PLFdBQVc0SSxPQUFoQjtPQVJKOzs7O0VBdkM4QnRFOztBQUFiK0UsS0FDWi9JLFlBQVk7VUFDVEosVUFBVVMsSUFERDtZQUVQVCxVQUFVSyxJQUZIO1NBR1ZMLFVBQVVLLElBSEE7Z0JBSUhMLFVBQVVxRSxJQUpQO2dCQUtIckUsVUFBVXFFOzs7OztJQ0hQeUY7Ozs7Ozs7Ozs7Ozs7O3lMQWtCbkJWLFFBQWU7ZUFDSjthQXVCWFcsZUFBZSxVQUFDYixLQUFELEVBQWtDO1VBQ3ZDYyxPQUR1QyxHQUMzQmQsTUFBTWUsTUFEcUIsQ0FDdkNELE9BRHVDOztZQUUxQzlWLEtBQUwsQ0FBV2dXLFFBQVgsQ0FBb0IsRUFBRWhCLFlBQUYsRUFBU2MsZ0JBQVQsRUFBcEI7YUFHRkcsYUFBYTthQUFNLE1BQUtaLFFBQUwsQ0FBYyxFQUFFYSxTQUFTLEtBQVgsRUFBZCxDQUFOO2FBQ2JDLGNBQWM7YUFBTSxNQUFLZCxRQUFMLENBQWMsRUFBRWEsU0FBUyxJQUFYLEVBQWQsQ0FBTjs7Ozs7O3dDQTFCTTtVQUNkLEtBQUtsVyxLQUFMLENBQVdvVyxhQUFmLEVBQThCO2FBQ3ZCQyxnQkFBTCxDQUFzQixDQUFDLENBQUMsS0FBS3JXLEtBQUwsQ0FBV29XLGFBQW5DOzs7Ozt1Q0FJZUUsZUFBc0I7VUFDbkNBLGNBQWNGLGFBQWQsS0FBZ0MsS0FBS3BXLEtBQUwsQ0FBV29XLGFBQS9DLEVBQThEO2FBQ3ZEQyxnQkFBTCxDQUFzQixDQUFDLENBQUMsS0FBS3JXLEtBQUwsQ0FBV29XLGFBQW5DOzs7OztxQ0FJYUEsZUFBd0I7VUFDbkMsS0FBS0csS0FBVCxFQUFnQjthQUNUQSxLQUFMLENBQVdILGFBQVgsR0FBMkJBLGFBQTNCOzs7Ozs2QkFjSzs7Ozs7bUJBQ3NELEtBQUtwVyxLQUQzRDtVQUNDOFYsT0FERCxVQUNDQSxPQUREO1VBQ1UzQixRQURWLFVBQ1VBLFFBRFY7VUFDb0JxQyxFQURwQixVQUNvQkEsRUFEcEI7VUFDd0JKLGFBRHhCLFVBQ3dCQSxhQUR4QjtVQUN1QzlVLElBRHZDLFVBQ3VDQSxJQUR2QztVQUM2Q3JCLElBRDdDLFVBQzZDQSxJQUQ3Qzs7YUFHTDJMO1dBQUE7VUFBSyxVQUFTLFVBQWQ7O21CQUVha0ssT0FEWDtxQkFFYXRILFdBQVdyUCxTQUFPb1gsS0FBbEIsaURBQ1JwWCxTQUFPc1gsWUFEQyxFQUNjLENBQUN0QyxRQURmLCtCQUVSaFYsU0FBT2lYLGFBRkMsRUFFZUEsYUFGZiwrQkFHUmpYLFNBQU91WCxPQUhDLEVBR1N6VyxTQUFTLElBSGxCLCtCQUlSZCxTQUFPd1gsT0FKQyxFQUlTMVcsU0FBUyxJQUpsQixnQkFGYjtvQkFRWWtVLFFBUlo7Y0FTTXFDLEVBVE47Z0JBVVFsVixJQVZSO2tCQVdVLEtBQUsyVSxVQVhmO29CQVlZLEtBQUtKLFlBWmpCO21CQWFXLEtBQUtNLFdBYmhCO2VBY08saUJBQU07bUJBQ0pJLEtBQUwsR0FBYUssRUFBYjtXQWZKO2dCQWlCTztVQWxCVDs7Ozt1QkFxQmVwSSxXQUNUclAsU0FBTzBYLEtBREU7O3VCQUlMZixXQUFXTSxhQUFYLEdBQ0VqWCxTQUFPMlgsU0FEVCxHQUVFM1gsU0FBTzRYLGNBSGIsR0FJSWpCLFdBQVdNLGFBQVgsR0FDRWpYLFNBQU82WCxhQURULEdBRUU3WCxTQUFPOFgsVUFUSixtREFXTjlYLFNBQU8rWCxZQVhELEVBV2dCLENBQUMvQyxRQVhqQixnQ0FZTmhWLFNBQU9nWSxZQVpELEVBWWdCLEtBQUtqQyxLQUFMLENBQVdnQixPQVozQixnQ0FhTi9XLFNBQU9pWSxPQWJELEVBYVduWCxTQUFTLElBYnBCLGdDQWNOZCxTQUFPa1ksT0FkRCxFQWNXcFgsU0FBUyxJQWRwQjs7V0FrQlQ2VixXQUFXTSxhQUFaLEtBQ0N4SyxjQUFDLElBQUQ7Z0NBQ3FCLEVBRHJCO21CQUVRLE9BRlI7a0JBR1F3SyxnQkFBZ0IsTUFBaEIsR0FBeUIsT0FIakM7a0JBSVFuVyxTQUFTLElBQVQsR0FBZ0IsQ0FBaEIsR0FBb0I7OztPQTdDcEM7Ozs7RUFwRGtDaVE7O0FBQWpCMEYsU0FDWjFKLFlBQVk7V0FDUkosVUFBVVMsSUFERjtZQUVQVCxVQUFVUyxJQUZIO01BR2JULFVBQVVZLE1BQVYsQ0FBaUJrQyxVQUhKO2lCQUlGOUMsVUFBVVMsSUFKUjtRQUtYVCxVQUFVWSxNQUxDO1lBTVBaLFVBQVVxRSxJQUFWLENBQWV2QixVQU5SO1FBT1g5QyxVQUFVQyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FBaEI7O0FBUlc2SixTQVdaeEYsZUFBZTtXQUNYLEtBRFc7WUFFVixLQUZVO2lCQUdMLEtBSEs7UUFJZDs7O0lDc0JXa0g7Ozs7Ozs7Ozs7NkJBd0JWO21CQUNxRCxLQUFLdFgsS0FEMUQ7VUFDQ3VYLElBREQsVUFDQ0EsSUFERDtVQUNPM1IsU0FEUCxVQUNPQSxNQURQO3NDQUNlNFIsV0FEZjtVQUNlQSxXQURmLHNDQUM2QixDQUQ3Qjt1Q0FDZ0NDLFlBRGhDO1VBQ2dDQSxZQURoQyx1Q0FDK0MsQ0FEL0M7Ozs7VUFJRDlNLFFBQVExSixLQUFLeVcsR0FBTCwrQkFBWTlSLFVBQU85RixHQUFQLENBQVc7ZUFBUTZYLEtBQUszTyxJQUFMLEdBQVkyTyxLQUFLaE4sS0FBekI7T0FBWCxDQUFaLEVBQWQ7VUFDTXhDLFNBQVNsSCxLQUFLeVcsR0FBTCwrQkFBWTlSLFVBQU85RixHQUFQLENBQVc7ZUFBUTZYLEtBQUs3TyxHQUFMLEdBQVc2TyxLQUFLeFAsTUFBeEI7T0FBWCxDQUFaLEVBQWY7OztvQkFHMkQsS0FBS25JLEtBUnpEOzBDQVFDNFgsYUFSRDtVQVFDQSxhQVJELHlDQVFpQmpOLEtBUmpCOzBDQVF3QmtOLGNBUnhCO1VBUXdCQSxjQVJ4Qix5Q0FReUMxUCxNQVJ6Qzs7Ozs7VUFZRDJQLFFBQVFsUyxVQUFPeEcsTUFBUCxDQUFjLFVBQUNnTSxHQUFELEVBQU0yTSxRQUFOLEVBQWdCQyxHQUFoQixFQUF3QjtZQUVoREQsU0FBU2pQLEdBQVQsR0FBZWlQLFNBQVM1UCxNQUF4QixHQUFpQ3FQLFdBQWpDLElBQ0FPLFNBQVNqUCxHQUFULEdBQWUrTyxpQkFBaUJMLFdBRGhDLElBRUFPLFNBQVMvTyxJQUFULEdBQWdCNE8sZ0JBQWdCSCxZQUZoQyxJQUdBTSxTQUFTL08sSUFBVCxHQUFnQitPLFNBQVNwTixLQUF6QixHQUFpQzhNLFlBSm5DLEVBS0U7Y0FDSVEsSUFBSixZQUFXRCxRQUFYLElBQW1CRCxRQUFuQjs7ZUFFSzNNLEdBQVA7T0FUWSxFQVVYLEVBVlcsQ0FBZDs7YUFhRVE7O1VBQUssV0FBV3NNLE9BQWFuTyxRQUE3QixFQUF1QyxPQUFPLEVBQUVZLFlBQUYsRUFBU3hDLGNBQVQsRUFBOUM7Y0FDU3JJLEdBQU4sQ0FBVTtjQUFHa1ksR0FBSCxRQUFHQSxHQUFIO2NBQVd6WCxLQUFYO2lCQUNUcUw7O2NBQUssS0FBS29NLEdBQVYsRUFBZSxXQUFXRSxPQUFhcE8sUUFBdkMsRUFBaUQsT0FBT3ZKLEtBQXhEOzBCQUNHLElBQUQsSUFBTSxLQUFLeVgsR0FBWDtXQUZPO1NBQVY7T0FGTDs7OztFQWhEb0M5SDs7QUFBbkJvSCxXQUNacEwsWUFBWTs7UUFFWEosVUFBVXFNLEdBRkM7VUFHVHJNLFVBQVVzTSxPQUFWLENBQ050TSxVQUFVTSxLQUFWLENBQWdCO1NBQ1ROLFVBQVVVLE1BQVYsQ0FBaUJvQyxVQURSO1VBRVI5QyxVQUFVVSxNQUFWLENBQWlCb0MsVUFGVDtXQUdQOUMsVUFBVVUsTUFBVixDQUFpQm9DLFVBSFY7WUFJTjlDLFVBQVVVLE1BQVYsQ0FBaUJvQztHQUozQixFQUtHQSxVQU5HLENBSFM7a0JBV0Q5QyxVQUFVVSxNQVhUO2dCQVlIVixVQUFVVSxNQVpQO2VBYUpWLFVBQVVVLE1BYk47aUJBY0ZWLFVBQVVVOztBQWZSOEssV0FrQlpsSCxlQUFlO1VBQ1osRUFEWTtnQkFFTixDQUZNO2VBR1A7Ozs7O0FDdkRGLFNBQVNpSSxNQUFULENBQWdCclksS0FBaEIsRUFBb0M7TUFDekN1TCxRQUR5QyxHQUM1QnZMLEtBRDRCLENBQ3pDdUwsUUFEeUM7O01BRTNDZ0QsS0FBS0MsV0FDVCxDQUFDeE8sTUFBTXNZLEVBQU4sSUFBWXRZLE1BQU0wVSxFQUFsQixJQUF3QjFVLE1BQU0yVSxFQUE5QixJQUFvQzNVLE1BQU00VSxFQUEzQyxLQUFrRHpWLFNBQU9vWixnQkFEaEQsRUFFVHZZLE1BQU1zWSxFQUFOLElBQVluWixtQkFBZWEsTUFBTXNZLEVBQXJCLENBRkgsRUFHVHRZLE1BQU0wVSxFQUFOLElBQVl2VixtQkFBZWEsTUFBTTBVLEVBQXJCLENBSEgsRUFJVDFVLE1BQU0yVSxFQUFOLElBQVl4VixtQkFBZWEsTUFBTTJVLEVBQXJCLENBSkgsRUFLVDNVLE1BQU00VSxFQUFOLElBQVl6VixtQkFBZWEsTUFBTTRVLEVBQXJCLENBTEgsRUFNVDVVLE1BQU13WSxJQUFOLElBQWNyWixtQkFBZWEsTUFBTXdZLElBQXJCLENBTkwsRUFPVHhZLE1BQU15WSxNQUFOLElBQWdCdFosbUJBQWVhLE1BQU15WSxNQUFyQixDQVBQLEVBUVR6WSxNQUFNMFksTUFBTixJQUFnQnZaLG1CQUFlYSxNQUFNMFksTUFBckIsQ0FSUCxFQVNUMVksTUFBTTJZLE1BQU4sSUFBZ0J4WixtQkFBZWEsTUFBTTJZLE1BQXJCLENBVFAsQ0FBWDtTQVdPL007O01BQUssV0FBVzJDLEVBQWhCOztHQUFQOzs7QUFHRjhKLE9BQU9uTSxTQUFQLEdBQW1CO1lBQ1BKLFVBQVVLLElBREg7TUFFYkwsVUFBVVUsTUFGRztNQUdiVixVQUFVVSxNQUhHO01BSWJWLFVBQVVVLE1BSkc7TUFLYlYsVUFBVVUsTUFMRztRQU1YVixVQUFVVSxNQU5DO1VBT1RWLFVBQVVVLE1BUEQ7VUFRVFYsVUFBVVUsTUFSRDtVQVNUVixVQUFVVTtDQVRwQjs7QUNoQ2UsU0FBU29NLFNBQVQsQ0FBbUI1WSxLQUFuQixFQUFpQztNQUN0Q3VMLFFBRHNDLEdBQ3pCdkwsS0FEeUIsQ0FDdEN1TCxRQURzQzs7U0FHNUNLO09BQUE7TUFBSyxnQkFBZSxRQUFwQixFQUE2QixTQUFRLE1BQXJDOztTQUNFO1FBQUssVUFBVSxHQUFmLEVBQW9CLE9BQU0sTUFBMUI7OztHQUZKOzs7QUFTRmdOLFVBQVUxTSxTQUFWLEdBQXNCO1lBQ1ZKLFVBQVVLO0NBRHRCOzs7O0FDaEJlLFNBQVMwTSxPQUFULEdBQW1CO1NBQ3pCak4sc0JBQUksV0FBV3pNLFNBQU8yWixPQUF0QixHQUFQOzs7QUNHYSxTQUFTQyxLQUFULENBQWUvWSxLQUFmLEVBQTZCO01BQ2xDZ1osU0FEa0MsR0FDcEJoWixLQURvQixDQUNsQ2daLFNBRGtDOztNQUV0Q3RLLGFBQUo7VUFDUXNLLFNBQVI7U0FDTyxJQUFMO2FBQ1MsbUJBQVA7O1NBRUcsT0FBTDthQUNTLHFCQUFQOztTQUVHLE1BQUw7YUFDUyxxQkFBUDs7U0FFRyxNQUFMO2FBQ1MsbUJBQVA7Ozs7O1NBTUZwTjs7TUFBSyxPQUFNLElBQVgsRUFBZ0IsUUFBTyxJQUF2Qjs0QkFDUSxHQUFHOEMsSUFBVDtHQUZKOzs7QUFPRnFLLE1BQU03TSxTQUFOLEdBQWtCO2FBQ0xKLFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQixNQUFoQixFQUF3QixNQUF4QixDQUFoQjtDQURiOzs7O0FDMUJBOztBQUVBLElBQU1rTixtQkFBbUI7T0FDbEIsSUFEa0I7T0FFbEIsT0FGa0I7T0FHbEIsTUFIa0I7T0FJbEI7Q0FKUDs7QUFPQSxJQUFNQyxnQkFBZ0I7TUFDaEIsQ0FEZ0I7U0FFYixDQUZhO1FBR2QsQ0FIYztRQUlkO0NBSlI7O0FBT0EsSUFBTUMsU0FBUyxFQUFmO0FBQ0EsQUFBTyxJQUFNQyxlQUFlLEVBQXJCO0FBQ1AsSUFBTUMseUJBQXlCLEVBQS9CO0FBQ0EsQUFBTyxJQUFNQyxnQkFBZ0IsQ0FBdEI7Ozs7O0FBd0VQLEFBQU8sU0FBU0MsVUFBVCxDQUNMQyxVQURLLEVBRUxDLGNBRkssRUFHTEMsV0FISyxFQUlMQyxVQUpLLEVBS0w7OztNQUdJQyxLQUFLRixZQUFZNVEsR0FBWixHQUFrQjBRLFdBQVdyUixNQUE3QixHQUFzQ2lSLFlBQS9DO01BQ0lsUSxRQUNGeVEsV0FBV2hQLEtBQVgsR0FBbUI2TyxXQUFXN08sS0FBOUIsR0FBc0N5TyxZQUF0QyxHQUFxRE0sWUFBWXhRLEtBRG5FO01BRUkyUSxPQUNGRixXQUFXeFIsTUFBWCxHQUFvQnFSLFdBQVdyUixNQUEvQixHQUF3Q2lSLFlBQXhDLEdBQXVETSxZQUFZM1EsTUFEckU7TUFFSUMsT0FBTzBRLFlBQVkxUSxJQUFaLEdBQW1Cd1EsV0FBVzdPLEtBQTlCLEdBQXNDeU8sWUFBakQ7Ozs7TUFLRU0sWUFBWTVRLEdBQVosR0FBa0J3USxhQUFsQixJQUNBSyxXQUFXeFIsTUFBWCxHQUFvQnVSLFlBQVkzUSxNQUFoQyxHQUF5Q3VRLGFBRjNDLEVBR0U7V0FDTyxDQUFQO1lBQ1EsQ0FBUjs7OztNQUtBSSxZQUFZMVEsSUFBWixHQUFtQnNRLGFBQW5CLElBQ0FLLFdBQVdoUCxLQUFYLEdBQW1CK08sWUFBWXhRLEtBQS9CLEdBQXVDb1EsYUFGekMsRUFHRTtTQUNLLENBQUw7V0FDTyxDQUFQOzs7TUFHSVEsU0FBUyxDQUFDRixFQUFELEVBQUsxUSxLQUFMLEVBQVkyUSxJQUFaLEVBQWtCN1EsSUFBbEIsQ0FBZjs7O01BR00wTyxNQUFNelcsS0FBS3lXLEdBQUwsYUFBWW9DLE1BQVosQ0FBWjs7O01BR0lDLGdCQUFKO01BQ0lOLGtCQUFrQkssT0FBT1osY0FBY08sY0FBZCxDQUFQLElBQXdDLENBQTlELEVBQWlFOztjQUVyREEsY0FBVjtHQUZGLE1BR087O2NBRUtSLGlCQUFpQmEsT0FBTzdPLE9BQVAsQ0FBZXlNLEdBQWYsQ0FBakIsQ0FBVjs7U0FFS3FDLE9BQVA7Ozs7OztBQU1GLEFBQU8sU0FBU0MsU0FBVCxDQUNMUixVQURLLEVBRUxPLE9BRkssRUFHTEwsV0FISyxFQUlMQyxVQUpLLEVBS0w7O01BRUlNLGVBQUo7TUFDSUMsbUJBQUo7TUFDSUMsNkJBQUo7O01BRUlKLFlBQVksT0FBWixJQUF1QkEsWUFBWSxNQUF2QyxFQUErQzthQUNwQ1AsV0FBV3JSLE1BQVgsR0FBb0IsQ0FBN0I7aUJBQ2F1UixZQUFZNVEsR0FBWixHQUFrQixDQUFDNFEsWUFBWTNRLE1BQVosR0FBcUIyUSxZQUFZNVEsR0FBbEMsSUFBeUMsQ0FBeEU7MkJBQ3VCNlEsV0FBV3hSLE1BQWxDO0dBSEYsTUFJTzs7YUFFSXFSLFdBQVc3TyxLQUFYLEdBQW1CLENBQTVCO2lCQUNhK08sWUFBWTFRLElBQVosR0FBbUIsQ0FBQzBRLFlBQVl4USxLQUFaLEdBQW9Cd1EsWUFBWTFRLElBQWpDLElBQXlDLENBQXpFOzJCQUN1QjJRLFdBQVdoUCxLQUFsQzs7O01BR0l5UCxjQUFjRixhQUFhRCxNQUFiLEdBQXNCZCxNQUExQztNQUNNa0IsZUFBZUYsdUJBQXVCRCxVQUF2QixHQUFvQ0QsTUFBcEMsR0FBNkNkLE1BQWxFO01BQ0ltQixlQUFKO01BQ0lGLGNBQWMsQ0FBZCxJQUFtQkMsZUFBZSxDQUF0QyxFQUF5Qzs7YUFFOUIsUUFBVDtHQUZGLE1BR08sSUFBSUEsZUFBZSxDQUFuQixFQUFzQjs7YUFFbEJOLFlBQVksTUFBWixJQUFzQkEsWUFBWSxPQUFsQyxHQUE0QyxJQUE1QyxHQUFtRCxNQUE1RDtHQUZLLE1BR0E7O2FBRUlBLFlBQVksTUFBWixJQUFzQkEsWUFBWSxPQUFsQyxHQUE0QyxNQUE1QyxHQUFxRCxPQUE5RDs7U0FFS08sTUFBUDs7Ozs7O0FBTUYsQUFBTyxTQUFTQyxjQUFULENBQ0xELE1BREssRUFFTFosV0FGSyxFQUdMQyxVQUhLLEVBSUw7O01BRUlhLHNCQUNGbkIseUJBQXlCLENBQUNLLFlBQVl2UixNQUFaLEdBQXFCaVIsWUFBdEIsSUFBc0MsQ0FEakU7TUFFSXFCLHdCQUNGcEIseUJBQXlCLENBQUNLLFlBQVkvTyxLQUFaLEdBQW9CeU8sWUFBckIsSUFBcUMsQ0FEaEU7TUFFSXNCLHFCQUFxQnRCLFlBQXpCO01BQ0l1Qix1QkFBdUJ2QixZQUEzQjs7OztNQUlNd0Isb0JBQ0psQixZQUFZNVEsR0FBWixHQUFrQjBSLG1CQUFsQixHQUF3QyxDQUF4QyxJQUNBZCxZQUFZM1EsTUFBWixHQUFxQnlSLG1CQUFyQixHQUEyQ2IsV0FBV3hSLE1BRnhEO01BR00wUyxzQkFDSm5CLFlBQVkxUSxJQUFaLEdBQW1CeVIscUJBQW5CLEdBQTJDLENBQTNDLElBQ0FmLFlBQVl4USxLQUFaLEdBQW9CdVIscUJBQXBCLEdBQTRDZCxXQUFXaFAsS0FGekQ7TUFHSWlRLGlCQUFKLEVBQXVCOzBCQUVuQnRCLGdCQUFnQixDQUFDSSxZQUFZdlIsTUFBWixHQUFxQmlSLFlBQXRCLElBQXNDLENBRHhEO3lCQUVxQkUsYUFBckI7O01BRUV1QixtQkFBSixFQUF5Qjs0QkFFckJ2QixnQkFBZ0IsQ0FBQ0ksWUFBWS9PLEtBQVosR0FBb0J5TyxZQUFyQixJQUFxQyxDQUR2RDsyQkFFdUJFLGFBQXZCOzs7U0FHSztZQUNHO1NBQ0htQixxQkFERztTQUVIRDtLQUhBO1dBS0U7U0FDRkcsb0JBREU7U0FFRkQ7O0dBUFA7Ozs7OztBQWVGLEFBQU8sU0FBU0ksYUFBVCxDQUNMQyxJQURLLEVBRUxDLFNBRkssRUFHTHhCLFVBSEssRUFJTE8sT0FKSyxFQUtMTyxNQUxLLEVBTUxaLFdBTkssRUFPTDtNQUNJdUIsYUFBYUYsS0FBSy9SLElBQXRCO01BQ0lrUyxZQUFZSCxLQUFLalMsR0FBckI7O01BRUlxUyxXQUFXcEIsWUFBWSxNQUFaLEdBQXFCLENBQUNYLFlBQXRCLEdBQXFDLElBQXBEO01BQ0lnQyxhQUFhckIsWUFBWSxNQUFaLEdBQXFCLENBQUNYLFlBQXRCLEdBQXFDLElBQXREO01BQ0lpQyxjQUFjLElBQWxCO01BQ0lDLFlBQVl2QixZQUFZLE9BQVosR0FBc0IsQ0FBQ1gsWUFBdkIsR0FBc0MsSUFBdEQ7O01BRUlrQixXQUFXLElBQWYsRUFBcUI7Z0JBQ1BTLEtBQUtqUyxHQUFMLEdBQVdrUyxVQUFVTyxNQUFWLENBQWlCMVIsQ0FBeEM7ZUFDV21SLFVBQVVRLEtBQVYsQ0FBZ0IzUixDQUEzQjtHQUZGLE1BR08sSUFBSXlRLFdBQVcsTUFBZixFQUF1QjtnQkFFMUJTLEtBQUtqUyxHQUFMLEdBQVcwUSxXQUFXclIsTUFBdEIsR0FBK0J1UixZQUFZdlIsTUFBM0MsR0FBb0Q2UyxVQUFVTyxNQUFWLENBQWlCMVIsQ0FEdkU7a0JBRWNtUixVQUFVUSxLQUFWLENBQWdCM1IsQ0FBOUI7R0FISyxNQUlBLElBQUl5USxXQUFXLE1BQWYsRUFBdUI7aUJBQ2ZTLEtBQUsvUixJQUFMLEdBQVlnUyxVQUFVTyxNQUFWLENBQWlCdlgsQ0FBMUM7Z0JBQ1lnWCxVQUFVUSxLQUFWLENBQWdCeFgsQ0FBNUI7R0FGSyxNQUdBLElBQUlzVyxXQUFXLE9BQWYsRUFBd0I7aUJBRTNCUyxLQUFLL1IsSUFBTCxHQUFZd1EsV0FBVzdPLEtBQXZCLEdBQStCK08sWUFBWS9PLEtBQTNDLEdBQW1EcVEsVUFBVU8sTUFBVixDQUFpQnZYLENBRHRFO2lCQUVhZ1gsVUFBVVEsS0FBVixDQUFnQnhYLENBQTdCO0dBSEssTUFJQSxJQUFJc1csV0FBVyxRQUFmLEVBQXlCO1FBQzFCUCxZQUFZLE1BQVosSUFBc0JBLFlBQVksT0FBdEMsRUFBK0M7VUFDdkNHLGFBQWFnQixZQUFZeEIsWUFBWXZSLE1BQVosR0FBcUIsQ0FBcEQ7a0JBQ1krUixhQUFhVixXQUFXclIsTUFBWCxHQUFvQixDQUE3QztpQkFDVyxDQUFDcVIsV0FBV3JSLE1BQVgsR0FBb0JpUixZQUFyQixJQUFxQyxDQUFoRDs7UUFFRVcsWUFBWSxJQUFaLElBQW9CQSxZQUFZLE1BQXBDLEVBQTRDO1VBQ3BDRyxjQUFhZSxhQUFhdkIsWUFBWS9PLEtBQVosR0FBb0IsQ0FBcEQ7bUJBQ2F1UCxjQUFhVixXQUFXN08sS0FBWCxHQUFtQixDQUE3QztrQkFDWSxDQUFDNk8sV0FBVzdPLEtBQVgsR0FBbUJ5TyxZQUFwQixJQUFvQyxDQUFoRDs7OztTQUlHO2tCQUNTO1dBQ1A4QixTQURPO1lBRU5EO0tBSEg7aUJBS1E7V0FDTkUsUUFETTthQUVKQyxVQUZJO2NBR0hDLFdBSEc7WUFJTEM7O0dBVFY7Ozs7QUFlRixBQUFPLFNBQVNHLFdBQVQsQ0FDTEMsY0FESyxFQUVMbEMsVUFGSyxFQUdMTyxPQUhLLEVBSUxMLFdBSkssRUFLTEMsVUFMSyxFQU1MO01BQ01nQyxhQUFhdkMsZUFBZSxDQUFsQzs7TUFFSXRRLFlBQUo7TUFDSWlSLFlBQVksTUFBaEIsRUFBd0I7VUFDaEJKLFdBQVdpQyxPQUFYLEdBQXFCbEMsWUFBWTNRLE1BQWpDLEdBQTBDNFMsVUFBaEQ7R0FERixNQUVPLElBQUk1QixZQUFZLElBQWhCLEVBQXNCO1VBRXpCSixXQUFXaUMsT0FBWCxJQUFzQmxDLFlBQVk1USxHQUFaLEdBQWtCMFEsV0FBV3JSLE1BQTdCLEdBQXNDd1QsVUFBNUQsQ0FERjtHQURLLE1BR0E7O1VBRUNoQyxXQUFXaUMsT0FBWCxHQUFxQmxDLFlBQVk1USxHQUF2Qzs7OztNQUlFRSxhQUFKO01BQ0krUSxZQUFZLE1BQWhCLEVBQXdCO1dBRXBCSixXQUFXa0MsT0FBWCxJQUFzQm5DLFlBQVkxUSxJQUFaLEdBQW1Cd1EsV0FBVzdPLEtBQTlCLEdBQXNDZ1IsVUFBNUQsQ0FERjtHQURGLE1BR08sSUFBSTVCLFlBQVksT0FBaEIsRUFBeUI7V0FDdkJKLFdBQVdrQyxPQUFYLEdBQXFCbkMsWUFBWXhRLEtBQWpDLEdBQXlDeVMsVUFBaEQ7R0FESyxNQUVBOztXQUVFaEMsV0FBV2tDLE9BQVgsR0FBcUJuQyxZQUFZMVEsSUFBeEM7Ozs7U0FJSzBTLGVBQWU3UixDQUF0QjtVQUNRNlIsZUFBZTFYLENBQXZCO1NBQ08sRUFBRThFLFFBQUYsRUFBT0UsVUFBUCxFQUFQOzs7SUFHbUI4Uzs7Ozs7Ozs7Ozs7Ozs7eUxBQ25CNUcsUUFBZTtvQkFDQzthQUNQNkcsU0FETztlQUVMQSxTQUZLO2dCQUdKQSxTQUhJO2NBSU5BO09BTEs7bUJBT0E7YUFDTkEsU0FETTtlQUVKQSxTQUZJO2dCQUdIQSxTQUhHO2NBSUxBO09BWEs7ZUFhSjthQTZCWEMsb0JBQW9CLFVBQUNoYyxLQUFELEVBQWtCO1VBRWxDMGIsY0FGa0MsR0FPaEMxYixLQVBnQyxDQUVsQzBiLGNBRmtDO1VBR2xDakMsY0FIa0MsR0FPaEN6WixLQVBnQyxDQUdsQ3laLGNBSGtDO1VBSWxDd0Msd0JBSmtDLEdBT2hDamMsS0FQZ0MsQ0FJbENpYyx3QkFKa0M7VUFLbEN2QyxXQUxrQyxHQU9oQzFaLEtBUGdDLENBS2xDMFosV0FMa0M7VUFNbEMvTyxLQU5rQyxHQU9oQzNLLEtBUGdDLENBTWxDMkssS0FOa0M7OztVQVM5QmdQLGFBQWE7Z0JBQ1RySyxPQUFPNE0sV0FERTtlQUVWNU0sT0FBTzZNLFVBRkc7aUJBR1JGLDJCQUEyQixDQUEzQixHQUErQjNNLE9BQU9zTSxPQUg5QjtpQkFJUkssMkJBQTJCLENBQTNCLEdBQStCM00sT0FBT3VNO09BSmpEOztVQU9NckMsYUFBYTtnQkFDVCxNQUFLK0IsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWWEsWUFBMUIsR0FBeUMsQ0FEaEM7O09BQW5COzs7VUFNTXJDLFVBQVVSLFdBQ2RDLFVBRGMsRUFFZEMsY0FGYyxFQUdkQyxXQUhjLEVBSWRDLFVBSmMsQ0FBaEI7OztVQVFNVyxTQUFTTixVQUFVUixVQUFWLEVBQXNCTyxPQUF0QixFQUErQkwsV0FBL0IsRUFBNENDLFVBQTVDLENBQWY7OztVQUdNb0IsT0FBT1UsWUFDWEMsY0FEVyxFQUVYbEMsVUFGVyxFQUdYTyxPQUhXLEVBSVhMLFdBSlcsRUFLWEMsVUFMVyxDQUFiOzs7VUFTTTBDLGFBQWE5QixlQUFlRCxNQUFmLEVBQXVCWixXQUF2QixFQUFvQ0MsVUFBcEMsQ0FBbkI7Ozs7MkJBR3NDbUIsY0FDcENDLElBRG9DLEVBRXBDc0IsVUFGb0MsRUFHcEM3QyxVQUhvQyxFQUlwQ08sT0FKb0MsRUFLcENPLE1BTG9DLEVBTXBDWixXQU5vQyxDQTdDRjtVQTZDNUI0QyxZQTdDNEIsa0JBNkM1QkEsWUE3QzRCO1VBNkNkQyxXQTdDYyxrQkE2Q2RBLFdBN0NjOztZQXNEL0JsSCxRQUFMLENBQWM7Z0NBQUE7a0NBQUE7O09BQWQ7Ozs7Ozt3Q0FoRmtCOzs7V0FDYjJHLGlCQUFMLENBQXVCLEtBQUtoYyxLQUE1QjtpQkFDVyxZQUFNO1lBQ1gsT0FBS0EsS0FBTCxDQUFXd2MsV0FBWCxJQUEwQixPQUFLakIsTUFBbkMsRUFBMkM7aUJBQ3BDQSxNQUFMLENBQVlrQixLQUFaOztPQUZKO2VBS1NDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUsxYyxLQUFMLENBQVdvVSxPQUE5QyxFQUF1RCxJQUF2RDthQUNPc0ksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBSzFjLEtBQUwsQ0FBVzJjLFFBQTdDO2FBQ09ELGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLEtBQUsxYyxLQUFMLENBQVc0YyxTQUE5Qzs7Ozs4Q0FHd0JDLFdBQWtCO1dBQ3JDYixpQkFBTCxDQUF1QmEsU0FBdkI7Ozs7MkNBR3FCO2VBQ1pDLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDLEtBQUs5YyxLQUFMLENBQVdvVSxPQUFqRCxFQUEwRCxJQUExRDthQUNPMEksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBSzljLEtBQUwsQ0FBVzJjLFFBQWhEO2FBQ09HLG1CQUFQLENBQTJCLFNBQTNCLEVBQXNDLEtBQUs5YyxLQUFMLENBQVc0YyxTQUFqRDs7Ozs7Ozs7Ozs2QkFzRU87OzttQkFDOEIsS0FBSzVjLEtBRG5DO1VBQ0MrYyxPQURELFVBQ0NBLE9BREQ7VUFDVXhSLFFBRFYsVUFDVUEsUUFEVjtVQUNvQlosS0FEcEIsVUFDb0JBLEtBRHBCOzs7O1VBSURxUyxhQUFhLEtBQUs5SCxLQUFMLENBQVc2RSxPQUFYLEtBQXVCLElBQXZCLEdBQThCLFFBQTlCLEdBQXlDLFNBQTVEO1VBQ01rRCxhQUFnQkYsT0FBaEIsT0FBTjtVQUNNRyxTQUFTSCxZQUFZLE9BQVosR0FBc0IsU0FBdEIsR0FBa0MsSUFBakQ7VUFDTUksY0FBY0osWUFBWSxPQUFaLEdBQXNCLFdBQXRCLEdBQW9DQSxPQUF4RDs7YUFHRW5SOzs7cUJBQ2F6TSxVQUFPaWUsU0FEcEI7NEJBRVdGLGNBQVQsRUFBaUJGLHNCQUFqQixJQUFnQyxLQUFLOUgsS0FBTCxDQUFXb0gsWUFBM0M7Ozs7O3VCQUdhOU4sV0FDVDVILE9BQU9xVyxVQUFQLENBRFMsRUFFVHJXLE9BQU91VyxXQUFQLENBRlMsRUFHVGhlLFVBQU9rZSxVQUhFLEVBSVRsZSxVQUFPbWUsUUFKRSxDQURiO2lCQU9PLGdCQUFLO3FCQUNIL0IsTUFBTCxHQUFjcFgsQ0FBZDthQVJKO3NCQVVZLENBQUM7Ozs7O3lCQUdFcUssV0FBV3JQLFVBQU9rZSxVQUFsQixFQUE4QmxlLFVBQU9vZSxhQUFyQyxDQURiO3FCQUVTLEVBQUU1UyxZQUFGOzs7V0FkWDs7Ozt5QkFtQmU2RCxXQUFXNUgsT0FBT21XLE9BQVAsQ0FBWCxFQUE0QjVkLFVBQU9xYyxLQUFuQyxDQURiO2tDQUVjLEtBQUt0RyxLQUFMLENBQVdxSCxXQUF2Qjs7MEJBRUMsS0FBRCxJQUFPLFdBQVcsS0FBS3JILEtBQUwsQ0FBVzZFLE9BQTdCOzs7T0EzQlI7Ozs7RUFuSGtDN0o7QUF1SnRDNEwsU0FBUzVQLFNBQVQsR0FBcUI7V0FDVkosVUFBVUMsS0FBVixDQUFnQixDQUFDLFVBQUQsRUFBYSxPQUFiLEVBQXNCLFFBQXRCLENBQWhCLENBRFU7WUFFVEQsVUFBVUssSUFGRDtrQkFHSEwsVUFBVUMsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxPQUFQLEVBQWdCLE1BQWhCLEVBQXdCLE1BQXhCLENBQWhCLENBSEc7V0FJVkQsVUFBVXFFLElBQVYsQ0FBZXZCLFVBSkw7YUFLUjlDLFVBQVVxRSxJQUFWLENBQWV2QixVQUxQO1lBTVQ5QyxVQUFVcUUsSUFBVixDQUFldkIsVUFOTjtrQkFPSDlDLFVBQVVNLEtBQVYsQ0FBZ0IsRUFBRXBJLEdBQUc4SCxVQUFVVSxNQUFmLEVBQXVCM0MsR0FBR2lDLFVBQVVVLE1BQXBDLEVBQWhCLENBUEc7NEJBUU9WLFVBQVVTLElBUmpCO2VBU05ULFVBQVVTLElBVEo7ZUFVTlQsVUFBVU0sS0FBVixDQUFnQjtZQUNuQk4sVUFBVVUsTUFEUztZQUVuQlYsVUFBVVUsTUFGUztVQUdyQlYsVUFBVVUsTUFIVztXQUlwQlYsVUFBVVUsTUFKVTtTQUt0QlYsVUFBVVUsTUFMWTtXQU1wQlYsVUFBVVU7R0FOTixDQVZNO1NBa0JaVixVQUFVVTtDQWxCbkI7O0FDdmRBLElBQU1nUixpQkFBaUI7TUFDakIsR0FEaUI7TUFFakIsR0FGaUI7TUFHakIsR0FIaUI7TUFJakIsR0FKaUI7TUFLakI7Q0FMTjs7QUFRQSxJQUFNQyxrQkFBa0IsRUFBeEI7O0lBbUJxQkM7Ozs7Ozs7Ozs7Ozs7OzZMQUNuQnhJLFFBQWU7c0JBQ0c7V0FDWCxDQURXO1dBRVg7T0FIUTsyQkFLUTtnQkFDWCxDQURXO2dCQUVYLENBRlc7Y0FHYixDQUhhO2VBSVosQ0FKWTthQUtkLENBTGM7ZUFNWjs7YUFjWHlJLGdCQUFnQixVQUFDM0ksS0FBRCxFQUFnQztVQUMxQ0EsTUFBTTRJLE9BQU4sS0FBa0JILGVBQXRCLEVBQXVDO2NBQ2hDemQsS0FBTCxDQUFXNmQsU0FBWDs7YUFJSkMsa0JBQWtCLFVBQUM5SSxLQUFELEVBQWtCO1VBRWhDQSxNQUFNZSxNQUFOLFlBQXdCZ0ksSUFBeEIsSUFDQSxNQUFLL2QsS0FBTCxDQUFXZ2UsTUFEWCxJQUVBLENBQUMsTUFBS2hlLEtBQUwsQ0FBV2dlLE1BQVgsQ0FBa0JsVCxRQUFsQixDQUEyQmtLLE1BQU1lLE1BQWpDLENBRkQsSUFHQSxNQUFLdUgsUUFITCxJQUlBLENBQUMsTUFBS0EsUUFBTCxDQUFjeFMsUUFBZCxDQUF1QmtLLE1BQU1lLE1BQTdCLENBTEgsRUFNRTtjQUNLL1YsS0FBTCxDQUFXNmQsU0FBWDs7YUFJSkksb0JBQW9CLFVBQUNqZSxLQUFELEVBQWtCO1VBQzVCZ2UsTUFENEIsR0FDU2hlLEtBRFQsQ0FDNUJnZSxNQUQ0QjtVQUNwQi9CLHdCQURvQixHQUNTamMsS0FEVCxDQUNwQmljLHdCQURvQjs7O1VBR2hDaUMsNEJBQUo7VUFDSXhDLHVCQUFKO1VBQ0lzQyxNQUFKLEVBQVk7OEJBQ1lBLE9BQU9HLHFCQUFQLEVBQXRCOzs7eUJBR2lCO2FBQ1psQywyQkFDQ2lDLG9CQUFvQmxWLElBQXBCLEdBQTJCZ1YsT0FBT0ksVUFEbkMsR0FFQyxDQUhXO2FBSVpuQywyQkFDQ2lDLG9CQUFvQnBWLEdBQXBCLEdBQTBCa1YsT0FBT0ssU0FEbEMsR0FFQztTQU5OOzs7WUFVR2hKLFFBQUwsQ0FBYyxFQUFFcUcsOEJBQUYsRUFBa0J3Qyx3Q0FBbEIsRUFBZDs7Ozs7O3dDQS9Da0I7V0FDYkQsaUJBQUwsQ0FBdUIsS0FBS2plLEtBQTVCOzs7OzhDQUd3QjZjLFdBQWtCO1dBQ3JDb0IsaUJBQUwsQ0FBdUJwQixTQUF2Qjs7Ozs2QkE2Q087OzttQkFRSCxLQUFLN2MsS0FSRjtVQUVMZ2UsTUFGSyxVQUVMQSxNQUZLO1VBR0xqQixPQUhLLFVBR0xBLE9BSEs7VUFJTHhSLFFBSkssVUFJTEEsUUFKSztVQUtMa08sY0FMSyxVQUtMQSxjQUxLO1VBTUx3Qyx3QkFOSyxVQU1MQSx3QkFOSztVQU9MTyxXQVBLLFVBT0xBLFdBUEs7O1VBU0gsQ0FBQ3dCLE1BQUwsRUFBYTtlQUNKLElBQVA7O1VBRUkvZCxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsSUFBWCxHQUFrQixLQUFLRCxLQUFMLENBQVdDLElBQTdCLEdBQW9DLElBQWpEO1VBQ00wSyxRQUFRLE9BQU8xSyxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCdWQsZUFBZXZkLElBQWYsQ0FBM0IsR0FBa0RBLElBQWhFO2FBRUUyTDtXQUFBOzs7OztpQkFFUyxnQkFBSztxQkFDSDBSLFFBQUwsR0FBZ0JuWixDQUFoQjs7O2VBR0ltWixRQUFMLEdBQ0MxUjtvQkFBQTs7dUJBQ1dtUixPQURYOzhCQUVrQnRELGNBRmxCO3VCQUdXLEtBQUtxRSxlQUhoQjt5QkFJYSxLQUFLSCxhQUpsQjt3QkFLWSxLQUFLTSxpQkFMakI7d0NBTTRCaEMsd0JBTjVCOzhCQU9rQixLQUFLL0csS0FBTCxDQUFXd0csY0FQN0I7MkJBUWVjLFdBUmY7MkJBU2UsS0FBS3RILEtBQUwsQ0FBV2dKLG1CQVQxQjtxQkFVU3ZUOzs7V0FYVixHQWVHOztPQXRCVjs7OztFQWhGb0N1Rjs7O0FBNkd4Q3dOLFdBQVd4UixTQUFYLEdBQXVCO1VBQ2JKLFVBQVVXLEtBQVYsQ0FBZ0I7Y0FDWlgsVUFBVXFFLElBREU7MkJBRUNyRSxVQUFVcUU7R0FGM0IsQ0FEYTtXQUtackUsVUFBVUMsS0FBVixDQUFnQixDQUFDLFVBQUQsRUFBYSxPQUFiLEVBQXNCLFFBQXRCLENBQWhCLENBTFk7WUFNWEQsVUFBVUssSUFOQztrQkFPTEwsVUFBVUMsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxPQUFQLEVBQWdCLE1BQWhCLEVBQXdCLE1BQXhCLENBQWhCLENBUEs7YUFRVkQsVUFBVXFFLElBQVYsQ0FBZXZCLFVBUkw7NEJBU0s5QyxVQUFVUyxJQVRmO2VBVVJULFVBQVVTLElBVkY7UUFXZlQsVUFBVVEsU0FBVixDQUFvQixDQUN4QlIsVUFBVVUsTUFEYyxFQUV4QlYsVUFBVUMsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixDQUFoQixDQUZ3QixDQUFwQjs7Q0FYUjs7QUN4SWUsU0FBU3VTLFdBQVQsQ0FBcUJ0ZSxLQUFyQixFQUFtQztNQUU5Q2dlLE1BRjhDLEdBUzVDaGUsS0FUNEMsQ0FFOUNnZSxNQUY4QztNQUc5Q3hILEVBSDhDLEdBUzVDeFcsS0FUNEMsQ0FHOUN3VyxFQUg4QztNQUk5Q2lELGNBSjhDLEdBUzVDelosS0FUNEMsQ0FJOUN5WixjQUo4QztNQUs5QzhFLE9BTDhDLEdBUzVDdmUsS0FUNEMsQ0FLOUN1ZSxPQUw4QztNQU05Q1YsU0FOOEMsR0FTNUM3ZCxLQVQ0QyxDQU05QzZkLFNBTjhDOzhCQVM1QzdkLEtBVDRDLENBTzlDaWMsd0JBUDhDO01BTzlDQSx3QkFQOEMseUNBT25CLElBUG1CO01BUTlDaGMsSUFSOEMsR0FTNUNELEtBVDRDLENBUTlDQyxJQVI4Qzs7O01BVzVDLENBQUMrZCxNQUFMLEVBQWE7V0FDSixJQUFQOzs7U0FJQXBTO2NBQUE7O2NBQ1VvUyxNQURWO2VBRVUsUUFGVjtzQkFHa0J2RSxjQUhsQjtpQkFJYW9FLFNBSmI7Z0NBSzRCNUIsd0JBTDVCO1lBTVFoYzs7O1NBRU47UUFBSyxTQUFTLENBQWQ7O1lBQ0U7VUFBTSxVQUFOLEVBQVcsT0FBTSxPQUFqQjs7O1lBQ1EsSUFBSXVXLEVBQVY7Ozs7O0dBWFI7OztBQWtCRjhILFlBQVlwUyxTQUFaLEdBQXdCO1VBQ2RKLFVBQVVXLEtBQVYsQ0FBZ0I7Y0FDWlgsVUFBVXFFLElBREU7MkJBRUNyRSxVQUFVcUU7R0FGM0IsQ0FEYztrQkFLTnJFLFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQixNQUFoQixFQUF3QixNQUF4QixDQUFoQixDQUxNO1dBTWJELFVBQVVZLE1BQVYsQ0FBaUJrQyxVQU5KO2FBT1g5QyxVQUFVcUUsSUFBVixDQUFldkIsVUFQSjs0QkFRSTlDLFVBQVVTLElBUmQ7UUFTaEJULFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsQ0FBaEI7Q0FUUjs7SUNyQ3FCeVM7Ozs7Ozs7Ozs7Ozs7OzZMQWtCbkIzSCxRQUFRLFlBQU07d0JBUVIsTUFBSzdXLEtBUkc7VUFFVnllLGVBRlUsZUFFVkEsZUFGVTtVQUdWQyxPQUhVLGVBR1ZBLE9BSFU7VUFJVkMsVUFKVSxlQUlWQSxVQUpVO1VBS1ZDLFNBTFUsZUFLVkEsU0FMVTtVQU1WQyxZQU5VLGVBTVZBLFlBTlU7VUFPVkMsU0FQVSxlQU9WQSxTQVBVOzs7VUFVUkosV0FBV0MsVUFBWCxJQUF5QixDQUFDQyxTQUE5QixFQUF5Qzs7O1VBR25DRyxlQUFlTixrQkFBa0IsQ0FBdkM7O1VBRUlLLFlBQVlDLFlBQVosR0FBMkJGLFlBQS9CLEVBQTZDOzs7Ozs7Ozt3Q0F2QjNCO2lCQUNQLEtBQUtoSSxLQUFoQjs7Ozt5Q0FHbUI7V0FDZEEsS0FBTDs7Ozs2QkF1Qk87YUFDQSxJQUFQOzs7O0VBdkNvQzNHOztBQUFuQnNPLFdBQ1p0UyxZQUFZO21CQUNBSixVQUFVVSxNQUFWLENBQWlCb0MsVUFEakI7V0FFUjlDLFVBQVVTLElBRkY7Y0FHTFQsVUFBVVMsSUFBVixDQUFlcUMsVUFIVjthQUlOOUMsVUFBVXFFLElBSko7Z0JBS0hyRSxVQUFVVSxNQUFWLENBQWlCb0MsVUFMZDthQU1OOUMsVUFBVVUsTUFBVixDQUFpQm9DOzs7OztBQ1ZoQyxTQUFTb1Esa0JBQVQsQ0FBNEJDLGVBQTVCLEVBQTZDO1NBQ3BDLE9BQU9BLGVBQVAsS0FBMkIsVUFBM0IsR0FDSEEsaUJBREcsR0FFSEEsZUFGSjs7O0lBS21CQzs7Ozs7Ozs7Ozs7Ozs7dU1BOEJuQkMsd0JBQXdCO2FBQU0sTUFBS0YsZUFBWDthQVd4QkcsZUFBZSxVQUFDcEssS0FBRCxFQUFrQjtZQUMxQmhWLEtBQUwsQ0FBV3FmLFFBQVgsQ0FBb0JySyxLQUFwQjs7Ozs7O3dDQWxDa0I7VUFDWmlLLGtCQUFrQkQsbUJBQW1CLEtBQUtoZixLQUFMLENBQVdpZixlQUE5QixDQUF4QjtVQUNJLENBQUNBLGVBQUwsRUFBc0I7OztXQUdqQksscUJBQUwsQ0FBMkJMLGVBQTNCOzs7OzhDQUd3QnBDLFdBQWtCO1VBQ3BDMEMsc0JBQXNCUCxtQkFBbUJuQyxVQUFVb0MsZUFBN0IsQ0FBNUI7VUFDSSxDQUFDTSxtQkFBRCxJQUF3QkEsd0JBQXdCLEtBQUtOLGVBQXpELEVBQTBFOzs7V0FHckVLLHFCQUFMLENBQTJCQyxtQkFBM0I7Ozs7MkNBR3FCO1VBQ2pCLEtBQUtOLGVBQVQsRUFBMEI7YUFDbkJBLGVBQUwsQ0FBcUJuQyxtQkFBckIsQ0FBeUMsUUFBekMsRUFBbUQsS0FBS3NDLFlBQXhEOzs7OzswQ0FNa0JILGlCQUE4QjtVQUM5QyxLQUFLQSxlQUFULEVBQTBCOzthQUVuQkEsZUFBTCxDQUFxQm5DLG1CQUFyQixDQUF5QyxRQUF6QyxFQUFtRCxLQUFLc0MsWUFBeEQ7O1dBRUdILGVBQUwsR0FBdUJBLGVBQXZCO1dBQ0tBLGVBQUwsQ0FBcUJ2QyxnQkFBckIsQ0FBc0MsUUFBdEMsRUFBZ0QsS0FBSzBDLFlBQXJEOzs7OzZCQVNPO2FBQ0FsUCxRQUFBLENBQWVzUCxJQUFmLENBQW9CLEtBQUt4ZixLQUFMLENBQVd1TCxRQUEvQixDQUFQOzs7O0VBaER5QzJFOztBQUF4QmdQLGdCQUNaaFQsWUFBWTtZQUNQSixVQUFVMlQsT0FBVixDQUFrQjdRLFVBRFg7WUFFUDlDLFVBQVVxRSxJQUFWLENBQWV2QixVQUZSO21CQUdBOUMsVUFBVVEsU0FBVixDQUFvQixDQUFDUixVQUFVTyxNQUFYLEVBQW1CUCxVQUFVcUUsSUFBN0IsQ0FBcEIsRUFDZHZCOzs7QUNwQlEsU0FBUzhRLFFBQVQsQ0FBa0IvZixFQUFsQixFQUE0RDtNQUExQmdnQixVQUEwQix1RUFBTCxHQUFLOztNQUNyRUMsYUFBSjtNQUNJQyxtQkFBSjtTQUNPLFlBQWtCO3NDQUFkQyxJQUFjO1VBQUE7OztRQUNqQkMsTUFBTUMsS0FBS0QsR0FBTCxFQUFaO1FBQ0lILFFBQVFHLE1BQU1ILE9BQU9ELFVBQXpCLEVBQXFDO21CQUN0QkUsVUFBYjttQkFDYUksV0FBVyxZQUFNO2VBQ3JCRixHQUFQOzhDQUNNRCxJQUFOO09BRlcsRUFHVkgsVUFIVSxDQUFiO0tBRkYsTUFNTzthQUNFSSxHQUFQOzRDQUNNRCxJQUFOOztHQVZKOzs7SUNEbUJJOzs7U0FDbkJwZ0IsTUFBcUIsSUFBSXFnQixPQUFKOzs7OzsyQkFFakJwVixLQUFZO2FBQ1AsS0FBS2pMLEdBQUwsQ0FBU3NnQixHQUFULENBQWFyVixHQUFiLENBQVA7Ozs7d0JBR0VBLEtBQWlCO2FBQ1osS0FBS2pMLEdBQUwsQ0FBU3VnQixHQUFULENBQWF0VixHQUFiLENBQVA7Ozs7MkJBR0VBLEtBQVFsSCxPQUFnQjtXQUNyQi9ELEdBQUwsQ0FBU3dnQixHQUFULENBQWF2VixHQUFiLEVBQWtCbEgsS0FBbEI7Ozs7NEJBR1k7V0FDUC9ELEdBQUwsR0FBVyxJQUFJcWdCLE9BQUosRUFBWDs7Ozs7O0FDbEJHLFNBQVNJLGdCQUFULENBQTBCZCxPQUExQixFQUF3RDtTQUN0REEsWUFBWW5RLE1BQVosR0FBcUJBLE9BQU80TSxXQUE1QixHQUEwQ3VELFFBQVFyRCxZQUF6RDs7O0FBR0YsQUFBTyxTQUFTb0Usa0JBQVQsR0FBOEI7TUFDL0JsUixPQUFPc00sT0FBUCxLQUFtQkcsU0FBdkIsRUFBa0M7O1dBRXpCek0sT0FBT3NNLE9BQWQ7R0FGRixNQUdPLElBQ0w2RSxTQUFTQyxlQUFULElBQ0FELFNBQVNDLGVBQVQsQ0FBeUI1QixTQUF6QixLQUF1Qy9DLFNBRmxDLEVBR0w7O1dBRU8wRSxTQUFTQyxlQUFULENBQXlCNUIsU0FBaEM7O1NBRUssQ0FBUDs7O0FBR0YsQUFBTyxTQUFTNkIsb0JBQVQsQ0FBOEJsQixPQUE5QixFQUE0RDtTQUMxREEsWUFBWW5RLE1BQVosR0FDSGtSLG9CQURHLEdBRUhmLFFBQVFYLFNBQVIsR0FBb0JXLFFBQVF0QixxQkFBUixHQUFnQ3JWLEdBRnhEOzs7QUFLRixBQUFPLFNBQVM4WCxlQUFULENBQXlCbkIsT0FBekIsRUFBdUQ7U0FDckRBLFlBQVluUSxNQUFaLElBQXNCbVIsU0FBU0MsZUFBL0IsR0FDSEQsU0FBU0MsZUFBVCxDQUF5QjdCLFlBRHRCLEdBRUhZLFFBQVFaLFlBRlo7OztBQUtGLEFBQU8sU0FBU2dDLFlBQVQsQ0FBc0JwQixPQUF0QixFQUFvRDtTQUNsREEsWUFBWW5RLE1BQVosR0FBcUJrUixvQkFBckIsR0FBNENmLFFBQVFYLFNBQTNEOzs7QUNoQ0ssSUFBTWdDLHNCQUFzQkMsT0FBTyxTQUFQLENBQTVCO0FBQ1AsQUFBTyxJQUFNQyx5QkFBeUJELE9BQU8sWUFBUCxDQUEvQjs7QUNFUCxJQUFNRSxTQUFTLFNBQVRBLE1BQVMsTUFBTztNQUNoQmpKLE1BQU0sQ0FBVjtPQUNLLElBQUlrSixJQUFJLENBQWIsRUFBZ0JBLElBQUlsVyxJQUFJMUssTUFBeEIsRUFBZ0M0Z0IsS0FBSyxDQUFyQyxFQUF3QztRQUNsQ2xXLElBQUlrVyxDQUFKLElBQVNsVyxJQUFJZ04sR0FBSixDQUFiLEVBQXVCO1lBQ2ZrSixDQUFOOzs7U0FHR2xKLEdBQVA7Q0FQRjs7O0FBVUEsSUFBTW1KLFlBQVksU0FBWkEsU0FBWSxDQUFDeFcsS0FBRDtNQUFReEMsTUFBUix1RUFBaUJpWixRQUFqQjtTQUErQjtTQUMxQyxDQUFDLElBRHlDO1VBRXpDLENBQUMsSUFGd0M7Z0JBQUE7O0dBQS9CO0NBQWxCOztBQU9BLHFCQUFlO01BQ2JDLEtBRGEsUUFDYkEsS0FEYTs4QkFFYkMsV0FGYTtNQUViQSxXQUZhLG9DQUVDLEdBRkQ7eUJBR2JDLE1BSGE7TUFHYkEsTUFIYSwrQkFHSixFQUhJOzBCQUliQyxPQUphO01BSWJBLE9BSmEsZ0NBSUgsQ0FKRztNQUtiN1csS0FMYSxRQUtiQSxLQUxhO1NBWVIsVUFBQ21OLEtBQUQsRUFBcUI7UUFDdEJuTixTQUFTLElBQWIsRUFBbUI7YUFDVm1OLE1BQU1oWSxHQUFOLENBQVU7ZUFBTXFoQixVQUFVRyxXQUFWLENBQU47T0FBVixDQUFQOzs7UUFHSUcsdUJBQXVCSCxjQUFjQyxNQUEzQztRQUNNRyxjQUFjemdCLEtBQUt5VyxHQUFMLENBQ2xCelcsS0FBSzBnQixLQUFMLENBQVcsQ0FBQ2hYLFFBQVE0VyxNQUFULElBQW1CRSxvQkFBOUIsQ0FEa0IsRUFFbEJELE9BRmtCLENBQXBCOztRQUtNSSxVQUFVLElBQUloaUIsS0FBSixDQUFVOGhCLFdBQVYsRUFBdUJHLElBQXZCLENBQTRCLENBQTVCLENBQWhCO1FBQ01DLGVBQWU3Z0IsS0FBS3lXLEdBQUwsQ0FDbkJ6VyxLQUFLMGdCLEtBQUwsQ0FBVyxDQUFDaFgsUUFBUThXLHVCQUF1QkMsV0FBL0IsR0FBNkNILE1BQTlDLElBQXdELENBQW5FLENBRG1CLEVBRW5CLENBRm1CLENBQXJCOztXQUtPekosTUFBTTFZLE1BQU4sQ0FBYSxVQUFDZ00sR0FBRCxFQUFNdU0sSUFBTixFQUFlO1VBQzNCb0ssWUFBWTNXLEdBQWxCOztVQUVNakQsU0FBU2taLE1BQU1qQixHQUFOLENBQVV6SSxJQUFWLENBQWY7VUFDSUksaUJBQUo7O1VBRUk1UCxVQUFVLElBQWQsRUFBb0I7bUJBQ1BnWixVQUFVRyxXQUFWLENBQVg7T0FERixNQUVPO1lBQ0NVLGtCQUFrQjdaLFNBQVNvWixNQUFqQztZQUNNVSxNQUFNaEIsT0FBT1csT0FBUCxDQUFaO1lBQ005WSxNQUFNOFksUUFBUUssR0FBUixDQUFaO1lBQ01qWixPQUFPaVosTUFBTVIsb0JBQU4sR0FBNkJLLFlBQTFDOztnQkFFUUcsR0FBUixLQUFnQkQsZUFBaEI7bUJBQ1csRUFBRWxaLFFBQUYsRUFBT0UsVUFBUCxFQUFhMkIsT0FBTzJXLFdBQXBCLEVBQWlDblosY0FBakMsRUFBWDs7Z0JBRVE4UCxJQUFWLENBQWVGLFFBQWY7YUFDT2dLLFNBQVA7S0FsQkssRUFtQkosRUFuQkksQ0FBUDtHQTdCYTtDQUFmOztBQ2pCQSxJQUFNWixjQUFZLFNBQVpBLFNBQVksQ0FBQ3hXLEtBQUQ7TUFBUXhDLE1BQVIsdUVBQWlCaVosUUFBakI7U0FBK0I7U0FDMUMsQ0FBQyxJQUR5QztVQUV6QyxDQUFDLElBRndDO2dCQUFBOztHQUEvQjtDQUFsQjs7O0FBT0Esd0JBQWU7TUFDYkMsS0FEYSxRQUNiQSxLQURhOzhCQUViQyxXQUZhO01BRWJBLFdBRmEsb0NBRUMsR0FGRDt5QkFHYkMsTUFIYTtNQUdiQSxNQUhhLCtCQUdKLEVBSEk7TUFJYjVXLEtBSmEsUUFJYkEsS0FKYTswQkFLYjZXLE9BTGE7TUFLYkEsT0FMYSxnQ0FLSCxDQUxHO1NBWVIsVUFBQzFKLEtBQUQsRUFBcUI7UUFDdEJuTixTQUFTLElBQWIsRUFBbUI7YUFDVm1OLE1BQU1oWSxHQUFOLENBQVU7ZUFBTXFoQixZQUFVRyxXQUFWLENBQU47T0FBVixDQUFQOzs7UUFHSUcsdUJBQXVCSCxjQUFjQyxNQUEzQztRQUNNRyxjQUFjemdCLEtBQUt5VyxHQUFMLENBQ2xCelcsS0FBSzBnQixLQUFMLENBQVcsQ0FBQ2hYLFFBQVE0VyxNQUFULElBQW1CRSxvQkFBOUIsQ0FEa0IsRUFFbEJELE9BRmtCLENBQXBCOztRQUtNTyxZQUFZLEVBQWxCO1FBQ01ILFVBQVUsRUFBaEI7O1NBRUssSUFBSVYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJcEosTUFBTXhYLE1BQTFCLEVBQWtDNGdCLEtBQUssQ0FBdkMsRUFBMEM7VUFDcENuSixpQkFBSjtVQUNNNVAsU0FBU2taLE1BQU1qQixHQUFOLENBQVV0SSxNQUFNb0osQ0FBTixDQUFWLENBQWY7O1VBRUkvWSxVQUFVLElBQWQsRUFBb0I7bUJBQ1BnWixZQUFVRyxXQUFWLENBQVg7T0FERixNQUVPO1lBQ0N4ZCxTQUFTb2QsSUFBSVEsV0FBbkI7WUFDTVEsTUFBTWpoQixLQUFLMGdCLEtBQUwsQ0FBV1QsSUFBSVEsV0FBZixDQUFaOztZQUVJNWQsV0FBVyxDQUFYLElBQWdCcUUsU0FBU3laLFFBQVFNLEdBQVIsQ0FBN0IsRUFBMkM7a0JBQ2pDQSxHQUFSLElBQWUvWixNQUFmOzs7WUFHSVcsTUFDSm9aLE1BQU0sQ0FBTixHQUNJTixRQUFRTyxLQUFSLENBQWMsQ0FBZCxFQUFpQkQsR0FBakIsRUFBc0I5aUIsTUFBdEIsQ0FBNkIsVUFBQ2dqQixHQUFELEVBQU12WSxDQUFOO2lCQUFZdVksTUFBTXZZLENBQU4sR0FBVTBYLE1BQXRCO1NBQTdCLEVBQTJELENBQTNELENBREosR0FFSSxDQUhOOzttQkFLVztrQkFBQTtnQkFFSHpkLFNBQVMyZCxvQkFGTjtpQkFHRkgsV0FIRTs7U0FBWDs7Z0JBT1FySixJQUFWLENBQWVGLFFBQWY7O1dBRUtnSyxTQUFQO0dBdERhO0NBQWY7O0FDUEEsSUFBTWQsV0FBUyxTQUFUQSxNQUFTLE1BQU87TUFDaEJqSixNQUFNLENBQVY7T0FDSyxJQUFJa0osSUFBSSxDQUFiLEVBQWdCQSxJQUFJbFcsSUFBSTFLLE1BQXhCLEVBQWdDNGdCLEtBQUssQ0FBckMsRUFBd0M7UUFDbENsVyxJQUFJa1csQ0FBSixJQUFTbFcsSUFBSWdOLEdBQUosQ0FBYixFQUF1QjtZQUNma0osQ0FBTjs7O1NBR0dsSixHQUFQO0NBUEY7OztBQVVBLHVCQUFlLGdCQVlSO3lCQVhMdUosTUFXSztNQVhMQSxNQVdLLCtCQVhJLENBV0o7TUFWTEYsS0FVSyxRQVZMQSxLQVVLOzBCQVRMRyxPQVNLO01BVExBLE9BU0ssZ0NBVEssQ0FTTDttQ0FSTGEsZ0JBUUs7TUFSTEEsZ0JBUUsseUNBUmMsR0FRZDtNQVBMMVgsS0FPSyxRQVBMQSxLQU9LOztNQUNEQSxTQUFTLElBQWIsRUFBbUI7V0FDVixVQUFDbU4sS0FBRDthQUNMQSxNQUFNaFksR0FBTixDQUFVO2VBQU87ZUFDVnNoQixRQURVO2dCQUVUQSxRQUZTO2lCQUdSQSxRQUhRO2tCQUlQQTtTQUpBO09BQVYsQ0FESztLQUFQOzs7Ozs7TUFZSWtCLFdBQVdyaEIsS0FBSzBnQixLQUFMLENBQVdoWCxRQUFRMFgsZ0JBQW5CLENBQWpCO01BQ01YLGNBQWN6Z0IsS0FBS3lXLEdBQUwsQ0FDbEJ6VyxLQUFLMGdCLEtBQUwsQ0FBVyxDQUFDaFgsUUFBUTJYLFdBQVdmLE1BQXBCLElBQThCYyxnQkFBekMsQ0FEa0IsRUFFbEJiLE9BRmtCLENBQXBCO01BSU1GLGNBQWNyZ0IsS0FBSzBnQixLQUFMLENBQVdoWCxRQUFRK1csV0FBbkIsQ0FBcEI7O1NBRU8sVUFBQzVKLEtBQUQsRUFBcUI7O1FBRXBCOEosVUFBVSxJQUFJaGlCLEtBQUosQ0FBVThoQixXQUFWLEVBQXVCRyxJQUF2QixDQUE0QixDQUE1QixDQUFoQjs7V0FFTy9KLE1BQU0xWSxNQUFOLENBQWEsVUFBQ2dNLEdBQUQsRUFBTXVNLElBQU4sRUFBZTtVQUMzQm9LLFlBQVkzVyxHQUFsQjtVQUNNakQsU0FBU2taLE1BQU1qQixHQUFOLENBQVV6SSxJQUFWLENBQWY7VUFDSUksaUJBQUo7O1VBRUk1UCxVQUFVLElBQWQsRUFBb0I7bUJBQ1A7ZUFDSmlaLFFBREk7Z0JBRUhBLFFBRkc7aUJBR0ZFLFdBSEU7a0JBSURGO1NBSlY7T0FERixNQU9PO1lBQ0NhLE1BQU1oQixTQUFPVyxPQUFQLENBQVo7WUFDTTlZLE1BQU04WSxRQUFRSyxHQUFSLENBQVo7WUFDTWpaLE9BQU9pWixNQUFNWCxXQUFOLEdBQW9CQyxTQUFTLENBQTFDOztnQkFFUVUsR0FBUixLQUFnQjlaLE1BQWhCO21CQUNXO2tCQUFBO29CQUFBO2lCQUdGbVosY0FBY0MsTUFIWjs7U0FBWDs7O2dCQVFRdEosSUFBVixDQUFlRixRQUFmO2FBQ09nSyxTQUFQO0tBM0JLLEVBNEJKLEVBNUJJLENBQVA7R0FKRjtDQWpDRjs7SUNacUJROzs7O0lDQUFDOzs7O0FDNkRyQixJQUFNQyxrQkFBa0IsR0FBeEI7OztBQUdBLElBQU1DLHdCQUF3QixHQUE5Qjs7SUFFcUJDOzs7OzZDQUlhO2FBQ3ZCLElBQUl6QyxnQkFBSixFQUFQOzs7OytCQTZFVWxnQixLQUFaLEVBQTZCOzs7eUlBQ3JCQSxLQURxQjs7VUFpSTdCNGlCLGlCQWpJNkIsR0FpSVQsVUFBQ0MsR0FBRCxFQUF1QjtZQUNwQ0MsV0FBTCxHQUFtQkQsR0FBbkI7S0FsSTJCOztVQXFJN0JFLHFCQXJJNkIsR0FxSUwsVUFBQ0YsR0FBRCxFQUEyQjtZQUM1QzVELGVBQUwsR0FBdUI0RCxHQUF2QjtLQXRJMkI7O1VBcUo3QkcsWUFySjZCLEdBcUpkLFlBQU07VUFDZixNQUFLQyxhQUFULEVBQXdCO3FCQUNULE1BQUtBLGFBQWxCOztZQUVHQSxhQUFMLEdBQXFCaEQsV0FBVyxZQUFNO1lBQ2hDLE1BQUs2QyxXQUFULEVBQXNCO2dCQUNmek4sUUFBTCxDQUFjLEVBQUUxSyxPQUFPLE1BQUttWSxXQUFMLENBQWlCSSxXQUExQixFQUFkOztPQUZpQixFQUlsQlQsZUFKa0IsQ0FBckI7S0F6SjJCOztVQWdLN0JVLG9CQWhLNkIsR0FnS056RCxTQUFTLFlBQU07VUFDaEMsQ0FBQyxNQUFLVCxlQUFWLEVBQTJCOzs7VUFHckJBLGtCQUFrQixNQUFLQSxlQUFMLENBQXFCRSxxQkFBckIsRUFBeEI7O1VBRUksQ0FBQ0YsZUFBTCxFQUFzQjs7OztZQUlqQjVKLFFBQUwsQ0FBYzttQkFDRHdMLGFBQWE1QixlQUFiO09BRGI7S0FWcUIsQ0FoS007O1VBME03QkwsU0ExTTZCLEdBME1qQixZQUFNO1VBQ1J3RSxTQURRLEdBQ00sTUFBS3BqQixLQURYLENBQ1JvakIsU0FEUTs7VUFFWkEsYUFBYSxPQUFPQSxTQUFQLEtBQXFCLFVBQXRDLEVBQWtEO2NBQzNDL04sUUFBTCxDQUNFO3NCQUNjO1NBRmhCLEVBSUU7aUJBQU0rTixVQUFVLEVBQUV2akIsTUFBTSxNQUFLRyxLQUFMLENBQVc4WCxLQUFYLENBQWlCeFgsTUFBekIsRUFBVixDQUFOO1NBSkY7O0tBN015Qjs7VUFzTjdCK2lCLHNCQXRONkIsR0FzTkosVUFBQ0MsUUFBRCxFQUFjdEwsR0FBZCxFQUEyQkQsUUFBM0IsRUFBMkM7d0JBQzFCLE1BQUsvWCxLQURxQjtVQUNwRHVqQixZQURvRCxlQUMxREMsSUFEMEQ7VUFDekNDLFVBRHlDLGVBQ3pDQSxVQUR5QztVQUUxRDNhLEdBRjBELEdBRTdCaVAsUUFGNkIsQ0FFMURqUCxHQUYwRDtVQUVyREUsSUFGcUQsR0FFN0IrTyxRQUY2QixDQUVyRC9PLElBRnFEO1VBRS9DMkIsS0FGK0MsR0FFN0JvTixRQUY2QixDQUUvQ3BOLEtBRitDO1VBRXhDeEMsTUFGd0MsR0FFN0I0UCxRQUY2QixDQUV4QzVQLE1BRndDOzs7VUFJOUR1YixrQkFBSjtVQUNJLE1BQUsxakIsS0FBTCxDQUFXaWYsZUFBZixFQUFnQztZQUN4QjBFLGdCQUFnQixNQUFLbEYsZUFBTCxHQUF1QmlFLHFCQUE3QztZQUNNa0Isa0JBQWtCLE1BQUsxTyxLQUFMLENBQVc0SixTQUFYLEdBQXVCLE1BQUsrRSxlQUFwRDtZQUNNck0sY0FBY29NLGtCQUFrQkQsYUFBdEM7WUFDTUcsaUJBQ0pGLGtCQUFrQixNQUFLbkYsZUFBdkIsR0FBeUNrRixhQUQzQzs7b0JBR1ksRUFDVjVMLFNBQVNqUCxHQUFULEdBQWVpUCxTQUFTNVAsTUFBeEIsR0FBaUNxUCxXQUFqQyxJQUNBTyxTQUFTalAsR0FBVCxHQUFlZ2IsY0FGTCxDQUFaO09BUEYsTUFXTzs7b0JBRU8sSUFBWjs7O1VBR0lDLGdCQUNKblk7Ozt5QkFDZW9NLEdBRGY7cUJBRWEsQ0FBQzdZLFVBQU82a0IsYUFBUixFQUF1QjdrQixVQUFPOGtCLHNCQUE5QixFQUFzRDlqQixJQUF0RCxDQUNULEdBRFMsQ0FGYjtnQ0FBQTs7aUJBT1MsQ0FEUDtrQkFFUSxDQUZSO3VDQUcyQjZJLElBQXpCLHVCQUErQ0YsR0FBL0MsUUFIRjs2Q0FJaUNFLElBQS9CLHVCQUFxREYsR0FBckQsUUFKRjt3QkFBQTs7YUFPTTJhLGNBQWNDLFNBQWQsR0FDQSxFQURBLEdBRUEsRUFBRTlmLFNBQVMsTUFBWCxFQUFtQnNnQixZQUFZLE1BQS9CLEVBVE47O3NCQVlDWCxZQUFELElBQVcsTUFBTUQsUUFBakIsRUFBMkIsU0FBU3RMLEdBQXBDLEVBQXlDLGFBQWEsS0FBdEQ7T0FuQko7O2FBdUJPeUwsYUFBY0MsYUFBYUssYUFBZCxJQUFnQyxJQUE3QyxHQUFvREEsYUFBM0Q7S0FsUTJCOztVQUd0QnRGLGVBQUwsR0FBdUIsQ0FBdkI7VUFDS29GLGVBQUwsR0FBdUIsQ0FBdkI7O1VBRUszTyxLQUFMLEdBQWE7OEJBQ2FsVixNQUFNOFgsS0FBTixDQUFZcU0sSUFBWixDQUN0QjtlQUFRLENBQUMsQ0FBQ3hNLElBQUYsSUFBVSxDQUFDM1gsTUFBTW9rQixnQkFBTixDQUF1Qi9ELEdBQXZCLENBQTJCMUksSUFBM0IsQ0FBbkI7T0FEc0IsQ0FEYjtrQkFJQyxLQUpEO2lCQUtBLENBTEE7YUFNSm9FO0tBTlQ7Ozs7Ozs7Ozs7O3dDQWVrQjthQUNYVyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLc0csWUFBdkM7O1VBRU1yWSxRQUFRLEtBQUttWSxXQUFMLEdBQ1YsS0FBS0EsV0FBTCxDQUFpQkksV0FEUCxHQUVWLEtBQUtoTyxLQUFMLENBQVd2SyxLQUZmOztXQUlLMFosZ0JBQUw7O1VBRU12RixTQVRZLEdBU0UsS0FBSzVKLEtBVFAsQ0FTWjRKLFNBVFk7O1VBVWQsS0FBS0csZUFBTCxJQUF3QixJQUE1QixFQUFrQztZQUMxQkEsbUJBQWtCLEtBQUtBLGVBQUwsQ0FBcUJFLHFCQUFyQixFQUF4QjtZQUNJRixnQkFBSixFQUFxQjtzQkFDUDRCLGFBQWE1QixnQkFBYixDQUFaOzs7OztXQUtDNUosUUFBTCxDQUFjLEVBQUV5SixvQkFBRixFQUFhblUsWUFBYixFQUFkOzs7O29EQUcrRDtVQUFyQ21OLEtBQXFDLFFBQXJDQSxLQUFxQztVQUE5QnNNLGdCQUE4QixRQUE5QkEsZ0JBQThCOzs7O1VBR3pERSx5QkFBeUJ4TSxNQUFNcU0sSUFBTixDQUM3QjtlQUFRLENBQUNDLGlCQUFpQi9ELEdBQWpCLENBQXFCMUksSUFBckIsQ0FBVDtPQUQ2QixDQUEvQjs7V0FJSyxJQUFJdUosSUFBSSxDQUFiLEVBQWdCQSxJQUFJcEosTUFBTXhYLE1BQTFCLEVBQWtDNGdCLEtBQUssQ0FBdkMsRUFBMEM7OztZQUdwQyxLQUFLbGhCLEtBQUwsQ0FBVzhYLEtBQVgsQ0FBaUJvSixDQUFqQixNQUF3Qm5GLFNBQTVCLEVBQXVDO2VBQ2hDMUcsUUFBTCxDQUFjOzBEQUFBO3dCQUVBO1dBRmQ7Ozs7Ozs7Y0FVTTZMLENBQU4sTUFBYSxLQUFLbGhCLEtBQUwsQ0FBVzhYLEtBQVgsQ0FBaUJvSixDQUFqQixDQUFiOztjQUVNNWdCLE1BQU4sR0FBZSxLQUFLTixLQUFMLENBQVc4WCxLQUFYLENBQWlCeFgsTUFKbEMsRUFLRTtlQUNLK1UsUUFBTCxDQUFjOzBEQUFBO3dCQUVBO1dBRmQ7Ozs7OztVQVNBeUMsTUFBTXhYLE1BQU4sS0FBaUIsQ0FBakIsSUFBc0IsS0FBS04sS0FBTCxDQUFXOFgsS0FBWCxDQUFpQnhYLE1BQWpCLEdBQTBCLENBQXBELEVBQXVEO2FBQ2hEK1UsUUFBTCxDQUFjO3dEQUFBO3NCQUVBO1NBRmQ7T0FERixNQUtPLElBQUlpUCwyQkFBMkIsS0FBS3BQLEtBQUwsQ0FBV29QLHNCQUExQyxFQUFrRTs7YUFFbEVqUCxRQUFMLENBQWM7O1NBQWQ7Ozs7O3VDQU1lakcsV0FBcUJtVixXQUFrQjs7O21CQUNwQixLQUFLdmtCLEtBRGU7VUFDaEQ4WCxLQURnRCxVQUNoREEsS0FEZ0Q7VUFDekNzTSxnQkFEeUMsVUFDekNBLGdCQUR5Qzs7O21CQUczQyxLQUFLSSxjQUFsQjtXQUNLQSxjQUFMLEdBQXNCdkUsV0FBVyxZQUFNO2VBQ2hDb0UsZ0JBQUw7T0FEb0IsQ0FBdEI7O1VBSUlFLFVBQVU1WixLQUFWLElBQW1CLElBQW5CLElBQTJCLEtBQUt1SyxLQUFMLENBQVd2SyxLQUFYLEtBQXFCNFosVUFBVTVaLEtBQTlELEVBQXFFO3lCQUNsRDhaLEtBQWpCOzs7VUFHSUgseUJBQXlCeE0sTUFBTXFNLElBQU4sQ0FDN0I7ZUFBUSxDQUFDLENBQUN4TSxJQUFGLElBQVUsQ0FBQ3lNLGlCQUFpQi9ELEdBQWpCLENBQXFCMUksSUFBckIsQ0FBbkI7T0FENkIsQ0FBL0I7VUFJRTJNLDBCQUNBQSwyQkFBMkIsS0FBS3BQLEtBQUwsQ0FBV29QLHNCQUR0QyxJQUVBQyxVQUFVNVosS0FBVixJQUFtQixJQUhyQixFQUlFO2FBQ0srWixvQkFBTCxHQUE0QkMsc0JBQXNCLFlBQU07aUJBQ2pEdFAsUUFBTCxDQUFjOztXQUFkO1NBRDBCLENBQTVCOzs7Ozs7Ozs7OzJDQVdtQjtVQUNqQixLQUFLcVAsb0JBQVQsRUFBK0I7NkJBQ1IsS0FBS0Esb0JBQTFCOzttQkFFVyxLQUFLRixjQUFsQjttQkFDYSxLQUFLdkIsYUFBbEI7YUFDT25HLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtrRyxZQUExQzs7Ozs7Ozs7O3VDQWlEaUI7VUFDYixLQUFLL0QsZUFBTCxJQUF3QixJQUE1QixFQUFrQztZQUN4QkEsaUJBRHdCLEdBQ0osSUFESSxDQUN4QkEsZUFEd0I7O1lBRTFCMkYscUJBQXFCM0Ysa0JBQWdCRSxxQkFBaEIsRUFBM0I7WUFDSXlGLGtCQUFKLEVBQXdCO2VBQ2pCbkcsZUFBTCxHQUF1QjhCLGlCQUFpQnFFLGtCQUFqQixDQUF2QjtjQUNNaE8sS0FBSyxLQUFLa00sV0FBaEI7Y0FDSWxNLGNBQWNpTyxXQUFsQixFQUErQjtnQkFDdkJDLG9CQUFvQm5FLHFCQUFxQmlFLGtCQUFyQixDQUExQjtpQkFDS2YsZUFBTCxHQUNFak4sR0FBR3VILHFCQUFILEdBQTJCclYsR0FBM0IsR0FBaUNnYyxpQkFEbkM7Ozs7Ozs7Ozs7Ozs7OzZCQVlDO1dBQ0Y5a0IsS0FBTCxDQUFXb2tCLGdCQUFYLENBQTRCSyxLQUE1QjtXQUNLSixnQkFBTDtXQUNLVSxXQUFMOzs7OzZCQThETzs7O29CQVNILEtBQUsva0IsS0FURjtVQUVMc2hCLFdBRkssV0FFTEEsV0FGSztVQUdDaUMsWUFIRCxXQUdMQyxJQUhLO1VBSUx3QixRQUpLLFdBSUxBLFFBSks7VUFLUXpELE1BTFIsV0FLTDBELFdBTEs7VUFNTGIsZ0JBTkssV0FNTEEsZ0JBTks7VUFPTHRNLEtBUEssV0FPTEEsS0FQSztVQVFMMEosT0FSSyxXQVFMQSxPQVJLO21CQVVtQyxLQUFLdE0sS0FWeEM7VUFVQ29QLHNCQVZELFVBVUNBLHNCQVZEO1VBVXlCM1osS0FWekIsVUFVeUJBLEtBVnpCOzs7VUFZSC9FLGVBQUo7VUFDSW9mLFlBQVlyYSxVQUFVLElBQTFCLEVBQWdDO2lCQUNyQnVhLGdCQUFnQjt3QkFBQTtpQkFFaEJkLGdCQUZnQjswQkFBQTs0QkFJTDlDLFdBSks7O1NBQWhCLENBQVQ7T0FERixNQVFPLElBQ0wsS0FBS3RoQixLQUFMLENBQVc0RixNQUFYLEtBQXNCb2Isc0JBQXRCLElBQ0EsS0FBS2hoQixLQUFMLENBQVc0RixNQUFYLFlBQTZCdWYsZ0JBRnhCLEVBR0w7aUJBQ1NDLGlCQUFpQjtpQkFDakJoQixnQkFEaUI7a0NBQUE7d0JBQUE7MEJBQUE7O1NBQWpCLENBQVQ7T0FKSyxNQVdBO2lCQUNJaUIsY0FBYztpQkFDZGpCLGdCQURjO2tDQUFBO3dCQUFBOzBCQUFBOztTQUFkLENBQVQ7OztVQVNFa0IsaUJBQUo7VUFDSTNhLFNBQVMsSUFBVCxJQUFpQjJaLHNCQUFyQixFQUE2Qzs7O21CQUl6QzFZOzs7dUJBQ2F6TSxVQUFPb21CLE9BRHBCO21CQUVTLEVBQUVwZCxRQUFRLENBQVYsRUFBYXdDLE9BQU8sTUFBcEIsRUFGVDtpQkFHTyxLQUFLaVk7O2dCQUVINEMsTUFBTixDQUFhO21CQUFRN04sSUFBUjtXQUFiLEVBQTJCN1gsR0FBM0IsQ0FBK0IsVUFBQzZYLElBQUQsRUFBT3VKLENBQVA7bUJBQzlCdFY7OzsyQkFDWSxRQURaO3NDQUFBO3FCQUdPc1YsQ0FIUDt1QkFJUzt1QkFDQSxDQURBO3dCQUVDLENBRkQ7NkJBR00saUNBSE47bUNBSVksaUNBSlo7eUJBS0U4RCxXQUFXakosU0FBWCxHQUF1QnVGLFdBTHpCO2lCQUpUO3FCQVdPLGlCQUFNO3NCQUNMMUssTUFBTSxDQUFDb08sUUFBWCxFQUFxQjs7cUNBRUYxRSxHQUFqQixDQUFxQjNJLElBQXJCLEVBQTJCZixHQUFHd0YsWUFBOUI7Ozs7NEJBSUhtSCxZQUFELElBQVcsTUFBTTVMLElBQWpCLEVBQXVCLFNBQVN1SixDQUFoQyxFQUFtQyxhQUFhLEtBQWhEO2FBbkI0QjtXQUEvQjtTQU5MO09BSEYsTUFpQ08sSUFBSXZXLFNBQVMsSUFBYixFQUFtQjs7O21CQUdiaUIsdUJBQUssT0FBTyxFQUFFakIsT0FBTyxNQUFULEVBQVosRUFBK0IsS0FBSyxLQUFLaVksaUJBQXpDLEdBQVg7T0FISyxNQUlBOztZQUVDNkMsZ0JBQWdCM04sTUFBTTBOLE1BQU4sQ0FDcEI7aUJBQVE3TixRQUFReU0saUJBQWlCL0QsR0FBakIsQ0FBcUIxSSxJQUFyQixDQUFoQjtTQURvQixDQUF0QjtZQUdNK04saUJBQWlCNU4sTUFDcEIwTixNQURvQixDQUNiO2lCQUFRN04sUUFBUSxDQUFDeU0saUJBQWlCL0QsR0FBakIsQ0FBcUIxSSxJQUFyQixDQUFqQjtTQURhLEVBRXBCd0ssS0FGb0IsQ0FFZCxDQUZjLEVBRVhYLE9BRlcsQ0FBdkI7O1lBSU1PLFlBQVluYyxPQUFPNmYsYUFBUCxDQUFsQjtZQUNNRSxxQkFBcUIvZixPQUFPOGYsY0FBUCxDQUEzQjtZQUNNdmQsU0FBU2xILEtBQUt5VyxHQUFMLCtCQUFZcUssVUFBVWppQixHQUFWLENBQWM7aUJBQU84bEIsSUFBSTljLEdBQUosR0FBVThjLElBQUl6ZCxNQUFyQjtTQUFkLENBQVosRUFBZjttQkFFRXlEOztZQUFLLE9BQU8sRUFBRWpCLE9BQU8sTUFBVCxFQUFaLEVBQStCLEtBQUssS0FBS2lZLGlCQUF6Qzs7O2NBQ08sV0FBV3pqQixVQUFPb21CLE9BQXZCLEVBQWdDLE9BQU8sRUFBRXBkLGNBQUYsRUFBVXdDLFlBQVYsRUFBdkM7MEJBQ2lCN0ssR0FBZCxDQUFrQixVQUFDNlgsSUFBRCxFQUFPdUosQ0FBUDtxQkFDakIsT0FBS21DLHNCQUFMLENBQTRCMUwsSUFBNUIsRUFBa0N1SixDQUFsQyxFQUFxQ2EsVUFBVWIsQ0FBVixDQUFyQyxDQURpQjthQUFsQjtXQUZMOzs7Y0FNTyxXQUFXL2hCLFVBQU9vbUIsT0FBdkIsRUFBZ0MsT0FBTyxFQUFFNWEsWUFBRixFQUF2QzsyQkFDa0I3SyxHQUFmLENBQW1CLFVBQUMrbEIsSUFBRCxFQUFPM0UsQ0FBUCxFQUFhO2tCQUN6Qm5KLFdBQVc0TixtQkFBbUJ6RSxDQUFuQixDQUFqQjtxQkFFRXRWOzs7c0NBQ29Cc1YsQ0FEcEI7O2dDQUdnQixRQURkOzhCQUVZO3FCQUNQbkosUUFITCxDQUZGO3VCQU9PLGlCQUFNO3dCQUNMbkIsRUFBSixFQUFRO3VDQUNXMEosR0FBakIsQ0FBcUJ1RixJQUFyQixFQUEyQmpQLEdBQUd3RixZQUE5Qjs7Ozs4QkFJSG1ILFlBQUQsSUFBVyxNQUFNc0MsSUFBakIsRUFBdUIsU0FBUzNFLENBQWhDLEVBQW1DLGlCQUFuQztlQWRKO2FBRkQ7V0FQTDtlQTZCUWpDLGVBQUwsSUFDQ3JULGNBQUMsVUFBRDs2QkFDbUIsS0FBSzZTLGVBRHhCO3VCQUVhLEtBQUtHLFNBRmxCO3dCQUlJLEtBQUsxSixLQUFMLENBQVd5SixVQUFYLElBQXlCLEtBQUt6SixLQUFMLENBQVdvUCxzQkFKeEM7MEJBTWdCbmMsTUFOaEI7dUJBT2EsS0FBSytNLEtBQUwsQ0FBVzRKOztTQXRDOUI7OzthQTZDSyxLQUFLOWUsS0FBTCxDQUFXaWYsZUFBWCxHQUNMclQ7dUJBQUE7O2VBQ08sS0FBS21YLHFCQURaO29CQUVZLEtBQUtJLG9CQUZqQjsyQkFHbUIsS0FBS25qQixLQUFMLENBQVdpZjs7O09BSnpCLEdBU0xxRyxRQVRGOzs7O0VBaGVnRHBWOztBQUEvQnlTLG9CQVFaelcsWUFBWTs7Ozs7ZUFLSkosVUFBVVUsTUFMTjs7Ozs7O1FBV1hWLFVBQVVxRSxJQUFWLENBQWV2QixVQVhKOzs7Ozs7WUFpQlA5QyxVQUFVUyxJQWpCSDs7Ozs7ZUFzQkpULFVBQVVVLE1BdEJOOzs7OztTQTJCVlYsVUFBVXNNLE9BQVYsQ0FBa0J0TSxVQUFVVyxLQUFWLENBQWdCLEVBQWhCLENBQWxCLEVBQXVDbUMsVUEzQjdCOzs7OztvQkFnQ0M5QyxVQUFVZ2EsVUFBVixDQUFxQjVGLGdCQUFyQixDQWhDRDs7Ozs7OzthQXVDTnBVLFVBQVVxRSxJQXZDSjs7Ozs7V0E0Q1JyRSxVQUFVVSxNQTVDRjs7Ozs7O21CQWtEQVYsVUFBVXFFLElBbERWOzs7Ozs7Z0JBd0RIckUsVUFBVVMsSUF4RFA7Ozs7O2NBNkRMVCxVQUFVUzs7QUFyRUxvVyxvQkF3RVp2UyxlQUFlO2VBQ1AsR0FETztvQkFFRixJQUFJOFAsZ0JBQUosRUFGRTtXQUdYLENBSFc7Z0JBSU4sS0FKTTtVQUtaWSxtQkFMWTthQU1ULHFCQUFNLEVBTkc7Y0FPUjs7O0lDcElLaUY7Ozs7Ozs7Ozs7NkJBQ1Y7bUJBUUgsS0FBSy9sQixLQVJGO1VBRUxnZSxNQUZLLFVBRUxBLE1BRks7VUFHTHpTLFFBSEssVUFHTEEsUUFISztVQUlMa08sY0FKSyxVQUlMQSxjQUpLO3lDQUtMd0Msd0JBTEs7VUFLTEEsd0JBTEsseUNBS3NCLElBTHRCO1VBTUw0QixTQU5LLFVBTUxBLFNBTks7VUFPTDVkLElBUEssVUFPTEEsSUFQSzs7O1VBVUgsQ0FBQytkLE1BQUwsRUFBYTtlQUNKLElBQVA7OzthQUlBcFM7a0JBQUE7O2tCQUNVb1MsTUFEVjttQkFFVSxPQUZWOzBCQUdrQnZFLGNBSGxCO3FCQUlhb0UsU0FKYjtvQ0FLNEI1Qix3QkFMNUI7MkJBQUE7Z0JBT1FoYzs7O09BUlY7Ozs7RUFmZ0NpUTs7O0FBK0JwQzZWLE9BQU83WixTQUFQLEdBQW1CO1VBQ1RKLFVBQVVXLEtBQVYsQ0FBZ0I7Y0FDWlgsVUFBVXFFLElBREU7MkJBRUNyRSxVQUFVcUU7R0FGM0IsQ0FEUztZQUtQckUsVUFBVUssSUFMSDtrQkFNREwsVUFBVUMsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxPQUFQLEVBQWdCLE1BQWhCLEVBQXdCLE1BQXhCLENBQWhCLENBTkM7YUFPTkQsVUFBVXFFLElBQVYsQ0FBZXZCLFVBUFQ7NEJBUVM5QyxVQUFVUyxJQVJuQjtRQVNYVCxVQUFVUSxTQUFWLENBQW9CLENBQ3hCUixVQUFVVSxNQURjLEVBRXhCVixVQUFVQyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLENBQWhCLENBRndCLENBQXBCOztDQVRSOzs7O0FDcENBLElBQU1pYSxlQUFlLENBQXJCOztBQUVBLElBQU1DLGVBQWU7TUFDZixFQURlO01BRWYsRUFGZTtNQUdmO0NBSE47O0FBTUEsSUFBTUMsNEJBQTRCO01BQzVCLENBRDRCO01BRTVCLEVBRjRCO01BRzVCO0NBSE47O0FBY0EsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLENBQUNubEIsQ0FBRCxFQUFJZixJQUFKLEVBQWE7VUFDeEJlLENBQVI7U0FDTyxDQUFMO2FBQ1MsQ0FBQyxFQUFFOEgsS0FBSyxDQUFQLEVBQVVFLE1BQU0sQ0FBaEIsRUFBbUIyQixPQUFPMUssSUFBMUIsRUFBZ0NrSSxRQUFRbEksSUFBeEMsRUFBRCxDQUFQO1NBQ0csQ0FBTDthQUNTLENBQ0w7YUFDTyxDQURQO2NBRVEsQ0FGUjtlQUdTQSxPQUFPLENBQVAsR0FBVytsQixlQUFlLENBSG5DO2dCQUlVL2xCO09BTEwsRUFPTDthQUNPLENBRFA7Y0FFUUEsT0FBTyxDQUFQLEdBQVcrbEIsZUFBZSxDQUZsQztlQUdTL2xCLE9BQU8sQ0FBUCxHQUFXK2xCLGVBQWUsQ0FIbkM7Z0JBSVUvbEI7T0FYTCxDQUFQOzthQWVPLENBQ0w7YUFDTyxDQURQO2NBRVEsQ0FGUjtlQUdTQSxPQUFPLENBQVAsR0FBVytsQixlQUFlLENBSG5DO2dCQUlVL2xCO09BTEwsRUFPTDthQUNPLENBRFA7Y0FFUUEsT0FBTyxDQUFQLEdBQVcrbEIsZUFBZSxDQUZsQztlQUdTL2xCLE9BQU8sQ0FIaEI7Z0JBSVVBLE9BQU8sQ0FBUCxHQUFXK2xCLGVBQWU7T0FYL0IsRUFhTDthQUNPL2xCLE9BQU8sQ0FBUCxHQUFXK2xCLGVBQWUsQ0FEakM7Y0FFUS9sQixPQUFPLENBQVAsR0FBVytsQixlQUFlLENBRmxDO2VBR1MvbEIsT0FBTyxDQUhoQjtnQkFJVUEsT0FBTyxDQUFQLEdBQVcrbEIsZUFBZTtPQWpCL0IsQ0FBUDs7Q0FwQk47O0FBMkNBLElBQU1JLFdBQVcsU0FBWEEsUUFBVztTQUFPQyxPQUFPcGxCLEtBQUtxbEIsRUFBTCxHQUFVLEdBQWpCLENBQVA7Q0FBakI7O0FBRUEsSUFBTTVWLGtCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQzFRLEtBQUQsRUFNaEI7TUFDSXVtQixRQURKLEdBQzJDdm1CLEtBRDNDLENBQ0l1bUIsUUFESjtNQUNjcGUsTUFEZCxHQUMyQ25JLEtBRDNDLENBQ2NtSSxNQURkO01BQ3NCN0csSUFEdEIsR0FDMkN0QixLQUQzQyxDQUNzQnNCLElBRHRCO01BQzRCa2xCLFVBRDVCLEdBQzJDeG1CLEtBRDNDLENBQzRCd21CLFVBRDVCOztNQUVFdm1CLE9BQU9nbUIsYUFBYWptQixNQUFNQyxJQUFuQixDQUFiOztNQUVNd21CLGlCQUFpQnhsQixLQUFLMGdCLEtBQUwsQ0FDckIsQ0FBQzFoQixPQUFPLENBQVAsR0FBV3NtQixRQUFaLElBQXdCLENBQXhCLEdBQTRCdGxCLEtBQUt5bEIsR0FBTCxDQUFTTixTQUFTLEVBQVQsQ0FBVCxDQURQLENBQXZCOztNQUlNTyxVQUNKL2E7UUFBQTtNQUFNLFVBQU4sRUFBVyxPQUFNLE9BQWpCOztTQUNFOzttQ0FDNkI7bUJBQ2hCOzhCQUFBO3dCQUVRMmEsUUFBZjs7OztrQ0FJQ2psQixJQUFKLEdBQVUsQ0FBVixFQUFhc1AsV0FBYjs7R0FWUDs7VUFlUTRWLFVBQVI7U0FDTyxZQUFMO2FBRUk1YTtXQUFBOzt3QkFDY3RLLElBRGQ7aUJBRVEsTUFGUjtrQkFHVTZHLE1BSFY7bUJBSVUsTUFKVjtzQkFLYSxLQUxiO3FDQU02QjtxQkFDaEI7dUJBQ0VzZTs7Ozs7T0FUakI7U0FnQkcsU0FBTDthQUVJN2E7V0FBQTs7d0JBQ2N0SyxJQURkO2lCQUVRLE1BRlI7a0JBR1U2RyxNQUhWO21CQUlVLE1BSlY7c0JBS2EsT0FMYjtxQ0FNNkI7cUJBQ2hCO3VCQUNFc2U7Ozs7O09BVGpCOzthQWtCRTdhO1dBQUE7O3dCQUNjdEssSUFEZDtpQkFFUSxNQUZSO2tCQUdVNkcsTUFIVjttQkFJVSxNQUpWO3NCQUthLFFBTGI7MEJBTWlCOzs7T0FQbkI7O0NBakVOOztBQWdGQSxBQUFlLFNBQVN5ZSxXQUFULENBQXFCNW1CLEtBQXJCLEVBQW1DO01BQ3hDNm1CLGFBRHdDLEdBQ2hCN21CLEtBRGdCLENBQ3hDNm1CLGFBRHdDO01BQ3pCNW1CLElBRHlCLEdBQ2hCRCxLQURnQixDQUN6QkMsSUFEeUI7O01BRTFDMkYsU0FBU3VnQixhQUFhVSxjQUFjdm1CLE1BQTNCLEVBQW1DMmxCLGFBQWFobUIsSUFBYixDQUFuQyxDQUFmO01BQ002bUIsYUFBYWIsYUFBYWhtQixJQUFiLENBQW5CO1NBRUUyTDtPQUFBOzthQUNRLE9BRFI7Y0FFVWtiLFVBRlY7Z0JBR1csUUFIWDthQUlRLFFBSlI7YUFLU0EsVUFMVDtpQ0FNNkI7aUJBQ2hCO3FCQUNJLGdCQURKOzs7c0JBSUs7Ozs7a0JBSWYsVUFBRDtjQUNVbGhCLE1BRFY7WUFFUSxvQkFBYTtZQUFWb1MsR0FBVSxRQUFWQSxHQUFVO2lDQUNLNk8sY0FBYzdPLEdBQWQsQ0FETDtZQUNUMVcsSUFEUyxzQkFDVEEsSUFEUztZQUNIK04sR0FERyxzQkFDSEEsR0FERzswQkFFU3pKLE9BQU9vUyxHQUFQLENBRlQ7WUFFVHJOLEtBRlMsZUFFVEEsS0FGUztZQUVGeEMsTUFGRSxlQUVGQSxNQUZFOztZQUdYb2UsV0FDSk0sY0FBY3ZtQixNQUFkLEtBQXlCLENBQXpCLEdBQ0k0bEIsMEJBQTBCbG1CLE1BQU1DLElBQWhDLElBQXdDLENBRDVDLEdBRUlpbUIsMEJBQTBCbG1CLE1BQU1DLElBQWhDLENBSE47WUFJSSxDQUFDb1AsR0FBTCxFQUFVO2lCQUVOekQsY0FBQzhFLGVBQUQ7a0JBQ1FwUCxJQURSO3NCQUVZaWxCLFFBRlo7d0JBSUlNLGNBQWN2bUIsTUFBZCxJQUF3QixDQUF4QixHQUNJLENBQUMsUUFBRCxFQUFXLFlBQVgsRUFBeUIsU0FBekIsRUFBb0MwWCxHQUFwQyxDQURKLEdBRUksUUFOUjtvQkFRVTdQLE1BUlY7a0JBU1FsSTtZQVZWOztlQWVBMkw7YUFBQTtZQUFLLFVBQVMsVUFBZCxFQUF5QixPQUFPakIsS0FBaEMsRUFBdUMsUUFBUXhDLE1BQS9DO3dCQUNHLEtBQUQ7aUJBQ083RyxJQURQO21CQUVRLFNBRlI7aUJBR08rTixHQUhQOzBCQUlnQixDQUpoQjsyQkFLaUIsQ0FMakI7aUJBTU07WUFQUjtpQ0FTTyxXQUFXbFEsVUFBT21SLElBQXZCO1NBVko7OztHQXhDUjs7O0FBMkRGc1csWUFBWTFhLFNBQVosR0FBd0I7aUJBQ1BKLFVBQVVzTSxPQUFWLENBQ2J0TSxVQUFVTSxLQUFWLENBQWdCO1VBQ1JOLFVBQVVZLE1BQVYsQ0FBaUJrQyxVQURUO1NBRVQ5QyxVQUFVWTtHQUZqQixDQURhLEVBS2JrQyxVQU5vQjtRQU9oQjlDLFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsQ0FBaEIsRUFBb0M2QztDQVA1Qzs7OztBQ3JMQSxJQUFNbVksdUJBQXVCO01BQ3ZCLENBRHVCO01BRXZCLENBRnVCO01BR3ZCLENBSHVCO01BSXZCLENBSnVCO01BS3ZCO0NBTE47O0FBUUEsSUFBTTNWLGVBQTBDO01BQzFDLENBRDBDO01BRTFDLENBRjBDO01BRzFDLENBSDBDO01BSTFDLENBSjBDO01BSzFDO0NBTE47O0FBUUEsQUFBZSxTQUFTNFYsT0FBVCxDQUFpQmhuQixLQUFqQixFQUErQjtNQUUxQ2luQixrQkFGMEMsR0FZeENqbkIsS0Fad0MsQ0FFMUNpbkIsa0JBRjBDO01BRzFDMWIsUUFIMEMsR0FZeEN2TCxLQVp3QyxDQUcxQ3VMLFFBSDBDO3FCQVl4Q3ZMLEtBWndDLENBSTFDb08sS0FKMEM7TUFJMUNBLEtBSjBDLGdDQUlsQyxVQUprQztrQkFZeENwTyxLQVp3QyxDQUsxQ3dXLEVBTDBDO01BSzFDQSxFQUwwQyw2QkFLckMsSUFMcUM7TUFNMUM1RSxNQU4wQyxHQVl4QzVSLEtBWndDLENBTTFDNFIsTUFOMEM7TUFPMUNELE1BUDBDLEdBWXhDM1IsS0Fad0MsQ0FPMUMyUixNQVAwQzt3QkFZeEMzUixLQVp3QyxDQVExQ3lSLFFBUjBDO01BUTFDQSxRQVIwQyxtQ0FRL0IsV0FSK0I7b0JBWXhDelIsS0Fad0MsQ0FTMUNDLElBVDBDO01BUzFDQSxJQVQwQywrQkFTbkMsSUFUbUM7TUFVMUN5UixNQVYwQyxHQVl4QzFSLEtBWndDLENBVTFDMFIsTUFWMEM7d0JBWXhDMVIsS0Fad0MsQ0FXMUM4UixRQVgwQztNQVcxQ0EsUUFYMEMsbUNBVy9CLEtBWCtCOzs7TUFjdEN2RCxLQUFLZ0MsV0FDVHBSLFVBQU82bkIsT0FERSxFQUVUN25CLHVCQUFrQmlTLGFBQVduUixJQUFYLENBQWxCLENBRlMsRUFHVHlSLFVBQVV2Uyx5QkFBb0JpUyxhQUFXTSxNQUFYLENBQXBCLENBSEQsRUFJVEMsVUFBVXhTLHlCQUFvQmlTLGFBQVdPLE1BQVgsQ0FBcEIsQ0FKRCxFQUtUQyxVQUFVelMseUJBQW9CaVMsYUFBV1EsTUFBWCxDQUFwQixDQUxELEVBTVRoTCxPQUFPd0gsS0FBUCxDQU5TLEVBT1RxRCxhQUFhLFdBQWIsSUFBNEJaLFdBQVc2QyxTQVA5QixFQVFUNUIsWUFBWWpCLFdBQVdpQixRQVJkLENBQVg7O01BV01vVixlQUFlRCxzQkFBc0JGLHFCQUFxQjltQixJQUFyQixDQUEzQztTQUNPaVEsYUFBQSxPQUNEZ1gsWUFEQztlQUdRM1ksRUFIUjs7S0FLQ3VELFlBQVksT0FBT3ZHLFFBQVAsS0FBb0IsUUFBaEMsR0FDQSxFQUFFd0ksT0FBT3hJLFFBQVQsRUFEQSxHQUVBLElBUEQsR0FTTEEsUUFUSyxDQUFQOzs7QUFhRnliLFFBQVE5YSxTQUFSLEdBQW9CO3NCQUNFSixVQUFVQyxLQUFWLENBQWdCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBaEIsQ0FERjtZQUVSRCxVQUFVSyxJQUZGO1NBR1hMLFVBQVVDLEtBQVYsQ0FBZ0IsQ0FDckIsTUFEcUIsRUFFckIsVUFGcUIsRUFHckIsVUFIcUIsRUFJckIsTUFKcUIsRUFLckIsT0FMcUIsRUFNckIsV0FOcUIsRUFPckIsUUFQcUIsRUFRckIsVUFScUIsRUFTckIsTUFUcUIsRUFVckIsT0FWcUIsRUFXckIsUUFYcUIsRUFZckIsUUFacUIsRUFhckIsTUFicUIsRUFjckIsUUFkcUIsRUFlckIsS0FmcUIsRUFnQnJCLFlBaEJxQixFQWlCckIsT0FqQnFCLENBQWhCLENBSFc7TUFzQmRELFVBQVVZLE1BdEJJO1lBdUJSWixVQUFVQyxLQUFWLENBQWdCLENBQUMsUUFBRCxFQUFXLFdBQVgsQ0FBaEIsQ0F2QlE7UUF3QlpELFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsQ0FBaEIsQ0F4Qlk7VUF5QlZELFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsQ0FBaEIsQ0F6QlU7VUEwQlZELFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsQ0FBaEIsQ0ExQlU7VUEyQlZELFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsQ0FBaEIsQ0EzQlU7WUE0QlJELFVBQVVTO0NBNUJ0Qjs7Ozs7O0FDcEZBLElBQU00YSxxQkFBcUI7TUFDckIsRUFEcUI7TUFFckIsRUFGcUI7TUFHckIsRUFIcUI7TUFJckIsRUFKcUI7TUFLckI7Q0FMTjs7QUFrQkEsSUFBTUMsOEJBQThCO2VBQ3JCLE1BRHFCO2FBRXZCLE1BRnVCO1NBRzNCO0NBSFQ7O0FBTUEsQUFBZSxTQUFTQyxHQUFULENBQWFybkIsS0FBYixFQUEyQjs7O3NCQVNwQ0EsS0FUb0MsQ0FFdEN5VixNQUZzQztNQUV0Q0EsTUFGc0MsaUNBRTdCLEtBRjZCO3VCQVNwQ3pWLEtBVG9DLENBR3RDK2MsT0FIc0M7TUFHdENBLE9BSHNDLGtDQUc1QixhQUg0Qjt1QkFTcEMvYyxLQVRvQyxDQUl0Q2tXLE9BSnNDO01BSXRDQSxPQUpzQyxrQ0FJNUIsS0FKNEI7dUJBU3BDbFcsS0FUb0MsQ0FLdENzVixPQUxzQztNQUt0Q0EsT0FMc0Msa0NBSzVCLEtBTDRCO3lCQVNwQ3RWLEtBVG9DLENBTXRDc25CLFNBTnNDO01BTXRDQSxTQU5zQyxvQ0FNMUJGLDRCQUE0QnJLLE9BQTVCLENBTjBCO01BT3RDMU8sSUFQc0MsR0FTcENyTyxLQVRvQyxDQU90Q3FPLElBUHNDO29CQVNwQ3JPLEtBVG9DLENBUXRDQyxJQVJzQztNQVF0Q0EsSUFSc0MsK0JBUS9CLElBUitCOzs7TUFXbENzbkIsV0FBV0osbUJBQW1CbG5CLElBQW5CLElBQTJCLENBQTVDOztNQUVNaEIsY0FBYztZQUNWa29CLG1CQUFtQmxuQixJQUFuQixDQURVO1dBRVhrbkIsbUJBQW1CbG5CLElBQW5CO0dBRlQ7O01BS011VSxVQUFVaEcsV0FBV3JQLFVBQU9xb0IsR0FBbEIsRUFBdUJyb0IsVUFBTzRkLE9BQVAsQ0FBdkIsaURBQ2I1ZCxVQUFPc1csTUFETSxFQUNHQSxNQURILCtCQUVidFcsVUFBTytXLE9BRk0sRUFFSUEsT0FGSiwrQkFHYi9XLFVBQU9tVyxPQUhNLEVBR0lBLFdBQVcsQ0FBQ1ksT0FBWixJQUF1QixDQUFDVCxNQUg1QixnQkFBaEI7O1NBT0U3Sjs7TUFBSyxXQUFXNEksT0FBaEIsRUFBeUIsT0FBT3ZWLFdBQWhDOztTQUNFO1FBQUssT0FBTSxRQUFYO29CQU9HLElBQUQ7ZUFDU3FvQixTQURUO2NBRVFqWixJQUZSO2NBR1FrWixRQUhSOzRCQUlxQjs7O0dBYjNCOzs7QUFvQkZGLElBQUluYixTQUFKLEdBQWdCO1VBQ05KLFVBQVVTLElBREo7V0FFTFQsVUFBVUMsS0FBVixDQUFnQixDQUFDLGFBQUQsRUFBZ0IsV0FBaEIsRUFBNkIsT0FBN0IsQ0FBaEIsQ0FGSztXQUdMRCxVQUFVUyxJQUhMO1dBSUxULFVBQVVTLElBSkw7YUFLSFQsVUFBVUMsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLEtBQXJCLEVBQTRCLE1BQTVCLEVBQW9DLE9BQXBDLENBQWhCLENBTEc7UUFNUkQsVUFBVUMsS0FBVixDQUFnQjNMLE9BQU9DLElBQVAsQ0FBWTROLEtBQVosQ0FBaEIsRUFBb0NXLFVBTjVCO1FBT1I5QyxVQUFVQyxLQUFWLENBQWdCM0wsT0FBT0MsSUFBUCxDQUFZOG1CLGtCQUFaLENBQWhCO0NBUFI7O0lDcERxQk07Ozs7Ozs7Ozs7Ozs7OzZMQVluQnZTLFFBQWU7Y0FDTCxLQURLO2VBRUosS0FGSTtlQUdKO2FBR1hlLGFBQWE7YUFBTSxNQUFLWixRQUFMLENBQWMsRUFBRWEsU0FBUyxLQUFYLEVBQWQsQ0FBTjthQUNiQyxjQUFjLFlBQU07WUFDYmQsUUFBTCxDQUFjLEVBQUVhLFNBQVMsSUFBWCxFQUFkO2FBRUZ3UixrQkFBa0IsWUFBTTtZQUNqQnJTLFFBQUwsQ0FBYyxFQUFFSSxRQUFRLElBQVYsRUFBZDthQUVGTixtQkFBbUIsWUFBTTtZQUNsQkUsUUFBTCxDQUFjLEVBQUVDLFNBQVMsSUFBWCxFQUFkO2FBRUZDLG1CQUFtQixZQUFNO1lBQ2xCRixRQUFMLENBQWM7Z0JBQ0osS0FESTtpQkFFSDtPQUZYO2FBS0ZzUyxnQkFBZ0IsWUFBTTtZQUNmdFMsUUFBTCxDQUFjLEVBQUVJLFFBQVEsS0FBVixFQUFkOzs7Ozs7NkJBR087bUJBVUgsS0FBS3pWLEtBVkY7VUFFTGlVLHFCQUZLLFVBRUxBLHFCQUZLO1VBR0xDLHFCQUhLLFVBR0xBLHFCQUhLO1VBSUwvRixrQkFKSyxVQUlMQSxrQkFKSztVQUtMNE8sT0FMSyxVQUtMQSxPQUxLO1VBTUx1SyxTQU5LLFVBTUxBLFNBTks7VUFPTGpaLElBUEssVUFPTEEsSUFQSztVQVFMcE8sSUFSSyxVQVFMQSxJQVJLO1VBU0xtVSxPQVRLLFVBU0xBLE9BVEs7bUJBWThCLEtBQUtjLEtBWm5DO1VBWUNPLE1BWkQsVUFZQ0EsTUFaRDtVQVlTUyxPQVpULFVBWVNBLE9BWlQ7VUFZa0JaLE9BWmxCLFVBWWtCQSxPQVpsQjs7O2FBZUwxSjs7OzJCQUNpQnFJLHFCQURqQjsyQkFFaUJDLHFCQUZqQjt3QkFHYy9GLGtCQUhkO3FCQUlhaFAsVUFBT3NWLE1BSnBCO2tCQUtVLEtBQUt3QixVQUxmOzs7Ozs7Ozs7OztZQU1XO21CQUFTN0IsV0FBV0EsUUFBUSxFQUFFWSxZQUFGLEVBQVIsQ0FBcEI7V0FBVCxDQU5GO21CQU9XLEtBQUttQixXQVBoQjt1QkFRZSxLQUFLdVIsZUFScEI7d0JBU2dCLEtBQUt2UyxnQkFUckI7d0JBVWdCLEtBQUtJLGdCQVZyQjtxQkFXYSxLQUFLb1MsYUFYbEI7Z0JBWU87O3NCQUVKLEdBQUQ7a0JBQ1VsUyxNQURWO21CQUVXc0gsT0FGWDttQkFHVzdHLE9BSFg7bUJBSVdaLE9BSlg7cUJBS2FnUyxTQUxiO2dCQU1RalosSUFOUjtnQkFPUXBPOztPQXRCWjs7OztFQXBEb0NpUTs7QUFBbkJ1WCxXQUNadmIsWUFBWTt5QkFDTUosVUFBVVMsSUFEaEI7eUJBRU1ULFVBQVVTLElBRmhCO3NCQUdHVCxVQUFVWSxNQUFWLENBQWlCa0MsVUFIcEI7V0FJUjlDLFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxhQUFELEVBQWdCLFdBQWhCLEVBQTZCLE9BQTdCLENBQWhCLENBSlE7UUFLWEQsVUFBVUMsS0FBVixDQUFnQjNMLE9BQU9DLElBQVAsQ0FBWTROLEtBQVosQ0FBaEIsRUFBb0NXLFVBTHpCO2FBTU45QyxVQUFVQyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsS0FBckIsRUFBNEIsTUFBNUIsRUFBb0MsT0FBcEMsQ0FBaEIsQ0FOTTtXQU9SRCxVQUFVcUUsSUFQRjtRQVFYckUsVUFBVUMsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixDQUFoQjs7Ozs7QUN4QkssU0FBUzZiLEtBQVQsQ0FBZTVuQixLQUFmLEVBQTZCO01BQ2xDdUwsUUFEa0MsR0FDWnZMLEtBRFksQ0FDbEN1TCxRQURrQztNQUN4QnNjLE9BRHdCLEdBQ1o3bkIsS0FEWSxDQUN4QjZuQixPQUR3Qjs7O1NBSXhDamM7O01BQU8sV0FBV3pNLFVBQU8yb0IsS0FBekIsRUFBZ0MsU0FBU0QsT0FBekM7O0dBREY7OztBQU9GRCxNQUFNMWIsU0FBTixHQUFrQjtZQUNOSixVQUFVSyxJQURKO1dBRVBMLFVBQVVZLE1BQVYsQ0FBaUJrQztDQUY1Qjs7QUNmQTs7Ozs7Ozs7O0FBU0EsSUFBTW1aLGNBQWMsU0FBZEEsV0FBYyxDQUFDcGQsS0FBRCxFQUFReEMsTUFBUjtTQUFtQndDLFFBQVF4QyxNQUEzQjtDQUFwQjs7QUFTQSxBQUFlLFNBQVM2ZixTQUFULE9BS0w7TUFKUnpjLFFBSVEsUUFKUkEsUUFJUTtNQUhSMGMsa0JBR1EsUUFIUkEsa0JBR1E7TUFGUjlmLE1BRVEsUUFGUkEsTUFFUTtNQURSd0MsS0FDUSxRQURSQSxLQUNROztNQUNGdWQsc0JBQXNCSCxZQUFZcGQsS0FBWixFQUFtQnhDLE1BQW5CLENBQTVCOztNQUVJZ2dCLHNCQUFKO01BQ0lDLHFCQUFKOztNQUVJSCxxQkFBcUJDLG1CQUF6QixFQUE4QzttQkFDN0J2ZCxLQUFmO29CQUNnQkEsUUFBUXNkLGtCQUF4QjtHQUZGLE1BR087bUJBQ1U5ZixTQUFTOGYsa0JBQXhCO29CQUNnQjlmLE1BQWhCOzs7TUFHSWtXLFlBQVksQ0FBQzhKLGdCQUFnQmhnQixNQUFqQixJQUEyQixDQUFDLENBQTlDO01BQ01pVyxhQUFhLENBQUNnSyxlQUFlemQsS0FBaEIsSUFBeUIsQ0FBQyxDQUE3Qzs7U0FHRWlCO1FBQUE7TUFBTSxPQUFPakIsS0FBYixFQUFvQixRQUFReEMsTUFBNUI7OztRQUNPLE9BQU8sRUFBRTFHLFdBQVc0YyxTQUFiLEVBQXdCeGMsWUFBWXVjLFVBQXBDLEVBQVo7O1lBQ0U7VUFBTSxPQUFPZ0ssWUFBYixFQUEyQixRQUFRRCxhQUFuQzs7OztHQUhOOzs7QUFXRkgsVUFBVTliLFNBQVYsR0FBc0I7WUFDVkosVUFBVUssSUFEQTtzQkFFQUwsVUFBVVUsTUFBVixDQUFpQm9DLFVBRmpCO1VBR1o5QyxVQUFVVSxNQUFWLENBQWlCb0MsVUFITDtTQUliOUMsVUFBVVUsTUFBVixDQUFpQm9DO0NBSjFCOzs7O0FDdENBLElBQU15WixlQUFlLENBQXJCOztJQUVxQkM7Ozs7Ozs7Ozs7Ozs7O2lMQVNuQnBULFFBQWU7eUJBQ007YUFHckJxVCxjQUFjLFVBQUN2VCxLQUFELEVBQWtDO3dCQUNwQixNQUFLaFYsS0FEZTtVQUN0Q3dvQixJQURzQyxlQUN0Q0EsSUFEc0M7VUFDaENwVSxPQURnQyxlQUNoQ0EsT0FEZ0M7O1VBRTFDQSxXQUFXb1UsSUFBZixFQUFxQjtnQkFDWCxFQUFFeFQsWUFBRixFQUFSOzthQUlKMFMsa0JBQWtCLFlBQU07eUJBQ0csTUFBSzFuQixLQURSO1VBQ2R3b0IsSUFEYyxnQkFDZEEsSUFEYztVQUNSelMsTUFEUSxnQkFDUkEsTUFEUTs7VUFFbEJBLFdBQVcsT0FBWCxJQUFzQnlTLElBQTFCLEVBQWdDO2NBQ3pCblQsUUFBTCxDQUFjLEVBQUVvVCxtQkFBbUIsS0FBckIsRUFBZDs7YUFJSkMsY0FBYyxVQUFDMVQsS0FBRCxFQUFxQzt5QkFDeEIsTUFBS2hWLEtBRG1CO1VBQ3pDd29CLElBRHlDLGdCQUN6Q0EsSUFEeUM7VUFDbkN6UyxNQURtQyxnQkFDbkNBLE1BRG1DOztVQUU3Q0EsV0FBVyxPQUFYLElBQXNCZixNQUFNNEksT0FBTixLQUFrQnlLLFlBQXhDLElBQXdERyxJQUE1RCxFQUFrRTtjQUMzRG5ULFFBQUwsQ0FBYyxFQUFFb1QsbUJBQW1CLElBQXJCLEVBQWQ7Ozs7Ozs7NkJBSUs7bUJBQ21ELEtBQUt6b0IsS0FEeEQ7VUFDQ3VMLFFBREQsVUFDQ0EsUUFERDtpQ0FDVytDLE1BRFg7VUFDV0EsTUFEWCxpQ0FDb0IsS0FEcEI7aUNBQzJCeUgsTUFEM0I7VUFDMkJBLE1BRDNCLGlDQUNvQyxJQURwQztVQUMwQ3lTLElBRDFDLFVBQzBDQSxJQUQxQzs7VUFFREcsTUFBTTVTLFdBQVcsT0FBWCxHQUFxQixxQkFBckIsR0FBNkMsSUFBekQ7VUFDTTZTLGFBQWE3UyxlQUFhQSxNQUFiLEdBQXdCLElBQTNDOzthQUdFbks7OztxQkFDYTJFLFdBQ1RwUixVQUFPMHBCLElBREUsRUFFVCxLQUFLM1QsS0FBTCxDQUFXdVQsaUJBQVgsR0FBK0J0cEIsVUFBTzJwQixvQkFBdEMsR0FBNkQsRUFGcEQsRUFHVHhhLFNBQVMsRUFBVCxHQUFjblAsVUFBTzRWLEtBSFosQ0FEYjtnQkFNUXlULElBTlI7dUJBT2UsS0FBS2QsZUFQcEI7bUJBUVcsS0FBS2dCLFdBUmhCO21CQVNXLEtBQUtILFdBVGhCO2VBVU9JLEdBVlA7a0JBV1VDOzs7T0FaWjs7OztFQXZDOEIxWTs7QUFBYm9ZLEtBQ1pwYyxZQUFZO1lBQ1BKLFVBQVVLLElBQVYsQ0FBZXlDLFVBRFI7UUFFWDlDLFVBQVVZLE1BQVYsQ0FBaUJrQyxVQUZOO1VBR1Q5QyxVQUFVUyxJQUhEO1dBSVJULFVBQVVxRSxJQUpGO1VBS1RyRSxVQUFVQyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLE1BQVAsRUFBZSxPQUFmLENBQWhCOzs7OztJQ3ZCU21VOzs7U0FDbkJwZ0IsTUFBcUIsSUFBSXFnQixPQUFKOzs7OzsyQkFFakJwVixLQUFZO2FBQ1AsS0FBS2pMLEdBQUwsQ0FBU3NnQixHQUFULENBQWFyVixHQUFiLENBQVA7Ozs7d0JBR0VBLEtBQWlCO2FBQ1osS0FBS2pMLEdBQUwsQ0FBU3VnQixHQUFULENBQWF0VixHQUFiLENBQVA7Ozs7MkJBR0VBLEtBQVFsSCxPQUFnQjtXQUNyQi9ELEdBQUwsQ0FBU3dnQixHQUFULENBQWF2VixHQUFiLEVBQWtCbEgsS0FBbEI7Ozs7NEJBR1k7V0FDUC9ELEdBQUwsR0FBVyxJQUFJcWdCLE9BQUosRUFBWDs7Ozs7O0FDbkJHLElBQU1XLHdCQUFzQkMsT0FBTyxTQUFQLENBQTVCO0FBQ1AsQUFBTyxJQUFNQywyQkFBeUJELE9BQU8sWUFBUCxDQUEvQjs7QUNFUCxJQUFNRSxXQUFTLFNBQVRBLE1BQVMsTUFBTztNQUNoQmpKLE1BQU0sQ0FBVjtPQUNLLElBQUlrSixJQUFJLENBQWIsRUFBZ0JBLElBQUlsVyxJQUFJMUssTUFBeEIsRUFBZ0M0Z0IsS0FBSyxDQUFyQyxFQUF3QztRQUNsQ2xXLElBQUlrVyxDQUFKLElBQVNsVyxJQUFJZ04sR0FBSixDQUFiLEVBQXVCO1lBQ2ZrSixDQUFOOzs7U0FHR2xKLEdBQVA7Q0FQRjs7O0FBVUEsSUFBTW1KLGNBQVksU0FBWkEsU0FBWSxDQUFDeFcsS0FBRDtNQUFReEMsTUFBUix1RUFBaUJpWixRQUFqQjtTQUErQjtTQUMxQyxDQUFDLElBRHlDO1VBRXpDLENBQUMsSUFGd0M7Z0JBQUE7O0dBQS9CO0NBQWxCOztBQU9BLHVCQUFlO01BQ2JDLEtBRGEsUUFDYkEsS0FEYTs4QkFFYkMsV0FGYTtNQUViQSxXQUZhLG9DQUVDLEdBRkQ7eUJBR2JDLE1BSGE7TUFHYkEsTUFIYSwrQkFHSixFQUhJOzBCQUliQyxPQUphO01BSWJBLE9BSmEsZ0NBSUgsQ0FKRztNQUtiN1csS0FMYSxRQUtiQSxLQUxhO1NBWVIsVUFBQ21OLEtBQUQsRUFBcUI7UUFDdEJuTixTQUFTLElBQWIsRUFBbUI7YUFDVm1OLE1BQU1oWSxHQUFOLENBQVU7ZUFBTXFoQixZQUFVRyxXQUFWLENBQU47T0FBVixDQUFQOzs7UUFHSUcsdUJBQXVCSCxjQUFjQyxNQUEzQztRQUNNRyxjQUFjemdCLEtBQUt5VyxHQUFMLENBQ2xCelcsS0FBSzBnQixLQUFMLENBQVcsQ0FBQ2hYLFFBQVE0VyxNQUFULElBQW1CRSxvQkFBOUIsQ0FEa0IsRUFFbEJELE9BRmtCLENBQXBCOztRQUtNSSxVQUFVLElBQUloaUIsS0FBSixDQUFVOGhCLFdBQVYsRUFBdUJHLElBQXZCLENBQTRCLENBQTVCLENBQWhCO1FBQ01DLGVBQWU3Z0IsS0FBS3lXLEdBQUwsQ0FDbkJ6VyxLQUFLMGdCLEtBQUwsQ0FBVyxDQUFDaFgsUUFBUThXLHVCQUF1QkMsV0FBL0IsR0FBNkNILE1BQTlDLElBQXdELENBQW5FLENBRG1CLEVBRW5CLENBRm1CLENBQXJCOztXQUtPekosTUFBTTFZLE1BQU4sQ0FBYSxVQUFDZ00sR0FBRCxFQUFNdU0sSUFBTixFQUFlO1VBQzNCb0ssWUFBWTNXLEdBQWxCOztVQUVNakQsU0FBU2taLE1BQU1qQixHQUFOLENBQVV6SSxJQUFWLENBQWY7VUFDSUksaUJBQUo7O1VBRUk1UCxVQUFVLElBQWQsRUFBb0I7bUJBQ1BnWixZQUFVRyxXQUFWLENBQVg7T0FERixNQUVPO1lBQ0NVLGtCQUFrQjdaLFNBQVNvWixNQUFqQztZQUNNVSxNQUFNaEIsU0FBT1csT0FBUCxDQUFaO1lBQ005WSxNQUFNOFksUUFBUUssR0FBUixDQUFaO1lBQ01qWixPQUFPaVosTUFBTVIsb0JBQU4sR0FBNkJLLFlBQTFDOztnQkFFUUcsR0FBUixLQUFnQkQsZUFBaEI7bUJBQ1csRUFBRWxaLFFBQUYsRUFBT0UsVUFBUCxFQUFhMkIsT0FBTzJXLFdBQXBCLEVBQWlDblosY0FBakMsRUFBWDs7Z0JBRVE4UCxJQUFWLENBQWVGLFFBQWY7YUFDT2dLLFNBQVA7S0FsQkssRUFtQkosRUFuQkksQ0FBUDtHQTdCYTtDQUFmOztBQ2pCQSxJQUFNWixjQUFZLFNBQVpBLFNBQVksQ0FBQ3hXLEtBQUQ7TUFBUXhDLE1BQVIsdUVBQWlCaVosUUFBakI7U0FBK0I7U0FDMUMsQ0FBQyxJQUR5QztVQUV6QyxDQUFDLElBRndDO2dCQUFBOztHQUEvQjtDQUFsQjs7O0FBT0EsMEJBQWU7TUFDYkMsS0FEYSxRQUNiQSxLQURhOzhCQUViQyxXQUZhO01BRWJBLFdBRmEsb0NBRUMsR0FGRDt5QkFHYkMsTUFIYTtNQUdiQSxNQUhhLCtCQUdKLEVBSEk7TUFJYjVXLEtBSmEsUUFJYkEsS0FKYTswQkFLYjZXLE9BTGE7TUFLYkEsT0FMYSxnQ0FLSCxDQUxHO1NBWVIsVUFBQzFKLEtBQUQsRUFBcUI7UUFDdEJuTixTQUFTLElBQWIsRUFBbUI7YUFDVm1OLE1BQU1oWSxHQUFOLENBQVU7ZUFBTXFoQixZQUFVRyxXQUFWLENBQU47T0FBVixDQUFQOzs7UUFHSUcsdUJBQXVCSCxjQUFjQyxNQUEzQztRQUNNRyxjQUFjemdCLEtBQUt5VyxHQUFMLENBQ2xCelcsS0FBSzBnQixLQUFMLENBQVcsQ0FBQ2hYLFFBQVE0VyxNQUFULElBQW1CRSxvQkFBOUIsQ0FEa0IsRUFFbEJELE9BRmtCLENBQXBCOztRQUtNTyxZQUFZLEVBQWxCO1FBQ01ILFVBQVUsRUFBaEI7O1NBRUssSUFBSVYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJcEosTUFBTXhYLE1BQTFCLEVBQWtDNGdCLEtBQUssQ0FBdkMsRUFBMEM7VUFDcENuSixpQkFBSjtVQUNNNVAsU0FBU2taLE1BQU1qQixHQUFOLENBQVV0SSxNQUFNb0osQ0FBTixDQUFWLENBQWY7O1VBRUkvWSxVQUFVLElBQWQsRUFBb0I7bUJBQ1BnWixZQUFVRyxXQUFWLENBQVg7T0FERixNQUVPO1lBQ0N4ZCxTQUFTb2QsSUFBSVEsV0FBbkI7WUFDTVEsTUFBTWpoQixLQUFLMGdCLEtBQUwsQ0FBV1QsSUFBSVEsV0FBZixDQUFaOztZQUVJNWQsV0FBVyxDQUFYLElBQWdCcUUsU0FBU3laLFFBQVFNLEdBQVIsQ0FBN0IsRUFBMkM7a0JBQ2pDQSxHQUFSLElBQWUvWixNQUFmOzs7WUFHSVcsTUFDSm9aLE1BQU0sQ0FBTixHQUNJTixRQUFRTyxLQUFSLENBQWMsQ0FBZCxFQUFpQkQsR0FBakIsRUFBc0I5aUIsTUFBdEIsQ0FBNkIsVUFBQ2dqQixHQUFELEVBQU12WSxDQUFOO2lCQUFZdVksTUFBTXZZLENBQU4sR0FBVTBYLE1BQXRCO1NBQTdCLEVBQTJELENBQTNELENBREosR0FFSSxDQUhOOzttQkFLVztrQkFBQTtnQkFFSHpkLFNBQVMyZCxvQkFGTjtpQkFHRkgsV0FIRTs7U0FBWDs7Z0JBT1FySixJQUFWLENBQWVGLFFBQWY7O1dBRUtnSyxTQUFQO0dBdERhO0NBQWY7O0FDUEEsSUFBTWQsV0FBUyxTQUFUQSxNQUFTLE1BQU87TUFDaEJqSixNQUFNLENBQVY7T0FDSyxJQUFJa0osSUFBSSxDQUFiLEVBQWdCQSxJQUFJbFcsSUFBSTFLLE1BQXhCLEVBQWdDNGdCLEtBQUssQ0FBckMsRUFBd0M7UUFDbENsVyxJQUFJa1csQ0FBSixJQUFTbFcsSUFBSWdOLEdBQUosQ0FBYixFQUF1QjtZQUNma0osQ0FBTjs7O1NBR0dsSixHQUFQO0NBUEY7OztBQVVBLHlCQUFlLGdCQVlSO3lCQVhMdUosTUFXSztNQVhMQSxNQVdLLCtCQVhJLENBV0o7TUFWTEYsS0FVSyxRQVZMQSxLQVVLOzBCQVRMRyxPQVNLO01BVExBLE9BU0ssZ0NBVEssQ0FTTDttQ0FSTGEsZ0JBUUs7TUFSTEEsZ0JBUUsseUNBUmMsR0FRZDtNQVBMMVgsS0FPSyxRQVBMQSxLQU9LOztNQUNEQSxTQUFTLElBQWIsRUFBbUI7V0FDVixVQUFDbU4sS0FBRDthQUNMQSxNQUFNaFksR0FBTixDQUFVO2VBQU87ZUFDVnNoQixRQURVO2dCQUVUQSxRQUZTO2lCQUdSQSxRQUhRO2tCQUlQQTtTQUpBO09BQVYsQ0FESztLQUFQOzs7Ozs7TUFZSWtCLFdBQVdyaEIsS0FBSzBnQixLQUFMLENBQVdoWCxRQUFRMFgsZ0JBQW5CLENBQWpCO01BQ01YLGNBQWN6Z0IsS0FBS3lXLEdBQUwsQ0FDbEJ6VyxLQUFLMGdCLEtBQUwsQ0FBVyxDQUFDaFgsUUFBUTJYLFdBQVdmLE1BQXBCLElBQThCYyxnQkFBekMsQ0FEa0IsRUFFbEJiLE9BRmtCLENBQXBCO01BSU1GLGNBQWNyZ0IsS0FBSzBnQixLQUFMLENBQVdoWCxRQUFRK1csV0FBbkIsQ0FBcEI7O1NBRU8sVUFBQzVKLEtBQUQsRUFBcUI7O1FBRXBCOEosVUFBVSxJQUFJaGlCLEtBQUosQ0FBVThoQixXQUFWLEVBQXVCRyxJQUF2QixDQUE0QixDQUE1QixDQUFoQjs7V0FFTy9KLE1BQU0xWSxNQUFOLENBQWEsVUFBQ2dNLEdBQUQsRUFBTXVNLElBQU4sRUFBZTtVQUMzQm9LLFlBQVkzVyxHQUFsQjtVQUNNakQsU0FBU2taLE1BQU1qQixHQUFOLENBQVV6SSxJQUFWLENBQWY7VUFDSUksaUJBQUo7O1VBRUk1UCxVQUFVLElBQWQsRUFBb0I7bUJBQ1A7ZUFDSmlaLFFBREk7Z0JBRUhBLFFBRkc7aUJBR0ZFLFdBSEU7a0JBSURGO1NBSlY7T0FERixNQU9PO1lBQ0NhLE1BQU1oQixTQUFPVyxPQUFQLENBQVo7WUFDTTlZLE1BQU04WSxRQUFRSyxHQUFSLENBQVo7WUFDTWpaLE9BQU9pWixNQUFNWCxXQUFOLEdBQW9CQyxTQUFTLENBQTFDOztnQkFFUVUsR0FBUixLQUFnQjlaLE1BQWhCO21CQUNXO2tCQUFBO29CQUFBO2lCQUdGbVosY0FBY0MsTUFIWjs7U0FBWDs7O2dCQVFRdEosSUFBVixDQUFlRixRQUFmO2FBQ09nSyxTQUFQO0tBM0JLLEVBNEJKLEVBNUJJLENBQVA7R0FKRjtDQWpDRjs7QUNpREEsSUFBTVUsb0JBQWtCLEdBQXhCOzs7QUFHQSxJQUFNQywwQkFBd0IsR0FBOUI7O0FBRUEsSUFBTXFHLDZCQUE2QixTQUE3QkEsMEJBQTZCO1NBQU0vbkIsTUFBTW9nQixRQUFOLEdBQWlCcGdCLENBQWpCLEdBQXFCK2EsU0FBM0I7Q0FBbkM7O0lBRXFCd0o7Ozs7NkNBQ2E7YUFDdkIsSUFBSXJGLGtCQUFKLEVBQVA7Ozs7bUJBNkVVbGdCLEtBQVosRUFBNkI7OztpSEFDckJBLEtBRHFCOztVQWlJN0I0aUIsaUJBakk2QixHQWlJVCxVQUFDQyxHQUFELEVBQXVCO1lBQ3BDQyxXQUFMLEdBQW1CRCxHQUFuQjtLQWxJMkI7O1VBcUk3QkUscUJBckk2QixHQXFJTCxVQUFDRixHQUFELEVBQTJCO1lBQzVDNUQsZUFBTCxHQUF1QjRELEdBQXZCO0tBdEkyQjs7VUFxSjdCRyxZQXJKNkIsR0FxSmQsWUFBTTtVQUNmLE1BQUtDLGFBQVQsRUFBd0I7cUJBQ1QsTUFBS0EsYUFBbEI7O1lBRUdBLGFBQUwsR0FBcUJoRCxXQUFXLFlBQU07WUFDaEMsTUFBSzZDLFdBQVQsRUFBc0I7Z0JBQ2Z6TixRQUFMLENBQWMsRUFBRTFLLE9BQU8sTUFBS21ZLFdBQUwsQ0FBaUJJLFdBQTFCLEVBQWQ7O09BRmlCLEVBSWxCVCxpQkFKa0IsQ0FBckI7S0F6SjJCOztVQWdLN0JVLG9CQWhLNkIsR0FnS056RCxTQUFTLFlBQU07VUFDaEMsQ0FBQyxNQUFLVCxlQUFWLEVBQTJCOzs7VUFHckJBLGtCQUFrQixNQUFLQSxlQUFMLENBQXFCRSxxQkFBckIsRUFBeEI7O1VBRUksQ0FBQ0YsZUFBTCxFQUFzQjs7OztZQUlqQjVKLFFBQUwsQ0FBYzttQkFDRHdMLGFBQWE1QixlQUFiO09BRGI7S0FWcUIsQ0FoS007O1VBME03QkwsU0ExTTZCLEdBME1qQixZQUFNO1VBQ1J3RSxTQURRLEdBQ00sTUFBS3BqQixLQURYLENBQ1JvakIsU0FEUTs7VUFFWkEsYUFBYSxPQUFPQSxTQUFQLEtBQXFCLFVBQXRDLEVBQWtEO2NBQzNDL04sUUFBTCxDQUNFO3NCQUNjO1NBRmhCLEVBSUU7aUJBQU0rTixVQUFVLEVBQUV2akIsTUFBTSxNQUFLRyxLQUFMLENBQVc4WCxLQUFYLENBQWlCeFgsTUFBekIsRUFBVixDQUFOO1NBSkY7O0tBN015Qjs7VUFzTjdCK2lCLHNCQXRONkIsR0FzTkosVUFBQ0MsUUFBRCxFQUFjdEwsR0FBZCxFQUEyQkQsUUFBM0IsRUFBMkM7d0JBQzFCLE1BQUsvWCxLQURxQjtVQUNwRHVqQixZQURvRCxlQUMxREMsSUFEMEQ7VUFDekNDLFVBRHlDLGVBQ3pDQSxVQUR5QztVQUUxRDNhLEdBRjBELEdBRTdCaVAsUUFGNkIsQ0FFMURqUCxHQUYwRDtVQUVyREUsSUFGcUQsR0FFN0IrTyxRQUY2QixDQUVyRC9PLElBRnFEO1VBRS9DMkIsS0FGK0MsR0FFN0JvTixRQUY2QixDQUUvQ3BOLEtBRitDO1VBRXhDeEMsTUFGd0MsR0FFN0I0UCxRQUY2QixDQUV4QzVQLE1BRndDOzs7VUFJOUR1YixrQkFBSjtVQUNJLE1BQUsxakIsS0FBTCxDQUFXaWYsZUFBZixFQUFnQztZQUN4QjBFLGdCQUFnQixNQUFLbEYsZUFBTCxHQUF1QmlFLHVCQUE3QztZQUNNa0Isa0JBQWtCLE1BQUsxTyxLQUFMLENBQVc0SixTQUFYLEdBQXVCLE1BQUsrRSxlQUFwRDtZQUNNck0sY0FBY29NLGtCQUFrQkQsYUFBdEM7WUFDTUcsaUJBQ0pGLGtCQUFrQixNQUFLbkYsZUFBdkIsR0FBeUNrRixhQUQzQzs7b0JBR1ksRUFDVjVMLFNBQVNqUCxHQUFULEdBQWVpUCxTQUFTNVAsTUFBeEIsR0FBaUNxUCxXQUFqQyxJQUNBTyxTQUFTalAsR0FBVCxHQUFlZ2IsY0FGTCxDQUFaO09BUEYsTUFXTzs7b0JBRU8sSUFBWjs7O1VBR0lDLGdCQUNKblk7Ozt5QkFDZW9NLEdBRGY7cUJBRWEsQ0FBQzdZLFVBQU82a0IsYUFBUixFQUF1QjdrQixVQUFPOGtCLHNCQUE5QixFQUFzRDlqQixJQUF0RCxDQUNULEdBRFMsQ0FGYjtnQ0FBQTs7aUJBT1MsQ0FEUDtrQkFFUSxDQUZSO3VDQUcyQjZJLElBQXpCLHVCQUErQ0YsR0FBL0MsUUFIRjs2Q0FJaUNFLElBQS9CLHVCQUFxREYsR0FBckQsUUFKRjttQkFLU2lnQiwyQkFBMkJwZSxLQUEzQixDQUxUO29CQU1Vb2UsMkJBQTJCNWdCLE1BQTNCO2FBQ0pzYixjQUFjQyxTQUFkLEdBQ0EsRUFEQSxHQUVBLEVBQUU5ZixTQUFTLE1BQVgsRUFBbUJzZ0IsWUFBWSxNQUEvQixFQVROOztzQkFZQ1gsWUFBRCxJQUFXLE1BQU1ELFFBQWpCLEVBQTJCLFNBQVN0TCxHQUFwQyxFQUF5QyxhQUFhLEtBQXREO09BbkJKOzthQXVCT3lMLGFBQWNDLGFBQWFLLGFBQWQsSUFBZ0MsSUFBN0MsR0FBb0RBLGFBQTNEO0tBbFEyQjs7VUFHdEJ0RixlQUFMLEdBQXVCLENBQXZCO1VBQ0tvRixlQUFMLEdBQXVCLENBQXZCOztVQUVLM08sS0FBTCxHQUFhOzhCQUNhbFYsTUFBTThYLEtBQU4sQ0FBWXFNLElBQVosQ0FDdEI7ZUFBUSxDQUFDLENBQUN4TSxJQUFGLElBQVUsQ0FBQzNYLE1BQU1va0IsZ0JBQU4sQ0FBdUIvRCxHQUF2QixDQUEyQjFJLElBQTNCLENBQW5CO09BRHNCLENBRGI7a0JBSUMsS0FKRDtpQkFLQSxDQUxBO2FBTUpvRTtLQU5UOzs7Ozs7Ozs7Ozt3Q0Fla0I7YUFDWFcsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBS3NHLFlBQXZDOztVQUVNclksUUFBUSxLQUFLbVksV0FBTCxHQUNWLEtBQUtBLFdBQUwsQ0FBaUJJLFdBRFAsR0FFVixLQUFLaE8sS0FBTCxDQUFXdkssS0FGZjs7V0FJSzBaLGdCQUFMOztVQUVNdkYsU0FUWSxHQVNFLEtBQUs1SixLQVRQLENBU1o0SixTQVRZOztVQVVkLEtBQUtHLGVBQUwsSUFBd0IsSUFBNUIsRUFBa0M7WUFDMUJBLG1CQUFrQixLQUFLQSxlQUFMLENBQXFCRSxxQkFBckIsRUFBeEI7WUFDSUYsZ0JBQUosRUFBcUI7c0JBQ1A0QixhQUFhNUIsZ0JBQWIsQ0FBWjs7Ozs7V0FLQzVKLFFBQUwsQ0FBYyxFQUFFeUosb0JBQUYsRUFBYW5VLFlBQWIsRUFBZDs7OztvREFHK0Q7VUFBckNtTixLQUFxQyxRQUFyQ0EsS0FBcUM7VUFBOUJzTSxnQkFBOEIsUUFBOUJBLGdCQUE4Qjs7OztVQUd6REUseUJBQXlCeE0sTUFBTXFNLElBQU4sQ0FDN0I7ZUFBUSxDQUFDQyxpQkFBaUIvRCxHQUFqQixDQUFxQjFJLElBQXJCLENBQVQ7T0FENkIsQ0FBL0I7O1dBSUssSUFBSXVKLElBQUksQ0FBYixFQUFnQkEsSUFBSXBKLE1BQU14WCxNQUExQixFQUFrQzRnQixLQUFLLENBQXZDLEVBQTBDOzs7WUFHcEMsS0FBS2xoQixLQUFMLENBQVc4WCxLQUFYLENBQWlCb0osQ0FBakIsTUFBd0JuRixTQUE1QixFQUF1QztlQUNoQzFHLFFBQUwsQ0FBYzswREFBQTt3QkFFQTtXQUZkOzs7Ozs7O2NBVU02TCxDQUFOLE1BQWEsS0FBS2xoQixLQUFMLENBQVc4WCxLQUFYLENBQWlCb0osQ0FBakIsQ0FBYjs7Y0FFTTVnQixNQUFOLEdBQWUsS0FBS04sS0FBTCxDQUFXOFgsS0FBWCxDQUFpQnhYLE1BSmxDLEVBS0U7ZUFDSytVLFFBQUwsQ0FBYzswREFBQTt3QkFFQTtXQUZkOzs7Ozs7VUFTQXlDLE1BQU14WCxNQUFOLEtBQWlCLENBQWpCLElBQXNCLEtBQUtOLEtBQUwsQ0FBVzhYLEtBQVgsQ0FBaUJ4WCxNQUFqQixHQUEwQixDQUFwRCxFQUF1RDthQUNoRCtVLFFBQUwsQ0FBYzt3REFBQTtzQkFFQTtTQUZkO09BREYsTUFLTyxJQUFJaVAsMkJBQTJCLEtBQUtwUCxLQUFMLENBQVdvUCxzQkFBMUMsRUFBa0U7O2FBRWxFalAsUUFBTCxDQUFjOztTQUFkOzs7Ozt1Q0FNZWpHLFdBQXFCbVYsV0FBa0I7OzttQkFDcEIsS0FBS3ZrQixLQURlO1VBQ2hEOFgsS0FEZ0QsVUFDaERBLEtBRGdEO1VBQ3pDc00sZ0JBRHlDLFVBQ3pDQSxnQkFEeUM7OzttQkFHM0MsS0FBS0ksY0FBbEI7V0FDS0EsY0FBTCxHQUFzQnZFLFdBQVcsWUFBTTtlQUNoQ29FLGdCQUFMO09BRG9CLENBQXRCOztVQUlJRSxVQUFVNVosS0FBVixJQUFtQixJQUFuQixJQUEyQixLQUFLdUssS0FBTCxDQUFXdkssS0FBWCxLQUFxQjRaLFVBQVU1WixLQUE5RCxFQUFxRTt5QkFDbEQ4WixLQUFqQjs7O1VBR0lILHlCQUF5QnhNLE1BQU1xTSxJQUFOLENBQzdCO2VBQVEsQ0FBQyxDQUFDeE0sSUFBRixJQUFVLENBQUN5TSxpQkFBaUIvRCxHQUFqQixDQUFxQjFJLElBQXJCLENBQW5CO09BRDZCLENBQS9CO1VBSUUyTSwwQkFDQUEsMkJBQTJCLEtBQUtwUCxLQUFMLENBQVdvUCxzQkFEdEMsSUFFQUMsVUFBVTVaLEtBQVYsSUFBbUIsSUFIckIsRUFJRTthQUNLK1osb0JBQUwsR0FBNEJDLHNCQUFzQixZQUFNO2lCQUNqRHRQLFFBQUwsQ0FBYzs7V0FBZDtTQUQwQixDQUE1Qjs7Ozs7Ozs7OzsyQ0FXbUI7VUFDakIsS0FBS3FQLG9CQUFULEVBQStCOzZCQUNSLEtBQUtBLG9CQUExQjs7bUJBRVcsS0FBS0YsY0FBbEI7bUJBQ2EsS0FBS3ZCLGFBQWxCO2FBQ09uRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLa0csWUFBMUM7Ozs7Ozs7Ozt1Q0FpRGlCO1VBQ2IsS0FBSy9ELGVBQUwsSUFBd0IsSUFBNUIsRUFBa0M7WUFDeEJBLGlCQUR3QixHQUNKLElBREksQ0FDeEJBLGVBRHdCOztZQUUxQjJGLHFCQUFxQjNGLGtCQUFnQkUscUJBQWhCLEVBQTNCO1lBQ0l5RixrQkFBSixFQUF3QjtlQUNqQm5HLGVBQUwsR0FBdUI4QixpQkFBaUJxRSxrQkFBakIsQ0FBdkI7Y0FDTWhPLEtBQUssS0FBS2tNLFdBQWhCO2NBQ0lsTSxjQUFjaU8sV0FBbEIsRUFBK0I7Z0JBQ3ZCQyxvQkFBb0JuRSxxQkFBcUJpRSxrQkFBckIsQ0FBMUI7aUJBQ0tmLGVBQUwsR0FDRWpOLEdBQUd1SCxxQkFBSCxHQUEyQnJWLEdBQTNCLEdBQWlDZ2MsaUJBRG5DOzs7Ozs7Ozs7Ozs7Ozs2QkFZQztXQUNGOWtCLEtBQUwsQ0FBV29rQixnQkFBWCxDQUE0QkssS0FBNUI7V0FDS0osZ0JBQUw7V0FDS1UsV0FBTDs7Ozs2QkE4RE87OztvQkFTSCxLQUFLL2tCLEtBVEY7VUFFTHNoQixXQUZLLFdBRUxBLFdBRks7VUFHQ2lDLFlBSEQsV0FHTEMsSUFISztVQUlMd0IsUUFKSyxXQUlMQSxRQUpLO1VBS1F6RCxNQUxSLFdBS0wwRCxXQUxLO1VBTUxiLGdCQU5LLFdBTUxBLGdCQU5LO1VBT0x0TSxLQVBLLFdBT0xBLEtBUEs7VUFRTDBKLE9BUkssV0FRTEEsT0FSSzttQkFVbUMsS0FBS3RNLEtBVnhDO1VBVUNvUCxzQkFWRCxVQVVDQSxzQkFWRDtVQVV5QjNaLEtBVnpCLFVBVXlCQSxLQVZ6Qjs7O1VBWUgvRSxlQUFKO1VBQ0lvZixZQUFZcmEsVUFBVSxJQUExQixFQUFnQztpQkFDckJ1YSxrQkFBZ0I7d0JBQUE7aUJBRWhCZCxnQkFGZ0I7MEJBQUE7NEJBSUw5QyxXQUpLOztTQUFoQixDQUFUO09BREYsTUFRTyxJQUNMLEtBQUt0aEIsS0FBTCxDQUFXNEYsTUFBWCxLQUFzQm9iLHdCQUF0QixJQUNBLEtBQUtoaEIsS0FBTCxDQUFXNEYsTUFBWCxZQUE2QnVmLGdCQUZ4QixFQUdMO2lCQUNTQyxtQkFBaUI7aUJBQ2pCaEIsZ0JBRGlCO2tDQUFBO3dCQUFBOzBCQUFBOztTQUFqQixDQUFUO09BSkssTUFXQTtpQkFDSWlCLGdCQUFjO2lCQUNkakIsZ0JBRGM7a0NBQUE7d0JBQUE7MEJBQUE7O1NBQWQsQ0FBVDs7O1VBU0VrQixpQkFBSjtVQUNJM2EsU0FBUyxJQUFULElBQWlCMlosc0JBQXJCLEVBQTZDOzs7bUJBSXpDMVk7Ozt1QkFDYXpNLFVBQU9vbUIsT0FEcEI7bUJBRVMsRUFBRXBkLFFBQVEsQ0FBVixFQUFhd0MsT0FBTyxNQUFwQixFQUZUO2lCQUdPLEtBQUtpWTs7Z0JBRUg0QyxNQUFOLENBQWE7bUJBQVE3TixJQUFSO1dBQWIsRUFBMkI3WCxHQUEzQixDQUErQixVQUFDNlgsSUFBRCxFQUFPdUosQ0FBUDttQkFDOUJ0Vjs7OzJCQUNZLFFBRFo7c0NBQUE7cUJBR09zVixDQUhQO3VCQUlTO3VCQUNBLENBREE7d0JBRUMsQ0FGRDs2QkFHTSxpQ0FITjttQ0FJWSxpQ0FKWjt5QkFLRThELFdBQ0hqSixTQURHLEdBRUhnTiwyQkFBMkJ6SCxXQUEzQixDQVBDO2lCQUpUO3FCQWFPLGlCQUFNO3NCQUNMMUssTUFBTSxDQUFDb08sUUFBWCxFQUFxQjs7cUNBRUYxRSxHQUFqQixDQUFxQjNJLElBQXJCLEVBQTJCZixHQUFHd0YsWUFBOUI7Ozs7NEJBSUhtSCxZQUFELElBQVcsTUFBTTVMLElBQWpCLEVBQXVCLFNBQVN1SixDQUFoQyxFQUFtQyxhQUFhLEtBQWhEO2FBckI0QjtXQUEvQjtTQU5MO09BSEYsTUFtQ08sSUFBSXZXLFNBQVMsSUFBYixFQUFtQjs7O21CQUdiaUIsdUJBQUssT0FBTyxFQUFFakIsT0FBTyxNQUFULEVBQVosRUFBK0IsS0FBSyxLQUFLaVksaUJBQXpDLEdBQVg7T0FISyxNQUlBOztZQUVDNkMsZ0JBQWdCM04sTUFBTTBOLE1BQU4sQ0FDcEI7aUJBQVE3TixRQUFReU0saUJBQWlCL0QsR0FBakIsQ0FBcUIxSSxJQUFyQixDQUFoQjtTQURvQixDQUF0QjtZQUdNK04saUJBQWlCNU4sTUFDcEIwTixNQURvQixDQUNiO2lCQUFRN04sUUFBUSxDQUFDeU0saUJBQWlCL0QsR0FBakIsQ0FBcUIxSSxJQUFyQixDQUFqQjtTQURhLEVBRXBCd0ssS0FGb0IsQ0FFZCxDQUZjLEVBRVhYLE9BRlcsQ0FBdkI7O1lBSU1PLFlBQVluYyxPQUFPNmYsYUFBUCxDQUFsQjtZQUNNRSxxQkFBcUIvZixPQUFPOGYsY0FBUCxDQUEzQjtZQUNNdmQsU0FBU2xILEtBQUt5VyxHQUFMLCtCQUFZcUssVUFBVWppQixHQUFWLENBQWM7aUJBQU84bEIsSUFBSTljLEdBQUosR0FBVThjLElBQUl6ZCxNQUFyQjtTQUFkLENBQVosRUFBZjttQkFFRXlEOztZQUFLLE9BQU8sRUFBRWpCLE9BQU8sTUFBVCxFQUFaLEVBQStCLEtBQUssS0FBS2lZLGlCQUF6Qzs7O2NBQ08sV0FBV3pqQixVQUFPb21CLE9BQXZCLEVBQWdDLE9BQU8sRUFBRXBkLGNBQUYsRUFBVXdDLFlBQVYsRUFBdkM7MEJBQ2lCN0ssR0FBZCxDQUFrQixVQUFDNlgsSUFBRCxFQUFPdUosQ0FBUDtxQkFDakIsT0FBS21DLHNCQUFMLENBQTRCMUwsSUFBNUIsRUFBa0N1SixDQUFsQyxFQUFxQ2EsVUFBVWIsQ0FBVixDQUFyQyxDQURpQjthQUFsQjtXQUZMOzs7Y0FNTyxXQUFXL2hCLFVBQU9vbUIsT0FBdkIsRUFBZ0MsT0FBTyxFQUFFNWEsWUFBRixFQUF2QzsyQkFDa0I3SyxHQUFmLENBQW1CLFVBQUMrbEIsSUFBRCxFQUFPM0UsQ0FBUCxFQUFhO2tCQUN6Qm5KLFdBQVc0TixtQkFBbUJ6RSxDQUFuQixDQUFqQjtxQkFFRXRWOzs7c0NBQ29Cc1YsQ0FEcEI7O2dDQUdnQixRQURkOzhCQUVZO3FCQUNQbkosUUFITCxDQUZGO3VCQU9PLGlCQUFNO3dCQUNMbkIsRUFBSixFQUFRO3VDQUNXMEosR0FBakIsQ0FBcUJ1RixJQUFyQixFQUEyQmpQLEdBQUd3RixZQUE5Qjs7Ozs4QkFJSG1ILFlBQUQsSUFBVyxNQUFNc0MsSUFBakIsRUFBdUIsU0FBUzNFLENBQWhDLEVBQW1DLGlCQUFuQztlQWRKO2FBRkQ7V0FQTDtlQTZCUWpDLGVBQUwsSUFDQ3JULGNBQUMsVUFBRDs2QkFDbUIsS0FBSzZTLGVBRHhCO3VCQUVhLEtBQUtHLFNBRmxCO3dCQUlJLEtBQUsxSixLQUFMLENBQVd5SixVQUFYLElBQXlCLEtBQUt6SixLQUFMLENBQVdvUCxzQkFKeEM7MEJBTWdCbmMsTUFOaEI7dUJBT2EsS0FBSytNLEtBQUwsQ0FBVzRKOztTQXRDOUI7OzthQTZDSyxLQUFLOWUsS0FBTCxDQUFXaWYsZUFBWCxHQUNMclQ7dUJBQUE7O2VBQ08sS0FBS21YLHFCQURaO29CQUVZLEtBQUtJLG9CQUZqQjsyQkFHbUIsS0FBS25qQixLQUFMLENBQVdpZjs7O09BSnpCLEdBU0xxRyxRQVRGOzs7O0VBL2RvQ3BWOztBQUFuQnFWLFFBS1pyWixZQUFZOzs7OztlQUtKSixVQUFVVSxNQUxOOzs7Ozs7UUFXWFYsVUFBVXFFLElBQVYsQ0FBZXZCLFVBWEo7Ozs7OztZQWlCUDlDLFVBQVVTLElBakJIOzs7OztlQXNCSlQsVUFBVVUsTUF0Qk47Ozs7O1NBMkJWVixVQUFVc00sT0FBVixDQUFrQnRNLFVBQVVXLEtBQVYsQ0FBZ0IsRUFBaEIsQ0FBbEIsRUFBdUNtQyxVQTNCN0I7Ozs7O29CQWdDQzlDLFVBQVVnYSxVQUFWLENBQXFCNUYsa0JBQXJCLENBaENEOzs7Ozs7O2FBdUNOcFUsVUFBVXFFLElBdkNKOzs7OztXQTRDUnJFLFVBQVVVLE1BNUNGOzs7Ozs7bUJBa0RBVixVQUFVcUUsSUFsRFY7Ozs7OztnQkF3REhyRSxVQUFVUyxJQXhEUDs7Ozs7Y0E2RExULFVBQVVTOztBQWxFTGdaLFFBcUVablYsZUFBZTtlQUNQLEdBRE87b0JBRUYsSUFBSThQLGtCQUFKLEVBRkU7V0FHWCxDQUhXO2dCQUlOLEtBSk07VUFLWlkscUJBTFk7YUFNVCxxQkFBTSxFQU5HO2NBT1I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9IaEIsSUFBTXRELG1CQUFpQjtNQUNqQixHQURpQjtNQUVqQixHQUZpQjtNQUdqQjtDQUhOOztBQU1BLElBQU1DLG9CQUFrQixFQUF4Qjs7SUFrQnFCdUw7Ozs7Ozs7Ozs7Ozs7O21MQUNuQjlULFFBQWU7a0JBQ0QsSUFEQztvQkFFQzZHO2FBb0NoQmtOLHVCQUF1QixZQUFNO1VBQ3ZCaHBCLE9BQU8sSUFBWDthQUNPSSxJQUFQLENBQVk2b0IsV0FBWixFQUF5QkMsT0FBekIsQ0FBaUMsaUJBQVM7WUFDcEM3WixPQUFPOFosVUFBUCxDQUFrQkYsWUFBWUcsS0FBWixDQUFsQixFQUFzQ0MsT0FBMUMsRUFBbUQ7aUJBQzFDRCxLQUFQOztPQUZKO2FBS09wcEIsSUFBUDthQUdGc3BCLGNBQWMsWUFBTTtZQUNidnBCLEtBQUwsQ0FBVzZkLFNBQVg7YUFHRkMsa0JBQWtCLFVBQUM5SSxLQUFELEVBQWtCO1VBRWhDQSxNQUFNZSxNQUFOLFlBQXdCZ0ksSUFBeEIsSUFDQSxNQUFLWCxTQURMLElBRUEsTUFBS0EsU0FBTCxDQUFldFMsUUFBZixDQUF3QmtLLE1BQU1lLE1BQTlCLENBRkEsSUFHQSxNQUFLeVQsS0FITCxJQUlBLENBQUMsTUFBS0EsS0FBTCxDQUFXMWUsUUFBWCxDQUFvQmtLLE1BQU1lLE1BQTFCLENBTEgsRUFNRTtjQUNLd1QsV0FBTDs7YUFJSjVMLGdCQUFnQixVQUFDM0ksS0FBRCxFQUFnQztVQUMxQ0EsTUFBTTRJLE9BQU4sS0FBa0JILGlCQUF0QixFQUF1QztjQUNoQzhMLFdBQUw7O2FBSUpFLG1CQUFtQixZQUFNO1VBQ2pCeHBCLE9BQU8sTUFBS2dwQixvQkFBTCxFQUFiO1VBRUVocEIsU0FBUyxNQUFLaVYsS0FBTCxDQUFXd1UsVUFBcEIsSUFDQXBhLE9BQU80TSxXQUFQLEtBQXVCLE1BQUtoSCxLQUFMLENBQVd5VSxZQUZwQyxFQUdFO2NBQ0t0VSxRQUFMLENBQWMsRUFBRXFVLFlBQVl6cEIsSUFBZCxFQUFvQjBwQixjQUFjcmEsT0FBTzRNLFdBQXpDLEVBQWQ7O2FBSUowTixnQkFBZ0IsVUFBQzVVLEtBQUQsRUFBa0I7VUFFOUJBLE1BQU1lLE1BQU4sWUFBd0JnSSxJQUF4QixJQUNBLE1BQUt5TCxLQURMLElBRUEsQ0FBQyxNQUFLQSxLQUFMLENBQVcxZSxRQUFYLENBQW9Ca0ssTUFBTWUsTUFBMUIsQ0FISCxFQUlFO2NBQ0t5VCxLQUFMLENBQVcvTSxLQUFYOzs7Ozs7O3dDQWpGZ0I7ZUFDVEMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsS0FBS29CLGVBQXhDO2FBQ09wQixnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxLQUFLaUIsYUFBeEM7YUFDT2pCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUsrTSxnQkFBdkM7ZUFDUy9NLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtrTixhQUF4QyxFQUF1RCxJQUF2RDtXQUNLQyxVQUFMLEdBQWtCcEosU0FBU3FKLGFBQTNCO1dBQ0tMLGdCQUFMO1VBQ0loSixTQUFTc0osSUFBYixFQUFtQjtpQkFDUkEsSUFBVCxDQUFjeHBCLEtBQWQsQ0FBb0JrUixRQUFwQixHQUErQixRQUEvQixDQURpQjs7VUFHZixLQUFLK1gsS0FBTCxJQUFjLEtBQUtBLEtBQUwsQ0FBVy9NLEtBQTdCLEVBQW9DOzs7O2FBSTdCK00sS0FBTCxDQUFXL00sS0FBWDs7Ozs7MkNBSW1CO2VBQ1pLLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDLEtBQUtnQixlQUEzQzthQUNPaEIsbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0MsS0FBS2EsYUFBM0M7YUFDT2IsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBSzJNLGdCQUExQztlQUNTM00sbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBSzhNLGFBQTNDLEVBQTBELElBQTFEOztVQUVJbkosU0FBU3NKLElBQWIsRUFBbUI7aUJBQ1JBLElBQVQsQ0FBY3hwQixLQUFkLENBQW9Ca1IsUUFBcEIsR0FBK0IsRUFBL0IsQ0FEaUI7O1VBR2YsS0FBS29ZLFVBQUwsSUFBbUIsS0FBS0EsVUFBTCxDQUFnQnBOLEtBQXZDLEVBQThDOzthQUV2Q29OLFVBQUwsQ0FBZ0JwTixLQUFoQjs7Ozs7NkJBNERLOzs7bUJBU0gsS0FBS3pjLEtBVEY7VUFFTGdxQix1QkFGSyxVQUVMQSx1QkFGSztVQUdMQyx1QkFISyxVQUdMQSx1QkFISztVQUlMMWUsUUFKSyxVQUlMQSxRQUpLO1VBS0wyZSxNQUxLLFVBS0xBLE1BTEs7VUFNTEMsT0FOSyxVQU1MQSxPQU5LOytCQU9MQyxJQVBLO1VBT0xBLElBUEssK0JBT0UsUUFQRjsrQkFRTG5xQixJQVJLO1VBUUxBLElBUkssK0JBUUUsSUFSRjs7VUFVRDBLLFFBQVE2UyxpQkFBZXZkLElBQWYsQ0FBZDs7VUFFTW1kLFlBQVksQ0FDaEJ4WCxPQUFPb0UsS0FEUyxFQUVoQnBFLE9BQU95a0IsU0FGUyxFQUdoQnprQixPQUFPMGtCLElBSFMsRUFJaEIxa0IsT0FBT3lDLGFBSlMsRUFLaEJ6QyxPQUFPNEMsS0FMUyxFQU1oQjVDLE9BQU84RSxJQU5TLENBQWxCO1VBUU02ZixtQkFDSixLQUFLclYsS0FBTCxDQUFXd1UsVUFBWCxLQUEwQixJQUExQixHQUNJbGIsV0FBVzRPLFNBQVgsRUFBc0J4WCxPQUFPTyxRQUE3QixFQUF1Q1AsT0FBT2UsT0FBOUMsRUFBdUQ3QyxTQUFPMG1CLE9BQTlELENBREosR0FFSWhjLFdBQ0U0TyxTQURGLEVBRUV4WCxPQUFPUSxXQUZULEVBR0V0QyxTQUFPMG1CLE9BSFQsRUFJRXJyQixVQUFPaWUsU0FKVCxDQUhOOztVQVVNcU4sVUFBVSxDQUFDN2tCLE9BQU9vQyxHQUFSLEVBQWFwQyxPQUFPbUUsUUFBcEIsQ0FBaEI7VUFDTTJnQixpQkFDSixLQUFLeFYsS0FBTCxDQUFXd1UsVUFBWCxLQUEwQixJQUExQixHQUNJbGIsV0FBV2ljLE9BQVgsRUFBb0I3akIsT0FBT1EsT0FBM0IsRUFBb0MxRixhQUFXaXBCLEVBQS9DLEVBQW1EL2tCLE9BQU9XLE9BQTFELENBREosR0FFSWlJLFdBQVdpYyxPQUFYLEVBQW9CN2pCLE9BQU9RLE9BQTNCLEVBQW9DOEMsUUFBUUcsT0FBNUMsRUFBcURsTCxVQUFPc3JCLE9BQTVELENBSE47O1VBS01HLFVBQVUsQ0FDZGhsQixPQUFPa0UsUUFETyxFQUVkbEUsT0FBTzRDLEtBRk8sRUFHZDVDLE9BQU84RSxJQUhPLEVBSWRtZ0IsT0FBT0MsT0FKTyxDQUFoQjtVQU1NQyxpQkFBaUJ2YyxXQUNyQm9jLE9BRHFCLEVBRXJCenJCLFVBQU95ckIsT0FGYyxFQUdyQmhrQixPQUFPRSxVQUhjLEVBSXJCaEQsU0FBTzBtQixPQUpjLENBQXZCOzthQVFFNWU7Ozt3QkFDY3FlLHVCQURkO3FCQUVhTSxnQkFGYjtlQUdPLGdCQUFLO21CQUNIbk4sU0FBTCxHQUFpQmpaLENBQWpCO1dBSko7Z0JBTVFpbUI7OytCQUVELFdBQVdXLGNBQWhCLEdBUkY7Ozs7dUJBVWVMLGNBRGI7aUJBRU8sZ0JBQUs7cUJBQ0hsQixLQUFMLEdBQWFybEIsQ0FBYjthQUhKO3NCQUtZLENBQUMsQ0FMYjttQkFNUyxFQUFFd0csWUFBRjs7O2VBRVA7O3lCQUNZLE1BRFo7d0JBRVcsVUFGWDtrQkFHTSxFQUFFL0csU0FBUyxZQUFYOzs7aUJBRUo7Z0JBQUssU0FBTDt1QkFDWSxRQUFULEdBQ0NnSTttQkFBQTs7NkNBQzZCOzZCQUNoQixFQUFFb2YsYUFBYSxFQUFmLEVBQW1CQyxjQUFjLEVBQWpDO21CQUZiOzJCQUlVLE1BSlY7a0NBS2lCLFFBTGpCOzRCQU1ZOzs7eUJBRVY7b0JBQVMsTUFBSyxJQUFkLEVBQW1CLG9CQUFvQixDQUF2Qzs7O2VBVEgsR0FjQ3JmO21CQUFBO2tCQUFLLFNBQVEsTUFBYixFQUFvQixTQUFTLENBQTdCOzt5QkFDRTtvQkFBUyxNQUFLLElBQWQsRUFBbUIsb0JBQW9CLENBQXZDOzs7ZUFoQk47dUJBcUJZLFFBQVQsSUFDQ0E7bUJBQUE7a0JBQUssU0FBUyxDQUFkLEVBQWlCLFVBQVMsVUFBMUIsRUFBcUMsU0FBckMsRUFBeUMsV0FBekM7OEJBQ0csVUFBRDtzQ0FDc0JvZSx1QkFEdEI7d0JBRU8sUUFGUDsyQkFHVyxLQUFLVDs7ZUExQnRCO3VCQThCWSxRQUFULElBQXFCM2QsY0FBQyxPQUFEO2FBbkMxQjs7aUJBcUNFO2dCQUFLLE1BQUssTUFBVixFQUFpQixVQUFTLE1BQTFCLEVBQWlDLFVBQVMsVUFBMUM7O2FBckNGOztpQkF3Q0U7Z0JBQUssU0FBTDt3QkFFSUE7bUJBQUE7O3lCQUNZLFFBQVQsSUFBcUJBLGNBQUMsT0FBRCxPQUR4Qjs7cUJBRUU7b0JBQUssU0FBUyxDQUFkOzs7Ozs7O09BOURkOzs7O0VBaEorQnNFOzs7QUF5Tm5DOFksTUFBTTljLFNBQU4sR0FBa0I7WUFDTkosVUFBVUssSUFESjsyQkFFU0wsVUFBVVksTUFBVixDQUFpQmtDLFVBRjFCO1VBR1I5QyxVQUFVSyxJQUhGO1dBSVBMLFVBQVVZLE1BQVYsQ0FBaUJrQyxVQUpWOzJCQUtTOUMsVUFBVVksTUFBVixDQUFpQmtDLFVBTDFCO2FBTUw5QyxVQUFVcUUsSUFOTDtRQU9WckUsVUFBVUMsS0FBVixDQUFnQixDQUFDLGFBQUQsRUFBZ0IsUUFBaEIsQ0FBaEIsQ0FQVTtRQVFWRCxVQUFVQyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBQWhCO0NBUlI7Ozs7QUN4UGUsU0FBU21mLE1BQVQsQ0FBZ0JsckIsS0FBaEIsRUFBOEI7TUFDbkNtckIsTUFEbUMsR0FDYm5yQixLQURhLENBQ25DbXJCLE1BRG1DO29CQUNibnJCLEtBRGEsQ0FDM0JDLElBRDJCO01BQzNCQSxJQUQyQiwrQkFDcEIsRUFEb0I7OztTQUl6QzJMO09BQUE7O2lDQUM2QjtpQkFDaEI7bUNBQ2tCdWYsU0FBUyxDQUFULEdBQWEsVUFEL0I7bUJBRUUsTUFGRjtxQkFHSTs7T0FMakI7ZUFRV0EsU0FBUyxNQUFULEdBQWtCLE9BUjdCO2NBU1VsckIsSUFUVjtnQkFVVyxVQVZYO2FBV1NBOzsyQkFFRixXQUFXZCxVQUFPaXNCLFdBQXZCLEdBYkY7MkJBY08sV0FBV2pzQixVQUFPa3NCLFdBQXZCO0dBZko7OztBQW9CRkgsT0FBT2hmLFNBQVAsR0FBbUI7VUFDVEosVUFBVVMsSUFERDtRQUVYVCxVQUFVVTtDQUZsQjs7OztJQ1hxQjhlOzs7Ozs7Ozs7Ozs7OzsrTEFpQm5CcFcsUUFBUTtlQUNHO2FBR1hXLGVBQWUsVUFBQ2IsS0FBRCxFQUFrQztVQUN2Q2MsT0FEdUMsR0FDM0JkLE1BQU1lLE1BRHFCLENBQ3ZDRCxPQUR1Qzs7WUFFMUM5VixLQUFMLENBQVdnVyxRQUFYLENBQW9CLEVBQUVGLGdCQUFGLEVBQVdkLFlBQVgsRUFBcEI7YUFHRmlCLGFBQWE7YUFBTSxNQUFLWixRQUFMLENBQWMsRUFBRWEsU0FBUyxLQUFYLEVBQWQsQ0FBTjthQUNiQyxjQUFjLFlBQU07WUFDYmQsUUFBTCxDQUFjLEVBQUVhLFNBQVMsSUFBWCxFQUFkOzs7Ozs7NkJBR087OzttQkFDOEMsS0FBS2xXLEtBRG5EO1VBQ0M4VixPQURELFVBQ0NBLE9BREQ7VUFDVTNCLFFBRFYsVUFDVUEsUUFEVjtVQUNvQnFDLEVBRHBCLFVBQ29CQSxFQURwQjtVQUN3QmxWLElBRHhCLFVBQ3dCQSxJQUR4QjtVQUM4QnJCLElBRDlCLFVBQzhCQSxJQUQ5QjtVQUNvQzRELEtBRHBDLFVBQ29DQSxLQURwQzs7YUFHTCtIOzs7cUJBQ2E0QyxXQUFXclAsVUFBT21zQixXQUFsQixpREFDUm5zQixVQUFPb3NCLG9CQURDLEVBQ3NCLEtBQUtyVyxLQUFMLENBQVdnQixPQURqQywrQkFFUi9XLFVBQU9xc0IsYUFGQyxFQUVldnJCLFNBQVMsSUFGeEIsK0JBR1JkLFVBQU9zc0IsYUFIQyxFQUdleHJCLFNBQVMsSUFIeEIsK0JBSVJkLFVBQU91c0Isa0JBSkMsRUFJb0IsQ0FBQ3ZYLFFBQUQsSUFBYTJCLE9BSmpDLCtCQUtSM1csVUFBT3dzQixzQkFMQyxFQUt3QnhYLFlBQVksQ0FBQzJCLE9BTHJDOzs7bUJBU0FBLE9BRFg7cUJBRWF0SCxXQUFXclAsVUFBT3lzQixLQUFsQixtREFDUnpzQixVQUFPMHNCLFlBREMsRUFDYyxDQUFDMVgsUUFEZixnQ0FFUmhWLFVBQU8yc0IsT0FGQyxFQUVTN3JCLFNBQVMsSUFGbEIsZ0NBR1JkLFVBQU80c0IsT0FIQyxFQUdTOXJCLFNBQVMsSUFIbEIsaUJBRmI7b0JBT1lrVSxRQVBaO2NBUU1xQyxFQVJOO2dCQVNRbFYsSUFUUjtrQkFVVSxLQUFLMlUsVUFWZjtvQkFXWSxLQUFLSixZQVhqQjttQkFZVyxLQUFLTSxXQVpoQjtnQkFhTyxPQWJQO2lCQWNTdFM7VUF2Qlg7bUJBMEJJK0g7cUJBQ2E0QyxXQUFXclAsVUFBTzZzQixLQUFsQixtREFDUjdzQixVQUFPOHNCLE9BREMsRUFDU2hzQixTQUFTLElBRGxCLGdDQUVSZCxVQUFPK3NCLE9BRkMsRUFFU2pzQixTQUFTLElBRmxCLGdDQUdSZCxVQUFPZ3RCLFlBSEMsRUFHYyxDQUFDaFksUUFIZixnQ0FJUmhWLFVBQU9pdEIsYUFKQyxFQUllalksUUFKZjs7T0E1Qm5COzs7O0VBakNxQ2pFOztBQUFwQm9iLFlBQ1pwZixZQUFZO1dBQ1JKLFVBQVVTLElBREY7WUFFUFQsVUFBVVMsSUFGSDtNQUdiVCxVQUFVWSxNQUFWLENBQWlCa0MsVUFISjtRQUlYOUMsVUFBVVksTUFKQztZQUtQWixVQUFVcUUsSUFBVixDQUFldkIsVUFMUjtTQU1WOUMsVUFBVVksTUFBVixDQUFpQmtDLFVBTlA7UUFPWDlDLFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFoQjs7QUFSV3VmLFlBV1psYixlQUFlO1dBQ1gsS0FEVztZQUVWLEtBRlU7UUFHZDs7O0lDZldpYzs7Ozs7Ozs7Ozs7Ozs7K0xBR25CblgsUUFBZTt1QkFDSSxDQURKO29CQUVDLENBRkQ7aUJBR0Y7YUE4QmIwTCxrQkFBa0IsWUFBTTtVQUNkeEQsU0FEYyxHQUNBLE1BQUtwZCxLQURMLENBQ2RvZCxTQURjOztVQUVsQixDQUFDQSxTQUFMLEVBQWdCO2VBQ1AsQ0FBUDs7YUFFS3dELGdCQUFnQnhELFNBQWhCLENBQVA7YUFxQkZrUCxpQkFBaUI1TSxTQUFTLFlBQU07WUFDekJySyxRQUFMLENBQWMsTUFBS2tYLGNBQUwsRUFBZDtLQURlOzs7Ozs7Ozs7O3dDQWxERzs7O1VBQ1ZuUCxTQURVLEdBQ0ksS0FBS3BkLEtBRFQsQ0FDVm9kLFNBRFU7O1VBRWQsQ0FBQ0EsU0FBTCxFQUFnQjs7O2lCQUdMLFlBQU07ZUFDVi9ILFFBQUw7MkJBQ21Ca0wsaUJBQWlCbkQsU0FBakI7V0FDZCxPQUFLbVAsY0FBTCxFQUZMO09BREY7Ozs7Ozs7Ozt5Q0FXbUI7O1dBRWRELGNBQUw7Ozs7Ozs7OztxQ0FjZTttQkFDcUIsS0FBS3RzQixLQUQxQjtVQUNQb2QsU0FETyxVQUNQQSxTQURPO1VBQ0lvUCxZQURKLFVBQ0lBLFlBREo7O1VBRVgsQ0FBQ3BQLFNBQUwsRUFBZ0I7ZUFDUCxJQUFQOztVQUVJeUIsZUFBZTJOLGdCQUFnQixLQUFLNUwsZUFBMUM7O2FBRU87c0JBQ1MvQixjQURUO21CQUVNZ0MsYUFBYXpELFNBQWI7T0FGYjs7Ozs7Ozs7OzZCQWVPO21CQUM4QyxLQUFLbEksS0FEbkQ7VUFDQ3VKLGVBREQsVUFDQ0EsZUFERDtVQUNrQkksWUFEbEIsVUFDa0JBLFlBRGxCO1VBQ2dDQyxTQURoQyxVQUNnQ0EsU0FEaEM7b0JBRStDLEtBQUs5ZSxLQUZwRDtVQUVDb2QsU0FGRCxXQUVDQSxTQUZEO1VBRVl3QixTQUZaLFdBRVlBLFNBRlo7VUFFdUJGLE9BRnZCLFdBRXVCQSxPQUZ2QjtVQUVnQ0MsVUFGaEMsV0FFZ0NBLFVBRmhDOzs7VUFJRDNlLFFBQVE7d0NBQUE7NEJBQUE7d0JBQUE7OEJBQUE7a0NBQUE7O09BQWQ7O1VBU0ksQ0FBQ29kLFNBQUQsSUFBY3NCLE9BQWxCLEVBQTJCO2VBQ2xCLElBQVA7O2FBR0E5Uzt1QkFBQTs7b0JBQ1ksS0FBSzBnQixjQURqQjsyQkFFbUJsUDs7c0JBRWhCLFVBQUQsRUFBZ0JwZCxLQUFoQjtPQUxKOzs7O0VBbEZxQ2tROzs7QUE2RnpDbWMsWUFBWW5nQixTQUFaLEdBQXdCOzs7O2FBSVhKLFVBQVVXLEtBQVYsQ0FBZ0I7c0JBQ1BYLFVBQVVxRSxJQURIO3lCQUVKckUsVUFBVXFFO0dBRnRCLENBSlc7Z0JBUVJyRSxVQUFVcUUsSUFSRjtXQVNickUsVUFBVVMsSUFURztjQVVWVCxVQUFVUyxJQVZBO2FBV1hULFVBQVVxRTtDQVh2Qjs7QUFjQWtjLFlBQVlqYyxZQUFaLEdBQTJCO2FBQ2QsT0FBT2QsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBaEMsR0FBeUM7Q0FEdEQ7Ozs7SUNwR3FCbWQ7Ozs7Ozs7Ozs7Ozs7OytMQVduQnZYLFFBQWU7ZUFDSixLQURJO2VBRUo7YUFHWFcsZUFBZSxVQUFDYixLQUFELEVBQTZDO1lBQ3JEaFYsS0FBTCxDQUFXZ1csUUFBWCxDQUFvQjtlQUNYaEIsTUFBTTBYLGFBQU4sQ0FBb0I3b0IsS0FEVDt3QkFFRm1SO09BRmxCO2FBTUYyWCxjQUFjLFVBQUMzWCxLQUFELEVBQTZDO1lBQ3BEaFYsS0FBTCxDQUFXZ1csUUFBWCxDQUFvQjtlQUNYLEVBRFc7d0JBRUZoQjtPQUZsQjthQU1GRyxtQkFBbUI7YUFBTSxNQUFLRSxRQUFMLENBQWMsRUFBRUMsU0FBUyxJQUFYLEVBQWQsQ0FBTjthQUNuQkMsbUJBQW1CO2FBQU0sTUFBS0YsUUFBTCxDQUFjLEVBQUVDLFNBQVMsS0FBWCxFQUFkLENBQU47YUFDbkJhLGNBQWMsVUFBQ25CLEtBQUQsRUFBNkM7WUFDcERLLFFBQUwsQ0FBYyxFQUFFYSxTQUFTLElBQVgsRUFBZDs7VUFFSSxNQUFLbFcsS0FBTCxDQUFXNHNCLE9BQWYsRUFBd0I7Y0FDakI1c0IsS0FBTCxDQUFXNHNCLE9BQVgsQ0FBbUI7aUJBQ1Y1WCxNQUFNMFgsYUFBTixDQUFvQjdvQixLQURWOzBCQUVEbVI7U0FGbEI7O2FBTUppQixhQUFhLFVBQUNqQixLQUFELEVBQTZDO1lBQ25ESyxRQUFMLENBQWMsRUFBRWEsU0FBUyxLQUFYLEVBQWQ7O1VBRUksTUFBS2xXLEtBQUwsQ0FBVzZzQixNQUFmLEVBQXVCO2NBQ2hCN3NCLEtBQUwsQ0FBVzZzQixNQUFYLENBQWtCLEVBQUU3WCxZQUFGLEVBQWxCOzs7Ozs7OzZCQUlLO21CQUNnRCxLQUFLaFYsS0FEckQ7VUFDQ21PLGtCQURELFVBQ0NBLGtCQUREO1VBQ3FCcUksRUFEckIsVUFDcUJBLEVBRHJCO1VBQ3lCc1csV0FEekIsVUFDeUJBLFdBRHpCO1VBQ3NDanBCLEtBRHRDLFVBQ3NDQSxLQUR0Qzs7Ozs7VUFLRGtwQixZQUNKLENBQUMsS0FBSzdYLEtBQUwsQ0FBV2dCLE9BQVgsSUFBc0IsS0FBS2hCLEtBQUwsQ0FBV0ksT0FBbEMsS0FBOEN6UixLQUE5QyxJQUF1REEsTUFBTXZELE1BQU4sR0FBZSxDQUR4RTs7YUFJRXNMO1dBQUE7O21CQUNVLE1BRFY7b0JBRVcsVUFGWDtzQkFHYSxRQUhiO3dCQUlnQixLQUFLdUosZ0JBSnJCO3dCQUtnQixLQUFLSSxnQkFMckI7bUJBTVcsS0FBS1ksV0FOaEI7a0JBT1UsS0FBS0YsVUFQZjtpQkFRUTs7O2FBRU47O3VDQUM2Qjt1QkFDaEI7K0JBQ1EsTUFEUjs7cUJBR0YsS0FIRTsyQkFJSTs7YUFOakI7c0JBU1csVUFUWDtzQkFBQTtzQkFXWTs7d0JBRVQsSUFBRCxJQUFNLE1BQUssUUFBWCxFQUFvQixvQkFBbUIsRUFBdkM7U0F2Qko7O3dCQTBCZ0I5SCxrQkFEZDtxQkFFYWhQLFVBQU9vWCxLQUZwQjtjQUdNQyxFQUhOO29CQUlZLEtBQUtYLFlBSmpCO3VCQUtlaVgsV0FMZjtnQkFNTyxXQU5QO2dCQU9PLFFBUFA7aUJBUVNqcEI7VUFqQ1g7cUJBb0NJK0g7YUFBQTtZQUFLLFVBQVMsVUFBZCxFQUF5QixXQUF6QixFQUErQixTQUEvQjs7Ozt5QkFFZXpNLFVBQU82dEIsS0FEcEI7dUJBRVcsS0FBS0wsV0FGaEI7d0JBR1ksQ0FBQyxDQUhiO29CQUlPOzswQkFFSixJQUFELElBQU0sTUFBSyxPQUFYLEVBQW1CLG9CQUFtQixFQUF0Qzs7O09BNUNWOzs7O0VBMURxQ3pjOztBQUFwQnVjLFlBQ1p2Z0IsWUFBWTtzQkFDR0osVUFBVVksTUFBVixDQUFpQmtDLFVBRHBCO01BRWI5QyxVQUFVWSxNQUFWLENBQWlCa0MsVUFGSjtVQUdUOUMsVUFBVXFFLElBSEQ7WUFJUHJFLFVBQVVxRSxJQUFWLENBQWV2QixVQUpSO1dBS1I5QyxVQUFVcUUsSUFMRjtlQU1KckUsVUFBVVksTUFOTjtTQU9WWixVQUFVWTs7Ozs7QUN2Qk4sU0FBU3VnQixnQkFBVCxDQUEwQmp0QixLQUExQixFQUF3QztNQUM3QzhYLEtBRDZDLEdBQ085WCxLQURQLENBQzdDOFgsS0FENkM7TUFDdEM5QixRQURzQyxHQUNPaFcsS0FEUCxDQUN0Q2dXLFFBRHNDO01BQzVCa1gsaUJBRDRCLEdBQ09sdEIsS0FEUCxDQUM1Qmt0QixpQkFENEI7b0JBQ09sdEIsS0FEUCxDQUNUQyxJQURTO01BQ1RBLElBRFMsK0JBQ0YsSUFERTs7U0FHbkQyTDs7TUFBSyxXQUFXek0sVUFBTzh0QixnQkFBdkIsRUFBeUMsTUFBSyxTQUE5QztVQUNTbnRCLEdBQU4sQ0FBVSxVQUFDNlgsSUFBRCxFQUFPdUosQ0FBUCxFQUFhOzs7VUFDaEJpTSxhQUFhak0sTUFBTWdNLGlCQUF6QjtVQUNNM2UsS0FBS0MsV0FBV3JQLFVBQU93WSxJQUFsQixpREFDUnhZLFVBQU93VixFQURDLEVBQ0kxVSxTQUFTLElBRGIsK0JBRVJkLFVBQU95VixFQUZDLEVBRUkzVSxTQUFTLElBRmIsK0JBR1JkLFVBQU9pdUIsaUJBSEMsRUFHbUIsQ0FBQ0QsVUFIcEIsK0JBSVJodUIsVUFBT2t1QixjQUpDLEVBSWdCRixVQUpoQixnQkFBWDthQU9FdmhCOzs7MkJBQ2lCdWhCLFVBRGpCO3FCQUVhNWUsRUFGYjtlQUdPMlMsQ0FIUDttQkFJVzttQkFBS2xMLFNBQVMsRUFBRWhCLE9BQU9zWSxDQUFULEVBQVlDLGFBQWFyTSxDQUF6QixFQUFULENBQUw7V0FKWDtnQkFLTzs7O2NBRUw7O3NCQUFBO21CQUVTaU0sYUFBYSxVQUFiLEdBQTBCLE1BRm5DO21CQUdRLFFBSFI7a0JBSVFsdEI7Ozs7T0FaWjtLQVJEO0dBRkw7OztBQWlDRmd0QixpQkFBaUIvZ0IsU0FBakIsR0FBNkI7U0FDcEJKLFVBQVVzTSxPQUFWLENBQWtCdE0sVUFBVUssSUFBNUIsRUFBa0N5QyxVQURkO1lBRWpCOUMsVUFBVXFFLElBQVYsQ0FBZXZCLFVBRkU7cUJBR1I5QyxVQUFVVSxNQUFWLENBQWlCb0M7Q0FIdEM7Ozs7SUNwQnFCNGU7Ozs7Ozs7Ozs7Ozs7OzZMQXdCbkJ0WSxRQUFlO2VBQ0osS0FESTttQkFFQTthQVdmdVksaUJBQWlCLFVBQUN6WSxLQUFELEVBQWtDO1VBRS9DQSxNQUFNZSxNQUFOLFlBQXdCMlgsaUJBQXhCLElBQ0EsTUFBSzF0QixLQUFMLENBQVc2RCxLQUFYLEtBQXFCbVIsTUFBTWUsTUFBTixDQUFhbFMsS0FGcEMsRUFHRTtjQUNLN0QsS0FBTCxDQUFXZ1csUUFBWCxDQUFvQixFQUFFaEIsWUFBRixFQUFTblIsT0FBT21SLE1BQU1lLE1BQU4sQ0FBYWxTLEtBQTdCLEVBQXBCOztZQUVJLE1BQUs3RCxLQUFMLENBQVcydEIsWUFBZixFQUE2QjtnQkFDdEJ0WSxRQUFMLENBQWMsRUFBRXVZLGFBQWEsS0FBZixFQUFkOzs7YUFLTjNYLGFBQWEsWUFBTTtVQUNiLE1BQUtqVyxLQUFMLENBQVcydEIsWUFBZixFQUE2QjtjQUN0QnRZLFFBQUwsQ0FBYyxFQUFFdVksYUFBYSxLQUFmLEVBQWQ7O2FBSUp6WCxjQUFjLFlBQU07VUFDZCxNQUFLblcsS0FBTCxDQUFXMnRCLFlBQWYsRUFBNkI7Y0FDdEJ0WSxRQUFMLENBQWMsRUFBRXVZLGFBQWEsSUFBZixFQUFkOzs7Ozs7OzhDQTdCc0IvUSxXQUFrQjtVQUN0Q0EsVUFBVThRLFlBQVYsS0FBMkIsS0FBSzN0QixLQUFMLENBQVcydEIsWUFBMUMsRUFBd0Q7YUFDakR0WSxRQUFMLENBQWMsRUFBRXVZLGFBQWEsQ0FBQyxDQUFDL1EsVUFBVThRLFlBQTNCLEVBQWQ7Ozs7OzZCQStCSzs7O21CQVVILEtBQUszdEIsS0FWRjtVQUVMbVUsUUFGSyxVQUVMQSxRQUZLO1VBR0x3WixZQUhLLFVBR0xBLFlBSEs7VUFJTG5YLEVBSkssVUFJTEEsRUFKSztVQUtMcVgsbUJBTEssVUFLTEEsbUJBTEs7VUFNTHZzQixJQU5LLFVBTUxBLElBTks7VUFPTHdzQixPQVBLLFVBT0xBLE9BUEs7VUFRTGhCLFdBUkssVUFRTEEsV0FSSztVQVNManBCLEtBVEssVUFTTEEsS0FUSzs7O1VBWUQyUSxVQUFVaEcsV0FDZHJQLFVBQU80dUIsTUFETyxFQUVkNVosV0FBV2hWLFVBQU9nVixRQUFsQixHQUE2QmhWLFVBQU8yVixPQUZ0QixFQUdkNlksZUFBZXh1QixVQUFPNnVCLE9BQXRCLEdBQWdDN3VCLFVBQU84dUIsTUFIekIsQ0FBaEI7O2FBT0VyaUI7V0FBQTs7aUJBQ1N1SSxXQUFXLFdBQVgsR0FBeUIsT0FEbEM7cUNBRTZCLEVBQUV0SixTQUFTLEVBQUVxakIsY0FBYyxDQUFoQixFQUFYLEVBRjdCO21CQUdVLE1BSFY7b0JBSVcsVUFKWDtpQkFLUTs7O2FBRU47O3dCQUNhLFFBRGI7d0JBQUE7dUNBRzZCO3VCQUNoQixFQUFFakQsY0FBYyxFQUFoQixFQUFvQmtELFlBQVksQ0FBaEM7YUFKYjtxQkFNVSxNQU5WO3NCQU9XLFVBUFg7dUJBQUE7Ozt3QkFXRyxJQUFEO2tCQUNPLFlBRFA7a0JBRVEsRUFGUjttQkFHU2hhLFdBQVcsTUFBWCxHQUFvQixVQUg3QjtnQ0FJcUI7O1NBdEJ6Qjs7OztnQ0EyQk13WixnQkFBZ0IsS0FBS3pZLEtBQUwsQ0FBV2dCLE9BQTNCLEdBQXdDTSxFQUF4QyxzQkFBNkQsSUFGakU7NEJBSWdCbVgsZUFBZSxNQUFmLEdBQXdCLE9BSnhDO3VCQUthblosT0FMYjtzQkFNWUwsUUFOWjtnQkFPTXFDLEVBUE47a0JBUVFsVixJQVJSO29CQVNVLEtBQUsyVSxVQVRmO3FCQVVXLEtBQUtFLFdBVmhCO3NCQVdZLEtBQUtzWCxjQVhqQjtpQkFZTyxnQkFBSztxQkFDSE0sTUFBTCxHQUFjNXBCLENBQWQ7YUFiSjttQkFlU047O3lCQUdMLENBQUNBLEtBREYsSUFFRytIOztjQUFRLGNBQVIsRUFBaUIsY0FBakIsRUFBMEIsV0FBMUIsRUFBZ0MsWUFBaEM7O1dBbkJOO2tCQXVCVzlMLEdBQVIsQ0FBWTttQkFDWDhMOztnQkFBUSxLQUFLd2lCLE9BQU92cUIsS0FBcEIsRUFBMkIsT0FBT3VxQixPQUFPdnFCLEtBQXpDO3FCQUNVaWtCO2FBRkM7V0FBWjtTQWhETDt3QkF1REksS0FBSzVTLEtBQUwsQ0FBVzBZLFdBRFosSUFFR2hpQixjQUFDLFdBQUQ7a0JBQ1UsS0FBS21pQixNQURmO2NBRVN2WCxFQUFQLG1CQUZGOzBCQUdrQnFYLG1CQUhsQjttQkFJV0YsWUFKWDtxQkFLYTttQkFBTSxPQUFLdFksUUFBTCxDQUFjLEVBQUV1WSxhQUFhLEtBQWYsRUFBZCxDQUFOO1dBTGI7Z0JBTU87O09BL0RmOzs7O0VBaEZvQzFkOztBQUFuQnNkLFdBQ1p0aEIsWUFBWTtZQUNQSixVQUFVUyxJQURIO2dCQUVIVCxVQUFVWSxNQUZQO01BR2JaLFVBQVVZLE1BQVYsQ0FBaUJrQyxVQUhKO3VCQUlJOUMsVUFBVVksTUFKZDtRQUtYWixVQUFVWSxNQUxDO1lBTVBaLFVBQVVxRSxJQUFWLENBQWV2QixVQU5SO1dBT1I5QyxVQUFVc00sT0FBVixDQUNQdE0sVUFBVU0sS0FBVixDQUFnQjtXQUNQTixVQUFVWSxNQUFWLENBQWlCa0MsVUFEVjtXQUVQOUMsVUFBVVksTUFBVixDQUFpQmtDO0dBRjFCLENBRE8sQ0FQUTtlQWFKOUMsVUFBVVksTUFiTjtTQWNWWixVQUFVWTs7QUFmQThnQixXQWtCWnBkLGVBQWU7WUFDVixLQURVO3VCQUVDLE9BRkQ7V0FHWDs7Ozs7QUMzQ2IsSUFBTWllLE9BQU8sRUFBYjs7QUFPQSxBQUFlLFNBQVNDLE9BQVQsT0FBc0Q7TUFBbkNuZ0Isa0JBQW1DLFFBQW5DQSxrQkFBbUM7TUFBZm9nQixJQUFlLFFBQWZBLElBQWU7O1NBQzVEQSxPQUNMM2lCO09BQUE7TUFBSyxJQUFJLEVBQUVoSSxTQUFTLE1BQVgsRUFBVCxFQUE4QixnQkFBZSxRQUE3QyxFQUFzRCxVQUFTLFFBQS9EOzs7UUFDTyxXQUFXekUsVUFBT2tQLElBQXZCO29CQUNHLElBQUQ7Y0FDTyxPQURQOzRCQUVzQkYsa0JBRnRCO2NBR1FrZ0I7OztHQU5QLEdBV0x6aUIsMEJBWEY7OztBQWVGMGlCLFFBQVFwaUIsU0FBUixHQUFvQjtRQUNaSixVQUFVUyxJQUFWLENBQWVxQyxVQURIO3NCQUVFOUMsVUFBVVksTUFBVixDQUFpQmtDO0NBRnZDOztBQ1ZlLFNBQVM0ZixNQUFULENBQWdCeHVCLEtBQWhCLEVBQThCOzhCQUNrQkEsS0FEbEIsQ0FDbkN5dUIsb0JBRG1DO01BQ25DQSxvQkFEbUMseUNBQ1osRUFBRUMsVUFBVSxDQUFaLEVBRFk7TUFDS25qQixRQURMLEdBQ2tCdkwsS0FEbEIsQ0FDS3VMLFFBREw7O01BRXJDaEwsUUFBUTtTQUNQLE9BQU9QLE1BQU04SSxHQUFiLEtBQXFCLFFBQXJCLEdBQWdDOUksTUFBTThJLEdBQXRDLEdBQTRDaVQsU0FEckM7VUFFTixPQUFPL2IsTUFBTWdKLElBQWIsS0FBc0IsUUFBdEIsR0FBaUNoSixNQUFNZ0osSUFBdkMsR0FBOEMrUyxTQUZ4QztXQUdMLE9BQU8vYixNQUFNa0osS0FBYixLQUF1QixRQUF2QixHQUFrQ2xKLE1BQU1rSixLQUF4QyxHQUFnRDZTLFNBSDNDO1lBSUosT0FBTy9iLE1BQU0rSSxNQUFiLEtBQXdCLFFBQXhCLEdBQW1DL0ksTUFBTStJLE1BQXpDLEdBQWtEZ1QsU0FKOUM7O1lBTUowUyxxQkFBcUJDO0dBTi9CO1NBU0U5aUI7O01BQUssV0FBV2hHLE9BQU8rb0IsTUFBdkIsRUFBK0IsT0FBT3B1QixLQUF0Qzs7R0FERjs7Ozs7SUNabUJxdUI7Ozs7Ozs7Ozs7Ozs7O3FMQWNuQjFaLFFBQWU7ZUFDSjthQUdYZSxhQUFhO2FBQU0sTUFBS1osUUFBTCxDQUFjLEVBQUVhLFNBQVMsS0FBWCxFQUFkLENBQU47YUFFYkwsZUFBZSxVQUFDYixLQUFELEVBQWtDO1VBQ3ZDYyxPQUR1QyxHQUMzQmQsTUFBTWUsTUFEcUIsQ0FDdkNELE9BRHVDOztZQUUxQzlWLEtBQUwsQ0FBV2dXLFFBQVgsQ0FBb0I7b0JBQUE7ZUFFWEY7T0FGVDthQU1GSyxjQUFjLFlBQU07WUFDYmQsUUFBTCxDQUFjLEVBQUVhLFNBQVMsSUFBWCxFQUFkOzs7Ozs7NkJBR087bUJBQ2tDLEtBQUtsVyxLQUR2QztVQUNDbVUsUUFERCxVQUNDQSxRQUREO1VBQ1dxQyxFQURYLFVBQ1dBLEVBRFg7VUFDZWxWLElBRGYsVUFDZUEsSUFEZjtVQUNxQnV0QixRQURyQixVQUNxQkEsUUFEckI7OztVQUdEQyxlQUFldGdCLFdBQ25CclAsVUFBTzR2QixNQURZLHFCQUdoQjV2QixVQUFPK1csT0FIUyxFQUdDLEtBQUtoQixLQUFMLENBQVdnQixPQUhaOztpQkFPZjJZLFdBQVcxdkIsVUFBTzZ2QixVQUFsQixHQUErQjd2QixVQUFPOHZCLGVBRDFDLEdBRUlKLFdBQVcxdkIsVUFBTyt2QixjQUFsQixHQUFtQy92QixVQUFPZ3dCLFdBUjNCLENBQXJCOztVQVdNQyxlQUFlNWdCLFdBQ25CclAsVUFBT2t3QixNQURZLEVBRW5CUixXQUFXMXZCLFVBQU9td0IsV0FBbEIsR0FBZ0Nud0IsVUFBT293QixVQUZwQixFQUduQlYsWUFBWSxDQUFDMWEsUUFBYixHQUF3QmhWLFVBQU9xd0IsVUFBL0IsR0FBNENyd0IsVUFBT3N3QixXQUhoQyxDQUFyQjs7VUFNTUMsY0FBY2xoQixXQUFXclAsVUFBT3d3QixRQUFsQixxQkFDakJ4d0IsVUFBT3l3QixlQURVLEVBQ1EsQ0FBQ3piLFFBRFQsRUFBcEI7O2FBS0V2STs7VUFBSyxXQUFXa2pCLFlBQWhCOzttQkFFYUQsUUFEWDtxQkFFYWEsV0FGYjtvQkFHWXZiLFFBSFo7Y0FJTXFDLEVBSk47Z0JBS1FsVixJQUxSO2tCQU1VLEtBQUsyVSxVQU5mO29CQU9ZLEtBQUtKLFlBUGpCO21CQVFXLEtBQUtNLFdBUmhCO2dCQVNPO1VBVlQ7K0JBWU8sV0FBV2laLFlBQWhCO09BYko7Ozs7RUF4RGdDbGY7O0FBQWYwZSxPQUNaMWlCLFlBQVk7WUFDUEosVUFBVVMsSUFESDtNQUViVCxVQUFVWSxNQUFWLENBQWlCa0MsVUFGSjtRQUdYOUMsVUFBVVksTUFIQztZQUlQWixVQUFVcUUsSUFBVixDQUFldkIsVUFKUjtZQUtQOUMsVUFBVVM7O0FBTkhxaUIsT0FTWnhlLGVBQWU7WUFDVixLQURVO1lBRVY7Ozs7O0lDTE95Zjs7Ozs7Ozs7Ozs7Ozs7aUxBWW5CM2EsUUFBZTt1QkFDSTZHLFNBREo7dUJBRUlBO2FBR25CK1QsaUJBQWlCLFVBQUM1TyxDQUFELEVBQVlvTSxDQUFaLEVBQXlDO1VBQ2hEdFgsUUFEZ0QsR0FDbkMsTUFBS2hXLEtBRDhCLENBQ2hEZ1csUUFEZ0Q7O2VBRS9DLEVBQUUrWixnQkFBZ0I3TyxDQUFsQixFQUFxQmxNLE9BQU9zWSxDQUE1QixFQUFUO2FBR0YwQyxpQkFBaUIsVUFBQzlPLENBQUQ7YUFBZSxNQUFLN0wsUUFBTCxDQUFjLEVBQUU0YSxpQkFBaUIvTyxDQUFuQixFQUFkLENBQWY7YUFDakJnUCxnQkFBZ0I7YUFBTSxNQUFLN2EsUUFBTCxDQUFjLEVBQUU0YSxpQkFBaUJsVSxTQUFuQixFQUFkLENBQU47YUFFaEJvVSxzQkFBc0IsVUFBQ2pQLENBQUQ7YUFBZSxNQUFLN0wsUUFBTCxDQUFjLEVBQUUrYSxpQkFBaUJsUCxDQUFuQixFQUFkLENBQWY7YUFDdEJtUCxzQkFBc0I7YUFBTSxNQUFLaGIsUUFBTCxDQUFjLEVBQUUrYSxpQkFBaUJyVSxTQUFuQixFQUFkLENBQU47Ozs7Ozs2QkFFYjs7O21CQUMwQixLQUFLL2IsS0FEL0I7VUFDQ3N3QixJQURELFVBQ0NBLElBREQ7VUFDT1AsY0FEUCxVQUNPQSxjQURQO21CQUVzQyxLQUFLN2EsS0FGM0M7VUFFQythLGVBRkQsVUFFQ0EsZUFGRDtVQUVrQkcsZUFGbEIsVUFFa0JBLGVBRmxCOzthQUlMeGtCOztVQUFLLFdBQVd6TSxVQUFPMHdCLElBQXZCLEVBQTZCLE1BQUssU0FBbEM7YUFDUS92QixHQUFMLENBQVMsaUJBQWlCb2hCLENBQWpCLEVBQXVCOzs7Y0FBcEI3TSxJQUFvQixTQUFwQkEsSUFBb0I7Y0FBZG1VLElBQWMsU0FBZEEsSUFBYzs7Y0FDekIrSCxXQUFXclAsTUFBTTZPLGNBQXZCO2NBQ01TLFlBQVl0UCxNQUFNa1AsZUFBeEI7Y0FDTUssWUFBWXZQLE1BQU0rTyxlQUF4QjtjQUNNMWhCLEtBQUtDLFdBQVdyUCxVQUFPdXhCLEdBQWxCLGlEQUNSdnhCLFVBQU93eEIsY0FEQyxFQUNnQixDQUFDSixRQURqQiwrQkFFUnB4QixVQUFPeXhCLFdBRkMsRUFFYUwsUUFGYixnQkFBWDtpQkFLRTNrQjs7OytCQUNpQjJrQixRQURqQjt5QkFFYWhpQixFQUZiO29CQUdRaWEsSUFIUjttQkFJT3RILENBSlA7dUJBS1csaUJBQUNvTSxDQUFEO3VCQUE4QixPQUFLd0MsY0FBTCxDQUFvQjVPLENBQXBCLEVBQXVCb00sQ0FBdkIsQ0FBOUI7ZUFMWDt1QkFNVzt1QkFBTSxPQUFLMEMsY0FBTCxDQUFvQjlPLENBQXBCLENBQU47ZUFOWDtzQkFPVSxPQUFLZ1AsYUFQZjs0QkFRZ0I7dUJBQU0sT0FBS0MsbUJBQUwsQ0FBeUJqUCxDQUF6QixDQUFOO2VBUmhCOzRCQVNnQixPQUFLbVAsbUJBVHJCO29CQVVPOzs7a0JBRUw7OzBCQUFBO3VCQUVTRSxZQUFZQyxTQUFaLElBQXlCQyxTQUF6QixHQUFxQyxVQUFyQyxHQUFrRCxNQUYzRDtzQkFHTzs7OztXQWhCWDtTQVJEO09BRkw7Ozs7RUEvQjhCdmdCOztBQUFiMmYsS0FDWjNqQixZQUFZO2tCQUNESixVQUFVVSxNQUFWLENBQWlCb0MsVUFEaEI7UUFFWDlDLFVBQVVzTSxPQUFWLENBQ0p0TSxVQUFVTSxLQUFWLENBQWdCO1VBQ1JOLFVBQVVLLElBREY7VUFFUkwsVUFBVVk7R0FGbEIsQ0FESSxFQUtKa0MsVUFQZTtZQVFQOUMsVUFBVXFFLElBQVYsQ0FBZXZCOzs7OztJQ05SaWlCOzs7Ozs7Ozs7Ozs7Ozt5TEFxQm5CM2IsUUFBZTtlQUNKLEtBREk7bUJBRUE7YUFXZlcsZUFBZSxVQUFDYixLQUFELEVBQWtDO1VBQzNDQSxNQUFNZSxNQUFOLFlBQXdCK2EsbUJBQTVCLEVBQWlEO2NBQzFDOXdCLEtBQUwsQ0FBV2dXLFFBQVgsQ0FBb0I7c0JBQUE7aUJBRVhoQixNQUFNZSxNQUFOLENBQWFsUztTQUZ0Qjs7WUFLSSxNQUFLN0QsS0FBTCxDQUFXMnRCLFlBQWYsRUFBNkI7Z0JBQ3RCdFksUUFBTCxDQUFjLEVBQUV1WSxhQUFhLElBQWYsRUFBZDs7O2FBS04zWCxhQUFhLFVBQUNqQixLQUFELEVBQWtDO1VBQ3pDLE1BQUtoVixLQUFMLENBQVcydEIsWUFBZixFQUE2QjtjQUN0QnRZLFFBQUwsQ0FBYyxFQUFFdVksYUFBYSxLQUFmLEVBQWQ7O1VBRUU1WSxNQUFNZSxNQUFOLFlBQXdCK2EsbUJBQXhCLElBQStDLE1BQUs5d0IsS0FBTCxDQUFXNnNCLE1BQTlELEVBQXNFO2NBQy9EN3NCLEtBQUwsQ0FBVzZzQixNQUFYLENBQWtCO3NCQUFBO2lCQUVUN1gsTUFBTWUsTUFBTixDQUFhbFM7U0FGdEI7O2FBT0pzUyxjQUFjLFVBQUNuQixLQUFELEVBQWtDO1VBQzFDLE1BQUtoVixLQUFMLENBQVcydEIsWUFBZixFQUE2QjtjQUN0QnRZLFFBQUwsQ0FBYyxFQUFFdVksYUFBYSxJQUFmLEVBQWQ7O1VBRUU1WSxNQUFNZSxNQUFOLFlBQXdCK2EsbUJBQXhCLElBQStDLE1BQUs5d0IsS0FBTCxDQUFXNHNCLE9BQTlELEVBQXVFO2NBQ2hFNXNCLEtBQUwsQ0FBVzRzQixPQUFYLENBQW1CO3NCQUFBO2lCQUVWNVgsTUFBTWUsTUFBTixDQUFhbFM7U0FGdEI7Ozs7Ozs7OENBdENzQmdaLFdBQWtCO1VBQ3RDQSxVQUFVOFEsWUFBVixLQUEyQixLQUFLM3RCLEtBQUwsQ0FBVzJ0QixZQUExQyxFQUF3RDthQUNqRHRZLFFBQUwsQ0FBYyxFQUFFdVksYUFBYSxDQUFDLENBQUMvUSxVQUFVOFEsWUFBM0IsRUFBZDs7Ozs7NkJBMkNLOzs7bUJBVUgsS0FBSzN0QixLQVZGO1VBRUxtVSxRQUZLLFVBRUxBLFFBRks7VUFHTHdaLFlBSEssVUFHTEEsWUFISztVQUlMblgsRUFKSyxVQUlMQSxFQUpLO1VBS0xxWCxtQkFMSyxVQUtMQSxtQkFMSztVQU1MdnNCLElBTkssVUFNTEEsSUFOSztVQU9Md3JCLFdBUEssVUFPTEEsV0FQSztVQVFMaUUsSUFSSyxVQVFMQSxJQVJLO1VBU0xsdEIsS0FUSyxVQVNMQSxLQVRLOzs7VUFZRDJRLFVBQVVoRyxXQUNkclAsVUFBTzZ4QixRQURPLEVBRWQ3YyxXQUFXaFYsVUFBT2dWLFFBQWxCLEdBQTZCaFYsVUFBTzJWLE9BRnRCLEVBR2Q2WSxlQUFleHVCLFVBQU82dUIsT0FBdEIsR0FBZ0M3dUIsVUFBTzh1QixNQUh6QixDQUFoQjs7YUFPRXJpQjs7Ozs4QkFHTStoQixnQkFBZ0IsS0FBS3pZLEtBQUwsQ0FBV2dCLE9BQTNCLEdBQXdDTSxFQUF4QyxzQkFBNkQsSUFGakU7MEJBSWdCbVgsZUFBZSxNQUFmLEdBQXdCLE9BSnhDO3FCQUthblosT0FMYjtvQkFNWUwsUUFOWjtjQU9NcUMsRUFQTjtnQkFRUWxWLElBUlI7a0JBU1UsS0FBSzJVLFVBVGY7b0JBVVksS0FBS0osWUFWakI7bUJBV1csS0FBS00sV0FYaEI7dUJBWWUyVyxXQVpmO2VBYU8sZ0JBQUs7bUJBQ0htRSxRQUFMLEdBQWdCOXNCLENBQWhCO1dBZEo7Z0JBZ0JRNHNCLElBaEJSO2lCQWlCU2x0QjtVQWxCWDt3QkFvQm1CLEtBQUtxUixLQUFMLENBQVcwWSxXQUEzQixHQUNDaGlCLGNBQUMsV0FBRDtrQkFDVSxLQUFLcWxCLFFBRGY7Y0FFU3phLEVBQVAsbUJBRkY7MEJBR2tCcVgsbUJBSGxCO21CQUlXRixZQUpYO3FCQUthO21CQUFNLE9BQUt0WSxRQUFMLENBQWMsRUFBRXVZLGFBQWEsS0FBZixFQUFkLENBQU47V0FMYjtnQkFNTztVQVBSLEdBU0c7T0E5QlI7Ozs7RUF6RmtDMWQ7O0FBQWpCMmdCLFNBQ1oza0IsWUFBWTtZQUNQSixVQUFVUyxJQURIO2dCQUVIVCxVQUFVWSxNQUZQO01BR2JaLFVBQVVZLE1BQVYsQ0FBaUJrQyxVQUhKO3VCQUlJOUMsVUFBVVksTUFKZDtRQUtYWixVQUFVWSxNQUxDO1VBTVRaLFVBQVVxRSxJQU5EO1lBT1ByRSxVQUFVcUUsSUFBVixDQUFldkIsVUFQUjtXQVFSOUMsVUFBVXFFLElBUkY7ZUFTSnJFLFVBQVVZLE1BVE47UUFVWFosVUFBVVUsTUFWQztTQVdWVixVQUFVWTs7QUFaQW1rQixTQWVaemdCLGVBQWU7WUFDVixLQURVO3VCQUVDLE9BRkQ7UUFHZDs7Ozs7SUNoQlc4Z0I7Ozs7Ozs7Ozs7Ozs7OzJMQW9DbkJoYyxRQUFlO2VBQ0osS0FESTttQkFFQTthQVdmVyxlQUFlLFVBQUNiLEtBQUQsRUFBa0M7VUFDM0NBLE1BQU1lLE1BQU4sWUFBd0JvYixnQkFBNUIsRUFBOEM7Y0FDdkNueEIsS0FBTCxDQUFXZ1csUUFBWCxDQUFvQjtzQkFBQTtpQkFFWGhCLE1BQU1lLE1BQU4sQ0FBYWxTO1NBRnRCOzthQU9Kb1MsYUFBYSxVQUFDakIsS0FBRCxFQUFrQztVQUN6QyxNQUFLaFYsS0FBTCxDQUFXMnRCLFlBQWYsRUFBNkI7Y0FDdEJ0WSxRQUFMLENBQWMsRUFBRXVZLGFBQWEsS0FBZixFQUFkOztVQUVFNVksTUFBTWUsTUFBTixZQUF3Qm9iLGdCQUF4QixJQUE0QyxNQUFLbnhCLEtBQUwsQ0FBVzZzQixNQUEzRCxFQUFtRTtjQUM1RDdzQixLQUFMLENBQVc2c0IsTUFBWCxDQUFrQjtzQkFBQTtpQkFFVDdYLE1BQU1lLE1BQU4sQ0FBYWxTO1NBRnRCOzthQU9Kc1MsY0FBYyxVQUFDbkIsS0FBRCxFQUFrQztVQUMxQyxNQUFLaFYsS0FBTCxDQUFXMnRCLFlBQWYsRUFBNkI7Y0FDdEJ0WSxRQUFMLENBQWMsRUFBRXVZLGFBQWEsSUFBZixFQUFkOztVQUVFNVksTUFBTWUsTUFBTixZQUF3Qm9iLGdCQUF4QixJQUE0QyxNQUFLbnhCLEtBQUwsQ0FBVzRzQixPQUEzRCxFQUFvRTtjQUM3RDVzQixLQUFMLENBQVc0c0IsT0FBWCxDQUFtQjtzQkFBQTtpQkFFVjVYLE1BQU1lLE1BQU4sQ0FBYWxTO1NBRnRCOzs7Ozs7OzhDQWxDc0JnWixXQUFrQjtVQUN0Q0EsVUFBVThRLFlBQVYsS0FBMkIsS0FBSzN0QixLQUFMLENBQVcydEIsWUFBMUMsRUFBd0Q7YUFDakR0WSxRQUFMLENBQWMsRUFBRXVZLGFBQWEsQ0FBQyxDQUFDL1EsVUFBVThRLFlBQTNCLEVBQWQ7Ozs7OzZCQXVDSzs7O21CQVlILEtBQUszdEIsS0FaRjtVQUVMb3hCLFlBRkssVUFFTEEsWUFGSztVQUdMamQsUUFISyxVQUdMQSxRQUhLO1VBSUx3WixZQUpLLFVBSUxBLFlBSks7VUFLTDBELFFBTEssVUFLTEEsUUFMSztVQU1MN2EsRUFOSyxVQU1MQSxFQU5LO1VBT0xxWCxtQkFQSyxVQU9MQSxtQkFQSztVQVFMdnNCLElBUkssVUFRTEEsSUFSSztVQVNMd3JCLFdBVEssVUFTTEEsV0FUSztVQVVMeFksSUFWSyxVQVVMQSxJQVZLO1VBV0x6USxLQVhLLFVBV0xBLEtBWEs7OztVQWNEMlEsVUFBVWhHLFdBQ2RyUCxVQUFPbXlCLFNBRE8sRUFFZG5kLFdBQVdoVixVQUFPZ1YsUUFBbEIsR0FBNkJoVixVQUFPMlYsT0FGdEIsRUFHZHVjLFlBQVkxRCxZQUFaLEdBQTJCeHVCLFVBQU82dUIsT0FBbEMsR0FBNEM3dUIsVUFBTzh1QixNQUhyQyxDQUFoQjs7OztVQVFNc0QsVUFBVWpkLFNBQVMsUUFBVCxHQUFvQixNQUFwQixHQUE2QnlILFNBQTdDOzthQUdFblE7Ozs7OEJBR00raEIsZ0JBQWdCLEtBQUt6WSxLQUFMLENBQVdnQixPQUEzQixHQUF3Q00sRUFBeEMsc0JBQTZELElBRmpFOzBCQUlnQm1YLGdCQUFnQjBELFFBQWhCLEdBQTJCLE1BQTNCLEdBQW9DLE9BSnBEO3dCQUtnQkQsWUFMaEI7cUJBTWE1YyxPQU5iO29CQU9ZTCxRQVBaO2NBUU1xQyxFQVJOO2dCQVNRbFYsSUFUUjtrQkFVVSxLQUFLMlUsVUFWZjtvQkFXWSxLQUFLSixZQVhqQjttQkFZVyxLQUFLTSxXQVpoQjttQkFhV29iLE9BYlg7dUJBY2V6RSxXQWRmO2VBZU8sZ0JBQUs7bUJBQ0gwRSxTQUFMLEdBQWlCcnRCLENBQWpCO1dBaEJKO2dCQWtCUW1RLElBbEJSO2lCQW1CU3pRO1VBcEJYO3dCQXVCSSxLQUFLcVIsS0FBTCxDQUFXMFksV0FEWixJQUVHaGlCLGNBQUMsV0FBRDtrQkFDVSxLQUFLNGxCLFNBRGY7Y0FFU2hiLEVBQVAsbUJBRkY7MEJBR2tCcVgsbUJBSGxCO21CQUlXRixZQUpYO3FCQUthO21CQUFNLE9BQUt0WSxRQUFMLENBQWMsRUFBRXVZLGFBQWEsS0FBZixFQUFkLENBQU47V0FMYjtnQkFNTzs7T0EvQmY7Ozs7RUExR21DMWQ7O0FBQWxCZ2hCLFVBQ1pobEIsWUFBWTtnQkFDSEosVUFBVUMsS0FBVixDQUFnQixDQUM1QixrQkFENEIsRUFFNUIsSUFGNEIsRUFHNUIsS0FINEIsRUFJNUIsVUFKNEIsQ0FBaEIsQ0FERztZQU9QRCxVQUFVUyxJQVBIO2dCQVFIVCxVQUFVWSxNQVJQO1lBU1BaLFVBQVVTLElBVEg7TUFVYlQsVUFBVVksTUFBVixDQUFpQmtDLFVBVko7dUJBV0k5QyxVQUFVWSxNQVhkO1FBWVhaLFVBQVVZLE1BWkM7VUFhVFosVUFBVXFFLElBYkQ7WUFjUHJFLFVBQVVxRSxJQUFWLENBQWV2QixVQWRSO1dBZVI5QyxVQUFVcUUsSUFmRjtlQWdCSnJFLFVBQVVZLE1BaEJOO1FBaUJYWixVQUFVQyxLQUFWLENBQWdCLENBQ3BCLE1BRG9CLEVBRXBCLE9BRm9CLEVBR3BCLFFBSG9CLEVBSXBCLFVBSm9CLEVBS3BCLE1BTG9CLEVBTXBCLEtBTm9CLENBQWhCLENBakJXO1NBeUJWRCxVQUFVWTs7QUExQkF3a0IsVUE2Qlo5Z0IsZUFBZTtZQUNWLEtBRFU7WUFFVixLQUZVO3VCQUdDLE9BSEQ7UUFJZDs7O0FDL0NLLFNBQVNxaEIsS0FBVCxDQUFlenhCLEtBQWYsRUFBNkI7cUJBQ1lBLEtBRFosQ0FDbENvTyxLQURrQztNQUNsQ0EsS0FEa0MsZ0NBQzFCLFVBRDBCO01BQ2RDLElBRGMsR0FDWXJPLEtBRFosQ0FDZHFPLElBRGM7TUFDUnFqQixTQURRLEdBQ1kxeEIsS0FEWixDQUNSMHhCLFNBRFE7TUFDR3JkLElBREgsR0FDWXJVLEtBRFosQ0FDR3FVLElBREg7OztNQUd0Q2lKLGlCQUFKOztNQUVJakosZ0JBQWdCelUsS0FBaEIsSUFBeUJ5VSxLQUFLL1QsTUFBTCxHQUFjLENBQTNDLEVBQThDO2VBRTFDc0w7U0FBQTtRQUFLLElBQUksRUFBRWhJLFNBQVMsTUFBWCxFQUFUOztXQUNFO1VBQUssSUFBSSxFQUFFQSxTQUFTLFlBQVgsRUFBVCxFQUFvQyxNQUFLLE1BQXpDLEVBQWdELGdCQUFlLFFBQS9EO29CQUVJZ0k7Y0FBQTtZQUFNLE9BQU0sU0FBWixFQUFzQixRQUFRLEVBQTlCLEVBQWtDLE9BQU8sRUFBekM7O1NBREQsR0FJRztPQU5SOztXQVFFOztjQUNNLEVBQUVoSSxTQUFTLFlBQVgsRUFETjswQkFFaUIsUUFGakI7cUNBRzZCLEVBQUVpSCxTQUFTLEVBQUVtZ0IsYUFBYSxFQUFmLEVBQVg7OzthQUUzQjs7dUNBQzZCLEVBQUVuZ0IsU0FBUyxFQUFFOG1CLFlBQVksUUFBZCxFQUFYOzs7Z0JBRTNCO2NBQU0sT0FBTSxPQUFaLEVBQW9CLE1BQUssSUFBekI7aUJBQ1EsQ0FBTDs7U0FUUDs7Y0FZRTtZQUFNLFVBQU4sRUFBVyxPQUFNLE9BQWpCLEVBQXlCLE1BQUssSUFBOUI7ZUFDUSxDQUFMOzs7S0F0QlQ7R0FERixNQTRCTzs7ZUFHSC9sQjtTQUFBOztZQUNNLEVBQUVoSSxTQUFTLE1BQVgsRUFETjt3QkFFaUIsU0FGakI7b0JBR2E7OztZQUVYO1VBQU0sVUFBTixFQUFXLE9BQU0sT0FBakIsRUFBeUIsTUFBSyxJQUE5Qjs7T0FMRjtjQVNJZ0k7V0FBQTtVQUFLLDJCQUEyQixFQUFFZixTQUFTLEVBQUVtZ0IsYUFBYSxFQUFmLEVBQVgsRUFBaEM7c0JBQ0csSUFBRCxJQUFNLG9CQUFtQixFQUF6QixFQUE0QixPQUFNLE9BQWxDLEVBQTBDLE1BQU0zYyxJQUFoRCxFQUFzRCxNQUFNLEVBQTVEOztLQVhSOzs7U0FtQkF6QztPQUFBO01BQUssY0FBYyxDQUFuQixFQUFzQixVQUFVLENBQWhDLEVBQW1DLFVBQVUsR0FBN0MsRUFBa0QsT0FBTSxPQUF4RDs7U0FDRTtRQUFLLE9BQU93QyxLQUFaLEVBQW1CLFNBQW5CLEVBQXVCLFVBQVUsQ0FBakMsRUFBb0MsVUFBVSxDQUE5QyxFQUFpRCxPQUFNLE1BQXZEOzs7R0FGSjs7O0FBU0ZxakIsTUFBTXZsQixTQUFOLEdBQWtCO1NBQ1RKLFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxVQUFELEVBQWEsUUFBYixDQUFoQixDQURTO1FBRVZELFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxzQkFBRCxDQUFoQixDQUZVO1FBR1ZELFVBQVVRLFNBQVYsQ0FBb0IsQ0FDeEJSLFVBQVVZLE1BRGMsRUFFeEJaLFVBQVVzTSxPQUFWLENBQWtCdE0sVUFBVVksTUFBNUIsQ0FGd0IsQ0FBcEIsRUFHSGtDLFVBTmE7YUFPTDlDLFVBQVUyVDtDQVB2Qjs7QUM5RGUsU0FBU21TLE9BQVQsQ0FBaUI1eEIsS0FBakIsRUFBK0I7TUFFMUNnZSxNQUYwQyxHQVF4Q2hlLEtBUndDLENBRTFDZ2UsTUFGMEM7TUFHMUN6UyxRQUgwQyxHQVF4Q3ZMLEtBUndDLENBRzFDdUwsUUFIMEM7TUFJMUNrTyxjQUowQyxHQVF4Q3paLEtBUndDLENBSTFDeVosY0FKMEM7TUFLMUNvRSxTQUwwQyxHQVF4QzdkLEtBUndDLENBSzFDNmQsU0FMMEM7OEJBUXhDN2QsS0FSd0MsQ0FNMUNpYyx3QkFOMEM7TUFNMUNBLHdCQU4wQyx5Q0FNZixJQU5lO29CQVF4Q2pjLEtBUndDLENBTzFDQyxJQVAwQztNQU8xQ0EsSUFQMEMsK0JBT25DLElBUG1DOzs7TUFVeEMsQ0FBQytkLE1BQUwsRUFBYTtXQUNKLElBQVA7OztTQUlBcFM7Y0FBQTs7Y0FDVW9TLE1BRFY7ZUFFVSxVQUZWO3NCQUdrQnZFLGNBSGxCO2dDQUk0QndDLHdCQUo1QjtpQkFLYTRCLFNBTGI7WUFNUTVkOzs7U0FFTjtRQUFLLFFBQVEsRUFBYixFQUFpQixTQUFTLENBQTFCOzs7R0FUSjs7O0FBZ0JGMnhCLFFBQVExbEIsU0FBUixHQUFvQjtVQUNWSixVQUFVVyxLQUFWLENBQWdCO2NBQ1pYLFVBQVVxRSxJQURFOzJCQUVDckUsVUFBVXFFO0dBRjNCLENBRFU7WUFLUnJFLFVBQVVLLElBTEY7a0JBTUZMLFVBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQixNQUFoQixFQUF3QixNQUF4QixDQUFoQixDQU5FO2FBT1BELFVBQVVxRSxJQUFWLENBQWV2QixVQVBSOzRCQVFROUMsVUFBVVMsSUFSbEI7UUFTWlQsVUFBVUMsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixDQUFoQjtDQVRSOzs7O0FDUEEsSUFBTThsQixrQkFBa0IsRUFBeEI7QUFDQSxJQUFNQyxrQkFBa0IsRUFBeEI7O0lBRXFCQzs7Ozs7Ozs7Ozs7Ozs7MkxBQ25CQyxpQkFBaUIsVUFBQ2hkLEtBQUQsRUFBa0M7VUFDekNpZCxPQUR5QyxHQUM3QixNQUFLanlCLEtBRHdCLENBQ3pDaXlCLE9BRHlDOzs7VUFJL0NBLFlBQ0NqZCxNQUFNa2QsUUFBTixLQUFtQkwsZUFBbkIsSUFBc0M3YyxNQUFNa2QsUUFBTixLQUFtQkosZUFEMUQsQ0FERixFQUdFOztjQUVNSyxjQUFOO2dCQUNRLEVBQUVuZCxZQUFGLEVBQVI7Ozs7Ozs7NkJBSUs7OzttQkFVSCxLQUFLaFYsS0FWRjtVQUVMdUwsUUFGSyxVQUVMQSxRQUZLO29DQUdMNm1CLFNBSEs7VUFHTEEsU0FISyxvQ0FHTyxJQUhQO1VBSUxDLFVBSkssVUFJTEEsVUFKSztzQ0FLTEMsV0FMSztVQUtMQSxXQUxLLHNDQUtTLFNBTFQ7VUFNTGxkLFlBTkssVUFNTEEsWUFOSztVQU9MSSxZQVBLLFVBT0xBLFlBUEs7VUFRTHljLE9BUkssVUFRTEEsT0FSSztnQ0FTTHhsQixLQVRLO1VBU0xBLEtBVEssZ0NBU0csUUFUSDs7O1VBWUQrSCxVQUFVaEcsV0FDZHJQLFVBQU9vekIsU0FETyxFQUVkcHpCLFVBQU9tekIsV0FBUCxDQUZjLEVBR2RuekIsVUFBT3NOLEtBQVAsQ0FIYyxpREFLWHROLFVBQU9rekIsVUFMSSxFQUtTQSxVQUxULCtCQU1YbHpCLFVBQU9pekIsU0FOSSxFQU1RQSxTQU5SLGdCQUFoQjs7YUFXRXhtQjs7O3FCQUNhNEksT0FEYjttQkFFVzttQkFBU3lkLFdBQVdBLFFBQVEsRUFBRWpkLFlBQUYsRUFBUixDQUFwQjtXQUZYOzs7Ozs7Ozs7OztZQUdnQjttQkFBU0ksZ0JBQWdCQSxhQUFhLEVBQUVKLFlBQUYsRUFBYixDQUF6QjtXQUFkLENBSEY7Ozs7Ozs7Ozs7O1lBSWdCO21CQUFTUSxnQkFBZ0JBLGFBQWEsRUFBRVIsWUFBRixFQUFiLENBQXpCO1dBQWQsQ0FKRjtzQkFLYyxLQUFLZ2QsY0FMbkI7Z0JBTU8sUUFOUDtvQkFPVzs7O09BUmI7Ozs7RUFwQ21DOWhCOzs7QUFvRHZDNmhCLFVBQVU3bEIsU0FBVixHQUFzQjtZQUNWSixVQUFVSyxJQURBO2NBRVJMLFVBQVVTLElBRkY7YUFHVFQsVUFBVVMsSUFIRDtlQUlQVCxVQUFVQyxLQUFWLENBQWdCLENBQzNCLE1BRDJCLEVBRTNCLE1BRjJCLEVBRzNCLFVBSDJCLEVBSTNCLE1BSjJCLEVBSzNCLFFBTDJCLEVBTTNCLFNBTjJCLEVBTzNCLFFBUDJCLEVBUTNCLFNBUjJCLENBQWhCLENBSk87V0FjWEQsVUFBVXFFLElBZEM7Z0JBZU5yRSxVQUFVcUUsSUFmSjtnQkFnQk5yRSxVQUFVcUUsSUFoQko7U0FpQmJyRSxVQUFVQyxLQUFWLENBQWdCLENBQ3JCLFFBRHFCLEVBRXJCLFNBRnFCLEVBR3JCLE1BSHFCLEVBSXJCLFFBSnFCLEVBS3JCLFlBTHFCLEVBTXJCLGVBTnFCLEVBT3JCLGFBUHFCLEVBUXJCLGNBUnFCLENBQWhCO0NBakJUOzs7OyJ9
