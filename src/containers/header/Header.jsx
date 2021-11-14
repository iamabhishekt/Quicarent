import React from 'react';
import './header.css';
import ford1 from '../../assets/ford1.png';
//import lamborghini1 from '../../assets/lamborghini1.png';

const Header = () => {
    return (
        <div className="quicarent__header section__padding" id="home">
            <div className="quicarent__header-content">
                <div className="app-container">
                <table>
                    <thead>
                        <tr>
                            <th>VIN</th>
                            <td>4Y1SL65848Z411439</td>
                        </tr>
                        <tr>
                            <th>Model</th>
                            <td>Ford Mustang GT</td>
                        </tr>
                        <tr>
                            <th>Year</th>
                            <td>2015</td>
                        </tr>
                        <tr>
                            <th>Rental Owner</th>
                            <td>Abhishek</td>
                        </tr>
                        <tr>
                            <th>Last Servicing</th>
                            <td>10/15/2021</td>
                        </tr>
                    </thead>
                </table> 
                </div>
                
            </div>
                
                <div className="quicarent__header-image">
                    <img src={ford1} alt="ford mastang" />
                </div>
            
        </div>
    )
}

export default Header
