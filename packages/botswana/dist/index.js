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

// src/Botswana.tsx
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
var stateCode = ["Central", "Ghanzi", "Kgalagadi", "Kgatleng", "Kweneng", "North-East", "North-West", "South-East", "Southern"];
var drawPath = {
  Central: "M391.45,233.13L391.74,235.92L389.65,238.27L389.84,240.57L390.73,242.59L394.02,246.29L395.12,248.31L394.78,249.46L396.9,251.82L396.76,253.02L399.73,260.3L399.82,262.42L401.26,263.67L401.79,267.48L403.14,270.78L404.33,271.88L405.72,272.14L408.26,273.77L412.13,273.17L414.89,275.68L413.19,278.67L414.96,279.93L417.42,279.66L419.11,283.38L420.45,284.9L424.45,285.62L429.46,288.35L432.57,294.36L434.38,293.98L437.73,294.86L439.17,298.25L441.81,297.95L444.14,298.57L445.05,299.82L444.75,300.53L445.15,300.9L447.92,301.15L450.43,302.04L451.77,301.9L455.57,303.52L461.34,303.69L463.32,304.9L464.29,307.22L465.35,308.11L470.85,308.15L472.88,311.67L473.52,311.99L474.79,316.7L476.05,317.76L477.14,322.89L477.05,331.16L476.29,336.61L476.29,336.61L476.66,338.37L476.31,340.37L477.58,344.73L476.33,346.73L475.1,347.72L474.81,349.69L472.54,351.27L471.99,352.14L472.06,355.5L471.43,356.75L471.25,359.28L472.01,361.43L476.42,364.19L478.38,367.55L478.85,369.5L479.91,370.76L479.98,373.45L480.87,374.96L480.31,378.91L480.69,383.03L482.58,385L483.07,387.39L482.81,388.94L483.94,392.69L483.72,393.82L484.76,396.67L486.39,397.93L487.06,399.69L490.53,404.46L492.37,404.66L494.27,405.61L495.18,405.06L497.63,407.94L499.16,408.81L505.24,409.84L506.51,410.48L510.27,409.31L513.18,409.53L513.63,408.56L515.39,409.18L518.35,409.04L519.27,410.28L520.02,410.15L521.17,410.95L523.69,410.69L523.69,410.69L525.03,412.1L530.26,412.43L536.13,414.13L541.14,413.22L544.49,413.6L546.24,414.35L547,413.88L549.5,415.84L552.49,416.4L555.59,418.16L557.53,417.52L558.74,416.45L559.6,416.49L560.13,415.64L561.01,415.57L562.44,416.62L565.91,417.33L567.28,419.12L573.38,421.45L574.98,422.84L577.87,423.07L579.95,424.46L584.67,425.69L588.41,425.65L589.54,426.55L592.47,427.57L593.44,428.76L591,431.72L589.85,436.63L590.38,439.99L592,442.95L595.38,445.74L598,446.79L600.59,446.96L604.66,445.63L605.71,446.61L607.18,449.91L610.25,452.59L612,455.17L610.23,455.71L608.97,454.65L606.14,454.94L601.5,454.11L598.27,456.4L594.67,456.42L592.94,456.95L590.6,456.6L589.29,457.58L588.04,461.08L586.79,461.58L586.15,463.01L585.86,464.78L586.6,467.56L585.13,469.72L584.57,471.87L582.95,473.65L579.67,472.72L577.32,473.89L577.27,475.41L569.27,477.47L568.35,478.54L566.74,478.94L565.98,479.82L564.16,480.66L559.23,481.01L556.57,482.61L552.42,481.47L545.68,481.9L544.12,483.6L541.29,484.79L540.47,486.49L536.26,488.51L533.58,491.42L533.74,494.29L533.18,495.45L528.66,499.29L526.77,499.69L526.04,500.33L526.59,504.08L525.99,505.32L521.42,508.81L519.16,509.16L519.75,511.36L518.99,512.63L518.78,515.86L516.19,518.11L512.59,519.84L511.52,519.74L511.02,521.5L509.37,522.36L508.19,521.57L507.81,521.93L509.2,523.72L509.09,524.37L507.05,526.2L506.33,528.44L504.73,528.76L502.87,526.35L501.49,526.82L500.3,528.23L498.65,528.2L497.38,527.47L496.79,527.89L496.87,529.82L495.33,530.89L495.54,531.83L494.57,534.11L494.93,535.04L494.5,536.76L492.58,538.85L491.38,539.3L487.06,539.3L486.03,540.03L485.78,541.32L485.1,542.02L483.82,541.59L484.62,540.04L484.22,539.74L482.49,540.26L482.7,541.52L482.28,542.25L480.71,542.17L480.71,540.65L479.46,540.45L478.61,541.36L477.87,544.1L475.75,545.66L473.97,545.99L473.25,547.17L472.56,547.35L471.48,546.52L470.41,547.47L470.61,548.35L471.68,549.09L471.22,549.68L470.03,549.97L469.17,549.22L468.19,549.92L467.62,549.03L466.95,548.93L466.77,550.33L468.01,551.41L467.59,552.34L465.56,552.05L464.72,552.82L464.31,554.1L463.39,554.36L462.54,555.47L461.83,555.36L463.06,557.74L461.72,559.46L459.86,560.16L460.04,558.52L459.29,558.5L458.94,557.42L458.32,557.25L457.77,560.61L456.18,561.78L455.48,564.84L455.48,564.84L453.1,565.38L451.23,567.83L450.76,566.82L450.22,566.78L450.02,568.5L447.08,572.43L446.55,572.88L444.13,573.08L443.04,574.92L440.94,576.28L438.89,579.12L394.63,552.43L393.41,551.27L393.41,551.27L383.22,536.9L375.02,534.28L355.44,507.67L355.44,507.67L324.22,466.29L253.77,371.02L253.77,371.02L253.34,327.83L253.65,322.44L255.94,324.07L258.19,324.01L259.5,322.92L260.97,323.17L261.46,322.69L261.23,320.82L262.23,320.4L263.28,319.07L265.53,318.55L266.96,317.1L269.13,317.07L271.58,315.68L273.19,316.91L274.45,317.1L274.74,318.72L275.5,319.39L277.37,318.39L278.48,318.34L279.44,319.76L278.77,321.47L279.73,323.38L283.04,324.77L283.44,326.29L285.6,328.9L288.19,330.14L291.5,328.73L296.2,329.19L337.42,325.84L338.02,306.93L326.27,301.98L326.31,301.61L326.31,301.61L326.27,290.19L326.27,290.19L326.29,260.81L326.29,260.81L326.29,240L326.29,240L326.06,233.3L334.59,233.28L334.59,233.28L346.94,233.28L346.94,233.28z",
  Ghanzi: "M65.22,371.03L86.98,371.21L86.98,371.21L98.55,371.34L98.55,371.34L145.8,371.56L145.8,371.56L151.58,371.52L151.58,371.52L167.97,371.52L167.97,371.52L180.5,371.56L180.5,371.56L215.23,371.36L215.23,371.36L222.94,371.36L222.94,371.36L253.77,371.02L253.77,371.02L324.22,466.29L355.44,507.67L355.44,507.67L355.35,508.89L344.11,531.37L342.34,534.14L307.62,534.02L307.62,534.02L296.8,534.1L296.8,534.1L199.86,533.75L199.86,533.75L178.74,533.87L178.74,533.87L169.9,533.87L169.9,533.87L150.27,533.91L150.27,533.91L139.43,533.85L139.43,533.85L129.93,533.89L129.93,533.89L124.04,533.89L124.04,533.89L0.03,533.57L0.03,533.57L0.03,441.5L65.52,441.64z",
  Kgalagadi: "M0.03,533.57L124.04,533.89L124.04,533.89L129.93,533.89L129.93,533.89L139.43,533.85L139.43,533.85L150.27,533.91L150.27,533.91L169.9,533.87L169.9,533.87L178.74,533.87L178.74,533.87L199.86,533.75L199.86,533.75L199.95,534.26L199.95,534.26L199.86,541.09L199.86,541.09L193.94,540.93L193.23,541.01L193.2,541.74L193.25,552.07L199.74,552.05L199.7,582.64L199.7,582.64L199.41,643.39L266.55,643.16L276.96,654.22L277.9,690.99L287.59,700.96L293.62,701.15L294.24,707.58L292.83,708.05L292.83,708.05L290.72,706.98L290.65,707.61L289.87,707.12L289.4,708.1L288.38,707.96L287.43,708.89L287.05,708.59L286.09,709.08L284.88,708.62L282.73,706.92L282.67,705.45L281.34,705.54L280.76,706.16L279.79,705.97L280.52,704.88L280.23,704.38L279.38,704.88L278.7,704.49L277.92,702.94L276.81,702.22L276.57,700.56L275.91,700.54L274.14,698.76L273.01,699.47L271.9,699.37L271.83,698.03L270.88,698.34L270.83,699.27L267.25,700.28L265.82,699.33L265.48,701.08L263.72,700.08L262.27,700.88L262.16,698.87L261.02,698.96L259.62,698.38L258.62,698.91L258.24,699.71L257.43,699.84L255.56,699.1L255.28,697.82L253.99,696.75L253.59,695.71L251.38,695.2L250.74,693.34L249.27,693.25L248.99,692.38L249.87,691.36L249.17,690.76L247.55,690.87L246.25,690.28L245.48,689.08L245.46,687.79L243.49,686.07L242.48,686.88L241.56,686.06L240.3,686.04L239.92,685.5L240.27,684.74L239.47,683.86L239.23,684.73L237.92,685.13L237.4,683.71L236.22,682.99L236.76,682.36L236.21,681.46L234.79,682.32L234.39,681.38L232.63,680.26L232.9,679.9L232.45,679.44L231.27,679.15L230.83,678.46L228.74,679.16L228.83,677.2L227.45,675.55L226.08,675.05L226.79,674.14L226.56,673.78L225.14,673.75L224.04,675.89L223.4,676.29L220.37,675.49L219.55,674.33L217.3,674.77L216.68,674.07L215.49,674.77L214.42,673.39L211.83,674.01L209.16,673.64L205,676.41L203.62,675.68L202.33,676.13L201.17,677.66L200.35,677.54L199.73,676.85L200.29,674.88L199.71,674.77L198.31,676.22L196.93,675.14L196.74,677.74L194.76,678.38L194.25,681.4L190.46,684.12L188.98,687.75L189.79,688.44L189.79,688.98L187.83,688.42L186.33,689.24L187.21,690.42L186.79,692.07L184.32,696.07L186.32,697.52L186.62,698.21L183.89,699.73L183.8,701.06L184.88,701.36L185.13,701.86L184.71,704.11L183.3,706.18L181.61,706.84L180.67,710.48L179.42,711.47L182.16,713.25L181.73,714.33L179.31,715.81L179.21,717.54L177.95,717.96L177.73,718.85L179.5,719.79L179.77,720.43L178.49,721.98L178.74,725.12L178.16,727.46L176.31,727.92L175.07,727.57L174.43,728.06L174.61,731.54L174.04,732.35L172.55,732.93L171.96,735.38L170.8,736.08L170.41,736.97L168.82,736.62L168.5,740.37L167.58,742.09L166.52,742.77L164.16,741.61L161.9,741.14L160.81,742.5L158.75,742.64L156.76,744.63L156.98,746.07L155.66,747.12L154.62,747.22L154.7,749.46L150.71,751.07L147.49,751.61L145.97,753.65L143.73,754.97L143.75,756.69L142.72,757.95L142.43,760.39L141.24,761.34L141.29,762.92L139,765.9L137.63,766.42L136.82,767.91L136.01,768.31L133.87,772.12L131.04,772.89L126.9,774.96L117.95,774.59L116.39,775.85L115.86,777.21L116.76,778.74L116.96,782.47L116.63,783.8L111.15,788.62L106.39,788.99L104.57,787.71L103.77,787.62L101.56,787.65L99.62,788.67L93.16,786.07L91.25,786.04L87.96,786.19L85.19,787.93L83.1,787.23L79.53,787.74L76.59,789.21L74.74,789.58L70.44,787.98L66.79,787.77L65.24,786.78L63.72,784.78L61.63,784.93L58.94,783.89L54.12,785.75L53.47,786.98L52.29,786.86L50.33,788.72L46.8,789.69L45.36,792L44.72,789.68L45.04,788.21L42.56,786.75L42.7,785.28L41.35,784.04L41.47,779.58L40.25,777.02L40.38,776.05L41.45,774.62L41.47,771.03L41.26,769.21L39.88,767.21L39.59,764.58L40.19,760.15L40.88,757.86L42.43,757.63L43.8,755.52L45.19,754.91L47.04,750.52L49.8,746.87L51.4,746.11L52.89,743.26L53.62,739.14L56.11,736.68L56.42,735.78L56.02,734.9L54.74,734.85L53.96,733.84L54.9,732.59L54.93,731.83L54.11,730.61L54.62,728.35L53.43,726.39L54.82,722.93L52.9,721.09L52.46,719.75L52.99,717.07L52.76,716.35L51.49,715.59L51.74,712.67L51.42,711.89L49.52,713.43L48.77,713.41L48.55,712.81L49.52,710.35L48.03,709.36L47.24,706.34L44.43,703.38L44.21,702.64L45.16,700.73L44.86,699.64L42.85,699.48L43.61,697.85L45.41,696.27L43.81,693.4L41.54,691.98L41.36,691.09L42.08,688.2L43.89,687.7L44.19,686.52L43.47,686L41.9,687.07L40.96,686.75L40.73,685.79L41.34,684.93L40.94,684.47L39.94,684.78L39.53,684.21L39.66,682.57L38.94,681.92L37.41,682.16L36.88,681.47L35.48,678.29L35.68,677.21L34.34,677.06L34.03,676.46L35.36,674.77L32.08,672.38L32.11,670.22L30.55,669.91L29.97,669.25L29.5,667.73L30.66,666.35L30.49,665.08L29.8,664.73L28.65,665.02L27.36,660.59L25.47,658.13L24.82,656.14L23.4,655.73L20.97,653.27L19.05,652.21L17.2,648.61L14.63,648.08L13.6,646.81L12.03,647.71L10.35,645.87L8.39,645.69L6.57,644.13L5.46,641.79L4.48,641.74L3.46,640.33L2.82,640.31L0.05,636.37z",
  Kgatleng: "M393.41,551.27L394.63,552.43L438.89,579.12L440.94,576.28L443.04,574.92L444.13,573.08L446.55,572.88L447.08,572.43L450.02,568.5L450.22,566.78L450.76,566.82L451.23,567.83L453.1,565.38L455.48,564.84L455.48,564.84L455.37,567.02L454.44,569.38L455,570.51L454.85,571.25L453.71,571.97L453.62,572.49L454.62,572.67L454.69,573.94L453.34,577.27L453.02,580.45L452.1,581.52L452.28,583.89L451.03,586.35L450.74,588.41L449.19,589.81L448.94,592.12L450.09,593.92L449.03,595.2L449.86,596.82L448.83,598.15L449.22,600.29L448.86,601.15L448.15,601.84L446.61,601.98L445.52,603.36L443.68,604.38L442.08,604.69L440.65,604.23L439.38,605.32L438.85,605.24L438.33,606.41L437.01,606.86L436.51,607.76L436.54,609.54L436.01,610.44L434.88,610.34L431.25,611.65L429.39,614.45L428.81,614.53L428.7,615.2L426.31,617.24L423.36,624.55L421.18,626.45L420.44,626.51L419.85,627.96L404.2,631.41L404.2,631.41L401.53,627.05L389,618.74L389,618.74L386.64,617.2L385.91,617.56L383.99,615.04L384.6,609.41L388.93,603.64z",
  Kweneng: "M355.44,507.67L375.02,534.28L383.22,536.9L393.41,551.27L393.41,551.27L388.93,603.64L384.6,609.41L383.99,615.04L385.91,617.56L386.64,617.2L389,618.74L389,618.74L371.74,637.63L371.74,637.63L365.41,637.39L355.42,631.56L242.81,596.45L242.81,596.45L235.89,594.27L235.89,594.27L199.7,582.64L199.7,582.64L199.74,552.05L193.25,552.07L193.2,541.74L193.23,541.01L193.94,540.93L199.86,541.09L199.86,541.09L199.95,534.26L199.95,534.26L199.86,533.75L199.86,533.75L296.8,534.1L296.8,534.1L307.62,534.02L307.62,534.02L342.34,534.14L344.11,531.37L355.35,508.89z",
  "North-East": "M490.75,335.33L495.04,336.44L498.45,335.63L499.87,336.87L500.57,336.93L502.37,336.1L504.87,338.1L505.38,339.89L504.89,342.54L503.76,343.94L503.84,348.22L505.5,351.58L505.14,352.56L505.67,354.69L505.21,356.29L505.49,357.25L504.86,357.78L504.3,361.02L502.78,363.16L503.6,365.46L502.73,367.46L504.23,369.26L503.5,370.65L503.84,371.38L502.81,372.34L503.59,374.33L502.51,376.1L503.78,378.97L504.92,379.79L506.61,382.13L508.05,382.58L509.38,383.9L510.8,384.21L510.92,385.47L513.44,388.51L514.25,390.39L517.35,393.83L517.59,396.81L520.29,400.36L520.03,401.49L521.4,403.33L520.38,404.21L520.46,404.94L522.05,405.71L520.85,407.35L521.49,408.08L522.77,407.77L523.02,408.14L522.6,408.73L523.69,410.69L523.69,410.69L521.17,410.95L520.02,410.15L519.27,410.28L518.35,409.04L515.39,409.18L513.63,408.56L513.18,409.53L510.27,409.31L506.51,410.48L505.24,409.84L499.16,408.81L497.63,407.94L495.18,405.06L494.27,405.61L492.37,404.66L490.53,404.46L487.06,399.69L486.39,397.93L484.76,396.67L483.72,393.82L483.94,392.69L482.81,388.94L483.07,387.39L482.58,385L480.69,383.03L480.31,378.91L480.87,374.96L479.98,373.45L479.91,370.76L478.85,369.5L478.38,367.55L476.42,364.19L472.01,361.43L471.25,359.28L471.43,356.75L472.06,355.5L471.99,352.14L472.54,351.27L474.81,349.69L475.1,347.72L476.33,346.73L477.58,344.73L476.31,340.37L476.66,338.37L476.29,336.61L476.29,336.61L476.98,336.82L481.08,334.93L482.97,335.71L486.43,335.76L488.77,334.92z",
  "North-West": "M340.97,150.36L343.69,150.18L344.69,150.57L344.11,150.98L342.58,155.76L342.42,159.04L344.43,161.7L345.36,165.43L347.97,169.99L350.2,170.84L350.9,172.35L352.81,173.09L354.4,175.52L358.95,184.91L361.06,191.04L366.74,198.05L368.98,198.85L370.98,202.8L373.34,205.58L375.87,206.02L378.15,208.1L378.21,210.05L379.03,211.91L378.34,213.66L378.56,216.51L379.26,218.62L380.56,220.59L380.49,222.45L383.55,223.9L386.96,226.66L388.42,227.03L391.45,233.13L391.45,233.13L346.94,233.28L346.94,233.28L334.59,233.28L334.59,233.28L326.06,233.3L326.29,240L326.29,240L326.29,260.81L326.29,260.81L326.27,290.19L326.27,290.19L326.31,301.61L326.31,301.61L326.27,301.98L338.02,306.93L337.42,325.84L296.2,329.19L291.5,328.73L288.19,330.14L285.6,328.9L283.44,326.29L283.04,324.77L279.73,323.38L278.77,321.47L279.44,319.76L278.48,318.34L277.37,318.39L275.5,319.39L274.74,318.72L274.45,317.1L273.19,316.91L271.58,315.68L269.13,317.07L266.96,317.1L265.53,318.55L263.28,319.07L262.23,320.4L261.23,320.82L261.46,322.69L260.97,323.17L259.5,322.92L258.19,324.01L255.94,324.07L253.65,322.44L253.34,327.83L253.77,371.02L253.77,371.02L222.94,371.36L222.94,371.36L215.23,371.36L215.23,371.36L180.5,371.56L180.5,371.56L167.97,371.52L167.97,371.52L151.58,371.52L151.58,371.52L145.8,371.56L145.8,371.56L98.55,371.34L98.55,371.34L86.98,371.21L86.98,371.21L65.22,371.03L65.22,371.03L65.33,186.4L96.06,186.41L201.49,164.77L215.55,164.49L217.06,165.65L216.64,167.11L218.1,168.18L217.3,168.51L217.59,170.11L218.94,170.96L220.88,173.89L221.46,175.83L222.62,176.89L222.42,178.96L223.15,178.63L223.52,179.04L223.99,178.71L225.18,179.17L225.7,178.51L226.15,178.9L225.53,179.69L226.01,180.74L226.78,181.37L228.83,181.25L229.03,182.66L230.47,183.39L231.05,185.24L230.78,186.35L232.53,187.97L232.93,189.7L232.23,190.92L233.11,192.62L232.9,195.11L233.52,195.44L233.52,197.81L236.23,199.15L239.72,196.9L240.87,194.65L241.89,194.2L243.24,194.53L247.93,190.8L249.11,189.05L249.2,187.78L251.7,186.51L251.94,185.31L252.73,185.45L253.4,183.53L255.58,182.68L256.62,181.67L257.11,180.69L256.55,180.35L257.3,178.73L258.79,178.15L258.89,177.58L260,177.89L262.92,174.89L265.3,173.89L265.6,172.32L267.63,172.79L269.21,171.79L271.85,169.01L272.75,167.37L273.84,166.99L274.27,165.97L276.61,166.25L279.31,165.35L280.9,166.75L281.87,164.5L283.2,164.08L285.59,161.32L287.11,161.41L287.74,162.06L288.27,161.45L289.23,161.46L290.65,162.55L291.32,162.06L291.31,163.38L293.44,165.49L292.88,166.89L293.53,167.87L294.35,167.77L294.81,168.68L296.23,169.14L299.14,169.11L301.9,165.68L302.38,163.94L305.05,161.88L304.81,160.9L306.22,161.06L306.99,160.41L307.73,160.74L308.69,158.94L309.23,158.75L309.66,157.16L310.59,157.71L312.18,156.84L311.93,156.4L312.29,156.07L314.25,155.87L314.15,155.16L314.7,154.85L317.52,153.84L318.61,154.07L319.1,153.38L320.51,152.93L321.12,151.92L323.51,151.7L323.87,150.8L325.39,150.31L325.72,150.63L324.69,151.5L325.57,152.16L325.56,152.79L326.11,153.1L327.3,152.26L327.52,152.68L326.96,153.36L327.59,153.54L330.21,151.81L330.96,152.68L330.24,153.08L330.32,153.46L331.41,154L334.33,153.01L335.15,151.57L336.18,151.78L337.22,149.76z",
  "South-East": "M403.69,631.53L400.28,632.06L393.99,633.91L387.95,634.09L385.62,636.45L383.7,636.53L383.29,637.18L383.74,640.96L385.17,643.71L384.74,647.97L383.35,649.35L375.28,671.83L373.23,674.28L372.4,680.23L371.52,681.89L371.05,684.49L369.57,687.33L369.57,687.33L365.43,685.45L361.89,684.75L370.52,654.49L365.86,654.79L368.75,646.08L367.84,644.77L371.8,642.98L371.74,637.63L371.74,637.63L389,618.74L389,618.74L401.53,627.05L404.2,631.41L404.2,631.41z",
  Southern: "M371.74,637.63L371.8,642.98L367.84,644.77L368.75,646.08L365.86,654.79L370.52,654.49L361.89,684.75L365.43,685.45L369.57,687.33L369.57,687.33L369.49,690.37L365.09,699.61L357.35,704.6L354.42,707.13L352.77,707.28L349.45,709.32L335.09,708.62L332.5,706.61L331.68,706.72L330.16,706L327.85,706.34L327.09,707.71L324.96,709.49L323.92,709.19L322.19,711.31L321.64,710.98L320.67,712.61L317.64,712.4L313.75,713.51L309.57,712.22L306.26,713.38L301.46,711.97L299.21,710.14L297.17,709.82L292.83,708.05L292.83,708.05L294.24,707.58L293.62,701.15L287.59,700.96L277.9,690.99L276.96,654.22L266.55,643.16L199.41,643.39L199.7,582.64L199.7,582.64L235.89,594.27L235.89,594.27L242.81,596.45L242.81,596.45L355.42,631.56L365.41,637.39z"
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

// src/Botswana.tsx
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
var Botswana = ({
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
      BotswanaSingle,
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
      BotswanaMultiple,
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
var BotswanaSingle = ({
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
var BotswanaMultiple = ({
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
var Botswana_default = Botswana;

// src/index.ts
var src_default = Botswana_default;
