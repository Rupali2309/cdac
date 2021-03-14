import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";


class SearchStudentComponent extends Component{

   


    render(){
        
          return (
            
                <div className="mt-5 ">
        <div>
                <div className="container-fluid">
                  <div className="row" style={{height:"50px",border:"1px solid"}}>
                    <div className="col-md-2 ">
                      </div>  
                      <div className="col-md-6">
                        </div>   
                        <div className="col-md-4">
                    
              <button className="btn btn-primary btn-sm mt-2" style={{marginLeft:"95px"}}>Hi.name</button>
              <button className="btn btn-primary btn-sm mt-2" style={{marginLeft:"140px"}}>Logout</button>
                          
                          
                          </div>     
                      </div> 
                  
                  <div className="row">
             
                 <div className="col-md-12 bg-light d-flex justify-content-center align-items-center" style={{height:"150px",border:"1px solid"}}>
                    <p style={{fontSize:"25px"}}><b>Thought:&nbsp;&nbsp;</b></p>
                      <p className="ml-3 rounded text-secondary" style={{fontSize:"20px"}}><b>Diamonds are formed under pressure,but never forget they are not formed overnight</b></p>
                  
          
                                       
                </div>
          
          </div>
        </div>
        
        
        </div>
        
                    <div className="  ml-5 mt-3 ">
                <button type="button" class="bg-light text-danger">Star performer and marks</button></div>
                <div className="container-fluid -field-container">
                  <div className="row d-flex justify-content-around">
                    <div className="col-3 p-2 mr-3 ml-3 div-border student-field bg-light">
                      <Form>
                        <Form.Group>
                            <label>You are on Step No</label>
                            <input type="number" className="form-control" id="1" />
                            <label>Aptitude Marks</label>
                            <input type="number" className="form-control" id="1" />
                            </Form.Group>
                            </Form>
                            </div>
                            
                            
                                   
               <div className="col-3 mr-3 ml-3 student-field div-border middle bg-light">
                 <div>
                 <Form>
                   <Form.Group>
                    
                      <label>Student Name</label>
                            <input type="text" className="form-control" id="1" />
                            <label>Student Rollno</label>
                            <input type="number" className="form-control" id="1" />
        
                            <Form.Control
                        className="my-2"
                        as="select"
                        id="inlineFormCustomSelectPref"
                        custom
                      >
                        <option>Select Subject</option>
                        <option value="1">Basic Fundamentals</option>
                        <option value="2">Operating Systems</option>
                        <option value="3">Core Java</option>
                        <option value="4">Data Structure</option>
                        <option value="5">Database</option>
                        <option value="6">Software Engineering</option>
                        <option value="7">Web Technology</option>
                        <option value="8">Advance Java</option>
                      
                      </Form.Control>
                      
                              
                   <label>Subject Marks</label>
                            <input type="text" className="form-control" id="1" />
                            <label>Subject Rank</label>
                            <input type="number" className="form-control" id="1" />
        
                     </Form.Group>
                   </Form>
                 </div>
        </div>  
                  
        <div className="col-4 div-border px-2 student-field bg-light">
                   <div>
                    <button type="button" class="bg-danger text-light mb-2">Graph</button>
                      </div> 
                      <div>
                      <button type="button" class="bg-danger text-light mb-2">Feedback</button></div>
        
                  <div className="notice bg-secondary h-100 w-100 ">
                    
                    <Button className="notice-button" variant="secondary"> Notice</Button>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                     
                 
            );
          }
         

}

export default SearchStudentComponent;