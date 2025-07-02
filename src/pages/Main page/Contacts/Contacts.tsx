import { useEffect, useRef } from "react";
import { StyleContacts, StyleSocial } from "./Contacts.style";

export interface Props {
  img: string;
  subjectName: string;
  subjectInfo: string;
  subjectInfo2?: string;
  height: string;
  color?: string;
}

const socials = [
  {
    img: "./mapsMark.svg",
    subjectName: "АДРЕС:",
    subjectInfo: "НЕВСКИЙ ПРОСПЕКТ 140, ОФИС 140-142",
    height: 50,
  },
  {
    img: "./telephoneMark.svg",
    subjectName: "ТЕЛЕФОН:",
    subjectInfo: "8 (812) 111-22-33",
    subjectInfo2: "8 (812) 111-22-33",
    height: 50,
  },
  {
    img: "./clockMark.svg",
    subjectName: "ВРЕМЯ РАБОТЫ:",
    subjectInfo: "ПН-СБ",
    subjectInfo2: "10:00 - 20:00",
    height: 50,
  },
  {
    img: "./mailMark.svg",
    subjectName: "E-MAIL:",
    subjectInfo: "INFO@VIP.RU",
    height: 40,
    color: "#F7654A",
  },
];

export const Contacts = () => {
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          itemsRef.current.forEach((el, i) => {
            if (el) {
              el.classList.add("contact-show", `contact-delay-${i}`);
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    if (itemsRef.current[0]) {
      observer.observe(itemsRef.current[0]);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <StyleContacts>
      <h2>контакты</h2>
      <StyleSocial>
        {socials.map((item, i) => (
          <div
            key={i}
            className="socials contact-animation"
            ref={(el) => {
              if (el) itemsRef.current[i] = el;
            }}
          >
            <img src={item.img} style={{ height: `${item.height}px` }} />
            <h3 className="subjectName">{item.subjectName}</h3>
            <h3
              className="subjectInfo"
              style={{ color: item.color ?? "inherit" }}
            >
              {item.subjectInfo}
            </h3>
            {item.subjectInfo2 && (
              <h3 className="subjectInfo2">{item.subjectInfo2}</h3>
            )}
          </div>
        ))}
      </StyleSocial>
    </StyleContacts>
  );
};
