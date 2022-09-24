import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider.jsx";
import {SecoundryButton}  from "../atoms/button/SecoundryButton.jsx";
export const Top = () => {
    const history = useHistory();
    const { setUserInfo } = useContext(UserContext);

    const onClickAdmin = () => {
        setUserInfo({isAdmin: true});
        history.push("/users");    
    }
    const onClickGeneral = () => {
        setUserInfo({isAdmin: false});
        history.push("/users");    
    } 

    return(
        <SContainer>
            <h2>Topです</h2>
            <SecoundryButton onClick={onClickAdmin}>管理者</SecoundryButton>
            <br />
            <br />
            <SecoundryButton onClick={onClickGeneral} >一般ユーザー</SecoundryButton>
        </SContainer>
    );
};

const SContainer = styled.div`
    text-align: center;
`;