'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.OVERLAY_TYPE = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends6 = require('babel-runtime/helpers/extends');

var _extends7 = _interopRequireDefault(_extends6);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _colorUtils = require('../utils/color-utils');

var _window = require('global/window');

var _keymirror = require('keymirror');

var _keymirror2 = _interopRequireDefault(_keymirror);

var _defaultLayerIcon = require('./default-layer-icon');

var _defaultLayerIcon2 = _interopRequireDefault(_defaultLayerIcon);

var _defaultSettings = require('../constants/default-settings');

var _customColorRanges = require('../constants/custom-color-ranges');

var _layerFactory = require('./layer-factory');

var _utils = require('../utils/utils');

var _dataUtils = require('../utils/data-utils');

var _dataScaleUtils = require('../utils/data-scale-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(generateColor); // Copyright (c) 2018 Uber Technologies, Inc.
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

/**
 * Approx. number of points to sample in a large data set
 * @type {number}
 */
var MAX_SAMPLE_SIZE = 5000;

var OVERLAY_TYPE = exports.OVERLAY_TYPE = (0, _keymirror2.default)({
  deckgl: null,
  mapboxgl: null
});

var layerColors = Object.values(_customColorRanges.DataVizColors).map(_colorUtils.hexToRgb);
function generateColor() {
  var index;
  return _regenerator2.default.wrap(function generateColor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          index = 0;

        case 1:
          if (!(index < layerColors.length + 1)) {
            _context.next = 7;
            break;
          }

          if (index === layerColors.length) {
            index = 0;
          }
          _context.next = 5;
          return layerColors[index++];

        case 5:
          _context.next = 1;
          break;

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

var colorMaker = generateColor();
var defaultGetFieldValue = function defaultGetFieldValue(field, d) {
  return d[field.tableFieldIndex - 1];
};

var Layer = function () {
  function Layer() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, Layer);

    this.id = props.id || (0, _utils.generateHashId)(6);

    // meta
    this.meta = {};

    // visConfigSettings
    this.visConfigSettings = {};

    this.config = this.getDefaultLayerConfig((0, _extends7.default)({
      columns: this.getLayerColumns()
    }, props));
  }

  (0, _createClass3.default)(Layer, [{
    key: 'getDefaultLayerConfig',
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return {
        dataId: props.dataId || null,
        label: props.label || 'new layer',
        color: props.color || colorMaker.next().value,
        columns: props.columns || null,
        isVisible: props.isVisible || false,
        isConfigActive: props.isConfigActive || false,
        highlightColor: props.highlightColor || [252, 242, 26],

        // TODO: refactor this into separate visual Channel config
        // color by field, domain is set by filters, field, scale type
        colorField: null,
        colorDomain: [0, 1],
        colorScale: 'quantile',

        // color by size, domain is set by filters, field, scale type
        sizeDomain: [0, 1],
        sizeScale: 'linear',
        sizeField: null,

        visConfig: {}
      };
    }

    /**
     * Get the description of a visualChannel config
     * @param key
     * @returns {{label: string, measure: (string|string)}}
     */

  }, {
    key: 'getVisualChannelDescription',
    value: function getVisualChannelDescription(key) {
      // e.g. label: Color, measure: Vehicle Type
      return {
        label: this.visConfigSettings[this.visualChannels[key].range].label,
        measure: this.config[this.visualChannels[key].field] ? this.config[this.visualChannels[key].field].name : this.visualChannels[key].defaultMeasure
      };
    }

    /**
     * Assign a field to layer column, return column config
     * @param key - Column Key
     * @param field - Selected field
     * @returns {{}} - Column config
     */

  }, {
    key: 'assignColumn',
    value: function assignColumn(key, field) {
      // field value could be null for optional columns
      var update = field ? {
        value: field.name,
        fieldIdx: field.tableFieldIndex - 1
      } : { value: null, fieldIdx: -1 };

      return (0, _extends7.default)({}, this.config.columns, (0, _defineProperty3.default)({}, key, (0, _extends7.default)({}, this.config.columns[key], update)));
    }

    /**
     * Assign a field pair to column config, return column config
     * @param key - Column Key
     * @param pair - field Pair
     * @returns {{}} - Column config
     */

  }, {
    key: 'assignColumnPairs',
    value: function assignColumnPairs(key, pair) {
      var _extends3;

      if (!this.columnPairs || !this.columnPairs[key]) {
        // should not end in this state
        return this.config.columns;
      }

      var _columnPairs$key = this.columnPairs[key],
          partnerKey = _columnPairs$key.pair,
          fieldPairKey = _columnPairs$key.fieldPairKey;
      var partnerFieldPairKey = this.columnPairs[partnerKey].fieldPairKey;


      return (0, _extends7.default)({}, this.config.columns, (_extends3 = {}, (0, _defineProperty3.default)(_extends3, key, pair[fieldPairKey]), (0, _defineProperty3.default)(_extends3, partnerKey, pair[partnerFieldPairKey]), _extends3));
    }

    /**
      * Calculate a radius zoom multiplier to render points, so they are visible in all zoom level
      * @param mapState
      * @param mapState.zoom - actual zoom
      * @param mapState.zoomOffset - zoomOffset when render in the plot container for export image
      * @returns {number}
      */

  }, {
    key: 'getZoomFactor',
    value: function getZoomFactor(_ref) {
      var zoom = _ref.zoom,
          _ref$zoomOffset = _ref.zoomOffset,
          zoomOffset = _ref$zoomOffset === undefined ? 0 : _ref$zoomOffset;

      return Math.pow(2, Math.max(14 - zoom + zoomOffset, 0));
    }

    /**
      * Calculate a elevation zoom multiplier to render points, so they are visible in all zoom level
      * @param mapState
      * @param mapState.zoom - actual zoom
      * @param mapState.zoomOffset - zoomOffset when render in the plot container for export image
      * @returns {number}
      */

  }, {
    key: 'getElevationZoomFactor',
    value: function getElevationZoomFactor(_ref2) {
      var zoom = _ref2.zoom,
          _ref2$zoomOffset = _ref2.zoomOffset,
          zoomOffset = _ref2$zoomOffset === undefined ? 0 : _ref2$zoomOffset;

      return Math.pow(2, Math.max(8 - zoom + zoomOffset, 0));
    }
  }, {
    key: 'formatLayerData',
    value: function formatLayerData(data, allData, filteredIndex) {
      return {};
    }
  }, {
    key: 'renderLayer',
    value: function renderLayer() {
      return [];
    }
  }, {
    key: 'getHoverData',
    value: function getHoverData(object) {
      if (!object) {
        return null;
      }
      // by default, each entry of layerData should have a data property points
      // to the original item in the allData array
      // each layer can implement its own getHoverData method
      return object.data;
    }

    /**
     * When change layer type, try to copy over layer configs as much as possible
     * @param configToCopy - config to copy over
     * @param visConfigSettings - visConfig settings of config to copy
     */

  }, {
    key: 'assignConfigToLayer',
    value: function assignConfigToLayer(configToCopy, visConfigSettings) {
      var _this = this;

      // don't deep merge visualChannel field
      var notToDeepMerge = Object.values(this.visualChannels).map(function (v) {
        return v.field;
      });

      // don't deep merge color range, reversed: is not a key by default
      notToDeepMerge.push('colorRange');

      // don't copy over domain
      var notToCopy = Object.values(this.visualChannels).map(function (v) {
        return v.domain;
      });

      // if range is for the same property group copy it, otherwise, not to copy
      Object.values(this.visualChannels).forEach(function (v) {
        if (configToCopy.visConfig[v.range] && visConfigSettings[v.range].group !== _this.visConfigSettings[v.range].group) {
          notToCopy.push(v.range);
        }
      });

      // don't copy over visualChannel range
      var currentConfig = this.config;
      var copied = this.copyLayerConfig(currentConfig, configToCopy, { notToDeepMerge: notToDeepMerge, notToCopy: notToCopy });

      this.updateLayerConfig(copied);
      // validate visualChannel field type and scale types
      Object.keys(this.visualChannels).forEach(function (channel) {
        _this.validateVisualChannel(channel);
      });
    }

    /*
     * Recursively copy config over to an empty layer
     * when received saved config, or copy config over from a different layer type
     * make sure to only copy over value to existing keys
     * @param {object} currentConfig - existing config to be override
     * @param {object} configToCopy - new Config to copy over
     * @param {string[]} notToDeepMerge - array of properties to not to be deep copied
     * @param {string[]} notToCopy - array of properties not to copy
     * @returns {object} - copied config
     */

  }, {
    key: 'copyLayerConfig',
    value: function copyLayerConfig(currentConfig, configToCopy) {
      var _this2 = this;

      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref3$notToDeepMerge = _ref3.notToDeepMerge,
          notToDeepMerge = _ref3$notToDeepMerge === undefined ? [] : _ref3$notToDeepMerge,
          _ref3$notToCopy = _ref3.notToCopy,
          notToCopy = _ref3$notToCopy === undefined ? [] : _ref3$notToCopy;

      var copied = {};
      Object.keys(currentConfig).forEach(function (key) {
        if ((0, _utils.isPlainObject)(currentConfig[key]) && (0, _utils.isPlainObject)(configToCopy[key]) && !notToDeepMerge.includes(key) && !notToCopy.includes(key)) {
          // recursively assign object value
          copied[key] = _this2.copyLayerConfig(currentConfig[key], configToCopy[key], { notToDeepMerge: notToDeepMerge, notToCopy: notToCopy });
        } else if ((0, _utils.notNullorUndefined)(configToCopy[key]) && !notToCopy.includes(key)) {
          // copy
          copied[key] = configToCopy[key];
        } else {
          // keep existing
          copied[key] = currentConfig[key];
        }
      });

      return copied;
    }
  }, {
    key: 'registerVisConfig',
    value: function registerVisConfig(layerVisConfigs) {
      var _this3 = this;

      Object.keys(layerVisConfigs).forEach(function (item) {
        if (typeof item === 'string' && _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]]) {
          // if assigned one of default LAYER_CONFIGS
          _this3.config.visConfig[item] = _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]].defaultValue;
          _this3.visConfigSettings[item] = _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]];
        } else if (['type', 'defaultValue'].every(function (p) {
          return layerVisConfigs[item][p];
        })) {
          // if provided customized visConfig, and has type && defaultValue
          // TODO: further check if customized visConfig is valid
          _this3.config.visConfig[item] = layerVisConfigs[item].defaultValue;
          _this3.visConfigSettings[item] = layerVisConfigs[item];
        }
      });
    }
  }, {
    key: 'getLayerColumns',
    value: function getLayerColumns() {
      var required = this.requiredLayerColumns.reduce(function (accu, key) {
        return (0, _extends7.default)({}, accu, (0, _defineProperty3.default)({}, key, { value: null, fieldIdx: -1 }));
      }, {});
      var optional = this.optionalColumns.reduce(function (accu, key) {
        return (0, _extends7.default)({}, accu, (0, _defineProperty3.default)({}, key, { value: null, fieldIdx: -1, optional: true }));
      }, {});

      return (0, _extends7.default)({}, required, optional);
    }
  }, {
    key: 'updateLayerConfig',
    value: function updateLayerConfig(newConfig) {
      this.config = (0, _extends7.default)({}, this.config, newConfig);
      return this;
    }
  }, {
    key: 'updateLayerVisConfig',
    value: function updateLayerVisConfig(newVisConfig) {
      this.config.visConfig = (0, _extends7.default)({}, this.config.visConfig, newVisConfig);
      return this;
    }
    /**
     * Check whether layer has all columns
     *
     * @param {object} layer
     * @returns {boolean} yes or no
     */

  }, {
    key: 'hasAllColumns',
    value: function hasAllColumns() {
      var columns = this.config.columns;

      return columns && Object.values(columns).every(function (v) {
        return Boolean(v.optional || v.value && v.fieldIdx > -1);
      });
    }

    /**
     * Check whether layer has data
     *
     * @param {object} layer
     * @param {Array | Object} layerData
     * @returns {boolean} yes or no
     */

  }, {
    key: 'hasLayerData',
    value: function hasLayerData(layerData) {
      if (!layerData) {
        return false;
      }

      return Boolean(layerData.data && layerData.data.length);
    }
  }, {
    key: 'isValidToSave',
    value: function isValidToSave() {
      return this.type && this.hasAllColumns();
    }
  }, {
    key: 'shouldRenderLayer',
    value: function shouldRenderLayer(data) {
      return this.type && this.hasAllColumns() && this.config.isVisible && this.hasLayerData(data);
    }
  }, {
    key: 'getVisChannelScale',
    value: function getVisChannelScale(scale, domain, range, fixed) {
      return _defaultSettings.SCALE_FUNC[fixed ? 'linear' : scale]().domain(domain).range(fixed ? domain : range);
    }
  }, {
    key: 'getPointsBounds',
    value: function getPointsBounds(allData, getPosition) {
      // no need to loop through the entire dataset
      // get a sample of data to calculate bounds
      var sampleData = allData.length > MAX_SAMPLE_SIZE ? (0, _dataUtils.getSampleData)(allData, MAX_SAMPLE_SIZE) : allData;
      var points = sampleData.map(getPosition);

      var latBounds = (0, _dataUtils.getLatLngBounds)(points, 1, [-90, 90]);
      var lngBounds = (0, _dataUtils.getLatLngBounds)(points, 0, [-180, 180]);

      if (!latBounds || !lngBounds) {
        return null;
      }

      return [lngBounds[0], latBounds[0], lngBounds[1], latBounds[1]];
    }
  }, {
    key: 'getLightSettingsFromBounds',
    value: function getLightSettingsFromBounds(bounds) {
      return Array.isArray(bounds) && bounds.length >= 4 ? (0, _extends7.default)({}, _defaultSettings.DEFAULT_LIGHT_SETTINGS, {
        lightsPosition: [].concat((0, _toConsumableArray3.default)(bounds.slice(0, 2)), [_defaultSettings.DEFAULT_LIGHT_SETTINGS.lightsPosition[2]], (0, _toConsumableArray3.default)(bounds.slice(2, 4)), [_defaultSettings.DEFAULT_LIGHT_SETTINGS.lightsPosition[5]])
      }) : _defaultSettings.DEFAULT_LIGHT_SETTINGS;
    }
  }, {
    key: 'getEncodedChannelValue',
    value: function getEncodedChannelValue(scale, data, field) {
      var defaultValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _defaultSettings.NO_VALUE_COLOR;
      var getValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultGetFieldValue;
      var type = field.type;

      var value = getValue(field, data);
      var attributeValue = void 0;
      if (type === _defaultSettings.ALL_FIELD_TYPES.timestamp) {
        // shouldn't need to convert here
        // scale Function should take care of it
        attributeValue = scale(new Date(value));
      } else {
        attributeValue = scale(value);
      }

      if (!attributeValue) {
        attributeValue = defaultValue;
      }

      return attributeValue;
    }
  }, {
    key: 'updateMeta',
    value: function updateMeta(meta) {
      this.meta = (0, _extends7.default)({}, this.meta, meta);
    }

    /**
     * helper function to update one layer domain when state.data changed
     * if state.data change is due ot update filter, newFiler will be passed
     * called by updateAllLayerDomainData
     * @param {Object} dataset
     * @param {Object} newFilter
     * @returns {object} layer
     */

  }, {
    key: 'updateLayerDomain',
    value: function updateLayerDomain(dataset, newFilter) {
      var _this4 = this;

      Object.values(this.visualChannels).forEach(function (channel) {
        var scale = channel.scale;

        var scaleType = _this4.config[scale];
        // ordinal domain is based on allData, if only filter changed
        // no need to update ordinal domain
        if (!newFilter || scaleType !== _defaultSettings.SCALE_TYPES.ordinal) {
          var domain = channel.domain;

          var updatedDomain = _this4.calculateLayerDomain(dataset, channel);

          _this4.updateLayerConfig((0, _defineProperty3.default)({}, domain, updatedDomain));
        }
      });

      return this;
    }

    /**
     * Validate visual channel field and scales based on supported field & scale type
     * @param channel
     */

  }, {
    key: 'validateVisualChannel',
    value: function validateVisualChannel(channel) {
      this.validateFieldType(channel);
      this.validateScale(channel);
    }

    /**
     * Validate field type based on channelScaleType
     */

  }, {
    key: 'validateFieldType',
    value: function validateFieldType(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          channelScaleType = visualChannel.channelScaleType,
          supportedFieldTypes = visualChannel.supportedFieldTypes;


      if (this.config[field]) {
        // if field is selected, check if field type is supported
        var channelSupportedFieldTypes = supportedFieldTypes || _defaultSettings.CHANNEL_SCALE_SUPPORTED_FIELDS[channelScaleType];

        if (!channelSupportedFieldTypes.includes(this.config[field].type)) {
          // field type is not supported, set it back to null
          // set scale back to default
          this.updateLayerConfig((0, _defineProperty3.default)({}, field, null));
        }
      }
    }

    /**
     * Validate scale type based on aggregation
     */

  }, {
    key: 'validateScale',
    value: function validateScale(channel) {
      var visualChannel = this.visualChannels[channel];
      var scale = visualChannel.scale;

      if (!scale) {
        // visualChannel doesn't have scale
        return;
      }
      var scaleOptions = this.getScaleOptions(channel);
      // check if current selected scale is
      // supported, if not, change to default
      if (!scaleOptions.includes(this.config[scale])) {
        this.updateLayerConfig((0, _defineProperty3.default)({}, scale, scaleOptions[0]));
      }
    }

    /**
     * Get scale options based on current field
     * @param {string} channel
     * @returns {string[]}
     */

  }, {
    key: 'getScaleOptions',
    value: function getScaleOptions(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          scale = visualChannel.scale,
          channelScaleType = visualChannel.channelScaleType;


      return this.config[field] ? _defaultSettings.FIELD_OPTS[this.config[field].type].scale[channelScaleType] : [this.getDefaultLayerConfig()[scale]];
    }
  }, {
    key: 'updateLayerVisualChannel',
    value: function updateLayerVisualChannel(dataset, channel) {
      var visualChannel = this.visualChannels[channel];

      this.validateVisualChannel(channel);
      // calculate layer channel domain
      var updatedDomain = this.calculateLayerDomain(dataset, visualChannel);

      this.updateLayerConfig((0, _defineProperty3.default)({}, visualChannel.domain, updatedDomain));
    }
  }, {
    key: 'calculateLayerDomain',
    value: function calculateLayerDomain(dataset, visualChannel) {
      var allData = dataset.allData,
          filteredIndexForDomain = dataset.filteredIndexForDomain;

      var defaultDomain = [0, 1];
      var scale = visualChannel.scale;

      var scaleType = this.config[scale];

      var field = this.config[visualChannel.field];
      if (!field) {
        // if colorField or sizeField were set back to null
        return defaultDomain;
      }

      if (!_defaultSettings.SCALE_TYPES[scaleType]) {
        _window.console.error('scale type ' + scaleType + ' not supported');
        return defaultDomain;
      }

      // TODO: refactor to add valueAccessor to field
      var fieldIdx = field.tableFieldIndex - 1;
      var isTime = field.type === _defaultSettings.ALL_FIELD_TYPES.timestamp;
      var valueAccessor = _dataUtils.maybeToDate.bind(null, isTime, fieldIdx, field.format);
      var indexValueAccessor = function indexValueAccessor(i) {
        return valueAccessor(allData[i]);
      };

      var sortFunction = (0, _dataUtils.getSortingFunction)(field.type);

      switch (scaleType) {
        case _defaultSettings.SCALE_TYPES.ordinal:
        case _defaultSettings.SCALE_TYPES.point:
          // do not recalculate ordinal domain based on filtered data
          // don't need to update ordinal domain every time
          return (0, _dataScaleUtils.getOrdinalDomain)(allData, valueAccessor);

        case _defaultSettings.SCALE_TYPES.quantile:
          return (0, _dataScaleUtils.getQuantileDomain)(filteredIndexForDomain, indexValueAccessor, sortFunction);

        case _defaultSettings.SCALE_TYPES.quantize:
        case _defaultSettings.SCALE_TYPES.linear:
        case _defaultSettings.SCALE_TYPES.sqrt:
        default:
          return (0, _dataScaleUtils.getLinearDomain)(filteredIndexForDomain, indexValueAccessor);
      }
    }
  }, {
    key: 'isLayerHovered',
    value: function isLayerHovered(objectInfo) {
      return objectInfo && objectInfo.layer && objectInfo.picked && objectInfo.layer.props.id === this.id;
    }
  }, {
    key: 'getRadiusScaleByZoom',
    value: function getRadiusScaleByZoom(mapState, fixedRadius) {
      var radiusChannel = Object.values(this.visualChannels).find(function (vc) {
        return vc.property === 'radius';
      });

      if (!radiusChannel) {
        return 1;
      }

      var field = radiusChannel.field;
      var fixed = fixedRadius === undefined ? this.config.visConfig.fixedRadius : fixedRadius;
      var radius = this.config.visConfig.radius;


      return fixed ? 1 : (this.config[field] ? 1 : radius) * this.getZoomFactor(mapState);
    }
  }, {
    key: 'shouldCalculateLayerData',
    value: function shouldCalculateLayerData(props) {
      var _this5 = this;

      return props.some(function (p) {
        return !_this5.noneLayerDataAffectingProps.includes(p);
      });
    }
  }, {
    key: 'layerIcon',
    get: function get() {
      return _defaultLayerIcon2.default;
    }
  }, {
    key: 'overlayType',
    get: function get() {
      return OVERLAY_TYPE.deckgl;
    }
  }, {
    key: 'type',
    get: function get() {
      return null;
    }
  }, {
    key: 'name',
    get: function get() {
      return this.type;
    }
  }, {
    key: 'isAggregated',
    get: function get() {
      return false;
    }
  }, {
    key: 'requiredLayerColumns',
    get: function get() {
      return [];
    }
  }, {
    key: 'optionalColumns',
    get: function get() {
      return [];
    }
  }, {
    key: 'noneLayerDataAffectingProps',
    get: function get() {
      return ['label', 'opacity', 'thickness', 'isVisible'];
    }
  }, {
    key: 'visualChannels',
    get: function get() {
      return {
        color: {
          property: 'color',
          field: 'colorField',
          scale: 'colorScale',
          domain: 'colorDomain',
          range: 'colorRange',
          key: 'color',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.color
        },
        size: {
          property: 'size',
          field: 'sizeField',
          scale: 'sizeScale',
          domain: 'sizeDomain',
          range: 'sizeRange',
          key: 'size',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.size
        }
      };
    }

    /*
     * Column pairs maps layer column to a specific field pairs,
     * By default, it is set to null
     */

  }, {
    key: 'columnPairs',
    get: function get() {
      return null;
    }

    /*
     * Default point column pairs, can be used for point based layers: point, icon etc.
     */

  }, {
    key: 'defaultPointColumnPairs',
    get: function get() {
      return {
        lat: { pair: 'lng', fieldPairKey: 'lat' },
        lng: { pair: 'lat', fieldPairKey: 'lng' }
      };
    }

    /*
     * Default link column pairs, can be used for link based layers: arc, line etc
     */

  }, {
    key: 'defaultLinkColumnPairs',
    get: function get() {
      return {
        lat0: { pair: 'lng0', fieldPairKey: 'lat' },
        lng0: { pair: 'lat0', fieldPairKey: 'lng' },
        lat1: { pair: 'lng1', fieldPairKey: 'lat' },
        lng1: { pair: 'lat1', fieldPairKey: 'lng' }
      };
    }

    /*
     * Given a dataset, automatically create layers based on it
     * and return the props
     * By default, no layers will be found
     */

  }], [{
    key: 'findDefaultLayerProps',
    value: function findDefaultLayerProps(fieldPairs, dataId) {
      return null;
    }

    /**
     * Given a array of preset required column names
     * found field that has the same name to set as layer column
     *
     * @param {object[]} defaultFields
     * @param {object[]} allFields
     * @returns {object[] | null} all possible required layer column pairs
     */

  }, {
    key: 'findDefaultColumnField',
    value: function findDefaultColumnField(defaultFields, allFields) {
      // find all matched fields for each required col
      var requiredColumns = Object.keys(defaultFields).reduce(function (prev, key) {
        var requiredFields = allFields.filter(function (f) {
          return f.name === defaultFields[key] || defaultFields[key].includes(f.name);
        });

        prev[key] = requiredFields.length ? requiredFields.map(function (f) {
          return {
            value: f.name,
            fieldIdx: f.tableFieldIndex - 1
          };
        }) : null;
        return prev;
      }, {});

      if (!Object.values(requiredColumns).every(Boolean)) {
        // if any field missing, return null
        return null;
      }

      return this.getAllPossibleColumnParis(requiredColumns);
    }
  }, {
    key: 'getAllPossibleColumnParis',
    value: function getAllPossibleColumnParis(requiredColumns) {
      // for multiple matched field for one required column, return multiple
      // combinations, e. g. if column a has 2 matched, column b has 3 matched
      // 6 possible column pairs will be returned
      var allKeys = Object.keys(requiredColumns);
      var pointers = allKeys.map(function (k, i) {
        return i === allKeys.length - 1 ? -1 : 0;
      });
      var countPerKey = allKeys.map(function (k) {
        return requiredColumns[k].length;
      });
      var pairs = [];

      /* eslint-disable no-loop-func */
      while (incrementPointers(pointers, countPerKey, pointers.length - 1)) {
        var newPair = pointers.reduce(function (prev, cuur, i) {
          prev[allKeys[i]] = requiredColumns[allKeys[i]][cuur];
          return prev;
        }, {});

        pairs.push(newPair);
      }
      /* eslint-enable no-loop-func */

      // recursively increment pointers
      function incrementPointers(pts, counts, index) {
        if (index === 0 && pts[0] === counts[0] - 1) {
          // nothing to increment
          return false;
        }

        if (pts[index] + 1 < counts[index]) {
          pts[index] = pts[index] + 1;
          return true;
        }

        pts[index] = 0;
        return incrementPointers(pts, counts, index - 1);
      }

      return pairs;
    }
  }, {
    key: 'hexToRgb',
    value: function hexToRgb(c) {
      return (0, _colorUtils.hexToRgb)(c);
    }
  }]);
  return Layer;
}();

exports.default = Layer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXllcnMvYmFzZS1sYXllci5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNvbG9yIiwiTUFYX1NBTVBMRV9TSVpFIiwiT1ZFUkxBWV9UWVBFIiwiZGVja2dsIiwibWFwYm94Z2wiLCJsYXllckNvbG9ycyIsIk9iamVjdCIsInZhbHVlcyIsIkRhdGFWaXpDb2xvcnMiLCJtYXAiLCJoZXhUb1JnYiIsImluZGV4IiwibGVuZ3RoIiwiY29sb3JNYWtlciIsImRlZmF1bHRHZXRGaWVsZFZhbHVlIiwiZmllbGQiLCJkIiwidGFibGVGaWVsZEluZGV4IiwiTGF5ZXIiLCJwcm9wcyIsImlkIiwibWV0YSIsInZpc0NvbmZpZ1NldHRpbmdzIiwiY29uZmlnIiwiZ2V0RGVmYXVsdExheWVyQ29uZmlnIiwiY29sdW1ucyIsImdldExheWVyQ29sdW1ucyIsImRhdGFJZCIsImxhYmVsIiwiY29sb3IiLCJuZXh0IiwidmFsdWUiLCJpc1Zpc2libGUiLCJpc0NvbmZpZ0FjdGl2ZSIsImhpZ2hsaWdodENvbG9yIiwiY29sb3JGaWVsZCIsImNvbG9yRG9tYWluIiwiY29sb3JTY2FsZSIsInNpemVEb21haW4iLCJzaXplU2NhbGUiLCJzaXplRmllbGQiLCJ2aXNDb25maWciLCJrZXkiLCJ2aXN1YWxDaGFubmVscyIsInJhbmdlIiwibWVhc3VyZSIsIm5hbWUiLCJkZWZhdWx0TWVhc3VyZSIsInVwZGF0ZSIsImZpZWxkSWR4IiwicGFpciIsImNvbHVtblBhaXJzIiwicGFydG5lcktleSIsImZpZWxkUGFpcktleSIsInBhcnRuZXJGaWVsZFBhaXJLZXkiLCJ6b29tIiwiem9vbU9mZnNldCIsIk1hdGgiLCJwb3ciLCJtYXgiLCJkYXRhIiwiYWxsRGF0YSIsImZpbHRlcmVkSW5kZXgiLCJvYmplY3QiLCJjb25maWdUb0NvcHkiLCJub3RUb0RlZXBNZXJnZSIsInYiLCJwdXNoIiwibm90VG9Db3B5IiwiZG9tYWluIiwiZm9yRWFjaCIsImdyb3VwIiwiY3VycmVudENvbmZpZyIsImNvcGllZCIsImNvcHlMYXllckNvbmZpZyIsInVwZGF0ZUxheWVyQ29uZmlnIiwia2V5cyIsInZhbGlkYXRlVmlzdWFsQ2hhbm5lbCIsImNoYW5uZWwiLCJpbmNsdWRlcyIsImxheWVyVmlzQ29uZmlncyIsIml0ZW0iLCJMQVlFUl9WSVNfQ09ORklHUyIsImRlZmF1bHRWYWx1ZSIsImV2ZXJ5IiwicCIsInJlcXVpcmVkIiwicmVxdWlyZWRMYXllckNvbHVtbnMiLCJyZWR1Y2UiLCJhY2N1Iiwib3B0aW9uYWwiLCJvcHRpb25hbENvbHVtbnMiLCJuZXdDb25maWciLCJuZXdWaXNDb25maWciLCJCb29sZWFuIiwibGF5ZXJEYXRhIiwidHlwZSIsImhhc0FsbENvbHVtbnMiLCJoYXNMYXllckRhdGEiLCJzY2FsZSIsImZpeGVkIiwiU0NBTEVfRlVOQyIsImdldFBvc2l0aW9uIiwic2FtcGxlRGF0YSIsInBvaW50cyIsImxhdEJvdW5kcyIsImxuZ0JvdW5kcyIsImJvdW5kcyIsIkFycmF5IiwiaXNBcnJheSIsIkRFRkFVTFRfTElHSFRfU0VUVElOR1MiLCJsaWdodHNQb3NpdGlvbiIsInNsaWNlIiwiTk9fVkFMVUVfQ09MT1IiLCJnZXRWYWx1ZSIsImF0dHJpYnV0ZVZhbHVlIiwiQUxMX0ZJRUxEX1RZUEVTIiwidGltZXN0YW1wIiwiRGF0ZSIsImRhdGFzZXQiLCJuZXdGaWx0ZXIiLCJzY2FsZVR5cGUiLCJTQ0FMRV9UWVBFUyIsIm9yZGluYWwiLCJ1cGRhdGVkRG9tYWluIiwiY2FsY3VsYXRlTGF5ZXJEb21haW4iLCJ2YWxpZGF0ZUZpZWxkVHlwZSIsInZhbGlkYXRlU2NhbGUiLCJ2aXN1YWxDaGFubmVsIiwiY2hhbm5lbFNjYWxlVHlwZSIsInN1cHBvcnRlZEZpZWxkVHlwZXMiLCJjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcyIsIkNIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEUyIsInNjYWxlT3B0aW9ucyIsImdldFNjYWxlT3B0aW9ucyIsIkZJRUxEX09QVFMiLCJmaWx0ZXJlZEluZGV4Rm9yRG9tYWluIiwiZGVmYXVsdERvbWFpbiIsIkNvbnNvbGUiLCJlcnJvciIsImlzVGltZSIsInZhbHVlQWNjZXNzb3IiLCJtYXliZVRvRGF0ZSIsImJpbmQiLCJmb3JtYXQiLCJpbmRleFZhbHVlQWNjZXNzb3IiLCJpIiwic29ydEZ1bmN0aW9uIiwicG9pbnQiLCJxdWFudGlsZSIsInF1YW50aXplIiwibGluZWFyIiwic3FydCIsIm9iamVjdEluZm8iLCJsYXllciIsInBpY2tlZCIsIm1hcFN0YXRlIiwiZml4ZWRSYWRpdXMiLCJyYWRpdXNDaGFubmVsIiwiZmluZCIsInZjIiwicHJvcGVydHkiLCJ1bmRlZmluZWQiLCJyYWRpdXMiLCJnZXRab29tRmFjdG9yIiwic29tZSIsIm5vbmVMYXllckRhdGFBZmZlY3RpbmdQcm9wcyIsIkRlZmF1bHRMYXllckljb24iLCJDSEFOTkVMX1NDQUxFUyIsInNpemUiLCJsYXQiLCJsbmciLCJsYXQwIiwibG5nMCIsImxhdDEiLCJsbmcxIiwiZmllbGRQYWlycyIsImRlZmF1bHRGaWVsZHMiLCJhbGxGaWVsZHMiLCJyZXF1aXJlZENvbHVtbnMiLCJwcmV2IiwicmVxdWlyZWRGaWVsZHMiLCJmaWx0ZXIiLCJmIiwiZ2V0QWxsUG9zc2libGVDb2x1bW5QYXJpcyIsImFsbEtleXMiLCJwb2ludGVycyIsImsiLCJjb3VudFBlcktleSIsInBhaXJzIiwiaW5jcmVtZW50UG9pbnRlcnMiLCJuZXdQYWlyIiwiY3V1ciIsInB0cyIsImNvdW50cyIsImMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQVVBOztBQUNBOztBQUVBOztBQUVBOztBQU9BOzs7O3NEQWtCVUEsYSxHQWpFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFtQ0E7Ozs7QUFJQSxJQUFN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QWdDQyxNQUFoQyxFQUF3Q3ZMLEtBQXhDLEVBQStDO0FBQzdDLFlBQUlBLFVBQVUsQ0FBVixJQUFlc0wsSUFBSSxDQUFKLE1BQVdDLE9BQU8sQ0FBUCxJQUFZLENBQTFDLEVBQTZDO0FBQzNDO0FBQ0EsaUJBQU8sS0FBUDtBQUNEOztBQUVELFlBQUlELElBQUl0TCxLQUFKLElBQWEsQ0FBYixHQUFpQnVMLE9BQU92TCxLQUFQLENBQXJCLEVBQW9DO0FBQ2xDc0wsY0FBSXRMLEtBQUosSUFBYXNMLElBQUl0TCxLQUFKLElBQWEsQ0FBMUI7QUFDQSxpQkFBTyxJQUFQO0FBQ0Q7O0FBRURzTCxZQUFJdEwsS0FBSixJQUFhLENBQWI7QUFDQSxlQUFPbUwsa0JBQWtCRyxHQUFsQixFQUF1QkMsTUFBdkIsRUFBK0J2TCxRQUFRLENBQXZDLENBQVA7QUFDRDs7QUFFRCxhQUFPa0wsS0FBUDtBQUNEOzs7NkJBRWVNLEMsRUFBRztBQUNqQixhQUFPLDBCQUFTQSxDQUFULENBQVA7QUFDRDs7Ozs7a0JBdkxrQmpMLEsiLCJmaWxlIjoiYmFzZS1sYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7aGV4VG9SZ2J9IGZyb20gJ3V0aWxzL2NvbG9yLXV0aWxzJztcbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcbmltcG9ydCBrZXltaXJyb3IgZnJvbSAna2V5bWlycm9yJztcbmltcG9ydCBEZWZhdWx0TGF5ZXJJY29uIGZyb20gJy4vZGVmYXVsdC1sYXllci1pY29uJztcblxuaW1wb3J0IHtcbiAgQUxMX0ZJRUxEX1RZUEVTLFxuICBERUZBVUxUX0xJR0hUX1NFVFRJTkdTLFxuICBOT19WQUxVRV9DT0xPUixcbiAgU0NBTEVfVFlQRVMsXG4gIENIQU5ORUxfU0NBTEVTLFxuICBGSUVMRF9PUFRTLFxuICBTQ0FMRV9GVU5DLFxuICBDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFNcbn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtEYXRhVml6Q29sb3JzfSBmcm9tICdjb25zdGFudHMvY3VzdG9tLWNvbG9yLXJhbmdlcyc7XG5pbXBvcnQge0xBWUVSX1ZJU19DT05GSUdTfSBmcm9tICcuL2xheWVyLWZhY3RvcnknO1xuXG5pbXBvcnQge2dlbmVyYXRlSGFzaElkLCBub3ROdWxsb3JVbmRlZmluZWQsIGlzUGxhaW5PYmplY3R9IGZyb20gJ3V0aWxzL3V0aWxzJztcblxuaW1wb3J0IHtcbiAgZ2V0U2FtcGxlRGF0YSxcbiAgZ2V0TGF0TG5nQm91bmRzLFxuICBtYXliZVRvRGF0ZSxcbiAgZ2V0U29ydGluZ0Z1bmN0aW9uXG59IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuXG5pbXBvcnQge1xuICBnZXRRdWFudGlsZURvbWFpbixcbiAgZ2V0T3JkaW5hbERvbWFpbixcbiAgZ2V0TGluZWFyRG9tYWluXG59IGZyb20gJ3V0aWxzL2RhdGEtc2NhbGUtdXRpbHMnO1xuXG4vKipcbiAqIEFwcHJveC4gbnVtYmVyIG9mIHBvaW50cyB0byBzYW1wbGUgaW4gYSBsYXJnZSBkYXRhIHNldFxuICogQHR5cGUge251bWJlcn1cbiAqL1xuY29uc3QgTUFYX1NBTVBMRV9TSVpFID0gNTAwMDtcblxuZXhwb3J0IGNvbnN0IE9WRVJMQVlfVFlQRSA9IGtleW1pcnJvcih7XG4gIGRlY2tnbDogbnVsbCxcbiAgbWFwYm94Z2w6IG51bGxcbn0pO1xuXG5jb25zdCBsYXllckNvbG9ycyA9IE9iamVjdC52YWx1ZXMoRGF0YVZpekNvbG9ycykubWFwKGhleFRvUmdiKTtcbmZ1bmN0aW9uKiBnZW5lcmF0ZUNvbG9yKCkge1xuICBsZXQgaW5kZXggPSAwO1xuICB3aGlsZSAoaW5kZXggPCBsYXllckNvbG9ycy5sZW5ndGggKyAxKSB7XG4gICAgaWYgKGluZGV4ID09PSBsYXllckNvbG9ycy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG4gICAgeWllbGQgbGF5ZXJDb2xvcnNbaW5kZXgrK107XG4gIH1cbn1cblxuY29uc3QgY29sb3JNYWtlciA9IGdlbmVyYXRlQ29sb3IoKTtcbmNvbnN0IGRlZmF1bHRHZXRGaWVsZFZhbHVlID0gKGZpZWxkLCBkKSA9PiBkW2ZpZWxkLnRhYmxlRmllbGRJbmRleCAtIDFdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcbiAgICB0aGlzLmlkID0gcHJvcHMuaWQgfHwgZ2VuZXJhdGVIYXNoSWQoNik7XG5cbiAgICAvLyBtZXRhXG4gICAgdGhpcy5tZXRhID0ge307XG5cbiAgICAvLyB2aXNDb25maWdTZXR0aW5nc1xuICAgIHRoaXMudmlzQ29uZmlnU2V0dGluZ3MgPSB7fTtcblxuICAgIHRoaXMuY29uZmlnID0gdGhpcy5nZXREZWZhdWx0TGF5ZXJDb25maWcoe1xuICAgICAgY29sdW1uczogdGhpcy5nZXRMYXllckNvbHVtbnMoKSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSk7XG4gIH1cblxuICBnZXQgbGF5ZXJJY29uKCkge1xuICAgIHJldHVybiBEZWZhdWx0TGF5ZXJJY29uO1xuICB9XG5cbiAgZ2V0IG92ZXJsYXlUeXBlKCkge1xuICAgIHJldHVybiBPVkVSTEFZX1RZUEUuZGVja2dsO1xuICB9XG5cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0IGlzQWdncmVnYXRlZCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXQgcmVxdWlyZWRMYXllckNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0IG9wdGlvbmFsQ29sdW1ucygpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBnZXQgbm9uZUxheWVyRGF0YUFmZmVjdGluZ1Byb3BzKCkge1xuICAgIHJldHVybiBbJ2xhYmVsJywgJ29wYWNpdHknLCAndGhpY2tuZXNzJywgJ2lzVmlzaWJsZSddO1xuICB9XG5cbiAgZ2V0IHZpc3VhbENoYW5uZWxzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjoge1xuICAgICAgICBwcm9wZXJ0eTogJ2NvbG9yJyxcbiAgICAgICAgZmllbGQ6ICdjb2xvckZpZWxkJyxcbiAgICAgICAgc2NhbGU6ICdjb2xvclNjYWxlJyxcbiAgICAgICAgZG9tYWluOiAnY29sb3JEb21haW4nLFxuICAgICAgICByYW5nZTogJ2NvbG9yUmFuZ2UnLFxuICAgICAgICBrZXk6ICdjb2xvcicsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLmNvbG9yXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBwcm9wZXJ0eTogJ3NpemUnLFxuICAgICAgICBmaWVsZDogJ3NpemVGaWVsZCcsXG4gICAgICAgIHNjYWxlOiAnc2l6ZVNjYWxlJyxcbiAgICAgICAgZG9tYWluOiAnc2l6ZURvbWFpbicsXG4gICAgICAgIHJhbmdlOiAnc2l6ZVJhbmdlJyxcbiAgICAgICAga2V5OiAnc2l6ZScsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLnNpemVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLypcbiAgICogQ29sdW1uIHBhaXJzIG1hcHMgbGF5ZXIgY29sdW1uIHRvIGEgc3BlY2lmaWMgZmllbGQgcGFpcnMsXG4gICAqIEJ5IGRlZmF1bHQsIGl0IGlzIHNldCB0byBudWxsXG4gICAqL1xuICBnZXQgY29sdW1uUGFpcnMoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKlxuICAgKiBEZWZhdWx0IHBvaW50IGNvbHVtbiBwYWlycywgY2FuIGJlIHVzZWQgZm9yIHBvaW50IGJhc2VkIGxheWVyczogcG9pbnQsIGljb24gZXRjLlxuICAgKi9cbiAgZ2V0IGRlZmF1bHRQb2ludENvbHVtblBhaXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYXQ6IHtwYWlyOiAnbG5nJywgZmllbGRQYWlyS2V5OiAnbGF0J30sXG4gICAgICBsbmc6IHtwYWlyOiAnbGF0JywgZmllbGRQYWlyS2V5OiAnbG5nJ31cbiAgICB9O1xuICB9XG5cbiAgLypcbiAgICogRGVmYXVsdCBsaW5rIGNvbHVtbiBwYWlycywgY2FuIGJlIHVzZWQgZm9yIGxpbmsgYmFzZWQgbGF5ZXJzOiBhcmMsIGxpbmUgZXRjXG4gICAqL1xuICBnZXQgZGVmYXVsdExpbmtDb2x1bW5QYWlycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGF0MDoge3BhaXI6ICdsbmcwJywgZmllbGRQYWlyS2V5OiAnbGF0J30sXG4gICAgICBsbmcwOiB7cGFpcjogJ2xhdDAnLCBmaWVsZFBhaXJLZXk6ICdsbmcnfSxcbiAgICAgIGxhdDE6IHtwYWlyOiAnbG5nMScsIGZpZWxkUGFpcktleTogJ2xhdCd9LFxuICAgICAgbG5nMToge3BhaXI6ICdsYXQxJywgZmllbGRQYWlyS2V5OiAnbG5nJ31cbiAgICB9O1xuICB9XG5cbiAgLypcbiAgICogR2l2ZW4gYSBkYXRhc2V0LCBhdXRvbWF0aWNhbGx5IGNyZWF0ZSBsYXllcnMgYmFzZWQgb24gaXRcbiAgICogYW5kIHJldHVybiB0aGUgcHJvcHNcbiAgICogQnkgZGVmYXVsdCwgbm8gbGF5ZXJzIHdpbGwgYmUgZm91bmRcbiAgICovXG4gIHN0YXRpYyBmaW5kRGVmYXVsdExheWVyUHJvcHMoZmllbGRQYWlycywgZGF0YUlkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBhcnJheSBvZiBwcmVzZXQgcmVxdWlyZWQgY29sdW1uIG5hbWVzXG4gICAqIGZvdW5kIGZpZWxkIHRoYXQgaGFzIHRoZSBzYW1lIG5hbWUgdG8gc2V0IGFzIGxheWVyIGNvbHVtblxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBkZWZhdWx0RmllbGRzXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IGFsbEZpZWxkc1xuICAgKiBAcmV0dXJucyB7b2JqZWN0W10gfCBudWxsfSBhbGwgcG9zc2libGUgcmVxdWlyZWQgbGF5ZXIgY29sdW1uIHBhaXJzXG4gICAqL1xuICBzdGF0aWMgZmluZERlZmF1bHRDb2x1bW5GaWVsZChkZWZhdWx0RmllbGRzLCBhbGxGaWVsZHMpIHtcbiAgICAvLyBmaW5kIGFsbCBtYXRjaGVkIGZpZWxkcyBmb3IgZWFjaCByZXF1aXJlZCBjb2xcbiAgICBjb25zdCByZXF1aXJlZENvbHVtbnMgPSBPYmplY3Qua2V5cyhkZWZhdWx0RmllbGRzKS5yZWR1Y2UoKHByZXYsIGtleSkgPT4ge1xuICAgICAgY29uc3QgcmVxdWlyZWRGaWVsZHMgPSBhbGxGaWVsZHMuZmlsdGVyKFxuICAgICAgICBmID0+IGYubmFtZSA9PT0gZGVmYXVsdEZpZWxkc1trZXldIHx8IGRlZmF1bHRGaWVsZHNba2V5XS5pbmNsdWRlcyhmLm5hbWUpXG4gICAgICApO1xuXG4gICAgICBwcmV2W2tleV0gPSByZXF1aXJlZEZpZWxkcy5sZW5ndGhcbiAgICAgICAgPyByZXF1aXJlZEZpZWxkcy5tYXAoZiA9PiAoe1xuICAgICAgICAgIHZhbHVlOiBmLm5hbWUsXG4gICAgICAgICAgZmllbGRJZHg6IGYudGFibGVGaWVsZEluZGV4IC0gMVxuICAgICAgICB9KSlcbiAgICAgICAgOiBudWxsO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xuXG4gICAgaWYgKCFPYmplY3QudmFsdWVzKHJlcXVpcmVkQ29sdW1ucykuZXZlcnkoQm9vbGVhbikpIHtcbiAgICAgIC8vIGlmIGFueSBmaWVsZCBtaXNzaW5nLCByZXR1cm4gbnVsbFxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0QWxsUG9zc2libGVDb2x1bW5QYXJpcyhyZXF1aXJlZENvbHVtbnMpO1xuICB9XG5cbiAgc3RhdGljIGdldEFsbFBvc3NpYmxlQ29sdW1uUGFyaXMocmVxdWlyZWRDb2x1bW5zKSB7XG4gICAgLy8gZm9yIG11bHRpcGxlIG1hdGNoZWQgZmllbGQgZm9yIG9uZSByZXF1aXJlZCBjb2x1bW4sIHJldHVybiBtdWx0aXBsZVxuICAgIC8vIGNvbWJpbmF0aW9ucywgZS4gZy4gaWYgY29sdW1uIGEgaGFzIDIgbWF0Y2hlZCwgY29sdW1uIGIgaGFzIDMgbWF0Y2hlZFxuICAgIC8vIDYgcG9zc2libGUgY29sdW1uIHBhaXJzIHdpbGwgYmUgcmV0dXJuZWRcbiAgICBjb25zdCBhbGxLZXlzID0gT2JqZWN0LmtleXMocmVxdWlyZWRDb2x1bW5zKTtcbiAgICBjb25zdCBwb2ludGVycyA9IGFsbEtleXMubWFwKChrLCBpKSA9PiAoaSA9PT0gYWxsS2V5cy5sZW5ndGggLSAxID8gLTEgOiAwKSk7XG4gICAgY29uc3QgY291bnRQZXJLZXkgPSBhbGxLZXlzLm1hcChrID0+IHJlcXVpcmVkQ29sdW1uc1trXS5sZW5ndGgpO1xuICAgIGNvbnN0IHBhaXJzID0gW107XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cbiAgICB3aGlsZSAoaW5jcmVtZW50UG9pbnRlcnMocG9pbnRlcnMsIGNvdW50UGVyS2V5LCBwb2ludGVycy5sZW5ndGggLSAxKSkge1xuICAgICAgY29uc3QgbmV3UGFpciA9IHBvaW50ZXJzLnJlZHVjZSgocHJldiwgY3V1ciwgaSkgPT4ge1xuICAgICAgICBwcmV2W2FsbEtleXNbaV1dID0gcmVxdWlyZWRDb2x1bW5zW2FsbEtleXNbaV1dW2N1dXJdO1xuICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgIH0sIHt9KTtcblxuICAgICAgcGFpcnMucHVzaChuZXdQYWlyKTtcbiAgICB9XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1sb29wLWZ1bmMgKi9cblxuICAgIC8vIHJlY3Vyc2l2ZWx5IGluY3JlbWVudCBwb2ludGVyc1xuICAgIGZ1bmN0aW9uIGluY3JlbWVudFBvaW50ZXJzKHB0cywgY291bnRzLCBpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09PSAwICYmIHB0c1swXSA9PT0gY291bnRzWzBdIC0gMSkge1xuICAgICAgICAvLyBub3RoaW5nIHRvIGluY3JlbWVudFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChwdHNbaW5kZXhdICsgMSA8IGNvdW50c1tpbmRleF0pIHtcbiAgICAgICAgcHRzW2luZGV4XSA9IHB0c1tpbmRleF0gKyAxO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcHRzW2luZGV4XSA9IDA7XG4gICAgICByZXR1cm4gaW5jcmVtZW50UG9pbnRlcnMocHRzLCBjb3VudHMsIGluZGV4IC0gMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhaXJzO1xuICB9XG5cbiAgc3RhdGljIGhleFRvUmdiKGMpIHtcbiAgICByZXR1cm4gaGV4VG9SZ2IoYyk7XG4gIH1cblxuICBnZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMgPSB7fSkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhSWQ6IHByb3BzLmRhdGFJZCB8fCBudWxsLFxuICAgICAgbGFiZWw6IHByb3BzLmxhYmVsIHx8ICduZXcgbGF5ZXInLFxuICAgICAgY29sb3I6IHByb3BzLmNvbG9yIHx8IGNvbG9yTWFrZXIubmV4dCgpLnZhbHVlLFxuICAgICAgY29sdW1uczogcHJvcHMuY29sdW1ucyB8fCBudWxsLFxuICAgICAgaXNWaXNpYmxlOiBwcm9wcy5pc1Zpc2libGUgfHwgZmFsc2UsXG4gICAgICBpc0NvbmZpZ0FjdGl2ZTogcHJvcHMuaXNDb25maWdBY3RpdmUgfHwgZmFsc2UsXG4gICAgICBoaWdobGlnaHRDb2xvcjogcHJvcHMuaGlnaGxpZ2h0Q29sb3IgfHwgWzI1MiwgMjQyLCAyNl0sXG5cbiAgICAgIC8vIFRPRE86IHJlZmFjdG9yIHRoaXMgaW50byBzZXBhcmF0ZSB2aXN1YWwgQ2hhbm5lbCBjb25maWdcbiAgICAgIC8vIGNvbG9yIGJ5IGZpZWxkLCBkb21haW4gaXMgc2V0IGJ5IGZpbHRlcnMsIGZpZWxkLCBzY2FsZSB0eXBlXG4gICAgICBjb2xvckZpZWxkOiBudWxsLFxuICAgICAgY29sb3JEb21haW46IFswLCAxXSxcbiAgICAgIGNvbG9yU2NhbGU6ICdxdWFudGlsZScsXG5cbiAgICAgIC8vIGNvbG9yIGJ5IHNpemUsIGRvbWFpbiBpcyBzZXQgYnkgZmlsdGVycywgZmllbGQsIHNjYWxlIHR5cGVcbiAgICAgIHNpemVEb21haW46IFswLCAxXSxcbiAgICAgIHNpemVTY2FsZTogJ2xpbmVhcicsXG4gICAgICBzaXplRmllbGQ6IG51bGwsXG5cbiAgICAgIHZpc0NvbmZpZzoge31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVzY3JpcHRpb24gb2YgYSB2aXN1YWxDaGFubmVsIGNvbmZpZ1xuICAgKiBAcGFyYW0ga2V5XG4gICAqIEByZXR1cm5zIHt7bGFiZWw6IHN0cmluZywgbWVhc3VyZTogKHN0cmluZ3xzdHJpbmcpfX1cbiAgICovXG4gIGdldFZpc3VhbENoYW5uZWxEZXNjcmlwdGlvbihrZXkpIHtcbiAgICAvLyBlLmcuIGxhYmVsOiBDb2xvciwgbWVhc3VyZTogVmVoaWNsZSBUeXBlXG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsOiB0aGlzLnZpc0NvbmZpZ1NldHRpbmdzW3RoaXMudmlzdWFsQ2hhbm5lbHNba2V5XS5yYW5nZV0ubGFiZWwsXG4gICAgICBtZWFzdXJlOiB0aGlzLmNvbmZpZ1t0aGlzLnZpc3VhbENoYW5uZWxzW2tleV0uZmllbGRdXG4gICAgICAgID8gdGhpcy5jb25maWdbdGhpcy52aXN1YWxDaGFubmVsc1trZXldLmZpZWxkXS5uYW1lXG4gICAgICAgIDogdGhpcy52aXN1YWxDaGFubmVsc1trZXldLmRlZmF1bHRNZWFzdXJlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbiBhIGZpZWxkIHRvIGxheWVyIGNvbHVtbiwgcmV0dXJuIGNvbHVtbiBjb25maWdcbiAgICogQHBhcmFtIGtleSAtIENvbHVtbiBLZXlcbiAgICogQHBhcmFtIGZpZWxkIC0gU2VsZWN0ZWQgZmllbGRcbiAgICogQHJldHVybnMge3t9fSAtIENvbHVtbiBjb25maWdcbiAgICovXG4gIGFzc2lnbkNvbHVtbihrZXksIGZpZWxkKSB7XG4gICAgLy8gZmllbGQgdmFsdWUgY291bGQgYmUgbnVsbCBmb3Igb3B0aW9uYWwgY29sdW1uc1xuICAgIGNvbnN0IHVwZGF0ZSA9IGZpZWxkXG4gICAgICA/IHtcbiAgICAgICAgICB2YWx1ZTogZmllbGQubmFtZSxcbiAgICAgICAgICBmaWVsZElkeDogZmllbGQudGFibGVGaWVsZEluZGV4IC0gMVxuICAgICAgICB9XG4gICAgICA6IHt2YWx1ZTogbnVsbCwgZmllbGRJZHg6IC0xfTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLmNvbmZpZy5jb2x1bW5zLFxuICAgICAgW2tleV06IHtcbiAgICAgICAgLi4udGhpcy5jb25maWcuY29sdW1uc1trZXldLFxuICAgICAgICAuLi51cGRhdGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbiBhIGZpZWxkIHBhaXIgdG8gY29sdW1uIGNvbmZpZywgcmV0dXJuIGNvbHVtbiBjb25maWdcbiAgICogQHBhcmFtIGtleSAtIENvbHVtbiBLZXlcbiAgICogQHBhcmFtIHBhaXIgLSBmaWVsZCBQYWlyXG4gICAqIEByZXR1cm5zIHt7fX0gLSBDb2x1bW4gY29uZmlnXG4gICAqL1xuICBhc3NpZ25Db2x1bW5QYWlycyhrZXksIHBhaXIpIHtcbiAgICBpZiAoIXRoaXMuY29sdW1uUGFpcnMgfHwgIXRoaXMuY29sdW1uUGFpcnNba2V5XSkge1xuICAgICAgLy8gc2hvdWxkIG5vdCBlbmQgaW4gdGhpcyBzdGF0ZVxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmNvbHVtbnM7XG4gICAgfVxuXG4gICAgY29uc3Qge3BhaXI6IHBhcnRuZXJLZXksIGZpZWxkUGFpcktleX0gPSB0aGlzLmNvbHVtblBhaXJzW2tleV07XG4gICAgY29uc3Qge2ZpZWxkUGFpcktleTogcGFydG5lckZpZWxkUGFpcktleX0gPSB0aGlzLmNvbHVtblBhaXJzW3BhcnRuZXJLZXldO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuY29uZmlnLmNvbHVtbnMsXG4gICAgICBba2V5XTogcGFpcltmaWVsZFBhaXJLZXldLFxuICAgICAgW3BhcnRuZXJLZXldOiBwYWlyW3BhcnRuZXJGaWVsZFBhaXJLZXldXG4gICAgfTtcbiAgfVxuXG5cdC8qKlxuICAgKiBDYWxjdWxhdGUgYSByYWRpdXMgem9vbSBtdWx0aXBsaWVyIHRvIHJlbmRlciBwb2ludHMsIHNvIHRoZXkgYXJlIHZpc2libGUgaW4gYWxsIHpvb20gbGV2ZWxcbiAgICogQHBhcmFtIG1hcFN0YXRlXG4gICAqIEBwYXJhbSBtYXBTdGF0ZS56b29tIC0gYWN0dWFsIHpvb21cbiAgICogQHBhcmFtIG1hcFN0YXRlLnpvb21PZmZzZXQgLSB6b29tT2Zmc2V0IHdoZW4gcmVuZGVyIGluIHRoZSBwbG90IGNvbnRhaW5lciBmb3IgZXhwb3J0IGltYWdlXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRab29tRmFjdG9yKHt6b29tLCB6b29tT2Zmc2V0ID0gMH0pIHtcbiAgICByZXR1cm4gTWF0aC5wb3coMiwgTWF0aC5tYXgoMTQgLSB6b29tICsgem9vbU9mZnNldCwgMCkpO1xuICB9XG5cblx0LyoqXG4gICAqIENhbGN1bGF0ZSBhIGVsZXZhdGlvbiB6b29tIG11bHRpcGxpZXIgdG8gcmVuZGVyIHBvaW50cywgc28gdGhleSBhcmUgdmlzaWJsZSBpbiBhbGwgem9vbSBsZXZlbFxuICAgKiBAcGFyYW0gbWFwU3RhdGVcbiAgICogQHBhcmFtIG1hcFN0YXRlLnpvb20gLSBhY3R1YWwgem9vbVxuICAgKiBAcGFyYW0gbWFwU3RhdGUuem9vbU9mZnNldCAtIHpvb21PZmZzZXQgd2hlbiByZW5kZXIgaW4gdGhlIHBsb3QgY29udGFpbmVyIGZvciBleHBvcnQgaW1hZ2VcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGdldEVsZXZhdGlvblpvb21GYWN0b3Ioe3pvb20sIHpvb21PZmZzZXQgPSAwfSkge1xuICAgIHJldHVybiBNYXRoLnBvdygyLCBNYXRoLm1heCg4IC0gem9vbSArIHpvb21PZmZzZXQsIDApKTtcbiAgfVxuXG4gIGZvcm1hdExheWVyRGF0YShkYXRhLCBhbGxEYXRhLCBmaWx0ZXJlZEluZGV4KSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgcmVuZGVyTGF5ZXIoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0SG92ZXJEYXRhKG9iamVjdCkge1xuICAgIGlmICghb2JqZWN0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8gYnkgZGVmYXVsdCwgZWFjaCBlbnRyeSBvZiBsYXllckRhdGEgc2hvdWxkIGhhdmUgYSBkYXRhIHByb3BlcnR5IHBvaW50c1xuICAgIC8vIHRvIHRoZSBvcmlnaW5hbCBpdGVtIGluIHRoZSBhbGxEYXRhIGFycmF5XG4gICAgLy8gZWFjaCBsYXllciBjYW4gaW1wbGVtZW50IGl0cyBvd24gZ2V0SG92ZXJEYXRhIG1ldGhvZFxuICAgIHJldHVybiBvYmplY3QuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGNoYW5nZSBsYXllciB0eXBlLCB0cnkgdG8gY29weSBvdmVyIGxheWVyIGNvbmZpZ3MgYXMgbXVjaCBhcyBwb3NzaWJsZVxuICAgKiBAcGFyYW0gY29uZmlnVG9Db3B5IC0gY29uZmlnIHRvIGNvcHkgb3ZlclxuICAgKiBAcGFyYW0gdmlzQ29uZmlnU2V0dGluZ3MgLSB2aXNDb25maWcgc2V0dGluZ3Mgb2YgY29uZmlnIHRvIGNvcHlcbiAgICovXG4gIGFzc2lnbkNvbmZpZ1RvTGF5ZXIoY29uZmlnVG9Db3B5LCB2aXNDb25maWdTZXR0aW5ncykge1xuICAgIC8vIGRvbid0IGRlZXAgbWVyZ2UgdmlzdWFsQ2hhbm5lbCBmaWVsZFxuICAgIGNvbnN0IG5vdFRvRGVlcE1lcmdlID0gT2JqZWN0LnZhbHVlcyh0aGlzLnZpc3VhbENoYW5uZWxzKS5tYXAodiA9PiB2LmZpZWxkKTtcblxuICAgIC8vIGRvbid0IGRlZXAgbWVyZ2UgY29sb3IgcmFuZ2UsIHJldmVyc2VkOiBpcyBub3QgYSBrZXkgYnkgZGVmYXVsdFxuICAgIG5vdFRvRGVlcE1lcmdlLnB1c2goJ2NvbG9yUmFuZ2UnKTtcblxuICAgIC8vIGRvbid0IGNvcHkgb3ZlciBkb21haW5cbiAgICBjb25zdCBub3RUb0NvcHkgPSBPYmplY3QudmFsdWVzKHRoaXMudmlzdWFsQ2hhbm5lbHMpLm1hcCh2ID0+IHYuZG9tYWluKTtcblxuICAgIC8vIGlmIHJhbmdlIGlzIGZvciB0aGUgc2FtZSBwcm9wZXJ0eSBncm91cCBjb3B5IGl0LCBvdGhlcndpc2UsIG5vdCB0byBjb3B5XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLnZpc3VhbENoYW5uZWxzKS5mb3JFYWNoKHYgPT4ge1xuICAgICAgaWYgKGNvbmZpZ1RvQ29weS52aXNDb25maWdbdi5yYW5nZV0gJiYgdmlzQ29uZmlnU2V0dGluZ3Nbdi5yYW5nZV0uZ3JvdXAgIT09IHRoaXMudmlzQ29uZmlnU2V0dGluZ3Nbdi5yYW5nZV0uZ3JvdXApIHtcbiAgICAgICAgbm90VG9Db3B5LnB1c2godi5yYW5nZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBkb24ndCBjb3B5IG92ZXIgdmlzdWFsQ2hhbm5lbCByYW5nZVxuICAgIGNvbnN0IGN1cnJlbnRDb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICBjb25zdCBjb3BpZWQgPSB0aGlzLmNvcHlMYXllckNvbmZpZyhjdXJyZW50Q29uZmlnLCBjb25maWdUb0NvcHksIHtub3RUb0RlZXBNZXJnZSwgbm90VG9Db3B5fSk7XG5cbiAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKGNvcGllZCk7XG4gICAgLy8gdmFsaWRhdGUgdmlzdWFsQ2hhbm5lbCBmaWVsZCB0eXBlIGFuZCBzY2FsZSB0eXBlc1xuICAgIE9iamVjdC5rZXlzKHRoaXMudmlzdWFsQ2hhbm5lbHMpLmZvckVhY2goY2hhbm5lbCA9PiB7XG4gICAgICB0aGlzLnZhbGlkYXRlVmlzdWFsQ2hhbm5lbChjaGFubmVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qXG4gICAqIFJlY3Vyc2l2ZWx5IGNvcHkgY29uZmlnIG92ZXIgdG8gYW4gZW1wdHkgbGF5ZXJcbiAgICogd2hlbiByZWNlaXZlZCBzYXZlZCBjb25maWcsIG9yIGNvcHkgY29uZmlnIG92ZXIgZnJvbSBhIGRpZmZlcmVudCBsYXllciB0eXBlXG4gICAqIG1ha2Ugc3VyZSB0byBvbmx5IGNvcHkgb3ZlciB2YWx1ZSB0byBleGlzdGluZyBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjdXJyZW50Q29uZmlnIC0gZXhpc3RpbmcgY29uZmlnIHRvIGJlIG92ZXJyaWRlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdUb0NvcHkgLSBuZXcgQ29uZmlnIHRvIGNvcHkgb3ZlclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBub3RUb0RlZXBNZXJnZSAtIGFycmF5IG9mIHByb3BlcnRpZXMgdG8gbm90IHRvIGJlIGRlZXAgY29waWVkXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IG5vdFRvQ29weSAtIGFycmF5IG9mIHByb3BlcnRpZXMgbm90IHRvIGNvcHlcbiAgICogQHJldHVybnMge29iamVjdH0gLSBjb3BpZWQgY29uZmlnXG4gICAqL1xuICBjb3B5TGF5ZXJDb25maWcoY3VycmVudENvbmZpZywgY29uZmlnVG9Db3B5LCB7bm90VG9EZWVwTWVyZ2UgPSBbXSwgbm90VG9Db3B5ID0gW119ID0ge30pIHtcbiAgICBjb25zdCBjb3BpZWQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhjdXJyZW50Q29uZmlnKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGlzUGxhaW5PYmplY3QoY3VycmVudENvbmZpZ1trZXldKSAmJlxuICAgICAgICBpc1BsYWluT2JqZWN0KGNvbmZpZ1RvQ29weVtrZXldKSAmJlxuICAgICAgICAhbm90VG9EZWVwTWVyZ2UuaW5jbHVkZXMoa2V5KSAmJlxuICAgICAgICAhbm90VG9Db3B5LmluY2x1ZGVzKGtleSlcbiAgICAgICkge1xuICAgICAgICAvLyByZWN1cnNpdmVseSBhc3NpZ24gb2JqZWN0IHZhbHVlXG4gICAgICAgIGNvcGllZFtrZXldID0gdGhpcy5jb3B5TGF5ZXJDb25maWcoY3VycmVudENvbmZpZ1trZXldLCBjb25maWdUb0NvcHlba2V5XSwge25vdFRvRGVlcE1lcmdlLCBub3RUb0NvcHl9KTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIG5vdE51bGxvclVuZGVmaW5lZChjb25maWdUb0NvcHlba2V5XSkgJiZcbiAgICAgICAgIW5vdFRvQ29weS5pbmNsdWRlcyhrZXkpXG4gICAgICApIHtcbiAgICAgICAgLy8gY29weVxuICAgICAgICBjb3BpZWRba2V5XSA9IGNvbmZpZ1RvQ29weVtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8ga2VlcCBleGlzdGluZ1xuICAgICAgICBjb3BpZWRba2V5XSA9IGN1cnJlbnRDb25maWdba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb3BpZWQ7XG4gIH1cblxuICByZWdpc3RlclZpc0NvbmZpZyhsYXllclZpc0NvbmZpZ3MpIHtcbiAgICBPYmplY3Qua2V5cyhsYXllclZpc0NvbmZpZ3MpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyAmJlxuICAgICAgICBMQVlFUl9WSVNfQ09ORklHU1tsYXllclZpc0NvbmZpZ3NbaXRlbV1dXG4gICAgICApIHtcbiAgICAgICAgLy8gaWYgYXNzaWduZWQgb25lIG9mIGRlZmF1bHQgTEFZRVJfQ09ORklHU1xuICAgICAgICB0aGlzLmNvbmZpZy52aXNDb25maWdbaXRlbV0gPVxuICAgICAgICAgIExBWUVSX1ZJU19DT05GSUdTW2xheWVyVmlzQ29uZmlnc1tpdGVtXV0uZGVmYXVsdFZhbHVlO1xuICAgICAgICB0aGlzLnZpc0NvbmZpZ1NldHRpbmdzW2l0ZW1dID0gTEFZRVJfVklTX0NPTkZJR1NbbGF5ZXJWaXNDb25maWdzW2l0ZW1dXTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIFsndHlwZScsICdkZWZhdWx0VmFsdWUnXS5ldmVyeShwID0+IGxheWVyVmlzQ29uZmlnc1tpdGVtXVtwXSlcbiAgICAgICkge1xuICAgICAgICAvLyBpZiBwcm92aWRlZCBjdXN0b21pemVkIHZpc0NvbmZpZywgYW5kIGhhcyB0eXBlICYmIGRlZmF1bHRWYWx1ZVxuICAgICAgICAvLyBUT0RPOiBmdXJ0aGVyIGNoZWNrIGlmIGN1c3RvbWl6ZWQgdmlzQ29uZmlnIGlzIHZhbGlkXG4gICAgICAgIHRoaXMuY29uZmlnLnZpc0NvbmZpZ1tpdGVtXSA9IGxheWVyVmlzQ29uZmlnc1tpdGVtXS5kZWZhdWx0VmFsdWU7XG4gICAgICAgIHRoaXMudmlzQ29uZmlnU2V0dGluZ3NbaXRlbV0gPSBsYXllclZpc0NvbmZpZ3NbaXRlbV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRMYXllckNvbHVtbnMoKSB7XG4gICAgY29uc3QgcmVxdWlyZWQgPSB0aGlzLnJlcXVpcmVkTGF5ZXJDb2x1bW5zLnJlZHVjZShcbiAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIFtrZXldOiB7dmFsdWU6IG51bGwsIGZpZWxkSWR4OiAtMX1cbiAgICAgIH0pLFxuICAgICAge31cbiAgICApO1xuICAgIGNvbnN0IG9wdGlvbmFsID0gdGhpcy5vcHRpb25hbENvbHVtbnMucmVkdWNlKFxuICAgICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgW2tleV06IHt2YWx1ZTogbnVsbCwgZmllbGRJZHg6IC0xLCBvcHRpb25hbDogdHJ1ZX1cbiAgICAgIH0pLFxuICAgICAge31cbiAgICApO1xuXG4gICAgcmV0dXJuIHsuLi5yZXF1aXJlZCwgLi4ub3B0aW9uYWx9O1xuICB9XG5cbiAgdXBkYXRlTGF5ZXJDb25maWcobmV3Q29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSB7Li4udGhpcy5jb25maWcsIC4uLm5ld0NvbmZpZ307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGVMYXllclZpc0NvbmZpZyhuZXdWaXNDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZy52aXNDb25maWcgPSB7Li4udGhpcy5jb25maWcudmlzQ29uZmlnLCAuLi5uZXdWaXNDb25maWd9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIGxheWVyIGhhcyBhbGwgY29sdW1uc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gbGF5ZXJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHllcyBvciBub1xuICAgKi9cbiAgaGFzQWxsQ29sdW1ucygpIHtcbiAgICBjb25zdCB7Y29sdW1uc30gPSB0aGlzLmNvbmZpZztcbiAgICByZXR1cm4gKFxuICAgICAgY29sdW1ucyAmJlxuICAgICAgT2JqZWN0LnZhbHVlcyhjb2x1bW5zKS5ldmVyeSh2ID0+IHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odi5vcHRpb25hbCB8fCAodi52YWx1ZSAmJiB2LmZpZWxkSWR4ID4gLTEpKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIGxheWVyIGhhcyBkYXRhXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBsYXllclxuICAgKiBAcGFyYW0ge0FycmF5IHwgT2JqZWN0fSBsYXllckRhdGFcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHllcyBvciBub1xuICAgKi9cbiAgaGFzTGF5ZXJEYXRhKGxheWVyRGF0YSkge1xuICAgIGlmICghbGF5ZXJEYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIEJvb2xlYW4obGF5ZXJEYXRhLmRhdGEgJiYgbGF5ZXJEYXRhLmRhdGEubGVuZ3RoKTtcbiAgfVxuXG4gIGlzVmFsaWRUb1NhdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSAmJiB0aGlzLmhhc0FsbENvbHVtbnMoKTtcbiAgfVxuXG4gIHNob3VsZFJlbmRlckxheWVyKGRhdGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy50eXBlICYmXG4gICAgICB0aGlzLmhhc0FsbENvbHVtbnMoKSAmJlxuICAgICAgdGhpcy5jb25maWcuaXNWaXNpYmxlICYmXG4gICAgICB0aGlzLmhhc0xheWVyRGF0YShkYXRhKVxuICAgICk7XG4gIH1cblxuICBnZXRWaXNDaGFubmVsU2NhbGUoc2NhbGUsIGRvbWFpbiwgcmFuZ2UsIGZpeGVkKSB7XG4gICAgcmV0dXJuIFNDQUxFX0ZVTkNbZml4ZWQgPyAnbGluZWFyJyA6IHNjYWxlXSgpXG4gICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgIC5yYW5nZShmaXhlZCA/IGRvbWFpbiA6IHJhbmdlKTtcbiAgfVxuXG4gIGdldFBvaW50c0JvdW5kcyhhbGxEYXRhLCBnZXRQb3NpdGlvbikge1xuICAgIC8vIG5vIG5lZWQgdG8gbG9vcCB0aHJvdWdoIHRoZSBlbnRpcmUgZGF0YXNldFxuICAgIC8vIGdldCBhIHNhbXBsZSBvZiBkYXRhIHRvIGNhbGN1bGF0ZSBib3VuZHNcbiAgICBjb25zdCBzYW1wbGVEYXRhID1cbiAgICAgIGFsbERhdGEubGVuZ3RoID4gTUFYX1NBTVBMRV9TSVpFXG4gICAgICAgID8gZ2V0U2FtcGxlRGF0YShhbGxEYXRhLCBNQVhfU0FNUExFX1NJWkUpXG4gICAgICAgIDogYWxsRGF0YTtcbiAgICBjb25zdCBwb2ludHMgPSBzYW1wbGVEYXRhLm1hcChnZXRQb3NpdGlvbik7XG5cbiAgICBjb25zdCBsYXRCb3VuZHMgPSBnZXRMYXRMbmdCb3VuZHMocG9pbnRzLCAxLCBbLTkwLCA5MF0pO1xuICAgIGNvbnN0IGxuZ0JvdW5kcyA9IGdldExhdExuZ0JvdW5kcyhwb2ludHMsIDAsIFstMTgwLCAxODBdKTtcblxuICAgIGlmICghbGF0Qm91bmRzIHx8ICFsbmdCb3VuZHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBbbG5nQm91bmRzWzBdLCBsYXRCb3VuZHNbMF0sIGxuZ0JvdW5kc1sxXSwgbGF0Qm91bmRzWzFdXTtcbiAgfVxuXG4gIGdldExpZ2h0U2V0dGluZ3NGcm9tQm91bmRzKGJvdW5kcykge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGJvdW5kcykgJiYgYm91bmRzLmxlbmd0aCA+PSA0XG4gICAgICA/IHtcbiAgICAgICAgICAuLi5ERUZBVUxUX0xJR0hUX1NFVFRJTkdTLFxuICAgICAgICAgIGxpZ2h0c1Bvc2l0aW9uOiBbXG4gICAgICAgICAgICAuLi5ib3VuZHMuc2xpY2UoMCwgMiksXG4gICAgICAgICAgICBERUZBVUxUX0xJR0hUX1NFVFRJTkdTLmxpZ2h0c1Bvc2l0aW9uWzJdLFxuICAgICAgICAgICAgLi4uYm91bmRzLnNsaWNlKDIsIDQpLFxuICAgICAgICAgICAgREVGQVVMVF9MSUdIVF9TRVRUSU5HUy5saWdodHNQb3NpdGlvbls1XVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgOiBERUZBVUxUX0xJR0hUX1NFVFRJTkdTO1xuICB9XG5cbiAgZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShcbiAgICBzY2FsZSxcbiAgICBkYXRhLFxuICAgIGZpZWxkLFxuICAgIGRlZmF1bHRWYWx1ZSA9IE5PX1ZBTFVFX0NPTE9SLFxuICAgIGdldFZhbHVlID0gZGVmYXVsdEdldEZpZWxkVmFsdWVcbiAgKSB7XG4gICAgY29uc3Qge3R5cGV9ID0gZmllbGQ7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShmaWVsZCwgZGF0YSk7XG4gICAgbGV0IGF0dHJpYnV0ZVZhbHVlO1xuICAgIGlmICh0eXBlID09PSBBTExfRklFTERfVFlQRVMudGltZXN0YW1wKSB7XG4gICAgICAvLyBzaG91bGRuJ3QgbmVlZCB0byBjb252ZXJ0IGhlcmVcbiAgICAgIC8vIHNjYWxlIEZ1bmN0aW9uIHNob3VsZCB0YWtlIGNhcmUgb2YgaXRcbiAgICAgIGF0dHJpYnV0ZVZhbHVlID0gc2NhbGUobmV3IERhdGUodmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0cmlidXRlVmFsdWUgPSBzY2FsZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFhdHRyaWJ1dGVWYWx1ZSkge1xuICAgICAgYXR0cmlidXRlVmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgdXBkYXRlTWV0YShtZXRhKSB7XG4gICAgdGhpcy5tZXRhID0gey4uLnRoaXMubWV0YSwgLi4ubWV0YX07XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIGZ1bmN0aW9uIHRvIHVwZGF0ZSBvbmUgbGF5ZXIgZG9tYWluIHdoZW4gc3RhdGUuZGF0YSBjaGFuZ2VkXG4gICAqIGlmIHN0YXRlLmRhdGEgY2hhbmdlIGlzIGR1ZSBvdCB1cGRhdGUgZmlsdGVyLCBuZXdGaWxlciB3aWxsIGJlIHBhc3NlZFxuICAgKiBjYWxsZWQgYnkgdXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhc2V0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBuZXdGaWx0ZXJcbiAgICogQHJldHVybnMge29iamVjdH0gbGF5ZXJcbiAgICovXG4gIHVwZGF0ZUxheWVyRG9tYWluKGRhdGFzZXQsIG5ld0ZpbHRlcikge1xuICAgIE9iamVjdC52YWx1ZXModGhpcy52aXN1YWxDaGFubmVscykuZm9yRWFjaChjaGFubmVsID0+IHtcbiAgICAgIGNvbnN0IHtzY2FsZX0gPSBjaGFubmVsO1xuICAgICAgY29uc3Qgc2NhbGVUeXBlID0gdGhpcy5jb25maWdbc2NhbGVdO1xuICAgICAgLy8gb3JkaW5hbCBkb21haW4gaXMgYmFzZWQgb24gYWxsRGF0YSwgaWYgb25seSBmaWx0ZXIgY2hhbmdlZFxuICAgICAgLy8gbm8gbmVlZCB0byB1cGRhdGUgb3JkaW5hbCBkb21haW5cbiAgICAgIGlmICghbmV3RmlsdGVyIHx8IHNjYWxlVHlwZSAhPT0gU0NBTEVfVFlQRVMub3JkaW5hbCkge1xuICAgICAgICBjb25zdCB7ZG9tYWlufSA9IGNoYW5uZWw7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWREb21haW4gPSB0aGlzLmNhbGN1bGF0ZUxheWVyRG9tYWluKGRhdGFzZXQsIGNoYW5uZWwpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1tkb21haW5dOiB1cGRhdGVkRG9tYWlufSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB2aXN1YWwgY2hhbm5lbCBmaWVsZCBhbmQgc2NhbGVzIGJhc2VkIG9uIHN1cHBvcnRlZCBmaWVsZCAmIHNjYWxlIHR5cGVcbiAgICogQHBhcmFtIGNoYW5uZWxcbiAgICovXG4gIHZhbGlkYXRlVmlzdWFsQ2hhbm5lbChjaGFubmVsKSB7XG4gICAgdGhpcy52YWxpZGF0ZUZpZWxkVHlwZShjaGFubmVsKTtcbiAgICB0aGlzLnZhbGlkYXRlU2NhbGUoY2hhbm5lbCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgZmllbGQgdHlwZSBiYXNlZCBvbiBjaGFubmVsU2NhbGVUeXBlXG4gICAqL1xuICB2YWxpZGF0ZUZpZWxkVHlwZShjaGFubmVsKSB7XG4gICAgY29uc3QgdmlzdWFsQ2hhbm5lbCA9IHRoaXMudmlzdWFsQ2hhbm5lbHNbY2hhbm5lbF07XG4gICAgY29uc3Qge2ZpZWxkLCBjaGFubmVsU2NhbGVUeXBlLCBzdXBwb3J0ZWRGaWVsZFR5cGVzfSA9IHZpc3VhbENoYW5uZWw7XG5cbiAgICBpZiAodGhpcy5jb25maWdbZmllbGRdKSB7XG4gICAgICAvLyBpZiBmaWVsZCBpcyBzZWxlY3RlZCwgY2hlY2sgaWYgZmllbGQgdHlwZSBpcyBzdXBwb3J0ZWRcbiAgICAgIGNvbnN0IGNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzID0gc3VwcG9ydGVkRmllbGRUeXBlcyB8fCBDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFNbY2hhbm5lbFNjYWxlVHlwZV07XG5cbiAgICAgIGlmICghY2hhbm5lbFN1cHBvcnRlZEZpZWxkVHlwZXMuaW5jbHVkZXModGhpcy5jb25maWdbZmllbGRdLnR5cGUpKSB7XG4gICAgICAgIC8vIGZpZWxkIHR5cGUgaXMgbm90IHN1cHBvcnRlZCwgc2V0IGl0IGJhY2sgdG8gbnVsbFxuICAgICAgICAvLyBzZXQgc2NhbGUgYmFjayB0byBkZWZhdWx0XG4gICAgICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1tmaWVsZF06IG51bGx9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgc2NhbGUgdHlwZSBiYXNlZCBvbiBhZ2dyZWdhdGlvblxuICAgKi9cbiAgdmFsaWRhdGVTY2FsZShjaGFubmVsKSB7XG4gICAgY29uc3QgdmlzdWFsQ2hhbm5lbCA9IHRoaXMudmlzdWFsQ2hhbm5lbHNbY2hhbm5lbF07XG4gICAgY29uc3Qge3NjYWxlfSA9IHZpc3VhbENoYW5uZWw7XG4gICAgaWYgKCFzY2FsZSkge1xuICAgICAgLy8gdmlzdWFsQ2hhbm5lbCBkb2Vzbid0IGhhdmUgc2NhbGVcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2NhbGVPcHRpb25zID0gdGhpcy5nZXRTY2FsZU9wdGlvbnMoY2hhbm5lbCk7XG4gICAgLy8gY2hlY2sgaWYgY3VycmVudCBzZWxlY3RlZCBzY2FsZSBpc1xuICAgIC8vIHN1cHBvcnRlZCwgaWYgbm90LCBjaGFuZ2UgdG8gZGVmYXVsdFxuICAgIGlmICghc2NhbGVPcHRpb25zLmluY2x1ZGVzKHRoaXMuY29uZmlnW3NjYWxlXSkpIHtcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1tzY2FsZV06IHNjYWxlT3B0aW9uc1swXX0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2NhbGUgb3B0aW9ucyBiYXNlZCBvbiBjdXJyZW50IGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFubmVsXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICovXG4gIGdldFNjYWxlT3B0aW9ucyhjaGFubmVsKSB7XG4gICAgY29uc3QgdmlzdWFsQ2hhbm5lbCA9IHRoaXMudmlzdWFsQ2hhbm5lbHNbY2hhbm5lbF07XG4gICAgY29uc3Qge2ZpZWxkLCBzY2FsZSwgY2hhbm5lbFNjYWxlVHlwZX0gPSB2aXN1YWxDaGFubmVsO1xuXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnW2ZpZWxkXSA/XG4gICAgICBGSUVMRF9PUFRTW3RoaXMuY29uZmlnW2ZpZWxkXS50eXBlXS5zY2FsZVtjaGFubmVsU2NhbGVUeXBlXSA6XG4gICAgICBbdGhpcy5nZXREZWZhdWx0TGF5ZXJDb25maWcoKVtzY2FsZV1dO1xuICB9XG5cbiAgdXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsKGRhdGFzZXQsIGNoYW5uZWwpIHtcbiAgICBjb25zdCB2aXN1YWxDaGFubmVsID0gdGhpcy52aXN1YWxDaGFubmVsc1tjaGFubmVsXTtcblxuICAgIHRoaXMudmFsaWRhdGVWaXN1YWxDaGFubmVsKGNoYW5uZWwpO1xuICAgICAgLy8gY2FsY3VsYXRlIGxheWVyIGNoYW5uZWwgZG9tYWluXG4gICAgY29uc3QgdXBkYXRlZERvbWFpbiA9IHRoaXMuY2FsY3VsYXRlTGF5ZXJEb21haW4oZGF0YXNldCwgdmlzdWFsQ2hhbm5lbCk7XG5cbiAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtbdmlzdWFsQ2hhbm5lbC5kb21haW5dOiB1cGRhdGVkRG9tYWlufSk7XG4gIH1cblxuICBjYWxjdWxhdGVMYXllckRvbWFpbihkYXRhc2V0LCB2aXN1YWxDaGFubmVsKSB7XG4gICAgY29uc3Qge2FsbERhdGEsIGZpbHRlcmVkSW5kZXhGb3JEb21haW59ID0gZGF0YXNldDtcbiAgICBjb25zdCBkZWZhdWx0RG9tYWluID0gWzAsIDFdO1xuICAgIGNvbnN0IHtzY2FsZX0gPSB2aXN1YWxDaGFubmVsO1xuICAgIGNvbnN0IHNjYWxlVHlwZSA9IHRoaXMuY29uZmlnW3NjYWxlXTtcblxuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5jb25maWdbdmlzdWFsQ2hhbm5lbC5maWVsZF07XG4gICAgaWYgKCFmaWVsZCkge1xuICAgICAgLy8gaWYgY29sb3JGaWVsZCBvciBzaXplRmllbGQgd2VyZSBzZXQgYmFjayB0byBudWxsXG4gICAgICByZXR1cm4gZGVmYXVsdERvbWFpbjtcbiAgICB9XG5cbiAgICBpZiAoIVNDQUxFX1RZUEVTW3NjYWxlVHlwZV0pIHtcbiAgICAgIENvbnNvbGUuZXJyb3IoYHNjYWxlIHR5cGUgJHtzY2FsZVR5cGV9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgICAgIHJldHVybiBkZWZhdWx0RG9tYWluO1xuICAgIH1cblxuICAgIC8vIFRPRE86IHJlZmFjdG9yIHRvIGFkZCB2YWx1ZUFjY2Vzc29yIHRvIGZpZWxkXG4gICAgY29uc3QgZmllbGRJZHggPSBmaWVsZC50YWJsZUZpZWxkSW5kZXggLSAxO1xuICAgIGNvbnN0IGlzVGltZSA9IGZpZWxkLnR5cGUgPT09IEFMTF9GSUVMRF9UWVBFUy50aW1lc3RhbXA7XG4gICAgY29uc3QgdmFsdWVBY2Nlc3NvciA9IG1heWJlVG9EYXRlLmJpbmQoXG4gICAgICBudWxsLFxuICAgICAgaXNUaW1lLFxuICAgICAgZmllbGRJZHgsXG4gICAgICBmaWVsZC5mb3JtYXRcbiAgICApO1xuICAgIGNvbnN0IGluZGV4VmFsdWVBY2Nlc3NvciA9IGkgPT4gdmFsdWVBY2Nlc3NvcihhbGxEYXRhW2ldKTtcblxuICAgIGNvbnN0IHNvcnRGdW5jdGlvbiA9IGdldFNvcnRpbmdGdW5jdGlvbihmaWVsZC50eXBlKTtcblxuICAgIHN3aXRjaCAoc2NhbGVUeXBlKSB7XG4gICAgICBjYXNlIFNDQUxFX1RZUEVTLm9yZGluYWw6XG4gICAgICBjYXNlIFNDQUxFX1RZUEVTLnBvaW50OlxuICAgICAgICAvLyBkbyBub3QgcmVjYWxjdWxhdGUgb3JkaW5hbCBkb21haW4gYmFzZWQgb24gZmlsdGVyZWQgZGF0YVxuICAgICAgICAvLyBkb24ndCBuZWVkIHRvIHVwZGF0ZSBvcmRpbmFsIGRvbWFpbiBldmVyeSB0aW1lXG4gICAgICAgIHJldHVybiBnZXRPcmRpbmFsRG9tYWluKGFsbERhdGEsIHZhbHVlQWNjZXNzb3IpO1xuXG4gICAgICBjYXNlIFNDQUxFX1RZUEVTLnF1YW50aWxlOlxuICAgICAgICByZXR1cm4gZ2V0UXVhbnRpbGVEb21haW4oZmlsdGVyZWRJbmRleEZvckRvbWFpbiwgaW5kZXhWYWx1ZUFjY2Vzc29yLCBzb3J0RnVuY3Rpb24pO1xuXG4gICAgICBjYXNlIFNDQUxFX1RZUEVTLnF1YW50aXplOlxuICAgICAgY2FzZSBTQ0FMRV9UWVBFUy5saW5lYXI6XG4gICAgICBjYXNlIFNDQUxFX1RZUEVTLnNxcnQ6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZ2V0TGluZWFyRG9tYWluKGZpbHRlcmVkSW5kZXhGb3JEb21haW4sIGluZGV4VmFsdWVBY2Nlc3Nvcik7XG4gICAgfVxuICB9XG5cbiAgaXNMYXllckhvdmVyZWQob2JqZWN0SW5mbykge1xuICAgIHJldHVybiAoXG4gICAgICBvYmplY3RJbmZvICYmXG4gICAgICBvYmplY3RJbmZvLmxheWVyICYmXG4gICAgICBvYmplY3RJbmZvLnBpY2tlZCAmJlxuICAgICAgb2JqZWN0SW5mby5sYXllci5wcm9wcy5pZCA9PT0gdGhpcy5pZFxuICAgICk7XG4gIH1cblxuICBnZXRSYWRpdXNTY2FsZUJ5Wm9vbShtYXBTdGF0ZSwgZml4ZWRSYWRpdXMpIHtcbiAgICBjb25zdCByYWRpdXNDaGFubmVsID0gT2JqZWN0LnZhbHVlcyh0aGlzLnZpc3VhbENoYW5uZWxzKS5maW5kKFxuICAgICAgdmMgPT4gdmMucHJvcGVydHkgPT09ICdyYWRpdXMnXG4gICAgKTtcblxuICAgIGlmICghcmFkaXVzQ2hhbm5lbCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGQgPSByYWRpdXNDaGFubmVsLmZpZWxkO1xuICAgIGNvbnN0IGZpeGVkID1cbiAgICAgIGZpeGVkUmFkaXVzID09PSB1bmRlZmluZWRcbiAgICAgICAgPyB0aGlzLmNvbmZpZy52aXNDb25maWcuZml4ZWRSYWRpdXNcbiAgICAgICAgOiBmaXhlZFJhZGl1cztcbiAgICBjb25zdCB7cmFkaXVzfSA9IHRoaXMuY29uZmlnLnZpc0NvbmZpZztcblxuICAgIHJldHVybiBmaXhlZFxuICAgICAgPyAxXG4gICAgICA6ICh0aGlzLmNvbmZpZ1tmaWVsZF0gPyAxIDogcmFkaXVzKSAqIHRoaXMuZ2V0Wm9vbUZhY3RvcihtYXBTdGF0ZSk7XG4gIH1cblxuICBzaG91bGRDYWxjdWxhdGVMYXllckRhdGEocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMuc29tZShwID0+ICF0aGlzLm5vbmVMYXllckRhdGFBZmZlY3RpbmdQcm9wcy5pbmNsdWRlcyhwKSk7XG4gIH1cbn1cbiJdfQ==