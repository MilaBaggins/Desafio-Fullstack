import { useContext, useState } from "react";
import {
  CardReview,
  CardReviewOrganize,
  CardReviewNetworking,
  CardReviewTime,
} from "../../components/CardReview";
import { Loader } from "../../components/Loader";
import { Footer } from "../../components/footer";
import { Hero } from "../../components/hero";
import banner from "../../images/banner.png";
import { StyledLink } from "../../styles/link";
import { UserContext } from "../../providers/UserContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { StyledLandPage } from "./style";

export const LandingPage = () => {
  const [loadUser, setLoadUser] = useState(true);

  return loadUser ? (
    <>
      <StyledLandPage>
        <Hero />
        <div className="container">
          <img className="imgBanneLP" src={banner} alt="bannerKenzieShoes" />
          <div className="cardReviewContainer">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={true}
              spaceBetween={32}
              slidesPerView={3}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <CardReview />
              </SwiperSlide>
              <SwiperSlide>
                <CardReviewOrganize />
              </SwiperSlide>
              <SwiperSlide>
                <CardReviewTime />
              </SwiperSlide>
              <SwiperSlide>
                <CardReviewNetworking />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </StyledLandPage>
      <StyledLink className="buttonCenter" to={"./dashboard"} typetext="button">
        Quero me tornar parceiro KenzieShoes
      </StyledLink>
      <Footer />
    </>
  ) : (
    <>
      <Loader />
    </>
  );
};
