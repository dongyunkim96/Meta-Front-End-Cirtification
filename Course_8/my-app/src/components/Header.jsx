import React from "react";
import { Link } from "react-router-dom";
import { motion as m} from "framer-motion";
import heroIMG from "../assets/image/restauranfood.jpg";

function Headers() {
    return (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
            <header>
                <div className="container">
                    <div className="header-container">
                        <div className="header-text">
                            <h1>Little Lemon Restaurant</h1>
                            <h4>Oakton, Virginia</h4>
                            <p className="header-paragraph">
                                We are family owned Mediterranean Restaurant, focused on traditional recipes served with a modern twist.
                            </p>
                            <Link className="btn btn-primary" to="/reservation">
                                Reserve a Table
                            </Link>
                        </div>
                        <div className="hero-img">
                            <img
                              src={heroIMG}
                              alt="Little Lemon Chef"
                              className="header-img"
                            />
                            <p>Simple, But Characteristic...</p>
                        </div>
                    </div>
                </div>
            </header>
        </m.div>
    );
}

export default Headers;