import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      articles: []
    }
  }


  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6dcf55985cc74c36bd462ee31cd2396f').then(results => {
      return results.json();
    }
    ).then(data => {
      console.log(data)
      let news = data.articles.map((article, i) => {
        return (
        
          <div key={i}>
      <Card className="card">
        <CardImg top width="100%" src={article.urlToImage} alt="Card image cap" />
        <CardBody>
          <CardTitle>{article.title}</CardTitle>
          <CardSubtitle>{article.author}</CardSubtitle>
          <CardText>{article.description}</CardText>
        </CardBody>
      </Card>
    </div>
        )

      })
      this.setState({articles: news})
    })
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <div className="row justify-content-center">
          {this.state.articles}
          </div>
        </p>
      </div>
    );
  }
}

export default App;
