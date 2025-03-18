import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nighty from './pages/Nighty.jsx'
import Twenty from './pages/Twenty.jsx'
import TwentyTen from './pages/TwentyTen.jsx'
import TimeMachine from './pages/timeMachine.jsx'
import NinetyFive from './pages/NinetyFive.jsx'

createRoot(document.getElementById('root')).render(
    <TimeMachine />
)
