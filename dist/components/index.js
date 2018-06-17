'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icons = exports.LoadingSpinner = exports.Switch = exports.AppLogo = exports.ModalTitle = exports.ModalFooter = exports.Modal = exports.TimeRangeSlider = exports.RangeSlider = exports.FieldSelector = exports.ItemSelector = exports.FileUpload = exports.withState = exports.injector = exports.TimeWidgetFactory = exports.LoadDataModalFactory = exports.DataTableModalFactory = exports.IconInfoModalFactory = exports.DeleteDatasetModalFactory = exports.MapControlFactory = exports.MapPopoverFactory = exports.PanelHeaderFactory = exports.ModalContainerFactory = exports.BottomWidgetFactory = exports.MapContainerFactory = exports.SidePanelFactory = exports.injectComponents = exports.default = exports.KeplerGl = undefined;

var _container = require('./container');

Object.defineProperty(exports, 'KeplerGl', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_container).default;
  }
});
Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_container).default;
  }
});
Object.defineProperty(exports, 'injectComponents', {
  enumerable: true,
  get: function get() {
    return _container.injectComponents;
  }
});

var _sidePanel = require('./side-panel');

Object.defineProperty(exports, 'SidePanelFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sidePanel).default;
  }
});

var _mapContainer = require('./map-container');

Object.defineProperty(exports, 'MapContainerFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mapContainer).default;
  }
});

var _bottomWidget = require('./bottom-widget');

Object.defineProperty(exports, 'BottomWidgetFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bottomWidget).default;
  }
});

var _modalContainer = require('./modal-container');

Object.defineProperty(exports, 'ModalContainerFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modalContainer).default;
  }
});

var _panelHeader = require('./side-panel/panel-header');

Object.defineProperty(exports, 'PanelHeaderFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_panelHeader).default;
  }
});

var _mapPopover = require('./map/map-popover');

Object.defineProperty(exports, 'MapPopoverFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mapPopover).default;
  }
});

var _mapControl = require('./map/map-control');

Object.defineProperty(exports, 'MapControlFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mapControl).default;
  }
});

var _deleteDataModal = require('./modals/delete-data-modal');

Object.defineProperty(exports, 'DeleteDatasetModalFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_deleteDataModal).default;
  }
});

var _iconInfoModal = require('./modals/icon-info-modal');

Object.defineProperty(exports, 'IconInfoModalFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_iconInfoModal).default;
  }
});

var _dataTableModal = require('./modals/data-table-modal');

Object.defineProperty(exports, 'DataTableModalFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dataTableModal).default;
  }
});

var _loadDataModal = require('./modals/load-data-modal');

Object.defineProperty(exports, 'LoadDataModalFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadDataModal).default;
  }
});

var _timeWidget = require('./filters/time-widget');

Object.defineProperty(exports, 'TimeWidgetFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_timeWidget).default;
  }
});

var _injector = require('./injector');

Object.defineProperty(exports, 'injector', {
  enumerable: true,
  get: function get() {
    return _injector.injector;
  }
});
Object.defineProperty(exports, 'withState', {
  enumerable: true,
  get: function get() {
    return _injector.withState;
  }
});

var _fileUpload = require('./common/file-uploader/file-upload');

Object.defineProperty(exports, 'FileUpload', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fileUpload).default;
  }
});

var _itemSelector = require('./common/item-selector/item-selector');

Object.defineProperty(exports, 'ItemSelector', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_itemSelector).default;
  }
});

var _fieldSelector = require('./common/field-selector');

Object.defineProperty(exports, 'FieldSelector', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fieldSelector).default;
  }
});

var _rangeSlider = require('./common/range-slider');

Object.defineProperty(exports, 'RangeSlider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_rangeSlider).default;
  }
});

var _timeRangeSlider = require('./common/time-range-slider');

Object.defineProperty(exports, 'TimeRangeSlider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_timeRangeSlider).default;
  }
});

var _modal = require('./common/modal');

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modal).default;
  }
});
Object.defineProperty(exports, 'ModalFooter', {
  enumerable: true,
  get: function get() {
    return _modal.ModalFooter;
  }
});
Object.defineProperty(exports, 'ModalTitle', {
  enumerable: true,
  get: function get() {
    return _modal.ModalTitle;
  }
});

var _logo = require('./common/logo');

Object.defineProperty(exports, 'AppLogo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_logo).default;
  }
});

var _switch = require('./common/switch');

Object.defineProperty(exports, 'Switch', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_switch).default;
  }
});

var _loadingSpinner = require('./common/loading-spinner');

Object.defineProperty(exports, 'LoadingSpinner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingSpinner).default;
  }
});

var _styledComponents = require('./common/styled-components');

Object.keys(_styledComponents).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _styledComponents[key];
    }
  });
});

var _icons = require('./common/icons');

var _Icons = _interopRequireWildcard(_icons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Icons = _Icons;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJpbmplY3RDb21wb25lbnRzIiwiaW5qZWN0b3IiLCJ3aXRoU3RhdGUiLCJNb2RhbEZvb3RlciIsIk1vZGFsVGl0bGUiLCJJY29ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzhDQXFCUUEsTzs7Ozs7OzhDQUFxQkEsTzs7Ozs7O3NCQUFTQyxnQjs7Ozs7Ozs7OzhDQUc5QkQsTzs7Ozs7Ozs7O2lEQUNBQSxPOzs7Ozs7Ozs7aURBQ0FBLE87Ozs7Ozs7OzttREFDQUEsTzs7Ozs7Ozs7O2dEQUdBQSxPOzs7Ozs7Ozs7K0NBR0FBLE87Ozs7Ozs7OzsrQ0FDQUEsTzs7Ozs7Ozs7O29EQUdBQSxPOzs7Ozs7Ozs7a0RBQ0FBLE87Ozs7Ozs7OzttREFDQUEsTzs7Ozs7Ozs7O2tEQUNBQSxPOzs7Ozs7Ozs7K0NBR0FBLE87Ozs7Ozs7OztxQkFJTkUsUTs7Ozs7O3FCQUNBQyxTOzs7Ozs7Ozs7K0NBSU1ILE87Ozs7Ozs7OztpREFDQUEsTzs7Ozs7Ozs7O2tEQUNBQSxPOzs7Ozs7Ozs7Z0RBQ0FBLE87Ozs7Ozs7OztvREFDQUEsTzs7Ozs7Ozs7OzBDQUNBQSxPOzs7Ozs7a0JBQWtCSSxXOzs7Ozs7a0JBQWFDLFU7Ozs7Ozs7Ozt5Q0FDL0JMLE87Ozs7Ozs7OzsyQ0FDQUEsTzs7Ozs7Ozs7O21EQUNBQSxPOzs7Ozs7QUFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7UUFDWU0sSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8vIENvbXBvbmVudHNcbmV4cG9ydCB7ZGVmYXVsdCBhcyBLZXBsZXJHbCwgZGVmYXVsdCwgaW5qZWN0Q29tcG9uZW50c30gZnJvbSAnLi9jb250YWluZXInO1xuXG4vLyBmYWN0b3JpZXNcbmV4cG9ydCB7ZGVmYXVsdCBhcyBTaWRlUGFuZWxGYWN0b3J5fSBmcm9tICcuL3NpZGUtcGFuZWwnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIE1hcENvbnRhaW5lckZhY3Rvcnl9IGZyb20gJy4vbWFwLWNvbnRhaW5lcic7XG5leHBvcnQge2RlZmF1bHQgYXMgQm90dG9tV2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi9ib3R0b20td2lkZ2V0JztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBNb2RhbENvbnRhaW5lckZhY3Rvcnl9IGZyb20gJy4vbW9kYWwtY29udGFpbmVyJztcblxuLy8gLy8gc2lkZSBwYW5lbCBmYWN0b3JpZXNcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQYW5lbEhlYWRlckZhY3Rvcnl9IGZyb20gJy4vc2lkZS1wYW5lbC9wYW5lbC1oZWFkZXInXG5cbi8vIC8vIG1hcCBjb250YWluZXIgZmFjdG9yaWVzXG5leHBvcnQge2RlZmF1bHQgYXMgTWFwUG9wb3ZlckZhY3Rvcnl9IGZyb20gJy4vbWFwL21hcC1wb3BvdmVyJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBNYXBDb250cm9sRmFjdG9yeX0gZnJvbSAnLi9tYXAvbWFwLWNvbnRyb2wnO1xuXG4vLyAvLyBtb2RhbCBjb250YWluZXIgZmFjdG9yaWVzXG5leHBvcnQge2RlZmF1bHQgYXMgRGVsZXRlRGF0YXNldE1vZGFsRmFjdG9yeX0gZnJvbSAnLi9tb2RhbHMvZGVsZXRlLWRhdGEtbW9kYWwnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEljb25JbmZvTW9kYWxGYWN0b3J5fSBmcm9tICcuL21vZGFscy9pY29uLWluZm8tbW9kYWwnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIERhdGFUYWJsZU1vZGFsRmFjdG9yeX0gZnJvbSAnLi9tb2RhbHMvZGF0YS10YWJsZS1tb2RhbCc7XG5leHBvcnQge2RlZmF1bHQgYXMgTG9hZERhdGFNb2RhbEZhY3Rvcnl9IGZyb20gJy4vbW9kYWxzL2xvYWQtZGF0YS1tb2RhbCc7XG5cbi8vIC8vIEJvdHRvbSB3aWRnZXQgZmFjdG9yeVxuZXhwb3J0IHtkZWZhdWx0IGFzIFRpbWVXaWRnZXRGYWN0b3J5fSBmcm9tICcuL2ZpbHRlcnMvdGltZS13aWRnZXQnO1xuXG4vLyBJbmplY3RvclxuZXhwb3J0IHtcbiAgaW5qZWN0b3IgYXMgaW5qZWN0b3IsXG4gIHdpdGhTdGF0ZSBhcyB3aXRoU3RhdGVcbn0gZnJvbSAnLi9pbmplY3RvcidcblxuLy8gQ29tbW9uIENvbXBvbmVudHNcbmV4cG9ydCB7ZGVmYXVsdCBhcyBGaWxlVXBsb2FkfSBmcm9tICcuL2NvbW1vbi9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBJdGVtU2VsZWN0b3J9IGZyb20gJy4vY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5leHBvcnQge2RlZmF1bHQgYXMgRmllbGRTZWxlY3Rvcn0gZnJvbSAnLi9jb21tb24vZmllbGQtc2VsZWN0b3InO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFJhbmdlU2xpZGVyfSBmcm9tICcuL2NvbW1vbi9yYW5nZS1zbGlkZXInO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFRpbWVSYW5nZVNsaWRlcn0gZnJvbSAnLi9jb21tb24vdGltZS1yYW5nZS1zbGlkZXInO1xuZXhwb3J0IHtkZWZhdWx0IGFzIE1vZGFsLCBNb2RhbEZvb3RlciwgTW9kYWxUaXRsZX0gZnJvbSAnLi9jb21tb24vbW9kYWwnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEFwcExvZ299IGZyb20gJy4vY29tbW9uL2xvZ28nO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFN3aXRjaH0gZnJvbSAnLi9jb21tb24vc3dpdGNoJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBMb2FkaW5nU3Bpbm5lcn0gZnJvbSAnLi9jb21tb24vbG9hZGluZy1zcGlubmVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmV4cG9ydCAqIGFzIEljb25zIGZyb20gJy4vY29tbW9uL2ljb25zJztcblxuIl19