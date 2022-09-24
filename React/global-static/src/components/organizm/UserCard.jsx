import styled from "styled-components";
import { Card } from "../atoms/card/Card";
import { UserIcon } from "../molucule/user/UserIcon";


export const UserCard = (props) => {
    const { user , isAdmin} = props;
    return(
        <Card>
            <UserIcon image={user.image} name={user.name} isAdmin={isAdmin} />
            <SDL>
                <dt>メール</dt>
                <dd> {user.email} </dd>
                <dt>電話</dt>
                <dd> {user.phone} </dd>
                <dt>web</dt>
                <dd> {user.website} </dd>
            </SDL>
        </Card>
    );
}

const SDL = styled.dl`
    text-aligh: left;
    margin-bottom: 0px;
dt {
    float: left;
}
dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
}

`;