import { BrowserRouter } from "react-router-dom"
import P_Routes from "./routes/P_Routes"

function App() {

  return (
    <div>
      <BrowserRouter>
      <P_Routes />
      <footer>
        This is my footer
      </footer>
      </BrowserRouter>
    </div>
  )
}

export default App
