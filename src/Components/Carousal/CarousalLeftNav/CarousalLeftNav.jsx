import React, { useEffect, useState } from "react"; import { useSwiper, useSwiperSlide } from "swiper/react";

import styles from "./CarousalLeftNav.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/medical/i.icon-ic_next_cheveron.svg";
export default function CarousalLeftNav() {
    const swiper = useSwiper();
    const [isStarting, setIsStarting] = useState(swiper.isBeginning)
    useEffect(() => {
        swiper.on("slideChange", function () {
            setIsStarting(swiper.isBeginning)
        })
    }, [swiper])
    return <div className={styles.leftArrow}>{!isStarting && <LeftArrow onClick={() => {swiper.slidePrev();console.log(isStarting+"left")}}></LeftArrow>}</div>
}