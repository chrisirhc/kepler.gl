'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledMapContainer = exports.StyledModalContent = exports.Table = exports.DatasetSquare = exports.ButtonGroup = exports.StyledPanelDropdown = exports.StyledPanelHeader = exports.InlineInput = exports.InputLight = exports.Input = exports.Button = exports.Tooltip = exports.SidePanelDivider = exports.SidePanelSection = exports.PanelContent = exports.PanelHeaderContent = exports.PanelHeaderTitle = exports.PanelLabelBold = exports.PanelLabelWrapper = exports.PanelLabel = exports.CenterFlexbox = exports.IconRoundSmall = exports.SelectTextBold = exports.SelectText = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  font-size: ', ';\n  font-weight: 400;\n\n  i {\n    font-size: 13px;\n    margin-right: 6px;\n  }\n'], ['\n  color: ', ';\n  font-size: ', ';\n  font-weight: 400;\n\n  i {\n    font-size: 13px;\n    margin-right: 6px;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  font-weight: 500;\n'], ['\n  color: ', ';\n  font-weight: 500;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  background-color: ', '; // updated after checking sketch file\n  color: ', ';\n  align-items: center;\n  justify-content: center;\n\n  :hover {\n    cursor: pointer;\n    background-color: ', ';\n  }\n'], ['\n  display: flex;\n  width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  background-color: ', '; // updated after checking sketch file\n  color: ', ';\n  align-items: center;\n  justify-content: center;\n\n  :hover {\n    cursor: pointer;\n    background-color: ', ';\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  align-items: center;\n'], ['\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 400;\n  margin-bottom: 4px;\n  text-transform: capitalize;\n'], ['\n  color: ', ';\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 400;\n  margin-bottom: 4px;\n  text-transform: capitalize;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  align-items: self-start;\n'], ['\n  display: flex;\n  align-items: self-start;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: 500;\n'], ['\n  font-weight: 500;\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  font-size: 13px;\n  letter-spacing: 0.43px;\n  text-transform: capitalize;\n'], ['\n  color: ', ';\n  font-size: 13px;\n  letter-spacing: 0.43px;\n  text-transform: capitalize;\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  align-items: center;\n  color: ', ';\n  padding-left: 12px;\n\n  .icon {\n    color: ', ';\n    display: flex;\n    align-items: center;\n    margin-right: 12px;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  color: ', ';\n  padding-left: 12px;\n\n  .icon {\n    color: ', ';\n    display: flex;\n    align-items: center;\n    margin-right: 12px;\n  }\n']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  padding: 12px;\n'], ['\n  background-color: ', ';\n  padding: 12px;\n']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 12px;\n  opacity: ', ';\n  pointer-events: ', ';\n'], ['\n  margin-bottom: 12px;\n  opacity: ', ';\n  pointer-events: ', ';\n']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n  border-bottom: 1px solid ', ';\n  height: 12px;\n  margin-bottom: 12px;\n'], ['\n  border-bottom: 1px solid ', ';\n  height: 12px;\n  margin-bottom: 12px;\n']),
    _templateObject13 = (0, _taggedTemplateLiteral3.default)(['\n  &.__react_component_tooltip {\n    font-size: 9.5px;\n    font-weight: 500;\n    padding: 7px 18px;\n\n    &.type-dark {\n      background-color: ', ';\n      color: ', ';\n      &.place-bottom {\n        :after {\n          border-bottom-color: ', ';\n        }\n      }\n\n      &.place-top {\n        :after {\n          border-top-color: ', ';\n        }\n      }\n\n      &.place-right {\n        :after {\n          border-right-color: ', ';\n        }\n      }\n\n      &.place-left {\n        :after {\n          border-left-color: ', ';\n        }\n      }\n    }\n  }\n'], ['\n  &.__react_component_tooltip {\n    font-size: 9.5px;\n    font-weight: 500;\n    padding: 7px 18px;\n\n    &.type-dark {\n      background-color: ', ';\n      color: ', ';\n      &.place-bottom {\n        :after {\n          border-bottom-color: ', ';\n        }\n      }\n\n      &.place-top {\n        :after {\n          border-top-color: ', ';\n        }\n      }\n\n      &.place-right {\n        :after {\n          border-right-color: ', ';\n        }\n      }\n\n      &.place-left {\n        :after {\n          border-left-color: ', ';\n        }\n      }\n    }\n  }\n']),
    _templateObject14 = (0, _taggedTemplateLiteral3.default)(['\n  align-items: center;\n  background-color: ', ';\n  border-radius: ', ';\n  color: ', ';\n  cursor: pointer;\n  display: inline-flex;\n  font-size: ', ';\n  font-weight: 500;\n  justify-content: center;\n  letter-spacing: 0.3px;\n  line-height: 14px;\n  outline: 0;\n  padding: ', ';\n  text-align: center;\n  transition: ', ';\n  vertical-align: middle;\n  width: ', ';\n  opacity: ', ';\n  pointer-events: ', ';\n\n  :hover,\n  :focus,\n  :active,\n  &.active {\n    background-color: ', ';\n    color: ', ';\n  }\n\n  svg {\n    margin-right: 8px;\n  }\n'], ['\n  align-items: center;\n  background-color: ', ';\n  border-radius: ', ';\n  color: ', ';\n  cursor: pointer;\n  display: inline-flex;\n  font-size: ', ';\n  font-weight: 500;\n  justify-content: center;\n  letter-spacing: 0.3px;\n  line-height: 14px;\n  outline: 0;\n  padding: ', ';\n  text-align: center;\n  transition: ', ';\n  vertical-align: middle;\n  width: ', ';\n  opacity: ', ';\n  pointer-events: ', ';\n\n  :hover,\n  :focus,\n  :active,\n  &.active {\n    background-color: ', ';\n    color: ', ';\n  }\n\n  svg {\n    margin-right: 8px;\n  }\n']),
    _templateObject15 = (0, _taggedTemplateLiteral3.default)(['\n  ', ';\n'], ['\n  ', ';\n']),
    _templateObject16 = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject17 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  border-left: 3px solid\n    rgb(\n      ', '\n    );\n  padding: 0 10px 0 0;\n  height: ', 'px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: ', ';\n'], ['\n  background-color: ', ';\n  border-left: 3px solid\n    rgb(\n      ', '\n    );\n  padding: 0 10px 0 0;\n  height: ', 'px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: ', ';\n']),
    _templateObject18 = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n  background-color: ', ';\n  overflow-y: auto;\n  box-shadow: ', ';\n  border-radius: ', ';\n  margin-top: 2px;\n  max-height: 500px;\n'], ['\n  ', '\n  background-color: ', ';\n  overflow-y: auto;\n  box-shadow: ', ';\n  border-radius: ', ';\n  margin-top: 2px;\n  max-height: 500px;\n']),
    _templateObject19 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  .button {\n    border-radius: 0;\n    margin-left: 2px;\n  }\n  .button:first-child {\n    border-bottom-left-radius: ', ';\n    border-top-left-radius: ', ';\n    margin-left: 0;\n  }\n  .button:last-child {\n    border-bottom-right-radius: ', ';\n    border-top-right-radius: ', ';\n  }\n'], ['\n  display: flex;\n  .button {\n    border-radius: 0;\n    margin-left: 2px;\n  }\n  .button:first-child {\n    border-bottom-left-radius: ', ';\n    border-top-left-radius: ', ';\n    margin-left: 0;\n  }\n  .button:last-child {\n    border-bottom-right-radius: ', ';\n    border-top-right-radius: ', ';\n  }\n']),
    _templateObject20 = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background-color: rgb(', ');\n  margin-right: 12px\n'], ['\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background-color: rgb(', ');\n  margin-right: 12px\n']),
    _templateObject21 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  border-spacing: 0;\n  \n  thead {\n    tr th {\n      background: ', ';\n      color: ', ';\n      padding: 18px 12px;\n      text-align: start;\n    }\n  }\n  \n  tbody {\n   tr td {\n     border-bottom: ', ';\n     padding: 12px;\n   }\n  }\n'], ['\n  width: 100%;\n  border-spacing: 0;\n  \n  thead {\n    tr th {\n      background: ', ';\n      color: ', ';\n      padding: 18px 12px;\n      text-align: start;\n    }\n  }\n  \n  tbody {\n   tr td {\n     border-bottom: ', ';\n     padding: 12px;\n   }\n  }\n']),
    _templateObject22 = (0, _taggedTemplateLiteral3.default)(['\n  background: ', ';\n  color: ', ';\n  display: flex;\n  flex-direction: row;\n  font-size: 10px;\n  margin: 0 -96px;\n  padding: 30px 96px;\n  justify-content: space-between;\n'], ['\n  background: ', ';\n  color: ', ';\n  display: flex;\n  flex-direction: row;\n  font-size: 10px;\n  margin: 0 -96px;\n  padding: 30px 96px;\n  justify-content: space-between;\n']),
    _templateObject23 = (0, _taggedTemplateLiteral3.default)(['\n  .mapboxgl-map .mapboxgl-missing-css {\n    display: none;\n  }\n'], ['\n  .mapboxgl-map .mapboxgl-missing-css {\n    display: none;\n  }\n']); // Copyright (c) 2018 Uber Technologies, Inc.
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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactTooltip = require('react-tooltip');

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectText = exports.SelectText = _styledComponents2.default.span(_templateObject, function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.selectFontSize;
});

var SelectTextBold = exports.SelectTextBold = SelectText.extend(_templateObject2, function (props) {
  return props.theme.textColor;
});

var IconRoundSmall = exports.IconRoundSmall = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.secondaryBtnBgdHover;
}, function (props) {
  return props.theme.secondaryBtnColor;
}, function (props) {
  return props.theme.secondaryBtnBgdHover;
});

var CenterFlexbox = exports.CenterFlexbox = _styledComponents2.default.div(_templateObject4);

var PanelLabel = exports.PanelLabel = _styledComponents2.default.label.attrs({
  className: 'side-panel-panel__label'
})(_templateObject5, function (props) {
  return props.theme.labelColor;
});

var PanelLabelWrapper = exports.PanelLabelWrapper = _styledComponents2.default.div.attrs({
  className: 'side-panel-panel__label-wrapper'
})(_templateObject6);

var PanelLabelBold = exports.PanelLabelBold = PanelLabel.extend(_templateObject7);

var PanelHeaderTitle = exports.PanelHeaderTitle = _styledComponents2.default.span.attrs({
  className: 'side-panel-panel__header__title'
})(_templateObject8, function (props) {
  return props.theme.textColor;
});

var PanelHeaderContent = exports.PanelHeaderContent = _styledComponents2.default.div(_templateObject9, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.labelColor;
});

var PanelContent = exports.PanelContent = _styledComponents2.default.div.attrs({
  className: 'side-panel-panel__content'
})(_templateObject10, function (props) {
  return props.theme.panelBackground;
});

var SidePanelSection = exports.SidePanelSection = _styledComponents2.default.div.attrs({
  className: 'side-panel-section'
})(_templateObject11, function (props) {
  return props.disabled ? 0.4 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
});

var SidePanelDivider = exports.SidePanelDivider = _styledComponents2.default.div.attrs({
  className: 'side-panel-divider'
})(_templateObject12, function (props) {
  return props.theme.panelBorderColor;
});

var Tooltip = exports.Tooltip = (0, _styledComponents2.default)(_reactTooltip2.default)(_templateObject13, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipColor;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
});

var Button = exports.Button = _styledComponents2.default.div.attrs({
  className: 'button'
})(_templateObject14, function (props) {
  return props.negative ? props.theme.negativeBtnBgd : props.secondary ? props.theme.secondaryBtnBgd : props.link ? props.theme.linkBtnBgd : props.theme.primaryBtnBgd;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.negative ? props.theme.negativeBtnColor : props.secondary ? props.theme.secondaryBtnColor : props.link ? props.theme.linkBtnColor : props.theme.primaryBtnColor;
}, function (props) {
  return props.large ? '14px' : '11px';
}, function (props) {
  return props.large ? '14px 32px' : '9px 12px';
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.width || 'auto';
}, function (props) {
  return props.disabled ? 0.4 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
}, function (props) {
  return props.negative ? props.theme.negativeBtnBgdHover : props.secondary ? props.theme.secondaryBtnBgdHover : props.link ? props.theme.linkBtnActBgdHover : props.theme.primaryBtnBgdHover;
}, function (props) {
  return props.negative ? props.theme.negativeBtnActColor : props.secondary ? props.theme.secondaryBtnActColor : props.link ? props.theme.linkBtnActColor : props.theme.primaryBtnActColor;
});

var Input = exports.Input = _styledComponents2.default.input(_templateObject15, function (props) {
  return props.secondary ? props.theme.secondaryInput : props.theme.input;
});

var InputLight = exports.InputLight = _styledComponents2.default.input(_templateObject16, function (props) {
  return props.theme.inputLT;
});

var InlineInput = exports.InlineInput = Input.extend(_templateObject15, function (props) {
  return props.theme.inlineInput;
});

var StyledPanelHeader = exports.StyledPanelHeader = _styledComponents2.default.div(_templateObject17, function (props) {
  return props.active ? props.theme.panelBackgroundHover : props.theme.panelBackground;
}, function (props) {
  return props.labelRCGColorValues ? props.labelRCGColorValues.join(',') : 'transparent';
}, function (props) {
  return props.theme.panelHeaderHeight;
}, function (props) {
  return props.theme.transition;
});

var StyledPanelDropdown = exports.StyledPanelDropdown = _styledComponents2.default.div(_templateObject18, function (props) {
  return props.theme.panelDropdownScrollBar;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.panelBoxShadow;
}, function (props) {
  return props.theme.panelBorderRadius;
});

var ButtonGroup = exports.ButtonGroup = _styledComponents2.default.div(_templateObject19, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
});

var DatasetSquare = exports.DatasetSquare = _styledComponents2.default.div(_templateObject20, function (props) {
  return props.color.join(',');
});

var Table = exports.Table = _styledComponents2.default.table(_templateObject21, function (props) {
  return props.theme.panelBackgroundLT;
}, function (props) {
  return props.theme.titleColorLT;
}, function (props) {
  return props.theme.panelBorderLT;
});

var StyledModalContent = exports.StyledModalContent = _styledComponents2.default.div(_templateObject22, function (props) {
  return props.theme.panelBackgroundLT;
}, function (props) {
  return props.theme.textColorLT;
});

/**
 * Newer versions of mapbox.gl display an error message banner on top of the map by default
 * which will cause the map to display points in the wrong locations
 * This workaround will hide the error banner.
 */
var StyledMapContainer = exports.StyledMapContainer = _styledComponents2.default.div(_templateObject23);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cy5qcyJdLCJuYW1lcyI6WyJTZWxlY3RUZXh0Iiwic3R5bGVkIiwic3BhbiIsInByb3BzIiwidGhlbWUiLCJsYWJlbENvbG9yIiwic2VsZWN0Rm9udFNpemUiLCJTZWxlY3RUZXh0Qm9sZCIsImV4dGVuZCIsInRleHRDb2xvciIsIkljb25Sb3VuZFNtYWxsIiwiZGl2Iiwic2Vjb25kYXJ5QnRuQmdkSG92ZXIiLCJzZWNvbmRhcnlCdG5Db2xvciIsIkNlbnRlckZsZXhib3giLCJQYW5lbExhYmVsIiwibGFiZWwiLCJhdHRycyIsImNsYXNzTmFtZSIsIlBhbmVsTGFiZWxXcmFwcGVyIiwiUGFuZWxMYWJlbEJvbGQiLCJQYW5lbEhlYWRlclRpdGxlIiwiUGFuZWxIZWFkZXJDb250ZW50IiwiUGFuZWxDb250ZW50IiwicGFuZWxCYWNrZ3JvdW5kIiwiU2lkZVBhbmVsU2VjdGlvbiIsImRpc2FibGVkIiwiU2lkZVBhbmVsRGl2aWRlciIsInBhbmVsQm9yZGVyQ29sb3IiLCJUb29sdGlwIiwiUmVhY3RUb29sdGlwIiwidG9vbHRpcEJnIiwidG9vbHRpcENvbG9yIiwiQnV0dG9uIiwibmVnYXRpdmUiLCJuZWdhdGl2ZUJ0bkJnZCIsInNlY29uZGFyeSIsInNlY29uZGFyeUJ0bkJnZCIsImxpbmsiLCJsaW5rQnRuQmdkIiwicHJpbWFyeUJ0bkJnZCIsInByaW1hcnlCdG5SYWRpdXMiLCJuZWdhdGl2ZUJ0bkNvbG9yIiwibGlua0J0bkNvbG9yIiwicHJpbWFyeUJ0bkNvbG9yIiwibGFyZ2UiLCJ0cmFuc2l0aW9uIiwid2lkdGgiLCJuZWdhdGl2ZUJ0bkJnZEhvdmVyIiwibGlua0J0bkFjdEJnZEhvdmVyIiwicHJpbWFyeUJ0bkJnZEhvdmVyIiwibmVnYXRpdmVCdG5BY3RDb2xvciIsInNlY29uZGFyeUJ0bkFjdENvbG9yIiwibGlua0J0bkFjdENvbG9yIiwicHJpbWFyeUJ0bkFjdENvbG9yIiwiSW5wdXQiLCJpbnB1dCIsInNlY29uZGFyeUlucHV0IiwiSW5wdXRMaWdodCIsImlucHV0TFQiLCJJbmxpbmVJbnB1dCIsImlubGluZUlucHV0IiwiU3R5bGVkUGFuZWxIZWFkZXIiLCJhY3RpdmUiLCJwYW5lbEJhY2tncm91bmRIb3ZlciIsImxhYmVsUkNHQ29sb3JWYWx1ZXMiLCJqb2luIiwicGFuZWxIZWFkZXJIZWlnaHQiLCJTdHlsZWRQYW5lbERyb3Bkb3duIiwicGFuZWxEcm9wZG93blNjcm9sbEJhciIsInBhbmVsQm94U2hhZG93IiwicGFuZWxCb3JkZXJSYWRpdXMiLCJCdXR0b25Hcm91cCIsIkRhdGFzZXRTcXVhcmUiLCJjb2xvciIsIlRhYmxlIiwidGFibGUiLCJwYW5lbEJhY2tncm91bmRMVCIsInRpdGxlQ29sb3JMVCIsInBhbmVsQm9yZGVyTFQiLCJTdHlsZWRNb2RhbENvbnRlbnQiLCJ0ZXh0Q29sb3JMVCIsIlN0eWxlZE1hcENvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tOQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLGtDQUFhQywyQkFBT0MsSUFBcEIsa0JBQ0Y7QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLFVBQXJCO0FBQUEsQ0FERSxFQUVFO0FBQUEsU0FBU0YsTUFBTUMsS0FBTixDQUFZRSxjQUFyQjtBQUFBLENBRkYsQ0FBTjs7QUFXQSxJQUFNQywwQ0FBaUJQLFdBQVdRLE1BQTVCLG1CQUNGO0FBQUEsU0FBU0wsTUFBTUMsS0FBTixDQUFZSyxTQUFyQjtBQUFBLENBREUsQ0FBTjs7QUFLQSxJQUFNQywwQ0FBaUJULDJCQUFPVSxHQUF4QixtQkFLUztBQUFBLFNBQ2xCUixNQUFNQyxLQUFOLENBQVlRLG9CQURNO0FBQUEsQ0FM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c3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTggVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSAncmVhY3QtdG9vbHRpcCc7XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RUZXh0ID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2VsZWN0Rm9udFNpemV9O1xuICBmb250LXdlaWdodDogNDAwO1xuXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNlbGVjdFRleHRCb2xkID0gU2VsZWN0VGV4dC5leHRlbmRgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5gO1xuXG5leHBvcnQgY29uc3QgSWNvblJvdW5kU21hbGwgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5CZ2RIb3Zlcn07IC8vIHVwZGF0ZWQgYWZ0ZXIgY2hlY2tpbmcgc2tldGNoIGZpbGVcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQ29sb3J9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUJ0bkJnZEhvdmVyfTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENlbnRlckZsZXhib3ggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFBhbmVsTGFiZWwgPSBzdHlsZWQubGFiZWwuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLXBhbmVsX19sYWJlbCdcbn0pYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5gO1xuXG5leHBvcnQgY29uc3QgUGFuZWxMYWJlbFdyYXBwZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbC1wYW5lbF9fbGFiZWwtd3JhcHBlcidcbn0pYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc2VsZi1zdGFydDtcbmA7XG5cbmV4cG9ydCBjb25zdCBQYW5lbExhYmVsQm9sZCA9IFBhbmVsTGFiZWwuZXh0ZW5kYFxuICBmb250LXdlaWdodDogNTAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IFBhbmVsSGVhZGVyVGl0bGUgPSBzdHlsZWQuc3Bhbi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWwtcGFuZWxfX2hlYWRlcl9fdGl0bGUnXG59KWBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC40M3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQYW5lbEhlYWRlckNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG5cbiAgLmljb24ge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQYW5lbENvbnRlbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbC1wYW5lbF9fY29udGVudCdcbn0pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XG4gIHBhZGRpbmc6IDEycHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2lkZVBhbmVsU2VjdGlvbiA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLXNlY3Rpb24nXG59KWBcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgb3BhY2l0eTogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAwLjQgOiAxKX07XG4gIHBvaW50ZXItZXZlbnRzOiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/ICdub25lJyA6ICdhbGwnKX07XG5gO1xuXG5leHBvcnQgY29uc3QgU2lkZVBhbmVsRGl2aWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLWRpdmlkZXInXG59KWBcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCb3JkZXJDb2xvcn07XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBUb29sdGlwID0gc3R5bGVkKFJlYWN0VG9vbHRpcClgXG4gICYuX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcCB7XG4gICAgZm9udC1zaXplOiA5LjVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDdweCAxOHB4O1xuXG4gICAgJi50eXBlLWRhcmsge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQmd9O1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudG9vbHRpcENvbG9yfTtcbiAgICAgICYucGxhY2UtYm90dG9tIHtcbiAgICAgICAgOmFmdGVyIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5wbGFjZS10b3Age1xuICAgICAgICA6YWZ0ZXIge1xuICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudG9vbHRpcEJnfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnBsYWNlLXJpZ2h0IHtcbiAgICAgICAgOmFmdGVyIHtcbiAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudG9vbHRpcEJnfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnBsYWNlLWxlZnQge1xuICAgICAgICA6YWZ0ZXIge1xuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnYnV0dG9uJ1xufSlgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5uZWdhdGl2ZVxuICAgICAgPyBwcm9wcy50aGVtZS5uZWdhdGl2ZUJ0bkJnZFxuICAgICAgOiBwcm9wcy5zZWNvbmRhcnlcbiAgICAgICAgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5CZ2RcbiAgICAgICAgOiBwcm9wcy5saW5rID8gcHJvcHMudGhlbWUubGlua0J0bkJnZCA6IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5SYWRpdXN9O1xuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLm5lZ2F0aXZlXG4gICAgICA/IHByb3BzLnRoZW1lLm5lZ2F0aXZlQnRuQ29sb3JcbiAgICAgIDogcHJvcHMuc2Vjb25kYXJ5XG4gICAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQ29sb3JcbiAgICAgICAgOiBwcm9wcy5saW5rID8gcHJvcHMudGhlbWUubGlua0J0bkNvbG9yIDogcHJvcHMudGhlbWUucHJpbWFyeUJ0bkNvbG9yfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IChwcm9wcy5sYXJnZSA/ICcxNHB4JyA6ICcxMXB4Jyl9O1xuICBmb250LXdlaWdodDogNTAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogJHtwcm9wcyA9PiAocHJvcHMubGFyZ2UgPyAnMTRweCAzMnB4JyA6ICc5cHggMTJweCcpfTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRyYW5zaXRpb259O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aCB8fCAnYXV0byd9O1xuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IDAuNCA6IDEpfTtcbiAgcG9pbnRlci1ldmVudHM6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gJ25vbmUnIDogJ2FsbCcpfTtcblxuICA6aG92ZXIsXG4gIDpmb2N1cyxcbiAgOmFjdGl2ZSxcbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLm5lZ2F0aXZlXG4gICAgICAgID8gcHJvcHMudGhlbWUubmVnYXRpdmVCdG5CZ2RIb3ZlclxuICAgICAgICA6IHByb3BzLnNlY29uZGFyeVxuICAgICAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQmdkSG92ZXJcbiAgICAgICAgICA6IHByb3BzLmxpbmtcbiAgICAgICAgICAgID8gcHJvcHMudGhlbWUubGlua0J0bkFjdEJnZEhvdmVyXG4gICAgICAgICAgICA6IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2RIb3Zlcn07XG4gICAgY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLm5lZ2F0aXZlXG4gICAgICAgID8gcHJvcHMudGhlbWUubmVnYXRpdmVCdG5BY3RDb2xvclxuICAgICAgICA6IHByb3BzLnNlY29uZGFyeVxuICAgICAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQWN0Q29sb3JcbiAgICAgICAgICA6IHByb3BzLmxpbmtcbiAgICAgICAgICAgID8gcHJvcHMudGhlbWUubGlua0J0bkFjdENvbG9yXG4gICAgICAgICAgICA6IHByb3BzLnRoZW1lLnByaW1hcnlCdG5BY3RDb2xvcn07XG4gIH1cblxuICBzdmcge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gICR7cHJvcHMgPT5cbiAgICBwcm9wcy5zZWNvbmRhcnkgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dCA6IHByb3BzLnRoZW1lLmlucHV0fTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbnB1dExpZ2h0ID0gc3R5bGVkLmlucHV0YFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0TFR9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5saW5lSW5wdXQgPSBJbnB1dC5leHRlbmRgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5saW5lSW5wdXR9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFBhbmVsSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZVxuICAgICAgPyBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmRIb3ZlclxuICAgICAgOiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkXG4gICAgcmdiKFxuICAgICAgJHtwcm9wcyA9PlxuICAgICAgICBwcm9wcy5sYWJlbFJDR0NvbG9yVmFsdWVzXG4gICAgICAgICAgPyBwcm9wcy5sYWJlbFJDR0NvbG9yVmFsdWVzLmpvaW4oJywnKVxuICAgICAgICAgIDogJ3RyYW5zcGFyZW50J31cbiAgICApO1xuICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxIZWFkZXJIZWlnaHR9cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0aW9ufTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQYW5lbERyb3Bkb3duID0gc3R5bGVkLmRpdmBcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbERyb3Bkb3duU2Nyb2xsQmFyfVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCb3hTaGFkb3d9O1xuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQm9yZGVyUmFkaXVzfTtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25Hcm91cCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIC5idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgfVxuICAuYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5SYWRpdXN9O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUJ0blJhZGl1c307XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLmJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuUmFkaXVzfTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuUmFkaXVzfTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERhdGFzZXRTcXVhcmUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoJHtwcm9wcyA9PiBwcm9wcy5jb2xvci5qb2luKCcsJyl9KTtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4XG5gO1xuXG5leHBvcnQgY29uc3QgVGFibGUgPSBzdHlsZWQudGFibGVgXG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgXG4gIHRoZWFkIHtcbiAgICB0ciB0aCB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZExUfTtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlQ29sb3JMVH07XG4gICAgICBwYWRkaW5nOiAxOHB4IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICB9XG4gIH1cbiAgXG4gIHRib2R5IHtcbiAgIHRyIHRkIHtcbiAgICAgYm9yZGVyLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJvcmRlckxUfTtcbiAgICAgcGFkZGluZzogMTJweDtcbiAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZE1vZGFsQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kTFR9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luOiAwIC05NnB4O1xuICBwYWRkaW5nOiAzMHB4IDk2cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbi8qKlxuICogTmV3ZXIgdmVyc2lvbnMgb2YgbWFwYm94LmdsIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSBiYW5uZXIgb24gdG9wIG9mIHRoZSBtYXAgYnkgZGVmYXVsdFxuICogd2hpY2ggd2lsbCBjYXVzZSB0aGUgbWFwIHRvIGRpc3BsYXkgcG9pbnRzIGluIHRoZSB3cm9uZyBsb2NhdGlvbnNcbiAqIFRoaXMgd29ya2Fyb3VuZCB3aWxsIGhpZGUgdGhlIGVycm9yIGJhbm5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IFN0eWxlZE1hcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIC5tYXBib3hnbC1tYXAgLm1hcGJveGdsLW1pc3NpbmctY3NzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuIl19