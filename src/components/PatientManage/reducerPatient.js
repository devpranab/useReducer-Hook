// initial state
export const patientState = {
    patients: []
}

// reducer function
export const reducerPatient = (state, action) => {
    switch (action.type){
        case "ADD_PATIENT":
            const newPatient = {
                id: action.id,
                name: action.name,
            }
            const allPatients = [...state.patients, newPatient]
            return {patients: allPatients};

        case "REMOVE_PATIENT":
            //console.log(action);
            const remaining = state.patients.filter(patient => patient.id !== action.id);
            const newState = {patients: remaining}
            return newState;

        default:
            return state;
    }
}