import { useEffect, useRef } from "react";
import { StyleReviews, ReviewCard } from "./Reviews.style";

export const Reviews = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardsRef.current.forEach((el, i) => {
            if (el) {
              el.classList.add("review-show", `review-delay-${i}`);
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    if (cardsRef.current[0]) {
      observer.observe(cardsRef.current[0]);

      return () => observer.disconnect();
    }
  }, []);

  const reviews = [1, 2, 3]; // или можно из API

  return (
    <StyleReviews>
      <h2>отзывы о работе с нами</h2>
      <div className="cards">
        {reviews.map((_, i) => (
          <ReviewCard
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="review-animation"
          >
            <div className="textBox">
              <img src="./brackets.svg" />
              <p>
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века.
              </p>
            </div>
            <h4>
              Иванов Иван, <span>ООО "Газпром-Арена"</span>
            </h4>
          </ReviewCard>
        ))}
      </div>
    </StyleReviews>
  );
};
