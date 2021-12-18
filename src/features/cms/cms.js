import React from 'react';

const list = [
  {
    id: '1',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
    completed: '64%',
    currentChapter: 'Chapter 17',
  },
  {
    id: '2',
    title: 'Dune',
    author: 'Frank Hebert',
    category: 'Science Fiction',
    completed: '8%',
    currentChapter: 'Chapter 3',
  },
  {
    id: '3',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
    completed: '0%',
    currentChapter: 'Introduction',
  },
];

const CMS = () => (
  <div>
    {' '}
    { list }
    {' '}
    here
  </div>
);

export default CMS;
