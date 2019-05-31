import styled from 'styled-components'

const Container = styled.div`
	max-width: ${ props => props.fullWidth ? "100%" : "1200px" };
	margin-right: auto;
	margin-left: auto;
`
export default Container
