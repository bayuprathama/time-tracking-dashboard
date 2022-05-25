import { useEffect, useState } from 'react';
import './App.css';
import Container from './components/Container';
import Card from './components/Card';
import CardNav from './components/CardNav';
import * as data from './data.json';
import { motion } from 'framer-motion';

function App() {
  const cardData = data;
  const categoryInitialValue =
    JSON.parse(window.localStorage.getItem('category:timeframes')) ?? 'daily';
  const [timeFramesCategory, setTimeFramesCategory] = useState(
    () => categoryInitialValue
  );

  useEffect(() => {
    window.localStorage.setItem(
      'category:timeframes',
      JSON.stringify(timeFramesCategory)
    );
  }, [timeFramesCategory]);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };
  return (
    <Container>
      {Object.keys(cardData).length !== 0 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid-container"
        >
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
        </motion.div>
      )}
    </Container>
  );
}

export default App;
