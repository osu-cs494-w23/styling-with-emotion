import styled from '@emotion/styled/macro'
import { Global, css } from '@emotion/react'

const globalStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    html {
        font-family: 'Roboto', sans-serif;
    }
    body {
        margin: 0;
    }
`

const breakpoints = {
    sm: 768,
    med: 1024
}

// const StyledNavLink = styled(NavLink)`
//     .active {

//     }
// `

const TitleHeader = styled.h1`
    background-color: lavenderblush;
    color: olivedrab;
    margin: 0;
    padding: 10px;
`

const Child = styled.div`
    color: tomato;
`

const Parent = styled.div`
    color: springgreen;
    ${Child} {
        color: springgreen;
    }
`

const padding = "10px"
const Button = styled.button`
    color: ${props => props.secondary ? 'royalblue' : 'snow'};
    background-color: ${props =>props.secondary ? 'whitesmoke' : 'royalblue'};

    border: 2px solid royalblue;
    padding: ${padding};
    cursor: pointer;
    margin: 0 5px;

    &:hover {
        background-color: ${props => props.secondary ? 'gainsboro' : 'dodgerblue'};
    }

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.med}px) {
        font-size: 24px;
    }

    @media (max-width: ${breakpoints.sm}px) {
        font-size: 32px;
    }
`

function App() {
    return (
        <>
            <Global styles={globalStyles} />
            <div>
                <TitleHeader>This is my title</TitleHeader>
                <Button onClick={() => console.log("The button was clicked")}>This is a button</Button>
                <Button secondary>This is a secondary button</Button>

                <Parent>
                    This text is in the parent
                    <Child>This text is in the child</Child>
                </Parent>
                <Child>This is an unnested child</Child>
            </div>
        </>
    )
}

export default App
