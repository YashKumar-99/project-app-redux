import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modelStatus: true,
}

const modelSlice = createSlice({

    name: 'model',
    initialState,
    reducers: {
        MangeModel: (state, action) => {
            let Status = action.payload
            if (Status === true) {
                state.modelStatus = false;
            }
            if (Status === false) {
                state.modelStatus = true;
            }
        },
    }
})

export const { MangeModel } = modelSlice.actions;


export default modelSlice.reducer;