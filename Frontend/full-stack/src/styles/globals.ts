import { createGlobalStyle } from "styled-components";

export const StyledGlobals = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
      }

  :root {
    --border-radius-1: .5rem;
    --border-radius-2: .3125rem;
  }

  .input-focus {
    border-color: var(--color-gray-100);
  }

  .resize-img {
    transform: scale(1.5) translateY(-1.25rem);
  }

  li:hover .resize-img{
    animation: anim-resize-img 1s linear infinite forwards;
  } 

  li:hover .adjust-img{
    animation: anim-adjust-img 1s linear infinite forwards;
  } 

  .resize-img-cart {
    transform: scale(1.5) translateY(-0.625rem);
  }

  .adjust-img {
    transform: translateY(-0.625rem);
    hover{
      animation: anim-adjust-image 1s linear infinite forwards;
    }
  }
  
  .adjust-img-cart {
    transform: translateY(-0.3125rem);
  }

  body {
    color: var(--color-gray-100);
    background-color: red;
  }

  main {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    position: relative;
    gap: 60px;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    max-width: 82rem;
    margin: 0 auto;
  }
  
  fieldset > input.input-error{
    border-color: var(--color-negative);
    :focus{
      border-color: var(--color-negative);

    }
  }

 

  .divPasso{
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imgPasso{
    /* margin: 0 auto;
    display: block; */
    padding-top: 4rem;
    width: 100%;
    margin-top: 2rem;
  }

  .imgBanneLP{
    margin: 0 auto;
    display: block;
    padding-top: 4rem;
    width: 100%;
  }

  .buttonCenter{
    margin: 0 auto;
    /* display: block; */
    margin-top: 2rem;
    display: flex;
  }

  .cardReviewListContainer{
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .cardReviewContainer{
    margin-bottom: 100px;
    width: 100%;
    background: linear-gradient(180deg, #8c8c8c 0%, #ffcd07 100%);
    height: 40rem;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;                                                                                                                                                                                                                                                                                                                                                                      
  }
  
  @keyframes anim-adjust-img {
    0% {
      transform: scale(1) translateY(-0.625rem);
     
    }
    50% {
      transform: scale(1.2) translateY(-0.625rem);
    }
    100% {
      transform: scale(1) translateY(-0.625rem);
    }
    
  }
  @keyframes anim-resize-img {
    0% {
      transform: scale(1.5) translateY(-1.25rem);
      
    }
    50% {
      transform: scale(1.8) translateY(-1.25rem);
    }
    100% {
      transform: scale(1.5) translateY(-1.25rem);
    }
  }
    
  @media only screen and (max-width: 37.5rem) {
    main{
      width: 100%;
      padding: 1rem;
      flex-direction: column;
      text-align: center;
    }
  }

  /* swiper */

 

.swiper-container{
  width: fit-content;
}


.swiper-button-prev::after,.swiper-button-next::after{
  color: white;
}





::-webkit-scrollbar-track { background-color: var(--color-gray-20) }
::-webkit-scrollbar { width: .4375rem; height: .4375rem;}
::-webkit-scrollbar-thumb { background: var(--color-primary-50); border-radius: var(--border-radius-1)}
`;
