'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keplerGlChildDeps = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-family: ff-clan-web-pro, \'Helvetica Neue\', Helvetica, sans-serif;\n  font-weight: 400;\n  font-size: 0.875em;\n  line-height: 1.71429;\n\n  *,\n  *:before,\n  *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n    color: ', ';\n  }\n'], ['\n  font-family: ff-clan-web-pro, \'Helvetica Neue\', Helvetica, sans-serif;\n  font-weight: 400;\n  font-size: 0.875em;\n  line-height: 1.71429;\n\n  *,\n  *:before,\n  *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n    color: ', ';\n  }\n']); // Copyright (c) 2018 Uber Technologies, Inc.
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

var _window = require('global/window');

var _redux = require('redux');

var _d3Request = require('d3-request');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _keplerglConnect = require('../connect/keplergl-connect');

var _visStateActions = require('../actions/vis-state-actions');

var VisStateActions = _interopRequireWildcard(_visStateActions);

var _mapStateActions = require('../actions/map-state-actions');

var MapStateActions = _interopRequireWildcard(_mapStateActions);

var _mapStyleActions = require('../actions/map-style-actions');

var MapStyleActions = _interopRequireWildcard(_mapStyleActions);

var _uiStateActions = require('../actions/ui-state-actions');

var UIStateActions = _interopRequireWildcard(_uiStateActions);

var _defaultSettings = require('../constants/default-settings');

var _sidePanel = require('./side-panel');

var _sidePanel2 = _interopRequireDefault(_sidePanel);

var _mapContainer = require('./map-container');

var _mapContainer2 = _interopRequireDefault(_mapContainer);

var _bottomWidget = require('./bottom-widget');

var _bottomWidget2 = _interopRequireDefault(_bottomWidget);

var _modalContainer = require('./modal-container');

var _modalContainer2 = _interopRequireDefault(_modalContainer);

var _plotContainer = require('./plot-container');

var _plotContainer2 = _interopRequireDefault(_plotContainer);

var _base = require('../styles/base');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlobalStyle = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.labelColor;
});

var keplerGlChildDeps = exports.keplerGlChildDeps = [].concat((0, _toConsumableArray3.default)(_bottomWidget2.default.deps), (0, _toConsumableArray3.default)(_sidePanel2.default.deps), (0, _toConsumableArray3.default)(_modalContainer2.default.deps), (0, _toConsumableArray3.default)(_mapContainer2.default.deps));

KeplerGlFactory.deps = [_bottomWidget2.default, _mapContainer2.default, _modalContainer2.default, _sidePanel2.default, _plotContainer2.default];

function KeplerGlFactory(BottomWidget, MapContainer, ModalWrapper, SidePanel, PlotContainer) {
  var _class, _temp2;

  var KeplerGL = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(KeplerGL, _Component);

    function KeplerGL() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, KeplerGL);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = KeplerGL.__proto__ || Object.getPrototypeOf(KeplerGL)).call.apply(_ref, [this].concat(args))), _this), _this._loadMapStyle = function () {
        [].concat((0, _toConsumableArray3.default)(_this.props.mapStyles), (0, _toConsumableArray3.default)(Object.values(_defaultSettings.DEFAULT_MAP_STYLES))).forEach(function (style) {
          if (style.style) {
            _this.props.mapStyleActions.loadMapStyles((0, _defineProperty3.default)({}, style.id, style));
          } else {
            _this._requestMapStyle(style);
          }
        });
      }, _this._requestMapStyle = function (mapStyle) {
        var url = mapStyle.url,
            id = mapStyle.id;

        (0, _d3Request.json)(url, function (error, result) {
          if (error) {
            _window.console.warn('Error loading map style ' + mapStyle.url);
          } else {
            _this.props.mapStyleActions.loadMapStyles((0, _defineProperty3.default)({}, id, (0, _extends3.default)({}, mapStyle, { style: result })));
          }
        });
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(KeplerGL, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._loadMapStyle(this.props.mapStyles);
        this._handleResize(this.props);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (
        // if dimension props has changed
        this.props.height !== nextProps.height || this.props.width !== nextProps.width ||
        // react-map-gl will dispatch updateViewport after this._handleResize is called
        // here we check if this.props.mapState.height is sync with props.height
        nextProps.height !== this.props.mapState.height) {
          this._handleResize(nextProps);
        }
      }
    }, {
      key: '_handleResize',
      value: function _handleResize(_ref2) {
        var width = _ref2.width,
            height = _ref2.height;

        if (!Number.isFinite(width) || !Number.isFinite(height)) {
          _window.console.warn('width and height is required');
          return;
        }
        this.props.mapStateActions.updateMap({
          width: width / (1 + Number(this.props.mapState.isSplit)),
          height: height
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            id = _props.id,
            appName = _props.appName,
            version = _props.version,
            onSaveMap = _props.onSaveMap,
            width = _props.width,
            height = _props.height,
            mapboxApiAccessToken = _props.mapboxApiAccessToken,
            mapStyle = _props.mapStyle,
            mapState = _props.mapState,
            uiState = _props.uiState,
            visState = _props.visState,
            visStateActions = _props.visStateActions,
            mapStateActions = _props.mapStateActions,
            mapStyleActions = _props.mapStyleActions,
            uiStateActions = _props.uiStateActions;
        var filters = visState.filters,
            layers = visState.layers,
            splitMaps = visState.splitMaps,
            layerOrder = visState.layerOrder,
            layerBlending = visState.layerBlending,
            layerClasses = visState.layerClasses,
            interactionConfig = visState.interactionConfig,
            datasets = visState.datasets,
            layerData = visState.layerData,
            hoverInfo = visState.hoverInfo,
            clicked = visState.clicked;


        var sideFields = {
          appName: appName,
          version: version,
          datasets: datasets,
          filters: filters,
          layers: layers,
          layerOrder: layerOrder,
          layerClasses: layerClasses,
          interactionConfig: interactionConfig,
          mapStyle: mapStyle,
          layerBlending: layerBlending,
          onSaveMap: onSaveMap,
          uiState: uiState,
          mapStyleActions: mapStyleActions,
          visStateActions: visStateActions,
          uiStateActions: uiStateActions,
          width: _defaultSettings.DIMENSIONS.sidePanel.width
        };

        var mapFields = {
          datasets: datasets,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapState: mapState,
          mapStyle: mapStyle,
          mapControls: uiState.mapControls,
          layers: layers,
          layerOrder: layerOrder,
          layerData: layerData,
          layerBlending: layerBlending,
          interactionConfig: interactionConfig,
          hoverInfo: hoverInfo,
          clicked: clicked,
          toggleMapControl: uiStateActions.toggleMapControl,
          uiStateActions: uiStateActions,
          visStateActions: visStateActions,
          mapStateActions: mapStateActions
        };

        var isSplit = splitMaps && splitMaps.length > 1;
        var containerW = mapState.width * (Number(isSplit) + 1);

        var mapContainers = !isSplit ? [_react2.default.createElement(MapContainer, (0, _extends3.default)({
          key: 0,
          index: 0
        }, mapFields, {
          mapLayers: isSplit ? splitMaps[0].layers : null
        }))] : splitMaps.map(function (settings, index) {
          return _react2.default.createElement(MapContainer, (0, _extends3.default)({
            key: index,
            index: index
          }, mapFields, {
            mapLayers: splitMaps[index].layers
          }));
        });

        var isExporting = uiState.currentModal === _defaultSettings.EXPORT_IMAGE_ID;

        return _react2.default.createElement(
          _styledComponents.ThemeProvider,
          { theme: _base.theme },
          _react2.default.createElement(
            GlobalStyle,
            {
              style: {
                position: 'relative',
                width: width + 'px',
                height: height + 'px'
              },
              className: 'kepler-gl',
              id: 'kepler-gl__' + id,
              innerRef: function innerRef(node) {
                _this2.root = node;
              }
            },
            !uiState.readOnly && _react2.default.createElement(SidePanel, sideFields),
            _react2.default.createElement(
              'div',
              { className: 'maps', style: { display: 'flex' } },
              mapContainers
            ),
            isExporting && _react2.default.createElement(PlotContainer, {
              width: width,
              height: height,
              exportImageSetting: uiState.exportImage,
              mapFields: mapFields,
              startExportingImage: uiStateActions.startExportingImage,
              setExportImageDataUri: uiStateActions.setExportImageDataUri
            }),
            _react2.default.createElement(BottomWidget, {
              filters: filters,
              datasets: datasets,
              uiState: uiState,
              visStateActions: visStateActions,
              sidePanelWidth: _defaultSettings.DIMENSIONS.sidePanel.width + _defaultSettings.DIMENSIONS.sidePanel.margin.left,
              containerW: containerW
            }),
            _react2.default.createElement(ModalWrapper, {
              mapStyle: mapStyle,
              visState: visState,
              mapState: mapState,
              uiState: uiState,
              mapboxApiAccessToken: mapboxApiAccessToken,
              visStateActions: visStateActions,
              uiStateActions: uiStateActions,
              mapStyleActions: mapStyleActions,
              rootNode: this.root,
              containerW: containerW,
              containerH: mapState.height
            })
          )
        );
      }
    }]);
    return KeplerGL;
  }(_react.Component), _class.defaultProps = {
    mapStyles: [],
    width: 800,
    height: 800,
    appName: _defaultSettings.KEPLER_GL_NAME,
    version: _defaultSettings.KEPLER_GL_VERSION
  }, _temp2);


  return (0, _keplerglConnect.connect)(mapStateToProps, mapDispatchToProps)(KeplerGL);
}

function mapStateToProps(state, props) {
  return (0, _extends3.default)({}, props, {
    visState: state.visState,
    mapStyle: state.mapStyle,
    mapState: state.mapState,
    uiState: state.uiState
  });
}

function mapDispatchToProps(dispatch, ownProps) {
  var userActions = ownProps.actions || {};

  var _map = [VisStateActions, MapStateActions, MapStyleActions, UIStateActions].map(function (actions) {
    return (0, _redux.bindActionCreators)(mergeActions(actions, userActions), dispatch);
  }),
      _map2 = (0, _slicedToArray3.default)(_map, 4),
      visStateActions = _map2[0],
      mapStateActions = _map2[1],
      mapStyleActions = _map2[2],
      uiStateActions = _map2[3];

  return {
    visStateActions: visStateActions,
    mapStateActions: mapStateActions,
    mapStyleActions: mapStyleActions,
    uiStateActions: uiStateActions,
    dispatch: dispatch
  };
}

/**
 * Override default maps-gl actions with user defined actions using the same key
 */
function mergeActions(actions, userActions) {
  var overrides = {};
  for (var key in userActions) {
    if (userActions.hasOwnProperty(key) && actions.hasOwnProperty(key)) {
      overrides[key] = userActions[key];
    }
  }

  return (0, _extends3.default)({}, actions, overrides);
}

exports.default = KeplerGlFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2tlcGxlci1nbC5qcyJdLCJuYW1lcyI6WyJWaXNTdGF0ZUFjdGlvbnMiLCJNYXBTdGF0ZUFjdGlvbnMiLCJNYXBTdHlsZUFjdGlvbnMiLCJVSVN0YXRlQWN0aW9ucyIsIkdsb2JhbFN0eWxlIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImxhYmVsQ29sb3IiLCJrZXBsZXJHbENoaWxkRGVwcyIsIkJvdHRvbVdpZGdldEZhY3RvcnkiLCJkZXBzIiwiU2lkZVBhbmVsRmFjdG9yeSIsIk1vZGFsQ29udGFpbmVyRmFjdG9yeSIsIk1hcENvbnRhaW5lckZhY3RvcnkiLCJLZXBsZXJHbEZhY3RvcnkiLCJQbG90Q29udGFpbmVyRmFjdG9yeSIsIkJvdHRvbVdpZGdldCIsIk1hcENvbnRhaW5lciIsIk1vZGFsV3JhcHBlciIsIlNpZGVQYW5lbCIsIlBsb3RDb250YWluZXIiLCJLZXBsZXJHTCIsIl9sb2FkTWFwU3R5bGUiLCJtYXBTdHlsZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJERUZBVUxUX01BUF9TVFlMRVMiLCJmb3JFYWNoIiwic3R5bGUiLCJtYXBTdHlsZUFjdGlvbnMiLCJsb2FkTWFwU3R5bGVzIiwiaWQiLCJfcmVxdWVzdE1hcFN0eWxlIiwibWFwU3R5bGUiLCJ1cmwiLCJlcnJvciIsInJlc3VsdCIsIkNvbnNvbGUiLCJ3YXJuIiwiX2hhbmRsZVJlc2l6ZSIsIm5leHRQcm9wcyIsImhlaWdodCIsIndpZHRoIiwibWFwU3RhdGUiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsIm1hcFN0YXRlQWN0aW9ucyIsInVwZGF0ZU1hcCIsImlzU3BsaXQiLCJhcHBOYW1lIiwidmVyc2lvbiIsIm9uU2F2ZU1hcCIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwidWlTdGF0ZSIsInZpc1N0YXRlIiwidmlzU3RhdGVBY3Rpb25zIiwidWlTdGF0ZUFjdGlvbnMiLCJmaWx0ZXJzIiwibGF5ZXJzIiwic3BsaXRNYXBzIiwibGF5ZXJPcmRlciIsImxheWVyQmxlbmRpbmciLCJsYXllckNsYXNzZXMiLCJpbnRlcmFjdGlvbkNvbmZpZyIsImRhdGFzZXRzIiwibGF5ZXJEYXRhIiwiaG92ZXJJbmZvIiwiY2xpY2tlZCIsInNpZGVGaWVsZHMiLCJESU1FTlNJT05TIiwic2lkZVBhbmVsIiwibWFwRmllbGRzIiwibWFwQ29udHJvbHMiLCJ0b2dnbGVNYXBDb250cm9sIiwibGVuZ3RoIiwiY29udGFpbmVyVyIsIm1hcENvbnRhaW5lcnMiLCJtYXAiLCJzZXR0aW5ncyIsImluZGV4IiwiaXNFeHBvcnRpbmciLCJjdXJyZW50TW9kYWwiLCJFWFBPUlRfSU1BR0VfSUQiLCJwb3NpdGlvbiIsInJvb3QiLCJub2RlIiwicmVhZE9ubHkiLCJkaXNwbGF5IiwiZXhwb3J0SW1hZ2UiLCJzdGFydEV4cG9ydGluZ0ltYWdlIiwic2V0RXhwb3J0SW1hZ2VEYXRhVXJpIiwibWFyZ2luIiwibGVmdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIktFUExFUl9HTF9OQU1FIiwiS0VQTEVSX0dMX1ZFUlNJT04iLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJzdGF0ZSIsImRpc3BhdGNoIiwib3duUHJvcHMiLCJ1c2VyQWN0aW9ucyIsImFjdGlvbnMiLCJtZXJnZUFjdGlvbnMiLCJvdmVycmlkZXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswNUJBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUVBOztJQUFZQSxlOztBQUNaOztJQUFZQyxlOztBQUNaOztJQUFZQyxlOztBQUNaOztJQUFZQyxjOztBQUVaOztBQUdBOzs7O0FBQ0E7Ozs7QUFD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LEVBR0ZDLGVBSEUsRUFJRkMsY0FKRSxFQUtGNEUsR0FMRSxDQUtFO0FBQUEsV0FDSiwrQkFBbUIyQixhQUFhRCxPQUFiLEVBQXNCRCxXQUF0QixDQUFuQixFQUF1REYsUUFBdkQsQ0FESTtBQUFBLEdBTEYsQ0FSMEM7QUFBQTtBQUFBLE1BSTVDN0MsZUFKNEM7QUFBQSxNQUs1Q1QsZUFMNEM7QUFBQSxNQU01Q2pCLGVBTjRDO0FBQUEsTUFPNUMyQixjQVA0Qzs7QUFpQjlDLFNBQU87QUFDTEQsb0NBREs7QUFFTFQsb0NBRks7QUFHTGpCLG9DQUhLO0FBSUwyQixrQ0FKSztBQUtMNEM7QUFMSyxHQUFQO0FBT0Q7O0FBRUQ7OztBQUdBLFNBQVNJLFlBQVQsQ0FBc0JELE9BQXRCLEVBQStCRCxXQUEvQixFQUE0QztBQUMxQyxNQUFNRyxZQUFZLEVBQWxCO0FBQ0EsT0FBSyxJQUFNQyxHQUFYLElBQWtCSixXQUFsQixFQUErQjtBQUM3QixRQUFJQSxZQUFZSyxjQUFaLENBQTJCRCxHQUEzQixLQUFtQ0gsUUFBUUksY0FBUixDQUF1QkQsR0FBdkIsQ0FBdkMsRUFBb0U7QUFDbEVELGdCQUFVQyxHQUFWLElBQWlCSixZQUFZSSxHQUFaLENBQWpCO0FBQ0Q7QUFDRjs7QUFFRCxvQ0FBV0gsT0FBWCxFQUF1QkUsU0FBdkI7QUFDRDs7a0JBRWMzRixlIiwiZmlsZSI6ImtlcGxlci1nbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25zb2xlIGFzIENvbnNvbGV9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7anNvbiBhcyByZXF1ZXN0SnNvbn0gZnJvbSAnZDMtcmVxdWVzdCc7XG5pbXBvcnQgc3R5bGVkLCB7VGhlbWVQcm92aWRlcn0gIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Y29ubmVjdCBhcyBrZXBsZXJHbENvbm5lY3R9IGZyb20gJy4uL2Nvbm5lY3Qva2VwbGVyZ2wtY29ubmVjdCc7XG5cbmltcG9ydCAqIGFzIFZpc1N0YXRlQWN0aW9ucyBmcm9tICdhY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zJztcbmltcG9ydCAqIGFzIE1hcFN0YXRlQWN0aW9ucyBmcm9tICdhY3Rpb25zL21hcC1zdGF0ZS1hY3Rpb25zJztcbmltcG9ydCAqIGFzIE1hcFN0eWxlQWN0aW9ucyBmcm9tICdhY3Rpb25zL21hcC1zdHlsZS1hY3Rpb25zJztcbmltcG9ydCAqIGFzIFVJU3RhdGVBY3Rpb25zIGZyb20gJ2FjdGlvbnMvdWktc3RhdGUtYWN0aW9ucyc7XG5cbmltcG9ydCB7RVhQT1JUX0lNQUdFX0lELCBESU1FTlNJT05TLCBERUZBVUxUX01BUF9TVFlMRVMsXG4gIEtFUExFUl9HTF9OQU1FLCBLRVBMRVJfR0xfVkVSU0lPTn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5pbXBvcnQgU2lkZVBhbmVsRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwnO1xuaW1wb3J0IE1hcENvbnRhaW5lckZhY3RvcnkgZnJvbSAnLi9tYXAtY29udGFpbmVyJztcbmltcG9ydCBCb3R0b21XaWRnZXRGYWN0b3J5IGZyb20gJy4vYm90dG9tLXdpZGdldCc7XG5pbXBvcnQgTW9kYWxDb250YWluZXJGYWN0b3J5IGZyb20gJy4vbW9kYWwtY29udGFpbmVyJztcbmltcG9ydCBQbG90Q29udGFpbmVyRmFjdG9yeSBmcm9tICcuL3Bsb3QtY29udGFpbmVyJztcblxuaW1wb3J0IHt0aGVtZX0gZnJvbSAnc3R5bGVzL2Jhc2UnO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtZmFtaWx5OiBmZi1jbGFuLXdlYi1wcm8sICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICBsaW5lLWhlaWdodDogMS43MTQyOTtcblxuICAqLFxuICAqOmJlZm9yZSxcbiAgKjphZnRlciB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgbGkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGtlcGxlckdsQ2hpbGREZXBzID0gW1xuICAuLi5Cb3R0b21XaWRnZXRGYWN0b3J5LmRlcHMsXG4gIC4uLlNpZGVQYW5lbEZhY3RvcnkuZGVwcyxcbiAgLi4uTW9kYWxDb250YWluZXJGYWN0b3J5LmRlcHMsXG4gIC4uLk1hcENvbnRhaW5lckZhY3RvcnkuZGVwc1xuXTtcblxuS2VwbGVyR2xGYWN0b3J5LmRlcHMgPSBbXG4gIEJvdHRvbVdpZGdldEZhY3RvcnksXG4gIE1hcENvbnRhaW5lckZhY3RvcnksXG4gIE1vZGFsQ29udGFpbmVyRmFjdG9yeSxcbiAgU2lkZVBhbmVsRmFjdG9yeSxcbiAgUGxvdENvbnRhaW5lckZhY3Rvcnlcbl07XG5cbmZ1bmN0aW9uIEtlcGxlckdsRmFjdG9yeShcbiAgQm90dG9tV2lkZ2V0LFxuICBNYXBDb250YWluZXIsXG4gIE1vZGFsV3JhcHBlcixcbiAgU2lkZVBhbmVsLFxuICBQbG90Q29udGFpbmVyXG4pIHtcbiAgY2xhc3MgS2VwbGVyR0wgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBtYXBTdHlsZXM6IFtdLFxuICAgICAgd2lkdGg6IDgwMCxcbiAgICAgIGhlaWdodDogODAwLFxuICAgICAgYXBwTmFtZTogS0VQTEVSX0dMX05BTUUsXG4gICAgICB2ZXJzaW9uOiBLRVBMRVJfR0xfVkVSU0lPTlxuICAgIH07XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB0aGlzLl9sb2FkTWFwU3R5bGUodGhpcy5wcm9wcy5tYXBTdHlsZXMpO1xuICAgICAgdGhpcy5faGFuZGxlUmVzaXplKHRoaXMucHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIGlmIGRpbWVuc2lvbiBwcm9wcyBoYXMgY2hhbmdlZFxuICAgICAgICB0aGlzLnByb3BzLmhlaWdodCAhPT0gbmV4dFByb3BzLmhlaWdodCB8fFxuICAgICAgICB0aGlzLnByb3BzLndpZHRoICE9PSBuZXh0UHJvcHMud2lkdGggfHxcbiAgICAgICAgLy8gcmVhY3QtbWFwLWdsIHdpbGwgZGlzcGF0Y2ggdXBkYXRlVmlld3BvcnQgYWZ0ZXIgdGhpcy5faGFuZGxlUmVzaXplIGlzIGNhbGxlZFxuICAgICAgICAvLyBoZXJlIHdlIGNoZWNrIGlmIHRoaXMucHJvcHMubWFwU3RhdGUuaGVpZ2h0IGlzIHN5bmMgd2l0aCBwcm9wcy5oZWlnaHRcbiAgICAgICAgbmV4dFByb3BzLmhlaWdodCAhPT0gdGhpcy5wcm9wcy5tYXBTdGF0ZS5oZWlnaHRcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9oYW5kbGVSZXNpemUobmV4dFByb3BzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfaGFuZGxlUmVzaXplKHt3aWR0aCwgaGVpZ2h0fSkge1xuICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUod2lkdGgpIHx8ICFOdW1iZXIuaXNGaW5pdGUoaGVpZ2h0KSkge1xuICAgICAgICBDb25zb2xlLndhcm4oJ3dpZHRoIGFuZCBoZWlnaHQgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5tYXBTdGF0ZUFjdGlvbnMudXBkYXRlTWFwKHtcbiAgICAgICAgd2lkdGg6IHdpZHRoIC8gKDEgKyBOdW1iZXIodGhpcy5wcm9wcy5tYXBTdGF0ZS5pc1NwbGl0KSksXG4gICAgICAgIGhlaWdodFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2xvYWRNYXBTdHlsZSA9ICgpID0+IHtcbiAgICAgIFsuLi50aGlzLnByb3BzLm1hcFN0eWxlcywgLi4uT2JqZWN0LnZhbHVlcyhERUZBVUxUX01BUF9TVFlMRVMpXS5mb3JFYWNoKFxuICAgICAgICBzdHlsZSA9PiB7XG4gICAgICAgICAgaWYgKHN0eWxlLnN0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5sb2FkTWFwU3R5bGVzKHtcbiAgICAgICAgICAgICAgW3N0eWxlLmlkXTogc3R5bGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcXVlc3RNYXBTdHlsZShzdHlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH07XG5cbiAgICBfcmVxdWVzdE1hcFN0eWxlID0gKG1hcFN0eWxlKSA9PiB7XG4gICAgICBjb25zdCB7dXJsLCBpZH0gPSBtYXBTdHlsZTtcbiAgICAgIHJlcXVlc3RKc29uKHVybCwgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgQ29uc29sZS53YXJuKGBFcnJvciBsb2FkaW5nIG1hcCBzdHlsZSAke21hcFN0eWxlLnVybH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5sb2FkTWFwU3R5bGVzKHtcbiAgICAgICAgICAgIFtpZF06IHsuLi5tYXBTdHlsZSwgc3R5bGU6IHJlc3VsdH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgLy8gcHJvcHNcbiAgICAgICAgaWQsXG4gICAgICAgIGFwcE5hbWUsXG4gICAgICAgIHZlcnNpb24sXG4gICAgICAgIG9uU2F2ZU1hcCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXG5cbiAgICAgICAgLy8gcmVkdXggc3RhdGVcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIG1hcFN0YXRlLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICB2aXNTdGF0ZSxcblxuICAgICAgICAvLyBhY3Rpb25zLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIG1hcFN0YXRlQWN0aW9ucyxcbiAgICAgICAgbWFwU3R5bGVBY3Rpb25zLFxuICAgICAgICB1aVN0YXRlQWN0aW9uc1xuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBzcGxpdE1hcHMsIC8vIHRoaXMgd2lsbCBzdG9yZSBzdXBwb3J0IGZvciBzcGxpdCBtYXAgdmlldyBpcyBuZWNlc3NhcnlcbiAgICAgICAgbGF5ZXJPcmRlcixcbiAgICAgICAgbGF5ZXJCbGVuZGluZyxcbiAgICAgICAgbGF5ZXJDbGFzc2VzLFxuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgICAgZGF0YXNldHMsXG4gICAgICAgIGxheWVyRGF0YSxcbiAgICAgICAgaG92ZXJJbmZvLFxuICAgICAgICBjbGlja2VkXG4gICAgICB9ID0gdmlzU3RhdGU7XG5cbiAgICAgIGNvbnN0IHNpZGVGaWVsZHMgPSB7XG4gICAgICAgIGFwcE5hbWUsXG4gICAgICAgIHZlcnNpb24sXG4gICAgICAgIGRhdGFzZXRzLFxuICAgICAgICBmaWx0ZXJzLFxuICAgICAgICBsYXllcnMsXG4gICAgICAgIGxheWVyT3JkZXIsXG4gICAgICAgIGxheWVyQ2xhc3NlcyxcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgIG1hcFN0eWxlLFxuICAgICAgICBsYXllckJsZW5kaW5nLFxuICAgICAgICBvblNhdmVNYXAsXG4gICAgICAgIHVpU3RhdGUsXG4gICAgICAgIG1hcFN0eWxlQWN0aW9ucyxcbiAgICAgICAgdmlzU3RhdGVBY3Rpb25zLFxuICAgICAgICB1aVN0YXRlQWN0aW9ucyxcbiAgICAgICAgd2lkdGg6IERJTUVOU0lPTlMuc2lkZVBhbmVsLndpZHRoXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBtYXBGaWVsZHMgPSB7XG4gICAgICAgIGRhdGFzZXRzLFxuICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbixcbiAgICAgICAgbWFwU3RhdGUsXG4gICAgICAgIG1hcFN0eWxlLFxuICAgICAgICBtYXBDb250cm9sczogdWlTdGF0ZS5tYXBDb250cm9scyxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBsYXllck9yZGVyLFxuICAgICAgICBsYXllckRhdGEsXG4gICAgICAgIGxheWVyQmxlbmRpbmcsXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICBob3ZlckluZm8sXG4gICAgICAgIGNsaWNrZWQsXG4gICAgICAgIHRvZ2dsZU1hcENvbnRyb2w6IHVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1hcENvbnRyb2wsXG4gICAgICAgIHVpU3RhdGVBY3Rpb25zLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIG1hcFN0YXRlQWN0aW9uc1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaXNTcGxpdCA9IHNwbGl0TWFwcyAmJiBzcGxpdE1hcHMubGVuZ3RoID4gMTtcbiAgICAgIGNvbnN0IGNvbnRhaW5lclcgPSBtYXBTdGF0ZS53aWR0aCAqIChOdW1iZXIoaXNTcGxpdCkgKyAxKTtcblxuICAgICAgY29uc3QgbWFwQ29udGFpbmVycyA9ICFpc1NwbGl0XG4gICAgICAgID8gW1xuICAgICAgICAgICAgPE1hcENvbnRhaW5lclxuICAgICAgICAgICAgICBrZXk9ezB9XG4gICAgICAgICAgICAgIGluZGV4PXswfVxuICAgICAgICAgICAgICB7Li4ubWFwRmllbGRzfVxuICAgICAgICAgICAgICBtYXBMYXllcnM9e2lzU3BsaXQgPyBzcGxpdE1hcHNbMF0ubGF5ZXJzIDogbnVsbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgXVxuICAgICAgICA6IHNwbGl0TWFwcy5tYXAoKHNldHRpbmdzLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPE1hcENvbnRhaW5lclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgIHsuLi5tYXBGaWVsZHN9XG4gICAgICAgICAgICAgIG1hcExheWVycz17c3BsaXRNYXBzW2luZGV4XS5sYXllcnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpO1xuXG4gICAgICBjb25zdCBpc0V4cG9ydGluZyA9IHVpU3RhdGUuY3VycmVudE1vZGFsID09PSBFWFBPUlRfSU1BR0VfSUQ7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPEdsb2JhbFN0eWxlXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwia2VwbGVyLWdsXCJcbiAgICAgICAgICAgIGlkPXtga2VwbGVyLWdsX18ke2lkfWB9XG4gICAgICAgICAgICBpbm5lclJlZj17bm9kZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucm9vdCA9IG5vZGU7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshdWlTdGF0ZS5yZWFkT25seSAmJiA8U2lkZVBhbmVsIHsuLi5zaWRlRmllbGRzfSAvPn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwc1wiIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgICAgICAgIHttYXBDb250YWluZXJzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aXNFeHBvcnRpbmcgJiZcbiAgICAgICAgICAgICAgPFBsb3RDb250YWluZXJcbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgICAgZXhwb3J0SW1hZ2VTZXR0aW5nPXt1aVN0YXRlLmV4cG9ydEltYWdlfVxuICAgICAgICAgICAgICAgIG1hcEZpZWxkcz17bWFwRmllbGRzfVxuICAgICAgICAgICAgICAgIHN0YXJ0RXhwb3J0aW5nSW1hZ2U9e3VpU3RhdGVBY3Rpb25zLnN0YXJ0RXhwb3J0aW5nSW1hZ2V9XG4gICAgICAgICAgICAgICAgc2V0RXhwb3J0SW1hZ2VEYXRhVXJpPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZURhdGFVcml9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8Qm90dG9tV2lkZ2V0XG4gICAgICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgdWlTdGF0ZT17dWlTdGF0ZX1cbiAgICAgICAgICAgICAgdmlzU3RhdGVBY3Rpb25zPXt2aXNTdGF0ZUFjdGlvbnN9XG4gICAgICAgICAgICAgIHNpZGVQYW5lbFdpZHRoPXtcbiAgICAgICAgICAgICAgICBESU1FTlNJT05TLnNpZGVQYW5lbC53aWR0aCArIERJTUVOU0lPTlMuc2lkZVBhbmVsLm1hcmdpbi5sZWZ0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udGFpbmVyVz17Y29udGFpbmVyV31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TW9kYWxXcmFwcGVyXG4gICAgICAgICAgICAgIG1hcFN0eWxlPXttYXBTdHlsZX1cbiAgICAgICAgICAgICAgdmlzU3RhdGU9e3Zpc1N0YXRlfVxuICAgICAgICAgICAgICBtYXBTdGF0ZT17bWFwU3RhdGV9XG4gICAgICAgICAgICAgIHVpU3RhdGU9e3VpU3RhdGV9XG4gICAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXttYXBib3hBcGlBY2Nlc3NUb2tlbn1cbiAgICAgICAgICAgICAgdmlzU3RhdGVBY3Rpb25zPXt2aXNTdGF0ZUFjdGlvbnN9XG4gICAgICAgICAgICAgIHVpU3RhdGVBY3Rpb25zPXt1aVN0YXRlQWN0aW9uc31cbiAgICAgICAgICAgICAgbWFwU3R5bGVBY3Rpb25zPXttYXBTdHlsZUFjdGlvbnN9XG4gICAgICAgICAgICAgIHJvb3ROb2RlPXt0aGlzLnJvb3R9XG4gICAgICAgICAgICAgIGNvbnRhaW5lclc9e2NvbnRhaW5lcld9XG4gICAgICAgICAgICAgIGNvbnRhaW5lckg9e21hcFN0YXRlLmhlaWdodH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HbG9iYWxTdHlsZT5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ga2VwbGVyR2xDb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShLZXBsZXJHTCk7XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgcHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5wcm9wcyxcbiAgICB2aXNTdGF0ZTogc3RhdGUudmlzU3RhdGUsXG4gICAgbWFwU3R5bGU6IHN0YXRlLm1hcFN0eWxlLFxuICAgIG1hcFN0YXRlOiBzdGF0ZS5tYXBTdGF0ZSxcbiAgICB1aVN0YXRlOiBzdGF0ZS51aVN0YXRlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgY29uc3QgdXNlckFjdGlvbnMgPSBvd25Qcm9wcy5hY3Rpb25zIHx8IHt9O1xuXG4gIGNvbnN0IFtcbiAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgbWFwU3RhdGVBY3Rpb25zLFxuICAgIG1hcFN0eWxlQWN0aW9ucyxcbiAgICB1aVN0YXRlQWN0aW9uc1xuICBdID0gW1xuICAgIFZpc1N0YXRlQWN0aW9ucyxcbiAgICBNYXBTdGF0ZUFjdGlvbnMsXG4gICAgTWFwU3R5bGVBY3Rpb25zLFxuICAgIFVJU3RhdGVBY3Rpb25zXG4gIF0ubWFwKGFjdGlvbnMgPT5cbiAgICBiaW5kQWN0aW9uQ3JlYXRvcnMobWVyZ2VBY3Rpb25zKGFjdGlvbnMsIHVzZXJBY3Rpb25zKSwgZGlzcGF0Y2gpXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgbWFwU3RhdGVBY3Rpb25zLFxuICAgIG1hcFN0eWxlQWN0aW9ucyxcbiAgICB1aVN0YXRlQWN0aW9ucyxcbiAgICBkaXNwYXRjaFxuICB9O1xufVxuXG4vKipcbiAqIE92ZXJyaWRlIGRlZmF1bHQgbWFwcy1nbCBhY3Rpb25zIHdpdGggdXNlciBkZWZpbmVkIGFjdGlvbnMgdXNpbmcgdGhlIHNhbWUga2V5XG4gKi9cbmZ1bmN0aW9uIG1lcmdlQWN0aW9ucyhhY3Rpb25zLCB1c2VyQWN0aW9ucykge1xuICBjb25zdCBvdmVycmlkZXMgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gdXNlckFjdGlvbnMpIHtcbiAgICBpZiAodXNlckFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBhY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG92ZXJyaWRlc1trZXldID0gdXNlckFjdGlvbnNba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gey4uLmFjdGlvbnMsIC4uLm92ZXJyaWRlc307XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtlcGxlckdsRmFjdG9yeTtcbiJdfQ==