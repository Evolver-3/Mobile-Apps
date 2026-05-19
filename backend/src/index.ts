import './config/config'
import { connectDB } from './prisma'
import {app} from './app'

connectDB().then(()=>{
  app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server running on PORT ${process.env.PORT}`)
  })
}).catch((error:any)=>{
  console.error("Failed to connect to Database:",error)
})