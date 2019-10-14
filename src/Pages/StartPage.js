import React from 'react';
import Article from '../Components/Article';
import articles from '../json/articles.json';

const StartPage = () => {
  return (
    <div
      data-test="start-wrapper"
      className="start-page"
    >
      {articles.map(item =>
        <Article
          data-test="article-component"
          key={item.id}
          {...item}
        />
      )}
    </div>
  );
}

export default StartPage;