import React from 'react';
import './footer.css';

function Footer() {
    return (<footer className="h-main-footer">
        <div className="container">
            <div className="h-footer dis-row py-3">
                <div>
                    <h2 className="font-w-l font-s-1 mb-1">Popular post</h2>
                    <div className="dis-column">
                        <a href="#0">Ngoại cảnh</a>
                        <a href="#0">Chân dung</a>
                        <a href="#0">Nghệ thuật</a>
                    </div>
                </div>
                <div>
                    <h2 className="font-w-l font-s-1 mb-1">Tags</h2>
                    <div className="dis-row">
                        <button className="button-1">Still life</button>
                        <button className="button-1">Still life</button>
                        <button className="button-1">Still life</button>
                        <button className="button-1">Still life</button>
                    </div>
                </div>
                <div>
                    <h2 className="font-w-l font-s-1 mb-1">Get in Touch</h2>
                    <div className="h-footer-contact dis-column">
                        <p><strong>Địa chỉ: </strong>190 Âu Cơ, quận Liên Chiểu, TP.Đà Nẵng</p>
                        <p><strong>Sđt: </strong>0337892690</p>
                        <p><strong>Email: </strong>nxv109@gmail.com</p>
                    </div>
                </div>
                <div>
                    <h2 className="font-w-l font-s-1 mb-1">Learn More</h2>
                    <div className="dis-column mb-1">
                        <a href="#0">About me</a>
                        <a href="#0">Our Story</a>
                        <a href="#0">Project</a>
                    </div>
                    <h2 className="font-w-l font-s-1 mb-1">Need Help?</h2>
                    <div className="dis-column">
                        <a href="#0">Support</a>
                        <a href="#0">Get Started</a>
                        <a href="#0">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>);
};
export default Footer;
