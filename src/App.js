/** @jsxImportSource @emotion/react */

import React from 'react'
import { css } from '@emotion/react'

function ArticleText(props) {
    const styles = css`
        margin: 0;
        font-size: 18px;
        color: black;
        font-variant: small-caps;
    `
    return <p css={styles} {...props}>{props.children}</p>
}

function FootnoteText(props) {
    const styles = css`
        font-size: 12px;
        color: gray;
    `
    return <ArticleText css={styles}>{props.children}</ArticleText>
}

function Button(props) {
    const styles = css`
        color: ${props.secondary ? 'royalblue' : 'snow'};
        background-color: ${props.secondary ? 'whitesmoke' : 'royalblue'};
        border: 2px solid royalblue;
        padding: 10px;
        cursor: pointer;
        margin: 0 5px;

        &:hover {
            background-color: gainsboro;
        }
    `
    return <button css={styles}>{props.children}</button>
}

const baseStyles = css`
    color: indigo;
`

function PhotoCard(props) {
    const styles = css`
        ${baseStyles}
        display: inline-block;
        border: 1px solid dimgray;
        padding: 5px;
        img {
            max-width: 100px;
        }
        p {
            text-align: center;
        }
    `
    return (
        <div css={styles}>
            <img src={props.url} alt={props.caption} />
            <p>{props.caption}</p>
        </div>
    )
}

const color = "olivedrab"
const styles = css`
    background-color: lavenderblush;
    color: ${color};
    margin: 0;
    padding: 10px;
`

function App() {
    return (
        <div>
            <h1 css={styles}>What a boring app...</h1>
            <Button>This is a button</Button>
            <Button secondary>This is a secondary button</Button>
            <PhotoCard url="http://placekitten.com/480/480" caption="Kitty" />

            <ArticleText>This is an article...</ArticleText>
            <FootnoteText>This is a footnote</FootnoteText>
        </div>
    )
}

export default App
