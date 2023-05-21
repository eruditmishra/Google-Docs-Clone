import "./App.css";
import Editor from "./Components/Editor";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Toolbar from "./Components/Toolbar";
import "./scrollbar.css";

function App() {
  return (
    <div className="bg-[#F9FBFD] min-h-screen flex">
      <div className="bg-[#F9FBFD] fixed top-0 w-full z-30">
        <Navbar />
      </div>
      <div className="w-[96.5%]">
        <div className="fixed top-12 w-[96.5%] z-30">
          <Toolbar />
        </div>
        <div className="scrollable-container mt-24 z-0">
          <div className="scrollable-content">
            <Editor />
          </div>
        </div>
      </div>
      <div className="fixed right-0 z-40 mt-16">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
