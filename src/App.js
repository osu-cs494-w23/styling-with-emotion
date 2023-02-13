import React from 'react'

function ArticleText(props) {
    return <p>{props.children}</p>
}

function FootnoteText(props) {
    return <ArticleText>{props.children}</ArticleText>
}

function Button(props) {
    return <button>{props.children}</button>
}

function PhotoCard(props) {
    return (
        <div>
            <img src={props.url} alt={props.caption} />
            <p>{props.caption}</p>
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>What a boring app...</h1>
        </div>
    )
}

export default App
