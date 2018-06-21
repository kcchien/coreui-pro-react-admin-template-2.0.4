import React from 'react';
import ReactDOM from 'react-dom';
import Invoice from './Invoice';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Invoice />, div);
  ReactDOM.unmountComponentAtNode(div);
});
