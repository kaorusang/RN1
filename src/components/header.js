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

var isIOS = Platform.OS == 'ios';

export default class BlueHeader extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }
  _pressButton() {
      const { navigator } = this.props;

      if(navigator) {
          //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
          navigator.jumpBack();
      }
  }
  _pressButtonPop() {
      const { navigator } = this.props;
      if(navigator) {
          navigator.pop();
      }
  }
  render() {
      const { title } = this.props;
      return (
          <View style={styles.header}>
            <TouchableOpacity style={styles.btn_left} onPress={this._pressButtonPop.bind(this)}>
              <View style={styles.icon_back}></View>
            </TouchableOpacity>
            <View style={styles.header_text_view}>
              <Text style={styles.header_text}>{title}</Text>
            </View>
            <TouchableOpacity style={styles.btn_right}>
              <Text style={styles.btn_text}>222</Text>
            </TouchableOpacity>
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
