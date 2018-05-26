import React from 'react'
import { getTimingTypeWord } from '../utils/types'

const RecipePlan = ({ time }) => (
  <div>
    <div className='row pb-5'>
      <div className='col-4'>
        <h2>{time.time}</h2>
      </div>
      <div className='col-8'>
        {time.types.map((type, index) => {
          if (type.ingredients.length > 0) {
            return (
              <div key={index}>
                <div className='text-muted'>
                  <strong>{getTimingTypeWord(type.type)}</strong>
                </div>
                {type.ingredients.map((ingredient, index) => {
                  return (
                    <div key={index}>
                      {ingredient.title}
                    </div>
                  )
                })}
              </div>
            )
          }
          return null
        })}
      </div>
    </div>
  </div>
)

export default RecipePlan