import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles"
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp, FaDollarSign } from 'react-icons/fa';

type Props = {
    income: number,
    expense: number,
    total: number,
}

function Resume({ income, expense, total }: Props) {
    return (
        <C.Container>
            <ResumeItem title="Entradas" value={income} icons={<FaRegArrowAltCircleUp />} />
            <ResumeItem title="Saidas" value={expense} icons={<FaRegArrowAltCircleDown />} />
            <ResumeItem title="Total" value={total} icons={<FaDollarSign />} />
        </C.Container>
    );
}

export default Resume;
