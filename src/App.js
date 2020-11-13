import React from 'react';
import Post from  "./Post";
import SingleCardDetails from "./SingleCardDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" component={Post} exact />
					<Route  path="/details/:slug" component={SingleCardDetails} />
					</Switch>
				</Router>
		</div>
	)
}
