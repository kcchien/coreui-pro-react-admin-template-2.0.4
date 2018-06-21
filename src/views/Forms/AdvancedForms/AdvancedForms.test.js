import React from 'react';
import ReactDOM from 'react-dom';
import AdvancedForms from './AdvancedForms';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdvancedForms />, div);
  ReactDOM.unmountComponentAtNode(div);
});
