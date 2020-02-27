"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

  return _react["default"].createElement("div", {
    className: "example-container"
  }, _react["default"].createElement("div", {
    className: "form-container"
  }, _react["default"].createElement("h1", null, "React Sliding Side Panel"), _react["default"].createElement("div", {
    className: "input-container"
  }, _react["default"].createElement("label", {
    htmlFor: "width_input"
  }, "width (in %)", _react["default"].createElement("input", {
    name: "width_input",
    type: "number",
    value: panelSize,
    onChange: function onChange(_ref) {
      var target = _ref.target;
      return setPanelSize(target.value);
    }
  }))), _react["default"].createElement("div", {
    className: "input-container"
  }, _react["default"].createElement("label", {
    htmlFor: "no_backdrop"
  }, _react["default"].createElement("input", {
    name: "no_backdrop",
    type: "checkbox",
    checked: noBackdrop,
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return setNoBackdrop(target.checked);
    }
  }), "Hide backdrop")), _react["default"].createElement("div", {
    className: "input-container"
  }, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setPanelType('left');
      setOpenPanel(true);
    }
  }, "Left"), _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setPanelType('right');
      setOpenPanel(true);
    }
  }, "Right"), _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setPanelType('top');
      setOpenPanel(true);
    }
  }, "Top"), _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setPanelType('bottom');
      setOpenPanel(true);
    }
  }, "Bottom"))), _react["default"].createElement(_reactSlidingSidePanel["default"], {
    type: panelType,
    isOpen: openPanel,
    backdropClicked: function backdropClicked() {
      return setOpenPanel(false);
    },
    size: panelSize,
    panelClassName: "additional-class",
    noBackdrop: noBackdrop
  }, _react["default"].createElement("div", {
    className: "panel-container"
  }, _react["default"].createElement("div", null, "My Panel Content"), _react["default"].createElement("button", {
    type: "button",
    className: "close-button",
    onClick: function onClick() {
      return setOpenPanel(false);
    }
  }, "close"))));
};

var _default = App;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJvcGVuUGFuZWwiLCJzZXRPcGVuUGFuZWwiLCJwYW5lbFR5cGUiLCJzZXRQYW5lbFR5cGUiLCJwYW5lbFNpemUiLCJzZXRQYW5lbFNpemUiLCJub0JhY2tkcm9wIiwic2V0Tm9CYWNrZHJvcCIsInRhcmdldCIsInZhbHVlIiwiY2hlY2tlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUEsa0JBQ2tCLHFCQUFTLEtBQVQsQ0FEbEI7QUFBQTtBQUFBLE1BQ1RDLFNBRFM7QUFBQSxNQUNFQyxZQURGOztBQUFBLG1CQUVrQixxQkFBUyxNQUFULENBRmxCO0FBQUE7QUFBQSxNQUVUQyxTQUZTO0FBQUEsTUFFRUMsWUFGRjs7QUFBQSxtQkFHa0IscUJBQVMsRUFBVCxDQUhsQjtBQUFBO0FBQUEsTUFHVEMsU0FIUztBQUFBLE1BR0VDLFlBSEY7O0FBQUEsbUJBSW9CLHFCQUFTLEtBQVQsQ0FKcEI7QUFBQTtBQUFBLE1BSVRDLFVBSlM7QUFBQSxNQUlHQyxhQUpIOztBQUtoQixTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFLHVFQURGLEVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0U7QUFBTyxJQUFBLE9BQU8sRUFBQztBQUFmLHFCQUVFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsYUFEUDtBQUVFLElBQUEsSUFBSSxFQUFDLFFBRlA7QUFHRSxJQUFBLEtBQUssRUFBRUgsU0FIVDtBQUlFLElBQUEsUUFBUSxFQUFFO0FBQUEsVUFBR0ksTUFBSCxRQUFHQSxNQUFIO0FBQUEsYUFBZ0JILFlBQVksQ0FBQ0csTUFBTSxDQUFDQyxLQUFSLENBQTVCO0FBQUE7QUFKWixJQUZGLENBREYsQ0FGRixFQWFFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFO0FBQU8sSUFBQSxPQUFPLEVBQUM7QUFBZixLQUNFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsYUFEUDtBQUVFLElBQUEsSUFBSSxFQUFDLFVBRlA7QUFHRSxJQUFBLE9BQU8sRUFBRUgsVUFIWDtBQUlFLElBQUEsUUFBUSxFQUFFO0FBQUEsVUFBR0UsTUFBSCxTQUFHQSxNQUFIO0FBQUEsYUFBZ0JELGFBQWEsQ0FBQ0MsTUFBTSxDQUFDRSxPQUFSLENBQTdCO0FBQUE7QUFKWixJQURGLGtCQURGLENBYkYsRUF3QkU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0U7QUFDRSxJQUFBLElBQUksRUFBQyxRQURQO0FBRUUsSUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYlAsTUFBQUEsWUFBWSxDQUFDLE1BQUQsQ0FBWjtBQUNBRixNQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7QUFMSCxZQURGLEVBVUU7QUFDRSxJQUFBLElBQUksRUFBQyxRQURQO0FBRUUsSUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYkUsTUFBQUEsWUFBWSxDQUFDLE9BQUQsQ0FBWjtBQUNBRixNQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7QUFMSCxhQVZGLEVBbUJFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2JFLE1BQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDQUYsTUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEO0FBTEgsV0FuQkYsRUE0QkU7QUFDRSxJQUFBLElBQUksRUFBQyxRQURQO0FBRUUsSUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYkUsTUFBQUEsWUFBWSxDQUFDLFFBQUQsQ0FBWjtBQUNBRixNQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7QUFMSCxjQTVCRixDQXhCRixDQURGLEVBZ0VFLGdDQUFDLGlDQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVDLFNBRFI7QUFFRSxJQUFBLE1BQU0sRUFBRUYsU0FGVjtBQUdFLElBQUEsZUFBZSxFQUFFO0FBQUEsYUFBTUMsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxLQUhuQjtBQUlFLElBQUEsSUFBSSxFQUFFRyxTQUpSO0FBS0UsSUFBQSxjQUFjLEVBQUMsa0JBTGpCO0FBTUUsSUFBQSxVQUFVLEVBQUVFO0FBTmQsS0FRRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRSxnRUFERixFQUVFO0FBQVEsSUFBQSxJQUFJLEVBQUMsUUFBYjtBQUFzQixJQUFBLFNBQVMsRUFBQyxjQUFoQztBQUErQyxJQUFBLE9BQU8sRUFBRTtBQUFBLGFBQU1MLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUE7QUFBeEQsYUFGRixDQVJGLENBaEVGLENBREY7QUFrRkQsQ0F2RkQ7O2VBeUZlRixHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRpbmdQYW5lbCBmcm9tICdyZWFjdC1zbGlkaW5nLXNpZGUtcGFuZWwnO1xuaW1wb3J0ICcuL2V4YW1wbGUuY3NzJztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbb3BlblBhbmVsLCBzZXRPcGVuUGFuZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGFuZWxUeXBlLCBzZXRQYW5lbFR5cGVdID0gdXNlU3RhdGUoJ2xlZnQnKTtcbiAgY29uc3QgW3BhbmVsU2l6ZSwgc2V0UGFuZWxTaXplXSA9IHVzZVN0YXRlKDMwKTtcbiAgY29uc3QgW25vQmFja2Ryb3AsIHNldE5vQmFja2Ryb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgPGgxPlJlYWN0IFNsaWRpbmcgU2lkZSBQYW5lbDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aWR0aF9pbnB1dFwiPlxuICAgICAgICAgICAgd2lkdGggKGluICUpXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgbmFtZT1cIndpZHRoX2lucHV0XCJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHZhbHVlPXtwYW5lbFNpemV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0UGFuZWxTaXplKHRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm9fYmFja2Ryb3BcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwibm9fYmFja2Ryb3BcIlxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjaGVja2VkPXtub0JhY2tkcm9wfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldE5vQmFja2Ryb3AodGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIEhpZGUgYmFja2Ryb3BcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0UGFuZWxUeXBlKCdsZWZ0Jyk7XG4gICAgICAgICAgICAgIHNldE9wZW5QYW5lbCh0cnVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTGVmdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRQYW5lbFR5cGUoJ3JpZ2h0Jyk7XG4gICAgICAgICAgICAgIHNldE9wZW5QYW5lbCh0cnVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmlnaHRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0UGFuZWxUeXBlKCd0b3AnKTtcbiAgICAgICAgICAgICAgc2V0T3BlblBhbmVsKHRydWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBUb3BcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0UGFuZWxUeXBlKCdib3R0b20nKTtcbiAgICAgICAgICAgICAgc2V0T3BlblBhbmVsKHRydWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCb3R0b21cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTbGlkaW5nUGFuZWxcbiAgICAgICAgdHlwZT17cGFuZWxUeXBlfVxuICAgICAgICBpc09wZW49e29wZW5QYW5lbH1cbiAgICAgICAgYmFja2Ryb3BDbGlja2VkPXsoKSA9PiBzZXRPcGVuUGFuZWwoZmFsc2UpfVxuICAgICAgICBzaXplPXtwYW5lbFNpemV9XG4gICAgICAgIHBhbmVsQ2xhc3NOYW1lPVwiYWRkaXRpb25hbC1jbGFzc1wiXG4gICAgICAgIG5vQmFja2Ryb3A9e25vQmFja2Ryb3B9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdj5NeSBQYW5lbCBDb250ZW50PC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2UtYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0T3BlblBhbmVsKGZhbHNlKX0+XG4gICAgICAgICAgICBjbG9zZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2xpZGluZ1BhbmVsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19