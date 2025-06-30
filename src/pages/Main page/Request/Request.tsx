import { StyleRequest } from "./Request.style";

interface RequestProps {}

export const Request = ({}: RequestProps) => {
  return <StyleRequest>
    <div className="wrapper">
      <div className="text">
      <div className="primaryText">САМЫЕ УМНЫЕ ПРОЕКТЫ</div>
      <div className="secondaryText">РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!</div> 
    </div>
    <div className="requestButton">
      <img className="requestImg" src="./requestButtonLetterImg.svg"></img>
      <span className="buttonText">ВАШ ЗАПРОС</span>
    </div>
    </div>
  </StyleRequest>;
};
