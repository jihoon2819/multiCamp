import logo from './logo.svg';
import './MyComment.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function MyComment() {
    return (
        <div className="review">
            <div className="review_title">
                나의 후기</div>
            <div className="review_box">
                <div className="review_margin">
                    <img src="review.jpg"/>

                        <ul>
                            <li>
                                <div className="name">두레</div>
                            </li>
                            <li>
                                <div className="date">23.13.32</div>
                            </li>
                            <li>
                                <div className="review_ment">와~ 대박~ 미쳤다~ 연극계를 뒤집어놓으셨다~</div>
                            </li>
                        </ul>
                </div>
            </div>

            <div className="review_box">
                <div className="review_margin">
                    <img src="review.jpg"/>

                        <ul>
                            <li>
                                <div className="name">두레</div>
                            </li>
                            <li>
                                <div className="date">23.13.32</div>
                            </li>
                            <li>
                                <div className="review_ment">와~ 대박~ 미쳤다~ 연극계를 뒤집어놓으셨다~</div>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default MyComment;
