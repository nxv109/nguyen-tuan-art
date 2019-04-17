import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component{

   constructor(props){
	  super(props);
	  this.state = {
		 categories: false,
		 navbarResponse: false
	  }
   }

   onHandlerCategories = () => {
	  this.setState(prevState => ({
		 categories: !prevState.categories
	  }));
   }

   onHandlerNav = () => {
	  this.setState(prevState => ({
		 navbarResponse: !prevState.navbarResponse
	  }));
   }

   clickLink = () => {
	  this.setState({
		 navbarResponse: false
	  });
   }

   render(){
	  const { categories, navbarResponse } = this.state;
	  return(
		 <header className="main-navbar box-shadow">
			<nav className="container navbar">
			   <div className="left-nav">
				  <NavLink onClick={this.clickLink} className=" text-default text-decoration" to="/">
                    <div className="logo-tuan"><img src={require('../../images/logo-tuan-art.png')} alt="logo-nguyen-tuan-art" /></div>
				  </NavLink>
				  <div className="icon-nav" onClick={this.onHandlerNav}><i style={{color: "#ffdec3"}} className="fas fa-bars"></i></div>
			   </div>
			   <div className={navbarResponse ? "open-right-nav right-nav" : "right-nav"}>
				  <div className="mr-3 categories-menu">
					 <a href="#0" className="text-decoration  text-default categories-button-menu" onClick={this.onHandlerCategories}>Categories</a>
					 <div style={{display: categories ? 'block' : 'none'}}>
						<div className="categories-items-menu box-shadow">
						   <NavLink onClick={this.clickLink} className="text-default text-decoration p-05" to="/categories/engagement">Engagement</NavLink>
						   <NavLink onClick={this.clickLink} className="text-default text-decoration p-05" to="/categories/couple">Couple</NavLink>
						   <NavLink onClick={this.clickLink} className="text-default text-decoration p-05" to="/categories/portrait">Portrait</NavLink>
						</div>
					 </div>
				  </div>
				  <div className=""><NavLink onClick={this.clickLink} className="mr-3  text-default text-decoration" to="/place">Place</NavLink></div>
				  <div className=""><NavLink onClick={this.clickLink} className="mr-3  text-default text-decoration" to="/pricing">Pricing</NavLink></div>
				  <div className=""><NavLink onClick={this.clickLink} className="mr-3  text-default text-decoration" to="/about">About me</NavLink></div>
				  <div className=""><NavLink onClick={this.clickLink} className=" text-default text-decoration" to="/contact">Contact</NavLink></div>
			   </div>
			</nav>
		 </header>
	  );
   }
}
export default Navigation;
