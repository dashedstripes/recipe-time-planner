import React from 'react'
import { TIMES } from '../utils/types'
import Button from './Button'

const GoalTime = ({ hour, minutes, time, onChange, onSubmit }) => (
  <div>
    <div className='col-12 border-bottom py-3'>
      <p>Have you ever struggled to time a complicated meal? Recipes with lots of ingredients like Thanksgiving and Christmas can be hard to manage without a bit of planning.</p>
      <p className='mb-0'>Use this tool to work out when to prep and cook each ingredient in your recipe. Just add your ingredients to the panel on the right with their respective prep and cook times, then choose a time to dish up and press "View Recipe Plan".</p>
    </div>
    <div className='col-12 py-5 text-center border-bottom'>
      <p>What time would you like to dish up?</p>
      <div className='form-group form-inline justify-content-center'>
        <input className='form-control goal-time-input' type='number' name='hour' min={1} max={12} value={hour} onChange={onChange} />
        <span>:</span>
        <input className='form-control goal-time-input' type='number' name='minutes' min={0} max={59} value={minutes} onChange={onChange} />
        <select className='form-control' name='time' value={time} onChange={onChange}>
          <option value={TIMES.AM}>AM</option>
          <option value={TIMES.PM}>PM</option>
        </select>
      </div>
      <div>
        <Button onClick={onSubmit}>VIEW YOUR RECIPE PLAN</Button>
      </div>
    </div>
  </div>
)

export default GoalTime