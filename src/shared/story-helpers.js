import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    width: 100px;
    display: inline-block;
`

export function Range ({ value, onChange }) {
    return <input value={value}
        type="range"
        onChange={(e) => onChange(Number(e.target.value))}
        min={0}
        max={1000}/>
}

export class Container extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            width: props.width,
            height: props.height,
            hover: false
        }
    }
    setValue = (key) => (value) => {
        this.setState({[key]: value})
    }
    render () {
        const { width, height, hover } = this.state
        const style = {
            border: hover ? '1px dashed #ccc' : '1px solid white',
            width: width || 'auto',
            height: height || 'auto',
            marginBottom: 16
        }
        return (
            <div>
                <div style={style}>
                    {this.props.children}
                </div>
                <div onMouseEnter={() => this.setState({ hover: true })}
                    onMouseLeave={() => this.setState({ hover: false })}>
                    {this.props.width && <div>
                        <Label>Width: {width}</Label>
                        <Range value={width} onChange={this.setValue('width')}/>
                    </div>}
                    {this.props.height && <div>
                        <Label>Height: {height}</Label>
                        <Range value={height} onChange={this.setValue('height')}/>
                    </div>}
                </div>

            </div>
        )
    }
}
