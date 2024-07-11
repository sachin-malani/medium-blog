import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Publish from "./pages/Publish";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/publish" element={<Publish />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const PrivateRoutes = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default App;
