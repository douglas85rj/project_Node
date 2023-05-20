import React from "react";
import styled from "styled-components";

import {FaTrash,FaEdit} from "react-icons/fa";


import '../settingStyle/employeeGrid.css';


const Table = styled.table`
    width : 100%;
    background-color: #d3d3d3;
    padding: 10px;   

`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;    
    padding-bottom: 5px;
    
`;

export const Tbody = styled.body``;

export const Td = styled.td`       
    padding-top: 15px;
    text-align: center;
    width: auto;
`;

const Grid = ({ employees }, {setOnEdit}) => {
    return (
      <div className="employee-grid">
        {employees.map(employee => (
          <div className="employee" key={employee.id}>
            <p>Name: {employee.name}</p>
            <p>Email: {employee.email}</p>
            <p>Department: {employee.department}</p>
            <p>Age: {employee.age}</p>
            <div className="icon-container">
                <FaEdit className="edit-icon"  
                  onClick={() => setOnEdit(employee.id)}
                  
                 />
                <FaTrash className="delete-icon" />
            </div>
          </div>          
        ))}
      </div>
      
    );
  };


export default Grid;

