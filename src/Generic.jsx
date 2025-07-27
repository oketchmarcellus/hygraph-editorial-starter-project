import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_POST_DATA = gql`
  query myoperation($postSlug: String) {
    postPage(where: { slug: $postSlug }) {
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

const Generic = () => {
    const { postSlug = 'generic' } = useParams(); // Get postSlug from URL
    const { loading, error, data } = useQuery(GET_POST_DATA, {
        variables: { postSlug },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    
    console.log('Current postSlug in Generic:', postSlug); // Log the postSlug
    console.log('Data in Generic:', data); // Log the data passed to Generic
    const postPageTitle = data.postPage?.postTitle; // Get the post title for the generic page
    const postPageContent = data.postPage?.postPageContent.html; // Get the post page content
    const featuredImageUrlForPost = data.postPage.featuredImage.url; // Get the featured image URL for the post page
    
    console.log( postPageTitle, postPageContent, featuredImageUrlForPost); // Log the post details
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