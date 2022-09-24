import styled from "styled-components";


export const Card = (props) => {
    const{children} = props;
    return(
        <Scard>{children}</Scard>
    );
};

const Scard = styled.div`
    background-color: rgb(128,224,170);
    border-radius: 10px;
    padding: 15px;
`;