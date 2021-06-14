import React from 'react'
import { ChangeEvent } from 'react'
import classes from './BaseInput.module.css'

const Error = React.lazy(() => import('../BaseError/BaseError'))

const BaseInput: React.FC<Props> = ({ labelText, eventOnChange, value, inputType = 'text' }) => {
   return (
      <div className={classes.FormControll}>
         <label role='label' className={classes.Label} htmlFor={labelText}>
            {labelText}
         </label>
         <input
            role='input'
            placeholder={labelText}
            data-testid='input'
            className={classes.Input}
            id={labelText}
            value={value}
            onChange={eventOnChange}
            type={inputType}
         />
         <Error />
      </div>
   )
}

type Props = {
   labelText: string
   eventOnChange: (event: ChangeEvent<HTMLInputElement>) => void
   value: string | number
   inputType?: string
}

export default BaseInput
