import { react } from '@babel/types';
import { render } from '@testing-library/react';
import React from 'react';
import QuoteMachine from './components/QuoteMachine';
import {Grid, withStyles} from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center'
  }
}
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    };

    this.selectedQuoteIndex = this.selectedQuoteIndex.bind(this);
  };

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(data => data.json())
    .then(quotes => this.setState({quotes: quotes}, this.selectedQuoteIndex))
  }

  selectedQuoteIndex () {
    const random = Math.random();
    const index = this.state.quotes.length * random;
    const roundedIndex = Math.floor(index)
    this.setState({
      selectedQuoteIndex: roundedIndex
    });
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  render() {
    return (
      <Grid className = {this.props.classes.container} id="quote-box" justifyContent="center" container>
        <Grid xs={8} lg={6} item>
          <QuoteMachine selectedQuote = {this.selectedQuote} selectedQuoteIndex = {this.selectedQuoteIndex}/>
        </Grid>
      </Grid>
    );
  };
}

export default withStyles(styles)(App);