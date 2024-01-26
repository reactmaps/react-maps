// src/Bahrain.tsx
import React from "react";

// src/constants.ts
var constants = {
  WIDTH: "500px",
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: "0.5",
  HOVERCOLOR: "#303030"
};
var stateCode = [
  "Al \u2018\u0100\u015Fimah",
  "Al Jan\u016Bb\u012Byah",
  "Al Mu\u1E29arraq",
  "Al Wus\u0163\xE1",
  " Ash Sham\u0101l\u012Byah"
];
var drawPath = {
  "Al \u2018\u0100\u015Fimah": "M220.17,46.17l0.5,-0.95l5.58,0.24l-0.43,2.38l-2.14,0.71l2.79,0.24l-0.21,-0.95l1.07,-1.43l-0.21,-0.95l1.93,-0.24l0.86,0.95l1.93,0.24h0.43l-0.21,-0.71l0.43,-0.24h1.07l0.64,0.95l-0.43,0.95l0.43,0.48l0.86,-0.48l-0.21,-1.19h0.43l0.43,0.95l-0.21,0.95h-0.43l0.22,1.19l1.29,1.19v0.48l-1.5,-0.48v0.95l1.72,0.48l0.64,-0.48l1.5,0.24l0.43,2.38l1.93,0.24v-0.71l-0.86,-0.47l1.07,-0.24l1.06,0.47l-0.41,-0.71l1.29,-0.47l-0.43,-0.48l0.43,-0.71l1.29,0.24l0.86,-0.71l0.21,0.71h2.57l0.21,1.43l1.07,0.24v1.19h-0.86V55.2l1.28,-0.71l0.22,-0.95l0.86,-0.24h0.43v0.71l-1.29,0.47h0.64l0.22,0.71h0.86l-0.21,-0.48l1.29,0.24l1.07,-0.71l-0.64,-0.71l1.28,-1.43l-0.64,-2.14l0.86,0.48v-0.48l0.86,0.24l1.71,-0.71l1.93,-1.66l-0.64,-1.19l1.71,0.24l0.22,-0.71l1.5,0.24l0.43,-0.95h0.64l-0.21,-0.95l-0.86,-0.24l1.07,-1.43h0.86l0.86,2.14l0.86,0.24l0.86,-1.9l1.07,-1.19h0.86l0.43,-1.19h2.14l0.43,-0.95l3.22,-0.71l1.93,-1.43l3,-4.52l1.72,-6.66h0.86l0.22,0.71l-1.72,4.52l-0.21,2.62l-1.29,2.38l0.43,1.67l4.08,1.66h1.5l0.43,0.95l-0.43,0.95h0.86l-0.21,1.66l0.64,0.24l-1.07,2.14l0.86,2.85l-0.43,1.66l0.86,1.43l-1.5,0.95v1.66l-1.28,2.14v1.19l0.65,0.95h0.86l1.72,-1.19l2.57,0.24l0.21,1.43l0.43,-0.24l-0.21,-1.66l2.79,0.71v1.43l0.86,0.48l0.65,2.38h0.64l0.21,-1.66h0.43l-0.21,-1.9l2.36,-0.24l-0.22,1.43h-0.64l-0.21,0.71l0.21,0.95l1.07,0.24l-0.43,0.95h1.29l0.64,-1.19l3.43,0.71l0.86,6.18l-2.14,2.61l-2.36,1.43l-1.5,2.14l3.43,2.14l1.71,1.9l-5.14,-2.38l-1.07,0.24l-0.86,-0.47v-0.95h-0.64l-0.21,0.95l-1.07,0.71l-3,-1.43l-0.43,1.9l2.15,0.24l-0.21,1.43l-1.71,0.24l-1.72,-1.19l-1.29,0.95l-2.14,-0.71l0.21,0.71l-0.86,0.71l-3.43,1.43l-0.21,-0.71l-0.86,0.24l-0.64,-0.95l-1.29,0.24l-0.43,-0.47l-0.21,-2.38h-2.57l0.86,-1.9v-0.48l-1.07,0.24l0.64,-1.19l-3.86,-0.47l-1.29,-1.9h-0.65l-0.86,1.43l-1.29,-0.71l-0.86,1.19h-1.29l-0.21,0.95l-2.36,0.24l0.22,1.19h-1.07v0.48h-3.43v-1.19h-2.36l-0.21,2.38h2.36v0.71l-2.35,0.48l0,0l-4.29,-12.52l-4.39,-6.7l-3.17,-1.68l-2.72,2.01l-4.99,1.84l-5.44,1.17l-7.26,-1.17l-4.23,-1.67l-0.6,-2.52l0.91,-1.84l2.12,-2.01l0.3,-2.35L220.17,46.17zM274.69,83.25l1.08,0.24l-1.07,2.61l0.65,0.24l1.07,2.85l0.86,0.47l2.14,-0.24l0.43,2.14l-1.07,1.19l0.64,3.09l-1.28,-1.19l-3,-0.95l-2.57,2.61h-2.78v-4.51l1.5,-0.24l-1.29,-2.14v-0.95l1.93,-3.09l1.5,-0.48v-1.42L274.69,83.25zM237.17,45.69l0.43,0.71l2.79,0.24l0.43,2.85h1.07l-0.43,-0.95l1.5,0.48l0.22,2.14l-1.29,0.48l-0.86,-0.48v0.71h-1.07v-1.43l-1.5,-1.43l-0.64,0.24v0.71h-0.64l-0.21,-0.95h-1.07l0.43,-0.71l-0.43,-0.95l1.08,-0.71l-0.43,-0.95H237.17zM238.67,36.66l0.86,2.14l0.86,-0.47l-0.43,-0.95h1.29l-0.21,1.9l-1.29,1.43l-3.64,0.71l0.21,-1.43l-0.86,-0.71l0.64,-0.48v-1.19L238.67,36.66zM250.25,48.31l0.21,2.62l-1.5,0.24l-0.43,-1.9l0.86,-0.95H250.25z",
  "Al Jan\u016Bb\u012Byah": "M435.06,575.59l0.22,0.24l-0.21,0.94l-1.5,0.24l-0.64,-0.47l0.22,-0.71L435.06,575.59zM417.91,571.57l0.43,1.66l0.43,0.47h0.64l-0.43,0.48l0.43,1.18l0.43,-0.24v-1.18l1.07,0.47l-0.43,5.68h-1.07v-0.23l-1.93,0.24l-0.86,0.47l-0.21,0.47l-0.86,0.24l-0.22,0.47h-0.43l-0.21,0.47l-0.86,0.24l-0.21,0.47h-0.43l-0.22,0.47h-0.43l-0.21,0.47h-0.43l-1.29,1.18l-0.65,2.13l1.29,0.71l0.65,0.95h0.43v0.71l-1.5,0.71l-0.21,0.47l-0.86,0.47l0.64,0.95l-1.29,0.71l-0.64,1.42l0.43,0.95l-2.57,1.18l-1.07,1.42v1.18l0.64,0.95l1.29,0.24l-0.43,0.95l2.14,1.18l0.86,1.18h1.07l0.64,0.71l0.86,0.24l0.22,0.47l1.5,0.47l1.07,1.18h0.65l0.21,0.47l1.93,0.71l1.93,1.89h0.86v0.24l1.29,-0.23l0.86,0.94l0.43,0.95L423.05,612h-0.43l-0.21,-0.71l-0.86,-0.23l-0.86,-0.71h-0.86l-0.43,-0.71l-1.07,-0.47l-0.43,-0.71l-1.93,-0.71l-0.86,-0.47l-0.21,-0.47h-1.07l-2.14,-1.18l-2.14,-0.24l-0.43,-0.47h-1.93l-0.86,-0.71l-1.72,-0.23l-0.86,-0.95v-0.71l-0.43,-0.47l-0.86,-0.47h-2.14l-0.21,-1.89l-1.72,-0.23v-0.71l-0.64,-0.47v-0.47l-0.65,-0.47l-0.21,-0.71l0.64,-5.91l1.5,-0.24v-1.42l-0.86,-0.47v-1.65l0.43,-0.47h0.65l0.64,-1.42h0.64l0.65,-0.47v-0.95h0.22l-0.21,-2.13l0.43,-0.71l0.64,-0.24l0.22,-1.42l1.29,-0.94v-0.95l0.22,-0.24h2.36l0.64,-0.47l0.22,-0.94h1.29l0.22,-0.47l1.28,-0.71h0.43v0.95h-0.21l0.22,0.71h0.65l0.21,-0.24l-0.21,-0.71l1.07,-0.47l0.21,-0.47l0.65,0.47l1.29,0.24l0.64,-0.95l0.22,-1.65L417.91,571.57zM426.27,570.15l0.21,0.24l-0.21,1.42h-0.86l-1.07,-0.71v-0.94H426.27zM426.05,558.56v0.24h0.64l0.22,0.95h0.65l0.21,0.71l0.65,0.47l-0.21,0.71l-0.43,0.24v0.95l-1.71,0.24l-0.43,-0.47l0.43,-0.23l0.22,-0.71h-0.86v0.95l-0.43,0.71h-1.29l-0.65,-0.94l-0.64,-0.24l0.22,-0.94l0.64,-0.47v-0.47h1.29l0.22,-1.42L426.05,558.56zM433.13,536.33l0.64,0.47h2.14v1.42l0.86,1.42v1.42h-0.64l-0.43,-1.19l-0.86,-0.47l-0.43,-0.71l-1.07,-0.23l-0.43,0.47v1.42l-1.07,2.37l0.22,1.18h0.86l0.22,-0.47v-0.47l-0.64,-0.24l0.65,-1.65h1.93l0.22,1.18l-0.64,0.71l1.5,2.6v0.47l-3.22,-0.47l0.86,1.89l0.43,0.24v0.48h1.93l0.22,0.47l0.22,-1.18l1.29,-0.24l0.64,-2.13h1.5l0.43,-0.23v-0.71l0.64,0.23l0.65,-0.71l1.93,1.18h0.64l0.22,0.71h1.72v0.24l1.29,-0.23l0.21,-0.71l1.72,0.24l0.43,-0.47v0.47h0.64l0.22,2.13l0.64,0.24v0.71l1.93,0.24l0.43,0.71l0.86,0.47l0.64,1.89l-0.21,1.42l-3.43,3.79l0.86,0.95l1.07,0.47l0.43,0.95l-0.86,1.89l-1.72,-0.24v0.71h-2.36v0.24h-0.86l-0.64,0.47h-0.86v0.24h-0.64l-0.86,0.47l-0.21,0.47l-0.86,0.24l-0.21,0.47h-0.86l-1.28,-0.94l0.43,-1.65l1.29,-0.47l0.22,-0.24l-0.22,-0.47h-2.57l-0.22,-0.24v0.48h-2.36l-0.21,0.71l-2.15,0.47l-1.93,2.36l-0.86,-0.23l-0.21,-0.47l-1.29,-0.71l-0.21,-0.47l0.22,-3.07l-1.71,-2.13l-0.64,-2.84l0.86,-0.23l0.22,0.95l0.86,-0.23l0.22,-2.13l1.5,-0.23l0.43,-1.18l0.43,-0.23l-0.64,-0.71h-1.29v-0.95l-2.36,-1.65v-0.71l1.29,-2.84l-1.07,-0.47l-0.64,1.18h-0.86l-0.86,-0.94h-0.43l-0.64,-0.71l0.21,-0.24l-0.21,-1.89l-1.5,-1.42l-0.21,-0.71h0.86l0.22,-0.94h0.86l0.43,0.94l2.36,0.24v-0.24h0.65l-0.21,-1.18l0.43,-0.71h1.5l0.22,-0.47H433.13zM421.34,529.94v0.47l1.29,0.47l0.22,1.19l0.64,0.95v1.18h1.07l0.22,0.71l-0.64,0.71h-1.07v0.24h-2.57l-1.07,1.66l-0.21,-0.47h-0.43v-0.95l-1.29,-0.71l-0.21,-1.89l0.22,-0.23h2.14l0.65,-1.18l-0.21,-1.19l0.43,-0.94H421.34zM428.84,522.85l0.43,0.24l0.22,0.95h-0.43l-0.21,0.71h-0.43l-0.21,0.47h-0.43v-0.71l-1.07,-1.42l0.22,-0.23h1.07v0.24L428.84,522.85zM416.19,518.59l0.43,0.71l0.64,0.24v0.95l-0.43,0.47l-0.86,-0.24v-0.47l-0.64,-0.24l0.22,-1.18L416.19,518.59zM451.57,513.15l0.43,0.95l-0.43,2.6l1.5,0.47l0.86,0.48l0.22,0.47h1.71l1.29,1.18l-0.21,0.95h0.64l1.07,0.71l-0.86,0.95l-0.64,-0.24l-0.43,0.48v1.42l-0.86,0.95l0.22,2.37l-1.29,1.18v0.48l-1.5,0.47v0.24h-1.29l-0.21,0.71h-2.36l-0.86,0.71h-0.43l-0.21,0.71l-1.29,0.47l-0.43,1.19h-1.29l-0.64,-0.71l-1.5,-0.71l0.86,-0.47v-1.66l-0.65,-0.71l-0.43,0l-0.21,-0.71l-1.07,0.24v-0.47l-0.65,-0.47v-0.47l-0.64,-0.71v-1.89l0.22,0.24l0.86,-0.24v-1.42h0.43l-0.21,-1.18h0.64l0.22,-0.23l-0.21,-0.71l0.43,-0.47h0.86l0.22,-0.71l5.36,-0.71l0.22,-5.68H451.57zM439.77,507.94l0.22,0.71l-0.43,0.47h-1.07v0.23l-0.64,-0.23l0.43,-0.95L439.77,507.94zM439.35,502.5v0.24h1.5l0.86,0.47h-0.43l-0.43,0.71l-1.93,-0.24l-0.43,-0.94L439.35,502.5zM434.63,477.41l0.21,1.89l-1.93,0.24l-0.43,-0.47l0.22,-0.71l0.86,-0.24l0.43,-0.71H434.63zM440.42,475.52l-0.43,0.95v0.95l0.22,0.71l0.64,0.24l0.22,0.47l-0.64,0.48l-0.43,0.95l-1.72,0.71l-0.64,1.42l-0.64,0.47v0.47l-0.64,0.71l0.65,1.19l1.5,-0.24v1.18h-0.43l-0.43,0.71v1.42l0.64,0.94v2.37h-0.43l-0.86,1.18l-0.86,0.24l-0.43,0.48l0.21,0.71l-0.21,0.95l-1.72,0.95l-0.43,0.95v1.42l-0.64,1.42l-4.07,0.47l-1.28,0.71l-0.21,0.95l0.86,0.24v0.71l0.64,0.47v0.48l-1.28,-0.71h-0.64l-1.07,1.66l-0.22,2.6l-0.43,0.24v0.71l0.64,0.47v0.71l0.64,0.24l0.43,-0.95l1.72,-0.23l-0.21,-0.94l0.86,-0.71l0.22,-0.95h0.86l0.22,0.47h0.43l0.64,0.71v0.48l-0.86,1.65l0.43,0.95l0.43,0.24l0.22,0.95l1.07,0.95l1.07,-0.71l1.72,0.24l0.64,0.48l-0.21,0.24l0.22,0.71h1.29l0.64,1.66v2.6H437.2l-0.43,0.71h-3l-0.21,2.13l-1.28,-0.24l-0.43,0.71l-1.72,0.23v0.24h-1.29v-0.47l0.86,-1.18l1.29,-0.47l-0.43,-0.71l-1.5,-0.47l-0.43,0.47h-0.65l-0.43,0.71l-1.93,-0.47l-0.86,2.13l-0.86,-0.24l-0.43,1.42l-1.5,0.24v0.24h-1.07l-0.64,-0.47l0.22,-0.47l0.21,0.24l0.86,-0.24l-0.21,-2.37l-0.86,0.24v-0.48l-1.07,-1.18h-1.93v-0.23l-1.07,0.23v-0.94l-1.07,-0.71l-0.64,0.24v1.19l-1.28,0.47l-0.43,-0.47h-0.86l-0.64,-0.48l-2.14,-0.47l-0.43,-0.94l-0.21,0.24l-3,-0.23l-0.21,0.47l-1.5,0.24l-0.43,0.71h-0.43l-0.43,0.48l-0.21,0.71l-0.43,-0.23l-1.07,0.71v2.13l1.29,1.42l0.43,0.24l0.86,-0.23v0.47l0.64,0.24l0.43,0.71l1.07,-0.24v-0.23h2.57l0.64,-0.47l1.72,0.24l0.43,-0.47l1.5,0.24l0.43,-1.18h1.71l0.43,1.42l0.65,-0.23l0.21,-0.71l0.43,0.24l0.43,-0.24l3,0.24v1.18l-0.64,0.95l-2.15,0.47v-0.23h-1.28l-0.65,-0.95h-0.43l-1.07,0.71l-0.21,1.18l-0.86,0.47h-2.14l-0.86,0.48l-1.29,2.6l0.22,3.31l-0.65,0.23v0.71l0.43,0.48l0.86,-0.24l1.29,1.42l-0.21,1.42l0.65,1.18h1.07l0.22,-0.71l0.21,0.24l1.29,-0.24l0.65,0.47v0.47l-1.07,-0.47l-0.43,1.42l-0.43,0.24l-0.21,2.13l0.86,0.47l0.22,0.47l-0.22,0.48h-0.43l-0.21,-0.47l-0.43,0.23l-0.21,2.13l0.43,0.24l0.64,-0.71h0.43l0.22,0.47l0.43,-0.47h2.14l0.22,-0.47l0.86,-0.24l0.22,3.31l1.72,1.18h0.86v1.18l-0.86,1.42l-0.21,2.37l0.64,0.24l0.86,-0.71h0.64l1.07,1.89v0.71l-0.64,-0.24l-1.29,2.37h-0.43v-0.71l-1.07,-0.71h-3.22l-0.43,0.24l-0.43,0.48v1.42l0.64,1.42l-0.43,0.24l-0.21,-0.47l-0.86,-0.47l-1.07,1.18l-0.43,1.65h-0.43l-0.64,0.71l0.43,1.66l-0.86,0.95l0.22,0.71l1.71,0.47l0.43,0.48h1.29l0.22,0.47h0.43v1.42h-0.86l-1.5,1.66l-1.93,0.47l-0.65,0.71l-0.43,1.42l-1.07,0.47l-0.43,1.18l-1.5,1.18l-0.21,0.71h-3.43l-0.21,-0.48l-0.86,0.24l-0.21,-1.89l0.64,-0.24l-0.21,-0.94l0.65,-0.47v-1.18l-0.43,-0.47v-0.71l0.64,-1.18h-0.21v-1.18l-0.86,-0.47l-0.21,-1.19l-0.64,-0.47l-0.21,-0.95l-0.64,-0.47l1.29,-0.71l-0.21,-0.47h-0.86v-0.71l0.43,-0.24V561.4h0.43l0.22,-0.47l0.86,-0.47V558.8l0.64,-0.94l0.22,-3.31l-0.43,-0.48l-0.21,-1.89l-0.64,-0.47l-0.21,-0.71l-0.64,-0.23l0.22,-0.71l-0.43,-0.95l-0.43,-0.47h-0.86v-0.47l-1.07,-0.71l-0.21,-0.71l-1.28,-0.71h-0.43l-0.21,0.71l-2.36,-0.24l0.22,-2.37l0.86,-0.47l0.22,-0.71l-0.86,-0.95h-1.07l-0.21,-1.42l-1.29,0.48l-1.72,1.66h-0.64l0.22,-0.95h0.43l1.08,-1.18l1.07,-0.23l0.43,-0.47l0.43,-1.42l1.5,0.47l0.43,-1.89l0.43,0.24l0.86,-0.24v-0.47l-0.64,-0.47l-1.5,0.47l-0.21,-1.42l1.07,-0.95l0.65,-4.97l1.29,0.23l0.43,-0.47v-0.71l-0.86,-1.65l0.22,-0.47l-1.07,-1.42l-0.43,0.24l0.43,1.42l-0.64,-0.24l-0.86,-1.89v-1.18h0.22v-1.18l1.93,-1.89l0.43,-1.42l0.43,-0.24l0.22,-2.37h0.22l-0.21,-3.07l0.86,-0.24l0.86,-0.94l0.64,-1.42l0.65,-0.47v-0.48l1.93,-2.36v-0.47l0.43,-0.23l0.21,-1.66l0.43,-0.47l1.29,-0.23l0.22,-0.95h0.64l0.43,-0.71l1.29,-0.47l0.43,-1.18l0.43,-0.24l0.22,-1.89l0.43,-0.24l0.86,0.47l0.64,-1.66h0.65l0.64,-0.71l-0.21,-1.42l1.07,-1.42l0.65,-1.89l0.86,-0.24l0.65,-0.95l0.86,0.24l0.43,-0.47l0.21,-0.95l-0.86,-0.47l-0.21,-0.47l0.22,-0.24l1.07,0.24l0.65,-0.95v-0.94h0.64v-0.24l0.86,-0.24l0.22,-0.47l1.29,-0.24v-0.24h1.29v0.24l1.72,0.24v0.24h1.93l0.43,-0.71h0.43l0.65,1.18v0.95l1.07,0.95l0.43,-0.71l1.29,-0.24l0.43,-0.47v-0.71l-0.43,-0.47v-1.18l-0.64,-0.24l-0.21,-0.47l0.43,-0.71h1.29l0.86,-1.42v-0.71l2.79,-0.23v-0.24h0.86l0.86,-0.47l0.43,-1.89l2.14,-0.24l0.64,-1.18l-0.22,-0.94l1.5,-0.24l0.43,-1.42h0.64v1.18L440.42,475.52zM459.07,467.94l0.43,0.47v0.95l-0.43,0.47l-1.5,0.24l-0.43,-0.71l0.43,-0.24l0.22,-0.95L459.07,467.94zM430.56,455.16l0.43,0.71h0.64v0.95h1.5v-0.23l0.86,0.24l-0.43,1.9l0.43,0.24l0.43,1.19l-1.5,1.42l-0.21,0.71h-1.71v0.24l-1.5,0.23v0.24l-1.72,0.47v0.24l-1.71,0.24l-0.21,0.47l-0.64,0.24v0.71l-2.15,-0.24l-0.21,-1.9l-0.43,-0.47l0.43,-0.94l-1.5,-0.24l-1.5,-1.89l0.43,-1.18v-1.18h1.07l0.86,-0.95l1.07,0.24v-0.71h1.5l0.22,0.24l-0.21,1.19l0.43,-0.47l3.22,-0.23l-0.21,-1.18L430.56,455.16zM415.98,453.74l0.65,1.42h1.07l0.43,1.89l1.28,2.13l0.22,2.13l-1.29,1.42l-4.07,-0.23l-0.43,0.48h-1.07l-0.21,-0.95h-2.57l-0.21,-1.66l-0.86,-0.95l0.22,-0.95l3.22,-2.37l1.93,-0.47l0.86,-0.95l0.22,-0.95H415.98zM273.5,146.57l5.11,1.31l2.36,-0.22l1.96,-1.74l2.56,-1.52l0,0l1.38,2.39l0,0l0.79,4.14l2.36,4.35l5.11,5.44l6.82,5.08l-0.64,0.83l-0.21,0.95l0,0h1.5l0,0l1.29,1.42l-1.72,0.48l-0.43,2.14l-1.28,0.47l-0.64,1.19l1.29,4.99l-0.21,0.95l-0.64,0.71l0.64,1.19l0,0h2.36l0,0l0.64,2.37l0.43,0.48l0,0l-0.21,1.42l0,0l1.5,0.24v0.95h-0.64l-0.21,0.71l-2.79,0.24l-0.43,0.71h-0.43l-0.43,0.48v6.65l0.86,2.61v2.61l-0.43,0.95l-0.86,-0.24l0,0v0.71l0,0l1.07,2.37l0.64,4.75l1.72,-0.47V208.4h1.07l0.21,0.71l0.22,-0.47h0.43l0.65,1.42h0.43l0.43,1.42h0.64l0.43,-0.47l0.86,-0.23l0.43,0.95h0.64l0.65,1.19v0.95l-1.72,4.04l-1.71,-0.95v0.24h-0.43l0.22,1.66l-0.43,0.95l-1.5,-0.47l0.21,0.95l0.86,0.24l-0.65,5.46l-0.43,1.19v1.42h-0.22v2.38h-0.21v1.9l0.86,0.47l0.22,1.9l-0.64,2.37l-2.15,0.24l-0.21,0.47l-1.07,0.48l0.64,1.42l-0.64,1.19l-0.65,4.98h-0.21l0.21,2.61l-0.43,1.19l-0.21,2.85l-0.86,2.85v2.61l-0.86,2.61v2.37l-0.86,1.42l0,0v3.32l0,0l-0.64,0.95l-0.21,1.19l0.86,0.48h0.86v0.24h1.5v0.47l-4.07,0.95l0.64,8.3l-1.5,1.66v0.48l0.43,0.47l0.21,1.42l1.72,0.24l0.43,0.95v0.48h-0.43l-0.43,0.71h-0.43l-0.64,0.71l0.86,0.95v0.71l-0.64,0.47l-0.21,0.95l1.07,0.48l0,0v1.42l0,0l-0.43,0.24v0.48l-1.5,0.48l-0.43,1.19l0,0v4.98l0,0l0.86,0.95l0.64,0.24l0.21,1.19L295.27,304v0.95l-0.43,0.71l0.22,2.84l-1.29,2.85l0.22,1.9l-1.29,1.9l-1.29,4.74l-0.43,0.24l0.21,0.71l0.86,0.24l0.43,0.48h0.86l0.64,1.66l-0.21,4.27l-1.29,0.48l0.21,2.37h0.22l-0.43,7.35l-0.43,-0.71v-2.37l-0.43,-1.42l-1.5,0.48v0.95l-0.64,0.71l0.21,1.18l0.64,0.48v0.48h0.43l0.22,0.71h0.43l0.43,1.19l-0.65,0.47l-0.64,2.13v2.61l-0.64,1.42v3.55H289.7v3.79h0.22l0.86,5.45l-1.29,4.27l-0.21,1.9l-0.86,1.19l1.5,2.13l0.21,1.42l1.07,2.13l0.21,1.42l0.43,0.24v0.71l-1.5,0.71l-3.86,4.27l-1.07,3.08l-1.29,1.42v0.48l-1.07,1.18v0.48l-0.64,0.47l-0.65,2.37h-0.43l-0.43,0.71l-0.21,-0.23l-1.5,0.24l-1.07,1.18v0.48l-0.86,0.24l0.22,0.47l-0.43,0.71l0.21,1.42l-1.07,-0.24l-0.64,0.48v0.71l-2.36,0.47l-0.64,0.95h-0.43l-0.64,0.95l-0.86,0.48l-0.86,2.37l-1.5,0.71l-0.43,0.95l-0.86,0.71l-0.43,1.19h-0.43l-0.43,0.71h-0.43l-0.43,0.71h-0.43l-0.86,0.95l-0.65,1.66l-0.86,0.95l-0.21,0.95l-0.43,0.24l-1.07,3.08l0,0l-0.21,2.84l0,0l0.64,1.9v1.18l-0.86,-0.47l-1.07,-2.37l-0.86,-0.95l-0.21,-0.95l-0.43,-0.23l-2.14,-6.4l-0.43,-0.24l-0.43,-1.18l-0.86,-0.95l-0.43,-1.42l-0.43,-0.24l-0.21,-0.95l-0.43,-0.24l-0.86,-1.89l-0.21,-1.9l-0.43,-0.71l-0.21,-1.9l-1.07,-3.55l-0.21,-2.84l-0.43,-1.18v-1.42h-0.21l0,0v-8.76l0,0l-0.43,-0.47v-0.71l-0.64,-0.95v-0.71l-0.43,-0.47v-0.71l-0.64,-0.95v-0.71l-0.43,-0.47v-0.71l-0.86,-1.9l-1.29,-1.66v-0.48l-0.43,-0.23v-0.47l-0.64,-0.47l-0.86,-1.9l-1.29,-1.66v-0.47l-0.64,-0.47l-0.43,-1.18l-0.65,-0.47v-0.48l-0.64,-0.47l-0.43,-1.19l-0.64,-0.47l-0.43,-1.18l-1.29,-1.42l-1.07,-2.37l-0.43,-0.23l-0.86,-2.14l-0.86,-0.95l-1.5,-3.32l-0.86,-0.95l-0.21,-0.95l-0.43,-0.23l-0.22,-0.95l-0.86,-0.95l-0.21,-0.95l-0.43,-0.23l-0.21,-0.95l-0.43,-0.24v-0.47l-0.86,-1.18v-3.08l-0.86,-2.37l-2.14,-2.37l-0.43,-1.42l-0.86,-0.47l-0.21,0.71l0.86,0.71v0.48l-0.43,0.24l-0.21,-0.71l-0.61,-0.03l-0.03,0.74l2.79,5.93l0,0v0.95h-0.43l0,0l-0.86,-0.95v-0.47l-0.65,-0.47v-0.47l-0.64,-0.48v-0.47l-0.64,-0.47v-0.47l-0.65,-0.48V331.5l-7.5,-8.06l0,-0.47l-1.28,-1.18v-0.47l-1.5,-1.42v-0.47l-1.07,-1.19l-1.29,-0.47l-0.22,-0.95l-0.64,-0.71l-0.43,-0.47h-0.64l-1.29,-1.42v-0.47l-1.07,-0.95l0.21,-0.48l-0.21,-0.71l-1.29,-0.47l-0.64,-1.18h-0.64l-0.43,-0.71l-0.86,-0.23l-0.43,-0.48h-0.64l-0.64,-0.71l-1.32,-0.24l-0.61,-0.71h-0.43l-0.21,0.48l-1.71,-0.47l0,0v-0.71l0,0l-1.07,-0.24l-0.86,-1.19l-0.86,-0.23L189.79,304l-0.43,0.24l-0.22,-0.47L188.72,304l-1.5,-1.42h-0.43l-0.22,-0.71l-1.07,-0.95v-0.47l-1.07,-0.95v-0.47l-1.07,-0.95v-0.47l-1.07,-1.18l-0.21,-1.66l-0.86,-0.95h-0.43l-0.43,-0.95l-0.64,-0.47l-2.36,-5.22l-0.43,-0.23l-1.07,-2.37l0.22,-2.37l-1.07,-0.95l-0.43,-2.13v-1.19l0.43,-0.47l0.22,-5.22l-0.64,-1.42l-0.86,-5.93l-1.07,-0.71l-0.22,-0.71l0.65,-0.47l0,0l0.64,0.95l0,0l1.07,-0.24l2.79,-8.06l3.65,-3.56l0.64,-1.66h0.43l1.72,-1.9l0.64,-1.9h0.43l0.21,-0.71l1.72,-1.9l0.43,-5.22h0.21l-0.64,-5.93l0.64,-1.9l-0.43,-0.48h-0.43v-0.71l0.64,0.24l0.21,-1.19l0.64,-0.24l-0.86,-0.47v-0.71h1.93l0.22,-1.19l1.07,-0.71l1.07,-4.75l0.43,-0.23l0.21,-0.95l0.86,-0.47l0.43,-0.95l0.43,-0.24v-0.47l0.43,-0.23v-0.48l0.43,-0.24l0.86,-2.37l0.43,-0.24l1.07,-2.37l-0.43,-0.95l0.43,-2.37l-1.5,-1.56l10.62,-3.91l9.17,-2.03l9.16,-1.16l4.45,-2.61l0,0v-6.67l-2.09,-7.83l-1.05,-11.02l-0.26,-11.02l-1.31,-8.7l0,0l-2.1,-4.35l-2.35,-2.32l0,0l-0.79,-2.03l0,0l2.88,-4.64l1.57,-1.74l0,0v-7.39l0,0l9.13,2.82l8.84,3.26l0,0l10.41,4.57l0,0L273.5,146.57z",
  "Al Mu\u1E29arraq": "M320.57,7.82l0.86,0.78l3.43,0.95l4.29,0.24l0.86,1.19l1.08,0.24v1.19l-1.29,1.43l-1.5,-0.24l1.93,1.67v2.85l-1.71,3.8l0.86,5.71l-0.43,0.71h-1.5l0.64,1.19l1.5,-0.48l0.86,6.18h2.79l0.43,1.43l-1.5,1.43h-1.72l0.22,7.61l1.5,-0.24l1.07,0.71v0.95l-1.5,0.24l-1.07,-0.71l-0.43,5.23h-0.64l-1.07,-1.43l-1.93,0.24l1.72,-1.66l0.43,-1.67l-1.29,0.48l-0.21,1.19h-0.86V46.88l-1.29,-0.71l1.07,-2.14l-2.36,-0.24l-0.86,-1.9l0.43,-0.48l0.65,1.66h1.71l0.21,-7.13h-1.29l0.64,1.9v0.48h-0.64l0.43,2.85l-2.15,-0.48l0.43,-1.19l-0.86,-0.71v-0.47h0.64l-0.43,-0.95L321,36.9l-0.43,0.71h-0.86v-1.9l-4.07,0.24l-0.43,1.19l-2.36,0.95l0.43,1.43l3.22,-1.9h1.07v0.48l-3,2.85h-0.64l0.43,0.48v2.38l-0.21,0.48h-1.29l-0.64,-5.47l-1.93,0.24l-0.43,-0.47l0.43,-2.38l-1.93,0.48l-2.14,-5.94l0.43,-0.95l1.07,-0.24v-0.71h-1.07l-0.22,0.71l-0.86,-0.48v-0.71h-1.07l0.65,-1.43l-1.93,1.66l-0.22,3.09l-0.86,1.43v4.04l-1.07,1.9h-0.86l-0.64,1.43l-4.5,0.47l-0.42,-1.66l-2.57,-1.19l-1.29,-2.85h-0.86l-1.29,-0.95v-1.9l0.64,-0.95L288.2,21.44l0.43,-1.19l-1.07,-1.9l0.64,-0.48l1.29,-3.33h-1.07l-0.21,-0.71V9.55l-1.93,-0.24l0.64,-1.43h2.15l0.64,1.19h2.79l1.07,1.19l1.29,-1.19l-0.64,-1.43l1.07,-0.71l1.29,-2.14h1.07v0.48l-1.29,1.9l1.5,-0.24l1.07,-0.71l-0.86,-1.66l2.14,-1.19l2.15,0.48l0.43,-1.43l-0.65,-0.95h3.43V0.51l2.14,-0.48l1.29,1.19l3.86,-0.24v1.43l3.43,3.81l1.93,0.48l0.86,0.95L320.57,7.82zM334.29,49.02l0.21,1.43h1.5l0.21,0.95h1.29l0.22,0.71l-1.07,0.71l0.22,0.48l14.36,0.48v8.56l-4.5,0.48l-0.21,9.27h2.36l4.08,9.03l1.29,0.71l0.22,2.62h-1.29l-1.07,-3.09l-0.64,-0.24l0.21,0.71l-6.64,2.85l-0.64,0.71l-0.43,2.14l1.5,0.71l0.43,1.9l1.29,0.47l0.22,1.43h-7.72l-0.43,-0.48l0.21,-1.66l-0.64,-0.71h-2.14l0.43,-1.19l-1.5,-1.42l-0.64,-2.37l-0.64,-0.48l0.21,-2.14l-0.64,-0.71h0.65v-0.47l-1.72,-6.89l-2.14,-2.14l-1.29,-0.24l-0.21,-3.33l-1.5,-1.43l-0.64,-2.61l-1.93,-1.66l0.21,-2.38l1.72,-0.24l1.29,0.95v-2.85l-1.72,-0.24l-0.43,-0.95l0.22,-1.9l3.21,0.48l0.86,-2.38l1.07,-0.71l-0.43,-2.14h1.07v-0.71H334.29z",
  "Al Wus\u0163\xE1": "M321,117.93l0.64,2.85l1.07,0.24l1.71,2.85v1.19l-2.14,0.71l-1.07,1.19l-3,1.43l-1.5,-0.24l-1.07,-2.61l-1.93,0.48l-0.22,0.71l-1.28,0.24l-0.86,0.95h-1.29v-0.47l-1.71,0.24l0.86,2.85l-0.21,1.66l1.5,0.71l1.29,1.43v0.95l-1.5,0.24l0.21,2.38l-0.86,0.48v0.71l0.43,-0.48l1.29,0.24l0.22,0.95l-0.43,0.24h1.5l2.15,4.99l-0.43,0.47l1.93,3.56l-0.86,1.19l-1.93,-0.23l0.22,1.9l1.29,-0.24l-0.21,2.14h-1.07l0.22,0.47l-2.14,-1.19v-0.71h0.43l-0.43,-1.19l-1.93,0.24l-0.43,-0.95l0.43,-1.66l-1.07,-0.24l-0.65,-3.56l-4.5,-9.74h-0.65l-0.86,-1.66l-1.29,0.71l0.65,-1.43l-2.14,-5.7l-1.07,-1.19l-1.07,0.24l-0.86,0.95l0.86,0.71l2.57,5.46l0.43,3.09l1.71,3.56l1.72,3.32l3.22,2.85l0.86,1.9l-0.43,1.42l0.64,0.24l0.21,1.43h0.43l-0.22,1.19l-1.71,0.24l-0.22,0.95l-0.21,-0.48l-1.5,0.48l-0.21,1.19l-3.21,2.61l-0.43,1.42h1.5l-0.43,1.19l-2.14,0.48v2.14l1.05,2.42l0,0l0,0l0,0l-5.72,-4.29l-5.11,-5.44l-2.35,-4.35l-0.79,-4.13l0,0l-1.37,-2.39l0,0l-4.52,3.26l-2.35,0.22l-26.52,-8.05l0,0l-10.41,-4.57l0,0l-17.97,-6.08l0,0l-1.83,-7.12l-2.88,-6.09l-1.57,-6.38l-0.79,-8.71v-7.26l1.83,-3.19l2.88,-1.16l4.19,-0.58l10.74,-5.22l15.98,-1.45l5.27,-0.95l0.26,0.58l1.25,0.27l0,0v1.11l-1.07,0.24l-0.64,-1.66h-0.86v0.47h0.64l-0.42,1.9l1.29,0.48l-0.86,0.95l0.22,0.71l2.57,0.71l-1.71,1.9l0.86,0.95l0.22,1.67l1.28,0.24l-0.21,2.61l2.14,1.9h1.29l0.86,2.14l1.29,1.19h1.5l-0.21,0.95l1.07,2.38h1.07l-0.21,1.43l1.07,-0.48l0.43,1.9l3.43,0.48l0.86,1.9l2.14,1.67h1.29v0.95l1.29,0.24l1.93,2.61l-0.65,0.48l1.5,2.61v1.19h1.29l0.22,0.95l0.82,0.24l0.06,0.47l-0.67,0l0.21,1.19l5.15,-0.24l3,-0.95l0.21,0.48l1.93,0.24l-0.22,0.71l1.29,0.71l0.43,1.19l1.72,-0.48l0.64,1.66h2.57v-0.47l-2.14,-0.71l-1.07,-3.09l-4.5,-2.14l-1.07,-2.14l-3,-0.95l0.64,-4.28l-1.5,-0.24l-0.86,-4.51l-1.72,-2.14v-0.48l1.29,-0.24l0.86,-1.42l-0.64,-1.66l-1.5,0.71l-1.29,-1.9l0.86,-0.71l0.65,-1.9h0.86l0.65,-1.9l1.28,-0.95h1.08l0.43,-1.66l1.72,-0.95l1.71,-2.61l1.72,-0.24l1.07,-0.95l2.79,0.71h5.79l-0.22,2.14h0.86l0.22,0.95l-1.72,3.09l-1.5,0.95l-0.43,0.95l1.93,0.24l-0.21,1.19h0.64l-0.21,1.19h0.65l0.21,1.9l2.36,2.38l0.22,4.28l-0.64,0.24v-1.19h-1.07l0.64,1.43l-0.64,1.43l0.64,-0.24v0.48l-1.07,1.19l-1.29,-0.24l-0.21,0.48l1.5,4.75l0.86,7.84l1.5,0.47l0.21,1.19l3,-0.48l0.64,2.85l3.22,-1.43l-0.43,-1.19l4.72,-2.37l-0.43,-0.95l0.43,-4.04l8.58,-4.75l5.15,-2.14l1.72,-1.66h1.07l0.64,-1.19l-0.43,-2.14h0.65l2.36,2.85l0.21,1.43h-1.28l-1.29,-1.19l-2.15,3.33l-2.14,0.71l1.29,1.9l0.65,0.24l0.21,-0.48l2.15,-0.47l1.07,-1.9h1.93l0.86,-1.42h0.65l1.71,2.14l-0.21,0.95l-1.5,-0.48l0.21,0.71h2.14l1.29,1.42v0.71l-1.07,-0.24l-0.43,-0.71h-1.5l-2.57,0.24l-2.14,1.19l-4.5,-0.24l-1.07,0.71l-4.93,-0.95L321,117.93zM300.82,165L300.82,165l1.1,0.79l0,0l0.21,-1.07L300.82,165z",
  " Ash Sham\u0101l\u012Byah": "M259.04,81.9l-1.25,-0.27l-0.26,-0.58l-5.27,0.95l-15.98,1.45l-10.74,5.23l-4.19,0.58l-2.88,1.16l-1.83,3.19v7.26l0.79,8.71l1.57,6.38l2.88,6.1l1.83,7.12l0,0l0,0l0,0l0,0l0,0v7.39l0,0l-4.45,6.38l0,0l0.79,2.03l0,0l2.36,2.32l2.1,4.35l0,0l1.31,8.7l0.26,11.02l1.05,11.02l2.09,7.83v6.67l0,0l-4.45,2.61l-9.16,1.16l-9.17,2.03l-10.62,3.91l0,0l-1.29,-1.76l0.64,-1.66l0.65,-6.41l-1.72,-2.14v-0.71l-0.64,-0.23l0.43,-9.73l-1.71,-0.24v-0.71h-0.43v-0.47l2.57,0.24l0.64,-0.71v-0.71h-0.43l0.21,-2.61l-1.07,-0.48l-0.21,-1.19l-1.5,0.24v-0.71l1.07,-0.24v-0.47l-1.07,-0.23l1.29,-0.24l-0.65,-4.99l-0.64,-0.95l0.64,-1.9l-1.07,-3.33l0.43,-0.95h-1.07l-1.07,-1.42l0.21,-1.19h-1.5v-0.48l1.5,-0.47v-0.48l-0.86,-0.24v-0.95l-1.07,0.24v0.71h-0.86l-0.86,-1.19l-0.43,-0.95l1.07,-0.24v-0.71l-0.43,-0.48l-1.29,0.24l0.86,-0.71v-0.71l-1.93,0.71l-1.5,-1.19l-0.21,-0.71l0.86,-0.47v-0.71h-0.86l0.64,-0.95l-0.86,-0.48l0.64,-0.23v-0.71l-2.14,0.24l0.21,-2.37l1.07,0.48l0.65,-0.48v-1.19l-1.5,0.24l-0.86,-0.71l-1.5,-3.8l-2.14,-3.33l-1.07,-2.85l0.21,-0.95l0.86,-0.24v-1.19h-1.29l-0.43,-1.19h-1.71l0.64,-0.71v-1.19l-0.64,-0.24l-2.79,0.71l-0.86,0.95h-1.29l-0.43,-0.95l-0.21,-2.37h1.07l1.5,-1.43l2.36,-0.24l-0.22,-3.56l-1.07,-1.42l-0.86,-2.61l0.21,-1.66l-0.86,-1.66l0.21,-2.61l-1.29,-1.9l0.22,-1.19l-0.64,0.24l-0.43,-1.9l0.43,-4.51l2.36,-1.9l-1.07,-1.42l-6,0.48l-16.51,2.85l0.43,4.75l-1.5,3.8l0.43,3.09l-0.64,0.95v2.14l-1.29,2.61v1.9l0.22,1.43h1.07l0.43,1.42v0.48l-1.29,0.47l0.86,3.8l1.5,-0.24v1.9h1.93l1.07,2.14l-1.5,2.85v2.85l0.64,1.9l-0.43,1.9h-1.5l-3.64,-2.37l-3.22,-0.71h-0.43v0.71h0.43l-0.21,1.42l-1.07,0.24l-0.43,-1.9l0.64,-0.71h-2.78l-4.08,1.19l-1.5,1.66l-3.22,-0.24l-1.29,-0.71l-2.57,0.24v-0.48h-0.86l-0.64,-0.71l-3,-0.71v-1.9l1.07,-1.19v-4.04l-3,-1.19v-5.7l0.86,-0.71l-3.43,-2.61v-2.85l-0.64,-2.14l0.86,-0.48v-0.71l-0.65,-0.71l-0.21,-2.85h0.64l-0.43,-1.42l1.93,-1.9l0.64,-4.28h0.43l0.43,-1.19v-2.85h2.15l-1.07,4.04l1.29,0.71l1.72,-2.38h1.72l0.43,-1.9h0.86l1.72,1.43l-0.21,-2.37h1.72l0.22,-0.71l-4.5,-1.9l-0.64,-0.95l-4.29,-2.61l-8.79,-2.61l-29.8,-1.66l-1.71,0.24l-1.07,1.43h-0.64l-1.71,-0.24l-0.43,-1.42l-2.14,-0.71h-0.65l-0.21,1.19H71.02v-0.47h-1.07l-1.93,-1.19l-0.21,-1.19l-1.5,-2.14l-2.36,-1.42L26.21,64.94L7.56,59.72l-3.64,-0.71H0.27l-0.22,-0.95h4.08l3.65,0.71l18.65,5.23l39.67,21.86h1.71l0.21,0.71h0.65l1.5,-0.95h1.29l1.07,0.71l1.29,2.38l5.36,-0.71l0.86,0.48l0.86,2.14l27.66,1.19l4.72,0.71l6.22,2.14l6.22,4.28l6.86,2.61l2.36,-0.24l0.64,-0.71l-0.21,-1.19l0.64,-0.48l0.65,-4.52l-0.65,-9.03l-0.43,-0.48l0.43,-0.71l-1.07,-1.43l-0.43,0.95h-0.64l-0.43,-0.95l0.64,-0.47l-1.29,-0.24l-1.5,0.48l-0.43,-1.19h-0.43l-0.21,-1.9l0.21,-0.48l3,0.24l0.64,0.71l1.72,0.24l2.14,1.19l2.79,-0.48l-0.64,0.95l0.86,0.24l-0.64,0.48l0.22,0.48l1.07,0.24l-0.21,0.95l-0.65,0.24l-0.64,-1.19h-1.29l-1.29,0.95l0.22,0.71l-1.07,0.48v4.51l0.64,3.57l-0.64,6.42l2.36,-0.95l2.79,0.24l0.22,-0.48l4.29,0.48l0.86,4.04h0.43l15.65,-2.61l-0.43,-0.71l-2.57,0.24l0.64,-0.95l2.36,0.47v-0.71h1.29l0.22,1.43l3,-0.24l0.43,-1.19l1.07,-0.48l0.64,-2.61h1.07l0.86,-1.19l1.93,-3.8v-2.61h0.43V86.81l-1.5,-0.47l-0.43,-2.14h0.43l-0.22,-2.85l1.5,-0.95l-0.21,-1.19l0.64,-1.9l-0.43,-1.9l-0.86,-0.71l-0.65,-1.9l-1.29,-0.24l-1.28,1.19l-0.43,-1.67l-1.29,-1.42l0.43,-0.48l-0.43,-2.14h-1.5l-0.43,-1.19l0.43,-1.19l1.72,0.24v0.95h0.64l0.22,-1.19h-1.5l-0.64,-0.95v-1.67h0.43l0.64,-2.61l2.36,0.24l-0.64,-1.9l1.28,0.71l1.5,-0.24l0.43,-0.95l1.5,0.48l0.21,-0.71l-1.29,-1.19l2.57,0.24l2.57,-1.9v-0.95h-0.64v-2.14l1.29,-0.24l-0.21,-2.38h0.86l0.64,1.66h0.43l2.15,-1.66l1.29,-0.24l0.21,-1.9h1.29l0.22,-0.71h0.64l-0.22,1.43h1.72l0.43,-0.95l1.93,-0.48h3.65v0.71l1.29,0.48l1.5,-1.43v-0.71l4.72,0.48l4.93,-0.48l0.65,-0.47h5.14l0.64,-0.71l0.64,0.71l3.01,0.47l1.93,-0.47l1.43,0.95l0,0l2.54,5.12l-0.3,2.35l-2.12,2.01l-0.91,1.85l0.6,2.52l4.23,1.68l7.26,1.17l5.44,-1.17l4.99,-1.84l2.72,-2.01l3.17,1.68l4.39,6.71l4.29,12.52l0,0l-0.23,0.71l0.65,0.21l1.93,-0.45L259.04,81.9zM159.78,73.03l0.43,0.24l0.22,2.85h0.64l0.43,1.19l-0.86,1.43l-1.5,-0.71l0.64,-1.42l-0.64,-0.24l0.21,-1.19l-0.86,-1.42l0.43,-0.71H159.78zM63.08,93.46l1.07,1.19l1.5,0.48l-2.78,2.38h-1.07l1.07,-2.85l-0.43,-1.19H63.08z"
};

// src/Bahrain.tsx
var Bahrain = ({
  size,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  onSelect
}) => {
  const mapStyle = {
    width: size || constants.WIDTH,
    fill: mapColor || constants.MAPCOLOR,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH
  };
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    if (path) {
      path.style.fill = hoverColor || constants.HOVERCOLOR;
    }
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    if (path) {
      path.style.fill = mapColor || constants.MAPCOLOR;
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement(
    "svg",
    {
      version: "1.1",
      id: "svg2",
      x: "0px",
      y: "0px",
      viewBox: "-50 -50 900 900"
    },
    stateCode?.map((stateCode2, index) => /* @__PURE__ */ React.createElement(
      "path",
      {
        key: index,
        onClick: () => onSelect(stateCode2),
        onMouseEnter: () => handleMouseEnter(stateCode2),
        onMouseLeave: () => handleMouseLeave(stateCode2),
        id: stateCode2,
        d: drawPath[stateCode2]
      }
    ))
  )));
};
var Bahrain_default = Bahrain;

// src/index.ts
var src_default = Bahrain_default;
export {
  src_default as default
};
