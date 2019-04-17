import React from 'react';
import './pricing.css';

const Pricing = () => {
    return (<main>
        <section className="pricing-main">
            <div className="container">
                <article className="pricing mb-3">
                    <div>
                        <header className="h-product-list-title text-center py-3 my-3">
                            <h2 className="font-w-s font-s-1">BẢNG THAM KHẢO GIÁ DỊCH VỤ CHỤP ẢNH!</h2>
                        </header>
                    </div>
                    <div className="pricing-list">
                        <table className="pricing-table border">
                            <thead>
                                <th>Tên dịch vụ</th>
                                <th>Giá</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Chụp ngoại cảnh</td>
                                    <td>300k/người</td>
                                </tr>
                                <tr>
                                    <td>Cặp đôi</td>
                                    <td>400k/hai người</td>
                                </tr>
                                <tr>
                                    <td>Chụp chân dung</td>
                                    <td>250k/người</td>
                                </tr>
                                <tr>
                                    <td>Chụp game</td>
                                    <td>300k/người</td>
                                </tr>
                                <tr>
                                    <td>Chụp ảnh cưới</td>
                                    <td>3000k/suất chụp</td>
                                </tr>
                                <tr>
                                    <td>Chụp ảnh sự kiện</td>
                                    <td>Giá thương lượng</td>
                                </tr>
                                <tr>
                                    <td>Chụp ảnh theo yêu cầu</td>
                                    <td>Giá thương lượng</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </article>
            </div>
        </section>
    </main>);
}
export default Pricing;
