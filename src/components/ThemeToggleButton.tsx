"use client"
import React from 'react'
import { Button } from './ui/button'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from 'next-themes'

const ThemeToggleButton = () => {

    const {theme, setTheme} = useTheme();
  return (
    <Button variant="outline" size="icon" className='h-8 w-8 rounded-md'
    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <FaSun className='absolute h-8 w-8 rotate-0 scale-100 dark:rotate-90 dark:scale-0'></FaSun>
        <FaMoon className='absolute h-8 w-8 rotate-90 scale-0 dark:rotate-0 dark:scale-100'></FaMoon>
    </Button>
  )
}

export default ThemeToggleButton