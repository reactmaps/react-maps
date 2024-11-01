// src/Bermuda.tsx
import React, { useEffect as useEffect2, useState as useState2, useMemo } from "react";

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
  "Sandys",
  "Southampton",
  "Warwick",
  "Paget",
  "Pembroke",
  "Hamilton",
  "St. George's",
  "Hamilton",
  "Devonshire",
  "Smiths",
  "St. George's"
];
var drawPath = {
  Sandys: "M20.82,488.817l-1.294,1.938l-1.529,-0.416l0.353,-3.461l0.118,-2.492l2,-2.077l1.529,-2.354l0.235,1.385l0.706,2.216l-1.647,0.415l-1.294,2.354L20.82,488.817zM19.997,498.094l1.882,1.385l1.412,-0.692l0.235,-2.492l-1.059,-1.523l0.471,-1.384l0.235,-1.801l0.353,-3.046l2.235,-0.831l2,-1.107l2,-0.692l2.588,1.246l2.47,2.077l2.588,1.523l1.647,1.661l1.176,0.97l2.94,1.107l1.412,2.077l0.353,2.769l0.941,1.772l1.647,0.415l3.176,0.416l1.882,0.692l1.412,2.076l2.587,1.801l3.882,-0.692l3.294,-1.246l2.706,0.692l2.587,1.522l4.117,0.97l3.293,2.63l2.235,2.216l2.588,1.246l3.293,0.139l3.176,0.83l2.823,0.277l2.706,1.107l2.941,0.277l2.235,0.691l2.235,0.416l1.294,1.384l3.059,0.416l-0.118,-2.216l-1.882,-1.246l-0.706,-1.938l1.764,-0.831l2.235,-0.554l2.706,1.246l1.882,0.83l2.117,-0.415h2.941l2.94,0.277l2.235,1.107l2.94,0.692l2.941,1.661l2.117,1.246l1.059,1.8l-0.706,2.215l-1.412,1.385l-1.882,0.415l-3.646,0.831l-3.293,0.277l-4.94,-0.416l-5.293,-0.276l-3.764,-0.554l-4.117,-0.831l-3.764,-1.246l-3.176,-2.354l-2,-2.631l-1.529,-0.692h-2.941l-2.94,0.554l-4.47,-0.691l-1.646,-0.97l-2.941,-0.415l-2.588,-1.107l-1.059,0.554l0.471,2.769l1.882,1.8l-27.85,12.99l-2.196,-4.43L24.879,539.38l-1.353,-3.849l-2,-5.814l-1.412,-8.03l-2.117,-4.264l-1.529,-5.123l-2,-4.708l-1.294,-4.846l-1.294,-4.431l-1.059,-3.185l-0.823,-2.907l-2,-1.385l-0.588,-2.908l-1.176,-2.077l-1.412,-2.492l-2,-2.354l0.353,-3.185l-0.353,-1.385l-2.47,-0.416L0,474.361l2,-0.692l2.118,-0.692l-0.471,-1.662l-0.235,-1.522l1.529,-0.277l4.47,-1.938l3.294,-0.554l2.588,-1.662l1.882,-0.276l-0.118,2.409l-1.882,1.107l-2.588,1.108l-2.235,0.969l-0.941,1.246l-1.059,1.938l-1.059,2.493l0.823,1.385l1.882,0.276l2,1.523l0.235,3.046l1.765,2.492l0.235,3.047l0.47,4.569l2,1.522l0.941,2.216L19.997,498.094zM25.525,462.868l-1.529,0.139l-1.529,-0.416l0.235,-0.969l0.706,-0.277l2.235,-0.139l0.706,-1.661l1.059,0.139l0.118,1.246l-0.118,0.831l-0.941,0.692L25.525,462.868zM32.937,452.897l-1.647,1.523l-1.647,-1.246l0.823,-0.831l0.706,-0.969l0.118,-2.493l1.176,-2.216l0.823,0.831l0.588,0.692v1.801l-1.059,0.83L32.937,452.897zM17.409,383.403l-1.059,0.415l-1.529,-0.554l0.118,-1.523l2,-0.416l0.824,1.108L17.409,383.403zM106.271,377.024l0.687,1.731l-2.353,1.154l-0.392,1.73l-0.98,0.924l-1.078,1.27l-1.079,0.577l-1.96,1.039l-1.078,0.577l-0.784,-0.462v-3.116l1.568,-0.924l0.784,-2.539l1.176,-0.692l2.451,-0.808l1.568,0.115L106.271,377.024zM69.754,388.223l1.529,1.523l1.646,0.831l2.353,-0.276l1.412,-0.416l2.588,0.831l2.588,-0.554l2,-1.108l1.411,-1.108l2,-1.246l1.176,-0.692l2.94,0.554l1.529,1.108l-0.118,1.523v1.662l-2,1.938l-0.941,1.662l-2.47,2.217l-1.059,3.462l-0.235,3.463l1.176,2.354l1.294,1.523l1.529,1.246l2.235,0.692l1.646,0.97l1.765,1.662l1.529,1.661l1.176,2.078l-1.412,0.554l-1.294,-2.216l-1.294,-1.523l-2.823,-2.077h-2.117v2.492l1.294,2.216L91.751,418l-4.234,-0.555l-3.176,0.139l-1.529,0.97l1.529,2.354l-0.118,2.631h-3.411l-0.823,0.555l-1.529,1.385l-1.176,1.385l-2,0.415l-1.764,1.385l-1.294,1.247l-3.059,0.276l-3.646,0.277l-2.235,0.692l-0.588,2.354l0.706,2.631l0.588,3.186l-0.235,2.77l-1.529,2.354l-2,2.771l-1.294,2.215l-1.059,2.354l-2.117,3.323l-1.176,3.462l-0.118,3.047l-0.118,3.323l-1.059,1.246l-0.235,1.523l2.235,0.692l0.941,0.692l0.235,1.439l-0.824,1.385l1.882,0.692l1.529,0.277l1.059,2.631l0.353,2.908l-1.411,1.938l-3.764,-0.139h-2.118l-1.529,1.385l-1.764,1.8l-1.529,-0.554l-2.941,1.246l-1.882,1.246l-2.706,1.246l-1.647,0.277l-2.117,-0.277l-0.47,-1.385l0.823,-2.077l1.294,-1.384l0.706,-1.385l1.294,-2.493l1.529,-1.107l1.176,-1.8l1.176,-1.801l-0.118,-2.215l-0.941,-0.831l-2.117,1.662l-1.529,2.769l-1.765,1.247l-2.94,0.83l-1.765,0.97l-3.646,0.276l-1.765,-0.415l-0.353,-1.938l0.941,-1.662l0.471,-2.354l0.47,-1.938l1.529,-0.416l3.646,-0.554l1.647,-0.415l0.706,-2.216l0.235,-1.385l1.412,-1.938l0.47,-2.77l0.588,-2.77l1.765,-1.523l1.646,-0.692l0.824,-3.185l-0.471,-3.186l-1.647,-3.046l-2.823,-0.97l-2.353,0.97l-1.764,-0.692l2.353,-0.831l0.823,-1.938l0.706,-3.601l0.118,-2.659l1.059,-2.354l1.176,-1.8l-0.823,-2.077l-2.118,-1.108l-0.941,-2.354l0.353,-3.323l1.529,-1.247l0.118,-4.847l-1.059,-4.155l-0.941,-2.77l-0.706,-1.523l-2.353,-1.662l-2,-2.354l-0.823,-3.462l-1.882,-4.986l-2.353,-3.463l-1.059,-2.354l-1.059,-2.077l-2.941,-0.139l-1.529,-1.107l0.706,-1.939l1.412,-0.831l1.412,-0.831l1.294,-0.582l3.176,3.324l2.353,1.801l5.293,1.523l3.293,0.831l4.823,-0.554l3.764,0.276l3.176,-1.246l1.646,-3.463l2.235,-3.878l1.411,-1.108l2.588,-1.107l0.471,-3.324l-2.47,-1.386l-1.765,-1.8l1.412,-2.078l3.059,-0.554l1.764,-0.831l0.941,-1.523l2.823,-2.078l1.882,-0.97l4.234,-0.139l0.706,1.939l-1.412,0.692l-2.353,0.139l-2,1.247l-1.647,0.554l-0.235,3.463l-0.941,2.216l1.646,0.416l2.588,0.969l1.529,1.386l1.647,2.632l0.118,3.462l-1.059,1.523L69.754,388.223zM112.643,378.986l-2.548,0.23l-1.079,-1.962l-0.784,-1.154l-1.372,-1.385l-0.098,-4.155l2.059,-2.539l2.059,-1.501l2.156,-2.424l2.647,-1.154l2.156,-2.193l0.196,-3.231l0.882,-0.924l0.392,2.309l0.588,1.27l0.49,2.424l0.686,1.039l0.098,1.847l-1.862,0.577l-1.274,0.809l0.392,1.154l0.784,1.154l0.882,0.692l-1.373,1.847l-1.274,1.27l-1.862,2.539l-0.686,2.424L112.643,378.986zM148.52,350.938l1.373,1.616l0.098,1.27l-1.471,-0.23l-1.666,0.462l-0.49,1.962l-1.078,1.962l-1.765,-0.346l-1.47,-1.963l-1.471,-0.577h-3.431h-3.137l-1.863,0.924l-1.666,0.924l-2.255,0.461l-2.254,-0.115l-1.078,-1.039l1.176,-3.463l1.078,-2.192l1.96,-1.155l1.96,-0.692l1.765,-0.23l1.862,1.616l2.254,0.923l1.373,0.924l2.254,-0.115l0.392,-1.848l-0.98,-1.962l-2.255,-2.078l-1.764,-0.923l-2.157,-0.231l-0.882,-0.923l0.294,-1.616l1.47,-1.731l1.274,-1.386l1.568,-2.193l0.882,-2.771l1.372,-2.424l2.941,-1.154l2.353,-0.924l2.745,-1.847l1.568,-0.692l2.745,-0.116l0.392,1.155l-0.49,1.615l-1.274,3.349l-1.471,1.154l-1.372,5.425l-0.392,2.886l0.294,2.655v2.424l0.294,2.309L148.52,350.938zM182.927,290.862l-0.098,2.424l-0.882,1.732l-0.98,1.731l-0.098,2.309l-0.784,2.54l-1.764,0.346l-0.98,-0.115l-1.667,-0.577l-2.254,0.346l0.882,1.385l0.882,1.501l-0.588,1.154l-1.078,1.155l-0.49,2.886l-0.196,4.733l-1.176,1.039l-2.059,-0.115l-1.667,2.886l-2.255,0.115l-1.274,0.693l-1.373,1.616l-1.568,0.923l-1.765,1.039l-1.666,1.386l-2.157,0.808l-1.96,0.809l-1.568,-1.039l-0.686,-1.154l0.392,-1.271l0.392,-1.5v-1.963l1.078,-2.309l1.568,-1.616l2.843,-1.732l0.98,-1.847l2.255,-0.462l1.274,-2.193l0.098,-2.886l0.588,-2.193l1.862,-2.886l1.863,-1.154l0.98,-1.848l0.98,-3.232l1.078,-1.154l1.568,-0.231l1.274,-0.346l-0.784,-1.617l-1.176,-1.385l0.686,-1.039l1.862,0.693l0.687,1.27l1.862,0.461l1.176,-1.501l1.274,-1.154l1.764,-0.346l2.353,0.808L182.927,290.862z",
  Southampton: "M24.879,539.38L44.414,528.226L46.61,532.655L74.459,519.665L74.93,521.327L75.518,523.403L74.695,525.342L74.342,528.249L75.048,532.402L75.636,534.618L77.753,536.279L78.106,539.325L77.4,541.208L75.871,542.592L75.518,545.638L75.753,547.438L75.753,550.345L75.4,553.667L75.048,556.436L73.048,557.959L72.225,560.589L73.519,563.357L75.636,563.635L77.4,565.296L79.518,566.403L79.635,568.064L79.282,569.172L77.165,569.311L76.93,570.557L78.577,572.771L79.871,572.909L82.693,572.909L84.105,573.325L85.634,573.74L87.634,572.771L89.045,573.463L91.045,574.709L92.692,577.478L95.868,579.277L97.75,581.769L97.868,584.814L99.868,586.476L101.867,586.752L105.043,587.029L106.337,585.091L107.043,583.43L108.69,582.461L111.395,583.707L113.865,585.091L115.865,585.783L118.453,587.029L121.747,587.168L123.629,586.476L127.51,585.229L132.451,585.645L134.215,583.707L136.45,582.738L139.156,583.292L141.038,584.122L144.685,583.43L148.331,582.876L151.86,581.631L155.153,580.994L158.8,579.056L160.8,576.148L161.035,575.041L162.446,574.765L163.035,577.672L166.446,577.672L171.622,577.118L173.856,575.733L178.679,575.595L181.267,574.072L184.561,573.796L191.501,573.796L193.383,573.104L195.618,572.135L195.5,569.504L193.383,568.12L189.619,568.258L185.972,568.258L186.208,566.182L188.09,565.352L189.619,564.659L193.266,564.798L194.677,563.828L198.206,563.967L199.97,562.859L202.205,561.613L203.029,559.952L204.205,557.184L205.028,554.969L207.499,553.584L211.145,553.861L214.674,554.276L217.379,554.691L220.203,554.415L222.897,561.82L227.917,561.451L245.227,583.55L245.14,583.624L242.317,584.316L239.494,585.008L236.436,585.146L234.671,586.669L232.554,588.33L229.26,590.822L226.084,591.514L221.026,591.93L218.556,592.76L216.909,595.943L215.145,598.573L212.674,600.927L210.675,600.649L209.146,599.681L207.028,598.573L204.558,599.266L201.735,600.649L197.853,601.203L195.03,603.142L191.619,605.218L188.325,607.433L187.737,609.924L186.208,609.785L183.737,609.094L182.091,609.37L179.15,608.816L177.856,605.771L175.739,606.325L174.797,608.263L174.327,611.17L172.445,612L169.504,611.17L168.916,608.955L168.093,607.433L166.446,609.094L164.917,610.2L162.211,610.2L160.917,607.848L157.506,605.91L152.33,605.91L146.096,605.633L141.861,605.91L136.098,605.494L129.746,604.94L123.511,604.803L117.042,604.803L114.218,605.771L111.277,607.57L108.455,608.54L103.161,608.816L98.691,609.509L95.75,609.924L95.397,611.17L94.457,612L93.398,611.17L92.81,609.646L91.398,608.678L89.281,607.986L86.575,607.709L82.693,607.848L80.929,606.187L79.282,604.803L77.518,602.034L75.753,600.373L74.106,599.681L72.578,599.819L70.931,598.989L69.872,597.743L67.52,597.051L65.99,597.328L64.579,595.251L62.697,594.006L60.227,593.452L58.58,592.76L57.874,591.376L56.933,589.438L55.992,588.054L55.051,586.254L53.639,585.424L51.757,584.953L49.64,582.461L47.522,580.938L45.522,578.17L42.464,574.294L39.288,571.11L36.7,569.864L35.407,567.788L34.348,565.988L31.995,565.296L30.583,561.835L29.407,559.759L29.525,555.744L27.878,554.221L27.525,551.867L26.819,547.576L25.761,543.699L24.938,539.546z",
  Warwick: "M173.621,510.832l-0.941,2.215l-1.529,-1.107l0.471,-1.938l0.941,-2.215l1.529,-1.938l0.353,1.385l0.941,0.415l0.706,1.385l-1.882,0.554L173.621,510.832zM207.028,505.433h-2.353l-2.47,-0.97l-0.823,-1.8l-0.588,-2.215l0.823,-2.077l2.588,-0.139l0.706,1.661l1.765,0.692l1.176,0.97l0.47,2.631L207.028,505.433zM234.201,500.448l-0.824,2.215l-0.823,0.277l-1.882,-2.216l-2.823,0.139l-3.176,1.523l-1.059,1.661l-2.47,3.461l-0.118,-1.938l-1.646,0.139l-1.294,1.8l-2,1.938l-2.235,0.97l-3.882,0.692l-2.353,-0.692l3.411,-2.631l2,-3.046l3.529,-3.046l2.823,-1.662l2.823,-1.246h4l1.529,-0.415l1.176,-2.492l1.176,2.215l1.059,0.97L234.201,500.448zM331.245,533.067l-4.47,2.354l-5.058,1.661l-2.353,0.277l-2.117,1.384l-2.941,1.938l-2.94,1.938l-4.353,2.769l-4.352,2.354l-2.588,0.139l-2.941,0.554l-2.706,1.8l-1.529,2.657l-3.293,1.938l-3.058,1.385l-4.47,2.076l-3.411,1.385l-3.059,2.491l-3.293,2.077l-3.293,2.63l-3.059,1.661l-2.823,1.522l-3.999,2.354l-2.588,2.076l-4.706,2.077l-2.353,2.353l-1.764,2.492l-2.501,2.141l-17.311,-22.099l-5.019,0.369l-2.695,-7.405h4.117l2.823,-1.246l-0.353,-1.8l-2,-0.692l-1.294,0.416l-0.823,0.83l-1.059,-1.661l-1.529,-0.831l-3.764,0.139l-1.647,1.938l-1.059,0.554l-1.529,-1.107l-0.823,-1.523l-1.765,0.139l-2.94,0.139l-1.412,-1.385l-0.235,-2.354l-0.353,-2.215l-1.529,0.139l-0.706,1.246l0.118,2.076l-0.588,1.661l-1.176,0.97h-3.764l-1.059,1.661l-3.058,1.107h-2.117l-1.412,0.554l-1.882,0.692l-1.529,-0.97l0.47,-1.799l1.176,-1.246l1.647,-0.831l0.471,-1.385l-0.588,-1.107l-1.294,-0.83l0.118,-0.97l1.294,-0.691l1.176,-1.246l0.706,-1.107l0.588,-1.385l0.588,-1.522l-1.764,-0.831l-1.647,-0.415l-1.059,-1.385l1.412,-0.554l1.764,-0.831l1.529,-0.554l0.941,-1.661l1.059,-0.554l1.646,0.831l1.647,0.276l0.941,-0.83l2,-0.555l2.705,-0.138l2.353,1.522l4.94,0.415l3.176,-0.276l1.765,-0.969l3.058,-1.246l1.765,-1.108l1.412,-1.522l2.588,-1.219l3.411,-0.138l2.47,-2.077l2.588,-2.354l4.117,-1.246l4.235,-1.523l4.235,-1.661l1.529,-3.185l2,-1.384l4.234,-1.938l2.47,-0.692l3.294,-0.97l2,-1.661l2,-0.692l5.176,-0.415l1.412,-1.523l2.235,-2.215l3.294,-2.077l2.235,-1.107h3.176l1.294,-2.908l3.059,-2.907l3.176,-2.77l2.47,-1.8l2,-2.216l4.823,-3.6l1.176,-2.077l2.706,-2.631l39.252,48.896l-0.317,0.201l-1.764,2.077l-4.353,0.692L331.245,533.067zM225.025,472.755l-0.823,1.107l-2.118,-0.276l-1.412,1.661l-1.529,0.692l-1.647,-1.661l-0.941,-1.108l-1.647,-1.938l-1.059,-1.938l0.823,-1.523l2.353,-0.415l2.353,-0.276l2.117,-0.692l1.529,1.661l0.47,1.107l0.588,1.385L225.025,472.755zM251.962,465.831l3.059,1.523l2,0.277l2.941,-0.416l3.058,0.139v2.354l-1.411,1.385l-0.471,1.246l-1.765,1.385l-1.764,0.554l-1.882,-0.831l-0.941,-1.523l-0.941,-2.354l-1.647,-1.108l-1.529,-0.969l-1.882,-0.554l-0.941,1.522l0.706,1.523l0.353,1.523l-0.706,1.385l-0.941,0.692l-1.176,-3.462l-0.235,-2.077l-1.412,-1.661l-2,-0.831l-2.117,-1.662l0.235,-1.107l1.294,-0.277l2,0.554l2.47,0.277l3.411,0.277L251.962,465.831zM207.852,473.17l-2.588,0.139l-0.588,-1.938l1.412,-1.385v-2.354l0.235,-2.631l-1.176,-1.385l0.471,-3.047l2.94,0.277l0.235,1.661l-0.823,1.108l0.706,1.246l1.059,1.8l-0.118,1.523l-0.353,2.077L207.852,473.17zM236.318,455.308l-0.706,2.492l-2.941,1.246l-2.47,1.523l-2.117,-0.831l-1.765,-0.692l-1.294,1.108l-1.294,0.969l-2.588,-0.969l-2.117,-0.416l-4,-0.415l-2.117,-0.554l-3.059,-0.277l-1.529,-1.385l-1.411,-0.692l1.294,-0.554l4.823,-0.277l2.823,0.555l4,0.138l5.999,0.416l2.47,-0.692l1.529,-0.416l1.412,-0.276l2.353,0.139l0.588,-0.555l1.294,-2.492l1.529,0.554l0.118,1.246L236.318,455.308zM193.5,466.386l-2.94,0.969l-1.882,-1.246l-0.941,-1.523l1.294,-1.523l0.588,-2.215l0.941,-2.354l0.118,-2.77l-1.529,-0.554l-2,-1.938l2,-0.97h2.47l2.588,0.692l2.588,0.277l0.588,2.077l1.412,0.831l1.529,0.415l0.353,2.77l-1.176,0.415l-1.882,1.385l-1.882,2.216L193.5,466.386z",
  Paget: "M271.842,468.186l0.941,1.246h1.882h2.47l3.646,0.139l3.059,0.139l1.764,1.246l1.882,0.969l1.059,1.662l-1.059,1.385l-2,0.276l-1.412,2.077l-2.587,2.631l0.353,3.185h-1.412l-0.235,-1.661l-1.765,-1.938l-1.882,-2.492l-1.176,-2.354l-1.882,-0.692l-1.059,-1.107l-1.529,-1.938l-1.176,-1.385l0.471,-1.523L271.842,468.186zM427.349,446.694l-2.353,2.631l-1.059,1.246l-1.412,1.523l-0.823,-0.692l0.353,-2.077l1.177,-1.108l-0.471,-0.969l-3.059,-0.554l-1.294,0.415l-1.411,1.801l-0.235,1.522l2,1.385l1.528,2.632l-0.117,2.492l-1.646,2.354l-2.235,1.938l-3.529,3.323l-3.999,2.492l-3.176,0.277l-2.706,1.246l-2.587,2.492l-1.529,1.772l-2.941,3.323l-1.059,4.154l-2.353,4.847l-2.47,3.185l-3.293,3.877l-2.117,4.015l-0.941,2.492l-2.47,1.662l-2.587,1.246l-2,1.661l-2.235,1.523l-1.647,3.323l-3.176,3.876l-2.941,1.523l-4.117,3.738l-4.117,4.292l-4.353,2.769l-5.528,1.107l-3.882,0.277l-4.035,2.567l-39.252,-48.896l2.706,-0.969h2.94l3.411,-0.139l2.706,-0.416l0.941,-1.522l-0.353,-1.523l-1.294,-1.385l-1.176,-2.077l-0.824,-2.631l-0.353,-1.246l1.294,-0.415l1.882,1.246l0.471,2.077l2.353,1.246l2,0.831l1.647,-1.108l1.294,0.277l2.588,-0.139l3.764,-1.523l3.529,-1.385l3.176,-1.522l2.588,-0.416l1.294,0.831l4.235,-0.415l2.235,-1.385l1.882,-2.216l2.235,-4.569l1.529,-4.432l2.117,-1.523l3.411,-0.969l2.353,-2.908l1.647,-2.216l2.941,0.139l1.411,0.969l4.117,0.831l2.706,-2.908l0.588,-3.047l-0.353,-3.323l1.294,-2.354l4.587,-0.969l3.059,-0.416l5.058,-1.107l1.177,-2.077l32.717,-19.126l15.512,26.721l-1.06,0.963l-0.94,2.216l-2.588,2.354L427.349,446.694z",
  Pembroke: "M257.609,431.101l-1.412,2.077l-1.412,-0.554v-1.662l1.059,-0.692l0.941,-1.246l-0.823,-1.523l-0.471,-1.107l0.118,-2.216l2.47,-0.139l-0.706,1.938l0.823,1.246l0.118,1.939L257.609,431.101zM267.607,377.281l0.47,1.662l2.118,1.385h2.235l2.235,-0.97l1.412,0.831l0.588,1.801l2.587,0.831l1.765,-0.831l1.882,-0.139l1.647,1.523l2.117,0.831l3.059,-1.108l4,0.555l3.764,0.831l6.47,-0.555l5.999,1.386l3.411,0.415l9.175,0.139l2.47,-1.246l1.882,-1.386l3.764,0.277l2.117,-0.277l2.47,-0.692h3.176l3.058,-0.97l2.47,0.555l2.823,0.415l3.411,-1.385l4.706,-0.139h3.411l1.882,-1.801l2.235,-0.831l4.47,-0.139l14.409,52.812l-2.058,-0.404l-4.823,-0.138l-4.235,0.692l-2.117,2.077l-4.47,1.246l-2.23,0.375l-6.89,-22.363l-26.075,3.463l5.435,24.757l-0.824,2.354l-1.176,1.523l-1.765,-1.107l-2,-1.801l-2.47,-0.139l-4.117,1.662l-2,1.246l-6.94,0.277l-3.764,0.276l-1.529,-2.77l0.353,-1.246l1.529,-0.97l0.471,-1.385l-1.176,-1.661l-2.941,0.138l-2,0.831l-0.941,2.077l-2.235,0.555l-1.293,-1.523l-1.294,-1.801l-2.353,-1.107l-3.293,-2.216l-2,-1.523l-2.353,-0.554l-2.118,0.554l-0.588,2.354l-2.235,1.107l-3.882,-0.139l-2.235,1.247l-2.118,0.83l-2.823,0.692h-2.117l-2.117,-1.522l-1.412,-1.939l-0.588,-3.185l-0.117,-4.709l-1.294,-1.246l-0.235,-2.216l1.764,-0.97l2.588,0.416l1.882,-0.555l1.294,-1.246l0.588,-1.246l-0.941,-1.247l-0.235,-0.969h1.529l1.765,1.661l0.588,1.247l0.353,2.354l2.353,1.8l0.941,-0.692l1.176,-0.831l1.529,1.662l-0.235,1.662l-0.706,0.969l0.588,1.801l2,-0.139l2,-0.554l0.823,-1.938l-0.118,-2.354l-0.941,-0.97l-1.646,-0.831l-0.941,-1.302l-2,-0.831l-0.118,-2.492l-0.706,-1.939l-1.647,-1.8l-3.293,-0.277l-1.882,0.692l-2.47,1.107l-1.882,0.416l-1.294,-1.108l-0.588,-2.631l-1.176,-0.831l0.471,-1.801l0.118,-2.77l-1.176,-2.077l-1.765,-0.555l-1.529,-1.661l0.118,-0.97l2,-0.555h3.059l1.882,1.247l1.765,1.385l2.235,1.385l2.823,-0.276h3.059l1.529,-1.108l-0.118,-2.354l-2.587,-1.385l-2.235,-0.416l-1.764,-1.523l-1.882,-2.216l-2.706,-1.662l-2.94,0.277l-3.294,0.277l-0.823,2.216l-1.764,2.493l-1.882,0.276l0.235,-1.662l-0.118,-2.908l-1.412,-0.97l-1.882,2.493l-2.353,2.908l-2.47,2.493l-2,2.632l-2.47,1.107l-2.941,0.97l-2.117,-0.415l2.235,-1.386l1.294,-1.107l0.471,-1.523l0.941,-2.216l-0.706,-1.523l-0.941,-2.493l-2.353,-1.801l-0.47,-1.938l-1.294,-2.078l-1.412,0.831l-1.529,1.247h-2l-1.294,-0.831l-1.765,-0.416l-0.706,-2.493l0.235,-1.107l0.823,-2.217l0.706,-1.523l1.176,-1.107l2.941,-0.416l1.294,-0.831l-0.471,-1.801l-2.588,-0.276l-1.646,-0.831l1.529,-1.801l1.882,-1.247l2.706,0.831l2,0.693l3.176,-1.108h4.705l6.705,-0.692l5.058,-0.416l3.529,0.692L267.607,377.281z",
  Hamilton: "M361.363,434.91L358.653,435.366L354.771,436.197L349.713,437.582L344.419,437.582L341.361,438.274L337.009,438.136L333.833,440.767L328.398,416.01L354.473,412.547L0,NaNz",
  "St. George's": "M709.542,90.674L705.66,89.288L701.425,89.288L697.426,89.842L693.896,91.089L691.897,92.476L689.78,92.476L687.31,93.584L685.78,96.773L683.075,98.575L682.535,98.855L677.692,80.974L702.63,73.21z",
  Devonshire: "M486.634,396.256L481.105,395.702L477.341,396.948L476.399,399.164L476.282,403.734L476.518,408.721L475.224,408.998L473.342,408.167L472.283,407.059L470.4,405.535L469.46,407.89L469.225,409.136L470.989,410.798L473.106,411.768L472.165,413.706L470.754,412.903L468.989,414.149L466.519,414.98L465.813,418.305L464.049,419.412L461.226,420.521L456.873,421.074L454.05,422.598L451.345,423.429L449.228,424.398L446.992,427.307L444.993,430.353L442.405,433.261L438.405,436.724L435.817,438.801L434.289,440.191L418.777,413.471L386.061,432.597L383.473,431.488L381.296,431.062L366.887,378.25L371.709,378.112L374.886,376.588L378.179,376.173L381.708,375.619L383.59,373.541L386.295,373.402L390.177,372.433L392.883,372.571L396.765,371.602L398.765,369.247L401.353,367.585L404.764,367.585L407.939,367.17L410.292,366.2L413.115,364.953L415.35,363.929L418.762,362.543L423.113,361.158L426.172,360.188L430.524,357.557L433.348,355.341L434.994,352.709L437.229,351.185L440.053,350.077L443.346,349.522L444.522,347.307L445.934,345.09L448.992,344.675L450.992,343.289L0,NaNz",
  Smiths: "M593.358,317.294L592.5,317.496L588.972,320.267L585.561,323.176L582.502,325.254L581.325,327.886L581.208,329.631L579.326,331.154L576.62,332.263L575.209,335.449L573.562,338.773L572.856,343.206L571.092,344.453L568.15,348.886L564.151,348.886L559.682,349.439L556.271,350.687L553.447,351.102L548.859,351.795L547.801,354.149L547.448,358.166L545.331,360.105L542.743,360.383L542.037,358.027L540.037,357.059L537.567,358.305L532.979,360.244L528.862,362.737L528.274,366.615L530.039,367.031L532.156,365.508L533.921,363.152L536.038,361.768L539.685,360.937L541.331,361.49L540.861,362.46L538.038,365.784L536.273,367.446L534.273,368.832L531.686,370.355L530.274,370.909L528.745,372.156L525.099,373.68L520.981,374.233L518.394,375.757L515.57,377.004L512.63,377.974L509.336,378.805L508.042,380.605L505.454,384.067L502.043,385.314L498.867,388.223L496.161,389.746L493.809,392.517L492.75,395.01L491.221,397.226L489.927,398.472L488.751,399.441L488.28,397.364L486.634,396.256L450.992,343.289L454.991,341.488L456.168,338.995L457.932,337.194L461.932,336.363L464.284,334.424L466.401,330.406L467.343,326.528L469.931,324.865L472.753,324.45L476.518,320.986L485.198,333.908L496.373,326.705L493.691,320.986L496.044,320.986L496.985,320.571L498.279,318.771L499.338,316.554L501.808,316.276L503.689,317.523L506.631,318.909L510.042,319.74L512.512,321.264L515.453,322.095L518.276,320.71L521.569,319.74L524.746,319.74L528.51,319.463L532.979,319.186L542.272,319.047L546.154,318.909L548.036,319.463L549.448,320.849L551.447,321.68L553.212,322.926L556.623,324.865L558.623,325.974L560.976,326.112L564.975,325.559L566.387,324.034L568.033,321.264L569.563,319.602L569.092,317.385L567.798,315.03L566.269,313.367L565.445,311.566L565.445,307.826L566.269,306.441L567.798,304.363L568.386,301.176L568.504,297.99L569.915,296.328z"
};

// src/hooks/mouseTrack.ts
import { useState, useEffect } from "react";
var useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const updateMousePosition = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return position;
};
var mouseTrack_default = useMousePosition;

// src/Bermuda.tsx
import { useId } from "react";
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
var Bermuda = ({
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
    return /* @__PURE__ */ React.createElement(
      BermudaSingle,
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
    return /* @__PURE__ */ React.createElement(
      BermudaMultiple,
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
var BermudaSingle = ({
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
  const instanceId = useId().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = useState2(null);
  const [selectedState, setSelectedState] = useState2(null);
  const [viewBox, setViewBox] = useState2("0 0 100 100");
  const strokeProps = useMemo(() => getStrokeProperties(borderStyle), [borderStyle]);
  useEffect2(() => {
    const svg = document.getElementById(`svg2-${instanceId}`);
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, [instanceId]);
  const mapStyle = useMemo(
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
  useEffect2(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  useEffect2(() => {
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((code, index) => /* @__PURE__ */ React.createElement(
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
  )))), hints && stateHovered && /* @__PURE__ */ React.createElement("div", { style: hintStyle }, stateHovered));
};
var BermudaMultiple = ({
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
  const instanceId = useId().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [selectedStates, setSelectedStates] = useState2([]);
  const [stateHovered, setStateHovered] = useState2(null);
  const [viewBox, setViewBox] = useState2("0 0 100 100");
  const strokeProps = useMemo(() => getStrokeProperties(borderStyle), [borderStyle]);
  useEffect2(() => {
    const svg = document.getElementById(`svg2-${instanceId}`);
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, [instanceId]);
  const mapStyle = useMemo(
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
  useEffect2(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  useEffect2(() => {
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((code, index) => /* @__PURE__ */ React.createElement(
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
  )))), hints && stateHovered && /* @__PURE__ */ React.createElement("div", { style: hintStyle }, stateHovered));
};
var Bermuda_default = Bermuda;

// src/index.ts
var src_default = Bermuda_default;
export {
  src_default as default
};
