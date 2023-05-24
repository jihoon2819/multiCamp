import logo from './logo.svg';
import './Header.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <img src="img/main_logo.png" id="logo"></img>
                <div className="left">
                    <div className="nav-left">연극</div>
                    <div className="nav-left">공연장</div>
                    <div className="nav-left">출연진</div>
                    <div className="nav-left">이벤트</div>
                    <div className="nav-left">관람후기
                    </div>
                </div>
                <div className="right">
                    <div className="nav-right">
                        <input type="text"/>
                    </div>
                    <div className="nav-right">
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="nav-right">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
