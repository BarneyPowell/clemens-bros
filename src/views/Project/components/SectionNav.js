import Styled from 'styled-components';

const SectionNav = Styled.nav`
   
    overflow: auto;
    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }
    
    span.spacer {
        
    }

    ul {
        max-width: 63.75em;
        margin: 0 auto;
        flex-wrap: nowrap;
        color: rgba(255,255,255,0.8);
        li {
            background-color: rgba(0,0,0,0.8);
            flex: 0 0 auto;
            font-family: 'Quicksand', sans-serif;
            text-transform: uppercase;
            font-size: 0.75em;
            font-weight: bold;

            a {
                padding: 1rem;
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                display: inline-block;
                color: #eee;
                text-decoration: none;
            }
            

            &.active {
                background-color: transparent;
                color: #222;
                a {
                    color: #222;
                }
            }

            &:last-child {
                flex: 1 0 auto;
            }
        }
    }
`;


export default SectionNav;