import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text} from '@tarojs/components'
import PropTypes from 'prop-types'

import './Card.scss'

export default class Card extends Component {
  static propTypes = {
    passage: PropTypes.object,
    //decide whether it has detailed info
    type: PropTypes.bool
  }

  static defaultProps = {
    passage: {
      tags:[]
    },
    type: false
  }

  handleCardClicked (passage) {
    Taro.navigateTo({
      url: 'pages/article?id=' + passage.id
    })
  }

  render () {
    const { passage, type } = this.props
    return (
      <View className='container' onClick = { this.handleCardClicked.bind(this)}>
        <Image
          className='pic'
          mode='scaleToFill'
          src={ passage.picSrc }
        />
        <View className='info'>
          <View className='title'>{ passage.title }</View>
          {
            !type &&
            <View className='details'>
              <Text className='owner'>{ passage.owner } </Text>
              <Text className='tags'>{ passage.tags.join('/')}</Text>
            </View>
          }
        </View>
      </View>
    )
  }
}
