import { MainContainer, Num, NumContainer, StepContainer, StepNum, StepTextContainer, StepTitle } from "./styles";

const SideNav = ({currentStep}) => {
	return (
	<>
       <MainContainer>
			<StepContainer>
				<NumContainer to="/">
					<Num >1</Num>
				</NumContainer>
				<StepTextContainer>
					<StepNum>STEP 1</StepNum>
					<StepTitle>YOUR INFO</StepTitle>
				</StepTextContainer>
			</StepContainer>
			<StepContainer>
				<NumContainer to="/plan-select">
					<Num >2</Num>
				</NumContainer>
				<StepTextContainer>
					<StepNum>STEP 2</StepNum>
					<StepTitle>SELECT PLAN</StepTitle>
				</StepTextContainer>
			</StepContainer>
			<StepContainer>
				<NumContainer to="/addons-select">
					<Num >3</Num>
				</NumContainer>
				<StepTextContainer>
					<StepNum>STEP 3</StepNum>
					<StepTitle>ADD-ONS</StepTitle>
				</StepTextContainer>
			</StepContainer>
			<StepContainer>
				<NumContainer to="/summary">
					<Num >4</Num>
				</NumContainer>
				<StepTextContainer>
					<StepNum>STEP 4</StepNum>
					<StepTitle>SUMMARY</StepTitle>
				</StepTextContainer>
			</StepContainer>
       </MainContainer>
	</>
	);
};

export default SideNav;
