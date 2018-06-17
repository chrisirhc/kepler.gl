'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2; // Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('../common/styled-components');

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelDropdown = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(PanelDropdown, _Component);

  function PanelDropdown() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PanelDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PanelDropdown.__proto__ || Object.getPrototypeOf(PanelDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickOutside = function (e) {
      _this.props.onClose(e);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PanelDropdown, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _styledComponents.StyledPanelDropdown,
        { className: this.props.className },
        this.props.children
      );
    }
  }]);
  return PanelDropdown;
}(_react.Component), _class.propTypes = {
  onClose: _propTypes2.default.func
}, _temp2);
;

exports.default = (0, _reactOnclickoutside2.default)(PanelDropdown);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtZHJvcGRvd24uanMiXSwibmFtZXMiOlsiUGFuZWxEcm9wZG93biIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImUiLCJwcm9wcyIsIm9uQ2xvc2UiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7SUFFTUEsYTs7Ozs7Ozs7Ozs7Ozs7a05BS0pDLGtCLEdBQXFCLFVBQUNDLENBQUQsRUFBTztBQUMxQixZQUFLQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJGLENBQW5CO0FBQ0QsSzs7Ozs7NkJBRVE7QUFDUCxhQUNFO0FBQUMsNkNBQUQ7QUFBQSxVQUFxQixXQUFXLEtBQUtDLEtBQUwsQ0FBV0UsU0FBM0M7QUFDRyxhQUFLRixLQUFMLENBQVdHO0FBRGQsT0FERjtBQUtEOzs7RUFmeUJDLGdCLFVBQ25CQyxTLEdBQVk7QUFDakJKLFdBQVNLLG9CQUFVQztBQURGLEM7QUFlcEI7O2tCQUVjLG1DQUFzQlYsYUFBdEIsQyIsImZpbGUiOiJwYW5lbC1kcm9wZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7U3R5bGVkUGFuZWxEcm9wZG93bn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGxpc3RlbnNUb0NsaWNrT3V0c2lkZSBmcm9tICdyZWFjdC1vbmNsaWNrb3V0c2lkZSc7XG5cbmNsYXNzIFBhbmVsRHJvcGRvd24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGUpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2xvc2UoZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkUGFuZWxEcm9wZG93biBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L1N0eWxlZFBhbmVsRHJvcGRvd24+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbGlzdGVuc1RvQ2xpY2tPdXRzaWRlKFBhbmVsRHJvcGRvd24pO1xuIl19