import styled from "styled-components";

export const StyledHero = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  .logo {
    width: 400px;
    position: absolute;
    top: 50px;
    left: 150px;
  }

  .heroCabecalho {
    display: flex;
    align-items: center;
    width: 80%;
    height: 40px;
    justify-content: flex-end;
    gap: 60px;

    img {
      width: 129px;
      height: 86px;
      top: 23px;
    }
    div {
      display: flex;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 2rem;
    }
  }
  .heroBanner {
    /* 
      background-color: red; */
    padding: 2rem 2rem 2rem 0rem;
    display: flex;
    align-items: center;
    height: 650px;
    border-radius: 24px;
    width: 80%;
    height: 480px;
    position: absolute;
    left: 10%;
    top: 150px;
    img {
      width: 600px;
      position: sticky;
      left: 800px;
      box-shadow: 0px 6px 30px 40px rgba(3, 3, 3, 0.849);
      border-radius: 300px;
      padding: 30px;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
      justify-content: center;
    }
  }
  .slogan-div {
    /* 
    background-color: red; */
    height: 400px;
  }
  .slogan {
    width: 87%;
    height: 60px;
    background-color: var(--color-primary);
    box-shadow: 0px 6px 70px -5px rgba(3, 3, 3, 0.849);
    margin-left: 0px;
    padding: 15px;
    display: flex;
    justify-content: flex-start;
    border-radius: 1px;
  }
  .slogan2 {
    width: 100%;
    height: 60px;
    background-color: var(--color-primary);
    box-shadow: 0px 6px 70px -5px rgba(3, 3, 3, 0.849);
    margin-left: 0px;
    padding: 15px;
    text-align: left;
    border-radius: 1px;
  }
  .slogan-text {
    font-size: 25px;
  }
  .slogan_color {
    color: white;
    font-size: 32px;
  }
  .buttons-slogan {
    /* 
    background-color: blue; */
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
  .description {
    color: lightgray;
    font-size: 1.2rem;
    font-weight: lighter;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-stretch: ultra-expanded;
  }
`;
