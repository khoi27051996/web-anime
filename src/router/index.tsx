import { ComicByCategory, ComicSearch, ComicTemplate, MainLayout } from 'Component';
import { Category, Complete, Contact, Home, NewComic, Updating } from 'Pages';
import { PATH } from 'constant';
import { RouteObject } from 'react-router-dom';

export const router: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                element: <Category />,
                path: PATH.category
            },
            {
                element: <ComicByCategory />,
                path: PATH.comicByCategory
            },
            {
                element: <NewComic />,
                path: PATH.newComic
            },
            {
                element: <NewComic />,
                path: PATH.newPage
            },
            {
                element: <Updating />,
                path: PATH.updating
            },
            {
                element: <Updating />,
                path: PATH.updatingPage
            },
            {
                element: <Complete />,
                path: PATH.complete
            },
            {
                element: <Complete />,
                path: PATH.completePage
            },
            {
                element: <ComicTemplate />,
                path: PATH.comic
            },
            {
                element: <Contact />,
                path: PATH.contact
            },
            {
                element: <ComicSearch />,
                path: PATH.comicSearch
            }
        ]
    }
]