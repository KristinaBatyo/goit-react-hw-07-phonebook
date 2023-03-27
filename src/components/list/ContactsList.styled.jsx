import styled from '@emotion/styled';


export const ContactsList = styled.ul`
    margin: 0 auto;
    background-color: #fff;
    margin-top: 20px;
`;
export const ContactsItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #f5f5f5;
    &:last-child {
        border-bottom: none;
    }
`;
export const ContactsTitle = styled.h2`
    font-size: 20px;
    font-weight: 500;
    margin: 10px;
`;
export const DeleteButton = styled.button`
    width: 100px;
    padding: 5px;
    height: 30px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    border: none;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        background-color: #f5f5f5;
        transform: scale(1.03);
        outline: none;
`;