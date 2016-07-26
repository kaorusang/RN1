/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  Navigator,
  TouchableOpacity,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import details from './details.ios';
import List from './components/listview';
import data from './utils/data';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: 1,
          user: null,
          data: data.MsgResult,
        };
    }
    componentDidMount() {
      const self = this;
      //console.log(self.state.data);
      //this.fetchData();

    }
    _pressButton() {
        let _this = this;
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: details,
                params: {
                  id: this.state.id,
                  getUser: function(user){
                    _this.setState({
                      user: user,
                    })
                  }
                }
            })
        }
    }
    render() {
      if(this.state.user){
        return(
            <View style={styles.container}>
              <View style={styles.header}>
                <TouchableOpacity style={styles.btn_left}>
                  <View style={styles.icon_back}></View>
                </TouchableOpacity>
                <View style={styles.header_text_view}>
                  <Text style={styles.header_text}>首页</Text>
                </View>
                <TouchableOpacity style={styles.btn_right}>
                  <Text style={styles.btn_text}>123</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.content}>
                <Text>{JSON.stringify(this.state.user)}</Text>
              </View>
            </View>
        )
      }else{
        return (
            <View style={styles.container}>
              <View style={styles.header}>
                <TouchableOpacity style={styles.btn_left}>
                  <View style={styles.icon_back}></View>
                </TouchableOpacity>
                <View style={styles.header_text_view}>
                  <Text style={styles.header_text}>demo</Text>
                </View>
                <TouchableOpacity style={styles.btn_right}>
                  <Text style={styles.btn_text}>123</Text>
                </TouchableOpacity>
              </View>
              { false ?
              <View style={styles.content}>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳转{this.state.id}</Text>
                </TouchableOpacity>
              </View>:null
              }
              <List />
            </View>
        )
      }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    //backgroundColor: '#F5FCFF',
  },
  header: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height:64,
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
