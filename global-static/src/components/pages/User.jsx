import styled from "styled-components";
import { SeachInput } from "../molucule/SeachInput";
import { UserCard } from "../organizm/UserCard";
import {useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";



const users = [...Array(10).keys()].map(((val) => {
    return {
        id: val,
        name: `sample${val}`,
        image: "https://source.unsplash.com/1rBg5YSi00c",
        email: "aaa.com",
        phone: "000-000-000",
        company: {
          name: "test株式会社"
        },
        website: "aaa@com"
       }
   }
))

export const Users = () => {
const {state} = useLocation();
const isAdmin = state ? state.isAdmin : false;
const [userInfo, setUserInfo] = useRecoilState(userState);

console.log(state);
    return(
        <SContainer>
            <h2>User一覧</h2>
            <SeachInput />
            <SuserArea>
            {users.map((obj) =>
                <UserCard key={obj.id} user={obj} isAdmin={isAdmin} />
            )}
            </SuserArea>
        </SContainer>
    );
};

const SContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 24px;
    
`;

const SuserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    grid-gap: 20px;
`;