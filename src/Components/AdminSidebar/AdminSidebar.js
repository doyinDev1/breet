import {  useEffect, useState } from 'react';
import classes from './AdminSidebar.module.css';
import { ReactComponent as Logo25 } from '../../assets/images/Divider.svg'
import Breet from '../../assets/images/breet2.svg';
import BreetMini from '../../assets/images/logomini.png';

import { toast } from 'react-hot-toast';
const AdminSidebar = ({  setCurrentPage, pages }) => {
	const [activeTabId, setActiveTabId] = useState(0);
	const { id, icon, title, icon2 } = pages;

	useEffect(() => {
		setActiveTabId(6);

	}, []);


	const handleClickTabLink = (id) => {
		setCurrentPage(id);
		setActiveTabId(id);
	};
const doLogout = () =>{
	toast.success("Logged Out Successfully")

}
	return (
		<div className={classes.underlay} >
			<div className={classes.sidebar_container} >
				<>
				
				<div className={classes.brand_logo}>
					<a href="/">
						<img
							src={Breet}
							alt=""
							className={classes.Logo}
						/>
					</a>
				</div>
				<div className={classes.brand_logo2}>
					<a href="/">
						<img
							src={BreetMini}
							alt=""
							className={classes.Logo}
						/>
					</a>
				</div>
				<div>
					<p className={classes.menu}>MENU</p>
				</div>
				<div className={classes.sidebar_menu_wrapper}>
					<div className={classes.sidebar_menu}>
						<ul>
							<li onClick={() => handleClickTabLink(0)}>
								<p className={`${activeTabId === 0 ? classes.ActiveTab : ""}`}>
									{activeTabId === 0 ? pages[0]?.icon2 : pages[0]?.icon}
									{/* <span className={classes.sapa} > {pages[0]?.title} </span> */}
									{ activeTabId === 0 ? <span style={{color: "#324168"}}> {pages[0]?.title} </span> : <span> {pages[0]?.title} </span>}

								</p>
							</li>
							<li onClick={() => handleClickTabLink(1)}>
								<p className={`${activeTabId === 1 ? classes.ActiveTab : ""}`}>
									{activeTabId === 1 ? pages[1]?.icon2 : pages[1]?.icon}
									{ activeTabId === 1 ? <span style={{color: "#324168"}}> {pages[1]?.title} </span> : <span> {pages[1]?.title} </span>}
								</p>
							</li>
							<li onClick={() => handleClickTabLink(2)}>
								<p className={`${activeTabId === 2 ? classes.ActiveTab : ''}`}>
									{activeTabId === 2 ? pages[2]?.icon2 : pages[2]?.icon}
									{ activeTabId === 2 ? <span style={{color: "#324168"}}> {pages[2]?.title} </span> : <span> {pages[2]?.title} </span>}

								</p>
							</li>
							<li onClick={() => handleClickTabLink(3)}>
								<p className={`${activeTabId === 3 ? classes.ActiveTab : ''}`}>
									{activeTabId === 3 ? pages[3]?.icon2 : pages[3]?.icon}
									{ activeTabId === 3 ? <span style={{color: "#324168"}}> {pages[3]?.title} </span> : <span> {pages[3]?.title} </span>}
									
								</p>
							</li>
							<li onClick={() => handleClickTabLink(4)}>
								<p className={`${activeTabId === 4 ? classes.ActiveTab : ''}`}>
									{activeTabId === 4 ? pages[4]?.icon2 : pages[4]?.icon}
									{ activeTabId === 4 ? <span style={{color: "#324168"}}> {pages[4]?.title} </span> : <span> {pages[4]?.title} </span>}

								</p>
							</li>
						</ul>
					</div>
				</div>
				<div className={classes.line}>


					<Logo25 />
				</div>
				<div className={classes.sidebar_menu_wrapper}>
					<div className={classes.sidebar_menu}>
						<ul>
							<li onClick={() => handleClickTabLink(5)}>
								<p className={`${activeTabId === 5 ? classes.ActiveTab : ''}`}>
									{activeTabId === 5 ? pages[5]?.icon2 : pages[5]?.icon}
									{ activeTabId === 5 ? <span style={{color: "#324168"}}> {pages[5]?.title} </span> : <span> {pages[5]?.title} </span>}
								</p>
							</li>
							<li onClick={() => handleClickTabLink(6)}>
								<p className={`${activeTabId === 6 ? classes.ActiveTab : ''}`}>
									{activeTabId === 6 ? pages[6]?.icon2 : pages[6]?.icon}
									{ activeTabId === 6 ? <span style={{color: "#324168"}}> {pages[6]?.title} </span> : <span> {pages[6]?.title} </span>}
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div className={classes.sidebar_menu_wrapper} style={{paddingTop: "40px"}}>
					<div className={classes.sidebar_menu}>
						<ul onClick={doLogout}>
							<li onClick={() => handleClickTabLink(7)}>
								<p className={`${activeTabId === 7 ? classes.ActiveTab : ''}`}>
									{activeTabId === 7 ? pages[7]?.icon : pages[7]?.icon}
									{ activeTabId === 7 ? <span style={{color: "#324168"}}> {pages[7]?.title} </span> : <span> {pages[7]?.title} </span>}
								</p>
							</li>
						</ul>
					</div>
				</div>
				</>
			</div>
		 </div>
	);
};

export default AdminSidebar;
