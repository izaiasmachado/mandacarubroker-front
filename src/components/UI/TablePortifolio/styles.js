"use client";

import styled from "styled-components";

export const Container = styled.div`
  overflow-y: auto;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: #011938;
`;

export const TableRow = styled.tr`
  color: #818181;
  padding: 8px;
  font-size: 1.3rem;
  background-color: ${(props) => (props.flip ? "#ECECEC" : "#021D3F")};
`;

export const TableRowHeader = styled.tr`
  color: #fff;
  padding: 8px;
  font-size: 1.3rem;
`;

export const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
`;

export const TableCell = styled.td`
  width: 15rem;
  align-items: center;
  padding: 8px;
`;

export const TableEmpty = styled.td`
  color: #fff;
  padding: 20px;
  font-weight: 600;
`;
