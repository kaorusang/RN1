'use strict';

import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

//import data from '../utils/data';

export default class Listitem extends Component {
  constructor(props) {
      super(props);
      this.state = {

      }
  }
  componentDidMount() {
  }
  render() {
      //let _data  = this.props.propsData;
      //console.log(this.props.propsData);
      console.log(this.props.propsDection, this.props.propsIndex);
      return (
        <TouchableHighlight>
          <View style={{ backgroundColor:'pink',marginTop:10,height:100,}}>
            <Text>{this.props.propsData.MsgId}</Text>
          </View>
        </TouchableHighlight>
      )
  }

}

var styles = StyleSheet.create({

});
