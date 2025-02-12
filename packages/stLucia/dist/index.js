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

// src/Stlucia.tsx
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
var stateCode = ["Anse la Raye", "Castries", "Choiseul", "Dennery", "Islet", "Laborie", "Micoud", "Soufri\xE8re", "Vieux Fort", "Canaries"];
var drawPath = {
  "Anse la Raye": "M174.098,460.718L171.068,461.863L158.768,475.251L143.819,498.523L136.188,502.989L131.043,503.623L127.465,502.671L123.88,498.044L122.636,493.428L115.626,480.831L105.814,469.041L106.75,462.82L108.462,459.475L108.309,450.229L105.192,445.605L97.875,438.908L97.875,438.908L101.028,427.765L111.536,421.853L115.97,417.793L118.765,413.368L118.187,404.292L112.582,396.41L111.302,378.072L104.182,367.796L102.404,359.85L99.418,357.174L83.453,355.168L78.228,352.398L63.433,337.807L63.433,337.807L68.204,336.715L69.799,335.08L69.799,332.351L65.54,331.259L65.006,329.624L67.135,328.532L67.135,324.715L69.265,323.076L69.799,320.896L74.599,318.712L74.599,316.534L77.262,314.895L77.262,307.804L78.857,305.62L78.857,302.893L82.055,300.167L86.848,299.62L90.045,295.252L90.045,295.252L95.855,300.65L99.433,301.958L104.292,300.386L109.918,301.175L137.021,311.649L157.985,313.217L164.125,318.193L171.537,321.595L172.561,324.998L172.049,339.919L169.239,348.559L168.983,358.243L170.256,361.386L182.791,371.331L184.576,375.259L184.576,378.922L181.51,388.871L179.974,407.582L176.139,420.407L175.883,425.648L177.164,434.021L184.832,442.917L184.576,448.677L176.139,456.007z",
  Castries: "M174.098,460.718L176.139,456.007L184.576,448.677L184.832,442.917L177.164,434.021L175.883,425.648L176.139,420.407L179.974,407.582L181.51,388.871L184.576,378.922L184.576,375.259L182.791,371.331L170.256,361.386L168.983,358.243L169.239,348.559L172.049,339.919L172.561,324.998L171.537,321.595L164.125,318.193L157.985,313.217L137.021,311.649L109.918,301.175L104.292,300.386L99.433,301.958L95.855,300.65L90.045,295.252L90.045,295.252L92.708,293.619L91.114,289.249L93.243,287.616L93.243,284.885L95.372,282.165L96.975,282.165L98.043,284.341L101.233,284.341L102.835,285.982L104.431,284.89L103.904,282.705L101.233,279.977L96.44,278.34L95.906,276.16L95.906,272.342L98.57,271.25L98.57,265.793L100.172,263.613L100.172,259.249L102.302,254.335L101.233,243.421L102.835,242.329L105.499,242.876L111.36,246.694L114.558,246.694L115.626,244.513L121.487,245.057L122.548,243.421L123.083,245.061L120.953,246.148L120.953,249.97L122.548,251.605L130.539,249.425L131.607,246.694L131.607,243.968L130.012,240.692L124.15,241.241L122.014,234.146L123.083,228.148L126.28,226.507L126.28,225.415L124.15,224.322L124.677,215.047L122.014,209.047L125.746,206.86L125.746,204.682L124.677,204.682L123.617,202.495L124.15,200.858L126.814,200.314L127.348,196.493L128.943,196.493L131.073,199.222L135.338,199.222L136.934,198.13L137.468,195.4L139.07,195.404L138.536,186.67L139.597,186.128L139.597,183.4L141.734,183.4L142.795,186.673L144.397,185.036L145.992,185.036L146.526,186.673L148.656,186.67L150.258,189.946L151.319,189.946L151.319,193.767L156.646,194.859L158.783,196.493L164.11,195.4L165.705,193.22L170.505,191.586L170.505,189.401L166.773,188.854L160.378,190.494L160.378,189.401L159.317,189.401L159.317,186.128L157.18,184.489L153.456,183.4L149.19,183.944L148.122,181.763L148.656,180.122L147.061,180.122L148.122,176.303L141.734,174.119L143.329,169.21L146.526,168.665L147.595,169.757L148.656,167.025L151.319,167.025L153.983,167.572L153.983,168.665L157.18,168.665L158.783,171.391L160.378,171.391L160.378,174.664L161.446,175.211L167.307,175.211L167.841,174.119L173.168,173.575L176.9,171.391L176.9,170.298L180.09,169.757L182.227,166.48L188.622,164.844L191.286,159.93L191.813,155.022L197.147,155.022L200.871,150.104L204.603,147.382L206.206,141.718L206.206,141.718L209.842,143.016L229.679,162.92L233.367,171.93L235.818,182.196L239.499,186.177L258.114,190.153L268.958,190.784L271.409,192.459L289.409,219.481L291.663,224.722L290.434,235.613L287.777,240.01L276.319,244.616L271.819,249.541L265.277,252.896L263.638,255.406L262.409,262.738L252.589,269.025L251.367,271.743L251.975,276.146L253.818,281.59L258.523,286.617L260.667,292.979L260.667,292.979L262.05,300.78L261.794,308.897L259.497,318.059L244.665,339.001L238.525,344.502L233.162,358.633L231.625,366.491L233.162,381.28L233.162,388.086L231.881,392.429L208.562,418.183L208.562,422.793L214.701,435.775L214.701,439.754L212.652,448.336L208.306,459.263L208.306,459.263L206.922,466.137L204.881,470.428L195.062,476.29L186.793,477.923L186.793,477.923L182.022,475.373L177.164,470.66L174.098,463.332z",
  Choiseul: "M148.707,539.99L142.583,550.632L140.3,563.495L135.573,570.022L134.943,576.241L126.982,586.838L125.014,591.429L122.021,607.156L119.658,611.111L109.333,620.982L105.001,628.565L102.558,646.421L96.25,656.252L93.104,670.645L83.723,682.655L78.857,684.693L78.857,684.693L76.194,681.352L70.333,679.175L69.265,676.45L67.669,676.996L66.601,675.355L62.342,673.727L60.206,668.275L57.542,667.184L55.413,663.364L56.481,659.007L51.154,653.556L49.018,649.192L44.225,649.739L42.623,648.102L41.562,643.742L38.364,639.926L33.571,636.652L29.305,636.111L26.108,631.751L22.91,630.659L21.849,626.843L20.247,626.297L23.979,612.122L21.212,607.622L21.212,607.622L30.249,602.907L37.025,590.776L39.776,588.176L43.588,587.743L49.515,583.193L56.708,582.978L69.411,572.575L81.265,571.713L89.313,568.461L98.204,567.379L101.804,563.369L115.143,553.403L146.051,527.19L155.988,524.004L155.988,524.004z",
  Dennery: "M388.425,286.889L388.425,290.888L389.493,292.527L393.226,293.619L395.354,290.888L396.416,290.888L398.552,293.072L398.552,295.252L395.354,295.252L395.889,297.983L394.82,300.167L393.226,301.255L389.493,301.255L388.425,305.62L395.889,306.165L396.416,304.531L400.147,303.984L400.147,305.62L402.811,307.253L403.345,308.892L401.75,309.984L397.484,309.437L394.82,310.529L393.226,315.987L397.484,321.443L395.354,324.715L388.425,325.807L387.364,329.075L387.891,331.259L394.82,331.259L393.226,347.081L392.157,347.628L387.891,357.447L385.762,359.081L379.366,360.717L376.169,359.081L369.781,359.081L369.247,362.353L365.516,362.353L365.516,370.538L366.583,373.261L368.713,374.353L374.04,380.904L378.306,380.9L380.969,386.9L375.108,389.086L373.506,391.813L368.713,392.357L366.583,396.721L364.981,397.809L364.981,401.084L369.781,402.176L370.842,405.992L376.703,407.084L376.703,413.082L385.228,414.174L384.701,417.445L387.364,420.175L387.364,427.81L386.296,427.81L385.228,429.989L381.503,429.989L380.969,431.081L381.503,434.355L383.633,434.902L384.167,437.627L380.435,438.174L379.9,439.807L376.169,439.807L376.169,442.538L376.703,443.63L378.306,443.63L379.366,448.538L372.979,448.534L373.506,451.262L379.366,452.35L378.84,456.172L375.643,456.172L375.108,455.08L372.444,455.08L371.376,453.441L369.247,453.441L369.247,450.171L366.583,450.171L364.981,452.35L359.12,451.262L355.922,452.896L355.396,457.264L361.257,457.805L361.257,461.079L359.12,461.079L358.059,462.714L354.861,461.626L354.327,464.351L350.596,464.897L351.664,470.898L353.778,471.985L353.778,471.985L348.386,477.576L341.449,478.479L335.391,482.536L319.212,480.058L308.756,476.737L301.043,470.993L295.212,470.087L283.87,460.061L274.628,457.299L270.992,454.709L263.945,448.51L262.628,441.86L261.75,440.398L259.438,440.058L254.375,441.185L240.392,447.607L226.613,450.547L208.306,459.263L208.306,459.263L212.652,448.336L214.701,439.754L214.701,435.775L208.562,422.793L208.562,418.183L231.881,392.429L233.162,388.086L233.162,381.28L231.625,366.491L233.162,358.633L238.525,344.502L244.665,339.001L259.497,318.059L261.794,308.897L262.05,300.78L260.667,292.979L260.667,292.979L270.37,284.594L277.606,276.604L282.019,273.828L285.414,273.247L287.785,273.94L289.373,276.026L293.331,284.016L297.063,283.435L304.863,275.1L307.233,274.285L310.746,274.522L324.422,279.558L333.927,287.548L336.188,287.316L350.998,279.097L358.578,278.108L368.977,282.508L382.433,286.331z",
  Islet: "M388.425,286.889L382.433,286.331L368.977,282.508L358.578,278.108L350.998,279.097L336.188,287.316L333.927,287.548L324.422,279.558L310.746,274.522L307.233,274.285L304.863,275.1L297.063,283.435L293.331,284.016L289.373,276.026L287.785,273.94L285.414,273.247L282.019,273.828L277.606,276.604L270.37,284.594L260.667,292.979L260.667,292.979L258.523,286.617L253.818,281.59L251.975,276.146L251.367,271.743L252.589,269.025L262.409,262.738L263.638,255.406L265.277,252.896L271.819,249.541L276.319,244.616L287.777,240.01L290.434,235.613L291.663,224.722L289.409,219.481L271.409,192.459L268.958,190.784L258.114,190.153L239.499,186.177L235.818,182.196L233.367,171.93L229.679,162.92L209.842,143.016L206.206,141.718L206.206,141.718L206.732,137.011L205.137,134.826L205.671,121.727L200.871,112.996L203.008,108.63L203.008,104.264L201.939,102.628L197.674,102.077L197.674,96.075L198.742,96.075L198.742,94.982L200.344,96.075L201.939,95.53L201.939,91.164L199.81,87.342L200.344,82.976L204.603,82.431L205.671,86.25L208.335,84.616L209.396,82.431L214.73,81.884L216.325,82.976L216.859,81.338L218.455,81.338L218.989,77.517L223.789,76.425L224.315,74.785L234.977,76.972L241.899,64.418L241.899,57.319L240.838,51.313L239.235,48.589L239.235,44.764L237.106,44.223L234.977,40.943L232.84,40.397L232.84,39.305L227.513,37.123L227.513,36.031L221.652,37.123L220.591,39.854L216.859,39.854L215.257,38.212L215.257,36.031L217.394,34.938L217.394,30.029L226.452,30.571L231.779,33.849L240.838,34.938L241.372,27.297L244.035,26.751L246.165,28.39L248.294,26.751L247.233,21.29L249.896,19.656L251.492,16.379L254.155,15.287L254.689,10.374L253.621,9.282L253.621,5.46L258.421,3.826L258.955,0L261.619,1.64L263.214,4.915L265.877,4.911L266.945,6.007L269.075,4.367L272.272,4.915L272.807,3.822L274.401,3.822L275.47,5.46L276.004,4.367L277.599,4.915L280.797,3.822L287.726,5.46L289.855,11.467L291.451,10.374L291.985,8.192L297.846,7.1L298.914,7.646L298.914,9.282L302.646,9.827L303.173,13.102L309.034,12.556L310.103,13.648L309.568,16.923L312.231,18.561L312.231,20.203L309.568,21.841L309.568,24.022L311.171,25.659L310.103,30.029L312.766,30.571L313.834,33.304L313.3,35.483L310.637,37.668L309.034,37.668L308.507,36.576L303.707,37.668L298.38,37.123L297.312,38.216L293.587,37.668L291.451,41.486L291.451,44.223L293.053,48.044L302.646,48.038L303.173,52.411L305.31,55.685L306.371,55.685L304.241,58.958L311.171,65.51L315.963,64.418L316.497,61.144L320.756,58.411L325.556,59.504L325.556,62.236L320.756,63.867L320.756,66.603L323.419,67.692L328.22,67.145L330.349,68.784L330.349,72.056L325.021,70.971L322.358,72.604L322.358,76.972L325.556,82.976L322.893,86.797L320.756,87.342L320.756,88.982L323.419,90.071L321.824,97.169L323.953,97.711L325.556,96.075L325.556,92.801L327.151,93.345L332.479,90.616L333.013,87.89L337.813,89.524L337.813,88.435L341.003,85.701L344.2,85.157L352.725,88.435L353.259,92.256L356.99,92.801L359.12,95.53L361.257,96.075L363.386,101.536L366.583,104.264L366.583,105.356L369.781,108.63L371.91,109.175L372.979,111.356L376.169,112.449L376.703,115.181L377.771,115.181L377.237,117.907L375.108,117.907L371.91,121.727L371.91,129.372L370.308,129.915L370.308,137.011L368.713,140.284L365.516,139.739L363.386,141.376L361.783,139.192L352.198,139.192L352.198,140.284L361.257,144.104L363.386,146.831L362.852,151.202L360.723,151.197L357.524,153.93L353.259,154.47L352.725,156.66L357.524,156.107L358.059,157.749L360.188,158.294L361.257,156.657L363.386,156.657L366.049,159.387L369.781,159.387L370.842,165.933L368.713,169.21L370.308,169.753L370.308,172.483L368.179,174.119L366.049,180.671L368.713,181.763L371.376,180.671L374.574,181.763L375.643,182.855L374.574,188.309L376.703,188.854L376.703,191.586L375.108,192.674L375.108,196.493L370.842,199.766L370.308,205.223L373.506,211.774L374.574,217.231L377.237,219.416L377.237,223.781L380.435,225.415L380.435,231.966L383.633,233.052L387.364,236.331L390.027,236.325L392.691,239.057L392.691,242.876L394.286,245.057L394.286,252.698L391.623,257.063L394.286,263.613L396.95,264.158L396.95,268.522L393.226,270.158L396.95,274.522L396.95,276.16L391.089,282.705L389.493,282.705z",
  Laborie: "M191.286,736.953L190.217,735.856L187.554,735.856L188.088,737.498L182.227,737.498L182.761,738.589L180.09,738.589L176.9,736.407L173.703,736.407L172.1,733.136L172.1,729.866L167.307,729.322L166.773,727.141L165.705,727.141L165.178,723.871L166.239,723.326L166.239,717.879L164.644,717.879L163.042,715.697L159.844,714.06L161.446,708.067L158.783,705.337L153.456,704.252L143.863,704.252L141.734,709.699L139.07,709.153L136.934,705.337L134.804,704.793L128.943,704.793L122.548,707.521L122.014,703.159L120.953,702.614L115.626,703.702L106.033,703.159L103.904,700.433L96.975,700.433L94.311,697.159L91.114,697.163L91.114,695.525L88.45,694.438L87.916,692.256L82.589,693.894L78.857,687.896L79.926,686.805L78.857,684.693L78.857,684.693L83.723,682.655L93.104,670.645L96.25,656.252L102.558,646.421L105.001,628.565L109.333,620.982L119.658,611.111L122.021,607.156L125.014,591.429L126.982,586.838L134.943,576.241L135.573,570.022L140.3,563.495L142.583,550.632L148.707,539.99L148.707,539.99L151.224,539.479L156.039,541.279L158.98,544.284L158.746,550.294L155.688,554.504L154.517,560.637L157.217,573.495L164.732,578.902L165.559,581.55L166.612,589.604L166.378,592.727L164.498,596.335L164.38,600.478L169.781,609.37L181.649,622.714L189.749,641.645L190.459,652.159L189.632,673.189L188.227,677.037L187.759,705.334L184.466,712.307L183.764,718.312L185.996,724.202L192.69,728.826L192.925,732.431z",
  Micoud: "M353.778,471.985l14.935,-0.546l2.129,-3.271h11.723l1.603,1.639l-0.534,2.179h-7.464l-0.526,4.363l-3.732,2.179v1.092h3.732l-1.603,7.637h4.266l1.595,-3.815h3.198l2.663,-2.183h5.861v3.815l-2.13,0.545l-0.534,2.183h-2.129v4.363l-1.068,1.093l-7.456,0.541l-1.603,2.186l-2.129,-0.549l-1.068,-1.637h-3.198v1.637h1.603l1.068,2.185h1.062l-0.534,3.817h2.137l1.061,-2.183l6.93,1.086l-0.534,3.821l-8.524,2.726v2.183l2.663,0.545v3.817l-1.068,1.637l-2.663,0.547v4.902h3.197l3.197,1.637v3.819l-0.534,2.724l-5.86,-0.545l-1.062,3.274l3.198,0.545l2.129,4.362l2.129,0.546l0.534,2.725l-10.653,-1.092l0.526,1.638l2.671,1.092v1.633h-5.861l-6.395,-2.18l-2.664,3.817v2.179l2.664,0.551l0.534,1.086h5.86l6.389,4.91l-1.062,3.271l-3.731,2.728h-6.396l-2.129,-2.183l-5.327,-1.633h-7.464l-0.534,1.088l5.335,0.545l2.663,4.361l2.129,0.547v1.636l-4.792,-0.545v1.633l4.258,1.091l0.534,6.545l3.198,-1.092v-2.726h2.663l1.068,1.635l4.793,-0.543l1.068,1.634l2.129,-1.091l2.13,1.091l1.603,3.267v1.092h-2.137l-1.062,1.097l-4.266,-0.006v1.097h-3.197v-1.097l-7.991,1.097l3.198,3.271l-3.732,1.092v2.723l-1.595,2.18v2.729h2.129v1.637l-2.663,4.907l-0.534,8.179l-3.197,5.993H349l-1.603,9.813h-1.595l-1.068,9.271l2.129,1.636l0.534,2.179h2.664l3.731,-2.724l4.266,-0.546l0.527,4.36l-1.062,1.092v5.998h-1.068l-0.534,-2.182l-7.456,0.544l1.068,3.271l2.13,1.638h2.663l0.534,3.268L349,648.645l-1.068,1.64h-2.129l-3.197,-3.273h-3.198v2.182l2.664,1.634h3.197l0.534,2.729h1.061l1.068,2.177l-5.326,1.093v4.36l3.731,1.634l0.526,2.183l-6.922,-0.547l-0.534,-3.27l-3.731,-0.545l-0.534,4.906l1.068,2.182h1.603v1.088h1.595l0.534,1.091l-0.534,4.907l-1.595,0.541l0.526,2.182l-1.061,1.091l-4.8,0.547l-3.198,-2.179v-3.27h-1.595l-2.13,2.724l1.596,2.725l1.068,6.545l-2.664,0.54l-0.534,1.636l-5.326,1.092l-3.732,-12.537h-4.792l-3.198,1.634h-2.663l-1.068,-6.539l-2.129,-1.092l-5.861,0.545l-0.534,2.179h2.663v2.729l-5.861,0.545l-1.068,5.447l-6.922,0.545l0.57,3.374l0,0l-12.234,4.96l-7.398,-0.77l-3.885,-5.773l-0.125,-15.135l-12.037,-6.606l-4.764,-1.025l-3.637,-3.081l-1.002,-4.36l0.505,-5.905l5.642,-10.515l0.622,-4.939l-14.042,-16.936l-4.888,-7.696l-2.51,-5.131l-0.498,-10.07l-1.383,-2.822l-13.164,-12.836l-4.888,-7.693l-2.758,-2.311l-11.034,-3.976l-11.283,-9.753l-8.151,-10.522l-2.261,-10.263l-2.744,-6.77l0,0h1.09l5.297,-11.262l18.417,-25.132v-3.47l-4.661,-5.851l-0.534,-2.251l0,0l8.269,-1.633l9.819,-5.862l2.042,-4.291l1.383,-6.874l0,0l18.308,-8.716l13.778,-2.939l13.983,-6.423l5.063,-1.127l2.312,0.341l0.878,1.462l1.317,6.649l7.046,6.199l3.637,2.59l9.242,2.762l11.342,10.026l5.832,0.906l7.712,5.744l10.456,3.32l16.179,2.479l6.059,-4.058l6.937,-0.902L353.778,471.985zM303.173,675.358l1.068,0.547v3.814h-1.068v1.093h-3.198v-1.093l-2.664,-0.545l0.534,-2.179h2.129l0.534,-1.638H303.173z",
  Soufri\u00E8re: "M186.793,477.923L187.327,480.174L191.988,486.024L191.988,489.494L173.571,514.626L168.273,525.888L167.183,525.888L167.183,525.888L161.922,525.888L155.988,524.004L155.988,524.004L146.051,527.19L115.143,553.403L101.804,563.369L98.204,567.379L89.313,568.461L81.265,571.713L69.411,572.575L56.708,582.978L49.515,583.193L43.588,587.743L39.776,588.176L37.025,590.776L30.249,602.907L21.212,607.622L21.212,607.622L7.99,601.76L6.395,599.032L4.793,599.036L4.266,596.854L3.198,596.854L3.198,590.86L5.861,589.769L6.929,588.131L8.524,588.131L10.127,584.86L15.454,580.499L18.117,576.138L27.176,571.774L31.435,563.598L29.839,558.691L30.908,554.87L28.771,554.874L27.176,553.238L26.108,553.783L23.444,551.604L21.849,545.604L21.849,541.787L22.91,541.242L21.849,537.425L23.444,535.789L27.176,535.242L29.839,530.336L30.908,530.336L31.435,520.518L33.571,516.156L33.037,515.064L35.167,510.161L38.364,507.979L38.898,504.161L37.83,502.524L33.037,500.346L33.037,495.978L31.435,495.978L30.908,497.619L27.176,497.619L26.642,498.711L21.849,498.711L16.515,489.98L9.059,488.893L4.793,486.71L3.732,487.256L3.732,486.165L2.664,486.165L2.664,487.256L0,486.165L0,483.981L2.664,482.894L3.198,481.258L1.068,474.716L2.129,472.532L2.664,463.806L2.664,462.167L1.068,460.534L1.603,452.896L2.664,451.262L1.603,447.44L4.793,444.714L5.861,439.266L7.99,438.715L9.593,431.081L11.722,430.539L11.722,427.265L15.454,422.354L15.454,420.716L16.515,420.722L16.515,420.722L37.662,431.171L55.055,432.604L60.769,434.577L65.906,441.023L70.925,439.113L73.721,441.383L77.577,448.908L82.011,447.598L86.445,439.713L96.126,440.55L97.875,438.908L97.875,438.908L105.192,445.605L108.309,450.229L108.462,459.475L106.75,462.82L105.814,469.041L115.626,480.831L122.636,493.428L123.88,498.044L127.465,502.671L131.043,503.623L136.188,502.989L143.819,498.523L158.768,475.251L171.068,461.863L174.098,460.718L174.098,460.718L174.098,463.332L177.164,470.66L182.022,475.373z",
  "Vieux Fort": "M148.707,539.99l7.281,-15.986l0,0l5.934,1.884h5.261l0,0l2.744,6.77l2.261,10.263l8.151,10.522l11.283,9.753l11.034,3.976l2.758,2.311l4.888,7.693l13.164,12.836l1.383,2.822l0.498,10.07l2.51,5.131l4.888,7.696l14.042,16.936l-0.622,4.939l-5.642,10.515l-0.505,5.905l1.002,4.36l3.637,3.081l4.764,1.025l12.037,6.606l0.125,15.135l3.885,5.773l7.398,0.77l12.234,-4.96l0,0l2.093,1.535l10.12,1.091l0.534,4.36h-4.258l-1.603,4.905h-2.664l-1.068,1.091l-0.527,2.725h-1.068l-0.534,2.729l-2.129,2.725l-0.534,5.451l-2.664,1.632v1.091h-3.198v1.638h-1.595v2.723h-1.068l-5.861,10.355l0.534,6.541l2.129,2.182l1.603,4.906h-1.603l-1.061,1.632h-3.198v1.091h-2.664v2.182l-2.67,1.087l-2.129,4.906l-3.198,0.545v9.268l2.137,0.545v2.722l1.595,0.547l1.595,4.904l1.603,1.637h3.197l1.595,2.179l2.664,0.544l-0.527,5.45l2.129,1.091v2.179l-2.129,3.273h-10.661l-2.664,1.634V792h-2.664l-6.929,-4.906v-2.178l-2.129,-1.093h-1.595v1.634l-3.197,4.361l-8.525,-3.816l-0.534,-4.36l1.061,-3.269l5.861,0.547l2.137,-1.091l1.061,-1.634v-3.272l2.663,-1.636l0.534,-5.45h-1.061v2.182h-3.197l-1.603,-1.087v-1.636l3.197,-1.091l-1.061,-3.269h-4.266l-0.534,-4.362l-5.327,-6.541l-4.266,0.544l-8.524,-3.269h-7.991l-7.99,2.729l-1.603,-1.638h-3.724l-2.137,-2.727l-1.061,-3.815h-1.603v-4.904h-1.061l0,0l1.639,-4.522l-0.234,-3.604l-6.695,-4.624l-2.232,-5.891l0.703,-6.005l3.292,-6.973l0.468,-28.297l1.405,-3.848l0.827,-21.03l-0.71,-10.515l-8.1,-18.931l-11.868,-13.344l-5.4,-8.893l0.117,-4.143l1.88,-3.608l0.234,-3.122l-1.054,-8.055l-0.827,-2.647l-7.515,-5.407l-2.7,-12.858l1.17,-6.133l3.059,-4.21l0.234,-6.01l-2.941,-3.005l-4.815,-1.801L148.707,539.99zM287.726,754.938l1.595,1.637v2.723l-1.595,1.093l-0.534,2.177l-1.068,1.093l-3.731,-0.545l-0.527,-2.178l-1.603,-0.547l0.534,-3.271L287.726,754.938z",
  Canaries: "M97.875,438.908L96.126,440.55L86.445,439.713L82.011,447.598L77.577,448.908L73.721,441.383L70.925,439.113L65.906,441.023L60.769,434.577L55.055,432.604L37.662,431.171L16.515,420.722L16.515,420.722L16.515,416.354L17.583,413.627L19.186,413.082L21.315,405.992L20.247,402.176L27.71,396.176L26.108,392.357L22.91,389.086L23.979,384.176L26.108,382.537L32.503,381.992L36.235,378.173L35.701,376.541L36.762,373.261L38.364,372.718L38.364,369.993L39.432,369.446L37.83,364.536L39.432,364.536L39.959,362.905L42.623,362.358L44.225,360.172L43.157,358.539L41.562,358.539L38.898,354.717L38.898,352.533L40.493,352.533L42.096,350.353L41.027,348.72L41.562,345.989L43.691,343.264L46.889,344.356L51.681,343.81L52.215,344.901L55.947,344.901L57.016,345.989L59.679,343.264L59.679,341.625L60.74,341.081L60.206,339.987L63.433,337.807L63.433,337.807L78.228,352.398L83.453,355.168L99.418,357.174L102.404,359.85L104.182,367.796L111.302,378.072L112.582,396.41L118.187,404.292L118.765,413.368L115.97,417.793L111.536,421.853L101.028,427.765z"
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

// src/Stlucia.tsx
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
var Stlucia = ({
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
      StluciaSingle,
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
      StluciaMultiple,
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
var StluciaSingle = ({
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
var StluciaMultiple = ({
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
var Stlucia_default = Stlucia;

// src/index.ts
var src_default = Stlucia_default;
