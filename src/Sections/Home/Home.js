import React from 'react';

export const Home = () => {

    return(

        <section class="page-section hero" id="home">
		
            <video id="vid1" poster="video/solo.jpg" autoplay loop muted>
                <source src="video/solo.mp4" type="video/mp4" />
                <source src="video/solo.ogv" type="video/ogg" />
            </video>
        
            <div id="over-ly"></div>
            
            <div id="home-con" class="text-center"> 

                <div id="home-con-inner" class="wow rotateOut" data-wow-duration="3s">
                    
                    <div id="home-heading">
                        <h1 id="home-heading-1">Digital</h1><br />
                        <h1 id="home-heading-2">Creative <span>Agency</span></h1>
                    </div>
                    
                    <div id="home-para">
                        <p>
                            This website will provide all the digital services like digital marketing.More beneficial
                            site for buisness people.
                        </p>
                    </div>
                    
                    <div id="home-btn">
                        <a class="btn btn-general btn-home smooth-scroll" title="Start Now" href="#about" role="button">Start Now</a>
                    </div>
                    
                </div>
                
            </div>

            <a href="#about" id="arrow-down" class="smooth-scroll wow slideOutDown" data-wow-duration="2s">
                <i class="fa fa-angle-down"></i>
            </a>			

        </section>

    );

}