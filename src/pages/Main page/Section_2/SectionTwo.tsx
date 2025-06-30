import { ProjectCard, StyleSectionTwo } from "./SectionTwo.style";

export const SectionTwo = () => {
  return (
    <StyleSectionTwo>
      <h2 className="heading">наши самые большие проекты</h2>
      <div className="cards">
        <ProjectCard>
          <img src="./stadium.jpg" />
          <div className="line"></div>
          <h3 className="mainText">Газпром Арена</h3>
          <p className="secondaryText">
            Мы сделали самую красивую арену в Европе. Это открытие стало для нас
            прорывной точкой для разивтия на следующие десятилетия. Мы очень
            рады данному еву.
          </p>
        </ProjectCard>
        <ProjectCard>
          <img src="./stadium.jpg" />
          <div className="line"></div>
          <h3 className="mainText">Газпром Арена</h3>
          <p className="secondaryText">
            Мы сделали самую красивую арену в Европе. Это открытие стало для нас
            прорывной точкой для разивтия на следующие десятилетия. Мы очень
            рады данному еву.
          </p>
        </ProjectCard>
        <ProjectCard>
          <img src="./stadium.jpg" />
          <div className="line"></div>
          <h3 className="mainText">Газпром Арена</h3>
          <p className="secondaryText">
            Мы сделали самую красивую арену в Европе. Это открытие стало для нас
            прорывной точкой для разивтия на следующие десятилетия. Мы очень
            рады данному еву.
          </p>
        </ProjectCard>
      </div>
    </StyleSectionTwo>
  );
};
