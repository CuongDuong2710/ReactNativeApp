import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

/**
 * See 'Lecture88_The_Connect_Function.jpg'
 * We need to figure out is how to get this library's piece of data, piece of state from up here (store) and push it down to
 * into our library list.
 * We use 'connect' helper: glue between redux and react, a component to the redux store. Help component know application state (Give me state)
 */
class LibraryList extends Component {

  /**
   * Tells the list to use the ids for the react keys
   * @param item single item in FlatList. It will be automatically created in FlatList
   * @param index index of single item.
   */
  _keyExtractor = (item, index) => item.id

  /**
   * Rendering single row
   */
  _renderItem = ({item}) => {
    return <ListItem library={item}/>
  }

  /**
   * Rendering list of tech stack
   */
  render(){
    // So we clearly have our data inside this component
    // console.log('this.props', this.props)
    return (
      <FlatList
        data={this.props.libraries}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

/**
 * Taking our global state (in our redux store) and mapping some properties of that state object
 * and provide them as props to our component 'LibraryList'
 * @param {*} state app's global state
 */
const mapStateToProps = state => {
  // return an object will show up as props to my component
  // console.log('state: ', state)
  return { libraries: state.libraries }
}

/**
 * Connect is using for mapping global state to this components props.
 */
export default connect(mapStateToProps)(LibraryList)

// console.log('state: ', state)
// state:  {libraries: Array(9)}
//           libraries:Array(9)
//             0:{id: 0, title: "Webpack", description: "Webpack is a module bundler. It packs CommonJs/AMD… multiple bundles, which can be loaded on demand."}
//             1:{id: 1, title: "React", description: "React makes it painless to create interactive UIs.…just the right components when your data changes."}


// console.log('this.props', this.props)
// this.props {libraries: Array(9), dispatch: ƒ}