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
                                            <h2 className="mb-1 font-s-2">My about me!</h2>
                                            <p className="mb-1 text-light text-justify">My Story Hi! I’m Missio, a wedding photographer currently working & residing in London. I absolutely love shooting wedding because there are so many emotions to capture. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus. Fusce dapibus tellus cursus commodo.
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
}
export default About;
