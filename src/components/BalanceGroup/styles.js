'use client'

import styled from "styled-components"

export const Balance = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #022A5D;
    color: #fff;
    width: 100%;
    min-height: 60px;
    border-radius: 3px;
`

export const Icon = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    margin-top: 2rem;
    cursor: pointer;
`

export const Currency = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    justify-content: flex-start;
    min-width: 5rem;
    span {
        min-height: 2rem;
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        hr {
            width: 100%;
            height: 2px;
        }
    }

`

export const BalanceLeftContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BalanceRightcontent = styled.div`
    gap: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Extrato = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
`