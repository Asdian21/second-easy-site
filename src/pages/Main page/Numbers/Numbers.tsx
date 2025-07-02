import { useEffect, useRef } from "react";
import { NumbersItem, StyleNumbers } from "./Numbers.style";

export const Numbers = () => {
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            itemsRef.current.forEach((el, index) => {
              if (el) {
                el.classList.add("element-show", `element-show-delay-${index}`);
              }
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    if (itemsRef.current[0]) observer.observe(itemsRef.current[0]);

    return () => observer.disconnect();
  }, []);

  return (
    <StyleNumbers>
      {[...Array(4)].map((_, i) => (
        <NumbersItem
          key={i}
          ref={(el: HTMLDivElement | null): void => {
  if (el) itemsRef.current[i] = el;
}}
          className="element-animation"
        >
          <div className="number">26</div>
          <div className="mainText">лет</div>
          <div className="secondaryText">на рынке</div>
        </NumbersItem>
      ))}
    </StyleNumbers>
  );
};
