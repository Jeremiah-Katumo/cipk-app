import React from 'react';
import '../../public/assets/css/main.css';
import NavbarLinks from './NavbarLinks';
// import HesDepartment from '../body/HesDepartment';
// import CmDepartment from '../body/CmDepartment';


const Navigation = () => {

    return (
        <nav id="navbar" className="navbar">
            
            <ul>
                <li><NavbarLinks link={'/'} title={"Home"} /></li>
                <li><NavbarLinks link={'#about'} title={'About'} /></li>
                <li><NavbarLinks link={'#team'} title={"Team"} /></li>
                <li className="dropdown"><NavbarLinks link={'#departments'} title={"Approaches"} />
                    <ul>
                        <li><NavbarLinks link={'/socio-economic'} title={"Socio-Economic Empowerments and Livelihoods"} /></li>
                        <li><NavbarLinks link={'/inclusive-gov'} title={"Inclusive Governance"} /></li>
                        <li><NavbarLinks link={'/peace-building'} title={"Peace Building"} /></li>
                        <li><NavbarLinks link={'/health-care'} title={"Health Care"} /></li>
                        <li><NavbarLinks link={'/capacity-building'} title={"Capacity Building"} /></li>
                    </ul>
                </li>
                <li className="dropdown"><NavbarLinks link={"#career"} title={<span>Careers</span>}><i className="bi bi-chevron-down dropdown-indicator"></i></NavbarLinks>
                    <ul>
                        <li><NavbarLinks link={'/internships'} title={"Internships"} /></li>
                        <li><NavbarLinks link={'/jobs'} title={"Job Opportunities"} /></li>
                    </ul>
                </li>
                <li><NavbarLinks link={'#gallery'} title={"Gallery"} /></li>
                <li><NavbarLinks link={'#contact'} title={"Contact"} /></li>
                <li className="dropdown"><NavbarLinks link={"#media"} title={<span>Media</span>}><i className="bi bi-chevron-down dropdown-indicator"></i></NavbarLinks>
                    <ul>
                        {/* <li><NavbarLinks link={'/newsletters'} title={"Newsletters"} /></li>
                        <li><NavbarLinks link={'/blogs'} title={"Blogs"} /></li> */}
                        <li><NavbarLinks link={'/downloads'} title={'Downloads'} /></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;