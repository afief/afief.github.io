import React, {Component} from 'react';
import './navigation.scss';

import jump from 'jump.js'

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.maxTop = 1000;
		this.state = {
			current: 'header'
		}

		this.onScroll = this.onScroll.bind(this);
		this.isCurrent = this.isCurrent.bind(this);
	}
	
	componentDidMount() {
		//console.log('mount scroll');		

		/* set maximum top position */
		this.maxTop = getOffsetTop(this.refs.nav);
		function getOffsetTop( elem ) {
			var offsetTop = 0;
			do {
				if ( !isNaN( elem.offsetTop ) )
				{
					offsetTop += elem.offsetTop;
				}
			} while( elem = elem.offsetParent );
			return offsetTop;
		}
		window.addEventListener('scroll', this.onScroll);
	}
	componentWillUnmount() {
		//console.log('unmount scroll');
		window.removeEventListener('scroll', this.onScroll);
	}
	onScroll(e) {
		//console.log(window.scrollY, this.maxTop);

		if (window.scrollY > this.maxTop) {
			if (!this.refs.nav.classList.contains('fixed'))
				this.refs.nav.classList.add('fixed');
		} else if (window.scrollY < this.maxTop) {
			if (this.refs.nav.classList.contains('fixed'))
				this.refs.nav.classList.remove('fixed');
		}
	}

	jumpTo(val) {
		jump('#section-' + val, {
			duration: 500
		});

		this.setState({
			current: val
		});
	}

	isCurrent(val) {
		return val == this.state.current;
	}

	render() {
		return <section className="section navigation is-primary">
			<nav className="tabs is-boxed is-fullwidth" ref="nav">
				<div className="container">
					<ul>
						<li className={ this.isCurrent('header') ? 'is-active' : ''} onClick={() => this.jumpTo('header')}><a><i className="fa fa-home"></i></a></li>
						<li className={ this.isCurrent('blogposts') ? 'is-active' : ''} onClick={() => this.jumpTo('blogposts')}><a> <i className="fa fa-newspaper-o"></i> </a></li>
						<li><a> <i className="fa fa-flask"></i> </a></li>
						<li><a> <i className="fa fa-gamepad"></i> </a></li>
						<li><a> <i className="fa fa-github"></i> </a></li>
						<li><a> <i className="fa fa-linkedin"></i> </a></li>
						<li><a> <i className="fa fa-facebook"></i> </a></li>
					</ul>
				</div>
			</nav>
		</section>
	}
}

export default Navigation;