'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

require('isomorphic-fetch');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _StoryList = require('../components/StoryList');

var _StoryList2 = _interopRequireDefault(_StoryList);

var _error = require('next/dist/lib/error.js');

var _error2 = _interopRequireDefault(_error);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/scottschneider/Projects/next/nextjs-pwa/pages/index.js?entry';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
          console.log('service worker registration successful');
        }).catch(function (err) {
          console.warn('service worker registration failed', err.message);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          stories = _props.stories,
          page = _props.page;

      if (typeof stories === 'undefined' || !stories) return _react2.default.createElement(_error2.default, { statusCode: 503, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      });

      return _react2.default.createElement(_Layout2.default, { title: 'Hacker News Reader',
        description: 'A sample PWA built with React and Next.JS', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_StoryList2.default, { stories: stories, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement('footer', {
        className: 'jsx-2149221162',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_link2.default, { href: '/?page=' + (page + 1), prefetch: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-2149221162',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Next Page >'))), _react2.default.createElement(_style2.default, {
        styleId: '2149221162',
        css: 'footer.jsx-2149221162{padding:2em 1em;}footer.jsx-2149221162 a.jsx-2149221162{font-size:1.5em;font-weight:bold;color:#ff6600;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEa0IsQUFHMkIsQUFHQSxnQkFGbEIsQUFHbUIsaUJBQ0gsY0FDTyxxQkFDdkIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Njb3R0c2NobmVpZGVyL1Byb2plY3RzL25leHQvbmV4dGpzLXB3YSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgU3RvcnlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvU3RvcnlMaXN0J1xuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCByZXMsIHF1ZXJ5IH0pIHtcbiAgICB2YXIgc3RvcmllcywgcGFnZTtcblxuICAgIHRyeSB7XG4gICAgICBwYWdlID0gcGFyc2VJbnQocXVlcnkucGFnZSB8fCAxKVxuICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vbm9kZS1obmFwaS5oZXJva3VhcHAuY29tL25ld3M/cGFnZT0ke3BhZ2V9YClcbiAgICAgIHN0b3JpZXMgPSBhd2FpdCByZXEuanNvbigpXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBzdG9yaWVzID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RvcmllcywgcGFnZSB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgICAgIC5yZWdpc3RlcignL3NlcnZpY2Utd29ya2VyLmpzJylcbiAgICAgICAgLnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwnKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQnLCBlcnIubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yaWVzLCBwYWdlIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiggdHlwZW9mIHN0b3JpZXMgPT09ICd1bmRlZmluZWQnIHx8ICEgc3RvcmllcyApIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17NTAzfSAvPlxuXG4gICAgcmV0dXJuIDxMYXlvdXQgdGl0bGU9eydIYWNrZXIgTmV3cyBSZWFkZXInfSBcbiAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17J0Egc2FtcGxlIFBXQSBidWlsdCB3aXRoIFJlYWN0IGFuZCBOZXh0LkpTJ30+XG4gICAgICA8U3RvcnlMaXN0IHN0b3JpZXM9e3N0b3JpZXN9IC8+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvP3BhZ2U9JHtwYWdlKzF9YH0gcHJlZmV0Y2g+PGE+TmV4dCBQYWdlICZndDs8L2E+PC9MaW5rPlxuICAgICAgPC9mb290ZXI+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAyZW0gMWVtO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiAjZmY2NjAwO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICB9XG5cbn0iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req,
            res = _ref.res,
            query = _ref.query;

        var stories, page, _req;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                page = parseInt(query.page || 1);
                _context.next = 4;
                return fetch('https://node-hnapi.herokuapp.com/news?page=' + page);

              case 4:
                _req = _context.sent;
                _context.next = 7;
                return _req.json();

              case 7:
                stories = _context.sent;
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](0);

                stories = undefined;

              case 13:
                return _context.abrupt('return', { stories: stories, page: page });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIlN0b3J5TGlzdCIsIkVycm9yIiwiTGluayIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJ3YXJuIiwiZXJyIiwibWVzc2FnZSIsInByb3BzIiwic3RvcmllcyIsInBhZ2UiLCJyZXEiLCJyZXMiLCJxdWVyeSIsInBhcnNlSW50IiwiZmV0Y2giLCJqc29uIiwidW5kZWZpbmVkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQWtCZ0IsQUFDbkI7VUFBSSxtQkFBSixBQUF1QixXQUFXLEFBQ2hDO2tCQUFBLEFBQVUsY0FBVixBQUNHLFNBREgsQUFDWSxzQkFEWixBQUVHLEtBQUssd0JBQWdCLEFBQ3BCO2tCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2I7QUFKSCxXQUFBLEFBS0csTUFBTSxlQUFPLEFBQ1o7a0JBQUEsQUFBUSxLQUFSLEFBQWEsc0NBQXNDLElBQW5ELEFBQXVELEFBQ3hEO0FBUEgsQUFRRDtBQUNGOzs7OzZCQUVRO21CQUNtQixLQURuQixBQUN3QjtVQUR4QixBQUNDLGlCQURELEFBQ0M7VUFERCxBQUNVLGNBRFYsQUFDVSxBQUVqQjs7VUFBSSxPQUFBLEFBQU8sWUFBUCxBQUFtQixlQUFlLENBQXRDLEFBQXdDLGdDQUFpQixBQUFDLGlDQUFNLFlBQVAsQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFFekQ7QUFGeUQ7T0FBQSxDQUFQOzs2QkFFM0MsQUFBQyxrQ0FBTyxPQUFSLEFBQWUsQUFDUDtxQkFEUixBQUNxQjtvQkFEckI7c0JBQUEsQUFFTDtBQUZLO09BQUEsa0JBRUwsQUFBQyxxQ0FBVSxTQUFYLEFBQW9CO29CQUFwQjtzQkFGSyxBQUVMLEFBRUE7QUFGQTswQkFFQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLGdDQUFLLG1CQUFnQixPQUF0QixBQUFNLEFBQXFCLElBQUssVUFBaEM7b0JBQUE7c0JBQUEsQUFBeUM7QUFBekM7eUJBQXlDLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUx0QyxBQUlMLEFBQ0UsQUFBeUM7aUJBTHRDO2FBQVAsQUFBTyxBQW9CUjtBQXBCUTs7Ozs7O1lBaENzQixBLFcsQUFBQTtZLEFBQUssV0FBQSxBO1lBQUssQSxhQUFBLEE7Ozs7Ozs7O2dDQUlyQzs7dUJBQU8sU0FBUyxNQUFBLEFBQU0sUUFBdEIsQUFBTyxBQUF1Qjs7dUJBQ1osc0QsQUFBQSxBQUFvRDs7bUJBQWhFO0E7O3VCQUNVLEtBQUEsQUFBSSxBOzttQkFBcEI7QTs7Ozs7O2dEQUVBOzswQkFBQSxBQUFVOzs7aURBR0wsRUFBRSxTQUFGLFNBQVcsTUFBWCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBYmtCLGdCQUFNLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Njb3R0c2NobmVpZGVyL1Byb2plY3RzL25leHQvbmV4dGpzLXB3YSJ9