import './style.css'
import React from 'react'
import { render } from 'react-dom'
const r = require.context('./pages', true, /\.js$/)
const pages = r.keys().reduce((m, key) =>
    Object.assign(m, {
        [key.replace('./', '').replace('.js', '')]: r(key).default
    }), {})

const pathname = window.location.pathname.substr(1)
const query = window.location.search
    .replace('?', '')
    .split(/&/g)
    .map((str) => str.split('='))
    .reduce((m, [k, v]) => Object.assign(m, { [k]: decodeURIComponent(v) }), {})

const Page = pages[pathname || 'index']

render(
    <Page url={{ pathname, query }}/>,
    document.getElementById('root')
)
