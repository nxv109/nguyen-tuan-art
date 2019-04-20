import React from 'react';

const About = () => {
	return(
	   <main>
			<section className="about-main mb-3">
				<div className="container">
					<article>
						<div>
							<header className="h-product-list-title text-center py-3 my-3">
								<h2 className="font-w-s font-s-1">THÔNG TIN VỀ MÌNH!</h2>
							</header>
						</div>
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
										</div>
									</div>
								</div>
							</article>
						</section>
					</article>
				</div>
			</section>
	   </main>
	);
};
export default About;
