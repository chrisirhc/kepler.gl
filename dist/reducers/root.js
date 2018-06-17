'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

exports.provideInitialState = provideInitialState;

var _reduxActions = require('redux-actions');

var _actionWrapper = require('../actions/action-wrapper');

var _core = require('./core');

var _identityActions = require('../actions/identity-actions');

var _actions = require('../actions/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * voyager reducer wrapper,
 * wraps multiple voyager state in one voyager
 */

// INITIAL_STATE
var initialCoreState = {}; // Copyright (c) 2018 Uber Technologies, Inc.
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

function provideInitialState(initialState) {
  var coreReducer = (0, _core.coreReducerFactory)(initialState);

  var handleRegisterEntry = function handleRegisterEntry(state, _ref) {
    var _ref$payload = _ref.payload,
        id = _ref$payload.id,
        mint = _ref$payload.mint,
        mapboxApiAccessToken = _ref$payload.mapboxApiAccessToken;
    return (0, _extends5.default)({}, state, (0, _defineProperty3.default)({}, id, state[id] && mint === false ? state[id] : (0, _extends5.default)({}, coreReducer(undefined, (0, _actions.keplerGlInit)({ mapboxApiAccessToken: mapboxApiAccessToken })))));
  };

  var handleDeleteEntry = function handleDeleteEntry(state, _ref2) {
    var id = _ref2.payload;
    return Object.keys(state).reduce(function (accu, curr) {
      return (0, _extends5.default)({}, accu, curr === id ? {} : (0, _defineProperty3.default)({}, curr, state[curr]));
    }, {});
  };

  var handleRenameEntry = function handleRenameEntry(state, _ref4) {
    var _ref4$payload = (0, _slicedToArray3.default)(_ref4.payload, 2),
        oldId = _ref4$payload[0],
        newId = _ref4$payload[1];

    return Object.keys(state).reduce(function (accu, curr) {
      return (0, _extends5.default)({}, accu, (0, _defineProperty3.default)({}, curr === oldId ? newId : curr, state[curr]));
    }, {});
  };

  return function () {
    var _handleActions;

    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCoreState;
    var action = arguments[1];

    // update child states
    Object.keys(state).forEach(function (id) {
      var updateItemState = coreReducer(state[id], (0, _actionWrapper.actionFor)(id, action));
      state = (0, _actionWrapper.updateProperty)(state, id, updateItemState);
    });

    // perform additional state reducing (e.g. switch action.type etc...)
    return (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, _identityActions.REGISTER_ENTRY, handleRegisterEntry), (0, _defineProperty3.default)(_handleActions, _identityActions.DELETE_ENTRY, handleDeleteEntry), (0, _defineProperty3.default)(_handleActions, _identityActions.RENAME_ENTRY, handleRenameEntry), _handleActions), initialCoreState)(state, action);
  };
}

var keplerGlReducer = provideInitialState();

function decorate(target) {
  // plugin to core reducer
  target.plugin = function plugin(customReducer) {
    var _this = this;

    // use 'function' keyword to enable 'this'
    return decorate(function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var nextState = _this(state, action);

      // for each entry in the staten
      Object.keys(nextState).forEach(function (id) {
        // update child states
        nextState = (0, _actionWrapper.updateProperty)(nextState, id, customReducer(nextState[id], (0, _actionWrapper.actionFor)(id, action)));
      });

      return nextState;
    });
  };

  // pass in initialState for reducer slices
  // e.g. initialState = {uiState: {currentModal : null}}
  target.initialState = function (initialState) {
    return decorate(provideInitialState(initialState));
  };

  return target;
}

exports.default = decorate(keplerGlReducer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9yb290LmpzIl0sIm5hbWVzIjpbInByb3ZpZGVJbml0aWFsU3RhdGUiLCJpbml0aWFsQ29yZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiY29yZVJlZHVjZXIiLCJoYW5kbGVSZWdpc3RlckVudHJ5Iiwic3RhdGUiLCJwYXlsb2FkIiwiaWQiLCJtaW50IiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJ1bmRlZmluZWQiLCJoYW5kbGVEZWxldGVFbnRyeSIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJhY2N1IiwiY3VyciIsImhhbmRsZVJlbmFtZUVudHJ5Iiwib2xkSWQiLCJuZXdJZCIsImFjdGlvbiIsImZvckVhY2giLCJ1cGRhdGVJdGVtU3RhdGUiLCJSRUdJU1RFUl9FTlRSWSIsIkRFTEVURV9FTlRSWSIsIlJFTkFNRV9FTlRSWSIsImtlcGxlckdsUmVkdWNlciIsImRlY29yYXRlIiwidGFyZ2V0IiwicGx1Z2luIiwiY3VzdG9tUmVkdWNlciIsIm5leHRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBd0NnQkEsbUIsR0FBQUEsbUI7O0FBcEJoQjs7QUFFQTs7QUFDQTs7QUFFQTs7QUFNQTs7OztBQUNBOzs7OztBQUtBO0FBQ0EsSUFBTUMsbUJBQW1CLEVBQXpCLEMsQ0F0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBc0JPLFNBQVNELG1CQUFULENBQTZCRSxZQUE3QixFQUEyQztBQUNoRCxNQUFNQyxjQUFjLDhCQUFtQkQsWUFBbkIsQ0FBcEI7O0FBRUEsTUFBTUUsc0JBQXNCLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRDtBQUFBLDRCQUFTQyxPQUFUO0FBQUEsUUFBbUJDLEVBQW5CLGdCQUFtQkEsRUFBbkI7QUFBQSxRQUF1QkMsSUFBdkIsZ0JBQXVCQSxJQUF2QjtBQUFB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QUNEOztrQkFFY0QsU0FBU0QsZUFBVCxDIiwiZmlsZSI6InJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTggVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2hhbmRsZUFjdGlvbnN9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuXG5pbXBvcnQge2FjdGlvbkZvciwgdXBkYXRlUHJvcGVydHl9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uLXdyYXBwZXInO1xuaW1wb3J0IHtjb3JlUmVkdWNlckZhY3Rvcnl9IGZyb20gJy4vY29yZSc7XG5cbmltcG9ydCB7XG4gIFJFR0lTVEVSX0VOVFJZLFxuICBERUxFVEVfRU5UUlksXG4gIFJFTkFNRV9FTlRSWVxufSBmcm9tICcuLi9hY3Rpb25zL2lkZW50aXR5LWFjdGlvbnMnO1xuXG5pbXBvcnQge2tlcGxlckdsSW5pdH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25zJztcbi8qXG4gKiB2b3lhZ2VyIHJlZHVjZXIgd3JhcHBlcixcbiAqIHdyYXBzIG11bHRpcGxlIHZveWFnZXIgc3RhdGUgaW4gb25lIHZveWFnZXJcbiAqL1xuXG4vLyBJTklUSUFMX1NUQVRFXG5jb25zdCBpbml0aWFsQ29yZVN0YXRlID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlSW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICBjb25zdCBjb3JlUmVkdWNlciA9IGNvcmVSZWR1Y2VyRmFjdG9yeShpbml0aWFsU3RhdGUpO1xuXG4gIGNvbnN0IGhhbmRsZVJlZ2lzdGVyRW50cnkgPSAoc3RhdGUsIHtwYXlsb2FkOiB7aWQsIG1pbnQsIG1hcGJveEFwaUFjY2Vzc1Rva2VufX0pID0+ICh7XG4gICAgLy8gcmVnaXN0ZXIgYSBuZXcgZW50cnkgdG8gdm95YWdlciByZWR1Y2VyXG4gICAgLy8gYnkgZGVmYXVsdCwgYWx3YXlzIGNyZWF0ZSBhIG1pbnQgc3RhdGUgZXZlbiBpZiB0aGUgc2FtZSBpZCBhbHJlYWR5IGV4aXN0XG4gICAgLy8gaWYgc3RhdGUuaWQgZXhpc3QgYW5kIG1pbnQ9ZmFsc2UsIGtlZXAgdGhlIGV4aXN0aW5nIHN0YXRlXG4gICAgLi4uc3RhdGUsXG4gICAgW2lkXTogc3RhdGVbaWRdICYmIG1pbnQgPT09IGZhbHNlID8gc3RhdGVbaWRdIDoge1xuICAgICAgLi4uY29yZVJlZHVjZXIodW5kZWZpbmVkLCBrZXBsZXJHbEluaXQoe21hcGJveEFwaUFjY2Vzc1Rva2VufSkpXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVFbnRyeSA9IChzdGF0ZSwge3BheWxvYWQ6IGlkfSkgPT5cbiAgICBPYmplY3Qua2V5cyhzdGF0ZSkucmVkdWNlKFxuICAgICAgKGFjY3UsIGN1cnIpID0+ICh7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIC4uLihjdXJyID09PSBpZCA/IHt9IDoge1tjdXJyXTogc3RhdGVbY3Vycl19KVxuICAgICAgfSksXG4gICAgICB7fVxuICAgICk7XG5cbiAgY29uc3QgaGFuZGxlUmVuYW1lRW50cnkgPSAoc3RhdGUsIHtwYXlsb2FkOiBbb2xkSWQsIG5ld0lkXX0pID0+XG4gICAgT2JqZWN0LmtleXMoc3RhdGUpLnJlZHVjZShcbiAgICAgIChhY2N1LCBjdXJyKSA9PiAoe1xuICAgICAgICAuLi5hY2N1LFxuICAgICAgICAuLi57W2N1cnIgPT09IG9sZElkID8gbmV3SWQgOiBjdXJyXTogc3RhdGVbY3Vycl19XG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcblxuICByZXR1cm4gKHN0YXRlID0gaW5pdGlhbENvcmVTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgLy8gdXBkYXRlIGNoaWxkIHN0YXRlc1xuICAgIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGNvbnN0IHVwZGF0ZUl0ZW1TdGF0ZSA9IGNvcmVSZWR1Y2VyKHN0YXRlW2lkXSwgYWN0aW9uRm9yKGlkLCBhY3Rpb24pKTtcbiAgICAgIHN0YXRlID0gdXBkYXRlUHJvcGVydHkoc3RhdGUsIGlkLCB1cGRhdGVJdGVtU3RhdGUpO1xuICAgIH0pO1xuXG4gICAgLy8gcGVyZm9ybSBhZGRpdGlvbmFsIHN0YXRlIHJlZHVjaW5nIChlLmcuIHN3aXRjaCBhY3Rpb24udHlwZSBldGMuLi4pXG4gICAgcmV0dXJuIGhhbmRsZUFjdGlvbnMoXG4gICAgICB7XG4gICAgICAgIFtSRUdJU1RFUl9FTlRSWV06IGhhbmRsZVJlZ2lzdGVyRW50cnksXG4gICAgICAgIFtERUxFVEVfRU5UUlldOiBoYW5kbGVEZWxldGVFbnRyeSxcbiAgICAgICAgW1JFTkFNRV9FTlRSWV06IGhhbmRsZVJlbmFtZUVudHJ5XG4gICAgICB9LFxuICAgICAgaW5pdGlhbENvcmVTdGF0ZVxuICAgICkoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmNvbnN0IGtlcGxlckdsUmVkdWNlciA9IHByb3ZpZGVJbml0aWFsU3RhdGUoKTtcblxuZnVuY3Rpb24gZGVjb3JhdGUodGFyZ2V0KSB7XG4gIC8vIHBsdWdpbiB0byBjb3JlIHJlZHVjZXJcbiAgdGFyZ2V0LnBsdWdpbiA9IGZ1bmN0aW9uIHBsdWdpbihjdXN0b21SZWR1Y2VyKSB7XG4gICAgLy8gdXNlICdmdW5jdGlvbicga2V5d29yZCB0byBlbmFibGUgJ3RoaXMnXG4gICAgcmV0dXJuIGRlY29yYXRlKChzdGF0ZSA9IHt9LCBhY3Rpb24gPSB7fSkgPT4ge1xuICAgICAgbGV0IG5leHRTdGF0ZSA9IHRoaXMoc3RhdGUsIGFjdGlvbik7XG5cbiAgICAgIC8vIGZvciBlYWNoIGVudHJ5IGluIHRoZSBzdGF0ZW5cbiAgICAgIE9iamVjdC5rZXlzKG5leHRTdGF0ZSkuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCBzdGF0ZXNcbiAgICAgICAgbmV4dFN0YXRlID0gdXBkYXRlUHJvcGVydHkoXG4gICAgICAgICAgbmV4dFN0YXRlLFxuICAgICAgICAgIGlkLFxuICAgICAgICAgIGN1c3RvbVJlZHVjZXIobmV4dFN0YXRlW2lkXSwgYWN0aW9uRm9yKGlkLCBhY3Rpb24pKVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gcGFzcyBpbiBpbml0aWFsU3RhdGUgZm9yIHJlZHVjZXIgc2xpY2VzXG4gIC8vIGUuZy4gaW5pdGlhbFN0YXRlID0ge3VpU3RhdGU6IHtjdXJyZW50TW9kYWwgOiBudWxsfX1cbiAgdGFyZ2V0LmluaXRpYWxTdGF0ZSA9IGluaXRpYWxTdGF0ZSA9PlxuICAgIGRlY29yYXRlKHByb3ZpZGVJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKSk7XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVjb3JhdGUoa2VwbGVyR2xSZWR1Y2VyKTtcbiJdfQ==