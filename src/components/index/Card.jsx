import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import PropTypes from 'prop-types'

import './Card.scss'

class Card extends Component {
  constructor(props) {
    super(props)
  }
  
  static propTypes = {
    passage: PropTypes.object
  }

  static defaultProps = {
    passage: {
      cover: 'https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture'
    }
  }

  cardClicked(passageId) {
    console.log(this.props.passage.passageId)
  }

  render() {
    // console.log(this.props.passage.cover)
    return(
      <View className='container' onClick = {this.cardClicked.bind(this, this.props.passage.passageId)}>
        <Text className='title'>{this.props.passage.title}</Text>
        <Image
          className='cover'
          mode='scaleToFill'
          src= {this.props.passage.cover}
        ></Image>
        <Text className='date'>{this.props.passage.modifiedTime}</Text>
      </View>
    )
  }
}

export default Card
