import React,  {useContext, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ImageIcon from '@material-ui/icons/Image';
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

      input: {
        display: 'none',
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
    const [models, setModels]=React.useState([{_id: '123', modelName: 'Model_1'}, {_id: '456', modelName: 'Model_2'}]);
    const [modelID, setmodelID]=React.useState('');
    const [objectsList, setObjectsList]=React.useState('');
    const [sampleImage, setSampleImage]=React.useState(null);
    const [previewUrl, setPreviewUrl]=React.useState();
    const [isSampleImageValid, setIsSampleImageValid]=React.useState(false);
    const [isObjectsListValid, setIsObjectsListValid]=React.useState(false);
    const [ismodelIDValid, setIsmodelIDValid] = React.useState(false);
    const [showModal, setShowModal]=React.useState(false);
    const [isLoading, setIsLoading]=React.useState(false);
    const [error, setError]=React.useState();
    const [success, setSuccess]=React.useState();
    const canvasRef = React.useRef(null)


    const closeSnackBar = () =>{
      setError(null);
      setIsLoading(false);
      setSuccess(null);

    }

    useEffect(()=>{
      if(!sampleImage){
        return;
      }

      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      }
      fileReader.readAsDataURL(sampleImage);
    }, [sampleImage])
    const handleSampleImageUpload = (event) => {
      if(event.target.files && event.target.files.length === 1){
  
        setSampleImage(event.target.files[0]);
        setIsSampleImageValid(true);
      }
      else{
        setIsSampleImageValid(false);
      }
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
        if(event.target.value!=="available"){
          setmodelID('');
        }
    
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
          disabled={actionType!=="available"}
          onChange={handlemodelIDChange}
          label="Available Models"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {models!==null ? models.map(model => (
            <MenuItem key={model._id} value={model._id}>{`${model.modelName}`}</MenuItem>
          )) : null}
          
        </Select>
    </FormControl>
    <div style={{
      textAlign: 'center',
      marginLeft: '55px',
      width: '90%',
    }}>
<canvas
id="canvas"
ref={canvasRef}
width= '500px'
height='300px'
style={{
  backgroundImage: `url(${previewUrl})`
}}
>

</canvas>
    </div>
    <React.Fragment>
         <input
        accept=".png,.jpg,.jpeg"
        className={classes.input}
        name="uploadedFile"
        id="contained-button-file"
        type="file"
        onChange={handleSampleImageUpload}
      />
      <label htmlFor="contained-button-file">
        <Button
        variant="contained"
        color="secondary"
        component="span"
        className={classes.formControl}
        startIcon={<ImageIcon />}
      >
        {isSampleImageValid ? `${sampleImage.name}` : `Upload Image on Canvas` }
      </Button>
      </label>
      </React.Fragment>
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