'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', ';\n  flex-grow: 1;\n  padding: 16px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n'], ['\n  ', ';\n  flex-grow: 1;\n  padding: 16px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  font-size: 20px;\n  font-weight: 400;\n  letter-spacing: 1.25px;\n  margin-bottom: 14px;\n'], ['\n  color: ', ';\n  font-size: 20px;\n  font-weight: 400;\n  letter-spacing: 1.25px;\n  margin-bottom: 14px;\n']); // Copyright (c) 2018 Uber Technologies, Inc.
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

exports.default = SidePanelFactory;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _sideBar = require('./side-panel/side-bar');

var _sideBar2 = _interopRequireDefault(_sideBar);

var _panelHeader = require('./side-panel/panel-header');

var _panelHeader2 = _interopRequireDefault(_panelHeader);

var _layerManager = require('./side-panel/layer-manager');

var _layerManager2 = _interopRequireDefault(_layerManager);

var _filterManager = require('./side-panel/filter-manager');

var _filterManager2 = _interopRequireDefault(_filterManager);

var _interactionManager = require('./side-panel/interaction-manager');

var _interactionManager2 = _interopRequireDefault(_interactionManager);

var _mapManager = require('./side-panel/map-manager');

var _mapManager2 = _interopRequireDefault(_mapManager);

var _panelToggle = require('./side-panel/panel-toggle');

var _panelToggle2 = _interopRequireDefault(_panelToggle);

var _defaultSettings = require('../constants/default-settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidePanelContent = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.sidePanelScrollBar;
});

var PanelTitle = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.titleTextColor;
});

SidePanelFactory.deps = [_panelHeader2.default];

/**
 *
 * Vertical sidebar containing input components for the rendering layers
 */
function SidePanelFactory(PanelHeader) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(SidePanel, _Component);

    function SidePanel() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, SidePanel);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SidePanel.__proto__ || Object.getPrototypeOf(SidePanel)).call.apply(_ref, [this].concat(args))), _this), _this._onOpenOrClose = function () {
        _this.props.uiStateActions.toggleSidePanel(_this.props.uiState.activeSidePanel ? null : 'layer');
      }, _this._showDatasetTable = function (dataId) {
        // this will open data table modal
        _this.props.visStateActions.showDatasetTable(dataId);
        _this.props.uiStateActions.toggleModal(_defaultSettings.DATA_TABLE_ID);
      }, _this._showAddDataModal = function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_DATA_ID);
      }, _this._showAddMapStyleModal = function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_MAP_STYLE_ID);
      }, _this._removeDataset = function (key) {
        // this will show the modal dialog to confirm deletion
        _this.props.uiStateActions.openDeleteModal(key);
      }, _this._onExportImage = function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_IMAGE_ID);
      }, _this._onExportData = function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_DATA_ID);
      }, _this._onExportConfig = function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_CONFIG_ID);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    /* component private functions */


    (0, _createClass3.default)(SidePanel, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            appName = _props.appName,
            version = _props.version,
            datasets = _props.datasets,
            filters = _props.filters,
            layers = _props.layers,
            layerBlending = _props.layerBlending,
            layerClasses = _props.layerClasses,
            uiState = _props.uiState,
            layerOrder = _props.layerOrder,
            interactionConfig = _props.interactionConfig,
            visStateActions = _props.visStateActions,
            mapStyleActions = _props.mapStyleActions,
            uiStateActions = _props.uiStateActions;
        var activeSidePanel = uiState.activeSidePanel;

        var isOpen = Boolean(activeSidePanel);

        var layerManagerActions = {
          addLayer: visStateActions.addLayer,
          layerConfigChange: visStateActions.layerConfigChange,
          layerVisualChannelConfigChange: visStateActions.layerVisualChannelConfigChange,
          layerTypeChange: visStateActions.layerTypeChange,
          layerVisConfigChange: visStateActions.layerVisConfigChange,
          updateLayerBlending: visStateActions.updateLayerBlending,
          updateLayerOrder: visStateActions.reorderLayer,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          removeLayer: visStateActions.removeLayer,
          removeDataset: this._removeDataset
        };

        var filterManagerActions = {
          addFilter: visStateActions.addFilter,
          removeFilter: visStateActions.removeFilter,
          setFilter: visStateActions.setFilter,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          toggleAnimation: visStateActions.toggleAnimation,
          enlargeFilter: visStateActions.enlargeFilter
        };

        var interactionManagerActions = {
          onConfigChange: visStateActions.interactionConfigChange
        };

        var mapManagerActions = {
          addMapStyleUrl: mapStyleActions.addMapStyleUrl,
          onConfigChange: mapStyleActions.mapConfigChange,
          onStyleChange: mapStyleActions.mapStyleChange,
          onBuildingChange: mapStyleActions.mapBuildingChange,
          showAddMapStyleModal: this._showAddMapStyleModal
        };

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _sideBar2.default,
            {
              width: this.props.width,
              isOpen: isOpen,
              minifiedWidth: 0,
              onOpenOrClose: this._onOpenOrClose
            },
            _react2.default.createElement(PanelHeader, {
              appName: appName,
              version: version,
              onExportImage: this._onExportImage,
              onExportData: this._onExportData,
              onExportConfig: this._onExportConfig,
              onSaveMap: this.props.onSaveMap
            }),
            _react2.default.createElement(_panelToggle2.default, {
              panels: _defaultSettings.PANELS,
              activePanel: activeSidePanel,
              togglePanel: uiStateActions.toggleSidePanel
            }),
            _react2.default.createElement(
              SidePanelContent,
              { className: 'side-panel__content' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  PanelTitle,
                  { className: 'side-panel__content__title' },
                  (_defaultSettings.PANELS.find(function (_ref2) {
                    var id = _ref2.id;
                    return id === activeSidePanel;
                  }) || {}).label
                ),
                activeSidePanel === 'layer' && _react2.default.createElement(_layerManager2.default, (0, _extends3.default)({}, layerManagerActions, {
                  datasets: datasets,
                  layers: layers,
                  layerClasses: layerClasses,
                  layerOrder: layerOrder,
                  layerBlending: layerBlending,
                  openModal: uiStateActions.toggleModal
                })),
                activeSidePanel === 'filter' && _react2.default.createElement(_filterManager2.default, (0, _extends3.default)({}, filterManagerActions, {
                  datasets: datasets,
                  filters: filters
                })),
                activeSidePanel === 'interaction' && _react2.default.createElement(_interactionManager2.default, (0, _extends3.default)({}, interactionManagerActions, {
                  datasets: datasets,
                  interactionConfig: interactionConfig
                })),
                activeSidePanel === 'map' && _react2.default.createElement(_mapManager2.default, (0, _extends3.default)({}, mapManagerActions, {
                  mapStyle: this.props.mapStyle
                }))
              )
            )
          )
        );
      }
    }]);
    return SidePanel;
  }(_react.Component), _class.propTypes = {
    filters: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
    interactionConfig: _propTypes2.default.object.isRequired,
    layerBlending: _propTypes2.default.string.isRequired,
    layers: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
    layerClasses: _propTypes2.default.object.isRequired,
    mapStyle: _propTypes2.default.object.isRequired,
    width: _propTypes2.default.number.isRequired,
    datasets: _propTypes2.default.object.isRequired,
    visStateActions: _propTypes2.default.object.isRequired,
    mapStyleActions: _propTypes2.default.object.isRequired
  }, _temp2;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwuanMiXSwibmFtZXMiOlsiU2lkZVBhbmVsRmFjdG9yeSIsIlNpZGVQYW5lbENvbnRlbnQiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsU2Nyb2xsQmFyIiwiUGFuZWxUaXRsZSIsInRpdGxlVGV4dENvbG9yIiwiZGVwcyIsIlBhbmVsSGVhZGVyRmFjdG9yeSIsIlBhbmVsSGVhZGVyIiwiX29uT3Blbk9yQ2xvc2UiLCJ1aVN0YXRlQWN0aW9ucyIsInRvZ2dsZVNpZGVQYW5lbCIsInVpU3RhdGUiLCJhY3RpdmVTaWRlUGFuZWwiLCJfc2hvd0RhdGFzZXRUYWJsZSIsInZpc1N0YXRlQWN0aW9ucyIsInNob3dEYXRhc2V0VGFibGUiLCJkYXRhSWQiLCJ0b2dnbGVNb2RhbCIsIkRBVEFfVEFCTEVfSUQiLCJfc2hvd0FkZERhdGFNb2RhbCIsIkFERF9EQVRBX0lEIiwiX3Nob3dBZGRNYXBTdHlsZU1vZGFsIiwiQUREX01BUF9TVFlMRV9JRCIsIl9yZW1vdmVEYXRhc2V0Iiwib3BlbkRlbGV0ZU1vZGFsIiwia2V5IiwiX29uRXhwb3J0SW1hZ2UiLCJFWFBPUlRfSU1BR0VfSUQiLCJfb25FeHBvcnREYXRhIiwiRVhQT1JUX0RBVEFfSUQiLCJfb25FeHBvcnRDb25maWciLCJFWFBPUlRfQ09ORklHX0lEIiwiYXBwTmFtZSIsInZlcnNpb24iLCJkYXRhc2V0cyIsImZpbHRlcnMiLCJsYXllcnMiLCJsYXllckJsZW5kaW5nIiwibGF5ZXJDbGFzc2VzIiwibGF5ZXJPcmRlciIsImludGVyYWN0aW9uQ29uZmlnIiwibWFwU3R5bGVBY3Rpb25zIiwiaXNPcGVuIiwiQm9vbGVhbiIsImxheWVyTWFuYWdlckFjdGlvbnMiLCJhZGRMYXllciIsImxheWVyQ29uZmlnQ2hhbmdlIiwibGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlIiwibGF5ZXJUeXBlQ2hhbmdlIiwibGF5ZXJWaXNDb25maWdDaGFuZ2UiLCJ1cGRhdGVMYXllckJsZW5kaW5nIiwidXBkYXRlTGF5ZXJPcmRlciIsInJlb3JkZXJMYXllciIsInNob3dBZGREYXRhTW9kYWwiLCJyZW1vdmVMYXllciIsInJlbW92ZURhdGFzZXQiLCJmaWx0ZXJNYW5hZ2VyQWN0aW9ucyIsImFkZEZpbHRlciIsInJlbW92ZUZpbHRlciIsInNldEZpbHRlciIsInRvZ2dsZUFuaW1hdGlvbiIsImVubGFyZ2VGaWx0ZXIiLCJpbnRlcmFjdGlvbk1hbmFnZXJBY3Rpb25zIiwib25Db25maWdDaGFuZ2UiLCJpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZSIsIm1hcE1hbmFnZXJBY3Rpb25zIiwiYWRkTWFwU3R5bGVVcmwiLCJtYXBDb25maWdDaGFuZ2UiLCJvblN0eWxlQ2hhbmdlIiwibWFwU3R5bGVDaGFuZ2UiLCJvbkJ1aWxkaW5nQ2hhbmdlIiwibWFwQnVpbGRpbmdDaGFuZ2UiLCJzaG93QWRkTWFwU3R5bGVNb2RhbCIsIndpZHRoIiwib25TYXZlTWFwIiwiUEFORUxTIiwiZmluZCIsImlkIiwibGFiZWwiLCJtYXBTdHlsZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJpc1JlcXVpcmVkIiwib2JqZWN0Iiwic3RyaW5nIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FTQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztrQkE4Q3dCQSxnQjs7QUE1Q3hCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFVQSxJQUFNQyxtQkFBbUJDLDJCQUFPQyxHQUExQixrQkFDRjtBQUFBLFNBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsa0JBQXJC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QyxVQUR6QjtBQUVqQjdDLHVCQUFtQjBDLG9CQUFVSSxNQUFWLENBQWlCRCxVQUZuQjtBQUdqQmhELG1CQUFlNkMsb0JBQVVLLE1BQVYsQ0FBaUJGLFVBSGY7QUFJakJqRCxZQUFROEMsb0JBQVVDLE9BQVYsQ0FBa0JELG9CQUFVRSxHQUE1QixFQUFpQ0MsVUFKeEI7QUFLakIvQyxrQkFBYzRDLG9CQUFVSSxNQUFWLENBQWlCRCxVQUxkO0FBTWpCTixjQUFVRyxvQkFBVUksTUFBVixDQUFpQkQsVUFOVjtBQU9qQlosV0FBT1Msb0JBQVVNLE1BQVYsQ0FBaUJILFVBUFA7QUFRakJuRCxjQUFVZ0Qsb0JBQVVJLE1BQVYsQ0FBaUJELFVBUlY7QUFTakJ2RSxxQkFBaUJvRSxvQkFBVUksTUFBVixDQUFpQkQsVUFUakI7QUFVakI1QyxxQkFBaUJ5QyxvQkFBVUksTUFBVixDQUFpQkQ7QUFWakIsR0FEckI7QUFzS0QiLCJmaWxlIjoic2lkZS1wYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGUtcGFuZWwvc2lkZS1iYXInO1xuaW1wb3J0IFBhbmVsSGVhZGVyRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyJztcbmltcG9ydCBMYXllck1hbmFnZXIgZnJvbSAnLi9zaWRlLXBhbmVsL2xheWVyLW1hbmFnZXInO1xuaW1wb3J0IEZpbHRlck1hbmFnZXIgZnJvbSAnLi9zaWRlLXBhbmVsL2ZpbHRlci1tYW5hZ2VyJztcbmltcG9ydCBJbnRlcmFjdGlvbk1hbmFnZXIgZnJvbSAnLi9zaWRlLXBhbmVsL2ludGVyYWN0aW9uLW1hbmFnZXInO1xuaW1wb3J0IE1hcE1hbmFnZXIgZnJvbSAnLi9zaWRlLXBhbmVsL21hcC1tYW5hZ2VyJztcbmltcG9ydCBQYW5lbFRvZ2dsZSBmcm9tICcuL3NpZGUtcGFuZWwvcGFuZWwtdG9nZ2xlJztcblxuaW1wb3J0IHtcbiAgQUREX0RBVEFfSUQsXG4gIEFERF9NQVBfU1RZTEVfSUQsXG4gIERBVEFfVEFCTEVfSUQsXG4gIEVYUE9SVF9JTUFHRV9JRCxcbiAgRVhQT1JUX0RBVEFfSUQsXG4gIEVYUE9SVF9DT05GSUdfSUQsXG4gIFBBTkVMU1xufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmNvbnN0IFNpZGVQYW5lbENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbFNjcm9sbEJhcn07XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogMTZweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG5gO1xuXG5jb25zdCBQYW5lbFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVUZXh0Q29sb3J9O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG5gO1xuXG5TaWRlUGFuZWxGYWN0b3J5LmRlcHMgPSBbUGFuZWxIZWFkZXJGYWN0b3J5XTtcblxuLyoqXG4gKlxuICogVmVydGljYWwgc2lkZWJhciBjb250YWluaW5nIGlucHV0IGNvbXBvbmVudHMgZm9yIHRoZSByZW5kZXJpbmcgbGF5ZXJzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVQYW5lbEZhY3RvcnkoUGFuZWxIZWFkZXIpIHtcblxuICByZXR1cm4gY2xhc3MgU2lkZVBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgZmlsdGVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICAgIGludGVyYWN0aW9uQ29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBsYXllckJsZW5kaW5nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBsYXllcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHZpc1N0YXRlQWN0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3R5bGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgLyogY29tcG9uZW50IHByaXZhdGUgZnVuY3Rpb25zICovXG4gICAgX29uT3Blbk9yQ2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZVNpZGVQYW5lbChcbiAgICAgICAgdGhpcy5wcm9wcy51aVN0YXRlLmFjdGl2ZVNpZGVQYW5lbCA/IG51bGwgOiAnbGF5ZXInXG4gICAgICApO1xuICAgIH07XG5cbiAgICBfc2hvd0RhdGFzZXRUYWJsZSA9IGRhdGFJZCA9PiB7XG4gICAgICAvLyB0aGlzIHdpbGwgb3BlbiBkYXRhIHRhYmxlIG1vZGFsXG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5zaG93RGF0YXNldFRhYmxlKGRhdGFJZCk7XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKERBVEFfVEFCTEVfSUQpO1xuICAgIH07XG5cbiAgICBfc2hvd0FkZERhdGFNb2RhbCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoQUREX0RBVEFfSUQpO1xuICAgIH07XG5cbiAgICBfc2hvd0FkZE1hcFN0eWxlTW9kYWwgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKEFERF9NQVBfU1RZTEVfSUQpO1xuICAgIH07XG5cbiAgICBfcmVtb3ZlRGF0YXNldCA9IGtleSA9PiB7XG4gICAgICAvLyB0aGlzIHdpbGwgc2hvdyB0aGUgbW9kYWwgZGlhbG9nIHRvIGNvbmZpcm0gZGVsZXRpb25cbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMub3BlbkRlbGV0ZU1vZGFsKGtleSk7XG4gICAgfTtcblxuICAgIF9vbkV4cG9ydEltYWdlID0gKCkgPT4gdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChFWFBPUlRfSU1BR0VfSUQpO1xuXG4gICAgX29uRXhwb3J0RGF0YSA9ICgpID0+IHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoRVhQT1JUX0RBVEFfSUQpO1xuXG4gICAgX29uRXhwb3J0Q29uZmlnID0gKCkgPT4gdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChFWFBPUlRfQ09ORklHX0lEKTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYXBwTmFtZSxcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAgZGF0YXNldHMsXG4gICAgICAgIGZpbHRlcnMsXG4gICAgICAgIGxheWVycyxcbiAgICAgICAgbGF5ZXJCbGVuZGluZyxcbiAgICAgICAgbGF5ZXJDbGFzc2VzLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICBsYXllck9yZGVyLFxuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgICAgdmlzU3RhdGVBY3Rpb25zLFxuICAgICAgICBtYXBTdHlsZUFjdGlvbnMsXG4gICAgICAgIHVpU3RhdGVBY3Rpb25zXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHthY3RpdmVTaWRlUGFuZWx9ID0gdWlTdGF0ZTtcbiAgICAgIGNvbnN0IGlzT3BlbiA9IEJvb2xlYW4oYWN0aXZlU2lkZVBhbmVsKTtcblxuICAgICAgY29uc3QgbGF5ZXJNYW5hZ2VyQWN0aW9ucyA9IHtcbiAgICAgICAgYWRkTGF5ZXI6IHZpc1N0YXRlQWN0aW9ucy5hZGRMYXllcixcbiAgICAgICAgbGF5ZXJDb25maWdDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5sYXllckNvbmZpZ0NoYW5nZSxcbiAgICAgICAgbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlOlxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMubGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlLFxuICAgICAgICBsYXllclR5cGVDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5sYXllclR5cGVDaGFuZ2UsXG4gICAgICAgIGxheWVyVmlzQ29uZmlnQ2hhbmdlOiB2aXNTdGF0ZUFjdGlvbnMubGF5ZXJWaXNDb25maWdDaGFuZ2UsXG4gICAgICAgIHVwZGF0ZUxheWVyQmxlbmRpbmc6IHZpc1N0YXRlQWN0aW9ucy51cGRhdGVMYXllckJsZW5kaW5nLFxuICAgICAgICB1cGRhdGVMYXllck9yZGVyOiB2aXNTdGF0ZUFjdGlvbnMucmVvcmRlckxheWVyLFxuICAgICAgICBzaG93RGF0YXNldFRhYmxlOiB0aGlzLl9zaG93RGF0YXNldFRhYmxlLFxuICAgICAgICBzaG93QWRkRGF0YU1vZGFsOiB0aGlzLl9zaG93QWRkRGF0YU1vZGFsLFxuICAgICAgICByZW1vdmVMYXllcjogdmlzU3RhdGVBY3Rpb25zLnJlbW92ZUxheWVyLFxuICAgICAgICByZW1vdmVEYXRhc2V0OiB0aGlzLl9yZW1vdmVEYXRhc2V0XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBmaWx0ZXJNYW5hZ2VyQWN0aW9ucyA9IHtcbiAgICAgICAgYWRkRmlsdGVyOiB2aXNTdGF0ZUFjdGlvbnMuYWRkRmlsdGVyLFxuICAgICAgICByZW1vdmVGaWx0ZXI6IHZpc1N0YXRlQWN0aW9ucy5yZW1vdmVGaWx0ZXIsXG4gICAgICAgIHNldEZpbHRlcjogdmlzU3RhdGVBY3Rpb25zLnNldEZpbHRlcixcbiAgICAgICAgc2hvd0RhdGFzZXRUYWJsZTogdGhpcy5fc2hvd0RhdGFzZXRUYWJsZSxcbiAgICAgICAgc2hvd0FkZERhdGFNb2RhbDogdGhpcy5fc2hvd0FkZERhdGFNb2RhbCxcbiAgICAgICAgdG9nZ2xlQW5pbWF0aW9uOiB2aXNTdGF0ZUFjdGlvbnMudG9nZ2xlQW5pbWF0aW9uLFxuICAgICAgICBlbmxhcmdlRmlsdGVyOiB2aXNTdGF0ZUFjdGlvbnMuZW5sYXJnZUZpbHRlclxuICAgICAgfTtcblxuICAgICAgY29uc3QgaW50ZXJhY3Rpb25NYW5hZ2VyQWN0aW9ucyA9IHtcbiAgICAgICAgb25Db25maWdDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5pbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZVxuICAgICAgfTtcblxuICAgICAgY29uc3QgbWFwTWFuYWdlckFjdGlvbnMgPSB7XG4gICAgICAgIGFkZE1hcFN0eWxlVXJsOiBtYXBTdHlsZUFjdGlvbnMuYWRkTWFwU3R5bGVVcmwsXG4gICAgICAgIG9uQ29uZmlnQ2hhbmdlOiBtYXBTdHlsZUFjdGlvbnMubWFwQ29uZmlnQ2hhbmdlLFxuICAgICAgICBvblN0eWxlQ2hhbmdlOiBtYXBTdHlsZUFjdGlvbnMubWFwU3R5bGVDaGFuZ2UsXG4gICAgICAgIG9uQnVpbGRpbmdDaGFuZ2U6IG1hcFN0eWxlQWN0aW9ucy5tYXBCdWlsZGluZ0NoYW5nZSxcbiAgICAgICAgc2hvd0FkZE1hcFN0eWxlTW9kYWw6IHRoaXMuX3Nob3dBZGRNYXBTdHlsZU1vZGFsXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTaWRlYmFyXG4gICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH1cbiAgICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICAgICAgbWluaWZpZWRXaWR0aD17MH1cbiAgICAgICAgICAgIG9uT3Blbk9yQ2xvc2U9e3RoaXMuX29uT3Blbk9yQ2xvc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBhbmVsSGVhZGVyXG4gICAgICAgICAgICAgIGFwcE5hbWU9e2FwcE5hbWV9XG4gICAgICAgICAgICAgIHZlcnNpb249e3ZlcnNpb259XG4gICAgICAgICAgICAgIG9uRXhwb3J0SW1hZ2U9e3RoaXMuX29uRXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgIG9uRXhwb3J0RGF0YT17dGhpcy5fb25FeHBvcnREYXRhfVxuICAgICAgICAgICAgICBvbkV4cG9ydENvbmZpZz17dGhpcy5fb25FeHBvcnRDb25maWd9XG4gICAgICAgICAgICAgIG9uU2F2ZU1hcD17dGhpcy5wcm9wcy5vblNhdmVNYXB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFBhbmVsVG9nZ2xlXG4gICAgICAgICAgICAgIHBhbmVscz17UEFORUxTfVxuICAgICAgICAgICAgICBhY3RpdmVQYW5lbD17YWN0aXZlU2lkZVBhbmVsfVxuICAgICAgICAgICAgICB0b2dnbGVQYW5lbD17dWlTdGF0ZUFjdGlvbnMudG9nZ2xlU2lkZVBhbmVsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTaWRlUGFuZWxDb250ZW50IGNsYXNzTmFtZT1cInNpZGUtcGFuZWxfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UGFuZWxUaXRsZSBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19jb250ZW50X190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgeyhQQU5FTFMuZmluZCgoe2lkfSkgPT4gaWQgPT09IGFjdGl2ZVNpZGVQYW5lbCkgfHwge30pLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvUGFuZWxUaXRsZT5cbiAgICAgICAgICAgICAgICB7YWN0aXZlU2lkZVBhbmVsID09PSAnbGF5ZXInICYmIChcbiAgICAgICAgICAgICAgICAgIDxMYXllck1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLmxheWVyTWFuYWdlckFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICAgICAgICAgIGxheWVyQ2xhc3Nlcz17bGF5ZXJDbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICBsYXllck9yZGVyPXtsYXllck9yZGVyfVxuICAgICAgICAgICAgICAgICAgICBsYXllckJsZW5kaW5nPXtsYXllckJsZW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICBvcGVuTW9kYWw9e3VpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHthY3RpdmVTaWRlUGFuZWwgPT09ICdmaWx0ZXInICYmIChcbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXJNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5maWx0ZXJNYW5hZ2VyQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzPXtmaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHthY3RpdmVTaWRlUGFuZWwgPT09ICdpbnRlcmFjdGlvbicgJiYgKFxuICAgICAgICAgICAgICAgICAgPEludGVyYWN0aW9uTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICB7Li4uaW50ZXJhY3Rpb25NYW5hZ2VyQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZz17aW50ZXJhY3Rpb25Db25maWd9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2FjdGl2ZVNpZGVQYW5lbCA9PT0gJ21hcCcgJiYgKFxuICAgICAgICAgICAgICAgICAgPE1hcE1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLm1hcE1hbmFnZXJBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICBtYXBTdHlsZT17dGhpcy5wcm9wcy5tYXBTdHlsZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1NpZGVQYW5lbENvbnRlbnQ+XG4gICAgICAgICAgPC9TaWRlYmFyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuIl19