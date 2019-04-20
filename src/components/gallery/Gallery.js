import React from 'react';

import './gallery.css';

function Gallery() {
    return (<main>
        <section className="main-gallery">
            <div className="container">
                <article>
                    <div>
                        <header className="h-product-list-title text-center py-3 my-3">
                            <h1 className="font-w-s font-s-1 mb-1">MƯỢN RƯỢU TỎ TÌNH</h1>
                            <p className="text-light">
                                Đây là một bộ ảnh về couple, được chụp ở bãi bụt TP.Đà Nẵng với gam màu nhẹ, sáng!
                            </p>
                        </header>
                    </div>
                    <div className="box-gallery">
                        <div className="gallery-items">
                            <div className="gallery-img">
                                <img src={require('../../images/couple/ed--0.jpg')} alt="gallery-1"/>
                            </div>
                        </div>
						<div className="gallery-items">
							<div className="gallery-img">
								<img src={require('../../images/couple/ed--1.jpg')} alt="gallery-1"/>
							</div>
						</div>
						<div className="gallery-items">
							<div className="gallery-img">
								<img src={require('../../images/couple/ed--2.jpg')} alt="gallery-1"/>
							</div>
						</div>
                    </div>
                </article>
            </div>
        </section>
    </main>);
}

export default Gallery;
