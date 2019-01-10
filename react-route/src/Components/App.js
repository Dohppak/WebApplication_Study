import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";


const Container = styled.div`
    padding : 130px;
`;

export default() => (
    <Container>
        <Router>
            <GlobalStyles></GlobalStyles>
        </Router>
    </Container>
);