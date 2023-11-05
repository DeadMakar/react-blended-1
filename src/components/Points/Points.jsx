import { Component } from 'react';
export class Points extends Component {
  state = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  };

  handelButtonClick(point, value) {
    this.setState(prevState => ({
      [point]: prevState[point] + value,
    }));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {Object.keys(this.state).map((point, index) => {
          return (
            <button
              key={point}
              onClick={() => this.handelButtonClick(point, index + 1)}
            >
              {point}
            </button>
          );
        })}
        <h2>Points</h2>
        {Object.entries(this.state).map(([key, value]) => (
          <span key={key}>
            {key}:{value}
          </span>
        ))}{' '}
      </div>
    );
  }
}
