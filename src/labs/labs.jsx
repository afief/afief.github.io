import React, {Component} from 'react';
import './labs.scss';
	
class Labs extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {

		return <section className="section labs" id="section-labs">

			<div className="container">

				<h1 className="title">Some Boiling Codes</h1>
				
				<div className="columns">
					<div className="column">

						<div className="box">
							<article className="media">
								<div className="media-left">
									<figure className="image is-64x64" style={{'backgroundImage': 'url(http://afief.github.io/rc-sc/thumbnail.png)'}}>
									</figure>
								</div>
								<div className="media-content">
									<div className="content">
										<p>
											<strong>React Soundcloud</strong> <small>December 2016</small>
											<br/>
											Kombinasi dari performance react yang super kenceng, ditambah API Soundcloud yang super open.
										</p>
									</div>
									<nav className="level">
										<div className="level-left">
											<a className="level-item" href="http://afief.github.io/react-soundcloud" target="_blank">
												Open
											</a>
											<a href="https://github.com/afief/react-soundcloud" target="_blank" className="level-item">
												View Codes
											</a>
										</div>
									</nav>
								</div>
							</article>
						</div>

					</div>

					<div className="column">

						<div className="box">
							<article className="media">
								<div className="media-left">
									<figure className="image is-64x64" style={{'backgroundImage': 'url(http://perpustakaansd.labschool.upi.edu/template/default/img/pattern.png)'}}>
									</figure>
								</div>
								<div className="media-content">
									<div className="content">
										<p>
											<strong>SLIMs API</strong> <small>October 2016</small>
											<br/>
											Custom-Made API untuk <a href="http://slims.web.id" target="_blank">SLIMS</a> agar data katalog buku dapat dikonsumsi aplikasi <a href="https://play.google.com/store/apps/details?id=com.hibahdikti.digitallibrary" target="_blank">Mobile Perpustakaan</a>.
										</p>
									</div>
									<nav className="level">
										<div className="level-left">
											<a href="https://github.com/afief/slims-api" target="_blank" className="level-item">
												View Codes
											</a>
										</div>
									</nav>
								</div>
							</article>
						</div>

					</div>
				</div>

			</div>

		</section>
	}
}

export default Labs;