import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import * as C from "./styles"
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp, FaTrash } from 'react-icons/fa';
import { ListContext } from "../../context/ListContext";

function FormDetails() {
    const { list, handleDelete } = useContext(ListContext)

    return (
        <>
            <C.Table>
                <C.TableHead>
                    <tr>
                        <C.TableHeadColumn>Descrição</C.TableHeadColumn>
                        <C.TableHeadColumn>Valor</C.TableHeadColumn>
                        <C.TableHeadColumn>Tipo</C.TableHeadColumn>
                        <C.TableHeadColumn>Data</C.TableHeadColumn>
                        <C.TableHeadColumn></C.TableHeadColumn>
                    </tr>
                </C.TableHead>

                <C.TableBody>
                    {list.map((item, index) => (
                        <C.TableColumn key={index}>
                            <C.TableTd>
                                <C.TableTdPer background={item.backgroundDescription}>
                                    {item.description}
                                </C.TableTdPer>
                            </C.TableTd>

                            <C.TableTd>
                                {item.value}
                            </C.TableTd>

                            <C.TableTd>
                                {item.type === "entrada" ? <FaRegArrowAltCircleUp /> : <FaRegArrowAltCircleDown />}
                            </C.TableTd>
                            <C.TableTd>
                                {item.date}
                            </C.TableTd>

                            <C.TableTd>
                                <C.TableBottom onClick={() => handleDelete(item.id)}><FaTrash /></C.TableBottom>
                            </C.TableTd>
                        </C.TableColumn>
                    ))}
                </C.TableBody>
            </C.Table>
        </>
    );
}

export default FormDetails;