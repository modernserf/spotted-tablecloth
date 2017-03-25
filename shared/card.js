import React from "react"
import styled from "styled-components"

const CardBody = styled.section`
    width: 100%;
    min-height: 50px;
    border-radius: 8px;
    background-color: #fcfcfc;
    box-shadow: 0 0 4px rgba(0,0,0,0.1);
    padding: 8px;
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
    </CardBody>
}

function truncate (text) {
    if (text.length > 140) {
        return text.slice(0, 140) + "…"
    } else {
        return text
    }
}
