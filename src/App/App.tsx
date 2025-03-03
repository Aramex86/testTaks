import { Dashboard, Finalize, Result } from "../Pages";
import { Layout } from "../Shared/Atom";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router";
function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="results/:id" element={<Result />} />
          <Route path="finalize/:id" element={<Finalize />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
