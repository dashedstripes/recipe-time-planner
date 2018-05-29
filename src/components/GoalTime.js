import React from 'react'
import { TIMES } from '../utils/types'
import Button from './Button'

const GoalTime = ({ hour, minutes, time, onChange, onSubmit }) => (
  <div>
    <div className='col-12 border-bottom py-3'>
      <p className='mb-0'>Have you ever struggled when cooking a complicated meal? Juggling multiple ingredients all with different prep and cook times can be a hassle. This app lets you add your ingredients to the panel on the right, set prep and/or cook times for each ingredient, it will then give you a step by step list including timings ending when you wish to serve the meal.</p>
    </div>
    <div className='col-12 py-3 text-center border-bottom'>
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