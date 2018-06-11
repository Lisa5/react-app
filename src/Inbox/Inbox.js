import React from 'react';
import { Link } from 'react-router-dom'

class Inbox extends React.Component {
  render() {
    return (
      <div>This is the Inbox page.
        <li><Link to='/inbox/message'>message</Link></li>
      </div>
    );
  }
}

export default Inbox
