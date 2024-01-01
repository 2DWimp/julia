const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}


//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})



const LogInSchema = new mongoose.Schema( {
  name: {
    type:String,
    required: true
  },
  password: {
    type:String, 
    required: true
  }

})

const collection = new mongoose.model("Collection1", LogInSchema);


module.exports = collection;