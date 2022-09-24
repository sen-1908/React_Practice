// import React, { useContext } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
// import { UserContext } from "../../../providers/UserProvider";
import { userState } from "../../../store/userState";

export const UserIcon = (props) => {
    const {image, name} = props;
    // const {userInfo} = useContext(UserContext);
    
    const userInfo = useRecoilValue(userState);
    const isAdmin = userInfo ? userInfo.isAdmin : false;

    return(
        <SContainer>
            <SImg  height={160} width={160} alt={name} src={image} />
            <p>{name}</p>
            {isAdmin && <SEdit>編集</SEdit>}
        </SContainer>
    );
};

const SContainer = styled.div`
    text-align: center;
`;

const SImg = styled.img`
    border-radius:50%;
`;

const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`;