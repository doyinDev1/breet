import React from 'react'
import classes from './Profile.module.css'
import { ReactComponent as Notif } from '../../assets/images/notif.svg'
import { ReactComponent as Dropdown } from '../../assets/images/drop.svg'
import { ReactComponent as More } from '../../assets/images/more.svg'

import bitcoin from '../../assets/images/bitcoin.svg'
import ethereum from '../../assets/images/ethereum.svg'
import litecoin from '../../assets/images/litecoin.svg'

import Avatar from '../../assets/images/Avatarr.png'
const Profile = () => {
  return (
    <div className={classes.Profile}>
      <div className={classes.ProfileTop}>
        <div className={classes.ProfileNotifs}>
          <Notif />
        </div>
        <div className={classes.ProfileAvatar}>
          <img
            src={Avatar}
            className={classes.ProfileAvatarchild}
            alt="" />
          <p className={classes.ProfileAvatarchild}>Chika Uzoh</p>
          <Dropdown className={classes.ProfileAvatarchild} />
        </div>
      </div>

      <h1 className={classes.Text}>Sell any of these</h1>
      <div className={classes.CoinMain}>
        
      
      <div className={classes.CoinDiv}>
        <div className={classes.CoinDivLeft}>
          <div>
            <img src={bitcoin} alt="bitcoin" />
          </div>
          <div className={classes.cointext}>
            <p className={classes.CryptoName}>Bitcoin</p>
            <p className={classes.CryptoSub}>BTC</p>
          </div>
        </div>
        <div className={classes.CoinDivRight}>
          <div className={classes.cointext}>
            <p className={classes.CryptoName}>$26,452.00</p>
            <p className={classes.CryptoSub}>NGN | GHS</p>
          </div>
        </div>

      </div>
      <div className={classes.CoinDiv}>
        <div className={classes.CoinDivLeft}>
          <div>
            <img src={ethereum} alt="ethereum" />
          </div>
          <div className={classes.cointext}>
            <p className={classes.CryptoName}>Ethereum</p>
            <p className={classes.CryptoSub}>ETH</p>
          </div>
        </div>
        <div className={classes.CoinDivRight}>
          <div className={classes.cointext}>
            <p className={classes.CryptoName}>$19,093.93</p>
            <p className={classes.CryptoSub}>NGN | GHS</p>
          </div>
        </div>

      </div>
      <div className={classes.CoinDiv}>
        <div className={classes.CoinDivLeft}>
          <div>
            <img src={litecoin} alt="litecoin" />
          </div>
          <div className={classes.cointext}>
            <p className={classes.CryptoName}>Litecoin</p>
            <p className={classes.CryptoSub}>LTC</p>
          </div>
        </div>
        <div className={classes.CoinDivRight}>
          <div className={classes.cointext}>
            <p className={classes.CryptoName}>$773</p>
            <p className={classes.CryptoSub}>NGN | GHS</p>
          </div>
        </div>

      </div>
      </div>

    </div>
  )
}

export default Profile