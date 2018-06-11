
import App from './App'
import About from './About/About'
import Inbox from './Inbox/Inbox'
import Message from './Inbox/Message'

const routeConfig = [
  { path: '/about',
    component: About
  },
  { path: '/inbox',
    component: Inbox,
    routes: [
      { path: '/inbox/message',
        component: Message
      }
    ]
  }
]

export default routeConfig;