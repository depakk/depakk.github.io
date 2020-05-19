import React from 'react';

import Typography from '@material-ui/core/Typography';

import cake from './images/avatar/Cake Icon.png';
import cmu from './images/avatar/CMU Icon.png';
import hp from './images/avatar/HP Icon.svg';
import mhc from './images/avatar/MHC Icon.png';
import osu from './images/avatar/Ohio State Icon.png';

const renderSubtitle = (subtitle, info) => (
  <div>
    <div>{subtitle}</div>
    <div>{info}</div>
  </div>
);

const chapters = [
  {
    title: 'Chapter 1',
    avatarTitle: 'The Ohio State University',
    avatar: osu,
    subtitle: renderSubtitle('The Ohio State University', '2009 - 2014'),
    careerTitle: (
      <Typography gutterBottom variant="h6">
        Computer Science and Engineering
      </Typography>
    ),
    description: (
      <Typography variant="subtitle1" paragraph>
        I graduated with a Bachelor&apos;s of Science in Computer Science and
        Engineering with a Minor in Business Administration. I took the
        following courses to help kickstart my career -
        <ul>
          <li>Software Development in Java</li>
          <li>Introduction to Analysis of Algorithms and Data Structures</li>
          <li>Principles of Programming Languages</li>
          <li>Object-Oriented System Analysis</li>
        </ul>
        My extra curricular activites included -
        <ul>
          <li>Web Chair of Sri Lankan Student Association</li>
          <li>Tech mentor at the Office of Disability Services</li>
        </ul>
      </Typography>
    ),
  },
  {
    title: 'Chapter 2',
    avatarTitle: 'CAKE Corp.',
    avatar: cake,
    subtitle: renderSubtitle('CAKE Corporation', '2014 - 2017'),
    careerTitle: (
      <Typography gutterBottom variant="h6">
        Software Engineer
      </Typography>
    ),
    description: (
      <Typography variant="subtitle1" paragraph>
        My role taught me all phases of software development. Also, the startup
        gave me the flexibility to work in multiple languages such as React JS,
        EmberJS, Java, and Redux to build both mobile and web applications in an
        agile software development environment.
        <br />
        <br />
        The small company size allowed me to work cross-functionally with all
        departments of the company in developing products for them. I
        collaborated with product, marketing, finance, operations, support,
        customer success teams, and even stepped out of my comfort zone and went
        on sales calls. Working with these divisions allowed me to follow their
        thought process and helped me understand what they look for in a perfect
        solution.
      </Typography>
    ),
  },
  {
    title: 'Chapter 3',
    avatarTitle: 'MHC',
    avatar: mhc,
    subtitle: renderSubtitle(
      'Modern Hardware Centre, Sri Lanka',
      '2017 - 2018'
    ),
    careerTitle: (
      <Typography gutterBottom variant="h6">
        Product Manager
      </Typography>
    ),
    description: (
      <Typography variant="subtitle1" paragraph>
        I used my software engineering skills from a high tech environment to
        digitally transform the company. My biggest project was implementing a
        billing and sales solutions. I went above and beyond to perform customer
        research by working in a sales position to understand the little nuances
        that one would not get through the usual interviews or surveys. I then
        brainstormed some mockups, worked with a solutions company, and finally
        implemented the new billing system that automated tasks. This product
        cut down processing time by 50%.
        <br />
        <br />I worked on the company&apos;s strategy and sought new
        international markets to expand our reach. I researched and connected
        with suppliers in countries that benefitted our customers with faster
        shipping speeds. After the new suppliers&apos; products got into the
        hands of our customer, I followed up to get their feedback. The positive
        feedback gave me the green light to negotiate a new long-term contract
        that has helped our profitability.
      </Typography>
    ),
  },
  {
    title: 'Chapter 4',
    avatarTitle: 'Carnegie Mellon University',
    avatar: cmu,
    subtitle: renderSubtitle(
      'Carnegie Mellon University, Tepper School of Business',
      '2018 - 2020'
    ),
    careerTitle: (
      <Typography gutterBottom variant="h6">
        Master&apos;s in Business Administration
      </Typography>
    ),
    description: (
      <Typography variant="subtitle1" paragraph>
        I chose Tepper because I wanted to be at a school that is at the
        forefront of tech innovation and is known for its analytical depth.
        Classes such as Marketing Research, Statistical Analysis and Digital
        Marketing and Social Media Strategy have allowed me to hone my
        analytical thinking. Also, Carnegie Mellon University has some of the
        best schools and great connections to some top companies in the tech
        industry for us to network and learn.
        <br />
        <br />
        My focus was on securing a product manager role post-graduation, and,
        thus, I aimed for concentrations that would benefit my goal - Business
        Technologies | Marketing | Strategy | Organizational Behavior. I also
        took a class on Data Science for Product Managers to get a closer
        understanding of how to break down data into a meaningful hypothesis.
      </Typography>
    ),
  },
  {
    title: 'Chapter 5',
    avatarTitle: 'HP Inc.',
    avatar: hp,
    subtitle: renderSubtitle('MBA Internship, HP Inc.', 'May 2019 - Aug 2019'),
    careerTitle: (
      <Typography gutterBottom variant="h6">
        MBA Product Manager Summer Associate
      </Typography>
    ),
    description: (
      <Typography variant="subtitle1" paragraph>
        My main project was creating a strategy to increase HP’s revenue
        globally across three verticals, commercial, healthcare, and education.
        This required a lot of customer and market research, competitor
        analysis, working across different divisions and ultimately my solution
        was integrated into HP&apos;s global strategy.
        <br />
        <br />
        The second big project was improving one of HP&apos;s current products.
        I did some customer interviews to listen to their pain points. I worked
        with engineers and stakeholders from HP and other partner companies to
        come up with solutions. I was also tasked with performing a go-to-market
        strategy with an international team at HP on a new product as we looked
        to monetize it. This was a very interesting project as customer
        requirements were different from country to country.
      </Typography>
    ),
  },
];

export default chapters;
