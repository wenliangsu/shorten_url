// Section set the variable
const express = require("express");
const router = express.Router();
const UrlDatabase = require("../../models/Url-Schema");
const generateShortenUrl = require("../../models/shorten_url_generator");
const port = 3000;

//Section Route setting
router.get("/", (req, res) => {
  res.render("index");
});

//todo shorten the url
router.post("/", (req, res) => {
  const inputUrl = req.body.inputUrl;

  /* //note findOne() 使用的時候要用Schema裡面的名字，不可以直接使用設定好的變數名字，如果直接使用的話直接比對第二筆資料，因為會強制轉換Schema type變成網址換新的，但是短網址還是一直是第一個資料的短網址。 */
  UrlDatabase.findOne({ originalUrl: inputUrl })
    .lean()
    .then((data) => {
      //If it isn't in database
      if (!data) {
        newUrl = `http://localhost:${port}/` + generateShortenUrl();

        UrlDatabase.create({ originalUrl: inputUrl, shortenUrl: newUrl })
          .then(() => res.render("shorten", { shortenUrl: newUrl }))
          .catch((error) => {
            console.log(error);
            res.render("error", { message: error });
          });

        //If it is already in database
      } else {
        res.render("shorten", { shortenUrl: data.shortenUrl });
      }
    });
});

//todo copy the link and go to the original website
router.get("/:id", (req, res) => {
  const urlEndWord = req.params.id;
  const url = `http://localhost:${port}/${urlEndWord}`;
  UrlDatabase.findOne({ shortenUrl: url })
    .lean()
    .then((data) => {
      if (!data) {
        res.redirect('/')
      } else {
        res.redirect(data.originalUrl);
      }
    })
    .catch((error) => {
      console.log(error);
      res.render("error", { message: error });
    });
});

module.exports = router;
