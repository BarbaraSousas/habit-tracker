// Entry point for the build script in your package.json
// Turbo disabled - using Inertia for SPA navigation
import "./controllers"

console.log('Application JS loaded')

import React from 'react'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

// Import all pages explicitly
import Home from './Pages/Home'
import HabitsIndex from './Pages/Habits/Index'
import HabitsNew from './Pages/Habits/New'
import HabitsEdit from './Pages/Habits/Edit'
import HabitsShow from './Pages/Habits/Show'

const pages = {
  'Home': Home,
  'Habits/Index': HabitsIndex,
  'Habits/New': HabitsNew,
  'Habits/Edit': HabitsEdit,
  'Habits/Show': HabitsShow,
}

console.log('Setting up Inertia...')

createInertiaApp({
  id: 'app',
  resolve: name => {
    console.log('Resolving page:', name)
    const page = pages[name]
    if (!page) {
      console.error(`Page not found: ${name}`)
    }
    return page
  },
  setup({ el, App, props }) {
    console.log('Inertia setup called, el:', el)
    createRoot(el).render(<App {...props} />)
  },
})
