import { memo, useMemo } from "react";
import type { ILeague } from "../../model/types";
import styles from "./LeaguesSwiper.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { baseURL } from "@/shared/api";

interface IProps {
  data: ILeague[];
}

function LeaguesSwiper({ data }: IProps) {
  const SwiperItem = useMemo(
    () =>
      data.map((el) => (
        <SwiperSlide key={el.id} className={styles.partnersSwiperSlide}>
          <img src={`${baseURL}${el.logo}`} alt={el.title} loading="lazy" />
        </SwiperSlide>
      )),
    [data]
  );

  return (
    <Swiper
      spaceBetween={7}
      modules={[Autoplay, FreeMode]}
      loop
      freeMode={true}
      speed={4000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 12,
        },
      }}
    >
      {SwiperItem}
    </Swiper>
  );
}

export default memo(LeaguesSwiper);
