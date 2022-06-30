import styled from 'styled-components';

export const Card = styled.div`
	background-color: #fff;
	width: 25%;
	border-radius: 5px;
	padding: 1rem;

	@media (max-width: 750px) {
		width: 100%;
	}
`;

export const CardContent = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const CardTitle = styled.div`
	font-weight: bold;
	padding: 1rem;
`;

export const Arrow = styled.p`
	font-size: 20px;
`;

export const CardValue = styled.h2`
	font-size: 2rem;
	text-align: center;
`;
