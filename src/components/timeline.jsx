import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import ArrowBackIosTwoToneIcon from '@material-ui/icons/ArrowBackIosTwoTone';
import ArrowForwardIosTwoToneIcon from '@material-ui/icons/ArrowForwardIosTwoTone';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';

import bckg from '../static/images/timelinebackground.jpg';
import chapters from '../static/chapters';
import cake from '../static/images/avatar/Cake Icon.png';
import cmu from '../static/images/avatar/CMU Icon.png';
import hp from '../static/images/avatar/HP Icon.svg';
import mhc from '../static/images/avatar/MHC Icon.png';
import osu from '../static/images/avatar/Ohio State Icon.png';

const styles = (theme) => ({
  root: {
    height: '100%',
    width: '100%',
    backgroundImage: `url(${bckg})`,
    backgroundPosition: '0 90%',
    backgroundSize: 'cover',
    paddingTop: '10%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  chapterCard: {
    marginTop: theme.spacing(1),
  },
  chapterNavigation: {
    margin: '1% 3%',
  },
  completed: {
    display: 'inline-block',
  },
  content: {
    margin: '0 3% 0 3%',
  },
});

const chapterIcons = [osu, cake, mhc, cmu, hp];

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.chapterAvatarTitles = [];
    for (let i = 0; i < chapters.length; i += 1) {
      this.chapterAvatarTitles.push(chapters[i].avatarTitle);
    }
  }

  getStepContent = (step) => this.renderChapterCard(chapters[step]);

  setActiveStep(stepIndex) {
    const { history } = this.props;
    history.push(`/timeline/${stepIndex}`);
  }

  handleNext(nextIndex) {
    const { history } = this.props;
    return () => history.push(`/timeline/${nextIndex}`);
  }

  handleBack(previousIndex) {
    const { history } = this.props;
    return () => history.push(`/timeline/${previousIndex}`);
  }

  renderChapterCard = (chapter) => (
    <Card>
      <CardContent>
        <Typography component="h5" variant="h5">
          {chapter.title}
        </Typography>
        <CardHeader
          avatar={<Avatar alt="d" src={chapter.avatar} />}
          title={chapter.subtitle}
        />
        {chapter.description}
      </CardContent>
    </Card>
  );

  renderStepperIcon = (index) => () => {
    const { classes, match } = this.props;
    const chapterNumber = parseInt(match.params.chapter, 10);
    const activeStepIndex = chapterNumber - 1;
    return (
      <div>
        <Avatar
          alt="D"
          className={index !== activeStepIndex ? classes.inactive : ''}
          src={chapterIcons[index]}
        />
      </div>
    );
  };

  render() {
    const { classes, match } = this.props;
    const chapterNumber = parseInt(match.params.chapter, 10);
    const activeStepIndex = chapterNumber - 1;
    const steps = this.chapterAvatarTitles;

    return (
      <div className={classes.root}>
        <Paper elevation={3} className={classes.content}>
          <Stepper
            style={{ borderRadius: '5px' }}
            alternativeLabel
            nonLinear
            activeStep={activeStepIndex}
          >
            {steps.map((label, index) => {
              const stepIndex = index + 1;

              return (
                <Step key={label}>
                  <StepButton onClick={() => this.setActiveStep(stepIndex)}>
                    <StepLabel
                      StepIconComponent={this.renderStepperIcon(index)}
                    >
                      {label}
                    </StepLabel>
                  </StepButton>
                </Step>
              );
            })}
          </Stepper>
        </Paper>
        <div className={classes.chapterNavigation}>
          <Button
            variant="contained"
            disabled={activeStepIndex === 0}
            onClick={this.handleBack(chapterNumber - 1)}
            className={classes.backButton}
            color="primary"
          >
            <ArrowBackIosTwoToneIcon />
          </Button>
          <Button
            variant="contained"
            disabled={activeStepIndex === steps.length - 1}
            onClick={this.handleNext(chapterNumber + 1)}
            className={classes.button}
            color="primary"
          >
            <ArrowForwardIosTwoToneIcon />
          </Button>
        </div>
        <div>
          <Typography component="div">
            <Grid className={classes.content} component={Paper}>
              {this.getStepContent(activeStepIndex)}
            </Grid>
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Timeline);
