import { useRef, useEffect, useState } from 'react';
import useWindowDimensions from '../../hooks/getWindowDimensions';
import classes from './AdminSidebar.module.css';
import { ReactComponent as Logo25 } from '../../assets/images/Divider.svg'
import Breet from '../../assets/images/breet2.svg';
const AdminSidebar = ({ isOpen, setIsOpen, setCurrentPage, pages }) => {
	const sidebarRef = useRef(null);
	const underlayRef = useRef(null);
	const { width } = useWindowDimensions();
	const [activeTabId, setActiveTabId] = useState(0);
	const { id, icon, title, icon2 } = pages;

	console.log(pages[0]?.icon)
	useEffect(() => {
		setActiveTabId(
			sessionStorage.getItem('currentPage') ? Number(sessionStorage.getItem('currentPage')) : 0
		);

	}, []);

	//check realtime screen width to control side-drawer behaviour
	// useEffect(() => {
	// 	if (width > 1024) {
	// 		setIsOpen(true);
	// 	}
	// }, [setIsOpen, width]);

	//controls hidding and showing of sidebar and its underlay
	// useEffect(() => {
	// 	if (isOpen) {
	// 		sidebarRef.current.style.transform = `translateX(0)`;
	// 		// underlayRef.current.style.visibility = 'visible';
	// 	} else {
	// 		sidebarRef.current.style.transform = `translateX(-260px)`;
	// 		// underlayRef.current.style.visibility = 'hidden';
	// 	}
	// }, [isOpen]);

	//prevent page scroll when modal is shown
	// useEffect(() => {
	// 	if (isOpen && width < 1024) {
	// 		document.body.style.overflow = 'hidden';
	// 	}
	// 	return () => {
	// 		document.body.style.overflow = 'unset';
	// 	};
	// }, [isOpen, width]);

	//handle closemodal/sidebar on click outside modal
	// const closeModal = (e) => {
	// 	if (width < 1024 && (underlayRef.current === e.target || sidebarRef.current === e.target)) {
	// 		setIsOpen(false);
	// 	}
	// };

	//handle set reference id for page to be shown
	//handles close sidebar on tab link click
	const handleClickTabLink = (id) => {
		setCurrentPage(id);
		setActiveTabId(id);
		// alert('fired!');

		// sessionStorage.setItem('currentPage', id);
		// if (isOpen && width < 1024) setIsOpen(false);
	};

	return (
		<div className={classes.underlay} ref={underlayRef} >
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
				<div>
					<p className={classes.menu}>MENU</p>
				</div>
				<div className={classes.sidebar_menu_wrapper}>
					<div className={classes.sidebar_menu}>
						<ul>
							<li onClick={() => handleClickTabLink(1)}>
								<p className={`${activeTabId === 1 ? classes.ActiveTab : ''}`}>
									{activeTabId === 1 ? pages[0]?.icon2 : pages[0]?.icon}
									<span className={`${activeTabId === 1 ? classes.ActiveSpan : ''}`} > {pages[0]?.title} </span>
								</p>
								{console.log(activeTabId)}
							</li>
							<li onClick={() => handleClickTabLink(2)}>
								<p className={`${activeTabId === 2 ? classes.ActiveTab : ''}`}>
									{activeTabId === 2 ? pages[1]?.icon2 : pages[1]?.icon}
									<span className={`${activeTabId === 2 ? classes.ActiveSpan : ''}`}> {pages[1]?.title} </span>
								</p>
							</li>
							<li onClick={() => handleClickTabLink(3)}>
								<p className={`${activeTabId === 3 ? classes.ActiveTab : ''}`}>
									{activeTabId === 3 ? pages[2]?.icon2 : pages[2]?.icon}
									<span> {pages[2]?.title} </span>
								</p>
							</li>
							<li onClick={() => handleClickTabLink(4)}>
								<p className={`${activeTabId === 4 ? classes.ActiveTab : ''}`}>
									{activeTabId === 4 ? pages[3]?.icon2 : pages[3]?.icon}
									<span> {pages[3]?.title} </span>
								</p>
							</li>
							<li onClick={() => handleClickTabLink(5)}>
								<p className={`${activeTabId === 5 ? classes.ActiveTab : ''}`}>
									{activeTabId === 5 ? pages[4]?.icon2 : pages[4]?.icon}
									<span> {pages[4]?.title} </span>
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
							<li onClick={() => handleClickTabLink(6)}>
								<p className={`${activeTabId === 6 ? classes.ActiveTab : ''}`}>
									{activeTabId === 6 ? pages[5]?.icon2 : pages[5]?.icon}
									<span> {pages[5]?.title} </span>
								</p>
							</li>
							<li onClick={() => handleClickTabLink(0)}>
								<p className={`${activeTabId === 0 ? classes.ActiveTab : ''}`}>
									{activeTabId === 0 ? pages[6]?.icon2 : pages[6]?.icon}
									<span> {pages[6]?.title} </span>
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
