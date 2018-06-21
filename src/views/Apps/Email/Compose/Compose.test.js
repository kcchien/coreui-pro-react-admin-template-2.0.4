import React from 'react';
import ReactDOM from 'react-dom';
import Compose from './Compose';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Compose />, div);
  ReactDOM.unmountComponentAtNode(div);
});
