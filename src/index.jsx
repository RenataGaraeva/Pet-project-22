import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import App from './App.jsx'

import Anime from './components/Anime.jsx'
import Manhwa from './components/Manhwa.jsx'
import Layout from './components/Layout.jsx'
import Dunhua from './components/Dunhua.jsx'

import AboutMe from './components/AboutMe.jsx'
import AboutContent from './components/AboutContent.jsx'

const router = createBrowserRouter([
	{path: "/",
			element: <App />,
	 children: [
			{path: "/layout",
			element: <Layout />,
	}, 	
	{
		path: "/anime",
		element: <Anime />
	},
	{
		path: "/manhwa",
		element: <Manhwa />
	},
	{
		path: "/dunhua",
		element: <Dunhua />
	},
	{
		path: "/aboutMe",
		element: <AboutMe />
	},
	{path: "/aboutContent",
			element: <AboutContent />
	},
		 ]},
]);




ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
	
		<RouterProvider router={router} />

	</React.StrictMode>
);

