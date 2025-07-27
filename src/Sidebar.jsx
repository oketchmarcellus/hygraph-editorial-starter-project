import React, { StrictMode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ({ pageTitle, postTitle, articles, navItems })=> {
    //code for toggling sidebar visibility
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
    };
    return (
    <>
        {/* <!-- Sidebar --> */}
        <div id="sidebar" className={isActive ? 'inactive' : 'active'}>
            <div className="inner">
                {/* <!-- Search --> */}
                <section id="search" className="alt">
                    <form method="post" action="#">
                        <input type="text" name="query" id="query" placeholder="Search" />
                    </form>
                </section>
                {/* <!-- Menu --> */}
                <nav id="menu">
                    <header className="major">
                        <h2>Menu</h2>
                    </header>
                    <ul>
                        <li><Link to="/">{pageTitle}</Link></li>
                        <li><Link to="/generic">{postTitle}</Link></li>
                        {navItems.map(item => (
                        <li key={item.id}><Link to={item.slug}>{item.label}</Link></li>
                        ))}
                    </ul>
                </nav>
                 {/* News Widget Section */}
                <section>
                    <header className="major">
                        <h2>Latest News From Newsdata.io Network</h2>
                    </header>
                    <div className="mini-posts">
                        {articles.map((article, index) => (
                        <article key={index}>
                            <a href={article.link} className="image" target="_blank" rel="noopener noreferrer">
                                <img src={article.image_url} alt={article.title} />
                            </a>
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                            <ul className="actions">
                                <li><a href={article.link} className="button">More</a></li>
                            </ul>
                        </article>
                        ))}
                    </div>
                </section>
                {/* <!-- Get in touch Section --> */}
                <section>
                    <header className="major">
                        <h2>Get in touch</h2>
                    </header>
                    <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                    <ul className="contact">
                        <li className="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
                        <li className="icon solid fa-phone">(000) 000-0000</li>
                        <li className="icon solid fa-home">Richland Pointe #254<br />
                        Kamiti Rd, 001 Nrbi</li>
                    </ul>
                </section>

                {/* <!-- Footer --> */}
                <footer id="footer">
                    <p className="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. TechStack: <a href="https://viteapolloclientgraphqlstarterproject.netlify.app/">Vite+Hygraph+React+Apollo Client</a>. Fork Starter Project: <a href="https://github.com/oketchmarcellus/hygraph-editorial-starter-project">Github</a>.</p>
                </footer>
            </div>
            <a href="#sidebar" className="toggle" onClick={toggleSidebar}>Toggle</a>
        </div>
    </>
    );
  }

export default Sidebar;