import Vue from 'vue'
import App from './App'
import router from '/.router'
import axios from 'axios'


//This is the base url for the quote
axios.defaults.baseURL = 'https://api.quotable.io/random'


