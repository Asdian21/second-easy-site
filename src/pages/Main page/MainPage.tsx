import { AnimatedBlock } from "../../components/BurgerMenu/AnimatedBlock";
import { Contacts } from "./Contacts/Contacts";
import { Footer } from "./Footer/Footer";
import { StyleMainPage } from "./MainPage.style";
import { Numbers } from "./Numbers/Numbers";
import { Partners } from "./Partners/Partners";
import { Portfolio } from "./Portfolio/Portfolio";
import { Question } from "./Question/Question";
import { Request } from "./Request/Request";
import { Reviews } from "./Reviews/Reviews";
import { SectionOne } from "./Section_1/SectionOne";
import { SectionTwo } from "./Section_2/SectionTwo";
import { Services } from "./Services/Services";

export const MainPage = () => {
  return (
    <StyleMainPage>
      <SectionOne />
      <AnimatedBlock><Numbers /></AnimatedBlock>
      <AnimatedBlock><SectionTwo /></AnimatedBlock>
      <AnimatedBlock><Request /></AnimatedBlock>
      <AnimatedBlock><Services /></AnimatedBlock>
      <AnimatedBlock><Portfolio /></AnimatedBlock>
      <AnimatedBlock><Question /></AnimatedBlock>
      <AnimatedBlock><Partners /></AnimatedBlock>
      <AnimatedBlock><Reviews /></AnimatedBlock>
      <AnimatedBlock><Request /></AnimatedBlock>
      <AnimatedBlock><Contacts /></AnimatedBlock>
      <Footer />
    </StyleMainPage>
  );
};
