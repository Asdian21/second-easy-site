import { useState } from "react";
import {
  Description,
  StyleQuestion,
  Wrapper,
  Toggle,
  Arrow,
  DescriptionWrapper
} from "./Question.style";

const questions = [
  {
    title: "РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?",
    text: "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.",
  },
  {
    title: "КАКИЕ УСЛУГИ ВЫ ПРЕДОСТАВЛЯЕТЕ?",
    text: "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.",
  },
  {
    title: "КАК С ВАМИ СВЯЗАТЬСЯ?",
    text: "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.",
  },
  {
    title: "В КАКИХ РЕГИОНАХ ВЫ РАБОТАЕТЕ?",
    text: "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.",
  },
];

export const Question = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <StyleQuestion>
      <h2>ОТВЕТЫ НА ВОПРОСЫ</h2>
      <div className="mainWrapper">
        {questions.map((item, index) => {
  const isOpen = openIndex === index;
  return (
    <Wrapper key={index}>
      <Toggle onClick={() => handleToggle(index)}>
        <Arrow isOpen={isOpen}>
          <img src="./ArrowRight.svg" alt="arrow" />
        </Arrow>
        <h3>{item.title}</h3>
      </Toggle>
      <DescriptionWrapper isOpen={isOpen}>
        <Description>{item.text}</Description>
      </DescriptionWrapper>
    </Wrapper>
  );
})}
      </div>
    </StyleQuestion>
  );
};
