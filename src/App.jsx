import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header/Header";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Layout/Footer/Footer";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ForgetPassword from "./components/Auth/ForgetPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import Contact from "./components/Contact/Contact";
import Request from "./components/Request/Request";
import About from "./components/About/About";
import PaymentFailed from "./components/Payments/PaymentFailed";
import PaymentSuccess from "./components/Payments/PaymentSuccess";
import Subscribe from "./components/Payments/Subscribe";
import NotFound from "./components/NotFound/NotFound";
import CoursePage from "./components/CoursePage/CoursePage";
import Profile from "./components/Profile/Profile";
import ChangePassword from "./components/Profile/ChangePassword";
import UpdateProfile from "./components/Profile/UpdateProfile";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import CreateCourse from "./components/Admin/CreateCourse/CreateCourse";
import AdminCourses from "./components/Admin/Courses/AdminCourses";
import Users from "./components/Admin/Users/Users";
function App() {
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/request" element={<Request />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/paymentfailed" element={<PaymentFailed />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />

        {/* Admin Routes */}

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/createcourse" element={<CreateCourse />} />
        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/admin/users" element={<Users />} />



      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
