import { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Layout from "./component/layout/Layout";
import Gallery from "./component/pages/Gallery";
import Posts from "./component/pages/Posts";
import Profile from "./component/pages/Profile";
import Todo from "./component/pages/Todo";
import Signin from "./component/signin/Signin";
import { authContext } from "./context/AuthContext";
import "react-chat-widget/lib/styles.css";

function App() {
  const [account, setAccount] = useState("");
  const navigateRoute = useNavigate();
  const pathname = window.location.pathname.split("/")[1];

  useEffect(() => {
    if (!account) {
      const path = `/${pathname}`;
      // console.log(path);
      path !== "/signin" && !account && navigateRoute("/signin");
    }
  }, [account]);

  useEffect(() => {
    const acc = localStorage.getItem("isLogin");
    setAccount(acc);
  }, []);

  const onChangeAccountHandler = (accountId) => {
    localStorage.setItem("isLogin", accountId);
    setAccount(accountId);
  };

  return (
    <authContext.Provider
      value={{
        account: account,
        onChangeAccount: onChangeAccountHandler,
      }}
    >
      <Routes>
        {!account ? (
          <>
            <Route path="/signin" element={<Signin />} />
            {!account && <Route path="/" element={<Navigate to="/signin" />} />}
          </>
        ) : (
          <>
            <Route path="" element={<Layout />}>
              <Route path="profile" element={<Profile />} />
              <Route path="posts" element={<Posts />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="todo" element={<Todo />} />
              <Route path="*" element={<Navigate to="/profile" />} />
            </Route>
          </>
        )}
      </Routes>
    </authContext.Provider>
  );
}

export default App;
