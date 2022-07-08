import React from 'react'
import classes from './Profile.module.css'
import { ReactComponent as Notif } from '../../assets/images/notif.svg'
import { ReactComponent as Dropdown } from '../../assets/images/drop.svg'
import { ReactComponent as More } from '../../assets/images/more.svg'
import { ReactComponent as Divider } from '../../assets/images/Divider2.svg'
import { ReactComponent as Send } from '../../assets/images/send2.svg'
import { ReactComponent as Send2 } from '../../assets/images/send3.svg'
import { ReactComponent as Right } from '../../assets/images/vectorRight.svg'

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
            <div className={classes.cointext} >
              <p className={classes.CryptoName}>Bitcoin</p>
              <p className={classes.CryptoSub}>BTC</p>
            </div>
          </div>
          <div className={classes.CoinDivRight}>
            <div className={classes.cointext}>
              <p className={classes.CryptoName}>$26,452.00</p>
              <p className={classes.CryptoSub3}>NGN | GHS</p>
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
            <div className={classes.cointext} style={{ textAlign: "right" }}>
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
            <div className={classes.cointext} style={{ textAlign: "right" }}>
              <p className={classes.CryptoName}>Litecoin</p>
              <p className={classes.CryptoSub} style={{ textAlign: "left" }}>LTC</p>
            </div>
          </div>
          <div className={classes.CoinDivRight}>
            <div className={classes.cointext} >
              <p className={classes.CryptoName} style={{ textAlign: "end" }}>$773</p>
              <p className={classes.CryptoSub}>NGN | GHS</p>
            </div>
          </div>

        </div>
      </div>
      <div className={classes.More}>

        <More style={{ marginBottom: "0.46rem" }} />
      </div>
      <div className={classes.More}>

        <Divider />
      </div>
      <div className={classes.BalanceMain} >

        <div className={classes.Balance} >
          <p className={classes.BalanceText}>Total NGN Balance</p>
          <p className={classes.BalanceDigit}>₦289,043.00</p>
        </div>

      </div>
      <div style={{ paddingBottom: "0.5rem" }}>
        <p className={classes.Activity}>Recent Activity</p>
        <p className={classes.Activity2}>July 7</p>

      </div>
      <div className={classes.CoinMain}>
        <div className={classes.CoinDiv2}>
          <div className={classes.CoinDivLeft}>
            <div>
              {/* <img src={bitcoin} alt="bitcoin" /> */}
              <Send2 />
            </div>
            <div className={classes.cointext} >
              <p className={classes.CryptoName}>Sold Bitcoin</p>
              <p className={classes.CryptoSub2}>FW749374HFHWERHFIWH</p>
            </div>
          </div>
          <div className={classes.CoinDivRight}>
            <div className={classes.cointext}>
              <p className={classes.CryptoName}>0.0042 BTC</p>
              <p className={classes.CryptoSub} style={{ fontFamily: "Montserrat" }}>₦69,000.00</p>
            </div>
          </div>

        </div>
      </div>



      <p className={classes.Activity3}>July 1</p>


      <div className={classes.CoinMain}>
        <div className={classes.CoinDiv2}>
          <div className={classes.CoinDivLeft}>
            <div>
              {/* <img src={bitcoin} alt="bitcoin" /> */}
              <Send />
            </div>
            <div className={classes.cointext} >
              <p className={classes.CryptoName}>Withdrawal</p>
              <p className={classes.CryptoSub2}>Access Bank</p>
            </div>
          </div>
          <div className={classes.CoinDivRight}>
            <div className={classes.cointext}>
              <p className={classes.CryptoName}>₦500,000</p>
              <p className={classes.CryptoSub}>0039847384</p>
            </div>
          </div>

        </div>
      </div>

      <div className={classes.More}>

        <Divider />
      </div>
      <div className={classes.BalanceMain} >

        <div className={classes.Balance} style={{ display: "flex", justifyContent: "center" }} >
          <p className={classes.BalanceText}>View More</p>
          <Right style={{ marginLeft: "0.67rem" }} />
        </div>

      </div>




    </div>
  )
}

export default Profile