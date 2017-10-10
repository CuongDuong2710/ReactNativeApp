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
  /**
   * Expanded selected row by comparing this row's Id with selected Id
   */
  renderDescription() {
    const { library, expanded } = this.props

    if (expanded) {
      return (
        <Text>{library.description}</Text>
      )
    }
  }

  render() {
    const { titleStyle } = styles;
    // 1. console.log('this.props', this.props)
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
          {this.renderDescription()}
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
 * Taking our global state and provide them as props in this component
 * @param {*} state global app state
 * @param {*} ownProps are the props that were passed to the component we're wrapping (ListItem). It exactly equals to 'this.props'
 */
const mapStateToProps = (state, ownProps) => {
  // comparing selected Id with this row's Id 
  const expanded = state.selectedLibraryId === ownProps.library.id
  return { expanded }
}

/**
 * @param actions this says take these action creators you know in here as props
 * 2nd argument (ListItem): bind action creators to this component
 */
export default connect(mapStateToProps, actions)(ListItem)

// 1.
// console.log('this.props', this.props)
// this.props {library: {…}, selectedLibrary: ƒ}
// library: {id: 0, title: "Webpack", description: "Webpack is a module bundler. It packs CommonJs/AMD… multiple bundles, which can be loaded on demand."}
// selectedLibrary:ƒ ()

// 2.
// ListItem -> state {libraries: Array(9), selectedLibraryId: null}
// ListItem -> state {libraries: Array(9), selectedLibraryId: 3}