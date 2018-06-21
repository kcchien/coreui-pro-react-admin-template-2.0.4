import React, {Component} from 'react';
import { Nav, NavItem, NavLink, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, Button, ButtonGroup } from 'reactstrap';

class Inbox extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="email-app mb-4">
          <nav>
            <a href="#/apps/email/compose" className="btn btn-danger btn-block">New Email</a>
            <Nav>
              <NavItem>
                <NavLink href="#/apps/email/inbox"><i className="fa fa-inbox"></i> Inbox <Badge color="danger">4</Badge></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><i className="fa fa-star"></i> Stared</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><i className="fa fa-rocket"></i> Sent</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><i className="fa fa-trash-o"></i> Trash</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><i className="fa fa-bookmark"></i> Important<Badge color="info">5</Badge></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><i className="fa fa-exclamation-circle"></i> Spam <Badge color="danger">4</Badge></NavLink>
              </NavItem>
            </Nav>
          </nav>
          <main className="inbox">
            <div className="toolbar">
              <ButtonGroup className={'mr-1'}>
                <Button color="light"><span className="fa fa-envelope"></span></Button>
                <Button color="light"><span className="fa fa-star"></span></Button>
                <Button color="light"><span className="fa fa-star-o"></span></Button>
                <Button color="light"><span className="fa fa-bookmark-o"></span></Button>
              </ButtonGroup>
              <ButtonGroup className={'mr-1'}>
                <Button color="light"><span className="fa fa-mail-reply"></span></Button>
                <Button color="light"><span className="fa fa-mail-reply-all"></span></Button>
                <Button color="light"><span className="fa fa-mail-forward"></span></Button>
              </ButtonGroup>
              <Button color="light" className={'mr-1'}><span className="fa fa-trash-o"></span></Button>
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret color="light">
                  <span className="fa fa-tags"></span>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>add label<Badge color="danger">Home</Badge></DropdownItem>
                  <DropdownItem>add label<Badge color="info">Job</Badge></DropdownItem>
                  <DropdownItem>add label<Badge color="success">Clients</Badge></DropdownItem>
                  <DropdownItem>add label<Badge color="warning">News</Badge></DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
              <ButtonGroup className="float-right">
                <Button color="light"><span className="fa fa-chevron-left"></span></Button>
                <Button color="light"><span className="fa fa-chevron-right"></span></Button>
              </ButtonGroup>
            </div>

            <ul className="messages">
              <li className="message unread">
                <a href="#/apps/email/message">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">Lukasz Holeczek</span>
                    <span className="date"><span className="fa fa-paper-clip"></span> Today, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </a>
              </li>
              <li className="message">
                <a href="#/apps/email/message">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">Lukasz Holeczek</span>
                    <span className="date"><span className="fa fa-paper-clip"></span> Today, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </a>
              </li>
              <li className="message">
                <a href="#/apps/email/message">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">Lukasz Holeczek</span>
                    <span className="date">Today, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </a>
              </li>
              <li className="message unread">
                <a href="#/apps/email/message">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">Lukasz Holeczek</span>
                    <span className="date">Today, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </a>
              </li>
              <li className="message">
                <a href="#/apps/email/message">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">Lukasz Holeczek</span>
                    <span className="date">Today, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>

                </a>
              </li>
              <li className="message">
                <a href="#/apps/email/message">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">Lukasz Holeczek</span>
                    <span className="date">Today, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </a>
              </li>
              <li className="message unread">
                <a href="#/apps/email/message">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">Lukasz Holeczek</span>
                    <span className="date">Today, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </a>
              </li>
              <li className="message">
                <a href="#/apps/email/message">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">Lukasz Holeczek</span>
                    <span className="date">Today, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </a>
              </li>
              <li className="message">
                <a href="#/apps/email/message">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">Lukasz Holeczek</span>
                    <span className="date">Today, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </a>
              </li>
            </ul>
          </main>
        </div>
      </div>
    )
  }
}

export default Inbox;
