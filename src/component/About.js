import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' , color: "whitesmoke", fontFamily: "italic",minHeight: 'calc(100vh - 60px)', paddingBottom: '60px'}}>
      <h1>Stop Juggling, Start Doing</h1>
      <p>Todo Ease was built to take the mental load off your shoulders so you can actually focus. Whether it’s a quick reminder or a big project goal, you can add and delete tasks in seconds. No clutter, no over-complicated menus—just a clean space to get your thoughts down and get to work.</p>
      <br></br>
      <h2>How It Works</h2>
      <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', listStyle: 'none',padding: '0'}}>
    <li> When you check off a task, it automatically drops to the bottom. This keeps your "to-do" list fresh and your "done" list as a little badge of honor for the day.</li>
    <li> Don't worry about hitting save. The app retains your tasks even if you close the tab, so your progress is right where you left it when you come back.</li>
    <li> With built-in routing, moving through the app feels snappy and natural. It’s designed to keep up with your pace, not slow you down.</li>
    </ul>
    <br></br>
      <h2>Built for the Hustle</h2>
      <p>Todo Ease is created by Garvit Saxena as a personal project to stay organized and disciplined. It’s a simple, reliable tool made for anyone who prefers a "no-nonsense" approach to getting things done. It’s not just a list; it’s about making your daily routine a little smoother.</p>

    </div>
  )
}

export default About
