Promise.any=function (...args){
   
    return new Promise((resolve,reject)=>{
         let result=[];
        for(let i=0;i<args.length;i++){
            args[i]
                .then((res)=>{
                    
                    result.push(res);
                    if(result.length==args.length){
                          resolve(result);
                    }
                })
                .catch((err)=>{
                    reject(err);
                })
        }
      
    })
};
let p1=new Promise((res,rej)=>{
    res(2);
});     
let p2=new Promise((res,rej)=>{
    res(3);
});
let x=Promise.any(p1,p2);   