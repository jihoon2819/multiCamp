import logo from './logo.svg';
import './List.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function List() {
    return (
        <div className="navi">
            <div className="navi_bar">
                <ul>
                    <li><Link to="/userInfo">회원정보</Link></li>
                    <li><Link to="/myComment">나의 후기</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default List;
