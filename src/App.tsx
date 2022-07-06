import Header from "./components/Header";
import Resume from "./components/Resume"
import Form from "./components/Form";

import GlobalStyle from "./styles/global";
import { ListProvider } from "./context/ListContext"

function App() {
  return (
    <ListProvider>
      <Header />
      <Resume />
      <Form />
      <GlobalStyle />
    </ListProvider>
  )
}

export default App
