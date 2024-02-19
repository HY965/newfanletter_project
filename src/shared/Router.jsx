import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Mypage from "../pages/Mypage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import fakeData from "shared/fakeData.json";
import { useState } from "react";

export default function Router() {
  const [letter, setLetter] = useState(fakeData);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home letter={letter} setLetter={setLetter} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail letter={letter} setLetter={setLetter} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/mypage" element={<Mypage />} />
        {/* :id ->  path parameter url에서의 변수같은 역활  보통 prams라고 부름 */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
