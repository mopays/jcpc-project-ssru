### 1. Clone repo

```
$ git clone https://github.com/mopays/jcpc-project-ssru.git
$ cd jcpc-project-ssru.git
```

### 2. Create .env File

- duplicate .env.example in backend folder and rename it to .env

### 3. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - In .env file update MONGODB_URI=mongodb://localhost/amazona
- OR Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - In .env file update MONGODB_URI=mongodb+srv://your-db-connection

### 4. Run Backend

```
$ cd backend
$ npm install
$ npm start
```

### 5. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 6. Seed Users and Products

- Run this on browser: http://localhost:5000/api/seed
- It returns admin email and password and 6 sample products

### 7. Admin Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin


### render project 
 create file compoent
if u want to create new file model 3d u should to npm start first 
 /*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/jcp.glb -o src/components/jcp.jsx -k -r public 
Author: Piekub.Nakub (https://sketchfab.com/Piekub.Nakub)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/jcp-ccb36b8826674aa9960f5f7f9a2eff4e
Title: JCP
*/

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/logo.glb -o src/components/Table.jsx -k -r public 
Author: Piekub.Nakub (https://sketchfab.com/Piekub.Nakub)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/j-c-p-c-it-store-5b14ddf92f63405c943e4c858909d446
Title: J C P C IT STORE
*/