import React from 'react'
import Board from './board'

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
    'Polaroid bicycle rights PBR&B aesthetic',
    'Tousled neutra seitan',
    'air plant street art pickled hammock trust fund taxidermy raw denim'
].map((label, i) => ({ label, tags: [], id: i + 1 }))

const cols = ['Backlog', 'To Do', 'Doing', 'Done', 'Released']
    .map((label, i) => ({
        id: 100 + i,
        label,
        cards: cards.slice(i * 3, i * 3 + 3)
    }))

const bigCol = [{
    id: 100,
    label: 'To Do',
    cards
}]

export default {
    title: 'Board',
    'empty': () => (
        <Board label="Empty Board" columns={[]}/>
    ),
    'with columns': () => (
        <Board label="Board with items" columns={cols} />
    ),
    'with a big column': () => (
        <Board label="Board with one big column" columns={bigCol} />
    )
}
