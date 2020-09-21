import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
// import Logo from "./icon-192x192.png"

const Layout = ({children, title, description, backButton})=>{

    return(
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/materia/bootstrap.min.css" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

        </Head>
        <div className="container">
            <nav>
                {/* <img src="./icon-192x192.png" alt="logo" /> */}
          
                {backButton && <span onClick={()=> Router.back()} className="back-button">&#x2b05;</span>}
                <Link href="">
                    <a>
                        <span className="main-title">{title}</span>
                    </a>
                </Link>
            </nav>
            {children}
        </div>


        <style jsx>{`
      .container {
        max-width: 800px;
        margin: 0 auto;
        background: #f6f6ef;
      }
      nav {
        background: #f60;
        padding: 1em;
        border-radius: 0px 0px 10px 10px;
      }
      nav > * {
        display: inline-block;
        color: black;
      }
      nav a {
        text-decoration: none;
      }
      nav .main-title {
        font-weight: bold;
      }
      nav .back-button {
        font-size: 0.9rem;
        padding-right: 1em;
        cursor: pointer;
      }
      
    `}</style>
    <style global jsx>{`
      body {
        background: white;
        font-family: Verdana, Geneva, sans-serif;
      }
    `}</style>

    </div>


);
}




export default Layout;