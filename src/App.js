
import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
// import ListEmployeeComponent from "./component/ListEmployeeComponent";
// import HeaderComponent from './component/HeaderComponent';
// import FooterComponent from './component/FooterComponent';
// import CreateEmployeeComponent from './component/CreateEmployeeComponent';
// import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';
import SearchStudentComponent from './component/SearchStudentComponent';
function App() {
  return (
    <div>
    <Router>
         {/* <HeaderComponent/>  */}
          <div className="container">
            <Switch>
            {/* <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route> */}
            {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route> */}
            <Route path="/" exact component={SearchStudentComponent}></Route>
            </Switch>  
          </div>
        {/* <FooterComponent/> */}
    </Router>  
    </div>
    
  );
}

export default App;
