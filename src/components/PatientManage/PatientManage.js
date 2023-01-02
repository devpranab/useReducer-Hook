import React, {useReducer, useRef} from 'react';
import { reducerPatient, patientState } from './reducerPatient';

const PatientManage = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(reducerPatient, patientState);
    console.log(state);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        // dispatching
        dispatch({type: "ADD_PATIENT", name: nameRef.current.value, id: state.patients.length+1})
       
        nameRef.current.value = "";
    }

    return (
        <div>
            <h2>Patient Management: {state.patients.length}</h2>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef}></input>
                <input type="submit" />
            </form>

            {
                state.patients.map(patient => <li 
                    key={patient.id}
                    onClick={() => dispatch({type: "REMOVE_PATIENT", id: patient.id})}
                    >{patient.name}</li>)
            }
        </div>
    );
};

export default PatientManage;