import { useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import Landing from './Landing';
import Sidebar from './Sidebar';

import './App.css'


const GET_DATA = gql`
query findPage($pageslug: String) {
  page(where: {slug: $pageslug}) {
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
            featuredBlogPostTitle
            featuredPostExcerpt
          }
        }
        sectionTitle
      }
    }
  }
}
`;

function App() {
  // Use the useQuery hook to fetch data from the HygraphQL endpoint
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { pageslug: 'home' }, // Replace 'home' with the actual slug you want to query
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pageTitle = data.page.pageTitle;// Get the page title from the query result
  const creatorName = data.page.createdBy.name; // Get the creator's name from the query result
  const featureSection = data.page.featureSection; // Get the feature section content
  const featureContent = data.page.featureSection.featuredPostContent.html; // Get the HTML content of the feature section
  const featureImageUrl = data.page.featureSection.featurePostImage.url; // Get the feature image URL
  const serviceSection = data.page.serviceSection; // Get the service section content
  const serviceSectionTitle = data.page.serviceSection.sectionTitle; // Get the service section title
  const serviceItems = data.page.serviceSection.sectionContents; // Get the service items
  const featuredblogsectiontitle = data.page.featuredBlogPostSection.sectionTitle; // Get the featured blog post section title
  const featuredBlogPostSection = data.page.featuredBlogPostSection; // Get the featured blog post section content
  const featuredBlogPosts = data.page.featuredBlogPostSection.sectionContents; // Get the featured blog posts
  // You can now use these variables in your components or pass them as props  

  return (
    <>
			<div id="wrapper">
          <Landing pageTitle={pageTitle} creatorName={creatorName} featureImageUrl={featureImageUrl} 
          featureContent={featureContent} serviceSection={serviceSection} serviceSectionTitle={serviceSectionTitle}/>
          <Sidebar  pageTitle={pageTitle} />
      </div>
    </>
  )
}

export default App
