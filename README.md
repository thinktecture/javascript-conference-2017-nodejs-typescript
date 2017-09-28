# basta-herbst-2017-nodejs-typescript

This repository contains the sample for the talk "Web-APIs mit Node.js und TypeScript - für .NET-Entwickler" at the BASTA! conference 2017 in Mainz.
Slides can be found on [Speakerdeck](https://speakerdeck.com/manuelrauber/web-apis-mit-node-dot-js-und-typescript-fur-net-entwickler-1)

## Setup

Run `npm i` to install all necessary packages.

## Start

Run `npm start` to start the application. 
Please take a look at both controllers for all available routes.

* [CustomerController](src/controllers/customer.ts)
* [BillController](src/controllers/bill.ts)

## Database setup

The sample uses a database for storing the data. 
Thanks to [TypeORM](https://github.com/typeorm/typeorm) several database engines are supported. 
You can set the credentials for your own database in the [`src/index.ts`-file]()src/index.ts 
