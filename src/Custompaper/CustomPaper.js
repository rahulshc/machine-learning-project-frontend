import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStylesForpaper= makeStyles({
    root: {
      minHeight: '79vh',
      width: '100%',
      marginTop: '5px'
    }
  });

const CustomPaper =(props) => {
    const classes=useStylesForpaper();
    //Creating for for Create-Order
    //console.log(props);
    
    return(
          <Paper className={classes.root} >
             {/*console.log(props.layOutFor)*/}
        </Paper>
    );

};

export default CustomPaper;