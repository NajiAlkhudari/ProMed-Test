import { createSlice } from "@reduxjs/toolkit";

export const clinicSlice = createSlice({
  name: 'clinic',
  initialState: {
    clinics: []
  },
  reducers: {
    addclinic: (state, action) => {
      state.clinics.push(action.payload);
    },
    loadClinics: (state, action) => {
        return action.payload;
      },
  }
});

export const { addclinic , loadClinics} = clinicSlice.actions;

export default clinicSlice.reducer;