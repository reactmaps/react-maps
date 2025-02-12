// src/Tonga.tsx
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
var stateCode = ["'Eua", "Ha'apai", "Niuas", "Vava'u", "Tongatapu"];
var drawPath = {
  "'Eua": "M416.49,1929.26L415.32,1926.62L412.86,1930.1L410.49,1935.2L409.75,1937.32L406.67,1942.95L404.65,1945.57L398.3,1948.36L396.66,1952.35L397,1957L398.87,1960.71L395.77,1962.58L394.51,1963.08L394.51,1965.43L403.67,1972.4L407.73,1976.59L409.75,1981.8L414.73,1984.79L416.75,1981.33L416.49,1959.85L418.31,1947.19L418.48,1942L416.49,1929.26z",
  "Ha'apai": "M458.19,1576.77L459.26,1572.07L458.72,1569.88L453.71,1571.24L451.42,1571.6L449.55,1573.01L449.01,1575.39L452.51,1578.52L456.59,1579.38L458.19,1576.77zM606.23,1427.25L607.84,1422.22L608.27,1415.54L610.8,1409.58L609.54,1408.76L606.05,1407.38L604.48,1407.04L603.2,1412.23L600.87,1416.57L597.5,1419.63L593.18,1421.18L594.21,1423.55L595.71,1425.37L597.67,1426.86L600.11,1428.13L606.23,1427.25zM374.02,1414.33L374.6,1404.15L372.26,1394.88L367.17,1390.88L363.23,1390.66L360.36,1391.1L358.43,1393.86L357.27,1400.31L357.54,1403.68L361.43,1414.22L361.32,1415.54L361.68,1416.4L361.43,1416.54L365.11,1418.08L366.78,1419.22L368.37,1421.18L370.35,1418.64L370.35,1421.18L374.02,1414.33zM621.71,1403.46L624.07,1399.15L625.1,1395.04L626.97,1390.93L627.93,1386.57L626.25,1381.61L622.25,1385.75L619.63,1390.41L616.44,1394.85L610.81,1397.99L611.97,1401.75L616.64,1403.95L621.71,1403.46zM382.94,1381.66L384.82,1374.41L380.94,1370.85L378.13,1373.58L377.39,1379.32L378.18,1382.85L382.94,1381.66zM630.54,1368.59L629.27,1365.09L625.16,1363.27L622.95,1361.78L621.36,1354.36L619.72,1351.52L614.89,1350.45L616.36,1356.68L620.58,1365.01L624.07,1370.02L628.86,1371.13L630.54,1368.59z",
  Niuas: "M783.83,130.17L783.55,129.01L782.19,128.98L781.97,130.87L783.09,131.85L783.83,130.17zM795.66,133.79L799.09,128.06L799.28,123.53L797.68,123.45L793.49,126.07L786.81,129.33L783.49,132.33L783.33,134.82L786,138.3L790.98,138.36L795.66,133.79zM799.83,96.63L798.35,95.39L799.77,99.33L799.83,96.63zM187.81,0L177.46,2.16L171.21,7.49L170.28,14.18L175.82,20.55L185.32,21.46L192.13,13.91L193.78,4.58L187.81,0z",
  "Vava'u": "M504.02,1088.17L507.28,1085.62L508.37,1081.75L506.13,1077.64L501.1,1075.69L497.39,1078.16L496.47,1083.04L499.76,1088.47L504.02,1088.17zM735.77,1017.27L735.41,1013.62L731.39,1010.72L729.38,1008.22L727.15,1006.06L722.33,1004.2L718.03,1003.81L712.2,1004.2L707.09,1005.43L704.9,1007.76L700.28,1016.85L691.31,1021.62L685.27,1026.64L689.44,1036.59L691.31,1036.48L692.75,1036.59L693.68,1036.2L694,1034.34L698.79,1036.53L700.23,1033.3L701.28,1028.28L704.9,1025.13L706.35,1026.78L708.29,1030.59L708.03,1034.53L702.92,1036.59L705.23,1044.54L707.44,1048.38L711.42,1050.62L711.41,1044.87L712.89,1039.11L715.86,1035.6L720.34,1036.59L722.06,1033.05L724.69,1029.74L721.93,1026.72L721.62,1024.2L723.42,1022.17L726.89,1020.53L732.99,1027.65L735.48,1024.25L735.77,1017.27z",
  Tongatapu: "M3.08,2289.04L4.1,2289.04L5.75,2288.11L6.94,2286.68L4.99,2284.94L2.03,2283.9L0.51,2284.24L0.17,2285.95L1.27,2287.78L3.08,2289.04zM288.63,1870.79L285.17,1869.34L280.52,1864.39L282.68,1859.94L287.73,1855.57L291.7,1850.7L283.29,1853.65L275.9,1859.94L272.86,1868.26L277.45,1877.53L285.33,1888.67L288.35,1890.4L292.34,1891.12L296.86,1892.9L304.77,1897.58L307.17,1895.02L322.37,1902.65L326.57,1906.72L331.69,1916.56L334.92,1919.4L341.81,1920.99L345.31,1920.37L348.9,1919.2L351.75,1916.86L352.92,1912.79L352.29,1909.2L351.2,1905.35L350.68,1901.7L351.83,1898.75L369.98,1885.3L372.73,1882.29L373.04,1876.95L371.85,1874.27L368.37,1871.68L364.59,1870.85L360.3,1871.27L356.19,1872.46L352.92,1874.02L348.31,1878.59L346.45,1883.29L344.57,1886.89L339.83,1888.06L337.24,1887.22L331.59,1884.05L327.66,1883.38L324.32,1884.55L321.13,1886.89L317.93,1888.31L314.58,1886.97L313.26,1883.46L315.47,1880.62L320.23,1877.53L319.44,1873.77L317.41,1871.63L314.9,1870.1L312.51,1868.18L309.56,1867.34L291.47,1870.9L288.63,1870.79z"
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

// src/Tonga.tsx
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
var Tonga = ({
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
      TongaSingle,
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
      TongaMultiple,
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
var TongaSingle = ({
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
var TongaMultiple = ({
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
var Tonga_default = Tonga;

// src/index.ts
var src_default = Tonga_default;
export {
  src_default as default
};
