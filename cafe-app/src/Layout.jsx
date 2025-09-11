import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return(
        <div className="p-4 flex flex-col min-h-screen bg-[#EEDEE0]">
            <Header />
            <Outlet className= "flex-1"/>
            <Footer />
        </div>
    );
}