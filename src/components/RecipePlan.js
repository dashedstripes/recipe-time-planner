import React from 'react'
import { getTimingTypeWord } from '../utils/types'

const RecipePlan = ({ time }) => (
  <div>
    <div className='row py-5'>
      <div className='col-md-4'>
        <h2>{time.time}</h2>
      </div>
      <div className='col-md-8'>
        <div className='row'>
          {time.types.map((type, index) => {
            if (type.ingredients.length > 0) {
              return (
                <div className='col-md-6'>
                  <div className='text-muted'>
                    <strong>{getTimingTypeWord(type.type)}</strong>
                  </div>
                  {type.ingredients.map((ingredient, index) => {
                    return (
                      <div key={index}>
                        <p className='mb-0'>{ingredient.title}</p>
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
  </div>
)

export default RecipePlan