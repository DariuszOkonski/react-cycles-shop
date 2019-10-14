import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, text }) => {
  return (
    <div
      data-test="article-wrapper"
      className='article'
    >
      <h2
        data-test="title-component"
        className='article__title'
      >{title}</h2>

      <h3
        data-test="author-component"
        className='article__author'
      >{author}</h3>

      <p
        data-test="paragraph-component"
        className='article__paragraph'
      >
        {text}
      </p>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Article;