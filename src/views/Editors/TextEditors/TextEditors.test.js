import React from 'react';
import ReactDOM from 'react-dom';
import TextEditors from './TextEditors';
// import MutationObserver from 'mutationobserver-shim'
import fs from 'fs'
import path from 'path'

const mo = fs.readFileSync(
  path.resolve('node_modules', 'mutationobserver-shim', 'dist', 'mutationobserver.min.js'),
  { encoding: 'utf-8' },
);
const moScript = global.document.createElement('script');
moScript.textContent = mo;

global.document.body.appendChild(moScript);

global.document.getSelection = () => ({
  removeAllRanges: () => {},
  getRangeAt: () => {}
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextEditors/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
