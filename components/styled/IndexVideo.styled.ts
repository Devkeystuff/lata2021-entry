import styled from "styled-components";
import IndexVideo from "../IndexVideo.tsx";

export const StyledVideo = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 50px auto;
  width: 80vw;
  font-family: Raleway;
  height: 400px;

  & div {
    width: 50%;
    height: 385px;

    div{
      color: white;
      position: relative;
      float: right;
      width: 60%;
      h2{
        float:right;
        margin: 0 0 10px 0;
        font-size: 45px;
        font-weight: 900;
        text-shadow: -1px -1px 0 #AAD725, 1px -1px 0 #AAD725, -1px 1px 0 #AAD725, 1px 1px 0 #AAD725;
        color: black;

        ::before{
          width: 500px;
          content: "HOW IT'S DONE";
          position:absolute;
          margin: -3px;
          color: white;
          text-shadow: none;
        }
      }
      p {
        font-family: Source Code Pro;
        width: 100%;
        float: right;
        text-align: right;
      }
    }

    iframe{
      width: 75%;
      height: 100%;
      margin: 0 3vw;
    }
  }
`
