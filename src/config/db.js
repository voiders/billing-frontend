import firebase from 'firebase'

let config = {
    apiKey: process.env.VUE_FIRE_API_KEY,
    authDomain: process.env.VUE_FIRE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_FIRE_DB_URL,
    projectId: process.env.VUE_FIRE_PROJECT_ID,
    storageBucket: process.env.VUE_FIRE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_FIRE_MSG_ID
  }


let  app = firebase.initializeApp(config)
export const db = app.database()