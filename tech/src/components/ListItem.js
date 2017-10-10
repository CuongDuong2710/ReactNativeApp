import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

/**
 * Rendering single item of Flatlist.
 * Needing to get access our redux state to expand selected item.
 * By comparing the value of selected library with 'this.props.library.Id'
 */
class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    // console.log('this.props', this.props)
    const { title, id } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectedLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

/**
 * @param actions this says take these action creators you know in here as props
 * 2nd argument (ListItem): bind action creators to this component
 */
export default connect(null, actions)(ListItem)

// console.log('this.props', this.props)
// this.props {library: {…}, selectedLibrary: ƒ}
// library: {id: 0, title: "Webpack", description: "Webpack is a module bundler. It packs CommonJs/AMD… multiple bundles, which can be loaded on demand."}
// selectedLibrary:ƒ ()
