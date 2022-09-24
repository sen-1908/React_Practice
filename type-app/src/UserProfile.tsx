import { FC } from "react";
import { User } from "./types/user";

type Props = {
    user:User;
}

export const UserProfile: FC<Props> = (props) => {
    const {user} = props;
    return(
        <dl>
            <dd>名前</dd>
            <dd>{user.name} </dd>
            <dd>趣味</dd>
            <dd> {user.hobbies?.join(" / ")} </dd>
        </dl>
    )
}

