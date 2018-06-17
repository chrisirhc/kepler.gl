'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaveExportDropdown = exports.PanelAction = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  padding: 12px 16px 0 16px;\n'], ['\n  background-color: ', ';\n  padding: 12px 16px 0 16px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  width: 100%;\n'], ['\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  width: 100%;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n'], ['\n  display: flex;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  align-items: center;\n  border-radius: 2px;\n  color: ', ';\n  display: flex;\n  height: 26px;\n  justify-content: center;\n  margin-left: 4px;\n  width: 26px;\n\n  a {\n    height: 20px;\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: ', ';\n    color: ', ';\n\n    a {\n      color: ', ';\n    }\n  }\n'], ['\n  align-items: center;\n  border-radius: 2px;\n  color: ', ';\n  display: flex;\n  height: 26px;\n  justify-content: center;\n  margin-left: 4px;\n  width: 26px;\n\n  a {\n    height: 20px;\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: ', ';\n    color: ', ';\n\n    a {\n      color: ', ';\n    }\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  box-shadow: ', ';\n  font-size: 11px;\n  padding: 16px 0;\n  position: absolute;\n  transition: ', ';\n  display: flex;\n  margin-top: ', ';\n  opacity: ', ';\n  transform: translateX(calc(-50% + 20px));\n  pointer-events:  ', ';\n  z-index: 1000;\n\n  .save-export-dropdown__inner {\n    box-shadow: none;\n    background-color: transparent;\n    display: flex;\n  }\n\n  .save-export-dropdown__item {\n    align-items: center;\n    border-right: 1px solid ', ';\n    color: ', ';\n    display: flex;\n    flex-direction: column;\n    padding: 0 22px;\n\n    :hover {\n      cursor: pointer;\n      color: ', ';\n    }\n\n    &:last-child {\n      border-right: 0;\n    }\n  }\n\n  .save-export-dropdown__title {\n    white-space: nowrap;\n    margin-top: 4px;\n  }\n'], ['\n  background-color: ', ';\n  box-shadow: ', ';\n  font-size: 11px;\n  padding: 16px 0;\n  position: absolute;\n  transition: ', ';\n  display: flex;\n  margin-top: ', ';\n  opacity: ', ';\n  transform: translateX(calc(-50% + 20px));\n  pointer-events:  ', ';\n  z-index: 1000;\n\n  .save-export-dropdown__inner {\n    box-shadow: none;\n    background-color: transparent;\n    display: flex;\n  }\n\n  .save-export-dropdown__item {\n    align-items: center;\n    border-right: 1px solid ', ';\n    color: ', ';\n    display: flex;\n    flex-direction: column;\n    padding: 0 22px;\n\n    :hover {\n      cursor: pointer;\n      color: ', ';\n    }\n\n    &:last-child {\n      border-right: 0;\n    }\n  }\n\n  .save-export-dropdown__title {\n    white-space: nowrap;\n    margin-top: 4px;\n  }\n']); // Copyright (c) 2018 Uber Technologies, Inc.
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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents3 = require('../common/styled-components');

var _logo = require('../common/logo');

var _logo2 = _interopRequireDefault(_logo);

var _icons = require('../common/icons');

var _panelDropdown = require('./panel-dropdown');

var _panelDropdown2 = _interopRequireDefault(_panelDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledPanelHeader = _styledComponents2.default.div.attrs({
  className: 'side-side-panel__header'
})(_templateObject, function (props) {
  return props.theme.sidePanelHeaderBg;
});

var StyledPanelHeaderTop = _styledComponents2.default.div.attrs({
  className: 'side-panel__header__top'
})(_templateObject2);

var StyledPanelTopActions = _styledComponents2.default.div.attrs({
  className: 'side-panel__header__actions'
})(_templateObject3);

var StyledPanelAction = _styledComponents2.default.div.attrs({
  className: 'side-panel__header__actions'
})(_templateObject4, function (props) {
  return props.active ? props.theme.textColorHl : props.theme.subtextColor;
}, function (props) {
  return props.theme.secondaryBtnActBgd;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});

var StyledPanelDropdown = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListShadow;
}, function (props) {
  return props.theme.transitionSlow;
}, function (props) {
  return props.show ? '6px' : '20px';
}, function (props) {
  return props.show ? 1 : 0;
}, function (props) {
  return props.show ? 'all' : 'none';
}, function (props) {
  return props.theme.panelHeaderIcon;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
});

var PanelAction = exports.PanelAction = function PanelAction(_ref) {
  var item = _ref.item,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    StyledPanelAction,
    { className: 'side-panel__panel-header__action',
      'data-tip': true, 'data-for': item.id + '-action', onClick: onClick },
    _react2.default.createElement(
      'a',
      { target: item.blank ? '_blank' : '', href: item.href },
      _react2.default.createElement(item.iconComponent, { height: '20px' })
    ),
    _react2.default.createElement(
      _styledComponents3.Tooltip,
      {
        id: item.id + '-action',
        place: 'bottom',
        delayShow: 500,
        effect: 'solid'
      },
      _react2.default.createElement(
        'span',
        null,
        item.tooltip
      )
    )
  );
};

var PanelItem = function PanelItem(_ref2) {
  var onClose = _ref2.onClose,
      onClickHandler = _ref2.onClickHandler,
      label = _ref2.label,
      icon = _ref2.icon;
  return _react2.default.createElement(
    'div',
    { className: 'save-export-dropdown__item', onClick: function onClick(e) {
        e.stopPropagation();
        onClose();
        onClickHandler();
      } },
    icon,
    _react2.default.createElement(
      'div',
      { className: 'save-export-dropdown__title' },
      label
    )
  );
};

var SaveExportDropdown = exports.SaveExportDropdown = function SaveExportDropdown(_ref3) {
  var onExportImage = _ref3.onExportImage,
      onExportData = _ref3.onExportData,
      onExportConfig = _ref3.onExportConfig,
      onSaveMap = _ref3.onSaveMap,
      show = _ref3.show,
      onClose = _ref3.onClose;

  return _react2.default.createElement(
    StyledPanelDropdown,
    { show: show, className: 'save-export-dropdown' },
    _react2.default.createElement(
      _panelDropdown2.default,
      { onClose: onClose, className: 'save-export-dropdown__inner' },
      _react2.default.createElement(PanelItem, {
        label: 'Export Image',
        onClickHandler: onExportImage,
        onClose: onClose,
        icon: _react2.default.createElement(_icons.Picture, { height: '16px' })
      }),
      _react2.default.createElement(PanelItem, {
        label: 'Export Data',
        onClickHandler: onExportData,
        onClose: onClose,
        icon: _react2.default.createElement(_icons.Files, { height: '16px' })
      }),
      _react2.default.createElement(PanelItem, {
        label: 'Export Config',
        onClickHandler: onExportConfig,
        onClose: onClose,
        icon: _react2.default.createElement(_icons.CodeAlt, { height: '16px' })
      }),
      onSaveMap ? _react2.default.createElement(PanelItem, {
        label: 'Save Map Url',
        onClickHandler: onSaveMap,
        onClose: onClose,
        icon: _react2.default.createElement(_icons.Share, { height: '16px' })
      }) : null
    )
  );
};

var defaultActionItems = [{
  id: 'save',
  iconComponent: _icons.Save,
  tooltip: 'Save / Export',
  onClick: function onClick() {},
  dropdownComponent: SaveExportDropdown
}];

function PanelHeaderFactory() {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(PanelHeader, _Component);

    function PanelHeader() {
      var _ref4;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, PanelHeader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref4 = PanelHeader.__proto__ || Object.getPrototypeOf(PanelHeader)).call.apply(_ref4, [this].concat(args))), _this), _this.state = {
        dropdown: null
      }, _this.showDropdown = function (id) {
        _this.setState({ dropdown: id });
      }, _this.hideDropdown = function () {
        _this.setState({ dropdown: null });
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(PanelHeader, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            appName = _props.appName,
            version = _props.version,
            actionItems = _props.actionItems,
            onSaveMap = _props.onSaveMap,
            onExportImage = _props.onExportImage,
            onExportData = _props.onExportData,
            onExportConfig = _props.onExportConfig;

        return _react2.default.createElement(
          StyledPanelHeader,
          { className: 'side-panel__panel-header' },
          _react2.default.createElement(
            StyledPanelHeaderTop,
            { className: 'side-panel__panel-header__top' },
            _react2.default.createElement(this.props.logoComponent, { appName: appName, version: version }),
            _react2.default.createElement(
              StyledPanelTopActions,
              null,
              actionItems.map(function (item) {
                return _react2.default.createElement(
                  'div',
                  { className: 'side-panel__panel-header__right',
                    key: item.id, style: { position: 'relative' } },
                  _react2.default.createElement(PanelAction, {
                    item: item,
                    onClick: function onClick() {
                      if (item.dropdownComponent) {
                        _this2.showDropdown(item.id);
                      }

                      item.onClick();
                    }
                  }),
                  item.dropdownComponent ? _react2.default.createElement(item.dropdownComponent, {
                    onClose: _this2.hideDropdown,
                    show: _this2.state.dropdown === item.id,
                    onSaveMap: onSaveMap,
                    onExportData: onExportData,
                    onExportImage: onExportImage,
                    onExportConfig: onExportConfig
                  }) : null
                );
              })
            )
          )
        );
      }
    }]);
    return PanelHeader;
  }(_react.Component), _class.propTypes = {
    logoComponent: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
    actionItems: _propTypes2.default.arrayOf(_propTypes2.default.any)
  }, _class.defaultProps = {
    logoComponent: _logo2.default,
    actionItems: defaultActionItems
  }, _temp2;
}

exports.default = PanelHeaderFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLmpzIl0sIm5hbWVzIjpbIlN0eWxlZFBhbmVsSGVhZGVyIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsSGVhZGVyQmciLCJTdHlsZWRQYW5lbEhlYWRlclRvcCIsIlN0eWxlZFBhbmVsVG9wQWN0aW9ucyIsIlN0eWxlZFBhbmVsQWN0aW9uIiwiYWN0aXZlIiwidGV4dENvbG9ySGwiLCJzdWJ0ZXh0Q29sb3IiLCJzZWNvbmRhcnlCdG5BY3RCZ2QiLCJTdHlsZWRQYW5lbERyb3Bkb3duIiwiZHJvcGRvd25MaXN0QmdkIiwiZHJvcGRvd25MaXN0U2hhZG93IiwidHJhbnNpdGlvblNsb3ciLCJzaG93IiwicGFuZWxIZWFkZXJJY29uIiwidGV4dENvbG9yIiwiUGFuZWxBY3Rpb24iLCJpdGVtIiwib25DbGljayIsImlkIiwiYmxhbmsiLCJocmVmIiwidG9vbHRpcCIsIlBhbmVsSXRlbSIsIm9uQ2xvc2UiLCJvbkNsaWNrSGFuZGxlciIsImxhYmVsIiwiaWNvbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJTYXZlRXhwb3J0RHJvcGRvd24iLCJvbkV4cG9ydEltYWdlIiwib25FeHBvcnREYXRhIiwib25FeHBvcnRDb25maWciLCJvblNhdmVNYXAiLCJkZWZhdWx0QWN0aW9uSXRlbXMiLCJpY29uQ29tcG9uZW50IiwiU2F2ZSIsImRyb3Bkb3duQ29tcG9uZW50IiwiUGFuZWxIZWFkZXJGYWN0b3J5Iiwic3RhdGUiLCJkcm9wZG93biIsInNob3dEcm9wZG93biIsInNldFN0YXRlIiwiaGlkZURyb3Bkb3duIiwiYXBwTmFtZSIsInZlcnNpb24iLCJhY3Rpb25JdGVtcyIsIm1hcCIsInBvc2l0aW9uIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwibG9nb0NvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImVs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QUNELG9CQUFVRSxPQUFYLEVBQW9CRixvQkFBVUcsSUFBOUIsQ0FBcEIsQ0FERTtBQUVqQlQsaUJBQWFNLG9CQUFVSSxPQUFWLENBQWtCSixvQkFBVUssR0FBNUI7QUFGSSxHQURyQixTQU1TQyxZQU5ULEdBTXdCO0FBQ3BCUCxtQkFBZVEsY0FESztBQUVwQmIsaUJBQWFaO0FBRk8sR0FOeEI7QUFxRUQ7O2tCQUVjSSxrQiIsImZpbGUiOiJwYW5lbC1oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTggVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEtlcGxlckdsTG9nbyBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9sb2dvJztcbmltcG9ydCB7Q29kZUFsdCwgU2F2ZSwgRmlsZXMsIFNoYXJlLCBQaWN0dXJlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgUGFuZWxEcm9wZG93biBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtZHJvcGRvd24nO1xuXG5jb25zdCBTdHlsZWRQYW5lbEhlYWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXNpZGUtcGFuZWxfX2hlYWRlcidcbn0pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEhlYWRlckJnfTtcbiAgcGFkZGluZzogMTJweCAxNnB4IDAgMTZweDtcbmA7XG5cbmNvbnN0IFN0eWxlZFBhbmVsSGVhZGVyVG9wID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWxfX2hlYWRlcl9fdG9wJ1xufSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBTdHlsZWRQYW5lbFRvcEFjdGlvbnMgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbF9faGVhZGVyX19hY3Rpb25zJ1xufSlgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBTdHlsZWRQYW5lbEFjdGlvbiA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsX19oZWFkZXJfX2FjdGlvbnMnXG59KWBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnRleHRDb2xvckhsIDogcHJvcHMudGhlbWUuc3VidGV4dENvbG9yfTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgd2lkdGg6IDI2cHg7XG5cbiAgYSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5BY3RCZ2R9O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcblxuICAgIGEge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkUGFuZWxEcm9wZG93biA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QmdkfTtcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RTaGFkb3d9O1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRyYW5zaXRpb25TbG93fTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogJHtwcm9wcyA9PiBwcm9wcy5zaG93ID8gJzZweCcgOiAnMjBweCd9O1xuICBvcGFjaXR5OiAke3Byb3BzID0+IHByb3BzLnNob3cgPyAxIDogMH07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKC01MCUgKyAyMHB4KSk7XG4gIHBvaW50ZXItZXZlbnRzOiAgJHtwcm9wcyA9PiBwcm9wcy5zaG93ID8gJ2FsbCcgOiAnbm9uZSd9O1xuICB6LWluZGV4OiAxMDAwO1xuXG4gIC5zYXZlLWV4cG9ydC1kcm9wZG93bl9faW5uZXIge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5zYXZlLWV4cG9ydC1kcm9wZG93bl9faXRlbSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsSGVhZGVySWNvbn07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMCAyMnB4O1xuXG4gICAgOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIH1cbiAgfVxuXG4gIC5zYXZlLWV4cG9ydC1kcm9wZG93bl9fdGl0bGUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUGFuZWxBY3Rpb24gPSAoe2l0ZW0sIG9uQ2xpY2t9KSA9PiAoXG4gIDxTdHlsZWRQYW5lbEFjdGlvbiBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19wYW5lbC1oZWFkZXJfX2FjdGlvblwiXG4gICAgZGF0YS10aXAgZGF0YS1mb3I9e2Ake2l0ZW0uaWR9LWFjdGlvbmB9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgIDxhIHRhcmdldD17aXRlbS5ibGFuayA/ICdfYmxhbmsnIDogJyd9IGhyZWY9e2l0ZW0uaHJlZn0+XG4gICAgICA8aXRlbS5pY29uQ29tcG9uZW50IGhlaWdodD1cIjIwcHhcIiAvPlxuICAgIDwvYT5cbiAgICA8VG9vbHRpcFxuICAgICAgaWQ9e2Ake2l0ZW0uaWR9LWFjdGlvbmB9XG4gICAgICBwbGFjZT1cImJvdHRvbVwiXG4gICAgICBkZWxheVNob3c9ezUwMH1cbiAgICAgIGVmZmVjdD1cInNvbGlkXCJcbiAgICA+XG4gICAgICA8c3Bhbj57aXRlbS50b29sdGlwfTwvc3Bhbj5cbiAgICA8L1Rvb2x0aXA+XG4gIDwvU3R5bGVkUGFuZWxBY3Rpb24+XG4pO1xuXG5jb25zdCBQYW5lbEl0ZW0gPSAoe29uQ2xvc2UsIG9uQ2xpY2tIYW5kbGVyLCBsYWJlbCwgaWNvbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzYXZlLWV4cG9ydC1kcm9wZG93bl9faXRlbVwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBvbkNsb3NlKCk7XG4gICAgb25DbGlja0hhbmRsZXIoKTtcbiAgfX0+XG4gICAge2ljb259XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzYXZlLWV4cG9ydC1kcm9wZG93bl9fdGl0bGVcIj57bGFiZWx9PC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IFNhdmVFeHBvcnREcm9wZG93biA9ICh7XG4gIG9uRXhwb3J0SW1hZ2UsXG4gIG9uRXhwb3J0RGF0YSxcbiAgb25FeHBvcnRDb25maWcsXG4gIG9uU2F2ZU1hcCxcbiAgc2hvdyxcbiAgb25DbG9zZVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRQYW5lbERyb3Bkb3duIHNob3c9e3Nob3d9IGNsYXNzTmFtZT1cInNhdmUtZXhwb3J0LWRyb3Bkb3duXCI+XG4gICAgICA8UGFuZWxEcm9wZG93biBvbkNsb3NlPXtvbkNsb3NlfSBjbGFzc05hbWU9XCJzYXZlLWV4cG9ydC1kcm9wZG93bl9faW5uZXJcIj5cbiAgICAgICAgPFBhbmVsSXRlbVxuICAgICAgICAgIGxhYmVsPVwiRXhwb3J0IEltYWdlXCJcbiAgICAgICAgICBvbkNsaWNrSGFuZGxlcj17b25FeHBvcnRJbWFnZX1cbiAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAgIGljb249eyg8UGljdHVyZSBoZWlnaHQ9XCIxNnB4XCIgLz4pfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxQYW5lbEl0ZW1cbiAgICAgICAgICBsYWJlbD1cIkV4cG9ydCBEYXRhXCJcbiAgICAgICAgICBvbkNsaWNrSGFuZGxlcj17b25FeHBvcnREYXRhfVxuICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgICAgaWNvbj17KDxGaWxlcyBoZWlnaHQ9XCIxNnB4XCIgLz4pfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxQYW5lbEl0ZW1cbiAgICAgICAgICBsYWJlbD1cIkV4cG9ydCBDb25maWdcIlxuICAgICAgICAgIG9uQ2xpY2tIYW5kbGVyPXtvbkV4cG9ydENvbmZpZ31cbiAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAgIGljb249eyg8Q29kZUFsdCBoZWlnaHQ9XCIxNnB4XCIgLz4pfVxuICAgICAgICAvPlxuXG4gICAgICAgIHtvblNhdmVNYXAgPyAoXG4gICAgICAgICAgPFBhbmVsSXRlbVxuICAgICAgICAgICAgbGFiZWw9XCJTYXZlIE1hcCBVcmxcIlxuICAgICAgICAgICAgb25DbGlja0hhbmRsZXI9e29uU2F2ZU1hcH1cbiAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgICAgICBpY29uPXsoPFNoYXJlIGhlaWdodD1cIjE2cHhcIiAvPil9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L1BhbmVsRHJvcGRvd24+XG4gICAgPC9TdHlsZWRQYW5lbERyb3Bkb3duPlxuICApO1xufTtcblxuY29uc3QgZGVmYXVsdEFjdGlvbkl0ZW1zID0gW1xuICB7XG4gICAgaWQ6ICdzYXZlJyxcbiAgICBpY29uQ29tcG9uZW50OiBTYXZlLFxuICAgIHRvb2x0aXA6ICdTYXZlIC8gRXhwb3J0JyxcbiAgICBvbkNsaWNrOiAoKSA9PiB7fSxcbiAgICBkcm9wZG93bkNvbXBvbmVudDogU2F2ZUV4cG9ydERyb3Bkb3duXG4gIH1cbl07XG5cbmZ1bmN0aW9uIFBhbmVsSGVhZGVyRmFjdG9yeSgpIHtcbiAgcmV0dXJuIGNsYXNzIFBhbmVsSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgbG9nb0NvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgICBhY3Rpb25JdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSlcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIGxvZ29Db21wb25lbnQ6IEtlcGxlckdsTG9nbyxcbiAgICAgIGFjdGlvbkl0ZW1zOiBkZWZhdWx0QWN0aW9uSXRlbXNcbiAgICB9O1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICBkcm9wZG93bjogbnVsbFxuICAgIH07XG5cbiAgICBzaG93RHJvcGRvd24gPSBpZCA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtkcm9wZG93bjogaWR9KTtcbiAgICB9O1xuXG4gICAgaGlkZURyb3Bkb3duID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZHJvcGRvd246IG51bGx9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBhcHBOYW1lLFxuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBhY3Rpb25JdGVtcyxcbiAgICAgICAgb25TYXZlTWFwLFxuICAgICAgICBvbkV4cG9ydEltYWdlLFxuICAgICAgICBvbkV4cG9ydERhdGEsXG4gICAgICAgIG9uRXhwb3J0Q29uZmlnXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRQYW5lbEhlYWRlciBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19wYW5lbC1oZWFkZXJcIj5cbiAgICAgICAgICA8U3R5bGVkUGFuZWxIZWFkZXJUb3AgY2xhc3NOYW1lPVwic2lkZS1wYW5lbF9fcGFuZWwtaGVhZGVyX190b3BcIj5cbiAgICAgICAgICAgIDx0aGlzLnByb3BzLmxvZ29Db21wb25lbnQgYXBwTmFtZT17YXBwTmFtZX0gdmVyc2lvbj17dmVyc2lvbn0vPlxuICAgICAgICAgICAgPFN0eWxlZFBhbmVsVG9wQWN0aW9ucz5cbiAgICAgICAgICAgICAge2FjdGlvbkl0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGUtcGFuZWxfX3BhbmVsLWhlYWRlcl9fcmlnaHRcIlxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfSBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnfX0+XG4gICAgICAgICAgICAgICAgICA8UGFuZWxBY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRyb3Bkb3duQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dEcm9wZG93bihpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5kcm9wZG93bkNvbXBvbmVudCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0uZHJvcGRvd25Db21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhpZGVEcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLmRyb3Bkb3duID09PSBpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIG9uU2F2ZU1hcD17b25TYXZlTWFwfVxuICAgICAgICAgICAgICAgICAgICAgIG9uRXhwb3J0RGF0YT17b25FeHBvcnREYXRhfVxuICAgICAgICAgICAgICAgICAgICAgIG9uRXhwb3J0SW1hZ2U9e29uRXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgb25FeHBvcnRDb25maWc9e29uRXhwb3J0Q29uZmlnfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TdHlsZWRQYW5lbFRvcEFjdGlvbnM+XG4gICAgICAgICAgPC9TdHlsZWRQYW5lbEhlYWRlclRvcD5cbiAgICAgICAgPC9TdHlsZWRQYW5lbEhlYWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhbmVsSGVhZGVyRmFjdG9yeTtcbiJdfQ==