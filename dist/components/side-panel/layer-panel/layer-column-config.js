'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _class, _temp;

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: space-between;\n'], ['\n  display: flex;\n  justify-content: space-between;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  margin-bottom: 8px;\n  align-items: center;\n'], ['\n  display: flex;\n  margin-bottom: 8px;\n  align-items: center;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  width: 30%;\n'], ['\n  width: 30%;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  width: 70%;\n'], ['\n  width: 70%;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: flex-end;\n  color: ', ';\n\n  :hover {\n    cursor: pointer;\n    color: ', ';\n  }\n'], ['\n  display: flex;\n  justify-content: flex-end;\n  color: ', ';\n\n  :hover {\n    cursor: pointer;\n    color: ', ';\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  margin-right: 4px;\n'], ['\n  margin-right: 4px;\n']); // Copyright (c) 2018 Uber Technologies, Inc.
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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultSettings = require('../../../constants/default-settings');

var _fieldSelector = require('../../common/field-selector');

var _fieldSelector2 = _interopRequireDefault(_fieldSelector);

var _icons = require('../../common/icons');

var _styledComponents3 = require('../../common/styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopRow = _styledComponents2.default.div(_templateObject);

var LayerColumnConfig = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(LayerColumnConfig, _Component);

  function LayerColumnConfig() {
    (0, _classCallCheck3.default)(this, LayerColumnConfig);
    return (0, _possibleConstructorReturn3.default)(this, (LayerColumnConfig.__proto__ || Object.getPrototypeOf(LayerColumnConfig)).apply(this, arguments));
  }

  (0, _createClass3.default)(LayerColumnConfig, [{
    key: '_updateColumn',
    value: function _updateColumn(key, value) {
      var layer = this.props.layer;


      var columns = value && value.pair && layer.columnPairs ? layer.assignColumnPairs(key, value.pair) : layer.assignColumn(key, value);

      this.props.updateLayerConfig({ columns: columns });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          layer = _props.layer,
          fields = _props.fields,
          fieldPairs = _props.fieldPairs;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _styledComponents3.SidePanelSection,
          null,
          _react2.default.createElement(
            'div',
            { className: 'layer-config__column' },
            _react2.default.createElement(
              TopRow,
              null,
              _react2.default.createElement(
                _styledComponents3.PanelLabel,
                null,
                'Columns'
              ),
              _react2.default.createElement(
                _styledComponents3.PanelLabel,
                null,
                '* Required'
              )
            ),
            Object.keys(layer.config.columns).map(function (key) {
              return _react2.default.createElement(ColumnSelector, {
                column: layer.config.columns[key],
                label: key,
                key: key,
                allFields: fields,
                fieldPairs: layer.columnPairs ? fieldPairs.map(function (fp) {
                  return {
                    name: fp.defaultName,
                    type: 'point',
                    pair: fp.pair
                  };
                }) : null,
                onSelect: function onSelect(val) {
                  return _this2._updateColumn(key, val);
                }
              });
            }),
            layer.type === _defaultSettings.LAYER_TYPES.icon && _react2.default.createElement(IconLayerInfo, { openModal: this.props.openModal })
          )
        )
      );
    }
  }]);
  return LayerColumnConfig;
}(_react.Component), _class.propTypes = {
  layer: _propTypes2.default.object.isRequired,
  fields: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
  updateLayerConfig: _propTypes2.default.func.isRequired,
  openModal: _propTypes2.default.func.isRequired,
  fieldPairs: _propTypes2.default.arrayOf(_propTypes2.default.any)
}, _temp);
exports.default = LayerColumnConfig;
;

var ColumnRow = _styledComponents2.default.div(_templateObject2);

var ColumnName = _styledComponents2.default.div(_templateObject3);
var ColumnSelect = _styledComponents2.default.div(_templateObject4);

var ColumnSelector = function ColumnSelector(_ref) {
  var column = _ref.column,
      label = _ref.label,
      allFields = _ref.allFields,
      onSelect = _ref.onSelect,
      fieldPairs = _ref.fieldPairs;
  return _react2.default.createElement(
    ColumnRow,
    { className: 'layer-config__column__selector' },
    _react2.default.createElement(
      ColumnName,
      { className: 'layer-config__column__name' },
      _react2.default.createElement(
        _styledComponents3.PanelLabel,
        null,
        label
      ),
      !column.optional ? _react2.default.createElement(
        _styledComponents3.PanelLabel,
        null,
        '  *'
      ) : null
    ),
    _react2.default.createElement(
      ColumnSelect,
      { className: 'layer-config__column__select' },
      _react2.default.createElement(_fieldSelector2.default, {
        suggested: fieldPairs,
        error: !column.optional && !column.value,
        fields: allFields,
        value: column.value,
        erasable: Boolean(column.optional),
        onSelect: onSelect
      })
    )
  );
};

var LayerInstruction = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHL;
});

var InfoIcon = _styledComponents2.default.div(_templateObject6);

var IconLayerInfo = function IconLayerInfo(_ref2) {
  var openModal = _ref2.openModal;
  return _react2.default.createElement(
    LayerInstruction,
    { className: 'layer-config__info',
      onClick: function onClick() {
        return openModal('iconInfo');
      } },
    _react2.default.createElement(
      InfoIcon,
      null,
      _react2.default.createElement(_icons.Docs, { height: '16px' })
    ),
    _react2.default.createElement(
      _styledComponents3.PanelLabel,
      null,
      'How to draw icon layer'
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29sdW1uLWNvbmZpZy5qcyJdLCJuYW1lcyI6WyJUb3BSb3ciLCJzdHlsZWQiLCJkaXYiLCJMYXllckNvbHVtbkNvbmZpZyIsImtleSIsInZhbHVlIiwibGF5ZXIiLCJwcm9wcyIsImNvbHVtbnMiLCJwYWlyIiwiY29sdW1uUGFpcnMiLCJhc3NpZ25Db2x1bW5QYWlycyIsImFzc2lnbkNvbHVtbiIsInVwZGF0ZUxheWVyQ29uZmlnIiwiZmllbGRzIiwiZmllbGRQYWlycyIsIk9iamVjdCIsImtleXMiLCJjb25maWciLCJtYXAiLCJuYW1lIiwiZnAiLCJkZWZhdWx0TmFtZSIsInR5cGUiLCJfdXBkYXRlQ29sdW1uIiwidmFsIiwiTEFZRVJfVFlQRVMiLCJpY29uIiwib3Blbk1vZGFsIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJhbnkiLCJmdW5jIiwiQ29sdW1uUm93IiwiQ29sdW1uTmFtZSIsIkNvbHVtblNlbGVjdCIsIkNvbHVtblNlbGVjdG9yIiwiY29sdW1uIiwibGFiZWwiLCJhbGxGaWVsZHMiLCJvblNlbGVjdCIsIm9wdGlvbmFsIiwiQm9vbGVhbiIsIkxheWVySW5zdHJ1Y3Rpb24iLCJ0aGVtZSIsInRleHRDb2xvciIsInRleHRDb2xvckhMIiwiSW5mb0ljb24iLCJJY29uTGF5ZXJJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lIQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFLQSxJQUFNQSxTQUFT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cHlyaWdodCAoYykgMjAxOCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQge0xBWUVSX1RZUEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQgRmllbGRTZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvcic7XG5pbXBvcnQge0RvY3N9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcblxuaW1wb3J0IHtcbiAgUGFuZWxMYWJlbCxcbiAgU2lkZVBhbmVsU2VjdGlvblxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFRvcFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyQ29sdW1uQ29uZmlnIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsYXllcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGZpZWxkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICB1cGRhdGVMYXllckNvbmZpZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvcGVuTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZmllbGRQYWlyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSlcbiAgfTtcblxuICBfdXBkYXRlQ29sdW1uKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCB7bGF5ZXJ9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNvbHVtbnMgPVxuICAgICAgdmFsdWUgJiYgdmFsdWUucGFpciAmJiBsYXllci5jb2x1bW5QYWlyc1xuICAgICAgICA/IGxheWVyLmFzc2lnbkNvbHVtblBhaXJzKGtleSwgdmFsdWUucGFpcilcbiAgICAgICAgOiBsYXllci5hc3NpZ25Db2x1bW4oa2V5LCB2YWx1ZSk7XG5cbiAgICB0aGlzLnByb3BzLnVwZGF0ZUxheWVyQ29uZmlnKHtjb2x1bW5zfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2xheWVyLCBmaWVsZHMsIGZpZWxkUGFpcnN9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXllci1jb25maWdfX2NvbHVtblwiPlxuICAgICAgICAgIDxUb3BSb3c+XG4gICAgICAgICAgICA8UGFuZWxMYWJlbD5Db2x1bW5zPC9QYW5lbExhYmVsPlxuICAgICAgICAgICAgPFBhbmVsTGFiZWw+KiBSZXF1aXJlZDwvUGFuZWxMYWJlbD5cbiAgICAgICAgICA8L1RvcFJvdz5cbiAgICAgICAgICB7T2JqZWN0LmtleXMobGF5ZXIuY29uZmlnLmNvbHVtbnMpLm1hcChrZXkgPT4gKFxuICAgICAgICAgICAgPENvbHVtblNlbGVjdG9yXG4gICAgICAgICAgICAgIGNvbHVtbj17bGF5ZXIuY29uZmlnLmNvbHVtbnNba2V5XX1cbiAgICAgICAgICAgICAgbGFiZWw9e2tleX1cbiAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgIGFsbEZpZWxkcz17ZmllbGRzfVxuICAgICAgICAgICAgICBmaWVsZFBhaXJzPXtcbiAgICAgICAgICAgICAgICBsYXllci5jb2x1bW5QYWlyc1xuICAgICAgICAgICAgICAgICAgPyBmaWVsZFBhaXJzLm1hcChmcCA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZwLmRlZmF1bHROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwb2ludCcsXG4gICAgICAgICAgICAgICAgICAgICAgcGFpcjogZnAucGFpclxuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt2YWwgPT4gdGhpcy5fdXBkYXRlQ29sdW1uKGtleSwgdmFsKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge2xheWVyLnR5cGUgPT09IExBWUVSX1RZUEVTLmljb24gJiYgKFxuICAgICAgICAgICAgPEljb25MYXllckluZm8gb3Blbk1vZGFsPXt0aGlzLnByb3BzLm9wZW5Nb2RhbH0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBDb2x1bW5Sb3cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBDb2x1bW5OYW1lID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDMwJTtcbmA7XG5jb25zdCBDb2x1bW5TZWxlY3QgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNzAlO1xuYDtcblxuY29uc3QgQ29sdW1uU2VsZWN0b3IgPSAoe2NvbHVtbiwgbGFiZWwsIGFsbEZpZWxkcywgb25TZWxlY3QsIGZpZWxkUGFpcnN9KSA9PiAoXG4gIDxDb2x1bW5Sb3cgY2xhc3NOYW1lPVwibGF5ZXItY29uZmlnX19jb2x1bW5fX3NlbGVjdG9yXCI+XG4gICAgPENvbHVtbk5hbWUgY2xhc3NOYW1lPVwibGF5ZXItY29uZmlnX19jb2x1bW5fX25hbWVcIj5cbiAgICAgIDxQYW5lbExhYmVsPntsYWJlbH08L1BhbmVsTGFiZWw+XG4gICAgICB7IWNvbHVtbi5vcHRpb25hbCA/IDxQYW5lbExhYmVsPntgICAqYH08L1BhbmVsTGFiZWw+IDogbnVsbH1cbiAgICA8L0NvbHVtbk5hbWU+XG4gICAgPENvbHVtblNlbGVjdCBjbGFzc05hbWU9XCJsYXllci1jb25maWdfX2NvbHVtbl9fc2VsZWN0XCI+XG4gICAgICA8RmllbGRTZWxlY3RvclxuICAgICAgICBzdWdnZXN0ZWQ9e2ZpZWxkUGFpcnN9XG4gICAgICAgIGVycm9yPXshY29sdW1uLm9wdGlvbmFsICYmICFjb2x1bW4udmFsdWV9XG4gICAgICAgIGZpZWxkcz17YWxsRmllbGRzfVxuICAgICAgICB2YWx1ZT17Y29sdW1uLnZhbHVlfVxuICAgICAgICBlcmFzYWJsZT17Qm9vbGVhbihjb2x1bW4ub3B0aW9uYWwpfVxuICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgICAvPlxuICAgIDwvQ29sdW1uU2VsZWN0PlxuICA8L0NvbHVtblJvdz5cbik7XG5cbmNvbnN0IExheWVySW5zdHJ1Y3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhMfTtcbiAgfVxuYDtcblxuY29uc3QgSW5mb0ljb24gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcbmA7XG5cbmNvbnN0IEljb25MYXllckluZm8gPSAoe29wZW5Nb2RhbH0pID0+IChcbiAgPExheWVySW5zdHJ1Y3Rpb24gY2xhc3NOYW1lPVwibGF5ZXItY29uZmlnX19pbmZvXCJcbiAgICBvbkNsaWNrPXsoKSA9PiBvcGVuTW9kYWwoJ2ljb25JbmZvJyl9PlxuICAgIDxJbmZvSWNvbj48RG9jcyBoZWlnaHQ9XCIxNnB4XCIvPjwvSW5mb0ljb24+XG4gICAgPFBhbmVsTGFiZWw+SG93IHRvIGRyYXcgaWNvbiBsYXllcjwvUGFuZWxMYWJlbD5cbiAgPC9MYXllckluc3RydWN0aW9uPlxuKTtcbiJdfQ==