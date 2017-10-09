import React, { Component } from 'react'
import { Text } from 'react-native'
import { CardSection } from './common'

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    // console.log('this.props', this.props)

    return (
      <CardSection>
        <Text style={titleStyle}>{this.props.library.title}</Text>
      </CardSection>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem

// console.log('this.props', this.props)
// this.props {library: {…}} 
// library: {id: 0, title: "Webpack", description: "Webpack is a module bundler. It packs CommonJs/AMD… multiple bundles, which can be loaded on demand."}
