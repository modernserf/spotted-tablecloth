import React from 'react'
import styled from 'styled-components'
const r = require.context('../shared', true, /\.story\.js$/)
const stories = r.keys().map((key) => r(key).default)
const Container = styled.section`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: stretch;
    height: 100%;
`

const SidebarContainer = styled.div`
    flex: 0 0 300px;
`

const BodyContainer = styled.div`
    margin: 16px;
    flex: 1 1 100%;
    overflow: scroll;
`

class Sidebar extends React.Component {
    render () {
        const { modules } = this.props
        return <nav>
            <ul>{modules.map((m, i) =>
                <li key={i}>
                    <Link href={{
                        pathname: 'stories',
                        query: { parent: m.title }
                    }}>
                    <h2>{m.title}</h2>
                    </Link>
                    <ul>{m.children.map(({ label, component }, j) =>
                        <li key={j}>
                            <Link href={{
                                pathname: 'stories',
                                query: { parent: m.title, child: label }
                            }}>
                            <h3>{label}</h3>
                            </Link>
                        </li>
                    )}</ul>
                </li>
            )}</ul>
        </nav>
    }
}

export default class StoryBook extends React.Component {
    render () {
        const modules = buildList(stories)
        const { parent, child } = this.props.url.query
        const parentModule = modules.find(({ title }) => title === parent) ||
            modules[0]
        const childModule = parentModule.children.find(
            ({ label }) => label === child) || parentModule.children[0]
        const Component = childModule.component
        return (
            <Container>
                <SidebarContainer>
                    <Sidebar
                        modules={modules}
                        component={Component}
                    />
                </SidebarContainer>
                <BodyContainer>
                    <Component />
                </BodyContainer>
            </Container>
        )
    }
}

function buildList (modules) {
    return modules.map((m) => {
        const children = Object.entries(m)
            .filter(([label]) => label !== 'title')
            .map(([label, component]) => ({ label, component }))
        return { title: m.title, children }
    })
}

function Link ({ href, children }) {
    return <a href={buildHref(href)}>{children}</a>
}

function buildHref ({ pathname, query }) {
    const qs = Object.keys(query)
        .reduce((arr, key) => arr.concat([`${key}=${encodeURIComponent(query[key])}`]), [])
        .join('&')
    return `/${pathname}?${qs}`
}
