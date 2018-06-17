'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setExportDataUpdater = exports.setExportConfigUpdater = exports.setExportFilteredUpdater = exports.setExportDataTypeUpdater = exports.setExportSelectedDatasetUpdater = exports.cleanupExportImage = exports.setExportImageDataUri = exports.startExportingImage = exports.setResolutionUpdater = exports.setRatioUpdater = exports.toggleLegendUpdater = exports.openDeleteModalUpdater = exports.toggleMapControlUpdater = exports.toggleModalUpdater = exports.toggleSidePanelUpdater = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _defaultSettings = require('../constants/default-settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Updaters */
var toggleSidePanelUpdater = exports.toggleSidePanelUpdater = function toggleSidePanelUpdater(state, _ref) {
  var id = _ref.payload;

  if (id === state.activeSidePanel) {
    return state;
  }

  if (id === _defaultSettings.LAYER_CONFIG_ID) {
    return (0, _extends4.default)({}, state, {
      currentModal: id
    });
  }

  return (0, _extends4.default)({}, state, {
    activeSidePanel: id
  });
}; // Copyright (c) 2018 Uber Technologies, Inc.
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

var toggleModalUpdater = exports.toggleModalUpdater = function toggleModalUpdater(state, _ref2) {
  var id = _ref2.payload;
  return (0, _extends4.default)({}, state, {
    currentModal: id
  });
};

var toggleMapControlUpdater = exports.toggleMapControlUpdater = function toggleMapControlUpdater(state, _ref3) {
  var panelId = _ref3.payload;
  return (0, _extends4.default)({}, state, {
    mapControls: (0, _extends4.default)({}, state.mapControls, (0, _defineProperty3.default)({}, panelId, (0, _extends4.default)({}, state.mapControls[panelId], {
      active: !state.mapControls[panelId].active
    })))
  });
};

var openDeleteModalUpdater = exports.openDeleteModalUpdater = function openDeleteModalUpdater(state, _ref4) {
  var datasetKeyToRemove = _ref4.payload;
  return (0, _extends4.default)({}, state, {
    currentModal: _defaultSettings.DELETE_DATA_ID,
    datasetKeyToRemove: datasetKeyToRemove
  });
};

var toggleLegendUpdater = exports.toggleLegendUpdater = function toggleLegendUpdater(state) {
  return (0, _extends4.default)({}, state, {
    exportImage: (0, _extends4.default)({}, state.exportImage, {
      legend: !state.exportImage.legend
    })
  });
};

var setRatioUpdater = exports.setRatioUpdater = function setRatioUpdater(state, _ref5) {
  var payload = _ref5.payload;
  return (0, _extends4.default)({}, state, {
    exportImage: (0, _extends4.default)({}, state.exportImage, {
      ratio: payload.ratio
    })
  });
};

var setResolutionUpdater = exports.setResolutionUpdater = function setResolutionUpdater(state, _ref6) {
  var payload = _ref6.payload;
  return (0, _extends4.default)({}, state, {
    exportImage: (0, _extends4.default)({}, state.exportImage, {
      resolution: payload.resolution
    })
  });
};

var startExportingImage = exports.startExportingImage = function startExportingImage(state) {
  return (0, _extends4.default)({}, state, {
    exportImage: (0, _extends4.default)({}, state.exportImage, {
      exporting: true,
      imageDataUri: ''
    })
  });
};

var setExportImageDataUri = exports.setExportImageDataUri = function setExportImageDataUri(state, _ref7) {
  var payload = _ref7.payload;
  return (0, _extends4.default)({}, state, {
    exportImage: (0, _extends4.default)({}, state.exportImage, {
      exporting: false,
      imageDataUri: payload.dataUri
    })
  });
};

var cleanupExportImage = exports.cleanupExportImage = function cleanupExportImage(state) {
  return (0, _extends4.default)({}, state, {
    exportImage: (0, _extends4.default)({}, state.exportImage, {
      exporting: false,
      imageDataUri: ''
    })
  });
};

var setExportSelectedDatasetUpdater = exports.setExportSelectedDatasetUpdater = function setExportSelectedDatasetUpdater(state, _ref8) {
  var payload = _ref8.payload;
  return (0, _extends4.default)({}, state, {
    exportData: (0, _extends4.default)({}, state.exportData, {
      selectedDataset: payload.dataset
    })
  });
};

var setExportDataTypeUpdater = exports.setExportDataTypeUpdater = function setExportDataTypeUpdater(state, _ref9) {
  var payload = _ref9.payload;
  return (0, _extends4.default)({}, state, {
    exportData: (0, _extends4.default)({}, state.exportData, {
      dataType: payload.dataType
    })
  });
};

var setExportFilteredUpdater = exports.setExportFilteredUpdater = function setExportFilteredUpdater(state, _ref10) {
  var payload = _ref10.payload;
  return (0, _extends4.default)({}, state, {
    exportData: (0, _extends4.default)({}, state.exportData, {
      filtered: payload.filtered
    })
  });
};

var setExportConfigUpdater = exports.setExportConfigUpdater = function setExportConfigUpdater(state, action) {
  return (0, _extends4.default)({}, state, {
    exportData: (0, _extends4.default)({}, state.exportData, {
      config: !state.exportData.config
    })
  });
};

var setExportDataUpdater = exports.setExportDataUpdater = function setExportDataUpdater(state, action) {
  return (0, _extends4.default)({}, state, {
    exportData: (0, _extends4.default)({}, state.exportData, {
      data: !state.exportData.data
    })
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy91aS1zdGF0ZS11cGRhdGVycy5qcyJdLCJuYW1lcyI6WyJ0b2dnbGVTaWRlUGFuZWxVcGRhdGVyIiwic3RhdGUiLCJpZCIsInBheWxvYWQiLCJhY3RpdmVTaWRlUGFuZWwiLCJMQVlFUl9DT05GSUdfSUQiLCJjdXJyZW50TW9kYWwiLCJ0b2dnbGVNb2RhbFVwZGF0ZXIiLCJ0b2dnbGVNYXBDb250cm9sVXBkYXRlciIsInBhbmVsSWQiLCJtYXBDb250cm9scyIsImFjdGl2ZSIsIm9wZW5EZWxldGVNb2RhbFVwZGF0ZXIiLCJkYXRhc2V0S2V5VG9SZW1vdmUiLCJERUxFVEVfREFUQV9JRCIsInRvZ2dsZUxlZ2VuZFVwZGF0ZXIiLCJleHBvcnRJbWFnZSIsImxlZ2VuZCIsInNldFJhdGlvVXBkYXRlciIsInJhdGlvIiwic2V0UmVzb2x1dGlvblVwZGF0ZXIiLCJyZXNvbHV0aW9uIiwic3RhcnRFeHBvcnRpbmdJbWFnZSIsImV4cG9ydGluZyIsImltYWdlRGF0YVVyaSIsInNldEV4cG9ydEltYWdlRGF0YVVyaSIsImRhdGFVcmkiLCJjbGVhbnVwRXhwb3J0SW1hZ2UiLCJzZXRFeHBvcnRTZWxlY3RlZERhdGFzZXRVcGRhdGVyIiwiZXhwb3J0RGF0YSIsInNlbGVjdGVkRGF0YXNldCIsImRhdGFzZXQiLCJzZXRFeHBvcnREYXRhVHlwZVVwZGF0ZXIiLCJkYXRhVHlwZSIsInNldEV4cG9ydEZpbHRlcmVkVXBkYXRlciIsImZpbHRlcmVkIiwic2V0RXhwb3J0Q29uZmlnVXBkYXRlciIsImFjdGlvbiIsImNvbmZpZyIsInNldEV4cG9ydERhdGFVcGRhdGVyIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOzs7O0FBRUE7QUFDTyxJQUFNQSwwREFBeUIsU0FBekJBLHNCQUF5QixDQUFDQyxLQUFELFFBQTBCO0FBQUEsTUFBUkMsRUFBUSxRQUFqQkMsT0FBaUI7O0FBQzlELE1BQUlELE9BQU9ELE1BQU1HLGVB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QSxDQUF4Qzs7QUFRQSxJQUFNQyw4REFBMkIsU0FBM0JBLHdCQUEyQixDQUFDL0IsS0FBRDtBQUFBLE1BQVNFLE9BQVQsU0FBU0EsT0FBVDtBQUFBLG9DQUNuQ0YsS0FEbUM7QUFFdEM0QiwyQ0FDSzVCLE1BQU00QixVQURYO0FBRUVJLGdCQUFVOUIsUUFBUThCO0FBRnBCO0FBRnNDO0FBQUEsQ0FBakM7O0FBUUEsSUFBTUMsOERBQTJCLFNBQTNCQSx3QkFBMkIsQ0FBQ2pDLEtBQUQ7QUFBQSxNQUFTRSxPQUFULFVBQVNBLE9BQVQ7QUFBQSxvQ0FDbkNGLEtBRG1DO0FBRXRDNEIsMkNBQ0s1QixNQUFNNEIsVUFEWDtBQUVFTSxnQkFBVWhDLFFBQVFnQztBQUZwQjtBQUZzQztBQUFBLENBQWpDOztBQVFBLElBQU1DLDBEQUF5QixTQUF6QkEsc0JBQXlCLENBQUNuQyxLQUFELEVBQVFvQyxNQUFSO0FBQUEsb0NBQ2pDcEMsS0FEaUM7QUFFcEM0QiwyQ0FDSzVCLE1BQU00QixVQURYO0FBRUVTLGNBQVEsQ0FBQ3JDLE1BQU00QixVQUFOLENBQWlCUztBQUY1QjtBQUZvQztBQUFBLENBQS9COztBQVFBLElBQU1DLHNEQUF1QixTQUF2QkEsb0JBQXVCLENBQUN0QyxLQUFELEVBQVFvQyxNQUFSO0FBQUEsb0NBQy9CcEMsS0FEK0I7QUFFbEM0QiwyQ0FDSzVCLE1BQU00QixVQURYO0FBRUVXLFlBQU0sQ0FBQ3ZDLE1BQU00QixVQUFOLENBQWlCVztBQUYxQjtBQUZrQztBQUFBLENBQTdCIiwiZmlsZSI6InVpLXN0YXRlLXVwZGF0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE4IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtMQVlFUl9DT05GSUdfSUQsIERFTEVURV9EQVRBX0lEfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbi8qIFVwZGF0ZXJzICovXG5leHBvcnQgY29uc3QgdG9nZ2xlU2lkZVBhbmVsVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IGlkfSkgPT4ge1xuICBpZiAoaWQgPT09IHN0YXRlLmFjdGl2ZVNpZGVQYW5lbCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGlmIChpZCA9PT0gTEFZRVJfQ09ORklHX0lEKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgY3VycmVudE1vZGFsOiBpZFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGFjdGl2ZVNpZGVQYW5lbDogaWRcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVNb2RhbFVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBpZH0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBjdXJyZW50TW9kYWw6IGlkXG59KTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZU1hcENvbnRyb2xVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogcGFuZWxJZH0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBtYXBDb250cm9sczoge1xuICAgIC4uLnN0YXRlLm1hcENvbnRyb2xzLFxuICAgIFtwYW5lbElkXToge1xuICAgICAgLi4uc3RhdGUubWFwQ29udHJvbHNbcGFuZWxJZF0sXG4gICAgICBhY3RpdmU6ICFzdGF0ZS5tYXBDb250cm9sc1twYW5lbElkXS5hY3RpdmVcbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3Qgb3BlbkRlbGV0ZU1vZGFsVXBkYXRlciA9IChcbiAgc3RhdGUsXG4gIHtwYXlsb2FkOiBkYXRhc2V0S2V5VG9SZW1vdmV9XG4pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBjdXJyZW50TW9kYWw6IERFTEVURV9EQVRBX0lELFxuICBkYXRhc2V0S2V5VG9SZW1vdmVcbn0pO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlTGVnZW5kVXBkYXRlciA9IHN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnRJbWFnZToge1xuICAgIC4uLnN0YXRlLmV4cG9ydEltYWdlLFxuICAgIGxlZ2VuZDogIXN0YXRlLmV4cG9ydEltYWdlLmxlZ2VuZFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHNldFJhdGlvVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWR9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0SW1hZ2U6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnRJbWFnZSxcbiAgICByYXRpbzogcGF5bG9hZC5yYXRpb1xuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHNldFJlc29sdXRpb25VcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZH0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnRJbWFnZToge1xuICAgIC4uLnN0YXRlLmV4cG9ydEltYWdlLFxuICAgIHJlc29sdXRpb246IHBheWxvYWQucmVzb2x1dGlvblxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHN0YXJ0RXhwb3J0aW5nSW1hZ2UgPSBzdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0SW1hZ2U6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnRJbWFnZSxcbiAgICBleHBvcnRpbmc6IHRydWUsXG4gICAgaW1hZ2VEYXRhVXJpOiAnJ1xuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydEltYWdlRGF0YVVyaSA9IChzdGF0ZSwge3BheWxvYWR9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0SW1hZ2U6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnRJbWFnZSxcbiAgICBleHBvcnRpbmc6IGZhbHNlLFxuICAgIGltYWdlRGF0YVVyaTogcGF5bG9hZC5kYXRhVXJpXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgY2xlYW51cEV4cG9ydEltYWdlID0gc3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGV4cG9ydEltYWdlOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0SW1hZ2UsXG4gICAgZXhwb3J0aW5nOiBmYWxzZSxcbiAgICBpbWFnZURhdGFVcmk6ICcnXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0U2VsZWN0ZWREYXRhc2V0VXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWR9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0RGF0YToge1xuICAgIC4uLnN0YXRlLmV4cG9ydERhdGEsXG4gICAgc2VsZWN0ZWREYXRhc2V0OiBwYXlsb2FkLmRhdGFzZXRcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXRFeHBvcnREYXRhVHlwZVVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkfSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGV4cG9ydERhdGE6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnREYXRhLFxuICAgIGRhdGFUeXBlOiBwYXlsb2FkLmRhdGFUeXBlXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0RmlsdGVyZWRVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZH0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnREYXRhOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0RGF0YSxcbiAgICBmaWx0ZXJlZDogcGF5bG9hZC5maWx0ZXJlZFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydENvbmZpZ1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGV4cG9ydERhdGE6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnREYXRhLFxuICAgIGNvbmZpZzogIXN0YXRlLmV4cG9ydERhdGEuY29uZmlnXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0RGF0YVVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGV4cG9ydERhdGE6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnREYXRhLFxuICAgIGRhdGE6ICFzdGF0ZS5leHBvcnREYXRhLmRhdGFcbiAgfVxufSk7XG4iXX0=