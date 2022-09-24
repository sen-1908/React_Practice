import { useCallback, useState} from "react";
import { ChildArea } from "./components/ChildArea";

export default function App() {
const[text, setText] = useState('');
const[open, setOpen] = useState(false);

const onChangeText = (e) => {
    setText(e.target.value);
};

const onClickOpen = () => setOpen(!open);
const onClickClose = useCallback(() => setOpen(false),[setOpen]);//関数のmemo化をするときは,useCallbackを使用する

    return (
      <div className="App">
        <input value={text} onChange={onChangeText} />
        <br />
        <button onClick={onClickOpen} >表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
      </div>
    );
  };