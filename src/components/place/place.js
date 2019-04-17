import React from 'react';
import './place.css';

const Place = () => {
    return (<main>
        <section className="p-main">
            <div className="container">
                <article className="mb-2">
                    <header className="h-product-list-title text-center py-3 my-3">
                        <div className="place dis-row">
                            <h2 className="font-w-s font-s-1">HÃY CHỌN CHO BẠN MỘT ĐỊA ĐIỂM VÀ LIÊN HỆ NGAY NÀO!</h2>
                            <div className="place-select">
                                <button className="button-1">Liên hệ ngay</button>
                            </div>
                        </div>
                    </header>

                    <div className="h-card-list dis-row">
                        <div className="h-card-img mx-2">
                            <a className="card" href="#0">
                                <div className="product"><img src={require('../../images/place/cau_tinh_yeuPham_Mai_Linh_1.jpg')} alt="anh"/></div>
                                <div className="h-card-details">
                                    <h2 className="">Cầu tình yêu</h2>
                                    <p className="h-card-description mb-1 font-s-s">Cầu tàu tình yêu mang đến một không gian lãng mạn với những tán cây hình trái tim cùng hàng nghìn ổ khóa treo trên thành cầu.</p>
                                    <div className="h-card-photographer">
                                        <div className="h-card-photographer">
                                            <div className="font-w-b text-color">Photographer</div>
                                            <div className="photographer"><img src={require('../../images/logo-desktop.png')} alt="photographer"/></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="h-card-img mx-2">
                            <a className="card" href="#0">
                                <div className="product"><img src={require('../../images/place/hoi_an__Pham_Mai_Linh.jpg')} alt="anh"/></div>
                                <div className="h-card-details">
                                    <h2 className="">Phố cổ Hội An</h2>
                                    <p className="h-card-description mb-1 font-s-s">Hội An là phố cổ yên bình và xinh đẹp. Với phong cách nhẹ nhàng, mộng mơ, bạn sẽ có bức hình check-in tuyệt đẹp</p>
                                    <div className="h-card-photographer">
                                        <div className="font-w-b text-color">Photographer</div>
                                        <div className="photographer"><img src={require('../../images/logo-desktop.png')} alt="photographer"/></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="h-card-img mx-2">
                            <a className="card" href="#0">
                                <div className="product"><img src={require('../../images/place/deo_hai_van__dtdquynh__.jpg')} alt="anh"/></div>
                                <div className="h-card-details">
                                    <h2 className="">Đèo Hải Vân</h2>
                                    <p className="h-card-description mb-1 font-s-s">Con đèo tựa như dải lụa vắt ngang trời mây, ẩn hiện giữa cây rừng, đá núi. Một khung cảnh tuyệt đẹp và hùng vĩ.
                                    </p>
                                    <div className="h-card-photographer">
                                        <div className="font-w-b text-color">Photographer</div>
                                        <div className="photographer"><img src={require('../../images/logo-desktop.png')} alt="photographer"/></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="h-card-img mx-2">
                            <a className="card" href="#0">
                                <div className="product"><img src={require('../../images/place/ba_na_cau_vangchch_chloe.jpg')} alt="anh"/></div>
                                <div className="h-card-details">
                                    <h2 className="">Bà Nà Hills</h2>
                                    <p className="h-card-description mb-1 font-s-s">Bà Nà Hills với sự nâng đỡ của 2 bàn tay cũng hút sự quan tâm của giới trẻ. Đặc biệt, sự xuất hiện trên trang Instagram nghệ thuật nổi tiếng thế giới.</p>
                                    <div className="h-card-photographer">
                                        <div className="font-w-b text-color">Photographer</div>
                                        <div className="photographer"><img src={require('../../images/logo-desktop.png')} alt="photographer"/></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="h-card-img mx-2">
                            <a className="card" href="#0">
                                <div className="product"><img src={require('../../images/place/cong_vien_bien_dong__haphuoong.jpg')} alt="anh"/></div>
                                <div className="h-card-details">
                                    <h2 className="">Công viên biễn đông</h2>
                                    <p className="h-card-description mb-1 font-s-s">Là một trong những nơi chụp ảnh đẹp nhất Đà Nẵng, điểm ấn tượng nhất ở công viên này là hàng nghìn con bồ câu trắng tung cánh rợp trời giống như khung cảnh thủ đô Paris nước Pháp.</p>
                                    <div className="h-card-photographer">
                                        <div className="font-w-b text-color">Photographer</div>
                                        <div className="photographer"><img src={require('../../images/logo-desktop.png')} alt="photographer"/></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="h-card-img mx-2">
                            <a className="card" href="#0">
                                <div className="product"><img src={require('../../images/place/son_trachua_linh_unghanbt2.jpg')} alt="anh"/></div>
                                <div className="h-card-details">
                                    <h2 className="">Ngũ Hành Sơn</h2>
                                    <p className="h-card-description mb-1 font-s-s">Ngũ Hành Sơn nằm cách trung tâm Đà Nẵng khoảng 8 km về phía Đông Nam, sở hữu vẻ đẹp hội tụ của vùng trời biển, non nước nên thơ với các giá trị lịch sử, văn hóa và tâm linh.</p>
                                    <div className="h-card-photographer">
                                        <div className="font-w-b text-color">Photographer</div>
                                        <div className="photographer"><img src={require('../../images/logo-desktop.png')} alt="photographer"/></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="h-card-img mx-2">
                            <a className="card" href="#0">
                                <div className="product"><img src={require('../../images/place/thuan-phuoc-feild.jpg')} alt="anh"/></div>
                                <div className="h-card-details">
                                    <h2 className="">Thuận Phước Field</h2>
                                    <p className="h-card-description mb-1 font-s-s">Ngũ Hành Sơn nằm cách trung tâm Đà Nẵng khoảng 8 km về phía Đông Nam, sở hữu vẻ đẹp hội tụ của vùng trời biển, non nước nên thơ với các giá trị lịch sử, văn hóa và tâm linh.</p>
                                    <div className="h-card-photographer">
                                        <div className="font-w-b text-color">Photographer</div>
                                        <div className="photographer"><img src={require('../../images/logo-desktop.png')} alt="photographer"/></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="h-card-img mx-2">
                            <a className="card" href="#0">
                                <div className="product"><img src={require('../../images/place/hai-van-quang.jpg')} alt="anh"/></div>
                                <div className="h-card-details">
                                    <h2 className="">HẢI VÂN QUAN</h2>
                                    <p className="h-card-description mb-1 font-s-s">Hải Vân Quan nằm trên đỉnh đèo Hải Vân thuộc địa phận Thị trấn Lăng Cô, (huyện Phú Lộc, tỉnh Thừa Thiên – Huế) và phường Hòa Hiệp Bắc (quận Liên Chiểu, Đà Nẵng), một trong những địa điểm chụp hình đẹp và lãng mạn đầy chất thơ.</p>
                                    <div className="h-card-photographer">
                                        <div className="font-w-b text-color">Photographer</div>
                                        <div className="photographer"><img src={require('../../images/logo-desktop.png')} alt="photographer"/></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </article>
            </div>
        </section>
    </main>);
}
export default Place;
