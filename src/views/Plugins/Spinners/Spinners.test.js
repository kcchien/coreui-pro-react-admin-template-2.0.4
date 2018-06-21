import React from 'react';
import ReactDOM from 'react-dom';
import Spinners from './Spinners';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Spinners />, div);
  ReactDOM.unmountComponentAtNode(div);
});
