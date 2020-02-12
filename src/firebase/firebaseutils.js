import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAh7-MftTx3O065m0d-a7OOjhGeQo1YBN0',
  authDomain: 'crwn-clothing-df73c.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-df73c.firebaseio.com',
  projectId: 'crwn-clothing-df73c',
  storageBucket: 'crwn-clothing-df73c.appspot.com',
  messagingSenderId: '826530378699',
  appId: '1:826530378699:web:a14b00791f710b8537bc4e',
  measurementId: 'G-71L8BPB5NE'
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

// loads all the firebase utility libs
// gives access to auth provider class from the authentication lib
// takes a couple of custom params, using the custom params method. triggers the Google popup whenever we use Google auth.
// signInWithPopup() takes this provider class.
// // console.log(firestore.doc('users/128ladfk'))
// want to check if we have already stored this user object that we have authenticated
// const userRef = firestore.doc(`users/${userAuth.uid}`)
// going to check inside our code using snapshot exists property
// have to use documentRef to create data
//
