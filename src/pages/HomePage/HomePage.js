import React from "react";

import "./HomePage.scss";
import Button from "../../components/CustomButton/CustomButton";

export default function HomePage() {
  return (
    <div className="Layout">
      <div className="Content">
        <div className="col cell1">
          <Button>Удаление вмятин</Button>
        </div>
        <div className="col cell2">
          {" "}
          <Button>Механическая полировка</Button>
        </div>
        <div className="col cell3">
          {" "}
          <Button>Локальная покраска</Button>
        </div>
        <div className="col cell4">
          {" "}
          <Button>Защитная полировка</Button>
        </div>
        {/* <div className="col cell4">
      <Button>Удаление царапин</Button>
    </div>
    <div className="col cell4">
      <Button>Полировка фар</Button>
    </div> */}
      </div>
    </div>
  );
}
