import React, { Component } from 'react';

class Navabar extends Component {
	render() {
		return (
			<div className="navabar-container">
				<nav>
					<img
						src="https://cdn.iconscout.com/icon/free/png-64/netflix-282224.png"
						alt="netflix"
					/>

					<ul>
						<li>Home</li>
						<li>TV Shows</li>
						<li>Movies</li>
						<li>New & Popular</li>
						<li>My List</li>
					</ul>
					<div className="search">
						<input type="text" name="search" placeholder="Search" ></input>
                    </div>
                    <div className="profile-div" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrQpQ_xH-h3H8_K-maor_cyVdAYOOOoXrYA&usqp=CAU" alt="profile" />
                    </div>
				</nav>
			</div>
		);
	}
}

export default Navabar;
