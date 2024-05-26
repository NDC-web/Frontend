import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../../index.css'
import newOrderContext from '../../../context/newOrder/newOrderContext';

const DisabledLink = ({ children, className }) => (
    <span className={`${className} disabled`} aria-disabled="false">
        {children}
    </span>
);

const Navigation = () => {

    const context = useContext(newOrderContext);
    const { navbarStatus,navbarCompleted }  = context;
    const steps = [
        { label: 'Step 1: Order Information', link: '/account/orderDotDrugTest/', completed: navbarCompleted.a, disable: navbarStatus.a },
        { label: 'Step 2: Participant Information', link: '/account/orderDotDrugTest/participantInformation', completed: navbarCompleted.b, disable: navbarStatus.b },
        { label: 'Step 3: Choose Collection Site', link: '/account/orderDotDrugTest/collectionSite', completed: navbarCompleted.c, disable: navbarStatus.c },
        { label: 'Step 4: Submit Order', link: '/account/orderDotDrugTest/submitOrder', completed: navbarCompleted.d, disable: navbarStatus.d },
        { label: 'View Donor Pass', link: '/account/orderDotDrugTest/viewDonorPass', completed: navbarCompleted.e, disable: navbarStatus.e }
    ];

    return (
        <div style={{display:'flex', justifyContent:'center', marginBottom:'20px', marginTop:'10px'}}>

        
        <div className="btn-group mt-5 mb-2" role="group" aria-label="Basic outlined example">
            {steps.map((step, index) => (
                !step.disable ? (
                    <Link
                        key={index}
                        type="button"
                        to={step.link}
                        className={`btn btn-outline-secondary ${step.completed ? 'completed' : ''}`}

                    >
                        {step.completed && <i className="fas fa-check-circle"></i>} {step.label}
                    </Link>
                ) : (
                    <DisabledLink key={index} className="btn btn-outline-secondary">
                        {step.label}
                    </DisabledLink>
                )
            ))}
        </div>
        </div>
    );
};

export default Navigation;
