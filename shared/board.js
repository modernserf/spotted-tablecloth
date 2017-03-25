import React from 'react'
import styled from 'styled-components'
import Column from './column'
import { PlainButton } from './button'

const Container = styled.section`
    width: 100%;
    height: 100%;
    background-color: #06c;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`
const Header = styled.header`
    padding: 8px;
    flex: 0 0 auto;
    background-color: #eee;
    box-shadow: 0 4px 4px rgba(0,0,0,0.1);
    z-index: 1;
`

const BoardTitle = styled.h1`
    font-weight: bold;
    font-size: 24px;
`

const Body = styled.ul`
    flex: 1 1 auto;
    display: flex;
    align-items: stretch;
    overflow: scroll;
    padding: 16px;
`

const ColumnWrap = styled.li`
    margin-left: 16px;
    flex: 0 0 260px;
    &:first-child {
        margin-left: 0;
    }
`

const AddColumnBody = styled(PlainButton)`
    width: 100%;
    height: 100px;
    border-radius: 8px;
    background-color: rgba(0,0,0,0.2);
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;

`

const AddColumn = () => (
    <AddColumnBody>
        Add a Column…
    </AddColumnBody>
)

export default function Board ({ label, columns }) {
    return <Container>
        <Header>
            <BoardTitle>{label}</BoardTitle>
        </Header>
        <Body>{columns.map(({ id, label, cards }) =>
            <ColumnWrap key={id}>
                <Column label={label} cards={cards}/>
            </ColumnWrap>
        )}
        <ColumnWrap>
            <AddColumn/>
        </ColumnWrap>
        </Body>
    </Container>
}
