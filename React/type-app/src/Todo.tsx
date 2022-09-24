import { TodoType } from "./types/todo";

export const Todo = (props:Omit<TodoType, "id">) => {
    const{title,userId,completed } = props;
    const completeMark = completed ? "[完了]" : "[未]";
    return <p> {`${completeMark} ${title}(ユーザー:${userId})`} </p>
}　