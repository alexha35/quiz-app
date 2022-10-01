import { useState } from 'react';
import { NextPage } from 'next';

import styles from './room.module.css';
import { Header } from '@quiz-app/ui-components';

const mockData = {
  question: {
    text: 'What is the model name of this car?',
  },
  image: {
    src: 'https://images.unsplash.com/photo-1611396058741-1d570a4fcf95',
    alt: 'A Car',
  },
  choices: [
    {
      answer: 'Lancer',
      correct: false,
    },
    {
      answer: 'Lancer EVO',
      correct: true,
    },
    {
      answer: 'Outlander',
      correct: false,
    },
    {
      answer: 'MR2',
      correct: false,
    },
  ],
};

const Room: NextPage = () => {
  const [selected, setSelected] = useState<String>('');

  return (
    <>
      <Header />
      <div className={styles.container}>
        <img
          src={mockData.image.src}
          alt={mockData.image.alt}
          className={styles.background_img}
        />
        <h1 className={styles.question}>{mockData.question.text}</h1>
        <div className={styles.image_container}>
          <img src={mockData.image.src} alt={mockData.image.alt} />
        </div>
        <div className={styles.form}>
          {mockData.choices.map((entry, i) => (
            <div
              key={`${i}_${entry.answer}`}
              className={`${styles.input_container} ${styles.label} ${
                selected.toLowerCase() === entry.answer.toLowerCase()
                  ? styles.selected
                  : ''
              }`}
              onClick={() => setSelected(entry.answer)}
            >
              {entry.answer}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Room;
