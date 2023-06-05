import { Outlet } from "react-router";
import Header from "../Components/Layout/Header";

const RootLayout =() =>{

    return <>
    <Header />
    <Outlet/>
    </>
}

export default RootLayout;