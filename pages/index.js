import React, { Component } from 'react';
import { FETCH } from "isomorphic-unfetch";
import Error from "next/error";
import StoryList from "../components/StoryList";
import Layout from "../components/Layout";
import Link from "next/link";

export default class index extends Component {

    
    static async getInitialProps({req, res, query}){
        //getInitialProps give us a Context object and destructure this objects as a property in our arguments
        // console.log(query);
        let page;
        let stories;
        try {
            page = Number(query.page) || 1;
            const response =  await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
             stories = await response.json();
           
        } catch (err) {
            console.log(err);
            stories = [];
        }

        return { stories, page };
    
      }

      componentDidMount() {
        if ("serviceWorker" in navigator) {
          navigator.serviceWorker
            .register("/service-worker.js")
            .then(registration => {
              console.log("service worker registration successful", registration);
            })
            .catch(err => {
              console.warn("service worker registration failed", err.message);
            });
        }
      }

    render() {
        const {stories, page } = this.props;
        // console.log(stories)

        if(stories.length === 0){
            return <Error statusCode={503} />
        }




        return (
            <div>
                <Layout title="Hacker Nest" description="Hacker Nests for latest News" >
                 <StoryList stories={stories} />
                 <footer>
                 <Link href={`/?page=${page + 1}`}>
                     <a>Next Page ({page + 1})</a>
                 </Link>
                 </footer>

                <style jsx>{`
                    footer {
                        padding: 1em;
                    }
                    footer a {
                        font-weight: bold;
                        color: black;
                        text-decoration: none;
                    }
                    `}</style>
               
                </Layout>
              
            </div>
        );
    }
}
