import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage";
import { AboutPage } from "../Pages/AboutPage/AboutPage";
import { ServicesPage } from "../Pages/ServicesPage/ServicesPage";
import { ContactPage } from "../Pages/ContactPage/ContactPage";
import { ErrorPage } from "../Pages/ErrorPage/ErrorPage";

const AppRoutes = () => (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRoutes;
