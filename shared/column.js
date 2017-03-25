import React from "react"
import styled from "styled-components"
import Card from './card'

const ColumnBody = styled.section`
    width: 240px;
    padding: 8px;
    background-color: #eee;
    box-shadow: 0 0 4px rgba(0,0,0,0.1);
    border-radius: 4px;
`

const ColumnLabel = styled.h1`
    font-weight: bold;
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const ColumnInner = styled.ul`
    padding-top: 8px;
`
const CardWrap = styled.li`
    padding-bottom: 8px;
`

const AddCard = () => (
    <div>Add a card…</div>
)

export default function Column ({ label, cards }) {
    return <ColumnBody>
        <ColumnLabel>{label}</ColumnLabel>
        <ColumnInner>{cards.map(({ id, label, tags }) =>
            <CardWrap key={id}>
                <Card label={label} tags={tags} />
            </CardWrap>
        )}</ColumnInner>
        <AddCard />
    </ColumnBody>
}
