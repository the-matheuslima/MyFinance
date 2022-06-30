import styled from 'styled-components';

export const Container = styled.div`
	margin-inline: auto;
	display: flex;
	justify-content: space-between;
	margin-top: -57px;
	width: 90%;
	flex-wrap: wrap;
	gap: 10px;
	@media (max-width: 750px) {
		margin-top: -20px;
	}
`;
