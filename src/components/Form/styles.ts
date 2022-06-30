import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	margin: 1rem;
	padding: 1rem;
	background-color: #fff;
	border-radius: 5px;
	flex-wrap: wrap;

	@media (max-width: 750px) {
		justify-content: center;
		gap: 20px;
	}
`;

export const Fields = styled.div`
	display: flex;
	gap: 20px;
`;

export const FieldsBoxInput = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FieldsLabel = styled.label`
	color: #7e7e7e;
`;

export const FieldsInput = styled.input`
	padding: 5px;
`;

export const FieldsInputRadio = styled.input``;

export const FieldsInputColor = styled.input`
	width: 25px;
`;

export const FieldsRadio = styled.div`
	display: flex;
	gap: 5px;
`;

export const Button = styled.button`
	padding: 1rem;
	color: #fff;
	border-radius: 5px;
	transition: background 0.5s ease;
	background-color: #025918;
	cursor: pointer;
	border: none;

	&:hover {
		background-color: #038c33;
	}
`;
