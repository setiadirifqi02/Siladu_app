import React, { useState, useEffect } from 'react';
import ArticleItem from '../components/articlecomps/ArticlesItem';

function ArticlePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=44fbe3dee9d94fae976cad43cc0ab90e');
      const responseJson = await response.json();
      setArticles(responseJson.articles);
    };

    getArticles();
  }, []);
  return (
    <div className="article">
      <div className="about-page__header py-5">
        <h2 className="about-page__header-title text-white text-capitalize mt-4 text-center">Health Articles</h2>
        <div className="about-page__header-decriptiion text-white text-center  mx-auto mt-4 px-5 w-50">
          <h5>
            Menampilkan berita-berita tentang perkembangan dunia kesehatan terbaru
            di indonesia, anda dapat melihat dan membaca berita-berita tersebut dini.
          </h5>
        </div>
      </div>
      <div className="article-list">
        {articles.map((article) => (
          <ArticleItem
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            key={article.title}
          />
        ))}
      </div>
    </div>
  );
}

export default ArticlePage;
