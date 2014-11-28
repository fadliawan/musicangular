angular.module('templates-main', ['about/about.tpl.html', 'home/detail.tpl.html', 'home/home.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<h1>About page</h1>\n" +
    "\n" +
    "{{body}}\n" +
    "\n" +
    "<a ui-sref=\"home\">Home</a>");
}]);

angular.module("home/detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/detail.tpl.html",
    "<div ng-init=\"st = (tracks | filter: {trackId: selectedTrackId})[0]\">\n" +
    "\n" +
    "{{ st.trackName }}\n" +
    "<br>by<br>\n" +
    "{{ st.artistName }}\n" +
    "\n" +
    "<button class=\"btn\" ng-click=\"closePop()\">Close</button>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<h1>Home</h1>\n" +
    "\n" +
    "{{body}}\n" +
    "\n" +
    "<ul class=\"tracks\">\n" +
    "	<li ng-repeat=\"track in tracks\">\n" +
    "		<a href=\"\" ng-click=\"clickTrack(track.trackId)\">{{track.trackName}}</a>\n" +
    "	</li>\n" +
    "</ul>\n" +
    "\n" +
    "<a ui-sref=\"about\">About Us</a>\n" +
    "\n" +
    "<div ui-view=\"main\" class=\"pop-up\"></div>");
}]);
