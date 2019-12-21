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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/scottschneider/Projects/next/nextjs-pwa/components/Layout.js';


var Layout = function (_React$PureComponent) {
  (0, _inherits3.default)(Layout, _React$PureComponent);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          description = _props.description,
          children = _props.children,
          showBack = _props.showBack;

      return _react2.default.createElement('div', {
        className: 'jsx-3231727594',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement('title', {
        className: 'jsx-3231727594',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, title), _react2.default.createElement('meta', { name: 'description', content: description, className: 'jsx-3231727594',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', className: 'jsx-3231727594',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), _react2.default.createElement('link', { rel: 'manifest', href: '/static/manifest.webmanifest', className: 'jsx-3231727594',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement('meta', { name: 'theme-color', content: '#ff6600', className: 'jsx-3231727594',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/icon.png', className: 'jsx-3231727594',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('link', { rel: 'apple-touch-icon', href: '/static/icon.png', className: 'jsx-3231727594',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-title', content: 'Hacker News', className: 'jsx-3231727594',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default', className: 'jsx-3231727594',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes', className: 'jsx-3231727594',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('meta', { name: 'mobile-web-app-capable', content: 'yes', className: 'jsx-3231727594',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })), _react2.default.createElement('nav', {
        className: 'jsx-3231727594',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-3231727594',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, showBack && _react2.default.createElement('span', {
        className: 'jsx-3231727594' + ' ' + 'back',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, '<'), _react2.default.createElement('span', {
        className: 'jsx-3231727594' + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'Hacker News')))), children, _react2.default.createElement(_style2.default, {
        styleId: '1833090254',
        css: 'nav.jsx-3231727594{background:#ff6600;color:#fff;font-weight:bold;}nav.jsx-3231727594 a.jsx-3231727594{display:inline-block;color:#fff;text-decoration:none;}nav.jsx-3231727594 a.jsx-3231727594:hover{background-color:rgba(0,0,0,0.1);}nav.jsx-3231727594 .back.jsx-3231727594{display:inline-block;height:1em;width:1em;font-weight:300;padding:1em 0 1em 1em;text-align:center;}nav.jsx-3231727594 .title.jsx-3231727594{display:inline-block;padding:1em;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCa0IsQUFHOEIsQUFLRSxBQUtZLEFBR1osQUFRQSxtQkFwQlYsRUFLQSxBQVFBLEFBUUMsU0FwQkssRUFLSSxBQVFYLENBSlosQUFZQSxTQVBrQixLQWJsQixNQUtBLEtBU3dCLHNCQUNKLGtCQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2NvdHRzY2huZWlkZXIvUHJvamVjdHMvbmV4dC9uZXh0anMtcHdhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjaGlsZHJlbiwgc2hvd0JhY2sgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXsgZGVzY3JpcHRpb24gfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG5cbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL3N0YXRpYy9tYW5pZmVzdC53ZWJtYW5pZmVzdFwiIC8+XG5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZjY2MDBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9zdGF0aWMvaWNvbi5wbmdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi9zdGF0aWMvaWNvbi5wbmdcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGVcIiBjb250ZW50PVwiSGFja2VyIE5ld3NcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZVwiIGNvbnRlbnQ9XCJkZWZhdWx0XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG5hdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT57IHNob3dCYWNrICYmIDxzcGFuIGNsYXNzTmFtZT1cImJhY2tcIj4mbHQ7PC9zcGFuPiB9PHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5IYWNrZXIgTmV3czwvc3Bhbj48L2E+PC9MaW5rPlxuICAgICAgPC9uYXY+XG5cbiAgICAgIHsgY2hpbGRyZW4gfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmNjYwMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICBuYXYgYSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBuYXYgYTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICB9XG4gICAgICAgIG5hdiAuYmFjayB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBwYWRkaW5nOiAxZW0gMCAxZW0gMWVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBuYXYgLnRpdGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkgeyBcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */\n/*@ sourceURL=components/Layout.js */'
      }), _react2.default.createElement(_style2.default, {
        styleId: '3315911533',
        css: 'body{margin:0;background:#f0f0f0;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEeUIsQUFHb0IsU0FDVSxtQkFDRyxzQkFDeEIiLCJmaWxlIjoiY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Njb3R0c2NobmVpZGVyL1Byb2plY3RzL25leHQvbmV4dGpzLXB3YSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hpbGRyZW4sIHNob3dCYWNrIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17IGRlc2NyaXB0aW9uIH0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuXG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zdGF0aWMvbWFuaWZlc3Qud2VibWFuaWZlc3RcIiAvPlxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmY2NjAwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvc3RhdGljL2ljb24ucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCIvc3RhdGljL2ljb24ucG5nXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlXCIgY29udGVudD1cIkhhY2tlciBOZXdzXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGVcIiBjb250ZW50PVwiZGVmYXVsdFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJtb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+eyBzaG93QmFjayAmJiA8c3BhbiBjbGFzc05hbWU9XCJiYWNrXCI+Jmx0Ozwvc3Bhbj4gfTxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+SGFja2VyIE5ld3M8L3NwYW4+PC9hPjwvTGluaz5cbiAgICAgIDwvbmF2PlxuXG4gICAgICB7IGNoaWxkcmVuIH1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBuYXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjY2MDA7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgbmF2IGEge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgbmF2IGE6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgfVxuICAgICAgICBuYXYgLmJhY2sge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgICB3aWR0aDogMWVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgcGFkZGluZzogMWVtIDAgMWVtIDFlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgbmF2IC50aXRsZSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHsgXG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICB9XG59XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59XG4iXX0= */\n/*@ sourceURL=components/Layout.js */'
      }));
    }
  }]);

  return Layout;
}(_react2.default.PureComponent);

exports.default = Layout;


Layout.propTypes = {
  title: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJQcm9wVHlwZXMiLCJMaW5rIiwiTGF5b3V0IiwicHJvcHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2hpbGRyZW4iLCJzaG93QmFjayIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJLEFBRWM7Ozs7Ozs7Ozs7OzZCQUNWO21CQUM0QyxLQUQ1QyxBQUNpRDtVQURqRCxBQUNDLGVBREQsQUFDQztVQURELEFBQ1EscUJBRFIsQUFDUTtVQURSLEFBQ3FCLGtCQURyQixBQUNxQjtVQURyQixBQUMrQixrQkFEL0IsQUFDK0IsQUFFdEM7OzZCQUFPLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0w7QUFESztBQUFBLE9BQUEsa0JBQ0wsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFBUztBQUFUO0FBQUEsU0FERixBQUNFLEFBQ0EsZ0RBQU0sTUFBTixBQUFXLGVBQWMsU0FBekIsQUFBbUMsd0JBQW5DOztvQkFBQTtzQkFGRixBQUVFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QixvREFBOUI7O29CQUFBO3NCQUhGLEFBR0UsQUFFQTtBQUZBO2tEQUVNLEtBQU4sQUFBVSxZQUFXLE1BQXJCLEFBQTBCLDJDQUExQjs7b0JBQUE7c0JBTEYsQUFLRSxBQUVBO0FBRkE7a0RBRU0sTUFBTixBQUFXLGVBQWMsU0FBekIsQUFBaUMsc0JBQWpDOztvQkFBQTtzQkFQRixBQU9FLEFBQ0E7QUFEQTtrREFDTSxLQUFOLEFBQVUsaUJBQWdCLE1BQTFCLEFBQStCLCtCQUEvQjs7b0JBQUE7c0JBUkYsQUFRRSxBQUNBO0FBREE7a0RBQ00sS0FBTixBQUFVLG9CQUFtQixNQUE3QixBQUFrQywrQkFBbEM7O29CQUFBO3NCQVRGLEFBU0UsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyw4QkFBNkIsU0FBeEMsQUFBZ0QsMEJBQWhEOztvQkFBQTtzQkFWRixBQVVFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcseUNBQXdDLFNBQW5ELEFBQTJELHNCQUEzRDs7b0JBQUE7c0JBWEYsQUFXRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLGdDQUErQixTQUExQyxBQUFrRCxrQkFBbEQ7O29CQUFBO3NCQVpGLEFBWUUsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVywwQkFBeUIsU0FBcEMsQUFBNEMsa0JBQTVDOztvQkFBQTtzQkFkRyxBQUNMLEFBYUUsQUFHRjtBQUhFOzJCQUdGLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO29CQUFYO3NCQUFBLEFBQWU7QUFBZjt5QkFBZSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxxQ0FBaUIsY0FBQTs0Q0FBQSxBQUFnQjs7b0JBQWhCO3NCQUFBO0FBQUE7QUFBQSxPQUFBLEVBQWpCLEFBQWlCLEFBQW9DLHNCQUFBLGNBQUE7NENBQUEsQUFBZ0I7O29CQUFoQjtzQkFBQTtBQUFBO0FBQUEsU0FsQmpFLEFBaUJMLEFBQ0UsQUFBZSxBQUFxRCxBQUdwRSxtQkFyQkc7aUJBQUE7YUFBQTtBQUFBO2lCQUFBO2FBQVAsQUFBTyxBQTJEUjtBQTNEUTs7Ozs7RUFKeUIsZ0JBQU0sQTs7a0JBQXJCLEE7OztBQWtFckIsT0FBQSxBQUFPO1NBQ0Usb0JBQUEsQUFBVSxPQURBLEFBQ08sQUFDeEI7ZUFBYSxvQkFBQSxBQUFVLE9BRnpCLEFBQW1CLEFBRWE7QUFGYixBQUNqQiIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Njb3R0c2NobmVpZGVyL1Byb2plY3RzL25leHQvbmV4dGpzLXB3YSJ9