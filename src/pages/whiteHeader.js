/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Navigator,
  TouchableOpacity,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

import BlueHeader from '../components/header';
import data from '../utils/data1';
var isIOS = Platform.OS == 'ios';

export default class WhiteHeader extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }
  render() {
      const { navigator } = this.props;
      let title = data.MsgResult[1].data.ListName;
      console.log(title);
      return (
          <View style={styles.container}>
            <BlueHeader navigator={navigator} title={title}/>
            <View style={styles.content}>
              <Text>whiteHeader</Text>
            </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    paddingTop: isIOS ? 20 : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: isIOS ? 64 : 44,
    backgroundColor: '#099fde',
    shadowColor: '#000000',
		shadowOpacity: 0.5,
    shadowOffset:  {width:0, height:2},
    shadowRadius: 5,
  },
  btn_left: {
    height:44,
    width:44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_right: {
    height:44,
    width:44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_text:{
    fontSize:16,
    color: '#fff',
  },
  header_text_view: {
    height:44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_text: {
    fontSize:16,
    color: '#fff',
  },
  icon_back:{
    alignSelf:'center',
    width:10,
    height:10,
    borderLeftWidth: 2,
    borderLeftColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    //backgroundColor: '#ff0000',
    transform:[{rotate:('45deg')}],
  },
  content:{
    flex:1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
