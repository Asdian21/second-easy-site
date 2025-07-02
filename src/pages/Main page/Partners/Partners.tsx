import { StylePartners } from "./Partners.style";

export const Partners = () => {
  const logos = [
    "./BerkshoImg.png",
    "./BerkshoImg.png",
    "./BerkshoImg.png",
    "./BerkshoImg.png",
    "./BerkshoImg.png",
  ];

  return (
    <StylePartners>
      <div className="container">
        <h2>наши партнеры</h2>
        <div className="slider">
          <div className="subContainer">
            {[...logos, ...logos].map((src, i) => (
              <img key={i} src={src} alt={`partner-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </StylePartners>
  );
};
