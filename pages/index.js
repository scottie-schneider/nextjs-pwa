import { authInitialProps } from "../lib/auth";
import React, { useState, useEffect } from "react";
import { getSessionFromClient, getSessionFromServer, redirectUser } from '../lib/auth'

import Layout from '../components/Layout';
import StoryList from '../components/StoryList'

const Index = ({ classes, auth, stories }) => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }    
  })
  return (
    <main >
      {auth.user && auth.user._id ? (
        // Auth User Page
        <div>
          Auth user page
          <Layout title={'Hacker News Reader'} 
          description={'A sample PWA built with React and Next.JS'}>
            <StoryList stories={stories} />
          </Layout>
        </div>
      ) : (
        // Splash Page (UnAuth Page)
        <div>
          Un Auth page, splash page
        </div>
      )}
    </main>
  )
}
// Issues
// 1 - use a hook to get the data for the stories 
// 2 - DONE ensure you're mounting the service worker (used component did mount)

// Index.getInitialProps = authInitialProps();
Index.getInitialProps = async function({req, res, query: { userId }}) {
  // getting the auth and ensuring it's populated as props
  const auth = req ? getSessionFromServer(req) : getSessionFromClient();
  const currentPath = req ? req.url : window.location.pathname;
  const user = auth.user;
  const isAnonymous = !user;
  // getting the stories from hacker news to seed our app
  let stories
  if (true && isAnonymous && currentPath !== "/signin") {
    return redirectUser(res, "/signin");
  }
  try {
    const req = await fetch(`https://node-hnapi.herokuapp.com/news?page=1`)
    stories = await req.json()    
  } catch(e){
    stories = undefined
  }
  return { auth, userId, stories };
};

export default Index;
