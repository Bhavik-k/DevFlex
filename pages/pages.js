import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Project from '../components/Project';

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
                    <img className="h-40 border-2 border-gray-200 rounded-full" src="https://avatars.dicebear.com/api/micah/Naaahrendra ahawale.svg"/>
                    <div className="flex-1 border-2 border-gray-200 h-0"></div>
                </div>
                <h1 className="mx-auto mt-3 text-4xl font-semibold font">Bhavik Khawale</h1>
                {/* Contact Icons */}
                <div className="flex mx-auto my-3">
                    <img className="w-10 mx-2 cursor-pointer hover:scale-105 duration-200" src="\imges\svgs\facebook-brands.svg"/>
                    <img className="w-10 mx-2 cursor-pointer hover:scale-105 duration-200" src="\imges\svgs\github-brands.svg"/>
                    <img className="w-10 mx-2 cursor-pointer hover:scale-105 duration-200" src="\imges\svgs\instagram-brands.svg"/>
                    <img className="w-10 mx-2 cursor-pointer hover:scale-105 duration-200" src="\imges\svgs\linkedin-brands.svg"/>
                    <img className="w-10 mx-2 cursor-pointer hover:scale-105 duration-200" src="\imges\svgs\twitter-brands.svg"/>
                </div>
                <div>
                    <Project
                    img="https://bhavik-k.github.io/CV/img/works/bnb.png"
                    name="Airbnb Clone"
                    discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit ametipsum dolor sit amet,"
                    link="https://airbnb-kohl.vercel.app/"/>
                    <Project
                    img="https://bhavik-k.github.io/CV/img/works/bnb.png"
                    name="Airbnb Clone"
                    discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet,ipsum dolor sit amet"
                    link="https://airbnb-kohl.vercel.app/"/>
                    <Project
                    img="https://bhavik-k.github.io/CV/img/works/bnb.png"
                    name="Airbnb Clone"
                    discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit ametipsum dolor sit amet,"
                    link="https://airbnb-kohl.vercel.app/"/>
                </div>
            </div>
        </div>
    )
}
