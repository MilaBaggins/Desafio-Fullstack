import styled from "styled-components";
export const StyledHome = styled.main`
  background-image: url("https://w0.peakpx.com/wallpaper/656/711/HD-wallpaper-orbit-929-abstract-android-black-dark-grey-minimal-minimalist-simple.jpg");
  background-repeat: repeat;

  background-origin: content-box;
  background-attachment: fixed;
  background-position-x: center;
  max-width: 86rem;
  height: 400vh;
  margin: 0 auto;
  margin-top: 80px;
  display: flex;
  align-items: start;
  justify-content: center;

  .cards {
    margin-top: 0px;
    display: flex;
    justify-content: flex-start; /* 
    background-color: red; */
    width: 90%;
    padding: 20px;
  }
  > div {
    width: 80vw;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2.878rem;
    margin-top: 40px;
    p {
      font-size: 20px;
      color: black;
    }
  }

  @media only screen and (max-width: 37.5rem) {
    margin: 0;
    margin-top: 150px;
  }
`;
