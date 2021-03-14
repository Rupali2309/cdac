import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            employee:[]
        }
        this.addEmployee=this.addEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
        this.deleteEmployee=this.deleteEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employee:res.data});
        });
    }
    addEmployee(){
        this.props.history.push('/add-employee/-1');
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }
    deleteEmployee(id){
       EmployeeService.deleteEmployee(id).then( res=>{
            this.setState({employee:this.state.employee.filter(employee=>employee.id!==id)});
       });
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table">
                        <thead>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email ID</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {
                              this.state.employee.map(
                                  employee=>
                                  <tr key={employee.id}>
                                      <td>{employee.firstname}</td>
                                      <td>{employee.lastname}</td>
                                      <td>{employee.email}</td>
                                      <td><button style={{marginRight:"10px"}} onClick={()=>this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                      <button onClick={()=>this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                      </td>
                                  </tr>
                              )  
                                
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;
