'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStyleReducerFactory = exports.INITIAL_MAP_STYLE = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _actionHandler; // Copyright (c) 2018 Uber Technologies, Inc.
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

// Actions


var _reduxActions = require('redux-actions');

var _actionTypes = require('../constants/action-types');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _mapStyleUpdaters = require('./map-style-updaters');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// bedrock browserInit flattens our immutable object into a plain object
// we have to recreate the state after the app is loaded
var getDefaultState = function getDefaultState() {
  var visibleLayerGroups = {};
  var styleType = 'dark';
  var topLayerGroups = {};

  return {
    styleType: styleType,
    visibleLayerGroups: visibleLayerGroups,
    topLayerGroups: topLayerGroups,
    mapStyles: {},
    // save mapbox access token
    mapboxApiAccessToken: null,
    inputStyle: (0, _mapStyleUpdaters.getInitialInputStyle)()
  };
};

var INITIAL_MAP_STYLE = exports.INITIAL_MAP_STYLE = getDefaultState();

var actionHandler = (_actionHandler = {}, (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.INIT, _mapStyleUpdaters.initMapStyleUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.INPUT_MAP_STYLE, _mapStyleUpdaters.inputMapStyleUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.MAP_CONFIG_CHANGE, _mapStyleUpdaters.mapConfigChangeUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.MAP_STYLE_CHANGE, _mapStyleUpdaters.mapStyleChangeUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.LOAD_MAP_STYLES, _mapStyleUpdaters.loadMapStylesUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.LOAD_MAP_STYLE_ERR, _mapStyleUpdaters.loadMapStyleErrUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.RECEIVE_MAP_CONFIG, _mapStyleUpdaters.receiveMapConfigUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.LOAD_CUSTOM_MAP_STYLE, _mapStyleUpdaters.loadCustomMapStyleUpdater), (0, _defineProperty3.default)(_actionHandler, _actionTypes2.default.ADD_CUSTOM_MAP_STYLE, _mapStyleUpdaters.addCustomMapStyleUpdater), _actionHandler);

var mapStyleReducerFactory = exports.mapStyleReducerFactory = function mapStyleReducerFactory() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _reduxActions.handleActions)(actionHandler, (0, _extends3.default)({}, INITIAL_MAP_STYLE, initialState, { initialState: initialState }));
};

exports.default = mapStyleReducerFactory();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9tYXAtc3R5bGUuanMiXSwibmFtZXMiOlsiZ2V0RGVmYXVsdFN0YXRlIiwidmlzaWJsZUxheWVyR3JvdXBzIiwic3R5bGVUeXBlIiwidG9wTGF5ZXJHcm91cHMiLCJtYXBTdHlsZXMiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsImlucHV0U3R5bGUiLCJJTklUSUFMX01BUF9TVFlMRSIsImFjdGlvbkhhbmRsZXIiLCJBY3Rpb25UeXBlcyIsIklOSVQiLCJpbml0TWFwU3R5bGVVcGRhdGVyIiwiSU5QVVRfTUFQX1NUWUxFIiwiaW5wdXRNYXBTdHlsZVVwZGF0ZXIiLCJNQVBfQ09ORklHX0NIQU5HRSIsIm1hcENvbmZpZ0NoYW5nZVVwZGF0ZXIiLCJNQVBfU1RZTEVfQ0hBTkdFIiwibWFwU3R5bGVDaGFuZ2VVcGRhdGVyIiwiTE9BRF9NQVBfU1RZTEVTIiwibG9hZE1hcFN0eWxlc1VwZGF0ZXIiLCJMT0FEX01BUF9TVFlMRV9FUlIiLCJsb2FkTWFwU3R5bGVFcnJVcGRhdGVyIiwiUkVDRUlWRV9NQVBfQ09ORklHIiwicmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIiLCJMT0FEX0NVU1RPTV9NQVBfU1RZTEUiLCJsb2FkQ3VzdG9tTWFwU3R5bGVVcGRhdGVyIiwiQUREX0NVU1RPTV9NQVBfU1RZTEUiLCJhZGRDdXN0b21NYXBTdHlsZVVwZGF0ZXIiLCJtYXBTdHlsZVJlZHVjZXJGYWN0b3J5IiwiaW5pdGlhbFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7b0JBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7OztBQUZBOztBQUdBOzs7O0FBRUE7Ozs7QUFhQTtBQUNBO0FBQ0EsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLE1BQU1DLHFCQUFxQixFQUEzQjtBQUNBLE1BQU1DLFlBQVksTUFBbEI7QUFDQSxNQUFNQyxpQkFBaUIsRUFBdkI7O0FBRUEsU0FBTztBQUNMRCx3QkFESztBQUVMRCwwQ0FGSztBQUdMRSxrQ0FISztBQUlMQyxlQUFXLEVBSk47QUFLTDtBQUNBQywwQkFBc0IsSUFOakI7QUFPTEMsZ0JBQVk7QUFQUCxHQUFQO0FBU0QsQ0FkRDs7QUFnQk8sSUFBTUMsZ0RBQW9CUCxpQkFBMUI7O0FBRVAsSUFBTVEsb0ZBQ0hDLHNCQUFZQyxJQURULEVBQ2dCQyxxQ0FEaEIsaURBRUhGLHNCQUFZRyxlQUZULEVBRTJCQyxzQ0FGM0IsaURBR0hKLHNCQUFZSyxpQkFIVCxFQUc2QkMsd0NBSDdCLGlEQUlITixzQkFBWU8sZ0JBSlQsRUFJNEJDLHVDQUo1QixpREFLSFIsc0JBQVlTLGVBTFQsRUFLMkJDLHNDQUwzQixpREFNSFYsc0JBQVlXLGtCQU5ULEVBTThCQyx3Q0FOOUIsaURBT0haLHNCQUFZYSxrQkFQVCxFQU84QkMseUNBUDlCLGlEQVFIZCxzQkFBWWUscUJBUlQsRUFRaUNDLDJDQVJqQyxpREFTSGhCLHNCQUFZaUIsb0JBVFQsRUFTZ0NDLDBDQVRoQyxrQkFBTjs7QUFZTyxJQUFNQywwREFBeUIsU0FBekJBLHNCQUF5QjtBQUFBLE1BQUNDLFlBQUQsdUVBQWdCLEVBQWhCO0FBQUEsU0FDcEMsaUNBQWNyQixhQUFkLDZCQUFpQ0QsaUJBQWpDLEVBQXVEc0IsWUFBdkQsSUFBcUVBLDBCQUFyRSxJQURvQztBQUFBLENBQS9COztrQkFHUUQsd0IiLCJmaWxlIjoibWFwLXN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE4IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtoYW5kbGVBY3Rpb25zfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcblxuLy8gQWN0aW9uc1xuaW1wb3J0IEFjdGlvblR5cGVzIGZyb20gJ2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5pbXBvcnQge1xuICBnZXRJbml0aWFsSW5wdXRTdHlsZSxcbiAgaW5wdXRNYXBTdHlsZVVwZGF0ZXIsXG4gIGluaXRNYXBTdHlsZVVwZGF0ZXIsXG4gIG1hcENvbmZpZ0NoYW5nZVVwZGF0ZXIsXG4gIG1hcFN0eWxlQ2hhbmdlVXBkYXRlcixcbiAgbG9hZE1hcFN0eWxlc1VwZGF0ZXIsXG4gIGxvYWRNYXBTdHlsZUVyclVwZGF0ZXIsXG4gIHJlY2VpdmVNYXBDb25maWdVcGRhdGVyLFxuICBsb2FkQ3VzdG9tTWFwU3R5bGVVcGRhdGVyLFxuICBhZGRDdXN0b21NYXBTdHlsZVVwZGF0ZXJcbn0gZnJvbSAnLi9tYXAtc3R5bGUtdXBkYXRlcnMnO1xuXG4vLyBiZWRyb2NrIGJyb3dzZXJJbml0IGZsYXR0ZW5zIG91ciBpbW11dGFibGUgb2JqZWN0IGludG8gYSBwbGFpbiBvYmplY3Rcbi8vIHdlIGhhdmUgdG8gcmVjcmVhdGUgdGhlIHN0YXRlIGFmdGVyIHRoZSBhcHAgaXMgbG9hZGVkXG5jb25zdCBnZXREZWZhdWx0U3RhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IHZpc2libGVMYXllckdyb3VwcyA9IHt9O1xuICBjb25zdCBzdHlsZVR5cGUgPSAnZGFyayc7XG4gIGNvbnN0IHRvcExheWVyR3JvdXBzID0ge307XG5cbiAgcmV0dXJuIHtcbiAgICBzdHlsZVR5cGUsXG4gICAgdmlzaWJsZUxheWVyR3JvdXBzLFxuICAgIHRvcExheWVyR3JvdXBzLFxuICAgIG1hcFN0eWxlczoge30sXG4gICAgLy8gc2F2ZSBtYXBib3ggYWNjZXNzIHRva2VuXG4gICAgbWFwYm94QXBpQWNjZXNzVG9rZW46IG51bGwsXG4gICAgaW5wdXRTdHlsZTogZ2V0SW5pdGlhbElucHV0U3R5bGUoKVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfTUFQX1NUWUxFID0gZ2V0RGVmYXVsdFN0YXRlKCk7XG5cbmNvbnN0IGFjdGlvbkhhbmRsZXIgPSB7XG4gIFtBY3Rpb25UeXBlcy5JTklUXTogaW5pdE1hcFN0eWxlVXBkYXRlcixcbiAgW0FjdGlvblR5cGVzLklOUFVUX01BUF9TVFlMRV06IGlucHV0TWFwU3R5bGVVcGRhdGVyLFxuICBbQWN0aW9uVHlwZXMuTUFQX0NPTkZJR19DSEFOR0VdOiBtYXBDb25maWdDaGFuZ2VVcGRhdGVyLFxuICBbQWN0aW9uVHlwZXMuTUFQX1NUWUxFX0NIQU5HRV06IG1hcFN0eWxlQ2hhbmdlVXBkYXRlcixcbiAgW0FjdGlvblR5cGVzLkxPQURfTUFQX1NUWUxFU106IGxvYWRNYXBTdHlsZXNVcGRhdGVyLFxuICBbQWN0aW9uVHlwZXMuTE9BRF9NQVBfU1RZTEVfRVJSXTogbG9hZE1hcFN0eWxlRXJyVXBkYXRlcixcbiAgW0FjdGlvblR5cGVzLlJFQ0VJVkVfTUFQX0NPTkZJR106IHJlY2VpdmVNYXBDb25maWdVcGRhdGVyLFxuICBbQWN0aW9uVHlwZXMuTE9BRF9DVVNUT01fTUFQX1NUWUxFXTogbG9hZEN1c3RvbU1hcFN0eWxlVXBkYXRlcixcbiAgW0FjdGlvblR5cGVzLkFERF9DVVNUT01fTUFQX1NUWUxFXTogYWRkQ3VzdG9tTWFwU3R5bGVVcGRhdGVyXG59O1xuXG5leHBvcnQgY29uc3QgbWFwU3R5bGVSZWR1Y2VyRmFjdG9yeSA9IChpbml0aWFsU3RhdGUgPSB7fSkgPT5cbiAgaGFuZGxlQWN0aW9ucyhhY3Rpb25IYW5kbGVyLCB7Li4uSU5JVElBTF9NQVBfU1RZTEUsIC4uLmluaXRpYWxTdGF0ZSwgaW5pdGlhbFN0YXRlfSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1hcFN0eWxlUmVkdWNlckZhY3RvcnkoKTtcbiJdfQ==