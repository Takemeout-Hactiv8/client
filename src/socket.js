import { io } from 'socket.io-client';

const socket = io('http://localhost:3000', {
    auth: (cb) => {
        cb({ user: localStorage.user.username })
    }
});

export default socket;