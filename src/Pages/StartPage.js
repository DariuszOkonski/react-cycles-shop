import React from 'react';
import Article from '../Components/Article';
import articles from '../json/articles.json';

const StartPage = () => {
  console.log(articles)

  return (
    <div className="start-page">
      {articles.map(item => <Article key={item.id} />)}
    </div>
  );
}

export default StartPage;