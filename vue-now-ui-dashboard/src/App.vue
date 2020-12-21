<template>
  <router-view></router-view>
</template>


<script>
export default {
  metaInfo() {
    return {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        {
          rel: "stylesheet",
          href:
            "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Montserrat:400,700,200",
        },
        {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
          integrity:
            "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
          crossorigin: "anonymous",
        },
      ],

      script: (function () {
        if (process.env.VUE_APP_IS_DEMO == 1) {
          return [
            {
              hid: "gtm-script1",
              innerHTML: `
        (function (a, s, y, n, c, h, i, d, e) {
        s.className += " " + y;
        h.start = 1 * new Date();
        h.end = i = function() {
          s.className = s.className.replace(RegExp(" ?" + y), "");
        };
        (a[n] = a[n] || []).hide = h;
        setTimeout(function() {
          i();
          h.end = null;
        }, c);
        h.timeout = c;
      })(window, document.documentElement, "async-hide", "dataLayer", 4000, {
        "GTM-K9BGS8K": true
      });
        `,
              type: "text/javascript",
              charset: "utf-8",
            },
            {
              hid: "ga",
              innerHTML: `
             (function (i, s, o, g, r, a, m) {
            i["GoogleAnalyticsObject"] = r;
            (i[r] =
              i[r] ||
              function () {
                (i[r].q = i[r].q || []).push(arguments);
              }),
              (i[r].l = 1 * new Date());
            (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
          })(
            window,
            document,
            "script",
            "https://www.google-analytics.com/analytics.js",
            "ga"
          );
          ga("create", "UA-46172202-22", "auto", { allowLinker: true });
          ga("set", "anonymizeIp", true);
          ga("require", "GTM-K9BGS8K");
          ga("require", "displayfeatures");
          ga("require", "linker");
          ga("linker:autoLink", ["2checkout.com", "avangate.com"]);
              `,
              type: "text/javascript",
              charset: "utf-8",
            },

            {
              hid: "gtm-script2",
              innerHTML: `
             (function(w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-NKDMSK6");
              `,
              type: "text/javascript",
              charset: "utf-8",
            },
          ];
        }
      })(),
    };
  },
};
</script>
