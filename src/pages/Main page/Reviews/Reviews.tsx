import { StyleReviews, ReviewCard } from "./Reviews.style";

export const Reviews = () => {
  return <StyleReviews>
    <h2>отзывы о работе с нами</h2>
    <div className="cards">
      <ReviewCard>
      <div className="textBox">
        <img src="./brackets.svg" />
        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.</p>
      </div>
      <h4>Иванов Иван, <span>ООО "Газпром-Арена"</span></h4>
    </ReviewCard>
    <ReviewCard>
      <div className="textBox">
        <img src="./brackets.svg" />
        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.</p>
      </div>
      <h4>Иванов Иван, <span>ООО "Газпром-Арена"</span></h4>
    </ReviewCard>
    <ReviewCard>
      <div className="textBox">
        <img src="./brackets.svg" />
        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.</p>
      </div>
      <h4>Иванов Иван, <span>ООО "Газпром-Арена"</span></h4>
    </ReviewCard>
    </div>
  </StyleReviews>;
};
