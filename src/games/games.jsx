import React, {Component} from 'react';
import './games.scss';
	
class Games extends Component {
	
	constructor(props) {
		super(props);

		this.posts = [
		{
			title: "Prince Bunny",
			thumbnail: "http://afief.net/play/images/bunny.png",
			excerpt: "Prince Bunny adalah platformer game yang mengajak pemain untuk terus melompat lebih tinggi dan menghindari rintangan. Prince Bunny menggunakan accelerometer apabila dimainkan di device mobile. Dan menggunakan tombol panah kanan dan kiri apabila dimainkan di komputer.",
			date: "",
			url: "http://afief.net/play/bunny"
		},
		{
			title: "THE ANCIENT LINES",
			thumbnail: "http://afief.net/play/images/ancientlines.png",
			excerpt: "The Ancient Lines adalah puzzle game terinspirasi dari banyak puzzle games yang sudah ada sebelumnya. Game ini memberikan tantangan tersendiri ketika development dengan bagaimana membuat bentuk garis 'pseudo' random yang masih tetap terlihat menarik.",
			date: "",
			url: "http://afief.net/play/ancientlines"
		},
		{
			title: "SQUAREZOO",
			thumbnail: "http://afief.net/play/images/squarezoo.png",
			excerpt: "Squarezoo dibuat di Platform Android. Mengajak anak-anak untuk dapat mengenal binatang lebih dekat. Setiap menyelesaikan 5 level, pemain akan meng-unlock hewan baru yang memuat keterangan mengenai hewan tersebut. Selain mengajak anak-anak untuk bermain, game ini diharapkan juga bisa mengedukasi mereka. :)",
			date: "",
			url: "https://play.google.com/store/apps/details?id=air.sinaulin.squarezoo"
		},
		{
			title: "DUCK DI DORR",
			thumbnail: "http://afief.net/play/images/duck.png",
			excerpt: "Duck Di Dorr adalah projek pertama yang dibuat dengan menggunakan aset dari Kenney. Game ini dibuat dengan HTML5 diwaktu senggang. Dengan menggunakan Intel Realsense Camera, game ini dapat dimainkan hanya dengan mengarahkan senjata menggunakan jari di depan kamera.",
			date: "",
			url: "http://afief.net/play/duck"
		},
		{
			title: "TAPPY PLANE",
			thumbnail: "http://afief.net/play/images/tappy.png",
			excerpt: "Sama dengan Duck Di Dorr, game ini dikerjakan diwaktu senggang. Gameplaynya mirip dengan Flappy Bird, hanya saja ini adalah pesawat. Game ini dibuat dengan menggunakan PhaserJS.",
			date: "",
			url: "http://afief.net/play/tappy"
		}
		];
	}

	render() {
		let pels = this.posts.map((val, i) => {
			return <div className="box" key={i}>
				<article className="media">
					<div className="media-left">
						<figure className="image is-64x64" style={{'backgroundImage': 'url(' + val.thumbnail + ')'}}>
						</figure>
					</div>
					<div className="media-content">
						<div className="content">
							<p>
								<strong>{val.title}</strong> <small>{val.date}</small>
								<br/>
								{val.excerpt}
							</p>
						</div>
						<nav className="level">
							<div className="level-left">
								<a className="level-item" href={val.url} target="_blank">
									<i className="fa fa-gamepad"></i> &nbsp; Play
								</a>
							</div>
						</nav>
					</div>
				</article>
			</div>
		});
		let leftColumns = [];
		let rightColumns = [];
		pels.forEach((el, i) => {
			if ((i % 2) == 0) {
				/* genap, kiri */
				leftColumns.push(el);
			} else {
				rightColumns.push(el);
			}
		});

		return <section className="section games" id="section-games">

			<div className="container">

				<h1 className="title">Games</h1>

				<div className="columns">
					<div className="column">
						{leftColumns}
					</div>
					<div className="column">
						{rightColumns}
					</div>
				</div>

			</div>

		</section>
	}
}

export default Games;