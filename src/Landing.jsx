import ReactDOM from 'react-dom/client';
import React, { StrictMode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const Landing = ({ pageTitle, creatorName, featureImageUrl, featureContent, serviceSectionTitle, services, featuredblogsectiontitle, featuredBlogPosts }) => {
    return (
    <>
        {/* Main content */}
        <div id="main">
            <div className="inner">
                {/* Header */}
                <header id="header">
                    <a href="index.html" className="logo"><strong>Editorial</strong> by {creatorName}</a>
                    <ul className="icons">
                        <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon brands fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
                        <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon brands fa-medium-m"><span className="label">Medium</span></a></li>
                    </ul>
                </header>
                {/* <!-- Banner --> */}
                <section id="banner">
                    <div className="content">
                        <div dangerouslySetInnerHTML={{ __html: featureContent }} />
                        <ul className="actions">
                            <li><a href="#" className="button big">Learn More</a></li>
                        </ul>
                    </div>
                    <span className="image object">
                        <img src={featureImageUrl} alt="" />
                    </span>
                </section>
                {/* <!-- Section --> */}
                <section>
                    <header className="major">
                        <h2>{serviceSectionTitle}</h2>
                    </header>
                    <div className="features">
                        {services.map(service => (
                            <article key={service.id}>
                                <span className={`icon ${service.serviceFaIcon}`}></span>
                                <div className="content">
                                    <h3>{service.serviceItemTitle}</h3>
                                    <p>{service.serviceItemDescription}</p>
                                </div>
                            </article>
                        ))}    
                    </div>
                </section>
                {/* <!-- Section --> */}
                <section>
                    <header className="major">
                        <h2>{featuredblogsectiontitle}</h2>
                    </header>
                    <div className="posts">
                        {featuredBlogPosts.map(featuredBlogPost => (
                            <article key={featuredBlogPost.id}>
                            <a href="#" className="image">
                                {featuredBlogPost.featuredBlogpostImage?.url && (
                                    <img src={featuredBlogPost.featuredBlogpostImage.url} alt="" />
                                )}
                            </a>
                            <h3>{featuredBlogPost.featuredBlogPostTitle}</h3>
                            <p>{featuredBlogPost.featuredPostExcerpt}</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    </>
    );
  }

export default Landing;