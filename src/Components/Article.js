import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, text }) => {
  return (
    <div className='article'>
      <h2 className='article__title'>{title}</h2>
      <h3 className='article__author'>{author}</h3>
      <p className='article__paragraph'>
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