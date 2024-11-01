"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/Easttimor.tsx
var import_react2 = __toESM(require("react"));

// src/constants.ts
var constants = {
  WIDTH: 500,
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: 0.5,
  HOVERCOLOR: "#303030",
  SELECTED_COLOR: "#ff0000"
};
var stateCode = [
  "Lautem",
  "Viqueque",
  "Manufahi",
  "Manatuto",
  "Ermera",
  "Cova Lima",
  "Bobonaro",
  "Baucau",
  "Ainaro",
  "Aileu",
  "Oecussi",
  "Liquica",
  "Dili"
];
var drawPath = {
  Lautem: "M656.72,153.74L685.35,151.66L692.31,148.2L707.95,136.82L724.97,133.02L727.86,132.78L729.52,130.26L745.21,114.94L767.5,97.55L778.63,86.32L796.38,72.98L798.81,68.79L797.05,63.87L792.41,60.73L781.39,57.73L776.25,54.64L774.61,52.24L773.96,50.08L772.77,48.5L769.63,47.8L767.97,48.46L760.5,53.8L756.23,55.9L750.32,56.46L744.31,55.9L739.62,54.64L722.54,46.42L718.8,43.67L714.71,42.71L709.25,45.07L684.36,62.85L673.96,67.53L663.32,69.75L661.57,69.49L657.43,68.19L654.74,68.21L652.77,69.13L648.16,72.38L646.96,72.71L646.97,72.72L650.66,78.16L652.42,84.3L655.08,87.1L658.94,89.43L658.29,93.6L656.23,96.9L659.9,100.5L668.44,108.27L675.16,115.13L676.97,119.14L673.96,121.63L667.38,126.51L662.31,133.82L659.3,137.88L658.44,139.05L656.68,145.2L656.72,153.74L656.72,153.74z",
  Viqueque: "M605.81,134.63L599.24,131.38L595.12,120.61L590.4,115.94L588.74,122.39L587.99,129.76L588.94,137.17L584.77,140.32L578.5,137.83L570.71,135.04L560.22,132.7L548.22,133.41L536.72,137.73L523.71,137.48L513.79,134.1L511.66,133.36L506.84,132.6L502.12,135.8L499.2,143.57L496.49,149.92L491.97,152.92L488.76,157.09L487.95,161.87L493.68,170.71L498.8,180.16L498.95,185.45L500.01,190.73L502.67,198.05L506.84,204.15L513.21,212.19L513.3,212.49L520.07,209.65L584.28,201.37L594.54,198.44L603.14,190.84L611.96,175.69L621.47,164.77L623.96,163.83L629.3,163.55L631.38,163.09L633.15,162.31L640.27,156.99L643.12,155.62L648.42,154.34L656.72,153.74L656.72,153.74L656.68,145.2L658.44,139.05L659.3,137.88L655.88,133.41L651.46,130.06L645.84,128.54L637.95,126.15L632.18,128.94L629.32,134.73L626.15,136.26L622.14,133.87L615.71,133.01L605.81,134.63z",
  Manufahi: "M432.45,151.82L426.09,151.3L422.02,152.62L417.65,156.99L408.81,161.51L404.04,162.01L403.99,162.42L401.98,172.03L400.93,178.08L400.78,182.6L400.07,189.56L396.36,191.95L388.32,191.85L382.7,194.8L381.9,199.48L379.89,204.15L377.93,207.61L377.48,212.29L378.13,220.42L381.49,226.12L388.73,229.32L394.75,232.22L398.32,235.63L400.38,241.17L398.92,244.94L397.16,249.31L398.97,258.36L399.62,260.06L399.63,260.06L401.68,260.01L417.26,251.22L422.36,249.94L432.44,249.94L435.29,248.97L440.59,244.51L443.3,243.07L448.1,242.69L462.4,244.89L466.92,243.45L491.32,226.61L490.77,223.68L487.55,218.08L477.11,210.66L466.41,204.41L462.65,198.46L456.97,191.6L448.58,187.48L441.15,183.46L433.72,177.31L430.86,166.29L432.51,152.52L432.45,151.82z",
  Manatuto: "M514.24,90.31L514.23,90.31L512.2,90.59L501.9,93.83L496.56,94.91L490.04,94.23L480.31,89.47L454.92,84.98L443.48,85.64L438.12,87.38L438.13,87.39L442.36,92.94L438.54,98.06L433.82,101.62L428.5,108.22L422.36,109.96L420.86,118.38L424.28,126.25L427.69,131.38L431.46,140.12L432.45,151.82L432.51,152.52L430.86,166.29L433.72,177.31L441.15,183.46L448.58,187.48L456.97,191.6L462.65,198.46L466.41,204.41L477.11,210.66L487.55,218.08L490.77,223.68L491.32,226.61L509.39,214.12L513.29,212.5L513.3,212.49L513.21,212.19L506.84,204.15L502.67,198.05L500.01,190.73L498.95,185.45L498.8,180.16L493.68,170.71L487.95,161.87L488.76,157.09L491.97,152.92L496.49,149.92L499.2,143.57L502.12,135.8L506.84,132.6L511.66,133.36L513.79,134.1L518.89,129.35L521.7,125.44L523.31,120L522.86,111.98L522.1,104.56L521.4,98.83L518.89,94L514.24,90.31z",
  Ermera: "M357.03,126.4L350.56,126.1L341.87,129.1L335.29,134.23L330.98,137.63L321.23,139.51L309.48,141.75L303.15,145.2L291.96,149.62L280.37,152.13L282.11,156.43L291.1,158.21L294.97,160.14L297.93,165.12L304.76,178.43L311.59,192.36L312.9,197.24L313.6,204.56L316.11,210.41L331.28,209.85L337.19,208.13L344.38,206.03L344.53,200.09L346.84,196.83L349.76,193.58L351.41,189.36L355.78,185.45L356.54,179.19L355.38,177.01L353.37,173.25L352.27,168.78L345.74,165.52L342.17,161.87L346.14,156.99L348,151.55L344.13,147.64L344.73,144.64L352.57,141.95L357.79,138.95L360.6,131.38L358.14,126.45L357.03,126.4z",
  "Cova Lima": "M355.39,271.76L357.14,265.03L361.01,252.97L357.14,250.68L351.77,249.31L348.55,245.49L347.75,235.88L345.19,229.73L341.72,228.15L340.06,224.49L336.9,220.83L336.59,220.91L330.22,222.41L324.45,227.34L323.29,233.7L322.44,242.8L319.93,247.63L311.99,247.27L307.77,248.29L314.4,256.63L312.44,264.06L298.74,265.99L289.8,265.18L288.69,261.92L286.98,259.38L283.47,257.45L275.23,254.9L273.92,254.54L274.22,255.76L273.43,258.12L271.45,259.04L265.48,258.66L262.82,258.88L259.05,260.92L256.89,263.08L254.8,264.51L251.33,264.3L249.8,263.36L246.9,260.05L245.22,258.81L243.56,258.35L238.59,258.3L230.63,259.72L226.61,264.66L225.68,271.93L227.15,280.43L228.57,284.71L230.23,287.48L236.03,292.69L241.17,295.93L242.52,297.55L242.86,299.13L242.37,303L242.61,304.73L248.08,313.38L249.2,317.04L251.8,332.08L260.26,326.03L264.43,321.9L268.55,319.27L273.25,317.89L284.6,317.05L288.12,315.78L290.77,313.68L293.42,310.75L297.92,303.94L300.89,300.45L307.59,297.53L320.11,287.05L328.85,281.66L355.38,271.77L355.39,271.76z",
  Bobonaro: "M271.42,152.57L266.6,150.48L261.89,148.67L261.84,148.65L261.21,157.99L260.26,162.31L256.68,165.39L245.79,169.43L243.54,171.61L242.47,175.39L230.7,193.36L225.6,198.4L217.28,203.17L217.28,203.17L218,209.15L214.76,217.51L214.46,221.73L215.69,225.5L217.71,228.62L220.56,230.83L224.16,231.83L228.54,231.52L231.71,230.22L237.91,226.18L249.42,221.12L252.7,218.22L253.49,216.42L254.57,211.64L255.41,210.24L257.92,209.12L259.06,209.71L259.98,211.23L261.74,212.83L266.31,215.43L270.7,218.61L274.24,222.55L276.28,227.43L276.19,232.77L272.06,248.23L272.53,250.52L273.56,253.11L273.92,254.54L275.23,254.9L283.47,257.45L286.98,259.38L288.69,261.92L289.8,265.18L298.74,265.99L312.44,264.06L314.4,256.63L307.77,248.29L311.99,247.27L319.93,247.63L322.44,242.8L323.29,233.7L324.45,227.34L330.22,222.41L336.59,220.91L337,214.78L337.19,208.13L331.28,209.85L316.11,210.41L313.6,204.56L312.9,197.24L311.59,192.36L304.76,178.43L297.93,165.12L294.97,160.14L291.1,158.21L282.11,156.43L280.37,152.13L278.65,152.52L271.42,152.57z",
  Baucau: "M646.96,72.71L641.77,74.12L623.13,82.96L613.11,86.36L604.15,77.84L600.59,76.6L594.92,76.22L589.32,75.04L584.16,72.96L579.77,69.75L577.22,70.88L572.38,70.96L569.69,71.42L561.62,75.96L553.87,78.2L543.16,85.82L538.14,88.33L528.37,89.71L517.44,89.87L514.24,90.31L518.89,94L521.4,98.83L522.1,104.56L522.86,111.98L523.31,120L521.7,125.44L518.89,129.35L513.79,134.1L523.71,137.48L536.72,137.73L548.22,133.41L560.22,132.7L570.71,135.04L578.5,137.83L584.77,140.32L588.94,137.17L587.99,129.76L588.74,122.39L590.4,115.94L595.12,120.61L599.24,131.38L605.81,134.63L615.71,133.01L622.14,133.87L626.15,136.26L629.32,134.73L632.18,128.94L637.95,126.15L645.84,128.54L651.46,130.06L655.88,133.41L659.3,137.88L662.31,133.82L667.38,126.51L673.96,121.63L676.97,119.14L675.16,115.13L668.44,108.27L659.9,100.5L656.23,96.9L658.29,93.6L658.94,89.43L655.08,87.1L652.42,84.3L650.66,78.16L646.97,72.72L646.96,72.71z",
  Ainaro: "M404.04,162.01L404.79,156.17L400.68,155.46L393.55,156.58L390.53,158.61L387.52,160.65L382.3,161.81L380.69,166.34L375.77,172.33L367.83,175.28L356.44,176.86L355.38,177.01L356.54,179.19L355.78,185.45L351.41,189.36L349.76,193.58L346.84,196.83L344.53,200.09L344.38,206.03L337.19,208.13L337,214.78L336.59,220.91L336.9,220.83L340.06,224.49L341.72,228.15L345.19,229.73L347.75,235.88L348.55,245.49L351.77,249.31L357.14,250.68L361.01,252.97L357.14,265.03L355.39,271.76L370.96,265.96L375.94,263.13L380.9,259.17L384.88,258.33L397.21,260.13L399.63,260.06L399.62,260.06L398.97,258.36L397.16,249.31L398.92,244.94L400.38,241.17L398.32,235.63L394.75,232.22L388.73,229.32L381.49,226.12L378.13,220.42L377.48,212.29L377.93,207.61L379.89,204.15L381.9,199.48L382.7,194.8L388.32,191.85L396.36,191.95L400.07,189.56L400.78,182.6L400.93,178.08L401.98,172.03L403.99,162.42L404.04,162.01z",
  Aileu: "M421.87,110.1L415.24,106.19L405.9,105.58L394.75,111.06L386.52,115.58L380.69,116.75L372.96,119.39L363.42,120.82L361.18,119.15L358.59,123.66L357.03,126.4L358.14,126.45L360.6,131.38L357.79,138.95L352.57,141.95L344.73,144.64L344.13,147.64L348,151.55L346.14,156.99L342.17,161.87L345.74,165.52L352.27,168.78L353.37,173.25L355.38,177.01L356.44,176.86L367.83,175.28L375.77,172.33L380.69,166.34L382.3,161.81L387.52,160.65L390.53,158.61L393.55,156.58L400.68,155.46L404.79,156.17L404.04,162.01L408.81,161.51L417.65,156.99L422.02,152.62L426.09,151.3L432.45,151.82L431.46,140.12L427.69,131.38L424.28,126.25L420.86,118.38L422.36,109.96L421.87,110.1z",
  Oecussi: "M56.45,335.89L57.44,335.07L60.42,334.33L65.09,333.87L69.22,332.81L72.49,330.74L74.63,327.36L74.88,325.04L73.77,320.77L73.72,319.09L74.57,317.23L76.91,313.87L77.8,311.98L78.41,304.71L80.03,302.14L80.88,301.65L81.98,301.6L84.23,300.38L91.48,294.17L96.15,288.04L97.09,287.2L97.85,286.21L98.8,284.07L99.96,275.47L103.58,261.86L103.34,256.84L103.26,256.86L97.17,257.18L92.35,258.11L90.29,260.85L87.6,262.29L63.8,266.84L47.63,271.85L40.23,275.29L37.94,277.82L32.6,285.47L29.54,287.05L25.27,287.55L5.64,295.45L1.19,296.67L9.12,310.43L15.82,316.26L23.31,317.58L26.38,315.7L31.25,308.96L34.52,306.18L38.5,304.53L41.86,304.35L45.08,305.75L48.74,308.88L51.5,312.24L53.86,316.26L55.6,320.49L56.45,324.61L56.3,326.44L55.45,330.79L55.45,332.25L56.22,335.43L56.45,335.89z",
  Liquica: "M361.18,119.15L357.69,116.55L356.18,108.63L355.83,106.38L355.83,106.37L355.26,106.63L350.28,107.71L334.28,106.63L329.4,107.17L313.31,111.83L306.11,116.1L303.38,116.86L294.48,115.54L292.53,116.02L287.88,118.54L276.75,120.26L271.89,121.9L267.91,125.38L264.77,130.38L262.69,135.98L261.84,148.65L261.89,148.67L266.6,150.48L271.42,152.57L278.65,152.52L280.37,152.13L291.96,149.62L303.15,145.2L309.48,141.75L321.23,139.51L330.98,137.63L335.29,134.23L341.87,129.1L350.56,126.1L357.03,126.4L358.59,123.66L361.18,119.15z",
  Dili: "M442.36,92.94L438.13,87.39L438.12,87.38L414.95,94.91L401.76,97.07L394.56,96.87L390.09,94.91L383.45,101.63L380.61,101.79L374.32,99.95L368.39,100.67L355.83,106.37L355.83,106.38L356.18,108.63L357.69,116.55L361.18,119.15L363.42,120.82L372.96,119.39L380.69,116.75L386.52,115.58L394.75,111.06L405.9,105.58L415.24,106.19L421.87,110.1L422.36,109.96L428.5,108.22L433.82,101.62L438.54,98.06L442.36,92.94zM390.49,0L383.85,4.41L377.8,10.79L375.15,15.06L373.37,18.2L364.77,24.73L361.74,27.66L359.85,30.92L359.19,33.32L360.02,35.68L362.57,38.57L365.72,40.37L373.55,42.75L375.15,43.67L376.18,44.75L378.47,44.03L380.72,42.29L381.79,40.31L383.45,32.84L392.82,9.75L394.9,1.92L390.49,0z"
};

// src/hooks/mouseTrack.ts
var import_react = require("react");
var useMousePosition = () => {
  const [position, setPosition] = (0, import_react.useState)({ x: 0, y: 0 });
  const updateMousePosition = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  (0, import_react.useEffect)(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return position;
};
var mouseTrack_default = useMousePosition;

// src/Easttimor.tsx
var import_react3 = require("react");
var hintStyleBase = {
  position: "fixed",
  backgroundColor: "white",
  padding: "10px",
  borderRadius: 5,
  border: "1px solid #ccc",
  pointerEvents: "none",
  zIndex: 1e3
};
var getStrokeProperties = (borderStyle) => {
  switch (borderStyle) {
    case "dashed":
      return { strokeDasharray: "8 4" };
    case "dotted":
      return { strokeDasharray: "2 2" };
    case "dash-dot":
      return { strokeDasharray: "8 4 2 4" };
    case "dash-double-dot":
      return { strokeDasharray: "8 4 2 4 2 4" };
    default:
      return { strokeDasharray: "none" };
  }
};
var Easttimor = ({
  type,
  size = constants.WIDTH,
  mapColor = constants.MAPCOLOR,
  strokeColor = constants.STROKE_COLOR,
  strokeWidth = constants.STROKE_WIDTH,
  hoverColor,
  selectColor,
  hints,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  onSelect,
  cityColors = {},
  disableClick = false,
  disableHover = false,
  borderStyle
}) => {
  if (type === "select-single") {
    return /* @__PURE__ */ import_react2.default.createElement(
      EasttimorSingle,
      {
        type: "select-single",
        size,
        mapColor,
        strokeColor,
        strokeWidth,
        hoverColor,
        selectColor,
        hints,
        hintTextColor,
        hintBackgroundColor,
        hintPadding,
        hintBorderRadius,
        onSelect,
        cityColors,
        disableClick,
        disableHover,
        borderStyle
      }
    );
  } else if (type === "select-multiple") {
    return /* @__PURE__ */ import_react2.default.createElement(
      EasttimorMultiple,
      {
        type: "select-multiple",
        size,
        mapColor,
        strokeColor,
        strokeWidth,
        hoverColor,
        selectColor,
        hints,
        hintTextColor,
        hintBackgroundColor,
        hintPadding,
        hintBorderRadius,
        onSelect,
        cityColors,
        disableClick,
        disableHover,
        borderStyle
      }
    );
  } else {
    return null;
  }
};
var EasttimorSingle = ({
  size,
  mapColor,
  strokeColor,
  selectColor,
  strokeWidth,
  hoverColor,
  hints,
  onSelect,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  cityColors,
  disableClick,
  disableHover,
  borderStyle
}) => {
  const instanceId = (0, import_react3.useId)().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = (0, import_react2.useState)(null);
  const [selectedState, setSelectedState] = (0, import_react2.useState)(null);
  const [viewBox, setViewBox] = (0, import_react2.useState)("0 0 100 100");
  const strokeProps = (0, import_react2.useMemo)(() => getStrokeProperties(borderStyle), [borderStyle]);
  (0, import_react2.useEffect)(() => {
    const svg = document.getElementById(`svg2-${instanceId}`);
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, [instanceId]);
  const mapStyle = (0, import_react2.useMemo)(
    () => ({
      width: size,
      stroke: strokeColor,
      strokeWidth,
      ...strokeProps
    }),
    [size, strokeColor, strokeWidth, strokeProps]
  );
  const hintStyle = {
    ...hintStyleBase,
    backgroundColor: hintBackgroundColor || hintStyleBase.backgroundColor,
    padding: hintPadding || hintStyleBase.padding,
    borderRadius: hintBorderRadius || hintStyleBase.borderRadius,
    color: hintTextColor || "black",
    top: y + 20,
    left: x + 20
  };
  (0, import_react2.useEffect)(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  (0, import_react2.useEffect)(() => {
    if (selectedState) {
      const path = document.getElementById(`${selectedState}-${instanceId}`);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    }
  }, [selectedState, selectColor, instanceId]);
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(hoverStateId);
    if (path && !disableHover) {
      path.style.fill = selectedState === hoverStateId ? selectColor || constants.SELECTED_COLOR : hoverColor || constants.HOVERCOLOR;
    }
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(null);
    if (path && !disableHover) {
      path.style.fill = selectedState === hoverStateId ? selectColor || constants.SELECTED_COLOR : cityColors[hoverStateId] || mapColor;
    }
  };
  const handleClick = (stateCode2) => {
    if (disableClick) return;
    if (selectedState === stateCode2) {
      const path = document.getElementById(`${stateCode2}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[stateCode2] || mapColor;
      }
      setSelectedState(null);
      if (onSelect) {
        onSelect(null);
      }
    } else {
      if (selectedState) {
        const previousPath = document.getElementById(`${selectedState}-${instanceId}`);
        if (previousPath) {
          previousPath.style.fill = cityColors[selectedState] || mapColor;
        }
      }
      setSelectedState(stateCode2);
      if (onSelect) {
        onSelect(stateCode2);
      }
    }
  };
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react2.default.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((code, index) => /* @__PURE__ */ import_react2.default.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(code),
      onMouseEnter: () => handleMouseEnter(code),
      onMouseLeave: () => handleMouseLeave(code),
      id: `${code}-${instanceId}`,
      d: drawPath[code],
      style: {
        fill: cityColors[code] || mapColor,
        cursor: disableClick ? "default" : "pointer",
        ...strokeProps
      }
    }
  )))), hints && stateHovered && /* @__PURE__ */ import_react2.default.createElement("div", { style: hintStyle }, stateHovered));
};
var EasttimorMultiple = ({
  size,
  mapColor,
  strokeColor,
  selectColor,
  strokeWidth,
  hoverColor,
  hints,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  onSelect,
  cityColors,
  disableClick,
  disableHover,
  borderStyle
}) => {
  const instanceId = (0, import_react3.useId)().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [selectedStates, setSelectedStates] = (0, import_react2.useState)([]);
  const [stateHovered, setStateHovered] = (0, import_react2.useState)(null);
  const [viewBox, setViewBox] = (0, import_react2.useState)("0 0 100 100");
  const strokeProps = (0, import_react2.useMemo)(() => getStrokeProperties(borderStyle), [borderStyle]);
  (0, import_react2.useEffect)(() => {
    const svg = document.getElementById(`svg2-${instanceId}`);
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, [instanceId]);
  const mapStyle = (0, import_react2.useMemo)(
    () => ({
      width: size,
      stroke: strokeColor,
      strokeWidth,
      ...strokeProps
    }),
    [size, strokeColor, strokeWidth, strokeProps]
  );
  const hintStyle = {
    ...hintStyleBase,
    backgroundColor: hintBackgroundColor || hintStyleBase.backgroundColor,
    padding: hintPadding || hintStyleBase.padding,
    borderRadius: hintBorderRadius || hintStyleBase.borderRadius,
    color: hintTextColor || "black",
    top: y + 20,
    left: x + 20
  };
  (0, import_react2.useEffect)(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  (0, import_react2.useEffect)(() => {
    selectedStates.forEach((selectedState) => {
      const path = document.getElementById(`${selectedState}-${instanceId}`);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    });
  }, [selectedStates, selectColor, instanceId]);
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(hoverStateId);
    if (path && !disableHover) {
      path.style.fill = selectedStates.includes(hoverStateId) ? selectColor || constants.SELECTED_COLOR : hoverColor || constants.HOVERCOLOR;
    }
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(null);
    if (path && !disableHover) {
      path.style.fill = selectedStates.includes(hoverStateId) ? selectColor || constants.SELECTED_COLOR : cityColors[hoverStateId] || mapColor;
    }
  };
  const handleClick = (stateCode2) => {
    if (disableClick) return;
    if (selectedStates.includes(stateCode2)) {
      const updatedSelectedStates = selectedStates.filter((state) => state !== stateCode2);
      const path = document.getElementById(`${stateCode2}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[stateCode2] || mapColor;
      }
      setSelectedStates(updatedSelectedStates);
      if (onSelect) {
        onSelect(stateCode2, updatedSelectedStates);
      }
    } else {
      setSelectedStates((prevStates) => {
        const updatedStates = [...prevStates, stateCode2];
        const path = document.getElementById(`${stateCode2}-${instanceId}`);
        if (path) {
          path.style.fill = selectColor || constants.SELECTED_COLOR;
        }
        if (onSelect) {
          onSelect(stateCode2, updatedStates);
        }
        return updatedStates;
      });
    }
  };
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react2.default.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((code, index) => /* @__PURE__ */ import_react2.default.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(code),
      onMouseEnter: () => handleMouseEnter(code),
      onMouseLeave: () => handleMouseLeave(code),
      id: `${code}-${instanceId}`,
      d: drawPath[code],
      style: {
        fill: cityColors[code] || mapColor,
        cursor: disableClick ? "default" : "pointer",
        ...strokeProps
      }
    }
  )))), hints && stateHovered && /* @__PURE__ */ import_react2.default.createElement("div", { style: hintStyle }, stateHovered));
};
var Easttimor_default = Easttimor;

// src/index.ts
var src_default = Easttimor_default;
