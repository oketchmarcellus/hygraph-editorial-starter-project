import ReactDOM from 'react-dom/client';
import React, { StrictMode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const Generic = ({postPageTitle, featuredImage, postPageContent}) => {
    return (
    <>
        {/* Main content */}
        <div id="main">
            <div className="inner">
                {/* <!-- Header --> */}
                    <header id="header">
                        <a href="index.html" className="logo"><strong>Editorial</strong> by HTML5 UP</a>
                        <ul className="icons">
                            <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                            <li><a href="#" className="icon brands fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
                            <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                            <li><a href="#" className="icon brands fa-medium-m"><span className="label">Medium</span></a></li>
                        </ul>
                    </header>

                {/* <!-- Content --> */}
                    <section>
                        <header className="main">
                            <h1>{postPageTitle}</h1>
                        </header>
                        <span className="image main"><img src={featuredImageUrlForPost} alt="" /></span>
                        <div dangerouslySetInnerHTML={{ __html: postPageContent }} />
                        <hr className="major" />
                    </section>
            </div>
        </div>
    </>
    );
  }

export default Generic;