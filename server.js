const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3500

app.use('/', express.static(path.join(__dirname, '/public')))

app.use('/', require('./routes/root'))

<<<<<<< HEAD
app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.jason({ message: '404 NOt Found'})
  } else {
    res.type('txt').send('404 Not Found')
  }
})

=======
>>>>>>> 0167f36d56ace8afccec4dc398ee9a35520dc545
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))