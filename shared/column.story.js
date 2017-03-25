import React from 'react'
import Column from './column'
import { Container } from './story-helpers'

const cards = [
    'Letterpress unicorn slow-carb',
    '+1 post-ironic shoreditch messenger bag heirloom dreamcatcher try-hard microdosing cray pitchfork celiac',
    'Sustainable celiac polaroid trust fund listicle man bun',
    '8-bit umami VHS',
    'kombucha blog pop-up forage brunch put a bird on it chicharrones ennui prism',
    'Austin seitan scenester banjo',
    'drinking vinegar pickled knausgaard tilde',
    'Cornhole iceland lyft raw denim',
    'man braid portland street art cold-pressed deep v unicorn',
    'Truffaut prism tumeric sustainable thundercats',
    'mixtape locavore',
    'Polaroid bicycle rights PBR&B aesthetic'
].map((label, i) => ({ label, tags: [], id: i + 1 }))

export default {
    title: 'Column',
    'empty': () => (
        <Container width={300}>
            <Column label="To Do" cards={[]} />
        </Container>
    ),
    'with a few cards': () => (
        <Container width={300}>
            <Column label="Doing" cards={cards.slice(0, 3)}/>
        </Container>
    ),
    'with many cards': () => (
        <Container width={300} height={500}>
            <Column label="Doing" cards={cards}/>
        </Container>
    ),
    'with a long label': () => (
        <Container width={300}>
            <Column label="The quick brown fox jumps over the lazy dog" cards={cards.slice(0, 3)}/>
        </Container>
    )
}
