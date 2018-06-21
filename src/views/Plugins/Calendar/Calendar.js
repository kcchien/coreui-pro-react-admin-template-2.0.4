import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment),
);

const currDate = new Date();
const currYear = currDate.getFullYear();
const currMonth = currDate.getMonth();

const events = [
  {
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(currYear, currMonth, 0),
    end: new Date(currYear, currMonth, 1),
  },
  {
    title: 'Long Event',
    start: new Date(currYear, currMonth, 7),
    end: new Date(currYear, currMonth, 10),
  },

  {
    title: 'DTS STARTS',
    start: new Date(currYear + 1, 2, 13, 0, 0, 0),
    end: new Date(currYear + 1, 2, 20, 0, 0, 0),
  },

  {
    title: 'DTS ENDS',
    start: new Date(currYear + 1, 10, 6, 0, 0, 0),
    end: new Date(currYear + 1, 10, 13, 0, 0, 0),
  },

  {
    title: 'Some Event',
    start: new Date(currYear, currMonth, 9, 0, 0, 0),
    end: new Date(currYear, currMonth, 9, 0, 0, 0),
  },
  {
    title: 'Conference',
    start: new Date(currYear, currMonth, 11),
    end: new Date(currYear, currMonth, 13),
    desc: 'Big conference for important people',
  },
  {
    title: 'Meeting',
    start: new Date(currYear, currMonth, 12, 10, 30, 0, 0),
    end: new Date(currYear, currMonth, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    title: 'Lunch',
    start: new Date(currYear, currMonth, 12, 12, 0, 0, 0),
    end: new Date(currYear, currMonth, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    title: 'Meeting',
    start: new Date(currYear, currMonth, 12, 14, 0, 0, 0),
    end: new Date(currYear, currMonth, 12, 15, 0, 0, 0),
  },
  {
    title: 'Happy Hour',
    start: new Date(currYear, currMonth, 12, 17, 0, 0, 0),
    end: new Date(currYear, currMonth, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    title: 'Dinner',
    start: new Date(currYear, currMonth, 12, 20, 0, 0, 0),
    end: new Date(currYear, currMonth, 12, 21, 0, 0, 0),
  },
  {
    title: 'Birthday Party',
    start: new Date(currYear, currMonth, 13, 7, 0, 0),
    end: new Date(currYear, currMonth, 13, 10, 30, 0),
  },
  {
    title: 'Birthday Party 2',
    start: new Date(currYear, currMonth, 13, 7, 0, 0),
    end: new Date(currYear, currMonth, 13, 10, 30, 0),
  },
  {
    title: 'Birthday Party 3',
    start: new Date(currYear, currMonth, 13, 7, 0, 0),
    end: new Date(currYear, currMonth, 13, 10, 30, 0),
  },
  {
    title: 'Late Night Event',
    start: new Date(currYear, currMonth, 17, 19, 30, 0),
    end: new Date(currYear, currMonth, 18, 2, 0, 0),
  },
  {
    title: 'Multi-day Event',
    start: new Date(currYear, currMonth, 20, 19, 30, 0),
    end: new Date(currYear, currMonth, 22, 2, 0, 0),
  },
];

// todo: reactive custom calendar toolbar component

class Calendar extends Component {

  render() {

    return (
      <div className="animated">
        <Card>
          <CardHeader>
            <i className="icon-calendar"></i>Calendar{' '}
            <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro Component</a>
            <div className="card-header-actions">
              <a href="https://github.com/intljusticemission/react-big-calendar" rel="noopener noreferrer" target="_blank" className="card-header-action">
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CardHeader>
          <CardBody style={{ height: '40em' }}>
            <BigCalendar className="d-sm-down-none"
                         {...this.props}
                         events={events}
                         views={['month', 'week', 'day']}
                         step={30}
                         defaultDate={new Date(currYear, currMonth, 1)}
                         defaultView='month'
                         toolbar={true}
            />
            <BigCalendar className="d-md-none"
                         {...this.props}
                         events={events}
                         views={['day']}
                         step={30}
                         defaultDate={new Date(currYear, currMonth, 1)}
                         defaultView='day'
                         toolbar={true}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Calendar;
