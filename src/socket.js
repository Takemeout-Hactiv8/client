import { io } from 'socket.io-client';

const socket = io('https://take-me-out.vivic.site/', {
    auth: (cb) => {
        cb({
            username: localStorage.username,
            gender: localStorage.gender
        })
    }
});

export default socket;