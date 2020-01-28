(this["webpackJsonpcompiler-app"] =
  this["webpackJsonpcompiler-app"] || []).push([
  [0],
  {
    18: function(e, t, a) {
      e.exports = a(41);
    },
    23: function(e, t, a) {},
    41: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        s = a.n(n),
        o = a(12),
        r = a.n(o),
        l = (a(23), a(13)),
        c = a(14),
        m = a(16),
        i = a(15),
        u = a(17),
        g = a(2),
        h = a.n(g),
        d = (function(e) {
          function t(e) {
            var a;
            return (
              Object(l.a)(this, t),
              ((a = Object(m.a)(
                this,
                Object(i.a)(t).call(this, e)
              )).selectLanguage = function(e) {
                a.setState({
                  language: e.target.value,
                  showVersionFlag: !0
                });
              }),
              (a.selectVersion = function(e) {
                a.setState({
                  version: e.target.value
                });
              }),
              (a.handleProgram = function(e) {
                a.setState({
                  program: e.target.value
                });
              }),
              (a.handleExecuteProgram = function() {
                var e = "";
                (e =
                  "C++" === a.state.language
                    ? "cpp"
                    : "Python 3" === a.state.language
                    ? "python3"
                    : "Scala" === a.state.language
                    ? "scala"
                    : "C#" === a.state.language
                    ? "csharp"
                    : "Python 2" === a.state.language
                    ? "python2"
                    : a.state.language.toLowerCase()),
                  h.a
                    .post("/execute", {
                      language: e,
                      version: a.state.version,
                      program: a.state.program
                    })
                    .then(function(e) {
                      a.setState({
                        showOutput: !0,
                        result: e.data
                      });
                    })
                    .catch(function(e) {
                      a.setState({
                        showError: !0
                      });
                    });
              }),
              (a.state = {
                language: "",
                version: "0",
                program: "",
                showVersionFlag: !1,
                data: [],
                result: {},
                showOutput: !1,
                showError: !1
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  h.a
                    .get("/execute")
                    .then(function(t) {
                      e.setState({
                        data: t.data
                      });
                    })
                    .catch(function(e) {
                      console.log(e);
                    });
                }
              },
              {
                key: "render",
                value: function() {
                  var e,
                    t,
                    a,
                    n = this;
                  return (
                    this.state.data.length > 0 &&
                      ((t = this.state.data.map(function(e, t) {
                        return s.a.createElement(
                          "option",
                          {
                            key: t
                          },
                          e.language
                        );
                      })),
                      (a = this.state.data.filter(function(e) {
                        return e.language === n.state.language;
                      })).length > 0 &&
                        (e = a[0].versions.map(function(e, t) {
                          return s.a.createElement(
                            "option",
                            {
                              key: t,
                              value: e.index
                            },
                            e.version
                          );
                        }))),
                    s.a.createElement(
                      "div",
                      {
                        className: "container-fluid"
                      },
                      s.a.createElement(
                        "div",
                        {
                          className: "row"
                        },
                        s.a.createElement(
                          "div",
                          {
                            className:
                              "col-md-12 p-3 mb-2 bg-black display-4 text-primary font-italic font-weight-bold text-center"
                          },
                          "Synxa Compiler"
                        ),
                        s.a.createElement(
                          "div",
                          {
                            className:
                              "col-md-6 border border-secondary bg-light text-dark"
                          },
                          s.a.createElement(
                            "div",
                            {
                              className: "row"
                            },
                            s.a.createElement(
                              "div",
                              {
                                className: "form-group row col-md-6 mt-1"
                              },
                              s.a.createElement(
                                "div",
                                {
                                  className: "col-sm-3 col-form-label"
                                },
                                "Language "
                              ),
                              s.a.createElement(
                                "div",
                                {
                                  className: "col-sm-9"
                                },
                                s.a.createElement(
                                  "select",
                                  {
                                    className: "form-control",
                                    name: "language",
                                    value: this.state.language,
                                    onChange: this.selectLanguage
                                  },
                                  s.a.createElement(
                                    "option",
                                    {
                                      value: "Select Language"
                                    },
                                    "Select Language"
                                  ),
                                  t
                                )
                              )
                            ),
                            this.state.showVersionFlag
                              ? s.a.createElement(
                                  "div",
                                  {
                                    className: "form-group row col-md-6 mt-1"
                                  },
                                  s.a.createElement(
                                    "div",
                                    {
                                      className: "col-sm-3 col-form-label"
                                    },
                                    "Version "
                                  ),
                                  s.a.createElement(
                                    "div",
                                    {
                                      className: "col-sm-9"
                                    },
                                    s.a.createElement(
                                      "select",
                                      {
                                        className: "form-control",
                                        name: "version",
                                        value: this.state.version,
                                        onChange: this.selectVersion
                                      },
                                      s.a.createElement(
                                        "option",
                                        {
                                          value: "Select Version"
                                        },
                                        "Select Version"
                                      ),
                                      e
                                    )
                                  )
                                )
                              : "",
                            s.a.createElement(
                              "div",
                              {
                                className: "form-group col-md-12"
                              },
                              s.a.createElement(
                                "label",
                                {
                                  htmlFor: "program"
                                },
                                "Program"
                              ),
                              s.a.createElement("textarea", {
                                className: "form-control",
                                style: {
                                  color: "black",
                                  fontSize: "14px"
                                },
                                rows: "20",
                                name: "program",
                                value: this.state.program,
                                onChange: this.handleProgram
                              }),
                              s.a.createElement(
                                "button",
                                {
                                  className:
                                    "col-sm-4 mt-2 btn btn-success btn-sm float-right",
                                  onClick: this.handleExecuteProgram
                                },
                                "Execute"
                              )
                            )
                          )
                        ),
                        s.a.createElement(
                          "div",
                          {
                            className:
                              "col-md-6 p-3 bg-dark text-white border border-secondary"
                          },
                          s.a.createElement(
                            "header",
                            {
                              className:
                                "p-3 mb-2 text-white font-weight-bold text-center"
                            },
                            "Result "
                          ),
                          this.state.showOutput
                            ? s.a.createElement(
                                "div",
                                {
                                  className: "row"
                                },
                                s.a.createElement(
                                  "div",
                                  {
                                    className: "col-md-12"
                                  },
                                  s.a.createElement(
                                    "span",
                                    {
                                      className: "font-weight-bold text-success"
                                    },
                                    "CPU Time : "
                                  ),
                                  s.a.createElement(
                                    "span",
                                    {
                                      className: "font-weight-bold text-success"
                                    },
                                    this.state.result.cpuTime,
                                    " sec(s)"
                                  )
                                ),
                                s.a.createElement(
                                  "div",
                                  {
                                    className: "col-md-12"
                                  },
                                  s.a.createElement(
                                    "span",
                                    {
                                      className: "font-weight-bold text-success"
                                    },
                                    "Memory Consumption : "
                                  ),
                                  s.a.createElement(
                                    "span",
                                    {
                                      className: "font-weight-bold text-success"
                                    },
                                    this.state.result.memory,
                                    " kilobyte(s)"
                                  )
                                ),
                                s.a.createElement(
                                  "div",
                                  {
                                    className: "col-md-12"
                                  },
                                  s.a.createElement(
                                    "span",
                                    {
                                      className: "font-weight-bold text-white"
                                    },
                                    "Output : "
                                  ),
                                  s.a.createElement(
                                    "span",
                                    {
                                      className: "font-weight-bold text-white"
                                    },
                                    this.state.result.output
                                  )
                                )
                              )
                            : "",
                          this.state.showError
                            ? s.a.createElement(
                                "div",
                                {
                                  className: "row"
                                },
                                "There is a Technical issue/server down. Please try after sometime."
                              )
                            : ""
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component);
      var p = function() {
        return s.a.createElement(
          "div",
          {
            className: "App"
          },
          s.a.createElement(d, null)
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      r.a.render(s.a.createElement(p, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[18, 1, 2]]
]);
//# sourceMappingURL=main.70081dd4.chunk.js.map
