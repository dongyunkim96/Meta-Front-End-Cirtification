import { useReducer, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ReservationPage from '../pages/ReservationPage';
import ReserveConfirmation from './reservations/ReserveConfirmation';
import ReserveForm from './reservations/ReserveForm';
import { initializeTimes, updateTimes } from "../utils";

export default function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const [formData, setFormData] = useState();
    const submitForm = (formData) => {
        window.submitAPI(formData);
        setFormData(formData);
    };

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/reservation' element={<ReservationPage />}>
                <Route index element={<ReserveForm submitForm={submitForm} availableTimes={availableTimes} dispatch={dispatch} />} />
                <Route path='/reservation/confirmation' element={<ReserveConfirmation {...formData} />} />
            </Route>
        </Routes>
    )
}