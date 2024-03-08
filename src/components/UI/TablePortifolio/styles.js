"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 2rem;
  margin-bottom: 1rem;
  h1 {
    color: #fff;
  }
  h3 {
    color: #fff;
  }
`;

export const Container = styled.div`
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
  font-size: 1.5rem;
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

export const TableEmpty = styled.td`
  color: #fff;
  padding: 20px;
  font-weight: 600;
`;

export const SelectHeader = styled.th`
  height: 40px;
  width: 120px;
  ${(props) => (props.align ? "text-align: center;" : "text-align: left;")};
`;
