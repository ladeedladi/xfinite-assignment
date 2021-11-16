const { error } = require('console');
const Users=require('./models')



exports.postBooks=(req,res)=>{

        const {name}=req.body
console.log(name);
    Users.create({name
    }).then(res=>res.json({'message':'success'}))
    .catch(err=>{res.json(err)})
    console.log(req.body)
 
}


exports.getBooks=async(req,res)=>{

 try{

     let result=await Users.findAll()
     const page=parseInt(req.query.page)
     const limit=parseInt(req.query.limit)

     const startIndex=(page-1)*limit
     const endIndex=page*limit

     const res={}

    res.next={
        page:page+1,
        limit:limit
    }
    
    res.prev={
        page:page-1,
        limit:limit
    }
    
    
    
     res.json(result)
 }catch(err){
     res.json(err)
 }


}

