"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _counter = require("../../actions/counter.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _index3.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {
    add: function add() {
      dispatch((0, _counter.add)());
    },
    dec: function dec() {
      dispatch((0, _counter.minus)());
    },
    asyncAdd: function asyncAdd() {
      dispatch((0, _counter.asyncAdd)());
    }
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["$compid__55", "$compid__56", "$compid__57", "$compid__58", "$compid__59", "passageList", "titleList"], _this.config = {
      navigationBarTitleText: '首页'
    }, _this.customComponents = ["Card", "Banner", "CardList"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
      this.state = {
        passageList: [],
        titleList: []
      };
      this.$$refs = [];
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(this.props, nextProps);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadPassages();
      this.loadTitles();
    }
  }, {
    key: "loadPassages",
    value: function loadPassages() {
      var _this2 = this;

      _index2.default.request({
        url: 'http://rap2api.taobao.org/app/mock/227923/api/home/passageList'
      }).then(function (response) {
        return response.data;
      }).then(function (data) {
        _this2.setState({ passageList: data.passageList });
      });
    }
  }, {
    key: "loadTitles",
    value: function loadTitles() {
      var _this3 = this;

      _index2.default.request({
        url: 'http://rap2api.taobao.org/app/mock/227923/api/home/bannerInfo'
      }).then(function (response) {
        return response.data;
      }).then(function (data) {
        _this3.setState({ titleList: data.home });
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__55 = (0, _index.genCompid)(__prefix + "$compid__55");
      var $compid__56 = (0, _index.genCompid)(__prefix + "$compid__56");
      var $compid__57 = (0, _index.genCompid)(__prefix + "$compid__57");
      var $compid__58 = (0, _index.genCompid)(__prefix + "$compid__58");
      var $compid__59 = (0, _index.genCompid)(__prefix + "$compid__59");

      var _state = this.__state,
          passageList = _state.passageList,
          titleList = _state.titleList;

      _index.propsManager.set({
        "passage": passageList[0]
      }, $compid__55);
      _index.propsManager.set({
        "title": titleList[0].title
      }, $compid__56);
      passageList.length > 0 && _index.propsManager.set({
        "passageList": passageList,
        "type": false
      }, $compid__57);
      _index.propsManager.set({
        "title": titleList[1].title
      }, $compid__58);
      passageList.length > 0 && _index.propsManager.set({
        "passageList": passageList,
        "type": true
      }, $compid__59);
      Object.assign(this.__state, {
        $compid__55: $compid__55,
        $compid__56: $compid__56,
        $compid__57: $compid__57,
        $compid__58: $compid__58,
        $compid__59: $compid__59
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.$$events = [], _class2.$$componentPath = "pages/index/index", _temp2)) || _class);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));