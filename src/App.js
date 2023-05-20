import "./App.css";
import Editor from "./Components/Editor";
import Navbar from "./Components/Navbar";
import Toolbar from "./Components/Toolbar";

function App() {
  return (
    <div className="bg-[#F9FBFD] min-h-screen">
      <Navbar />
      <Toolbar />
      <Editor />
    </div>
  );
}

export default App;
