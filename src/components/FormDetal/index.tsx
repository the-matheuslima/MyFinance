import React, { Dispatch, SetStateAction } from "react";
import { List } from "../types/item"
import * as C from "./styles"
import { FaTrash } from "react-icons/fa"
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from 'react-icons/fa';

type Props = {
    list: List[]
    setList: Dispatch<SetStateAction<List[]>>
}

function FormDetails({ list, setList }: Props) {
    const handleDelete = (id: number) => {
        setList(list.filter((el) => el.id !== id));
    }

    return (
        <>
            <C.Table>
                <C.TableHead>
                    <tr>
                        <C.TableHeadColumn>Descrição</C.TableHeadColumn>
                        <C.TableHeadColumn>Valor</C.TableHeadColumn>
                        <C.TableHeadColumn>Tipo</C.TableHeadColumn>
                        <C.TableHeadColumn></C.TableHeadColumn>
                    </tr>
                </C.TableHead>

                <C.TableBody>
                    {list.map((item, index) => (
                        <C.TableColumn key={index}>
                            <C.TableTd key={index}>
                                <C.TableTdPer background={item.backgroundDescription}>{item.description}</C.TableTdPer>
                            </C.TableTd>

                            <C.TableTd>
                                {item.value}
                            </C.TableTd>

                            <C.TableTd>
                                {item.type === "entrada" ? <FaRegArrowAltCircleUp /> : <FaRegArrowAltCircleDown />}
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