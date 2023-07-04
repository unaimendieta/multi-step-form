import { Route, Routes } from "react-router-dom";
import PersonalInfo from "../Pages/personalInfo/PersonalInfo";
import Layout from "../layouts/Layouts";
import { useState } from "react";
import CorrectRegistration from "../Pages/correctRegistration/CorrectRegistration";
import PlanSelect from "../Pages/planSelect/PlanSelect";
import AddonsSelect from "../Pages/addonsSelect/AddonsSelect";
import Summary from "../Pages/summary/Summary";

const Router = () => {
    const [registerData, setRegisterData] = useState({
        name:"",
        email:"",
        phone:"",
        plan:"",
        price:"",
        payFrequency:"",
        addons:[]
    });

	return (
        <Routes>
            <Route path="/"  element={<Layout/>}>
                <Route index element={<PersonalInfo registerData={registerData} setRegisterData={setRegisterData}  />} />
                <Route path="plan-select" element={<PlanSelect registerData={registerData} setRegisterData={setRegisterData}  />} />
                <Route path="addons-select" element={<AddonsSelect registerData={registerData} setRegisterData={setRegisterData}/>} />
                <Route path="summary" element={<Summary registerData={registerData} setRegisterData={setRegisterData}/>} />
                <Route path="thanks-page" element={<CorrectRegistration/>} />
            </Route>
        </Routes>
	);
};

export default Router;