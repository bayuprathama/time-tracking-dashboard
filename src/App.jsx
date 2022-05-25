import { useEffect, useState } from 'react';
import './App.css';
import Container from './components/Container';
import Card from './components/Card';
import CardNav from './components/CardNav';
import * as data from './data.json';

function App() {
  const [cardData, setCardData] = useState(data);
  const [timeFramesCategory, setTimeFramesCategory] = useState('weekly');

  return (
    <Container>
      {Object.keys(cardData).length !== 0 && (
        <div className="grid-container">
          <CardNav
            className="row-span-2"
            handleCategoryClick={setTimeFramesCategory}
            stateOfTimeFramesCategory={timeFramesCategory}
          />
          <Card
            cardData={cardData}
            variant="work"
            category={timeFramesCategory}
          />
          <Card
            cardData={cardData}
            variant="play"
            category={timeFramesCategory}
          />
          <Card
            cardData={cardData}
            variant="study"
            category={timeFramesCategory}
          />
          <Card
            cardData={cardData}
            variant="exercise"
            category={timeFramesCategory}
          />
          <Card
            cardData={cardData}
            variant="social"
            category={timeFramesCategory}
          />
          <Card
            cardData={cardData}
            variant="selfCare"
            category={timeFramesCategory}
          />
        </div>
      )}
    </Container>
  );
}

export default App;
