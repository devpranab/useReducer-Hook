// initial state
export const patientState = {
  patients: [],
};

// reducer function
export const reducerPatient = (state, action) => {
  switch (action.type) {
    case "ADD_PATIENT":
      return state;

    case "REMOVE_PATIENT":
      return state;

    default:
      return state;
  }
};