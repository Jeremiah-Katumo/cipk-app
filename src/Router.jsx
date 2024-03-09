import React from 'react';
import { 
    BrowserRouter, 
    Routes,  
    Route } from 'react-router-dom';
import SocioEconomic from './components/body/thematic/SocioEconomic';
import InclusiveGovernance from './components/body/thematic/InclusiveGov';
// import Departments from './components/body/Department';
// import App from './App';
import Home from './Home';
import RootLayout from './RootLayout';
import About from './components/body/About';
import Team from './components/body/Team';
import { Portfolio } from './components/body/Portfolio';
import Contact from './components/body/Contact';
import Internships from './components/body/Internships';
import Jobs from './components/body/Jobs';
import Application from './components/body/Applications';
import BlogsPage from './components/body/Blogs';
import BlogsDetailsPage from './components/body/BlogsDetails';
import Newsletters from './components/body/Newsletters';
import Downloads from './components/body/Downloads';
import ImageDetails from './components/body/Gallery';
import Register from './components/body/Register';
// import { useGlobalContext } from './context/GlobalContext';
import Login from './components/body/Login';
import PeaceBuilding from './components/body/thematic/PeaceBuilding';
import HealthCare from './components/body/thematic/HealthCare';
import CapacityBuilding from './components/body/thematic/CapacityBuilding';
// import Departments from './components/body/Department';


const Router = () => {
    // const router = createBrowserRouter(
    //     createRoutesFromChildren(
    //         <Route path='/' element={<RootLayout />}>
    //             <Route path='/' element={<App />} />
    //             <Route path='#about' element={<About />} />
    //             <Route path='/team' element={<Team />} />
    //             <Route path='departments' element={<HesDepartment />}>
    //                 <Route path='hes' element={<HesDepartment />} />
    //                 <Route path='cm' element={<CmDepartment />} />
    //             </Route>
    //             <Route path='/careers' element={<Team />} />
    //             <Route path='#gallery' element={<Portfolio />} />
    //             <Route path='/contact' element={<Contact />} />
    //         </Route>
    //     )
    // )
    // const { user } = useGlobalContext();

    return (
        // <RouterProvider router={router} />
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RootLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='#about' element={<About />} />
                    <Route path='/team' element={<Team />} />
                    
                    <Route path='/socio-economic' element={<SocioEconomic />} />
                    <Route path='/inclusive-gov' element={<InclusiveGovernance />} />
                    <Route path='/peace-building' element={<PeaceBuilding />} />
                    <Route path='/health-care' element={<HealthCare />} />
                    <Route path='/capacity-building' element={<CapacityBuilding />} />
                    <Route path='/internships' element={<Internships />} />
                    <Route path='/jobs' element={<Jobs />} />
                    <Route path='/apply' element={<Application />} />
                    <Route path='/blogs' element={<BlogsPage />} />
                    <Route path='/blogdetails' element={<BlogsDetailsPage />} />
                    <Route path='/newsletters' element={<Newsletters />} />
                    <Route path='/downloads' element={<Downloads />} />
                    <Route path='/image-details' element={<ImageDetails />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    {/* <Route path='departments' element={<Departments />} /> */}
                    
                    <Route path='/careers' element={<Team />} />
                    <Route path='#gallery' element={<Portfolio />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router;