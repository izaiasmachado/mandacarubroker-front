"use client";

import styled from "styled-components";

export const Container = styled.div`
  /* padding: 20px; */
  overflow-y: auto;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: #011938;
`;

export const TableRow = styled.tr`
  color: #fff;
  height: 50px;
  font-weight: 600;
  padding: 8px;
  font-size: 1.6rem;
  background-color: ${(props) => (props.flip ? "#022A5E" : "#011229")};
`;

export const TableRowHeader = styled.tr`
  color: #fff;
  padding: 8px;
  font-size: 1.8rem;
`;

export const TableHeader = styled.th`
  padding: 8px;
  height: 40px;
  ${(props) => (props.align ? "text-align: center;" : "text-align: left;")};
`;

export const TableCell = styled.td`
  align-items: center;
  height: 50px;
  padding: 8px;
  ${(props) => (props.align ? "text-align: center;" : "text-align: left;")}
`;

export const SelectHeader = styled.th`
  height: 40px;
  width: 120px;
  ${(props) => (props.align ? "text-align: center;" : "text-align: left;")};
`;
