import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { UserGetAll } from './actions/actions'
import UserList from './components/users/UserList';

class App extends Component {
  componentDidMount ()
  {
    const { getAllUsers } = this.props
    console.log('App componentDidMount', getAllUsers)
    getAllUsers ()
  }

  render() {
    return (
      <div className="App">
        <UserList />
      </div>)
  }
}

const mapStateToProps = dispatch => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllUsers: () =>  { return dispatch(UserGetAll()) }
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (App);
