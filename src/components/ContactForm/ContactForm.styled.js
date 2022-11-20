import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
`

export const Label = styled.label`
width: 100%;
display: flex;
flex-direction: column;
font-weight: 600;

`
export const Input = styled.input`
outline: 1px solid black;
width: 100%;
margin-bottom: 20px;
margin-top: 10px;
border-color: whitesmoke;
/* outline: transparent; */
border-radius: 4px;
/* height: 20px; */
/* :focus{
    box-shadow: 10px 5px 5px lightblue;
} */
`

export const Button = styled.button`
text-align: center;
width: 100%;
height: 50px;
border-radius: 4px;
background-color: transparent;
border-color: whitesmokes;
:hover{
    background-color: #add8e640;
}
/* :focus{
    box-shadow: 10px 5px 5px lightblue;
} */
`