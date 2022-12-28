import connectDB from "../../mongodb/connect";
import Student from "../../mongodb/model";


export default async function handler(req, res) {

  await connectDB();
   await Student.create({name:"emon hossen",age:"20"});

   Student.find((err,data)=>{
    if(!err){
      res.status(200).json(data)
    }else{
      res.status(500).json({error:"server error"});
    }

   });


}
