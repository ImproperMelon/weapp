"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardList = (_temp2 = _class = function (_BaseComponent) {
  _inherits(CardList, _BaseComponent);

  function CardList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CardList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CardList.__proto__ || Object.getPrototypeOf(CardList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray10", "loopArray11", "passageList", "type"], _this.customComponents = ["Card"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CardList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(CardList.prototype.__proto__ || Object.getPrototypeOf(CardList.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var loopArray11 = void 0;
      var loopArray10 = void 0;

      var _props = this.__props,
          passageList = _props.passageList,
          type = _props.type;


      if (type === false) {
        loopArray10 = passageList.map(function (passage, _anonIdx) {
          passage = {
            $original: (0, _index.internal_get_original)(passage)
          };
          var $compid__60 = (0, _index.genCompid)(__prefix + "sgJngqlntB" + _anonIdx);
          _index.propsManager.set({
            "passage": passage.$original,
            "type": true
          }, $compid__60);
          return {
            $compid__60: $compid__60,
            $original: passage.$original
          };
        });
        // carousel styled card list
      } else if (type === true) {
        loopArray11 = passageList.map(function (passage, _anonIdx3) {
          passage = {
            $original: (0, _index.internal_get_original)(passage)
          };
          var $compid__61 = (0, _index.genCompid)(__prefix + "QqGgblTrnd" + _anonIdx3);
          _index.propsManager.set({
            "passage": passage.$original
          }, $compid__61);
          return {
            $compid__61: $compid__61,
            $original: passage.$original
          };
        });
        // formal styled card list
      }

      Object.assign(this.__state, {
        loopArray10: loopArray10,
        loopArray11: loopArray11,
        passageList: passageList,
        type: type
      });
      return this.__state;
    }
  }]);

  return CardList;
}(_index.Component), _class.$$events = [], _class.PropTypes = {
  //decide which kind of list
  type: _index4.default.bool,
  passageList: _index4.default.array
}, _class.defaultProps = {
  type: false,
  passageList: []
}, _class.$$componentPath = "components/index/CardList", _temp2);
exports.default = CardList;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(CardList));