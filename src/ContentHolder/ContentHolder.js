import React from 'react';
import CenteredTabs from '../CenteredTabs/CenteredTabs';
import CustomPaper from '../Custompaper/CustomPaper';

const ContentHolder = (props) => {

  for(const i of props.tabs){
    
    if(i.url==='/models/train' && i.currentPath){
      return(
        <React.Fragment>
          <CenteredTabs tabs={props.tabs} />
          <CustomPaper layOutFor="train-model"/>
        </React.Fragment>
      
    );
    }

    else if(i.url==='/models/test' && i.currentPath){
  
      return(
        <React.Fragment>
          <CenteredTabs tabs={props.tabs} />
          <CustomPaper layOutFor="test-model"/>
        </React.Fragment>
      
    );
    }

    
  }

  return(
    <React.Fragment>
        <CenteredTabs tabs={props.tabs} />
      <CustomPaper />
    </React.Fragment>
  
);
      
  };

  export default ContentHolder;