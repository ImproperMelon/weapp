import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import Card from '../../components/index/Card'
import CardList from '../../components/index/CardList'
import Banner from '../../components/index/Banner'

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
class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor (props) {
    super (props)
    this.state = {
      passageList: [],
      titleList: []
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount () {
    this.loadPassages ()
    this.loadTitles()
  }
  
  loadPassages () {
    Taro.request ({
      url: 'http://rap2api.taobao.org/app/mock/227923/api/home/passageList'
    })
    .then(response => response.data)
    .then(data => {
      this.setState({passageList: data.passageList})
    })
  }

  loadTitles () {
    Taro.request({
      url: 'http://rap2api.taobao.org/app/mock/227923/api/home/bannerInfo'
    })
    .then(response => response.data)
    .then(data => {
      this.setState({titleList: data.home})
    })
  }
  render () {
    const { passageList, titleList } = this.state
    return (
      <View>
        <Card passage = { passageList[0] }/>
        <Banner title = { titleList[0].title }/>
        {(passageList.length > 0 ? <CardList passageList = { passageList } type = { false } /> : <Empty />)}
        <Banner title = { titleList[1].title } />
        {(passageList.length > 0 ? <CardList passageList = { passageList } type = { true } /> : <Empty />)}
      </View>
    )
  }
}

export default Index
