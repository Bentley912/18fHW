# Household Builder

This is a simple exercise to create a household builder that allows a user to input data and creat household members. the user can add as many householder members as they want and then submit those user to create a household. 

Every household member that the user submits  must have an age >0 and must have  a relationship designation or the form will not allow you to add the household member.

## Getting Started
This is simply an html page linked to a Javascript page. So all you need to do to get this up and running on your machine is to clone this repo to your desktop, go to your file manager and open the **homework.html** page in your browser. 

WARNING: if you decide to change the name of the **index.js** file, you will have to change your script tag in the HTML file.

Example: 

```<script type="text/javascript" src="./index.js"></script>```

should be changed to:

```<script type="text/javascript" src="./YOURJSFILENAMEHERE.js"></script>```


## Testing 

We are using [Jasmine.js](https://jasmine.github.io/) for the testing suite. This is a standalone testing suite that needs no other dependencies to run. Simple to use. 

1. Put your JS code into the jasmine/src file. Our JS for this project is already in the **src/index.js** file.

2. In **SpecRunner.html** include your src file where it says:
 <!-- include source files here... -->

3. All of your test will gone in **spec/** directory. Our test file for this code is called **IndexSpec.js**

4. In **SpecRunner.html** include your spec file where it says:
    <!-- include spec files here... -->         

5. Open the **SpecRunner.html** in your browser. You should see all the magic happening!! Tests. Add as many tests as you can dream. 

# Issues 

* I had 3 hours to complete the code, documentation and testing. I ended up making functinal code, but not necessarily _testable_ code. The JS logic can be written in a way that includes more standalone functions that can have arguments passed into them. 
