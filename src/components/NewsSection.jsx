import React from 'react';
import NewsCard from './NewsCard';
import { newsData } from '../constants';

const NewsSection = () => {
  return (
    <section className="my-8 px-4 bg-gray-950 py-8">
      <h2 className="font-poppins text-3xl font-bold mb-4 text-white p-4" >
        STAY INSPIRED WITH OUT NEWS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.slice(0, 3).map((news) => (
          <NewsCard
            key={news.id}
            title={news.title}
            description={news.description}
            date={news.date}
          />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
