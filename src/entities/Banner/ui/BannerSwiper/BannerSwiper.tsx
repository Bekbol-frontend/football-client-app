import { memo, useMemo, useState } from "react";
import type { INews } from "../../model/types";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";
import Typography from "@mui/material/Typography";

import styles from "./BannerSwiper.module.scss";
import "swiper/swiper.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

interface IProps {
  data: INews[];
}

function BannerSwiper({ data }: IProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const { isDesktop } = useResponsive();

  const SwiperItem = useMemo(
    () =>
      data.map((el) => (
        <SwiperSlide
          key={el.id}
          className={styles.swiperItem}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, .7), rgba(0, 0, 0, .1)), url(${el.images[0]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <div className={styles.imgBlock}>
            <img src={el.images[0]} alt={el.title} />
          </div> */}
          <div className={styles.infoBlock}>
            <Typography
              variant={isDesktop ? "h3" : "h5"}
              gutterBottom={isDesktop}
              className={styles.title}
            >
              {el.title}
            </Typography>
            <Typography
              variant={isDesktop ? "h5" : "body1"}
              className={styles.subTitle}
            >
              {el.title}
            </Typography>
          </div>
        </SwiperSlide>
      )),
    [data]
  );

  return (
    <div className={styles.swiperWrapper}>
      <Swiper
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.bannerSwiper}
        style={{
          height: isDesktop ? "350px" : "150px",
        }}
      >
        {SwiperItem}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.thumbSwiper}
        style={{
          height: isDesktop ? "100px" : "50px",
        }}
      >
        {SwiperItem}
      </Swiper>
    </div>
  );
}

export default memo(BannerSwiper);
