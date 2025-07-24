import ReactDOM from 'react-dom/client';
import React, { StrictMode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const Generic = ({postPageTitle, featuredImageUrlForPost, postPageContent}) => {
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