import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Avatar, Backdrop, Box, Button, Card, CardActions, CardContent, CardHeader, Fade, Grid, IconButton, Modal, Typography } from '@material-ui/core';
import { LinkedIn } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import Layout from "../components/layout"
import Seo from "../components/seo"

import yj from '../images/bw_yj.jpg'
import sam from '../images/bw_sam.jpg'


const useStyles = makeStyles((theme) => ({
  profile: {
    position: 'relative',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  linkedin: {
    borderRadius: '10%',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  lightfont: {
    fontWeight: 200,
  },
  spacing: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    maxHeight:'50%',
    maxWidth: '90%',
    overflow:'auto',
  },
}));

function IndexPage () {
  const classes = useStyles();
  const [tanker, setTanker] = React.useState(false);
  const [container, setContainer] = React.useState(false);

  return (
    <Layout>
      <Seo title="Home" />
      <Grid container justify='center'>
        <Grid item className={classes.spacing}>
          <StaticImage
            src="../images/q-shipping-solutions.png"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Q Shipping Solutions"
            style={{ marginBottom: `1.45rem` }}
          />
          <Typography variant='h5' align='center' className={classes.lightfont}>
            A Math-Based Maritime Software Company.
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.spacing}>
          <Card>
            <CardHeader title='Our Company' />
            <CardContent>
              <Typography>
                We consult and develop software focused solely on the maritime industry. We primarily serve global container carriers and tanker shipping companies. Our solutions enable our clients to optimize ship-chartering and cargo-pricing decisions based on real-time market information, resulting in maximal revenue.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} className={classes.spacing}>
          <Card>
            <CardHeader title='Our Technology' />
            <CardContent>
              <Typography>
                Mathematical modeling capability is what differentiates us. We help our clients frame and formulate their problems so that computer algorithms can find smart solutions that support data-driven business decisions. We tailor our solutions to the client's problems as well as their operating methods and fleet size. We ask the following questions to our potential clients. If you would like to discuss these types of issues and see if our services would help your business, please contact us.
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Button variant='outlined' style={{width: '100%'}} onClick={() => setTanker(!tanker)}>
                    Tanker Shipping Clients
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant='outlined' style={{width: '100%'}} onClick={() => setContainer(!container)}>
                    Container Shipping Clients
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={tanker}
            onClose={() => setTanker(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={tanker}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">For tanker shipping clients:</h2>
                <p id="transition-modal-description">
                  <ul>
                    <li>Prior to making a fixture, how do you choose the trading region for the ship, such as AG, WAF, CARIB or UK/CONT? Do you consider only the ballasting distance and charter hire of a given cargo? Or do you also consider the supply and demand situation of the region? Is port condition - congestion or strike - a consideration?</li>
                    <li>Do you rely solely on brokers for cargo information? Or do you have latest statistics for cargo at each port or on each route? Do you use such probability when you direct your ships to the next loading port?</li>
                    <li>Do you factor potential follow-on cargo into your decision on the current charter?</li>
                    <li>Do you price your charter based on the supply and demand condition of the loading port or of the route?</li>
                    <li>On what basis do you distribute your ships over different regions? Do you have an optimal distribution tool based on supply and demand of the regions?</li>
                    <li>Can you forecast the profit of your fleet based on different chartering policies?</li>
                    <li>Are you outperforming the market? How do you measure your performance against the benchmark, if there is any?</li>
                  </ul>
                </p>
              </div>
            </Fade>
          </Modal>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={container}
            onClose={() => setContainer(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={container}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">For container shipping clients:</h2>
                <p id="transition-modal-description">
                  <ul>
                    <li>How do you measure supply and demand? Do you rely on broker research?</li>
                    <li>How do you price your spot cargo? Do you factor in the current demand and supply condition of the market? Or do you price on a cost-plus-margin basis?</li>
                    <li>Is your empty box repositioning and inventory management optimal? Is your policy updated periodically based on the market situation?</li>
                  </ul>
                </p>
              </div>
            </Fade>
          </Modal>
        </Grid>
        <Grid item xs={12} className={classes.spacing}>
          <Card>
            <CardHeader title='Our Team' />
            <CardContent>
              <Grid container justify='space-around' spacing={3}>
                <Grid item>
                  <Box className={classes.profile}>
                    <Avatar src={yj} className={classes.avatar} />
                    <IconButton aria-label="YJ's Linkedin" color='inherit' href='https://www.linkedin.com/in/yoo-joon-kim-b9875013a/' target='_blank' rel="noopener noreferrer" className={classes.linkedin}>
                      <LinkedIn />
                    </IconButton>
                  </Box>
                  <br/>
                  <Typography align='center'>
                    Yoo Joon (YJ) Kim
                    <br/>
                    <i>CEO</i>
                  </Typography>
                </Grid>
                <Grid item>
                  <Box className={classes.profile}>
                    <Avatar src={sam} className={classes.avatar} />
                    <IconButton aria-label="Samuel's Linkedin" color='inherit' href='https://www.linkedin.com/in/samlim0313/' target='_blank' rel="noopener noreferrer" className={classes.linkedin}>
                      <LinkedIn />
                    </IconButton>
                  </Box>
                  <br/>
                  <Typography align='center'>
                    Samuel Lim
                    <br/>
                    <i>Lead Engineer</i>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} className={classes.spacing}>
          <Card>
            <CardHeader title='Contact Us' />
            <CardContent>
              <Typography align='center'>
                <a href="mailto:info@q-shipping.co" style={{textDecoration: 'none', color:'inherit'}}>
                  info@q-shipping.co
                </a>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
