import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

function ReserveConfirmation({ time, date, guests, occasion }) {
    return (
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {date
          ? (<div className="box">
              <h2>Confirmation Successful</h2>
              <p>
                Thank you for your reservation.
              </p>

              <h4>Time: {time}</h4>
              <h4>Date: {date}</h4>
              <h4>Guests: {guests}</h4>
              <h4>Occasion: {occasion}</h4>

              <Link to="/" className="btn-form">Go back to the homepage</Link>
            </div>)
          : (
            <div className="box">
              <h2>You haven't made Booking a table</h2>
              <p>
                We apologize for the inconvenience.
              </p>
              <Link to="/reservation" className="btn-form">Go To Reservation</Link>
            </div>
          )} 
      </m.div>
    )
}

export default ReserveConfirmation;