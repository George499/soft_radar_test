import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Register from "./Pages/Register";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import PrivateRoutes from "./utils/PrivateRoutes";
import { useAuth } from "./AuthContext";
import Cookies from "js-cookie";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const readCookie = () => {
    const user = Cookies.get("user");

    if (user) {
      setIsLoggedIn(true);
    }
  };
  useEffect(() => {
    readCookie();
  });

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
              <Route path="/" element={<Main />} />
            </Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
