import React from "react"
import Column from "./column"

const cards = [
    "Letterpress unicorn slow-carb",
    "+1 post-ironic shoreditch messenger bag heirloom dreamcatcher try-hard microdosing cray pitchfork celiac",
    "Sustainable celiac polaroid trust fund listicle man bun",
    "8-bit umami VHS",
    "kombucha blog pop-up forage brunch put a bird on it chicharrones ennui prism",
    "Austin seitan scenester banjo",
    "drinking vinegar pickled knausgaard tilde",
    "Cornhole iceland lyft raw denim",
    "man braid portland street art cold-pressed deep v unicorn",
    "Truffaut prism tumeric sustainable thundercats",
    "mixtape locavore",
    "Polaroid bicycle rights PBR&B aesthetic",
].map((label, i) => ({ label, tags: [], id: i + 1 }))

export default {
    title: "Column",
    "empty": () => (
        <Column label="To Do" cards={[]} />
    ),
    "with a few cards": () => (
        <Column label="Doing" cards={cards.slice(0,3)}/>
    ),
    "with many cards": () => (
        <Column label="Doing" cards={cards}/>
    ),
    "with a long label": () => (
        <Column label="The quick brown fox jumps over the lazy dog" cards={cards}/>
    )
}
