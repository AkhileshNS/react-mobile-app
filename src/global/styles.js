import {css} from '@emotion/core';

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-style: 62.5%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  :root {
    --ion-color-angular: #ac282b;
    --ion-color-communication: #8e8d93;
    --ion-color-tooling: #fe4c52;
    --ion-color-services: #fd8b2d;
    --ion-color-design: #fed035;
    --ion-color-workshop: #69bb7b;
    --ion-color-food: #3bc7c4;
    --ion-color-documentation: #b16be3;
    --ion-color-navigation: #6600cc;

    --ion-color-primary: #3880ff;
    --ion-color-primary-rgb: 56, 128, 255;
    --ion-color-primary-contrast: #ffffff;
    --ion-color-primary-contrast-rgb: 255, 255, 255;
    --ion-color-primary-shade: #3171e0;
    --ion-color-primary-tint: #4c8dff;

    --ion-color-secondary: #0cd1e8;
    --ion-color-secondary-rgb: 12, 209, 232;
    --ion-color-secondary-contrast: #ffffff;
    --ion-color-secondary-contrast-rgb: 255, 255, 255;
    --ion-color-secondary-shade: #0bb8cc;
    --ion-color-secondary-tint: #24d6ea;

    --ion-color-tertiary: #7044ff;
    --ion-color-tertiary-rgb: 112, 68, 255;
    --ion-color-tertiary-contrast: #ffffff;
    --ion-color-tertiary-contrast-rgb: 255, 255, 255;
    --ion-color-tertiary-shade: #633ce0;
    --ion-color-tertiary-tint: #7e57ff;

    --ion-color-success: #10dc60;
    --ion-color-success-rgb: 16, 220, 96;
    --ion-color-success-contrast: #ffffff;
    --ion-color-success-contrast-rgb: 255, 255, 255;
    --ion-color-success-shade: #0ec254;
    --ion-color-success-tint: #28e070;

    --ion-color-warning: #ffce00;
    --ion-color-warning-rgb: 255, 206, 0;
    --ion-color-warning-contrast: #ffffff;
    --ion-color-warning-contrast-rgb: 255, 255, 255;
    --ion-color-warning-shade: #e0b500;
    --ion-color-warning-tint: #ffd31a;

    --ion-color-danger: #f04141;
    --ion-color-danger-rgb: 245, 61, 61;
    --ion-color-danger-contrast: #ffffff;
    --ion-color-danger-contrast-rgb: 255, 255, 255;
    --ion-color-danger-shade: #d33939;
    --ion-color-danger-tint: #f25454;

    --ion-color-dark: #222428;
    --ion-color-dark-rgb: 34, 34, 34;
    --ion-color-dark-contrast: #ffffff;
    --ion-color-dark-contrast-rgb: 255, 255, 255;
    --ion-color-dark-shade: #1e2023;
    --ion-color-dark-tint: #383a3e;

    --ion-color-medium: #989aa2;
    --ion-color-medium-rgb: 152, 154, 162;
    --ion-color-medium-contrast: #ffffff;
    --ion-color-medium-contrast-rgb: 255, 255, 255;
    --ion-color-medium-shade: #86888f;
    --ion-color-medium-tint: #a2a4ab;

    --ion-color-light: #f4f5f8;
    --ion-color-light-rgb: 244, 244, 244;
    --ion-color-light-contrast: #000000;
    --ion-color-light-contrast-rgb: 0, 0, 0;
    --ion-color-light-shade: #d7d8da;
    --ion-color-light-tint: #f5f6f9;
  }
`;