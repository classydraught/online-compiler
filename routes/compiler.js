var express = require("express");
var request = require("request");
var router = express.Router();
var config = require("../config/config");

router.get("/execute", (req, res, next) => {
  const data = [
    {
      language: "Java",
      versions: [
        { version: "JDK 1.8.0_66", index: "0" },
        { version: "JDK 9.0.1", index: "1" },
        { version: "JDK 10.0.1", index: "2" }
      ]
    },
    {
      language: "PHP",
      versions: [
        { version: "5.6.16", index: "0" },
        { version: "7.1.11", index: "1" },
        { version: "7.2.5", index: "2" }
      ]
    },
    {
      language: "Python 3",
      versions: [
        { version: "3.5.1", index: "0" },
        { version: "3.6.3", index: "1" },
        { version: "3.6.5", index: "2" },
        { version: "3.7.4", index: "4" }
      ]
    },
    {
      language: "Python 2",
      versions: [
        { version: "2.7.11", index: "0" },
        { version: "2.7.15", index: "1" },
        { version: "2.7.16", index: "2" }
      ]
    },
    {
      language: "Perl",
      versions: [
        { version: "5.22.0", index: "0" },
        { version: "5.26.1", index: "1" },
        { version: "5.26.2", index: "2" },
        { version: "5.30.0", index: "3" }
      ]
    },
    {
      language: "C",
      versions: [
        { version: "GCC 5.3.0", index: "0" },
        { version: "Zapcc 5.0.0", index: "1" },
        { version: "GCC 7.2.0", index: "2" },
        { version: "GCC 8.1.0", index: "3" }
      ]
    },
    {
      language: "C++",
      versions: [
        { version: "GCC 5.3.0", index: "0" },
        { version: "Zapcc 5.0.0", index: "1" },
        { version: "GCC 7.2.0", index: "2" },
        { version: "GCC 8.1.0", index: "3" }
      ]
    },
    {
      language: "NodeJS",
      versions: [
        { version: "6.3.1", index: "0" },
        { version: "9.2.0", index: "1" },
        { version: "10.1.0", index: "2" }
      ]
    },
    {
      language: "Scala",
      versions: [
        { version: "2.12.0", index: "0" },
        { version: "2.12.4", index: "1" },
        { version: "2.12.5", index: "2" },
        { version: "2.13.0", index: "3" }
      ]
    },

    {
      language: "C#",
      versions: [
        { version: "mono 4.2.2", index: "0" },
        { version: "mono 5.0.0", index: "1" },
        { version: "mono 5.10.1", index: "2" }
      ]
    }
  ];

  res.send(data);
});
router.post("/execute", (req, res, next) => {
  const programObj = {
    script: req.body.program,
    language: req.body.language,
    versionIndex: req.body.version,
    clientId: config.clientID,
    clientSecret: config.clientSecret
  };
  request(
    {
      url: "https://api.jdoodle.com/v1/execute",
      method: "POST",
      json: programObj
    },
    (error, response, body) => {
      if (error) {
        console.log("error:", error);
      }
      if (response && response.statusCode) {
        const { cpuTime, memory, output, statusCode } = body;
        const outputObj = {
          cpuTime,
          memory,
          output: output.substring(0, output.length),
          statusCode
        };
        res.send(outputObj);
      }
    }
  );
});

module.exports = router;
