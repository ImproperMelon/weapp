import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text} from '@tarojs/components'
import PropTypes from 'prop-types'

import './Banner.scss'
import "taro-ui/dist/style/index.scss"

export default class Banner extends Component {
  static propTypes = {
    title: PropTypes.string,
    more: PropTypes.bool
  }

  static defaultProps = {
    title: '哦豁',
    more: true
  }

  render () {
    const { title, more } = this.props
    return (
      <View className='at-row at-row__justify--between container'>
        <View className='at-col at-col-3 title'>{ title }</View>
        {more && <View className='at-col at-col-2'>more</View>}
      </View>
    )
  }
}