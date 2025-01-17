import Header from "../components/public/header/Header.tsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/public/footer/Footer.tsx";
import { useAuth } from "../contexts/AuthContext.tsx";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.tsx";

const StoreLayout = () => {
    const { theme } = useContext(ThemeContext);
    console.log('StoreLayout.theme', theme);
    return (
      <>
          <Header/>
          <Outlet/>
          <Footer/>
      </>
    )
};

export default StoreLayout;