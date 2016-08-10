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
import ListHeader from './listHeader';

const {
  width,
  height
} = Dimensions.get('window');

export default class Listview extends Component {


  constructor(props) {
      super(props);

      const { data } = this.props;
      let data1 = data.MsgResult;
      //console.log(data1);

      var getSectionData = (dataBlob, sectionID) => {
        return dataBlob[sectionID];
      };
      var getRowData = (dataBlob, sectionID, rowID) => {
        return dataBlob[rowID];
      };

      var NUM_SECTIONS = data1.length;
      //console.log(getRowData);
      var NUM_ROWS_PER_SECTION = 3;

      
      var dataBlob = {};
      var sectionIDs = [];
      var rowIDs = [];
      for (var ii = 0; ii < NUM_SECTIONS; ii++) {
        //var sectionName = 'Section ' + ii;
        var sectionName = ii;
        sectionIDs.push(sectionName);
        //dataBlob[sectionName] = sectionName;
        dataBlob[sectionName] = data1[ii].data.ListName;
        rowIDs[ii] = [];

        //console.log(dataBlob);

        for (var jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
          //var rowName = 'S' + ii + ', R' + jj;
          var index = jj;
          rowIDs[ii].push(index);
          //dataBlob[rowName] = rowName;
          dataBlob[index] = data1[jj];
          //dataBlob[index] = data1[ii];

          //console.log(dataBlob);
        }
      }

      //console.log(dataBlob)

      var dataSource = new ListView.DataSource({
        getRowData: getRowData,
        getSectionHeaderData: getSectionData,
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      });


      this.state = {
        //使用section
        //dataSource: dataSource.cloneWithRowsAndSections(data.MsgResult, sectionIDs, rowIDs),
        //不使用section
        dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,}).cloneWithRows(data.MsgResult),
        //dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,}).cloneWithRows(data.MsgResult),
      }
      


  }
  componentDidMount() {

  }

  render() {

    return (
      <ListView
        //contentContainerStyle={styles.content}
        style={styles.content}
        dataSource={this.state.dataSource}
        //renderRow={(rowData) => <View><Text>321</Text></View>}
        renderRow={this.renderRow.bind(this)}
        //renderHeader={this.renderHeader.bind(this)}
        //renderFooter={this.renderHeader.bind(this)}
        renderSectionHeader={this.renderSectionHeader.bind(this)}
        initialListSize={0}
        pageSize={1} // should be a multiple of the no. of visible cells per row
        scrollRenderAheadDistance={200}
        renderScrollComponent={props=><ScrollView {...props} />}

      />
    );
  }

  renderSectionHeader(sectionData, index){
    console.log(sectionData)
    if(index == 's1'){
      var i = 0;
    } else if (index == 's2'){
      var i = 1;
    } else if (index == 's3'){
      var i = 2;
    }
    return(
      <ListHeader propsData={sectionData[i]}/>
    )
  }

  // 有section
  // renderSectionHeader(sectionData, index){
  //   console.log(sectionData)
  //   if(index == 's1'){
  //     var i = 0;
  //   } else if (index == 's2'){
  //     var i = 1;
  //   } else if (index == 's3'){
  //     var i = 2;
  //   }
  //   return(
  //     <ListHeader propsData={sectionData}/>
  //   )
  // }



  renderRow(data, section, index) {
    const { navigator , list } = this.props;

    //console.log(data)

    //console.log(index)

    return (
        <Listitem navigator={navigator} propsData={data} propsDection={section} propsIndex={index} list={list}  />
    )
  }

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
