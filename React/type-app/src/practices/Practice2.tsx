export const Practice2 = () => {
    
    const calcTotalFee = (num:number):number => {
        const total:number = num * 1.1;
        return total;
    }
    const onClick = () => {
        console.log(calcTotalFee(111)); 
    } 

    return(
        <div>
            <p>練習問題</p>
            <button onClick={onClick} >練習問題2を実行</button>
        </div>
    );
};