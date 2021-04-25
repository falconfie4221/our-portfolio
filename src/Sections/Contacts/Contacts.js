import React from 'react';

export const Contacts = () => {

    return(

        <section class="page-section" id="contact">

        <div class="content-box-md">
            
            <div class="container">
                
                <div class="row">
                    
                    <div class="col-md-6 wow fadeInDownBig" data-wow-duration="3s">
                        
                        <div id="left-con">
                            
                            <div class="vertical-heading">
                                <h5>Who We Are</h5>
                                <h2 style="margin-left: 30px">Get<br />In <strong><b>Touch</b></strong></h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam labore velit doloremque blanditiis corporis doloribus eligendi aliquam ex.
                            </p>
                            
                            <div id="offices">
                                
                                <div class="row">
                                    <div class="col-md-6">
                                        
                                        <div class="office">
                                            <h4>Pakistan</h4>
                                            <ul class="office-details">
                                                <li><i class="fa fa-mobile"></i>+(92) 32 65 33 03</li>
                                                <li><i class="fa fa-envelope-o"></i>supportgeb@gmail.com</li>
                                                <li><i class="fa fa-map-marker"></i><span>Akbar Chowk Street<br />Lahore, Pakistan.</span></li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                    <div class="col-md-6">
                                        
                                        <div class="office">
                                            <h4>Pakistan</h4>
                                            <ul class="office-details">
                                                <li><i class="fa fa-mobile"></i>+(92) 39 60 43 13</li>
                                                <li><i class="fa fa-envelope-o"></i>supportgeb@gmail.com</li>
                                                <li><i class="fa fa-map-marker"></i><span>Sharaqpur Street<br />Sharaqpur, pakistan.</span></li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <ul class="social-list">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            </ul>
                            
                        </div>
                        
                    </div>
                    <div class="col-md-6 wow fadeInRightBig" data-wow-duration="3s">
                        
                        <div id="right-con">
                            
                            <form>
                                
                                <h4>Send Massage</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, Corporis.</p>
                                
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="name" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="email" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="phone" placeholder="Phone no." />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject" />
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div class="form-group">
                                    <textarea class="form-control" id="message" placeholder="Message"></textarea>
                                </div>
                                
                                <div id="submit-btn">
                                    <a class="btn btn-general btn-yellow" title="Submit" href="#" role="button">Submit</a>
                                </div>
                                
                            </form>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </section>	

    );

}