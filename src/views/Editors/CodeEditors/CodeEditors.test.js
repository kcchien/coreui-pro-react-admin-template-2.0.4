import React from 'react';
import ReactDOM from 'react-dom';
import CodeEditors from './CodeEditors';

global.document.body.createTextRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {},
  getBoundingClientRect: function(){
    return {right: 0};
  },
  getClientRects: () => [],
});


it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(<CodeEditors/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
