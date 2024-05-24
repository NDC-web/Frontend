import { useState } from "react";
import NewOrderContext from "./newOrderContext";

const NewOrderState = (props) => {

    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedPackage, setSelectedPackage] = useState('');
    const [selectedReason, setSelectedReason] = useState('');

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

    return (
        <NewOrderContext.Provider value={{ selectedLocation, selectedPackage, selectedReason, newOrderLocation, newOrderPackage,newOrderReason }}>
            {props.children}
        </NewOrderContext.Provider>
    )

}
export default NewOrderState;