import React, {useState} from "react"
import Data from "./data/patients.json"
import PatientView from "./PatientView"

import "./main.css"
import Search from "./search"

function Patients() {
    const [patient, setPatient] = useState(null)
    const handleClick = (ele) =>{
    setPatient(ele)
    }
  return (
    <div className="list">
        <div>
        <Search />
        </div>
        <table className="table">
            <thead className="table-head">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody className="table-row">
            {
                Data.map((ele)=>{
                    return (
                        <tr onClick={()=>handleClick(ele)}>
                            <td> {ele.name.family} </td>
                            <td> {ele.age} </td>
                            <td> {ele.gender} </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        <div className="view">
            {(patient)&&<PatientView user={patient} />}
        </div>
    </div>
  )
}

export default Patients
