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

// src/Frenchguiana.tsx
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
var stateCode = ["Cayenne", "Saint-Laurent-du-Maroni"];
var drawPath = {
  Cayenne: "M568.33,273.22l1.51,1.1l-0.41,0.06l-1.04,-0.84l-0.46,0.03v-0.29L568.33,273.22zM266.13,78.95l0.12,0.29l3.82,1.45l2.95,1.68l1.27,0.29l3.53,1.97l2.14,0.75l0.52,-0.06l3.07,1.5l2.9,0.64l0.06,0.46l0.93,0.52l0.75,-0.23l1.04,0.69l1.33,0.17l0.29,0.52l0.46,-0.12l0.46,0.46h0.64l0.75,0.64h0.93l0.12,0.52l0.52,0.06l0.46,1.62l1.04,0.46l0.35,0.87l0.87,0.4l1.16,0.06l0.58,0.98l1.22,1.16l3.07,1.33l1.04,1.04l0.93,0.46l0.52,-0.06l4.23,1.96l5.15,-0.64l2.2,0.23l3.76,2.14l4.17,0.98l4.23,1.85l0.7,0.81l5.39,2.77l2.43,1.62l0.58,0.69l0.64,-0.06l1.1,0.98l2.49,1.27l0.35,-0.06l-0.06,0.46l0.4,-0.06l0.81,0.52l1.91,1.68l1.45,-0.29l2.09,2.48l0.29,-0.17l-0.58,-0.92l0.35,-0.64l0.81,-0.46l0.23,0.46l1.27,0.64l1.33,1.21l0.52,0.87l-0.4,0.92l0.4,-0.35l0.81,0.23l1.62,1.21l1.68,1.96l0.17,0.75l-0.35,0.64l-0.58,0.52l-1.04,-0.23l0.35,0.4l1.27,0.29l0.29,0.35l0.52,-0.35l0.64,0.06l0.64,0.75l1.91,0.35l3.13,2.31l0.12,1.27l0.29,-0.12l0.06,-1.62l1.45,0.41l0.23,0.92l1.04,1.04l-0.11,0.69l0.23,0.29l0.7,-0.17l1.22,1.73l0.17,1.44l0.52,0.98l0.58,0.58l0.7,-0.35l0.75,1.16l0.69,0.23l0.75,2.25l-0.06,1.85l0.98,1.04l1.16,0.06l0.7,0.4l2.03,3.18l1.39,0.64l0.81,1.04l1.16,0.52l2.2,1.85l2.03,0.81l1.27,1.33l1.04,0.29l0.81,0.87l1.51,-0.12l1.33,3.29l3.82,4.16l0.93,0.64l0.64,-0.06l0.93,0.81l-0.11,0.46l-0.52,-0.35l-0.64,0.17l-0.17,0.52l-0.81,0.69l0.23,0.35l1.04,0.4l1.51,1.34l1.45,0.51l0.87,0.69l0.7,0.06l2.61,1.96l3.76,4.74l0.75,0.35l0.69,1.1l2.2,1.5l1.16,1.39l2.72,1.1l0.98,0.06l2.03,0.98l0.81,0.81l0.23,0.81l1.45,1.44l1.8,0.58l1.39,1.33l0.41,-0.11l0.29,0.64l2.37,1.44l0.46,-0.52l1.62,1.67l-0.12,0.29l-0.29,-0.06l0.12,0.35l0.93,0.06l0.41,0.52l0.4,0.06v0.69l1.56,0.75l0.41,0.4l0.35,1.16l2.09,1.39l0.87,1.16l0.87,0.35l0.29,-0.4l0.23,0.46l0.64,0.29l0.06,0.87l1.91,-0.12l-0.23,1.33l1.22,0.69l1.04,-0.29l0.75,1.44l-0.29,0.92l0.75,0.69l0.98,0.35l0.17,0.64l0.29,-0.17l0.46,0.4l1.62,2.37l0.93,2.31l1.1,1.21l0.06,0.46h0.29l3.13,2.94l2.14,0.98l3.19,0.06l0.81,-0.92l0.41,-1.33l-0.06,-1.1l-0.69,-0.69l-0.11,-0.52l0.48,-0.23l0.05,-0.75h1.68l0.41,-0.17l-0.06,-0.46l0.29,0.35l0.41,0.06l0.41,-0.35l0.35,0.35l2.09,-1.5l1.8,0.06l0.29,1.16l1.22,0.98l0.93,0.23l0.58,-0.52l0.35,0.12l0.46,0.64l-0.35,0.75l0.35,0.81l1.85,1.1l1.8,1.85l1.56,0.98v0.75l-0.81,-0.23l-0.29,0.4l0.06,1.79l1.91,1.67l1.51,0.75l0.52,1.96l4.69,4.45l3.01,0.46l0.46,0.69l1.33,0.52l0.98,1.79l0.87,0.75l0.17,1.73l0.64,0.12l0.7,0.87l0.81,0.35v-0.87h0.23l0.81,1.21l1.39,-0.06l0.35,-0.35l0.23,0.58l0.46,0.12l0.35,0.52l1.1,0.4l0.81,1.67v1.33l0.41,0.81l0.7,0.75l1.91,0.92l0.58,1.79l0.12,-0.81l-0.46,-0.75l-0.11,-0.92l-0.81,-0.63l-0.23,-0.98l2.14,1.1l0.87,1.16l0.87,0.23l0.06,0.98l-0.4,0.35l0.64,0.69l0.23,-0.06v-0.52l0.52,-0.23l0.18,0.4l1.1,0.52l0.17,0.52l0.8,0.64h-0.4l0.35,0.92l0.81,-0.11l0.23,0.87l1.04,1.15l0.46,0.17l-0.46,-1.04l-0.64,-0.46l0.35,-0.35l2.84,2.19l1.91,0.92l0.35,0.63l0.46,-0.06l1.04,0.98l1.56,0.23l0.17,0.52l1.51,0.98h0.64l2.2,1.15l0.23,0.58h0.29l0.12,-0.35l0.87,0.17l0.06,0.52l0.35,0.12l-0.4,0.23l0.64,0.35l0.58,1.21l-0.46,0.35l-0.52,-0.4l0.52,0.81l2.08,0.64l1.04,1.33l0.23,-0.46l0.29,0.17l0.06,0.98l0.52,0.23l0.17,0.81l0.35,0.23l0.29,2.02l0.52,0.52v0.4l0.87,0.06l-0.87,0.42l0.09,0.2l2.36,1.68l3.99,2.58l7.02,0.43l4.97,-3.12l1.04,-1.62l2.26,-0.17l0.12,0.4l2.2,0.17l1.22,0.4l1.22,0.87h0.58l0.52,0.4l-0.06,0.4l1.56,0.35l0.29,0.75l0.93,0.17l1.91,1.39l0.98,0.23l0.64,0.87l1.51,0.98l0.87,1.33l1.51,0.81l-0.4,0.75l1.33,0.98h0.69l0.81,0.46l-0.11,0.64l2.37,3.12l0.17,-0.29l-0.4,-1.04l0.52,0.52l1.33,3.17l-0.23,0.17l-0.58,-0.63l0.17,0.87l0.81,0.69l0.12,1.1l0.75,0.23l0.35,0.58l-0.52,2.37l0.99,2.31l0.58,3.98l0.29,0.17v1.1l0.64,1.44l-0.06,1.04l0.29,0.23l-0.29,0.81l0.35,3.12l-0.35,1.56l0.75,1.33l-0.29,0.92l0.46,1.33l1.62,2.37l1.1,0.92l0.58,1.1l1.45,0.75l-0.52,0.81l0.12,0.98l-0.98,0.52l0.29,1.15l-0.46,0.75l0.23,1.56l0.98,-0.17l-0.17,0.58l0.7,0.17l1.62,2.31l0.58,0.17l2.72,2.19l1.16,0.23l0.81,1.04l1.8,-0.35l0.64,-1.27l0.98,0.29l0.35,-0.17l0.52,0.46l-0.4,1.56l0.17,0.75l-1.04,-0.29l-1.74,1.1l-0.58,0.75l-0.58,2.08l-0.46,0.17l0.29,0.46l-0.81,0.06l-0.75,2.13l0.17,2.42l0.87,3.12l1.45,3.81l0.81,1.1l0.52,1.44l0.52,0.87l0.75,0.46l1.8,2.94l0.81,0.87l0.81,0.06l0.17,0.46l-0.4,0.23v0.92l0.7,1.33l1.45,1.27l1.1,0.23l0.69,0.75l0.29,1.44l0.46,0.58L612,354.85l-1.38,8.77l-0.38,0.38l0.23,3.75l-0.92,3.05l-3.27,6.15l-1.21,3.05l-1.08,6.68l-2.8,6.72l-1.58,2l-1.63,0.85l-4.59,1.17l-3.59,1.66l-3.49,2.47l-4.98,2.89l-3.75,5.43l-1.55,3.01l-0.62,1.57l-0.06,3.73l-1.17,5.3l-1.69,3.41l-4.41,3.94l-1.92,2.76l-2.3,2.23l-0.76,0.28l-7.19,7.85l-3.83,1.8l-3.69,2.9l-1.82,0.77l-0.29,1.49l1.27,5.69l-0.25,2.42l-0.43,0.72l-3.11,1.37l-3.58,0.41l-1.67,0.95l-2.23,2.21l-2.86,7.5l-1.13,6.22l-1.04,3.85l-4.1,4.68l-2.93,2.58l-6.05,12.5l-0.02,0.96l-0.64,0.82l-1.42,0.77l-1.12,1.97l-2.2,6.6l-1.03,1.55l-3.52,3.1l-2.57,3.61l-8.5,14.15l-1.49,3.62l-3.92,4.52l-0.83,2l0.14,2.06l-1.25,2.37l-1.2,1.09l-6.28,8.28l-1.48,0.66l-0.76,0l-2.38,-1.44l-0.81,0.14l-5.31,3.56l-3.65,7.01l0.22,4.58l-2.53,-0.01l-1.53,0.47l-2.1,1.38l-1.44,3.37l-1.62,2l1.35,1.14l-0.51,0.52l-1.5,0.13l-0.64,0.39l-0.26,1.63l1.89,0.47l0.47,0.99l-1.1,2.33l0.12,1.2l0.56,1.07l2.41,1.97l-0.08,2.83l-0.61,2.35l-3.47,5.41l-0.73,1.63l-1.43,1.79l-0.35,2.18l-1.76,2.97l-2.01,8.01l-3.34,2.64l-0.38,2.79l0.39,2.23l0.47,0.26l0.69,-0.3l0.82,0.09l0.56,1.42l-0.86,1.42l-2.19,1.81l-0.69,0.26l-2.32,-0.04l-0.69,0.9l-1.29,0.17l-1.77,1.53l-3.95,7l-7.16,14.32l0.76,1.93l-0.27,0.93l-1.28,1.73l0.56,1.29l-2.14,3.69l-2.06,2.71l-1.51,4.02l-2.38,3.89l-1.97,5.7l-0.73,0.73l-2.49,-0.17l-1.29,0.6l-0.6,0.86l-0.34,1.42l0.22,0.81l2.23,1.63l0.04,0.99l-0.94,1.12l-0.13,0.69l0.69,1.12l1.46,0.73l1.42,1.46l0.48,1.93l-0.7,1.83l-1.45,2.1l-0.47,1.98l-1.93,-0.68l-1.25,1.95l-0.23,2.87l0.3,0.7l0.82,0.07l0.35,1.33l-0.53,1.62l-5.31,4.73l-1.93,2.06l-0.9,1.85l-1.5,1.59l-2.27,-0.25l-2.09,1.42l-0.13,0.44l0.82,0.69l0.77,0.13l0.13,0.99l-0.48,1.66l-2.83,0.73l-0.51,0.6l-1.03,-0.43l-0.51,0.13l-1.72,2.82l0.32,1.05l-2.01,2.88l-0.51,1.55l0.13,1.76l-0.77,2.19l-2.14,2.11l-3.34,0.52l-2.4,0.78l-3,1.64l-0.86,1.16l-0.43,1.29l-1.76,0.77l-1.11,0.95l-0.64,-0.21l-5.65,2.75l-1.11,0.22l-0.9,0.9l-1.46,0.47l-2.05,2.28l-1.41,0.39l-1.58,1.03l-2.49,0.69l-1.63,0.13l-0.73,0.56l-1.84,0.22l-0.48,1.15l0.06,0.69l-2.83,0.01l-0.43,0.52l0.6,2.1l-0.67,1.55l-3.1,1.5l-1.04,3l-0.64,0.82l-1.34,0.75l-0.19,2.22l-0.51,1.2l-1.84,2.53l-0.94,3.09l-0.73,0.52l-1.11,-0.04l-1.93,-0.77l-1.28,0.43l-2.1,-0.72l-0.6,0.94l0.52,1.16l-1.45,1.07l-1.41,0.43l-2.23,0.05l-5.48,1.55l-2.92,-1.75l-1.71,-0.13l-2.77,-1.08l-4.3,-0.62l-0.99,-0.47l-2.15,-1.67l-3.23,-5.04l-1.95,-0.54l-2.53,-0.1l-1.52,-0.67l-4.19,0.7l-1.38,-0.34l-2.14,0.38l-1.38,0.71l-1.95,-0.43l-0.95,0.62l-3.33,-0.01l-2.48,-0.58l-2.09,-1.05l-1.28,-1.72l-3.61,-6.25l-0.95,-1.1l-2.33,-1.29l-3.86,-0.87l-3.62,-2.06l-3.05,-0.34l-3.67,0.37l-6.2,1.92l0,0l4.83,-11.21l2.21,-1.57l1.9,-2.6l-0.41,-3.06l0.42,-1.63l0.71,-0.89l3.42,-2.47l2.05,-2.48l1.16,-5.2l0.94,-0.68l1.58,-0.31l2.48,0.18l0.34,-0.21l-0.58,-0.89l-1.28,-0.73l-1.19,-0.28l-3.32,0l-2.8,-1.09l-0.85,-0.85l-1.23,-2.59l-1.58,-1.97l-2.41,-1.92l-2.87,-0.63l-0.52,-0.34l-0.46,-5.24l-1.01,-1.04l-1.44,-0.65l0.15,-1.52l0.67,-0.94l1.36,-0.95l2.05,-0.81l0.3,-0.4l0.71,-2.77l0,-0.93l-0.45,-1.15l-0.06,-2.62l-1,-0.35l-2.36,-0.15l-0.35,-0.27l-1.12,-2.21l-1.26,-1.31l-0.29,-0.98l0.55,-1.18l1.85,-1.39l4.01,-0.7l1.21,-0.5l1.24,-2.02l-0.2,-0.67l-2.51,-1.1l-0.52,-1.58l-0.01,-0.76l0.52,-0.94l-0.56,-0.68l0.02,-0.74l2.1,-1.93l0.34,-1.11l0.05,-1.38l-1.4,-2.6l0.34,-4.18l0.15,-0.4l0.36,-0.06l5.35,0.04l0.81,-1.3l0.01,-0.95l-0.29,-1.22l-2.03,-1.91l0.7,-1.82l6.02,-7.36l0.92,-2.42l0.78,-0.99l4.43,-1.93l1.38,-1.03l0.78,-0.99l-0.14,-1.76l-1.66,-3.72l0.18,-3.71l1.27,-1.89l2.05,-1.84l0.37,-1.61l0.89,-1.34l3.54,-3.18l0.93,-5.36l0.99,-1.65l1.68,-1.15l6.84,-2.52l1.48,-1.02l0.65,-1.08l0.93,-3l1.49,-1.56l3.45,-1.28l1.46,0.84l0.55,-0.01l0.47,-4.25l-1.08,-1.9l-0.46,-1.91l0.32,-3.54l-0.19,-3.29l0.27,-1.35l0.55,-2.39l1.36,-3.11l3.53,-6.21l0.96,-1.15l1.13,-4.67l-0.56,-3.04l-1.46,-2.2l-2.39,-2.41l-1.97,-0.91l-0.53,1.33l-1.04,0.76l-0.93,0.05l-0.95,-0.47l-0.58,-1.87l-0.29,-4.46l-1.73,-2.94l-0.2,-2.98l-0.45,-0.25l-0.91,0.29l-0.79,-0.14l-4.38,-1.74l-4.17,-6.02l-1.78,-1.85l-0.13,-0.57l0.36,-0.92l2.39,-3.42l1.13,-3.5l-1.58,-7.4l0.28,-3.09l0.94,-1.5l2.23,-1.36l1.54,-1.44l2.66,-1.3l0.42,-0.59l0,-1l-0.91,-2.02l0.34,-2.28l-0.53,-0.77l-2.49,-1.98l-0.59,-1.23l0.11,-0.76l2.33,-3.9l0.63,-3.8l0.56,-0.7l3.66,-2.4l1.35,-1.81l0.59,-1.89l0.13,-1.66l-0.17,-2.08l-0.97,-2.52l-0.03,-0.91l0.84,-1.24l2.36,-1.9l0.2,-1.38l-1.41,-1.17l-2.55,-0.41l-1.08,0.33l-1.32,1.54l-0.82,0.41l-1.67,-0.06l-1.37,-0.7l-0.18,-1.5l1.58,-2.49l0.32,-1.37l-0.74,-3.52l-0.3,-6.08l-0.58,-3.13l-3.55,-4.79l-1.74,-1.3l-2,-2.22l-0.88,-1.51l-1.2,-4.15l-4.1,-0.44l-2.99,-4.16l-2.72,-2.25l-0.73,-1.4l0.12,-1.28l0.93,-0.81l4.44,0.1l1.28,-0.47l1.46,-3.16l5.69,-5.69l1.47,-0.68l3.63,-0.92l0.63,-0.58l0.68,-1.75l0.21,-2.86l-1.03,-1.14l-1.52,-0.29l-0.65,-0.66l-1.02,-0.33l-2.61,-2.92l-1.73,-4.16l-1.71,-5.97l-3.4,-6.22l0.05,-3.17l-2,-2.69l-0.23,-2.41l-0.44,-0.49l-2.21,-0.62l-0.82,-0.61l-1.68,-1.87l-0.89,-2.04l-0.68,-2.73l0.02,-4.24l0.82,-1.63l1.4,-1.47l2.37,-1.04l1.25,-1.19l1.14,-4.22l-0.03,-0.91l-2.7,-2.35l-0.42,-0.68l-1.07,-5.62l-0.51,-0.92l-1.2,-0.81l-2.13,0.17l-0.52,-0.27l-0.81,-3.24l0.42,-1.71l-0.11,-1.43l-0.57,-1.18l-5.09,-1.33l-0.6,-0.78l-0.77,-2.16l-0.4,-0.29l-1.86,-0.11l-3.27,0.74l-0.98,-0.21l0.09,-0.81l1.89,-1.32l0.28,-0.85l-1.97,-1.5l-0.75,-1.88l0.05,-1l2.72,-1.85l0.38,-1.11l-0.04,-1.26l-1.54,-1.63l-0.62,-2.16l-0.71,-0.52l-4.07,0.51l-1.46,-0.96l-0.51,-4.14l-1.45,-2.12l0.85,-1.58l0.96,-3.14l0.01,-1.67l-0.54,-1.78l0.7,-3.66l-0.01,-4.13l0.84,-1.1l2.51,-0.21l2.92,-5.78l-0.46,-1.92l0.19,-3.02l0.73,-2.97l-0.75,-2.69l0.3,-0.66l1.47,-0.68l0.27,-0.47l1.02,-4.06l-1.73,-1.68l-0.28,-1.46l-1.53,-2.2l-1.26,-0.43l-2.62,0.44l-1.36,-0.22l-5.17,-5.48l-3.52,-2.08l-0.63,-1.68l-2.5,-1.41l-1.89,-2.31l-0.55,-2.3l0.75,-3.59l-0.17,-2.29l0.71,-2.06l-0.35,-0.41l-2.71,-0.58l-0.68,-0.47l-0.64,-1.54l0.33,-1.78l2.94,-4.42l-0.45,-1.3l-1.34,-1.08l0.16,-2.83l-0.36,-2.04l0.14,-0.86l1.85,-1.44l2.63,-1.25l0.2,-0.33l-0.2,-0.48l-1.62,-1.35l-0.43,-1.06l-1.48,-1.32l-0.2,-0.7l1.77,-2.37l2.14,-0.55l1.77,-0.96l0.39,-2.43l0.68,-1.46l2.81,-1.44l3.7,-3.12l0,-0.93l-1.4,-2.75l0.35,-0.92l1.66,-1.47l0,-0.93l-0.81,-1.31l-2.38,-1.75l-4.89,-1.66l-4.86,-3.1l-4.09,1.25l-2.2,1.15l-1.27,0.04l-0.33,-1.2l0.21,-0.76l2.33,-2.84l0.23,-2.98l1.24,-2.17l-0.22,-0.98l-1.01,-0.98l0.98,-2.15l-0.36,-1.06l-2.49,-0.91l-1.76,-0.3l-1.37,0.21l-1.23,-0.46l-2.49,-2.92l-1.2,-1.86l-0.28,-1.49l0.19,-2.22l-0.75,-0.54l-2.87,-1.23l-2.25,1.26l-1.06,0.26l-2.06,0.03l-1.15,-0.88l1.79,-0.87l0.18,-0.43l0.11,-2.86l1.03,-3.25l-0.17,-1.94l4.24,-3.63l0.38,-1.04l-0.39,-3.18l-0.49,-0.65l-1.9,-0.47l-1.04,0.69l-0.41,-0.06l-0.84,-0.9l-1.75,0.37l-0.68,-0.61l-0.33,-2.32l0.04,-0.62l0.98,-1.08l0.59,-1.51l1.66,-1.88l-0.68,-0.75l-1.55,-0.27l-1.15,-0.79l-0.22,-0.77l0.1,-2.31l0.66,-1.59l3.35,-1.26l0.34,-1.19l-0.21,-1.25l0.94,-2.58l-0.02,-1.36l-1.07,-1.38l-0.56,-1.49l-1.02,-0.59l-1.81,-0.49l-0.4,-0.53l0.2,-1.38l0.8,-1.73l0.26,-5.44l0.79,-1.1l0.36,-2.45l-0.19,-1.27l-0.98,-0.88l0.76,-3.25l-0.84,-0.78l-0.58,-2.93l0.11,-0.59l1.01,-0.36l0.07,-3.1l0.68,-1.58l0.16,-3.15l2.19,-1.84l0.7,-0.27l0.42,-0.71l0.28,-1.88l-0.51,-0.61l0.03,-2.34l1.66,-1.42l1.42,-0.47l1.65,0.23l3.14,-0.31l5.96,1.94l1.25,-0.3l1.41,-1.28l-0.3,-4l0.47,-5.01l-1.42,-1.87l-0.94,-3.12l-1.03,-0.86l-1.54,-0.51l-0.85,-1.67l-2.04,-0.9l0.36,-1.33l0.01,-1.79l0,0l2.74,0.35l1.51,-0.23l2.2,0.17l3.07,-0.4l1.85,0.06l0.35,-0.35l1.68,0.12l3.53,1.21l0.58,-0.17l1.74,0.52l0.69,0.58l2.03,0.58l5.27,0.87l2.95,1.44l3.71,0.64l4.34,-1.33l0.17,-1.1l-1.56,-0.87l0.46,-1.04l1.16,-0.4l0.06,-0.29l0.93,-0.06l0.41,-0.58l1.51,0.23L266.13,78.95z",
  "Saint-Laurent-du-Maroni": "M125.77,40.86l4.23,0.93l4.86,2.02l8.92,0.29l2.72,-0.64l2.49,0.75l2.2,0.12l3.3,0.93l5.33,2.78l1.22,1.04l2.43,1.04l1.74,1.33l4.23,2.25l2.2,1.68l4.05,1.85l3.53,2.31l4.81,1.91l1.62,0.23l1.16,0.87l1.97,0.29l8.16,3.99l1.16,0.06l4,1.5l1.33,0.75l1.16,1.1l1.16,0.23l1.33,1.21h0.41l0.98,0.87l0.81,0.12l0.29,0.64l0.52,-0.12l0.64,0.69l2.08,1.21l2.78,1.33l1.51,0.23l7.51,2.83l0,0l-0.01,1.8l-0.36,1.33l2.04,0.9l0.85,1.67l1.54,0.51l1.03,0.86l0.94,3.13l1.42,1.87l-0.47,5.01l0.3,4l-1.41,1.28l-1.25,0.3l-5.96,-1.93l-3.14,0.31l-1.64,-0.23l-1.42,0.47l-1.66,1.42l-0.03,2.34l0.51,0.61l-0.28,1.88l-0.42,0.71l-0.7,0.27l-2.19,1.84l-0.16,3.15l-0.68,1.59l-0.07,3.1l-1.01,0.36l-0.11,0.59l0.58,2.93l0.84,0.78l-0.76,3.26l0.99,0.88l0.19,1.27l-0.36,2.45l-0.79,1.11l-0.26,5.44l-0.8,1.73l-0.2,1.38l0.4,0.53l1.81,0.49l1.02,0.6l0.56,1.49l1.07,1.38l0.02,1.36l-0.94,2.58l0.21,1.25l-0.34,1.19l-3.35,1.26l-0.66,1.59l-0.1,2.31l0.22,0.77l1.16,0.79l1.55,0.27l0.68,0.76l-1.66,1.88l-0.59,1.51l-0.98,1.08l-0.04,0.62l0.33,2.32l0.68,0.61l1.75,-0.37l0.84,0.9l0.41,0.06l1.04,-0.69l1.9,0.47l0.49,0.66l0.39,3.18l-0.38,1.04l-4.24,3.63l0.17,1.94l-1.03,3.25l-0.11,2.86l-0.18,0.43l-1.79,0.87l1.15,0.88l2.06,-0.03l1.06,-0.26l2.25,-1.26l2.87,1.23l0.75,0.54l-0.19,2.22l0.28,1.49l1.2,1.86l2.5,2.92l1.23,0.46l1.37,-0.21l1.76,0.3l2.49,0.91l0.36,1.06l-0.98,2.15l1.01,0.98l0.22,0.98l-1.24,2.17l-0.23,2.98l-2.33,2.84l-0.21,0.76l0.33,1.2l1.27,-0.04l2.2,-1.15l4.09,-1.25l4.86,3.11l4.89,1.66l2.38,1.75l0.81,1.31l0,0.93l-1.66,1.47l-0.35,0.92l1.4,2.75l0,0.93l-3.7,3.12l-2.8,1.44l-0.68,1.46l-0.39,2.43l-1.77,0.96l-2.14,0.55l-1.77,2.37l0.2,0.7l1.48,1.32l0.43,1.06l1.62,1.35l0.21,0.48l-0.2,0.33l-2.63,1.25l-1.85,1.44l-0.14,0.86l0.36,2.04l-0.16,2.84l1.34,1.08l0.45,1.3l-2.94,4.42l-0.32,1.78l0.64,1.54l0.68,0.47l2.71,0.58l0.35,0.41l-0.71,2.06l0.17,2.29l-0.75,3.59l0.55,2.3l1.89,2.31l2.5,1.41l0.63,1.68l3.52,2.08l5.17,5.48l1.36,0.22l2.62,-0.44l1.26,0.43l1.53,2.2l0.28,1.46l1.73,1.68l-1.02,4.06l-0.27,0.47l-1.47,0.68l-0.3,0.66l0.76,2.69l-0.73,2.97l-0.18,3.02l0.46,1.92l-2.92,5.78l-2.51,0.21l-0.84,1.1l0.01,4.13l-0.7,3.66l0.54,1.78l-0.01,1.67l-0.96,3.14l-0.85,1.58l1.45,2.12l0.51,4.14l1.46,0.96l4.08,-0.51l0.71,0.52l0.62,2.16l1.54,1.63l0.04,1.26l-0.38,1.11l-2.72,1.85l-0.04,1l0.75,1.88l1.98,1.5l-0.28,0.85l-1.89,1.32l-0.09,0.81l0.98,0.21l3.27,-0.74l1.86,0.11l0.4,0.29l0.77,2.16l0.6,0.78l5.09,1.33l0.57,1.18l0.11,1.43l-0.42,1.71l0.81,3.24l0.52,0.27l2.13,-0.17l1.2,0.81l0.51,0.92l1.07,5.63l0.42,0.68l2.7,2.35l0.03,0.91l-1.14,4.22l-1.25,1.19l-2.37,1.05l-1.39,1.47l-0.82,1.63l-0.02,4.24l0.68,2.73l0.89,2.05l1.68,1.87l0.82,0.61l2.21,0.62l0.44,0.49l0.24,2.41l2,2.69l-0.04,3.17l3.4,6.22l1.71,5.97l1.73,4.16l2.62,2.92l1.02,0.33l0.66,0.66l1.52,0.3l1.03,1.14l-0.21,2.86l-0.68,1.75l-0.63,0.58l-3.63,0.92l-1.47,0.68l-5.69,5.69l-1.45,3.16l-1.28,0.47l-4.44,-0.1l-0.93,0.81l-0.12,1.28l0.74,1.4l2.72,2.25l2.99,4.16l4.1,0.45l1.2,4.15l0.88,1.51l2,2.22l1.74,1.3l3.55,4.79l0.58,3.13l0.3,6.08l0.74,3.52l-0.32,1.38l-1.58,2.49l0.18,1.51l1.37,0.7l1.67,0.06l0.82,-0.41l1.33,-1.54l1.08,-0.33l2.55,0.41l1.41,1.17l-0.2,1.38l-2.36,1.9l-0.84,1.24l0.03,0.91l0.97,2.52l0.17,2.08l-0.13,1.67l-0.59,1.89l-1.35,1.81l-3.66,2.4l-0.56,0.7l-0.63,3.8l-2.33,3.9l-0.11,0.76l0.6,1.23l2.49,1.98l0.53,0.77l-0.34,2.28l0.91,2.02l0,1l-0.42,0.59l-2.66,1.3l-1.54,1.44l-2.23,1.36l-0.94,1.5l-0.28,3.09l1.58,7.4l-1.12,3.5l-2.39,3.43l-0.35,0.92l0.13,0.57l1.78,1.85l4.17,6.02l4.39,1.74l0.79,0.14l0.92,-0.29l0.45,0.25l0.2,2.98l1.73,2.94l0.29,4.46l0.58,1.87l0.95,0.47l0.93,-0.05l1.04,-0.76l0.53,-1.33l1.97,0.91l2.39,2.41l1.46,2.2l0.56,3.04l-1.13,4.67l-0.96,1.15l-3.53,6.21l-1.36,3.11l-0.55,2.39l-0.27,1.35l0.19,3.29l-0.31,3.54l0.46,1.91l1.08,1.9l-0.47,4.25l-0.55,0.01l-1.46,-0.84l-3.45,1.28l-1.49,1.56l-0.92,3l-0.64,1.08l-1.48,1.02l-6.84,2.52l-1.67,1.15l-0.99,1.65l-0.93,5.36l-3.54,3.19l-0.89,1.34l-0.37,1.61l-2.05,1.84l-1.27,1.89l-0.18,3.71l1.67,3.72l0.14,1.77l-0.78,0.99l-1.38,1.03l-4.43,1.93l-0.78,0.99l-0.92,2.42l-6.02,7.36l-0.7,1.82l2.03,1.91l0.29,1.22l-0.01,0.95l-0.81,1.3l-5.35,-0.04l-0.36,0.07l-0.15,0.4l-0.34,4.18l1.4,2.6l-0.05,1.38l-0.33,1.11l-2.1,1.93l-0.02,0.74l0.56,0.68l-0.52,0.94l0.01,0.76l0.52,1.58l2.51,1.1l0.2,0.67l-1.24,2.02l-1.21,0.5l-4.01,0.7l-1.85,1.39l-0.55,1.18l0.29,0.98l1.26,1.31l1.12,2.21l0.35,0.27l2.36,0.15l1,0.36l0.06,2.62l0.45,1.15l0,0.93l-0.71,2.77l-0.29,0.4l-2.05,0.81l-1.36,0.95l-0.67,0.94l-0.15,1.52l1.44,0.65l1.01,1.05l0.46,5.25l0.52,0.35l2.87,0.63l2.41,1.92l1.58,1.97l1.23,2.59l0.85,0.85l2.8,1.09l3.32,0l1.19,0.28l1.28,0.73l0.58,0.89l-0.34,0.21l-2.48,-0.18l-1.58,0.31l-0.94,0.68l-1.16,5.2l-2.05,2.48l-3.42,2.47l-0.71,0.89l-0.42,1.63l0.41,3.06l-1.9,2.6l-2.21,1.57l-4.83,11.21l0,0l-5.48,1.91l-2.95,0.47l-4.48,-0.2l-1.95,-0.72l-3.28,-1.82l-4.85,-6.92l-3.19,-2.49l-2.24,-0.43l-2.81,0.33l-3,1.14l-4.58,2.8l-4.58,1.42l-4.96,0.66l-2.8,1.15l-4.59,1.22l-7.86,-0.02l-8.05,1.17l-3.14,-0.48l-1.81,-0.62l-3.71,-2.06l-5.57,-4.25l-1.19,-1.91l-1.75,-4.48l-0.67,-0.81l-2.38,-1.67l-2.81,-0.1l-1.67,0.9l-2.58,2.9l-0.67,3.29L152,751.7l-1.1,1.14l-2.38,0.61l-6.1,-0.11l-3.62,1.04l-6.96,5.32l-0.9,-0.38l-1.66,-2.53l-1.67,0.14l-1.38,0.47l-1.34,1.43l-0.33,1.19l0.14,4.67l-0.53,1.81l-2.77,3.05l-3.24,1.57l-2.57,0.57l-3.71,1.61l-2.59,2.62l-2.79,1.35l-0.88,0.17l-1.19,-0.38l-2.24,-1.34l-1.81,0l-1.76,0.57l-1.8,1.27l-1.53,1.49l-1.48,4.43l-0.67,3.14l-1.28,3l-1.82,2.33L89.2,792l-2.28,-1.81l-2.19,-0.43l-3.81,-0.15l-2.47,-2.72l-1.66,-4.1l-1.57,-1.24l-1.62,-0.29l-2.72,0.33l-14.68,4.55l-3.38,0.14l-5.24,-0.63l-3.86,-0.91l-1.33,-1.15l-1.38,-3l-2.76,-1.48l-0.33,-0.81l-0.14,-2.34l-2.43,-2.15l-7.67,0.42l-3.33,-0.86l-6.53,-0.87l-2.76,-1l-4.86,-6.06l-1.81,-1.19l-2.33,-0.43l-0.62,-0.48L1.85,762.76l-1.62,-1.38L0,760.28l0.91,-1.62l4.15,-0.23l0.24,-0.48l-0.33,-1l-1.6,-1.16l0.61,-0.74l6.77,-0.47l2.62,-1.52l1,-1.14l1,-0.47l2.38,0l1.38,-0.43l3.58,-2.85l0.38,-1.1l-0.52,-1.62l-2.28,-3.05l-0.23,-4.15l0.25,-7.2l0.57,-2.48l0.76,-0.76l2.67,0.57l1.81,-0.9l3.81,-5.6l2.24,-1.26l0.17,-1.59l0.81,-0.86l1.58,-0.73l2.61,-2.24l1.15,-1.81l2.8,-7.48l-0.4,-3.09l0.26,-0.64l2.14,-1.34l0.85,-1.25l1.44,-4.98l0.85,-2.02l1.16,-1.28l-0.83,-2.49l0.21,-0.47l3.72,-4.73l2.99,-2.71l0.9,-1.16l1.45,-2.75l1.52,-5.63l0.81,-1.5l1.2,-0.9l0.81,-1.33l1.67,-0.69l1.92,-2.88l0.73,-0.43l0.56,-0.82l1.71,-0.82l-0.22,-0.9l0.26,-0.86l0.77,0.26l0.56,-0.22l1.49,-2.54l0.08,-2.02l0.51,-1.29l1.24,-1.59l-0.04,-0.86l-0.65,-1.5l0.42,-1.59l-0.31,-1.59l0.3,-0.94l0.64,-0.52l1.33,-0.09l1.24,-0.56l0.51,-0.86l0.29,-1.8l0.68,-1.25l0,-0.6l-0.78,-1.03l-1.42,-0.17l-0.86,-0.6l-0.31,-1.54l0.21,-1.5l1.62,-4.47l-0.05,-1.67l-0.48,-1.29l0.43,-0.6l1.07,-0.26l0.94,-1.08l0.6,-1.59l-0.05,-1.46l0.55,-1.25l-0.48,-1.24l0.94,-1.16l1.72,-0.01l0.3,-0.64l-0.82,-1.16l-1.25,-0.25l-2.19,-1.8l-0.95,-2.36l0.47,-1.42l1.76,-0.95l0.6,-1.2l-1.13,-3l-0.87,-3.78l-2.03,-3.21l0.3,-1.42l3.04,-2.33l-0.05,-1.07l-0.74,-2.02l1.15,-1.89l-0.91,-3.52l-1.04,-2.06l-1.46,-1.15l-1.33,0.18l-1.07,1.25l-0.86,0.26l-1.12,-0.68l-0.39,-0.81l0.64,-0.9l1.71,-1.08l-0.95,-0.86l-1.12,-0.17l-0.35,-0.73l0.51,-0.82l1.2,-0.69l1.14,-4.68l1.49,-2.92l-0.69,-1.46l0.34,-0.52l0.69,-0.35l3.09,-0.05l0.56,-0.43l1.15,-2.37l0.86,-0.72l0.36,-1.06l1.87,-3l1,-2.57l3.3,-2.9l2.44,-3.43l3.58,-2.14l3.15,-0.42l1.91,-0.95l2.01,-2.1l0.96,-2.24l2.11,-8.3l0.29,-3.86l0.67,-1.34l3.27,-3.1l1.86,-2.29l1.86,-2.98l0.47,-2.06l-0.2,-3.68l1.89,-6.88l0.78,-13.1l0.95,-4.82l0.93,-1.6l1.85,-1.83l0.94,-2.52l-0.22,-1.61l-1.59,-2.54l-1.12,-3.69l-2.06,-2.08l-1.9,-0.45l-3.25,3.54l-2.1,-0.19l-1.67,-1.24l-1.09,-3.44l-3.15,-2.2l-2.71,-4.21l0.39,-5.49l-2.76,-4.68l-2.28,-5.16l-4.81,-7.6l-0.95,-0.86l-2,-0.19l-9.26,-0.02l-2.34,-1.1l-0.52,-1.53l0.29,-1.77l1.44,-2.77l-0.14,-1.91l-1.96,-1.39l-6.35,-1.92l-2.96,-2.3l-1.71,-2.96l-0.67,-1.96l-1.38,-2.1l-2.48,-1.87l-2.24,-2.39l-1.57,-2.44l-1.52,-3.49l0.19,0l-1,-5.69l-3.29,-5.59l-2.1,-2.01l-2.77,-0.91l-2.05,-1.05l-1.72,-1.77l-0.86,-1.34l-0.04,-2.34l2.87,-4.15l1.1,-2.2l1.01,-5.35l2.96,-3.67l0.72,-2.39l-0.48,-1.19l-2.1,-1.63l-2.86,-0.96l-3.24,-2.44l-4.34,-1.87l-1.14,-1.63l0.1,-3.2l1.53,-4.58l0.24,-2.82l-0.33,-4.54l-1.71,-4.97l-0.04,-5.78l0.24,-1.67l-0.36,-2.17l-2.63,-5.62l-2.1,-0.99l-1.11,-1.69l-0.1,-3.05l-2.15,-4.88l-0.57,-2.72l-0.28,-4.54l0.62,-1.72l0,-2.77l-3.29,-11.23l1.35,-2.06l3.81,-3.06l1,-2.1l1.15,-4.34l0.02,-3.23l-0.4,-3.65l-1.11,-1.83l-3.12,-3.63l0.82,-3.92l1.05,-2.1l-0.57,-2.1l-0.23,-5.16l0.77,-2.01l-0.19,-0.76l-2.86,-2.63l-0.76,-0.33l-2.01,0.33l-1.58,-0.43l-1.29,-2.1l1.2,-6.69l0.19,-2.58l-1.19,-5.31l-0.38,-7.41l0.15,-4.35l-1.76,-6.31l0.14,-1.53l1.48,-1.91l1.53,-3.11l2.44,-2.2l0.91,-2.06l0.39,-2.82l-0.24,-3.73l0.43,-3.39l1.01,-3.68l2.44,-5.64l1.87,-5.26l2.59,-4.2l3.59,-2.29l2.39,-3.25l1.15,-3.73l1.2,-1.48l1.96,-1.15l1.1,-2.72l4.74,-8.6l5.17,-8.6l5.65,-5.49l8.23,-5.68l3.88,-1.95l2.49,-1.86l4.84,-5.49l1.05,-0.76l4.69,-1.43l2.54,-1.81l0.96,-1.72l0.73,-5.83l1.25,-2.44l6.23,-7.55l4.17,-5.88l8.33,-8.21l2.64,-3.34l2.01,-3.82l0.89,-5.84l-0.29,-10.3l1.63,-0.75l-0.09,-0.65l0.98,-4.44l0.9,-2.85l1.37,-2.46l2.02,-2.5l0.82,-0.35l0.34,0.24l0.44,-1.1l-0.36,-0.95l0.12,-2.67l0.47,-1.12l2.27,-2.46l1.2,-3.23l0.51,-0.52L125.77,40.86zM136.6,39.88l4.63,1.33l4.23,1.68l0.46,0.46l-4.63,-1.44l-6.14,0.29l-2.03,-0.69l-0.12,-0.69l0.58,-0.69L136.6,39.88z"
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

// src/Frenchguiana.tsx
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
var Frenchguiana = ({
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
      FrenchguianaSingle,
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
      FrenchguianaMultiple,
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
var FrenchguianaSingle = ({
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
var FrenchguianaMultiple = ({
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
var Frenchguiana_default = Frenchguiana;

// src/index.ts
var src_default = Frenchguiana_default;
