module.exports = {
  "plugins": [
    "stylelint-order",
    "stylelint-scss",
  ],
  "rules": {
    "at-rule-name-case": ['lower', {
      message: "Names should be lowercase."
    }],
    "at-rule-name-space-after": ['always', {
      message: "Add a space after @ rule."
    }],
    "block-no-empty": [true, {
      message: "Remove empty block."
    }],
    "block-opening-brace-newline-after": ['always', {
      message: "No single line blocks"
    }],
    "declaration-colon-space-after": ['always', {
      message: "Add a space after a colon."
    }],
    "color-hex-case": ['lower', {
      message: "Hex values should be lowercase."
    }],
    "color-hex-length": ['long', {
      message: "Use a long hex value or replace with rbga or a variable."
    }],
    "color-named": ['never', {
      message: "Replace named color with hex, rbga or variable value."
    }],
    "color-no-invalid-hex": [true, {
      message: "Replace with a valid hex value."
    }],
    "comment-no-empty": [true, {
      message: "Remove or populate empty comment."
    }],
    "declaration-block-no-duplicate-properties": [true, {
      ignore: ["consecutive-duplicates-with-different-values"],
      message: "Remove duplicate properties within this block."
    }],
    "declaration-block-no-shorthand-property-overrides": [true, {
      message: "Shorthand property is overriding a related longhand property in the same block."
    }],
    "font-family-no-duplicate-names": [true, {
      message: "Remove duplicate font-family name."
    }],
    "declaration-no-important": [true, {
      message: "Remove !important."
    }],
    "function-calc-no-unspaced-operator": [true, {
      message: "Add a space before and after the operator in a calc() function."
    }],
    "function-comma-space-after": ['always', {
      message: "Add a space after the comma."
    }],
    "function-linear-gradient-no-nonstandard-direction": [true, {
      message: "Replace gradient direction with standard gradient direction."
    }],
    "function-url-quotes": ['always', {
      message: "Add quotes around url"
    }],
    "indentation": [2, {
      message: "Indents should be two spaces"
    }],
    "keyframe-declaration-no-important": [true, {
      message: "Remove !important declaration in keyframe declaration. Using !important within keyframes declarations is completely ignored in some browsers."
    }],
    "max-empty-lines": [2, {
      message: "No more than two empty lines permitted."
    }],
    "max-nesting-depth": [4, {
      ignore: ["blockless-at-rules"],
      message: "Don't nest more than four rules deep (three rules below the component class)."
    }],
    "media-feature-colon-space-after": ['always', {
      message: "Space needed after a colon."
    }],
    "media-feature-name-case": ['lower', {
      message: "Names should be lowercase."
    }],
    "media-feature-name-no-unknown": [true, {
      message: "This media name is unknown, change to a known name."
    }],
    "media-feature-parentheses-space-inside": ['never', {
      message: "Remove the space inside the parentheses."
    }],
    "media-feature-range-operator-space-after": ['always', {
      message: "Add a space after this range operator, thank you."
    }],
    "media-feature-range-operator-space-before": ['always', {
      message: "Add a space before this range operator."
    }],
    "no-descending-specificity": [true, {
      message: "This selector is overriding an earlier selector with greater specificity."
    }],
    "no-duplicate-selectors": [true, {
      message: "Remove this duplicate selector."
    }],
    "no-empty-source": [true, {
      message: "No empty sources. Source containing only whitespace is considered empty."
    }],
    "no-extra-semicolons": [true, {
      message: "Remove extra semicolon."
    }],
    "no-invalid-double-slash-comments": [true, {
      message: "Revise this invalid double-slash comment format."
    }],
    "no-unknown-animations": [true, {
      message: "Change to a known animation name, unknown animations aren't allowed."
    }],
    "order/properties-alphabetical-order": [true, {
      message: "Properties should be in alphabetical order."
    }],
    "property-case": ['lower', {
      message: "Names should be lowercase."
    }],
    "property-no-unknown": [true, {
      message: "Revise this unknown property."
    }],
    "selector-pseudo-element-colon-notation",
    ["double",
      message: "Use double colon notation for pseudo-elements."
    ]
    "selector-pseudo-class-no-unknown": [true, {
      message: "Revise this unknown psuedo class."
    }],
    "selector-pseudo-element-no-unknown": [true, {
      message: "Revise this unknown pseudo element."
    }],
    "selector-type-no-unknown": [true, {
      message: "Revise this unknown selector."
    }],
    "string-no-newline": [true, {
      message: "Remove the unescaped newline character in this string."
    }],
    "scss/at-function-parentheses-space-before": ['always', {
      message: "Add space before parentheses."
    }],
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": [true, {
      message: "Remove unknown @ rule."
    }],
    "scss/selector-no-redundant-nesting-selector": [true, {
      message: "Remove redundant & nesting character."
    }],
    "unit-whitelist": ["em", "rem", "%", "s", "px", "deg"],
    "value-no-vendor-prefix": [true, {
      message: "Remove vendor prefixes."
    }],
    "no-param-reassign": [2, {
      "props": false,
    }],
  },
};
