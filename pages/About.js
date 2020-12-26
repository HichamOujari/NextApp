import React from 'react'
import Head from "next/head"
import Image from "next/image"

const About = () => {
    return (
        
        <>
<Head>
    <title >my app </title>
</Head>
<main>
<h1>hello world </h1>
<Image src="/Smiles.jpg" width="300" height="200" priority></Image>
</main>
        
        </>
    )
}

export default About
