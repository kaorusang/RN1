'use strict';

import React, { Component } from 'react';
import {
  Dimensions,
  Navigator,
  AppRegistry,
  StyleSheet,
  ListView,
  ScrollView,
  Text,
  View
} from 'react-native';

import Listitem from './listitem';
import data from '../utils/data';

const {
  width,
  height
} = Dimensions.get('window');

export default class Listview extends Component {
  constructor(props) {
      super(props);
      this.state = {
        dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,}).cloneWithRows(data.MsgResult),
      }
  }
  componentDidMount() {
    //const self = this;
    //console.log(this.state.data);
    //console.log(self.state.data[0].MsgId);
    //this.fetchData();
  }
  render() {
    return (
      <ListView
        contentContainerStyle={styles.content}
        //style={styles.content}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        //renderRow={this.renderRow.bind(this)}
        initialListSize={20}
        pageSize={4} // should be a multiple of the no. of visible cells per row
        scrollRenderAheadDistance={500}
        renderScrollComponent={props=><ScrollView {...props} />}
        //renderRow={(rowData) => <View><Text>321</Text></View>}
      />
    );
  }

  // _genRows(pressData: {[key: number]: boolean}): Array<string> {
  //   var dataBlob = [];
  //   for (var ii = 0; ii < 100; ii++) {
  //     var pressedText = pressData[ii] ? ' (pressed)' : '';
  //     dataBlob.push('Row ' + ii + pressedText);
  //   }
  //   return dataBlob;
  // }

  renderRow(data, section, index) {
    //console.log(this.state.data);
    //console.log(data.MsgResult);
    return (
        <Listitem propsData={data} propsDection={section} propsIndex={index} />
    )
  }
  // _renderRow1 = () =>{
  //   return (
  //     <View>
  //       <Text>123</Text>
  //     </View>
  //   );
  // }
  // _renderRow = (rowData: string, sectionID: number, rowID: number) => {
  //   var rowHash = Math.abs(hashCode(rowData));
  //   var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
  //   return (
  //     <TouchableHighlight onPress={() => this._pressRow(rowID)} underlayColor="transparent">
  //       <View>
  //         <View style={styles.row}>
  //           <Image style={styles.thumb} source={imgSource} />
  //           <Text style={styles.text}>
  //             {rowData}
  //           </Text>
  //         </View>
  //       </View>
  //     </TouchableHighlight>
  //   );
  // }
}

var styles = StyleSheet.create({
  content:{
    flex:1,
  },
  list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 3,
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb: {
    width: 64,
    height: 64
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
  },
});
