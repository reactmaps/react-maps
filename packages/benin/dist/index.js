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

// src/Benin.tsx
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
var stateCode = ["Donga", "Atakora", "Mono", "Plateau", "Zou", "Ou\xE9m\xE9", "Kouffo", "Littoral", "Atlantique", "Collines", "Alibori", "Borgou"];
var drawPath = {
  Donga: "M346.29,627.13L272.52,624.78L262.77,628.46L253.65,633.74L245.1,640.74L234.07,646.27L221.01,649.46L204.6,647.64L193.55,645.08L180.93,643.57L169.96,643.23L155.25,646.16L151.98,647.38L152.27,666.81L152.75,695.61L153.07,716.09L155.12,728.39L154.74,731.6L154.12,734.22L154.2,739.51L153.88,742.2L152.27,745.54L147.65,752.68L146.58,756.1L147.41,761.46L150.04,767.9L153.88,771.84L158.34,769.66L161.32,777.13L163.09,803.81L166.85,814.31L171.77,821.93L173.1,823.99L193.86,845.85L210,862.88L215.34,872.31L217.41,878.65L218.8,885.82L219.23,918.74L219.61,947.44L219.93,971.82L220.37,1007L225.07,1007.33L239.02,1007.84L243.94,1007.39L245.3,1007.43L248.18,1007.15L270.74,1001.07L275.03,1000.34L278.17,1000.1L279.78,1000.5L282.56,1001.66L284.77,1003.07L286.75,1004.7L293.77,1012.3L294.82,1013.06L296.02,1013.75L297.39,1014.3L298.84,1014.71L300.45,1014.94L308.36,1014.85L309.89,1015.1L311.14,1015.59L312.27,1016.34L313.19,1017.22L317.06,1022.25L318.97,1024.07L321.22,1025.57L323.68,1026.86L331.29,1029.16L332.42,1029.79L335.41,1032.26L336.66,1032.79L338.07,1033.05L344.39,1033.03L347.5,1033.58L354.68,1036.21L356.25,1036.54L357.82,1036.68L363.95,1036.46L368.38,1035.19L371.49,1033.7L373.74,1032.26L377.42,1029.45L379.43,1026.31L377.98,1024.8L376.1,1018.46L379.59,995.93L375.34,972.46L373.46,968.86L371.04,965.71L372.98,957.57L375.18,948.3L373.65,946.71L372.85,946.22L371.24,945.54L345.28,938.24L340.08,935.74L337.71,934.21L335.65,932.54L333.88,930.59L332.3,928.49L331.33,926.62L330.49,924.44L329.32,919.03L328.96,914.76L329.52,901.76L330.04,898.81L330.04,898.76L331.37,889.77L333,883.44L335.17,878.03L335.53,876.54L335.61,874.8L335.25,872.96L334.12,870.92L333.28,869.92L332.42,869.23L324.77,865.58L322.79,864.27L321.54,863.17L319.93,861.39L318.39,859.35L317.1,857.08L316.58,855.71L315.45,850.08L314.68,841.75L314.81,826.74L316.05,817.88L319.85,806.5L322.27,804.68L324.2,803.54L325.45,803.09L329.68,802.35L335.78,801.94L345.56,802.19L347.01,801.9L348.35,801.47L349.48,800.84L350.49,800.09L352.02,798.62L353.11,797.12L354.07,793.65L364.32,726.02L364.28,722.28L361.94,717.59L357.62,713.73L352.3,708.04L348.88,702.57L348.35,701.38L343.35,686.75L343.07,683.32L343.27,678.8L345.48,664.9L347.5,657.42L347.5,652.28L345.2,639.37L347.41,635.38L347.59,635.25L347.95,634.91L348.27,633.7L348.52,632.47L346.29,627.13z",
  Atakora: "M208.95,258.4L209.41,256.65L210,252.92L210.53,251.17L186.1,249.19L181.08,248.15L176.84,245.74L175.33,249.55L172.68,251.02L172.57,251.05L169.43,252.09L166.04,254.61L163.9,257.77L163.57,260L166.04,265.65L161.77,268.3L155.89,270.89L150.71,274.28L148.46,279.3L149.96,283.84L152.48,287.47L152.99,290.87L148.46,294.75L146.66,292.57L144.81,291.83L142.98,292.57L141.21,294.75L139.57,291.89L136.54,288.42L133.64,286.97L132.35,290.15L132.91,292.25L135.46,294.79L136.05,297.39L135.65,299.45L132.35,305.6L123.73,301.47L119.51,300.26L114.6,300.01L112.34,300.53L111,301.36L109.63,302.03L107.35,302L107.7,300.64L105.74,297.62L103.24,295.62L100.53,299.78L97.84,302.36L96.56,305.68L101.42,313.71L102.44,322.74L103.78,327.3L101.09,326.36L95.91,323.88L93.15,323.85L91.99,325.2L90.22,330.03L88.72,331.09L80.15,333.04L78.81,333.62L79.08,337.62L80.04,337.26L81.68,335.77L84.12,336.34L84.42,337.42L83.96,340.71L84.12,341.93L84.88,342.45L87.35,343.59L87.83,343.57L88.37,346.72L88.42,349.71L88.85,352.59L90.49,355.4L93.44,358.46L93.15,362.71L92.29,363.91L90.38,362.12L88.53,359.49L87.83,358.19L85.2,357.27L77.2,356.39L76.18,356.67L73.36,358.11L71.72,358.19L71.26,357.58L69.89,354.99L69.14,354.42L67.75,353.85L66.43,352.61L64.69,351.36L58.99,350.45L57.78,350.02L56.63,350.49L54.91,352.84L53.38,356.03L51.18,359.39L50.27,360.01L49.97,362.68L50.11,365.65L51.02,368.06L53.09,369.04L54.59,370.46L54.83,373.57L54.19,376.66L53.09,378.07L48.44,378.03L44.95,377.55L37.03,373.15L30.37,389.44L29.62,394.7L30.24,397.55L32.41,402.92L32.79,405.79L28.73,413.59L28.22,416.42L27.82,422.46L27.01,425.18L23.66,430.04L9.54,443.58L5.8,452.42L7.87,476.24L7.68,486.57L3.87,501.29L0.25,528.5L0.46,534.57L2.55,538.55L22.21,551.74L46.91,568.28L61.87,578.3L83.99,593.11L121.2,618.02L148.62,636.38L151.95,645.35L151.98,647.38L155.25,646.16L169.96,643.23L180.93,643.57L193.55,645.08L204.6,647.64L221.01,649.46L234.07,646.27L245.1,640.74L253.65,633.74L262.77,628.46L272.52,624.78L346.29,627.13L345.16,622.2L345.08,621.16L345.52,619.62L346.37,617.67L348.39,615.2L349.8,613.82L351.21,612.9L353.67,611.78L356.29,611L370.48,610.53L374.67,609.63L384.99,605.92L387.29,604.59L389.26,602.95L391.05,601.03L391.93,599.84L392.46,596.62L392.7,591.34L390.67,572.52L386.96,560.39L386.12,556.24L382.17,546.09L380.96,544.09L379.35,542L372.69,535.73L371.2,533.68L370.24,531.67L370,530.95L369.75,529.6L369.63,525.57L370.16,521.79L371.85,517.53L374.99,511.85L381.53,503.26L382.25,502.73L383.1,501.95L388.66,498.73L391.57,497.09L390.27,412.91L390.75,408.56L391.69,405.32L394.35,400.7L399.5,394.75L414.94,381.79L406.48,373.6L403.45,371.47L402.77,371.26L401.56,371.14L400.27,370.57L398.98,369.81L396.68,368.71L393.46,368.1L390.99,368.02L378.18,349.6L327.63,258.33L326.42,256.92L325.21,258.17L318.09,261.58L308.91,260.87L297.93,256.59L291.19,253.41L288.02,252.94L285.53,254.61L281.01,253.24L276.05,254.27L265.84,258.4L260.93,258.76L249.44,257.93L245.38,259.22L240.42,261.63L228.42,264.18L223.99,266.55L218.91,268.3L213.46,258.13L208.95,258.4z",
  Mono: "M223.61,1629.15L292.42,1613.23L319.22,1610.17L319.22,1610.15L319.37,1607.9L318.48,1603.2L316.26,1596.38L312.27,1590.58L311.46,1582.51L312.79,1577.05L318.48,1562.3L319.93,1558.55L320.66,1555.43L320.94,1550.06L320.05,1535.27L319.77,1528.18L320.09,1525.74L320.9,1523.53L322.87,1520.33L324.2,1518.62L326.34,1516.47L326.94,1514.71L327.42,1511.88L327.14,1507.12L328.55,1500.36L312.71,1492.39L304.7,1490.11L296.02,1489.76L281.87,1492.85L265.47,1498.9L241.04,1504.68L235.36,1504.58L230.97,1504.03L216.78,1497.21L215.69,1496.71L211.82,1501.91L209.67,1507.78L211.34,1510.72L214.7,1513.45L217.54,1518.69L217.6,1520.72L217.14,1522.91L216.98,1525.33L217.81,1528L219.37,1530.15L221.41,1532.22L223.58,1533.97L225.62,1535.18L228.07,1535.47L230.62,1535.22L232.5,1535.89L232.85,1538.88L233.52,1540.7L237.84,1544.27L239.48,1546.5L239.8,1549.13L239.16,1554.74L239.72,1557.02L241.44,1558.43L247.02,1561.32L249.25,1562.99L255.94,1573.78L260.98,1593.41L265.87,1612.59L260.47,1612.91L227.1,1620.84L221.73,1623.7L223.61,1629.15z",
  Plateau: "M508.85,1251.07L508.76,1251.07L455.3,1250.76L451.83,1250.93L447.91,1261.82L447.31,1269.24L449.08,1276.06L448.48,1278.95L444.73,1280.15L442.15,1281.87L434.01,1293.49L430.94,1299.21L431.62,1305.49L433.48,1312L434.89,1316.9L434.89,1328.6L435.79,1330.95L437.24,1332.9L438.42,1335.41L438.45,1339.5L439.3,1342.59L443.36,1358.07L447.31,1366.73L459.61,1375.14L461.1,1376.85L461.22,1378.31L460.9,1382.72L466.67,1411.87L467.92,1423.52L467.92,1423.54L467.84,1423.68L467.64,1424.07L467.03,1424.84L465.9,1425.41L464.37,1425.68L462.47,1425.72L457.51,1425.35L457.07,1438.67L459.57,1451.93L471.98,1482.15L477.34,1512.82L482.35,1521.02L494.97,1531.69L498.96,1535.97L509.08,1553.12L509.15,1553.24L513.96,1539.19L514.5,1533.66L512.27,1522.63L512.35,1517.27L515.33,1511.65L520.03,1507.45L523.23,1505.34L524.68,1502.38L523.82,1490.32L523.31,1487.66L521.78,1486.48L518.56,1486.17L515.9,1485.38L513.7,1483.79L511.71,1481.13L510.39,1475.97L511.09,1470.31L513.86,1459.34L512.57,1448.37L509.05,1438.33L508.19,1428.84L514.93,1419.43L517.97,1417.98L521.29,1416.99L523.95,1415.57L524.97,1412.74L523.47,1410.27L516.65,1404.65L514.42,1401.84L513.43,1398.43L513.7,1396.62L514.82,1394.87L517.21,1389.91L519.28,1387.2L520.14,1384.73L520.41,1381.1L514.96,1316.68L515.6,1313.78L517.59,1312.63L520.3,1312.66L525.91,1313.78L526.74,1313.25L526.93,1311.78L527.55,1309.43L528.25,1298.48L522.5,1288.88L514.82,1279.69L509.61,1269.94L508.25,1259.66L508.85,1251.07z",
  Zou: "M339.72,1283.8L327.42,1281.73L317.58,1274.94L307.88,1266.3L293.69,1260.36L282.08,1257.92L229.54,1260.99L224.44,1260.53L224.54,1283.09L232.94,1284.81L238.46,1291.49L240.43,1294.72L254.06,1323.79L255.55,1330.52L256.47,1332.55L257.96,1334.72L258.45,1336.51L258.85,1341.47L259.86,1343.55L261.92,1346.07L265.95,1349.09L275.99,1362.08L277.24,1364.98L278.21,1366.61L281.51,1368.7L285.5,1375.67L288.88,1387.89L291.35,1399.29L294.57,1404.76L296.35,1406.06L297.84,1406.72L301.98,1409.89L307.44,1418.26L311.66,1424.26L315.85,1426.45L319.37,1431.76L320.58,1436.39L321.14,1437.57L322.55,1438.89L331.41,1445.49L333.68,1446.42L335.37,1446.61L338.11,1445.49L342.42,1443.1L344.23,1444.68L422.41,1444.35L422.85,1439.05L425.71,1433.96L429.94,1428.19L434.13,1425.98L441.39,1425.25L457.51,1425.35L462.47,1425.72L464.37,1425.68L465.9,1425.41L467.03,1424.84L467.64,1424.07L467.84,1423.68L467.92,1423.54L467.92,1423.52L466.67,1411.87L460.9,1382.72L461.22,1378.31L461.1,1376.85L459.61,1375.14L447.31,1366.73L443.36,1358.07L439.3,1342.59L438.45,1339.5L438.42,1335.41L437.24,1332.9L435.79,1330.95L434.89,1328.6L434.89,1316.9L433.48,1312L386.88,1290.63L368.55,1284.82L353.43,1283.46L339.72,1283.8z",
  Ou\u00E9m\u00E9: "M457.51,1425.35L441.39,1425.25L434.13,1425.98L429.94,1428.19L425.71,1433.96L422.85,1439.05L422.41,1444.35L431.31,1458.89L433.88,1469.55L434.7,1484.63L435.75,1512.7L436.03,1520.53L437.89,1544.35L440.74,1549.47L442.19,1549.81L443.73,1550.4L444.85,1551.01L447.91,1553.18L449.04,1565.09L447.99,1571.49L443.89,1581.6L443.04,1587L445.01,1588.68L446.28,1588.88L447.56,1589.67L448.14,1594.12L505.12,1588.79L505.26,1588.78L505.37,1572.85L507.36,1561.15L508.27,1555.8L509.15,1553.24L509.08,1553.12L498.96,1535.97L494.97,1531.69L482.35,1521.02L477.34,1512.82L471.98,1482.15L459.57,1451.93L457.07,1438.67L457.51,1425.35z",
  Kouffo: "M335.37,1446.61L333.68,1446.42L331.41,1445.49L322.55,1438.89L321.14,1437.57L320.58,1436.39L319.37,1431.76L315.85,1426.45L311.66,1424.26L307.44,1418.26L301.98,1409.89L297.84,1406.72L296.35,1406.06L294.57,1404.76L291.35,1399.29L288.88,1387.89L285.5,1375.67L281.51,1368.7L278.21,1366.61L277.24,1364.98L275.99,1362.08L265.95,1349.09L261.92,1346.07L259.86,1343.55L258.85,1341.47L258.45,1336.51L257.96,1334.72L256.47,1332.55L255.55,1330.52L254.06,1323.79L240.43,1294.72L238.46,1291.49L232.94,1284.81L224.54,1283.09L224.66,1308.84L224.82,1347.95L224.98,1385.96L225.17,1424.4L220.44,1425.81L200.81,1425.68L205.86,1444.27L208.79,1448.61L209.2,1448.92L213.06,1451.82L215.39,1454.64L215.93,1458.28L213.97,1469.27L214.13,1473.74L215.26,1478.24L217.25,1483.6L218.78,1489.91L217.73,1493.96L215.69,1496.71L216.78,1497.21L230.97,1504.03L235.36,1504.58L241.04,1504.68L265.47,1498.9L281.87,1492.85L296.02,1489.76L304.7,1490.11L312.71,1492.39L328.55,1500.36L332.02,1493.24L331.77,1488.1L331.29,1484.86L331.65,1482.62L332.59,1480L336.34,1473.45L338.47,1470.95L339.64,1468.65L343.75,1458.12L345.36,1455.06L346.61,1451.07L344.23,1444.68L342.42,1443.1L338.11,1445.49L335.37,1446.61z",
  Littoral: "M448.14,1594.12L447.56,1589.67L446.28,1588.88L445.01,1588.68L443.04,1587L443.89,1581.6L431.63,1583.12L426.11,1584.66L421.52,1587.64L418.28,1590.74L415.9,1597.13L448.14,1594.12z",
  Atlantique: "M443.89,1581.6L447.99,1571.49L449.04,1565.09L447.91,1553.18L444.85,1551.01L443.73,1550.4L442.19,1549.81L440.74,1549.47L437.89,1544.35L436.03,1520.53L435.75,1512.7L434.7,1484.63L433.88,1469.55L431.31,1458.89L422.41,1444.35L344.23,1444.68L346.61,1451.07L345.36,1455.06L343.75,1458.12L339.64,1468.65L338.47,1470.95L336.34,1473.45L332.59,1480L331.65,1482.62L331.29,1484.86L331.77,1488.1L332.02,1493.24L328.55,1500.36L327.14,1507.12L327.42,1511.88L326.94,1514.71L326.34,1516.47L324.2,1518.62L322.87,1520.33L320.9,1523.53L320.09,1525.74L319.77,1528.18L320.05,1535.27L320.94,1550.06L320.66,1555.43L319.93,1558.55L318.48,1562.3L312.79,1577.05L311.46,1582.51L312.27,1590.58L316.26,1596.38L318.48,1603.2L319.37,1607.9L319.22,1610.15L319.22,1610.17L381.34,1603.08L402.16,1598.42L415.9,1597.13L418.28,1590.74L421.52,1587.64L426.11,1584.66L431.63,1583.12L443.89,1581.6z",
  Collines: "M510.23,959.01L510.13,959.01L372.98,957.57L371.04,965.71L373.46,968.86L375.34,972.46L379.59,995.93L376.1,1018.46L377.98,1024.8L379.43,1026.31L377.42,1029.45L373.74,1032.26L371.49,1033.7L368.38,1035.19L363.95,1036.46L357.82,1036.68L356.25,1036.54L354.68,1036.21L347.5,1033.58L344.39,1033.03L338.07,1033.05L336.66,1032.79L335.41,1032.26L332.42,1029.79L331.29,1029.16L323.68,1026.86L321.22,1025.57L318.97,1024.07L317.06,1022.25L313.19,1017.22L312.27,1016.34L311.14,1015.59L309.89,1015.1L308.36,1014.85L300.45,1014.94L298.84,1014.71L297.39,1014.3L296.02,1013.75L294.82,1013.06L293.77,1012.3L286.75,1004.7L284.77,1003.07L282.56,1001.66L279.78,1000.5L278.17,1000.1L275.03,1000.34L270.74,1001.07L248.18,1007.15L245.3,1007.43L243.94,1007.39L239.02,1007.84L225.07,1007.33L220.37,1007L220.47,1014.84L220.84,1017.94L222.16,1020.88L228.87,1029.42L229.97,1031.99L229.01,1036.63L220.47,1050.8L220.07,1053.02L220.07,1057.58L218.78,1063.99L219.52,1065.08L219.53,1065.09L221.06,1065.6L222.37,1068.02L225.14,1090.55L224.68,1120.63L224.04,1162.43L224.2,1203.95L224.42,1255.92L224.44,1260.53L229.54,1260.99L282.08,1257.92L293.69,1260.36L307.88,1266.3L317.58,1274.94L327.42,1281.73L339.72,1283.8L353.43,1283.46L368.55,1284.82L386.88,1290.63L433.48,1312L431.62,1305.49L430.94,1299.21L434.01,1293.49L442.15,1281.87L444.73,1280.15L448.48,1278.95L449.08,1276.06L447.31,1269.24L447.91,1261.82L451.83,1250.93L455.3,1250.76L508.76,1251.07L508.85,1251.07L511.33,1215.73L510.61,1211.97L508.3,1208.2L502.07,1201.22L499.14,1193.7L497.05,1190.49L496.91,1189.48L496.75,1188.31L497.34,1186.3L500,1181.3L500.92,1178.97L501.91,1162.43L505.18,1145.81L505.75,1130.12L506.45,1125.32L508.46,1120.88L511.17,1116.5L513.21,1111.68L513.35,1105.92L511.57,1100.33L506.47,1089.41L504.46,1083.61L503.52,1077.36L503.84,1072.33L505.83,1061.46L505.83,1059.02L505.18,1054.17L505.24,1051.84L506.61,1048.56L511.79,1042.69L513.86,1039.59L515.9,1030.72L515.29,1023.06L510.23,959.01z",
  Alibori: "M541.75,0L538.67,4.04L532.49,4.26L529.83,4.8L524.57,4.6L522.07,5.1L519.2,7L515.04,12L512.65,13.95L509.94,14.62L507.2,12.77L504.38,13.87L502.98,15.43L502.23,17.34L501.72,19.43L500.86,21.49L497.24,27.27L494.87,28.64L485.72,26.18L483.92,26.52L480.8,28.85L479.22,29.63L477.93,29.49L475.7,28.17L474.68,27.98L465.45,30.51L464.27,31.28L461.9,33.56L460.43,34.45L458.47,34.59L457.66,33.39L457.26,31.94L456.53,31.33L453.47,31.22L451.03,30.85L449.2,31.61L447.99,34.89L446.52,37.67L445.2,37.23L443.73,35.69L441.79,35.23L440.45,36.22L438.3,39.21L437.68,39.89L434.35,40.22L428.39,39.97L424.82,40.43L418.54,43.34L416.26,47.96L416.47,54L419.02,68.8L427.78,93.71L429.23,96.35L431.08,98.5L433.76,100.71L436.53,101.97L439,102.56L440.69,103.81L441.23,107.12L441.07,111.68L439.16,112.09L436.45,111.09L433.84,111.33L432.05,113.24L430,117.08L428.26,119.07L426,119.72L423.56,119.37L421.36,119.95L419.88,123.37L420.23,126.28L423.27,130.87L423.78,133.59L414.4,159.25L410.75,166.15L400.77,177.38L397.97,184.9L397.81,189.53L398.03,192.44L397.09,194.96L393.49,198.47L379.58,206.29L360.6,221.89L326.42,256.92L327.63,258.33L378.18,349.6L390.99,368.02L393.46,368.1L396.68,368.71L398.98,369.81L400.27,370.57L401.56,371.14L402.77,371.26L403.45,371.47L406.48,373.6L414.94,381.79L399.5,394.75L394.35,400.7L391.69,405.32L390.75,408.56L390.27,412.91L391.57,497.09L388.66,498.73L401.2,498.69L414.78,495.49L427.92,494.63L441.15,492.27L482.07,495.37L523.75,489.65L537.94,490.08L575.91,497.93L638.63,492.66L701.2,479.89L799.61,468.94L799.71,468.93L799.67,462.53L798.39,454.84L796,449.73L792.69,447.81L789.01,447.12L785.69,446.1L783.24,443.17L780.8,434.49L779.51,431.66L777.55,429.39L775.27,427.46L773.17,425.26L771.86,422.1L772.18,417.52L777.82,403.59L778.11,395.8L772.77,372.23L772.77,372.17L770.11,367.65L768.18,362.79L767.13,357.5L767.13,351.77L769.79,341.49L767.62,339.38L765.51,339.27L765.2,339.25L762.76,339.7L760.61,339.34L754.32,333.34L707.77,267.34L703.9,260.13L703.44,254.04L708.65,239.78L710.29,235.74L713.38,223.8L731.42,192.9L737.14,186.87L735.31,185.35L732.9,181.14L730.72,179.95L729.81,177.92L729.3,175.57L728.33,173.54L727.02,169.35L726.05,167.26L724.9,166.18L723.45,165.3L721.7,163.75L713,151.26L710.91,149.26L708.01,147.23L698.5,143.82L686.85,136.58L683.95,135.63L681.16,133.99L678.1,133.38L674.45,135.58L670.96,137.21L667.36,136.28L664.16,134.11L661.96,132.04L658.26,127.72L652.32,117.66L650.42,112.83L649.13,106.8L648.48,101.14L647.68,99.71L644.16,97.03L643.35,95.62L598.68,54.63L588.15,39.03L585.6,34.08L584.63,32.69L582.46,32.01L573.84,31.03L570.78,29.89L567.91,28.39L565.78,26.17L564.12,20.19L562.11,16.92L559.5,14.07L554.21,11.22L541.75,0z",
  Borgou: "M778.84,528.47L782.89,527.85L786.84,522.9L788.56,518.01L788.83,504.37L791.16,497.33L797.79,484.14L799.75,477.05L799.71,468.93L799.61,468.94L701.2,479.89L638.63,492.66L575.91,497.93L537.94,490.08L523.75,489.65L482.07,495.37L441.15,492.27L427.92,494.63L414.78,495.49L401.2,498.69L388.66,498.73L383.1,501.95L382.25,502.73L381.53,503.26L374.99,511.85L371.85,517.53L370.16,521.79L369.63,525.57L369.75,529.6L370,530.95L370.24,531.67L371.2,533.68L372.69,535.73L379.35,542L380.96,544.09L382.17,546.09L386.12,556.24L386.96,560.39L390.67,572.52L392.7,591.34L392.46,596.62L391.93,599.84L391.05,601.03L389.26,602.95L387.29,604.59L384.99,605.92L374.67,609.63L370.48,610.53L356.29,611L353.67,611.78L351.21,612.9L349.8,613.82L348.39,615.2L346.37,617.67L345.52,619.62L345.08,621.16L345.16,622.2L346.29,627.13L348.52,632.47L348.27,633.7L347.95,634.91L347.59,635.25L347.41,635.38L345.2,639.37L347.5,652.28L347.5,657.42L345.48,664.9L343.27,678.8L343.07,683.32L343.35,686.75L348.35,701.38L348.88,702.57L352.3,708.04L357.62,713.73L361.94,717.59L364.28,722.28L364.32,726.02L354.07,793.65L353.11,797.12L352.02,798.62L350.49,800.09L349.48,800.84L348.35,801.47L347.01,801.9L345.56,802.19L335.78,801.94L329.68,802.35L325.45,803.09L324.2,803.54L322.27,804.68L319.85,806.5L316.05,817.88L314.81,826.74L314.68,841.75L315.45,850.08L316.58,855.71L317.1,857.08L318.39,859.35L319.93,861.39L321.54,863.17L322.79,864.27L324.77,865.58L332.42,869.23L333.28,869.92L334.12,870.92L335.25,872.96L335.61,874.8L335.53,876.54L335.17,878.03L333,883.44L331.37,889.77L330.04,898.76L330.04,898.81L329.52,901.76L328.96,914.76L329.32,919.03L330.49,924.44L331.33,926.62L332.3,928.49L333.88,930.59L335.65,932.54L337.71,934.21L340.08,935.74L345.28,938.24L371.24,945.54L372.85,946.22L373.65,946.71L375.18,948.3L372.98,957.57L510.13,959.01L510.23,959.01L510.21,958.72L510.29,955.93L511.76,953.95L516.14,951.93L517.54,950.54L517.86,948.21L516.52,944.17L516.19,941.84L517.16,937.79L520.41,930.3L520.52,926.28L519.52,924.45L518.23,923.99L517.13,923.41L516.68,921.26L517.32,920.71L520.25,916.29L521.08,914.69L522.5,907.49L523.07,890.82L522.23,883.85L542.26,885.5L545.75,885.01L548.25,883.15L550.45,880.82L553.22,879.03L556.01,878.5L563.99,878.24L566.8,878.58L569.65,879.94L572.17,881.67L574.78,882.93L577.81,882.91L595.56,878.28L601.95,873.82L605.93,865.59L614.57,838.6L619.91,828.37L621.53,822.9L621.55,805.81L620.67,801.41L617.36,793.14L615.62,785.79L616.64,778.5L621.63,770.36L623.51,768.96L627.7,767.54L629.63,765.84L645.48,745.01L645.77,743.65L644.4,740.29L644.08,738.52L646.04,732.02L650.23,730.73L655.3,731.68L659.89,731.95L668.35,727.19L670.18,720.29L668.11,712.27L664.91,704.16L664,698.97L664.59,693.01L666.87,687.73L671.06,684.61L689.75,676.9L699.87,674.19L715.5,675.9L720.09,671.59L726.94,659.04L735.34,648.95L737.97,643.7L739.58,621.17L741.28,616.9L745.3,613.02L749.09,611.2L752.34,608.77L754.7,602.98L754.92,601.5L755.61,596.77L754.86,592.65L752.53,589.33L734.86,571.01L731.15,564.98L730.91,560.05L736.25,548.1L742.81,537.96L743.83,534.82L744.09,529.62L744.82,527.94L746.54,525.46L751.61,520.41L756.71,518.75L762.19,519.72L778.84,528.47z"
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

// src/Benin.tsx
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
var Benin = ({
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
      BeninSingle,
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
      BeninMultiple,
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
var BeninSingle = ({
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
var BeninMultiple = ({
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
var Benin_default = Benin;

// src/index.ts
var src_default = Benin_default;
