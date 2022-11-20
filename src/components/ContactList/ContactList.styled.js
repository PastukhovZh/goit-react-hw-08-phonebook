import styled from "styled-components";

export const FriendList = styled.ul`

display: flex;
/* width: 300px; */
flex-direction: row;
flex-wrap: wrap;
gap:10px;
`
export const FriendItem = styled.li`
overflow:hidden;
/* display: flex; */
text-align: center;
width: 125px;
height: 150px;
align-items: center;
justify-content: space-between;
outline: 1px solid black;
border-radius: 4px;
padding: 0 10px;
`

export const Button = styled.button`
/* width: 50px; */
/* height: 30px; */
/* border: 1px solid black; */
padding: 5px;
border-radius: 4px;
background-color: transparent;
border-color: whitesmokes;

:hover{
    background-color: #add8e640;
}
`
export const Wrap = styled.div`
/* display: flex; */
/* flex-direction: row; */

`
export const Item = styled.p`
/* margin-right:10px */
font-size:small;
`