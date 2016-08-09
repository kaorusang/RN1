'use strict';

import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  PixelRatio
} from 'react-native';

export default class ListHeader extends Component {
  constructor(props) {
      super(props);
      this.state = {

      }
  }
  componentDidMount() {
  }

  render() {
      const { propsData } = this.props;
      //console.log(propsData);
      return (
        <View>
          { propsData ?
          <TouchableHighlight style={styles.ListHeader}>
            <View>
              <Text style={styles.text}>
                {this.props.propsData.SectionName}
              </Text>
            </View>
          </TouchableHighlight> : null
          }
        </View>
      )
  }
}

var styles = StyleSheet.create({
  ListHeader: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B5998',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    paddingHorizontal: 8,
  },
});
