import React from "react";
import "./QuoteContainer.css";
import Container from "../../atoms/Container/Container";
import Button from "../../atoms/Button/Button";
import LinkButton from "../../atoms/LinkButton/LinkButton";

export default class QuoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    if (prevProps.color !== this.props.color) {
      this._updateTheColors(this.props.color);
    }
  }

  render() {
    return (
      <div id={this.props.id} className="QuoteContainer">
        <Container>
          <p id="text" className="quoteText" style={this.state.color}>
            <i className="fa fa-quote-left"></i>
            {this.props.text}
          </p>
          <div id="author" className="quoteAuthor" style={this.state.color}>
            -{this.props.author}
          </div>
          <div className="buttonsContainer">
            <div className="share-buttons">
              <LinkButton
                id="tweet-quote"
                href="twitter.com/intent/tweet"
                target="_top"
                style={this.state.backgroundColor}
              >
                <i className="fa fa-twitter"></i>
              </LinkButton>
            </div>
            <div>
              <Button
                id="new-quote"
                onClick={this.props.onGetNewQuote}
                style={this.state.backgroundColor}
              >
                New Quote
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  _updateTheColors(color) {
    this.setState({
      backgroundColor: {
        backgroundColor: color ? color : "#000000",
      },
      color: {
        color: color ? color : "#000000",
      },
    });
  }
}
