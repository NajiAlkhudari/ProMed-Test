import React , {useEffect} from 'react'
import AppBar from './components/Header/AppBar';
import { useSelector, useDispatch } from 'react-redux';
import {  loadClinics } from "./store/clinicSlice";
import Photo from './components/assets/Photo.png'
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import profile from './profile.css'



export const PageGet = () => {
  const clinics =useSelector((state)=>state.clinics.clinics)


    const dispatch=useDispatch();
   
    useEffect(() => {

      // Dispatch the setData action to update the store
      dispatch(loadClinics());
    }, [dispatch]);
     
  const obj = {};

  return (

    <>

     <div>
      <AppBar />
    </div>
    <div id="all">
<div id="img">
    <Box m={0}  />
          <Box sx={{ flexGrow: 0 }}>
              <IconButton  sx={{ p: 0 ,md: 'flex' }}>
                <Avatar alt="" src={Photo}
                style={{
                  width: "144px",
                  height:"144px"
                }}
                      />
              </IconButton>
          </Box>
          </div>
          <div id="line">
            <a>Dr. Ahmed Khaled</a>
          </div>
          <div id ="line2">
            <a>Dentist</a>
          </div>
          <div id="line3">
            <a>My Clinics</a>
          </div>
          </div>
    <div id="data">
      {clinics?.map((clinic) => (
        <div key={clinic.id}>
          <p>{clinic.name}</p>
          <p>{clinic.region}</p>
          <p>{clinic.street}</p>
          <p>{clinic.counrt}</p>
          <p>{clinic.city}</p>
          <p>{clinic.district}</p>
          <p>{clinic.phone}</p>
          <p>{clinic.special}</p>

          
        </div>
      ))}
    </div>
   
    </>
  )
}
