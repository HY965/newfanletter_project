import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Mypage from "../pages/Mypage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "components/Layout";

export default function Router() {
  const isLogin = useSelector((state) => state.authSlice.isLogin);
  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            {/* :id ->  path parameter url에서의 변수같은 역활  보통 prams라고 부름 */}
            <Route path="/mypage" element={<Mypage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
