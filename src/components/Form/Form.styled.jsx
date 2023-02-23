import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  padding: 15px;

  width: 400px;

  border: 2px solid black;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;

  width: 50px;

  margin-bottom: 10px;

  font-weight: 600;
  font-size: 18px;
`;

export const StyledInput = styled.input`
  margin-top: 5px;

  width: 200px;
  height: 20px;
`;

export const BtnAdd = styled.button`
  margin-top: 5px;

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
