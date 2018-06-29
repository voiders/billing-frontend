import firebase from 'firebase'
import config from '../config/firebase'

var VueFirebase = {

    install(Vue, options = {}) {
      
      Vue.prototype.$firebase = firebase.initializeApp(options.config?options.config:config);
      
    }
    
  };

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFirebase)
}

export default VueFirebase;