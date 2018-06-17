'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AggregationTypeSelector = exports.AggrColorScaleSelector = exports.ChannelByValueSelector = exports.ColorRangeConfig = exports.ArcLayerColorSelector = exports.LayerColorSelector = exports.default = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: 12px;\n'], ['\n  margin-top: 12px;\n']); // Copyright (c) 2018 Uber Technologies, Inc.
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

var _styledComponents3 = require('../../common/styled-components');

var _itemSelector = require('../../common/item-selector/item-selector');

var _itemSelector2 = _interopRequireDefault(_itemSelector);

var _visConfigByFieldSelector = require('./vis-config-by-field-selector');

var _visConfigByFieldSelector2 = _interopRequireDefault(_visConfigByFieldSelector);

var _layerColumnConfig = require('./layer-column-config');

var _layerColumnConfig2 = _interopRequireDefault(_layerColumnConfig);

var _layerTypeSelector = require('./layer-type-selector');

var _layerTypeSelector2 = _interopRequireDefault(_layerTypeSelector);

var _dimensionScaleSelector = require('./dimension-scale-selector');

var _dimensionScaleSelector2 = _interopRequireDefault(_dimensionScaleSelector);

var _colorSelector = require('./color-selector');

var _colorSelector2 = _interopRequireDefault(_colorSelector);

var _sourceDataSelector = require('../source-data-selector');

var _sourceDataSelector2 = _interopRequireDefault(_sourceDataSelector);

var _visConfigSwitch = require('./vis-config-switch');

var _visConfigSwitch2 = _interopRequireDefault(_visConfigSwitch);

var _visConfigSlider = require('./vis-config-slider');

var _visConfigSlider2 = _interopRequireDefault(_visConfigSlider);

var _layerConfigGroup = require('./layer-config-group');

var _layerConfigGroup2 = _interopRequireDefault(_layerConfigGroup);

var _layerFactory = require('../../../layers/layer-factory');

var _utils = require('../../../utils/utils');

var _defaultSettings = require('../../../constants/default-settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledLayerConfigurator = _styledComponents2.default.div.attrs({
  className: 'layer-panel__config'
})(_templateObject);

var StyledLayerVisualConfigurator = _styledComponents2.default.div.attrs({
  className: 'layer-panel__config__visualC-config'
})(_templateObject);

var LayerConfigurator = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(LayerConfigurator, _Component);

  function LayerConfigurator() {
    (0, _classCallCheck3.default)(this, LayerConfigurator);
    return (0, _possibleConstructorReturn3.default)(this, (LayerConfigurator.__proto__ || Object.getPrototypeOf(LayerConfigurator)).apply(this, arguments));
  }

  (0, _createClass3.default)(LayerConfigurator, [{
    key: '_renderPointLayerConfig',
    value: function _renderPointLayerConfig(props) {
      return this._renderScatterplotLayerConfig(props);
    }
  }, {
    key: '_renderIconLayerConfig',
    value: function _renderIconLayerConfig(props) {
      return this._renderScatterplotLayerConfig(props);
    }
  }, {
    key: '_renderScatterplotLayerConfig',
    value: function _renderScatterplotLayerConfig(_ref) {
      var layer = _ref.layer,
          visConfiguratorProps = _ref.visConfiguratorProps,
          layerChannelConfigProps = _ref.layerChannelConfigProps,
          layerConfiguratorProps = _ref.layerConfiguratorProps;

      return _react2.default.createElement(
        StyledLayerVisualConfigurator,
        null,
        _react2.default.createElement(
          _layerConfigGroup2.default,
          { label: 'color' },
          layer.config.colorField ? _react2.default.createElement(ColorRangeConfig, visConfiguratorProps) : _react2.default.createElement(LayerColorSelector, layerConfiguratorProps),
          _react2.default.createElement(ChannelByValueSelector, (0, _extends4.default)({
            channel: layer.visualChannels.color
          }, layerChannelConfigProps)),
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.opacity, visConfiguratorProps))
        ),
        _react2.default.createElement(
          _layerConfigGroup2.default,
          { label: 'radius' },
          !layer.config.sizeField ? _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.radius, visConfiguratorProps, {
            label: false,
            disabled: Boolean(layer.config.sizeField)
          })) : _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.radiusRange, visConfiguratorProps, {
            disabled: !layer.config.sizeField || layer.config.visConfig.fixedRadius
          })),
          _react2.default.createElement(ChannelByValueSelector, (0, _extends4.default)({
            channel: layer.visualChannels.size
          }, layerChannelConfigProps)),
          layer.config.sizeField ? _react2.default.createElement(_visConfigSwitch2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.fixedRadius, visConfiguratorProps, {
            disabled: !layer.config.sizeField
          })) : null
        ),
        layer.type === _defaultSettings.LAYER_TYPES.point ? _react2.default.createElement(
          _layerConfigGroup2.default,
          (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.outline, visConfiguratorProps),
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.thickness, visConfiguratorProps, {
            label: false,
            disabled: !layer.config.visConfig.outline
          }))
        ) : null,
        _react2.default.createElement(_layerConfigGroup2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS['hi-precision'], visConfiguratorProps))
      );
    }
  }, {
    key: '_renderClusterLayerConfig',
    value: function _renderClusterLayerConfig(_ref2) {
      var layer = _ref2.layer,
          visConfiguratorProps = _ref2.visConfiguratorProps,
          layerConfiguratorProps = _ref2.layerConfiguratorProps,
          layerChannelConfigProps = _ref2.layerChannelConfigProps;

      return _react2.default.createElement(
        StyledLayerVisualConfigurator,
        null,
        _react2.default.createElement(
          _layerConfigGroup2.default,
          { label: 'color' },
          _react2.default.createElement(ColorRangeConfig, visConfiguratorProps),
          _react2.default.createElement(AggrColorScaleSelector, layerConfiguratorProps),
          _react2.default.createElement(ChannelByValueSelector, (0, _extends4.default)({
            channel: layer.visualChannels.color
          }, layerChannelConfigProps)),
          layer.visConfigSettings.colorAggregation.condition(layer.config) ? _react2.default.createElement(AggregationTypeSelector, (0, _extends4.default)({}, layer.visConfigSettings.colorAggregation, layerChannelConfigProps, {
            channel: layer.visualChannels.color
          })) : null,
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, layer.visConfigSettings.opacity, visConfiguratorProps))
        ),
        _react2.default.createElement(
          _layerConfigGroup2.default,
          { label: 'radius' },
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, layer.visConfigSettings.clusterRadius, visConfiguratorProps)),
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, layer.visConfigSettings.radiusRange, visConfiguratorProps))
        )
      );
    }
  }, {
    key: '_renderHeatmapLayerConfig',
    value: function _renderHeatmapLayerConfig(_ref3) {
      var layer = _ref3.layer,
          visConfiguratorProps = _ref3.visConfiguratorProps,
          layerConfiguratorProps = _ref3.layerConfiguratorProps,
          layerChannelConfigProps = _ref3.layerChannelConfigProps;

      return _react2.default.createElement(
        StyledLayerVisualConfigurator,
        null,
        _react2.default.createElement(
          _layerConfigGroup2.default,
          { label: 'color' },
          _react2.default.createElement(ColorRangeConfig, visConfiguratorProps),
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, layer.visConfigSettings.opacity, visConfiguratorProps))
        ),
        _react2.default.createElement(
          _layerConfigGroup2.default,
          { label: 'radius' },
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, layer.visConfigSettings.radius, visConfiguratorProps, {
            label: false
          }))
        ),
        _react2.default.createElement(
          _layerConfigGroup2.default,
          { label: 'weight' },
          _react2.default.createElement(ChannelByValueSelector, (0, _extends4.default)({
            channel: layer.visualChannels.weight
          }, layerChannelConfigProps))
        )
      );
    }
  }, {
    key: '_renderGridLayerConfig',
    value: function _renderGridLayerConfig(props) {
      return this._renderAggregationLayerConfig(props);
    }
  }, {
    key: '_renderHexagonLayerConfig',
    value: function _renderHexagonLayerConfig(props) {
      return this._renderAggregationLayerConfig(props);
    }
  }, {
    key: '_renderAggregationLayerConfig',
    value: function _renderAggregationLayerConfig(_ref4) {
      var layer = _ref4.layer,
          visConfiguratorProps = _ref4.visConfiguratorProps,
          layerConfiguratorProps = _ref4.layerConfiguratorProps,
          layerChannelConfigProps = _ref4.layerChannelConfigProps;
      var config = layer.config;
      var enable3d = config.visConfig.enable3d;

      var elevationByDescription = 'When off, height is based on count of points';
      var colorByDescription = 'When off, color is based on count of points';

      return _react2.default.createElement(
        StyledLayerVisualConfigurator,
        null,
        _react2.default.createElement(
          _layerConfigGroup2.default,
          { label: 'color' },
          _react2.default.createElement(ColorRangeConfig, visConfiguratorProps),
          _react2.default.createElement(AggrColorScaleSelector, layerConfiguratorProps),
          _react2.default.createElement(ChannelByValueSelector, (0, _extends4.default)({
            channel: layer.visualChannels.color
          }, layerChannelConfigProps)),
          layer.visConfigSettings.colorAggregation.condition(layer.config) ? _react2.default.createElement(AggregationTypeSelector, (0, _extends4.default)({}, layer.visConfigSettings.colorAggregation, layerChannelConfigProps, {
            descreiption: colorByDescription,
            channel: layer.visualChannels.color
          })) : null,
          layer.visConfigSettings.percentile && layer.visConfigSettings.percentile.condition(layer.config) ? _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, layer.visConfigSettings.percentile, visConfiguratorProps)) : null,
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, layer.visConfigSettings.opacity, visConfiguratorProps))
        ),
        _react2.default.createElement(
          _layerConfigGroup2.default,
          { label: 'radius' },
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, layer.visConfigSettings.worldUnitSize, visConfiguratorProps)),
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, layer.visConfigSettings.coverage, visConfiguratorProps))
        ),
        layer.visConfigSettings.enable3d ? _react2.default.createElement(
          _layerConfigGroup2.default,
          (0, _extends4.default)({}, layer.visConfigSettings.enable3d, visConfiguratorProps),
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, layer.visConfigSettings.elevationScale, visConfiguratorProps)),
          _react2.default.createElement(ChannelByValueSelector, (0, _extends4.default)({}, layerChannelConfigProps, {
            channel: layer.visualChannels.size,
            description: elevationByDescription,
            disabled: !enable3d
          })),
          layer.visConfigSettings.sizeAggregation.condition(layer.config) ? _react2.default.createElement(AggregationTypeSelector, (0, _extends4.default)({}, layer.visConfigSettings.sizeAggregation, layerChannelConfigProps, {
            channel: layer.visualChannels.size
          })) : null,
          layer.visConfigSettings.elevationPercentile.condition(layer.config) ? _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, layer.visConfigSettings.elevationPercentile, visConfiguratorProps)) : null
        ) : null,
        _react2.default.createElement(_layerConfigGroup2.default, (0, _extends4.default)({}, layer.visConfigSettings['hi-precision'], visConfiguratorProps))
      );
    }

    // TODO: Shan move these into layer class

  }, {
    key: '_renderHexagonIdLayerConfig',
    value: function _renderHexagonIdLayerConfig(_ref5) {
      var layer = _ref5.layer,
          visConfiguratorProps = _ref5.visConfiguratorProps,
          layerConfiguratorProps = _ref5.layerConfiguratorProps,
          layerChannelConfigProps = _ref5.layerChannelConfigProps;

      return _react2.default.createElement(
        StyledLayerVisualConfigurator,
        null,
        _react2.default.createElement(
          _layerConfigGroup2.default,
          { label: 'color' },
          layer.config.colorField ? _react2.default.createElement(ColorRangeConfig, visConfiguratorProps) : _react2.default.createElement(LayerColorSelector, layerConfiguratorProps),
          _react2.default.createElement(ChannelByValueSelector, (0, _extends4.default)({
            channel: layer.visualChannels.color
          }, layerChannelConfigProps)),
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.opacity, visConfiguratorProps))
        ),
        _react2.default.createElement(
          _layerConfigGroup2.default,
          (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.enable3d, visConfiguratorProps),
          _react2.default.createElement(ChannelByValueSelector, (0, _extends4.default)({
            channel: layer.visualChannels.size
          }, layerChannelConfigProps)),
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.elevationRange, visConfiguratorProps))
        ),
        _react2.default.createElement(_layerConfigGroup2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS['hi-precision'], visConfiguratorProps))
      );
    }
  }, {
    key: '_renderArcLayerConfig',
    value: function _renderArcLayerConfig(args) {
      return this._renderLineLayerConfig(args);
    }
  }, {
    key: '_renderLineLayerConfig',
    value: function _renderLineLayerConfig(_ref6) {
      var layer = _ref6.layer,
          visConfiguratorProps = _ref6.visConfiguratorProps,
          layerConfiguratorProps = _ref6.layerConfiguratorProps,
          layerChannelConfigProps = _ref6.layerChannelConfigProps;

      return _react2.default.createElement(
        StyledLayerVisualConfigurator,
        null,
        _react2.default.createElement(
          _layerConfigGroup2.default,
          { label: 'color' },
          layer.config.colorField ? _react2.default.createElement(ColorRangeConfig, visConfiguratorProps) : _react2.default.createElement(ArcLayerColorSelector, {
            layer: layer,
            onChangeConfig: layerConfiguratorProps.onChange,
            onChangeVisConfig: visConfiguratorProps.onChange
          }),
          _react2.default.createElement(ChannelByValueSelector, (0, _extends4.default)({
            channel: layer.visualChannels.color
          }, layerChannelConfigProps)),
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.opacity, visConfiguratorProps))
        ),
        _react2.default.createElement(
          _layerConfigGroup2.default,
          { label: 'stroke' },
          layer.config.sizeField ? _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.strokeWidthRange, visConfiguratorProps, {
            disabled: !layer.config.sizeField
          })) : _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.thickness, visConfiguratorProps)),
          _react2.default.createElement(ChannelByValueSelector, (0, _extends4.default)({
            channel: layer.visualChannels.size
          }, layerChannelConfigProps))
        ),
        _react2.default.createElement(_layerConfigGroup2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS['hi-precision'], visConfiguratorProps))
      );
    }
  }, {
    key: '_renderGeojsonLayerConfig',
    value: function _renderGeojsonLayerConfig(_ref7) {
      var layer = _ref7.layer,
          visConfiguratorProps = _ref7.visConfiguratorProps,
          layerConfiguratorProps = _ref7.layerConfiguratorProps,
          layerChannelConfigProps = _ref7.layerChannelConfigProps;
      var _layer$meta$featureTy = layer.meta.featureTypes,
          featureTypes = _layer$meta$featureTy === undefined ? {} : _layer$meta$featureTy,
          visConfig = layer.config.visConfig;


      return _react2.default.createElement(
        StyledLayerVisualConfigurator,
        null,
        _react2.default.createElement(
          _layerConfigGroup2.default,
          { label: 'color' },
          featureTypes.polygon ? _react2.default.createElement(_visConfigSwitch2.default, (0, _extends4.default)({}, visConfiguratorProps, _layerFactory.LAYER_VIS_CONFIGS.filled)) : null,
          layer.config.colorField ? _react2.default.createElement(ColorRangeConfig, visConfiguratorProps) : _react2.default.createElement(LayerColorSelector, layerConfiguratorProps),
          _react2.default.createElement(ChannelByValueSelector, (0, _extends4.default)({
            channel: layer.visualChannels.color
          }, layerChannelConfigProps)),
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.opacity, visConfiguratorProps))
        ),
        featureTypes.line || featureTypes.polygon && visConfig.stroked ? _react2.default.createElement(
          _layerConfigGroup2.default,
          (0, _extends4.default)({
            label: 'stroke'
          }, visConfiguratorProps, featureTypes.polygon ? _layerFactory.LAYER_VIS_CONFIGS.stroked : {}),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.thickness, visConfiguratorProps)),
            _react2.default.createElement(ChannelByValueSelector, (0, _extends4.default)({
              channel: layer.visualChannels.size
            }, layerChannelConfigProps)),
            _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.strokeWidthRange, visConfiguratorProps, {
              disabled: !layer.config.sizeField
            }))
          )
        ) : null,
        featureTypes.polygon && visConfig.filled ? _react2.default.createElement(
          _layerConfigGroup2.default,
          (0, _extends4.default)({}, visConfiguratorProps, _layerFactory.LAYER_VIS_CONFIGS.enable3d),
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.elevationScale, visConfiguratorProps)),
          _react2.default.createElement(ChannelByValueSelector, (0, _extends4.default)({
            channel: layer.visualChannels.height
          }, layerChannelConfigProps)),
          _react2.default.createElement(_visConfigSwitch2.default, (0, _extends4.default)({}, visConfiguratorProps, _layerFactory.LAYER_VIS_CONFIGS.wireframe))
        ) : null,
        featureTypes.point ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.radius, visConfiguratorProps, {
            label: 'Point Radius',
            disabled: Boolean(layer.config.radiusField)
          })),
          _react2.default.createElement(ChannelByValueSelector, (0, _extends4.default)({
            channel: layer.visualChannels.radius
          }, layerChannelConfigProps)),
          _react2.default.createElement(_visConfigSlider2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS.radiusRange, visConfiguratorProps, {
            disabled: !layer.config.radiusField
          }))
        ) : null,
        _react2.default.createElement(_layerConfigGroup2.default, (0, _extends4.default)({}, _layerFactory.LAYER_VIS_CONFIGS['hi-precision'], visConfiguratorProps))
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          layer = _props.layer,
          datasets = _props.datasets,
          updateLayerConfig = _props.updateLayerConfig,
          layerTypeOptions = _props.layerTypeOptions,
          updateLayerType = _props.updateLayerType;

      var _ref8 = layer.config.dataId ? datasets[layer.config.dataId] : {},
          _ref8$fields = _ref8.fields,
          fields = _ref8$fields === undefined ? [] : _ref8$fields,
          fieldPairs = _ref8.fieldPairs;

      var config = layer.config;


      var commonConfigProp = {
        layer: layer,
        fields: fields
      };

      var visConfiguratorProps = (0, _extends4.default)({}, commonConfigProp, {
        onChange: this.props.updateLayerVisConfig
      });

      var layerConfiguratorProps = (0, _extends4.default)({}, commonConfigProp, {
        onChange: updateLayerConfig
      });

      var layerChannelConfigProps = (0, _extends4.default)({}, commonConfigProp, {
        onChange: this.props.updateLayerVisualChannelConfig
      });

      var renderTemplate = layer.type && '_render' + (0, _utils.capitalizeFirstLetter)(layer.type) + 'LayerConfig';

      return _react2.default.createElement(
        StyledLayerConfigurator,
        null,
        _react2.default.createElement(
          _layerConfigGroup2.default,
          { label: 'basic' },
          Object.keys(datasets).length > 1 && _react2.default.createElement(_sourceDataSelector2.default, {
            datasets: datasets,
            id: layer.id,
            disabled: layer.tyep && config.columns,
            dataId: config.dataId,
            onSelect: function onSelect(value) {
              return updateLayerConfig({ dataId: value });
            }
          }),
          _react2.default.createElement(_layerTypeSelector2.default, {
            layer: layer,
            layerTypeOptions: layerTypeOptions,
            onSelect: updateLayerType
          }),
          _react2.default.createElement(_layerColumnConfig2.default, {
            layer: layer,
            fields: fields,
            fieldPairs: fieldPairs,
            updateLayerConfig: updateLayerConfig,
            updateLayerType: this.props.updateLayerType,
            openModal: this.props.openModal
          })
        ),
        this[renderTemplate] && this[renderTemplate]({
          layer: layer,
          visConfiguratorProps: visConfiguratorProps,
          layerChannelConfigProps: layerChannelConfigProps,
          layerConfiguratorProps: layerConfiguratorProps
        })
      );
    }
  }]);
  return LayerConfigurator;
}(_react.Component), _class.propTypes = {
  layer: _propTypes2.default.object.isRequired,
  datasets: _propTypes2.default.object.isRequired,
  layerTypeOptions: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
  openModal: _propTypes2.default.func.isRequired,
  updateLayerConfig: _propTypes2.default.func.isRequired,
  updateLayerType: _propTypes2.default.func.isRequired,
  updateLayerVisConfig: _propTypes2.default.func.isRequired,
  updateLayerVisualChannelConfig: _propTypes2.default.func.isRequired
}, _temp);

/*
 * Componentize config component into pure functional components
 */

exports.default = LayerConfigurator;
var LayerColorSelector = exports.LayerColorSelector = function LayerColorSelector(_ref9) {
  var layer = _ref9.layer,
      onChange = _ref9.onChange,
      label = _ref9.label;
  return _react2.default.createElement(
    _styledComponents3.SidePanelSection,
    { disabled: layer.config.colorField },
    _react2.default.createElement(_colorSelector2.default, {
      colorSets: [{
        selectedColor: layer.config.color,
        setColor: function setColor(rgbValue) {
          return onChange({ color: rgbValue });
        }
      }]
    })
  );
};

var ArcLayerColorSelector = exports.ArcLayerColorSelector = function ArcLayerColorSelector(_ref10) {
  var layer = _ref10.layer,
      onChangeConfig = _ref10.onChangeConfig,
      onChangeVisConfig = _ref10.onChangeVisConfig;
  return _react2.default.createElement(
    _styledComponents3.SidePanelSection,
    null,
    _react2.default.createElement(_colorSelector2.default, {
      colorSets: [{
        selectedColor: layer.config.color,
        setColor: function setColor(rgbValue) {
          return onChangeConfig({ color: rgbValue });
        },
        label: 'Source'
      }, {
        selectedColor: layer.config.visConfig.targetColor || layer.config.color,
        setColor: function setColor(rgbValue) {
          return onChangeVisConfig({ targetColor: rgbValue });
        },
        label: 'Target'
      }]
    })
  );
};

var ColorRangeConfig = exports.ColorRangeConfig = function ColorRangeConfig(_ref11) {
  var layer = _ref11.layer,
      onChange = _ref11.onChange;
  return _react2.default.createElement(
    _styledComponents3.SidePanelSection,
    null,
    _react2.default.createElement(_colorSelector2.default, {
      colorSets: [{
        selectedColor: layer.config.visConfig.colorRange,
        isRange: true,
        setColor: function setColor(colorRange) {
          return onChange({ colorRange: colorRange });
        }
      }]
    })
  );
};

var ChannelByValueSelector = exports.ChannelByValueSelector = function ChannelByValueSelector(_ref12) {
  var layer = _ref12.layer,
      channel = _ref12.channel,
      onChange = _ref12.onChange,
      fields = _ref12.fields,
      description = _ref12.description;
  var channelScaleType = channel.channelScaleType,
      domain = channel.domain,
      field = channel.field,
      key = channel.key,
      property = channel.property,
      range = channel.range,
      scale = channel.scale,
      defaultMeasure = channel.defaultMeasure,
      supportedFieldTypes = channel.supportedFieldTypes;

  var channelSupportedFieldTypes = supportedFieldTypes || _defaultSettings.CHANNEL_SCALE_SUPPORTED_FIELDS[channelScaleType];
  var supportedFields = fields.filter(function (_ref13) {
    var type = _ref13.type;
    return channelSupportedFieldTypes.includes(type);
  });
  var scaleOptions = layer.getScaleOptions(channel.key);
  var showScale = !layer.isAggregated && layer.config[scale] && scaleOptions.length > 1;
  var defaultDescription = 'Calculate ' + property + ' based on selected field';

  return _react2.default.createElement(_visConfigByFieldSelector2.default, {
    channel: channel.key,
    description: description || defaultDescription,
    domain: layer.config[domain],
    fields: supportedFields,
    id: layer.id,
    key: key + '-channel-selector',
    property: property,
    placeholder: defaultMeasure || 'Select a field',
    range: layer.config.visConfig[range],
    scaleOptions: scaleOptions,
    scaleType: scale ? layer.config[scale] : null,
    selectedField: layer.config[field],
    showScale: showScale,
    updateField: function updateField(val) {
      return onChange((0, _defineProperty3.default)({}, field, val), key);
    },
    updateScale: function updateScale(val) {
      return onChange((0, _defineProperty3.default)({}, scale, val), key);
    }
  });
};

var AggrColorScaleSelector = exports.AggrColorScaleSelector = function AggrColorScaleSelector(_ref14) {
  var layer = _ref14.layer,
      onChange = _ref14.onChange;

  var scaleOptions = layer.getScaleOptions('color');
  return Array.isArray(scaleOptions) && scaleOptions.length > 1 ? _react2.default.createElement(_dimensionScaleSelector2.default, {
    label: 'Color Scale',
    options: scaleOptions,
    scaleType: layer.config.colorScale,
    onSelect: function onSelect(val) {
      return onChange({ colorScale: val }, 'color');
    }
  }) : null;
};

var AggregationTypeSelector = exports.AggregationTypeSelector = function AggregationTypeSelector(_ref15) {
  var layer = _ref15.layer,
      channel = _ref15.channel,
      _onChange3 = _ref15.onChange;
  var field = channel.field,
      aggregation = channel.aggregation,
      key = channel.key;

  var selectedField = layer.config[field];
  var visConfig = layer.config.visConfig;

  // aggregation should only be selectable when field is selected

  var aggregationOptions = layer.getAggregationOptions(key);

  return _react2.default.createElement(
    _styledComponents3.SidePanelSection,
    null,
    _react2.default.createElement(
      _styledComponents3.PanelLabel,
      null,
      'Aggregate ' + selectedField.name + ' by'
    ),
    _react2.default.createElement(_itemSelector2.default, {
      selectedItems: visConfig[aggregation],
      options: aggregationOptions,
      multiSelect: false,
      searchable: false,
      onChange: function onChange(value) {
        return _onChange3({
          visConfig: (0, _extends4.default)({}, layer.config.visConfig, (0, _defineProperty3.default)({}, aggregation, value))
        }, channel.key);
      }
    })
  );
};
/* eslint-enable max-params */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29uZmlndXJhdG9yLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyQ29uZmlndXJhdG9yIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvciIsIkxheWVyQ29uZmlndXJhdG9yIiwicHJvcHMiLCJfcmVuZGVyU2NhdHRlcnBsb3RMYXllckNvbmZpZyIsImxheWVyIiwidmlzQ29uZmlndXJhdG9yUHJvcHMiLCJsYXllckNoYW5uZWxDb25maWdQcm9wcyIsImxheWVyQ29uZmlndXJhdG9yUHJvcHMiLCJjb25maWciLCJjb2xvckZpZWxkIiwidmlzdWFsQ2hhbm5lbHMiLCJjb2xvciIsIkxBWUVSX1ZJU19DT05GSUdTIiwib3BhY2l0eSIsInNpemVGaWVsZCIsInJhZGl1cyIsIkJvb2xlYW4iLCJyYWRpdXNSYW5nZSIsInZpc0NvbmZpZyIsImZpeGVkUmFkaXVzIiwic2l6ZSIsInR5cGUiLCJMQVlFUl9UWVBFUyIsInBvaW50Iiwib3V0bGluZSIsInRoaWNrbmVzcyIsInZpc0NvbmZpZ1NldHRpbmdzIiwiY29sb3JBZ2dyZWdhdGlvbiIsImNvbmRpdGlvbiIsImNsdXN0ZXJSYWRpdXMiLCJ3ZWlnaHQiLCJfcmVuZGVyQWdncmVnYXRpb25MYXllckNvbmZpZyIsImVuYWJsZTNkIiwiZWxldmF0aW9uQnlEZXNjcmlwdGlvbiIsImNvbG9yQnlEZXNjcmlwdGlvbiIsInBlcmNlbnRpbGUiLCJ3b3JsZFVuaXRTaXplIiwiY292ZXJhZ2UiLCJlbGV2YXRpb25TY2FsZSIsInNpemVBZ2dyZWdhdGlvbiIsImVsZXZhdGlvblBlcmNlbnRpbGUiLCJlbGV2YXRpb25SYW5nZSIsImFyZ3MiLCJfcmVuZGVyTGluZUxheWVyQ29uZmlnIiwib25DaGFuZ2UiLCJzdHJva2VXaWR0aFJhbmdlIiwibWV0YSIsImZlYXR1cmVUeXBlcyIsInBvbHlnb24iLCJmaWxsZWQiLCJsaW5lIiwic3Ryb2tlZCIsImhlaWdodCIsIndpcmVmcmFtZSIsInJhZGl1c0ZpZWxkIiwiZGF0YXNldHMiLCJ1cGRhdGVMYXllckNvbmZpZyIsImxheWVyVHlwZU9wdGlvbnMiLCJ1cGRhdGVMYXllclR5cGUiLCJkYXRhSWQiLCJmaWVsZHMiLCJmaWVsZFBhaXJzIiwiY29tbW9uQ29uZmlnUHJvcCIsInVwZGF0ZUxheWVyVmlzQ29uZmlnIiwidXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnIiwicmVuZGVyVGVtcGxhdGUiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiaWQiLCJ0eWVwIiwiY29sdW1ucyIsInZhbHVlIiwib3Blbk1vZGFsIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJhbnkiLCJmdW5jIiwiTGF5ZXJDb2xvclNlbGVjdG9yIiwibGFiZWwiLCJzZWxlY3RlZENvbG9yIiwic2V0Q29sb3IiLCJyZ2JWYWx1ZSIsIkFyY0xheWVyQ29sb3JTZWxlY3RvciIsIm9uQ2hhbmdlQ29uZmlnIiwib25DaGFuZ2VWaXNDb25maWciLCJ0YXJnZXRDb2xvciIsIkNvbG9yUmFuZ2VDb25maWciLCJjb2xvclJhbmdlIiwiaXNSYW5nZSIsIkNoYW5uZWxCeVZhbHVlU2VsZWN0b3IiLCJjaGFubmVsIiwiZGVzY3JpcHRpb24iLCJjaGFubmVsU2NhbGVUeXBlIiwiZG9tYWluIiwiZmllbGQiLCJrZXkiLCJwcm9wZXJ0eSIsInJhbmdlIiwic2NhbGUiLCJkZWZhdWx0TWVhc3VyZSIsInN1cHBvcnRlZEZpZWxkVHlwZXMiLCJjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcyIsIkNIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEUyIsInN1cHBvcnRlZEZpZWxkcyIsImZpbHRlciIsImluY2x1ZGVzIiwic2NhbGVPcHRpb25zIiwiZ2V0U2NhbGVPcHRpb25zIiwic2hvd1NjYWxlIiwiaXNBZ2dyZWdhdGVkIiwiZGVmYXVsdERlc2NyaXB0aW9uIiwidmFsIiwiQWdnckNvbG9yU2NhbGVTZWxlY3RvciIsIkFycmF5IiwiaXNBcnJheSIsImNvbG9yU2NhbGUiLCJBZ2dyZWdhdGlvblR5cGVTZWxlY3RvciIsImFnZ3JlZ2F0aW9uIiwic2VsZWN0ZWRGaWVsZCIsImFnZ3JlZ2F0aW9uT3B0aW9ucyIsImdldEFnZ3JlZ2F0aW9uT3B0aW9ucyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0hBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBSUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUtBLElBQU1BLDBCQUEwQkMsMkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUMvQ0MsYUFBVztBQURvQyxDQUFqQixDQUExQixpQkFBTjs7QUFNQSxJQUFNQyxnQ0FBZ0NKLDJCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDckRDLGFBQVc7QUFEMEMsQ0FBakIsQ0FBaEMsaUJBQU47O0lBTXFCRSxpQjs7Ozs7Ozs7Ozs0Q0FZS0MsSyxFQUFPO0FBQzdCLGFBQU8sS0FBS0MsNkJBQUwsQ0FBbUNELEtBQW5DLENBQVA7QUFDRDs7OzJDQUVzQkEsSyxFQUFPO0FBQzVCLGFBQU8sS0FBS0MsNkJBQUwsQ0FBbUNELEtBQW5DLENBQVA7QUFDRDs7O3dEQU9FO0FBQUEsVUFKREUsS0FJQyxRQUpEQSxLQUlDO0FBQUEsVUFIREMsb0JBR0MsUUFIREEsb0JBR0M7QUFBQSxVQUZEQyx1QkFFQyxRQUZEQSx1QkFFQztBQUFBLFVBRERDLHNCQUNDLFFBRERBLHNCQUNDOztBQUNELGFBQ0U7QUFBQyxxQ0FBRDtBQUFBO0FBRUU7QUFBQyxvQ0FBRDtBQUFBLFlBQWtCLE9BQU8sT0FBekI7QUFDR0gsZ0JBQU1JLE1BQU4sQ0FBYUMsVUFBYixHQUNDLDhCQUFDLGdCQUFELEVBQXNCSixvQkFBdEIsQ0FERCxHQUdDLDhCQUFDLGtCQUFELEVBQXdCRSxzQkFBeEIsQ0FKSjtBQU1FLHdDQUFDLHNCQUFEO0FBQ0UscUJBQVNILE1BQU1NLGNBQU4sQ0FBcUJDO0FBRGhDLGFBRU1MLHVCQUZOLEVBTkY7QUFVRSx3Q0FBQyx5QkFBRCw2QkFDTU0sZ0NBQWtCQyxPQUR4QixFQUVNUixvQkFGTjtBQVZGLFNBRkY7QUFtQkU7QUFBQyxvQ0FBRDtBQUFBLFlBQWtCLE9BQU8sUUFBekI7QUFDRyxXQUFDRCxNQUFNSSxNQUFOLENBQWFNLFNBQWQsR0FDQyw4QkFBQyx5QkFBRCw2QkFDTUYsZ0NBQWtCRyxNQUR4QixFQUVNVixvQkFGTjtBQUdFLG1CQUFPLEtBSFQ7QUFJRSxzQkFBVVcsUUFBUVosTUFBTUksTUFBTixDQUFhTSxTQUFyQjtBQUpaLGFBREQsR0FRQyw4QkFBQyx5QkFBRCw2QkFDTUYsZ0NBQWtCSyxXQUR4QixFQUVNWixvQkFGTjtBQUdFLHNCQUNFLENBQUNELE1BQU1JLE1BQU4sQ0FBYU0sU0FBZCxJQUEyQlYsTUFBTUksTUFBTixDQUFhVSxTQUFiLENBQXVCQztBQUp0RCxhQVRKO0FBaUJFLHdDQUFDLHNCQUFEO0FBQ0UscUJBQVNmLE1BQU1NLGNBQU4sQ0FBcUJVO0FBRGhDLGFBRU1kLHVCQUZOLEVBakJGO0FBcUJHRixnQkFBTUksTUFBTixDQUFhTSxTQUFiLEdBQ0MsOEJBQUMseUJBQUQsNkJBQ01GLGdDQUFrQk8sV0FEeEIsRUFFTWQsb0JBRk47QUFHRSxzQkFBVSxDQUFDRCxNQUFNSSxNQUFOLENBQWFNO0FBSDFCLGFBREQsR0FNRztBQTNCTixTQW5CRjtBQWtER1YsY0FBTWlCLElBQU4sS0FBZUMsNkJBQVlDLEtBQTNCLEdBQ0M7QUFBQyxvQ0FBRDtBQUFBLHFDQUNNWCxnQ0FBa0JZLE9BRHhCLEVBRU1uQixvQkFGTjtBQUlFLHdDQUFDLHlCQUFELDZCQUNNTyxnQ0FBa0JhLFNBRHhCLEVBRU1wQixvQkFGTjtBQUdFLG1CQUFPLEtBSFQ7QUFJRSxzQkFBVSxDQUFDRCxNQUFNSSxNQUFOLENBQWFVLFNBQWIsQ0FBdUJNO0FBSnBDO0FBSkYsU0FERCxHQVlHLElBOUROO0FBZ0VFLHNDQUFDLDBCQUFELDZCQUNNWixnQ0FBa0IsY0FBbEIsQ0FETixFQUVNUCxvQkFGTjtBQWhFRixPQURGO0FBdUVEOzs7cURBT0U7QUFBQSxVQUpERCxLQUlDLFNBSkRBLEtBSUM7QUFBQSxVQUhEQyxvQkFHQyxTQUhEQSxvQkFHQztBQUFBLFVBRkRFLHNCQUVDLFNBRkRBLHNCQUVDO0FBQUEsVUFEREQsdUJBQ0MsU0FEREEsdUJBQ0M7O0FBQ0QsYUFDRTtBQUFDLHFDQUFEO0FBQUE7QUFFRTtBQUFDLG9DQUFEO0FBQUEsWUFBa0IsT0FBTyxPQUF6QjtBQUNFLHdDQUFDLGdCQUFELEVBQXNCRCxvQkFBdEIsQ0FERjtBQUVFLHdDQUFDLHNCQUFELEVBQTRCRSxzQkFBNUIsQ0FGRjtBQUdFLHdDQUFDLHNCQUFEO0FBQ0UscUJBQVNILE1BQU1NLGNBQU4sQ0FBcUJDO0FBRGhDLGFBRU1MLHVCQUZOLEVBSEY7QUFPR0YsZ0JBQU1zQixpQkFBTixDQUF3QkMsZ0JBQXhCLENBQXlDQyxTQUF6QyxDQUFtRHhCLE1BQU1JLE1BQXpELElBQ0MsOEJBQUMsdUJBQUQsNkJBQ01KLE1BQU1zQixpQkFBTixDQUF3QkMsZ0JBRDlCLEVBRU1yQix1QkFGTjtBQUdFLHFCQUFTRixNQUFNTSxjQUFOLENBQXFCQztBQUhoQyxhQURELEdBTUcsSUFiTjtBQWNFLHdDQUFDLHlCQUFELDZCQUNNUCxNQUFNc0IsaUJBQU4sQ0FBd0JiLE9BRDlCLEVBRU1SLG9CQUZOO0FBZEYsU0FGRjtBQXVCRTtBQUFDLG9DQUFEO0FBQUEsWUFBa0IsT0FBTyxRQUF6QjtBQUNFLHdDQUFDLHlCQUFELDZCQUNNRCxNQUFNc0IsaUJBQU4sQ0FBd0JHLGFBRDlCLEVBRU14QixvQkFGTixFQURGO0FBS0Usd0NBQUMseUJBQUQsNkJBQ01ELE1BQU1zQixpQkFBTixDQUF3QlQsV0FEOUIsRUFFTVosb0JBRk47QUFMRjtBQXZCRixPQURGO0FBb0NEOzs7cURBT0U7QUFBQSxVQUpERCxLQUlDLFNBSkRBLEtBSUM7QUFBQSxVQUhEQyxvQkFHQyxTQUhEQSxvQkFHQztBQUFBLFVBRkRFLHNCQUVDLFNBRkRBLHNCQUVDO0FBQUEsVUFEREQsdUJBQ0MsU0FEREEsdUJBQ0M7O0FBQ0QsYUFDRTtBQUFDLHFDQUFEO0FBQUE7QUFFRTtBQUFDLG9DQUFEO0FBQUEsWUFBa0IsT0FBTyxPQUF6QjtBQUNFLHdDQUFDLGdCQUFELEVBQXNCRCxvQkFBdEIsQ0FERjtBQUVFLHdDQUFDLHlCQUFELDZCQUNNRCxNQUFNc0IsaUJBQU4sQ0FBd0JiLE9BRDlCLEVBRU1SLG9CQUZOO0FBRkYsU0FGRjtBQVVFO0FBQUMsb0NBQUQ7QUFBQSxZQUFrQixPQUFPLFFBQXpCO0FBQ0Usd0NBQUMseUJBQUQsNkJBQ01ELE1BQU1zQixpQkFBTixDQUF3QlgsTUFEOUIsRUFFTVYsb0JBRk47QUFHRSxtQkFBTztBQUhUO0FBREYsU0FWRjtBQWtCRTtBQUFDLG9DQUFEO0FBQUEsWUFBa0IsT0FBTyxRQUF6QjtBQUNFLHdDQUFDLHNCQUFEO0FBQ0UscUJBQVNELE1BQU1NLGNBQU4sQ0FBcUJvQjtBQURoQyxhQUVNeEIsdUJBRk47QUFERjtBQWxCRixPQURGO0FBMkJEOzs7MkNBRXNCSixLLEVBQU87QUFDNUIsYUFBTyxLQUFLNkIsNkJBQUwsQ0FBbUM3QixLQUFuQyxDQUFQO0FBQ0Q7Ozs4Q0FFeUJBLEssRUFBTztBQUMvQixhQUFPLEtBQUs2Qiw2QkFBTCxDQUFtQzdCLEtBQW5DLENBQVA7QUFDRDs7O3lEQU9FO0FBQUEsVUFKREUsS0FJQyxTQUpEQSxLQUlDO0FBQUEsVUFIREMsb0JBR0MsU0FIREEsb0JBR0M7QUFBQSxVQUZERSxzQkFFQyxTQUZEQSxzQkFFQztBQUFBLFVBRERELHVCQUNDLFNBRERBLHVCQUNDO0FBQUEsVUFDTUUsTUFETixHQUNnQkosS0FEaEIsQ0FDTUksTUFETjtBQUFBLFVBR2F3QixRQUhiLEdBSUd4QixNQUpILENBR0NVLFNBSEQsQ0FHYWMsUUFIYjs7QUFLRCxVQUFNQyx5QkFDSiw4Q0FERjtBQUVBLFVBQU1DLHFCQUFxQiw2Q0FBM0I7O0FBRUEsYUFDRTtBQUFDLHFDQUFEO0FBQUE7QUFFRTtBQUFDLG9DQUFEO0FBQUEsWUFBa0IsT0FBTyxPQUF6QjtBQUNFLHdDQUFDLGdCQUFELEVBQXNCN0Isb0JBQXRCLENBREY7QUFFRSx3Q0FBQyxzQkFBRCxFQUE0QkUsc0JBQTVCLENBRkY7QUFHRSx3Q0FBQyxzQkFBRDtBQUNFLHFCQUFTSCxNQUFNTSxjQUFOLENBQXFCQztBQURoQyxhQUVNTCx1QkFGTixFQUhGO0FBT0dGLGdCQUFNc0IsaUJBQU4sQ0FBd0JDLGdCQUF4QixDQUF5Q0MsU0FBekMsQ0FBbUR4QixNQUFNSSxNQUF6RCxJQUNDLDhCQUFDLHVCQUFELDZCQUNNSixNQUFNc0IsaUJBQU4sQ0FBd0JDLGdCQUQ5QixFQUVNckIsdUJBRk47QUFHRSwwQkFBYzRCLGtCQUhoQjtBQUlFLHFCQUFTOUIsTUFBTU0sY0FBTixDQUFxQkM7QUFKaEMsYUFERCxHQU9HLElBZE47QUFlR1AsZ0JBQU1zQixpQkFBTixDQUF3QlMsVUFBeEIsSUFBc0MvQixNQUFNc0IsaUJBQU4sQ0FBd0JTLFVBQXhCLENBQW1DUCxTQUFuQyxDQUE2Q3hCLE1BQU1JLE1BQW5ELENBQXRDLEdBQ0MsOEJBQUMseUJBQUQsNkJBQ01KLE1BQU1zQixpQkFBTixDQUF3QlMsVUFEOUIsRUFFTTlCLG9CQUZOLEVBREQsR0FLRyxJQXBCTjtBQXFCRSx3Q0FBQyx5QkFBRCw2QkFDTUQsTUFBTXNCLGlCQUFOLENBQXdCYixPQUQ5QixFQUVNUixvQkFGTjtBQXJCRixTQUZGO0FBOEJFO0FBQUMsb0NBQUQ7QUFBQSxZQUFrQixPQUFPLFFBQXpCO0FBQ0Usd0NBQUMseUJBQUQsNkJBQ01ELE1BQU1zQixpQkFBTixDQUF3QlUsYUFEOUIsRUFFTS9CLG9CQUZOLEVBREY7QUFLRSx3Q0FBQyx5QkFBRCw2QkFDTUQsTUFBTXNCLGlCQUFOLENBQXdCVyxRQUQ5QixFQUVNaEMsb0JBRk47QUFMRixTQTlCRjtBQTBDR0QsY0FBTXNCLGlCQUFOLENBQXdCTSxRQUF4QixHQUNDO0FBQUMsb0NBQUQ7QUFBQSxxQ0FDTTVCLE1BQU1zQixpQkFBTixDQUF3Qk0sUUFEOUIsRUFFTTNCLG9CQUZOO0FBSUUsd0NBQUMseUJBQUQsNkJBQ01ELE1BQU1zQixpQkFBTixDQUF3QlksY0FEOUIsRUFFTWpDLG9CQUZOLEVBSkY7QUFRRSx3Q0FBQyxzQkFBRCw2QkFDTUMsdUJBRE47QUFFRSxxQkFBU0YsTUFBTU0sY0FBTixDQUFxQlUsSUFGaEM7QUFHRSx5QkFBYWEsc0JBSGY7QUFJRSxzQkFBVSxDQUFDRDtBQUpiLGFBUkY7QUFjRzVCLGdCQUFNc0IsaUJBQU4sQ0FBd0JhLGVBQXhCLENBQXdDWCxTQUF4QyxDQUFrRHhCLE1BQU1JLE1BQXhELElBQ0MsOEJBQUMsdUJBQUQsNkJBQ01KLE1BQU1zQixpQkFBTixDQUF3QmEsZUFEOUIsRUFFTWpDLHVCQUZOO0FBR0UscUJBQVNGLE1BQU1NLGNBQU4sQ0FBcUJVO0FBSGhDLGFBREQsR0FNRyxJQXBCTjtBQXFCR2hCLGdCQUFNc0IsaUJBQU4sQ0FBd0JjLG1CQUF4QixDQUE0Q1osU0FBNUMsQ0FDQ3hCLE1BQU1JLE1BRFAsSUFHQyw4QkFBQyx5QkFBRCw2QkFDTUosTUFBTXNCLGlCQUFOLENBQXdCYyxtQkFEOUIsRUFFTW5DLG9CQUZOLEVBSEQsR0FPRztBQTVCTixTQURELEdBOEJ1QixJQXhFMUI7QUEyRUUsc0NBQUMsMEJBQUQsNkJBQ01ELE1BQU1zQixpQkFBTixDQUF3QixjQUF4QixDQUROLEVBRU1yQixvQkFGTjtBQTNFRixPQURGO0FBa0ZEOztBQUVEOzs7O3VEQU1HO0FBQUEsVUFKREQsS0FJQyxTQUpEQSxLQUlDO0FBQUEsVUFIREMsb0JBR0MsU0FIREEsb0JBR0M7QUFBQSxVQUZERSxzQkFFQyxTQUZEQSxzQkFFQztBQUFBLFVBRERELHVCQUNDLFNBRERBLHVCQUNDOztBQUNELGFBQ0U7QUFBQyxxQ0FBRDtBQUFBO0FBRUU7QUFBQyxvQ0FBRDtBQUFBLFlBQWtCLE9BQU8sT0FBekI7QUFDR0YsZ0JBQU1JLE1BQU4sQ0FBYUMsVUFBYixHQUNDLDhCQUFDLGdCQUFELEVBQXNCSixvQkFBdEIsQ0FERCxHQUdDLDhCQUFDLGtCQUFELEVBQXdCRSxzQkFBeEIsQ0FKSjtBQU1FLHdDQUFDLHNCQUFEO0FBQ0UscUJBQVNILE1BQU1NLGNBQU4sQ0FBcUJDO0FBRGhDLGFBRU1MLHVCQUZOLEVBTkY7QUFVRSx3Q0FBQyx5QkFBRCw2QkFDTU0sZ0NBQWtCQyxPQUR4QixFQUVNUixvQkFGTjtBQVZGLFNBRkY7QUFrQkU7QUFBQyxvQ0FBRDtBQUFBLHFDQUNNTyxnQ0FBa0JvQixRQUR4QixFQUVNM0Isb0JBRk47QUFJRSx3Q0FBQyxzQkFBRDtBQUNFLHFCQUFTRCxNQUFNTSxjQUFOLENBQXFCVTtBQURoQyxhQUVNZCx1QkFGTixFQUpGO0FBUUUsd0NBQUMseUJBQUQsNkJBQ01NLGdDQUFrQjZCLGNBRHhCLEVBRU1wQyxvQkFGTjtBQVJGLFNBbEJGO0FBZ0NFLHNDQUFDLDBCQUFELDZCQUNNTyxnQ0FBa0IsY0FBbEIsQ0FETixFQUVNUCxvQkFGTjtBQWhDRixPQURGO0FBdUNEOzs7MENBRXFCcUMsSSxFQUFNO0FBQzFCLGFBQU8sS0FBS0Msc0JBQUwsQ0FBNEJELElBQTVCLENBQVA7QUFDRDs7O2tEQU9FO0FBQUEsVUFKRHRDLEtBSUMsU0FKREEsS0FJQztBQUFBLFVBSERDLG9CQUdDLFNBSERBLG9CQUdDO0FBQUEsVUFGREUsc0JBRUMsU0FGREEsc0JBRUM7QUFBQSxVQURERCx1QkFDQyxTQUREQSx1QkFDQzs7QUFDRCxhQUNFO0FBQUMscUNBQUQ7QUFBQTtBQUVFO0FBQUMsb0NBQUQ7QUFBQSxZQUFrQixPQUFPLE9BQXpCO0FBQ0dGLGdCQUFNSSxNQUFOLENBQWFDLFVBQWIsR0FDQyw4QkFBQyxnQkFBRCxFQUFzQkosb0JBQXRCLENBREQsR0FHQyw4QkFBQyxxQkFBRDtBQUNFLG1CQUFPRCxLQURUO0FBRUUsNEJBQWdCRyx1QkFBdUJxQyxRQUZ6QztBQUdFLCtCQUFtQnZDLHFCQUFxQnVDO0FBSDFDLFlBSko7QUFVRSx3Q0FBQyxzQkFBRDtBQUNFLHFCQUFTeEMsTUFBTU0sY0FBTixDQUFxQkM7QUFEaEMsYUFFTUwsdUJBRk4sRUFWRjtBQWNFLHdDQUFDLHlCQUFELDZCQUNNTSxnQ0FBa0JDLE9BRHhCLEVBRU1SLG9CQUZOO0FBZEYsU0FGRjtBQXVCRTtBQUFDLG9DQUFEO0FBQUEsWUFBa0IsT0FBTyxRQUF6QjtBQUNHRCxnQkFBTUksTUFBTixDQUFhTSxTQUFiLEdBQ0MsOEJBQUMseUJBQUQsNkJBQ01GLGdDQUFrQmlDLGdCQUR4QixFQUVNeEMsb0JBRk47QUFHRSxzQkFBVSxDQUFDRCxNQUFNSSxNQUFOLENBQWFNO0FBSDFCLGFBREQsR0FPQyw4QkFBQyx5QkFBRCw2QkFDTUYsZ0NBQWtCYSxTQUR4QixFQUVNcEIsb0JBRk4sRUFSSjtBQWFFLHdDQUFDLHNCQUFEO0FBQ0UscUJBQVNELE1BQU1NLGNBQU4sQ0FBcUJVO0FBRGhDLGFBRU1kLHVCQUZOO0FBYkYsU0F2QkY7QUEyQ0Usc0NBQUMsMEJBQUQsNkJBQ01NLGdDQUFrQixjQUFsQixDQUROLEVBRU1QLG9CQUZOO0FBM0NGLE9BREY7QUFrREQ7OztxREFPRTtBQUFBLFVBSkRELEtBSUMsU0FKREEsS0FJQztBQUFBLFVBSERDLG9CQUdDLFNBSERBLG9CQUdDO0FBQUEsVUFGREUsc0JBRUMsU0FGREEsc0JBRUM7QUFBQSxVQURERCx1QkFDQyxTQUREQSx1QkFDQztBQUFBLGtDQUlHRixLQUpILENBRUMwQyxJQUZELENBRVFDLFlBRlI7QUFBQSxVQUVRQSxZQUZSLHlDQUV1QixFQUZ2QjtBQUFBLFVBR1U3QixTQUhWLEdBSUdkLEtBSkgsQ0FHQ0ksTUFIRCxDQUdVVSxTQUhWOzs7QUFNRCxhQUNFO0FBQUMscUNBQUQ7QUFBQTtBQUVFO0FBQUMsb0NBQUQ7QUFBQSxZQUFrQixPQUFPLE9BQXpCO0FBQ0c2Qix1QkFBYUMsT0FBYixHQUNDLDhCQUFDLHlCQUFELDZCQUNNM0Msb0JBRE4sRUFFTU8sZ0NBQWtCcUMsTUFGeEIsRUFERCxHQUtHLElBTk47QUFRRzdDLGdCQUFNSSxNQUFOLENBQWFDLFVBQWIsR0FDQyw4QkFBQyxnQkFBRCxFQUFzQkosb0JBQXRCLENBREQsR0FHQyw4QkFBQyxrQkFBRCxFQUF3QkUsc0JBQXhCLENBWEo7QUFjRSx3Q0FBQyxzQkFBRDtBQUNFLHFCQUFTSCxNQUFNTSxjQUFOLENBQXFCQztBQURoQyxhQUVNTCx1QkFGTixFQWRGO0FBbUJFLHdDQUFDLHlCQUFELDZCQUNNTSxnQ0FBa0JDLE9BRHhCLEVBRU1SLG9CQUZOO0FBbkJGLFNBRkY7QUE0QkcwQyxxQkFBYUcsSUFBYixJQUFzQkgsYUFBYUMsT0FBYixJQUF3QjlCLFVBQVVpQyxPQUF4RCxHQUNDO0FBQUMsb0NBQUQ7QUFBQTtBQUNFLG1CQUFNO0FBRFIsYUFFTTlDLG9CQUZOLEVBR08wQyxhQUFhQyxPQUFiLEdBQXVCcEMsZ0NBQWtCdUMsT0FBekMsR0FBbUQsRUFIMUQ7QUFLRTtBQUFBO0FBQUE7QUFDRSwwQ0FBQyx5QkFBRCw2QkFDTXZDLGdDQUFrQmEsU0FEeEIsRUFFTXBCLG9CQUZOLEVBREY7QUFLRSwwQ0FBQyxzQkFBRDtBQUNFLHVCQUFTRCxNQUFNTSxjQUFOLENBQXFCVTtBQURoQyxlQUVNZCx1QkFGTixFQUxGO0FBU0UsMENBQUMseUJBQUQsNkJBQ01NLGdDQUFrQmlDLGdCQUR4QixFQUVNeEMsb0JBRk47QUFHRSx3QkFBVSxDQUFDRCxNQUFNSSxNQUFOLENBQWFNO0FBSDFCO0FBVEY7QUFMRixTQURELEdBc0JHLElBbEROO0FBcURHaUMscUJBQWFDLE9BQWIsSUFBd0I5QixVQUFVK0IsTUFBbEMsR0FDQztBQUFDLG9DQUFEO0FBQUEscUNBQ001QyxvQkFETixFQUVNTyxnQ0FBa0JvQixRQUZ4QjtBQUlFLHdDQUFDLHlCQUFELDZCQUNNcEIsZ0NBQWtCMEIsY0FEeEIsRUFFTWpDLG9CQUZOLEVBSkY7QUFRRSx3Q0FBQyxzQkFBRDtBQUNFLHFCQUFTRCxNQUFNTSxjQUFOLENBQXFCMEM7QUFEaEMsYUFFTTlDLHVCQUZOLEVBUkY7QUFZRSx3Q0FBQyx5QkFBRCw2QkFDTUQsb0JBRE4sRUFFTU8sZ0NBQWtCeUMsU0FGeEI7QUFaRixTQURELEdBa0JHLElBdkVOO0FBMEVHTixxQkFBYXhCLEtBQWIsR0FDQztBQUFBO0FBQUE7QUFDRSx3Q0FBQyx5QkFBRCw2QkFDTVgsZ0NBQWtCRyxNQUR4QixFQUVNVixvQkFGTjtBQUdFLG1CQUFNLGNBSFI7QUFJRSxzQkFBVVcsUUFBUVosTUFBTUksTUFBTixDQUFhOEMsV0FBckI7QUFKWixhQURGO0FBT0Usd0NBQUMsc0JBQUQ7QUFDRSxxQkFBU2xELE1BQU1NLGNBQU4sQ0FBcUJLO0FBRGhDLGFBRU1ULHVCQUZOLEVBUEY7QUFXRSx3Q0FBQyx5QkFBRCw2QkFDTU0sZ0NBQWtCSyxXQUR4QixFQUVNWixvQkFGTjtBQUdFLHNCQUFVLENBQUNELE1BQU1JLE1BQU4sQ0FBYThDO0FBSDFCO0FBWEYsU0FERCxHQWtCRyxJQTVGTjtBQStGRSxzQ0FBQywwQkFBRCw2QkFDTTFDLGdDQUFrQixjQUFsQixDQUROLEVBRU1QLG9CQUZOO0FBL0ZGLE9BREY7QUFzR0Q7Ozs2QkFFUTtBQUFBLG1CQU9ILEtBQUtILEtBUEY7QUFBQSxVQUVMRSxLQUZLLFVBRUxBLEtBRks7QUFBQSxVQUdMbUQsUUFISyxVQUdMQSxRQUhLO0FBQUEsVUFJTEMsaUJBSkssVUFJTEEsaUJBSks7QUFBQSxVQUtMQyxnQkFMSyxVQUtMQSxnQkFMSztBQUFBLFVBTUxDLGVBTkssVUFNTEEsZUFOSzs7QUFBQSxrQkFRMkJ0RCxNQUFNSSxNQUFOLENBQWFtRCxNQUFiLEdBQzlCSixTQUFTbkQsTUFBTUksTUFBTixDQUFhbUQsTUFBdEIsQ0FEOEIsR0FFOUIsRUFWRztBQUFBLCtCQVFBQyxNQVJBO0FBQUEsVUFRQUEsTUFSQSxnQ0FRUyxFQVJUO0FBQUEsVUFRYUMsVUFSYixTQVFhQSxVQVJiOztBQUFBLFVBV0FyRCxNQVhBLEdBV1VKLEtBWFYsQ0FXQUksTUFYQTs7O0FBYVAsVUFBTXNELG1CQUFtQjtBQUN2QjFELG9CQUR1QjtBQUV2QndEO0FBRnVCLE9BQXpCOztBQUtBLFVBQU12RCxrREFDRHlELGdCQURDO0FBRUpsQixrQkFBVSxLQUFLMUMsS0FBTCxDQUFXNkQ7QUFGakIsUUFBTjs7QUFLQSxVQUFNeEQsb0RBQ0R1RCxnQkFEQztBQUVKbEIsa0JBQVVZO0FBRk4sUUFBTjs7QUFLQSxVQUFNbEQscURBQ0R3RCxnQkFEQztBQUVKbEIsa0JBQVUsS0FBSzFDLEtBQUwsQ0FBVzhEO0FBRmpCLFFBQU47O0FBS0EsVUFBTUMsaUJBQ0o3RCxNQUFNaUIsSUFBTixnQkFBd0Isa0NBQXNCakIsTUFBTWlCLElBQTVCLENBQXhCLGdCQURGOztBQUdBLGFBQ0U7QUFBQywrQkFBRDtBQUFBO0FBQ0U7QUFBQyxvQ0FBRDtBQUFBLFlBQWtCLE9BQU8sT0FBekI7QUFDRzZDLGlCQUFPQyxJQUFQLENBQVlaLFFBQVosRUFBc0JhLE1BQXRCLEdBQStCLENBQS9CLElBQ0MsOEJBQUMsNEJBQUQ7QUFDRSxzQkFBVWIsUUFEWjtBQUVFLGdCQUFJbkQsTUFBTWlFLEVBRlo7QUFHRSxzQkFBVWpFLE1BQU1rRSxJQUFOLElBQWM5RCxPQUFPK0QsT0FIakM7QUFJRSxvQkFBUS9ELE9BQU9tRCxNQUpqQjtBQUtFLHNCQUFVO0FBQUEscUJBQVNILGtCQUFrQixFQUFDRyxRQUFRYSxLQUFULEVBQWxCLENBQVQ7QUFBQTtBQUxaLFlBRko7QUFVRSx3Q0FBQywyQkFBRDtBQUNFLG1CQUFPcEUsS0FEVDtBQUVFLDhCQUFrQnFELGdCQUZwQjtBQUdFLHNCQUFVQztBQUhaLFlBVkY7QUFlRSx3Q0FBQywyQkFBRDtBQUNFLG1CQUFPdEQsS0FEVDtBQUVFLG9CQUFRd0QsTUFGVjtBQUdFLHdCQUFZQyxVQUhkO0FBSUUsK0JBQW1CTCxpQkFKckI7QUFLRSw2QkFBaUIsS0FBS3RELEtBQUwsQ0FBV3dELGVBTDlCO0FBTUUsdUJBQVcsS0FBS3hELEtBQUwsQ0FBV3VFO0FBTnhCO0FBZkYsU0FERjtBQXlCRyxhQUFLUixjQUFMLEtBQ0MsS0FBS0EsY0FBTCxFQUFxQjtBQUNuQjdELHNCQURtQjtBQUVuQkMsb0RBRm1CO0FBR25CQywwREFIbUI7QUFJbkJDO0FBSm1CLFNBQXJCO0FBMUJKLE9BREY7QUFtQ0Q7OztFQXBrQjRDbUUsZ0IsVUFDdENDLFMsR0FBWTtBQUNqQnZFLFNBQU93RSxvQkFBVUMsTUFBVixDQUFpQkMsVUFEUDtBQUVqQnZCLFlBQVVxQixvQkFBVUMsTUFBVixDQUFpQkMsVUFGVjtBQUdqQnJCLG9CQUFrQm1CLG9CQUFVRyxPQUFWLENBQWtCSCxvQkFBVUksR0FBNUIsRUFBaUNGLFVBSGxDO0FBSWpCTCxhQUFXRyxvQkFBVUssSUFBVixDQUFlSCxVQUpUO0FBS2pCdEIscUJBQW1Cb0Isb0JBQVVLLElBQVYsQ0FBZUgsVUFMakI7QUFNakJwQixtQkFBaUJrQixvQkFBVUssSUFBVixDQUFlSCxVQU5mO0FBT2pCZix3QkFBc0JhLG9CQUFVSyxJQUFWLENBQWVILFVBUHBCO0FBUWpCZCxrQ0FBZ0NZLG9CQUFVSyxJQUFWLENBQWVIO0FBUjlCLEM7O0FBc2tCckI7Ozs7a0JBdmtCcUI3RSxpQjtBQTJrQmQsSUFBTWlGLGtEQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsTUFBRTlFLEtBQUYsU0FBRUEsS0FBRjtBQUFBLE1BQVN3QyxRQUFULFNBQVNBLFFBQVQ7QUFBQSxNQUFtQnVDLEtBQW5CLFNBQW1CQSxLQUFuQjtBQUFBLFNBQ2hDO0FBQUMsdUNBQUQ7QUFBQSxNQUFrQixVQUFVL0UsTUFBTUksTUFBTixDQUFhQyxVQUF6QztBQUNFLGtDQUFDLHVCQUFEO0FBQ0UsaUJBQVcsQ0FDVDtBQUNFMkUsdUJBQWVoRixNQUFNSSxNQUFOLENBQWFHLEtBRDlCO0FBRUUwRSxrQkFBVTtBQUFBLGlCQUFZekMsU0FBUyxFQUFDakMsT0FBTzJFLFFBQVIsRUFBVCxDQUFaO0FBQUE7QUFGWixPQURTO0FBRGI7QUFERixHQURnQztBQUFBLENBQTNCOztBQWFBLElBQU1DLHdEQUF3QixTQUF4QkEscUJBQXdCO0FBQUEsTUFDbkNuRixLQURtQyxVQUNuQ0EsS0FEbUM7QUFBQSxNQUVuQ29GLGNBRm1DLFVBRW5DQSxjQUZtQztBQUFBLE1BR25DQyxpQkFIbUMsVUFHbkNBLGlCQUhtQztBQUFBLFNBS25DO0FBQUMsdUNBQUQ7QUFBQTtBQUNFLGtDQUFDLHVCQUFEO0FBQ0UsaUJBQVcsQ0FDVDtBQUNFTCx1QkFBZWhGLE1BQU1JLE1BQU4sQ0FBYUcsS0FEOUI7QUFFRTBFLGtCQUFVO0FBQUEsaUJBQVlHLGVBQWUsRUFBQzdFLE9BQU8yRSxRQUFSLEVBQWYsQ0FBWjtBQUFBLFNBRlo7QUFHRUgsZUFBTztBQUhULE9BRFMsRUFNVDtBQUNFQyx1QkFDRWhGLE1BQU1JLE1BQU4sQ0FBYVUsU0FBYixDQUF1QndFLFdBQXZCLElBQXNDdEYsTUFBTUksTUFBTixDQUFhRyxLQUZ2RDtBQUdFMEUsa0JBQVU7QUFBQSxpQkFBWUksa0JBQWtCLEVBQUNDLGFBQWFKLFFBQWQsRUFBbEIsQ0FBWjtBQUFBLFNBSFo7QUFJRUgsZUFBTztBQUpULE9BTlM7QUFEYjtBQURGLEdBTG1DO0FBQUEsQ0FBOUI7O0FBd0JBLElBQU1RLDhDQUFtQixTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBRXZGLEtBQUYsVUFBRUEsS0FBRjtBQUFBLE1BQVN3QyxRQUFULFVBQVNBLFFBQVQ7QUFBQSxTQUM5QjtBQUFDLHVDQUFEO0FBQUE7QUFDRSxrQ0FBQyx1QkFBRDtBQUNFLGlCQUFXLENBQ1Q7QUFDRXdDLHVCQUFlaEYsTUFBTUksTUFBTixDQUFhVSxTQUFiLENBQXVCMEUsVUFEeEM7QUFFRUMsaUJBQVMsSUFGWDtBQUdFUixrQkFBVTtBQUFBLGlCQUFjekMsU0FBUyxFQUFDZ0Qsc0JBQUQsRUFBVCxDQUFkO0FBQUE7QUFIWixPQURTO0FBRGI7QUFERixHQUQ4QjtBQUFBLENBQXpCOztBQWNBLElBQU1FLDBEQUF5QixTQUF6QkEsc0JBQXlCLFNBTWhDO0FBQUEsTUFMSjFGLEtBS0ksVUFMSkEsS0FLSTtBQUFBLE1BSkoyRixPQUlJLFVBSkpBLE9BSUk7QUFBQSxNQUhKbkQsUUFHSSxVQUhKQSxRQUdJO0FBQUEsTUFGSmdCLE1BRUksVUFGSkEsTUFFSTtBQUFBLE1BREpvQyxXQUNJLFVBREpBLFdBQ0k7QUFBQSxNQUVGQyxnQkFGRSxHQVdBRixPQVhBLENBRUZFLGdCQUZFO0FBQUEsTUFHRkMsTUFIRSxHQVdBSCxPQVhBLENBR0ZHLE1BSEU7QUFBQSxNQUlGQyxLQUpFLEdBV0FKLE9BWEEsQ0FJRkksS0FKRTtBQUFBLE1BS0ZDLEdBTEUsR0FXQUwsT0FYQSxDQUtGSyxHQUxFO0FBQUEsTUFNRkMsUUFORSxHQVdBTixPQVhBLENBTUZNLFFBTkU7QUFBQSxNQU9GQyxLQVBFLEdBV0FQLE9BWEEsQ0FPRk8sS0FQRTtBQUFBLE1BUUZDLEtBUkUsR0FXQVIsT0FYQSxDQVFGUSxLQVJFO0FBQUEsTUFTRkMsY0FURSxHQVdBVCxPQVhBLENBU0ZTLGNBVEU7QUFBQSxNQVVGQyxtQkFWRSxHQVdBVixPQVhBLENBVUZVLG1CQVZFOztBQVlKLE1BQU1DLDZCQUE2QkQsdUJBQXVCRSxnREFBK0JWLGdCQUEvQixDQUExRDtBQUNBLE1BQU1XLGtCQUFrQmhELE9BQU9pRCxNQUFQLENBQWM7QUFBQSxRQUFFeEYsSUFBRixVQUFFQSxJQUFGO0FBQUEsV0FDcENxRiwyQkFBMkJJLFFBQTNCLENBQW9DekYsSUFBcEMsQ0FEb0M7QUFBQSxHQUFkLENBQXhCO0FBR0EsTUFBTTBGLGVBQWUzRyxNQUFNNEcsZUFBTixDQUFzQmpCLFFBQVFLLEdBQTlCLENBQXJCO0FBQ0EsTUFBTWEsWUFBWSxDQUFDN0csTUFBTThHLFlBQVAsSUFBdUI5RyxNQUFNSSxNQUFOLENBQWErRixLQUFiLENBQXZCLElBQThDUSxhQUFhM0MsTUFBYixHQUFzQixDQUF0RjtBQUNBLE1BQU0rQyxvQ0FBa0NkLFFBQWxDLDZCQUFOOztBQUVBLFNBQ0UsOEJBQUMsa0NBQUQ7QUFDRSxhQUFTTixRQUFRSyxHQURuQjtBQUVFLGlCQUFhSixlQUFlbUIsa0JBRjlCO0FBR0UsWUFBUS9HLE1BQU1JLE1BQU4sQ0FBYTBGLE1BQWIsQ0FIVjtBQUlFLFlBQVFVLGVBSlY7QUFLRSxRQUFJeEcsTUFBTWlFLEVBTFo7QUFNRSxTQUFRK0IsR0FBUixzQkFORjtBQU9FLGNBQVVDLFFBUFo7QUFRRSxpQkFBYUcsa0JBQWtCLGdCQVJqQztBQVNFLFdBQU9wRyxNQUFNSSxNQUFOLENBQWFVLFNBQWIsQ0FBdUJvRixLQUF2QixDQVRUO0FBVUUsa0JBQWNTLFlBVmhCO0FBV0UsZUFBV1IsUUFBUW5HLE1BQU1JLE1BQU4sQ0FBYStGLEtBQWIsQ0FBUixHQUE4QixJQVgzQztBQVlFLG1CQUFlbkcsTUFBTUksTUFBTixDQUFhMkYsS0FBYixDQVpqQjtBQWFFLGVBQVdjLFNBYmI7QUFjRSxpQkFBYTtBQUFBLGFBQU9yRSwyQ0FBV3VELEtBQVgsRUFBbUJpQixHQUFuQixHQUF5QmhCLEdBQXpCLENBQVA7QUFBQSxLQWRmO0FBZUUsaUJBQWE7QUFBQSxhQUFPeEQsMkNBQVcyRCxLQUFYLEVBQW1CYSxHQUFuQixHQUF5QmhCLEdBQXpCLENBQVA7QUFBQTtBQWZmLElBREY7QUFtQkQsQ0E3Q007O0FBK0NBLElBQU1pQiwwREFBeUIsU0FBekJBLHNCQUF5QixTQUF1QjtBQUFBLE1BQXJCakgsS0FBcUIsVUFBckJBLEtBQXFCO0FBQUEsTUFBZHdDLFFBQWMsVUFBZEEsUUFBYzs7QUFDM0QsTUFBTW1FLGVBQWUzRyxNQUFNNEcsZUFBTixDQUFzQixPQUF0QixDQUFyQjtBQUNBLFNBQ0VNLE1BQU1DLE9BQU4sQ0FBY1IsWUFBZCxLQUErQkEsYUFBYTNDLE1BQWIsR0FBc0IsQ0FBckQsR0FDRSw4QkFBQyxnQ0FBRDtBQUNFLFdBQU0sYUFEUjtBQUVFLGFBQVMyQyxZQUZYO0FBR0UsZUFBVzNHLE1BQU1JLE1BQU4sQ0FBYWdILFVBSDFCO0FBSUUsY0FBVTtBQUFBLGFBQU81RSxTQUFTLEVBQUM0RSxZQUFZSixHQUFiLEVBQVQsRUFBNEIsT0FBNUIsQ0FBUDtBQUFBO0FBSlosSUFERixHQU1PLElBUFQ7QUFTRCxDQVhNOztBQWFBLElBQU1LLDREQUEwQixTQUExQkEsdUJBQTBCLFNBQWdDO0FBQUEsTUFBOUJySCxLQUE4QixVQUE5QkEsS0FBOEI7QUFBQSxNQUF2QjJGLE9BQXVCLFVBQXZCQSxPQUF1QjtBQUFBLE1BQWRuRCxVQUFjLFVBQWRBLFFBQWM7QUFBQSxNQUM5RHVELEtBRDhELEdBQ25DSixPQURtQyxDQUM5REksS0FEOEQ7QUFBQSxNQUN2RHVCLFdBRHVELEdBQ25DM0IsT0FEbUMsQ0FDdkQyQixXQUR1RDtBQUFBLE1BQzFDdEIsR0FEMEMsR0FDbkNMLE9BRG1DLENBQzFDSyxHQUQwQzs7QUFFckUsTUFBTXVCLGdCQUFnQnZILE1BQU1JLE1BQU4sQ0FBYTJGLEtBQWIsQ0FBdEI7QUFGcUUsTUFHOURqRixTQUg4RCxHQUdqRGQsTUFBTUksTUFIMkMsQ0FHOURVLFNBSDhEOztBQUtyRTs7QUFDQSxNQUFNMEcscUJBQXFCeEgsTUFBTXlILHFCQUFOLENBQTRCekIsR0FBNUIsQ0FBM0I7O0FBRUEsU0FDRTtBQUFDLHVDQUFEO0FBQUE7QUFDRTtBQUFDLG1DQUFEO0FBQUE7QUFBQSxxQkFBMEJ1QixjQUFjRyxJQUF4QztBQUFBLEtBREY7QUFFRSxrQ0FBQyxzQkFBRDtBQUNFLHFCQUFlNUcsVUFBVXdHLFdBQVYsQ0FEakI7QUFFRSxlQUFTRSxrQkFGWDtBQUdFLG1CQUFhLEtBSGY7QUFJRSxrQkFBWSxLQUpkO0FBS0UsZ0JBQVU7QUFBQSxlQUNSaEYsV0FDRTtBQUNFMUIsZ0RBQ0tkLE1BQU1JLE1BQU4sQ0FBYVUsU0FEbEIsb0NBRUd3RyxXQUZILEVBRWlCbEQsS0FGakI7QUFERixTQURGLEVBT0V1QixRQUFRSyxHQVBWLENBRFE7QUFBQTtBQUxaO0FBRkYsR0FERjtBQXNCRCxDQTlCTTtBQStCUCIsImZpbGUiOiJsYXllci1jb25maWd1cmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTggVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtcbiAgUGFuZWxMYWJlbCxcbiAgU2lkZVBhbmVsU2VjdGlvblxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5cbmltcG9ydCBWaXNDb25maWdCeUZpZWxkU2VsZWN0b3IgZnJvbSAnLi92aXMtY29uZmlnLWJ5LWZpZWxkLXNlbGVjdG9yJztcbmltcG9ydCBMYXllckNvbHVtbkNvbmZpZyBmcm9tICcuL2xheWVyLWNvbHVtbi1jb25maWcnO1xuaW1wb3J0IExheWVyVHlwZVNlbGVjdG9yIGZyb20gJy4vbGF5ZXItdHlwZS1zZWxlY3Rvcic7XG5pbXBvcnQgRGltZW5zaW9uU2NhbGVTZWxlY3RvciBmcm9tICcuL2RpbWVuc2lvbi1zY2FsZS1zZWxlY3Rvcic7XG5pbXBvcnQgQ29sb3JTZWxlY3RvciBmcm9tICcuL2NvbG9yLXNlbGVjdG9yJztcbmltcG9ydCBTb3VyY2VEYXRhU2VsZWN0b3IgZnJvbSAnLi4vc291cmNlLWRhdGEtc2VsZWN0b3InO1xuaW1wb3J0IFZpc0NvbmZpZ1N3aXRjaCBmcm9tICcuL3Zpcy1jb25maWctc3dpdGNoJztcbmltcG9ydCBWaXNDb25maWdTbGlkZXIgZnJvbSAnLi92aXMtY29uZmlnLXNsaWRlcic7XG5pbXBvcnQgTGF5ZXJDb25maWdHcm91cCBmcm9tICcuL2xheWVyLWNvbmZpZy1ncm91cCc7XG5cbmltcG9ydCB7TEFZRVJfVklTX0NPTkZJR1N9IGZyb20gJ2xheWVycy9sYXllci1mYWN0b3J5JztcblxuaW1wb3J0IHtjYXBpdGFsaXplRmlyc3RMZXR0ZXJ9IGZyb20gJ3V0aWxzL3V0aWxzJztcblxuaW1wb3J0IHtcbiAgTEFZRVJfVFlQRVMsXG4gIENIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEU1xufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmNvbnN0IFN0eWxlZExheWVyQ29uZmlndXJhdG9yID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2xheWVyLXBhbmVsX19jb25maWcnXG59KWBcbiAgbWFyZ2luLXRvcDogMTJweDtcbmA7XG5cbmNvbnN0IFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2xheWVyLXBhbmVsX19jb25maWdfX3Zpc3VhbEMtY29uZmlnJ1xufSlgXG4gIG1hcmdpbi10b3A6IDEycHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllckNvbmZpZ3VyYXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbGF5ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGxheWVyVHlwZU9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgb3Blbk1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHVwZGF0ZUxheWVyQ29uZmlnOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHVwZGF0ZUxheWVyVHlwZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB1cGRhdGVMYXllclZpc0NvbmZpZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB1cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBfcmVuZGVyUG9pbnRMYXllckNvbmZpZyhwcm9wcykge1xuICAgIHJldHVybiB0aGlzLl9yZW5kZXJTY2F0dGVycGxvdExheWVyQ29uZmlnKHByb3BzKTtcbiAgfVxuXG4gIF9yZW5kZXJJY29uTGF5ZXJDb25maWcocHJvcHMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyU2NhdHRlcnBsb3RMYXllckNvbmZpZyhwcm9wcyk7XG4gIH1cblxuICBfcmVuZGVyU2NhdHRlcnBsb3RMYXllckNvbmZpZyh7XG4gICAgbGF5ZXIsXG4gICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHMsXG4gICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wc1xuICB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgey8qIENvbG9yICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2NvbG9yJ30+XG4gICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgPENvbG9yUmFuZ2VDb25maWcgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTLm9wYWNpdHl9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgIHsvKiBSYWRpdXMgKi99XG4gICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsncmFkaXVzJ30+XG4gICAgICAgICAgeyFsYXllci5jb25maWcuc2l6ZUZpZWxkID8gKFxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4uTEFZRVJfVklTX0NPTkZJR1MucmFkaXVzfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e0Jvb2xlYW4obGF5ZXIuY29uZmlnLnNpemVGaWVsZCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5yYWRpdXNSYW5nZX1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgIWxheWVyLmNvbmZpZy5zaXplRmllbGQgfHwgbGF5ZXIuY29uZmlnLnZpc0NvbmZpZy5maXhlZFJhZGl1c1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcbiAgICAgICAgICAgIDxWaXNDb25maWdTd2l0Y2hcbiAgICAgICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTLmZpeGVkUmFkaXVzfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshbGF5ZXIuY29uZmlnLnNpemVGaWVsZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICB7Lyogb3V0bGluZSAqL31cbiAgICAgICAge2xheWVyLnR5cGUgPT09IExBWUVSX1RZUEVTLnBvaW50ID8gKFxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4uTEFZRVJfVklTX0NPTkZJR1Mub3V0bGluZX1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy50aGlja25lc3N9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWxheWVyLmNvbmZpZy52aXNDb25maWcub3V0bGluZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgey8qIGhpZ2ggcHJlY2lzaW9uICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHU1snaGktcHJlY2lzaW9uJ119XG4gICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICApO1xuICB9XG5cbiAgX3JlbmRlckNsdXN0ZXJMYXllckNvbmZpZyh7XG4gICAgbGF5ZXIsXG4gICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgey8qIENvbG9yICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2NvbG9yJ30+XG4gICAgICAgICAgPENvbG9yUmFuZ2VDb25maWcgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgIDxBZ2dyQ29sb3JTY2FsZVNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5jb2xvckFnZ3JlZ2F0aW9uLmNvbmRpdGlvbihsYXllci5jb25maWcpID9cbiAgICAgICAgICAgIDxBZ2dyZWdhdGlvblR5cGVTZWxlY3RvclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY29sb3JBZ2dyZWdhdGlvbn1cbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgIHsvKiBDbHVzdGVyIFJhZGl1cyAqL31cbiAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydyYWRpdXMnfT5cbiAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY2x1c3RlclJhZGl1c31cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5yYWRpdXNSYW5nZX1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICk7XG4gIH1cblxuICBfcmVuZGVySGVhdG1hcExheWVyQ29uZmlnKHtcbiAgICBsYXllcixcbiAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzLFxuICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnY29sb3InfT5cbiAgICAgICAgICA8Q29sb3JSYW5nZUNvbmZpZyB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICB7LyogUmFkaXVzICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J3JhZGl1cyd9PlxuICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5yYWRpdXN9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICB7LyogV2VpZ2h0ICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J3dlaWdodCd9PlxuICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy53ZWlnaHR9XG4gICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICApO1xuICB9XG5cbiAgX3JlbmRlckdyaWRMYXllckNvbmZpZyhwcm9wcykge1xuICAgIHJldHVybiB0aGlzLl9yZW5kZXJBZ2dyZWdhdGlvbkxheWVyQ29uZmlnKHByb3BzKTtcbiAgfVxuXG4gIF9yZW5kZXJIZXhhZ29uTGF5ZXJDb25maWcocHJvcHMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyQWdncmVnYXRpb25MYXllckNvbmZpZyhwcm9wcyk7XG4gIH1cblxuICBfcmVuZGVyQWdncmVnYXRpb25MYXllckNvbmZpZyh7XG4gICAgbGF5ZXIsXG4gICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICB9KSB7XG4gICAgY29uc3Qge2NvbmZpZ30gPSBsYXllcjtcbiAgICBjb25zdCB7XG4gICAgICB2aXNDb25maWc6IHtlbmFibGUzZH1cbiAgICB9ID0gY29uZmlnO1xuICAgIGNvbnN0IGVsZXZhdGlvbkJ5RGVzY3JpcHRpb24gPVxuICAgICAgJ1doZW4gb2ZmLCBoZWlnaHQgaXMgYmFzZWQgb24gY291bnQgb2YgcG9pbnRzJztcbiAgICBjb25zdCBjb2xvckJ5RGVzY3JpcHRpb24gPSAnV2hlbiBvZmYsIGNvbG9yIGlzIGJhc2VkIG9uIGNvdW50IG9mIHBvaW50cyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnY29sb3InfT5cbiAgICAgICAgICA8Q29sb3JSYW5nZUNvbmZpZyB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgPEFnZ3JDb2xvclNjYWxlU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvbG9yQWdncmVnYXRpb24uY29uZGl0aW9uKGxheWVyLmNvbmZpZykgPyAoXG4gICAgICAgICAgICA8QWdncmVnYXRpb25UeXBlU2VsZWN0b3JcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvbG9yQWdncmVnYXRpb259XG4gICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgZGVzY3JlaXB0aW9uPXtjb2xvckJ5RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucGVyY2VudGlsZSAmJiBsYXllci52aXNDb25maWdTZXR0aW5ncy5wZXJjZW50aWxlLmNvbmRpdGlvbihsYXllci5jb25maWcpID8gKFxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucGVyY2VudGlsZX1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgey8qIENlbGwgc2l6ZSAqL31cbiAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydyYWRpdXMnfT5cbiAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mud29ybGRVbml0U2l6ZX1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5jb3ZlcmFnZX1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgey8qIEVsZXZhdGlvbiAqL31cbiAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVuYWJsZTNkID9cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVuYWJsZTNkfVxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVsZXZhdGlvblNjYWxlfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZWxldmF0aW9uQnlEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbmFibGUzZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZUFnZ3JlZ2F0aW9uLmNvbmRpdGlvbihsYXllci5jb25maWcpID8gKFxuICAgICAgICAgICAgICA8QWdncmVnYXRpb25UeXBlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZUFnZ3JlZ2F0aW9ufVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uUGVyY2VudGlsZS5jb25kaXRpb24oXG4gICAgICAgICAgICAgIGxheWVyLmNvbmZpZ1xuICAgICAgICAgICAgKSA/IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25QZXJjZW50aWxlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD4gOiBudWxsfVxuXG4gICAgICAgIHsvKiBIaWdoIFByZWNpc2lvbiAqL31cbiAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3NbJ2hpLXByZWNpc2lvbiddfVxuICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgKTtcbiAgfVxuXG4gIC8vIFRPRE86IFNoYW4gbW92ZSB0aGVzZSBpbnRvIGxheWVyIGNsYXNzXG4gIF9yZW5kZXJIZXhhZ29uSWRMYXllckNvbmZpZyh7XG4gICAgbGF5ZXIsXG4gICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgey8qIENvbG9yICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2NvbG9yJ30+XG4gICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgPENvbG9yUmFuZ2VDb25maWcgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTLm9wYWNpdHl9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICB7LyogaGVpZ2h0ICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5lbmFibGUzZH1cbiAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5lbGV2YXRpb25SYW5nZX1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgIHsvKiBoaWdoIHByZWNpc2lvbiAqL31cbiAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICB7Li4uTEFZRVJfVklTX0NPTkZJR1NbJ2hpLXByZWNpc2lvbiddfVxuICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgKTtcbiAgfVxuXG4gIF9yZW5kZXJBcmNMYXllckNvbmZpZyhhcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlckxpbmVMYXllckNvbmZpZyhhcmdzKTtcbiAgfVxuXG4gIF9yZW5kZXJMaW5lTGF5ZXJDb25maWcoe1xuICAgIGxheWVyLFxuICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcbiAgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydjb2xvcid9PlxuICAgICAgICAgIHtsYXllci5jb25maWcuY29sb3JGaWVsZCA/IChcbiAgICAgICAgICAgIDxDb2xvclJhbmdlQ29uZmlnIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEFyY0xheWVyQ29sb3JTZWxlY3RvclxuICAgICAgICAgICAgICBsYXllcj17bGF5ZXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlQ29uZmlnPXtsYXllckNvbmZpZ3VyYXRvclByb3BzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZVZpc0NvbmZpZz17dmlzQ29uZmlndXJhdG9yUHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTLm9wYWNpdHl9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgIHsvKiB0aGlja25lc3MgKi99XG4gICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnc3Ryb2tlJ30+XG4gICAgICAgICAge2xheWVyLmNvbmZpZy5zaXplRmllbGQgPyAoXG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5zdHJva2VXaWR0aFJhbmdlfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshbGF5ZXIuY29uZmlnLnNpemVGaWVsZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTLnRoaWNrbmVzc31cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICB7LyogaGlnaCBwcmVjaXNpb24gKi99XG4gICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTWydoaS1wcmVjaXNpb24nXX1cbiAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICk7XG4gIH1cblxuICBfcmVuZGVyR2VvanNvbkxheWVyQ29uZmlnKHtcbiAgICBsYXllcixcbiAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzLFxuICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gIH0pIHtcbiAgICBjb25zdCB7XG4gICAgICBtZXRhOiB7ZmVhdHVyZVR5cGVzID0ge319LFxuICAgICAgY29uZmlnOiB7dmlzQ29uZmlnfVxuICAgIH0gPSBsYXllcjtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICAgIHsvKiBDb2xvciBCeSAqL31cbiAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydjb2xvcid9PlxuICAgICAgICAgIHtmZWF0dXJlVHlwZXMucG9seWdvbiA/IChcbiAgICAgICAgICAgIDxWaXNDb25maWdTd2l0Y2hcbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICB7Li4uTEFZRVJfVklTX0NPTkZJR1MuZmlsbGVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHtsYXllci5jb25maWcuY29sb3JGaWVsZCA/IChcbiAgICAgICAgICAgIDxDb2xvclJhbmdlQ29uZmlnIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICB7Li4uTEFZRVJfVklTX0NPTkZJR1Mub3BhY2l0eX1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgey8qIFN0cm9rZSBXaWR0aCAqL31cbiAgICAgICAge2ZlYXR1cmVUeXBlcy5saW5lIHx8IChmZWF0dXJlVHlwZXMucG9seWdvbiAmJiB2aXNDb25maWcuc3Ryb2tlZCkgPyAoXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgIGxhYmVsPVwic3Ryb2tlXCJcbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIHsuLi4oZmVhdHVyZVR5cGVzLnBvbHlnb24gPyBMQVlFUl9WSVNfQ09ORklHUy5zdHJva2VkIDoge30pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4uTEFZRVJfVklTX0NPTkZJR1MudGhpY2tuZXNzfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5zdHJva2VXaWR0aFJhbmdlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxheWVyLmNvbmZpZy5zaXplRmllbGR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIHsvKiBFbGV2YXRpb24gKi99XG4gICAgICAgIHtmZWF0dXJlVHlwZXMucG9seWdvbiAmJiB2aXNDb25maWcuZmlsbGVkID8gKFxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICB7Li4uTEFZRVJfVklTX0NPTkZJR1MuZW5hYmxlM2R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4uTEFZRVJfVklTX0NPTkZJR1MuZWxldmF0aW9uU2NhbGV9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5oZWlnaHR9XG4gICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU3dpdGNoXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTLndpcmVmcmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICB7LyogUmFkaXVzICovfVxuICAgICAgICB7ZmVhdHVyZVR5cGVzLnBvaW50ID8gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5yYWRpdXN9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgbGFiZWw9XCJQb2ludCBSYWRpdXNcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17Qm9vbGVhbihsYXllci5jb25maWcucmFkaXVzRmllbGQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnJhZGl1c31cbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTLnJhZGl1c1JhbmdlfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshbGF5ZXIuY29uZmlnLnJhZGl1c0ZpZWxkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgey8qIGhpZ2ggcHJlY2lzaW9uICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHU1snaGktcHJlY2lzaW9uJ119XG4gICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxheWVyLFxuICAgICAgZGF0YXNldHMsXG4gICAgICB1cGRhdGVMYXllckNvbmZpZyxcbiAgICAgIGxheWVyVHlwZU9wdGlvbnMsXG4gICAgICB1cGRhdGVMYXllclR5cGVcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7ZmllbGRzID0gW10sIGZpZWxkUGFpcnN9ID0gbGF5ZXIuY29uZmlnLmRhdGFJZFxuICAgICAgPyBkYXRhc2V0c1tsYXllci5jb25maWcuZGF0YUlkXVxuICAgICAgOiB7fTtcbiAgICBjb25zdCB7Y29uZmlnfSA9IGxheWVyO1xuXG4gICAgY29uc3QgY29tbW9uQ29uZmlnUHJvcCA9IHtcbiAgICAgIGxheWVyLFxuICAgICAgZmllbGRzXG4gICAgfTtcblxuICAgIGNvbnN0IHZpc0NvbmZpZ3VyYXRvclByb3BzID0ge1xuICAgICAgLi4uY29tbW9uQ29uZmlnUHJvcCxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLnByb3BzLnVwZGF0ZUxheWVyVmlzQ29uZmlnXG4gICAgfTtcblxuICAgIGNvbnN0IGxheWVyQ29uZmlndXJhdG9yUHJvcHMgPSB7XG4gICAgICAuLi5jb21tb25Db25maWdQcm9wLFxuICAgICAgb25DaGFuZ2U6IHVwZGF0ZUxheWVyQ29uZmlnXG4gICAgfTtcblxuICAgIGNvbnN0IGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzID0ge1xuICAgICAgLi4uY29tbW9uQ29uZmlnUHJvcCxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLnByb3BzLnVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJUZW1wbGF0ZSA9XG4gICAgICBsYXllci50eXBlICYmIGBfcmVuZGVyJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIobGF5ZXIudHlwZSl9TGF5ZXJDb25maWdgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMYXllckNvbmZpZ3VyYXRvcj5cbiAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydiYXNpYyd9PlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhkYXRhc2V0cykubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgICA8U291cmNlRGF0YVNlbGVjdG9yXG4gICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgaWQ9e2xheWVyLmlkfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17bGF5ZXIudHllcCAmJiBjb25maWcuY29sdW1uc31cbiAgICAgICAgICAgICAgZGF0YUlkPXtjb25maWcuZGF0YUlkfVxuICAgICAgICAgICAgICBvblNlbGVjdD17dmFsdWUgPT4gdXBkYXRlTGF5ZXJDb25maWcoe2RhdGFJZDogdmFsdWV9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8TGF5ZXJUeXBlU2VsZWN0b3JcbiAgICAgICAgICAgIGxheWVyPXtsYXllcn1cbiAgICAgICAgICAgIGxheWVyVHlwZU9wdGlvbnM9e2xheWVyVHlwZU9wdGlvbnN9XG4gICAgICAgICAgICBvblNlbGVjdD17dXBkYXRlTGF5ZXJUeXBlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExheWVyQ29sdW1uQ29uZmlnXG4gICAgICAgICAgICBsYXllcj17bGF5ZXJ9XG4gICAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cbiAgICAgICAgICAgIGZpZWxkUGFpcnM9e2ZpZWxkUGFpcnN9XG4gICAgICAgICAgICB1cGRhdGVMYXllckNvbmZpZz17dXBkYXRlTGF5ZXJDb25maWd9XG4gICAgICAgICAgICB1cGRhdGVMYXllclR5cGU9e3RoaXMucHJvcHMudXBkYXRlTGF5ZXJUeXBlfVxuICAgICAgICAgICAgb3Blbk1vZGFsPXt0aGlzLnByb3BzLm9wZW5Nb2RhbH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgIHt0aGlzW3JlbmRlclRlbXBsYXRlXSAmJlxuICAgICAgICAgIHRoaXNbcmVuZGVyVGVtcGxhdGVdKHtcbiAgICAgICAgICAgIGxheWVyLFxuICAgICAgICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICAgICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wcyxcbiAgICAgICAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHNcbiAgICAgICAgICB9KX1cbiAgICAgIDwvU3R5bGVkTGF5ZXJDb25maWd1cmF0b3I+XG4gICAgKTtcbiAgfVxufVxuXG4vKlxuICogQ29tcG9uZW50aXplIGNvbmZpZyBjb21wb25lbnQgaW50byBwdXJlIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xuICovXG5cbmV4cG9ydCBjb25zdCBMYXllckNvbG9yU2VsZWN0b3IgPSAoe2xheWVyLCBvbkNoYW5nZSwgbGFiZWx9KSA9PiAoXG4gIDxTaWRlUGFuZWxTZWN0aW9uIGRpc2FibGVkPXtsYXllci5jb25maWcuY29sb3JGaWVsZH0+XG4gICAgPENvbG9yU2VsZWN0b3JcbiAgICAgIGNvbG9yU2V0cz17W1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogbGF5ZXIuY29uZmlnLmNvbG9yLFxuICAgICAgICAgIHNldENvbG9yOiByZ2JWYWx1ZSA9PiBvbkNoYW5nZSh7Y29sb3I6IHJnYlZhbHVlfSlcbiAgICAgICAgfVxuICAgICAgXX1cbiAgICAvPlxuICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4pO1xuXG5leHBvcnQgY29uc3QgQXJjTGF5ZXJDb2xvclNlbGVjdG9yID0gKHtcbiAgbGF5ZXIsXG4gIG9uQ2hhbmdlQ29uZmlnLFxuICBvbkNoYW5nZVZpc0NvbmZpZ1xufSkgPT4gKFxuICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICA8Q29sb3JTZWxlY3RvclxuICAgICAgY29sb3JTZXRzPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiBsYXllci5jb25maWcuY29sb3IsXG4gICAgICAgICAgc2V0Q29sb3I6IHJnYlZhbHVlID0+IG9uQ2hhbmdlQ29uZmlnKHtjb2xvcjogcmdiVmFsdWV9KSxcbiAgICAgICAgICBsYWJlbDogJ1NvdXJjZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6XG4gICAgICAgICAgICBsYXllci5jb25maWcudmlzQ29uZmlnLnRhcmdldENvbG9yIHx8IGxheWVyLmNvbmZpZy5jb2xvcixcbiAgICAgICAgICBzZXRDb2xvcjogcmdiVmFsdWUgPT4gb25DaGFuZ2VWaXNDb25maWcoe3RhcmdldENvbG9yOiByZ2JWYWx1ZX0pLFxuICAgICAgICAgIGxhYmVsOiAnVGFyZ2V0J1xuICAgICAgICB9XG4gICAgICBdfVxuICAgIC8+XG4gIDwvU2lkZVBhbmVsU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBjb25zdCBDb2xvclJhbmdlQ29uZmlnID0gKHtsYXllciwgb25DaGFuZ2V9KSA9PiAoXG4gIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgIDxDb2xvclNlbGVjdG9yXG4gICAgICBjb2xvclNldHM9e1tcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IGxheWVyLmNvbmZpZy52aXNDb25maWcuY29sb3JSYW5nZSxcbiAgICAgICAgICBpc1JhbmdlOiB0cnVlLFxuICAgICAgICAgIHNldENvbG9yOiBjb2xvclJhbmdlID0+IG9uQ2hhbmdlKHtjb2xvclJhbmdlfSlcbiAgICAgICAgfVxuICAgICAgXX1cbiAgICAvPlxuICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4pO1xuXG5leHBvcnQgY29uc3QgQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvciA9ICh7XG4gIGxheWVyLFxuICBjaGFubmVsLFxuICBvbkNoYW5nZSxcbiAgZmllbGRzLFxuICBkZXNjcmlwdGlvblxufSkgPT4ge1xuICBjb25zdCB7XG4gICAgY2hhbm5lbFNjYWxlVHlwZSxcbiAgICBkb21haW4sXG4gICAgZmllbGQsXG4gICAga2V5LFxuICAgIHByb3BlcnR5LFxuICAgIHJhbmdlLFxuICAgIHNjYWxlLFxuICAgIGRlZmF1bHRNZWFzdXJlLFxuICAgIHN1cHBvcnRlZEZpZWxkVHlwZXNcbiAgfSA9IGNoYW5uZWw7XG4gIGNvbnN0IGNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzID0gc3VwcG9ydGVkRmllbGRUeXBlcyB8fCBDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFNbY2hhbm5lbFNjYWxlVHlwZV07XG4gIGNvbnN0IHN1cHBvcnRlZEZpZWxkcyA9IGZpZWxkcy5maWx0ZXIoKHt0eXBlfSkgPT5cbiAgICBjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcy5pbmNsdWRlcyh0eXBlKVxuICApO1xuICBjb25zdCBzY2FsZU9wdGlvbnMgPSBsYXllci5nZXRTY2FsZU9wdGlvbnMoY2hhbm5lbC5rZXkpO1xuICBjb25zdCBzaG93U2NhbGUgPSAhbGF5ZXIuaXNBZ2dyZWdhdGVkICYmIGxheWVyLmNvbmZpZ1tzY2FsZV0gJiYgc2NhbGVPcHRpb25zLmxlbmd0aCA+IDE7XG4gIGNvbnN0IGRlZmF1bHREZXNjcmlwdGlvbiA9IGBDYWxjdWxhdGUgJHtwcm9wZXJ0eX0gYmFzZWQgb24gc2VsZWN0ZWQgZmllbGRgO1xuXG4gIHJldHVybiAoXG4gICAgPFZpc0NvbmZpZ0J5RmllbGRTZWxlY3RvclxuICAgICAgY2hhbm5lbD17Y2hhbm5lbC5rZXl9XG4gICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb24gfHwgZGVmYXVsdERlc2NyaXB0aW9ufVxuICAgICAgZG9tYWluPXtsYXllci5jb25maWdbZG9tYWluXX1cbiAgICAgIGZpZWxkcz17c3VwcG9ydGVkRmllbGRzfVxuICAgICAgaWQ9e2xheWVyLmlkfVxuICAgICAga2V5PXtgJHtrZXl9LWNoYW5uZWwtc2VsZWN0b3JgfVxuICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgcGxhY2Vob2xkZXI9e2RlZmF1bHRNZWFzdXJlIHx8ICdTZWxlY3QgYSBmaWVsZCd9XG4gICAgICByYW5nZT17bGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1tyYW5nZV19XG4gICAgICBzY2FsZU9wdGlvbnM9e3NjYWxlT3B0aW9uc31cbiAgICAgIHNjYWxlVHlwZT17c2NhbGUgPyBsYXllci5jb25maWdbc2NhbGVdIDogbnVsbH1cbiAgICAgIHNlbGVjdGVkRmllbGQ9e2xheWVyLmNvbmZpZ1tmaWVsZF19XG4gICAgICBzaG93U2NhbGU9e3Nob3dTY2FsZX1cbiAgICAgIHVwZGF0ZUZpZWxkPXt2YWwgPT4gb25DaGFuZ2Uoe1tmaWVsZF06IHZhbH0sIGtleSl9XG4gICAgICB1cGRhdGVTY2FsZT17dmFsID0+IG9uQ2hhbmdlKHtbc2NhbGVdOiB2YWx9LCBrZXkpfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgQWdnckNvbG9yU2NhbGVTZWxlY3RvciA9ICh7bGF5ZXIsIG9uQ2hhbmdlfSkgPT4ge1xuICBjb25zdCBzY2FsZU9wdGlvbnMgPSBsYXllci5nZXRTY2FsZU9wdGlvbnMoJ2NvbG9yJyk7XG4gIHJldHVybiAoXG4gICAgQXJyYXkuaXNBcnJheShzY2FsZU9wdGlvbnMpICYmIHNjYWxlT3B0aW9ucy5sZW5ndGggPiAxID9cbiAgICAgIDxEaW1lbnNpb25TY2FsZVNlbGVjdG9yXG4gICAgICAgIGxhYmVsPVwiQ29sb3IgU2NhbGVcIlxuICAgICAgICBvcHRpb25zPXtzY2FsZU9wdGlvbnN9XG4gICAgICAgIHNjYWxlVHlwZT17bGF5ZXIuY29uZmlnLmNvbG9yU2NhbGV9XG4gICAgICAgIG9uU2VsZWN0PXt2YWwgPT4gb25DaGFuZ2Uoe2NvbG9yU2NhbGU6IHZhbH0sICdjb2xvcicpfVxuICAgICAgLz4gOiBudWxsXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgQWdncmVnYXRpb25UeXBlU2VsZWN0b3IgPSAoe2xheWVyLCBjaGFubmVsLCBvbkNoYW5nZX0pID0+IHtcbiAgY29uc3Qge2ZpZWxkLCBhZ2dyZWdhdGlvbiwga2V5fSA9IGNoYW5uZWw7XG4gIGNvbnN0IHNlbGVjdGVkRmllbGQgPSBsYXllci5jb25maWdbZmllbGRdO1xuICBjb25zdCB7dmlzQ29uZmlnfSA9IGxheWVyLmNvbmZpZztcblxuICAvLyBhZ2dyZWdhdGlvbiBzaG91bGQgb25seSBiZSBzZWxlY3RhYmxlIHdoZW4gZmllbGQgaXMgc2VsZWN0ZWRcbiAgY29uc3QgYWdncmVnYXRpb25PcHRpb25zID0gbGF5ZXIuZ2V0QWdncmVnYXRpb25PcHRpb25zKGtleSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgIDxQYW5lbExhYmVsPntgQWdncmVnYXRlICR7c2VsZWN0ZWRGaWVsZC5uYW1lfSBieWB9PC9QYW5lbExhYmVsPlxuICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICBzZWxlY3RlZEl0ZW1zPXt2aXNDb25maWdbYWdncmVnYXRpb25dfVxuICAgICAgICBvcHRpb25zPXthZ2dyZWdhdGlvbk9wdGlvbnN9XG4gICAgICAgIG11bHRpU2VsZWN0PXtmYWxzZX1cbiAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PlxuICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2aXNDb25maWc6IHtcbiAgICAgICAgICAgICAgICAuLi5sYXllci5jb25maWcudmlzQ29uZmlnLFxuICAgICAgICAgICAgICAgIFthZ2dyZWdhdGlvbl06IHZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFubmVsLmtleVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICk7XG59O1xuLyogZXNsaW50LWVuYWJsZSBtYXgtcGFyYW1zICovXG4iXX0=