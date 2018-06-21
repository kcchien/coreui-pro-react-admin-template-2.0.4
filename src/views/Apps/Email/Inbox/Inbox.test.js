import React from 'react';
import ReactDOM from 'react-dom';
import Inbox from './Inbox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Inbox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
