import { StyleServiceCard, StyleServices } from "./Services.style";

export const Services = () => {
  return <StyleServices>
    <h2 className="text">ЧЕМ МЫ ЗАНИМАЕМСЯ?</h2>
    <div className="cards">
      <StyleServiceCard>
        <img src="./ServiceBuilding.svg" />
        <h4>СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</h4>
      </StyleServiceCard>
      <StyleServiceCard>
        <img src="./ServiceBuilding.svg" />
        <h4>СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</h4>
      </StyleServiceCard>
      <StyleServiceCard>
        <img src="./ServiceBuilding.svg" />
        <h4>СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</h4>
      </StyleServiceCard>
      <StyleServiceCard>
        <img src="./ServiceBuilding.svg" />
        <h4>СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</h4>
      </StyleServiceCard>
      <StyleServiceCard>
        <img src="./ServiceBuilding.svg" />
        <h4>СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</h4>
      </StyleServiceCard>
      <StyleServiceCard>
        <img src="./ServiceBuilding.svg" />
        <h4>СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</h4>
      </StyleServiceCard>
    </div>
  </StyleServices>;
};
