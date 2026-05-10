import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Services from "../pages/Services";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>} index/>
                <Route path="/services" element={<Services/>} />
            </Routes>
            <Footer/>
        </Router>
    );
};
export default AppRouter;