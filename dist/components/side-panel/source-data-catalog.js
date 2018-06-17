'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatasetTag = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  transition: ', ';\n'], ['\n  transition: ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  display: flex;\n  align-items: flex-start;\n  \n  .source-data-arrow {\n    height: 16px;\n  }\n  :hover {\n    color: ', ';\n    cursor: ', ';\n\n    .dataset-action {\n      color: ', ';\n      opacity: 1;\n    }\n\n    .dataset-action:hover {\n      color: white;\n    }\n  }\n'], ['\n  color: ', ';\n  display: flex;\n  align-items: flex-start;\n  \n  .source-data-arrow {\n    height: 16px;\n  }\n  :hover {\n    color: ', ';\n    cursor: ', ';\n\n    .dataset-action {\n      color: ', ';\n      opacity: 1;\n    }\n\n    .dataset-action:hover {\n      color: white;\n    }\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  color: ', ';\n  font-size: 11px;\n  letter-spacing: 0.2px;\n  \n  .dataset-color {\n    margin-top: 5px;\n  }\n'], ['\n  display: flex;\n  color: ', ';\n  font-size: 11px;\n  letter-spacing: 0.2px;\n  \n  .dataset-color {\n    margin-top: 5px;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  margin-left: 12px;\n  height: 16px;\n  opacity: 0;\n'], ['\n  margin-left: 12px;\n  height: 16px;\n  opacity: 0;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 11px;\n  color: ', ';\n  padding-left: 19px;\n'], ['\n  font-size: 11px;\n  color: ', ';\n  padding-left: 19px;\n']); // Copyright (c) 2018 Uber Technologies, Inc.
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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _d3Format = require('d3-format');

var _styledComponents3 = require('../common/styled-components');

var _icons = require('../common/icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultRemoveDataset = function defaultRemoveDataset(datasetKey) {};
var numFormat = (0, _d3Format.format)(',');

var SourceDataCatelog = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.transition;
});

var DatasetTitle = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.clickable ? props.theme.textColorHl : props.theme.textColor;
}, function (props) {
  return props.clickable ? 'pointer' : 'auto';
}, function (props) {
  return props.theme.textColorHl;
});
var DatasetTagWrapper = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.textColor;
});

var DataTagAction = _styledComponents2.default.div(_templateObject4);

var DataRowCount = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.theme.subtextColor;
});

var DatasetTag = exports.DatasetTag = function DatasetTag(_ref) {
  var onClick = _ref.onClick,
      dataset = _ref.dataset;
  return _react2.default.createElement(
    DatasetTagWrapper,
    { className: 'source-data-tag', onClick: onClick },
    _react2.default.createElement(_styledComponents3.DatasetSquare, { className: 'dataset-color', color: dataset.color }),
    _react2.default.createElement(
      'div',
      { className: 'dataset-name' },
      dataset.label
    )
  );
};

var SourceDataCatalog = function SourceDataCatalog(_ref2) {
  var datasets = _ref2.datasets,
      showDatasetTable = _ref2.showDatasetTable,
      removeDataset = _ref2.removeDataset,
      _ref2$showDeleteDatas = _ref2.showDeleteDataset,
      showDeleteDataset = _ref2$showDeleteDatas === undefined ? false : _ref2$showDeleteDatas;
  return _react2.default.createElement(
    SourceDataCatelog,
    { className: 'source-data-catalog' },
    Object.values(datasets).map(function (dataset, index) {
      return _react2.default.createElement(
        _styledComponents3.SidePanelSection,
        { key: dataset.id },
        _react2.default.createElement(
          DatasetTitle,
          { className: 'source-data-title', clickable: Boolean(showDatasetTable) },
          _react2.default.createElement(DatasetTag, {
            dataset: dataset,
            onClick: showDatasetTable ? function () {
              return showDatasetTable(dataset.id);
            } : null
          }),
          showDatasetTable ? _react2.default.createElement(
            _styledComponents3.CenterFlexbox,
            { className: 'source-data-arrow' },
            _react2.default.createElement(_icons.ArrowRight, { height: '12px' })
          ) : null,
          showDatasetTable ? _react2.default.createElement(ShowDataTable, {
            id: dataset.id,
            showDatasetTable: showDatasetTable
          }) : null,
          showDeleteDataset ? _react2.default.createElement(RemoveDataset, {
            datasetKey: dataset.id,
            removeDataset: removeDataset
          }) : null
        ),
        showDatasetTable ? _react2.default.createElement(
          DataRowCount,
          { className: 'source-data-rows' },
          numFormat(dataset.allData.length) + ' rows'
        ) : null
      );
    })
  );
};

var ShowDataTable = function ShowDataTable(_ref3) {
  var id = _ref3.id,
      showDatasetTable = _ref3.showDatasetTable;
  return _react2.default.createElement(
    DataTagAction,
    {
      className: 'dataset-action show-data-table',
      'data-tip': true,
      'data-for': 'data-table-' + id
    },
    _react2.default.createElement(_icons.Table, { height: '16px', onClick: function onClick() {
        return showDatasetTable(id);
      } }),
    _react2.default.createElement(
      _styledComponents3.Tooltip,
      { id: 'data-table-' + id, effect: 'solid' },
      _react2.default.createElement(
        'span',
        null,
        'Show data table'
      )
    )
  );
};

var RemoveDataset = function RemoveDataset(_ref4) {
  var datasetKey = _ref4.datasetKey,
      _ref4$removeDataset = _ref4.removeDataset,
      removeDataset = _ref4$removeDataset === undefined ? defaultRemoveDataset : _ref4$removeDataset;
  return _react2.default.createElement(
    DataTagAction,
    {
      className: 'dataset-action remove-dataset',
      'data-tip': true,
      'data-for': 'delete-' + datasetKey
    },
    _react2.default.createElement(_icons.Trash, {
      height: '16px',
      onClick: function onClick(e) {
        e.stopPropagation();
        removeDataset(datasetKey);
      }
    }),
    _react2.default.createElement(
      _styledComponents3.Tooltip,
      { id: 'delete-' + datasetKey, effect: 'solid', type: 'error' },
      _react2.default.createElement(
        'span',
        null,
        'Remove dataset'
      )
    )
  );
};

exports.default = SourceDataCatalog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvc291cmNlLWRhdGEtY2F0YWxvZy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UmVtb3ZlRGF0YXNldCIsIm51bUZvcm1hdCIsIlNvdXJjZURhdGFDYXRlbG9nIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRyYW5zaXRpb24iLCJEYXRhc2V0VGl0bGUiLCJ0ZXh0Q29sb3IiLCJjbGlja2FibGUiLCJ0ZXh0Q29sb3JIbCIsIkRhdGFzZXRUYWdXcmFwcGVyIiwiRGF0YVRhZ0FjdGlvbiIsIkRhdGFSb3dDb3VudCIsInN1YnRleHRDb2xvciIsIkRhdGFzZXRUYWciLCJvbkNsaWNrIiwiZGF0YXNldCIsImNvbG9yIiwibGFiZWwiLCJTb3VyY2VEYXRhQ2F0YWxvZyIsImRhdGFzZXRzIiwic2hvd0RhdGFzZXRUYWJsZSIsInJlbW92ZURhdGFzZXQiLCJzaG93RGVsZXRlRGF0YXNldCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImluZGV4IiwiaWQiLCJCb29sZWFuIiwiYWxsRGF0YSIsImxlbmd0aCIsIlNob3dEYXRhVGFibGUiLCJSZW1vdmVEYXRhc2V0IiwiZGF0YXNldEtleSIsImUiLCJzdG9wUHJvcGFnYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OzttTUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSx1QkFBdUIsU0FBdkJBLG9CQUF1QixhQUFjLENBQUUsQ0FBN0M7QUFDQSxJQUFNQyxZQUFZLHNCQUFPLEdBQVAsQ0FBbEI7O0FBRUEsSUFBTUMsb0JBQW9CQywyQkFBT0MsR0FBM0Isa0JBQ1U7QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLFVBQXJCO0FBQUEs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QUFGO0FBQUEsTUFBTVAsZ0JBQU4sU0FBTUEsZ0JBQU47QUFBQSxTQUNwQjtBQUFDLGlCQUFEO0FBQUE7QUFDRSxpQkFBVSxnQ0FEWjtBQUVFLHNCQUZGO0FBR0Usa0NBQXdCTztBQUgxQjtBQUtFLGtDQUFDLFlBQUQsSUFBTyxRQUFPLE1BQWQsRUFBcUIsU0FBUztBQUFBLGVBQU1QLGlCQUFpQk8sRUFBakIsQ0FBTjtBQUFBLE9BQTlCLEdBTEY7QUFNRTtBQUFDLGdDQUFEO0FBQUEsUUFBUyxvQkFBa0JBLEVBQTNCLEVBQWlDLFFBQU8sT0FBeEM7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFORixHQURvQjtBQUFBLENBQXRCOztBQWFBLElBQU1LLGdCQUFnQixTQUFoQkEsYUFBZ0I7QUFBQSxNQUFFQyxVQUFGLFNBQUVBLFVBQUY7QUFBQSxrQ0FBY1osYUFBZDtBQUFBLE1BQWNBLGFBQWQsdUNBQThCeEIsb0JBQTlCO0FBQUEsU0FDcEI7QUFBQyxpQkFBRDtBQUFBO0FBQ0UsaUJBQVUsK0JBRFo7QUFFRSxzQkFGRjtBQUdFLDhCQUFvQm9DO0FBSHRCO0FBS0Usa0NBQUMsWUFBRDtBQUNFLGNBQU8sTUFEVDtBQUVFLGVBQVMsb0JBQUs7QUFDWkMsVUFBRUMsZUFBRjtBQUNBZCxzQkFBY1ksVUFBZDtBQUNEO0FBTEgsTUFMRjtBQVlFO0FBQUMsZ0NBQUQ7QUFBQSxRQUFTLGdCQUFjQSxVQUF2QixFQUFxQyxRQUFPLE9BQTVDLEVBQW9ELE1BQUssT0FBekQ7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFaRixHQURvQjtBQUFBLENBQXRCOztrQkFtQmVmLGlCIiwiZmlsZSI6InNvdXJjZS1kYXRhLWNhdGFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTggVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2Zvcm1hdH0gZnJvbSAnZDMtZm9ybWF0JztcblxuaW1wb3J0IHtTaWRlUGFuZWxTZWN0aW9uLCBUb29sdGlwLCBEYXRhc2V0U3F1YXJlLCBDZW50ZXJGbGV4Ym94fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1RhYmxlLCBUcmFzaCwgQXJyb3dSaWdodH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuXG5jb25zdCBkZWZhdWx0UmVtb3ZlRGF0YXNldCA9IGRhdGFzZXRLZXkgPT4ge307XG5jb25zdCBudW1Gb3JtYXQgPSBmb3JtYXQoJywnKTtcblxuY29uc3QgU291cmNlRGF0YUNhdGVsb2cgPSBzdHlsZWQuZGl2YFxuICB0cmFuc2l0aW9uOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRyYW5zaXRpb259O1xuYDtcblxuY29uc3QgRGF0YXNldFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIFxuICAuc291cmNlLWRhdGEtYXJyb3cge1xuICAgIGhlaWdodDogMTZweDtcbiAgfVxuICA6aG92ZXIge1xuICAgIGNvbG9yOiAke3Byb3BzID0+XG4gICAgICBwcm9wcy5jbGlja2FibGUgPyBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbCA6IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gICAgY3Vyc29yOiAke3Byb3BzID0+IChwcm9wcy5jbGlja2FibGUgPyAncG9pbnRlcicgOiAnYXV0bycpfTtcblxuICAgIC5kYXRhc2V0LWFjdGlvbiB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIC5kYXRhc2V0LWFjdGlvbjpob3ZlciB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5gO1xuY29uc3QgRGF0YXNldFRhZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBmb250LXNpemU6IDExcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgXG4gIC5kYXRhc2V0LWNvbG9yIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbmA7XG5cbmNvbnN0IERhdGFUYWdBY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBvcGFjaXR5OiAwO1xuYDtcblxuY29uc3QgRGF0YVJvd0NvdW50ID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3J9O1xuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRGF0YXNldFRhZyA9ICh7b25DbGljaywgZGF0YXNldH0pID0+IChcbiAgPERhdGFzZXRUYWdXcmFwcGVyIGNsYXNzTmFtZT1cInNvdXJjZS1kYXRhLXRhZ1wiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgIDxEYXRhc2V0U3F1YXJlIGNsYXNzTmFtZT1cImRhdGFzZXQtY29sb3JcIiBjb2xvcj17ZGF0YXNldC5jb2xvcn0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFzZXQtbmFtZVwiPntkYXRhc2V0LmxhYmVsfTwvZGl2PlxuICA8L0RhdGFzZXRUYWdXcmFwcGVyPlxuKTtcblxuY29uc3QgU291cmNlRGF0YUNhdGFsb2cgPSAoe1xuICBkYXRhc2V0cyxcbiAgc2hvd0RhdGFzZXRUYWJsZSxcbiAgcmVtb3ZlRGF0YXNldCxcbiAgc2hvd0RlbGV0ZURhdGFzZXQgPSBmYWxzZVxufSkgPT4gKFxuICA8U291cmNlRGF0YUNhdGVsb2cgY2xhc3NOYW1lPVwic291cmNlLWRhdGEtY2F0YWxvZ1wiPlxuICAgIHtPYmplY3QudmFsdWVzKGRhdGFzZXRzKS5tYXAoKGRhdGFzZXQsIGluZGV4KSA9PiAoXG4gICAgICA8U2lkZVBhbmVsU2VjdGlvbiBrZXk9e2RhdGFzZXQuaWR9PlxuICAgICAgICA8RGF0YXNldFRpdGxlIGNsYXNzTmFtZT1cInNvdXJjZS1kYXRhLXRpdGxlXCIgY2xpY2thYmxlPXtCb29sZWFuKHNob3dEYXRhc2V0VGFibGUpfT5cbiAgICAgICAgICA8RGF0YXNldFRhZ1xuICAgICAgICAgICAgZGF0YXNldD17ZGF0YXNldH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICBzaG93RGF0YXNldFRhYmxlID8gKCkgPT4gc2hvd0RhdGFzZXRUYWJsZShkYXRhc2V0LmlkKSA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtzaG93RGF0YXNldFRhYmxlID9cbiAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cInNvdXJjZS1kYXRhLWFycm93XCI+XG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGhlaWdodD1cIjEycHhcIiAvPlxuICAgICAgICAgICAgPC9DZW50ZXJGbGV4Ym94PiA6IG51bGx9XG4gICAgICAgICAge3Nob3dEYXRhc2V0VGFibGUgPyAoXG4gICAgICAgICAgICA8U2hvd0RhdGFUYWJsZVxuICAgICAgICAgICAgICBpZD17ZGF0YXNldC5pZH1cbiAgICAgICAgICAgICAgc2hvd0RhdGFzZXRUYWJsZT17c2hvd0RhdGFzZXRUYWJsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge3Nob3dEZWxldGVEYXRhc2V0ID8gKFxuICAgICAgICAgICAgPFJlbW92ZURhdGFzZXRcbiAgICAgICAgICAgICAgZGF0YXNldEtleT17ZGF0YXNldC5pZH1cbiAgICAgICAgICAgICAgcmVtb3ZlRGF0YXNldD17cmVtb3ZlRGF0YXNldH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvRGF0YXNldFRpdGxlPlxuICAgICAgICB7c2hvd0RhdGFzZXRUYWJsZSA/IChcbiAgICAgICAgICA8RGF0YVJvd0NvdW50IGNsYXNzTmFtZT1cInNvdXJjZS1kYXRhLXJvd3NcIj57YCR7bnVtRm9ybWF0KFxuICAgICAgICAgICAgZGF0YXNldC5hbGxEYXRhLmxlbmd0aFxuICAgICAgICAgICl9IHJvd3NgfTwvRGF0YVJvd0NvdW50PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICApKX1cbiAgPC9Tb3VyY2VEYXRhQ2F0ZWxvZz5cbik7XG5cbmNvbnN0IFNob3dEYXRhVGFibGUgPSAoe2lkLCBzaG93RGF0YXNldFRhYmxlfSkgPT4gKFxuICA8RGF0YVRhZ0FjdGlvblxuICAgIGNsYXNzTmFtZT1cImRhdGFzZXQtYWN0aW9uIHNob3ctZGF0YS10YWJsZVwiXG4gICAgZGF0YS10aXBcbiAgICBkYXRhLWZvcj17YGRhdGEtdGFibGUtJHtpZH1gfVxuICA+XG4gICAgPFRhYmxlIGhlaWdodD1cIjE2cHhcIiBvbkNsaWNrPXsoKSA9PiBzaG93RGF0YXNldFRhYmxlKGlkKX0gLz5cbiAgICA8VG9vbHRpcCBpZD17YGRhdGEtdGFibGUtJHtpZH1gfSBlZmZlY3Q9XCJzb2xpZFwiPlxuICAgICAgPHNwYW4+U2hvdyBkYXRhIHRhYmxlPC9zcGFuPlxuICAgIDwvVG9vbHRpcD5cbiAgPC9EYXRhVGFnQWN0aW9uPlxuKTtcblxuY29uc3QgUmVtb3ZlRGF0YXNldCA9ICh7ZGF0YXNldEtleSwgcmVtb3ZlRGF0YXNldCA9IGRlZmF1bHRSZW1vdmVEYXRhc2V0fSkgPT4gKFxuICA8RGF0YVRhZ0FjdGlvblxuICAgIGNsYXNzTmFtZT1cImRhdGFzZXQtYWN0aW9uIHJlbW92ZS1kYXRhc2V0XCJcbiAgICBkYXRhLXRpcFxuICAgIGRhdGEtZm9yPXtgZGVsZXRlLSR7ZGF0YXNldEtleX1gfVxuICA+XG4gICAgPFRyYXNoXG4gICAgICBoZWlnaHQ9XCIxNnB4XCJcbiAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICByZW1vdmVEYXRhc2V0KGRhdGFzZXRLZXkpO1xuICAgICAgfX1cbiAgICAvPlxuICAgIDxUb29sdGlwIGlkPXtgZGVsZXRlLSR7ZGF0YXNldEtleX1gfSBlZmZlY3Q9XCJzb2xpZFwiIHR5cGU9XCJlcnJvclwiPlxuICAgICAgPHNwYW4+UmVtb3ZlIGRhdGFzZXQ8L3NwYW4+XG4gICAgPC9Ub29sdGlwPlxuICA8L0RhdGFUYWdBY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTb3VyY2VEYXRhQ2F0YWxvZztcbiJdfQ==