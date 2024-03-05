'use client'

import styled from "styled-components"

export const Balance = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #022A5D;
    color: #fff;
    width: 180px;
    height: 46px;
    border-radius: 3px;
`

export const Icon = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`

export const BalanceLeftContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BalanceRightcontent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Extrato = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
`