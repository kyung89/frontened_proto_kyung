import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarForm() {
  const [value, onChange] = useState(new Date());

  return (<div>CalendarForm</div>);

  // return (
  //   <div>
  //     <Calendar onChange={onChange} value={value} />
  //   </div>
  // );
}
