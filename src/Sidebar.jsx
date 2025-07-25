import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ({ pageTitle, creatorName, postTitle })=> {
    return (
    <>
        {/* <!-- Sidebar --> */}
        <div id="sidebar">
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
                        <li><a href="/elements">Elements</a></li>
                    </ul>
                </nav>
                {/* <!-- Section --> */}
                <section>
                    <header className="major">
                        <h2>Ante interdum</h2>
                    </header>
                    <div className="mini-posts">
                        <article>
                            <a href="#" className="image"><img src="images/pic07.jpg" alt="" /></a>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                        </article>
                        <article>
                            <a href="#" className="image"><img src="images/pic08.jpg" alt="" /></a>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                        </article>
                        <article>
                            <a href="#" className="image"><img src="images/pic09.jpg" alt="" /></a>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                        </article>
                    </div>
                    <ul className="actions">
                        <li><a href="#" className="button">More</a></li>
                    </ul>
                </section>

                {/* <!-- Section --> */}
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
        </div>
    </>
    );
  }

export default Sidebar;