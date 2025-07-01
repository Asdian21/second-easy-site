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
  }
]

export const Contacts = () => {
  return <StyleContacts>
    <h2>контакты</h2>
    
      <StyleSocial>
        {socials.map((item) => {
          return (
            <div className="socials">
              <img src={item.img} style={{height: `${item.height}`}}/>
              <h3 className="subjectName">{item.subjectName}</h3>
              <h3 className="subjectInfo" style={{color: `${item.color}`}}>{item.subjectInfo}</h3>
              <h3 className="subjectInfo2">{item.subjectInfo2}</h3>
            </div>
          )
        })}
      </StyleSocial>
  </StyleContacts>;
};
