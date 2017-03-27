import React from 'react'
import Card from './card'
import { Container } from './story-helpers'

export default {
    title: 'Card',
    'with a short label': () => (
        <Container width={300}>
            <Card label="This is a card" tags={[]}/>
        </Container>
    ),
    'with a long label': () => (
        <Container width={300}>
            <Card label="Create a demo of experimental react ecosystem features, such as next.js and storybooks" tags={[]}/>
        </Container>
    ),
    'with a truncated label': () => (
        <Container width={300}>
            <Card label="Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation." tags={[]} />
        </Container>
    )
}
