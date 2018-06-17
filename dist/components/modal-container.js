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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  height: 85%;\n  width: 90%;\n  top: 80px;\n  padding: 32px 0 0 0;\n  max-width: unset;\n'], ['\n  height: 85%;\n  width: 90%;\n  top: 80px;\n  padding: 32px 0 0 0;\n  max-width: unset;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 40%;\n  padding: 40px 40px 32px 40px;\n'], ['\n  width: 40%;\n  padding: 40px 40px 32px 40px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  top: 60px;\n'], ['\n  top: 60px;\n']); // Copyright (c) 2018 Uber Technologies, Inc.
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

// modals


exports.default = ModalContainerFactory;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _reactDom = require('react-dom');

var _window = require('global/window');

var _modal = require('./common/modal');

var _modal2 = _interopRequireDefault(_modal);

var _dataProcessor = require('../processors/data-processor');

var _schemas = require('../schemas');

var _schemas2 = _interopRequireDefault(_schemas);

var _exportImageUtils = require('../utils/export-image-utils');

var _deleteDataModal = require('./modals/delete-data-modal');

var _deleteDataModal2 = _interopRequireDefault(_deleteDataModal);

var _iconInfoModal = require('./modals/icon-info-modal');

var _iconInfoModal2 = _interopRequireDefault(_iconInfoModal);

var _dataTableModal = require('./modals/data-table-modal');

var _dataTableModal2 = _interopRequireDefault(_dataTableModal);

var _loadDataModal = require('./modals/load-data-modal');

var _loadDataModal2 = _interopRequireDefault(_loadDataModal);

var _exportImageModal = require('./modals/export-image-modal');

var _exportImageModal2 = _interopRequireDefault(_exportImageModal);

var _exportDataModal = require('./modals/export-data-modal');

var _exportDataModal2 = _interopRequireDefault(_exportDataModal);

var _exportConfigModal = require('./modals/export-config-modal');

var _exportConfigModal2 = _interopRequireDefault(_exportConfigModal);

var _addMapStyleModal = require('./modals/add-map-style-modal');

var _addMapStyleModal2 = _interopRequireDefault(_addMapStyleModal);

var _defaultSettings = require('../constants/default-settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataTableModalStyle = (0, _styledComponents.css)(_templateObject);

var DeleteDatasetModalStyled = (0, _styledComponents.css)(_templateObject2);

var LoadDataModalStyle = (0, _styledComponents.css)(_templateObject3);

ModalContainerFactory.deps = [_deleteDataModal2.default, _iconInfoModal2.default, _dataTableModal2.default, _loadDataModal2.default, _exportImageModal2.default, _exportDataModal2.default, _exportConfigModal2.default, _addMapStyleModal2.default];

function ModalContainerFactory(DeleteDatasetModal, IconInfoModal, DataTableModal, LoadDataModal, ExportImageModal, ExportDataModal, ExportConfigModal, AddMapStyleModal) {
  var _class, _temp2;

  var ModalWrapper = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(ModalWrapper, _Component);

    function ModalWrapper() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, ModalWrapper);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ModalWrapper.__proto__ || Object.getPrototypeOf(ModalWrapper)).call.apply(_ref, [this].concat(args))), _this), _this._closeModal = function () {
        _this.props.uiStateActions.toggleModal(null);
      }, _this._deleteDataset = function (key) {
        _this.props.visStateActions.removeDataset(key);
        _this._closeModal();
      }, _this._onAddCustomMapStyle = function () {
        _this.props.mapStyleActions.addCustomMapStyle();
        _this._closeModal();
      }, _this._onFileUpload = function (blob) {
        _this.props.visStateActions.loadFiles(blob);
      }, _this._onExportImage = function () {
        var _this$props$uiState$e = _this.props.uiState.exportImage,
            exporting = _this$props$uiState$e.exporting,
            imageDataUri = _this$props$uiState$e.imageDataUri;

        if (!exporting && imageDataUri) {
          var file = (0, _exportImageUtils.dataURItoBlob)(imageDataUri);
          (0, _exportImageUtils.downloadFile)(file, _defaultSettings.DEFAULT_EXPORT_IMAGE_NAME);
        }
        _this.props.uiStateActions.cleanupExportImage();
        _this._closeModal();
      }, _this._onExportData = function () {
        var _this$props = _this.props,
            visState = _this$props.visState,
            uiState = _this$props.uiState;
        var datasets = visState.datasets;
        var _uiState$exportData = uiState.exportData,
            selectedDataset = _uiState$exportData.selectedDataset,
            dataType = _uiState$exportData.dataType,
            filtered = _uiState$exportData.filtered;
        // get the selected data

        var filename = 'kepler-gl';
        var selectedDatasets = datasets[selectedDataset] ? [datasets[selectedDataset]] : Object.values(datasets);
        if (!selectedDatasets.length) {
          // error: selected dataset not found.
          _this._closeModal();
        }

        selectedDatasets.forEach(function (selectedData) {
          var allData = selectedData.allData,
              data = selectedData.data,
              fields = selectedData.fields,
              label = selectedData.label;

          var exportData = filtered ? data : allData;
          // start to export data according to selected data type
          switch (dataType) {
            case _defaultSettings.EXPORT_DATA_TYPE.CSV:
              {
                var type = 'text/csv';
                var csv = (0, _dataProcessor.formatCsv)(exportData, fields);
                _this._downloadFile(csv, type, filename + '_' + label + '.csv');
                break;
              }
            // TODO: support more different data type later.
            default:
              break;
          }
        });

        _this._closeModal();
      }, _this._onExportConfig = function () {
        var data = _this.props.uiState.exportData.data;

        // we pass all props because we avoid to create new variables

        var dump = data ? _schemas2.default.save(_this.props) : _schemas2.default.getConfigToSave(_this.props);

        _this._downloadFile(JSON.stringify(dump, null, 2), 'application/json', 'keplergl.json');

        _this._closeModal();
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ModalWrapper, [{
      key: '_downloadFile',
      value: function _downloadFile(data, type, filename) {
        var fileBlob = new _window.Blob([data], { type: type });
        (0, _exportImageUtils.downloadFile)(fileBlob, filename);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            containerW = _props.containerW,
            containerH = _props.containerH,
            mapStyle = _props.mapStyle,
            mapState = _props.mapState,
            uiState = _props.uiState,
            visState = _props.visState,
            rootNode = _props.rootNode,
            visStateActions = _props.visStateActions;
        var currentModal = uiState.currentModal,
            datasetKeyToRemove = uiState.datasetKeyToRemove;
        var datasets = visState.datasets,
            layers = visState.layers,
            editingDataset = visState.editingDataset;


        var template = null;
        var modalProps = {};

        switch (currentModal) {
          case 'iconInfo':
            template = _react2.default.createElement(IconInfoModal, null);
            modalProps.title = 'How to draw icons';
            break;

          case _defaultSettings.DATA_TABLE_ID:
            template = _react2.default.createElement(DataTableModal, {
              width: containerW * 0.9,
              height: containerH * 0.85,
              datasets: datasets,
              dataId: editingDataset,
              showDatasetTable: visStateActions.showDatasetTable
            });
            modalProps.cssStyle = DataTableModalStyle;
            break;
          case _defaultSettings.DELETE_DATA_ID:
            // validate options
            if (datasetKeyToRemove && datasets && datasets[datasetKeyToRemove]) {
              template = _react2.default.createElement(DeleteDatasetModal, {
                dataset: datasets[datasetKeyToRemove],
                layers: layers
              });

              modalProps = {
                title: 'Delete Dataset',
                cssStyle: DeleteDatasetModalStyled,
                footer: true,
                onConfirm: function onConfirm() {
                  return _this2._deleteDataset(datasetKeyToRemove);
                },
                onCancel: this._closeModal,
                confirmButton: {
                  negative: true,
                  large: true,
                  children: 'Delete'
                }
              };
            }
            break; // in case we add a new case after this one
          case _defaultSettings.ADD_DATA_ID:
            template = _react2.default.createElement(LoadDataModal, {
              onClose: this._closeModal,
              onFileUpload: this._onFileUpload
            });
            modalProps = {
              title: 'Add Data To Map',
              cssStyle: LoadDataModalStyle,
              footer: false,
              onConfirm: this._closeModal
            };
            break;

          case _defaultSettings.EXPORT_IMAGE_ID:
            var _uiState$exportImage = uiState.exportImage,
                ratio = _uiState$exportImage.ratio,
                legend = _uiState$exportImage.legend,
                resolution = _uiState$exportImage.resolution,
                exporting = _uiState$exportImage.exporting,
                imageDataUri = _uiState$exportImage.imageDataUri;

            template = _react2.default.createElement(ExportImageModal, {
              width: containerW,
              height: containerH,
              legend: legend,
              ratio: ratio,
              resolution: resolution,
              exporting: exporting,
              imageDataUri: imageDataUri,
              onChangeRatio: this.props.uiStateActions.setRatio,
              onChangeResolution: this.props.uiStateActions.setResolution,
              onToggleLegend: this.props.uiStateActions.toggleLegend
            });
            modalProps = {
              close: false,
              title: 'Export Image',
              footer: true,
              onCancel: this._closeModal,
              onConfirm: this._onExportImage,
              confirmButton: {
                large: true,
                disabled: exporting,
                children: 'Download'
              }
            };
            break;

          case _defaultSettings.EXPORT_DATA_ID:

            template = _react2.default.createElement(ExportDataModal, (0, _extends3.default)({}, uiState.exportData, {
              datasets: datasets,
              onClose: this._closeModal,
              onChangeExportDataType: this.props.uiStateActions.setExportDataType,
              onChangeExportSelectedDataset: this.props.uiStateActions.setExportSelectedDataset,
              onChangeExportFiltered: this.props.uiStateActions.setExportFiltered
            }));
            modalProps = {
              close: false,
              title: 'Export Data',
              footer: true,
              onCancel: this._closeModal,
              onConfirm: this._onExportData,
              confirmButton: {
                large: true,
                children: 'Export'
              }
            };
            break;

          case _defaultSettings.EXPORT_CONFIG_ID:
            var keplerGlConfig = _schemas2.default.getConfigToSave({ mapStyle: mapStyle, visState: visState, mapState: mapState, uiState: uiState });
            template = _react2.default.createElement(ExportConfigModal, {
              config: keplerGlConfig,
              data: uiState.exportData.data,
              onClose: this._closeModal,
              onChangeExportData: this.props.uiStateActions.setExportData
            });
            modalProps = {
              close: false,
              title: 'Export Config',
              footer: true,
              onCancel: this._closeModal,
              onConfirm: this._onExportConfig,
              confirmButton: {
                large: true,
                children: 'Export'
              }
            };
            break;

          case _defaultSettings.ADD_MAP_STYLE_ID:
            template = _react2.default.createElement(AddMapStyleModal, {
              mapboxApiAccessToken: this.props.mapboxApiAccessToken,
              mapState: this.props.mapState,
              inputStyle: mapStyle.inputStyle,
              inputMapStyle: this.props.mapStyleActions.inputMapStyle,
              loadCustomMapStyle: this.props.mapStyleActions.loadCustomMapStyle
            });
            modalProps = {
              close: false,
              title: 'Add Custom Mapbox Style',
              footer: true,
              onCancel: this._closeModal,
              onConfirm: this._onAddCustomMapStyle,
              confirmButton: {
                large: true,
                disabled: !mapStyle.inputStyle.style,
                children: 'Add Style'
              }
            };
            break;
          default:
            break;
        }

        return this.props.rootNode ? _react2.default.createElement(
          _modal2.default,
          (0, _extends3.default)({}, modalProps, {
            parentSelector: function parentSelector() {
              return (0, _reactDom.findDOMNode)(rootNode);
            },
            isOpen: Boolean(currentModal),
            close: this._closeModal
          }),
          template
        ) : null;
      }
    }]);
    return ModalWrapper;
  }(_react.Component), _class.propTypes = {
    rootNode: _propTypes2.default.object,
    containerW: _propTypes2.default.number,
    containerH: _propTypes2.default.number,
    mapboxApiAccessToken: _propTypes2.default.string.isRequired,
    mapState: _propTypes2.default.object.isRequired,
    mapStyle: _propTypes2.default.object.isRequired,
    uiState: _propTypes2.default.object.isRequired,
    visState: _propTypes2.default.object.isRequired,
    visStateActions: _propTypes2.default.object.isRequired,
    uiStateActions: _propTypes2.default.object.isRequired,
    mapStyleActions: _propTypes2.default.object.isRequired
  }, _temp2);


  return ModalWrapper;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFsLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJNb2RhbENvbnRhaW5lckZhY3RvcnkiLCJEYXRhVGFibGVNb2RhbFN0eWxlIiwiY3NzIiwiRGVsZXRlRGF0YXNldE1vZGFsU3R5bGVkIiwiTG9hZERhdGFNb2RhbFN0eWxlIiwiZGVwcyIsIkRlbGV0ZURhdGFzZXRNb2RhbEZhY3RvcnkiLCJJY29uSW5mb01vZGFsRmFjdG9yeSIsIkRhdGFUYWJsZU1vZGFsRmFjdG9yeSIsIkxvYWREYXRhTW9kYWxGYWN0b3J5IiwiRXhwb3J0SW1hZ2VNb2RhbEZhY3RvcnkiLCJFeHBvcnREYXRhTW9kYWxGYWN0b3J5IiwiRXhwb3J0Q29uZmlnTW9kYWxGYWN0b3J5IiwiQWRkTWFwU3R5bGVNb2RhbEZhY3RvcnkiLCJEZWxldGVEYXRhc2V0TW9kYWwiLCJJY29uSW5mb01vZGFsIiwiRGF0YVRhYmxlTW9kYWwiLCJMb2FkRGF0YU1vZGFsIiwiRXhwb3J0SW1hZ2VNb2RhbCIsIkV4cG9ydERhdGFNb2RhbCIsIkV4cG9ydENvbmZpZ01vZGFsIiwiQWRkTWFwU3R5bGVNb2RhbCIsIk1vZGFsV3JhcHBlciIsIl9jbG9zZU1vZGFsIiwicHJvcHMiLCJ1aVN0YXRlQWN0aW9ucyIsInRvZ2dsZU1vZGFsIiwiX2RlbGV0ZURhdGFzZXQiLCJ2aXNTdGF0ZUFjdGlvbnMiLCJyZW1vdmVEYXRhc2V0Iiwia2V5IiwiX29uQWRkQ3VzdG9tTWFwU3R5bGUiLCJtYXBTdHlsZUFjdGlvbnMiLCJhZGRDdXN0b21NYXBTdHlsZSIsIl9vbkZpbGVVcGxvYWQiLCJsb2FkRmlsZXMiLCJibG9iIiwiX29uRXhwb3J0SW1hZ2UiLCJ1aVN0YXRlIiwiZXhwb3J0SW1hZ2UiLCJleHBvcnRpbmciLCJpbWFnZURhdGFVcmkiLCJmaWxlIiwiREVGQVVMVF9FWFBPUlRfSU1BR0VfTkFNRSIsImNsZWFudXBFeHBvcnRJbWFnZSIsIl9vbkV4cG9ydERhdGEiLCJ2aXNTdGF0ZSIsImRhdGFzZXRzIiwiZXhwb3J0RGF0YSIsInNlbGVjdGVkRGF0YXNldCIsImRhdGFUeXBlIiwiZmlsdGVyZWQiLCJmaWxlbmFtZSIsInNlbGVjdGVkRGF0YXNldHMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiYWxsRGF0YSIsInNlbGVjdGVkRGF0YSIsImRhdGEiLCJmaWVsZHMiLCJsYWJlbCIsIkVYUE9SVF9EQVRBX1RZUEUiLCJDU1YiLCJ0eXBlIiwiY3N2IiwiX2Rvd25sb2FkRmlsZSIsIl9vbkV4cG9ydENvbmZpZyIsImR1bXAiLCJLZXBsZXJHbFNjaGVtYSIsInNhdmUiLCJnZXRDb25maWdUb1NhdmUiLCJKU09OIiwic3RyaW5naWZ5IiwiZmlsZUJsb2IiLCJCbG9iIiwiY29udGFpbmVyVyIsImNvbnRhaW5lckgiLCJtYXBTdHlsZSIsIm1hcFN0YXRlIiwicm9vdE5vZGUiLCJjdXJyZW50TW9kYWwiLCJkYXRhc2V0S2V5VG9SZW1vdmUiLCJsYXllcnMiLCJlZGl0aW5nRGF0YXNldCIsInRlbXBsYXRlIiwibW9kYWxQcm9wcyIsInRpdGxlIiwiREFUQV9UQUJMRV9JRCIsInNob3dEYXRhc2V0VGFibGUiLCJjc3NTdHlsZSIsIkRFTEVURV9EQVRBX0lEIiwiZm9vdGVyIiwib25Db25maXJtIiwib25DYW5jZWwiLCJjb25maXJtQnV0dG9uIiwibmVnYXRpdmUiLCJsYXJnZSIsImNoaWxkcmVuIiwiQUREX0RBVEFfSUQiLCJFWFBPUlRfSU1BR0VfSUQiLCJyYXRpbyIsImxlZ2VuZCIsInJlc29sdXRpb24iLCJzZXRSYXRpbyIsInNldFJlc29sdXRpb24iLCJ0b2dnbGVMZWdlbmQiLCJjbG9zZSIsImRpc2FibGVkIiwiRVhQT1JUX0RBVEFfSUQiLCJzZXRFeHBvcnREYXRhVHlwZSIsInNldEV4cG9ydFNlbGVjdGVkRGF0YXNldCIsInNldEV4cG9ydEZpbHRlcmVkIiwiRVhQT1JUX0NPTkZJR19JRCIsImtlcGxlckdsQ29uZmlnIiwic2V0RXhwb3J0RGF0YSIsIkFERF9NQVBfU1RZTEVfSUQiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsImlucHV0U3R5bGUiLCJpbnB1dE1hcFN0eWxlIiwibG9hZEN1c3RvbU1hcFN0eWxlIiwic3R5bGUiLCJCb29sZWFuIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwibnVtYmVyIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUdBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWUE7OztrQkFrRHdCQSxxQjs7QUE1RHhCOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBWUEsSUFBTUMsMEJBQXNCQyxxQkFBdEIsa0JBQU47O0FBUUEsSUFBTUMsK0JBQTJCRCxxQkFBM0IsbUJBQU47O0FBS0EsSUFBTUUseUJBQXFCRixxQkFBckIsbUJBQU47O0FBSUFGLHNCQUFzQkssSUFBdEIsR0FBNkIsQ0FDM0JDLHlCQUQyQixFQUUzQkMsdUJBRjJCLEVBRzNCQyx3QkFIMkIsRUFJM0JDLHVCQUoyQixFQUszQkMsMEJBTDJCLEVBTTNCQyx5QkFOMkIsRUFPM0JDLDJCQVAyQixFQVEzQkMsMEJBUjJCLENBQTdCOztBQVdlLFNBQVNiLHFCQUFULENBQ2JjLGtCQURhLEVBRWJDLGFBRmEsRUFHYkMsY0FIYSxFQUliQyxhQUphLEVBS2JDLGdCQUxhLEVBTWJDLGVBTmEsRUFPYkMsaUJBUGEsRUFRYkMsZ0JBUmEsRUFTYjtBQUFBOztBQUFBLE1BQ01DLFlBRE47QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFB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aEI7QUFXakJsRyxxQkFBaUI4RixvQkFBVUMsTUFBVixDQUFpQkc7QUFYakIsR0FGckI7OztBQW9TQSxTQUFPNUcsWUFBUDtBQUNEIiwiZmlsZSI6Im1vZGFsLWNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7Y3NzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2ZpbmRET01Ob2RlfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtCbG9ifSBmcm9tICdnbG9iYWwvd2luZG93JztcblxuaW1wb3J0IE1vZGFsRGlhbG9nIGZyb20gJy4vY29tbW9uL21vZGFsJztcbmltcG9ydCB7Zm9ybWF0Q3N2fSBmcm9tICdwcm9jZXNzb3JzL2RhdGEtcHJvY2Vzc29yJztcbmltcG9ydCBLZXBsZXJHbFNjaGVtYSBmcm9tICdzY2hlbWFzJztcbmltcG9ydCB7ZG93bmxvYWRGaWxlLCBkYXRhVVJJdG9CbG9ifSBmcm9tICd1dGlscy9leHBvcnQtaW1hZ2UtdXRpbHMnO1xuLy8gbW9kYWxzXG5pbXBvcnQgRGVsZXRlRGF0YXNldE1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9kZWxldGUtZGF0YS1tb2RhbCc7XG5pbXBvcnQgSWNvbkluZm9Nb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvaWNvbi1pbmZvLW1vZGFsJztcbmltcG9ydCBEYXRhVGFibGVNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZGF0YS10YWJsZS1tb2RhbCc7XG5pbXBvcnQgTG9hZERhdGFNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvbG9hZC1kYXRhLW1vZGFsJztcbmltcG9ydCBFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9leHBvcnQtaW1hZ2UtbW9kYWwnO1xuaW1wb3J0IEV4cG9ydERhdGFNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZXhwb3J0LWRhdGEtbW9kYWwnO1xuaW1wb3J0IEV4cG9ydENvbmZpZ01vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9leHBvcnQtY29uZmlnLW1vZGFsJztcbmltcG9ydCBBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9hZGQtbWFwLXN0eWxlLW1vZGFsJztcblxuaW1wb3J0IHtcbiAgQUREX0RBVEFfSUQsXG4gIERBVEFfVEFCTEVfSUQsXG4gIERFRkFVTFRfRVhQT1JUX0lNQUdFX05BTUUsXG4gIERFTEVURV9EQVRBX0lELFxuICBFWFBPUlRfREFUQV9JRCxcbiAgRVhQT1JUX0RBVEFfVFlQRSxcbiAgRVhQT1JUX0lNQUdFX0lELFxuICBFWFBPUlRfQ09ORklHX0lELFxuICBBRERfTUFQX1NUWUxFX0lEXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgRGF0YVRhYmxlTW9kYWxTdHlsZSA9IGNzc2BcbiAgaGVpZ2h0OiA4NSU7XG4gIHdpZHRoOiA5MCU7XG4gIHRvcDogODBweDtcbiAgcGFkZGluZzogMzJweCAwIDAgMDtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbmA7XG5cbmNvbnN0IERlbGV0ZURhdGFzZXRNb2RhbFN0eWxlZCA9IGNzc2BcbiAgd2lkdGg6IDQwJTtcbiAgcGFkZGluZzogNDBweCA0MHB4IDMycHggNDBweDtcbmA7XG5cbmNvbnN0IExvYWREYXRhTW9kYWxTdHlsZSA9IGNzc2BcbiAgdG9wOiA2MHB4O1xuYDtcblxuTW9kYWxDb250YWluZXJGYWN0b3J5LmRlcHMgPSBbXG4gIERlbGV0ZURhdGFzZXRNb2RhbEZhY3RvcnksXG4gIEljb25JbmZvTW9kYWxGYWN0b3J5LFxuICBEYXRhVGFibGVNb2RhbEZhY3RvcnksXG4gIExvYWREYXRhTW9kYWxGYWN0b3J5LFxuICBFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeSxcbiAgRXhwb3J0RGF0YU1vZGFsRmFjdG9yeSxcbiAgRXhwb3J0Q29uZmlnTW9kYWxGYWN0b3J5LFxuICBBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWxDb250YWluZXJGYWN0b3J5KFxuICBEZWxldGVEYXRhc2V0TW9kYWwsXG4gIEljb25JbmZvTW9kYWwsXG4gIERhdGFUYWJsZU1vZGFsLFxuICBMb2FkRGF0YU1vZGFsLFxuICBFeHBvcnRJbWFnZU1vZGFsLFxuICBFeHBvcnREYXRhTW9kYWwsXG4gIEV4cG9ydENvbmZpZ01vZGFsLFxuICBBZGRNYXBTdHlsZU1vZGFsXG4pIHtcbiAgY2xhc3MgTW9kYWxXcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgcm9vdE5vZGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBjb250YWluZXJXOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgY29udGFpbmVySDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdGF0ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHVpU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHZpc1N0YXRlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICB2aXNTdGF0ZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHVpU3RhdGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdHlsZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBfY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwobnVsbCk7XG4gICAgfTtcblxuICAgIF9kZWxldGVEYXRhc2V0ID0ga2V5ID0+IHtcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLnJlbW92ZURhdGFzZXQoa2V5KTtcbiAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICB9O1xuXG4gICAgX29uQWRkQ3VzdG9tTWFwU3R5bGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5hZGRDdXN0b21NYXBTdHlsZSgpO1xuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBfb25GaWxlVXBsb2FkID0gYmxvYiA9PiB7XG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5sb2FkRmlsZXMoYmxvYik7XG4gICAgfTtcblxuICAgIF9vbkV4cG9ydEltYWdlID0gKCkgPT4ge1xuICAgICAgY29uc3Qge2V4cG9ydGluZywgaW1hZ2VEYXRhVXJpfSA9IHRoaXMucHJvcHMudWlTdGF0ZS5leHBvcnRJbWFnZTtcbiAgICAgIGlmICghZXhwb3J0aW5nICYmIGltYWdlRGF0YVVyaSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZGF0YVVSSXRvQmxvYihpbWFnZURhdGFVcmkpO1xuICAgICAgICBkb3dubG9hZEZpbGUoZmlsZSwgREVGQVVMVF9FWFBPUlRfSU1BR0VfTkFNRSk7XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLmNsZWFudXBFeHBvcnRJbWFnZSgpO1xuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBfZG93bmxvYWRGaWxlKGRhdGEsIHR5cGUsIGZpbGVuYW1lKSB7XG4gICAgICBjb25zdCBmaWxlQmxvYiA9IG5ldyBCbG9iKFtkYXRhXSwge3R5cGV9KTtcbiAgICAgIGRvd25sb2FkRmlsZShmaWxlQmxvYiwgZmlsZW5hbWUpO1xuICAgIH1cblxuICAgIF9vbkV4cG9ydERhdGEgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7dmlzU3RhdGUsIHVpU3RhdGV9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtkYXRhc2V0c30gPSB2aXNTdGF0ZTtcbiAgICAgIGNvbnN0IHtzZWxlY3RlZERhdGFzZXQsIGRhdGFUeXBlLCBmaWx0ZXJlZH0gPSB1aVN0YXRlLmV4cG9ydERhdGE7XG4gICAgICAvLyBnZXQgdGhlIHNlbGVjdGVkIGRhdGFcbiAgICAgIGNvbnN0IGZpbGVuYW1lID0gJ2tlcGxlci1nbCc7XG4gICAgICBjb25zdCBzZWxlY3RlZERhdGFzZXRzID0gZGF0YXNldHNbc2VsZWN0ZWREYXRhc2V0XSA/IFtkYXRhc2V0c1tzZWxlY3RlZERhdGFzZXRdXSA6IE9iamVjdC52YWx1ZXMoZGF0YXNldHMpO1xuICAgICAgaWYgKCFzZWxlY3RlZERhdGFzZXRzLmxlbmd0aCkge1xuICAgICAgICAvLyBlcnJvcjogc2VsZWN0ZWQgZGF0YXNldCBub3QgZm91bmQuXG4gICAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0ZWREYXRhc2V0cy5mb3JFYWNoKHNlbGVjdGVkRGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHthbGxEYXRhLCBkYXRhLCBmaWVsZHMsIGxhYmVsfSA9IHNlbGVjdGVkRGF0YTtcbiAgICAgICAgY29uc3QgZXhwb3J0RGF0YSA9IGZpbHRlcmVkID8gZGF0YSA6IGFsbERhdGE7XG4gICAgICAgIC8vIHN0YXJ0IHRvIGV4cG9ydCBkYXRhIGFjY29yZGluZyB0byBzZWxlY3RlZCBkYXRhIHR5cGVcbiAgICAgICAgc3dpdGNoIChkYXRhVHlwZSkge1xuICAgICAgICAgIGNhc2UgRVhQT1JUX0RBVEFfVFlQRS5DU1Y6IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSAndGV4dC9jc3YnO1xuICAgICAgICAgICAgY29uc3QgY3N2ID0gZm9ybWF0Q3N2KGV4cG9ydERhdGEsIGZpZWxkcyk7XG4gICAgICAgICAgICB0aGlzLl9kb3dubG9hZEZpbGUoY3N2LCB0eXBlLCBgJHtmaWxlbmFtZX1fJHtsYWJlbH0uY3N2YCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gVE9ETzogc3VwcG9ydCBtb3JlIGRpZmZlcmVudCBkYXRhIHR5cGUgbGF0ZXIuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIF9vbkV4cG9ydENvbmZpZyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHMudWlTdGF0ZS5leHBvcnREYXRhO1xuXG4gICAgICAvLyB3ZSBwYXNzIGFsbCBwcm9wcyBiZWNhdXNlIHdlIGF2b2lkIHRvIGNyZWF0ZSBuZXcgdmFyaWFibGVzXG4gICAgICBjb25zdCBkdW1wID0gZGF0YSA/IEtlcGxlckdsU2NoZW1hLnNhdmUodGhpcy5wcm9wcylcbiAgICAgICAgOiBLZXBsZXJHbFNjaGVtYS5nZXRDb25maWdUb1NhdmUodGhpcy5wcm9wcyk7XG5cbiAgICAgIHRoaXMuX2Rvd25sb2FkRmlsZShcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZHVtcCwgbnVsbCwgMiksXG4gICAgICAgICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ2tlcGxlcmdsLmpzb24nXG4gICAgICApO1xuXG4gICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29udGFpbmVyVyxcbiAgICAgICAgY29udGFpbmVySCxcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIG1hcFN0YXRlLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICB2aXNTdGF0ZSxcbiAgICAgICAgcm9vdE5vZGUsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9uc1xuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7Y3VycmVudE1vZGFsLCBkYXRhc2V0S2V5VG9SZW1vdmV9ID0gdWlTdGF0ZTtcbiAgICAgIGNvbnN0IHtkYXRhc2V0cywgbGF5ZXJzLCBlZGl0aW5nRGF0YXNldH0gPSB2aXNTdGF0ZTtcblxuICAgICAgbGV0IHRlbXBsYXRlID0gbnVsbDtcbiAgICAgIGxldCBtb2RhbFByb3BzID0ge307XG5cbiAgICAgIHN3aXRjaCAoY3VycmVudE1vZGFsKSB7XG4gICAgICAgIGNhc2UgJ2ljb25JbmZvJzpcbiAgICAgICAgICB0ZW1wbGF0ZSA9IDxJY29uSW5mb01vZGFsIC8+O1xuICAgICAgICAgIG1vZGFsUHJvcHMudGl0bGUgPSAnSG93IHRvIGRyYXcgaWNvbnMnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgREFUQV9UQUJMRV9JRDpcbiAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgIDxEYXRhVGFibGVNb2RhbFxuICAgICAgICAgICAgICB3aWR0aD17Y29udGFpbmVyVyAqIDAuOX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXtjb250YWluZXJIICogMC44NX1cbiAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICBkYXRhSWQ9e2VkaXRpbmdEYXRhc2V0fVxuICAgICAgICAgICAgICBzaG93RGF0YXNldFRhYmxlPXt2aXNTdGF0ZUFjdGlvbnMuc2hvd0RhdGFzZXRUYWJsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgICBtb2RhbFByb3BzLmNzc1N0eWxlID0gRGF0YVRhYmxlTW9kYWxTdHlsZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBERUxFVEVfREFUQV9JRDpcbiAgICAgICAgICAvLyB2YWxpZGF0ZSBvcHRpb25zXG4gICAgICAgICAgaWYgKGRhdGFzZXRLZXlUb1JlbW92ZSAmJiBkYXRhc2V0cyAmJiBkYXRhc2V0c1tkYXRhc2V0S2V5VG9SZW1vdmVdKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPERlbGV0ZURhdGFzZXRNb2RhbFxuICAgICAgICAgICAgICAgIGRhdGFzZXQ9e2RhdGFzZXRzW2RhdGFzZXRLZXlUb1JlbW92ZV19XG4gICAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICB0aXRsZTogJ0RlbGV0ZSBEYXRhc2V0JyxcbiAgICAgICAgICAgICAgY3NzU3R5bGU6IERlbGV0ZURhdGFzZXRNb2RhbFN0eWxlZCxcbiAgICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHRoaXMuX2RlbGV0ZURhdGFzZXQoZGF0YXNldEtleVRvUmVtb3ZlKSxcbiAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcbiAgICAgICAgICAgICAgICBuZWdhdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsYXJnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ0RlbGV0ZSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7IC8vIGluIGNhc2Ugd2UgYWRkIGEgbmV3IGNhc2UgYWZ0ZXIgdGhpcyBvbmVcbiAgICAgICAgY2FzZSBBRERfREFUQV9JRDpcbiAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgIDxMb2FkRGF0YU1vZGFsXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuX2Nsb3NlTW9kYWx9XG4gICAgICAgICAgICAgIG9uRmlsZVVwbG9hZD17dGhpcy5fb25GaWxlVXBsb2FkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0FkZCBEYXRhIFRvIE1hcCcsXG4gICAgICAgICAgICBjc3NTdHlsZTogTG9hZERhdGFNb2RhbFN0eWxlLFxuICAgICAgICAgICAgZm9vdGVyOiBmYWxzZSxcbiAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fY2xvc2VNb2RhbFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBFWFBPUlRfSU1BR0VfSUQ6XG4gICAgICAgICAgY29uc3Qge3JhdGlvLCBsZWdlbmQsIHJlc29sdXRpb24sIGV4cG9ydGluZywgaW1hZ2VEYXRhVXJpfSA9IHVpU3RhdGUuZXhwb3J0SW1hZ2U7XG4gICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICA8RXhwb3J0SW1hZ2VNb2RhbFxuICAgICAgICAgICAgICB3aWR0aD17Y29udGFpbmVyV31cbiAgICAgICAgICAgICAgaGVpZ2h0PXtjb250YWluZXJIfVxuICAgICAgICAgICAgICBsZWdlbmQ9e2xlZ2VuZH1cbiAgICAgICAgICAgICAgcmF0aW89e3JhdGlvfVxuICAgICAgICAgICAgICByZXNvbHV0aW9uPXtyZXNvbHV0aW9ufVxuICAgICAgICAgICAgICBleHBvcnRpbmc9e2V4cG9ydGluZ31cbiAgICAgICAgICAgICAgaW1hZ2VEYXRhVXJpPXtpbWFnZURhdGFVcml9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlUmF0aW89e3RoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMuc2V0UmF0aW99XG4gICAgICAgICAgICAgIG9uQ2hhbmdlUmVzb2x1dGlvbj17dGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy5zZXRSZXNvbHV0aW9ufVxuICAgICAgICAgICAgICBvblRvZ2dsZUxlZ2VuZD17dGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVMZWdlbmR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgIGNsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiAnRXhwb3J0IEltYWdlJyxcbiAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxuICAgICAgICAgICAgb25Db25maXJtOiB0aGlzLl9vbkV4cG9ydEltYWdlLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbjoge1xuICAgICAgICAgICAgICBsYXJnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IGV4cG9ydGluZyxcbiAgICAgICAgICAgICAgY2hpbGRyZW46ICdEb3dubG9hZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRVhQT1JUX0RBVEFfSUQ6XG5cbiAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgIDxFeHBvcnREYXRhTW9kYWxcbiAgICAgICAgICAgICAgey4uLnVpU3RhdGUuZXhwb3J0RGF0YX1cbiAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLl9jbG9zZU1vZGFsfVxuICAgICAgICAgICAgICBvbkNoYW5nZUV4cG9ydERhdGFUeXBlPXt0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnNldEV4cG9ydERhdGFUeXBlfVxuICAgICAgICAgICAgICBvbkNoYW5nZUV4cG9ydFNlbGVjdGVkRGF0YXNldD17dGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRTZWxlY3RlZERhdGFzZXR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0RmlsdGVyZWQ9e3RoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0RmlsdGVyZWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgIGNsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiAnRXhwb3J0IERhdGEnLFxuICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXG4gICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uRXhwb3J0RGF0YSxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcbiAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiAnRXhwb3J0J1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBFWFBPUlRfQ09ORklHX0lEOlxuICAgICAgICAgIGNvbnN0IGtlcGxlckdsQ29uZmlnID0gS2VwbGVyR2xTY2hlbWEuZ2V0Q29uZmlnVG9TYXZlKFxuICAgICAgICAgICAge21hcFN0eWxlLCB2aXNTdGF0ZSwgbWFwU3RhdGUsIHVpU3RhdGV9XG4gICAgICAgICAgKTtcbiAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgIDxFeHBvcnRDb25maWdNb2RhbFxuICAgICAgICAgICAgICBjb25maWc9e2tlcGxlckdsQ29uZmlnfVxuICAgICAgICAgICAgICBkYXRhPXt1aVN0YXRlLmV4cG9ydERhdGEuZGF0YX1cbiAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5fY2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2VFeHBvcnREYXRhPXt0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnNldEV4cG9ydERhdGF9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgIGNsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiAnRXhwb3J0IENvbmZpZycsXG4gICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcbiAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fb25FeHBvcnRDb25maWcsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogJ0V4cG9ydCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQUREX01BUF9TVFlMRV9JRDpcbiAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgIDxBZGRNYXBTdHlsZU1vZGFsXG4gICAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXt0aGlzLnByb3BzLm1hcGJveEFwaUFjY2Vzc1Rva2VufVxuICAgICAgICAgICAgICBtYXBTdGF0ZT17dGhpcy5wcm9wcy5tYXBTdGF0ZX1cbiAgICAgICAgICAgICAgaW5wdXRTdHlsZT17bWFwU3R5bGUuaW5wdXRTdHlsZX1cbiAgICAgICAgICAgICAgaW5wdXRNYXBTdHlsZT17dGhpcy5wcm9wcy5tYXBTdHlsZUFjdGlvbnMuaW5wdXRNYXBTdHlsZX1cbiAgICAgICAgICAgICAgbG9hZEN1c3RvbU1hcFN0eWxlPXt0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5sb2FkQ3VzdG9tTWFwU3R5bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgIGNsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiAnQWRkIEN1c3RvbSBNYXBib3ggU3R5bGUnLFxuICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXG4gICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uQWRkQ3VzdG9tTWFwU3R5bGUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogIW1hcFN0eWxlLmlucHV0U3R5bGUuc3R5bGUsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiAnQWRkIFN0eWxlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnJvb3ROb2RlID8gKFxuICAgICAgICA8TW9kYWxEaWFsb2dcbiAgICAgICAgICB7Li4ubW9kYWxQcm9wc31cbiAgICAgICAgICBwYXJlbnRTZWxlY3Rvcj17KCkgPT4gZmluZERPTU5vZGUocm9vdE5vZGUpfVxuICAgICAgICAgIGlzT3Blbj17Qm9vbGVhbihjdXJyZW50TW9kYWwpfVxuICAgICAgICAgIGNsb3NlPXt0aGlzLl9jbG9zZU1vZGFsfVxuICAgICAgICA+XG4gICAgICAgICAge3RlbXBsYXRlfVxuICAgICAgICA8L01vZGFsRGlhbG9nPlxuICAgICAgKSA6IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE1vZGFsV3JhcHBlcjtcbn1cbiJdfQ==