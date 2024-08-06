const app = require("./src/app");

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log('Welcome to my server ', PORT);
})

process.on('SIGINT', () => {
    server.close(() => console.log('Exit my server')
    )
})