import styled from "styled-components";

export const Container = styled.div`

    margin-top: 100px;

    border: 2px solid white;
    border-radius: 10px;

    width: 950px;

    ul{
        list-style-type: none;
        float: left;

        margin-right: 40px;
        margin-top: 8px;
    }

    li {
        padding-top: 20px;
    }
`

export const BetContainer = styled.div`

    border: 2px solid white;
    border-radius: 5px;

    opacity: 0.5;

    background-color: grey;

    text-align: center;

    margin-top: 10px;

    li {
        margin-top: -10px;
        padding-bottom: 10px;
    }

    &:hover {
        color: white;
        opacity: 1;
        cursor: pointer;
    }

    :focus & {
        color: white;
        opacity: 1;
        cursor: pointer;
    }

`

export const BetButton = styled.div`

    border: 2px solid white;
    border-radius: 5px;

    opacity: 0.5;

    height: 20px;
    width: 180px;

   display: inline-block;
    background-color: green;

    text-align: center;

    margin-right: 20px;
    margin-bottom: 30px;

    padding-top: 10px;
    padding-bottom: 14px;

    &:hover {
        color: white;
        opacity: 1;
        cursor: pointer;
    }

`
export const HeaderContainer = styled.div`

    background-color: black;
    color: white;

    height: 55px;
    width: 100%;

    border-bottom: 1px solid white;
    border-top: 1px solid black;

    margin-top: ${props => props.top};

    h2 {
        text-align:left;
        font-size: 24px;
    }

    ul{
        list-style-type: none;
        margin-left: 710px;
        margin-top: -40px;
    }

    li {
        float: left;
        padding-left: 42px;
        font-size: 16px;
    }

    li:hover{
        color: red;
        cursor: pointer;
    }

`