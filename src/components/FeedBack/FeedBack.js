export const FeedBackForm = ({ leaveFeedBack }) => {
  const buttonClick = (value, event) => {
    event.preventDefault();
    leaveFeedBack(value);
  };

  return (
    <form>
      <p>Please leave a feedback</p>
      <button onClick={event => buttonClick('good', event)}>Good</button>
      <button onClick={event => buttonClick('neutral', event)}>Neutral</button>
      <button onClick={event => buttonClick('bad', event)}>Bad</button>
    </form>
  );
};
