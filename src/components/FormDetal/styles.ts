import styled from 'styled-components';

export const Table = styled.table`
	width: 98%;
	background-color: #fff;
	padding: 20px;
	box-shadow: 0px 0px 5px #ccc;
	border-radius: 10px;
	margin-top: 20px;
	/* margin: 10px 1rem 1rem; */
	margin: 0 auto;
	text-align: left;

	@media (max-width: 750px) {
		width: 100%;
	}
`;

export const TableHead = styled.thead``;

export const TableHeadColumn = styled.th``;

export const TableBody = styled.tbody``;

export const TableColumn = styled.tr``;

export const TableTd = styled.td`
	padding: 5px;
`;

export const TableBottom = styled.button`
	background-color: unset;
	border: unset;
	font-size: 20px;
	cursor: pointer;
`;
type Props = {
	background: string;
};
export const TableTdPer = styled.p.attrs((props: Props) => ({
	background: props.background,
}))<Props>`
	background-color: ${(props) => props.background};
	padding: 8px 13px;
	width: fit-content;
	border-radius: 5px;
`;
