export const FeedBackStats = ({ good, neutral, bad }) => {
  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = (good * 100) / countTotalFeedback;
  const positiveFeedbackPercentage = Math.round(
    countPositiveFeedbackPercentage
  );

  return (
    <div>
      <p>Statistics</p>

      {countTotalFeedback !== 0 ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {countTotalFeedback}</li>
          <li>Positive feedback: {positiveFeedbackPercentage}%</li>
        </ul>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};
