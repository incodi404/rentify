# rentify
Make finding rent easy with Rentify.

Installation

```git clone https://github.com/incodi404/rentify or download zip file and unzip it```

Install node_modules

for frontend

```cd /rentify/client```
```npm i```

for backend

```cd /rentify/server/```
```npm i```

Others setup for backend

1. Install Redis on your system
2. Crate account on MongoDB Atlas or install it locally.
3. Setup a email account for sending emails with third party application. For this, follow the steps:
    1. Login to your account
    2. Enable "less secure app" to on. Without this, my application can not send any email. This is must.
    3. Copy the password that is given there.
4. Copy the content of ".env.sample". Make a ".env" file. Paste that content, give all values.

Run Servers

for frontend

```cd /rentify/client```
```npm run dev```

for backend
```cd /rentify/server```
```npm run dev```