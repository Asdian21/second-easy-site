import { useEffect, useRef } from "react";
import { ProjectCard, StyleSectionTwo } from "./SectionTwo.style";

export const SectionTwo = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardsRef.current.forEach((el, i) => {
            if (el) {
              el.classList.add("card-show", `card-delay-${i}`);
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    // наблюдаем за первым элементом
    if (cardsRef.current[0]) {
      observer.observe(cardsRef.current[0]);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <StyleSectionTwo>
      <h2 className="heading">наши самые большие проекты</h2>
      <div className="cards">
        {[0, 1, 2].map((_, i) => (
          <ProjectCard
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="card-animation"
          >
            <img src="./stadium.jpg" />
            <div className="line"></div>
            <h3 className="mainText">Газпром Арена</h3>
            <p className="secondaryText">
              Мы сделали самую красивую арену в Европе. Это открытие стало для нас
              прорывной точкой для развития на следующие десятилетия. Мы очень
              рады данному еву.
            </p>
          </ProjectCard>
        ))}
      </div>
    </StyleSectionTwo>
  );
};
