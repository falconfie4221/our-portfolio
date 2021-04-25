import React from 'react';

export const Client = () => {

    return(

        <section id="clients">

        <div class="content-box-sm">
            
            <div class="container">
                
                <div class="row">
                    
                    <div class="col-md-12">
                        
                        <div class="hori-heading text-center">
                            <h5>Satisfied Clients</h5>
                            <h2 style="margin-left: 30px">Our Happy <strong><b>Clients</b></strong></h2>
                        </div>
                        
                    </div>
                    
                </div>
                
                <div class="row wow bounceInLeft" data-wow-duration="2s" data-wow-delay=".5s">
                    
                    <div class="col-md-12">
                        
                        <div id="clients-list" class="owl-theme owl-carousel">
                            
                            <div class="client">
                                <img src="img/client/client-1.png" class="img-responsive" alt="client" />
                            </div>

                            <div class="client">
                                <img src="img/client/client-2.png" class="img-responsive" alt="client" />
                            </div>

                            <div class="client">
                                <img src="img/client/client-3.png" class="img-responsive" alt="client" />
                            </div>

                            <div class="client">
                                <img src="img/client/client-4.png" class="img-responsive" alt="client" />
                            </div>

                            <div class="client">
                                <img src="img/client/client-5.png" class="img-responsive" alt="client" />
                            </div>

                            <div class="client">
                                <img src="img/client/client-6.png" class="img-responsive" alt="client" />
                            </div>

                            <div class="client">
                                <img src="img/client/client-7.png" class="img-responsive" alt="client" />
                            </div>

                            <div class="client">
                                <img src="img/client/client-8.png" class="img-responsive" alt="client" />
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </section>	

    );

}