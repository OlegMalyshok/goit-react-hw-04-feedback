export const FeedBackStats = ({ items }) => {
  const countTotalFeedback = items.bad + items.neutral + items.good;
  const countPositiveFeedbackPercentage =
    (items.good * 100) / countTotalFeedback;
  const positiveFeedbackPercentage = Math.round(
    countPositiveFeedbackPercentage
  );

  return (
    <div>
      <p>Statistics</p>

      {countTotalFeedback !== 0 ? (
        <ul>
          <li>Good: {items.good}</li>
          <li>Neutral: {items.neutral}</li>
          <li>Bad: {items.bad}</li>
          <li>Total: {countTotalFeedback}</li>
          <li>Positive feedback: {positiveFeedbackPercentage}%</li>
        </ul>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};
