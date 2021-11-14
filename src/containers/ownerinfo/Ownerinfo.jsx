import React from 'react';
import './ownerinfo.css';
import man from '../../assets/man.png';
//import lamborghini1 from '../../assets/lamborghini1.png';

const Ownerinfo = () => {
    return (
        <div className="quicarent__owner section__padding" id="ownerinfo">
            <div className="quicarent__owner-image">
                    <img src={man} alt="man" />
                </div>
            <div className="quicarent__owner-content">
                <h1 className="gradient__text"></h1>
                <div className="app-container">
                <table>
                    <thead>
                        <tr>
                            <th>Owner Name</th>
                            <td>Kaustubh</td>
                        </tr>
                        <tr>
                            <th>Registered on</th>
                            <td>01/19/2000</td>
                        </tr>
                        <tr>
                            <th>Plan</th>
                            <td>Silver</td>
                        </tr>
                        <tr>
                            <th>Outstanding balanace</th>
                            <td>970</td>
                        </tr>
                        <tr>
                            <th>Advance Paid</th>
                            <td>530</td>
                        </tr>
                        <tr>
                            <th>Miles covered</th>
                            <td>2000</td>
                        </tr>
                        <tr>
                            <th>Days covered</th>
                            <td>345</td>
                        </tr>
                        <tr>
                            <th>Current Location</th>
                            <td>Miami</td>
                        </tr>
                    </thead>
                </table> 
                </div>
                
            </div>

            
            
        </div>
    )
}

export default Ownerinfo
