import mongoose from 'mongoose'


function connectToDB(url:string){
    return mongoose.connect(url)
}

export default connectToDB



