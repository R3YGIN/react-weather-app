import React from "react";
import GlobalSvgSelector from "../../assets/images/icons/global/GlobalSvgSelector";
import Select from "react-select";
import s from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  const options = [
    { value: "city-1", label: "Ростов-на-Дону" },
    { value: "city-2", label: "Краснодар" },
    { value: "city-3", label: "Новгород" },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSvgSelector id="change_theme" />
        </div>
        <Select
          defaultValue={options[0]}
          options={options}
          styles={colourStyles}
        />
      </div>
    </header>
  );
};

export default Header;
