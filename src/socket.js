import { io } from 'socket.io-client';

const socket = io('http://localhost:3000', {
    auth: (cb) => {
        cb({
            username: localStorage.username,
            gender: localStorage.gender
        })
    }
});

export default socket;