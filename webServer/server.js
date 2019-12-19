const express = require('express');
const app = express();
app.get('/',(req,res)=>{
	res.send([{
      name:"詹姆斯",
      no:23
      },
     {
      name:"库里",
      no:30
      },
      {
      name:"科比",
      no:24
      },
    ]);
});
app.listen(3000,()=>{
	console.log("web服务器已启动！！");
})