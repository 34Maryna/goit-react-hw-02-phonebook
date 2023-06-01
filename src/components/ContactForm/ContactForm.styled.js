import styled from '@emotion/styled';

export const Message = styled.div`
font-size: 12px;
color: tomato;
margin-bottom: 4px;
`;

export const FormData = styled.form`

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 10px auto;
`;

export const FormInput = styled.input`
width: 170px;
border-radius: 5px;
border: 2px solid #64999C;
background-color: #CDDFE3;
outline: none;
padding: 5px;
`;

export const ButtonSubmit = styled.button`
display: flex;
cursor: pointer;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 8px 15px;
  margin-top: 20px;
  background-color: #6DC1CC;
  color: black;
  transition: background-color 200ms ease-out;

  &:hover {
    background-color: #3F9EAB;
  }
`;