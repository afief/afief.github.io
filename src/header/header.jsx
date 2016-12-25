import React, {Component} from 'react';
import './header.scss';

import IMGMe from './me.jpg';
	
class Header extends Component {
	render() {
		return <section className="hero is-primary is-medium header" id="section-header">

			<div className="hero-body">
				<div className="container has-text-centered">
					<figure className="image is-128x128">
						<img src={IMGMe}/>
					</figure>
					<h1 className="title">
						Afief Yona Ramadhana
					</h1>
					<h2 className="subtitle">
						Web & Mobile Developer
					</h2>
				</div>
			</div>

		</section>
	}
}

export default Header;