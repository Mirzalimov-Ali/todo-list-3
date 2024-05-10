import styled from "styled-components";

export const Container = styled.div`
    height: 500px;
    width: 500px;
    background: white;
    padding: 30px 20px;
    border-radius: 20px;
    input {
        width: 80%;
        height: 40px;
        border: 2px solid blue;
        border-radius: 4px;
        padding: 0 20px;
    }
    button {
        width: 20%;
        background: blue;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
`

export const MapDiv = styled.div`
    min-width: 100%;
    min-height: 50px;
    background: lightblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    border-radius: 6px;
    border: 1px solid gray;
`