import * as C from "./styles"
import FormDetal from "../FormDetal";
import React, { useContext, useState } from 'react';
import { ListContext } from "../../context/ListContext";

function Form() {
    const { handleAdd } = useContext(ListContext);

    const [inputDescription, setInputDescription] = useState("")
    const [inputValue, setInputValue] = useState(0)
    const [inputRadioType, setInputRadioType] = useState("")
    const [color, setColor] = useState("#ffffff")
    const [inputDate, setInputDate] = useState("")

    const HandleInputDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value;
        setInputDescription(enteredName);
    };

    const HandleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value;
        setInputValue(Number(enteredName));
    };

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputRadioType(e.target.id)
    };

    const handleColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
    };

    const handleInputDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputDate(e.target.value);
    };

    return (
        <>
            <C.Form>
                <C.Fields>
                    <C.FieldsBoxInput>
                        <C.FieldsLabel htmlFor="description">Descrição</C.FieldsLabel>
                        <div style={{ display: "flex", justifyContent: "space-around", gap: "10px" }}>
                            <C.FieldsInput type="text" value={inputDescription} onChange={HandleInputDescription} id="description" name="description" style={{ backgroundColor: `${color}` }} />
                            <C.FieldsInputColor type="color" name="color" id="description" value={color} onChange={handleColorInput} />
                        </div>
                    </C.FieldsBoxInput>
                </C.Fields>

                <C.Fields>
                    <C.FieldsBoxInput>
                        <C.FieldsLabel htmlFor="value">Valor</C.FieldsLabel>
                        <C.FieldsInput type="number" name="value" id="value" value={inputValue} onChange={HandleInputValue} />
                    </C.FieldsBoxInput>
                </C.Fields>

                <C.Fields>
                    <C.FieldsBoxInput>
                        <C.FieldsLabel htmlFor="date">data</C.FieldsLabel>
                        <C.FieldsInput type="date" name="date" id="date" onChange={handleInputDate} />
                    </C.FieldsBoxInput>
                </C.Fields>

                <C.Fields>
                    <C.FieldsRadio>
                        <C.FieldsLabel htmlFor="entrada">Entrada</C.FieldsLabel>
                        <C.FieldsInputRadio type="radio" name="option" id="entrada" onChange={onValueChange} />
                    </C.FieldsRadio>

                    <C.FieldsRadio>
                        <C.FieldsLabel htmlFor="saida">saida</C.FieldsLabel>
                        <C.FieldsInputRadio type="radio" name="option" id="saida" onChange={onValueChange} />
                    </C.FieldsRadio>
                </C.Fields>

                <C.Fields>
                    <C.Button onClick={(event) => handleAdd(event, inputDescription, color, inputValue, inputDate, inputRadioType)}>Adicionar</C.Button>
                </C.Fields>

            </C.Form>
            <FormDetal />
        </>
    );
}

export default Form;
