const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 3000

// Setting up Views

app.use(expressLayouts)
app.set('view engine','ejs')


//Public Folder Setup
app.use(express.static(path.join(__dirname,'public')))




// Routes
app.use('/',require('./routes/index'))
app.use('/resume',require('./routes/resume'))
app.use('/about',require('./routes/about'))

app.use('/contact',require('./routes/contact'))


app.listen(PORT,console.log(`Process Started on ${PORT}`)
)