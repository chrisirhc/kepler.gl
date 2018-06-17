'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propertiesV0 = exports.customMapStylePropsV1 = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _mapStyleSchema; // Copyright (c) 2018 Uber Technologies, Inc.
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

var _versions = require('./versions');

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customMapStylePropsV1 = exports.customMapStylePropsV1 = {
  accessToken: null,
  custom: null,
  icon: null,
  id: null,
  label: null,
  url: null
};

var CustomMapStyleSchema = new _schema2.default({
  version: _versions.VERSIONS.v1,
  key: 'customStyle',
  properties: customMapStylePropsV1
});

var MapStyleSchemaV1 = function (_Schema) {
  (0, _inherits3.default)(MapStyleSchemaV1, _Schema);

  function MapStyleSchemaV1() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MapStyleSchemaV1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MapStyleSchemaV1.__proto__ || Object.getPrototypeOf(MapStyleSchemaV1)).call.apply(_ref, [this].concat(args))), _this), _this.version = _versions.VERSIONS.v1, _this.key = 'mapStyles', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MapStyleSchemaV1, [{
    key: 'save',
    value: function save(mapStyles, mapStyle) {

      // save all custom styles
      var saveCustomStyle = Object.keys(mapStyles).reduce(function (accu, key) {
        return (0, _extends3.default)({}, mapStyles[key].custom ? (0, _defineProperty3.default)({}, key, CustomMapStyleSchema.save(mapStyles[key]).customStyle) : {});
      }, {});

      return (0, _defineProperty3.default)({}, this.key, saveCustomStyle);
    }
  }, {
    key: 'load',
    value: function load(mapStyles) {
      return (0, _defineProperty3.default)({}, this.key, mapStyles);
    }
  }]);
  return MapStyleSchemaV1;
}(_schema2.default);

// version v0


var propertiesV0 = exports.propertiesV0 = {
  styleType: null,
  topLayerGroups: null,
  visibleLayerGroups: null,
  buildingLayer: null,
  mapStyles: new MapStyleSchemaV1()
};

var mapStyleSchema = (_mapStyleSchema = {}, (0, _defineProperty3.default)(_mapStyleSchema, _versions.VERSIONS.v0, new _schema2.default({
  version: _versions.VERSIONS.v0,
  properties: propertiesV0,
  key: 'mapStyle'
})), (0, _defineProperty3.default)(_mapStyleSchema, _versions.VERSIONS.v1, new _schema2.default({
  version: _versions.VERSIONS.v1,
  properties: propertiesV0,
  key: 'mapStyle'
})), _mapStyleSchema);

exports.default = mapStyleSchema;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL21hcC1zdHlsZS1zY2hlbWEuanMiXSwibmFtZXMiOlsiY3VzdG9tTWFwU3R5bGVQcm9wc1YxIiwiYWNjZXNzVG9rZW4iLCJjdXN0b20iLCJpY29uIiwiaWQiLCJsYWJlbCIsInVybCIsIkN1c3RvbU1hcFN0eWxlU2NoZW1hIiwiU2NoZW1hIiwidmVyc2lvbiIsIlZFUlNJT05TIiwidjEiLCJrZXkiLCJwcm9wZXJ0aWVzIiwiTWFwU3R5bGVTY2hlbWFWMSIsIm1hcFN0eWxlcyIsIm1hcFN0eWxlIiwic2F2ZUN1c3RvbVN0eWxlIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsImFjY3UiLCJzYXZlIiwiY3VzdG9tU3R5bGUiLCJwcm9wZXJ0aWVzVjAiLCJzdHlsZVR5cGUiLCJ0b3BMYXllckdyb3VwcyIsInZpc2libGVMYXllckdyb3VwcyIsImJ1aWxkaW5nTGF5ZXIiLCJtYXBTdHlsZVNjaGVtYSIsInYwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSx3REFBd0I7QUFDbkNDLGVBQWEsSUFEc0I7QUFFbkNDLFVBQVEsSUFGMkI7QUFHbkNDLFFBQU0sSUFINkI7QUFJbkNDLE1BQUksSUFKK0I7QUFLbkNDLFNBQU8sSUFMNEI7QUFNbkNDLE9BQUs7QUFOOEIsQ0FBOUI7O0FBU1AsSUFBTUMsdUJBQXVCLElBQUlDLGdCQUFKLENBQVc7QUFDdENDLFdBQVNDLG1CQUFTQyxFQURvQjtBQUV0Q0MsT0FBSyxhQUZpQztBQUd0Q0MsY0FBWWI7QUFIMEIsQ0FBWCxDQUE3Qjs7SUFNTWMsZ0I7Ozs7Ozs7Ozs7Ozs7O3dOQUNKTCxPLEdBQVVDLG1CQUFTQyxFLFFBQ25CQyxHLEdBQU0sVzs7Ozs7eUJBQ0RHLFMsRUFBV0MsUSxFQUFVOztBQUV4QjtBQUNBLFVBQU1DLGtCQUFrQkMsT0FBT0MsSUFBUCxDQUFZSixTQUFaLEVBQXVCSyxNQUF2QixDQUE4QixVQUFDQyxJQUFELEVBQU9ULEdBQVA7QUFBQSwwQ0FDaERHLFVBQVVILEdBQVYsRUFBZVYsTUFBZixxQ0FDRVUsR0FERixFQUNRTCxxQkFBcUJlLElBQXJCLENBQTBCUCxVQUFVSCxHQUFWLENBQTFCLEVBQTBDVyxXQURsRCxJQUNpRSxFQUZqQjtBQUFBLE9BQTlCLEVBSXBCLEVBSm9CLENBQXhCOztBQU1BLCtDQUFTLEtBQUtYLEdBQWQsRUFBb0JLLGVBQXBCO0FBQ0Q7Ozt5QkFFSUYsUyxFQUFXO0FBQ2QsK0NBQVMsS0FBS0gsR0FBZCxFQUFvQkcsU0FBcEI7QUFDRDs7O0VBakI0QlAsZ0I7O0FBb0IvQjs7O0FBQ08sSUFBTWdCLHNDQUFlO0FBQzFCQyxhQUFXLElBRGU7QUFFMUJDLGtCQUFnQixJQUZVO0FBRzFCQyxzQkFBb0IsSUFITTtBQUkxQkMsaUJBQWUsSUFKVztBQUsxQmIsYUFBVyxJQUFJRCxnQkFBSjtBQUxlLENBQXJCOztBQVFQLElBQU1lLHVGQUNIbkIsbUJBQVNvQixFQUROLEVBQ1csSUFBSXRCLGdCQUFKLENBQVc7QUFDeEJDLFdBQVNDLG1CQUFTb0IsRUFETTtBQUV4QmpCLGNBQVlXLFlBRlk7QUFHeEJaLE9BQUs7QUFIbUIsQ0FBWCxDQURYLGtEQU1IRixtQkFBU0MsRUFOTixFQU1XLElBQUlILGdCQUFKLENBQVc7QUFDeEJDLFdBQVNDLG1CQUFTQyxFQURNO0FBRXhCRSxjQUFZVyxZQUZZO0FBR3hCWixPQUFLO0FBSG1CLENBQVgsQ0FOWCxtQkFBTjs7a0JBYWVpQixjIiwiZmlsZSI6Im1hcC1zdHlsZS1zY2hlbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTggVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge1ZFUlNJT05TfSBmcm9tICcuL3ZlcnNpb25zJztcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnO1xuXG5leHBvcnQgY29uc3QgY3VzdG9tTWFwU3R5bGVQcm9wc1YxID0ge1xuICBhY2Nlc3NUb2tlbjogbnVsbCxcbiAgY3VzdG9tOiBudWxsLFxuICBpY29uOiBudWxsLFxuICBpZDogbnVsbCxcbiAgbGFiZWw6IG51bGwsXG4gIHVybDogbnVsbFxufTtcblxuY29uc3QgQ3VzdG9tTWFwU3R5bGVTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gIGtleTogJ2N1c3RvbVN0eWxlJyxcbiAgcHJvcGVydGllczogY3VzdG9tTWFwU3R5bGVQcm9wc1YxXG59KTtcblxuY2xhc3MgTWFwU3R5bGVTY2hlbWFWMSBleHRlbmRzIFNjaGVtYSB7XG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MTtcbiAga2V5ID0gJ21hcFN0eWxlcyc7XG4gIHNhdmUobWFwU3R5bGVzLCBtYXBTdHlsZSkge1xuXG4gICAgLy8gc2F2ZSBhbGwgY3VzdG9tIHN0eWxlc1xuICAgIGNvbnN0IHNhdmVDdXN0b21TdHlsZSA9IE9iamVjdC5rZXlzKG1hcFN0eWxlcykucmVkdWNlKChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAuLi4obWFwU3R5bGVzW2tleV0uY3VzdG9tID9cbiAgICAgICAgICB7W2tleV06IEN1c3RvbU1hcFN0eWxlU2NoZW1hLnNhdmUobWFwU3R5bGVzW2tleV0pLmN1c3RvbVN0eWxlfSA6IHt9XG4gICAgICApXG4gICAgfSksIHt9KTtcblxuICAgIHJldHVybiB7W3RoaXMua2V5XTogc2F2ZUN1c3RvbVN0eWxlfTtcbiAgfVxuXG4gIGxvYWQobWFwU3R5bGVzKSB7XG4gICAgcmV0dXJuIHtbdGhpcy5rZXldOiBtYXBTdHlsZXN9XG4gIH1cbn1cblxuLy8gdmVyc2lvbiB2MFxuZXhwb3J0IGNvbnN0IHByb3BlcnRpZXNWMCA9IHtcbiAgc3R5bGVUeXBlOiBudWxsLFxuICB0b3BMYXllckdyb3VwczogbnVsbCxcbiAgdmlzaWJsZUxheWVyR3JvdXBzOiBudWxsLFxuICBidWlsZGluZ0xheWVyOiBudWxsLFxuICBtYXBTdHlsZXM6IG5ldyBNYXBTdHlsZVNjaGVtYVYxKClcbn07XG5cbmNvbnN0IG1hcFN0eWxlU2NoZW1hID0ge1xuICBbVkVSU0lPTlMudjBdOiBuZXcgU2NoZW1hKHtcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MCxcbiAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzVjAsXG4gICAga2V5OiAnbWFwU3R5bGUnXG4gIH0pLFxuICBbVkVSU0lPTlMudjFdOiBuZXcgU2NoZW1hKHtcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MSxcbiAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzVjAsXG4gICAga2V5OiAnbWFwU3R5bGUnXG4gIH0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXBTdHlsZVNjaGVtYTtcbiJdfQ==