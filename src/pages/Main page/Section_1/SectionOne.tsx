import { BurgerMenu } from "../../../components/BurgerMenu/BurgerMenu";
import { StyleSectionOne } from "./SectionOne.style";

export const SectionOne = () => {
  return (
    <StyleSectionOne>
      <img src="./first_screen_bg.jpg" className="bg" />
      <main>
        <div className="icon_burger">
          <img src="./Section1_logo.png" className="icon" />
          <BurgerMenu />
        </div>
        <div className="mainText">реализуем крупнейшие проекты в россии</div>
        <div className="secondaryText">стадионы, газопроводы, мосты, дамбы</div>
      </main>
    </StyleSectionOne>
  );
};
