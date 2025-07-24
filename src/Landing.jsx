import ReactDOM from 'react-dom/client';
import React, { StrictMode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const Landing = ({ pageTitle, creatorName, featureImageUrl, featureContent, serviceSectionTitle, services, featuredblogsectiontitle, featuredBlogPosts }) => {
    return (
    <>
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
    </>
    );
  }

export default Landing;