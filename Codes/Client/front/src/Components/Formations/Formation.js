import React from 'react';
import '../Formations/formation.css';
import js from '../../Assets/images/js.webp'
import java from '../../Assets/images/java2.webp'
import html from '../../Assets/images/html2.png'
import css from '../../Assets/images/css.png'
import c from '../../Assets/images/c.webp'
import python from '../../Assets/images/python.webp'
import bootestrap from '../../Assets/images/bootestrap.webp'
import react from '../../Assets/images/react.webp'
import angular from '../../Assets/images/angular.png'
import node from '../../Assets/images/nodejs.webp'


const Formation = () => {
  const courses = [
    {
        id: 1,
        price: '30dt',
        points: '100P',
        image: js,
        title: 'JavaScript',
        description: 'JavaScript is a versatile programming language widely used to create interactive web pages and dynamic applications.',
    },
    {
        id: 2,
        price: '30dt',
        points: '100P',
        image: java,
        title: 'Java',
        description: 'Java is a robust and secure programming language, widely used for developing enterprise, mobile, and web applications.',
    },
    {
        id: 3,
        price: '20dt',
        points: '100P',
        image: css,
        title: 'CSS',
        description: 'CSS is used to style and format web pages, enabling attractive and responsive visual presentation.',
    },
    {
        id: 4,
        price: '40dt',
        points: '100P',
        image: angular,
        title: 'Angular',
        description: 'Angular is a powerful framework for building dynamic and interactive web applications, supported by Google.',
    },
    {
        id: 5,
        price: '40dt',
        points: '100P',
        image: react,
        title: 'React',
        description: 'React is a JavaScript library for building user interfaces, known for its flexibility and efficiency.',
    },
    {
        id: 6,
        price: '30dt',
        points: '100P',
        image: python,
        title: 'Python',
        description: 'Python is an interpreted programming language, appreciated for its simplicity and versatility, used in various fields such as web development, data analysis, and artificial intelligence.',
    },
    {
        id: 7,
        price: '20dt',
        points: '100P',
        image: bootestrap,
        title: 'Bootstrap',
        description: 'Bootstrap is an open-source front-end framework for developing responsive, mobile-first websites, offering pre-built components and customizable CSS styles.',
    },
    {
        id: 8,
        price: '20dt',
        points: '100P',
        image: node,
        title: 'Node.js',
        description: 'Node.js is an open-source, cross-platform runtime environment that allows developers to create server-side applications using JavaScript.',
    },
    {
        id: 9,
        price: '20dt',
        points: '100P',
        image: html,
        title: 'HTML',
        description: 'HTML (HyperText Markup Language) is the standard language used to create and structure content on the web.',
    },
    {
        id: 10,
        price: '30dt',
        points: '100P',
        image:c,
        title: 'C',
        description: 'The C language is a general-purpose programming language known for its performance, efficiency, and ability to manipulate system resources at a low level.',
    },
];


  return (
    <div className='body'>
    <div className="banner">
      <div className="slider" style={{ '--quantity': courses.length }}>
        {courses.map((course, index) => (
          <div className="item" key={course.id} style={{ '--position': index + 1 }}>
            <div className="price">{course.price}</div>
            <div className="points">{course.points}</div>
            <img src={course.image} alt={course.title} className="corsImg" />
            <div className="corsInfos">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
      <div className="content">
        <h1>Online Certifications</h1>
        <div className="model"></div>
      </div>
    </div>
    </div>
  );
};

export default Formation;
