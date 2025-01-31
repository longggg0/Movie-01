import { Outlet } from "react-router";
import AppNavbar from '../components/AppNavbar.jsx';
import Footer from "../components/Footer.jsx";
import CardRightSide from "../components/CardRightSide.jsx";

export default function MainLayout() {
    return (
        <>
            <AppNavbar/>
            <div className="grid grid-cols-12">
                <div className="col-span-8">
                    <Outlet/>
                </div>
                <div className="col-span-4">
                    <CardRightSide/>
                </div>
            </div>
            <Footer/>
        </>
    )
}