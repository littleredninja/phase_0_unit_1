#### Include an inline screenshot of your codeschool's points from the profile page:

<img src="images/code-school.png" width="500px">

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  * Javascript Debugging
  * Performance Optimization 

  Elements allows for editing of HTML and CSS. Network and Sources allow for Javascript Debugging by illustrating exactly how and when parts of a page are loaded, allowing you to see if there are any lags and find JS that needs improvement.  Timeline and Profile allow for Performance Optimization by illustrating page loading details like framerate and showing you any memory leaks.  

* What's the quick key for your OS to spawn the Dev Tools inspector?

  Option-Command-I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)

  #0b0f11

  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

That part of the site is an image inside a div, so you'd have to find the image file and edit it or change the code to a different image file.  

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

  The largest image is a png of times square, and it can be found here: http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png.  It is 316 KB and 500 × 210 px.  This info can be found by going to Network tab, refresh the page while holding shift, then sort by size and find the largest image file.  You can click on the file and then the preview tab, and here you can find the source image and it's size.  

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  How many kilobytes of data can be eliminated?

  I guess it depends on what you mean by easy, but I would optimize the images, as that's easy for me and saves 885.9KiB for a 39% reduction.  I'm not sure how much work it is to defer parsing JavaScript or to leverage browser caching.  