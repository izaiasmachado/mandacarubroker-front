"use client";

import styled from "styled-components";

export const HeroWrapper = styled.div`
    gap: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HeroText = styled.h1`
    font-size: 2.5rem;
    color: #FF8C1F;

    span {
        color: white;
    }
`;

export const Line = styled.div`
    background-color: #FF8C1F;
    width: 140px;
    height: 5px;
    border-radius: 5px;
`