import React, { PureComponent } from 'react';

import './HomePage.scss';

// // import Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Profile from '../../components/Profile';
import Introduction from '../../components/Introduction';

class HomePage extends PureComponent {
	render() {
		return (
			<Router>
				<div className="HomePage">
					{/* HEADER */}
					<Header {...this.props} />
					<Switch>
						<Route exact path="/" component={Introduction}/>
						<Route exact path="/profile" component={Profile} />
					</Switch>
					{/* FOOTER */}
					<Footer {...this.props} />
				</div>
			</Router>
		);
	}
}

export default HomePage;
