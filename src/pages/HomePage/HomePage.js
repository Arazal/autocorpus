import React from "react";
import { withRouter } from "react-router-dom";
import "./HomePage.scss";
import Button from "../../components/CustomButton/CustomButton";

export default function HomePage(props) {
  return (
    <div className="Layout">
      <div className="Content">
        <div className="col cell1">
          <Button onClick={() => props.history.push("/rustoff")}>
            Удаление вмятин
          </Button>
        </div>
        <div className="col cell2">
          {" "}
          <Button onClick={() => props.history.push("/mechpol")}>
            Механическая полировка
          </Button>
        </div>
        <div className="col cell3">
          {" "}
          <Button onClick={() => props.history.push("/painting")}>
            Локальная покраска
          </Button>
        </div>
        <div className="col cell4">
          {" "}
          <Button onClick={() => props.history.push("/polishprotect")}>
            Защитная полировка
          </Button>
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
