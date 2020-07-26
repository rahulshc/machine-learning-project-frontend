import React,  {useContext} from 'react';
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
    const [isSampleImageValid, setIsSampleImageValid]=React.useState(false);
    const [isObjectsListValid, setIsObjectsListValid]=React.useState(false);
    const [ismodelIDValid, setIsmodelIDValid] = React.useState(false);
    const [showModal, setShowModal]=React.useState(false);
    const [isLoading, setIsLoading]=React.useState(false);
    const [error, setError]=React.useState();
    const [success, setSuccess]=React.useState();
    const canvasRef = React.useRef(null)

    const HOOK_SVG =  'm129.03125 63.3125c0-34.914062-28.941406-63.3125-64.519531-63.3125-35.574219 0-64.511719 28.398438-64.511719 63.3125 0 29.488281 20.671875 54.246094 48.511719 61.261719v162.898437c0 53.222656 44.222656 96.527344 98.585937 96.527344h10.316406c54.363282 0 98.585938-43.304688 98.585938-96.527344v-95.640625c0-7.070312-4.640625-13.304687-11.414062-15.328125-6.769532-2.015625-14.082032.625-17.960938 6.535156l-42.328125 64.425782c-4.847656 7.390625-2.800781 17.3125 4.582031 22.167968 7.386719 4.832032 17.304688 2.792969 22.160156-4.585937l12.960938-19.71875v42.144531c0 35.582032-29.863281 64.527344-66.585938 64.527344h-10.316406c-36.714844 0-66.585937-28.945312-66.585937-64.527344v-162.898437c27.847656-7.015625 48.519531-31.773438 48.519531-61.261719zm-97.03125 0c0-17.265625 14.585938-31.3125 32.511719-31.3125 17.929687 0 32.511719 14.046875 32.511719 31.3125 0 17.261719-14.582032 31.3125-32.511719 31.3125-17.925781 0-32.511719-14.050781-32.511719-31.3125zm0 0'
const HOOK_PATH = new Path2D(HOOK_SVG)
const SCALE = 0.3
const OFFSET = 80
function draw(ctx, location) {
  ctx.fillStyle = 'deepskyblue'
  ctx.shadowColor = 'dodgerblue'
  ctx.shadowBlur = 20  
  ctx.save()
  ctx.scale(SCALE, SCALE)  
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET)
  ctx.fill(HOOK_PATH)
  ctx.restore()
}
    const closeSnackBar = () =>{
      setError(null);
      setIsLoading(false);
      setSuccess(null);

    }

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
      textAlign: 'center'
    }}>
<canvas
id="canvas"
ref={canvasRef}
width='inherit'
height='inherit'
style={{
  border: '2px soild  #0000',
  marginTop: 10
}}

onClick={e => {
  const canvas = canvasRef.current
  const ctx = canvas.getContext('2d')
  draw(ctx, { x: e.clientX, y: e.clientY })
}}>

</canvas>
    </div>
    <React.Fragment>
         <input
        accept=".csv"
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