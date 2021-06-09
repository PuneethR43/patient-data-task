import React from 'react'
import './main.css'
function PatientView(props){
    console.log(props)
    return(
        <div className="details">
            <h4>Family Name:{' '} {(props) && props.user.name.family}</h4> 
            <h4>Given:{' '} {(props) && props.user.name.given}</h4>
            <h4>Gender:{' '}{(props) && props.user.gender}</h4>
            <h4>Age:{' '}{(props) && props.user.age}</h4>
            <h4>Birth Date:{' '} {(props) && props.user.birthDate}</h4>
            <h4>Address:{' '} {(props) && props.user.address.line}, {(props.user.address.city) && props.user.address.city}, {(props.user.address.country) && props.user.address.country} </h4>
            <h4>Telecom:{' '} {(props) && props.user.telecom.value}</h4>
            <h4>Organization:{' '} {(props) && props.user.managingOrganization.display}</h4>
            <h4>Practitioner ID: -</h4>
            <h4>Practitioner Role: -</h4>
            <h4>Created/Modified at:{' '} {(props) && props.user.lastUpdated}</h4>
            <h4>InteropX Id:{' '} {(props) && props.user.valueString}</h4>
            <h4>Identifier:{' '} {(props) && props.user.id}</h4>
            </div>
    )
}

export default PatientView