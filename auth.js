import express from "express";
import User from './model/User'
const router = express.Router();

router.post("/getstart", (req, res) => {
    console.log(req.body);
  const {name,email,msg}=req.body;
  
    const user = new User({
      name: name,
      email: email,
      msg: msg.trim(),
    });
    user.save();
    return res.json({
      ok: true,
    });
    res.send("hi");
  });
  router.get('/getstart',(req,res)=>{

    User.find({}, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
  })







export default router ;
