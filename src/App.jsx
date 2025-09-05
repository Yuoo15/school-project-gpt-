import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Classes from './pages/classes'
import Teachers from './pages/teachers'
import Subjects from './pages/subjects'
import Schedule from './pages/shedule'
import Settings from './pages/settings'


export default function App() {
return (
<div className="app">
<header className="topbar">
<h1>School Scheduler (MVP)</h1>
<nav>
<Link to="/">Home</Link>
<Link to="/classes">Классы</Link>
<Link to="/teachers">Учителя</Link>
<Link to="/subjects">Предметы</Link>
<Link to="/schedule">Расписание</Link>
<Link to="/settings">Настройки</Link>
</nav>
</header>


<main className="main">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/classes" element={<Classes />} />
<Route path="/teachers" element={<Teachers />} />
<Route path="/subjects" element={<Subjects />} />
<Route path="/schedule" element={<Schedule />} />
<Route path="/settings" element={<Settings />} />
</Routes>
</main>


<footer className="footer">Сделано для школы — MVP</footer>
</div>
)
}