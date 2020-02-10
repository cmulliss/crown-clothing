import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import './pages/homepage/homepage.styles.scss'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up'
import { auth } from './firebase/firebaseutils'

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
      console.log('user:', user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    )
  }
}

export default App
// we want to store the state of our user in our app, want to access our current user object throughout our app
// componentDidMount() so we are aware of signing in and out, aware of state change
// to avoid memory leaks, want to close subscription whenever component unmounts.
// both lifecycle methods are how we handle our app being aware of any auth changes on firebase.
// currentUSer prop on header, if null, will pass in null, otherwide will pass in user object.

