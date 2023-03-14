import React, { useContext, useState } from 'react';
import '@styles/Header.scss';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoopingCart from '@icons/icon_shopping_cart.svg';
import Menu from '@components/Menu';
import AppContext from '../context/AppContext'
import MyOrder from '@containers/MyOrder'

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrder] = useState(false);

	const {state} = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle)
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li onClick={handleToggle} className="navbar-email">
						platzi@example.com
					</li>
					<li onClick={()=>setToggleOrder(!toggleOrders)} className="navbar-shopping-cart">
						<img src={shoopingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div>:null}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

export default Header;
