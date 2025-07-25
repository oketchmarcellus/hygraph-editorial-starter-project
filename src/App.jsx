import React, { StrictMode, useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Landing from './Landing'
import Sidebar from './Sidebar'
import Generic from './Generic'
import Elements from './Elements'
import './App.css'

const GET_DATA = gql`
  query findPage($homepageSlug: String, $postSlug: String) {
    homepage(where: {slug: $homepageSlug}) {
      id
      slug
      pageTitle
      featureSection {
        ... on FeaturedPostContent {
          id
          featuredPostContent {
            html
          }
          featurePostImage {
            url
          }
        }
      }
      createdBy {
        name
      }
      serviceSection {
        ... on PageSection {
          sectionContents {
            ... on ServiceCard {
              id
              serviceFaIcon
              serviceItemDescription
              serviceItemTitle
            }
          }
          sectionTitle
        }
      }
      featuredBlogPostSection {
        ... on PageSection {
          id
          sectionContents {
            ... on BlogPostItem {
              id
              featuredBlogpostImage {
                url
              }
              featuredBlogPostTitle
              featuredPostExcerpt
            }
          }
          sectionTitle
        }
      }
    }
    postPage(where: {slug: $postSlug}) {
      id
      postTitle
      slug
      postPageContent {
        html
      }
      featuredImage {
        url
      }
    }
  }
`;

function App() {
  // Use the useQuery hook to fetch data from the HygraphQL endpoint
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { homepageSlug: 'home', postSlug: 'generic' }, // Replace 'home' with the actual slug you want to query
  });

  // Fetch data specific from the NEWS.org REST API
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_NEWSDATA_DOT_IO_REST_API_URL);
        const json = await response.json();
        console.log(json); // Log the response
        if (json && json.results) {
          setArticles(json.results.slice(0, 3)); // Only attempt to slice if articles exist
        } else {
            console.error('No articles found or unexpected response format:', json);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pageTitle = data.homepage.pageTitle;// Get the page title from the query result
  const creatorName = data.homepage.createdBy.name; // Get the creator's name from the query result
  const featureSection = data.homepage.featureSection; // Get the feature section content
  const featureContent = data.homepage.featureSection.featuredPostContent.html; // Get the HTML content of the feature section
  const featureImageUrl = data.homepage.featureSection.featurePostImage.url; // Get the feature image URL
  const serviceSection = data.homepage.serviceSection; // Get the service section content
  const serviceSectionTitle = data.homepage.serviceSection.sectionTitle; // Get the service section title
  const services = data.homepage.serviceSection.sectionContents; // Get the service items
  const featuredblogsectiontitle = data.homepage.featuredBlogPostSection.sectionTitle; // Get the featured blog post section title
  const featuredBlogPostSection = data.homepage.featuredBlogPostSection; // Get the featured blog post section content
  const featuredBlogPosts = data.homepage.featuredBlogPostSection.sectionContents; // Get the featured blog posts
  const postPageTitle = data.postPage.postTitle; // Get the post page title
  const featuredImage = data.postPage.featuredImage; // Get the featured image for the post page
  const postTitle = data.postPage.postTitle; // Get the post title for the generic page
  const postPageContent = data.postPage.postPageContent.html; // Get the post page content
  const featuredImageUrlForPost = data.postPage.featuredImage.url; // Get the featured image URL for the post page

  // You can now use these variables in your components or pass them as props  

  return (
          <Router>
            <div id="wrapper">
              {/* Main content */}
              <div id="main">
                <div className="inner">
                  <Header creatorName={creatorName} />
                    <Routes>
                      <Route path="/" element={
                          <>
                            <Landing
                              pageTitle={pageTitle}
                              creatorName={creatorName}
                              featureImageUrl={featureImageUrl}
                              featureContent={featureContent}
                              serviceSection={serviceSection}
                              serviceSectionTitle={serviceSectionTitle}
                              services={services}
                              featuredblogsectiontitle={featuredblogsectiontitle}
                              featuredBlogPosts={featuredBlogPosts}
                            />
                          </>
                        }
                      />
                      <Route path="/generic" element={
                        <Generic 
                        postPageTitle={postPageTitle}
                        featuredImageUrlForPost={featuredImageUrlForPost}
                        postPageContent={postPageContent}
                        />
                        }
                      />
                      {/* You can add more routes here if needed */}
                      <Route path="/elements" element={
                        <Elements 
                          postPageTitle={postPageTitle}
                          featuredImageUrlForPost={featuredImageUrlForPost}
                          postPageContent={postPageContent} 
                          />
                        }
                        />  
                    </Routes>
                </div>
              </div>
              <Sidebar pageTitle={pageTitle} postTitle={postTitle} articles={articles}/>   
            </div>
          </Router>
        )
}

export default App


