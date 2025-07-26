import ReactDOM from 'react-dom/client';
import React, { StrictMode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client'




const PostPage = () => {
  const { postSlug } = useParams(); // Get the slug from the URL
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { homepageSlug: 'home', postSlug },
  });

  return (
    <>
    <Generic
      postPageTitle={postPageTitle}
      featuredImageUrlForPost={featuredImageUrlForPost}
      postPageContent={postPageContent}
    />
    </>
  );
};

export default PostPage;