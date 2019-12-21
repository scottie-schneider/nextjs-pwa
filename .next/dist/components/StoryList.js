'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/scottschneider/Projects/next/nextjs-pwa/components/StoryList.js';


var StoryList = function (_React$PureComponent) {
  (0, _inherits3.default)(StoryList, _React$PureComponent);

  function StoryList() {
    (0, _classCallCheck3.default)(this, StoryList);

    return (0, _possibleConstructorReturn3.default)(this, (StoryList.__proto__ || (0, _getPrototypeOf2.default)(StoryList)).apply(this, arguments));
  }

  (0, _createClass3.default)(StoryList, [{
    key: 'render',
    value: function render() {
      var stories = this.props.stories;

      return _react2.default.createElement('div', {
        className: 'jsx-1673929572' + ' ' + 'storyList',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, stories.map(function (story) {
        return _react2.default.createElement('div', { key: story.id, className: 'jsx-1673929572' + ' ' + 'storyItem',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        }, _react2.default.createElement('h2', {
          className: 'jsx-1673929572',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, _react2.default.createElement('a', { href: story.url, className: 'jsx-1673929572',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, story.title)), _react2.default.createElement('div', {
          className: 'jsx-1673929572' + ' ' + 'storyDetails',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }, _react2.default.createElement('strong', {
          className: 'jsx-1673929572',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, story.points, ' points'), _react2.default.createElement(_link2.default, { href: '/story?id=' + story.id, prefetch: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }, _react2.default.createElement('a', {
          className: 'jsx-1673929572',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }, story.comments_count, ' comments'))));
      }), _react2.default.createElement(_style2.default, {
        styleId: '1673929572',
        css: '.storyList.jsx-1673929572{padding:0 1em;}.storyItem.jsx-1673929572{padding:1em 0;border-bottom:1px solid rgba(0,0,0,0.1);}h2.jsx-1673929572{font-size:1.1em;font-weight:400;margin:0;margin-bottom:0.5em;}h2.jsx-1673929572 a.jsx-1673929572{color:#333;text-decoration:none;}h2.jsx-1673929572 a.jsx-1673929572:hover{text-decoration:underline;}.storyDetails.jsx-1673929572{font-size:0.9em;font-weight:bold;}.storyDetails.jsx-1673929572 strong.jsx-1673929572{margin-right:1em;}.storyDetails.jsx-1673929572 a.jsx-1673929572{color:#ff6600;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3RvcnlMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCa0IsQUFHeUIsQUFHQSxBQUlFLEFBTUwsQUFJZSxBQUdWLEFBSUMsQUFHSCxXQWJPLEdBYnZCLEFBRzBDLEFBd0JuQixFQXBCTCxBQWFDLENBSW5CLFNBUEEsTUFUVyxBQU1YLENBT0EsRUFPQSxNQW5Cc0IsYUFMdEIsT0FNQSIsImZpbGUiOiJjb21wb25lbnRzL1N0b3J5TGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2NvdHRzY2huZWlkZXIvUHJvamVjdHMvbmV4dC9uZXh0anMtcHdhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcnlMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JpZXMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5TGlzdFwiPlxuXG4gICAgICB7IHN0b3JpZXMubWFwKCAoc3RvcnkpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeUl0ZW1cIiBrZXk9eyBzdG9yeS5pZCB9PlxuICAgICAgICAgIDxoMj48YSBocmVmPXsgc3RvcnkudXJsIH0+eyBzdG9yeS50aXRsZSB9PC9hPjwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeURldGFpbHNcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+eyBzdG9yeS5wb2ludHMgfSBwb2ludHM8L3N0cm9uZz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3Rvcnk/aWQ9JHtzdG9yeS5pZH1gfSBwcmVmZXRjaD5cbiAgICAgICAgICAgICAgPGE+eyBzdG9yeS5jb21tZW50c19jb3VudCB9IGNvbW1lbnRzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgKSB9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnN0b3J5TGlzdCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN0b3J5SXRlbSB7XG4gICAgICAgICAgcGFkZGluZzogMWVtIDA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgfVxuICAgICAgICBoMiBhIHtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgaDIgYTpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnN0b3J5RGV0YWlscyB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAuc3RvcnlEZXRhaWxzIHN0cm9uZyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN0b3J5RGV0YWlscyBhIHtcbiAgICAgICAgICBjb2xvcjogI2ZmNjYwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvZGl2PlxuICB9XG59Il19 */\n/*@ sourceURL=components/StoryList.js */'
      }));
    }
  }]);

  return StoryList;
}(_react2.default.PureComponent);

exports.default = StoryList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3RvcnlMaXN0LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJSb3V0ZXIiLCJTdG9yeUxpc3QiLCJzdG9yaWVzIiwicHJvcHMiLCJtYXAiLCJzdG9yeSIsImlkIiwidXJsIiwidGl0bGUiLCJwb2ludHMiLCJjb21tZW50c19jb3VudCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7SUFFYyxBOzs7Ozs7Ozs7Ozs2QkFDVjtVQUFBLEFBQ0MsVUFBWSxLQURiLEFBQ2tCLE1BRGxCLEFBQ0MsQUFFUjs7NkJBQU8sY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUVIO0FBRkc7QUFBQSxPQUFBLFVBRUgsQUFBUSxJQUFLLFVBQUEsQUFBQyxPQUFEOytCQUNiLGNBQUEsU0FBMkIsS0FBTSxNQUFqQyxBQUF1Qyx3Q0FBdkMsQUFBZTs7c0JBQWY7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsY0FBQTtxQkFBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsMkJBQUksY0FBQSxPQUFHLE1BQU8sTUFBVixBQUFnQixnQkFBaEI7O3NCQUFBO3dCQUFBLEFBQXdCO0FBQXhCO2lCQUROLEFBQ0UsQUFBSSxBQUE4QixBQUNsQyx5QkFBQSxjQUFBOzhDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNFLGNBQUE7cUJBQUE7O3NCQUFBO3dCQUFBLEFBQVU7QUFBVjtBQUFBLGlCQUFBLEFBQWdCLFFBRGxCLEFBQ0UsQUFDQSw0QkFBQSxBQUFDLGdDQUFLLHFCQUFtQixNQUF6QixBQUErQixJQUFNLFVBQXJDO3NCQUFBO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxjQUFBO3FCQUFBOztzQkFBQTt3QkFBQSxBQUFLO0FBQUw7QUFBQSxpQkFBQSxBQUFXLGdCQU5KLEFBQ2IsQUFFRSxBQUVFLEFBQ0U7QUFSSCxBQUVIO2lCQUZHO2FBQVAsQUFBTyxBQWlEUjtBQWpEUTs7Ozs7RUFKNEIsZ0JBQU0sQTs7a0JBQXhCLEEiLCJmaWxlIjoiU3RvcnlMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zY290dHNjaG5laWRlci9Qcm9qZWN0cy9uZXh0L25leHRqcy1wd2EifQ==