import styled from "styled-components";

const MainContainer = styled.div`
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 16px;
`;

const Icon = styled.img`
    height: 80px;
    width: 80px;
    padding-bottom: 16px;
`;
const Title = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    color: #022959;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const Caption = styled.p`
    font-family: 'Ubuntu', sans-serif;
    color: #9699AA;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    width: 500px;
`;
export {MainContainer,Caption,Title,Icon};