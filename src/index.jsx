import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './bulma.scss';

import SectionHeader from './header/header.jsx';
import SectionNavigation from './navigation/navigation.jsx';
import SectionBlogposts from './blogposts/blogposts.jsx';
import SectionLabs from './labs/labs.jsx';
import SectionGames from './games/games.jsx';

class MainContainer extends Component {
	render() {
		return <div className="main-container">
			<SectionHeader />
			<SectionNavigation />
			<SectionBlogposts />
			<SectionLabs />
			<SectionGames />


			<footer className="footer">
				<div className="container">
					<div className="content has-text-centered">
						<p>
							Crafted by <a href="http://afief.net">Me</a> with React and Love in Bandung.
						</p>
						<p>
							<a className="icon" href="https://afief.github.io">
								<i className="fa fa-github"></i>
							</a>
						</p>
					</div>
				</div>
			</footer>
		</div>
	}
}

ReactDOM.render(
	<MainContainer />,
	document.getElementById('root')
)