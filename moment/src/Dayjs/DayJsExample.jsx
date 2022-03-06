import React, { useRef, useState } from 'react'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc);
dayjs.extend(timezone);

export default function DayJsExample() {

  const [day, setDay] = useState("");
  const birthDayRef = useRef(null);
  const handleBirthDayChange = (event) => {
    setDay(dayjs(event.target.value, "YYYY-MM-DD").format('dddd'))
  }

  const dayjsDate = dayjs()
  const newDayjsDate = dayjsDate.add(1, 'week')
  const cloneNewDayjsDate = newDayjsDate.clone().add(1, 'week');

  return (
    <>
      <div>DayJS Example</div>
      <div>Immutable Check</div>
      <div>
        {dayjsDate.format()}
        <br />
        {newDayjsDate.format()}
        <br />
        {cloneNewDayjsDate.format()}
        <br />
      </div>
      <div> Summer Time (New-York) </div>
      <div>
        10th Mar 2018 + 1day:
        <br />
        {dayjs.tz('10-03-2018 13:00:00', 'America/New-York').add(1, 'day').format('llll')}
      </div>
      <div>
        10th Mar 2018 + 24hours:
        <br />
        {dayjs.tz('10-03-2018 13:00:00', 'America/New-York').add(24, 'hour').format('llll')}
      </div>
      <div> Leap year (Seoul) </div>
      <div>
        1st Jan 2017 + 1year:
        <br />
        {dayjs.tz('01-01-2017', 'Korea/Seoul').add(1, 'year').format('YYYY년 M월 D일')}
      </div>
      <div>
        1st Jan 2017 + 365days:
        <br />
        {dayjs.tz('01-01-2017', 'Korea/Seoul').add(365, 'day').format('YYYY년 M월 D일')}
      </div>

      <div>What day was your birthday?</div>
      <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
      <div>{day}</div>
      <div>What's the time gap between 2 days?</div>
      <div>2021-07-07 03:00 & 2021-07-07 15:00</div>
      <div> {dayjs('2021-07-07 03:00').diff(dayjs('2021-07-07 15:00'), "hours")}</div>

    </>
  )
}
