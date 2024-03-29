import React from 'react';
import './module.scss';
class Header extends React.Component {
	render() {
		return (
			<nav class="fh5co-nav" role="navigation">
				<div class="container-fluid">
					<div class="row">
						<div class="top-menu">
							<div class="container">
								<div class="row">
									<div class="col-sm-7 text-left menu-1">
										<ul>
											<li class="active"><a href="index.html">Home</a></li>
											<li><a href="blog.html">Lifestyle</a></li>
											<li class="has-dropdown">
												<a href="blog.html">Blog</a>
												<ul class="dropdown">
													<li><a href="#">Web Design</a></li>
													<li><a href="#">eCommerce</a></li>
													<li><a href="#">Branding</a></li>
													<li><a href="#">API</a></li>
												</ul>
											</li>
											<li><a href="about.html">About</a></li>
											<li><a href="contact.html">Contact</a></li>
										</ul>
									</div>
									<div class="col-sm-5">
										<ul class="fh5co-social-icons">
											<li><a href="#"><i class="icon-twitter-with-circle"></i></a></li>
											<li><a href="#"><i class="icon-facebook-with-circle"></i></a></li>
											<li><a href="#"><i class="icon-linkedin-with-circle"></i></a></li>
											<li><a href="#"><i class="icon-dribbble-with-circle"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 text-center menu-2">
							<div id="fh5co-logo">
								<h1>
									<a href="index.html">
										Hani.
										<br />
										<small>Diary</small>
									</a>
								</h1>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
