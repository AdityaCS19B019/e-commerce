const ErrorResponse = require('../utils/errorResponse')
const connectDB = require('../config/db')


exports.getCart = (req ,res , next) => {
    
    const {cid} = req.body;

    if(!cid){
        return next(new ErrorResponse("Invalid Customer id", 400))
    }
    else{
        let sql = "SELECT products.name, cart.qty, products.pid, products.brand, products.price, products.MRP, products.image1 FROM product INNER JOIN cart ON products.pid=cart.pid" ;
         
        connectDB.query(sql, [], async function(err, result, fields) {
            if(err) throw err;
            else{
              
                res.status(201).json({
                    products : result.length,
                    success :true, 
                    result : result
                });
                
            }
        })
    }
}



exports.UpdateQuantity = (req ,res , next) => {
    
    const productID = req.params.productID;

    if(!productID){
        return next(new ErrorResponse("Invalid Product id", 400))
    }
    else{
        let sql = 'SELECT * FROM products WHERE pid = ' + productID ;
        
        connectDB.query(sql, [], async function(err, result, fields) {
            if(err) throw err;
            if(result.length == 0)
            {
                return next(new ErrorResponse("Product not found", 404));
            }
            else{
              
                res.status(201).json({
                    success :true, 
                    result : result
                });
                
            }
        })
    }
}



exports.deleteProduct = (req ,res , next) => {
    
    const productID = req.params.productID;

    if(!productID){
        return next(new ErrorResponse("Invalid Product id", 400))
    }
    else{
        let sql = 'SELECT * FROM products WHERE pid = ' + productID ;
        
        connectDB.query(sql, [], async function(err, result, fields) {
            if(err) throw err;
            if(result.length == 0)
            {
                return next(new ErrorResponse("Product not found", 404));
            }
            else{
              
                res.status(201).json({
                    success :true, 
                    result : result
                });
                
            }
        })
    }
}
