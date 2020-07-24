import React,  {useContext} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Modal from '../Modal/Modal';
import {AuthContext} from '../Context/auth-context';
import './Train.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
        //display: 'inline-block',
        //margin: 'auto',
        left: '50px',
        minWidth: 230,
        width: '90%'
      },

      styleForSubmit:{
        left: '50px',
        minWidth: 230,
        width: '90%',
        marginBottom: '0px'
      },
    root: {
      '& > *': {
        margin: theme.spacing(1),
      }
    }
  }));

const TrainModel = (props) => {
    const classes = useStyles();
    const auth=useContext(AuthContext);
    const [actionType, setActionType]=React.useState('');
    const [isActionTypeValid, setIsActionTypeValid]=React.useState(false);
    const [models, setModels]=React.useState(null);
    const [modelID, setmodelID]=React.useState('');
    const [objectsList, setObjectsList]=React.useState('');
    const [isObjectsListValid, setIsObjectsListValid]=React.useState(false);
    const [ismodelIDValid, setIsmodelIDValid] = React.useState(false);
    const [showModal, setShowModal]=React.useState(false);
    const [isLoading, setIsLoading]=React.useState(false);
    const [error, setError]=React.useState();
    const [success, setSuccess]=React.useState();

    const closeSnackBar = () =>{
      setError(null);
      setIsLoading(false);
      setSuccess(null);

    }

    
    const closeModal= ()=>{
      setShowModal(false);
    }
      const handlemodelIDChange =(event) => {
        setmodelID(event.target.value);
        setIsmodelIDValid(event.target.value? true: false);
    
      }

      const handleactionTypeChange =(event) => {
        setActionType(event.target.value);
        setIsActionTypeValid(event.target.value? true: false);
    
      }

      const objectsListChnagedHandler=(event)=> {
        setObjectsList(event.target.value);
        setIsObjectsListValid(event.target.value.length>0);
      }


return (
  <React.Fragment>
    {error ? <CustomSnackBar message={error} open={true} onClear={closeSnackBar}/> : null}
    {isLoading ? <CustomSnackBar message='Model is being trained in backgrund.' open={true} onClear={closeSnackBar}/> : null}
    {success ? <CustomSnackBar message={success} open={true} onClear={closeSnackBar}/> : null}
    <div className="TrainContainer">
      
   
        <form className={classes.root} noValidate autoComplete="off">

        <FormControl variant="standard" required={true} size="small" margin="dense" className={classes.formControl}>
    <InputLabel id="label-for-actionType">Choose or create a model</InputLabel>
        <Select
          labelId="actionType"
          id="actionType"
          value={actionType}
          onChange={handleactionTypeChange}
          label="Choose or create a model"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="new">
            <em>New</em>
          </MenuItem>
          <MenuItem value="available">
            <em>Available</em>
          </MenuItem>
          
        </Select>
    </FormControl>

    <FormControl variant="standard" required={true} size="small" margin="dense" className={classes.formControl}>
    <InputLabel id="label-for-modelId">Available Models</InputLabel>
        <Select
          labelId="modelId"
          id="modelId"
          value={modelID}
          onChange={handlemodelIDChange}
          label="Available Models"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {models!==null ? models.map(model => (
            <MenuItem key={model._id} value={model._id}>{`${model.modelNo}`}</MenuItem>
          )) : null}
          
        </Select>
    </FormControl>
        <TextField required={actionType==="new"} disabled={actionType==="available"} onChange={objectsListChnagedHandler} error={!isObjectsListValid} helperText={!isObjectsListValid ? 'Please provide the Objects List Seperated by comma': null} value={objectsList} className={classes.formControl}id="objects-list" label="Objects List" />

<Button
        variant="contained"
        color="primary"
       // disabled={!(isPayInMonthValid && isChequeNoValid && isChequeDateValid && isorderIDValid && isTransactionRemarksValid)}
        className={classes.styleForSubmit}
        startIcon={<CloudUploadIcon />}
        //onClick={onCanaraBankGefuClickHandler}
        
      >
         Upload and Train
      </Button>

      
    </form>
    
    </div>
    {/*showModal ? <Modal openModal={showModal} onContinue ={gefuType==="canara" ? sendCanarabankGefu : gefuType==="non-canara" ? sendOtherbankGefu : null} action={closeModal} message={`Are you sure to send ${gefuType} GEFU to bank?`}/> : null */}
  </React.Fragment>
    
);
};

export default TrainModel;