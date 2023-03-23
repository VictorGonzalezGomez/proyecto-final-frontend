import "./App.css";

import HomePage from "./views/landingPage/HomePage"
import Faq from "./views/faq/FAQ";
import AboutUs from "./views/aboutUs/AboutUs";
import Features from "./views/features/Features";
import Summary from "./views/dashboard/Summary";
import RegisterUserPage from "./views/user/RegisterFormUser"
import RegisterStorePage from "./views/store/RegisterFormStore"
import AuthContexProvider from "./context/AuthContextProvider";
import ChartProvider from "./context/ChartContext";
import { Routes, Route } from "react-router-dom";
import './index.css';
import ProfilePage from "./views/profile/ProfilePage" ;
import Dashboard from "./views/dashboard/Dashboard"
import PrivateRoutes from "./helpers/PrivateRoutes";
// import LandingPageLayout from "./components/layout/LandingPageLayout";
import DashboardLayout from "./components/layout/DashboardLayout";
import LandingPageLayout from "./components/layout/LandingPageLayout";

function App() {
  return (
    <AuthContexProvider>
      <ChartProvider>

        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/summary" element={< DashboardLayout><Summary/></ DashboardLayout>} />
              <Route path="/dashboard/:chartId" element={< DashboardLayout><Dashboard/></ DashboardLayout>} />
              <Route path="/profile" element={< DashboardLayout><ProfilePage/></ DashboardLayout>} />
            </Route>
            <Route path="/" element={<LandingPageLayout><HomePage/></LandingPageLayout>} />
            <Route path="/faq" element={<LandingPageLayout><Faq/></LandingPageLayout>} />
            <Route path="/about-us" element={<LandingPageLayout><AboutUs/></LandingPageLayout>} />
            <Route path="/features" element={<LandingPageLayout><Features/></LandingPageLayout>} /> 
            <Route path="/registeruser" element={<LandingPageLayout><RegisterUserPage/></LandingPageLayout>}/>
            <Route path="/register" element={<LandingPageLayout><RegisterStorePage/></LandingPageLayout>}/>  
            </Routes>

      </ChartProvider>
    </AuthContexProvider>
  );
}

export default App;
