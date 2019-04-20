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
		 <header id="scroll-navbar" className="main-navbar box-shadow">
			<nav className="container navbar">
			   <div className="left-nav">
				  <NavLink onClick={this.clickLink} className=" text-default text-decoration" to="/">
                    <div className="logo-tuan"><img src={require('../../images/logo-tuan-art.png')} alt="logo-nguyen-tuan-art" /></div>
				  </NavLink>
				  <div className="icon-nav" onClick={this.onHandlerNav}><i style={{color: "#ffdec3"}} className="fas fa-bars"></i></div>
			   </div>
			   <div className={navbarResponse ? "open-right-nav right-nav" : "right-nav"}>
				  <div className="mr-3 categories-menu">
					 <a href="#0" className="text-decoration  text-default categories-button-menu" onClick={this.onHandlerCategories}>Chuyên mục</a>
					 <div style={{display: categories ? 'block' : 'none'}}>
						<div className="categories-items-menu font-s-s box-shadow">
						   <NavLink onClick={this.clickLink} className="text-default text-decoration p-05" to="/categories/engagement">Ngoại cảnh</NavLink>
						   <NavLink onClick={this.clickLink} className="text-default text-decoration p-05" to="/categories/couple">Cặp đôi</NavLink>
						   <NavLink onClick={this.clickLink} className="text-default text-decoration p-05" to="/categories/portrait">Chân dung</NavLink>
						</div>
					 </div>
				  </div>
				  <div className=""><NavLink onClick={this.clickLink} className="mr-3  text-default text-decoration" to="/place">Địa điểm</NavLink></div>
				  <div className=""><NavLink onClick={this.clickLink} className="mr-3  text-default text-decoration" to="/pricing">Bảng giá</NavLink></div>
				  <div className=""><NavLink onClick={this.clickLink} className="mr-3  text-default text-decoration" to="/about">Thông tin</NavLink></div>
				  <div className=""><NavLink onClick={this.clickLink} className=" text-default text-decoration" to="/contact">Liên hệ</NavLink></div>
			   </div>
			</nav>
		 </header>
	  );
   }
}
export default Navigation;
