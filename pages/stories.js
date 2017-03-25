import React from 'react';
import stories from '../.data/stories';

const modules = buildList(stories)

class Sidebar extends React.Component {
    render () {
        const { setComponent } = this.props
        return <nav>
            <ul>{modules.map((m, i) =>
                <li key={i}>
                    <h2>{m.title}</h2>
                    <ul>{m.children.map(({ label, component }, j) =>
                        <li key={j}
                            onClick={() => setComponent(component)}>
                            <h3>{label}</h3>
                        </li>
                    )}</ul>
                </li>
            )}</ul>
        </nav>
    }
}

export default class StoryBook extends React.Component {
    state = {
        component: null,
    }
    setComponent = (component) => {
        this.setState({ component })
    }
    render () {
        const { component } = this.state
        const Component = component || modules[0].children[0].component

        return (
            <section>
                <Sidebar
                    component={component}
                    setComponent={this.setComponent}
                />
                <div>
                    <Component />
                </div>
            </section>
        )
    }
}

function buildList (modules) {
    return modules.map((m) => {
        const children = Object.entries(m)
            .filter(([label]) => label !== "title")
            .map(([label, component]) => ({ label, component }))
        return { title: m.title, children }
    })
}
