import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import App from './App.jsx'

import Anime from './components/Anime.jsx'
import Manhwa from './components/Manhwa.jsx'
import Dunhua from './components/Dunhua.jsx'
import Contacts from './components/Contacts.jsx'
import ErrorPage from './components/404 page.jsx';
import HomePage from './App.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,

        children: [
            {
                element: <HomePage />, 
                children: [
                    {
                        path: 'anime',
                        element: <Anime />
                    },
                    {
                        path: 'manhwa',
                        element: <Manhwa />
                    },
                    {
                        path: 'dunhua',
                        element: <Dunhua />
                    },
                    {
                        path: 'contacts',
                        element: <Contacts />
                    },
                    {
                        path: 'homePage',
                        element: <HomePage />
                    }
                ]
            },
            {
                index: true,
                element: (
                    <>
                        <img
                            className="mainPhotoOfHomePage"
                            src="./src/components/Photos/beautiful-anime-woman-cartoon-scene.jpg"
                            alt="Описание изображения"
                        />
                        <a
                            className="sourceOfMainPhotoOnHomePage"
                            href="https://ru.freepik.com/free-photo/beautiful-anime-woman-cartoon-scene_94944919.htm#fromView=search&page=2&position=15&uuid=472d74b8-2fec-47ac-b6d0-16014560ea9f"
                        >
                            Изображение от freepik
                        </a>
                    </>
                )
            }			
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
	
		<RouterProvider router={router} />

	</React.StrictMode>
);

