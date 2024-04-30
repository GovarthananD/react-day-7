import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import Thome from './components/teacher/teacherhome';
import Edit from './components/teacher/editTeacher';
import AddTeacher from './components/teacher/addTeacher';
import Shome from './components/student/studenthome';
import AddStudent from './components/student/addStudent';
import EditStudent from './components/student/editStudent';


function App() {
  const [user, setUser] = useState("");
  const [student, setStudent] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/teacher' element={<Thome/>}/>
          <Route path='/edit/Edit/:id' element={<Edit/>}/>
          <Route path='/add' element={<AddTeacher user={user} setUser={setUser}/>}/>
          <Route path='/student' element={<Shome/>}/>
          <Route path='/edit/EditStudent/:id' element={<EditStudent/>}/>
          <Route path='/addstudent' element={<AddStudent student={student} setStudent={setStudent}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
