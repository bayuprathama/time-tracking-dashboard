import { useEffect, useState } from 'react';
import './App.css';
import Container from './components/Container';
import Card from './components/Card';
import CardNav from './components/CardNav';

function App() {
  const [cardData, setCardData] = useState({});
  const [timeFramesCategory, setTimeFramesCategory] = useState('weekly');

  async function fetchCardData(url) {
    const res = await fetch(url);
    const data = await res.json();
    setCardData(data);
  }
  useEffect(() => {
    fetchCardData('/src/data.json');
  }, []);

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
