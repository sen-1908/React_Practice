import axios from 'axios';
import React, { useState } from 'react';
import { Text } from './Text';
import { Todo } from './Todo';
import { TodoType } from './types/todo';
import { User } from './types/user';
import { UserProfile } from './UserProfile';




export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const user:User = {
    name: "test",
    hobbies: ["ringo", "gorira"]
  }

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res)
      setTodos(res.data);
    })
  }

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="20px" ></Text>
       <button onClick={onClickFetchData} >ボタン</button>
        {todos.map((todo:TodoType) =>(
          <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
        ))}
    </div>
  );
}

