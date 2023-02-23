import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;

  align-items: center;

  font-size: 18px;
`;

export const StyledList = styled.ul`
  padding-left: 10px;
`;

export const BtnDelete = styled.button`
  margin-left: 10px;

  width: 150px;
  height: 30px;

  border: 1px solid violet;

  font-weight: 600;
  font-size: 14px;

  color: white;

  cursor: pointer;
  background-color: blueviolet;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid black;
    background-color: blue;
    color: yellow;
  }
`;
