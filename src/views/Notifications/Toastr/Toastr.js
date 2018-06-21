import React, {Component} from 'react';
import {Button, Card, CardHeader, CardBody, CardFooter} from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Toastr extends Component {
  constructor(props) {
    super(props);

    this.notify = this.notify.bind(this);
    this.error = this.error.bind(this);
    this.success = this.success.bind(this);
    this.info = this.info.bind(this);
    this.warn = this.warn.bind(this);
    this.clear = this.clear.bind(this);
  }

  notify() {
    // default type
    return toast('Hello World!');
  }
  error() {
    // add type: 'error' to options
    return toast.error('Danger!');
  }
  success() {
    // add type: 'success' to options
    // positioning: https://github.com/fkhadra/react-toastify#positioning-toast
    return toast.success('Success... ', {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  }
  info() {
    // add type: 'info' to options
    return toast.info('Info');
  }
  warn() {
    // add type: 'warning' to options
    return toast.warn('Warning...');
  }
  clear() {
    // Remove all toasts !
    return toast.dismiss();
  }

  render() {

    const containerStyle = {
      zIndex: 1999
    };

    return (
      <div className="animated">
        <ToastContainer position="top-right" autoClose={5000} style={containerStyle}/>
        <Card>
          <CardHeader>
            <i className="icon-info"></i> Toastr{' '}
            <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro Component</a>
            <div className="card-header-actions">
              <a href="https://github.com/fkhadra/react-toastify" rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              React Toastify component
            </p>
            <Button color="secondary" className="mr-1" onClick={this.notify}>Notify</Button>
            <Button color="danger" className="mr-1" onClick={this.error}>Error</Button>
            <Button color="info" className="mr-1" onClick={this.info}>Info</Button>
            <Button color="success" className="mr-1" onClick={this.success}>Success</Button>
            <Button color="warning" className="mr-1" onClick={this.warn}>Warning</Button>
          </CardBody>
          <CardFooter>
            <Button color="primary" onClick={this.clear}>Clear All</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Toastr;
