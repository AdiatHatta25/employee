import "reflect-metadata";
import express from "express"
import { Request, Response } from "express"
import { User } from "./entity/user.entity"
import { myDataSource } from "./app-data-source"
import { Employee } from "./entity/employees"
import { body, validationResult } from 'express-validator';

// establish database connection
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

// create and setup express app
const app = express()
app.use(express.json())

// register routes
app.get("/users", async function (req: Request, res: Response) {
    const users = await myDataSource.getRepository(User).find()
    res.json({isSuccess: true, data : users, message : "success"})
})

app.get("/employees", async function (req: Request, res: Response) {
    const users = await myDataSource.getRepository(Employee).find()
    res.json({isSuccess: true, data : users, message : "success"})
})

app.get("/users/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(User).findOneBy({
        id:parseInt(req.params.id)
    })
    return res.send({isSuccess: true, data : results, message : "success"})
})

app.get("/employees/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Employee).findOneBy({
        id:parseInt(req.params.id)
    })
    return res.send({isSuccess: true, data : results, message : "success"})
})

app.post("/users", async function (req: Request, res: Response) {
    const user = await myDataSource.getRepository(User).create(req.body)
    const results = await myDataSource.getRepository(User).save(user)
    return res.send({isSuccess: true, data : results, message : "success"})
})

app.post("/employees", body('name').notEmpty(), body('age').notEmpty().isInt(),body('address').notEmpty(),body('transport'),body('isMarried').notEmpty().isBoolean(),async function (req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = await myDataSource.getRepository(Employee).create(req.body)
    const results = await myDataSource.getRepository(Employee).save(user)
    return res.send({isSuccess: true, data : results, message : "success"})
})

app.put("/users/:id", async function (req: Request, res: Response) {
    const user = await myDataSource.getRepository(User).findOneBy({
        id:parseInt(req.params.id)
    })
    if (user == null) throw 'eror'
    myDataSource.getRepository(User).merge(user, req.body)
    const results = await myDataSource.getRepository(User).save(user)
    return res.send({isSuccess: true, data : results, message : "success"})
})

app.put("/employees/:id", async function (req: Request, res: Response) {
    const user = await myDataSource.getRepository(Employee).findOneBy({
        id:parseInt(req.params.id)
    })
    if (user == null) throw 'eror'
    myDataSource.getRepository(Employee).merge(user, req.body)
    const results = await myDataSource.getRepository(Employee).save(user)
    return res.send({isSuccess: true, data : results, message : "success"})
})

app.delete("/users/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(User).delete(req.params.id)
    return res.send({isSuccess: true, data : results, message : "success"})
})

app.delete("/employees/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Employee).delete(req.params.id)
    return res.send({isSuccess: true, data : results, message : "success"})
})


// start express server
app.listen(3000)
console.log('running😘')

