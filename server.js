const http = require('http');
const os = require('os');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    hostname: os.hostname(),
    uptime_hours: (os.uptime() / 3600).toFixed(1),
    mem_used_pct: ((1 - os.freemem() / os.totalmem()) * 100).toFixed(1) + '%',
    cpus: os.cpus().length,
    timestamp: new Date().toISOString()
  }));
}).listen(3000, '127.0.0.1');

console.log('Status API running on :3000');
