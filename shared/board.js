import React from "react"
import styled from "styled-components"
import Column from './column'

const Container = styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #06c;
`
const Header = styled.header`
    width: 100%;
    padding: 8px;
    background-color: #eee;
    box-shadow: 0 4px 4px rgba(0,0,0,0.1);
    z-index: 1;
`

const BoardTitle = styled.h1`
    font-weight: bold;
    font-size: 24px;
`

const Body = styled.ul`
    display: flex;
    align-items: stretch;
    overflow: scroll;
    height: 100%;
`

const ColumnWrap = styled.li`
    padding: 8px;
    flex: 0 0 260px;
`

const AddColumnBody = styled.div`
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
