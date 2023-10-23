import React from "react";
import { Route,Routes } from "react-router-dom";
import { UserLayout } from "./pages/Layouts/UserLayout";
import { EnterPage } from "./pages/Enter/EnterPage";
import { ProfilePage } from "./pages/Profile/ProfilePage";
function App() {

  
  

  
  return (
    
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<EnterPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>

      </Route>

    </Routes> 
     
     
          
    
  )
}

export default App
