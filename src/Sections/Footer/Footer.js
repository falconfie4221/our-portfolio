import React from 'react';

export const Footer = () => {

    return(

        <footer class="text-center">
			<div class="container">
				<div class="row">
					<div class="col-md-12 wow zoomIn" data-wow-duration="2s">
						<p>Copyright &copy; 2018 All Rights Reserved By <span>Solo Inc.</span></p>
					</div>
				</div>
			</div>
			
			<a href="#home" id="back-to-top" class="btn btn-yellow btn-back-to-top btn-sm smooth-scroll" title="home" role="button">
				<i class="fa fa-angle-up"></i>
			</a>
			
		</footer>

    );

}