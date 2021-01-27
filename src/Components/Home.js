import React, { Component } from 'react';
import Movies from './Movies';
import Navabar from './Navabar';
import '../Styles/Home.css';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			originals: [
				{
					banner:
						'https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfv50J5yrR5Js0TsKd9SfPssvQHynmcMWOLnfFKKkpevAKH3lFJNmzFH1blVfSRm4fAyBNjjAHNqNmE3BIPL0oCok6U.webp?r=580',
					title: 'The Big Bang Theory',
				},
				{
					banner:
						'https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXH5EqiTiQECHEz0xKO7rYjB7n03-DXu9Eczn09M45dvuvpjEjELGBI5eY-SnOzXU1IQCkrcFDAaB6kEKT15uxZbahE.webp?r=1ab',
					title: 'Brooklyn Nine-Nine',
				},
				{
					banner:
						'https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUHSp1Z0RTNqA1yudfk9EPfvl_jUmxsb7JUMSf96rbpAY0Yt82G-n5KDrMBmvnCtHOR_qkfQXV3xMFwN21ctXAirAYc.webp?r=0a6',
					title: 'Suits',
				},
				{
					banner:
						'https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY4Xa-N3i4bkyZHHhx1flMX0yYdA1d9mLvD1i_TSdpaBh70ecOdls308UzojG3eNirEo4sXXLzcaX9Dweb8KaufQ-_xta9qyWD3pmE30dSlDO4hzdBacOjp0G9i7.jpg?r=62e',
					title: 'Lucifer',
				},
				{
					banner:
						'https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYAd0KQ4pI3aX6DS1EztERtohdXU4bu7rN2rWDfBH4zLccePEO48w0MA_WLEapwlqo6DzNjOwkrxi_y6Y5RU0jcl-Go.webp?r=ecf',
					title: 'Lift Boy',
				},
			]
		};
	}
	render() {
		const { originals} = this.state;
		console.log('render', originals);
		return (
			<div className="home-container">
				<Navabar />
				{/* console.log('original state',originals); */}
				<div className="top-banner">
					<div className="banner-fade">
						<div className="banner-info">
							<span className="heading-one">RIVERDALE</span>
							<span className="heading-two">
								New episode coming on Thursday
							</span>
							<p className="plot">
								"Archie's got an edge, Veronica's got a rep, Betty's got moxie,
								and Jughead's got attitude. Welcome to the new Riverdale."
							</p>
							<div className="buttons">
								<button className="btn-play">
									<img
										src="https://www.flaticon.com/svg/vstatic/svg/254/254434.svg?token=exp=1611733597~hmac=8cdbc61e81a48aa3f8d3f73f470d105b"
										alt="play"
										// width="20"
									/>
									Play
								</button>
								<button className="btn-info">
									<img
										src="https://www.flaticon.com/svg/vstatic/svg/157/157933.svg?token=exp=1611733831~hmac=b0a25551d3b4e91aebee63bef4d8467a"
										alt="more-info"
										// width="10"
									/>
									More Info
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="originals">
					<h2>Netflix Originals</h2>
					<Movies originals = {originals} />
				</div>
				<div className="Trending">
					<h2>Trending</h2>
					<Movies originals ={originals} />
				</div>
				<div className="top-rated">
					<h2>Top rated</h2>
					<Movies originals = {originals}/>
				</div>
			</div>
		);
	}
}

export default Home;
