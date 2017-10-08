import React, { Component } from 'react'
import { connect } from 'react-redux'

/**
 * See 'Lecture88_The_Connect_Function.jpg'
 * We need to figure out is how to get this library's piece of data, piece of state from up here (store) and push it down to
 * into our library list.
 * We use 'connect' helper: glue between redux and react, a component to the redux store. Help component know application state (Give me state)
 */
class LibraryList extends Component {
  render(){
    return;
  }
}

export default connect()(LibraryList)