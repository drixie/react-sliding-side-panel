"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSlidingSidePanel = _interopRequireDefault(require("react-sliding-side-panel"));

require("./example.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var App = function App() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openPanel = _useState2[0],
      setOpenPanel = _useState2[1];

  var _useState3 = (0, _react.useState)('left'),
      _useState4 = _slicedToArray(_useState3, 2),
      panelType = _useState4[0],
      setPanelType = _useState4[1];

  var _useState5 = (0, _react.useState)(30),
      _useState6 = _slicedToArray(_useState5, 2),
      panelSize = _useState6[0],
      setPanelSize = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      noBackdrop = _useState8[0],
      setNoBackdrop = _useState8[1];

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "example-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-container"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "React Sliding Side Panel"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "width_input"
  }, "width (in %)", /*#__PURE__*/_react["default"].createElement("input", {
    id: "width_input",
    name: "width_input",
    type: "number",
    value: panelSize,
    onChange: function onChange(_ref) {
      var target = _ref.target;
      return setPanelSize(target.value);
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "no_backdrop"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    name: "no_backdrop",
    id: "no_backdrop",
    type: "checkbox",
    checked: noBackdrop,
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return setNoBackdrop(target.checked);
    }
  }), "Hide backdrop")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setPanelType('left');
      setOpenPanel(true);
    }
  }, "Left"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setPanelType('right');
      setOpenPanel(true);
    }
  }, "Right"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setPanelType('top');
      setOpenPanel(true);
    }
  }, "Top"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setPanelType('bottom');
      setOpenPanel(true);
    }
  }, "Bottom"))), /*#__PURE__*/_react["default"].createElement(_reactSlidingSidePanel["default"], {
    type: panelType,
    isOpen: openPanel,
    backdropClicked: function backdropClicked() {
      return setOpenPanel(false);
    },
    size: panelSize,
    panelClassName: "additional-class",
    noBackdrop: noBackdrop
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel-container"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "My Panel Content"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "close-button",
    onClick: function onClick() {
      return setOpenPanel(false);
    }
  }, "close"))));
};

var _default = App;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJvcGVuUGFuZWwiLCJzZXRPcGVuUGFuZWwiLCJwYW5lbFR5cGUiLCJzZXRQYW5lbFR5cGUiLCJwYW5lbFNpemUiLCJzZXRQYW5lbFNpemUiLCJub0JhY2tkcm9wIiwic2V0Tm9CYWNrZHJvcCIsInRhcmdldCIsInZhbHVlIiwiY2hlY2tlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBLGtCQUNrQixxQkFBUyxLQUFULENBRGxCO0FBQUE7QUFBQSxNQUNUQyxTQURTO0FBQUEsTUFDRUMsWUFERjs7QUFBQSxtQkFFa0IscUJBQVMsTUFBVCxDQUZsQjtBQUFBO0FBQUEsTUFFVEMsU0FGUztBQUFBLE1BRUVDLFlBRkY7O0FBQUEsbUJBR2tCLHFCQUFTLEVBQVQsQ0FIbEI7QUFBQTtBQUFBLE1BR1RDLFNBSFM7QUFBQSxNQUdFQyxZQUhGOztBQUFBLG1CQUlvQixxQkFBUyxLQUFULENBSnBCO0FBQUE7QUFBQSxNQUlUQyxVQUpTO0FBQUEsTUFJR0MsYUFKSDs7QUFNaEIsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSx1RUFERixlQUVFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFPLElBQUEsT0FBTyxFQUFDO0FBQWYsa0NBRUU7QUFDRSxJQUFBLEVBQUUsRUFBQyxhQURMO0FBRUUsSUFBQSxJQUFJLEVBQUMsYUFGUDtBQUdFLElBQUEsSUFBSSxFQUFDLFFBSFA7QUFJRSxJQUFBLEtBQUssRUFBRUgsU0FKVDtBQUtFLElBQUEsUUFBUSxFQUFFO0FBQUEsVUFBR0ksTUFBSCxRQUFHQSxNQUFIO0FBQUEsYUFBZ0JILFlBQVksQ0FBQ0csTUFBTSxDQUFDQyxLQUFSLENBQTVCO0FBQUE7QUFMWixJQUZGLENBREYsQ0FGRixlQWNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFPLElBQUEsT0FBTyxFQUFDO0FBQWYsa0JBQ0U7QUFDRSxJQUFBLElBQUksRUFBQyxhQURQO0FBRUUsSUFBQSxFQUFFLEVBQUMsYUFGTDtBQUdFLElBQUEsSUFBSSxFQUFDLFVBSFA7QUFJRSxJQUFBLE9BQU8sRUFBRUgsVUFKWDtBQUtFLElBQUEsUUFBUSxFQUFFO0FBQUEsVUFBR0UsTUFBSCxTQUFHQSxNQUFIO0FBQUEsYUFBZ0JELGFBQWEsQ0FBQ0MsTUFBTSxDQUFDRSxPQUFSLENBQTdCO0FBQUE7QUFMWixJQURGLGtCQURGLENBZEYsZUEwQkU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2JQLE1BQUFBLFlBQVksQ0FBQyxNQUFELENBQVo7QUFDQUYsTUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEO0FBTEgsWUFERixlQVVFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2JFLE1BQUFBLFlBQVksQ0FBQyxPQUFELENBQVo7QUFDQUYsTUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEO0FBTEgsYUFWRixlQW1CRTtBQUNFLElBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxJQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiRSxNQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FGLE1BQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDRDtBQUxILFdBbkJGLGVBNEJFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2JFLE1BQUFBLFlBQVksQ0FBQyxRQUFELENBQVo7QUFDQUYsTUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEO0FBTEgsY0E1QkYsQ0ExQkYsQ0FERixlQWtFRSxnQ0FBQyxpQ0FBRDtBQUNFLElBQUEsSUFBSSxFQUFFQyxTQURSO0FBRUUsSUFBQSxNQUFNLEVBQUVGLFNBRlY7QUFHRSxJQUFBLGVBQWUsRUFBRTtBQUFBLGFBQU1DLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsS0FIbkI7QUFJRSxJQUFBLElBQUksRUFBRUcsU0FKUjtBQUtFLElBQUEsY0FBYyxFQUFDLGtCQUxqQjtBQU1FLElBQUEsVUFBVSxFQUFFRTtBQU5kLGtCQVFFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSxnRUFERixlQUVFO0FBQVEsSUFBQSxJQUFJLEVBQUMsUUFBYjtBQUFzQixJQUFBLFNBQVMsRUFBQyxjQUFoQztBQUErQyxJQUFBLE9BQU8sRUFBRTtBQUFBLGFBQU1MLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUE7QUFBeEQsYUFGRixDQVJGLENBbEVGLENBREY7QUFvRkQsQ0ExRkQ7O2VBNEZlRixHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRpbmdQYW5lbCBmcm9tICdyZWFjdC1zbGlkaW5nLXNpZGUtcGFuZWwnO1xuaW1wb3J0ICcuL2V4YW1wbGUuY3NzJztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbb3BlblBhbmVsLCBzZXRPcGVuUGFuZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGFuZWxUeXBlLCBzZXRQYW5lbFR5cGVdID0gdXNlU3RhdGUoJ2xlZnQnKTtcbiAgY29uc3QgW3BhbmVsU2l6ZSwgc2V0UGFuZWxTaXplXSA9IHVzZVN0YXRlKDMwKTtcbiAgY29uc3QgW25vQmFja2Ryb3AsIHNldE5vQmFja2Ryb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+UmVhY3QgU2xpZGluZyBTaWRlIFBhbmVsPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIndpZHRoX2lucHV0XCI+XG4gICAgICAgICAgICB3aWR0aCAoaW4gJSlcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cIndpZHRoX2lucHV0XCJcbiAgICAgICAgICAgICAgbmFtZT1cIndpZHRoX2lucHV0XCJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHZhbHVlPXtwYW5lbFNpemV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0UGFuZWxTaXplKHRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm9fYmFja2Ryb3BcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwibm9fYmFja2Ryb3BcIlxuICAgICAgICAgICAgICBpZD1cIm5vX2JhY2tkcm9wXCJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17bm9CYWNrZHJvcH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXROb0JhY2tkcm9wKHRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBIaWRlIGJhY2tkcm9wXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFBhbmVsVHlwZSgnbGVmdCcpO1xuICAgICAgICAgICAgICBzZXRPcGVuUGFuZWwodHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExlZnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0UGFuZWxUeXBlKCdyaWdodCcpO1xuICAgICAgICAgICAgICBzZXRPcGVuUGFuZWwodHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJpZ2h0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFBhbmVsVHlwZSgndG9wJyk7XG4gICAgICAgICAgICAgIHNldE9wZW5QYW5lbCh0cnVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVG9wXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFBhbmVsVHlwZSgnYm90dG9tJyk7XG4gICAgICAgICAgICAgIHNldE9wZW5QYW5lbCh0cnVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQm90dG9tXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8U2xpZGluZ1BhbmVsXG4gICAgICAgIHR5cGU9e3BhbmVsVHlwZX1cbiAgICAgICAgaXNPcGVuPXtvcGVuUGFuZWx9XG4gICAgICAgIGJhY2tkcm9wQ2xpY2tlZD17KCkgPT4gc2V0T3BlblBhbmVsKGZhbHNlKX1cbiAgICAgICAgc2l6ZT17cGFuZWxTaXplfVxuICAgICAgICBwYW5lbENsYXNzTmFtZT1cImFkZGl0aW9uYWwtY2xhc3NcIlxuICAgICAgICBub0JhY2tkcm9wPXtub0JhY2tkcm9wfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXY+TXkgUGFuZWwgQ29udGVudDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldE9wZW5QYW5lbChmYWxzZSl9PlxuICAgICAgICAgICAgY2xvc2VcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NsaWRpbmdQYW5lbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==