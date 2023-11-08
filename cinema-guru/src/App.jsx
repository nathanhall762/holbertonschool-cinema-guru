import "./App.css";
import ContainedButton from "./components/general/Button";
import StandardTextField from "./components/general/Input";
import SelectInput from "./components/general/SelectInput";
import { useState } from "react";
import SearchBar from "./components/general/SearchBar";
import Authentication from "./routes/auth/Authentication";

function App() {
  const [searchTitle, setSearchTitle] = useState('');

  return (
    <>
      <StandardTextField />
      <SelectInput />
      <ContainedButton />
      <SearchBar title={searchTitle} setTitle={setSearchTitle} />
      <Authentication />
    </>
  );
}

export default App;
