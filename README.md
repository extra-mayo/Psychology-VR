# Psychology-VR

Goal-oriented game.

#Project update logs
[Displayed on Sky's i6](http://i6.cims.nyu.edu/~tz650/interactive/final_update_1.html)

##Resources used:

* [A-Frame WEB VR](https://github.com/aframevr/aframe)
* [K-Frame: an extension](https://github.com/ngokevin/kframe)
* [p5-js](https://p5js.org/reference/)
* [A-Frame p5 wrapper](http://cims.nyu.edu/~kapp/courses/cs0380fall2016/aframep5.php)




##Docs
######Weather
- Rain(x, y, z)  
  * x = left/right --> random(x) || default 
  * y = height --> random(y) || default
  * z = front/back --> random(z)  || default
    
- Snow(x, y, z)  
  * x = left/right --> random(x) || default 
  * y = height --> random(y) || default
  * z = front/back --> random(z)  || default
  
* More?


######Environment 
- TwoD_Trees(x, z, height)
  * x = left/right
  * z = front/forward
  * height = height.   
   It's best if height = 5!
  
- threeTrees(x, z) -- DAE model!
  * x = left/right
  * z = front/forward
  
- Background mountain example
  * 		<a-mountain color="grey"></a-mountain>