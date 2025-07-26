import ReactDOM from 'react-dom/client';
import React, { StrictMode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'

const Generic = ({postPageTitle, featuredImageUrlForPost, postPageContent}) => {
    const { postSlug = 'generic' } = useParams(); // Extract postSlug from the URL
    console.log('Current postSlug in Generic:', postSlug); // Log the postSlug
    return (
    <>
        {/* <!-- Content --> */}
        <section>
            <header className="main">
                <h1>{postPageTitle}</h1>
            </header>
            <span className="image main"><img src={featuredImageUrlForPost} alt="" /></span>
            <div dangerouslySetInnerHTML={{ __html: postPageContent }} />
            <hr className="major" />
        </section>
    </>
    );
  }

export default Generic;