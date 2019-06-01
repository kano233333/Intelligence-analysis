import App from './App.vue'

export default [
  {
    path: '/index',
    name: "index",
    component: App,
    meta: {
      keepAlive: true 
    }
  },
]