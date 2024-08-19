import mongoose from "mongoose";
mongoose.connect("mongodb+srv://alejandroxlllc:uB4NkxTDJBnEY7TX@cluster0.o6msi.mongodb.net/furnitures_db?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error(err));
export default mongoose;