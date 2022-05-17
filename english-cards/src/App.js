import React from 'react';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      id : 0,
      word : '',
      translate : '',
      cards : [] 
    }
  }

  updateInput(key, value) {
    this.setState({
      [key] : value
    })
  }

  addCard() {
    const newCard = {
      id : 1 + this.state.id,
      value : {
        word : this.state.word.slice(),
        translate : this.state.translate.slice()
      }
    }

    this.setState({
      id : newCard.id,
      word : '',
      translate : '',
      cards : [...this.state.cards, newCard]
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">English cards</h1>
        <div className="container">
          <input
            type="text"
            placeholder="Wpisz słowo"
            value={this.state.word}
            onChange={(e) => this.updateInput('word', e.target.value)}
          />
          <input
            type="text"
            placeholder="Wpisz tłumaczenie"
            value={this.state.translate}
            onChange={(e) => this.updateInput('translate', e.target.value)}
          />
          <button
            className="btn add-btn"
            onClick={() => this.addCard()}
          >
            Dodać
          </button>
        </div>
      </div>
    );
  }
}

export default App;