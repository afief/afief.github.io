import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './bulma.scss';

import SectionHeader from './header/header.jsx';
import SectionNavigation from './navigation/navigation.jsx';
import SectionBlogposts from './blogposts/blogposts.jsx';

class MainContainer extends Component {
	render() {
		return <div className="main-container">
			<SectionHeader />
			<SectionNavigation />
			<SectionBlogposts />
		</div>
	}
}

ReactDOM.render(
	<MainContainer />,
	document.getElementById('root')
)