import styled, {createGlobalStyle} from 'styled-components'

export const Global = createGlobalStyle`
    * {
        box-sizing:border-box;
        margin:0;
        
        padding:0;
        font-family: 'Source Sans Pro', sans-serif;
    }
    body,html {
    margin: 0;
    padding: 0;
    
}
`

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
    @media screen and (max-width: 768px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`