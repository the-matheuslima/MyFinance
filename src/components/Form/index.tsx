import * as C from "./styles"
import FormDetal from "../FormDetal";
import { List } from "../types/item"
import React, { Dispatch, SetStateAction, useState } from 'react';

type Props = {
    list: List[],
    setList: Dispatch<SetStateAction<List[]>>
}

function Form({ list, setList }: Props) {
    const [inputDescription, setInputDescription] = useState("")
    const [inputValue, setInputValue] = useState(0)
    const [inputRadioTye, setInputRadioTye] = useState("")
    const [color, setColor] = useState("#ffffff")


    const HandleInputDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value;
        setInputDescription(enteredName);
    };

    const HandleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value;
        setInputValue(Number(enteredName));
    };

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputRadioTye(e.target.id)
    }

    const handleColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
    }

    const handleAdd = (event: React.MouseEvent<Element, MouseEvent>) => {
        event.preventDefault();
        if (inputDescription !== "" && inputRadioTye !== "" && inputValue >= 0) {
            setList([...list, { description: inputDescription, backgroundDescription: color, value: inputValue, type: inputRadioTye, id: Math.floor(Math.random() * 1000) }])
        } else {
            alert("Preencha as Informações necessarias")
        }
    }

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
                    <C.FieldsRadio>
                        <C.FieldsLabel htmlFor="entrada">Entrada</C.FieldsLabel>
                        <C.FieldsInputRadio type="radio" name="option" id="entrada" onChange={onValueChange} />
                    </C.FieldsRadio>

                    <C.FieldsRadio>
                        <C.FieldsLabel htmlFor="saida">saida</C.FieldsLabel>
                        <input type="radio" name="option" id="saida" onChange={onValueChange} />
                    </C.FieldsRadio>
                </C.Fields>

                <C.Fields>
                    <C.Button onClick={(event) => handleAdd(event)}>Adicionar</C.Button>
                </C.Fields>

            </C.Form>
            <FormDetal list={list} setList={setList} />
        </>
    );
}

export default Form;
