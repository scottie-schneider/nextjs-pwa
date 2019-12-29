import { authInitialProps } from "../lib/auth";
import React, { useState, useEffect } from "react";


const Index = ({ classes, auth }) => {
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
// 2 - ensure you're mounting the service worker (used component did mount)

Index.getInitialProps = authInitialProps();

export default Index;
