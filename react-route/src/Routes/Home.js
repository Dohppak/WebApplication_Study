import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container =styled.div`
    display : flex;
    flex-direction : column;
`;

const SLink = styled(Link)`
    font-size : 40px;
    font-weight : 600;
    margin-bottom : 10px;
`;

const Title = styled.h1`
    font-size : 60px;
    font-weight : 600;
    margin-bottom: 50px;
`;

export default() => (
    <Container>
        <Title>Doh</Title>
        <SLink to="/notifications">Notifications</SLink>

    </Container>
)