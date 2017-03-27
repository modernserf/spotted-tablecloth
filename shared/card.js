import React from 'react'
import styled from 'styled-components'
import { PlainButton } from './button'

const CardBody = styled.section`
    width: 100%;
    min-height: 50px;
    border-radius: 8px;
    background-color: #fcfcfc;
    box-shadow: 0 0 4px rgba(0,0,0,0.1);
    padding: 8px;
    &:hover {
        background-color: #eee;
    }
    &:hover > .edit-button {
        opacity: 1;
    }
`

const CardEdit = styled(PlainButton)`
    opacity: 0;
    position: absolute;
    top: 4px;
    right: 4px;
    border-radius: 4px;
    font-size: 12px;
    background-color: rgba(240,240,240,0.5);
    &:hover {
        background-color: rgba(224,224,224,0.5);
    }
`

const CardTags = styled.div``

const CardLabel = styled.h1`
    font-size: 14px;
    line-height: 18px;
    font-weight: bold;
`

export default function Card ({ label, tags }) {
    return <CardBody>
        <CardTags tags={tags}/>
        <CardLabel>{truncate(label)}</CardLabel>
        <CardEdit className="edit-button">✏️</CardEdit>
    </CardBody>
}

function truncate (text) {
    if (text.length > 140) {
        return text.slice(0, 140) + '…'
    } else {
        return text
    }
}
