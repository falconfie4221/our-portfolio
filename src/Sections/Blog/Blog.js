import React from 'react';

export const Blog = () => {

    return(

        <section class="page-section" id="blog">

        <div class="content-box-md">
            
            <div class="container">
                
                <div class="row">
                    
                    <div class="col-md-5 blog-left wow slideInLeft" data-wow-duration="2s">
                    
                        <div class="vertical-heading">
                            <h5>Latest News</h5>
                            <h2 style="margin-left: 30px">Latest <br />From<strong><b> Blog</b></strong></h2>
                        </div>
                        <p>
                            The simplest way to filter items is with selectors, like classes. For example, each item element can have several identifying classes.
                        </p>
                        <div id="blog-btn">
                            <a class="btn btn-general btn-yellow" href="#" role="button" title="View All Posts">View All Posts</a>
                        </div>
                        
                    </div>
                    <div class="col-md-7">
                        
                        <div class="row wow fadeInUp" data-wow-duration="3s">
                            
                            <div class="col-md-6">
                                
                                <div class="blog-post">
                                    
                                    <h4>Your Post Title</h4>
                                    <p class="para">Tibetan refugee who came over to India before the 1st January. 1962, with the intention of permanently settling in India</p>
                                    <a href="#">Read More </a>
                                    
                                    <div class="post-meta">
                                        <div class="row imgg">
                                            
                                            <div class="col-md-6 col-sm-5 col-4">
                                                <p><img src="img/blog/user-1.jpg" alt="author" class="img-responsive img-circle" />Robert Storm</p>
                                            </div>

                                            <div class="col-md-6 date col-sm-7 col-8">
                                                <p>January 31,2018</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div class="col-md-6">
                                
                                <div class="blog-post">
                                    
                                    <h4>Your Post Title</h4>
                                    <p class="para">Tibetan refugee who came over to India before the 1st January. 1962, with the intention of permanently settling in India</p>
                                    <a href="#">Read More </a>
                                    
                                    <div class="post-meta">
                                        <div class="row imgg">
                                            
                                            <div class="col-md-6 col-sm-5 col-4">
                                                <p><img src="img/blog/user-2.jpg" alt="author" class="img-responsive img-circle" />William David</p>
                                            </div>

                                            <div class="col-md-6 date col-sm-7 col-8">
                                                <p>January 13,2018</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </section>	

    );

}