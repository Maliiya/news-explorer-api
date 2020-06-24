# news-explorer-api
Graduation Project
Backend, API for authenticating users and saving articles'


V 0.0.4

http://api.news-explorer-pr.tk
https://api.news-explorer-pr.tk

http://84.201.149.64/



## Installation
```bash
git clone https://github.com/Maliiya/news-explorer-api.git
```


## Usage

MongoDB is required

.env is required,
example:
```bash
//.env

NODE_ENV=production   //NODE_ENV=development
JWT_SECRET=12345
```


```bash
npm i
```

```bash
npm run start
```

```bash
npm run dev (hot reload)
```


### Method:
`GET` | `POST` | `DELETE` | `PUT` | `PATCH`


**Requests:**
----
## * GET /cards

### **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ data : {} }`

### **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ message : err }`

  * **Code:** 500 InternalServerError <br />
    **Content:** `{ message : err }`


## * GET /users

### **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ data : {} }`

### **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ message : err }`

  * **Code:** 500 InternalServerError <br />
    **Content:** `{ message : err }`


## * GET /users/:userId

### **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ data : user }`

### **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ message : err }`

  * **Code:** 404 NotFoundError <br />
    **Content:** `{ message : err }`

  * **Code:** 500 InternalServerError <br />
    **Content:** `{ message : err }`


## * POST /users

### **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ data : user }`

### **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ message : err }`

  * **Code:** 400 ValidationError <br />
    **Content:** `{ message : err }`

  * **Code:** 500 InternalServerError <br />
    **Content:** `{ message : err }`


## * POST /cards

### **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ data : card }`

### **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ message : err }`

  * **Code:** 400 ValidationError <br />
    **Content:** `{ message : err }`

  * **Code:** 500 InternalServerError <br />
    **Content:** `{ message : err }`


## * POST /signup

### **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ data : user }`

### **Error Response:**

  * **Code:** 400 ValidationError <br />
    **Content:** `{ message : err }`

  * **Code:** 500 InternalServerError <br />
    **Content:** `{ message : err }`
    

## * POST /signin

### **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ data : user }`
   
  * **Code:** 401 <br />
    **Content:** cookie (jwt)

### **Error Response:**

  * **Code:** 400 ValidationError <br />
    **Content:** `{ message : err }`

  * **Code:** 500 InternalServerError <br />
    **Content:** `{ message : err }`


## * DELETE /cards/:cardId

### **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ data : card }`

### **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ message : err }`

  * **Code:** 403 ForbiddenError <br />
    **Content:** `{ message : err }`

  * **Code:** 404 NotFoundError <br />
    **Content:** `{ message : err }`

  * **Code:** 500 InternalServerError <br />
    **Content:** `{ message : err }`


## * DELETE /cards/:cardId/likes

### **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ data : card }`

### **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ message : err }`

  * **Code:** 404 NotFoundError <br />
    **Content:** `{ message : err }`

  * **Code:** 500 InternalServerError <br />
    **Content:** `{ message : err }`


## * PUT /cards/:cardId/likes

### **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ data : card }`

### **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ message : err }`

  * **Code:** 404 NotFoundError <br />
    **Content:** `{ message : err }`

  * **Code:** 500 InternalServerError <br />
    **Content:** `{ message : err }`
    

## * PATCH /users/me

### **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ data : user }`

### **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ message : err }`

  * **Code:** 403 ForbiddenError <br />
    **Content:** `{ message : err }`

  * **Code:** 500 InternalServerError <br />
    **Content:** `{ message : err }`


## * PATCH /users/me/avatar

### **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ data : user }`

### **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ message : err }`

  * **Code:** 403 ForbiddenError <br />
    **Content:** `{ message : err }`

  * **Code:** 500 InternalServerError <br />
    **Content:** `{ message : err }`
