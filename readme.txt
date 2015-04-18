URL: http://allisoncandreva.com/WebDesign/final/
https://github.com/acandreva/project_final3_logan_allison.git
Resources:
- Backstretch: http://srobbin.com/jquery-plugins/backstretch/
- Currency Converter: http://harrypotter.wikia.com/wiki/Wizarding_money
- Slideshows: http://jquery.malsup.com/cycle2/
- Drawer: http://git.blivesta.com/drawer/

COMMENTS
- I tried to do the following in my CSS, but it only screwed up the entire page. Instead, I had to use the box-sizing on the specific elements that needed it.
	html {
	  box-sizing: border-box;
	}
	*, *:before, *:after {
	  box-sizing: inherit;
	}
- The documentation for the navigation (drawer) was pretty unhelpful. For the life of me, I could not get the nav centered using the plug in. I altered the drawer.css, but nothing I did made it perfectly center.
- The console logs an error when it looks for the cycle2.js.map file, but there was no such file when I downloaded the code. The drawer file came with one, which I included.
- The overlay in the slideshows is not very responsive, so I had to change the percentages with queries. However, it’s still not perfect.