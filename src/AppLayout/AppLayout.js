import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
//import NotificationsIcon from '@material-ui/icons/Notifications';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';
import FaceIcon from '@material-ui/icons/Face';
import ExtensionIcon from '@material-ui/icons/Extension';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ContentHolder from '../ContentHolder/ContentHolder';
import CustomContentHolder from '../CustomContentHolder/CustomContentHolder';
import { AuthContext } from '../Context/auth-context';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  
  activeMenu: {
    backgroundColor: '#fce8e6',
    textDecoration: 'none'
  },
    grow: {
        flexGrow: 1
      },
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },


  
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const AppLayout = (props) => {
  //console.log(props);
    const auth=useContext(AuthContext);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Machine Learning Project
          </Typography>
          <div className={classes.grow}/>
          <div>
            <IconButton aria-label="show 0 new mails" color="inherit">
              <Badge badgeContent={1} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
           {/* <IconButton aria-label="show 0 new notifications" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>*/} 
            <IconButton
              edge="end"
              aria-label="support"
              //aria-controls={menuId}
              aria-haspopup="true"
              //onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <VpnKeyIcon/>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="logout"
              //aria-controls={menuId}
              aria-haspopup="true"
              onClick={auth.logout}
              color="inherit"
            >
              <PowerSettingsNewOutlinedIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List dense={true}>
        <ListItem button key='Dashboard' component={NavLink} to="/" exact activeClassName={classes.activeMenu}>
              <ListItemIcon><DashboardIcon /> </ListItemIcon>
              <ListItemText primary='Dashboard' />
        </ListItem>
        </List>
        <Divider />
        <List dense={true}>
        <ListItem  button key='Train' component={NavLink} to="/models/train" exact activeClassName={classes.activeMenu} >
              <ListItemIcon><ExtensionIcon/> </ListItemIcon>
              <ListItemText primary='Train a model' />
        </ListItem>
        <ListItem button key='Test' component={NavLink} to="/models/test"  activeClassName={classes.activeMenu}>
              <ListItemIcon><FaceIcon /> </ListItemIcon>
              <ListItemText primary='Detect Objects' />
        </ListItem>
        </List>
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.tabs ? <ContentHolder tabs={props.tabs} /> : <CustomContentHolder/>}
        
      </main>
    </div>
  );
}

export default AppLayout;