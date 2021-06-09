import React from 'react'
import {FaSearch} from 'react-icons/fa'
function Search(){

    return(
        <div>
            <form class="form">
                <div className="search-name">
                    <input type="text" placeholder="Search.." className="search-input"/>
                    <button type="submit" className="search-icon"><FaSearch size="22px" /></button>
                </div>
                <div className="birth-date">
                    <label>Birth Date</label><br />
                    <input type="date" placeholder="Choose a Date" className="date" /><br />
                </div>
                <div className="age-range">
                    <label>Age Range</label><br />
                    <select>  
                        <option>Select Age-Range</option>  
                        <option> 15-24 </option>  
                        <option> 25-34 </option>  
                        <option> 35-54 </option>  
                        <option> 55-64 </option> 
                        <option> 65-74 </option>  
                        <option> 75-84 </option>  
                        <option> 85-94 </option> 
                    </select>  <br />
                </div>
                <div className="gender">
                    <label>Gender</label><br />
                    <select>  
                        <option>Select Gender</option>  
                        <option> Male </option>  
                        <option> Female </option>  
                        <option> Other </option>  
                    </select><br/>
                </div>
                <button id="clear">Clear Search</button> <button id="search-button"><FaSearch /> search</button>
            </form>
        </div>
    )
}
export default Search