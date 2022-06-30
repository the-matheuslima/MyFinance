import Header from "./components/Header";
import Resume from "./components/Resume"
import Form from "./components/Form";

import GlobalStyle from "./styles/global";
import { List } from "./components/types/item";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState<List[]>([])
  const [income, setIncome] = useState(0)
  const [expanse, setExpanse] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const amountIncome = list.filter((item) => item.type === "entrada").map((transaction) => Number(transaction.value));
    const incomeCurrent = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    setIncome(Number(incomeCurrent))

    const amountExpense = list.filter((item) => item.type === "saida").map((transaction) => Number(transaction.value));
    const expenseCurrent = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    setExpanse(Number(expenseCurrent))

    const total = (Number(incomeCurrent) - Number(expenseCurrent)).toFixed(2);
    setTotal(Number(total))
  }, [list])

  return (
    <>
      <Header />
      <Resume income={income} expense={expanse} total={total} />
      <Form list={list} setList={setList} />
      <GlobalStyle />
    </>
  )
}

export default App
