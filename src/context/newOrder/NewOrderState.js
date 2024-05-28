import { useState } from "react";
import NewOrderContext from "./newOrderContext";

const NewOrderState = (props) => {

    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedPackage, setSelectedPackage] = useState('');
    const [selectedReason, setSelectedReason] = useState('');
    const [navbarStatus, setNavbarStatus] = useState({ a: false, b: true, c: true, d: true, e: true })
    const [navbarCompleted, setNavbarCompleted] = useState({ a: false, b: false, c: false, d: false, e: false })
    const [participantInformation, setParticipantInformation] = useState({
        FirstName: '',
        MiddleName: '',
        LastName: '',
        SSN: '',
        Phone1: '',
        Phone2: '',
        LocationCode: '',
        Address: '',
        Address2: '',
        City: '',
        State: '',
        Zip: '',
        Email: '',
        CC: '',
    })

    const newOrderLocation = (event) => {
        setSelectedLocation(event);
        setSelectedPackage('');
        setSelectedReason('');
    };

    const newOrderPackage = (event) => {
        setSelectedPackage(event);
        setSelectedReason('');
    };

    const newOrderReason = (event) => {
        setSelectedReason(event);
    };



    const HandleNavbarStaus = (a) => {
        if (a === 1) {
            setNavbarStatus({ a: false, b: true, c: true, d: true, e: true })
        }
        if (a === 2) {
            setNavbarStatus({ a: false, b: false, c: true, d: true, e: true })
        }
        if (a === 3) {
            setNavbarStatus({ a: false, b: false, c: false, d: true, e: true })
        }
        if (a === 4) {
            setNavbarStatus({ a: false, b: false, c: false, d: false, e: true })
        }
        if (a === 5) {
            setNavbarStatus({ a: false, b: false, c: false, d: false, e: false })
        }
    }


    const HandlenavbarCompleted = (a) => {
        if (a === 0) {
            setNavbarCompleted({ a: false, b: false, c: false, d: false, e: false })
        }
        if (a === 1) {
            setNavbarCompleted({ a: true, b: false, c: false, d: false, e: false })
        }
        if (a === 2) {
            setNavbarCompleted({ a: true, b: true, c: false, d: false, e: false })
        }
        if (a === 3) {
            setNavbarCompleted({ a: true, b: true, c: true, d: false, e: false })
        }
        if (a === 4) {
            setNavbarCompleted({ a: true, b: true, c: true, d: true, e: false })
        }
        if (a === 5) {
            setNavbarCompleted({ a: true, b: true, c: true, d: true, e: true })
        }
    }

    const [reload, setReload] = useState(false)

    return (
        <NewOrderContext.Provider value={{ selectedLocation, selectedPackage, selectedReason, navbarStatus, navbarCompleted, participantInformation,reload, newOrderLocation, newOrderPackage, newOrderReason, HandleNavbarStaus, HandlenavbarCompleted, setParticipantInformation,setReload }}>
            {props.children}
        </NewOrderContext.Provider>
    )

}
export default NewOrderState;