export const InLineStyle = () => {

    const containerStyle = {
        border: "solid 2px",
        borderRadius: "20px" ,
        margin : "6px",
    };
    const titleStyle = {
        margin:0,
        color: "red",
    };
    const buttonStyle = {
        backgroundColor: "green",
    };

    return (
        <div style= {containerStyle} > 
            <p style={titleStyle}> Inline </p>
            <button style={buttonStyle}>Fight</button>
        </div> 

    );
};