import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { List } from "../types/item"

type ListContextProps = {
    children: ReactNode;
};

type UserContextType = {
    list: List[];
    setList: Dispatch<SetStateAction<List[]>>;
    income: number;
    expense: number;
    total: number;
    handleAdd: (event: React.MouseEvent<Element, MouseEvent>, inputDescription: string, color: string, inputValue: number, inputDate: string, inputRadioTye: string) => void,
    handleDelete: (id: number) => void
};

export const ListContext = createContext<UserContextType>({} as UserContextType);

export function ListProvider({ children }: ListContextProps) {
    const [list, setList] = useState<List[]>([]);
    const [income, setIncome] = useState(0)
    const [expense, setExpanse] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        console.log(list)
        const amountIncome = list.filter((item) => item.type === "entrada").map((transaction) => Number(transaction.value));
        const incomeCurrent = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        setIncome(Number(incomeCurrent))

        const amountExpense = list.filter((item) => item.type === "saida").map((transaction) => Number(transaction.value));
        const expenseCurrent = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        setExpanse(Number(expenseCurrent))

        const total = (Number(incomeCurrent) - Number(expenseCurrent)).toFixed(2);
        setTotal(Number(total))
        console.log(income)
    }, [list])


    const handleAdd = (event: React.MouseEvent<Element, MouseEvent>, inputDescription: string, color: string, inputValue: number, inputDate: string, inputRadioType: string) => {
        event.preventDefault();
        console.log()
        setList([...list, { description: inputDescription, backgroundDescription: color, value: inputValue, date: inputDate, type: inputRadioType, id: Math.floor(Math.random() * 1000) }])
    }

    const handleDelete = (id: number) => {
        setList(list.filter((el) => el.id !== id));
    }

    return (
        <ListContext.Provider value={{ list, setList, handleAdd, handleDelete, income, total, expense }}>
            {children}
        </ListContext.Provider>

    )

}