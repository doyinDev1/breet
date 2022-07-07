import React, { useState } from 'react'
import classes from "./Content.module.css"
import { ReactComponent as Search } from '../../assets/images/search.svg'
import { ReactComponent as Arrowdown } from '../../assets/images/arrowdown.svg'
import { ReactComponent as Arrowup } from '../../assets/images/arrowup.svg'
import { ReactComponent as Arrowleft } from '../../assets/images/arrowleft.svg'
import { ReactComponent as Switch } from '../../assets/images/switch.svg'
import { ReactComponent as Switch2 } from '../../assets/images/switch2.svg'
import { ReactComponent as Text } from '../../assets/images/text.svg'

import toast from 'react-hot-toast'

const Content = () => {
  // const [ , ]  useState()
  const [switchOpen, setSwitchOpen] = useState(false);
  const [textOpen, setTextOpen] = useState(false);

  const doSwitch = () => {

    setSwitchOpen(false)
    toast.error("Notifications Off")

  }
  const doSwitch2 = () => {
    setSwitchOpen(true)
    toast.success("Notifications On")

  }
  const  showText = () => {
    setTextOpen(true)
  }
  const  showText2 = () => {
    setTextOpen(false)
  }
 


  return (
    <div className={classes.Content}>
      <div className={classes.ContentTop}>
      </div>

      <div className={classes.ContentMiddle}>
        <div className={classes.SearchMain}>
          <div className={classes.SearchDiv}>
            <Search />
            <input type="search" placeholder="Good Afternoon Chika 👋🏻" />
          </div>
          <p className={classes.Setting}>Settings</p>
        </div>
        <div className={classes.SetMain}>
          <div className={classes.ContentSettings}>
            <Arrowleft />
            <h1 className={classes.SettingText}>Default Wallet</h1>
          </div>
        </div>
        <div className={classes.SetMain}>
          <div className={classes.ContentSettings}>
            <Arrowleft />
            <h1 className={classes.SettingText}>Change Password</h1>
          </div>
        </div>
        <div className={classes.SetMain}>
          <div className={classes.ContentSettings}>
            {switchOpen === true && <Switch onClick={doSwitch} />}
            {switchOpen === false && <Switch2 onClick={doSwitch2} />}
            <h1 className={classes.SettingText}>Receive Notifications</h1>
          </div>
        </div>
        <div className={classes.SetMain}>
          <div className={classes.ContentSettings} onMouseEnter={showText} onMouseLeave={showText2}>
          <div className={classes.ContentLeft} >

            <Arrowup />
            {textOpen === true ? <Text/> : ""}
</div>
<div className={classes.ContentRight}>
            <h1 className={classes.SettingText}>Bank Details</h1>

</div>
          </div>
        </div>
      </div>

      <div className={classes.ContentBottom}>

      </div>
    </div>
  )
}

export default Content