import React from "react";
import styled from "styled-components";
import { Notification } from "corfu";

const Container = styled.div`
    display : flex;
    flex-direction : column;
    > div {
        margin-bottom : 50px;
    }
`;

const Title = styled.h1`
    margin-bottom : 50px;
    font-size : 32px;
`;

export default() => (
    <Container>
        <Title>Notification</Title>
        <Notification
            text = {"Neutral Notification"}
            theme = {"primary"}
        />
    </Container>
);