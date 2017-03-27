import React from 'react'
import styled from 'styled-components'
import Card from './card'
import { PlainButton } from './button'

const ColumnBody = styled.section`
    width: 100%;
    max-height: 100%;
    background-color: #eee;
    box-shadow: 0 0 4px rgba(0,0,0,0.1);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
`

const ColumnHeader = styled.header`
    flex: 0 0 auto;
    padding: 8px 8px 0;
    box-shadow: 0 8px 8px -4px #eee;
    z-index: 1;
`
const ColumnFooter = styled.footer`
    flex: 0 0 auto;
    box-shadow: 0 -8px 8px -4px #eee;
    z-index: 1;
`

const ColumnLabel = styled.h1`
    font-weight: bold;
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const ColumnInner = styled.ul`
    overflow: scroll;
    flex: 0 1 auto;
    padding: 8px 8px 0;
`
const CardWrap = styled.li`
    padding-bottom: 8px;
`

const AddCard = styled(PlainButton)`
    display: block;
    color: #666;
    font-size: 14px;
    padding: 8px;
    text-align: left;
    width: 100%;
    &:hover {
        background-color: rgba(0,0,0,0.1);
        text-decoration: underline;
    }
`

export default function Column ({ label, cards }) {
    return <ColumnBody>
        <ColumnHeader>
            <ColumnLabel>{label}</ColumnLabel>
        </ColumnHeader>
        <ColumnInner>{cards.map(({ id, label, tags }) =>
            <CardWrap key={id}>
                <Card label={label} tags={tags} />
            </CardWrap>
        )}</ColumnInner>
        <ColumnFooter>
            <AddCard onClick={() => { console.log('add') }}>
                Add a card…
            </AddCard>
        </ColumnFooter>
    </ColumnBody>
}
