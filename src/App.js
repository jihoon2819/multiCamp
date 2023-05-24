import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import User from './User';
import List from './List';
import UserInfo from './UserInfo';
import MyComment from './MyComment';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <User />
        <div className="my">
          <div className="List">
            <List />
          </div>
          <div className="Contents">
            <Routes>
              <Route path="/userInfo" element={<UserInfo />} />
              <Route path="/myComment" element={<MyComment />} />
            </Routes>
          </div>

        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
