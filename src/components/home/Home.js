import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';

const Home = () => {
	return (<main>

		<section className="h-categories-info">
			<div className="container">
				<article className="categories-info pt-3">
					<div>
						<header className="categories-title mb-3 py-3">
							<h1 className="font-w-s font-s-1">
                                THẬT TUYỆT VỜI KHI BẠN CÓ MỘT BỘ ẢNH THẬT ĐẸP CÙNG NGƯỜI MÌNH YÊU QUÝ
							</h1>
						</header>
					</div>
					<div className="h-main-categories-list pb-3">
						<div className="h-categories-list dis-row">
							<div className="h-categories-img mx-2">
								<a className="h-categories-card" href="#0">
									<div className="h-categories-product box-shadow"><img src={require('../../images/couple/ed--4.jpg')} alt="anh"/></div>
									<div className="h-details">
										<h2 className="font-s-1">Cặp đôi</h2>
									</div>
								</a>
							</div>
							<div className="h-categories-img mx-2">
								<a className="h-categories-card" href="#0">
									<div className="h-categories-product box-shadow"><img className="nc-1" src={require('../../images/engagement/8.jpg')} alt="anh"/></div>
									<div className="h-details">
										<h2 className="font-s-1">Ngoại cảnh</h2>
									</div>
								</a>
							</div>
							<div className="h-categories-img mx-2">
								<a className="h-categories-card" href="#0">
									<div className="h-categories-product box-shadow"><img src={require('../../images/portrait/3.jpg')} alt="anh"/></div>
									<div className="h-details">
										<h2 className="font-s-1">Chân dung</h2>
									</div>
								</a>
							</div>
						</div>
					</div>
				</article>
			</div>
		</section>

		<section className="h-product-list">
			<div className="container">
				<article>
					<div>
						<header className="h-product-list-title text-center py-3 my-3">
							<h2 className="font-w-s font-s-1">KHOẢNH KHẮC TUYỆT ĐẸP CỦA KHÁCH ĐƯỢC MÌNH GHI LẠI!</h2>
						</header>
					</div>
					<div className="h-main-card-list">

						<div className="h-card-list dis-row">
							<div className="h-card-img mx-2">
								<a className="card" href="#0">
									<div className="product"><img src={require('../../images/engagement/8.jpg')} alt="anh"/></div>
									<div className="h-card-details">
										<h2 className="">Cô bé dể thương</h2>
										<p className="h-card-description mb-1 font-s-s">Cảnh được chụp ở một đường ray tàu lửa, với gam màu cổ điển dể nhìn và cô bé dể thương nữa.</p>
										<div className="h-card-photographer">
											<div className="font-w-b text-color">Photographer</div>
											<div className="photographer"><img src={require('../../images/logo-desktop.png')} alt="photographer"/></div>
										</div>
									</div>
								</a>
							</div>
							<div className="h-card-img mx-2">
								 <NavLink className="card" to="/gallery">
									<div className="product"><img src={require('../../images/couple/ed--4.jpg')} alt="anh"/></div>
									<div className="h-card-details">
										<h2 className="">Mượn rượu tỏ tình</h2>
										<p className="h-card-description mb-1 font-s-s">Trữ tình, lãng mạn là hai từ để miêu tả bức hình này. Khung cảnh được chụp ở bãi bụt Sơn Trà Đà Nẵng.</p>
										<div className="h-card-photographer">
											<div className="font-w-b text-color">Photographer</div>
											<div className="photographer"><img src={require('../../images/logo-desktop.png')} alt="photographer"/></div>
										</div>
									</div>
								</NavLink>
							</div>
							<div className="h-card-img mx-2">
								<a className="card" href="#0">
									<div className="product"><img src={require('../../images/portrait/3.jpg')} alt="anh"/></div>
									<div className="h-card-details">
										<h2 className="">Người tình mùa đông</h2>
										<p className="h-card-description mb-1 font-s-s">Đây là thể loại ảnh chân dung, được chụp trong phòng kín với backgound tối làm nổi bật chủ thể, gam màu nhẹ, sáng, ưa nhìn!</p>
										<div className="h-card-photographer">
											<div className="font-w-b text-color">Photographer</div>
											<div className="photographer"><img src={require('../../images/logo-desktop.png')} alt="photographer"/></div>
										</div>
									</div>
								</a>
							</div>
							<div className="h-card-img mx-2">
								<a className="card" href="#0">
									<div className="product"><img src={require('../../images/game/pupg-3.jpg')} alt="anh"/></div>
									<div className="h-card-details">
										<h2 className="">Pubg - Cô nàng quyến rủ</h2>
										<p className="h-card-description mb-1 font-s-s">Khung cảnh tái hiện khung cảnh tựa game pubg với hình ảnh mạnh mẽ, nóng bỏng. Các bạn có muốn một album ảnh như vậy hông nè!</p>
										<div className="h-card-photographer">
											<div className="font-w-b text-color">Photographer</div>
											<div className="photographer"><img src={require('../../images/logo-desktop.png')} alt="photographer"/></div>
										</div>
									</div>
								</a>
							</div>
						</div>

					</div>
				</article>
			</div>
		</section>

		<section className="h-about-me mt-3">
			<article className="h-main-about-me">
				<div className="container">
					<div className="h-block-about-me">
						<div className="h-about-info-hidden py-3"></div>
						<div className="h-about-info py-3">
							<h2 className="mb-1 font-s-2">Thông tin về mình!</h2>
							<p className="mb-1 text-light text-justify line-height">
Mình tên là Nguyễn Viết Tuấn, đam mê nhiếp ảnh và quay dựng phim, đã học và tốt nghiệp tại trung tâm nhiếp ảnh và photoshop đà nẵng lấy uy tín lên hàng đầu. Luôn sáng tạo và theo phong cách ảnh lối sống hiện đại, với sức trẻ và phong cách làm việc dựa trên tinh thần luôn luôn học hỏi và trao đổi hài lòng khách hàng, thực hiện những bộ ảnh mà khách mong muốn, lên ý tưởng địa điểm style để tạo cho khách những sản phẩm hài lòng nhất.
							</p>
							<button className="button-1"><NavLink className="text-default text-decoration" to="/about">Xem thêm thông tin</NavLink>
							</button>
						</div>
					</div>
				</div>
			</article>
		</section>

		<section className="h-contact-me">
			<div className="container">
				<article className="h-main-contact-me py-3 text-center">
					<header className="text-center">
						<h2 className="mb-1 font-s-2">Liên hệ ngay nào</h2>
					</header>
					<p className="text-justify text-light mb-1" style={{textAlign: 'center'}}>
					   Hãy lựa chọn cho mình một album ảnh thật đẹp cùng người thân yêu của mình để lưu lại những kỹ niệm đẹp nhất!
					</p>
					<div>
						<button className="button-1"><NavLink className="text-default text-decoration" to="/contact">Liên hệ ngay</NavLink></button>
					</div>
				</article>
			</div>
		</section>

		<section className="h-categories-more-info">
			<div className="container">
				<article className="categories-info">
					<div className="mb-3">
						<header className="h-product-list-title text-center py-3 m clas-3">
							<h1 className="font-w-l font-s-2">
                                Chuyên mục khác
							</h1>
						</header>
					</div>
					<div className="h-main-categories-list pb-3">
						<div className="h-categories-list dis-row">
							<div className="h-categories-img mx-2">
								<a className="h-categories-card" href="#0">
									<div className="h-categories-product "><img src={require('../../images/game/pupg-1.jpg')} alt="anh"/></div>
									<div className="h-details">
										<h2 className="font-s-1">Game</h2>
									</div>
								</a>
							</div>
							<div className="h-categories-img mx-2">
								<a className="h-categories-card" href="#0">
									<div className="h-categories-product"><img src={require('../../images/engagement/IMG_9948.jpg')} alt="anh"/></div>
									<div className="h-details">
										<h2 className="font-s-1">Nghệ thuật</h2>
									</div>
								</a>
							</div>
							<div className="h-categories-img mx-2">
								<a className="h-categories-card" href="#0">
									<div className="h-categories-product"><img src={require('../../images/couple/ed--4.jpg')} alt="anh"/></div>
									<div className="h-details">
										<h2 className="font-s-1">Cặp đôi</h2>
									</div>
								</a>
							</div>
						</div>
					</div>
				</article>
			</div>
		</section>

	</main>);
};
export default Home;
