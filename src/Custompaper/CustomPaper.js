import React from 'react';
import TrainModel from '../Forms/Train';
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

    if(props.layOutFor==="train-model"){
    
      return(
        <Paper className={classes.root} >
        <TrainModel/>
      </Paper>
  );

    }

   /* else if(props.layOutFor==="test-model"){
     
      return(
        <Paper className={classes.root} >
        <CreateID/>
      </Paper>
  );

    }*/
    
    return(
          <Paper className={classes.root} >
             {/*console.log(props.layOutFor)*/}
        </Paper>
    );

};

export default CustomPaper;