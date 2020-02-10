const express = require ('express')
const fallback = require ('express-history-api-fallback')

const app = express ()

app.use (express.json ())
app.use ('/', express.static ('dist'))
app.use (fallback ('index.html', { root: 'dist' }))

app.listen (8080, () => {
    console.log ('should work')
})