import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMaps from './GoogleMaps';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GoogleMaps/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
