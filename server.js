const app = require('./src/app');
const PORT = process.env.PORT || 6000;

app.listen(PORT, "0.0.0.0", () => { // Escuchar en todas las IPs
    console.log(`🚀 Server running at http://0.0.0.0:${PORT}`);
});
