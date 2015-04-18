URL: http://allisoncandreva.com/WebDesign/final/
https://github.com/acandreva/project_final3_logan_allison.git
Resources:
- Backstretch: http://srobbin.com/jquery-plugins/backstretch/
- Currency Converter: http://harrypotter.wikia.com/wiki/Wizarding_money
- Slideshows: http://jquery.malsup.com/cycle2/
- Drawer: http://git.blivesta.com/drawer/



COMMENTS
- I tried to do the following in my CSS, but it only screwed up the entire page. Instead, I had to use the box-sizing on the specific elements that needed it 
	html {
	  box-sizing: border-box;
	}
	*, *:before, *:after {
	  box-sizing: inherit;
	}
- The documentation for the navigation (drawer) was pretty unhelpful. For the life of me, I could not get the nav centered using the plug in. I altered the drawer.css, but nothing I did made it perfectly center.
- There is an error in the slowscroll.js. This is third-party code and the slow scroll with not work without it, so I left it.
- The overlay in the slideshows is not very responsive, so I had to change the percentages with queries. However, it’s still not perfect.
- I did not end up using the section tag because it was a little to complicated at this point to change all of the code. And I wasn’t sure exactly which elements to place in sections.
