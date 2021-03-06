import React, { Component } from 'react'
import { connect } from 'react-redux'

import { User } from '../components/User'
import { Page } from '../components/Page'

import './App.css'

class App extends Component {
  render() {
    const { page, user } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    ...store
  }
};

export default connect(mapStateToProps)(App)