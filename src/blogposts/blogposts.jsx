import React, {Component} from 'react';
import './blogposts.scss';

	
class BlogPosts extends Component {
	
	constructor(props) {
		super(props);

		this.posts = [
		{
			title: "Bekraf Developer Conference",
			thumbnail: "http://afief.net/wp-content/uploads/2016/12/IMG_20161128_092414.jpg",
			excerpt: "Minggu – Senin kemarin dateng ke salah satu acara dari Bekraf di Aston Simatupang Jakarta Selatan, Bekraf Developer Conference. Ini acara puncak dari rangkaian acara Bekraf Developer Day yang diadakan di beberapa kota sebelumnya.",
			date: "1 December 2016",
			url: "http://afief.net/bekraf-developer-conference/"
		},
		{
			title: "Jadi Fasilitator di Indonesia Android Kejar",
			thumbnail: "http://afief.net/wp-content/uploads/2016/11/15069075_10211462015890406_815545767750888529_o.jpg",
			excerpt: "Google melalui Google Developers akhir tahun ini mengadakan Google Indonesia Android Kejar (page). Sebagai sarjana kurang ngajar dan developer yang pertengahan Oktober lalu sudah tidak di Inmotion lagi, gue gabung sebagai fasilitator.",
			date: "24 Nov 2016",
			url: "http://afief.net/indonesia-android-kejar/"
		},
		{
			title: "Git Flow",
			thumbnail: "http://afief.net/wp-content/uploads/2016/04/Capture.png",
			excerpt: "Beberapa hari yang lalu, gue baca tulisan ini. Gue sempet terenyuh menyadari bahwa itu adalah tulisan tahun 2010. Udah lumayan lama gue pake git, dan baru beberapa hari yang lalu menyadari bahwa git flow itu ada untuk mempermudah kehidupan kita. ",
			date: "23 Apr 2016",
			url: "http://afief.net/git-flow/"
		},
		{
			title: "Git Flow",
			thumbnail: "http://afief.net/wp-content/uploads/2015/12/Capture.png",
			excerpt: "Sore ini di timeline nemu berita mengejutkan. Tentang seorang guru yang meninggal akibat serangan jantung setelah pekerjaannya input rapor online hilang ketika dicek satu persatu.",
			date: "18 Dec 2015",
			url: "http://afief.net/error-handling-demi-umat/"
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
									Read More
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

		return <section className="section hero is-fullheight blogposts" id="section-blogposts">

			<div className="container">

				<h1 className="title">Blog Posts</h1>

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

export default BlogPosts;