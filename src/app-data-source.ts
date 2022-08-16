import { DataSource } from "typeorm"
import { Employee } from "./entity/employees"
import { User } from "./entity/user.entity"

export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "kebod",
    entities: [User, Employee],
    logging: true,
    synchronize: true,
})
