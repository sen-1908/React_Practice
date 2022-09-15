const style = {
    width: "100%",
    height : "200px",
    backgroundColor: "red"
};

export const ChildArea = (props) => {
    const {open} = props;
    return (
        <>
            {open ? (
                <div style ={style}>
                <div><p>kodomo</p></div>
                </div>
            ) : null}
        </>
    )
}