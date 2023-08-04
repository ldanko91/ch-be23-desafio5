import { Router } from "express";
import CartsDBManager from "../dao/dbManagers/CartsDBManager.js";

const dbCartsRouter = Router();
const DBCartsManager = new CartsDBManager();

dbCartsRouter.get('/', async(req,res)=>{
    const userSession = req.session.user
    if (!userSession) {
        res.render("login")
    } else {
    let download = await DBCartsManager.getCarts();
    console.log(download);
    let carritos = download;
    let products = download.products;
    console.log(products);
    res.render('carts',{
        carritos,products,
        title: `Listado de carritos`
    }) 
    }
})

dbCartsRouter.get('/:ccod', async(req,res)=>{
    const userSession = req.session.user
    if (!userSession) {
        res.render("login")
    } else {
    let {ccod} = req.params
    let download = await DBCartsManager.getCartById(ccod);
    let carritos = download;
    let products = download.products;
    console.log(products);
    res.render('carts',{
        carritos,products,
        title: `Productos en carrito código: ${ccod}`
    }) 
    }
})

dbCartsRouter.post('/', async(req,res)=>{
    const newCart = req.body;    
    const upload = await DBCartsManager.addCart(newCart);
    res.send({status:"success", payload:upload})
}
)

dbCartsRouter.delete('/:cId/products/:pId', async(req,res)=>{
    const {cId, pId} = query.params;   
    const deleteOne = await DBCartsManager.deleteProductById(cId,pId)
    res.send({status:"success", payload:deleteOne})
}
)

dbCartsRouter.put('/:cId', async(req,res)=>{
    const {cId} = query.params;
    const products = req.body;   
    const newProds = await DBCartsManager.updateProducts(cId, products)
    res.send({status:"success", payload:newProds})
}
)

dbCartsRouter.put('/:cId/products/:pId', async(req,res)=>{
    const {cId, pid} = query.params;
    const newQtty = req.body;   
    const modQtty = await DBCartsManager.updateQuantity(cId, pid, newQtty)
    res.send({status:"success", payload:modQtty})
}
)

dbCartsRouter.delete('/:cId', async(req,res)=>{
    const {cId} = query.params;   
    const deleteProds = await DBCartsManager.emptyCart(cId)
    res.send({status:"success", payload:deleteProds})
}
)

export default dbCartsRouter;