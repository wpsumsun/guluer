(function (window) {
  var svgSprite = '<svg><symbol id="i-loading" viewBox="0 0 1024 1024"><path d="M384 128A64 64 13680 1 0 640 128 64 64 13680 1 0 384 128zM655.53 240.47A64 64 13680 1 0 911.53 240.47 64 64 13680 1 0 655.53 240.47zM832 512A32 32 13680 1 0 960 512 32 32 13680 1 0 832 512zM719.53 783.53A32 32 13680 1 0 847.53 783.53 32 32 13680 1 0 719.53 783.53zM448.002 896A32 32 13680 1 0 576.002 896 32 32 13680 1 0 448.002 896zM176.472 783.53A32 32 13680 1 0 304.472 783.53 32 32 13680 1 0 176.472 783.53zM144.472 240.47A48 48 13680 1 0 336.472 240.47 48 48 13680 1 0 144.472 240.47zM56 512A36 36 13680 1 0 200 512 36 36 13680 1 0 56 512z"  ></path></symbol><symbol id="i-thumbsup" viewBox="0 0 1024 1024"><path d="M569.869976 309.608148 572.269319 305.0481 573.655732 300.085278C581.922733 270.490102 588.744925 242.487596 596.071645 209.307487 595.070616 213.840598 607.938283 154.345996 610.982746 141.622644 620.840545 100.424023 621.940099 89.945946 633.3696 87.178421 661.045276 76.108108 709.15584 202.410549 640.443088 355.186086L636.516324 363.916662C623.987546 391.772983 638.504545 417.691094 668.637405 421.765358L678.124074 423.048048C806.263144 440.373732 898.552528 476.43729 902.239204 510.493461 906.029111 545.502986 899.049029 566.825248 885.470097 580.681406 876.989717 589.334874 866.51904 594.403774 858.276947 596.352623L842.104112 600.17664C834.701561 601.92697 827.37152 609.350839 825.724264 616.793666L822.133206 633.019739C806.57837 703.302501 765.820541 834.123758 743.98803 892.59481 737.232121 910.688165 742.250413 897.109593 742.250413 897.109593 735.741232 910.94119 718.207723 923.617429 703.015991 925.193154 703.015991 925.193154 704.258076 925.509921 689.596056 926.186103 554.172056 932.431534 340.614642 885.019326 340.616856 875.911698 340.664874 685.929253 341.114603 542.006365 341.114603 542.006365 341.114603 542.006365 521.742668 401.071384 569.869976 309.608148L569.869976 309.608148 569.869976 309.608148ZM243.19571 562.782305C243.587183 566.712388 243.998582 569.84586 244.326954 571.950555L243.74784 564.483306C243.74784 687.163605 243.74784 701.001443 243.74784 908.583125L243.74784 913.036298C243.74784 928.264729 255.057366 945.421953 269.120069 951.405538L273.21773 953.149068C411.382729 1011.93734 602.088476 1026.87713 733.839914 1014.244904 748.370612 1012.851706 745.842162 1012.760429 745.842162 1012.760429 776.055559 1008.161562 810.660117 981.759327 822.884048 953.877409 822.884048 953.877409 827.405838 944.735606 834.842292 925.208479 880.679438 804.847605 903.344848 683.6055 911.956549 679.405348 926.649565 672.239294 941.231879 662.174178 954.652368 648.479784 988.967853 613.463808 1005.387139 563.30669 998.541423 500.068381 991.994188 439.588481 944.232476 398.459995 869.850361 369.393966 819.604342 349.759514 745.730629 354.727648 752.324912 335.141452 778.191983 258.310789 784.740739 187.306369 771.480355 129.209989 753.570179 50.742512 699.192182 0 626.059901 0 592.242716 0 564.787754 14.593506 546.161332 41.872461 533.286054 60.728639 525.326115 83.352959 516.777098 119.081385 513.443563 133.012784 500.239498 194.063118 501.485319 188.421112 494.512156 220.00027 488.090707 246.357831 480.362275 274.024824L484.14803 264.501956C444.349717 340.136433 367.553315 402.783088 270.616493 473.545339 249.71859 488.800436 243.58317 509.262234 242.343715 535.230939 241.902979 544.464549 242.294314 553.733957 243.19571 562.782305L243.19571 562.782305ZM20.756757 560.532787C20.756757 518.444015 54.916982 484.324324 96.864865 484.324324 138.898266 484.324324 172.972973 518.38107 172.972973 560.532787L172.972973 892.440186C172.972973 934.528958 138.812748 968.648649 96.864865 968.648649 54.831464 968.648649 20.756757 934.591903 20.756757 892.440186L20.756757 560.532787 20.756757 560.532787Z"  ></path></symbol><symbol id="i-settings" viewBox="0 0 1024 1024"><path d="M998.4 670.72C806.4 519.68 998.4 345.6 998.4 345.6l5.12-5.12-102.4-176.64-10.24 5.12c-33.28 15.36-64 20.48-92.16 20.48-148.48 0-189.44-184.32-189.44-184.32l0-5.12-202.24 0-2.56 10.24C384 158.72 286.72 186.88 212.48 186.88c-48.64 0-87.04-12.8-87.04-12.8L117.76 171.52l-99.84 176.64L25.6 353.28C217.6 504.32 25.6 678.4 25.6 678.4l-5.12 5.12 102.4 176.64 10.24-5.12c35.84-15.36 66.56-20.48 92.16-20.48 148.48 0 189.44 181.76 189.44 181.76l2.56 7.68 202.24 0 2.56-10.24c20.48-145.92 117.76-174.08 192-174.08 48.64 0 87.04 12.8 87.04 12.8l7.68 2.56 102.4-176.64L998.4 670.72zM880.64 793.6c-17.92-2.56-43.52-7.68-69.12-7.68-125.44 0-209.92 66.56-238.08 186.88l-120.32 0c-28.16-79.36-97.28-189.44-230.4-189.44-25.6 0-51.2 5.12-79.36 12.8L84.48 691.2c30.72-35.84 81.92-107.52 76.8-194.56-2.56-58.88-28.16-112.64-79.36-161.28L140.8 230.4c17.92 2.56 43.52 7.68 69.12 7.68 125.44 0 209.92-66.56 238.08-186.88l120.32 0c23.04 64 84.48 189.44 230.4 189.44 25.6 0 51.2-5.12 79.36-12.8l61.44 104.96c-30.72 35.84-81.92 107.52-79.36 194.56 2.56 58.88 28.16 112.64 79.36 161.28L880.64 793.6z"  ></path><path d="M512 294.4c-125.44 0-227.84 102.4-227.84 227.84s102.4 227.84 227.84 227.84 227.84-102.4 227.84-227.84S637.44 294.4 512 294.4zM512 698.88c-97.28 0-176.64-79.36-176.64-176.64s79.36-176.64 176.64-176.64 176.64 79.36 176.64 176.64S609.28 698.88 512 698.88z"  ></path></symbol><symbol id="i-info" viewBox="0 0 1024 1024"><path d="M512.001 928.997c230.524 0 418.076-187.552 418.075-418.077 0-230.527-187.552-418.077-418.075-418.077s-418.077 187.55-418.077 418.077c0 230.525 187.552 418.077 418.077 418.077zM512 301.88c28.86 0 52.26 23.399 52.26 52.263 0 28.858-23.399 52.257-52.26 52.257s-52.26-23.399-52.26-52.257c0-28.863 23.399-52.263 52.26-52.263zM459.74 510.922c0-28.86 23.399-52.26 52.26-52.26s52.26 23.399 52.26 52.26v156.775c0 28.86-23.399 52.26-52.26 52.26s-52.26-23.399-52.26-52.26v-156.775z"  ></path></symbol><symbol id="i-error" viewBox="0 0 1024 1024"><path d="M511.999 95.003c-230.524 0-418.076 187.552-418.075 418.077 0 230.527 187.552 418.077 418.075 418.077s418.077-187.55 418.077-418.077c0-230.525-187.552-418.077-418.077-418.077zM512 722.12c-28.86 0-52.26-23.399-52.26-52.263 0-28.858 23.399-52.257 52.26-52.257s52.26 23.399 52.26 52.257c0 28.863-23.399 52.263-52.26 52.263zM564.26 513.078c0 28.86-23.399 52.26-52.26 52.26s-52.26-23.399-52.26-52.26l0-156.775c0-28.86 23.399-52.26 52.26-52.26s52.26 23.399 52.26 52.26l0 156.775z"  ></path></symbol><symbol id="i-arrowdown" viewBox="0 0 1024 1024"><path d="M930.666 323.731c0 14.331-5.512 27.677-15.529 37.657l-365.99 365.34c-1.306 1.336-2.417 2.379-3.607 3.234l-2.723 2.16c-10.703 10.653-23.296 15.887-36.627 15.887-13.571 0-26.26-5.351-35.729-15.053l-363.953-367.853c-9.813-9.951-15.222-23.238-15.222-37.401 0-13.849 5.25-26.931 14.769-36.832 9.549-9.841 22.867-15.506 36.518-15.506 13.484 0 26.259 5.365 35.969 15.134l328.283 331.846 336.964-336.081c9.666-9.607 22.296-14.915 35.619-14.915 13.958 0 27.055 5.673 36.876 15.937 9.271 9.768 14.381 22.734 14.381 36.444z"  ></path></symbol><symbol id="i-Right" viewBox="0 0 1024 1024"><path d="M290.3 945c17.5 17.5 45.8 17.5 63.3 0l370.2-370.2c35-35 35-91.7 0-126.6l-372.9-373c-17.3-17.3-45.3-17.5-62.8-0.5-17.9 17.4-18.1 46.1-0.5 63.8l341.3 341.3c17.5 17.5 17.5 45.8 0 63.3L290.3 881.7c-17.5 17.5-17.5 45.8 0 63.3z"  ></path></symbol><symbol id="i-left" viewBox="0 0 1024 1024"><path d="M729.4 871L377.9 519.5c-1.9-1.9-3.1-4.5-3.1-7.5s1.2-5.6 3.2-7.6L729.4 153c13.9-13.9 13.9-36.7 0-50.6-13.9-13.9-36.7-13.9-50.6 0L294.6 486.7c-13.9 13.9-13.9 36.7 0 50.6 0.1 0.1 0.1 0.1 0.2 0.1l384.1 384.1c13.9 13.9 36.7 13.9 50.6 0 13.8-13.8 13.8-36.6-0.1-50.5z"  ></path><path d="M382.8 522.2c0.2 0 0.3 0.1 0.5 0.1-0.2 0-0.3 0-0.5-0.1zM381.1 521.6c0.1 0 0.1 0.1 0.2 0.1-0.1 0-0.1 0-0.2-0.1zM385.4 522.6h-0.1 0.1z"  ></path></symbol><symbol id="i-download" viewBox="0 0 1024 1024"><path d="M894.8 704.2h-3.2c-34.8 0-63 28.2-63 63v64.7H192v-64.7c0-34.8-28.2-63-63-63-35.5 0-64.6 29.1-64.6 64.6v99.6c0 50.1 41 91.1 91.1 91.1h712.6c50.1 0 91.1-41 91.1-91.1v-99.6c0.1-35.5-28.9-64.6-64.4-64.6z"  ></path><path d="M248.2 376.3c24.9-24.9 65.6-24.9 90.5 0l111.6 111.6V128c0-34.5 28.3-62.8 62.8-62.8s62.8 28.3 62.8 62.8v358.5L686 376.4c24.9-24.9 65.6-24.9 90.5 0 24.9 24.9 24.9 65.6 0 90.5L557.6 685.6c-12.5 12.5-28.9 18.7-45.3 18.7s-32.8-6.2-45.3-18.7L248.2 466.8c-24.9-24.9-24.9-65.6 0-90.5z"  ></path></symbol></svg>';
  var script = function () {
    var scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1]
  }();
  var shouldInjectCss = script.getAttribute("data-injectcss");
  var ready = function (fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function () {
          document.removeEventListener("DOMContentLoaded", loadFn, false);
          fn()
        };
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document, done = false, init = function () {
        if (!done) {
          done = true;
          fn()
        }
      };
      var polling = function () {
        try {
          d.documentElement.doScroll("left")
        } catch (e) {
          setTimeout(polling, 50);
          return
        }
        init()
      };
      polling();
      d.onreadystatechange = function () {
        if (d.readyState == "complete") {
          d.onreadystatechange = null;
          init()
        }
      }
    }
  };
  var before = function (el, target) {
    target.parentNode.insertBefore(el, target)
  };
  var prepend = function (el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  };

  function appendSvg() {
    var div, svg;
    div = document.createElement("div");
    div.innerHTML = svgSprite;
    svgSprite = null;
    svg = div.getElementsByTagName("svg")[0];
    if (svg) {
      svg.setAttribute("aria-hidden", "true");
      svg.style.position = "absolute";
      svg.style.width = 0;
      svg.style.height = 0;
      svg.style.overflow = "hidden";
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
    } catch (e) {
      console && console.log(e)
    }
  }
  ready(appendSvg)
})(window)