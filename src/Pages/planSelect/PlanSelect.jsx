import { Link } from "react-router-dom";
import { ButtonContainer, Caption, Form, GoBackButton, Icon, MainContainer, Name, Offer, PaymentType, PaymentTypeContainer, PaymentTypeSelector, Plan, PlanDetails, PlanSelectContainer, Plans, Price, SubmitButton, Title, TitleContainer, Toggle } from "./style";
import { useState } from "react";
import { PLANS } from "../../constants/plans";
import { v4 } from "uuid";


const PlanSelect = ({registerData, setRegisterData}) => {
    const [currentPlan,setCurrentPlan] = useState({
        planName: registerData.plan,
        planPrice:registerData.price,
        payFrequency:(registerData.payFrequency==="")? "monthly":registerData.payFrequency
    })

    const [currentFrecuency,setCurrentFrecuency] = useState(currentPlan.payFrequency==="yearly");
	return (
	<>
    <MainContainer>
            <TitleContainer>
                <Title>Select your plan</Title>
                <Caption>You have the option of monthly or yearly billing.</Caption>
            </TitleContainer>
            <Form >
                <PlanSelectContainer>
                    <Plans>
                        {PLANS.map(plan =>
                            <Plan key={v4()} id={plan.name} className={currentPlan.planName===plan.name && "selected"} onClick={e=>handlePlanChange(e.target.id,currentPlan.payFrequency==="monthly"?plan.price.monthly:plan.price.yearly,currentPlan,setCurrentPlan)}>
                                <Icon src={plan.img}/>
                                <PlanDetails>
                                    <Name>{plan.name}</Name>
                                    <Price>${currentPlan.payFrequency==="monthly"?plan.price.monthly+"/mo":plan.price.yearly+"/yr"}</Price>
                                    <Offer>{currentPlan.payFrequency==="yearly"&&"2 months free"}</Offer>
                                </PlanDetails>
                            </Plan>
                        )}
                    </Plans>
                    <PaymentTypeContainer>
                        <PaymentType className={!currentFrecuency && "actual"}>Monthly</PaymentType>
                        <PaymentTypeSelector id="payment" onChange={()=>handlePayFrecuency(!currentFrecuency,setCurrentFrecuency,currentPlan,setCurrentPlan)} checked={currentFrecuency} type="checkbox"/>
                        <Toggle htmlFor="payment"></Toggle>
                        <PaymentType className={currentFrecuency && "actual"}>Yearly</PaymentType>

                    </PaymentTypeContainer>
                </PlanSelectContainer>
                <ButtonContainer>
                    <Link to="/">
                        <GoBackButton>Go Back</GoBackButton>
                    </Link>
                    <Link to="/addons-select" onClick={()=>handlePlanSubmit(currentPlan,registerData,setRegisterData)}>
                        <SubmitButton  disabled={currentPlan.planName===""}>Next Step</SubmitButton>
                    </Link>
                    
                </ButtonContainer>
            </Form>
    </MainContainer>
	</>
	);
};

const handlePlanChange = (param,price,currentPlan,setCurrentPlan) => {
    setCurrentPlan({...currentPlan,
        planName: param,
        planPrice:price
    })
}
const handlePayFrecuency = (currentFrecuency,setCurrentFrecuency,currentPlan,setCurrentPlan) => {
    let frequency = "monthly";
    const actual = PLANS.filter(plan => plan.name===currentPlan.planName);
    let price = "";
    if (currentPlan.planName!=="") price=actual[0].price.monthly;
    
    if (currentFrecuency) {
        frequency= "yearly"
        if (currentPlan.planName!=="") price=actual[0].price.yearly;
    }
    setCurrentFrecuency(currentFrecuency);
    setCurrentPlan({...currentPlan,
        planPrice:price,
        payFrequency:frequency
    })
}
const handlePlanSubmit = (currentPlan,registerData,setRegisterData) =>{
    setRegisterData({...registerData,
        plan: currentPlan.planName,
        price: currentPlan.planPrice,
        payFrequency: currentPlan.payFrequency

    })
    
}

export default PlanSelect;