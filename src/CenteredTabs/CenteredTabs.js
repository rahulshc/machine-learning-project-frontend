import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },

  activeTab: {
    backgroundColor: '#fce8e6',
    textDecoration: 'none'
  }

});

const CenteredTabs = (props) => {
  //console.log(props);
  const classes = useStyles();
  //const [value, setValue] = React.useState(0);

  /*const handleChange = (event, newValue) => {
    setValue(newValue);
  };*/

  return (
    <Paper className={classes.root}>
      <Tabs
        value={false}
       // onChange={handleChange}
        //indicatorColor="secondary"
        textColor="inherit"
        centered={true}
        variant="fullWidth"
        TabIndicatorProps = {{style: {width: '0'}}}
      >
        {/*<Tab label="Create Order" />
        <Tab label="Misc. Earnings" />
        <Tab label="Pension Register" />
  <Tab label="Bank Report" />*/}

       {props.tabs.map(item => <Tab label={item.label} key={item.label} component={NavLink} to={item.url}  activeClassName={classes.activeTab}/> )}
      </Tabs>
    </Paper>
  );
}

export default CenteredTabs;