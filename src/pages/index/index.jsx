import Taro from '@tarojs/taro'
import { View} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtTabs, AtTabsPane } from 'taro-ui'

import { add, minus, asyncAdd } from '../../actions/counter'

import Card from '../../components/index/Card'

import './index.scss'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))

class Index extends Taro.Component {
  config = {
    navigationBarTitleText: '学习空间'
  }

  constructor (props) {
    super (props)
    this.state = {
      currentView: 0,// index that AtTabs and AtTabsPane need to manage to change pane item. 
      latestPassagesInfo: []// passages list that needs to be presented and contains passages infomation.
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount () {
    this.fetchTopicPassgaesInfo('latestPassages')// first request to get the latest passages list.
  }

  onPullDownRefresh () {
    this.fetchTopicPassgaesInfo('latestPassages')// refresh passage list when users pulls the window down.
  }

  fetchTopicPassgaesInfo (passagesType) {// passagesType needed in case that a new kind of criterior standard is needed.
    // get different kind of passages list when defferent passageType is transfered in.
    let url = 'http://rap2api.taobao.org/app/mock/228736/api/' + passagesType
    Taro.request({
      url: url
    })
    .then(res => res.data)
    .then(data => {
      // function that sort items in an array by object keys, based on how `array.sort` works. 
      function sortBy(key) {
        return function(prev, next) {
          let prevValue = prev[key];
          let nextValue = next[key]
          if (prevValue < nextValue) {
            return 1
          }
          else if (prevValue > nextValue) {
            return -1
          }
          else {
            return 0
          }
        }
      }
      // function that sort an array with particular criterior.
      const sortedData = data.latestPassages.sort(sortBy("modifiedTime"))

      this.setState(
        {
          latestPassagesInfo: sortedData
        },
        () => {// loading progress would be continous without this.
          Taro.stopPullDownRefresh()
        }
      )
    })
  }

  handleChangeView (value) {
    this.setState({
      currentView: value
    })
  }

  render () {
    // console.log(this.state.latestPassagesInfo)
    return (
      <AtTabs
        current = { this.state.currentView }
        tabList = {[
          {title: '广场'},
          {title: '专栏'}
        ]}
        onClick = { this.handleChangeView.bind(this) }
      >
        <AtTabsPane current = { 0 } index = { 0 }>
          <View>
            {
              this.state.latestPassagesInfo.map(passageInfo => (
                <Card passage = {passageInfo} key = { passageInfo.passageId }></Card>
                )
              )
            }
          </View>
        </AtTabsPane>
        <AtTabsPane current = { 1 } index = { 1 }>专栏</AtTabsPane>
      </AtTabs>
    )
  }
}

export default Index
