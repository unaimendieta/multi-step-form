import { Outlet } from "react-router-dom";
import SideNav from "../components/sideNav/SideNav";
import { MainContainer } from "./style";

const Layout = ({currentStep}) => {
	return (
	<>
    <MainContainer>
		<SideNav currentStep={currentStep}/>
        <Outlet />
    </MainContainer>
	</>
	);
};

export default Layout;