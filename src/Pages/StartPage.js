import React from 'react';
import Article from '../Components/Article';
import articles from '../json/articles.json';

const StartPage = () => {
  return (
    <div className="start-page">
      {articles.map(item => <Article key={item.id} {...item} />)}
    </div>
  );
}

export default StartPage;