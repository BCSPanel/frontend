import fs from 'fs'
const p = 'dist/index.html'
fs.writeFileSync(p, fs.readFileSync(p, 'UTF-8').replace(/\n\s*/g, ''))
