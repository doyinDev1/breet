import React, { useState, useEffect } from 'react'
import classes from './Sidebar.module.css'
import AdminSidebar from '../../Components/AdminSidebar/AdminSidebar'
import { ReactComponent as Logo } from '../../assets/images/Icon.svg'
import { ReactComponent as LogoActive } from '../../assets/images/Iconactive.svg'
import { ReactComponent as Logo2 } from '../../assets/images/Icon2.svg'
import { ReactComponent as Logo2active } from '../../assets/images/Icon2active.svg'
import { ReactComponent as Logo3 } from '../../assets/images/Icon3.svg'
import { ReactComponent as Logo3active } from '../../assets/images/Icon3active.svg'
import { ReactComponent as Logo4 } from '../../assets/images/Icon4.svg'
import { ReactComponent as Logo4active } from '../../assets/images/Icon4active.svg'
import { ReactComponent as Logo5 } from '../../assets/images/Icon5.svg'
import { ReactComponent as Logo5active } from '../../assets/images/Icon5active.svg'
import { ReactComponent as Settings } from '../../assets/images/settingsactive.svg'
import { ReactComponent as Settingsactive } from '../../assets/images/settings.svg'
import { ReactComponent as Question } from '../../assets/images/question.svg'
import { ReactComponent as Questionactive } from '../../assets/images/questionactive.svg'
import { ReactComponent as Logout } from '../../assets/images/logout.svg'

import Content from '../Content/Content'
import Profile from '../Profile/Profile'
import Dashboard from '../Dashboard/Dashboard'
import Withdrawal from '../Withdrawal/Withdrawal'
import Calculator from '../Rate Calculator/Calculator'
import Crypto from '../Crypto Trade/Crypto'
import Whistory from '../History/Whistory'
import Support from '../Support/Support'
const Main = () => {
	const [currentPage, setCurrentPage] = useState(6);

	useEffect(() => {
		setCurrentPage(6);

	}, []);


	const pages = [
		{
			id: 0,
			title: 'Dashboard',
			icon: <Logo />,
			icon2: <LogoActive />,
			page: < Dashboard  />,
			page2: <Profile />,
		},
		{
			id: 1,
			icon: <Logo2 />,
			title: 'Withdrawal',
			page: < Withdrawal />,
			icon2: <Logo2active />,
			page2: <Profile />,


		},

		{
			id: 2,
			icon: <Logo3 />,
			title: 'Rate Calculator',
			page: < Calculator />,
			icon2: <Logo3active />,
			page2: <Profile />,


		},
		{
			id: 3,
			icon: <Logo4 />,
			title: 'Cryto trade History',
			page: < Crypto />,
			icon2: <Logo4active />,
			page2: <Profile />,


		},
		{
			id: 4,
			icon: <Logo5 />,
			title: 'Withdrawal History',
			page: < Whistory />,
			icon2: <Logo5active />,
			page2: <Profile />,



		},
		{
			id: 5,
			title: 'Suppport',
			icon: <Question />,
			icon2: <Questionactive />,

			page: < Support/>,
			page2: <Profile />,

		},

		{
			id: 6,
			icon: <Settings />,
			title: 'Settings',
			page: < Content />,
			icon2: <Settingsactive />,
			page2: <Profile />,


		},
		{
			id: 7,
			icon: <Logout />,
			title: 'Log Out',
			page: < Content />,
			icon2: <Settingsactive />,
			page2: <Profile />,


		},

	];



	return (
		<div className={classes.Total}>
			<div className={classes.Total1}>
				<AdminSidebar
					
					setCurrentPage={setCurrentPage}
					pages={pages}
				/>
			</div>
			<div className={classes.Total2}>
				{pages.map((page, index) => (
					<>
					<div key={index} className={`${classes?.id}`}> {currentPage === index && page.page} </div>
					</>
				))}
			</div>
			<div className={classes.Total3}>
				{pages.map((page, index) => (
					<div key={index}> {currentPage === index && page.page2} </div>
				))}
			</div>
		</div>
	)
}

export default Main