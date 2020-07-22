import React from 'react';
import CenteredTabs from '../CenteredTabs/CenteredTabs';
import CustomPaper from '../Custompaper/CustomPaper';

const ContentHolder = (props) => {

  for(const i of props.tabs){
    
    if(i.url==='/pension-preparation/orders' && i.currentPath){
      return(
        <React.Fragment>
          <CenteredTabs tabs={props.tabs} />
          <CustomPaper layOutFor="create-order"/>
        </React.Fragment>
      
    );
    }

    else if(i.url==='/pensioners/create' && i.currentPath){
  
      return(
        <React.Fragment>
          <CenteredTabs tabs={props.tabs} />
          <CustomPaper layOutFor="create-id"/>
        </React.Fragment>
      
    );
    }

    else if(i.url==='/pensioners/master' && i.currentPath){

      return(
        <React.Fragment>
          <CenteredTabs tabs={props.tabs} />
          <CustomPaper layOutFor="pension-master"/>
        </React.Fragment>
      
    );
    }

    else if(i.url==='/pension-preparation/earn-deduct' && i.currentPath){

      return(
        <React.Fragment>
          <CenteredTabs tabs={props.tabs} />
          <CustomPaper layOutFor="my-orders"/>
        </React.Fragment>
      
    );
    }

    else if(i.url==='/pension-preparation/register' && i.currentPath){

      return(
        <React.Fragment>
         <CenteredTabs tabs={props.tabs} />
          <CustomPaper layOutFor="pension-register"/>
        </React.Fragment>
      
    );
    }

    else if(i.url==='/pension-preparation/bank-report' && i.currentPath){

      return(
        <React.Fragment>
         <CenteredTabs tabs={props.tabs} />
          <CustomPaper layOutFor="bank-report"/>
        </React.Fragment>
      
    );
    }




    /*else  {
      return(
        <React.Fragment>
            <CenteredTabs tabs={props.tabs} />
          <CustomPaper />
        </React.Fragment>
      
    );
    }*/
  }

  return(
    <React.Fragment>
        <CenteredTabs tabs={props.tabs} />
      <CustomPaper />
    </React.Fragment>
  
);
      
  };

  export default ContentHolder;