import React, { useContext } from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles"
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp, FaDollarSign } from 'react-icons/fa';
import { ListContext } from "../../context/ListContext";

function Resume() {
    const { expense, income, total } = useContext(ListContext);
    return (
        <C.Container>
            <ResumeItem title="Entradas" value={income} icons={<FaRegArrowAltCircleUp />} />
            <ResumeItem title="Saidas" value={expense} icons={<FaRegArrowAltCircleDown />} />
            <ResumeItem title="Total" value={total} icons={<FaDollarSign />} />
        </C.Container>
    );
};

export default Resume;
