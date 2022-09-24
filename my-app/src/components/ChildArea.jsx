import { memo } from "react";

const style = {
    width: "100%",
    height : "200px",
    backgroundColor: "red"
};

export const ChildArea = memo((props) => {//メモを渡すことで、再レンダリングを防げる
    const {open , onClickClose} = props;//props(引数)を{open}に格納する

    // const data = [...Array(2000).keys()]; Arrayの使い方
    // data.forEach(() => {
    //     console.log("aaa");
    // });
    return (
        <>
            {open ? (//openがtrueだったら移行の式を実行する
                <div style ={style}>
                <p>kodomo</p>
                <button onClick = {onClickClose} >閉じる</button>
                </div>
            ) : null}
        </>
    )
});