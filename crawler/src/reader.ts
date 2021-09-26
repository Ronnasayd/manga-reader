const e = {
  PAAs: function (e, t, n) {
    "use strict";
    var r = n("QSHN");
    e.exports = function (e, t, i) {
      var o = Math.max(i % n("MmsG")(), 1),
        a = t.match(/.{1,5}/gi);
      t = (t = a.slice(o).concat(a.slice(0, o)).join("")).split("");
      var s = e.split("").reverse(),
        c = e.split("").sort(function () {
          return Math.random() - 0.5;
        }),
        u = e.split("").sort(function () {
          return Math.random() - 0.5;
        });
      return e
        .split("")
        .reduce(function (e, n, r) {
          return e + u[r] + n + s[r] + t[r] + c[r];
        }, "")
        .match(new RegExp(".{1," + Math.max(i % 11, 1) + "}", "gi"))
        .map(function (e) {
          return r(Math.max(i % 7, 1)) + e;
        })
        .join("");
    };
  },
  MmsG: function (e, t, n) {
    "use strict";
    e.exports = function () {
      return 7;
    };
  },
  QSHN: function (e, t, n) {
    "use strict";
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    e.exports = function (e) {
      for (var t = "", n = r.length, i = 0; i < e; i++)
        t += r.charAt(Math.floor(Math.random() * n));
      return t;
    };
  },
};
const t = {};
function n(r) {
  if (t[r]) return t[r].exports;
  var i = (t[r] = {
    i: r,
    l: !1,
    exports: {},
  });
  return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
}

// k = "6f8b910145e8c8456bc91a5983fb059262b2b960";
// t = "aefcc4d77677988fcd1e74ea82f9304afe49b517";
// r = "155904";

export default function decrypt(k, t, r) {
  return n("PAAs")(k, t, r);
}
