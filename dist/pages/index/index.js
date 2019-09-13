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
}), _dec(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(Index, _Taro$Component);

  function Index() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray26", "$compid__101", "$compid__102", "$compid__103", "currentView", "latestPassagesInfo"], _this.config = {
      navigationBarTitleText: '学习空间'
    }, _this.customComponents = ["AtTabs", "AtTabsPane", "Card"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
      this.state = {
        currentView: 0, // index that AtTabs and AtTabsPane need to manage to change pane item. 
        latestPassagesInfo: [] // passages list that needs to be presented and contains passages infomation.
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
      this.fetchTopicPassgaesInfo('latestPassages'); // first request to get the latest passages list.
    }
  }, {
    key: "onPullDownRefresh",
    value: function onPullDownRefresh() {
      this.fetchTopicPassgaesInfo('latestPassages'); // refresh passage list when users pulls the window down.
    }
  }, {
    key: "fetchTopicPassgaesInfo",
    value: function fetchTopicPassgaesInfo(passagesType) {
      var _this2 = this;

      // passagesType needed in case that a new kind of criterior standard is needed.
      // get different kind of passages list when defferent passageType is transfered in.
      var url = 'http://rap2api.taobao.org/app/mock/228736/api/' + passagesType;
      _index2.default.request({
        url: url
      }).then(function (res) {
        return res.data;
      }).then(function (data) {
        // function that sort items in an array by object keys, based on how `array.sort` works. 
        function sortBy(key) {
          return function (prev, next) {
            var prevValue = prev[key];
            var nextValue = next[key];
            if (prevValue < nextValue) {
              return 1;
            } else if (prevValue > nextValue) {
              return -1;
            } else {
              return 0;
            }
          };
        }
        // function that sort an array with particular criterior.
        var sortedData = data.latestPassages.sort(sortBy("modifiedTime"));

        _this2.setState({
          latestPassagesInfo: sortedData
        }, function () {
          // loading progress would be continous without this.
          _index2.default.stopPullDownRefresh();
        });
      });
    }
  }, {
    key: "handleChangeView",
    value: function handleChangeView(value) {
      this.setState({
        currentView: value
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
      var $compid__101 = (0, _index.genCompid)(__prefix + "$compid__101");
      var $compid__102 = (0, _index.genCompid)(__prefix + "$compid__102");
      var $compid__103 = (0, _index.genCompid)(__prefix + "$compid__103");
      var anonymousState__temp = [{ title: '广场' }, { title: '专栏' }];
      // console.log(this.state.latestPassagesInfo)

      var loopArray26 = this.__state.latestPassagesInfo.map(function (passageInfo, _anonIdx) {
        passageInfo = {
          $original: (0, _index.internal_get_original)(passageInfo)
        };
        var $compid__100 = (0, _index.genCompid)(__prefix + "lWnvOetbXO" + _anonIdx);
        _index.propsManager.set({
          "passage": passageInfo.$original
        }, $compid__100);
        return {
          $compid__100: $compid__100,
          $original: passageInfo.$original
        };
      });

      _index.propsManager.set({
        "current": this.__state.currentView,
        "tabList": anonymousState__temp,
        "onClick": this.handleChangeView.bind(this)
      }, $compid__101);
      _index.propsManager.set({
        "current": 0,
        "index": 0
      }, $compid__102);
      _index.propsManager.set({
        "current": 1,
        "index": 1
      }, $compid__103);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray26: loopArray26,
        $compid__101: $compid__101,
        $compid__102: $compid__102,
        $compid__103: $compid__103
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index2.default.Component), _class2.$$events = [], _class2.$$componentPath = "pages/index/index", _temp2)) || _class);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));