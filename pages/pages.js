import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Project from '../components/Project';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

export default function pages() {
    return (
        <div className="overflow-x-hidden">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <div className="grid place-content-center">
                <div className="flex mt-3 justify-center items-center w-screen">
                    <div className="flex-1 border-2 border-gray-200 h-0"></div>
                    <Flip><img className="h-40 border-2 border-gray-200 rounded-full" src="https://avatars.dicebear.com/api/micah/Naaahrendra ahawale.svg"/></Flip>
                    <div className="flex-1 border-2 border-gray-200 h-0"></div>
                </div>
                <h1 className="mx-auto mt-3 text-4xl font-semibold font">Bhavik Khawale</h1>
                {/* Contact Icons */}
                <div className="flex mx-auto my-3">
                    <Zoom><img className="w-10 mx-2 cursor-pointer hover:scale-105 duration-200" src="\imges\svgs\facebook-brands.svg"/></Zoom>
                    <Zoom><img className="w-10 mx-2 cursor-pointer hover:scale-105 duration-200" src="\imges\svgs\github-brands.svg"/></Zoom>
                    <Zoom><img className="w-10 mx-2 cursor-pointer hover:scale-105 duration-200" src="\imges\svgs\instagram-brands.svg"/></Zoom>
                    <Zoom><img className="w-10 mx-2 cursor-pointer hover:scale-105 duration-200" src="\imges\svgs\linkedin-brands.svg"/></Zoom>
                    <Zoom><img className="w-10 mx-2 cursor-pointer hover:scale-105 duration-200" src="\imges\svgs\twitter-brands.svg"/></Zoom>
                </div>
                <div>
                    <Bounce left>
                        <Project
                        img="https://bhavik-k.github.io/CV/img/works/bnb.png"
                        name="Airbnb Clone"
                        discription="Web designers generally have nothing to do with creating content for their projects. Even so, the look of a site can be incomplete if no words are included. Web designers need to find ways to "
                        link="https://airbnb-kohl.vercel.app/"/>
                    </Bounce>
                    <Bounce left>
                        <Project
                        img="https://bhavik-k.github.io/CV/img/works/bnb.png"
                        name="Airbnb Clone"
                        discription="Web designers generally have nothing to do with creating content for their projects. Even so, the look of a site can be incomplete if no words are included. Web designers need to find ways to "
                        link="https://airbnb-kohl.vercel.app/"/>
                    </Bounce>
                    <Bounce left>
                        <Project
                        img="https://bhavik-k.github.io/CV/img/works/bnb.png"
                        name="Airbnb Clone"
                        discription="Web designers generally have nothing to do with creating content for their projects. Even so, the look of a site can be incomplete if no words are included. Web designers need to find ways to "
                        link="https://airbnb-kohl.vercel.app/"/>
                    </Bounce>
                    <Bounce left>
                        <Project
                        img="https://bhavik-k.github.io/CV/img/works/bnb.png"
                        name="Airbnb Clone"
                        discription="Web designers generally have nothing to do with creating content for their projects. Even so, the look of a site can be incomplete if no words are included. Web designers need to find ways to "
                        link="https://airbnb-kohl.vercel.app/"/>
                    </Bounce>
                    
                </div>
            </div>
        </div>
    )
}
