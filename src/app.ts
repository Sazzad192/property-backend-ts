import express from "express";
import cors from "cors";
import userRoute from "./app/modules/user/user.route";

const app = express();
app.use(cors());

//perse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/user", userRoute);

//route -> controller -> service

  //inserting a test data into mongodb
  /*
    1: Interface
    2: Schema
    3: Model
    4: DB Query
  */

    /*
      interface.ts
      schema, model -> model.ts

      route
      route function -> controller.ts

      database query -> service
    */


export default app;
