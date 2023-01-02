import React, {useReducer} from 'react';
import { reducerPatient, patientState } from './reducerPatient';

const PatientManage = () => {
    const [state, dispatch] = useReducer(reducerPatient, patientState);
    console.log(state);
    return (
        <div>
            <h2>Patient Management: {state.patients.length}</h2>
            <form action="">
                <input type="text" />
            </form>
        </div>
    );
};

export default PatientManage;