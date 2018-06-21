import React, {Component} from 'react';
import { Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Input } from 'reactstrap';

import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';

import sampleCode from './_examples';

// const defaults = sampleCode

class CodeEditors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readOnly: false,
      theme: 'eclipse',
      mode: 'markdown',
      code: sampleCode.markdown
    };
  }

  componentDidMount() {
    this.setState({
      mode: 'xml',
      code: sampleCode.xml
    });
    if (this.editor.editor.options.autofocus) {
      this.editor.editor.setSize('100%', '50vh')
      this.editor.editor.focus();
    }
  }

  render() {

    const options = {
      lineNumbers: true,
      readOnly: this.state.readOnly,
      mode: this.state.mode,
      theme: this.state.theme,
      autofocus: true
    }

    return (
      <Card>
        <CardHeader>
          CodeMirror{' '}
          <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro Component</a>
          <div className="card-header-actions">
            <a href="https://github.com/scniro/react-codemirror2" rel="noopener noreferrer" target="_blank" className="card-header-action">
              <small className="text-muted">docs</small>
            </a></div>
        </CardHeader>
        <CardBody>
          <CodeMirror
            ref={(node) => this.editor = node}
            value={this.state.code}
            options={options}
            onBeforeChange={(editor, data, value) => { this.setState({value}); }}
            onChange={(editor, metadata, value) => { }}
          />
        </CardBody>
        <CardFooter>
          <Form inline>
            <FormGroup>
                <Input type="select" bsSize="sm" name="theme" id="theme" onChange={(e) => this.changeTheme(e)} value={this.state.theme} >
                  <option value="material">material</option>
                  <option value="eclipse">eclipse</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Input type="select" bsSize="sm" name="mode" id="mode" onChange={(e) => this.changeMode(e)} value={this.state.mode} >
                  <option value="markdown">markdown</option>
                  <option value="javascript">javascript</option>
                  <option value="xml">html</option>
                </Input>
            </FormGroup>
          </Form>
        </CardFooter>
      </Card>
    );
  }

  changeMode(e) {
    const mode = e.target.value;
    this.setState({
      mode: mode,
      code: sampleCode[mode]
    });
    this.editor.editor.focus();
  }

  changeTheme(e) {
    const theme = e.target.value;
    this.setState({
      theme: theme,
    });
  }

  toggleReadOnly() {
    this.setState({
      readOnly: !this.state.readOnly
    }, () => { this.editor.editor.focus() })
  }
}

export default CodeEditors;
