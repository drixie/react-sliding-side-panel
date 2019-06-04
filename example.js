"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSlidingSidePanel = _interopRequireDefault(require("react-sliding-side-panel"));

require("./example.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

  return _react["default"].createElement("div", {
    className: "example-container"
  }, _react["default"].createElement("div", {
    className: "form-container"
  }, _react["default"].createElement("div", null, _react["default"].createElement("label", null, "width (in %)"), _react["default"].createElement("input", {
    type: "number",
    value: panelSize,
    onChange: function onChange(_ref) {
      var target = _ref.target;
      return setPanelSize(target.value);
    }
  })), _react["default"].createElement("div", null, _react["default"].createElement("button", {
    onClick: function onClick() {
      setPanelType('left');
      setOpenPanel(true);
    }
  }, "Left"), _react["default"].createElement("button", {
    onClick: function onClick() {
      setPanelType('right');
      setOpenPanel(true);
    }
  }, "Right"), _react["default"].createElement("button", {
    onClick: function onClick() {
      setPanelType('top');
      setOpenPanel(true);
    }
  }, "Top"), _react["default"].createElement("button", {
    onClick: function onClick() {
      setPanelType('bottom');
      setOpenPanel(true);
    }
  }, "Bottom"))), _react["default"].createElement(_reactSlidingSidePanel["default"], {
    type: panelType,
    isOpen: openPanel,
    onClose: function onClose() {
      return setOpenPanel(false);
    },
    size: panelSize
  }, _react["default"].createElement("div", {
    className: "panel-container"
  }, _react["default"].createElement("div", null, "My Panel Content"), _react["default"].createElement("button", {
    className: "close-button",
    onClick: function onClick() {
      return setOpenPanel(false);
    }
  }, "close"))));
};

var _default = App;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbIkFwcCIsIm9wZW5QYW5lbCIsInNldE9wZW5QYW5lbCIsInBhbmVsVHlwZSIsInNldFBhbmVsVHlwZSIsInBhbmVsU2l6ZSIsInNldFBhbmVsU2l6ZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBLGtCQUNrQixxQkFBUyxLQUFULENBRGxCO0FBQUE7QUFBQSxNQUNUQyxTQURTO0FBQUEsTUFDRUMsWUFERjs7QUFBQSxtQkFFa0IscUJBQVMsTUFBVCxDQUZsQjtBQUFBO0FBQUEsTUFFVEMsU0FGUztBQUFBLE1BRUVDLFlBRkY7O0FBQUEsbUJBR2tCLHFCQUFTLEVBQVQsQ0FIbEI7QUFBQTtBQUFBLE1BR1RDLFNBSFM7QUFBQSxNQUdFQyxZQUhGOztBQUloQixTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFLDZDQUNFLDhEQURGLEVBRUU7QUFDRSxJQUFBLElBQUksRUFBQyxRQURQO0FBRUUsSUFBQSxLQUFLLEVBQUVELFNBRlQ7QUFHRSxJQUFBLFFBQVEsRUFBRTtBQUFBLFVBQUdFLE1BQUgsUUFBR0EsTUFBSDtBQUFBLGFBQWdCRCxZQUFZLENBQUNDLE1BQU0sQ0FBQ0MsS0FBUixDQUE1QjtBQUFBO0FBSFosSUFGRixDQURGLEVBU0UsNkNBQ0U7QUFDRSxJQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiSixNQUFBQSxZQUFZLENBQUMsTUFBRCxDQUFaO0FBQ0FGLE1BQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDRDtBQUpILFlBREYsRUFTRTtBQUNFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2JFLE1BQUFBLFlBQVksQ0FBQyxPQUFELENBQVo7QUFDQUYsTUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEO0FBSkgsYUFURixFQWlCRTtBQUNFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2JFLE1BQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDQUYsTUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEO0FBSkgsV0FqQkYsRUF5QkU7QUFDRSxJQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiRSxNQUFBQSxZQUFZLENBQUMsUUFBRCxDQUFaO0FBQ0FGLE1BQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDRDtBQUpILGNBekJGLENBVEYsQ0FERixFQTZDRSxnQ0FBQyxpQ0FBRDtBQUNFLElBQUEsSUFBSSxFQUFFQyxTQURSO0FBRUUsSUFBQSxNQUFNLEVBQUVGLFNBRlY7QUFHRSxJQUFBLE9BQU8sRUFBRTtBQUFBLGFBQU1DLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsS0FIWDtBQUlFLElBQUEsSUFBSSxFQUFFRztBQUpSLEtBTUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0UsZ0VBREYsRUFFRTtBQUFRLElBQUEsU0FBUyxFQUFDLGNBQWxCO0FBQWlDLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTUgsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQTtBQUExQyxhQUZGLENBTkYsQ0E3Q0YsQ0FERjtBQTZERCxDQWpFRDs7ZUFtRWVGLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2xpZGluZ1BhbmVsIGZyb20gJ3JlYWN0LXNsaWRpbmctc2lkZS1wYW5lbCc7XG5pbXBvcnQgJy4vZXhhbXBsZS5jc3MnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuUGFuZWwsIHNldE9wZW5QYW5lbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwYW5lbFR5cGUsIHNldFBhbmVsVHlwZV0gPSB1c2VTdGF0ZSgnbGVmdCcpO1xuICBjb25zdCBbcGFuZWxTaXplLCBzZXRQYW5lbFNpemVdID0gdXNlU3RhdGUoMzApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdleGFtcGxlLWNvbnRhaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1jb250YWluZXInPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD53aWR0aCAoaW4gJSk8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgdmFsdWU9e3BhbmVsU2l6ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0UGFuZWxTaXplKHRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRQYW5lbFR5cGUoJ2xlZnQnKTtcbiAgICAgICAgICAgICAgc2V0T3BlblBhbmVsKHRydWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMZWZ0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRQYW5lbFR5cGUoJ3JpZ2h0Jyk7XG4gICAgICAgICAgICAgIHNldE9wZW5QYW5lbCh0cnVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmlnaHRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFBhbmVsVHlwZSgndG9wJyk7XG4gICAgICAgICAgICAgIHNldE9wZW5QYW5lbCh0cnVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVG9wXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRQYW5lbFR5cGUoJ2JvdHRvbScpO1xuICAgICAgICAgICAgICBzZXRPcGVuUGFuZWwodHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJvdHRvbVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNsaWRpbmdQYW5lbFxuICAgICAgICB0eXBlPXtwYW5lbFR5cGV9XG4gICAgICAgIGlzT3Blbj17b3BlblBhbmVsfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuUGFuZWwoZmFsc2UpfVxuICAgICAgICBzaXplPXtwYW5lbFNpemV9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYW5lbC1jb250YWluZXInPlxuICAgICAgICAgIDxkaXY+TXkgUGFuZWwgQ29udGVudDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdjbG9zZS1idXR0b24nIG9uQ2xpY2s9eygpID0+IHNldE9wZW5QYW5lbChmYWxzZSl9PlxuICAgICAgICAgICAgY2xvc2VcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NsaWRpbmdQYW5lbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==