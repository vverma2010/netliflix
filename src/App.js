import './App.css';
import Navabar from './Components/Navabar';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';

function App() {
	return (
		<div className="App">
			<Navabar />
			<Router>
				<Switch>
					<Route exact path="/home" component={Home} />
					<div className="container">
						<div className="info-div">
							<div className="welcome-note">
								<span className="heading-one">See what's next.</span>
								<span className="heading-two">
									WATCH ANYWHERE. CANCEL ANYTIME.
								</span>
								<Link to="/home">
									<button className="enter-button">
										Enter the world of ENTERTAINMENT &gt;&gt;
									</button>
								</Link>
							</div>
						</div>
					</div>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
