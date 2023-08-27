import React, { useState } from 'react';
import { FeedBackForm } from './FeedBack/FeedBack';
import { FeedBackStats } from './StatiscticFeedBacks/StatiscticFeedBacks';

const styleCntr = {
  backgroundColor: '#e5e5e5',
};

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedBackValue = type => {
    if (type === 'good') {
      setGood(prevGood => prevGood + 1);
    }
    if (type === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    }
    if (type === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  return (
    <div style={styleCntr}>
      <FeedBackForm leaveFeedBack={feedBackValue} />
      <FeedBackStats good={good} neutral={neutral} bad={bad} />
    </div>
  );
};
