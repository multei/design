/**
 * Do not edit directly
 * Generated on Sat, 30 May 2020 22:08:41 GMT
 */

(function(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else if (typeof exports === "object") {
    exports["_styleDictionary"] = factory();
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
  } else {
    root["_styleDictionary"] = factory();
  }
}(this, function() {
  return {
  "color": {
    "background": {
      "code": {
        "value": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 0.2
        },
        "original": {
          "value": "{color.base.gray.transparent.value}"
        },
        "name": "colorBackgroundCode",
        "attributes": {},
        "path": [
          "color",
          "background",
          "code"
        ]
      },
      "default": {
        "value": "#623CEA",
        "original": {
          "value": "{color.base.purple.value}"
        },
        "name": "colorBackgroundDefault",
        "attributes": {},
        "path": [
          "color",
          "background",
          "default"
        ]
      },
      "error": {
        "value": "#A63446",
        "original": {
          "value": "{color.base.red.value}"
        },
        "name": "colorBackgroundError",
        "attributes": {},
        "path": [
          "color",
          "background",
          "error"
        ]
      },
      "info": {
        "value": "#449DD1",
        "original": {
          "value": "{color.base.blue.value}"
        },
        "name": "colorBackgroundInfo",
        "attributes": {},
        "path": [
          "color",
          "background",
          "info"
        ]
      },
      "mark": {
        "value": "#F4FF52",
        "original": {
          "value": "{color.base.yellow.value}"
        },
        "name": "colorBackgroundMark",
        "attributes": {},
        "path": [
          "color",
          "background",
          "mark"
        ]
      },
      "paper": {
        "light": {
          "value": "#f6f4f3",
          "original": {
            "value": "{color.base.white.value}"
          },
          "name": "colorBackgroundPaperLight",
          "attributes": {},
          "path": [
            "color",
            "background",
            "paper",
            "light"
          ]
        },
        "dark": {
          "value": {
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 0.2
          },
          "original": {
            "value": "{color.base.gray.transparent.value}"
          },
          "name": "colorBackgroundPaperDark",
          "attributes": {},
          "path": [
            "color",
            "background",
            "paper",
            "dark"
          ]
        }
      },
      "success": {
        "value": "#71B340",
        "original": {
          "value": "{color.base.green.value}"
        },
        "name": "colorBackgroundSuccess",
        "attributes": {},
        "path": [
          "color",
          "background",
          "success"
        ]
      },
      "warning": {
        "value": "#F49F0A",
        "original": {
          "value": "{color.base.orange.value}"
        },
        "name": "colorBackgroundWarning",
        "attributes": {},
        "path": [
          "color",
          "background",
          "warning"
        ]
      }
    },
    "base": {
      "black": {
        "opaque": {
          "value": "#0f1108",
          "original": {
            "value": "#0f1108"
          },
          "name": "colorBaseBlackOpaque",
          "attributes": {},
          "path": [
            "color",
            "base",
            "black",
            "opaque"
          ]
        },
        "transparent": {
          "value": {
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 0.8
          },
          "original": {
            "value": {
              "r": 0,
              "g": 0,
              "b": 0,
              "a": 0.8
            }
          },
          "name": "colorBaseBlackTransparent",
          "attributes": {},
          "path": [
            "color",
            "base",
            "black",
            "transparent"
          ]
        }
      },
      "blue": {
        "value": "#449DD1",
        "original": {
          "value": "#449DD1"
        },
        "name": "colorBaseBlue",
        "attributes": {},
        "path": [
          "color",
          "base",
          "blue"
        ]
      },
      "blueGreen": {
        "deprecated": true,
        "deprecated_comment": "replace with the \"blue\" color",
        "value": "#119DA4",
        "original": {
          "deprecated": true,
          "deprecated_comment": "replace with the \"blue\" color",
          "value": "#119DA4"
        },
        "name": "colorBaseBlueGreen",
        "attributes": {},
        "path": [
          "color",
          "base",
          "blueGreen"
        ]
      },
      "gray": {
        "transparent": {
          "value": {
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 0.2
          },
          "original": {
            "value": {
              "r": 0,
              "g": 0,
              "b": 0,
              "a": 0.2
            }
          },
          "name": "colorBaseGrayTransparent",
          "attributes": {},
          "path": [
            "color",
            "base",
            "gray",
            "transparent"
          ]
        }
      },
      "green": {
        "value": "#71B340",
        "original": {
          "value": "#71B340"
        },
        "name": "colorBaseGreen",
        "attributes": {},
        "path": [
          "color",
          "base",
          "green"
        ]
      },
      "orange": {
        "value": "#F49F0A",
        "original": {
          "value": "#F49F0A"
        },
        "name": "colorBaseOrange",
        "attributes": {},
        "path": [
          "color",
          "base",
          "orange"
        ]
      },
      "purple": {
        "value": "#623CEA",
        "original": {
          "value": "#623CEA"
        },
        "name": "colorBasePurple",
        "attributes": {},
        "path": [
          "color",
          "base",
          "purple"
        ]
      },
      "red": {
        "value": "#A63446",
        "original": {
          "value": "#A63446"
        },
        "name": "colorBaseRed",
        "attributes": {},
        "path": [
          "color",
          "base",
          "red"
        ]
      },
      "white": {
        "value": "#f6f4f3",
        "original": {
          "value": "#f6f4f3"
        },
        "name": "colorBaseWhite",
        "attributes": {},
        "path": [
          "color",
          "base",
          "white"
        ]
      },
      "yellow": {
        "value": "#F4FF52",
        "original": {
          "value": "#F4FF52"
        },
        "name": "colorBaseYellow",
        "attributes": {},
        "path": [
          "color",
          "base",
          "yellow"
        ]
      }
    },
    "brand": {
      "primary": {
        "value": "#623CEA",
        "original": {
          "value": "{color.base.purple.value}"
        },
        "name": "colorBrandPrimary",
        "attributes": {},
        "path": [
          "color",
          "brand",
          "primary"
        ]
      },
      "secondary": {
        "value": "#449DD1",
        "original": {
          "value": "{color.base.blue.value}"
        },
        "name": "colorBrandSecondary",
        "attributes": {},
        "path": [
          "color",
          "brand",
          "secondary"
        ]
      }
    },
    "font": {
      "error": {
        "value": "#f6f4f3",
        "original": {
          "value": "{color.base.white.value}"
        },
        "name": "colorFontError",
        "attributes": {},
        "path": [
          "color",
          "font",
          "error"
        ]
      },
      "info": {
        "value": "#f6f4f3",
        "original": {
          "value": "{color.base.white.value}"
        },
        "name": "colorFontInfo",
        "attributes": {},
        "path": [
          "color",
          "font",
          "info"
        ]
      },
      "mark": {
        "value": "#0f1108",
        "original": {
          "value": "{color.base.black.opaque.value}"
        },
        "name": "colorFontMark",
        "attributes": {},
        "path": [
          "color",
          "font",
          "mark"
        ]
      },
      "primary": {
        "value": "#f6f4f3",
        "original": {
          "value": "{color.base.white.value}"
        },
        "name": "colorFontPrimary",
        "attributes": {},
        "path": [
          "color",
          "font",
          "primary"
        ]
      },
      "secondary": {
        "value": "#f6f4f3",
        "original": {
          "value": "{color.base.white.value}"
        },
        "name": "colorFontSecondary",
        "attributes": {},
        "path": [
          "color",
          "font",
          "secondary"
        ]
      },
      "success": {
        "value": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 0.8
        },
        "original": {
          "value": "{color.base.black.transparent.value}"
        },
        "name": "colorFontSuccess",
        "attributes": {},
        "path": [
          "color",
          "font",
          "success"
        ]
      },
      "warning": {
        "value": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 0.8
        },
        "original": {
          "value": "{color.base.black.transparent.value}"
        },
        "name": "colorFontWarning",
        "attributes": {},
        "path": [
          "color",
          "font",
          "warning"
        ]
      }
    }
  },
  "font": {
    "family": {
      "base": {
        "value": "Overpass, \"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif",
        "original": {
          "value": "Overpass, \"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
        },
        "name": "fontFamilyBase",
        "attributes": {},
        "path": [
          "font",
          "family",
          "base"
        ]
      }
    }
  }
};
}))
