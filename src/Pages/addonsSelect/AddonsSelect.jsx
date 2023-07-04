import { useState } from "react";
import { Addon, AddonDesc, AddonDetails, AddonPrice, AddonText, AddonTitle, AddonsContainer, Button, ButtonContainer, Caption, CheckBox, Form, GoBackButton, MainContainer, Title, TitleContainer } from "./styles";
import { Link } from "react-router-dom";
import { ADDONS } from "../../constants/plans";
import { v4 } from "uuid";


const AddonsSelect = ({registerData, setRegisterData}) => {
    const payFrequency = registerData.payFrequency;
    const [addons,setAddons] = useState(ADDONS);
	return (
	<>
    <MainContainer>
            <TitleContainer>
                <Title>Pick add-ons</Title>
                <Caption>Add-ons help enhance your gaming experience.</Caption>
            </TitleContainer>
            <Form >
                <AddonsContainer>
                {addons.map((addon,index) =>
                    <Addon key={v4()} onClick={()=>handleAddonSelect(index,[...addons],setAddons)} className={addon.selected && "selected"}>
                        <CheckBox type="checkbox" checked={addon.selected} readOnly={true}/>
                        <AddonDetails>
                            <AddonText>
                                <AddonTitle>{addon.title}</AddonTitle>
                                <AddonDesc>{addon.desc}</AddonDesc>
                            </AddonText>
                            <AddonPrice>${payFrequency==="monthly"?addon.price.monthly+"/mo":addon.price.yearly+"/yr"}</AddonPrice>
                        </AddonDetails>
                    </Addon>
                )}
                </AddonsContainer>
                <ButtonContainer>
                    <Link to="/plan-select">
                        <GoBackButton>Go Back</GoBackButton>
                    </Link>
                    <Link to="/summary"  onClick={()=>handleAddonSubmit(addons,registerData,setRegisterData)}>
                        <Button >Next Step</Button>
                    </Link>
                </ButtonContainer>
            </Form>
    </MainContainer>
	</>
	);
};

const handleAddonSelect = (index,addons,setAddons) => {
    addons[index].selected=!addons[index].selected;
    setAddons(addons);
}
const handleAddonSubmit = (addons,registerData,setRegisterData) => {
    const selectedAddons = addons.filter(addon=> addon.selected===true);
    setRegisterData({...registerData,addons:selectedAddons})
}

export default AddonsSelect;