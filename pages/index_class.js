import 'isomorphic-fetch'
import Layout from '../components/Layout'
import StoryList from '../components/StoryList'
import Error from 'next/error'
import Link from 'next/link'
import Head from 'next/head';
// socket stuff
import io from 'socket.io-client'
import { authInitialProps } from '../lib/auth'
import { connect } from 'mongoose'

export default class extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const cookies = cookie.parse(req ? req.headers.cookie || "" : document.cookie)
    const auth = cookies.next-connect.sid;
    var stories, page;

    try {
      page = parseInt(query.page || 1)
      const req = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`)
      stories = await req.json()      
    } catch(e) {
      stories = undefined
    }

    return { stories, page, auth }
  }
  
  componentDidMount () {
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
  }
  render() {
    const { stories, page, auth } = this.props

    if( typeof stories === 'undefined' || ! stories ) return <Error statusCode={503} />

    return (
      <div>
        {auth ? "we have auth!" : null}
        <Layout title={'Hacker News Reader'} 
            description={'A sample PWA built with React and Next.JS'}>
        <StoryList stories={stories} />

      <footer>
        <Link href={`/?page=${page+1}`} ><a>Next Page &gt;</a></Link>
      </footer>

      <style jsx>{`
        footer {
          padding: 2em 1em;
        }
        footer a {
          font-size: 1.5em;
          font-weight: bold;
          color: #ff6600;
          text-decoration: none;
        }
      `}</style>
    </Layout>
      </div>
    )      
  }
}