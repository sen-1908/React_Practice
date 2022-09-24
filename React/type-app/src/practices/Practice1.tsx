export const Practice1 = () => {
    
    const calcTotalFee = (num:number) => {
        const total:number = num * 1.1;
        console.log(total);
    }
    const onClick = () => calcTotalFee(111);

    return(
        <div>
            <p>練習問題</p>
            <button onClick={onClick} >練習問題1を実行</button>
        </div>
    );
};