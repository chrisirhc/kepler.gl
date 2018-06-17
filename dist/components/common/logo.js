'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  margin-left: 6px;\n'], ['\n  display: inline-block;\n  margin-left: 6px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 1.17px;\n'], ['\n  color: ', ';\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 1.17px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 10px;\n  color: ', ';\n  letter-spacing: 0.83px;\n  line-height: 14px;\n'], ['\n  font-size: 10px;\n  color: ', ';\n  letter-spacing: 0.83px;\n  line-height: 14px;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  align-items: flex-start;\n'], ['\n  display: flex;\n  align-items: flex-start;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: 3px;\n'], ['\n  margin-top: 3px;\n']); // Copyright (c) 2018 Uber Technologies, Inc.
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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultSettings = require('../../constants/default-settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  appName: _defaultSettings.KEPLER_GL_NAME,
  version: _defaultSettings.KEPLER_GL_VERSION
};

var LogoTitle = _styledComponents2.default.div(_templateObject);

var LogoName = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.activeColor;
});
var LogoVersion = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.subtextColor;
});

var LogoWrapper = _styledComponents2.default.div(_templateObject4);

var LogoSvgWrapper = _styledComponents2.default.div(_templateObject5);

var LogoSvg = function LogoSvg() {
  return _react2.default.createElement(
    'svg',
    {
      className: 'side-panel-logo__logo',
      width: '22px',
      height: '15px',
      viewBox: '0 0 22 15'
    },
    _react2.default.createElement(
      'g',
      { transform: 'translate(11, -3) rotate(45.000000)' },
      _react2.default.createElement('rect', { fill: '#535C6C', x: '0', y: '5', width: '10', height: '10' }),
      _react2.default.createElement('rect', { fill: '#1FBAD6', x: '5', y: '0', width: '10', height: '10' })
    )
  );
};

var KeplerGlLogo = function KeplerGlLogo(_ref) {
  var appName = _ref.appName,
      version = _ref.version;
  return _react2.default.createElement(
    LogoWrapper,
    { className: 'side-panel-logo' },
    _react2.default.createElement(
      LogoSvgWrapper,
      null,
      _react2.default.createElement(LogoSvg, null)
    ),
    _react2.default.createElement(
      LogoTitle,
      { className: 'logo__title' },
      _react2.default.createElement(
        LogoName,
        { className: 'logo__name' },
        appName
      ),
      version ? _react2.default.createElement(
        LogoVersion,
        { className: 'logo__version' },
        version
      ) : null
    )
  );
};

KeplerGlLogo.defaultProps = defaultProps;

exports.default = KeplerGlLogo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sb2dvLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFwcE5hbWUiLCJLRVBMRVJfR0xfTkFNRSIsInZlcnNpb24iLCJLRVBMRVJfR0xfVkVSU0lPTiIsIkxvZ29UaXRsZSIsInN0eWxlZCIsImRpdiIsIkxvZ29OYW1lIiwicHJvcHMiLCJ0aGVtZSIsImFjdGl2ZUNvbG9yIiwiTG9nb1ZlcnNpb24iLCJzdWJ0ZXh0Q29sb3IiLCJMb2dvV3JhcHBlciIsIkxvZ29TdmdXcmFwcGVyIiwiTG9nb1N2ZyIsIktlcGxlckdsTG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7cUhBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsZUFBZTtBQUNuQkMsV0FBU0MsK0JBRFU7QUFFbkJDLFdBQVNDO0FBRlUsQ0FBckI7O0FBS0EsSUFBTUMsWUFBWUMsMkJBQU9DLEdBQW5CLGlCQUFOOztBQUtBLElBQU1DLFdBQVdGLDJCQUFPQyxHQUFsQixtQkFDSztBQUFBLFNBQVNFLE1BQU1DLEtBQU4sQ0FBWUMsV0FBckI7QUFBQSxDQURMLENBQU47QUFNQSxJQUFNQyxjQUFjTiwyQkFBT0MsR0FBckIsbUJBRUs7QUFBQSxTQUFTRSxNQUFNQyxLQUFOLENBQVlHLFlBQXJCO0FBQUEsQ0FGTCxDQUFOOztBQU9BLElBQU1DLGNBQWNSLDJCQUFPQyxHQUFyQixrQkFBTjs7QUFLQSxJQUFNUSxpQkFBaUJULDJCQUFPQyxHQUF4QixrQkFBTjs7QUFJQSxJQUFNUyxVQUFVLFNBQVZBLE9BQVU7QUFBQSxTQUNkO0FBQUE7QUFBQTtBQUNFLGlCQUFVLHVCQURaO0FBRUUsYUFBTSxNQUZSO0FBR0UsY0FBTyxNQUhUO0FBSUUsZUFBUTtBQUpWO0FBTUU7QUFBQTtBQUFBLFFBQUcsV0FBVSxxQ0FBYjtBQUNFLDhDQUFNLE1BQUssU0FBWCxFQUFxQixHQUFFLEdBQXZCLEVBQTJCLEdBQUUsR0FBN0IsRUFBaUMsT0FBTSxJQUF2QyxFQUE0QyxRQUFPLElBQW5ELEdBREY7QUFFRSw4Q0FBTSxNQUFLLFNBQVgsRUFBcUIsR0FBRSxHQUF2QixFQUEyQixHQUFFLEdBQTdCLEVBQWlDLE9BQU0sSUFBdkMsRUFBNEMsUUFBTyxJQUFuRDtBQUZGO0FBTkYsR0FEYztBQUFBLENBQWhCOztBQWNBLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUVoQixPQUFGLFFBQUVBLE9BQUY7QUFBQSxNQUFXRSxPQUFYLFFBQVdBLE9BQVg7QUFBQSxTQUNuQjtBQUFDLGVBQUQ7QUFBQSxNQUFhLFdBQVUsaUJBQXZCO0FBQ0U7QUFBQyxvQkFBRDtBQUFBO0FBQ0Usb0NBQUMsT0FBRDtBQURGLEtBREY7QUFJRTtBQUFDLGVBQUQ7QUFBQSxRQUFXLFdBQVUsYUFBckI7QUFDRTtBQUFDLGdCQUFEO0FBQUEsVUFBVSxXQUFVLFlBQXBCO0FBQWtDRjtBQUFsQyxPQURGO0FBRUdFLGdCQUFVO0FBQUMsbUJBQUQ7QUFBQSxVQUFhLFdBQVUsZUFBdkI7QUFBd0NBO0FBQXhDLE9BQVYsR0FBMkU7QUFGOUU7QUFKRixHQURtQjtBQUFBLENBQXJCOztBQVlBYyxhQUFhakIsWUFBYixHQUE0QkEsWUFBNUI7O2tCQUVlaUIsWSIsImZpbGUiOiJsb2dvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE4IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtLRVBMRVJfR0xfTkFNRSwgS0VQTEVSX0dMX1ZFUlNJT059IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBhcHBOYW1lOiBLRVBMRVJfR0xfTkFNRSxcbiAgdmVyc2lvbjogS0VQTEVSX0dMX1ZFUlNJT05cbn07XG5cbmNvbnN0IExvZ29UaXRsZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbmA7XG5cbmNvbnN0IExvZ29OYW1lID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWN0aXZlQ29sb3J9O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjE3cHg7XG5gO1xuY29uc3QgTG9nb1ZlcnNpb24gPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvcn07XG4gIGxldHRlci1zcGFjaW5nOiAwLjgzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuYDtcblxuY29uc3QgTG9nb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbmA7XG5cbmNvbnN0IExvZ29TdmdXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogM3B4O1xuYDtcblxuY29uc3QgTG9nb1N2ZyA9ICgpID0+IChcbiAgPHN2Z1xuICAgIGNsYXNzTmFtZT1cInNpZGUtcGFuZWwtbG9nb19fbG9nb1wiXG4gICAgd2lkdGg9XCIyMnB4XCJcbiAgICBoZWlnaHQ9XCIxNXB4XCJcbiAgICB2aWV3Qm94PVwiMCAwIDIyIDE1XCJcbiAgPlxuICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMSwgLTMpIHJvdGF0ZSg0NS4wMDAwMDApXCI+XG4gICAgICA8cmVjdCBmaWxsPVwiIzUzNUM2Q1wiIHg9XCIwXCIgeT1cIjVcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiAvPlxuICAgICAgPHJlY3QgZmlsbD1cIiMxRkJBRDZcIiB4PVwiNVwiIHk9XCIwXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgLz5cbiAgICA8L2c+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgS2VwbGVyR2xMb2dvID0gKHthcHBOYW1lLCB2ZXJzaW9ufSkgPT4gKFxuICA8TG9nb1dyYXBwZXIgY2xhc3NOYW1lPVwic2lkZS1wYW5lbC1sb2dvXCI+XG4gICAgPExvZ29TdmdXcmFwcGVyPlxuICAgICAgPExvZ29TdmcgLz5cbiAgICA8L0xvZ29TdmdXcmFwcGVyPlxuICAgIDxMb2dvVGl0bGUgY2xhc3NOYW1lPVwibG9nb19fdGl0bGVcIj5cbiAgICAgIDxMb2dvTmFtZSBjbGFzc05hbWU9XCJsb2dvX19uYW1lXCI+e2FwcE5hbWV9PC9Mb2dvTmFtZT5cbiAgICAgIHt2ZXJzaW9uID8gPExvZ29WZXJzaW9uIGNsYXNzTmFtZT1cImxvZ29fX3ZlcnNpb25cIj57dmVyc2lvbn08L0xvZ29WZXJzaW9uPiA6IG51bGx9XG4gICAgPC9Mb2dvVGl0bGU+XG4gIDwvTG9nb1dyYXBwZXI+XG4pO1xuXG5LZXBsZXJHbExvZ28uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBLZXBsZXJHbExvZ287XG4iXX0=