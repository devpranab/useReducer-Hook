import './App.css';
import ReducerCount from './components/ReducerCount/ReducerCount';
import PatientManage from './components/PatientManage/PatientManage';

function App() {
  return (
    <div className="App">
      <ReducerCount/>
      <hr />
      <PatientManage/>
    </div>
  );
}

export default App;