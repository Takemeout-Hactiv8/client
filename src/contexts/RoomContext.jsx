import React, { createContext, useState, useEffect, useCallback } from 'react';
import socket from '../socket';

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
    const [rooms, setRooms] = useState([]);
    const [globalRooms, setGlobalRooms] = useState([]);
    const [roomName, setRoomName] = useState("");

    const addRoom = useCallback((event) => {
        event.preventDefault();
        socket.emit('add-room', roomName);
        navigate("/room/" + roomName);
        setRoomName("");
    });


    const joinRoom = useCallback((room) => {
        // socket.emit('join-room', room);
        navigate("/room/" + room);
    }, []);


    const joinGlobalRoom = useCallback((room) => {
        socket.emit('join-global', room);
    }, []);

    useEffect(() => {
        socket.disconnect();
        socket.connect();


        socket.on("newCome", (room) => {
            console.log("New room data received:", room);
            setRooms(room);
        });

        socket.on("globalRoom", (room) => {
            console.log("Global room data received:", room);
            setGlobalRooms(room);
        });

        socket.on("update-room", (room) => {
            console.log("Room data updated:", room);
            setRooms(room);
        });

        socket.on("update-room-global", (room) => {
            console.log("Room data global room updated:", room);
            setGlobalRooms(room);
        });

        return () => {
            socket.off("newCome");
            socket.off("globalRoom");
            socket.off("update-room");
            socket.off("update-room-global");
            // socket.disconnect();
        };
    }, []);

    return (
        <RoomContext.Provider
            value={{
                rooms,
                globalRooms,
                roomName,
                setRoomName,
                addRoom,
                joinRoom,
                joinGlobalRoom
            }}
        >
            {children}
        </RoomContext.Provider>
    );
};
