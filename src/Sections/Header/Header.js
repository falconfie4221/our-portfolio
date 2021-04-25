import React from 'react';

export const Header = () => {

    return(

        <header>
      
        <div class="fixed-top" id="nnav">
        <nav class="navwrap">
        
            <div class="container-fluid container">
            
                <div class="site-nav-wrapper">
                    
                    <div class="row">
                        
                        <div class="col-md-5 text-left">

                            <div class="navbar-header">
                            

                                    <span id="mobile-nav-open-btn">&#9776;</span>
                            
                                <a class="navbar-brand smooth-scroll" href="#home">
                                    <img src="img/logo/logo.png" alt="logo" />
                                </a>

                            </div>

                        </div>
                        
                        <div class="col-md-7 text-right list-div">
    
                            <ul class="nav-list">
                                <li><a class="active smooth-scroll" href="#home">Home</a></li>
                                <li><a class="smooth-scroll" href="#about">About</a></li>
                                <li><a class="smooth-scroll" href="#team">Team</a></li>
                                <li><a class="smooth-scroll" href="#services">Services</a></li>
                                <li><a class="smooth-scroll" href="#portfolio">Portfolio</a></li>
                                <li><a class="smooth-scroll" href="#blog">Blog</a></li>
                                <li><a class="smooth-scroll" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                            
                    </div>
                    
                        <div id="mobile-nav">
                            <span id="mobile-nav-close-btn">&times;</span>
                            <div id="mobile-nav-content">
                                
                                <ul class="nav nnnn">
                                    <li><a class="active smooth-scroll" href="#home">Home</a></li>
                                    <li><a class="smooth-scroll" href="#about">About</a></li>
                                    <li><a class="smooth-scroll" href="#team">Team</a></li>
                                    <li><a class="smooth-scroll" href="#services">Services</a></li>
                                    <li><a class="smooth-scroll" href="#portfolio">Portfolio</a></li>
                                    <li><a class="smooth-scroll" href="#blog">Blog</a></li>
                                    <li><a class="smooth-scroll" href="#contact">Contact</a></li>
                                </ul>
                                
                            </div>
                        </div>
                    
                </div>
            
            </div>
        
        </nav>
        </div>
    </header>

    );

}