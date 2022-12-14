import React from "react";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import s from "./ThisDay.module.scss";

type Props = {};

const ThisDay = (props: Props) => {
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.tob_block_wrapper}>
          <div className={s.this_temp}>20°</div>
          <div className={s.this_day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom_block}>
        <div className={s.this_time}>
          Время <span>19:27</span>
        </div>
        <div className={s.this_city}>
          Город <span>Ростов-на-Дону</span>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
