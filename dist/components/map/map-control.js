'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapControl = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _class, _temp2;

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  right: 0;\n  width: ', 'px;\n  padding: ', 'px;\n  z-index: 1;\n  top: ', 'px;\n  position: absolute;\n'], ['\n  right: 0;\n  width: ', 'px;\n  padding: ', 'px;\n  z-index: 1;\n  top: ', 'px;\n  position: absolute;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  padding: 4px 0;\n  display: flex;\n  justify-content: flex-end;\n'], ['\n  padding: 4px 0;\n  display: flex;\n  justify-content: flex-end;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  align-items: center;\n  background-color: ', ';\n  border-radius: 18px;\n  border: 0;\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.16);\n  color: ', ';\n  cursor: pointer;\n  display: flex;\n  height: 36px;\n  justify-content: center;\n  margin: 0;\n  outline: none;\n  padding: 0;\n  transition: ', ';\n  width: 36px;\n\n  :focus {\n    outline: none;\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: ', ';\n    color: ', ';\n  }\n'], ['\n  align-items: center;\n  background-color: ', ';\n  border-radius: 18px;\n  border: 0;\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.16);\n  color: ', ';\n  cursor: pointer;\n  display: flex;\n  height: 36px;\n  justify-content: center;\n  margin: 0;\n  outline: none;\n  padding: 0;\n  transition: ', ';\n  width: 36px;\n\n  :focus {\n    outline: none;\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: ', ';\n    color: ', ';\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  flex-grow: 1;\n  z-index: 1;\n  p {\n    margin-bottom: 0;\n  }\n'], ['\n  background-color: ', ';\n  flex-grow: 1;\n  z-index: 1;\n  p {\n    margin-bottom: 0;\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  ', ' max-height: 500px;\n  min-height: 100px;\n  overflow: auto;\n'], ['\n  ', ' max-height: 500px;\n  min-height: 100px;\n  overflow: auto;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: space-between;\n  background-color: ', ';\n  height: 32px;\n  padding: 6px 12px;\n  font-size: 11px;\n  color: ', ';\n\n  button {\n    width: 18px;\n    height: 18px;\n  }\n'], ['\n  display: flex;\n  justify-content: space-between;\n  background-color: ', ';\n  height: 32px;\n  padding: 6px 12px;\n  font-size: 11px;\n  color: ', ';\n\n  button {\n    width: 18px;\n    height: 18px;\n  }\n']); // Copyright (c) 2018 Uber Technologies, Inc.
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

var _reselect = require('reselect');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledComponents3 = require('../common/styled-components');

var _mapLayerSelector = require('../common/map-layer-selector');

var _mapLayerSelector2 = _interopRequireDefault(_mapLayerSelector);

var _logo = require('../common/logo');

var _logo2 = _interopRequireDefault(_logo);

var _mapLegend = require('./map-legend');

var _mapLegend2 = _interopRequireDefault(_mapLegend);

var _icons = require('../common/icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledMapControl = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.mapControl.width;
}, function (props) {
  return props.theme.mapControl.padding;
}, function (props) {
  return props.top;
});

var StyledMapControlAction = _styledComponents2.default.div(_templateObject2);

var StyledMapControlButton = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.active ? props.theme.secondaryBtnActBgd : props.theme.secondaryBtnBgd;
}, function (props) {
  return props.active ? props.theme.secondaryBtnActColor : props.theme.secondaryBtnColor;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.secondaryBtnActBgd;
}, function (props) {
  return props.theme.secondaryBtnActColor;
});

var StyledMapControlPanel = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.theme.mapPanelBackgroundColor;
});

var StyledMapControlPanelContent = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.theme.dropdownScrollBar;
});

var StyledMapControlPanelHeader = _styledComponents2.default.div(_templateObject6, function (props) {
  return props.theme.mapPanelHeaderBackgroundColor;
}, function (props) {
  return props.theme.secondaryBtnColor;
});

/**
 * Generates all layers available for the current map
 * TODO: this may be moved into map-container or map-control or even at the reducer level
 * @param layers
 * @param mapLayers
 * @returns {[id, label, isVisible]}
 */
var layerSelector = function layerSelector(layers, mapLayers) {
  var availableItems = Object.keys(layers).reduce(function (availableLayers, currentLayerId) {
    // is available ? if yes add to available list
    var currentLayer = layers[currentLayerId];
    // if maplayers exists we need to make sure currentlayer
    // is contained in mapLayers in order to add onto availableLayers
    // otherwise we add all layers

    var layerConfig = mapLayers ? mapLayers[currentLayer.id] : currentLayer.config;

    var mustBeAdded = mapLayers && mapLayers[currentLayer.id] ? mapLayers[currentLayer.id].isAvailable : layerConfig.isVisible;

    return mustBeAdded ? [].concat((0, _toConsumableArray3.default)(availableLayers), [{
      id: currentLayer.id,
      name: currentLayer.config.label,
      isVisible: mapLayers && mapLayers[currentLayer.id] ? mapLayers[currentLayer.id].isVisible : layerConfig.isVisible,
      layer: currentLayer
    }]) : availableLayers;
  }, []);

  return availableItems;
};

var MapControl = exports.MapControl = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(MapControl, _Component);

  function MapControl() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MapControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MapControl.__proto__ || Object.getPrototypeOf(MapControl)).call.apply(_ref, [this].concat(args))), _this), _this.layerSelector = function (state) {
      return state.layers;
    }, _this.mapLayersSelector = function (state) {
      return state.mapLayers;
    }, _this.initialDataSelector = (0, _reselect.createSelector)(_this.layerSelector, _this.mapLayersSelector, layerSelector), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MapControl, [{
    key: 'render',
    value: function render() {
      var items = this.initialDataSelector(this.props);

      if (!items) {
        return null;
      }

      var _props = this.props,
          dragRotate = _props.dragRotate,
          isSplit = _props.isSplit,
          isExport = _props.isExport,
          mapIndex = _props.mapIndex,
          mapControls = _props.mapControls,
          onTogglePerspective = _props.onTogglePerspective,
          onToggleSplitMap = _props.onToggleSplitMap,
          onMapToggleLayer = _props.onMapToggleLayer,
          onToggleMapControl = _props.onToggleMapControl,
          scale = _props.scale;
      var _mapControls$visibleL = mapControls.visibleLayers,
          visibleLayers = _mapControls$visibleL === undefined ? {} : _mapControls$visibleL,
          _mapControls$mapLegen = mapControls.mapLegend,
          mapLegend = _mapControls$mapLegen === undefined ? {} : _mapControls$mapLegen,
          _mapControls$toggle3d = mapControls.toggle3d,
          toggle3d = _mapControls$toggle3d === undefined ? {} : _mapControls$toggle3d,
          _mapControls$splitMap = mapControls.splitMap,
          splitMap = _mapControls$splitMap === undefined ? {} : _mapControls$splitMap;


      return _react2.default.createElement(
        StyledMapControl,
        { className: 'map-control' },
        splitMap.show ? _react2.default.createElement(
          ActionPanel,
          { key: 0 },
          _react2.default.createElement(
            StyledMapControlButton,
            {
              active: isSplit,
              onClick: function onClick(e) {
                e.preventDefault();
                onToggleSplitMap(isSplit ? mapIndex : undefined);
              },
              key: 'split-' + isSplit,
              className: 'map-control-button split-map',
              'data-tip': true,
              'data-for': 'action-toggle'
            },
            isSplit ? _react2.default.createElement(_icons.Delete, { height: '18px' }) : _react2.default.createElement(_icons.Split, { height: '18px' }),
            _react2.default.createElement(MapLegendTooltip, {
              id: 'action-toggle',
              message: isSplit ? 'Close current panel' : 'Switch to dual map view'
            })
          )
        ) : null,
        isSplit && visibleLayers.show ? _react2.default.createElement(
          ActionPanel,
          { key: 1 },
          _react2.default.createElement(LayerSelectorPanel, {
            items: items,
            onMapToggleLayer: onMapToggleLayer,
            isActive: visibleLayers.active,
            toggleMenuPanel: function toggleMenuPanel() {
              return onToggleMapControl('visibleLayers');
            }
          })
        ) : null,
        toggle3d.show ? _react2.default.createElement(
          ActionPanel,
          { key: 2 },
          _react2.default.createElement(
            StyledMapControlButton,
            {
              onClick: function onClick(e) {
                e.preventDefault();
                onTogglePerspective();
              },
              active: dragRotate,
              'data-tip': true,
              'data-for': 'action-3d'
            },
            _react2.default.createElement(_icons.Cube3d, { height: '22px' }),
            _react2.default.createElement(MapLegendTooltip, {
              id: 'action-3d',
              message: dragRotate ? 'Disable 3D Map' : '3D Map'
            })
          )
        ) : null,
        mapLegend.show ? _react2.default.createElement(
          ActionPanel,
          { key: 3 },
          _react2.default.createElement(MapLegendPanel, {
            items: items,
            scale: scale,
            isExport: isExport,
            onMapToggleLayer: onMapToggleLayer,
            isActive: mapLegend.active,
            toggleMenuPanel: function toggleMenuPanel() {
              return onToggleMapControl('mapLegend');
            }
          })
        ) : null
      );
    }
  }]);
  return MapControl;
}(_react.Component), _class.propTypes = {
  datasets: _propTypes2.default.object.isRequired,
  dragRotate: _propTypes2.default.bool.isRequired,
  isSplit: _propTypes2.default.bool.isRequired,
  layers: _propTypes2.default.arrayOf(_propTypes2.default.object),
  mapIndex: _propTypes2.default.number.isRequired,
  mapControls: _propTypes2.default.object.isRequired,
  onToggleFullScreen: _propTypes2.default.func.isRequired,
  onTogglePerspective: _propTypes2.default.func.isRequired,
  onToggleSplitMap: _propTypes2.default.func.isRequired,
  onToggleMapControl: _propTypes2.default.func.isRequired,
  onMapToggleLayer: _propTypes2.default.func.isRequired,
  top: _propTypes2.default.number.isRequired,

  // optional
  scale: _propTypes2.default.number,
  mapLayers: _propTypes2.default.object
}, _class.defaultProps = {
  isSplit: false,
  top: 0
}, _temp2);


var MapControlPanel = function MapControlPanel(_ref2) {
  var children = _ref2.children,
      header = _ref2.header,
      onClick = _ref2.onClick,
      _ref2$scale = _ref2.scale,
      scale = _ref2$scale === undefined ? 1 : _ref2$scale,
      isExport = _ref2.isExport;
  return _react2.default.createElement(
    StyledMapControlPanel,
    {
      style: {
        transform: 'scale(' + scale + ') translate(calc(-' + 25 * (scale - 1) + '% - ' + 10 * scale + 'px), calc(' + 25 * (scale - 1) + '% + ' + 10 * scale + 'px))'
      }
    },
    _react2.default.createElement(
      StyledMapControlPanelHeader,
      { style: { position: 'relative' } },
      isExport ? _react2.default.createElement(_logo2.default, { version: false }) : _react2.default.createElement(
        'span',
        { style: { verticalAlign: 'middle' } },
        header
      ),
      isExport ? null : _react2.default.createElement(
        _styledComponents3.IconRoundSmall,
        null,
        _react2.default.createElement(_icons.Close, { height: '16px', onClick: onClick })
      )
    ),
    _react2.default.createElement(
      StyledMapControlPanelContent,
      null,
      children
    )
  );
};

var MapLegendPanel = function MapLegendPanel(_ref3) {
  var items = _ref3.items,
      isActive = _ref3.isActive,
      scale = _ref3.scale,
      toggleMenuPanel = _ref3.toggleMenuPanel,
      isExport = _ref3.isExport;
  return !isActive ? _react2.default.createElement(
    StyledMapControlButton,
    {
      key: 2,
      'data-tip': true,
      'data-for': 'show-legend',
      className: 'map-control-button show-legend',
      onClick: function onClick(e) {
        e.preventDefault();
        toggleMenuPanel();
      }
    },
    _react2.default.createElement(_icons.Legend, { height: '22px' }),
    _react2.default.createElement(MapLegendTooltip, { id: 'show-legend', message: 'show legend' })
  ) : _react2.default.createElement(
    MapControlPanel,
    {
      scale: scale,
      header: 'Layer Legend',
      onClick: toggleMenuPanel,
      isExport: isExport
    },
    _react2.default.createElement(_mapLegend2.default, {
      layers: items.filter(function (item) {
        return item.isVisible;
      }).map(function (item) {
        return item.layer;
      })
    })
  );
};

var LayerSelectorPanel = function LayerSelectorPanel(_ref4) {
  var items = _ref4.items,
      onMapToggleLayer = _ref4.onMapToggleLayer,
      isActive = _ref4.isActive,
      toggleMenuPanel = _ref4.toggleMenuPanel;
  return !isActive ? _react2.default.createElement(
    StyledMapControlButton,
    {
      key: 1,
      onClick: function onClick(e) {
        e.preventDefault();
        toggleMenuPanel();
      },
      className: 'map-control-button toggle-layer',
      'data-tip': true,
      'data-for': 'toggle-layer'
    },
    _react2.default.createElement(_icons.Layers, { height: '22px' }),
    _react2.default.createElement(MapLegendTooltip, {
      id: 'toggle-layer',
      message: isActive ? 'Hide layer panel' : 'Show layer panel'
    })
  ) : _react2.default.createElement(
    MapControlPanel,
    { header: 'Visible layers', onClick: toggleMenuPanel },
    _react2.default.createElement(_mapLayerSelector2.default, { layers: items, onMapToggleLayer: onMapToggleLayer })
  );
};

var ActionPanel = function ActionPanel(_ref5) {
  var children = _ref5.children;
  return _react2.default.createElement(
    StyledMapControlAction,
    null,
    children
  );
};

var MapLegendTooltip = function MapLegendTooltip(_ref6) {
  var id = _ref6.id,
      message = _ref6.message;
  return _react2.default.createElement(
    _styledComponents3.Tooltip,
    { id: id, place: 'left', effect: 'solid' },
    _react2.default.createElement(
      'span',
      null,
      message
    )
  );
};

var MapControlFactory = function MapControlFactory() {
  return MapControl;
};

exports.default = MapControlFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9tYXAtY29udHJvbC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRNYXBDb250cm9sIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsIm1hcENvbnRyb2wiLCJ3aWR0aCIsInBhZGRpbmciLCJ0b3AiLCJTdHlsZWRNYXBDb250cm9sQWN0aW9uIiwiU3R5bGVkTWFwQ29udHJvbEJ1dHRvbiIsImFjdGl2ZSIsInNlY29uZGFyeUJ0bkFjdEJnZCIsInNlY29uZGFyeUJ0bkJnZCIsInNlY29uZGFyeUJ0bkFjdENvbG9yIiwic2Vjb25kYXJ5QnRuQ29sb3IiLCJ0cmFuc2l0aW9uIiwiU3R5bGVkTWFwQ29udHJvbFBhbmVsIiwibWFwUGFuZWxCYWNrZ3JvdW5kQ29sb3IiLCJTdHlsZWRNYXBDb250cm9sUGFuZWxDb250ZW50IiwiZHJvcGRvd25TY3JvbGxCYXIiLCJTdHlsZWRNYXBDb250cm9sUGFuZWxIZWFkZXIiLCJtYXBQYW5lbEhlYWRlckJhY2tncm91bmRDb2xvciIsImxheWVyU2VsZWN0b3IiLCJsYXllcnMiLCJtYXBMYXllcnMiLCJhdmFpbGFibGVJdGVtcyIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJhdmFpbGFibGVMYXllcnMiLCJjdXJyZW50TGF5ZXJJZCIsImN1cnJlbnRMYXllciIsImxheWVyQ29uZmlnIiwiaWQiLCJjb25maWciLCJtdXN0QmVBZGRlZCIsImlzQXZhaWxhYmxlIiwiaXNWaXNpYmxlIiwibmFtZSIsImxhYmVsIiwibGF5ZXIiLCJNYXBDb250cm9sIiwic3RhdGUiLCJtYXBMYXllcnNTZWxlY3RvciIsImluaXRpYWxEYXRhU2VsZWN0b3IiLCJpdGVtcyIsImRyYWdSb3RhdGUiLCJpc1NwbGl0IiwiaXNFeHBvcnQiLCJtYXBJbmRleCIsIm1hcENvbnRyb2xzIiwib25Ub2dnbGVQZXJzcGVjdGl2ZSIsIm9uVG9nZ2xlU3BsaXRNYXAiLCJvbk1hcFRvZ2dsZUxheWVyIiwib25Ub2dnbGVNYXBDb250cm9sIiwic2NhbGUiLCJ2aXNpYmxlTGF5ZXJzIiwibWFwTGVnZW5kIiwidG9nZ2xlM2QiLCJzcGxpdE1hcCIsInNob3ciLCJlIiwicHJldmVudERlZmF1bHQiLCJ1bmRlZmluZWQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJkYXRhc2V0cyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiYXJyYXlPZiIsIm51bWJlciIsIm9uVG9nZ2xlRnVsbFNjcmVlbiIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJNYXBDb250cm9sUGFuZWwiLCJjaGlsZHJlbiIsImhlYWRlciIsIm9uQ2xpY2siLCJ0cmFuc2Zvcm0iLCJwb3NpdGlvbiIsInZlcnRpY2FsQWxpZ24iLCJNYXBMZWdlbmRQYW5lbCIsImlzQWN0aXZlIiwidG9nZ2xlTWVudVBhbmVsIiwiZmlsdGVyIiwiaXRlbSIsIm1hcCIsIkxheWVyU2VsZWN0b3JQYW5lbCIsIkFjdGlvblBhbmVsIiwiTWFwTGVnZW5kVG9vbHRpcCIsIm1lc3NhZ2UiLCJNYXBDb250cm9sRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bWZBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFTQSxJQUFNQSxtQkFBbUJDLDJCQUFPQyxHQUExQixrQkFFSztBQUFBLFNBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsVUFBWixDQUF1QkMsS0FBaEM7QUFBQSxDQUZMLEVBR087QUFBQSxTQUFTSCxNQUFNQyxLQUFOLENBQVlDLFVBQVosQ0FBdUJFLE9BQWhDO0FBQUEsQ0FIUCxFQUtHO0FBQUEsU0FBU0osTUFBTUssR0FBZjtBQUFBLENBTEgsQ0FB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QUFOO0FBQUEsU0FDdkI7QUFBQyw4QkFBRDtBQUFBLE1BQVMsSUFBSTNELEVBQWIsRUFBaUIsT0FBTSxNQUF2QixFQUE4QixRQUFPLE9BQXJDO0FBQ0U7QUFBQTtBQUFBO0FBQU8yRDtBQUFQO0FBREYsR0FEdUI7QUFBQSxDQUF6Qjs7QUFNQSxJQUFNQyxvQkFBb0IsU0FBcEJBLGlCQUFvQjtBQUFBLFNBQU1wRCxVQUFOO0FBQUEsQ0FBMUI7O2tCQUVlb0QsaUIiLCJmaWxlIjoibWFwLWNvbnRyb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTggVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtUb29sdGlwLCBJY29uUm91bmRTbWFsbH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IE1hcExheWVyU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vbWFwLWxheWVyLXNlbGVjdG9yJztcbmltcG9ydCBLZXBsZXJHbExvZ28gZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9nbyc7XG5pbXBvcnQgTWFwTGVnZW5kIGZyb20gJy4vbWFwLWxlZ2VuZCc7XG5pbXBvcnQge1xuICBDbG9zZSxcbiAgU3BsaXQsXG4gIExlZ2VuZCxcbiAgQ3ViZTNkLFxuICBEZWxldGUsXG4gIExheWVyc1xufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2wgPSBzdHlsZWQuZGl2YFxuICByaWdodDogMDtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFwQ29udHJvbC53aWR0aH1weDtcbiAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXBDb250cm9sLnBhZGRpbmd9cHg7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogJHtwcm9wcyA9PiBwcm9wcy50b3B9cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xBY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA0cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xCdXR0b24gPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMuYWN0aXZlXG4gICAgICA/IHByb3BzLnRoZW1lLnNlY29uZGFyeUJ0bkFjdEJnZFxuICAgICAgOiBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5CZ2R9O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZVxuICAgICAgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5BY3RDb2xvclxuICAgICAgOiBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5Db2xvcn07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB0cmFuc2l0aW9uOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRyYW5zaXRpb259O1xuICB3aWR0aDogMzZweDtcblxuICA6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUJ0bkFjdEJnZH07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQWN0Q29sb3J9O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRNYXBDb250cm9sUGFuZWwgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcFBhbmVsQmFja2dyb3VuZENvbG9yfTtcbiAgZmxleC1ncm93OiAxO1xuICB6LWluZGV4OiAxO1xuICBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRNYXBDb250cm9sUGFuZWxDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93blNjcm9sbEJhcn0gbWF4LWhlaWdodDogNTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xQYW5lbEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXBQYW5lbEhlYWRlckJhY2tncm91bmRDb2xvcn07XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQ29sb3J9O1xuXG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICB9XG5gO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhbGwgbGF5ZXJzIGF2YWlsYWJsZSBmb3IgdGhlIGN1cnJlbnQgbWFwXG4gKiBUT0RPOiB0aGlzIG1heSBiZSBtb3ZlZCBpbnRvIG1hcC1jb250YWluZXIgb3IgbWFwLWNvbnRyb2wgb3IgZXZlbiBhdCB0aGUgcmVkdWNlciBsZXZlbFxuICogQHBhcmFtIGxheWVyc1xuICogQHBhcmFtIG1hcExheWVyc1xuICogQHJldHVybnMge1tpZCwgbGFiZWwsIGlzVmlzaWJsZV19XG4gKi9cbmNvbnN0IGxheWVyU2VsZWN0b3IgPSAobGF5ZXJzLCBtYXBMYXllcnMpID0+IHtcbiAgY29uc3QgYXZhaWxhYmxlSXRlbXMgPSBPYmplY3Qua2V5cyhsYXllcnMpLnJlZHVjZShcbiAgICAoYXZhaWxhYmxlTGF5ZXJzLCBjdXJyZW50TGF5ZXJJZCkgPT4ge1xuICAgICAgLy8gaXMgYXZhaWxhYmxlID8gaWYgeWVzIGFkZCB0byBhdmFpbGFibGUgbGlzdFxuICAgICAgY29uc3QgY3VycmVudExheWVyID0gbGF5ZXJzW2N1cnJlbnRMYXllcklkXTtcbiAgICAgIC8vIGlmIG1hcGxheWVycyBleGlzdHMgd2UgbmVlZCB0byBtYWtlIHN1cmUgY3VycmVudGxheWVyXG4gICAgICAvLyBpcyBjb250YWluZWQgaW4gbWFwTGF5ZXJzIGluIG9yZGVyIHRvIGFkZCBvbnRvIGF2YWlsYWJsZUxheWVyc1xuICAgICAgLy8gb3RoZXJ3aXNlIHdlIGFkZCBhbGwgbGF5ZXJzXG5cbiAgICAgIGNvbnN0IGxheWVyQ29uZmlnID0gbWFwTGF5ZXJzXG4gICAgICAgID8gbWFwTGF5ZXJzW2N1cnJlbnRMYXllci5pZF1cbiAgICAgICAgOiBjdXJyZW50TGF5ZXIuY29uZmlnO1xuXG4gICAgICBjb25zdCBtdXN0QmVBZGRlZCA9XG4gICAgICAgIG1hcExheWVycyAmJiBtYXBMYXllcnNbY3VycmVudExheWVyLmlkXVxuICAgICAgICAgID8gbWFwTGF5ZXJzW2N1cnJlbnRMYXllci5pZF0uaXNBdmFpbGFibGVcbiAgICAgICAgICA6IGxheWVyQ29uZmlnLmlzVmlzaWJsZTtcblxuICAgICAgcmV0dXJuIG11c3RCZUFkZGVkXG4gICAgICAgID8gW1xuICAgICAgICAgICAgLi4uYXZhaWxhYmxlTGF5ZXJzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogY3VycmVudExheWVyLmlkLFxuICAgICAgICAgICAgICBuYW1lOiBjdXJyZW50TGF5ZXIuY29uZmlnLmxhYmVsLFxuICAgICAgICAgICAgICBpc1Zpc2libGU6XG4gICAgICAgICAgICAgICAgbWFwTGF5ZXJzICYmIG1hcExheWVyc1tjdXJyZW50TGF5ZXIuaWRdXG4gICAgICAgICAgICAgICAgICA/IG1hcExheWVyc1tjdXJyZW50TGF5ZXIuaWRdLmlzVmlzaWJsZVxuICAgICAgICAgICAgICAgICAgOiBsYXllckNvbmZpZy5pc1Zpc2libGUsXG4gICAgICAgICAgICAgIGxheWVyOiBjdXJyZW50TGF5ZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIDogYXZhaWxhYmxlTGF5ZXJzO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICByZXR1cm4gYXZhaWxhYmxlSXRlbXM7XG59O1xuXG5leHBvcnQgY2xhc3MgTWFwQ29udHJvbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBkcmFnUm90YXRlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU3BsaXQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICBtYXBJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG1hcENvbnRyb2xzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgb25Ub2dnbGVGdWxsU2NyZWVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uVG9nZ2xlUGVyc3BlY3RpdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Ub2dnbGVTcGxpdE1hcDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblRvZ2dsZU1hcENvbnRyb2w6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25NYXBUb2dnbGVMYXllcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0b3A6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8vIG9wdGlvbmFsXG4gICAgc2NhbGU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWFwTGF5ZXJzOiBQcm9wVHlwZXMub2JqZWN0XG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc1NwbGl0OiBmYWxzZSxcbiAgICB0b3A6IDBcbiAgfTtcblxuICBsYXllclNlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUubGF5ZXJzO1xuICBtYXBMYXllcnNTZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLm1hcExheWVycztcblxuICBpbml0aWFsRGF0YVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgdGhpcy5sYXllclNlbGVjdG9yLFxuICAgIHRoaXMubWFwTGF5ZXJzU2VsZWN0b3IsXG4gICAgbGF5ZXJTZWxlY3RvclxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuaW5pdGlhbERhdGFTZWxlY3Rvcih0aGlzLnByb3BzKTtcblxuICAgIGlmICghaXRlbXMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIGRyYWdSb3RhdGUsXG4gICAgICBpc1NwbGl0LFxuICAgICAgaXNFeHBvcnQsXG4gICAgICBtYXBJbmRleCxcbiAgICAgIG1hcENvbnRyb2xzLFxuICAgICAgb25Ub2dnbGVQZXJzcGVjdGl2ZSxcbiAgICAgIG9uVG9nZ2xlU3BsaXRNYXAsXG4gICAgICBvbk1hcFRvZ2dsZUxheWVyLFxuICAgICAgb25Ub2dnbGVNYXBDb250cm9sLFxuICAgICAgc2NhbGVcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHtcbiAgICAgIHZpc2libGVMYXllcnMgPSB7fSxcbiAgICAgIG1hcExlZ2VuZCA9IHt9LFxuICAgICAgdG9nZ2xlM2QgPSB7fSxcbiAgICAgIHNwbGl0TWFwID0ge31cbiAgICB9ID0gbWFwQ29udHJvbHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZE1hcENvbnRyb2wgY2xhc3NOYW1lPVwibWFwLWNvbnRyb2xcIj5cbiAgICAgICAgey8qIFNwbGl0IE1hcCAqL31cbiAgICAgICAge3NwbGl0TWFwLnNob3cgPyAoXG4gICAgICAgICAgPEFjdGlvblBhbmVsIGtleT17MH0+XG4gICAgICAgICAgICA8U3R5bGVkTWFwQ29udHJvbEJ1dHRvblxuICAgICAgICAgICAgICBhY3RpdmU9e2lzU3BsaXR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBvblRvZ2dsZVNwbGl0TWFwKGlzU3BsaXQgPyBtYXBJbmRleCA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGtleT17YHNwbGl0LSR7aXNTcGxpdH1gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXAtY29udHJvbC1idXR0b24gc3BsaXQtbWFwXCJcbiAgICAgICAgICAgICAgZGF0YS10aXBcbiAgICAgICAgICAgICAgZGF0YS1mb3I9XCJhY3Rpb24tdG9nZ2xlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2lzU3BsaXQgPyA8RGVsZXRlIGhlaWdodD1cIjE4cHhcIiAvPiA6IDxTcGxpdCBoZWlnaHQ9XCIxOHB4XCIgLz59XG4gICAgICAgICAgICAgIDxNYXBMZWdlbmRUb29sdGlwXG4gICAgICAgICAgICAgICAgaWQ9XCJhY3Rpb24tdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICBtZXNzYWdlPXtcbiAgICAgICAgICAgICAgICAgIGlzU3BsaXQgPyAnQ2xvc2UgY3VycmVudCBwYW5lbCcgOiAnU3dpdGNoIHRvIGR1YWwgbWFwIHZpZXcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TdHlsZWRNYXBDb250cm9sQnV0dG9uPlxuICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIHsvKiBNYXAgTGF5ZXJzICovfVxuICAgICAgICB7aXNTcGxpdCAmJiB2aXNpYmxlTGF5ZXJzLnNob3cgPyAoXG4gICAgICAgICAgPEFjdGlvblBhbmVsIGtleT17MX0+XG4gICAgICAgICAgICA8TGF5ZXJTZWxlY3RvclBhbmVsXG4gICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgICAgb25NYXBUb2dnbGVMYXllcj17b25NYXBUb2dnbGVMYXllcn1cbiAgICAgICAgICAgICAgaXNBY3RpdmU9e3Zpc2libGVMYXllcnMuYWN0aXZlfVxuICAgICAgICAgICAgICB0b2dnbGVNZW51UGFuZWw9eygpID0+IG9uVG9nZ2xlTWFwQ29udHJvbCgndmlzaWJsZUxheWVycycpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0FjdGlvblBhbmVsPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICB7LyogM0QgTWFwICovfVxuICAgICAgICB7dG9nZ2xlM2Quc2hvdyA/IChcbiAgICAgICAgICA8QWN0aW9uUGFuZWwga2V5PXsyfT5cbiAgICAgICAgICAgIDxTdHlsZWRNYXBDb250cm9sQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBvblRvZ2dsZVBlcnNwZWN0aXZlKCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFjdGl2ZT17ZHJhZ1JvdGF0ZX1cbiAgICAgICAgICAgICAgZGF0YS10aXBcbiAgICAgICAgICAgICAgZGF0YS1mb3I9XCJhY3Rpb24tM2RcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q3ViZTNkIGhlaWdodD1cIjIycHhcIiAvPlxuICAgICAgICAgICAgICB7LyogTm8gaWNvbiBzaW5jZSB3ZSBhcmUgaW5qZWN0aW5nIHRocm91Z2ggY3NzIC50aHJlZUQtbWFwIGNsYXNzKi99XG4gICAgICAgICAgICAgIDxNYXBMZWdlbmRUb29sdGlwXG4gICAgICAgICAgICAgICAgaWQ9XCJhY3Rpb24tM2RcIlxuICAgICAgICAgICAgICAgIG1lc3NhZ2U9e2RyYWdSb3RhdGUgPyAnRGlzYWJsZSAzRCBNYXAnIDogJzNEIE1hcCd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1N0eWxlZE1hcENvbnRyb2xCdXR0b24+XG4gICAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgey8qIE1hcCBMZWdlbmQgKi99XG4gICAgICAgIHttYXBMZWdlbmQuc2hvdyA/IChcbiAgICAgICAgICA8QWN0aW9uUGFuZWwga2V5PXszfT5cbiAgICAgICAgICAgIDxNYXBMZWdlbmRQYW5lbFxuICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAgIHNjYWxlPXtzY2FsZX1cbiAgICAgICAgICAgICAgaXNFeHBvcnQ9e2lzRXhwb3J0fVxuICAgICAgICAgICAgICBvbk1hcFRvZ2dsZUxheWVyPXtvbk1hcFRvZ2dsZUxheWVyfVxuICAgICAgICAgICAgICBpc0FjdGl2ZT17bWFwTGVnZW5kLmFjdGl2ZX1cbiAgICAgICAgICAgICAgdG9nZ2xlTWVudVBhbmVsPXsoKSA9PiBvblRvZ2dsZU1hcENvbnRyb2woJ21hcExlZ2VuZCcpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0FjdGlvblBhbmVsPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvU3R5bGVkTWFwQ29udHJvbD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IE1hcENvbnRyb2xQYW5lbCA9ICh7Y2hpbGRyZW4sIGhlYWRlciwgb25DbGljaywgc2NhbGUgPSAxLCBpc0V4cG9ydH0pID0+IChcbiAgPFN0eWxlZE1hcENvbnRyb2xQYW5lbFxuICAgIHN0eWxlPXt7XG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3NjYWxlfSkgdHJhbnNsYXRlKGNhbGMoLSR7MjUgKiAoc2NhbGUgLSAxKX0lIC0gJHsxMCAqXG4gICAgICAgIHNjYWxlfXB4KSwgY2FsYygkezI1ICogKHNjYWxlIC0gMSl9JSArICR7MTAgKiBzY2FsZX1weCkpYFxuICAgIH19XG4gID5cbiAgICA8U3R5bGVkTWFwQ29udHJvbFBhbmVsSGVhZGVyIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cbiAgICAgIHtpc0V4cG9ydCA/IChcbiAgICAgICAgPEtlcGxlckdsTG9nbyB2ZXJzaW9uPXtmYWxzZX0gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7dmVydGljYWxBbGlnbjogJ21pZGRsZSd9fT57aGVhZGVyfTwvc3Bhbj5cbiAgICAgICl9XG4gICAgICB7aXNFeHBvcnQgPyBudWxsIDogKFxuICAgICAgICA8SWNvblJvdW5kU21hbGw+XG4gICAgICAgICAgPENsb3NlIGhlaWdodD1cIjE2cHhcIiBvbkNsaWNrPXtvbkNsaWNrfSAvPlxuICAgICAgICA8L0ljb25Sb3VuZFNtYWxsPlxuICAgICAgKX1cbiAgICA8L1N0eWxlZE1hcENvbnRyb2xQYW5lbEhlYWRlcj5cbiAgICA8U3R5bGVkTWFwQ29udHJvbFBhbmVsQ29udGVudD57Y2hpbGRyZW59PC9TdHlsZWRNYXBDb250cm9sUGFuZWxDb250ZW50PlxuICA8L1N0eWxlZE1hcENvbnRyb2xQYW5lbD5cbik7XG5cbmNvbnN0IE1hcExlZ2VuZFBhbmVsID0gKHtpdGVtcywgaXNBY3RpdmUsIHNjYWxlLCB0b2dnbGVNZW51UGFuZWwsIGlzRXhwb3J0fSkgPT5cbiAgIWlzQWN0aXZlID8gKFxuICAgIDxTdHlsZWRNYXBDb250cm9sQnV0dG9uXG4gICAgICBrZXk9ezJ9XG4gICAgICBkYXRhLXRpcFxuICAgICAgZGF0YS1mb3I9XCJzaG93LWxlZ2VuZFwiXG4gICAgICBjbGFzc05hbWU9XCJtYXAtY29udHJvbC1idXR0b24gc2hvdy1sZWdlbmRcIlxuICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdG9nZ2xlTWVudVBhbmVsKCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxMZWdlbmQgaGVpZ2h0PVwiMjJweFwiIC8+XG4gICAgICA8TWFwTGVnZW5kVG9vbHRpcCBpZD1cInNob3ctbGVnZW5kXCIgbWVzc2FnZT17J3Nob3cgbGVnZW5kJ30gLz5cbiAgICA8L1N0eWxlZE1hcENvbnRyb2xCdXR0b24+XG4gICkgOiAoXG4gICAgPE1hcENvbnRyb2xQYW5lbFxuICAgICAgc2NhbGU9e3NjYWxlfVxuICAgICAgaGVhZGVyPXsnTGF5ZXIgTGVnZW5kJ31cbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1lbnVQYW5lbH1cbiAgICAgIGlzRXhwb3J0PXtpc0V4cG9ydH1cbiAgICA+XG4gICAgICA8TWFwTGVnZW5kXG4gICAgICAgIGxheWVycz17aXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pc1Zpc2libGUpLm1hcChpdGVtID0+IGl0ZW0ubGF5ZXIpfVxuICAgICAgLz5cbiAgICA8L01hcENvbnRyb2xQYW5lbD5cbiAgKTtcblxuY29uc3QgTGF5ZXJTZWxlY3RvclBhbmVsID0gKHtcbiAgaXRlbXMsXG4gIG9uTWFwVG9nZ2xlTGF5ZXIsXG4gIGlzQWN0aXZlLFxuICB0b2dnbGVNZW51UGFuZWxcbn0pID0+XG4gICFpc0FjdGl2ZSA/IChcbiAgICA8U3R5bGVkTWFwQ29udHJvbEJ1dHRvblxuICAgICAga2V5PXsxfVxuICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdG9nZ2xlTWVudVBhbmVsKCk7XG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPVwibWFwLWNvbnRyb2wtYnV0dG9uIHRvZ2dsZS1sYXllclwiXG4gICAgICBkYXRhLXRpcFxuICAgICAgZGF0YS1mb3I9XCJ0b2dnbGUtbGF5ZXJcIlxuICAgID5cbiAgICAgIDxMYXllcnMgaGVpZ2h0PVwiMjJweFwiIC8+XG4gICAgICA8TWFwTGVnZW5kVG9vbHRpcFxuICAgICAgICBpZD1cInRvZ2dsZS1sYXllclwiXG4gICAgICAgIG1lc3NhZ2U9e2lzQWN0aXZlID8gJ0hpZGUgbGF5ZXIgcGFuZWwnIDogJ1Nob3cgbGF5ZXIgcGFuZWwnfVxuICAgICAgLz5cbiAgICA8L1N0eWxlZE1hcENvbnRyb2xCdXR0b24+XG4gICkgOiAoXG4gICAgPE1hcENvbnRyb2xQYW5lbCBoZWFkZXI9XCJWaXNpYmxlIGxheWVyc1wiIG9uQ2xpY2s9e3RvZ2dsZU1lbnVQYW5lbH0+XG4gICAgICA8TWFwTGF5ZXJTZWxlY3RvciBsYXllcnM9e2l0ZW1zfSBvbk1hcFRvZ2dsZUxheWVyPXtvbk1hcFRvZ2dsZUxheWVyfSAvPlxuICAgIDwvTWFwQ29udHJvbFBhbmVsPlxuICApO1xuXG5jb25zdCBBY3Rpb25QYW5lbCA9ICh7Y2hpbGRyZW59KSA9PiAoXG4gIDxTdHlsZWRNYXBDb250cm9sQWN0aW9uPntjaGlsZHJlbn08L1N0eWxlZE1hcENvbnRyb2xBY3Rpb24+XG4pO1xuXG5jb25zdCBNYXBMZWdlbmRUb29sdGlwID0gKHtpZCwgbWVzc2FnZX0pID0+IChcbiAgPFRvb2x0aXAgaWQ9e2lkfSBwbGFjZT1cImxlZnRcIiBlZmZlY3Q9XCJzb2xpZFwiPlxuICAgIDxzcGFuPnttZXNzYWdlfTwvc3Bhbj5cbiAgPC9Ub29sdGlwPlxuKTtcblxuY29uc3QgTWFwQ29udHJvbEZhY3RvcnkgPSAoKSA9PiBNYXBDb250cm9sO1xuXG5leHBvcnQgZGVmYXVsdCBNYXBDb250cm9sRmFjdG9yeTtcbiJdfQ==