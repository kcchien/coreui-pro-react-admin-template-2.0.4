import React from 'react';
import { Row, Col, Card, CardHeader, CardBody, FormGroup, Label, FormText, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { TextMask, InputAdapter } from 'react-text-mask-hoc';

// React DateRangePicker
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';

// React select
import states from './data/states';
import Select from 'react-select';
import 'react-select/dist/react-select.min.css';

const options = states.US;

class AdvancedForms extends React.Component {

  constructor(props) {
    super(props);
    this.saveChanges = this.saveChanges.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);

    this.state = {
      value: ['UT','OH'],
      windowWidth: window.innerWidth,
      orientation: 'vertical',
      openDirection: 'down'
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  saveChanges(value) {
    this.setState({ value });
  }

  updateDimensions() {
    const windowWidth = window.innerWidth;
    this.setState((state)=> {
      return ({
        windowWidth: windowWidth,
        orientation: windowWidth < 620 ? 'vertical' : 'horizontal',
        openDirection: windowWidth < 620 ? 'up' : 'down'
      });
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm={12} md={6} style={{flexBasis: 'auto'}}>
            <Card>
              <CardHeader>
                <i className="icon-note"></i><strong>Masked Input</strong> <small>React Text Mask</small>{' '}
                <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro Component</a>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label>Date input</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText><i className="fa fa-calendar"></i></InputGroupText>
                    </InputGroupAddon>
                    <TextMask
                      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                      Component={InputAdapter}
                      className="form-control"
                    />
                  </InputGroup>
                  <FormText color="muted">
                    ex. 99/99/9999
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label>Phone input</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText><i className="fa fa-phone"></i></InputGroupText>
                    </InputGroupAddon>
                    <TextMask
                      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                      Component={InputAdapter}
                      className="form-control"
                    />
                  </InputGroup>
                  <FormText color="muted">
                    ex. (999) 999-9999
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label>Taxpayer Identification Numbers</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText><i className="fa fa-usd"></i></InputGroupText>
                    </InputGroupAddon>
                    <TextMask
                      mask={[/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                      Component={InputAdapter}
                      className="form-control"
                    />
                  </InputGroup>
                  <FormText color="muted">
                    ex. 99-9999999
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label>Social Security Number</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText><i className="fa fa-male"></i></InputGroupText>
                    </InputGroupAddon>
                    <TextMask
                      mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                      Component={InputAdapter}
                      className="form-control"
                    />
                  </InputGroup>
                  <FormText color="muted">
                    ex. 999-99-9999
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label>Eye Script</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                    </InputGroupAddon>
                    <TextMask
                      mask={['~', /\d/, '.', /\d/, /\d/, ' ', '~', /\d/, '.', /\d/, /\d/, ' ', /\d/, /\d/, /\d/]}
                      Component={InputAdapter}
                      className="form-control"
                    />
                  </InputGroup>
                  <FormText color="muted">
                    ex. ~9.99 ~9.99 999
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label>Credit Card Number</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText><i className="fa fa-credit-card"></i></InputGroupText>
                    </InputGroupAddon>
                    <TextMask
                      mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                      Component={InputAdapter}
                      className="form-control"
                    />
                  </InputGroup>
                  <FormText color="muted">
                    ex. 9999 9999 9999 9999
                  </FormText>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card>
              <CardHeader>
                <i className="icon-note"></i><strong>React-Select</strong>{' '}
                <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro Component</a>
                <div className="card-header-actions">
                  <a href="https://github.com/JedWatson/react-select" rel="noreferrer noopener" target="_blank" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <Select
                name="form-field-name2"
                value={this.state.value}
                options={options}
                onChange={this.saveChanges}
                multi
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <i className="icon-calendar"></i><strong>React-Dates</strong>{' '}
              <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro Component</a>
              <div className="card-header-actions">
                <a href="https://github.com/airbnb/react-dates" rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="startDate"
              endDate={this.state.endDate}
              endDateId="endDate"
              onDatesChange={({startDate, endDate}) => this.setState({startDate, endDate})}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({focusedInput})}
              orientation={this.state.orientation}
              openDirection={this.state.openDirection}
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
)
}
}

export default AdvancedForms;
