import React, {Component} from 'react';
import { Nav, NavItem, NavLink, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, Button, ButtonGroup, FormGroup, Input } from 'reactstrap';

class Message extends Component {

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
          <main className="message">
            <div className="toolbar">
              <ButtonGroup className={'mr-1'}>
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
            </div>
            <div className="details">
              <div className="title">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>
              <div className="header">
                <img className="avatar" src="assets/img/avatars/7.jpg" alt="avatar"/>
                <div className="from">
                  <span>Lukasz Holeczek</span>
                  lukasz@bootstrapmaster.com
                </div>
                <div className="date">Today, <b>3:47 PM</b></div>
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <blockquote>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </blockquote>
              </div>
              <div className="attachments">
                <div className="attachment">
                  <Badge color="danger">zip</Badge> <b>bootstrap.zip</b> <i>(2,5MB)</i>
                  <span className="menu">
                    <a href="#" className="fa fa-search">{null}</a>
                    <a href="#" className="fa fa-share">{null}</a>
                    <a href="#" className="fa fa-cloud-download">{null}</a>
                  </span>
                </div>
                <div className="attachment">
                  <Badge color="info">txt</Badge> <b>readme.txt</b> <i>(7KB)</i>
                  <span className="menu">
                    <a href="#" className="fa fa-search">{null}</a>
                    <a href="#" className="fa fa-share">{null}</a>
                    <a href="#" className="fa fa-cloud-download">{null}</a>
                  </span>
                </div>
                <div className="attachment">
                  <Badge color="success">xls</Badge> <b>spreadsheet.xls</b> <i>(984KB)</i>
                  <span className="menu">
                    <a href="#" className="fa fa-search">{null}</a>
                    <a href="#" className="fa fa-share">{null}</a>
                    <a href="#" className="fa fa-cloud-download">{null}</a>
                  </span>
                </div>
              </div>
              <form method="post" action="">
                <FormGroup>
                  <Input type="textarea" id="message" name="body" rows="12" placeholder="Click here to reply"></Input>
                </FormGroup>
                <FormGroup>
                  <Button type="submit" color="success">Send message</Button>
                </FormGroup>
              </form>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default Message;
