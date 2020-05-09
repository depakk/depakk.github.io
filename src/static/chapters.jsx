import React from 'react';
import Link from '@material-ui/core/Link';
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
    subtitle: renderSubtitle('THE Ohio State University', '2009 - 2014'),
    description: (
      <Typography variant="subtitle1" paragraph>
        I graduated with a Bachelor&apos;s in Computer Science and Engineering
        and grabbed a Minor in Busines Administration along the way. In addition
        to the sweet science degree, I took some courses that challenged the
        hardship of a young adult such as Flag Football, Soccer, and Basketball.
        (Yes, they were for a single credit hour each) Never missed a game at{' '}
        <Link
          href="https://en.wikipedia.org/wiki/Ohio_Stadium"
          style={{ textDecoration: 'underline' }}
          color="inherit"
          target="_blank"
        >
          the Shoe
        </Link>
        , and even better - snagged every free t-shirt the cheerleaders threw
        into the stands my senior year.
      </Typography>
    ),
  },
  {
    title: 'Chapter 2',
    avatarTitle: 'CAKE Corp.',
    avatar: cake,
    subtitle: renderSubtitle('CAKE Corporation', '2014 - 2017'),
    description: (
      <Typography variant="subtitle1" paragraph>
        I secured a role as a Software Engineer at a startup in the Bay Area. I
        learned all phases of software development such as initialization,
        design, architecture, coding, testing, deployment, and maintenance among
        of plethora of products. Working at a startup gave me the flexibility to
        work in multiple languages such as React JS, EmberJS, Apex, Java, and
        Redux to build both mobile and web applications in an agile software
        development environment. I took full advantage of the small company size
        and worked cross-functionally with all departments of the company in
        developing products for them. I interacted with product, marketing,
        finance, operations, support, customer success teams, and even went on
        sales calls.
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
    description: (
      <Typography variant="subtitle1" paragraph>
        I managed to get a product manager role in the steel industry in my home
        country. It was a huge change coming from a place that was quick to
        adopt technology to an industry that had not fully utilized it. But
        there lay the opportunity to bring in technology and make an impact as
        nobody has. I was a PM for the billing and sales solutions. I worked
        closely with the billing and sales team to gather requirements and even
        worked in a sales position to understand problems from their
        perspective. I then brainstormed some mockups, worked with a solutions
        company and finally implemented the new billing system that automated
        tasks. This product cut down processing time by 50%. I also worked on
        the company&apos;s strategy and investigate new international markets to
        expand our reach. I was able to find suppliers in the countries that
        benefitted our customers (think shipping speed and tax rates) and
        negotiated a long-term deal that has helped our profitability.
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
    description: (
      <Typography variant="subtitle1" paragraph>
        With 4 years of experience, I wanted to go back into an industry that is
        at the forefront of technology so I can learn and contribute. Tepper was
        the obvious choice with the abundance of top engineers and great
        connections to some top companies. My focus was on securing a product
        manager role post-graduation, and, thus, I aimed for concentrations that
        would benefit my goal, Business Technologies, Marketing, Strategy,
        Organizational Behavior. I also took a class on Data Science for Product
        Managers to get a closer understanding of how to break down data into a
        meaningful hypothesis.
      </Typography>
    ),
  },
  {
    title: 'Chapter 5',
    avatarTitle: 'HP Inc.',
    avatar: hp,
    subtitle: renderSubtitle('MBA Internship, HP Inc.', 'May 2019 - Aug 2019'),
    description: (
      <Typography variant="subtitle1" paragraph>
        My main project was creating a strategy to increase HP’s revenue
        globally across three verticals, commercial, healthcare and education.
        This required a lot of market research, competitor analysis, and
        customer research. The second biggest project was improving one of
        HP&apos;s current products. I did some customer interviews to listen to
        their pain points. I worked with engineers and stakeholders from HP and
        other partner companies to come up with solutions. I also performed a
        go-to-market strategy with an international team at HP on a new product
        as we looked to monetize it. This was a very interesting project as
        customer requirements were different from country to country.
      </Typography>
    ),
  },
];

export default chapters;
