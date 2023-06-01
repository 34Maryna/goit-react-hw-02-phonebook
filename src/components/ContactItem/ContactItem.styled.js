import styled from '@emotion/styled';

export const ContactsItem = styled.li`
list-style: none;
display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 8px;

  button {
    display: flex;
    justify-content: center;
    cursor: pointer;
    border: 1px solid #64999C;
    border-radius: 5px;
    outline: none;
    padding: 4px 4px;
    background-color: #CDDFE3;
    color: black;

    &:hover {
        color: #F7040F;
        background-color: #3F9EAB;
    }
  }
`;