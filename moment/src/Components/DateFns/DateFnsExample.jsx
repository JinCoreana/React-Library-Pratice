import React, { useRef, useState } from 'react'
import { add, format, sub, differenceInHours } from 'date-fns'
import { format as timezoneFormat } from 'date-fns-tz'

import addweeks from 'date-fns/addweeks'

export default function DateFnsExample() {

  const [day, setDay] = useState("");
  const birthDayRef = useRef(null);
  const handleBirthDayChange = (event) => {
    setDay(format(new Date(event.target.value), 'EEEE'))
  }

  const dateFnsDate = new Date();
  const newDateFnsDate = add(dateFnsDate, { days: 7 })
  const newDateFnsDate2 = addweeks(newDateFnsDate, 1);

  return (
    <>
      <div>DateFns Example</div>
      <div>Immutable Check</div>
      <div>
        {format(dateFnsDate, 'yyyy-MM-DD')}
        <br />
        {format(newDateFnsDate, 'yyyy-MM-DD')}
        <br />
        {format(newDateFnsDate2, 'yyyy-MM-DD')}
        <br />
      </div>
      <div> Summer Time (New-York) </div>
      <div>
        10th Mar 2018 + 1day:
        <br />
        {timezoneFormat(add(new Date('2018-03-10 13:00:00'), { days: 1 })
          , "yyyy-MM-dd HH:mm:ssXXXX",
          {
            timeZone: "America,New-York"
          })}

      </div>
      <div>
        10th Mar 2018 + 24hours:
        <br />
        {timezoneFormat(add(new Date('2018-03-10 13:00:00'), { hours: 24 })
          , "yyyy-MM-dd HH:mm:ssXXXX",
          {
            timeZone: "America,New-York"
          })}
      </div>
      <div> Leap year (Seoul) </div>
      <div>
        1st Jan 2017 - 1year:
        <br />
        {format(sub(new Date('01-01-2017'), { years: 1 }), 'yyyy년 M월 D일')}
      </div>
      <div>
        1st Jan 2017 - 365days:
        <br />
        {format(sub(new Date('01-01-2017'), { days: 365 }), 'yyyy년 M월 D일')}
      </div>

      <div>What day was your birthday?</div>
      <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
      <div>{day}</div>
      <div>What's the time gap between 2 days?</div>
      <div>2021-07-07 03:00 & 2021-07-07 15:00</div>
      <div> {differenceInHours(new Date('2021-07-07 03:00'), new Date('2021-07-07 15:00'))}</div>

    </>
  )
}
