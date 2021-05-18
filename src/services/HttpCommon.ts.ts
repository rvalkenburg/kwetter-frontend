import axios from "axios";
import firebase from "firebase/app";

export default function setup() {
axios.interceptors.request.use(
    async config => {
        const token = await firebase.auth().currentUser?.getIdToken();
        config.headers = { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
        return config;
      },
      error => {
        Promise.reject(error)
    });
}