import React from 'react';
import { Link } from 'react-router-dom'

import { RouteWithSubRoutes } from '../index'

class Inbox extends React.Component {
  render() {
    return (
      <div>This is the Inbox page.
        <li><Link to='/inbox/message/1'>message</Link></li>
        {this.props.routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
        ))}
      </div>
    );
  }
}

export default Inbox
