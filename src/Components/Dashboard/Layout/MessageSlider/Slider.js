import { Link } from "react-router-dom";
// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import Ellipse from "../../../../images/Ellipse-196.png";
import "./Slider.scss";

const fakeData = [
  {
    img: Ellipse,
    name: "Benjamin Grivaux",
  },
  {
    img: Ellipse,
    name: "Benjamin Grivaux",
  },
  {
    img: Ellipse,
    name: "Benjamin Grivaux",
  },
  {
    img: Ellipse,
    name: "Benjamin Grivaux",
  },
  {
    img: Ellipse,
    name: "Benjamin Grivaux",
  },
  {
    img: Ellipse,
    name: "Benjamin Grivaux",
  },
  {
    img: Ellipse,
    name: "Benjamin Grivaux",
  },
  {
    img: Ellipse,
    name: "Benjamin Grivaux",
  },
  {
    img: Ellipse,
    name: "Benjamin Grivaux",
  },
  {
    img: Ellipse,
    name: "Benjamin Grivaux",
  },
  {
    img: Ellipse,
    name: "Benjamin Grivaux",
  },
  {
    img: Ellipse,
    name: "Benjamin Grivaux",
  },
];

export default function Slider() {
  return (
    <div className="slider">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },

          1200: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1400: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
      >
        {fakeData.map((item, index) => (
          <SwiperSlide>
            <div className="profile">
              <Link to="/messagerie">
                <div className="profile-pic">
                  <img src={Ellipse} loading="lazy" width="50" alt="" />
                </div>
                <div className="text-block-2">Benjamin Grivaux</div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
