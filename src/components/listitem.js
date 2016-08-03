'use strict';

import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  PixelRatio
} from 'react-native';

export default class Listitem extends Component {
  constructor(props) {
      super(props);
      this.state = {

      }
  }
  componentDidMount() {
  }
  _gotoDetailPage() {
      const { navigator, propsIndex, list} = this.props;

      if(navigator) {
          navigator.push({
              name: 'ComponentPage01',
              component: list[propsIndex],
              params: {
                id: 1,
              }
          })
      }
  }
  render() {
      //let _data  = this.props.propsData;
      //console.log(this.props.propsData);
      //console.log(this.props.propsDection, this.props.propsIndex);


      return (
        <TouchableHighlight
          activeOpacity={0.5}
          underlayColor={'#ccc'}
          onPress={this._gotoDetailPage.bind(this)}
        >
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{this.props.propsData.ListName}</Text>
          </View>
        </TouchableHighlight>
      )
  }

}

var styles = StyleSheet.create({
  listItem:{
    paddingLeft:10,
    paddingRight:10,
    height:40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: '#ccc',
  },
  listItemText:{
    fontWeight: '100',
    //fontFamily: 'sans-francisco',
  }
});
