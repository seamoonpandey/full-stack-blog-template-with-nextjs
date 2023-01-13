import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";

import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [

    {
        slug: 'getting-started0',
        title: 'Getting Started With Nextjs',
        image: 'getting-started-with-nextjs.png',
        excerpt: 'NextJs is the React framework for Production -it makes building fullstack React App very easy',
        date: '2022-10-13',
    },
    {
        slug: 'getting-started2',
        title: 'Getting Started With Nextjs',
        image: 'getting-started-with-nextjs.png',
        excerpt: 'NextJs is the React framework for Production -it makes building fullstack React App very easy',
        date: '2022-10-13',
    },
    {
        slug: 'getting-started3',
        title: 'Getting Started With Nextjs',
        image: 'getting-started-with-nextjs.png',
        excerpt: 'NextJs is the React framework for Production -it makes building fullstack React App very easy',
        date: '2022-10-13',
    },
    {
        slug: 'getting-started4',
        title: 'Getting Started With Nextjs',
        image: 'getting-started-with-nextjs.png',
        excerpt: 'NextJs is the React framework for Production -it makes building fullstack React App very easy',
        date: '2022-10-13',
    },

];


export default function HomePage() {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </Fragment>
    )
}


