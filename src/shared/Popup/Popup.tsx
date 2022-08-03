import React from "react";
import GlobalSvgSelector from "../../assets/images/icons/global/GlobalSvgSelector";
import { Item } from "../../pages/Home/Components/ThisDayInfo/ThisDayInfo";
import ThisDayItem from "../../pages/Home/Components/ThisDayInfo/ThisDayItem";
import s from "./Popup.module.scss";

type Props = {};

const Popup = (props: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];

  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day_temp}>20°</div>
          <div className={s.day_name}>Среда</div>
          <div className={s.day_img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={s.day_time}>
            Время: <span>2:04</span>
          </div>
          <div className={s.day_city}>
            Город: <span>Ростов-на-Дону</span>
          </div>
        </div>
        <div className={s.this_day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};

export default Popup;
