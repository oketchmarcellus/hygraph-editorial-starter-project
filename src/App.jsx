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

  return (
    <>
			<div id="wrapper">
          <Landing pageTitle={pageTitle} creatorName={creatorName} featureImageUrl={featureImageUrl} featureContent={featureContent}/>
          <Sidebar  pageTitle={pageTitle} />
      </div>
    </>
  )
}

export default App
