import Link from 'next/link'
import React from 'react'

export default function NotFound() {

    const wrp = {
        background: "#003173",
        color: "#fff",
        height: "100vh",
        width: "100%",
        margin: "0px",
        padding: "0px",
        textAlign: "center",
        paddingTop: '200px'
    }



    return (
        <div style={wrp}>
            <h1>404 page not found</h1>
            <Link href={"/"}>Go To Home Page</Link>
        </div>
    )
}

NotFound.getLayout = function getLayout(page) {
    return (
        <>
            {page}
        </>
    )
}