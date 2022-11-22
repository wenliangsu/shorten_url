# Shorten URL generator

## Introduction

This project is a generator about making the URL to have a short website.

## Feature

- You can copy the original website from the top and paste it into the input box, then create it.
- It can also connect your own database to save these shorten url (in this case, it is used by MongoDB)
- Just click can copy the site into the clipboard.

## Screenshot

<div>
  <img src=./public/image/screenshot-1.png 
  height=300px aspect-ratio: 1>
  <img src=./public/image/screenshot-2.png height=300px aspect-ratio: 1>
</div>

## How to install

1. Clone this github
2. Install npm
3. Connect the database (use the MongoDB in this case)

```
MONGODB_URI =
  "mongodb+srv://(your mongodb account):(password)@cluster0.w9mfqtb.mongodb.net/(My mongodb)?retryWrites=true&w=majority"
```

4. After installation, run

```
npm run dev
```

6. If terminal show the sentence below, means run successfully and click the url

```
`Express is listening on 3000`
```

## Environmental setting

- Node.js
- Express
- Express-Handlebars
- Javascript
- Mongoose

## Note

This project is from the [Alphacamp class](https://tw.alphacamp.co)
