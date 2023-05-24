import logo from './logo.svg';
import './UserInfo.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function UserInfo() {
    return (
        <fieldset>
            <legend>회원정보</legend>
            <table>
          <thead>
          <tr>
            <th>아이디</th>
            <td>abcd1234</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>이름</th>
            <td>두레</td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>abcd1234@multi.com</td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td>a******</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>주민번호</th>
            <td>000101-4</td>
          </tr>
        </tfoot>
        </table>
        </fieldset>

    );
}

export default UserInfo;
