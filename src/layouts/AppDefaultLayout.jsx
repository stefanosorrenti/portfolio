import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
 
export function AppDefaultLayout() {



    return (
        <>
        <AppHeader />
        <Outlet />
        <AppFooter />
        
        </>

    )
}