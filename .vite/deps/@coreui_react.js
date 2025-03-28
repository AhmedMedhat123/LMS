import {
  require_react_dom
} from "./chunk-V2X5ZORR.js";
import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __commonJS,
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement2;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/@coreui/react/dist/esm/components/accordion/CAccordion.js
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/_virtual/_commonjsHelpers.js
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}

// node_modules/@coreui/react/dist/esm/_virtual/index2.js
var classnames = { exports: {} };

// node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js
var hasRequiredClassnames;
function requireClassnames() {
  if (hasRequiredClassnames) return classnames.exports;
  hasRequiredClassnames = 1;
  (function(module) {
    (function() {
      var hasOwn = {}.hasOwnProperty;
      function classNames2() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames2.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else {
        window.classNames = classNames2;
      }
    })();
  })(classnames);
  return classnames.exports;
}

// node_modules/@coreui/react/dist/esm/_virtual/index.js
var classnamesExports = requireClassnames();
var classNames = getDefaultExportFromCjs(classnamesExports);

// node_modules/@coreui/react/dist/esm/components/accordion/CAccordion.js
var CAccordionContext = (0, import_react.createContext)({});
var CAccordion = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, activeItemKey = _a.activeItemKey, _b = _a.alwaysOpen, alwaysOpen = _b === void 0 ? false : _b, className = _a.className, flush = _a.flush, rest = __rest(_a, ["children", "activeItemKey", "alwaysOpen", "className", "flush"]);
  var _c = (0, import_react.useState)(activeItemKey), _activeItemKey = _c[0], setActiveKey = _c[1];
  return import_react.default.createElement(
    "div",
    __assign({ className: classNames("accordion", { "accordion-flush": flush }, className) }, rest, { ref }),
    import_react.default.createElement(CAccordionContext.Provider, { value: { _activeItemKey, alwaysOpen, setActiveKey } }, children)
  );
});
CAccordion.propTypes = {
  alwaysOpen: import_prop_types.default.bool,
  activeItemKey: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
  children: import_prop_types.default.node,
  className: import_prop_types.default.string,
  flush: import_prop_types.default.bool
};
CAccordion.displayName = "CAccordion";

// node_modules/@coreui/react/dist/esm/components/accordion/CAccordionBody.js
var import_react8 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/components/accordion/CAccordionItem.js
var import_react2 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var CAccordionItemContext = (0, import_react2.createContext)({});
var CAccordionItem = (0, import_react2.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, id = _a.id, itemKey = _a.itemKey, rest = __rest(_a, ["children", "className", "id", "itemKey"]);
  var _id = id !== null && id !== void 0 ? id : (0, import_react2.useId)();
  var _itemKey = (0, import_react2.useRef)(itemKey !== null && itemKey !== void 0 ? itemKey : _id);
  var _b = (0, import_react2.useContext)(CAccordionContext), _activeItemKey = _b._activeItemKey, alwaysOpen = _b.alwaysOpen, setActiveKey = _b.setActiveKey;
  var _c = (0, import_react2.useState)(Boolean(_activeItemKey === _itemKey.current)), visible = _c[0], setVisible = _c[1];
  (0, import_react2.useEffect)(function() {
    if (!alwaysOpen && visible) {
      setActiveKey(_itemKey.current);
    }
  }, [visible]);
  (0, import_react2.useEffect)(function() {
    setVisible(Boolean(_activeItemKey === _itemKey.current));
  }, [_activeItemKey]);
  return import_react2.default.createElement(
    "div",
    __assign({ className: classNames("accordion-item", className) }, rest, { ref }),
    import_react2.default.createElement(CAccordionItemContext.Provider, { value: { id: _id, setVisible, visible } }, children)
  );
});
CAccordionItem.propTypes = {
  children: import_prop_types2.default.node,
  className: import_prop_types2.default.string,
  itemKey: import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.string])
};
CAccordionItem.displayName = "CAccordionItem";

// node_modules/@coreui/react/dist/esm/components/collapse/CCollapse.js
var import_react7 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/hooks/useForkedRef.js
var import_react3 = __toESM(require_react());
function useForkedRef() {
  var refs = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    refs[_i] = arguments[_i];
  }
  return (0, import_react3.useMemo)(function() {
    if (refs.every(function(ref) {
      return ref == null;
    })) {
      return null;
    }
    return function(node) {
      refs.forEach(function(ref) {
        assignRef(ref, node);
      });
    };
  }, refs);
}
function assignRef(ref, value) {
  if (ref == null)
    return;
  if (isFunction(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (_a) {
      throw new Error('Cannot assign value "'.concat(value, '" to ref "').concat(ref, '"'));
    }
  }
}
function isFunction(value) {
  return !!(value && {}.toString.call(value) == "[object Function]");
}

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/@coreui/react/dist/esm/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/@coreui/react/dist/esm/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}

// node_modules/@coreui/react/dist/esm/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@coreui/react/dist/esm/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// node_modules/@coreui/react/dist/esm/node_modules/react-transition-group/esm/CSSTransition.js
var import_prop_types5 = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

// node_modules/@coreui/react/dist/esm/node_modules/dom-helpers/esm/addClass.js
function addClass(element, className) {
  if (element.classList) element.classList.add(className);
  else if (!hasClass(element, className)) if (typeof element.className === "string") element.className = element.className + " " + className;
  else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}

// node_modules/@coreui/react/dist/esm/node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}

// node_modules/@coreui/react/dist/esm/node_modules/react-transition-group/esm/CSSTransition.js
var import_react6 = __toESM(require_react());

// node_modules/@coreui/react/dist/esm/node_modules/react-transition-group/esm/Transition.js
var import_prop_types4 = __toESM(require_prop_types());
var import_react5 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@coreui/react/dist/esm/node_modules/react-transition-group/esm/config.js
var config = {
  disabled: false
};

// node_modules/@coreui/react/dist/esm/node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types3 = __toESM(require_prop_types());
var timeoutsShape = true ? import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.shape({
  enter: import_prop_types3.default.number,
  exit: import_prop_types3.default.number,
  appear: import_prop_types3.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types3.default.oneOfType([import_prop_types3.default.string, import_prop_types3.default.shape({
  enter: import_prop_types3.default.string,
  exit: import_prop_types3.default.string,
  active: import_prop_types3.default.string
}), import_prop_types3.default.shape({
  enter: import_prop_types3.default.string,
  enterDone: import_prop_types3.default.string,
  enterActive: import_prop_types3.default.string,
  exit: import_prop_types3.default.string,
  exitDone: import_prop_types3.default.string,
  exitActive: import_prop_types3.default.string
})]) : null;

// node_modules/@coreui/react/dist/esm/node_modules/react-transition-group/esm/TransitionGroupContext.js
var import_react4 = __toESM(require_react());
var TransitionGroupContext = import_react4.default.createContext(null);

// node_modules/@coreui/react/dist/esm/node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};

// node_modules/@coreui/react/dist/esm/node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
          if (node) forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : import_react_dom.default.findDOMNode(this);
    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children;
    _this$props.in;
    _this$props.mountOnEnter;
    _this$props.unmountOnExit;
    _this$props.appear;
    _this$props.enter;
    _this$props.exit;
    _this$props.timeout;
    _this$props.addEndListener;
    _this$props.onEnter;
    _this$props.onEntering;
    _this$props.onEntered;
    _this$props.onExit;
    _this$props.onExiting;
    _this$props.onExited;
    _this$props.nodeRef;
    var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      import_react5.default.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : import_react5.default.cloneElement(import_react5.default.Children.only(children), childProps))
    );
  };
  return Transition2;
}(import_react5.default.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: import_prop_types4.default.shape({
    current: typeof Element === "undefined" ? import_prop_types4.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types4.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: import_prop_types4.default.oneOfType([import_prop_types4.default.func.isRequired, import_prop_types4.default.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: import_prop_types4.default.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: import_prop_types4.default.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: import_prop_types4.default.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: import_prop_types4.default.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: import_prop_types4.default.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: import_prop_types4.default.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: import_prop_types4.default.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: import_prop_types4.default.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types4.default.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: import_prop_types4.default.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: import_prop_types4.default.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: import_prop_types4.default.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: import_prop_types4.default.func
} : {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

// node_modules/@coreui/react/dist/esm/node_modules/react-transition-group/esm/CSSTransition.js
var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return addClass(node, c);
  });
};
var removeClass2 = function removeClass3(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return removeClass(node, c);
  });
};
var CSSTransition = function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node, "exit");
      _this.addClass(node, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node, type);
      _this.addClass(node, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
      _this.removeClasses(node, "appear");
      _this.removeClasses(node, "enter");
      _this.addClass(node, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
      _this.addClass(node, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
      _this.removeClasses(node, "exit");
      _this.addClass(node, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames2 = _this.props.classNames;
      var isStringClassNames = typeof classNames2 === "string";
      var prefix = isStringClassNames && classNames2 ? classNames2 + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames2[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames2[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames2[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  var _proto = CSSTransition2.prototype;
  _proto.addClass = function addClass2(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      if (node) forceReflow(node);
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node, className);
    }
  };
  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass2(node, baseClassName);
    }
    if (activeClassName) {
      removeClass2(node, activeClassName);
    }
    if (doneClassName) {
      removeClass2(node, doneClassName);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props;
    _this$props.classNames;
    var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
    return import_react6.default.createElement(Transition, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
}(import_react6.default.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = true ? _extends({}, Transition.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: import_prop_types5.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types5.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: import_prop_types5.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: import_prop_types5.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: import_prop_types5.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: import_prop_types5.default.func
}) : {};

// node_modules/@coreui/react/dist/esm/components/collapse/CCollapse.js
var CCollapse = (0, import_react7.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, horizontal = _a.horizontal, onHide = _a.onHide, onShow = _a.onShow, visible = _a.visible, rest = __rest(_a, ["children", "className", "horizontal", "onHide", "onShow", "visible"]);
  var collapseRef = (0, import_react7.useRef)(null);
  var forkedRef = useForkedRef(ref, collapseRef);
  var _b = (0, import_react7.useState)(), height = _b[0], setHeight = _b[1];
  var _c = (0, import_react7.useState)(), width = _c[0], setWidth = _c[1];
  var onEntering = function() {
    onShow && onShow();
    if (horizontal) {
      collapseRef.current && setWidth(collapseRef.current.scrollWidth);
      return;
    }
    collapseRef.current && setHeight(collapseRef.current.scrollHeight);
  };
  var onEntered = function() {
    if (horizontal) {
      setWidth(0);
      return;
    }
    setHeight(0);
  };
  var onExit = function() {
    if (horizontal) {
      collapseRef.current && setWidth(collapseRef.current.scrollWidth);
      return;
    }
    collapseRef.current && setHeight(collapseRef.current.scrollHeight);
  };
  var onExiting = function() {
    onHide && onHide();
    if (horizontal) {
      setWidth(0);
      return;
    }
    setHeight(0);
  };
  var onExited = function() {
    if (horizontal) {
      setWidth(0);
      return;
    }
    setHeight(0);
  };
  return import_react7.default.createElement(CSSTransition, { in: visible, nodeRef: collapseRef, onEntering, onEntered, onExit, onExiting, onExited, timeout: 350 }, function(state) {
    var currentHeight = height === 0 ? null : { height };
    var currentWidth = width === 0 ? null : { width };
    return import_react7.default.createElement("div", __assign({ className: classNames(className, {
      "collapse-horizontal": horizontal,
      collapsing: state === "entering" || state === "exiting",
      "collapse show": state === "entered",
      collapse: state === "exited"
    }), style: __assign(__assign({}, currentHeight), currentWidth) }, rest, { ref: forkedRef }), children);
  });
});
CCollapse.propTypes = {
  children: import_prop_types6.default.node,
  className: import_prop_types6.default.string,
  horizontal: import_prop_types6.default.bool,
  onHide: import_prop_types6.default.func,
  onShow: import_prop_types6.default.func,
  visible: import_prop_types6.default.bool
};
CCollapse.displayName = "CCollapse";

// node_modules/@coreui/react/dist/esm/components/accordion/CAccordionBody.js
var CAccordionBody = (0, import_react8.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  var _b = (0, import_react8.useContext)(CAccordionItemContext), id = _b.id, visible = _b.visible;
  return import_react8.default.createElement(
    CCollapse,
    { className: "accordion-collapse", id, visible },
    import_react8.default.createElement("div", __assign({ className: classNames("accordion-body", className) }, rest, { ref }), children)
  );
});
CAccordionBody.propTypes = {
  children: import_prop_types7.default.node,
  className: import_prop_types7.default.string
};
CAccordionBody.displayName = "CAccordionBody";

// node_modules/@coreui/react/dist/esm/components/accordion/CAccordionButton.js
var import_react9 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());
var CAccordionButton = (0, import_react9.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  var _b = (0, import_react9.useContext)(CAccordionItemContext), id = _b.id, visible = _b.visible, setVisible = _b.setVisible;
  return import_react9.default.createElement("button", __assign({ type: "button", className: classNames("accordion-button", { collapsed: !visible }, className), "aria-controls": id, "aria-expanded": visible, onClick: function() {
    return setVisible(!visible);
  } }, rest, { ref }), children);
});
CAccordionButton.propTypes = {
  children: import_prop_types8.default.node,
  className: import_prop_types8.default.string
};
CAccordionButton.displayName = "CAccordionButton";

// node_modules/@coreui/react/dist/esm/components/accordion/CAccordionHeader.js
var import_react10 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());
var CAccordionHeader = (0, import_react10.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react10.default.createElement(
    "div",
    __assign({ className: classNames("accordion-header", className) }, rest, { ref }),
    import_react10.default.createElement(CAccordionButton, null, children)
  );
});
CAccordionHeader.propTypes = {
  children: import_prop_types9.default.node,
  className: import_prop_types9.default.string
};
CAccordionHeader.displayName = "CAccordionHeader";

// node_modules/@coreui/react/dist/esm/components/alert/CAlert.js
var import_react12 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/components/close-button/CCloseButton.js
var import_react11 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());
var CCloseButton = (0, import_react11.forwardRef)(function(_a, ref) {
  var className = _a.className, dark = _a.dark, disabled = _a.disabled, white = _a.white, rest = __rest(_a, ["className", "dark", "disabled", "white"]);
  return import_react11.default.createElement("button", __assign({ type: "button", className: classNames("btn", "btn-close", {
    "btn-close-white": white
  }, disabled, className), "aria-label": "Close", disabled }, dark && { "data-coreui-theme": "dark" }, rest, { ref }));
});
CCloseButton.propTypes = {
  className: import_prop_types10.default.string,
  dark: import_prop_types10.default.bool,
  disabled: import_prop_types10.default.bool,
  white: import_prop_types10.default.bool
};
CCloseButton.displayName = "CCloseButton";

// node_modules/@coreui/react/dist/esm/props.js
var import_prop_types11 = __toESM(require_prop_types());
var colorPropType = import_prop_types11.default.oneOfType([
  import_prop_types11.default.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "light"
  ]),
  import_prop_types11.default.string
]);
var fallbackPlacementsPropType = import_prop_types11.default.oneOfType([
  import_prop_types11.default.arrayOf(import_prop_types11.default.oneOf(["top", "bottom", "right", "left"]).isRequired),
  import_prop_types11.default.oneOf(["top", "bottom", "right", "left"])
]);
var placementPropType = import_prop_types11.default.oneOf([
  "auto",
  "auto-start",
  "auto-end",
  "top-end",
  "top",
  "top-start",
  "bottom-end",
  "bottom",
  "bottom-start",
  "right-start",
  "right",
  "right-end",
  "left-start",
  "left",
  "left-end"
]);
var shapePropType = import_prop_types11.default.oneOfType([
  import_prop_types11.default.oneOf([
    "rounded",
    "rounded-top",
    "rounded-end",
    "rounded-bottom",
    "rounded-start",
    "rounded-circle",
    "rounded-pill",
    "rounded-0",
    "rounded-1",
    "rounded-2",
    "rounded-3"
  ]),
  import_prop_types11.default.string
]);
var textColorsPropType = import_prop_types11.default.oneOfType([
  colorPropType,
  import_prop_types11.default.oneOf(["white", "muted"]),
  import_prop_types11.default.string
]);
var triggerPropType = import_prop_types11.default.oneOfType([
  import_prop_types11.default.arrayOf(import_prop_types11.default.oneOf(["hover", "focus", "click"]).isRequired),
  import_prop_types11.default.oneOf(["hover", "focus", "click"])
]);

// node_modules/@coreui/react/dist/esm/components/alert/CAlert.js
var CAlert = (0, import_react12.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, _b = _a.color, color = _b === void 0 ? "primary" : _b, dismissible = _a.dismissible, variant = _a.variant, _c = _a.visible, visible = _c === void 0 ? true : _c, onClose = _a.onClose, rest = __rest(_a, ["children", "className", "color", "dismissible", "variant", "visible", "onClose"]);
  var alertRef = (0, import_react12.useRef)(null);
  var forkedRef = useForkedRef(ref, alertRef);
  var _d = (0, import_react12.useState)(visible), _visible = _d[0], setVisible = _d[1];
  (0, import_react12.useEffect)(function() {
    setVisible(visible);
  }, [visible]);
  return import_react12.default.createElement(Transition, { in: _visible, mountOnEnter: true, nodeRef: alertRef, onExit: onClose, timeout: 150, unmountOnExit: true }, function(state) {
    return import_react12.default.createElement(
      "div",
      __assign({ className: classNames("alert", variant === "solid" ? "bg-".concat(color, " text-white") : "alert-".concat(color), {
        "alert-dismissible fade": dismissible,
        show: state === "entered"
      }, className), role: "alert" }, rest, { ref: forkedRef }),
      children,
      dismissible && import_react12.default.createElement(CCloseButton, { onClick: function() {
        return setVisible(false);
      } })
    );
  });
});
CAlert.propTypes = {
  children: import_prop_types12.default.node,
  className: import_prop_types12.default.string,
  color: colorPropType.isRequired,
  dismissible: import_prop_types12.default.bool,
  onClose: import_prop_types12.default.func,
  variant: import_prop_types12.default.string,
  visible: import_prop_types12.default.bool
};
CAlert.displayName = "CAlert";

// node_modules/@coreui/react/dist/esm/components/alert/CAlertHeading.js
var import_react13 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());
var CAlertHeading = (0, import_react13.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "h4" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react13.default.createElement(Component, __assign({ className: classNames("alert-heading", className) }, rest, { ref }), children);
});
CAlertHeading.propTypes = {
  as: import_prop_types13.default.elementType,
  children: import_prop_types13.default.node,
  className: import_prop_types13.default.string
};
CAlertHeading.displayName = "CAlertHeading";

// node_modules/@coreui/react/dist/esm/components/alert/CAlertLink.js
var import_react15 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/components/link/CLink.js
var import_react14 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());
var CLink = (0, import_react14.forwardRef)(function(_a, ref) {
  var children = _a.children, active = _a.active, _b = _a.as, Component = _b === void 0 ? "a" : _b, className = _a.className, disabled = _a.disabled, rest = __rest(_a, ["children", "active", "as", "className", "disabled"]);
  return import_react14.default.createElement(
    Component,
    __assign({
      // TODO: remove duplicated classes ex. `active active` in `<CListGroupItem>`
      className: classNames(className, { active, disabled })
    }, active && { "aria-current": "page" }, Component === "a" && disabled && { "aria-disabled": true, tabIndex: -1 }, (Component === "a" || Component === "button") && {
      onClick: function(event) {
        event.preventDefault;
        !disabled && rest.onClick && rest.onClick(event);
      }
    }, { disabled }, rest, { ref }),
    children
  );
});
CLink.propTypes = {
  active: import_prop_types14.default.bool,
  as: import_prop_types14.default.elementType,
  children: import_prop_types14.default.node,
  className: import_prop_types14.default.string,
  disabled: import_prop_types14.default.bool
};
CLink.displayName = "CLink";

// node_modules/@coreui/react/dist/esm/components/alert/CAlertLink.js
var CAlertLink = (0, import_react15.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react15.default.createElement(CLink, __assign({ className: classNames("alert-link", className) }, rest, { ref }), children);
});
CAlertLink.propTypes = {
  children: import_prop_types15.default.node,
  className: import_prop_types15.default.string
};
CAlertLink.displayName = "CAlertLink";

// node_modules/@coreui/react/dist/esm/components/avatar/CAvatar.js
var import_react16 = __toESM(require_react());
var import_prop_types16 = __toESM(require_prop_types());
var CAvatar = (0, import_react16.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, shape = _a.shape, size = _a.size, src = _a.src, status = _a.status, textColor = _a.textColor, rest = __rest(_a, ["children", "className", "color", "shape", "size", "src", "status", "textColor"]);
  var statusClassName = status && classNames("avatar-status", "bg-".concat(status));
  return import_react16.default.createElement(
    "div",
    __assign({ className: classNames("avatar", (_b = {}, _b["bg-".concat(color)] = color, _b["avatar-".concat(size)] = size, _b["text-".concat(textColor)] = textColor, _b), shape, className) }, rest, { ref }),
    src ? import_react16.default.createElement("img", { src, className: "avatar-img" }) : children,
    status && import_react16.default.createElement("span", { className: statusClassName })
  );
});
CAvatar.propTypes = {
  children: import_prop_types16.default.node,
  className: import_prop_types16.default.string,
  color: colorPropType,
  shape: shapePropType,
  size: import_prop_types16.default.string,
  src: import_prop_types16.default.string,
  status: import_prop_types16.default.string,
  textColor: textColorsPropType
};
CAvatar.displayName = "CAvatar";

// node_modules/@coreui/react/dist/esm/components/backdrop/CBackdrop.js
var import_react17 = __toESM(require_react());
var import_prop_types17 = __toESM(require_prop_types());
var CBackdrop = (0, import_react17.forwardRef)(function(_a, ref) {
  var _b = _a.className, className = _b === void 0 ? "modal-backdrop" : _b, visible = _a.visible, rest = __rest(_a, ["className", "visible"]);
  var backdropRef = (0, import_react17.useRef)(null);
  var forkedRef = useForkedRef(ref, backdropRef);
  return import_react17.default.createElement(Transition, { in: visible, mountOnEnter: true, nodeRef: backdropRef, timeout: 150, unmountOnExit: true }, function(state) {
    return import_react17.default.createElement("div", __assign({ className: classNames(className, "fade", {
      show: state === "entered"
    }) }, rest, { ref: forkedRef }));
  });
});
CBackdrop.propTypes = {
  className: import_prop_types17.default.string,
  visible: import_prop_types17.default.bool
};
CBackdrop.displayName = "CBackdrop";

// node_modules/@coreui/react/dist/esm/components/badge/CBadge.js
var import_react18 = __toESM(require_react());
var import_prop_types18 = __toESM(require_prop_types());
var CBadge = (0, import_react18.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, _c = _a.as, Component = _c === void 0 ? "span" : _c, className = _a.className, color = _a.color, position = _a.position, shape = _a.shape, size = _a.size, textBgColor = _a.textBgColor, textColor = _a.textColor, rest = __rest(_a, ["children", "as", "className", "color", "position", "shape", "size", "textBgColor", "textColor"]);
  return import_react18.default.createElement(Component, __assign({ className: classNames("badge", (_b = {}, _b["bg-".concat(color)] = color, _b["position-absolute translate-middle"] = position, _b["top-0"] = position === null || position === void 0 ? void 0 : position.includes("top"), _b["top-100"] = position === null || position === void 0 ? void 0 : position.includes("bottom"), _b["start-100"] = position === null || position === void 0 ? void 0 : position.includes("end"), _b["start-0"] = position === null || position === void 0 ? void 0 : position.includes("start"), _b["badge-".concat(size)] = size, _b["text-".concat(textColor)] = textColor, _b["text-bg-".concat(textBgColor)] = textBgColor, _b), shape, className) }, rest, { ref }), children);
});
CBadge.propTypes = {
  as: import_prop_types18.default.elementType,
  children: import_prop_types18.default.node,
  className: import_prop_types18.default.string,
  color: colorPropType,
  position: import_prop_types18.default.oneOf(["top-start", "top-end", "bottom-end", "bottom-start"]),
  shape: shapePropType,
  size: import_prop_types18.default.oneOf(["sm"]),
  textBgColor: colorPropType,
  textColor: textColorsPropType
};
CBadge.displayName = "CBadge";

// node_modules/@coreui/react/dist/esm/components/breadcrumb/CBreadcrumb.js
var import_react19 = __toESM(require_react());
var import_prop_types19 = __toESM(require_prop_types());
var CBreadcrumb = (0, import_react19.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react19.default.createElement(
    "nav",
    { "aria-label": "breadcrumb" },
    import_react19.default.createElement("ol", __assign({ className: classNames("breadcrumb", className) }, rest, { ref }), children)
  );
});
CBreadcrumb.propTypes = {
  children: import_prop_types19.default.node,
  className: import_prop_types19.default.string
};
CBreadcrumb.displayName = "CBreadcrumb";

// node_modules/@coreui/react/dist/esm/components/breadcrumb/CBreadcrumbItem.js
var import_react20 = __toESM(require_react());
var import_prop_types20 = __toESM(require_prop_types());
var CBreadcrumbItem = (0, import_react20.forwardRef)(function(_a, ref) {
  var children = _a.children, active = _a.active, as = _a.as, className = _a.className, href = _a.href, rest = __rest(_a, ["children", "active", "as", "className", "href"]);
  return import_react20.default.createElement("li", __assign({ className: classNames("breadcrumb-item", {
    active
  }, className) }, active && { "aria-current": "page" }, rest, { ref }), href ? import_react20.default.createElement(CLink, { as, href }, children) : children);
});
CBreadcrumbItem.propTypes = {
  active: import_prop_types20.default.bool,
  children: import_prop_types20.default.node,
  className: import_prop_types20.default.string,
  href: import_prop_types20.default.string
};
CBreadcrumbItem.displayName = "CBreadcrumbItem";

// node_modules/@coreui/react/dist/esm/components/button/CButton.js
var import_react21 = __toESM(require_react());
var import_prop_types21 = __toESM(require_prop_types());
var CButton = (0, import_react21.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, _c = _a.as, as = _c === void 0 ? "button" : _c, className = _a.className, color = _a.color, shape = _a.shape, size = _a.size, _d = _a.type, type = _d === void 0 ? "button" : _d, variant = _a.variant, rest = __rest(_a, ["children", "as", "className", "color", "shape", "size", "type", "variant"]);
  return import_react21.default.createElement(CLink, __assign({ as: rest.href ? "a" : as }, !rest.href && { type }, { className: classNames("btn", (_b = {}, _b["btn-".concat(color)] = color && !variant, _b["btn-".concat(variant, "-").concat(color)] = color && variant, _b["btn-".concat(size)] = size, _b), shape, className) }, rest, { ref }), children);
});
CButton.propTypes = {
  as: import_prop_types21.default.elementType,
  children: import_prop_types21.default.node,
  className: import_prop_types21.default.string,
  color: colorPropType,
  shape: import_prop_types21.default.string,
  size: import_prop_types21.default.oneOf(["sm", "lg"]),
  type: import_prop_types21.default.oneOf(["button", "submit", "reset"]),
  variant: import_prop_types21.default.oneOf(["outline", "ghost"])
};
CButton.displayName = "CButton";

// node_modules/@coreui/react/dist/esm/components/button-group/CButtonToolbar.js
var import_react22 = __toESM(require_react());
var import_prop_types22 = __toESM(require_prop_types());
var CButtonToolbar = (0, import_react22.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react22.default.createElement("div", __assign({ className: classNames("btn-toolbar", className) }, rest, { ref }), children);
});
CButtonToolbar.propTypes = {
  children: import_prop_types22.default.node,
  className: import_prop_types22.default.string
};
CButtonToolbar.displayName = "CButtonToolbar";

// node_modules/@coreui/react/dist/esm/components/button-group/CButtonGroup.js
var import_react23 = __toESM(require_react());
var import_prop_types23 = __toESM(require_prop_types());
var CButtonGroup = (0, import_react23.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, size = _a.size, vertical = _a.vertical, rest = __rest(_a, ["children", "className", "size", "vertical"]);
  return import_react23.default.createElement("div", __assign({ className: classNames(vertical ? "btn-group-vertical" : "btn-group", (_b = {}, _b["btn-group-".concat(size)] = size, _b), className) }, rest, { ref }), children);
});
CButtonGroup.propTypes = {
  children: import_prop_types23.default.node,
  className: import_prop_types23.default.string,
  size: import_prop_types23.default.oneOf(["sm", "lg"]),
  vertical: import_prop_types23.default.bool
};
CButtonGroup.displayName = "CButtonGroup";

// node_modules/@coreui/react/dist/esm/components/callout/CCallout.js
var import_react24 = __toESM(require_react());
var import_prop_types24 = __toESM(require_prop_types());
var CCallout = (0, import_react24.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
  return import_react24.default.createElement("div", __assign({ className: classNames("callout", (_b = {}, _b["callout-".concat(color)] = color, _b), className) }, rest, { ref }), children);
});
CCallout.propTypes = {
  children: import_prop_types24.default.node,
  className: import_prop_types24.default.string,
  color: colorPropType
};
CCallout.displayName = "CCallout";

// node_modules/@coreui/react/dist/esm/components/card/CCard.js
var import_react25 = __toESM(require_react());
var import_prop_types25 = __toESM(require_prop_types());
var CCard = (0, import_react25.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, textBgColor = _a.textBgColor, textColor = _a.textColor, rest = __rest(_a, ["children", "className", "color", "textBgColor", "textColor"]);
  return import_react25.default.createElement("div", __assign({ className: classNames("card", (_b = {}, _b["bg-".concat(color)] = color, _b["text-".concat(textColor)] = textColor, _b["text-bg-".concat(textBgColor)] = textBgColor, _b), className) }, rest, { ref }), children);
});
CCard.propTypes = {
  children: import_prop_types25.default.node,
  className: import_prop_types25.default.string,
  color: colorPropType,
  textBgColor: colorPropType,
  textColor: import_prop_types25.default.string
};
CCard.displayName = "CCard";

// node_modules/@coreui/react/dist/esm/components/card/CCardBody.js
var import_react26 = __toESM(require_react());
var import_prop_types26 = __toESM(require_prop_types());
var CCardBody = (0, import_react26.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react26.default.createElement("div", __assign({ className: classNames("card-body", className) }, rest, { ref }), children);
});
CCardBody.propTypes = {
  children: import_prop_types26.default.node,
  className: import_prop_types26.default.string
};
CCardBody.displayName = "CCardBody";

// node_modules/@coreui/react/dist/esm/components/card/CCardFooter.js
var import_prop_types27 = __toESM(require_prop_types());
var import_react27 = __toESM(require_react());
var CCardFooter = (0, import_react27.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react27.default.createElement("div", __assign({ className: classNames("card-footer", className) }, rest, { ref }), children);
});
CCardFooter.propTypes = {
  children: import_prop_types27.default.node,
  className: import_prop_types27.default.string
};
CCardFooter.displayName = "CCardFooter";

// node_modules/@coreui/react/dist/esm/components/card/CCardGroup.js
var import_react28 = __toESM(require_react());
var import_prop_types28 = __toESM(require_prop_types());
var CCardGroup = (0, import_react28.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react28.default.createElement("div", __assign({ className: classNames("card-group", className) }, rest, { ref }), children);
});
CCardGroup.propTypes = {
  children: import_prop_types28.default.node,
  className: import_prop_types28.default.string
};
CCardGroup.displayName = "CCardGroup";

// node_modules/@coreui/react/dist/esm/components/card/CCardHeader.js
var import_react29 = __toESM(require_react());
var import_prop_types29 = __toESM(require_prop_types());
var CCardHeader = (0, import_react29.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "div" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react29.default.createElement(Component, __assign({ className: classNames("card-header", className) }, rest, { ref }), children);
});
CCardHeader.propTypes = {
  as: import_prop_types29.default.elementType,
  children: import_prop_types29.default.node,
  className: import_prop_types29.default.string
};
CCardHeader.displayName = "CCardHeader";

// node_modules/@coreui/react/dist/esm/components/card/CCardImage.js
var import_react30 = __toESM(require_react());
var import_prop_types30 = __toESM(require_prop_types());
var CCardImage = (0, import_react30.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "img" : _b, className = _a.className, orientation = _a.orientation, rest = __rest(_a, ["children", "as", "className", "orientation"]);
  return import_react30.default.createElement(Component, __assign({ className: classNames(orientation ? "card-img-".concat(orientation) : "card-img", className) }, rest, { ref }), children);
});
CCardImage.propTypes = {
  as: import_prop_types30.default.elementType,
  children: import_prop_types30.default.node,
  className: import_prop_types30.default.string,
  orientation: import_prop_types30.default.oneOf(["top", "bottom"])
};
CCardImage.displayName = "CCardImage";

// node_modules/@coreui/react/dist/esm/components/card/CCardImageOverlay.js
var import_react31 = __toESM(require_react());
var import_prop_types31 = __toESM(require_prop_types());
var CCardImageOverlay = (0, import_react31.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react31.default.createElement("div", __assign({ className: classNames("card-img-overlay", className) }, rest, { ref }), children);
});
CCardImageOverlay.propTypes = {
  children: import_prop_types31.default.node,
  className: import_prop_types31.default.string
};
CCardImageOverlay.displayName = "CCardImageOverlay";

// node_modules/@coreui/react/dist/esm/components/card/CCardLink.js
var import_react32 = __toESM(require_react());
var import_prop_types32 = __toESM(require_prop_types());
var CCardLink = (0, import_react32.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react32.default.createElement(CLink, __assign({ className: classNames("card-link", className) }, rest, { ref }), children);
});
CCardLink.propTypes = {
  children: import_prop_types32.default.node,
  className: import_prop_types32.default.string
};
CCardLink.displayName = "CCardLink";

// node_modules/@coreui/react/dist/esm/components/card/CCardSubtitle.js
var import_react33 = __toESM(require_react());
var import_prop_types33 = __toESM(require_prop_types());
var CCardSubtitle = (0, import_react33.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "h6" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react33.default.createElement(Component, __assign({ className: classNames("card-subtitle", className) }, rest, { ref }), children);
});
CCardSubtitle.propTypes = {
  as: import_prop_types33.default.elementType,
  children: import_prop_types33.default.node,
  className: import_prop_types33.default.string
};
CCardSubtitle.displayName = "CCardSubtitle";

// node_modules/@coreui/react/dist/esm/components/card/CCardText.js
var import_react34 = __toESM(require_react());
var import_prop_types34 = __toESM(require_prop_types());
var CCardText = (0, import_react34.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "p" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react34.default.createElement(Component, __assign({ className: classNames("card-text", className) }, rest, { ref }), children);
});
CCardText.propTypes = {
  as: import_prop_types34.default.elementType,
  children: import_prop_types34.default.node,
  className: import_prop_types34.default.string
};
CCardText.displayName = "CCardText";

// node_modules/@coreui/react/dist/esm/components/card/CCardTitle.js
var import_react35 = __toESM(require_react());
var import_prop_types35 = __toESM(require_prop_types());
var CCardTitle = (0, import_react35.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "h5" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react35.default.createElement(Component, __assign({ className: classNames("card-title", className) }, rest, { ref }), children);
});
CCardTitle.propTypes = {
  as: import_prop_types35.default.elementType,
  children: import_prop_types35.default.node,
  className: import_prop_types35.default.string
};
CCardTitle.displayName = "CCardTitle";

// node_modules/@coreui/react/dist/esm/components/carousel/CCarousel.js
var import_react36 = __toESM(require_react());
var import_prop_types36 = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/utils/isInViewport.js
var isInViewport = function(element) {
  var rect = element.getBoundingClientRect();
  return Math.floor(rect.top) >= 0 && Math.floor(rect.left) >= 0 && Math.floor(rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight) && Math.floor(rect.right) <= (window.innerWidth || document.documentElement.clientWidth);
};

// node_modules/@coreui/react/dist/esm/components/carousel/CCarousel.js
var CCarouselContext = (0, import_react36.createContext)({});
var CCarousel = (0, import_react36.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, className = _a.className, controls = _a.controls, dark = _a.dark, indicators = _a.indicators, _c = _a.interval, interval = _c === void 0 ? 5e3 : _c, onSlid = _a.onSlid, onSlide = _a.onSlide, _d = _a.pause, pause = _d === void 0 ? "hover" : _d, _e = _a.touch, touch = _e === void 0 ? true : _e, transition = _a.transition, _f = _a.wrap, wrap = _f === void 0 ? true : _f, rest = __rest(_a, ["children", "activeIndex", "className", "controls", "dark", "indicators", "interval", "onSlid", "onSlide", "pause", "touch", "transition", "wrap"]);
  var carouselRef = (0, import_react36.useRef)(null);
  var forkedRef = useForkedRef(ref, carouselRef);
  var data = (0, import_react36.useRef)({}).current;
  var _g = (0, import_react36.useState)(activeIndex), active = _g[0], setActive = _g[1];
  var _h = (0, import_react36.useState)(false), animating = _h[0], setAnimating = _h[1];
  var _j = (0, import_react36.useState)(), customInterval = _j[0], setCustomInterval = _j[1];
  var _k = (0, import_react36.useState)("next"), direction = _k[0], setDirection = _k[1];
  var _l = (0, import_react36.useState)(0), itemsNumber = _l[0], setItemsNumber = _l[1];
  var _m = (0, import_react36.useState)(null), touchPosition = _m[0], setTouchPosition = _m[1];
  var _o = (0, import_react36.useState)(), visible = _o[0], setVisible = _o[1];
  (0, import_react36.useEffect)(function() {
    setItemsNumber(import_react36.Children.toArray(children).length);
  });
  (0, import_react36.useEffect)(function() {
    visible && cycle();
  }, [visible]);
  (0, import_react36.useEffect)(function() {
    !animating && cycle();
    !animating && onSlid && onSlid(active, direction);
    animating && onSlide && onSlide(active, direction);
  }, [animating]);
  (0, import_react36.useEffect)(function() {
    window.addEventListener("scroll", handleScroll);
    return function() {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  var cycle = function() {
    _pause();
    if (!wrap && active === itemsNumber - 1) {
      return;
    }
    if (typeof interval === "number") {
      data.timeout = setTimeout(function() {
        return nextItemWhenVisible();
      }, typeof customInterval === "number" ? customInterval : interval);
    }
  };
  var _pause = function() {
    return pause && data.timeout && clearTimeout(data.timeout);
  };
  var nextItemWhenVisible = function() {
    if (!document.hidden && carouselRef.current && isInViewport(carouselRef.current)) {
      if (animating) {
        return;
      }
      handleControlClick("next");
    }
  };
  var handleControlClick = function(direction2) {
    if (animating) {
      return;
    }
    setDirection(direction2);
    if (direction2 === "next") {
      active === itemsNumber - 1 ? setActive(0) : setActive(active + 1);
    } else {
      active === 0 ? setActive(itemsNumber - 1) : setActive(active - 1);
    }
  };
  var handleIndicatorClick = function(index) {
    if (active === index) {
      return;
    }
    if (active < index) {
      setDirection("next");
      setActive(index);
      return;
    }
    if (active > index) {
      setDirection("prev");
      setActive(index);
    }
  };
  var handleScroll = function() {
    if (!document.hidden && carouselRef.current && isInViewport(carouselRef.current)) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  var handleTouchMove = function(e) {
    var touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    var currentTouch = e.touches[0].clientX;
    var diff = touchDown - currentTouch;
    if (diff > 5) {
      handleControlClick("next");
    }
    if (diff < -5) {
      handleControlClick("prev");
    }
    setTouchPosition(null);
  };
  var handleTouchStart = function(e) {
    var touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  return import_react36.default.createElement(
    "div",
    __assign({ className: classNames("carousel slide", {
      "carousel-fade": transition === "crossfade"
    }, className) }, dark && { "data-coreui-theme": "dark" }, { onMouseEnter: _pause, onMouseLeave: cycle }, touch && { onTouchStart: handleTouchStart, onTouchMove: handleTouchMove }, rest, { ref: forkedRef }),
    import_react36.default.createElement(
      CCarouselContext.Provider,
      { value: {
        setAnimating,
        setCustomInterval
      } },
      indicators && import_react36.default.createElement("div", { className: "carousel-indicators" }, Array.from({ length: itemsNumber }, function(_, i) {
        return i;
      }).map(function(index) {
        return import_react36.default.createElement("button", __assign({ key: "indicator".concat(index), onClick: function() {
          !animating && handleIndicatorClick(index);
        }, className: classNames({
          active: active === index
        }), "data-coreui-target": "" }, active === index && { "aria-current": true }, { "aria-label": "Slide ".concat(index + 1) }));
      })),
      import_react36.default.createElement("div", { className: "carousel-inner" }, import_react36.Children.map(children, function(child, index) {
        if (import_react36.default.isValidElement(child)) {
          return import_react36.default.cloneElement(child, {
            active: active === index ? true : false,
            direction,
            key: index
          });
        }
        return;
      })),
      controls && import_react36.default.createElement(
        import_react36.default.Fragment,
        null,
        import_react36.default.createElement(
          "button",
          { className: "carousel-control-prev", onClick: function() {
            return handleControlClick("prev");
          } },
          import_react36.default.createElement("span", { className: "carousel-control-prev-icon", "aria-label": "prev" })
        ),
        import_react36.default.createElement(
          "button",
          { className: "carousel-control-next", onClick: function() {
            return handleControlClick("next");
          } },
          import_react36.default.createElement("span", { className: "carousel-control-next-icon", "aria-label": "next" })
        )
      )
    )
  );
});
CCarousel.propTypes = {
  activeIndex: import_prop_types36.default.number,
  children: import_prop_types36.default.node,
  className: import_prop_types36.default.string,
  controls: import_prop_types36.default.bool,
  dark: import_prop_types36.default.bool,
  indicators: import_prop_types36.default.bool,
  interval: import_prop_types36.default.oneOfType([import_prop_types36.default.bool, import_prop_types36.default.number]),
  onSlid: import_prop_types36.default.func,
  onSlide: import_prop_types36.default.func,
  pause: import_prop_types36.default.oneOf([false, "hover"]),
  touch: import_prop_types36.default.bool,
  transition: import_prop_types36.default.oneOf(["slide", "crossfade"]),
  wrap: import_prop_types36.default.bool
};
CCarousel.displayName = "CCarousel";

// node_modules/@coreui/react/dist/esm/components/carousel/CCarouselCaption.js
var import_react37 = __toESM(require_react());
var import_prop_types37 = __toESM(require_prop_types());
var CCarouselCaption = (0, import_react37.forwardRef)(function(_a, ref) {
  var className = _a.className, rest = __rest(_a, ["className"]);
  return import_react37.default.createElement("div", __assign({ className: classNames("carousel-caption", className) }, rest, { ref }));
});
CCarouselCaption.propTypes = {
  className: import_prop_types37.default.string
};
CCarouselCaption.displayName = "CCarouselCaption";

// node_modules/@coreui/react/dist/esm/components/carousel/CCarouselItem.js
var import_react38 = __toESM(require_react());
var import_prop_types38 = __toESM(require_prop_types());
var CCarouselItem = (0, import_react38.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, active = _a.active, direction = _a.direction, _b = _a.interval, interval = _b === void 0 ? false : _b, rest = __rest(_a, ["children", "className", "active", "direction", "interval"]);
  var _c = (0, import_react38.useContext)(CCarouselContext), setAnimating = _c.setAnimating, setCustomInterval = _c.setCustomInterval;
  var carouselItemRef = (0, import_react38.useRef)(null);
  var forkedRef = useForkedRef(ref, carouselItemRef);
  var prevActive = (0, import_react38.useRef)();
  var _d = (0, import_react38.useState)(), directionClassName = _d[0], setDirectionClassName = _d[1];
  var _e = (0, import_react38.useState)(), orderClassName = _e[0], setOrderClassName = _e[1];
  var _f = (0, import_react38.useState)(active && "active"), activeClassName = _f[0], setActiveClassName = _f[1];
  var _g = (0, import_react38.useState)(0), count = _g[0], setCount = _g[1];
  (0, import_react38.useEffect)(function() {
    if (active) {
      setCustomInterval(interval);
      if (count !== 0)
        setOrderClassName("carousel-item-".concat(direction));
    }
    if (prevActive.current && !active) {
      setActiveClassName("active");
    }
    if (active || prevActive.current) {
      setTimeout(function() {
        var _a2;
        if (count !== 0) {
          (_a2 = carouselItemRef.current) === null || _a2 === void 0 ? void 0 : _a2.offsetHeight;
          setDirectionClassName("carousel-item-".concat(direction === "next" ? "start" : "end"));
        }
      }, 0);
    }
    prevActive.current = active;
    if (count === 0)
      setCount(count + 1);
  }, [active]);
  (0, import_react38.useEffect)(function() {
    var _a2, _b2;
    (_a2 = carouselItemRef.current) === null || _a2 === void 0 ? void 0 : _a2.addEventListener("transitionstart", function() {
      active && setAnimating(true);
    });
    (_b2 = carouselItemRef.current) === null || _b2 === void 0 ? void 0 : _b2.addEventListener("transitionend", function() {
      active && setAnimating(false);
      setDirectionClassName("");
      setOrderClassName("");
      if (active) {
        setActiveClassName("active");
      }
      if (!active) {
        setActiveClassName("");
      }
    });
    return function() {
      var _a3, _b3;
      (_a3 = carouselItemRef.current) === null || _a3 === void 0 ? void 0 : _a3.removeEventListener("transitionstart", function() {
        active && setAnimating(true);
      });
      (_b3 = carouselItemRef.current) === null || _b3 === void 0 ? void 0 : _b3.removeEventListener("transitionend", function() {
        active && setAnimating(false);
        setDirectionClassName("");
        setOrderClassName("");
        if (active) {
          setActiveClassName("active");
        }
        if (!active) {
          setActiveClassName("");
        }
      });
    };
  });
  return import_react38.default.createElement("div", __assign({ className: classNames("carousel-item", activeClassName, directionClassName, orderClassName, className), ref: forkedRef }, rest), children);
});
CCarouselItem.propTypes = {
  active: import_prop_types38.default.bool,
  children: import_prop_types38.default.node,
  className: import_prop_types38.default.string,
  direction: import_prop_types38.default.string,
  interval: import_prop_types38.default.oneOfType([import_prop_types38.default.bool, import_prop_types38.default.number])
};
CCarouselItem.displayName = "CCarouselItem";

// node_modules/@coreui/react/dist/esm/components/conditional-portal/CConditionalPortal.js
var import_react39 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());
var import_prop_types39 = __toESM(require_prop_types());
var getContainer = function(container) {
  if (container) {
    return typeof container === "function" ? container() : container;
  }
  return document.body;
};
var CConditionalPortal = function(_a) {
  var children = _a.children, container = _a.container, portal = _a.portal;
  var _b = (0, import_react39.useState)(null), _container = _b[0], setContainer = _b[1];
  (0, import_react39.useEffect)(function() {
    portal && setContainer(getContainer(container) || document.body);
  }, [container, portal]);
  return typeof window !== "undefined" && portal && _container ? (0, import_react_dom2.createPortal)(children, _container) : import_react39.default.createElement(import_react39.default.Fragment, null, children);
};
CConditionalPortal.propTypes = {
  children: import_prop_types39.default.node,
  container: import_prop_types39.default.any,
  // HTMLElement
  portal: import_prop_types39.default.bool.isRequired
};
CConditionalPortal.displayName = "CConditionalPortal";

// node_modules/@coreui/react/dist/esm/components/dropdown/CDropdown.js
var import_react41 = __toESM(require_react());
var import_prop_types40 = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/hooks/usePopper.js
var import_react40 = __toESM(require_react());
var usePopper = function() {
  var _popper = (0, import_react40.useRef)();
  var el = (0, import_react40.useRef)();
  var initPopper = function(reference2, popper2, options) {
    _popper.current = createPopper3(reference2, popper2, options);
    el.current = popper2;
  };
  var destroyPopper = function() {
    var popperInstance = _popper.current;
    if (popperInstance && el.current) {
      popperInstance.destroy();
    }
    _popper.current = void 0;
  };
  var updatePopper = function(options) {
    var popperInstance = _popper.current;
    if (popperInstance && options) {
      popperInstance.setOptions(options);
    }
    if (popperInstance) {
      popperInstance.update();
    }
  };
  return {
    popper: _popper.current,
    initPopper,
    destroyPopper,
    updatePopper
  };
};

// node_modules/@coreui/react/dist/esm/utils/getNextActiveElement.js
var getNextActiveElement = function(list, activeElement, shouldGetNext, isCycleAllowed) {
  var listLength = list.length;
  var index = list.indexOf(activeElement);
  if (index === -1) {
    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
  }
  index += shouldGetNext ? 1 : -1;
  {
    index = (index + listLength) % listLength;
  }
  return list[Math.max(0, Math.min(index, listLength - 1))];
};

// node_modules/@coreui/react/dist/esm/utils/isRTL.js
var isRTL = function(element) {
  if (typeof document !== "undefined" && document.documentElement.dir === "rtl") {
    return true;
  }
  if (element) {
    return element.closest('[dir="rtl"]') !== null;
  }
  return false;
};

// node_modules/@coreui/react/dist/esm/components/dropdown/utils.js
var getAlignmentClassNames = function(alignment) {
  var classNames2 = [];
  if (typeof alignment === "object") {
    for (var key in alignment) {
      classNames2.push("dropdown-menu".concat(key === "xs" ? "" : "-".concat(key), "-").concat(alignment[key]));
    }
  }
  if (typeof alignment === "string") {
    classNames2.push("dropdown-menu-".concat(alignment));
  }
  return classNames2;
};
var getPlacement = function(placement, direction, alignment, isRTL2) {
  var _placement = placement;
  if (direction === "dropup") {
    _placement = isRTL2 ? "top-end" : "top-start";
  }
  if (direction === "dropup-center") {
    _placement = "top";
  }
  if (direction === "dropend") {
    _placement = isRTL2 ? "left-start" : "right-start";
  }
  if (direction === "dropstart") {
    _placement = isRTL2 ? "right-start" : "left-start";
  }
  if (alignment === "end") {
    _placement = isRTL2 ? "bottom-start" : "bottom-end";
  }
  return _placement;
};

// node_modules/@coreui/react/dist/esm/components/dropdown/CDropdown.js
var CDropdownContext = (0, import_react41.createContext)({});
var CDropdown = (0, import_react41.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, alignment = _a.alignment, _c = _a.as, as = _c === void 0 ? "div" : _c, _d = _a.autoClose, autoClose = _d === void 0 ? true : _d, className = _a.className, container = _a.container, dark = _a.dark, direction = _a.direction, _e = _a.offset, offset2 = _e === void 0 ? [0, 2] : _e, onHide = _a.onHide, onShow = _a.onShow, _f = _a.placement, placement = _f === void 0 ? "bottom-start" : _f, _g = _a.popper, popper2 = _g === void 0 ? true : _g, popperConfig = _a.popperConfig, _h = _a.portal, portal = _h === void 0 ? false : _h, _j = _a.variant, variant = _j === void 0 ? "btn-group" : _j, _k = _a.visible, visible = _k === void 0 ? false : _k, rest = __rest(_a, ["children", "alignment", "as", "autoClose", "className", "container", "dark", "direction", "offset", "onHide", "onShow", "placement", "popper", "popperConfig", "portal", "variant", "visible"]);
  var dropdownRef = (0, import_react41.useRef)(null);
  var dropdownToggleRef = (0, import_react41.useRef)(null);
  var dropdownMenuRef = (0, import_react41.useRef)(null);
  var forkedRef = useForkedRef(ref, dropdownRef);
  var _l = (0, import_react41.useState)(visible), _visible = _l[0], setVisible = _l[1];
  var _m = usePopper(), initPopper = _m.initPopper, destroyPopper = _m.destroyPopper;
  var Component = variant === "nav-item" ? "li" : as;
  if (typeof alignment === "object") {
    popper2 = false;
  }
  var contextValues = {
    alignment,
    container,
    dark,
    dropdownToggleRef,
    dropdownMenuRef,
    popper: popper2,
    portal,
    variant,
    visible: _visible,
    setVisible
  };
  var defaultPopperConfig = {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: offset2
        }
      }
    ],
    placement: getPlacement(placement, direction, alignment, isRTL(dropdownMenuRef.current))
  };
  var computedPopperConfig = __assign(__assign({}, defaultPopperConfig), typeof popperConfig === "function" ? popperConfig(defaultPopperConfig) : popperConfig);
  (0, import_react41.useEffect)(function() {
    setVisible(visible);
  }, [visible]);
  (0, import_react41.useEffect)(function() {
    if (_visible && dropdownToggleRef.current && dropdownMenuRef.current) {
      dropdownToggleRef.current.focus();
      popper2 && initPopper(dropdownToggleRef.current, dropdownMenuRef.current, computedPopperConfig);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("keyup", handleKeyup);
      dropdownToggleRef.current.addEventListener("keydown", handleKeydown);
      dropdownMenuRef.current.addEventListener("keydown", handleKeydown);
      onShow && onShow();
    }
    return function() {
      popper2 && destroyPopper();
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("keyup", handleKeyup);
      dropdownToggleRef.current && dropdownToggleRef.current.removeEventListener("keydown", handleKeydown);
      dropdownMenuRef.current && dropdownMenuRef.current.removeEventListener("keydown", handleKeydown);
      onHide && onHide();
    };
  }, [_visible]);
  var handleKeydown = function(event) {
    if (_visible && dropdownMenuRef.current && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
      event.preventDefault();
      var target = event.target;
      var items = Array.from(dropdownMenuRef.current.querySelectorAll(".dropdown-item:not(.disabled):not(:disabled)"));
      getNextActiveElement(items, target, event.key === "ArrowDown", true).focus();
    }
  };
  var handleKeyup = function(event) {
    if (autoClose === false) {
      return;
    }
    if (event.key === "Escape") {
      setVisible(false);
    }
  };
  var handleMouseUp = function(event) {
    if (!dropdownToggleRef.current || !dropdownMenuRef.current) {
      return;
    }
    if (dropdownToggleRef.current.contains(event.target)) {
      return;
    }
    if (autoClose === true || autoClose === "inside" && dropdownMenuRef.current.contains(event.target) || autoClose === "outside" && !dropdownMenuRef.current.contains(event.target)) {
      setTimeout(function() {
        return setVisible(false);
      }, 1);
      return;
    }
  };
  return import_react41.default.createElement(CDropdownContext.Provider, { value: contextValues }, variant === "input-group" ? import_react41.default.createElement(import_react41.default.Fragment, null, children) : import_react41.default.createElement(Component, __assign({ className: classNames(variant === "nav-item" ? "nav-item dropdown" : variant, (_b = {
    "dropdown-center": direction === "center",
    "dropup dropup-center": direction === "dropup-center"
  }, _b["".concat(direction)] = direction && direction !== "center" && direction !== "dropup-center", _b), className) }, rest, { ref: forkedRef }), children));
});
var alignmentDirection = import_prop_types40.default.oneOf(["start", "end"]);
CDropdown.propTypes = {
  alignment: import_prop_types40.default.oneOfType([
    alignmentDirection,
    import_prop_types40.default.shape({ xs: alignmentDirection.isRequired }),
    import_prop_types40.default.shape({ sm: alignmentDirection.isRequired }),
    import_prop_types40.default.shape({ md: alignmentDirection.isRequired }),
    import_prop_types40.default.shape({ lg: alignmentDirection.isRequired }),
    import_prop_types40.default.shape({ xl: alignmentDirection.isRequired }),
    import_prop_types40.default.shape({ xxl: alignmentDirection.isRequired })
  ]),
  as: import_prop_types40.default.elementType,
  autoClose: import_prop_types40.default.oneOfType([
    import_prop_types40.default.bool,
    import_prop_types40.default.oneOf(["inside", "outside"])
  ]),
  children: import_prop_types40.default.node,
  className: import_prop_types40.default.string,
  dark: import_prop_types40.default.bool,
  direction: import_prop_types40.default.oneOf(["center", "dropup", "dropup-center", "dropend", "dropstart"]),
  offset: import_prop_types40.default.any,
  // TODO: find good proptype
  onHide: import_prop_types40.default.func,
  onShow: import_prop_types40.default.func,
  placement: placementPropType,
  popper: import_prop_types40.default.bool,
  popperConfig: import_prop_types40.default.oneOfType([import_prop_types40.default.func, import_prop_types40.default.object]),
  portal: import_prop_types40.default.bool,
  variant: import_prop_types40.default.oneOf(["btn-group", "dropdown", "input-group", "nav-item"]),
  visible: import_prop_types40.default.bool
};
CDropdown.displayName = "CDropdown";

// node_modules/@coreui/react/dist/esm/components/dropdown/CDropdownDivider.js
var import_react42 = __toESM(require_react());
var import_prop_types41 = __toESM(require_prop_types());
var CDropdownDivider = (0, import_react42.forwardRef)(function(_a, ref) {
  var className = _a.className, rest = __rest(_a, ["className"]);
  return import_react42.default.createElement("hr", __assign({ className: classNames("dropdown-divider", className) }, rest, { ref }));
});
CDropdownDivider.propTypes = {
  className: import_prop_types41.default.string
};
CDropdownDivider.displayName = "CDropdownDivider";

// node_modules/@coreui/react/dist/esm/components/dropdown/CDropdownHeader.js
var import_react43 = __toESM(require_react());
var import_prop_types42 = __toESM(require_prop_types());
var CDropdownHeader = (0, import_react43.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "h6" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react43.default.createElement(Component, __assign({ className: classNames("dropdown-header", className) }, rest, { ref }), children);
});
CDropdownHeader.propTypes = {
  as: import_prop_types42.default.elementType,
  children: import_prop_types42.default.node,
  className: import_prop_types42.default.string
};
CDropdownHeader.displayName = "CDropdownHeader";

// node_modules/@coreui/react/dist/esm/components/dropdown/CDropdownItem.js
var import_react44 = __toESM(require_react());
var import_prop_types43 = __toESM(require_prop_types());
var CDropdownItem = (0, import_react44.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, as = _b === void 0 ? "a" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react44.default.createElement(CLink, __assign({ className: classNames("dropdown-item", className), as }, rest, { ref }), children);
});
CDropdownItem.propTypes = {
  as: import_prop_types43.default.elementType,
  children: import_prop_types43.default.node,
  className: import_prop_types43.default.string
};
CDropdownItem.displayName = "CDropdownItem";

// node_modules/@coreui/react/dist/esm/components/dropdown/CDropdownItemPlain.js
var import_react45 = __toESM(require_react());
var import_prop_types44 = __toESM(require_prop_types());
var CDropdownItemPlain = (0, import_react45.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "span" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react45.default.createElement(Component, __assign({ className: classNames("dropdown-item-text", className) }, rest, { ref }), children);
});
CDropdownItemPlain.propTypes = {
  as: import_prop_types44.default.elementType,
  children: import_prop_types44.default.node,
  className: import_prop_types44.default.string
};
CDropdownItemPlain.displayName = "CDropdownItemPlain";

// node_modules/@coreui/react/dist/esm/components/dropdown/CDropdownMenu.js
var import_react46 = __toESM(require_react());
var import_prop_types45 = __toESM(require_prop_types());
var CDropdownMenu = (0, import_react46.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "ul" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  var _c = (0, import_react46.useContext)(CDropdownContext), alignment = _c.alignment, container = _c.container, dark = _c.dark, dropdownMenuRef = _c.dropdownMenuRef, popper2 = _c.popper, portal = _c.portal, visible = _c.visible;
  var forkedRef = useForkedRef(ref, dropdownMenuRef);
  return import_react46.default.createElement(
    CConditionalPortal,
    { container, portal: portal !== null && portal !== void 0 ? portal : false },
    import_react46.default.createElement(Component, __assign({ className: classNames("dropdown-menu", {
      show: visible
    }, alignment && getAlignmentClassNames(alignment), className), ref: forkedRef, role: "menu" }, !popper2 && { "data-coreui-popper": "static" }, dark && { "data-coreui-theme": "dark" }, rest), Component === "ul" ? import_react46.default.Children.map(children, function(child, index) {
      if (import_react46.default.isValidElement(child)) {
        return import_react46.default.createElement("li", { key: index }, import_react46.default.cloneElement(child));
      }
      return;
    }) : children)
  );
});
CDropdownMenu.propTypes = {
  as: import_prop_types45.default.elementType,
  children: import_prop_types45.default.node,
  className: import_prop_types45.default.string
};
CDropdownMenu.displayName = "CDropdownMenu";

// node_modules/@coreui/react/dist/esm/components/dropdown/CDropdownToggle.js
var import_react47 = __toESM(require_react());
var import_prop_types46 = __toESM(require_prop_types());
var CDropdownToggle = function(_a) {
  var children = _a.children, _b = _a.caret, caret = _b === void 0 ? true : _b, custom = _a.custom, className = _a.className, _c = _a.navLink, navLink = _c === void 0 ? true : _c, split = _a.split, _d = _a.trigger, trigger = _d === void 0 ? "click" : _d, rest = __rest(_a, ["children", "caret", "custom", "className", "navLink", "split", "trigger"]);
  var _e = (0, import_react47.useContext)(CDropdownContext), dropdownToggleRef = _e.dropdownToggleRef, variant = _e.variant, visible = _e.visible, setVisible = _e.setVisible;
  var triggers = __assign(__assign({}, (trigger === "click" || trigger.includes("click")) && {
    onClick: function(event) {
      event.preventDefault();
      setVisible(!visible);
    }
  }), (trigger === "focus" || trigger.includes("focus")) && {
    onFocus: function() {
      return setVisible(true);
    },
    onBlur: function() {
      return setVisible(false);
    }
  });
  var togglerProps = __assign({ className: classNames({
    "nav-link": variant === "nav-item" && navLink,
    "dropdown-toggle": caret,
    "dropdown-toggle-split": split,
    show: visible
  }, className), "aria-expanded": visible }, !rest.disabled && __assign({}, triggers));
  var Toggler = function() {
    if (custom && import_react47.default.isValidElement(children)) {
      return import_react47.default.createElement(import_react47.default.Fragment, null, import_react47.default.cloneElement(children, __assign(__assign({ "aria-expanded": visible }, !rest.disabled && __assign({}, triggers)), { ref: dropdownToggleRef })));
    }
    if (variant === "nav-item" && navLink) {
      return import_react47.default.createElement("a", __assign({ href: "#" }, togglerProps, { role: "button" }, rest, { ref: dropdownToggleRef }), children);
    }
    return import_react47.default.createElement(
      CButton,
      __assign({}, togglerProps, { tabIndex: 0 }, rest, { ref: dropdownToggleRef }),
      children,
      split && import_react47.default.createElement("span", { className: "visually-hidden" }, "Toggle Dropdown")
    );
  };
  return import_react47.default.createElement(Toggler, null);
};
CDropdownToggle.propTypes = {
  caret: import_prop_types46.default.bool,
  children: import_prop_types46.default.node,
  className: import_prop_types46.default.string,
  custom: import_prop_types46.default.bool,
  split: import_prop_types46.default.bool,
  trigger: triggerPropType
};
CDropdownToggle.displayName = "CDropdownToggle";

// node_modules/@coreui/react/dist/esm/components/footer/CFooter.js
var import_react48 = __toESM(require_react());
var import_prop_types47 = __toESM(require_prop_types());
var CFooter = (0, import_react48.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, position = _a.position, rest = __rest(_a, ["children", "className", "position"]);
  return import_react48.default.createElement("div", __assign({ className: classNames("footer", (_b = {}, _b["footer-".concat(position)] = position, _b), className) }, rest, { ref }), children);
});
CFooter.propTypes = {
  children: import_prop_types47.default.node,
  className: import_prop_types47.default.string,
  position: import_prop_types47.default.oneOf(["fixed", "sticky"])
};
CFooter.displayName = "CFooter";

// node_modules/@coreui/react/dist/esm/components/form/CForm.js
var import_react49 = __toESM(require_react());
var import_prop_types48 = __toESM(require_prop_types());
var CForm = (0, import_react49.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, validated = _a.validated, rest = __rest(_a, ["children", "className", "validated"]);
  return import_react49.default.createElement("form", __assign({ className: classNames({ "was-validated": validated }, className) || void 0 }, rest, { ref }), children);
});
CForm.propTypes = {
  children: import_prop_types48.default.node,
  className: import_prop_types48.default.string,
  validated: import_prop_types48.default.bool
};
CForm.displayName = "CForm";

// node_modules/@coreui/react/dist/esm/components/form/CFormCheck.js
var import_react53 = __toESM(require_react());
var import_prop_types52 = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/components/form/CFormControlValidation.js
var import_react51 = __toESM(require_react());
var import_prop_types50 = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/components/form/CFormFeedback.js
var import_react50 = __toESM(require_react());
var import_prop_types49 = __toESM(require_prop_types());
var CFormFeedback = (0, import_react50.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, _c = _a.as, Component = _c === void 0 ? "div" : _c, className = _a.className, invalid = _a.invalid, tooltip = _a.tooltip, valid = _a.valid, rest = __rest(_a, ["children", "as", "className", "invalid", "tooltip", "valid"]);
  return import_react50.default.createElement(Component, __assign({ className: classNames((_b = {}, _b["invalid-".concat(tooltip ? "tooltip" : "feedback")] = invalid, _b["valid-".concat(tooltip ? "tooltip" : "feedback")] = valid, _b), className) }, rest, { ref }), children);
});
CFormFeedback.propTypes = {
  as: import_prop_types49.default.elementType,
  children: import_prop_types49.default.node,
  className: import_prop_types49.default.string,
  invalid: import_prop_types49.default.bool,
  tooltip: import_prop_types49.default.bool,
  valid: import_prop_types49.default.bool
};
CFormFeedback.displayName = "CFormFeedback";

// node_modules/@coreui/react/dist/esm/components/form/CFormControlValidation.js
var CFormControlValidation = function(_a) {
  var describedby = _a.describedby, feedback = _a.feedback, feedbackInvalid = _a.feedbackInvalid, feedbackValid = _a.feedbackValid, invalid = _a.invalid, tooltipFeedback = _a.tooltipFeedback, valid = _a.valid;
  return import_react51.default.createElement(
    import_react51.default.Fragment,
    null,
    feedback && (valid || invalid) && import_react51.default.createElement(CFormFeedback, __assign({}, invalid && { id: describedby }, { invalid, tooltip: tooltipFeedback, valid }), feedback),
    feedbackInvalid && import_react51.default.createElement(CFormFeedback, { id: describedby, invalid: true, tooltip: tooltipFeedback }, feedbackInvalid),
    feedbackValid && import_react51.default.createElement(CFormFeedback, { valid: true, tooltip: tooltipFeedback }, feedbackValid)
  );
};
CFormControlValidation.propTypes = {
  describedby: import_prop_types50.default.string,
  feedback: import_prop_types50.default.oneOfType([import_prop_types50.default.node, import_prop_types50.default.string]),
  feedbackValid: import_prop_types50.default.oneOfType([import_prop_types50.default.node, import_prop_types50.default.string]),
  feedbackInvalid: import_prop_types50.default.oneOfType([import_prop_types50.default.node, import_prop_types50.default.string]),
  invalid: import_prop_types50.default.bool,
  tooltipFeedback: import_prop_types50.default.bool,
  valid: import_prop_types50.default.bool
};
CFormControlValidation.displayName = "CFormControlValidation";

// node_modules/@coreui/react/dist/esm/components/form/CFormLabel.js
var import_react52 = __toESM(require_react());
var import_prop_types51 = __toESM(require_prop_types());
var CFormLabel = (0, import_react52.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, customClassName = _a.customClassName, rest = __rest(_a, ["children", "className", "customClassName"]);
  return import_react52.default.createElement("label", __assign({ className: customClassName !== null && customClassName !== void 0 ? customClassName : classNames("form-label", className) }, rest, { ref }), children);
});
CFormLabel.propTypes = {
  children: import_prop_types51.default.node,
  className: import_prop_types51.default.string,
  customClassName: import_prop_types51.default.string
};
CFormLabel.displayName = "CFormLabel";

// node_modules/@coreui/react/dist/esm/components/form/CFormCheck.js
var CFormCheck = (0, import_react53.forwardRef)(function(_a, ref) {
  var className = _a.className, button = _a.button, feedback = _a.feedback, feedbackInvalid = _a.feedbackInvalid, feedbackValid = _a.feedbackValid, floatingLabel = _a.floatingLabel, tooltipFeedback = _a.tooltipFeedback, hitArea = _a.hitArea, id = _a.id, indeterminate = _a.indeterminate, inline = _a.inline, invalid = _a.invalid, label = _a.label, reverse = _a.reverse, _b = _a.type, type = _b === void 0 ? "checkbox" : _b, valid = _a.valid, rest = __rest(_a, ["className", "button", "feedback", "feedbackInvalid", "feedbackValid", "floatingLabel", "tooltipFeedback", "hitArea", "id", "indeterminate", "inline", "invalid", "label", "reverse", "type", "valid"]);
  var inputRef = (0, import_react53.useRef)(null);
  var forkedRef = useForkedRef(ref, inputRef);
  (0, import_react53.useEffect)(function() {
    if (inputRef.current && indeterminate) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate, inputRef.current]);
  var FormControl = function() {
    return import_react53.default.createElement("input", __assign({ type, className: classNames(button ? "btn-check" : "form-check-input", {
      "is-invalid": invalid,
      "is-valid": valid,
      "me-2": hitArea
    }), id }, rest, { ref: forkedRef }));
  };
  var FormValidation = function() {
    return import_react53.default.createElement(CFormControlValidation, { describedby: rest["aria-describedby"], feedback, feedbackInvalid, feedbackValid, floatingLabel, invalid, tooltipFeedback, valid });
  };
  var FormLabel = function() {
    var _a2;
    return import_react53.default.createElement(CFormLabel, __assign({ customClassName: classNames(button ? classNames("btn", button.variant ? "btn-".concat(button.variant, "-").concat(button.color) : "btn-".concat(button.color), (_a2 = {}, _a2["btn-".concat(button.size)] = button.size, _a2), "".concat(button.shape)) : "form-check-label") }, id && { htmlFor: id }), label);
  };
  var FormCheck = function() {
    if (button) {
      return import_react53.default.createElement(
        import_react53.default.Fragment,
        null,
        import_react53.default.createElement(FormControl, null),
        label && import_react53.default.createElement(FormLabel, null),
        import_react53.default.createElement(FormValidation, null)
      );
    }
    if (label) {
      return hitArea ? import_react53.default.createElement(
        import_react53.default.Fragment,
        null,
        import_react53.default.createElement(FormControl, null),
        import_react53.default.createElement(CFormLabel, __assign({ customClassName: classNames("form-check-label stretched-link", className) }, id && { htmlFor: id }), label),
        import_react53.default.createElement(FormValidation, null)
      ) : import_react53.default.createElement(
        "div",
        { className: classNames("form-check", {
          "form-check-inline": inline,
          "form-check-reverse": reverse,
          "is-invalid": invalid,
          "is-valid": valid
        }, className) },
        import_react53.default.createElement(FormControl, null),
        import_react53.default.createElement(FormLabel, null),
        import_react53.default.createElement(FormValidation, null)
      );
    }
    return import_react53.default.createElement(FormControl, null);
  };
  return import_react53.default.createElement(FormCheck, null);
});
CFormCheck.propTypes = __assign({ button: import_prop_types52.default.object, className: import_prop_types52.default.string, hitArea: import_prop_types52.default.oneOf(["full"]), id: import_prop_types52.default.string, indeterminate: import_prop_types52.default.bool, inline: import_prop_types52.default.bool, label: import_prop_types52.default.oneOfType([import_prop_types52.default.string, import_prop_types52.default.node]), reverse: import_prop_types52.default.bool, type: import_prop_types52.default.oneOf(["checkbox", "radio"]) }, CFormControlValidation.propTypes);
CFormCheck.displayName = "CFormCheck";

// node_modules/@coreui/react/dist/esm/components/form/CFormControlWrapper.js
var import_react56 = __toESM(require_react());
var import_prop_types55 = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/components/form/CFormFloating.js
var import_react54 = __toESM(require_react());
var import_prop_types53 = __toESM(require_prop_types());
var CFormFloating = (0, import_react54.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react54.default.createElement("div", __assign({ className: classNames("form-floating", className) }, rest, { ref }), children);
});
CFormFloating.propTypes = {
  children: import_prop_types53.default.node,
  className: import_prop_types53.default.string
};
CFormFloating.displayName = "CFormFloating";

// node_modules/@coreui/react/dist/esm/components/form/CFormText.js
var import_react55 = __toESM(require_react());
var import_prop_types54 = __toESM(require_prop_types());
var CFormText = (0, import_react55.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "div" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react55.default.createElement(Component, __assign({ className: classNames("form-text", className) }, rest, { ref }), children);
});
CFormText.propTypes = {
  as: import_prop_types54.default.elementType,
  children: import_prop_types54.default.node,
  className: import_prop_types54.default.string
};
CFormText.displayName = "CFormText";

// node_modules/@coreui/react/dist/esm/components/form/CFormControlWrapper.js
var CFormControlWrapper = function(_a) {
  var children = _a.children, describedby = _a.describedby, feedback = _a.feedback, feedbackInvalid = _a.feedbackInvalid, feedbackValid = _a.feedbackValid, floatingClassName = _a.floatingClassName, floatingLabel = _a.floatingLabel, id = _a.id, invalid = _a.invalid, label = _a.label, text = _a.text, tooltipFeedback = _a.tooltipFeedback, valid = _a.valid;
  var FormControlValidation = function() {
    return import_react56.default.createElement(CFormControlValidation, { describedby, feedback, feedbackInvalid, feedbackValid, floatingLabel, invalid, tooltipFeedback, valid });
  };
  return floatingLabel ? import_react56.default.createElement(
    CFormFloating,
    { className: floatingClassName },
    children,
    import_react56.default.createElement(CFormLabel, { htmlFor: id }, label || floatingLabel),
    text && import_react56.default.createElement(CFormText, { id: describedby }, text),
    import_react56.default.createElement(FormControlValidation, null)
  ) : import_react56.default.createElement(
    import_react56.default.Fragment,
    null,
    label && import_react56.default.createElement(CFormLabel, { htmlFor: id }, label),
    children,
    text && import_react56.default.createElement(CFormText, { id: describedby }, text),
    import_react56.default.createElement(FormControlValidation, null)
  );
};
CFormControlWrapper.propTypes = __assign({ children: import_prop_types55.default.node, floatingClassName: import_prop_types55.default.string, floatingLabel: import_prop_types55.default.oneOfType([import_prop_types55.default.node, import_prop_types55.default.string]), label: import_prop_types55.default.oneOfType([import_prop_types55.default.node, import_prop_types55.default.string]), text: import_prop_types55.default.oneOfType([import_prop_types55.default.node, import_prop_types55.default.string]) }, CFormControlValidation.propTypes);
CFormControlWrapper.displayName = "CFormControlWrapper";

// node_modules/@coreui/react/dist/esm/components/form/CFormInput.js
var import_react57 = __toESM(require_react());
var import_prop_types56 = __toESM(require_prop_types());
var CFormInput = (0, import_react57.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, _c = _a.delay, delay = _c === void 0 ? false : _c, feedback = _a.feedback, feedbackInvalid = _a.feedbackInvalid, feedbackValid = _a.feedbackValid, floatingClassName = _a.floatingClassName, floatingLabel = _a.floatingLabel, id = _a.id, invalid = _a.invalid, label = _a.label, onChange = _a.onChange, plainText = _a.plainText, size = _a.size, text = _a.text, tooltipFeedback = _a.tooltipFeedback, _d = _a.type, type = _d === void 0 ? "text" : _d, valid = _a.valid, rest = __rest(_a, ["children", "className", "delay", "feedback", "feedbackInvalid", "feedbackValid", "floatingClassName", "floatingLabel", "id", "invalid", "label", "onChange", "plainText", "size", "text", "tooltipFeedback", "type", "valid"]);
  var _e = (0, import_react57.useState)(), value = _e[0], setValue = _e[1];
  (0, import_react57.useEffect)(function() {
    var timeOutId = setTimeout(function() {
      return value && onChange && onChange(value);
    }, typeof delay === "number" ? delay : 500);
    return function() {
      return clearTimeout(timeOutId);
    };
  }, [value]);
  return import_react57.default.createElement(
    CFormControlWrapper,
    { describedby: rest["aria-describedby"], feedback, feedbackInvalid, feedbackValid, floatingClassName, floatingLabel, id, invalid, label, text, tooltipFeedback, valid },
    import_react57.default.createElement("input", __assign({ className: classNames(plainText ? "form-control-plaintext" : "form-control", (_b = {}, _b["form-control-".concat(size)] = size, _b["form-control-color"] = type === "color", _b["is-invalid"] = invalid, _b["is-valid"] = valid, _b), className), id, type, onChange: function(event) {
      return delay ? setValue(event) : onChange && onChange(event);
    } }, rest, { ref }), children)
  );
});
CFormInput.propTypes = __assign({ className: import_prop_types56.default.string, id: import_prop_types56.default.string, delay: import_prop_types56.default.oneOfType([import_prop_types56.default.bool, import_prop_types56.default.number]), plainText: import_prop_types56.default.bool, size: import_prop_types56.default.oneOf(["sm", "lg"]), type: import_prop_types56.default.oneOfType([import_prop_types56.default.oneOf(["color", "file", "text"]), import_prop_types56.default.string]) }, CFormControlWrapper.propTypes);
CFormInput.displayName = "CFormInput";

// node_modules/@coreui/react/dist/esm/components/form/CFormRange.js
var import_react58 = __toESM(require_react());
var import_prop_types57 = __toESM(require_prop_types());
var CFormRange = (0, import_react58.forwardRef)(function(_a, ref) {
  var className = _a.className, label = _a.label, rest = __rest(_a, ["className", "label"]);
  return import_react58.default.createElement(
    import_react58.default.Fragment,
    null,
    label && import_react58.default.createElement(CFormLabel, { htmlFor: rest.id }, label),
    import_react58.default.createElement("input", __assign({ type: "range", className: classNames("form-range", className) }, rest, { ref }))
  );
});
CFormRange.propTypes = {
  className: import_prop_types57.default.string,
  label: import_prop_types57.default.oneOfType([import_prop_types57.default.node, import_prop_types57.default.string])
};
CFormRange.displayName = "CFormRange";

// node_modules/@coreui/react/dist/esm/components/form/CFormSelect.js
var import_react59 = __toESM(require_react());
var import_prop_types58 = __toESM(require_prop_types());
var CFormSelect = (0, import_react59.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, feedback = _a.feedback, feedbackInvalid = _a.feedbackInvalid, feedbackValid = _a.feedbackValid, floatingClassName = _a.floatingClassName, floatingLabel = _a.floatingLabel, htmlSize = _a.htmlSize, id = _a.id, invalid = _a.invalid, label = _a.label, options = _a.options, size = _a.size, text = _a.text, tooltipFeedback = _a.tooltipFeedback, valid = _a.valid, rest = __rest(_a, ["children", "className", "feedback", "feedbackInvalid", "feedbackValid", "floatingClassName", "floatingLabel", "htmlSize", "id", "invalid", "label", "options", "size", "text", "tooltipFeedback", "valid"]);
  return import_react59.default.createElement(
    CFormControlWrapper,
    { describedby: rest["aria-describedby"], feedback, feedbackInvalid, feedbackValid, floatingClassName, floatingLabel, id, invalid, label, text, tooltipFeedback, valid },
    import_react59.default.createElement("select", __assign({ id, className: classNames("form-select", (_b = {}, _b["form-select-".concat(size)] = size, _b["is-invalid"] = invalid, _b["is-valid"] = valid, _b), className), size: htmlSize }, rest, { ref }), options ? options.map(function(option, index) {
      return import_react59.default.createElement("option", __assign({}, typeof option === "object" && option.disabled && { disabled: option.disabled }, typeof option === "object" && option.value !== void 0 && { value: option.value }, { key: index }), typeof option === "string" ? option : option.label);
    }) : children)
  );
});
CFormSelect.propTypes = __assign({ className: import_prop_types58.default.string, htmlSize: import_prop_types58.default.number, options: import_prop_types58.default.array }, CFormControlWrapper.propTypes);
CFormSelect.displayName = "CFormSelect";

// node_modules/@coreui/react/dist/esm/components/form/CFormSwitch.js
var import_react60 = __toESM(require_react());
var import_prop_types59 = __toESM(require_prop_types());
var CFormSwitch = (0, import_react60.forwardRef)(function(_a, ref) {
  var _b;
  var className = _a.className, id = _a.id, invalid = _a.invalid, label = _a.label, reverse = _a.reverse, size = _a.size, _c = _a.type, type = _c === void 0 ? "checkbox" : _c, valid = _a.valid, rest = __rest(_a, ["className", "id", "invalid", "label", "reverse", "size", "type", "valid"]);
  return import_react60.default.createElement(
    "div",
    { className: classNames("form-check form-switch", (_b = {
      "form-check-reverse": reverse
    }, _b["form-switch-".concat(size)] = size, _b["is-invalid"] = invalid, _b["is-valid"] = valid, _b), className) },
    import_react60.default.createElement("input", __assign({ type, className: classNames("form-check-input", {
      "is-invalid": invalid,
      "is-valid": valid
    }), id }, rest, { ref })),
    label && import_react60.default.createElement(CFormLabel, __assign({ customClassName: "form-check-label" }, id && { htmlFor: id }), label)
  );
});
CFormSwitch.propTypes = {
  className: import_prop_types59.default.string,
  id: import_prop_types59.default.string,
  invalid: import_prop_types59.default.bool,
  label: import_prop_types59.default.oneOfType([import_prop_types59.default.string, import_prop_types59.default.node]),
  reverse: import_prop_types59.default.bool,
  size: import_prop_types59.default.oneOf(["lg", "xl"]),
  type: import_prop_types59.default.oneOf(["checkbox", "radio"]),
  valid: import_prop_types59.default.bool
};
CFormSwitch.displayName = "CFormSwitch";

// node_modules/@coreui/react/dist/esm/components/form/CFormTextarea.js
var import_react61 = __toESM(require_react());
var import_prop_types60 = __toESM(require_prop_types());
var CFormTextarea = (0, import_react61.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, feedback = _a.feedback, feedbackInvalid = _a.feedbackInvalid, feedbackValid = _a.feedbackValid, floatingClassName = _a.floatingClassName, floatingLabel = _a.floatingLabel, id = _a.id, invalid = _a.invalid, label = _a.label, plainText = _a.plainText, text = _a.text, tooltipFeedback = _a.tooltipFeedback, valid = _a.valid, rest = __rest(_a, ["children", "className", "feedback", "feedbackInvalid", "feedbackValid", "floatingClassName", "floatingLabel", "id", "invalid", "label", "plainText", "text", "tooltipFeedback", "valid"]);
  return import_react61.default.createElement(
    CFormControlWrapper,
    { describedby: rest["aria-describedby"], feedback, feedbackInvalid, feedbackValid, floatingClassName, floatingLabel, id, invalid, label, text, tooltipFeedback, valid },
    import_react61.default.createElement("textarea", __assign({ className: classNames(plainText ? "form-control-plaintext" : "form-control", {
      "is-invalid": invalid,
      "is-valid": valid
    }, className), id }, rest, { ref }), children)
  );
});
CFormTextarea.propTypes = __assign({ className: import_prop_types60.default.string, id: import_prop_types60.default.string, plainText: import_prop_types60.default.bool }, CFormControlWrapper.propTypes);
CFormTextarea.displayName = "CFormTextarea";

// node_modules/@coreui/react/dist/esm/components/form/CInputGroup.js
var import_react62 = __toESM(require_react());
var import_prop_types61 = __toESM(require_prop_types());
var CInputGroup = (0, import_react62.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, size = _a.size, rest = __rest(_a, ["children", "className", "size"]);
  return import_react62.default.createElement("div", __assign({ className: classNames("input-group", (_b = {}, _b["input-group-".concat(size)] = size, _b), className) }, rest, { ref }), children);
});
CInputGroup.propTypes = {
  children: import_prop_types61.default.node,
  className: import_prop_types61.default.string,
  size: import_prop_types61.default.oneOf(["sm", "lg"])
};
CInputGroup.displayName = "CInputGroup";

// node_modules/@coreui/react/dist/esm/components/form/CInputGroupText.js
var import_react63 = __toESM(require_react());
var import_prop_types62 = __toESM(require_prop_types());
var CInputGroupText = (0, import_react63.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "span" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react63.default.createElement(Component, __assign({ className: classNames("input-group-text", className) }, rest, { ref }), children);
});
CInputGroupText.propTypes = {
  as: import_prop_types62.default.elementType,
  children: import_prop_types62.default.node,
  className: import_prop_types62.default.string
};
CInputGroupText.displayName = "CInputGroupText";

// node_modules/@coreui/react/dist/esm/components/grid/CCol.js
var import_react64 = __toESM(require_react());
var import_prop_types63 = __toESM(require_prop_types());
var BREAKPOINTS = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs"
];
var CCol = (0, import_react64.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  var repsonsiveClassNames = [];
  BREAKPOINTS.forEach(function(bp2) {
    var breakpoint = rest[bp2];
    delete rest[bp2];
    var infix = bp2 === "xs" ? "" : "-".concat(bp2);
    if (typeof breakpoint === "number" || typeof breakpoint === "string") {
      repsonsiveClassNames.push("col".concat(infix, "-").concat(breakpoint));
    }
    if (typeof breakpoint === "boolean") {
      repsonsiveClassNames.push("col".concat(infix));
    }
    if (breakpoint && typeof breakpoint === "object") {
      if (typeof breakpoint.span === "number" || typeof breakpoint.span === "string") {
        repsonsiveClassNames.push("col".concat(infix, "-").concat(breakpoint.span));
      }
      if (typeof breakpoint.span === "boolean") {
        repsonsiveClassNames.push("col".concat(infix));
      }
      if (typeof breakpoint.order === "number" || typeof breakpoint.order === "string") {
        repsonsiveClassNames.push("order".concat(infix, "-").concat(breakpoint.order));
      }
      if (typeof breakpoint.offset === "number") {
        repsonsiveClassNames.push("offset".concat(infix, "-").concat(breakpoint.offset));
      }
    }
  });
  return import_react64.default.createElement("div", __assign({ className: classNames(repsonsiveClassNames.length > 0 ? repsonsiveClassNames : "col", className) }, rest, { ref }), children);
});
var span = import_prop_types63.default.oneOfType([
  import_prop_types63.default.bool,
  import_prop_types63.default.number,
  import_prop_types63.default.string,
  import_prop_types63.default.oneOf(["auto"])
]);
var col = import_prop_types63.default.oneOfType([
  span,
  import_prop_types63.default.shape({
    span,
    offset: import_prop_types63.default.oneOfType([import_prop_types63.default.number, import_prop_types63.default.string]),
    order: import_prop_types63.default.oneOfType([
      import_prop_types63.default.oneOf(["first", "last"]),
      import_prop_types63.default.number,
      import_prop_types63.default.string
    ])
  })
]);
CCol.propTypes = {
  children: import_prop_types63.default.node,
  className: import_prop_types63.default.string,
  xs: col,
  sm: col,
  md: col,
  lg: col,
  xl: col,
  xxl: col
};
CCol.displayName = "CCol";

// node_modules/@coreui/react/dist/esm/components/grid/CContainer.js
var import_react65 = __toESM(require_react());
var import_prop_types64 = __toESM(require_prop_types());
var BREAKPOINTS2 = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "fluid"
];
var CContainer = (0, import_react65.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  var repsonsiveClassNames = [];
  BREAKPOINTS2.forEach(function(bp2) {
    var breakpoint = rest[bp2];
    delete rest[bp2];
    breakpoint && repsonsiveClassNames.push("container-".concat(bp2));
  });
  return import_react65.default.createElement("div", __assign({ className: classNames(repsonsiveClassNames.length > 0 ? repsonsiveClassNames : "container", className) }, rest, { ref }), children);
});
CContainer.propTypes = {
  children: import_prop_types64.default.node,
  className: import_prop_types64.default.string,
  sm: import_prop_types64.default.bool,
  md: import_prop_types64.default.bool,
  lg: import_prop_types64.default.bool,
  xl: import_prop_types64.default.bool,
  xxl: import_prop_types64.default.bool,
  fluid: import_prop_types64.default.bool
};
CContainer.displayName = "CContainer";

// node_modules/@coreui/react/dist/esm/components/grid/CRow.js
var import_react66 = __toESM(require_react());
var import_prop_types65 = __toESM(require_prop_types());
var BREAKPOINTS3 = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs"
];
var CRow = (0, import_react66.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  var repsonsiveClassNames = [];
  BREAKPOINTS3.forEach(function(bp2) {
    var breakpoint = rest[bp2];
    delete rest[bp2];
    var infix = bp2 === "xs" ? "" : "-".concat(bp2);
    if (typeof breakpoint === "object") {
      if (breakpoint.cols) {
        repsonsiveClassNames.push("row-cols".concat(infix, "-").concat(breakpoint.cols));
      }
      if (typeof breakpoint.gutter === "number") {
        repsonsiveClassNames.push("g".concat(infix, "-").concat(breakpoint.gutter));
      }
      if (typeof breakpoint.gutterX === "number") {
        repsonsiveClassNames.push("gx".concat(infix, "-").concat(breakpoint.gutterX));
      }
      if (typeof breakpoint.gutterY === "number") {
        repsonsiveClassNames.push("gy".concat(infix, "-").concat(breakpoint.gutterY));
      }
    }
  });
  return import_react66.default.createElement("div", __assign({ className: classNames("row", repsonsiveClassNames, className) }, rest, { ref }), children);
});
var bp = import_prop_types65.default.shape({
  cols: import_prop_types65.default.oneOfType([import_prop_types65.default.oneOf(["auto"]), import_prop_types65.default.number, import_prop_types65.default.string]),
  gutter: import_prop_types65.default.oneOfType([import_prop_types65.default.string, import_prop_types65.default.number]),
  gutterX: import_prop_types65.default.oneOfType([import_prop_types65.default.string, import_prop_types65.default.number]),
  gutterY: import_prop_types65.default.oneOfType([import_prop_types65.default.string, import_prop_types65.default.number])
});
CRow.propTypes = {
  children: import_prop_types65.default.node,
  className: import_prop_types65.default.string,
  xs: bp,
  sm: bp,
  md: bp,
  lg: bp,
  xl: bp,
  xxl: bp
};
CRow.displayName = "CRow";

// node_modules/@coreui/react/dist/esm/components/header/CHeader.js
var import_react67 = __toESM(require_react());
var import_prop_types66 = __toESM(require_prop_types());
var CHeader = (0, import_react67.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, container = _a.container, position = _a.position, rest = __rest(_a, ["children", "className", "container", "position"]);
  return import_react67.default.createElement("div", __assign({ className: classNames("header", (_b = {}, _b["header-".concat(position)] = position, _b), className) }, rest, { ref }), container ? import_react67.default.createElement("div", { className: typeof container === "string" ? "container-".concat(container) : "container" }, children) : import_react67.default.createElement(import_react67.default.Fragment, null, children));
});
CHeader.propTypes = {
  children: import_prop_types66.default.node,
  className: import_prop_types66.default.string,
  container: import_prop_types66.default.oneOfType([
    import_prop_types66.default.bool,
    import_prop_types66.default.oneOf([
      "sm",
      "md",
      "lg",
      "xl",
      "xxl",
      "fluid"
    ])
  ]),
  position: import_prop_types66.default.oneOf(["fixed", "sticky"])
};
CHeader.displayName = "CHeader";

// node_modules/@coreui/react/dist/esm/components/header/CHeaderBrand.js
var import_react68 = __toESM(require_react());
var import_prop_types67 = __toESM(require_prop_types());
var CHeaderBrand = (0, import_react68.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "a" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react68.default.createElement(Component, __assign({ className: classNames("header-brand", className) }, rest, { ref }), children);
});
CHeaderBrand.propTypes = {
  as: import_prop_types67.default.elementType,
  children: import_prop_types67.default.node,
  className: import_prop_types67.default.string
};
CHeaderBrand.displayName = "CHeaderBrand";

// node_modules/@coreui/react/dist/esm/components/header/CHeaderDivider.js
var import_react69 = __toESM(require_react());
var import_prop_types68 = __toESM(require_prop_types());
var CHeaderDivider = (0, import_react69.forwardRef)(function(_a, ref) {
  var className = _a.className, rest = __rest(_a, ["className"]);
  return import_react69.default.createElement("div", __assign({ className: classNames("header-divider", className) }, rest, { ref }));
});
CHeaderDivider.propTypes = {
  className: import_prop_types68.default.string
};
CHeaderDivider.displayName = "CHeaderDivider";

// node_modules/@coreui/react/dist/esm/components/header/CHeaderNav.js
var import_react70 = __toESM(require_react());
var import_prop_types69 = __toESM(require_prop_types());
var CHeaderNav = (0, import_react70.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "ul" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react70.default.createElement(Component, __assign({ className: classNames("header-nav", className), role: "navigation" }, rest, { ref }), children);
});
CHeaderNav.propTypes = {
  as: import_prop_types69.default.elementType,
  children: import_prop_types69.default.node,
  className: import_prop_types69.default.string
};
CHeaderNav.displayName = "CHeaderNav";

// node_modules/@coreui/react/dist/esm/components/header/CHeaderText.js
var import_react71 = __toESM(require_react());
var import_prop_types70 = __toESM(require_prop_types());
var CHeaderText = (0, import_react71.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react71.default.createElement("span", __assign({ className: classNames("header-text", className) }, rest, { ref }), children);
});
CHeaderText.propTypes = {
  children: import_prop_types70.default.node,
  className: import_prop_types70.default.string
};
CHeaderText.displayName = "CHeaderText";

// node_modules/@coreui/react/dist/esm/components/header/CHeaderToggler.js
var import_react72 = __toESM(require_react());
var import_prop_types71 = __toESM(require_prop_types());
var CHeaderToggler = (0, import_react72.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react72.default.createElement("button", __assign({ type: "button", className: classNames("header-toggler", className) }, rest, { ref }), children !== null && children !== void 0 ? children : import_react72.default.createElement("span", { className: "header-toggler-icon" }));
});
CHeaderToggler.propTypes = {
  children: import_prop_types71.default.node,
  className: import_prop_types71.default.string
};
CHeaderToggler.displayName = "CHeaderToggler";

// node_modules/@coreui/react/dist/esm/components/image/CImage.js
var import_react73 = __toESM(require_react());
var import_prop_types72 = __toESM(require_prop_types());
var CImage = (0, import_react73.forwardRef)(function(_a, ref) {
  var _b;
  var align = _a.align, className = _a.className, fluid = _a.fluid, rounded = _a.rounded, thumbnail = _a.thumbnail, rest = __rest(_a, ["align", "className", "fluid", "rounded", "thumbnail"]);
  return import_react73.default.createElement("img", __assign({ className: classNames((_b = {}, _b["float-".concat(align)] = align && (align === "start" || align === "end"), _b["d-block mx-auto"] = align && align === "center", _b["img-fluid"] = fluid, _b.rounded = rounded, _b["img-thumbnail"] = thumbnail, _b), className) || void 0 }, rest, { ref }));
});
CImage.propTypes = {
  align: import_prop_types72.default.oneOf(["start", "center", "end"]),
  className: import_prop_types72.default.string,
  fluid: import_prop_types72.default.bool,
  rounded: import_prop_types72.default.bool,
  thumbnail: import_prop_types72.default.bool
};
CImage.displayName = "CImage";

// node_modules/@coreui/react/dist/esm/components/list-group/CListGroup.js
var import_react74 = __toESM(require_react());
var import_prop_types73 = __toESM(require_prop_types());
var CListGroup = (0, import_react74.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, _c = _a.as, Component = _c === void 0 ? "ul" : _c, className = _a.className, flush = _a.flush, layout = _a.layout, rest = __rest(_a, ["children", "as", "className", "flush", "layout"]);
  return import_react74.default.createElement(Component, __assign({ className: classNames("list-group", (_b = {
    "list-group-flush": flush
  }, _b["list-group-".concat(layout)] = layout, _b), className) }, rest, { ref }), children);
});
CListGroup.propTypes = {
  as: import_prop_types73.default.elementType,
  children: import_prop_types73.default.node,
  className: import_prop_types73.default.string,
  flush: import_prop_types73.default.bool,
  layout: import_prop_types73.default.oneOf([
    "horizontal",
    "horizontal-sm",
    "horizontal-md",
    "horizontal-lg",
    "horizontal-xl",
    "horizontal-xxl"
  ])
};
CListGroup.displayName = "CListGroup";

// node_modules/@coreui/react/dist/esm/components/list-group/CListGroupItem.js
var import_react75 = __toESM(require_react());
var import_prop_types74 = __toESM(require_prop_types());
var CListGroupItem = (0, import_react75.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, active = _a.active, _c = _a.as, as = _c === void 0 ? "li" : _c, className = _a.className, disabled = _a.disabled, color = _a.color, rest = __rest(_a, ["children", "active", "as", "className", "disabled", "color"]);
  var Component = as === "a" || as === "button" ? CLink : as;
  rest = __assign(__assign(__assign(__assign({}, (as === "a" || as === "button") && {
    active,
    disabled,
    as,
    ref
  }), active && { "aria-current": true }), disabled && { "aria-disabled": true }), rest);
  return import_react75.default.createElement(Component, __assign({ className: classNames("list-group-item", (_b = {}, _b["list-group-item-".concat(color)] = color, _b["list-group-item-action"] = as === "a" || as === "button", _b.active = active, _b.disabled = disabled, _b), className) }, rest), children);
});
CListGroupItem.propTypes = {
  active: import_prop_types74.default.bool,
  as: import_prop_types74.default.elementType,
  children: import_prop_types74.default.node,
  className: import_prop_types74.default.string,
  color: colorPropType,
  disabled: import_prop_types74.default.bool
};
CListGroupItem.displayName = "CListGroupItem";

// node_modules/@coreui/react/dist/esm/components/modal/CModal.js
var import_react78 = __toESM(require_react());
var import_prop_types77 = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/components/modal/CModalContent.js
var import_react76 = __toESM(require_react());
var import_prop_types75 = __toESM(require_prop_types());
var CModalContent = (0, import_react76.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react76.default.createElement("div", __assign({ className: classNames("modal-content", className) }, rest, { ref }), children);
});
CModalContent.propTypes = {
  children: import_prop_types75.default.node,
  className: import_prop_types75.default.string
};
CModalContent.displayName = "CModalContent";

// node_modules/@coreui/react/dist/esm/components/modal/CModalDialog.js
var import_react77 = __toESM(require_react());
var import_prop_types76 = __toESM(require_prop_types());
var CModalDialog = (0, import_react77.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, alignment = _a.alignment, className = _a.className, fullscreen = _a.fullscreen, scrollable = _a.scrollable, size = _a.size, rest = __rest(_a, ["children", "alignment", "className", "fullscreen", "scrollable", "size"]);
  return import_react77.default.createElement("div", __assign({ className: classNames("modal-dialog", (_b = {
    "modal-dialog-centered": alignment === "center"
  }, _b[typeof fullscreen === "boolean" ? "modal-fullscreen" : "modal-fullscreen-".concat(fullscreen, "-down")] = fullscreen, _b["modal-dialog-scrollable"] = scrollable, _b["modal-".concat(size)] = size, _b), className) }, rest, { ref }), children);
});
CModalDialog.propTypes = {
  alignment: import_prop_types76.default.oneOf(["top", "center"]),
  children: import_prop_types76.default.node,
  className: import_prop_types76.default.string,
  fullscreen: import_prop_types76.default.oneOfType([
    import_prop_types76.default.bool,
    import_prop_types76.default.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ]),
  scrollable: import_prop_types76.default.bool,
  size: import_prop_types76.default.oneOf(["sm", "lg", "xl"])
};
CModalDialog.displayName = "CModalDialog";

// node_modules/@coreui/react/dist/esm/components/modal/CModal.js
var CModalContext = (0, import_react78.createContext)({});
var CModal = (0, import_react78.forwardRef)(function(_a, ref) {
  var children = _a.children, alignment = _a.alignment, _b = _a.backdrop, backdrop = _b === void 0 ? true : _b, className = _a.className, container = _a.container, _c = _a.duration, duration = _c === void 0 ? 150 : _c, _d = _a.focus, focus = _d === void 0 ? true : _d, fullscreen = _a.fullscreen, _e = _a.keyboard, keyboard = _e === void 0 ? true : _e, onClose = _a.onClose, onClosePrevented = _a.onClosePrevented, onShow = _a.onShow, _f = _a.portal, portal = _f === void 0 ? true : _f, scrollable = _a.scrollable, size = _a.size, _g = _a.transition, transition = _g === void 0 ? true : _g, _h = _a.unmountOnClose, unmountOnClose = _h === void 0 ? true : _h, visible = _a.visible, rest = __rest(_a, ["children", "alignment", "backdrop", "className", "container", "duration", "focus", "fullscreen", "keyboard", "onClose", "onClosePrevented", "onShow", "portal", "scrollable", "size", "transition", "unmountOnClose", "visible"]);
  var activeElementRef = (0, import_react78.useRef)(null);
  var modalRef = (0, import_react78.useRef)(null);
  var modalContentRef = (0, import_react78.useRef)(null);
  var forkedRef = useForkedRef(ref, modalRef);
  var _j = (0, import_react78.useState)(visible), _visible = _j[0], setVisible = _j[1];
  var _k = (0, import_react78.useState)(false), staticBackdrop = _k[0], setStaticBackdrop = _k[1];
  var contextValues = {
    visible: _visible,
    setVisible
  };
  (0, import_react78.useEffect)(function() {
    setVisible(visible);
  }, [visible]);
  (0, import_react78.useEffect)(function() {
    var _a2;
    if (_visible) {
      activeElementRef.current = document.activeElement;
      document.addEventListener("mouseup", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      (_a2 = activeElementRef.current) === null || _a2 === void 0 ? void 0 : _a2.focus();
    }
    return function() {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [_visible]);
  var handleDismiss = function() {
    if (backdrop === "static") {
      return setStaticBackdrop(true);
    }
    setVisible(false);
  };
  (0, import_react78.useLayoutEffect)(function() {
    onClosePrevented && onClosePrevented();
    setTimeout(function() {
      return setStaticBackdrop(false);
    }, duration);
  }, [staticBackdrop]);
  (0, import_react78.useLayoutEffect)(function() {
    if (_visible) {
      document.body.classList.add("modal-open");
      if (backdrop) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "0px";
      }
      setTimeout(function() {
        var _a2;
        focus && ((_a2 = modalRef.current) === null || _a2 === void 0 ? void 0 : _a2.focus());
      }, transition ? duration : 0);
    } else {
      document.body.classList.remove("modal-open");
      if (backdrop) {
        document.body.style.removeProperty("overflow");
        document.body.style.removeProperty("padding-right");
      }
    }
    return function() {
      document.body.classList.remove("modal-open");
      if (backdrop) {
        document.body.style.removeProperty("overflow");
        document.body.style.removeProperty("padding-right");
      }
    };
  }, [_visible]);
  var handleClickOutside = function(event) {
    if (modalRef.current && modalRef.current == event.target) {
      handleDismiss();
    }
  };
  var handleKeyDown = function(event) {
    if (event.key === "Escape" && keyboard) {
      handleDismiss();
    }
  };
  return import_react78.default.createElement(
    import_react78.default.Fragment,
    null,
    import_react78.default.createElement(Transition, { in: _visible, mountOnEnter: true, nodeRef: modalRef, onEnter: onShow, onExit: onClose, unmountOnExit: unmountOnClose, timeout: transition ? duration : 0 }, function(state) {
      return import_react78.default.createElement(
        CConditionalPortal,
        { container, portal },
        import_react78.default.createElement(
          CModalContext.Provider,
          { value: contextValues },
          import_react78.default.createElement(
            "div",
            __assign({ className: classNames("modal", {
              "modal-static": staticBackdrop,
              fade: transition,
              show: state === "entered"
            }, className), tabIndex: -1 }, _visible ? { "aria-modal": true, role: "dialog" } : { "aria-hidden": "true" }, { style: __assign({}, state !== "exited" && { display: "block" }) }, rest, { ref: forkedRef }),
            import_react78.default.createElement(
              CModalDialog,
              { alignment, fullscreen, scrollable, size },
              import_react78.default.createElement(CModalContent, { ref: modalContentRef }, children)
            )
          )
        )
      );
    }),
    backdrop && import_react78.default.createElement(
      CConditionalPortal,
      { container, portal },
      import_react78.default.createElement(CBackdrop, { visible: _visible })
    )
  );
});
CModal.propTypes = {
  alignment: import_prop_types77.default.oneOf(["top", "center"]),
  backdrop: import_prop_types77.default.oneOfType([import_prop_types77.default.bool, import_prop_types77.default.oneOf(["static"])]),
  children: import_prop_types77.default.node,
  className: import_prop_types77.default.string,
  container: import_prop_types77.default.any,
  // HTMLElement
  duration: import_prop_types77.default.number,
  focus: import_prop_types77.default.bool,
  fullscreen: import_prop_types77.default.oneOfType([
    import_prop_types77.default.bool,
    import_prop_types77.default.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ]),
  keyboard: import_prop_types77.default.bool,
  onClose: import_prop_types77.default.func,
  onClosePrevented: import_prop_types77.default.func,
  onShow: import_prop_types77.default.func,
  portal: import_prop_types77.default.bool,
  scrollable: import_prop_types77.default.bool,
  size: import_prop_types77.default.oneOf(["sm", "lg", "xl"]),
  transition: import_prop_types77.default.bool,
  unmountOnClose: import_prop_types77.default.bool,
  visible: import_prop_types77.default.bool
};
CModal.displayName = "CModal";

// node_modules/@coreui/react/dist/esm/components/modal/CModalBody.js
var import_react79 = __toESM(require_react());
var import_prop_types78 = __toESM(require_prop_types());
var CModalBody = (0, import_react79.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react79.default.createElement("div", __assign({ className: classNames("modal-body", className) }, rest, { ref }), children);
});
CModalBody.propTypes = {
  children: import_prop_types78.default.node,
  className: import_prop_types78.default.string
};
CModalBody.displayName = "CModalBody";

// node_modules/@coreui/react/dist/esm/components/modal/CModalFooter.js
var import_react80 = __toESM(require_react());
var import_prop_types79 = __toESM(require_prop_types());
var CModalFooter = (0, import_react80.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react80.default.createElement("div", __assign({ className: classNames("modal-footer", className) }, rest, { ref }), children);
});
CModalFooter.propTypes = {
  children: import_prop_types79.default.node,
  className: import_prop_types79.default.string
};
CModalFooter.displayName = "CModalFooter";

// node_modules/@coreui/react/dist/esm/components/modal/CModalHeader.js
var import_react81 = __toESM(require_react());
var import_prop_types80 = __toESM(require_prop_types());
var CModalHeader = (0, import_react81.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, _b = _a.closeButton, closeButton = _b === void 0 ? true : _b, rest = __rest(_a, ["children", "className", "closeButton"]);
  var setVisible = (0, import_react81.useContext)(CModalContext).setVisible;
  return import_react81.default.createElement(
    "div",
    __assign({ className: classNames("modal-header", className) }, rest, { ref }),
    children,
    closeButton && import_react81.default.createElement(CCloseButton, { onClick: function() {
      return setVisible(false);
    } })
  );
});
CModalHeader.propTypes = {
  children: import_prop_types80.default.node,
  className: import_prop_types80.default.string,
  closeButton: import_prop_types80.default.bool
};
CModalHeader.displayName = "CModalHeader";

// node_modules/@coreui/react/dist/esm/components/modal/CModalTitle.js
var import_react82 = __toESM(require_react());
var import_prop_types81 = __toESM(require_prop_types());
var CModalTitle = (0, import_react82.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "h5" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react82.default.createElement(Component, __assign({ className: classNames("modal-title", className) }, rest, { ref }), children);
});
CModalTitle.propTypes = {
  as: import_prop_types81.default.elementType,
  children: import_prop_types81.default.node,
  className: import_prop_types81.default.string
};
CModalTitle.displayName = "CModalTitle";

// node_modules/@coreui/react/dist/esm/components/nav/CNav.js
var import_react83 = __toESM(require_react());
var import_prop_types82 = __toESM(require_prop_types());
var CNav = (0, import_react83.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, _c = _a.as, Component = _c === void 0 ? "ul" : _c, className = _a.className, layout = _a.layout, variant = _a.variant, rest = __rest(_a, ["children", "as", "className", "layout", "variant"]);
  return import_react83.default.createElement(Component, __assign({ className: classNames("nav", (_b = {}, _b["nav-".concat(layout)] = layout, _b["nav-".concat(variant)] = variant, _b), className), role: "navigation" }, rest, { ref }), children);
});
CNav.propTypes = {
  as: import_prop_types82.default.elementType,
  children: import_prop_types82.default.node,
  className: import_prop_types82.default.string,
  layout: import_prop_types82.default.oneOf(["fill", "justified"]),
  variant: import_prop_types82.default.oneOf(["pills", "tabs", "underline", "underline-border"])
};
CNav.displayName = "CNav";

// node_modules/@coreui/react/dist/esm/components/nav/CNavGroupItems.js
var import_react84 = __toESM(require_react());
var import_prop_types83 = __toESM(require_prop_types());
var CNavGroupItems = (0, import_react84.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "ul" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react84.default.createElement(Component, __assign({ className: classNames("nav-group-items", className) }, rest, { ref }), children);
});
CNavGroupItems.propTypes = {
  as: import_prop_types83.default.elementType,
  children: import_prop_types83.default.node,
  className: import_prop_types83.default.string
};
CNavGroupItems.displayName = "CNavGroupItems";

// node_modules/@coreui/react/dist/esm/components/nav/CNavGroup.js
var import_react86 = __toESM(require_react());
var import_prop_types85 = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/components/sidebar/CSidebarNav.js
var import_react85 = __toESM(require_react());
var import_prop_types84 = __toESM(require_prop_types());
var CNavContext = (0, import_react85.createContext)({});
var recursiveClone = function(children, id, updateId) {
  return import_react85.default.Children.map(children, function(child, index) {
    if (!import_react85.default.isValidElement(child) || // @ts-expect-error the `children` exist in each component. TODO: resolve
    child.type.displayName !== "CNavGroup" && // @ts-expect-error the `children` exist in each component. TODO: resolve
    child.type.displayName !== "CNavLink" && // @ts-expect-error the `children` exist in each component. TODO: resolve
    child.type.displayName !== "CNavItem") {
      return child;
    }
    var _id = id ? updateId ? "".concat(id, ".").concat(index) : "".concat(id) : "".concat(index);
    if (child.props && child.props.children) {
      return import_react85.default.cloneElement(child, {
        idx: _id,
        children: recursiveClone(
          child.props.children,
          _id,
          // @ts-expect-error the `displayName` exist in each component. TODO: resolve
          child.type.displayName === "CNavItem" ? false : true
        )
      });
    }
    return import_react85.default.cloneElement(child, {
      idx: _id
    });
  });
};
var CSidebarNav = (0, import_react85.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "ul" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  var _c = (0, import_react85.useState)(""), visibleGroup = _c[0], setVisibleGroup = _c[1];
  var CNavContextValues = {
    visibleGroup,
    setVisibleGroup
  };
  return import_react85.default.createElement(
    CNavContext.Provider,
    { value: CNavContextValues },
    import_react85.default.createElement(Component, __assign({ className: classNames("sidebar-nav", className), ref }, rest), recursiveClone(children))
  );
});
CSidebarNav.propTypes = {
  as: import_prop_types84.default.elementType,
  children: import_prop_types84.default.node,
  className: import_prop_types84.default.string
};
CSidebarNav.displayName = "CSidebarNav";

// node_modules/@coreui/react/dist/esm/components/nav/CNavGroup.js
var isInVisibleGroup = function(el1, el2) {
  var array1 = el1.toString().split(".");
  var array2 = el2.toString().split(".");
  return array2.every(function(item, index) {
    return item === array1[index];
  });
};
var CNavGroup = (0, import_react86.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "li" : _b, className = _a.className, compact = _a.compact, idx = _a.idx, toggler = _a.toggler, visible = _a.visible, rest = __rest(_a, ["children", "as", "className", "compact", "idx", "toggler", "visible"]);
  var _c = (0, import_react86.useState)(0), height = _c[0], setHeight = _c[1];
  var navItemsRef = (0, import_react86.useRef)(null);
  var _d = (0, import_react86.useContext)(CNavContext), visibleGroup = _d.visibleGroup, setVisibleGroup = _d.setVisibleGroup;
  var _e = (0, import_react86.useState)(Boolean(visible || idx && visibleGroup && isInVisibleGroup(visibleGroup, idx))), _visible = _e[0], setVisible = _e[1];
  (0, import_react86.useEffect)(function() {
    setVisible(Boolean(idx && visibleGroup && isInVisibleGroup(visibleGroup, idx)));
  }, [visibleGroup]);
  var handleTogglerOnCLick = function(event) {
    event.preventDefault();
    setVisibleGroup(_visible ? (idx === null || idx === void 0 ? void 0 : idx.toString().includes(".")) ? idx.slice(0, idx.lastIndexOf(".")) : "" : idx);
    setVisible(!_visible);
  };
  var style = {
    height: 0
  };
  var onEntering = function() {
    navItemsRef.current && setHeight(navItemsRef.current.scrollHeight);
  };
  var onEntered = function() {
    setHeight("auto");
  };
  var onExit = function() {
    navItemsRef.current && setHeight(navItemsRef.current.scrollHeight);
  };
  var onExiting = function() {
    var _a2;
    (_a2 = navItemsRef.current) === null || _a2 === void 0 ? void 0 : _a2.offsetHeight;
    setHeight(0);
  };
  var onExited = function() {
    setHeight(0);
  };
  var transitionStyles = {
    entering: { display: "block", height },
    entered: { display: "block", height },
    exiting: { display: "block", height },
    exited: { height },
    unmounted: {}
  };
  var NavGroupItemsComponent = Component === "li" ? "ul" : "div";
  return import_react86.default.createElement(
    Component,
    __assign({ className: classNames("nav-group", { show: _visible }, className) }, rest, { ref }),
    toggler && import_react86.default.createElement("a", { className: "nav-link nav-group-toggle", href: "#", onClick: function(event) {
      return handleTogglerOnCLick(event);
    } }, toggler),
    import_react86.default.createElement(Transition, { in: _visible, nodeRef: navItemsRef, onEntering, onEntered, onExit, onExiting, onExited, timeout: 300 }, function(state) {
      return import_react86.default.createElement(NavGroupItemsComponent, { className: classNames("nav-group-items", {
        compact
      }), style: __assign(__assign({}, style), transitionStyles[state]), ref: navItemsRef }, children);
    })
  );
});
CNavGroup.propTypes = {
  as: import_prop_types85.default.elementType,
  children: import_prop_types85.default.node,
  className: import_prop_types85.default.string,
  compact: import_prop_types85.default.bool,
  idx: import_prop_types85.default.string,
  toggler: import_prop_types85.default.oneOfType([import_prop_types85.default.string, import_prop_types85.default.node]),
  visible: import_prop_types85.default.bool
};
CNavGroup.displayName = "CNavGroup";

// node_modules/@coreui/react/dist/esm/components/nav/CNavItem.js
var import_react88 = __toESM(require_react());
var import_prop_types87 = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/components/nav/CNavLink.js
var import_react87 = __toESM(require_react());
var import_prop_types86 = __toESM(require_prop_types());
var CNavLink = (0, import_react87.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, idx = _a.idx, rest = __rest(_a, ["children", "className", "idx"]);
  var navLinkRef = (0, import_react87.useRef)(null);
  var forkedRef = useForkedRef(ref, navLinkRef);
  var setVisibleGroup = (0, import_react87.useContext)(CNavContext).setVisibleGroup;
  (0, import_react87.useEffect)(function() {
    var _a2;
    rest.active = (_a2 = navLinkRef.current) === null || _a2 === void 0 ? void 0 : _a2.classList.contains("active");
    idx && rest.active && setVisibleGroup(idx);
  }, [rest.active, className]);
  return import_react87.default.createElement(CLink, __assign({ className: classNames("nav-link", className) }, rest, { ref: forkedRef }), children);
});
CNavLink.propTypes = {
  active: import_prop_types86.default.bool,
  as: import_prop_types86.default.elementType,
  children: import_prop_types86.default.node,
  className: import_prop_types86.default.string,
  disabled: import_prop_types86.default.bool,
  idx: import_prop_types86.default.string
};
CNavLink.displayName = "CNavLink";

// node_modules/@coreui/react/dist/esm/components/nav/CNavItem.js
var CNavItem = (0, import_react88.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "li" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react88.default.createElement(Component, { className: classNames("nav-item", className), ref }, rest.href || rest.to ? import_react88.default.createElement(CNavLink, __assign({ className }, rest), children) : children);
});
CNavItem.propTypes = {
  as: import_prop_types87.default.elementType,
  children: import_prop_types87.default.node,
  className: import_prop_types87.default.string
};
CNavItem.displayName = "CNavItem";

// node_modules/@coreui/react/dist/esm/components/nav/CNavTitle.js
var import_react89 = __toESM(require_react());
var import_prop_types88 = __toESM(require_prop_types());
var CNavTitle = (0, import_react89.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "li" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react89.default.createElement(Component, __assign({ className: classNames("nav-title", className) }, rest, { ref }), children);
});
CNavTitle.propTypes = {
  as: import_prop_types88.default.elementType,
  children: import_prop_types88.default.node,
  className: import_prop_types88.default.string
};
CNavTitle.displayName = "CNavTitle";

// node_modules/@coreui/react/dist/esm/components/navbar/CNavbar.js
var import_react90 = __toESM(require_react());
var import_prop_types89 = __toESM(require_prop_types());
var CNavbar = (0, import_react90.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, _c = _a.as, Component = _c === void 0 ? "nav" : _c, className = _a.className, color = _a.color, colorScheme = _a.colorScheme, container = _a.container, expand = _a.expand, placement = _a.placement, rest = __rest(_a, ["children", "as", "className", "color", "colorScheme", "container", "expand", "placement"]);
  return import_react90.default.createElement(Component, __assign({ className: classNames("navbar", (_b = {}, _b["bg-".concat(color)] = color, _b[typeof expand === "boolean" ? "navbar-expand" : "navbar-expand-".concat(expand)] = expand, _b), placement, className) }, colorScheme && { "data-coreui-theme": colorScheme }, rest, { ref }), container ? import_react90.default.createElement("div", { className: typeof container === "string" ? "container-".concat(container) : "container" }, children) : import_react90.default.createElement(import_react90.default.Fragment, null, children));
});
CNavbar.propTypes = {
  as: import_prop_types89.default.elementType,
  children: import_prop_types89.default.node,
  className: import_prop_types89.default.string,
  color: colorPropType,
  colorScheme: import_prop_types89.default.oneOf(["dark", "light"]),
  container: import_prop_types89.default.oneOfType([
    import_prop_types89.default.bool,
    import_prop_types89.default.oneOf([
      "sm",
      "md",
      "lg",
      "xl",
      "xxl",
      "fluid"
    ])
  ]),
  expand: import_prop_types89.default.oneOfType([
    import_prop_types89.default.bool,
    import_prop_types89.default.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ]),
  placement: import_prop_types89.default.oneOf(["fixed-top", "fixed-bottom", "sticky-top"])
};
CNavbar.displayName = "CNavbar";

// node_modules/@coreui/react/dist/esm/components/navbar/CNavbarBrand.js
var import_react91 = __toESM(require_react());
var import_prop_types90 = __toESM(require_prop_types());
var CNavbarBrand = (0, import_react91.forwardRef)(function(_a, ref) {
  var children = _a.children, as = _a.as, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  var Component = as !== null && as !== void 0 ? as : rest.href ? "a" : "span";
  return import_react91.default.createElement(Component, __assign({ className: classNames("navbar-brand", className) }, rest, { ref }), children);
});
CNavbarBrand.propTypes = {
  as: import_prop_types90.default.elementType,
  children: import_prop_types90.default.node,
  className: import_prop_types90.default.string
};
CNavbarBrand.displayName = "CNavbarBrand";

// node_modules/@coreui/react/dist/esm/components/navbar/CNavbarNav.js
var import_react92 = __toESM(require_react());
var import_prop_types91 = __toESM(require_prop_types());
var CNavbarNav = (0, import_react92.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "ul" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react92.default.createElement(Component, __assign({ className: classNames("navbar-nav", className), role: "navigation", ref }, rest), children);
});
CNavbarNav.propTypes = {
  as: import_prop_types91.default.elementType,
  children: import_prop_types91.default.node,
  className: import_prop_types91.default.string
};
CNavbarNav.displayName = "CNavbarNav";

// node_modules/@coreui/react/dist/esm/components/navbar/CNavbarText.js
var import_react93 = __toESM(require_react());
var import_prop_types92 = __toESM(require_prop_types());
var CNavbarText = (0, import_react93.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react93.default.createElement("span", __assign({ className: classNames("navbar-text", className) }, rest, { ref }), children);
});
CNavbarText.propTypes = {
  children: import_prop_types92.default.node,
  className: import_prop_types92.default.string
};
CNavbarText.displayName = "CNavbarText";

// node_modules/@coreui/react/dist/esm/components/navbar/CNavbarToggler.js
var import_react94 = __toESM(require_react());
var import_prop_types93 = __toESM(require_prop_types());
var CNavbarToggler = (0, import_react94.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react94.default.createElement("button", __assign({ type: "button", className: classNames("navbar-toggler", className) }, rest, { ref }), children !== null && children !== void 0 ? children : import_react94.default.createElement("span", { className: "navbar-toggler-icon" }));
});
CNavbarToggler.propTypes = {
  children: import_prop_types93.default.node,
  className: import_prop_types93.default.string
};
CNavbarToggler.displayName = "CNavbarToggler";

// node_modules/@coreui/react/dist/esm/components/offcanvas/COffcanvas.js
var import_react95 = __toESM(require_react());
var import_prop_types94 = __toESM(require_prop_types());
var COffcanvas = (0, import_react95.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.backdrop, backdrop = _b === void 0 ? true : _b, className = _a.className, dark = _a.dark, _c = _a.keyboard, keyboard = _c === void 0 ? true : _c, onHide = _a.onHide, onShow = _a.onShow, placement = _a.placement, _d = _a.portal, portal = _d === void 0 ? false : _d, _e = _a.responsive, responsive = _e === void 0 ? true : _e, _f = _a.scroll, scroll = _f === void 0 ? false : _f, _g = _a.visible, visible = _g === void 0 ? false : _g, rest = __rest(_a, ["children", "backdrop", "className", "dark", "keyboard", "onHide", "onShow", "placement", "portal", "responsive", "scroll", "visible"]);
  var _h = (0, import_react95.useState)(visible), _visible = _h[0], setVisible = _h[1];
  var offcanvasRef = (0, import_react95.useRef)(null);
  var forkedRef = useForkedRef(ref, offcanvasRef);
  (0, import_react95.useEffect)(function() {
    setVisible(visible);
  }, [visible]);
  (0, import_react95.useEffect)(function() {
    if (_visible && !scroll) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
      return;
    }
    if (!scroll) {
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("padding-right");
    }
  }, [_visible]);
  var handleDismiss = function() {
    setVisible(false);
  };
  var handleBackdropDismiss = function() {
    if (backdrop !== "static") {
      setVisible(false);
    }
  };
  var handleKeyDown = function(event) {
    if (event.key === "Escape" && keyboard) {
      return handleDismiss();
    }
  };
  return import_react95.default.createElement(
    import_react95.default.Fragment,
    null,
    import_react95.default.createElement(Transition, { in: _visible, nodeRef: offcanvasRef, onEnter: onShow, onEntered: function() {
      var _a2;
      return (_a2 = offcanvasRef.current) === null || _a2 === void 0 ? void 0 : _a2.focus();
    }, onExit: onHide, timeout: 300 }, function(state) {
      var _a2;
      return import_react95.default.createElement(
        CConditionalPortal,
        { portal },
        import_react95.default.createElement("div", __assign({ className: classNames((_a2 = {}, _a2["offcanvas".concat(typeof responsive === "string" ? "-" + responsive : "")] = responsive, _a2["offcanvas-".concat(placement)] = placement, _a2.showing = state === "entering", _a2.show = state === "entered", _a2["show hiding"] = state === "exiting", _a2), className), role: "dialog", tabIndex: -1, onKeyDown: handleKeyDown }, dark && { "data-coreui-theme": "dark" }, rest, { ref: forkedRef }), children)
      );
    }),
    backdrop && import_react95.default.createElement(
      CConditionalPortal,
      { portal },
      import_react95.default.createElement(CBackdrop, { className: "offcanvas-backdrop", onClick: handleBackdropDismiss, visible: _visible })
    )
  );
});
COffcanvas.propTypes = {
  backdrop: import_prop_types94.default.oneOfType([import_prop_types94.default.bool, import_prop_types94.default.oneOf(["static"])]),
  children: import_prop_types94.default.node,
  className: import_prop_types94.default.string,
  dark: import_prop_types94.default.bool,
  keyboard: import_prop_types94.default.bool,
  onHide: import_prop_types94.default.func,
  onShow: import_prop_types94.default.func,
  placement: import_prop_types94.default.oneOf(["start", "end", "top", "bottom"]).isRequired,
  portal: import_prop_types94.default.bool,
  responsive: import_prop_types94.default.oneOfType([
    import_prop_types94.default.bool,
    import_prop_types94.default.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ]),
  scroll: import_prop_types94.default.bool,
  visible: import_prop_types94.default.bool
};
COffcanvas.displayName = "COffcanvas";

// node_modules/@coreui/react/dist/esm/components/offcanvas/COffcanvasBody.js
var import_react96 = __toESM(require_react());
var import_prop_types95 = __toESM(require_prop_types());
var COffcanvasBody = (0, import_react96.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react96.default.createElement("div", __assign({ className: classNames("offcanvas-body", className) }, rest, { ref }), children);
});
COffcanvasBody.propTypes = {
  children: import_prop_types95.default.node,
  className: import_prop_types95.default.string
};
COffcanvasBody.displayName = "COffcanvasBody";

// node_modules/@coreui/react/dist/esm/components/offcanvas/COffcanvasHeader.js
var import_react97 = __toESM(require_react());
var import_prop_types96 = __toESM(require_prop_types());
var COffcanvasHeader = (0, import_react97.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react97.default.createElement("div", __assign({ className: classNames("offcanvas-header", className) }, rest, { ref }), children);
});
COffcanvasHeader.propTypes = {
  children: import_prop_types96.default.node,
  className: import_prop_types96.default.string
};
COffcanvasHeader.displayName = "COffcanvasHeader";

// node_modules/@coreui/react/dist/esm/components/offcanvas/COffcanvasTitle.js
var import_react98 = __toESM(require_react());
var import_prop_types97 = __toESM(require_prop_types());
var COffcanvasTitle = (0, import_react98.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "h5" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react98.default.createElement(Component, __assign({ className: classNames("offcanvas-title", className) }, rest, { ref }), children);
});
COffcanvasTitle.propTypes = {
  as: import_prop_types97.default.elementType,
  children: import_prop_types97.default.node,
  className: import_prop_types97.default.string
};
COffcanvasTitle.displayName = "COffcanvasTitle";

// node_modules/@coreui/react/dist/esm/components/pagination/CPagination.js
var import_react99 = __toESM(require_react());
var import_prop_types98 = __toESM(require_prop_types());
var CPagination = (0, import_react99.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, align = _a.align, className = _a.className, size = _a.size, rest = __rest(_a, ["children", "align", "className", "size"]);
  return import_react99.default.createElement(
    "nav",
    __assign({ ref }, rest),
    import_react99.default.createElement("ul", { className: classNames("pagination", (_b = {}, _b["justify-content-".concat(align)] = align, _b["pagination-".concat(size)] = size, _b), className) }, children)
  );
});
CPagination.propTypes = {
  align: import_prop_types98.default.oneOf(["start", "center", "end"]),
  children: import_prop_types98.default.node,
  className: import_prop_types98.default.string,
  size: import_prop_types98.default.oneOf(["sm", "lg"])
};
CPagination.displayName = "CPagination";

// node_modules/@coreui/react/dist/esm/components/pagination/CPaginationItem.js
var import_react100 = __toESM(require_react());
var import_prop_types99 = __toESM(require_prop_types());
var CPaginationItem = (0, import_react100.forwardRef)(function(_a, ref) {
  var children = _a.children, as = _a.as, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  var Component = as !== null && as !== void 0 ? as : rest.active ? "span" : "a";
  return import_react100.default.createElement("li", __assign({ className: classNames("page-item", {
    active: rest.active,
    disabled: rest.disabled
  }, className) }, rest.active && { "aria-current": "page" }), Component === "a" ? import_react100.default.createElement(CLink, __assign({ className: "page-link", as: Component }, rest, { ref }), children) : import_react100.default.createElement(Component, { className: "page-link", ref }, children));
});
CPaginationItem.propTypes = {
  as: import_prop_types99.default.elementType,
  children: import_prop_types99.default.node,
  className: import_prop_types99.default.string
};
CPaginationItem.displayName = "CPaginationItem";

// node_modules/@coreui/react/dist/esm/components/placeholder/CPlaceholder.js
var import_react101 = __toESM(require_react());
var import_prop_types100 = __toESM(require_prop_types());
var BREAKPOINTS4 = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs"
];
var CPlaceholder = (0, import_react101.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, animation = _a.animation, _c = _a.as, Component = _c === void 0 ? "span" : _c, className = _a.className, color = _a.color, size = _a.size, rest = __rest(_a, ["children", "animation", "as", "className", "color", "size"]);
  var repsonsiveClassNames = [];
  BREAKPOINTS4.forEach(function(bp2) {
    var breakpoint = rest[bp2];
    delete rest[bp2];
    var infix = bp2 === "xs" ? "" : "-".concat(bp2);
    if (typeof breakpoint === "number") {
      repsonsiveClassNames.push("col".concat(infix, "-").concat(breakpoint));
    }
    if (typeof breakpoint === "boolean") {
      repsonsiveClassNames.push("col".concat(infix));
    }
  });
  return import_react101.default.createElement(Component, __assign({ className: classNames(animation ? "placeholder-".concat(animation) : "placeholder", (_b = {}, _b["bg-".concat(color)] = color, _b["placeholder-".concat(size)] = size, _b), repsonsiveClassNames, className) }, rest, { ref }), children);
});
CPlaceholder.propTypes = {
  animation: import_prop_types100.default.oneOf(["glow", "wave"]),
  as: import_prop_types100.default.elementType,
  children: import_prop_types100.default.node,
  className: import_prop_types100.default.string,
  color: colorPropType,
  size: import_prop_types100.default.oneOf(["xs", "sm", "lg"])
};
CPlaceholder.displayName = "CPlaceholder";

// node_modules/@coreui/react/dist/esm/components/progress/CProgress.js
var import_react104 = __toESM(require_react());
var import_prop_types103 = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/components/progress/CProgressStacked.js
var import_react102 = __toESM(require_react());
var import_prop_types101 = __toESM(require_prop_types());
var CProgressStackedContext = (0, import_react102.createContext)({});
var CProgressStacked = (0, import_react102.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react102.default.createElement(
    "div",
    __assign({ className: classNames("progress-stacked", className), ref }, rest),
    import_react102.default.createElement(CProgressStackedContext.Provider, { value: {
      stacked: true
    } }, children)
  );
});
CProgressStacked.propTypes = {
  children: import_prop_types101.default.node,
  className: import_prop_types101.default.string
};
CProgressStacked.displayName = "CProgressStacked";

// node_modules/@coreui/react/dist/esm/components/progress/CProgressBar.js
var import_react103 = __toESM(require_react());
var import_prop_types102 = __toESM(require_prop_types());
var CProgressBar = (0, import_react103.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, animated = _a.animated, className = _a.className, color = _a.color, _c = _a.value, value = _c === void 0 ? 0 : _c, variant = _a.variant, rest = __rest(_a, ["children", "animated", "className", "color", "value", "variant"]);
  var stacked = (0, import_react103.useContext)(CProgressStackedContext).stacked;
  return import_react103.default.createElement("div", __assign({ className: classNames("progress-bar", (_b = {}, _b["bg-".concat(color)] = color, _b["progress-bar-".concat(variant)] = variant, _b["progress-bar-animated"] = animated, _b), className) }, !stacked && { style: { width: "".concat(value, "%") } }, rest, { ref }), children);
});
CProgressBar.propTypes = {
  animated: import_prop_types102.default.bool,
  children: import_prop_types102.default.node,
  className: import_prop_types102.default.string,
  color: colorPropType,
  value: import_prop_types102.default.number,
  variant: import_prop_types102.default.oneOf(["striped"])
};
CProgressBar.displayName = "CProgressBar";

// node_modules/@coreui/react/dist/esm/components/progress/CProgress.js
var CProgress = (0, import_react104.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, height = _a.height, progressBarClassName = _a.progressBarClassName, thin = _a.thin, value = _a.value, white = _a.white, rest = __rest(_a, ["children", "className", "height", "progressBarClassName", "thin", "value", "white"]);
  var stacked = (0, import_react104.useContext)(CProgressStackedContext).stacked;
  return import_react104.default.createElement("div", __assign({ className: classNames("progress", {
    "progress-thin": thin,
    "progress-white": white
  }, className) }, value !== void 0 && {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, { style: __assign(__assign({}, height ? { height: "".concat(height, "px") } : {}), stacked ? { width: "".concat(value, "%") } : {}), ref }), import_react104.default.Children.toArray(children).some(
    // @ts-expect-error displayName is set in the CProgressBar component
    function(child) {
      return child.type && child.type.displayName === "CProgressBar";
    }
  ) ? import_react104.default.Children.map(children, function(child) {
    if (import_react104.default.isValidElement(child) && child.type.displayName === "CProgressBar") {
      return import_react104.default.cloneElement(child, __assign(__assign({}, value && { value }), rest));
    }
    return;
  }) : import_react104.default.createElement(CProgressBar, __assign({}, progressBarClassName && { className: progressBarClassName }, { value }, rest), children));
});
CProgress.propTypes = {
  children: import_prop_types103.default.node,
  className: import_prop_types103.default.string,
  height: import_prop_types103.default.number,
  progressBarClassName: import_prop_types103.default.string,
  thin: import_prop_types103.default.bool,
  value: import_prop_types103.default.number,
  white: import_prop_types103.default.bool
};
CProgress.displayName = "CProgress";

// node_modules/@coreui/react/dist/esm/components/popover/CPopover.js
var import_react105 = __toESM(require_react());
var import_prop_types104 = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/utils/getTransitionDurationFromElement.js
var getTransitionDurationFromElement = function(element) {
  if (!element) {
    return 0;
  }
  var _a = window.getComputedStyle(element), transitionDuration = _a.transitionDuration, transitionDelay = _a.transitionDelay;
  var floatTransitionDuration = Number.parseFloat(transitionDuration);
  var floatTransitionDelay = Number.parseFloat(transitionDelay);
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }
  transitionDuration = transitionDuration.split(",")[0];
  transitionDelay = transitionDelay.split(",")[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * 1e3;
};

// node_modules/@coreui/react/dist/esm/utils/executeAfterTransition.js
var execute = function(callback) {
  if (typeof callback === "function") {
    callback();
  }
};
var triggerTransitionEnd = function(element) {
  element.dispatchEvent(new Event("transitionend"));
};
var executeAfterTransition = function(callback, transitionElement, waitForTransition) {
  if (waitForTransition === void 0) {
    waitForTransition = true;
  }
  if (!waitForTransition) {
    execute(callback);
    return;
  }
  var durationPadding = 5;
  var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  var called = false;
  var handler = function(_a) {
    var target = _a.target;
    if (target !== transitionElement) {
      return;
    }
    called = true;
    transitionElement.removeEventListener("transitionend", handler);
    execute(callback);
  };
  transitionElement.addEventListener("transitionend", handler);
  setTimeout(function() {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};

// node_modules/@coreui/react/dist/esm/utils/getRTLPlacement.js
var getRTLPlacement = function(placement, element) {
  switch (placement) {
    case "right": {
      return isRTL(element) ? "left" : "right";
    }
    case "left": {
      return isRTL(element) ? "right" : "left";
    }
    default: {
      return placement;
    }
  }
};

// node_modules/@coreui/react/dist/esm/components/popover/CPopover.js
var CPopover = (0, import_react105.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.animation, animation = _b === void 0 ? true : _b, className = _a.className, container = _a.container, content = _a.content, _c = _a.delay, delay = _c === void 0 ? 0 : _c, _d = _a.fallbackPlacements, fallbackPlacements = _d === void 0 ? ["top", "right", "bottom", "left"] : _d, _e = _a.offset, offset2 = _e === void 0 ? [0, 8] : _e, onHide = _a.onHide, onShow = _a.onShow, _f = _a.placement, placement = _f === void 0 ? "top" : _f, popperConfig = _a.popperConfig, title = _a.title, _g = _a.trigger, trigger = _g === void 0 ? "click" : _g, visible = _a.visible, rest = __rest(_a, ["children", "animation", "className", "container", "content", "delay", "fallbackPlacements", "offset", "onHide", "onShow", "placement", "popperConfig", "title", "trigger", "visible"]);
  var popoverRef = (0, import_react105.useRef)(null);
  var togglerRef = (0, import_react105.useRef)(null);
  var forkedRef = useForkedRef(ref, popoverRef);
  var id = "popover".concat((0, import_react105.useId)());
  var _h = (0, import_react105.useState)(false), mounted = _h[0], setMounted = _h[1];
  var _j = (0, import_react105.useState)(visible), _visible = _j[0], setVisible = _j[1];
  var _k = usePopper(), initPopper = _k.initPopper, destroyPopper = _k.destroyPopper;
  var _delay = typeof delay === "number" ? { show: delay, hide: delay } : delay;
  var defaultPopperConfig = {
    modifiers: [
      { name: "arrow", options: { element: ".popover-arrow" } },
      { name: "flip", options: { fallbackPlacements } },
      { name: "offset", options: { offset: offset2 } }
    ],
    placement: getRTLPlacement(placement, togglerRef.current)
  };
  var computedPopperConfig = __assign(__assign({}, defaultPopperConfig), typeof popperConfig === "function" ? popperConfig(defaultPopperConfig) : popperConfig);
  (0, import_react105.useEffect)(function() {
    if (visible) {
      handleShow();
      return;
    }
    handleHide();
  }, [visible]);
  (0, import_react105.useEffect)(function() {
    if (mounted && togglerRef.current && popoverRef.current) {
      initPopper(togglerRef.current, popoverRef.current, computedPopperConfig);
      setTimeout(function() {
        setVisible(true);
      }, _delay.show);
      return;
    }
    if (!mounted && togglerRef.current && popoverRef.current) {
      destroyPopper();
    }
  }, [mounted]);
  (0, import_react105.useEffect)(function() {
    if (!_visible && togglerRef.current && popoverRef.current) {
      executeAfterTransition(function() {
        setMounted(false);
      }, popoverRef.current);
    }
  }, [_visible]);
  var handleShow = function() {
    setMounted(true);
    if (onShow) {
      onShow();
    }
  };
  var handleHide = function() {
    setTimeout(function() {
      setVisible(false);
      if (onHide) {
        onHide();
      }
    }, _delay.hide);
  };
  return import_react105.default.createElement(
    import_react105.default.Fragment,
    null,
    import_react105.default.cloneElement(children, __assign(__assign(__assign(__assign(__assign({}, _visible && {
      "aria-describedby": id
    }), { ref: togglerRef }), (trigger === "click" || trigger.includes("click")) && {
      onClick: function() {
        return _visible ? handleHide() : handleShow();
      }
    }), (trigger === "focus" || trigger.includes("focus")) && {
      onFocus: function() {
        return handleShow();
      },
      onBlur: function() {
        return handleHide();
      }
    }), (trigger === "hover" || trigger.includes("hover")) && {
      onMouseEnter: function() {
        return handleShow();
      },
      onMouseLeave: function() {
        return handleHide();
      }
    })),
    import_react105.default.createElement(CConditionalPortal, { container, portal: true }, mounted && import_react105.default.createElement(
      "div",
      __assign({ className: classNames("popover", "bs-popover-auto", {
        fade: animation,
        show: _visible
      }, className), id, ref: forkedRef, role: "tooltip" }, rest),
      import_react105.default.createElement("div", { className: "popover-arrow" }),
      import_react105.default.createElement("div", { className: "popover-header" }, title),
      import_react105.default.createElement("div", { className: "popover-body" }, content)
    ))
  );
});
CPopover.propTypes = {
  animation: import_prop_types104.default.bool,
  children: import_prop_types104.default.node,
  className: import_prop_types104.default.string,
  container: import_prop_types104.default.any,
  content: import_prop_types104.default.oneOfType([import_prop_types104.default.string, import_prop_types104.default.node]),
  delay: import_prop_types104.default.oneOfType([
    import_prop_types104.default.number,
    import_prop_types104.default.shape({
      show: import_prop_types104.default.number.isRequired,
      hide: import_prop_types104.default.number.isRequired
    })
  ]),
  fallbackPlacements: fallbackPlacementsPropType,
  offset: import_prop_types104.default.any,
  // TODO: find good proptype
  onHide: import_prop_types104.default.func,
  onShow: import_prop_types104.default.func,
  placement: import_prop_types104.default.oneOf(["auto", "top", "right", "bottom", "left"]),
  popperConfig: import_prop_types104.default.oneOfType([import_prop_types104.default.func, import_prop_types104.default.object]),
  title: import_prop_types104.default.oneOfType([import_prop_types104.default.string, import_prop_types104.default.node]),
  trigger: triggerPropType,
  visible: import_prop_types104.default.bool
};
CPopover.displayName = "CPopover";

// node_modules/@coreui/react/dist/esm/components/sidebar/CSidebar.js
var import_react106 = __toESM(require_react());
var import_react_dom3 = __toESM(require_react_dom());
var import_prop_types105 = __toESM(require_prop_types());
var isOnMobile = function(element) {
  return Boolean(getComputedStyle(element).getPropertyValue("--cui-is-mobile"));
};
var CSidebar = (0, import_react106.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, _c = _a.as, Component = _c === void 0 ? "div" : _c, className = _a.className, colorScheme = _a.colorScheme, narrow = _a.narrow, onHide = _a.onHide, onShow = _a.onShow, onVisibleChange = _a.onVisibleChange, overlaid = _a.overlaid, placement = _a.placement, position = _a.position, size = _a.size, unfoldable = _a.unfoldable, visible = _a.visible, rest = __rest(_a, ["children", "as", "className", "colorScheme", "narrow", "onHide", "onShow", "onVisibleChange", "overlaid", "placement", "position", "size", "unfoldable", "visible"]);
  var sidebarRef = (0, import_react106.useRef)(null);
  var forkedRef = useForkedRef(ref, sidebarRef);
  var _d = (0, import_react106.useState)(), inViewport = _d[0], setInViewport = _d[1];
  var _e = (0, import_react106.useState)(false), mobile = _e[0], setMobile = _e[1];
  var _f = (0, import_react106.useState)(false), visibleMobile = _f[0], setVisibleMobile = _f[1];
  var _g = (0, import_react106.useState)(visible !== void 0 ? visible : overlaid ? false : true), visibleDesktop = _g[0], setVisibleDesktop = _g[1];
  (0, import_react106.useEffect)(function() {
    sidebarRef.current && setMobile(isOnMobile(sidebarRef.current));
    visible !== void 0 && handleVisibleChange(visible);
  }, [visible]);
  (0, import_react106.useEffect)(function() {
    inViewport !== void 0 && onVisibleChange && onVisibleChange(inViewport);
    !inViewport && onHide && onHide();
    inViewport && onShow && onShow();
  }, [inViewport]);
  (0, import_react106.useEffect)(function() {
    mobile && setVisibleMobile(false);
  }, [mobile]);
  (0, import_react106.useEffect)(function() {
    var _a2, _b2;
    sidebarRef.current && setMobile(isOnMobile(sidebarRef.current));
    sidebarRef.current && setInViewport(isInViewport(sidebarRef.current));
    window.addEventListener("resize", handleResize);
    window.addEventListener("mouseup", handleClickOutside);
    window.addEventListener("keyup", handleKeyup);
    (_a2 = sidebarRef.current) === null || _a2 === void 0 ? void 0 : _a2.addEventListener("mouseup", handleOnClick);
    (_b2 = sidebarRef.current) === null || _b2 === void 0 ? void 0 : _b2.addEventListener("transitionend", function() {
      sidebarRef.current && setInViewport(isInViewport(sidebarRef.current));
    });
    return function() {
      var _a3, _b3;
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mouseup", handleClickOutside);
      window.removeEventListener("keyup", handleKeyup);
      (_a3 = sidebarRef.current) === null || _a3 === void 0 ? void 0 : _a3.removeEventListener("mouseup", handleOnClick);
      (_b3 = sidebarRef.current) === null || _b3 === void 0 ? void 0 : _b3.removeEventListener("transitionend", function() {
        sidebarRef.current && setInViewport(isInViewport(sidebarRef.current));
      });
    };
  });
  var handleVisibleChange = function(visible2) {
    if (mobile) {
      setVisibleMobile(visible2);
      return;
    }
    setVisibleDesktop(visible2);
  };
  var handleHide = function() {
    handleVisibleChange(false);
  };
  var handleResize = function() {
    sidebarRef.current && setMobile(isOnMobile(sidebarRef.current));
    sidebarRef.current && setInViewport(isInViewport(sidebarRef.current));
  };
  var handleKeyup = function(event) {
    if (mobile && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleHide();
    }
  };
  var handleClickOutside = function(event) {
    if (mobile && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleHide();
    }
  };
  var handleOnClick = function(event) {
    var target = event.target;
    target && target.classList.contains("nav-link") && !target.classList.contains("nav-group-toggle") && mobile && handleHide();
  };
  return import_react106.default.createElement(
    import_react106.default.Fragment,
    null,
    import_react106.default.createElement(Component, __assign({ className: classNames("sidebar", (_b = {}, _b["sidebar-".concat(colorScheme)] = colorScheme, _b["sidebar-narrow"] = narrow, _b["sidebar-overlaid"] = overlaid, _b["sidebar-".concat(placement)] = placement, _b["sidebar-".concat(position)] = position, _b["sidebar-".concat(size)] = size, _b["sidebar-narrow-unfoldable"] = unfoldable, _b.show = mobile && visibleMobile || overlaid && visibleDesktop, _b.hide = visibleDesktop === false && !mobile && !overlaid, _b), className) }, rest, { ref: forkedRef }), children),
    typeof window !== "undefined" && mobile && (0, import_react_dom3.createPortal)(import_react106.default.createElement(CBackdrop, { className: "sidebar-backdrop", visible: mobile && visibleMobile }), document.body)
  );
});
CSidebar.propTypes = {
  as: import_prop_types105.default.elementType,
  children: import_prop_types105.default.node,
  className: import_prop_types105.default.string,
  colorScheme: import_prop_types105.default.oneOf(["dark", "light"]),
  narrow: import_prop_types105.default.bool,
  onHide: import_prop_types105.default.func,
  onShow: import_prop_types105.default.func,
  onVisibleChange: import_prop_types105.default.func,
  overlaid: import_prop_types105.default.bool,
  placement: import_prop_types105.default.oneOf(["start", "end"]),
  position: import_prop_types105.default.oneOf(["fixed", "sticky"]),
  size: import_prop_types105.default.oneOf(["sm", "lg", "xl"]),
  unfoldable: import_prop_types105.default.bool,
  visible: import_prop_types105.default.bool
};
CSidebar.displayName = "CSidebar";

// node_modules/@coreui/react/dist/esm/components/sidebar/CSidebarBrand.js
var import_react107 = __toESM(require_react());
var import_prop_types106 = __toESM(require_prop_types());
var CSidebarBrand = (0, import_react107.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.as, Component = _b === void 0 ? "a" : _b, className = _a.className, rest = __rest(_a, ["children", "as", "className"]);
  return import_react107.default.createElement(Component, __assign({ className: classNames("sidebar-brand", className), ref }, rest), children);
});
CSidebarBrand.propTypes = {
  as: import_prop_types106.default.elementType,
  children: import_prop_types106.default.node,
  className: import_prop_types106.default.string
};
CSidebarBrand.displayName = "CSidebarBrand";

// node_modules/@coreui/react/dist/esm/components/sidebar/CSidebarFooter.js
var import_react108 = __toESM(require_react());
var import_prop_types107 = __toESM(require_prop_types());
var CSidebarFooter = (0, import_react108.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react108.default.createElement("div", __assign({ className: classNames("sidebar-footer", className), ref }, rest), children);
});
CSidebarFooter.propTypes = {
  children: import_prop_types107.default.node,
  className: import_prop_types107.default.string
};
CSidebarFooter.displayName = "CSidebarFooter";

// node_modules/@coreui/react/dist/esm/components/sidebar/CSidebarToggler.js
var import_react109 = __toESM(require_react());
var import_prop_types108 = __toESM(require_prop_types());
var CSidebarToggler = (0, import_react109.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react109.default.createElement("button", __assign({ className: classNames("sidebar-toggler", className), ref }, rest), children);
});
CSidebarToggler.propTypes = {
  children: import_prop_types108.default.node,
  className: import_prop_types108.default.string
};
CSidebarToggler.displayName = "CSidebarToggler";

// node_modules/@coreui/react/dist/esm/components/sidebar/CSidebarHeader.js
var import_react110 = __toESM(require_react());
var import_prop_types109 = __toESM(require_prop_types());
var CSidebarHeader = (0, import_react110.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react110.default.createElement("div", __assign({ className: classNames("sidebar-header", className), ref }, rest), children);
});
CSidebarHeader.propTypes = {
  children: import_prop_types109.default.node,
  className: import_prop_types109.default.string
};
CSidebarHeader.displayName = "CSidebarHeader";

// node_modules/@coreui/react/dist/esm/components/spinner/CSpinner.js
var import_react111 = __toESM(require_react());
var import_prop_types110 = __toESM(require_prop_types());
var CSpinner = (0, import_react111.forwardRef)(function(_a, ref) {
  var _b;
  var _c = _a.as, Component = _c === void 0 ? "div" : _c, className = _a.className, color = _a.color, size = _a.size, _d = _a.variant, variant = _d === void 0 ? "border" : _d, _e = _a.visuallyHiddenLabel, visuallyHiddenLabel = _e === void 0 ? "Loading..." : _e, rest = __rest(_a, ["as", "className", "color", "size", "variant", "visuallyHiddenLabel"]);
  return import_react111.default.createElement(
    Component,
    __assign({ className: classNames("spinner-".concat(variant), (_b = {}, _b["spinner-".concat(variant, "-").concat(size)] = size, _b["text-".concat(color)] = color, _b), className), role: "status" }, rest, { ref }),
    import_react111.default.createElement("span", { className: "visually-hidden" }, visuallyHiddenLabel)
  );
});
CSpinner.propTypes = {
  as: import_prop_types110.default.string,
  className: import_prop_types110.default.string,
  color: colorPropType,
  size: import_prop_types110.default.oneOf(["sm"]),
  variant: import_prop_types110.default.oneOf(["border", "grow"]),
  visuallyHiddenLabel: import_prop_types110.default.string
};
CSpinner.displayName = "CSpinner";

// node_modules/@coreui/react/dist/esm/components/table/CTable.js
var import_react120 = __toESM(require_react());
var import_prop_types119 = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/components/table/CTableHead.js
var import_react112 = __toESM(require_react());
var import_prop_types111 = __toESM(require_prop_types());
var CTableHead = (0, import_react112.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
  return import_react112.default.createElement("thead", __assign({ className: classNames((_b = {}, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableHead.propTypes = {
  children: import_prop_types111.default.node,
  className: import_prop_types111.default.string,
  color: colorPropType
};
CTableHead.displayName = "CTableHead";

// node_modules/@coreui/react/dist/esm/components/table/CTableHeaderCell.js
var import_react113 = __toESM(require_react());
var import_prop_types112 = __toESM(require_prop_types());
var CTableHeaderCell = (0, import_react113.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
  return import_react113.default.createElement("th", __assign({ className: classNames((_b = {}, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableHeaderCell.propTypes = {
  children: import_prop_types112.default.node,
  className: import_prop_types112.default.string,
  color: colorPropType
};
CTableHeaderCell.displayName = "CTableHeaderCell";

// node_modules/@coreui/react/dist/esm/components/table/CTableBody.js
var import_react114 = __toESM(require_react());
var import_prop_types113 = __toESM(require_prop_types());
var CTableBody = (0, import_react114.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
  return import_react114.default.createElement("tbody", __assign({ className: classNames((_b = {}, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableBody.propTypes = {
  children: import_prop_types113.default.node,
  className: import_prop_types113.default.string,
  color: colorPropType
};
CTableBody.displayName = "CTableBody";

// node_modules/@coreui/react/dist/esm/components/table/CTableDataCell.js
var import_react115 = __toESM(require_react());
var import_prop_types114 = __toESM(require_prop_types());
var CTableDataCell = (0, import_react115.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, active = _a.active, align = _a.align, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "active", "align", "className", "color"]);
  var Component = rest.scope ? "th" : "td";
  return import_react115.default.createElement(Component, __assign({ className: classNames((_b = {}, _b["align-".concat(align)] = align, _b["table-active"] = active, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableDataCell.propTypes = {
  active: import_prop_types114.default.bool,
  align: import_prop_types114.default.oneOf(["bottom", "middle", "top"]),
  children: import_prop_types114.default.node,
  className: import_prop_types114.default.string,
  color: colorPropType
};
CTableDataCell.displayName = "CTableDataCell";

// node_modules/@coreui/react/dist/esm/components/table/CTableRow.js
var import_react116 = __toESM(require_react());
var import_prop_types115 = __toESM(require_prop_types());
var CTableRow = (0, import_react116.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, active = _a.active, align = _a.align, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "active", "align", "className", "color"]);
  return import_react116.default.createElement("tr", __assign({ className: classNames((_b = {}, _b["align-".concat(align)] = align, _b["table-active"] = active, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableRow.propTypes = {
  active: import_prop_types115.default.bool,
  align: import_prop_types115.default.oneOf(["bottom", "middle", "top"]),
  children: import_prop_types115.default.node,
  className: import_prop_types115.default.string,
  color: colorPropType
};
CTableRow.displayName = "CTableRow";

// node_modules/@coreui/react/dist/esm/components/table/CTableFoot.js
var import_prop_types116 = __toESM(require_prop_types());
var import_react117 = __toESM(require_react());
var CTableFoot = (0, import_react117.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
  return import_react117.default.createElement("tfoot", __assign({ className: classNames((_b = {}, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableFoot.propTypes = {
  children: import_prop_types116.default.node,
  className: import_prop_types116.default.string,
  color: colorPropType
};
CTableFoot.displayName = "CTableFoot";

// node_modules/@coreui/react/dist/esm/components/table/CTableCaption.js
var import_react118 = __toESM(require_react());
var import_prop_types117 = __toESM(require_prop_types());
var CTableCaption = (0, import_react118.forwardRef)(function(_a, ref) {
  var children = _a.children, props = __rest(_a, ["children"]);
  return import_react118.default.createElement("caption", __assign({}, props, { ref }), children);
});
CTableCaption.propTypes = {
  children: import_prop_types117.default.node
};
CTableCaption.displayName = "CTableCaption";

// node_modules/@coreui/react/dist/esm/components/table/CTableResponsiveWrapper.js
var import_react119 = __toESM(require_react());
var import_prop_types118 = __toESM(require_prop_types());
var CTableResponsiveWrapper = function(_a) {
  var children = _a.children, responsive = _a.responsive, rest = __rest(_a, ["children", "responsive"]);
  return responsive ? import_react119.default.createElement("div", __assign({ className: typeof responsive === "boolean" ? "table-responsive" : "table-responsive-".concat(responsive) }, rest), children) : import_react119.default.createElement(import_react119.default.Fragment, null, children);
};
CTableResponsiveWrapper.propTypes = {
  children: import_prop_types118.default.node,
  responsive: import_prop_types118.default.oneOfType([
    import_prop_types118.default.bool,
    import_prop_types118.default.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ])
};
CTableResponsiveWrapper.displayName = "CTableResponsiveWrapper";

// node_modules/@coreui/react/dist/esm/components/table/utils.js
var pretifyName = function(name) {
  return name.replace(/[-_.]/g, " ").replace(/ +/g, " ").replace(/([a-z0-9])([A-Z])/g, "$1 $2").split(" ").map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
};
var getColumnLabel = function(column) {
  var _a;
  return typeof column === "object" ? (_a = column.label) !== null && _a !== void 0 ? _a : pretifyName(column.key) : pretifyName(column);
};
var getColumnNames = function(columns, items) {
  return columns ? columns.map(function(column) {
    return typeof column === "object" ? column.key : column;
  }) : items && getColumnNamesFromItems(items);
};
var getColumnNamesFromItems = function(items) {
  return Object.keys(items[0] || {}).filter(function(el) {
    return el.charAt(0) !== "_";
  });
};

// node_modules/@coreui/react/dist/esm/components/table/CTable.js
var CTable = (0, import_react120.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, align = _a.align, borderColor = _a.borderColor, bordered = _a.bordered, borderless = _a.borderless, caption = _a.caption, captionTop = _a.captionTop, className = _a.className, color = _a.color, columns = _a.columns, footer = _a.footer, hover = _a.hover, items = _a.items, responsive = _a.responsive, small = _a.small, striped = _a.striped, stripedColumns = _a.stripedColumns, tableFootProps = _a.tableFootProps, tableHeadProps = _a.tableHeadProps, rest = __rest(_a, ["children", "align", "borderColor", "bordered", "borderless", "caption", "captionTop", "className", "color", "columns", "footer", "hover", "items", "responsive", "small", "striped", "stripedColumns", "tableFootProps", "tableHeadProps"]);
  var columnNames = (0, import_react120.useMemo)(function() {
    return getColumnNames(columns, items);
  }, [columns, items]);
  return import_react120.default.createElement(
    CTableResponsiveWrapper,
    { responsive },
    import_react120.default.createElement(
      "table",
      __assign({ className: classNames("table", (_b = {}, _b["align-".concat(align)] = align, _b["border-".concat(borderColor)] = borderColor, _b["caption-top"] = captionTop || caption === "top", _b["table-bordered"] = bordered, _b["table-borderless"] = borderless, _b["table-".concat(color)] = color, _b["table-hover"] = hover, _b["table-sm"] = small, _b["table-striped"] = striped, _b["table-striped-columns"] = stripedColumns, _b), className) }, rest, { ref }),
      (caption && caption !== "top" || captionTop) && import_react120.default.createElement(CTableCaption, null, caption || captionTop),
      columns && import_react120.default.createElement(
        CTableHead,
        __assign({}, tableHeadProps),
        import_react120.default.createElement(CTableRow, null, columns.map(function(column, index) {
          return import_react120.default.createElement(CTableHeaderCell, __assign({}, column._props && __assign({}, column._props), column._style && { style: __assign({}, column._style) }, { key: index }), getColumnLabel(column));
        }))
      ),
      items && import_react120.default.createElement(CTableBody, null, items.map(function(item, index) {
        return import_react120.default.createElement(CTableRow, __assign({}, item._props && __assign({}, item._props), { key: index }), columnNames && columnNames.map(function(colName, index2) {
          return item[colName] !== void 0 ? import_react120.default.createElement(CTableDataCell, __assign({}, item._cellProps && __assign(__assign({}, item._cellProps["all"] && __assign({}, item._cellProps["all"])), item._cellProps[colName] && __assign({}, item._cellProps[colName])), { key: index2 }), item[colName]) : null;
        }));
      })),
      children,
      footer && import_react120.default.createElement(
        CTableFoot,
        __assign({}, tableFootProps),
        import_react120.default.createElement(CTableRow, null, footer.map(function(item, index) {
          return import_react120.default.createElement(CTableDataCell, __assign({}, typeof item === "object" && item._props && __assign({}, item._props), { key: index }), typeof item === "object" ? item.label : item);
        }))
      )
    )
  );
});
CTable.propTypes = {
  align: import_prop_types119.default.oneOf(["bottom", "middle", "top"]),
  borderColor: import_prop_types119.default.string,
  bordered: import_prop_types119.default.bool,
  borderless: import_prop_types119.default.bool,
  caption: import_prop_types119.default.oneOfType([import_prop_types119.default.string, import_prop_types119.default.oneOf(["top"])]),
  captionTop: import_prop_types119.default.string,
  children: import_prop_types119.default.node,
  className: import_prop_types119.default.string,
  color: colorPropType,
  columns: import_prop_types119.default.array,
  footer: import_prop_types119.default.array,
  hover: import_prop_types119.default.bool,
  items: import_prop_types119.default.array,
  responsive: import_prop_types119.default.oneOfType([
    import_prop_types119.default.bool,
    import_prop_types119.default.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ]),
  small: import_prop_types119.default.bool,
  striped: import_prop_types119.default.bool,
  stripedColumns: import_prop_types119.default.bool,
  tableFootProps: import_prop_types119.default.shape(__assign({}, CTableFoot.propTypes)),
  tableHeadProps: import_prop_types119.default.shape(__assign({}, CTableHead.propTypes))
};
CTable.displayName = "CTable";

// node_modules/@coreui/react/dist/esm/components/tabs/CTab.js
var import_react122 = __toESM(require_react());
var import_prop_types121 = __toESM(require_prop_types());

// node_modules/@coreui/react/dist/esm/components/tabs/CTabs.js
var import_react121 = __toESM(require_react());
var import_prop_types120 = __toESM(require_prop_types());
var TabsContext = (0, import_react121.createContext)({});
var CTabs = (0, import_react121.forwardRef)(function(_a, ref) {
  var children = _a.children, activeItemKey = _a.activeItemKey, className = _a.className, onChange = _a.onChange;
  var id = (0, import_react121.useId)();
  var _b = (0, import_react121.useState)(activeItemKey), _activeItemKey = _b[0], setActiveItemKey = _b[1];
  (0, import_react121.useEffect)(function() {
    _activeItemKey && onChange && onChange(_activeItemKey);
  }, [_activeItemKey]);
  return import_react121.default.createElement(
    TabsContext.Provider,
    { value: { _activeItemKey, setActiveItemKey, id } },
    import_react121.default.createElement("div", { className: classNames("tabs", className), ref }, children)
  );
});
CTabs.propTypes = {
  activeItemKey: import_prop_types120.default.oneOfType([import_prop_types120.default.number, import_prop_types120.default.string]).isRequired,
  children: import_prop_types120.default.node,
  className: import_prop_types120.default.string,
  onChange: import_prop_types120.default.func
};
CTabs.displayName = "CTabs";

// node_modules/@coreui/react/dist/esm/components/tabs/CTab.js
var CTab = (0, import_react122.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, itemKey = _a.itemKey, rest = __rest(_a, ["children", "className", "itemKey"]);
  var _b = (0, import_react122.useContext)(TabsContext), _activeItemKey = _b._activeItemKey, setActiveItemKey = _b.setActiveItemKey, id = _b.id;
  var isActive = function() {
    return itemKey === _activeItemKey;
  };
  return import_react122.default.createElement("button", __assign({ className: classNames("nav-link", {
    active: isActive()
  }, className), id: "".concat(id).concat(itemKey, "-tab"), onClick: function() {
    return setActiveItemKey(itemKey);
  }, onFocus: function() {
    return setActiveItemKey(itemKey);
  }, role: "tab", tabIndex: isActive() ? 0 : -1, type: "button", "aria-controls": "".concat(id).concat(itemKey, "-tab-pane"), "aria-selected": isActive(), ref }, rest), children);
});
CTab.propTypes = {
  children: import_prop_types121.default.node,
  className: import_prop_types121.default.string,
  disabled: import_prop_types121.default.bool,
  itemKey: import_prop_types121.default.oneOfType([import_prop_types121.default.number, import_prop_types121.default.string]).isRequired
};
CTab.displayName = "CTab";

// node_modules/@coreui/react/dist/esm/components/tabs/CTabContent.js
var import_react123 = __toESM(require_react());
var import_prop_types122 = __toESM(require_prop_types());
var CTabContent = (0, import_react123.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react123.default.createElement("div", __assign({ className: classNames("tab-content", className) }, rest, { ref }), children);
});
CTabContent.propTypes = {
  children: import_prop_types122.default.node,
  className: import_prop_types122.default.string
};
CTabContent.displayName = "CTabContent";

// node_modules/@coreui/react/dist/esm/components/tabs/CTabPane.js
var import_react124 = __toESM(require_react());
var import_prop_types123 = __toESM(require_prop_types());
var CTabPane = (0, import_react124.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, onHide = _a.onHide, onShow = _a.onShow, _b = _a.transition, transition = _b === void 0 ? true : _b, visible = _a.visible, rest = __rest(_a, ["children", "className", "onHide", "onShow", "transition", "visible"]);
  var tabPaneRef = (0, import_react124.useRef)();
  var forkedRef = useForkedRef(ref, tabPaneRef);
  return import_react124.default.createElement(Transition, { in: visible, nodeRef: tabPaneRef, onEnter: onShow, onExit: onHide, timeout: 150 }, function(state) {
    return import_react124.default.createElement("div", __assign({ className: classNames("tab-pane", {
      active: visible,
      fade: transition,
      show: state === "entered"
    }, className) }, rest, { ref: forkedRef }), children);
  });
});
CTabPane.propTypes = {
  children: import_prop_types123.default.node,
  className: import_prop_types123.default.string,
  onHide: import_prop_types123.default.func,
  onShow: import_prop_types123.default.func,
  transition: import_prop_types123.default.bool,
  visible: import_prop_types123.default.bool
};
CTabPane.displayName = "CTabPane";

// node_modules/@coreui/react/dist/esm/components/tabs/CTabPanel.js
var import_react125 = __toESM(require_react());
var import_prop_types124 = __toESM(require_prop_types());
var CTabPanel = (0, import_react125.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, itemKey = _a.itemKey, onHide = _a.onHide, onShow = _a.onShow, _b = _a.transition, transition = _b === void 0 ? true : _b, visible = _a.visible, rest = __rest(_a, ["children", "className", "itemKey", "onHide", "onShow", "transition", "visible"]);
  var _c = (0, import_react125.useContext)(TabsContext), _activeItemKey = _c._activeItemKey, id = _c.id;
  var tabPaneRef = (0, import_react125.useRef)();
  var forkedRef = useForkedRef(ref, tabPaneRef);
  var _d = (0, import_react125.useState)(visible || _activeItemKey === itemKey), _visible = _d[0], setVisible = _d[1];
  (0, import_react125.useEffect)(function() {
    visible !== void 0 && setVisible(visible);
  }, [visible]);
  (0, import_react125.useEffect)(function() {
    setVisible(_activeItemKey === itemKey);
  }, [_activeItemKey]);
  return import_react125.default.createElement(Transition, { in: _visible, nodeRef: tabPaneRef, onEnter: onShow, onExit: onHide, timeout: tabPaneRef.current ? getTransitionDurationFromElement(tabPaneRef.current) : 0 }, function(state) {
    return import_react125.default.createElement("div", __assign({ className: classNames("tab-pane", {
      active: _visible,
      fade: transition,
      show: state === "entered"
    }, className), id: "".concat(id).concat(itemKey, "-tab-pane"), role: "tabpanel", "aria-labelledby": "".concat(id).concat(itemKey, "-tab"), tabIndex: 0, ref: forkedRef }, rest), children);
  });
});
CTabPanel.propTypes = {
  children: import_prop_types124.default.node,
  className: import_prop_types124.default.string,
  itemKey: import_prop_types124.default.oneOfType([import_prop_types124.default.number, import_prop_types124.default.string]).isRequired,
  onHide: import_prop_types124.default.func,
  onShow: import_prop_types124.default.func,
  transition: import_prop_types124.default.bool,
  visible: import_prop_types124.default.bool
};
CTabPanel.displayName = "CTabPanel";

// node_modules/@coreui/react/dist/esm/components/tabs/CTabList.js
var import_react126 = __toESM(require_react());
var import_prop_types125 = __toESM(require_prop_types());
var CTabList = (0, import_react126.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, layout = _a.layout, variant = _a.variant, rest = __rest(_a, ["children", "className", "layout", "variant"]);
  var tabListRef = (0, import_react126.useRef)(null);
  var forkedRef = useForkedRef(ref, tabListRef);
  var handleKeydown = function(event) {
    if (tabListRef.current !== null && (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "Home" || event.key === "End")) {
      event.preventDefault();
      var target = event.target;
      var items = Array.from(tabListRef.current.querySelectorAll(".nav-link:not(.disabled):not(:disabled)"));
      var nextActiveElement = void 0;
      if (event.key === "Home" || event.key === "End") {
        nextActiveElement = event.key === "End" ? items.at(-1) : items[0];
      } else {
        nextActiveElement = getNextActiveElement(items, target, event.key === "ArrowDown" || event.key === "ArrowRight", true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({ preventScroll: true });
      }
    }
  };
  return import_react126.default.createElement("div", __assign({ className: classNames("nav", (_b = {}, _b["nav-".concat(layout)] = layout, _b["nav-".concat(variant)] = variant, _b), className), role: "tablist", onKeyDown: handleKeydown, ref: forkedRef }, rest), children);
});
CTabList.propTypes = {
  children: import_prop_types125.default.node,
  className: import_prop_types125.default.string,
  layout: import_prop_types125.default.oneOf(["fill", "justified"]),
  variant: import_prop_types125.default.oneOf(["pills", "tabs", "underline", "underline-border"])
};
CTabList.displayName = "CTabList";

// node_modules/@coreui/react/dist/esm/components/toast/CToast.js
var import_react127 = __toESM(require_react());
var import_prop_types126 = __toESM(require_prop_types());
var CToastContext = (0, import_react127.createContext)({});
var CToast = (0, import_react127.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.animation, animation = _b === void 0 ? true : _b, _c = _a.autohide, autohide = _c === void 0 ? true : _c, className = _a.className, color = _a.color, _d = _a.delay, delay = _d === void 0 ? 5e3 : _d, index = _a.index, innerKey = _a.innerKey, _e = _a.visible, visible = _e === void 0 ? false : _e, onClose = _a.onClose, onShow = _a.onShow, rest = __rest(_a, ["children", "animation", "autohide", "className", "color", "delay", "index", "innerKey", "visible", "onClose", "onShow"]);
  var toastRef = (0, import_react127.useRef)();
  var forkedRef = useForkedRef(ref, toastRef);
  var _f = (0, import_react127.useState)(false), _visible = _f[0], setVisible = _f[1];
  var timeout2 = (0, import_react127.useRef)();
  (0, import_react127.useEffect)(function() {
    setVisible(visible);
  }, [visible]);
  var contextValues = {
    visible: _visible,
    setVisible
  };
  (0, import_react127.useEffect)(function() {
    return function() {
      return clearTimeout(timeout2.current);
    };
  }, []);
  (0, import_react127.useEffect)(function() {
    _autohide();
  }, [_visible]);
  var _autohide = function() {
    if (autohide) {
      clearTimeout(timeout2.current);
      timeout2.current = window.setTimeout(function() {
        setVisible(false);
      }, delay);
    }
  };
  return import_react127.default.createElement(Transition, { in: _visible, nodeRef: toastRef, onEnter: function() {
    return onShow && onShow(index !== null && index !== void 0 ? index : null);
  }, onExited: function() {
    return onClose && onClose(index !== null && index !== void 0 ? index : null);
  }, timeout: 250, unmountOnExit: true }, function(state) {
    var _a2;
    return import_react127.default.createElement(
      CToastContext.Provider,
      { value: contextValues },
      import_react127.default.createElement("div", __assign({ className: classNames("toast", (_a2 = {
        fade: animation
      }, _a2["bg-".concat(color)] = color, _a2["border-0"] = color, _a2["show showing"] = state === "entering" || state === "exiting", _a2.show = state === "entered", _a2), className), "aria-live": "assertive", "aria-atomic": "true", role: "alert", onMouseEnter: function() {
        return clearTimeout(timeout2.current);
      }, onMouseLeave: function() {
        return _autohide();
      } }, rest, { key: innerKey, ref: forkedRef }), children)
    );
  });
});
CToast.propTypes = {
  animation: import_prop_types126.default.bool,
  autohide: import_prop_types126.default.bool,
  children: import_prop_types126.default.node,
  className: import_prop_types126.default.string,
  color: colorPropType,
  delay: import_prop_types126.default.number,
  index: import_prop_types126.default.number,
  innerKey: import_prop_types126.default.oneOfType([
    import_prop_types126.default.number,
    import_prop_types126.default.string
  ]),
  onClose: import_prop_types126.default.func,
  onShow: import_prop_types126.default.func,
  visible: import_prop_types126.default.bool
};
CToast.displayName = "CToast";

// node_modules/@coreui/react/dist/esm/components/toast/CToastBody.js
var import_react128 = __toESM(require_react());
var import_prop_types127 = __toESM(require_prop_types());
var CToastBody = (0, import_react128.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react128.default.createElement("div", __assign({ className: classNames("toast-body", className) }, rest, { ref }), children);
});
CToastBody.propTypes = {
  children: import_prop_types127.default.node,
  className: import_prop_types127.default.string
};
CToastBody.displayName = "CToastBody";

// node_modules/@coreui/react/dist/esm/components/toast/CToastClose.js
var import_react129 = __toESM(require_react());
var import_prop_types128 = __toESM(require_prop_types());
var CToastClose = (0, import_react129.forwardRef)(function(_a, ref) {
  var children = _a.children, Component = _a.as, rest = __rest(_a, ["children", "as"]);
  var setVisible = (0, import_react129.useContext)(CToastContext).setVisible;
  return Component ? import_react129.default.createElement(Component, __assign({ onClick: function() {
    return setVisible(false);
  } }, rest, { ref }), children) : import_react129.default.createElement(CCloseButton, __assign({ onClick: function() {
    return setVisible(false);
  } }, rest, { ref }));
});
CToastClose.propTypes = __assign(__assign({}, CCloseButton.propTypes), { as: import_prop_types128.default.elementType });
CToastClose.displayName = "CToastClose";

// node_modules/@coreui/react/dist/esm/components/toast/CToastHeader.js
var import_react130 = __toESM(require_react());
var import_prop_types129 = __toESM(require_prop_types());
var CToastHeader = (0, import_react130.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, closeButton = _a.closeButton, rest = __rest(_a, ["children", "className", "closeButton"]);
  return import_react130.default.createElement(
    "div",
    __assign({ className: classNames("toast-header", className) }, rest, { ref }),
    children,
    closeButton && import_react130.default.createElement(CToastClose, null)
  );
});
CToastHeader.propTypes = {
  children: import_prop_types129.default.node,
  className: import_prop_types129.default.string,
  closeButton: import_prop_types129.default.bool
};
CToastHeader.displayName = "CToastHeader";

// node_modules/@coreui/react/dist/esm/components/toast/CToaster.js
var import_react131 = __toESM(require_react());
var import_prop_types130 = __toESM(require_prop_types());
var CToaster = (0, import_react131.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, placement = _a.placement, push = _a.push, rest = __rest(_a, ["children", "className", "placement", "push"]);
  var _b = (0, import_react131.useState)([]), toasts = _b[0], setToasts = _b[1];
  var index = (0, import_react131.useRef)(0);
  (0, import_react131.useEffect)(function() {
    index.current++;
    push && addToast(push);
  }, [push]);
  var addToast = function(push2) {
    setToasts(function(state) {
      return __spreadArray(__spreadArray([], state, true), [
        import_react131.default.cloneElement(push2, {
          index: index.current,
          innerKey: index.current,
          onClose: function(index2) {
            return setToasts(function(state2) {
              return state2.filter(function(i) {
                return i.props.index !== index2;
              });
            });
          }
        })
      ], false);
    });
  };
  return import_react131.default.createElement(CConditionalPortal, { portal: typeof placement === "string" }, toasts.length > 0 || children ? import_react131.default.createElement(
    "div",
    __assign({ className: classNames("toaster toast-container", {
      "position-fixed": placement,
      "top-0": placement && placement.includes("top"),
      "top-50 translate-middle-y": placement && placement.includes("middle"),
      "bottom-0": placement && placement.includes("bottom"),
      "start-0": placement && placement.includes("start"),
      "start-50 translate-middle-x": placement && placement.includes("center"),
      "end-0": placement && placement.includes("end")
    }, className) }, rest, { ref }),
    children,
    toasts.map(function(toast) {
      return import_react131.default.cloneElement(toast, { visible: true });
    })
  ) : null);
});
CToaster.propTypes = {
  children: import_prop_types130.default.node,
  className: import_prop_types130.default.string,
  placement: import_prop_types130.default.oneOfType([
    import_prop_types130.default.string,
    import_prop_types130.default.oneOf([
      "top-start",
      "top-center",
      "top-end",
      "middle-start",
      "middle-center",
      "middle-end",
      "bottom-start",
      "bottom-center",
      "bottom-end"
    ])
  ]),
  push: import_prop_types130.default.any
};
CToaster.displayName = "CToaster";

// node_modules/@coreui/react/dist/esm/components/tooltip/CTooltip.js
var import_react132 = __toESM(require_react());
var import_prop_types131 = __toESM(require_prop_types());
var CTooltip = (0, import_react132.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.animation, animation = _b === void 0 ? true : _b, className = _a.className, container = _a.container, content = _a.content, _c = _a.delay, delay = _c === void 0 ? 0 : _c, _d = _a.fallbackPlacements, fallbackPlacements = _d === void 0 ? ["top", "right", "bottom", "left"] : _d, _e = _a.offset, offset2 = _e === void 0 ? [0, 6] : _e, onHide = _a.onHide, onShow = _a.onShow, _f = _a.placement, placement = _f === void 0 ? "top" : _f, popperConfig = _a.popperConfig, _g = _a.trigger, trigger = _g === void 0 ? ["hover", "focus"] : _g, visible = _a.visible, rest = __rest(_a, ["children", "animation", "className", "container", "content", "delay", "fallbackPlacements", "offset", "onHide", "onShow", "placement", "popperConfig", "trigger", "visible"]);
  var tooltipRef = (0, import_react132.useRef)(null);
  var togglerRef = (0, import_react132.useRef)(null);
  var forkedRef = useForkedRef(ref, tooltipRef);
  var id = "tooltip".concat((0, import_react132.useId)());
  var _h = (0, import_react132.useState)(false), mounted = _h[0], setMounted = _h[1];
  var _j = (0, import_react132.useState)(visible), _visible = _j[0], setVisible = _j[1];
  var _k = usePopper(), initPopper = _k.initPopper, destroyPopper = _k.destroyPopper, updatePopper = _k.updatePopper;
  var _delay = typeof delay === "number" ? { show: delay, hide: delay } : delay;
  var defaultPopperConfig = {
    modifiers: [
      { name: "arrow", options: { element: ".tooltip-arrow" } },
      { name: "flip", options: { fallbackPlacements } },
      { name: "offset", options: { offset: offset2 } }
    ],
    placement: getRTLPlacement(placement, togglerRef.current)
  };
  var computedPopperConfig = __assign(__assign({}, defaultPopperConfig), typeof popperConfig === "function" ? popperConfig(defaultPopperConfig) : popperConfig);
  (0, import_react132.useEffect)(function() {
    if (visible) {
      handleShow();
      return;
    }
    handleHide();
  }, [visible]);
  (0, import_react132.useEffect)(function() {
    if (mounted && togglerRef.current && tooltipRef.current) {
      initPopper(togglerRef.current, tooltipRef.current, computedPopperConfig);
      setTimeout(function() {
        setVisible(true);
      }, _delay.show);
      return;
    }
    if (!mounted && togglerRef.current && tooltipRef.current) {
      destroyPopper();
    }
  }, [mounted]);
  (0, import_react132.useEffect)(function() {
    if (!_visible && togglerRef.current && tooltipRef.current) {
      executeAfterTransition(function() {
        setMounted(false);
      }, tooltipRef.current);
    }
  }, [_visible]);
  var handleShow = function() {
    setMounted(true);
    if (onShow) {
      onShow();
    }
  };
  var handleHide = function() {
    setTimeout(function() {
      setVisible(false);
      if (onHide) {
        onHide();
      }
    }, _delay.hide);
  };
  (0, import_react132.useEffect)(function() {
    updatePopper();
  }, [content]);
  return import_react132.default.createElement(
    import_react132.default.Fragment,
    null,
    import_react132.default.cloneElement(children, __assign(__assign(__assign(__assign(__assign({}, _visible && {
      "aria-describedby": id
    }), { ref: togglerRef }), (trigger === "click" || trigger.includes("click")) && {
      onClick: function() {
        return _visible ? handleHide() : handleShow();
      }
    }), (trigger === "focus" || trigger.includes("focus")) && {
      onFocus: function() {
        return handleShow();
      },
      onBlur: function() {
        return handleHide();
      }
    }), (trigger === "hover" || trigger.includes("hover")) && {
      onMouseEnter: function() {
        return handleShow();
      },
      onMouseLeave: function() {
        return handleHide();
      }
    })),
    import_react132.default.createElement(CConditionalPortal, { container, portal: true }, mounted && import_react132.default.createElement(
      "div",
      __assign({ className: classNames("tooltip", "bs-tooltip-auto", {
        fade: animation,
        show: _visible
      }, className), id, ref: forkedRef, role: "tooltip" }, rest),
      import_react132.default.createElement("div", { className: "tooltip-arrow" }),
      import_react132.default.createElement("div", { className: "tooltip-inner" }, content)
    ))
  );
});
CTooltip.propTypes = {
  animation: import_prop_types131.default.bool,
  children: import_prop_types131.default.node,
  container: import_prop_types131.default.any,
  content: import_prop_types131.default.oneOfType([import_prop_types131.default.string, import_prop_types131.default.node]),
  delay: import_prop_types131.default.oneOfType([
    import_prop_types131.default.number,
    import_prop_types131.default.shape({
      show: import_prop_types131.default.number.isRequired,
      hide: import_prop_types131.default.number.isRequired
    })
  ]),
  fallbackPlacements: fallbackPlacementsPropType,
  offset: import_prop_types131.default.any,
  // TODO: find good proptype
  onHide: import_prop_types131.default.func,
  onShow: import_prop_types131.default.func,
  placement: import_prop_types131.default.oneOf(["auto", "top", "right", "bottom", "left"]),
  popperConfig: import_prop_types131.default.oneOfType([import_prop_types131.default.func, import_prop_types131.default.object]),
  trigger: triggerPropType,
  visible: import_prop_types131.default.bool
};
CTooltip.displayName = "CTooltip";

// node_modules/@coreui/react/dist/esm/components/widgets/CWidgetStatsA.js
var import_react133 = __toESM(require_react());
var import_prop_types132 = __toESM(require_prop_types());
var CWidgetStatsA = (0, import_react133.forwardRef)(function(_a, ref) {
  var _b;
  var action = _a.action, chart = _a.chart, className = _a.className, color = _a.color, title = _a.title, value = _a.value, rest = __rest(_a, ["action", "chart", "className", "color", "title", "value"]);
  return import_react133.default.createElement(
    CCard,
    __assign({ className: classNames((_b = {}, _b["bg-".concat(color)] = color, _b["text-white"] = color, _b), className) }, rest, { ref }),
    import_react133.default.createElement(
      CCardBody,
      { className: "pb-0 d-flex justify-content-between align-items-start" },
      import_react133.default.createElement(
        "div",
        null,
        value && import_react133.default.createElement("div", { className: "fs-4 fw-semibold" }, value),
        title && import_react133.default.createElement("div", null, title)
      ),
      action
    ),
    chart
  );
});
CWidgetStatsA.propTypes = {
  action: import_prop_types132.default.node,
  chart: import_prop_types132.default.oneOfType([import_prop_types132.default.string, import_prop_types132.default.node]),
  className: import_prop_types132.default.string,
  color: colorPropType,
  title: import_prop_types132.default.oneOfType([import_prop_types132.default.string, import_prop_types132.default.node]),
  value: import_prop_types132.default.oneOfType([import_prop_types132.default.string, import_prop_types132.default.node, import_prop_types132.default.number])
};
CWidgetStatsA.displayName = "CWidgetStatsA";

// node_modules/@coreui/react/dist/esm/components/widgets/CWidgetStatsB.js
var import_react134 = __toESM(require_react());
var import_prop_types133 = __toESM(require_prop_types());
var CWidgetStatsB = (0, import_react134.forwardRef)(function(_a, ref) {
  var className = _a.className, color = _a.color, inverse = _a.inverse, progress = _a.progress, text = _a.text, title = _a.title, value = _a.value, rest = __rest(_a, ["className", "color", "inverse", "progress", "text", "title", "value"]);
  return import_react134.default.createElement(
    CCard,
    __assign({ className, color }, inverse && { textColor: "white" }, rest, { ref }),
    import_react134.default.createElement(
      CCardBody,
      null,
      value && import_react134.default.createElement("div", { className: "fs-4 fw-semibold" }, value),
      title && import_react134.default.createElement("div", null, title),
      import_react134.default.createElement(CProgress, __assign({ className: "my-2", height: 4 }, inverse && { white: true }, progress)),
      text && import_react134.default.createElement("small", { className: inverse ? "text-white text-opacity-75" : "text-body-secondary" }, text)
    )
  );
});
CWidgetStatsB.propTypes = {
  className: import_prop_types133.default.string,
  color: colorPropType,
  inverse: import_prop_types133.default.bool,
  progress: import_prop_types133.default.object,
  text: import_prop_types133.default.string,
  title: import_prop_types133.default.oneOfType([import_prop_types133.default.string, import_prop_types133.default.node]),
  value: import_prop_types133.default.oneOfType([import_prop_types133.default.string, import_prop_types133.default.node, import_prop_types133.default.number])
};
CWidgetStatsB.displayName = "CWidgetCWidgetStatsB";

// node_modules/@coreui/react/dist/esm/components/widgets/CWidgetStatsC.js
var import_react135 = __toESM(require_react());
var import_prop_types134 = __toESM(require_prop_types());
var CWidgetStatsC = (0, import_react135.forwardRef)(function(_a, ref) {
  var className = _a.className, color = _a.color, icon = _a.icon, inverse = _a.inverse, progress = _a.progress, title = _a.title, value = _a.value, rest = __rest(_a, ["className", "color", "icon", "inverse", "progress", "title", "value"]);
  return import_react135.default.createElement(
    CCard,
    __assign({ className, color }, inverse && { textColor: "white" }, rest, { ref }),
    import_react135.default.createElement(
      CCardBody,
      null,
      icon && import_react135.default.createElement("div", { className: classNames("text-end mb-4", inverse ? "text-white text-opacity-75" : "text-body-secondary") }, icon),
      value && import_react135.default.createElement("div", { className: "fs-4 fw-semibold" }, value),
      title && import_react135.default.createElement("div", { className: inverse ? "text-white text-opacity-75" : "text-body-secondary" }, title),
      import_react135.default.createElement(CProgress, __assign({ className: "mt-3 mb-0", height: 4 }, inverse && { white: true }, progress))
    )
  );
});
CWidgetStatsC.propTypes = {
  className: import_prop_types134.default.string,
  color: colorPropType,
  icon: import_prop_types134.default.oneOfType([import_prop_types134.default.string, import_prop_types134.default.node]),
  inverse: import_prop_types134.default.bool,
  progress: import_prop_types134.default.object,
  title: import_prop_types134.default.oneOfType([import_prop_types134.default.string, import_prop_types134.default.node]),
  value: import_prop_types134.default.oneOfType([import_prop_types134.default.string, import_prop_types134.default.node, import_prop_types134.default.number])
};
CWidgetStatsC.displayName = "CWidgetStatsCWidgetStatsC";

// node_modules/@coreui/react/dist/esm/components/widgets/CWidgetStatsD.js
var import_react136 = __toESM(require_react());
var import_prop_types135 = __toESM(require_prop_types());
var CWidgetStatsD = (0, import_react136.forwardRef)(function(_a, ref) {
  var _b;
  var className = _a.className, chart = _a.chart, color = _a.color, icon = _a.icon, values = _a.values, rest = __rest(_a, ["className", "chart", "color", "icon", "values"]);
  return import_react136.default.createElement(
    CCard,
    __assign({ className }, rest, { ref }),
    import_react136.default.createElement(
      CCardHeader,
      { className: classNames("position-relative d-flex justify-content-center align-items-center", (_b = {}, _b["bg-".concat(color)] = color, _b)) },
      icon,
      chart
    ),
    import_react136.default.createElement(CCardBody, { className: "row text-center" }, values && values.map(function(value, index) {
      return import_react136.default.createElement(
        import_react136.default.Fragment,
        { key: index },
        index % 2 !== 0 && import_react136.default.createElement("div", { className: "vr" }),
        import_react136.default.createElement(
          CCol,
          null,
          import_react136.default.createElement("div", { className: "fs-5 fw-semibold" }, value.value),
          import_react136.default.createElement("div", { className: "text-uppercase text-body-secondary small" }, value.title)
        )
      );
    }))
  );
});
CWidgetStatsD.propTypes = {
  chart: import_prop_types135.default.oneOfType([import_prop_types135.default.string, import_prop_types135.default.node]),
  className: import_prop_types135.default.string,
  color: colorPropType,
  icon: import_prop_types135.default.oneOfType([import_prop_types135.default.string, import_prop_types135.default.node]),
  values: import_prop_types135.default.arrayOf(import_prop_types135.default.any)
};
CWidgetStatsD.displayName = "CWidgetStatsD";

// node_modules/@coreui/react/dist/esm/components/widgets/CWidgetStatsE.js
var import_react137 = __toESM(require_react());
var import_prop_types136 = __toESM(require_prop_types());
var CWidgetStatsE = (0, import_react137.forwardRef)(function(_a, ref) {
  var chart = _a.chart, className = _a.className, title = _a.title, value = _a.value, rest = __rest(_a, ["chart", "className", "title", "value"]);
  return import_react137.default.createElement(
    CCard,
    __assign({ className: classNames(className) }, rest, { ref }),
    import_react137.default.createElement(
      CCardBody,
      { className: "text-center" },
      title && import_react137.default.createElement("div", { className: "text-body-secondary small text-uppercase fw-semibold" }, title),
      value && import_react137.default.createElement("div", { className: "fs-6 fw-semibold py-3" }, value),
      chart
    )
  );
});
CWidgetStatsE.propTypes = {
  children: import_prop_types136.default.node,
  chart: import_prop_types136.default.oneOfType([import_prop_types136.default.string, import_prop_types136.default.node]),
  className: import_prop_types136.default.string,
  title: import_prop_types136.default.oneOfType([import_prop_types136.default.string, import_prop_types136.default.node]),
  value: import_prop_types136.default.oneOfType([import_prop_types136.default.string, import_prop_types136.default.node, import_prop_types136.default.number])
};
CWidgetStatsE.displayName = "CWidgetStatsE";

// node_modules/@coreui/react/dist/esm/components/widgets/CWidgetStatsF.js
var import_react138 = __toESM(require_react());
var import_prop_types137 = __toESM(require_prop_types());
var CWidgetStatsF = (0, import_react138.forwardRef)(function(_a, ref) {
  var className = _a.className, color = _a.color, footer = _a.footer, icon = _a.icon, _b = _a.padding, padding = _b === void 0 ? true : _b, title = _a.title, value = _a.value, rest = __rest(_a, ["className", "color", "footer", "icon", "padding", "title", "value"]);
  return import_react138.default.createElement(
    CCard,
    __assign({ className }, rest, { ref }),
    import_react138.default.createElement(
      CCardBody,
      { className: "d-flex align-items-center ".concat(padding === false && "p-0") },
      import_react138.default.createElement("div", { className: "me-3 text-white bg-".concat(color, " ").concat(padding ? "p-3" : "p-4") }, icon),
      import_react138.default.createElement(
        "div",
        null,
        import_react138.default.createElement("div", { className: "fs-6 fw-semibold text-".concat(color) }, value),
        import_react138.default.createElement("div", { className: "text-body-secondary text-uppercase fw-semibold small" }, title)
      )
    ),
    footer && import_react138.default.createElement(CCardFooter, null, footer)
  );
});
CWidgetStatsF.propTypes = {
  className: import_prop_types137.default.string,
  color: colorPropType,
  footer: import_prop_types137.default.oneOfType([import_prop_types137.default.string, import_prop_types137.default.node]),
  icon: import_prop_types137.default.oneOfType([import_prop_types137.default.string, import_prop_types137.default.node]),
  padding: import_prop_types137.default.bool,
  title: import_prop_types137.default.oneOfType([import_prop_types137.default.string, import_prop_types137.default.node]),
  value: import_prop_types137.default.oneOfType([import_prop_types137.default.string, import_prop_types137.default.node, import_prop_types137.default.number])
};
CWidgetStatsF.displayName = "CWidgetStatsF";

// node_modules/@coreui/react/dist/esm/hooks/useClipboard.js
var import_react139 = __toESM(require_react());
var useClipboard = function() {
  var _a = (0, import_react139.useState)(false), isCopied = _a[0], setIsCopied = _a[1];
  var _b = (0, import_react139.useState)(null), error = _b[0], setError = _b[1];
  var copy = (0, import_react139.useCallback)(function(text) {
    return __awaiter(void 0, void 0, void 0, function() {
      var _error_1;
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            if (!(navigator === null || navigator === void 0 ? void 0 : navigator.clipboard)) {
              setError(new Error("Clipboard API is not available"));
              return [
                2
                /*return*/
              ];
            }
            _a2.label = 1;
          case 1:
            _a2.trys.push([1, 3, , 4]);
            return [4, navigator.clipboard.writeText(text)];
          case 2:
            _a2.sent();
            setIsCopied(true);
            setError(null);
            setTimeout(function() {
              return setIsCopied(false);
            }, 2e3);
            return [3, 4];
          case 3:
            _error_1 = _a2.sent();
            setError(_error_1);
            setIsCopied(false);
            return [3, 4];
          case 4:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, []);
  return { copy, isCopied, error };
};

// node_modules/@coreui/react/dist/esm/hooks/useColorModes.js
var import_react140 = __toESM(require_react());
var getStoredTheme = function(localStorageItemName) {
  return typeof window !== "undefined" && localStorage.getItem(localStorageItemName);
};
var setStoredTheme = function(localStorageItemName, colorMode) {
  return localStorage.setItem(localStorageItemName, colorMode);
};
var getPreferredColorScheme = function(localStorageItemName) {
  if (typeof window === "undefined") {
    return "light";
  }
  var storedTheme = getStoredTheme(localStorageItemName);
  if (storedTheme) {
    return storedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};
var setTheme = function(colorMode) {
  document.documentElement.dataset.coreuiTheme = colorMode === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : colorMode;
  var event = new Event("ColorSchemeChange");
  document.documentElement.dispatchEvent(event);
};
var useColorModes = function(localStorageItemName) {
  if (localStorageItemName === void 0) {
    localStorageItemName = "coreui-react-color-scheme";
  }
  var _a = (0, import_react140.useState)(getPreferredColorScheme(localStorageItemName)), colorMode = _a[0], setColorMode = _a[1];
  (0, import_react140.useEffect)(function() {
    if (colorMode) {
      setStoredTheme(localStorageItemName, colorMode);
      setTheme(colorMode);
    }
  }, [colorMode]);
  (0, import_react140.useEffect)(function() {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function() {
      var storedTheme = getStoredTheme(localStorageItemName);
      if (storedTheme !== "light" && storedTheme !== "dark" && colorMode) {
        setTheme(colorMode);
      }
    });
  });
  return {
    colorMode,
    isColorModeSet: function() {
      return Boolean(getStoredTheme(localStorageItemName));
    },
    setColorMode
  };
};
export {
  CAccordion,
  CAccordionBody,
  CAccordionButton,
  CAccordionHeader,
  CAccordionItem,
  CAlert,
  CAlertHeading,
  CAlertLink,
  CAvatar,
  CBackdrop,
  CBadge,
  CBreadcrumb,
  CBreadcrumbItem,
  CButton,
  CButtonGroup,
  CButtonToolbar,
  CCallout,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardImageOverlay,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CCloseButton,
  CCol,
  CCollapse,
  CConditionalPortal,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownItemPlain,
  CDropdownMenu,
  CDropdownToggle,
  CFooter,
  CForm,
  CFormCheck,
  CFormControlValidation,
  CFormControlWrapper,
  CFormFeedback,
  CFormFloating,
  CFormInput,
  CFormLabel,
  CFormRange,
  CFormSelect,
  CFormSwitch,
  CFormText,
  CFormTextarea,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderText,
  CHeaderToggler,
  CImage,
  CInputGroup,
  CInputGroupText,
  CLink,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
  CModalContent,
  CModalDialog,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CNav,
  CNavGroup,
  CNavGroupItems,
  CNavItem,
  CNavLink,
  CNavTitle,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarText,
  CNavbarToggler,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
  CPagination,
  CPaginationItem,
  CPlaceholder,
  CPopover,
  CProgress,
  CProgressBar,
  CProgressStacked,
  CRow,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarNav,
  CSidebarToggler,
  CSpinner,
  CTab,
  CTabContent,
  CTabList,
  CTabPane,
  CTabPanel,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableFoot,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTabs,
  CToast,
  CToastBody,
  CToastClose,
  CToastHeader,
  CToaster,
  CTooltip,
  CWidgetStatsA,
  CWidgetStatsB,
  CWidgetStatsC,
  CWidgetStatsD,
  CWidgetStatsE,
  CWidgetStatsF,
  useClipboard,
  useColorModes,
  useForkedRef,
  usePopper
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=@coreui_react.js.map
