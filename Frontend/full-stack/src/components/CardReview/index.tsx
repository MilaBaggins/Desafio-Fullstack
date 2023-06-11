import conect from "../../images/conect.png";
import organize from "../../images/organize.png";
import networking from "../../images/networking.png";
import time from "../../images/time.png";
import { CardReviewStyled } from "./style";

export const CardReview = () => {
  return (
    <CardReviewStyled>
      <img src={conect} alt="" />
    </CardReviewStyled>
  );
};

export const CardReviewOrganize = () => {
  return (
    <CardReviewStyled>
      <img src={organize} alt="" />
    </CardReviewStyled>
  );
};

export const CardReviewNetworking = () => {
  return (
    <CardReviewStyled>
      <img src={networking} alt="" />
    </CardReviewStyled>
  );
};

export const CardReviewTime = () => {
  return (
    <CardReviewStyled>
      <img src={time} alt="" />
    </CardReviewStyled>
  );
};
