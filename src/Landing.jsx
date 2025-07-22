import ReactDOM from 'react-dom/client';
import React, { StrictMode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const Landing = ({ pageTitle, creatorName, featureImageUrl, featureContent}) => {
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
                        <h2>Erat lacinia</h2>
                    </header>
                    <div className="features">
                        <article>
                            <span className="icon fa-gem"></span>
                            <div className="content">
                                <h3>Portitor ullamcorper</h3>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            </div>
                        </article>
                        <article>
                            <span className="icon solid fa-paper-plane"></span>
                            <div className="content">
                                <h3>Sapien veroeros</h3>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            </div>
                        </article>
                        <article>
                            <span className="icon solid fa-rocket"></span>
                            <div className="content">
                                <h3>Quam lorem ipsum</h3>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            </div>
                        </article>
                        <article>
                            <span className="icon solid fa-signal"></span>
                            <div className="content">
                                <h3>Sed magna finibus</h3>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            </div>
                        </article>
                    </div>
                </section>
                {/* <!-- Section --> */}
                <section>
                    <header className="major">
                        <h2>Ipsum sed dolor</h2>
                    </header>
                    <div className="posts">
                        <article>
                            <a href="#" className="image"><img src="images/pic01.jpg" alt="" /></a>
                            <h3>Interdum aenean</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image"><img src="images/pic02.jpg" alt="" /></a>
                            <h3>Nulla amet dolore</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image"><img src="images/pic03.jpg" alt="" /></a>
                            <h3>Tempus ullamcorper</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image"><img src="images/pic04.jpg" alt="" /></a>
                            <h3>Sed etiam facilis</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image"><img src="images/pic05.jpg" alt="" /></a>
                            <h3>Feugiat lorem aenean</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image"><img src="images/pic06.jpg" alt="" /></a>
                            <h3>Amet varius aliquam</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    </>
    );
  }

export default Landing;