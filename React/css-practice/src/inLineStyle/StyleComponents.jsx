import styled from "styled-components";

export const StyleComponents = () => {
    return (
        <Container >
            <p>CSSModules</p>
            <button>aaaa</button>
        </Container>
    );
};

const Container = styled.div`
    border: solid 2px;
    border-radius: 20px ;
    margin : 6px;
`;