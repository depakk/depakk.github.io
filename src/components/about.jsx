import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import dprofessional from '../static/images/dprofessional.jpg';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardContent: {
    maxWidth: '800px',
    textAlign: 'center',
  },
});

const About = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Container className={classes.cardContent}>
        <Typography
          component="h1"
          variant="h2"
          color="textPrimary"
          gutterBottom
        >
          About Me
        </Typography>
        <div style={{ marginBottom: '5%' }}>
          <img
            src={dprofessional}
            alt="Professional"
            width="30%"
            height="30%"
          />
        </div>
        <Typography variant="body1" color="textSecondary" paragraph>
          I am a graduating MBA student at Carnegie Mellon University&apos;s
          Tepper School of Business - passionate about using my engineering
          skills and my past experiences in creating tech products. I love to
          build products that tap into data to drive a meaningful and impactful
          change in the world while putting a smile on our customers&apos;
          faces.
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          I started my career as a software engineer at a small startup in
          Silicon Valley, building web and mobile apps using the latest
          technologies such as EmberJS and React. I was part of a team that
          built an online ordering app from scratch using React, Redux, and
          NodeJS. Working at a startup allowed me to work with all divisions of
          the company and get a deeper understanding of how they think and what
          they want in a solution. I have worked as a Product Manager in an
          industry that did not fully utilize technology. In this role, I was
          tasked to create a product for our customers that had not used
          technology before. One of my biggest lessons was on gaining trust. I
          had to learn to take risks and work with a compromise to gain our
          customers&apos; trust before I could showcase the power of technology.
          Over the summer I worked at HP Inc., on a couple of projects. One that
          was creating a strategy to increase HP’s revenue globally across 3
          verticals and another improving one of their hardware products. Both
          projects had me performing customer research to understand their pain
          points, researching data, brainstorming solutions, gaining buy-in from
          key stakeholders, and finally proposing a solution.
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          I am passionate about interacting with customers to uncover their
          problems, discovering a strategy to solve these problems, working
          closely with engineers and designers to build a solution and iterating
          and testing until we reach a minimum viable product.
        </Typography>
      </Container>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(About);
