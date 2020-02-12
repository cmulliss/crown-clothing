import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import './pages/homepage/homepage.styles.scss'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up'
import { auth, createUserProfileDocument } from './firebase/firebaseutils'

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })

          console.log(this.state)
        })
      }

      this.setState({ currentUser: userAuth })
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

// If signing up, what we get back from our fn is the userRef. We made sure we were passing back the userRef object at the end. We are going to use it check if our db has updated.
