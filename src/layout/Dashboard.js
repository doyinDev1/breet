import React from 'react'
import Content from './Content/Content'
import classes from './Dashboard.module.css'
import Sidebar from './Sidebar/Sidebar'
import Profile from './Profile/Profile'
const Dashboard = () => {
  return (
    <div className={classes.Dashboard} >
        <div className={classes.Sidebar} style={{overflow: "hidden"}}>
           <Sidebar/>
        </div>    
    </div>
  )
}

export default Dashboard
