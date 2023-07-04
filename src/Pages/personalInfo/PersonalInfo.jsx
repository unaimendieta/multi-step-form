import { useForm } from "react-hook-form";
import { FORM_VALIDATIONS } from "../../constants/formValidations";
import { Button, ButtonContainer, Caption, Error, Form, Input, InputContainer, Label, LabelAndError, MainContainer, Title, TitleContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const PersonalInfo = ({registerData, setRegisterData}) => {
    const {handleSubmit, register, formState:{errors, isValid}} = useForm({mode:'onChange',defaultValues: {
        name:registerData.name,
        email:registerData.email,
        phone:registerData.phone
      }});
    const navigate = useNavigate();
	return (
	<>
        <MainContainer>
            <TitleContainer>
                <Title>Personal info</Title>
                <Caption>Please provide your name, email address, and phone number.</Caption>
            </TitleContainer>
            <Form onSubmit={handleSubmit(data=>onSubmit(data,registerData,setRegisterData,navigate))}>
                <InputContainer>
                    <LabelAndError>
                        <Label htmlFor="name">Name</Label>
                        <Error>{errors?.name?.message}</Error>
                    </LabelAndError>
                    <Input type="text" {...register("name",FORM_VALIDATIONS.name)} placeholder="e.g. Stephen King"/>
                    
                </InputContainer>
                <InputContainer>
                    <LabelAndError>
                        <Label htmlFor="email">Email</Label>
                        <Error>{errors?.email?.message}</Error>
                    </LabelAndError>
                    <Input type="text" {...register("email",FORM_VALIDATIONS.email)} placeholder="e.g. stephenking@lorem.com"/>
                </InputContainer>
                <InputContainer>
                    <LabelAndError>
                        <Label htmlFor="phone">Phone</Label>
                        <Error>{errors?.phone?.message}</Error>
                    </LabelAndError>
                    <Input type="text" {...register("phone",FORM_VALIDATIONS.phone)} placeholder="e.g. +1 234 567 890"/>
                </InputContainer>
                <ButtonContainer>
                        <Button disabled={!isValid} >Next Step</Button>
                </ButtonContainer>
            </Form>
        </MainContainer>
        
	</>
	);
};

const onSubmit = (data,registerData,setRegisterData,navigate) =>{
    setRegisterData({...registerData,
        name: data.name,
        email: data.email,
        phone: data.phone

    });
    navigate("/plan-select");
}
export default PersonalInfo;
