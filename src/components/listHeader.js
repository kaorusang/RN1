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
      const { propsData, propsSectionId } = this.props;
      console.log(propsSectionId);
      return (
        <View>
          {propsSectionId !== 's1' ? propsSectionId ?
          <TouchableHighlight style={styles.ListHeader}>
            <View>
              <Text style={styles.text}>
                {propsSectionId}
              </Text>
            </View>
          </TouchableHighlight> : null :null
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
