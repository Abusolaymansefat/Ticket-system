import React from 'react';
import img from '../../assets/logo-light.png'

const Footer = () => {
        return (
                <div>
                        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                                <img src={img} alt="Logo" className='w-30 h-16' />
                                <p></p>
                                <nav>
                                        <h6 className="footer-title">Company</h6>
                                        <a className="link link-hover">About us</a>
                                        <a className="link link-hover">Our Mission</a>
                                        <a className="link link-hover">Contact Sales</a>

                                </nav>
                                <nav>
                                        <h6 className="footer-title">Services</h6>
                                        <a className="link link-hover">Products & Services</a>
                                        <a className="link link-hover">Customer Stories</a>
                                        <a className="link link-hover">Download Apps</a>
                                </nav>
                                <nav>
                                        <h6 className="footer-title">Information</h6>
                                        <a className="link link-hover">Terms of use</a>
                                        <a className="link link-hover">Privacy policy</a>
                                        <a className="link link-hover">Join Us</a>
                                </nav>
                                <nav>
                                        <h6 className="footer-title">Social Links</h6>
                                        <a className="link link-hover">Facebook</a>
                                        <a className="link link-hover">Twitter</a>
                                        <a className="link link-hover">LinkedIn</a>
                                </nav>


                        </footer>
                        {/* Copyright */}
                        <p className="text-center py-4 border-t border-base-300">
                                Copyright © {new Date().getFullYear()} - All rights reserved
                        </p>
                </div>


        );
};

export default Footer;