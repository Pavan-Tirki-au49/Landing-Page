import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Row from './components/Row';
import {
  TRENDING_MOVIES,
  TOP_RATED,
  ACTION_MOVIES,
  NEW_RELEASES,
  POPULAR_ON_PLATFORM,
  WATCH_IT_AGAIN,
  DRAMA_SERIES,
  CONTINUE_WATCHING
} from './data/mockData';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />

      <div className="content-rows" style={{ marginTop: '-150px', position: 'relative', zIndex: 10 }}>
        <Row title="Trending Now" movies={TRENDING_MOVIES} />
        <Row title="Popular on Platform" movies={POPULAR_ON_PLATFORM} />
        <Row title="Continue Watching" movies={CONTINUE_WATCHING} />
        <Row title="Top Rated" movies={TOP_RATED} />
        <Row title="New Releases" movies={NEW_RELEASES} />
        <Row title="Action Thrillers" movies={ACTION_MOVIES} />
        <Row title="Watch It Again" movies={WATCH_IT_AGAIN} />
        <Row title="Drama Series" movies={DRAMA_SERIES} />
      </div>

      <footer className="footer">
        <div className="footer-links">
          <p>Audio and Subtitles</p>
          <p>Media Center</p>
          <p>Privacy</p>
          <p>Contact Us</p>
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </div>
        <div className="copyright">
          © 2026 StreamFlix, Inc.
        </div>
      </footer>
    </div>
  );
}

export default App;
