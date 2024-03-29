import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TbFileSettings } from "react-icons/tb";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";
import { ActiveElements } from "@syncfusion/ej2/pdfviewer";

import { Navbar, Footer, Sidebar,ThemeSettings} from './components'

import{ Ecommerce, Orders, Calendar,Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie,Financial, ColorPicker, ColorMapping, Editor,Line } from './pages';

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {activeMenu, themeSettings, setThemeSettings,
    currentColor, currentMode} = useStateContext();   
  return (
    <div className={currentMode === 'Dark'?'dark': ' '}>
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{zindex:'1000'}}>
          <TooltipComponent content="Settings" position="Top">
          
          <button type="button"
          className="text-3xl p-4,
          hover:drop-shadow-xl,
          hover:bg-light-gray text-white"

          // use for open and close setting buttons
          onClick={()=> setThemeSettings(true)}
          style={{background: currentColor,
          borderRadius:'50%'}}>
            <TbFileSettings />
          </button>
        </TooltipComponent>
        </div>
        {activeMenu ?(
          <div className="w-72 fixed sidebar
          dark:bg-secondary-dark-bg bg-white">
            <Sidebar/>
          </div>
        ):(
          <div className="w-0
          dark:bg-secondary-dark-bg">
            <Sidebar/>
          </div>
        )};

        <div className={
          `dark:bg-main-bg
          bg-main-bg min-h-screen w-full 
          ${activeMenu ? ` md:ml-72 w-full`: ` w-full flex-2`}`
        }>
          <div className="fixed md:static
          bg-main-bg dark:bg-main-dark-bg navbar 
          w-full">
           <Navbar/>
          </div>
        <div>
        {themeSettings && <ThemeSettings/>}

          <Routes>
            {/* Dashboard */}
            <Route path="/ecommerce" element={<Ecommerce/>}/> 
            <Route path="/ecommerce" element=
            {<Ecommerce />}/>

            {/*Pages */}
            <Route path="/orders" element={<Orders/>}/> 
            <Route path="/employees" element={<Employees/>}/> 
            <Route path="/customers" element={<Customers/>}/> 

            {/* Apps */}
            <Route path="/Kanban" element={<Kanban />}/> 
            <Route path="/editor" element={<Editor />}/> 
            <Route path="/calendar" element={<Calendar />}/> 
            <Route path="/Color-picker" element={<ColorPicker />}/> 
            
            {/* Charts */}
            <Route path="/Line" element={<Line/>}/> 
            <Route path="/area" element={<Area/>}/> 
            <Route path="/bar" element={<Bar/>}/> 
            <Route path="/pie" element={<Pie />}/> 
            <Route path="/financial" element={<Financial />}/> 
            <Route path="/ColorMapping" element={<ColorMapping/> }/>
            <Route path="/pyramid" element={<Pyramid />}/> 
            <Route path="/stacked" element={<Stacked  />}/> 



          </Routes>

        </div>
        </div>
      </div>
    </BrowserRouter>
    </div>
  );
};

export default App;
