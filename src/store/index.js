import { configureStore } from "@reduxjs/toolkit";
import clinics from './clinicSlice';




export default configureStore({
    reducer :{
        clinics,

    },
});