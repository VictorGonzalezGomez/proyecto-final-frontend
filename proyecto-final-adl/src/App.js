import "./App.css";
import HomePage from "./views/landingPageView/HomePage";
import Faq from "./views/landingPageView/FAQ";
import AboutUs from "./views/landingPageView/AboutUs";
import Features from "./views/landingPageView/Features";
import Summary from "./views/dashboardView/Summary";
import RegisterGeneralPage from "./views/dashboardView/RegisterGeneralPage";
import RegisterUserPage from "./views/landingPageView/RegisterUserPage";
import RegisterStorePage from "./views/landingPageView/RegisterStorePage";
import AuthContexProvider from "./context/AuthContextProvider";
import ChartProvider from "./context/ChartContext";
import { Routes, Route } from "react-router-dom";
import './index.css';
import Profile from "./components/dashboard/Profile";
import Dashboard from "./views/dashboardView/Dashboard"
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
              <Route path="/profile" element={< DashboardLayout><Profile/></ DashboardLayout>} />
            </Route>

            <Route path="/" element={<LandingPageLayout><HomePage/></LandingPageLayout>} />
            <Route path="/faq" element={<LandingPageLayout><Faq/></LandingPageLayout>} />
            <Route path="/about-us" element={<LandingPageLayout><AboutUs/></LandingPageLayout>} />
            <Route path="/features" element={<LandingPageLayout><Features/></LandingPageLayout>} />
            <Route path="/register" element={<LandingPageLayout><RegisterGeneralPage/></LandingPageLayout>} />  
            <Route path="/registeruser" element={<LandingPageLayout><RegisterUserPage/></LandingPageLayout>}/>
            <Route path="/registerstore" element={<LandingPageLayout><RegisterStorePage/></LandingPageLayout>}/>  
            </Routes>

      </ChartProvider>
    </AuthContexProvider>
  );
}

export default App;
