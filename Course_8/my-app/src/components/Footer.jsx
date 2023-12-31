import React from "react";
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import logo from "../assets/Logo/Logo.svg";
import { HashLink } from "react-router-hash-link";

function Footer() {
    return (
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .75 }}
        >
            <Footer>
                <div className="container">
                    <div className="Footer-container">
                        <div className="footer-logo">
                            <Link to="/">
                                <img src={logo} alt="Little Lemon logo" aria-label="On Click" />
                            </Link>
                            <p>&copy; CopyRight 2023 - Little Lemon</p>
                            <p>All right reserved.</p>
                        </div>
                        <div className="footer-section-wrapper">
                            <div className="footer-section section-left">
                                <h5>Contacnt Info</h5>
                                <p>
                                    <a href="tel:1 000-000-0000" className="tel">+1 000-000-0000</a>
                                </p>
                                <p>
                                    VA, Oakton, Virginia,
                                    <br />
                                    Zip: 22124
                                </p>
                            </div>
                            <div className="footer-section">
                                <h5>Follow Us</h5>
                                <ul role="menu" aria-label="social media">
                                    <li>
                                        <Link to="https://www.facebook.com">FaceBook</Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.whatsapp.com">WhatsApp</Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com">Instagram</Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com">LinkedIn</Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.discord.com">Discord</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-section">
                                <h5>Links</h5>
                                <ul role="menu" aria-label="secondary">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/menu">Menu</Link>
                                    </li>
                                    <li>
                                        <HashLink smooth to="/booking#booking">Reservations</HashLink>
                                    </li>
                                    <li>
                                        <Link to="/order-online">Order OnLine</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Footer>
        </m.div>
    );
}

export default Footer;