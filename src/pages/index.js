import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
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
  video: {
    position: 'relative',
    paddingBottom: '56.25%', /* 16:9 */
    height: 0,
    '& iframe': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }
  },
}));

function IndexPage () {
  const classes = useStyles();

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
                We develop customized decision-support software with a focus on the maritime industry, primarily shipping companies. Our solutions enable our clients to address critical operational problems (such as empty container repositioning, cargo pricing, etc.) based on real-time and historical data.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} className={classes.spacing}>
          <Card>
            <CardHeader title='Our Technology' />
            <CardContent>
              <Typography>
                Our approach to mathematical modeling differentiates us. Modeling enables large, complex problems to be framed and formulated so that computers can find optimal solutions that humans would’ve deemed unsolvable or resource consuming.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} className={classes.spacing}>
          <Card>
            <CardHeader title='Problem Scope' />
            <CardContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell style={{textAlign: 'center'}}>Cost Management</TableCell>
                    <TableCell style={{textAlign: 'center'}}>Revenue Management</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell style={{textAlign: 'center', transform: 'rotate(180deg)', writingMode: 'vertical-lr'}}>Container and Cargo</TableCell>
                    <TableCell>
                      <ul>
                        <li>Safety Stock, Supply/Demand Prediction</li>
                        <li>Empty Container Repositioning</li>
                      </ul>
                    </TableCell>
                    <TableCell>
                      <ul>
                        <li>Spot Cargo Pricing</li>
                        <li>Long-term Contract Bid Pricing</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{textAlign: 'center', transform: 'rotate(180deg)', writingMode: 'vertical-lr'}}>Vessel and Port</TableCell>
                    <TableCell>
                      <ul>
                        <li>Ship Speed Optimization</li>
                        <li>Refuel Locations</li>
                        <li>Arrival/Berth/Departure Time Prediction</li>
                        <li>Stowage Problem</li>
                      </ul>
                    </TableCell>
                    <TableCell>
                      <ul>
                        <li>Routing/Scheduling [network optimization]</li>
                        <li>Port dues (port operator’s problem)</li>
                        <li>TC rate (tonnage provider’s problem)</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} className={classes.spacing}>
          <Card>
            <CardHeader title='Our Solutions' />
            <CardContent>
              <Typography paragraph>
                Safety Stock
              </Typography>
              <Typography paragraph>
                Ports must keep empty containers in storage to meet the demands of shippers. The optimal inventory level of empty containers meets all of shippers’ demands while minimizing cost of storage and leasing/owning containers. Too low of a level will miss potential revenue from shippers, and too high of a level will incur unnecessary spending.
              </Typography>
              <div className={classes.video}>
                <iframe src="https://www.youtube.com/embed/mb0gl0-e074" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <br/>
              <Typography paragraph>
                Empty Container Repositioning
              </Typography>
              <Typography paragraph>
                Once an empty container has been returned by the shipper, shipping companies must relocate the container to locations with demand. Sometimes the cheapest relocation cost does not always result in maximum profit. A quicker but pricier relocation may lead to higher fulfillment and increased profit.
              </Typography>
              <div className={classes.video}>
                <iframe src="https://www.youtube.com/embed/9m60RZyWGe8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </CardContent>
          </Card>
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
