import React from 'react'
import classes from './Dashboard.module.css'
import Main from './Sidebar/Main'
const Dashboard = () => {
  return (
    <div className={classes.Dashboard} >
        <div className={classes.Sidebar} s>
           <Main/>
        </div>    
    </div>
  )
}

export default Dashboard
