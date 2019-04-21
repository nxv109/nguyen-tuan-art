import React, {Component} from 'react';
import './contact.css';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            ten: "",
            email: "",
            sdt: "",
            subjects: "",
            message: ""
        }
    }

    onChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {ten, email, sdt, subjects, message} = this.state;

        if(ten === "" || email === "" || sdt === "" || subjects === "" || message === ""){
            alert("Làm ơn nhập đầy đủ các trường!");
        }else{
            alert("Tin của bạn đã được gửi đi. Thanks!");
        }
    }

    render(){

        const {ten, email, sdt, subjects, message} = this.state;

        return (<main>
            <section className="contact-main mb-3">
                <div className="container">
                    <article>
                        <div>
                            <header className="h-product-list-title text-center py-3 my-3">
                                <h2 className="font-w-s font-s-1">LIÊN HỆ VỚI MÌNH</h2>
                            </header>
                        </div>
                        <div className="address-info dis-row text-center mb-3">
                            <div className="main-icon-address">
                                <div className="icon-address mb-3">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <p className="font-s-1">190 Âu Cơ, Q.Liên Chiểu, Tp.Đà Nẵng</p>
                            </div>
                            <div className="main-icon-phone">
                                <div className="icon-phone mb-3">
                                    <i className="fas fa-phone-square"></i>
                                </div>
                                <p className="font-s-1">033.789.2690</p>
                            </div>
                            <div className="main-icon-email">
                                <div className="icon-email mb-3">
                                    <i className="fas fa-envelope-open-text"></i>
                                </div>
                                <p className="font-s-1">nguyentuanart11111@gmail.com</p>
                            </div>
                        </div>
    
                        <div className="main-box-info">
                            <form className="box-info" onSubmit={this.onSubmit}>
                                <div className="box-input-contact dis-row">
                                    <input 
                                        className="input-contact box-shadow"
                                        type="text"
                                        name="ten"
                                        value={ten}
                                        onChange={this.onChange}
                                        placeholder="Họ và tên..."
                                    />
                                    <input 
                                        className="input-contact box-shadow" 
                                        type="text" 
                                        name="email"
                                        value={email}
                                        onChange={this.onChange}
                                        placeholder="Email..."
                                    />
                                    <input
                                        className="input-contact box-shadow" 
                                        type="text" 
                                        name="sdt"
                                        value={sdt}
                                        onChange={this.onChange}
                                        placeholder="Số điện thoại..."
                                    />
                                    <input 
                                        className="input-contact box-shadow" 
                                        type="text" 
                                        name="subjects"
                                        value={subjects}
                                        onChange={this.onChange}
                                        placeholder="Chủ đề..."
                                    />
                                </div>
                                <textarea 
                                    className="textarea-contact box-shadow" 
                                    rows="10" 
                                    name="message"
                                    value={message}
                                    onChange={this.onChange}
                                    placeholder="Nội dung cần gửi...">
                                </textarea>
                                <div className="text-center"><button className="button-1 box-shadow">Gửi</button></div>
                            </form>
                        </div>
    
                    </article>
                </div>
            </section>
        </main>);
    }
}
export default Contact;
