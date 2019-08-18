import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View, Swiper, SwiperItem } from '@tarojs/components'

import Card from './Card'
import './CardList.scss'

export default class CardList extends Component {
  static PropTypes = {
    //decide which kind of list
    type: PropTypes.bool,
    passageList: PropTypes.array,
  }

  static defaultProps = {
    type: false,
    passageList: []
  }

  render () {
    const { passageList, type } = this.props
    switch (type) {
      case false: {
        // carousel styled card list
        return (
          <Swiper
          indicatorColor='#DDDDDD'
          indicatorActiveColor='#193549'
          circular
          indicatorDots
          autoplay
          >
            {
              passageList.map(passage => (
                <SwiperItem key = { passage.id } className='items'>
                  <Card passage = { passage } type = { true } />
                </SwiperItem>
                )
              )
            }
          </Swiper>
        )
      }
      case true: {
        // formal styled card list
        return (
          passageList.map(passage => 
            <Card passage = { passage } key = { passage.id } />
          )
        )
      }
    }
  }
}
