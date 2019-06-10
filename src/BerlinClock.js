import React from 'react';
import Minutes from './components/Minutes/Minutes';

class BerlinClock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  updateClock(time){
    const [hours, minutes, seconds] = time.split(':');
    this.setTime(hours, minutes, seconds);
  }

  setTime(hours, minutes, seconds) {
    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }

  render() {
    return (
      <div className="berlinClock">
        <Minutes minutes = {this.state.minutes}/>
      </div>
    );
  }

}

export default BerlinClock;
