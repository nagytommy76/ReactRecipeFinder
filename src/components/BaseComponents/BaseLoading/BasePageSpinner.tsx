import React from 'react'
import classes from './Spinner.module.css'
import { HashLoader } from 'react-spinners'

const BaseSpinner: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
   return (
      <section className={classes.LoadingContainer}>
         <HashLoader loading={isLoading} size={120} color='#059e00' />
      </section>
   )
}

export default BaseSpinner
