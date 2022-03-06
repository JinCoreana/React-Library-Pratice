import React, {useRef, useState} from 'react'
import moment from 'moment-timezone';

export default function MomentExample() {

const [day, setDay] = useState("");
const birthDayRef = useRef(null);
const handleBirthDayChange = (event) => {
  setDay(moment(event.target.value, "YYYY-MM-DD").format('dddd'))
}

const momentDate = moment()
const newMomentDate = momentDate.add(1,'week')
const cloneNewMomentDate = newMomentDate.clone().add(1,'week');

  return (
    <>
    <div>Moment Example</div>
    <div>Immutable Check</div>
    <div>
      {momentDate.format()}
      <br/>
      {newMomentDate.format()}
      <br/>
      {cloneNewMomentDate.format()}
      <br/>
    </div>
    <div> Summer Time (New-York) </div>
    <div>
      10th Mar 2018 + 1day: 
      <br/>
      {moment.tz('10-03-2018 13:00:00','America/New-York').add(1, 'day').format('llll') }
    </div>
    <div>
      10th Mar 2018 + 24hours: 
      <br/>
      {moment.tz('10-03-2018 13:00:00','America/New-York').add(24, 'hour').format('llll') }
    </div>
    <div> Leap year (Seoul) </div>
    <div>
      1st Jan 2017 + 1year: 
      <br/>
      {moment.tz('01-01-2017','Korea/Seoul').add(1, 'year').format('YYYY년 M월 D일') }
    </div>
    <div>
    1st Jan 2017 + 365days: 
      <br/>
      {moment.tz('01-01-2017','Korea/Seoul').add(365, 'day').format('YYYY년 M월 D일') }
    </div>

    <div>What day was your birthday?</div>
    <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
    <div>{day}</div>
    <div>What's the time gap between 2 days?</div>
    <div>2021-07-07 03:00 & 2021-07-07 15:00</div>
    <div> {moment('2021-07-07 03:00').diff(moment('2021-07-07 15:00'), "hours")}</div>
    
    </>
  )
}
