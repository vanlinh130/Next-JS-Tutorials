import styled from "styled-components";

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary}
`

function CssJS() {
    return ( 
        <Title>Styled Component</Title>
     );
}

export default CssJS;