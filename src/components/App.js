import { Component } from 'react';
import { FeedBackForm } from './FeedBack/FeedBack';
import { FeedBackStats } from './StatiscticFeedBacks/StatiscticFeedBacks';

const styleCntr = {
  backgroundColor: '#e5e5e5',
};

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedBackValue = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  render() {
    return (
      <div style={styleCntr}>
        <FeedBackForm leaveFeedBack={this.feedBackValue} />
        <FeedBackStats items={this.state} />
      </div>
    );
  }
}
