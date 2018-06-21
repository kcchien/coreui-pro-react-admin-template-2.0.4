import React from 'react';
import ReactDOM from 'react-dom';
import Toastr from './Toastr';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Toastr />, div);
  ReactDOM.unmountComponentAtNode(div);
});
