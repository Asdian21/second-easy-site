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
      <Numbers />
      <SectionTwo />
      <Request />
      <Services />
      <Portfolio />
      <Question />
      <Partners />
      <Reviews />
      <Request />
      <Contacts />
      <Footer />
    </StyleMainPage>
  );
};
