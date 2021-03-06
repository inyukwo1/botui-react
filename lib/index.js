"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("botui/build/botui.js");

require("botui/build/botui.min.css");

require("botui/build/botui-theme-default.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Botui =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Botui, _React$Component);

  function Botui() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Botui);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Botui)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "message", {
      add: function add(message) {
        return this.botui.message.add(message);
      },
      bot: function bot(message) {
        return this.botui.message.bot(message);
      },
      insert_with_button: function insert_with_button(index, message) {
        return this.botui.message.insert_with_button(index, message);
      },
      insert_with_checkbox_table: function insert_with_checkbox_table(index, message) {
        return this.botui.message.insert_with_checkbox_table(index, message);
      },
      human: function human(message) {
        return this.botui.message.human(message);
      },
      get: function get(index) {
        return this.botui.message.get(index);
      },
      update: function update(index, message) {
        return this.botui.message.update(index, message);
      },
      insert: function insert(index, message) {
        return this.botui.message.insert(index, message);
      },
      remove: function remove(index) {
        return this.botui.message.remove(index);
      },
      removeAll: function removeAll() {
        return this.botui.message.removeAll();
      },
      getMessageLengthCorrectPair: function getMessageLengthCorrectPair() {
        return this.botui.message.getMessageLengthCorrectPair();
      },
      enableIncorrectClick: function enableIncorrectClick(callback) {
        return this.botui.message.enableIncorrectClick(callback);
      },
      disableIncorrectClick: function disableIncorrectClick() {
        return this.botui.message.disableIncorrectClick();
      },
      updateMsgs: function updateMsgs() {
        return this.botui.message.updateMsgs();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "action", {
      show: function show(action) {
        if (action.type === 'button') {
          return this.botui.action.button(action);
        }

        if (action.type === 'text') {
          return this.botui.action.text(action);
        }

        return this.botui.action.show(action);
      },
      hide: function hide() {
        return this.botui.action.hide();
      },
      text: function text(action) {
        return this.botui.action.text(action);
      },
      button: function button(action) {
        return this.botui.action.button(action);
      },
      select: function select(action) {
        return this.botui.action.select(action);
      }
    });

    return _this;
  }

  _createClass(Botui, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var BotUI = window.BotUI;
      this.botui = new BotUI('react-botui');
      this.message.add = this.message.add.bind(this);
      this.message.bot = this.message.bot.bind(this);
      this.message.insert_with_button = this.message.insert_with_button.bind(this);
      this.message.insert_with_checkbox_table = this.message.insert_with_checkbox_table.bind(this);
      this.message.human = this.message.human.bind(this);
      this.message.get = this.message.get.bind(this);
      this.message.update = this.message.update.bind(this);
      this.message.remove = this.message.remove.bind(this);
      this.message.removeAll = this.message.removeAll.bind(this);
      this.message.insert = this.message.insert.bind(this);
      this.message.updateMsgs = this.message.updateMsgs.bind(this);
      this.message.getMessageLengthCorrectPair = this.message.getMessageLengthCorrectPair.bind(this);
      this.message.enableIncorrectClick = this.message.enableIncorrectClick.bind(this);
      this.message.disableIncorrectClick = this.message.disableIncorrectClick.bind(this);
      this.action.hide = this.action.hide.bind(this);
      this.action.show = this.action.show.bind(this);
      this.action.text = this.action.text.bind(this);
      this.action.button = this.action.button.bind(this);
      this.action.select = this.action.select.bind(this);
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "botui-app-container",
        id: "react-botui",
        style: this.props.style
      }, _react["default"].createElement("bot-ui", null, "Bot"));
    }
  }]);

  return Botui;
}(_react["default"].Component);

var _default = Botui;
exports["default"] = _default;