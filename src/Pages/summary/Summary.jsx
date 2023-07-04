
import { Link } from "react-router-dom";
import { Addon, AddonName, AddonPrice, Addons, Button, ButtonContainer, Caption, ChangeFrequency, GoBackButton, Line, MainContainer, PlanDetails, PlanName, PlanPrice, PlanSummary, PlanSummaryContainer, PlanText, SummaryContainer, Title, TitleContainer, TotalPriceContainer, TotalText, TotalValue } from "./styles";
import { v4 } from "uuid";


const Summary = ({registerData, setRegisterData}) => {
    const {plan,price,payFrequency,addons} = registerData;
    const total = registerData.price + getAddonsTotal(payFrequency,addons);
	return (
	<>
    <MainContainer>
            <TitleContainer>
                <Title>Finishing up</Title>
                <Caption>Double-check everything looks OK before confirming.</Caption>
            </TitleContainer>
            <SummaryContainer >
                <PlanSummaryContainer>
                    <PlanSummary>
                        <PlanDetails>
                            <PlanText>
                                <PlanName>{plan}</PlanName>
                                <ChangeFrequency to="/plan-select">Change</ChangeFrequency>
                            </PlanText>
                            <PlanPrice>${price}{payFrequency==="monthly"?"/mo":"/yr"}</PlanPrice>
                        </PlanDetails>
                        <Line></Line>
                        <Addons>
                            {addons.map(addon =>
                                <Addon key={v4()} >
                                    <AddonName>{addon.title}</AddonName>
                                    <AddonPrice>+${payFrequency==="monthly"?addon.price.monthly+"/mo":addon.price.yearly+"/yr"}</AddonPrice>
                                </Addon>
                            )}
                        </Addons>
                    </PlanSummary>
                    <TotalPriceContainer>
                        <TotalText>Total (per {payFrequency==="monthly"?"month":"year"})</TotalText>
                        <TotalValue>${total}{payFrequency==="monthly"?"/mo":"/yr"}</TotalValue>
                    </TotalPriceContainer>
                </PlanSummaryContainer>
                <ButtonContainer>
                    <Link to="/addons-select">
                        <GoBackButton>Go Back</GoBackButton>
                    </Link>
                    <Link to="/thanks-page" >
                        <Button >Confirm</Button>
                    </Link>
                </ButtonContainer>
            </SummaryContainer>
    </MainContainer>
	</>
	);
};

const getAddonsTotal = (payFrequency,addons)  =>{
    let total=0;
    addons.forEach(element => {
        if (payFrequency==="monthly") {
            total+=element.price.monthly;
        }else{
            total+=element.price.yearly;
        }
    });
    console.log(total);
    return total;
}
export default Summary;