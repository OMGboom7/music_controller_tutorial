import React from "react";
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";

function HomePage() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<p>this is the home page</p>}/>
                <Route path="/join" element={<RoomJoinPage/>}/>
                <Route path="/create" element={<CreateRoomPage/>}/>
                <Route path="/room/:roomCode" element={<Room/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </Router>
    );
}

export default HomePage;