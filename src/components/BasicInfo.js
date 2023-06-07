import React, {useState} from 'react'
import SimCardAlertIcon from '@mui/icons-material/SimCardAlert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BasicInfocss from './BasicInfocss.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import {Map} from './Map/Map';
import {useDispatch , useSelector} from 'react-redux';
import { addclinic } from '../store/clinicSlice';

import {  useNavigate  } from "react-router-dom";


import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const BasicInfo = () => {

  const history =useNavigate();


const [name, setName]=useState("");
const [region, setRegion]=useState("");
const [street, setStreet]=useState("");
const [phone, setPhone]=useState(0);
const [district, setDistrict]=useState("");
const [special, setSpecial]=useState("");
const [counrt, setCountry]=useState("");
const [city, setCity]=useState("");






  const clinics =useSelector((state)=>state.clinics.clinics)
const dispatch =useDispatch();

  return (
    <>

<div>
<FormControl>
    <div id="Breadcrumb">
    < Box  >
        <SimCardAlertIcon color="action" />  
              <a id="Clinics"  display="inline">Clinics</a>
             < NavigateNextIcon color="action" />
             <Typography variant="h5" id="test1"
             sx={{flex: 'none',
                order: 2,
                flexGrow: 0,
            }}
             
              component="div" sx={{ flexGrow: 1 }} display="inline"
              >Clinic 1</Typography>
             
     
    </Box>
    <div id="basic">
                <Typography >Basic Info</Typography>

                </div>



    </div>
    <div id ="textfeild">
                <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '400px', 
                      display: { xs: 'flex', md: 'flex' },
    },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Clinic Name" variant="outlined" 
      value ={name} 
      onChange ={(e)=>setName(e.target.value)}   
      />
    
    </Box>


    
    </div>
    <div id="comp">
    <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Special}
        value={special}
        sx={{ width: 400 }}   

        onChange={(event, newValue) => {
          setSpecial(newValue);
        }}
        renderInput={(params) => <TextField {...params} label="Specialty" />}
      />
      
    
    </div>
    <div id="country">
    <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={countries}
        value={counrt}
        sx={{ width: 400 }}   

        onChange={(event, newValue) => {
          setCountry(newValue);
        }}
        renderInput={(params) => <TextField {...params} label="Country" />}
      />


    </div>
    <div id="city">
                  <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={citeis}
        value={city}
        sx={{ width: 400 }}   

        onChange={(event, newValue) => {
          setCity(newValue);
        }}
        renderInput={(params) => <TextField {...params} label="City" />}
      />
    </div>


    <div id ="feild1">
                <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '261px'},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Region" variant="outlined"
        value ={region} 
        onChange ={(e)=>setRegion(e.target.value)} 
      />
    
    </Box>

    
    </div>

    <div id ="feild2">
                <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '261px'},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="District" variant="outlined"
       value ={district} 
       onChange ={(e)=>setDistrict(e.target.value)}
      />
    
    </Box>
    </div>

    
    <div id ="feild3">
                <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '261px'},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Street" variant="outlined"
      value={street}
      onChange={(e)=>setStreet(e.target.value)}
      
      />
    
    </Box>
    </div>
    <Map />
    <div id="phone">
    <Box
component="form"
sx={{
'& > :not(style)': { m: 1, width: '400px', 
          display: { xs: 'flex', md: 'flex' },
},
}}
noValidate
autoComplete="off"
>
<TextField id="outlined-basic" label="Phone Number" variant="outlined"

value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

</Box>
</div>
    <Button id ="btn" onClick ={()=>{
      dispatch(addclinic({ id: 1,name,special,region,district, street,phone ,city }))
      history('/PageGet')
    }}>Save</Button>
</FormControl>
 </div>
      </>
  )
}

const Special = [
  'yes', 'no'
];


const citeis = [ 'homs' , 'damascus'
];
const countries = [
    'syria'

];