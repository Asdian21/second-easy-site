import { useEffect, useRef } from "react";
import { StyleServiceCard, StyleServices } from "./Services.style";

export const Services = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardsRef.current.forEach((el, i) => {
            if (el) {
              el.classList.add("fade-show", `fade-delay-${i}`);
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    if (cardsRef.current[0]) {
      observer.observe(cardsRef.current[0]);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <StyleServices>
      <h2 className="text">ЧЕМ МЫ ЗАНИМАЕМСЯ?</h2>
      <div className="cards">
        {[...Array(6)].map((_, i) => (
          <StyleServiceCard
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="fade-animation"
          >
            <img src="./ServiceBuilding.svg" />
            <h4>СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ</h4>
          </StyleServiceCard>
        ))}
      </div>
    </StyleServices>
  );
};
