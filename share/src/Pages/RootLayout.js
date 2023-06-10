import { Outlet } from "react-router";
import Header from "../Components/Header";

const RootLayout =() =>{

    return <>
    <Header />
    <Outlet/>
    </>
}

export default RootLayout;