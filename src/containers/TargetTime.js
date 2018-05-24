import React, { Component } from 'react'
import Button from '../components/Button';

const TIMES = {
  AM: 0,
  PM: 1
}

class TargetTime extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hour: 7,
      minutes: 30,
      time: TIMES.AM
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <p>What time would you like to dish up?</p>
        <div>
          <input type='number' name='hour' min={1} max={12} value={this.state.hour} onChange={this.handleChange} />
          <span>:</span>
          <input type='number' name='minutes' min={0} max={59} value={this.state.minutes} onChange={this.handleChange} />
          <select name='time' value={this.state.time} onChange={this.handleChange}>
            <option value={TIMES.AM}>AM</option>
            <option value={TIMES.PM}>PM</option>
          </select>
        </div>
        <div>
          <Button>GET YOUR PERSONALISED RECIPE PLAN</Button>
        </div>
      </div>
    )
  }
}

export default TargetTime
