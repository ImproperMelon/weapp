import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'
import "taro-ui/dist/style/index.scss"
import '../src/assets/icon/icon.css'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/bookDetail/index',
      'pages/bookShelter/index',
      'pages/bookSorted/index',
      'pages/about/index',
      'pages/article/index'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '学习空间',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh: true
    },
    tabBar: {
      list: [{
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/images/tabIndexOff.png',
        selectedIconPath: './assets/images/tabIndexOn.png'
      },{
        pagePath: 'pages/bookShelter/index',
        text: '书架',
        iconPath: './assets/images/tabBooksOff.png',
        selectedIconPath: './assets/images/tabBooksOn.png'
      },{
        pagePath: 'pages/about/index',
        text: '关于',
        iconPath: './assets/images/tabAboutOff.png',
        selectedIconPath: './assets/images/tabAboutOn.png'
      }],
      color: '#8a8a8a',
      selectedColor: '#2d8cf0',
      backgroundColor: '#ffffff',
      borderStyle: 'white'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
