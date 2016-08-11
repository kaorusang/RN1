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

      let dataBlob = data;
      
      var dataSource = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      });

      //console.log(dataBlob, sectionIDs, rowIDs);

      //console.log(dataBlob)

      this.state = {
        //使用section
        dataSource: dataSource.cloneWithRowsAndSections(dataBlob),
        //不使用section
        //dataSource: dataSource.cloneWithRows(dataBlob.section1),
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

  
  renderSectionHeader(sectionData, sectionId){
    return(
      <ListHeader propsData={sectionData} propsSectionId={sectionId}/>
    )
  }



  renderRow(data: string, section: number, index: number) {
    const { navigator } = this.props;
    console.log(data)
    return (
        <Listitem navigator={navigator} propsData={data} />
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
