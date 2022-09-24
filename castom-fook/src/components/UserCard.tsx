import { FC } from "react";
import { UserProfile } from "../types/userProfile";

type Props = {
    user:UserProfile
}

const style = {
    border:"solid 1px #ccc",
    borderRadius: "10px",
    padding: "0 11px",
    margin: "10px",
}

export const UserCard: FC<Props> = (props) => {
    const {user} = props;
    return (
        <div style={style}>
            <dl>
                <dd>名前</dd>
                <dd> {user.name} </dd>
                <dd>メール</dd>
                <dd> {user.email} </dd>
                <dd>住所</dd>
                <dd> {user.address} </dd>
            </dl>
        </div>
    )
}