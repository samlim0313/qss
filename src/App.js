import { CssBaseline, Grid, Typography, Link, Box, List, ListItem, ListItemText } from '@material-ui/core';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import logo from './images/logo.png';
import img_clarkson from './images/clarkson-spot-fixtures-2016.png';
import img_decision from './images/decision-tree-at-AG.png';

const theme = createMuiTheme({
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    height: '100vh',
    backgroundColor: 'lightgray'
  },
  content: {
    padding: theme.spacing(3),
  },
}));


function App() {
  const classes = useStyles();
  const list_about = [
    'QSS is a consulting and software development company focused solely on the maritime industry. We serve primarily global container carriers and tanker shipping companies.',
    'In today’s complex and uncertain market, leading shipping companies require new, smart solutions that support data-driven business decisions.',
    'QSS’s solutions enable our clients to optimize their ship-chartering and cargo-pricing decisions based on real-time market information, resulting in maximized profits.',
    'Mathematical modeling capability is what differentiates us. We help our clients frame their problems and formulate them so that computer algorithms can find the solutions.',
  ]
  const list_solutions = [
    'Leaders in the maritime industry recognize recurring, high-level problems in their operations. However, they struggle to design innovative solutions because mathematical modeling is not part of their core business. Similarly, most IT consultants for the maritime industry lack modeling expertise and merely provide off-the-shelf solutions for broader applications.',
    'Our solutions are truly tailored to our client’s problems as well as to their operating methods and fleet size.',
    'Our consulting services help clients frame their problems, determine whether the problems are solvable through modeling, and using our algorithms, outline potential solutions. Once we choose a strategy, we provide a customized software product to allow the client to implement the operational steps.',
    'We ask the following questions to our potential clients. If you would like to discuss these types of issues and see if our services would help your business, please contact us.',
  ]
  const list_tanker = [
    'Prior to making a fixture, how do you choose the trading region for the ship, such as AG, WAF, CARIB or UK/CONT? Do you consider only the ballasting distance and charter hire of a given cargo? Or do you also consider the supply and demand situation of the region? Is port condition - congestion or strike - a consideration?',
    'Do you rely solely on brokers for cargo information? Or do you have latest statistics for cargo at each port or on each route? Do you use such probability when you direct your ships to the next loading port?',
    'Do you factor potential follow-on cargo into your decision on the current charter?',
    'Do you price your charter based on the supply and demand condition of the loading port or of the route?',
    'On what basis do you distribute your ships over different regions? Do you have an optimal distribution tool based on supply and demand of the regions?',
    'Can you forecast the profit of your fleet based on different chartering policies?',
    'Are you outperforming the market? How do you measure your performance against the benchmark, if there is any?',
  ]
  const list_container = [
    'How do you measure supply and demand? Do you rely on broker research?',
    'How do you price your spot cargo? Do you factor in the current demand and supply condition of the market? Or do you price on a cost-plus-margin basis?',
    'Is your empty box repositioning and inventory management optimal? Is your policy updated periodically based on the market situation?',
  ]

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className={classes.root}>
        <Grid container justify='center' alignItems='flex-start'>
          <Grid item xs={12} container direction='column' justify='center' alignItems='center' className={classes.header}>
            <Grid item>
              <img src={logo} alt="logo" />
            </Grid>
            <Grid item>
              <Typography paragraph variant='h6'>A Math-based Maritime Software Company</Typography>
            </Grid>
            <Grid item>
              <Typography paragraph variant='h6' color='error'>Under Construction</Typography>
            </Grid>
            <Grid item>
              <Typography paragraph variant='h5'>
                <Box fontWeight="fontWeightBold">
                  Contact
                </Box>
              </Typography>
            </Grid>
            <Grid item>
            <Typography variant='h6'>
              <Link href="mailto:info@q-shipping.co" color='inherit'>
                info@q-shipping.co
              </Link>
            </Typography>
            </Grid>
          </Grid>
          <Grid item xs={8} className={classes.content}>
            <Typography paragraph variant='h5'>ABOUT</Typography>
            {list_about.map((item, index) => (
              <Typography paragraph>{item}</Typography>
            ))}
          </Grid>
          <Grid item xs={8} className={classes.content}>
            <Typography paragraph variant='h5'>SOLUTIONS</Typography>
            {list_solutions.map((item, index) => (
              <Typography paragraph>{item}</Typography>
            ))}
          </Grid>
          <Grid item xs={4}>
					  <img src={img_clarkson} alt="" width='100%'/>
          </Grid>
          <Grid item xs={6} className={classes.content}>
            <Typography paragraph variant='h5'>For tanker shipping clients:</Typography>
            <List>
              {list_tanker.map((item, index) => (
                <ListItem>
                  <ListItemText>
                    {item}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={6} className={classes.content}>
            <Typography paragraph variant='h5'>For container shipping clients:</Typography>
            <List>
              {list_container.map((item, index) => (
                <ListItem>
                  <ListItemText>
                    {item}
                  </ListItemText>
                </ListItem>
              ))}
              <ListItem><img src={img_decision} alt="" width='50%'/></ListItem>
            </List>
          </Grid>
          <Grid item xs={12} className={classes.content}>
            <Typography align='center' variant='body2'>&copy; {new Date().getFullYear()}  Q Shipping Solutions, LLC</Typography>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
