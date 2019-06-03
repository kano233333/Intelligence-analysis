import App from './App.vue'
import ShortSentence from '../shortSentence'
import Start from '../start'
import DataFrom from '../dataFrom'
import Keyword from '../keyword'
import Relative from '../relative'
import Theme from '../theme'
import Tools from '../tools'
import Help from '../help'
import Statistics from '../shortSentence/statistics'
import Word from '../shortSentence/word'

export default [
  {
    path: '/index',
    name: "index",
    redirect:'shortSentence',
    component: App,
    meta: {
      keepAlive: true 
    },
    children:[
      {
        path:'/shortSentence',
        name:'shortSentence',
        component:ShortSentence,
        redirect:'/shortSentence/statistics',
        children:[
          {
            path:'statistics',
            name:'statistics',
            component:Statistics
          },
          {
            path:'word',
            name:'word',
            component:Word
          }
        ]
      },
      {
        path:'/start',
        name:'start',
        component:Start
      },
      {
        path:'/dataFrom',
        name:'dataFrom',
        component:DataFrom
      },
      {
        path:'/keyword',
        name:'keyword',
        component:Keyword
      },
      {
        path:'/relative',
        name:'relative',
        component:Relative
      },
      {
        path:'/theme',
        name:'theme',
        component:Theme
      },
      {
        path:'/tools',
        name:'tools',
        component:Tools
      },
      {
        path:'/help',
        name:'help',
        component:Help
      }
    ]
  },
]