Java Script Notes

Tool to check our JavaScript
  -console.log("insert variable here")
  Note: user never sees this, only a developer tool

Variable- defining an idea or quantity for the computer to remember
  *camelCase- first word is lowercase, first letter of the second word is captialized

Data Types:
  1) "strings": must be put into quotes and represents texts. should be viewed as pictures, can not be used for quantities or math.
    var harryStyles- "perfect human being";

  2) numbers: do NOT use quotes, represents a quantity or amount. Can use operators to perform math.
    var harryNumber = 1;
    a) <--> greater than or less than. ex: 8>5
    b) +,-,*,/ --> addition, subtraction, multiplication, division
    c) === --> equal to
    d) <= or >= --> less than or equal to and greater than or equal to
    e) % --> remainder ex: 16%3 computer will return one because that is the remainder of 16/3

How to use number and string variables:
*Note: var means define to computer
  Ex: number of things i need to walk dog
  var dogName = "nala"
  var dogLeash = 1;
  var doggyBags = 2;
  var waterBottles =1;

  var numItems = dogLeash + doggyBags + waterBottles;

  Summary: 1) broke down our problem into parts (variables)
  2) defined our variables 3) used variables to perform a task

Interpolation: intergrating numerical values into string using variables. must use backticks (``).
  console.log(`Take ${dogName} on a walk. Don't forget to bring ${numItems} items.`)

Arrays: a list of strings and/or numbers. Represented by square brackets. first item is assigned an index number of 0.

  var arraySports = ["soccer", "basketball", "football", "discus", "diving"]
  console.log(arraySports[0]) --> soccer
  console.log(arraySports[4]) --> discus

  arraySports.length--> .lenth tells computer to print the number of items in an array

  arraySports.push("gymnastics") -->adds an item to the end of an array
  arraySports.pop() -->removes the last item of an array

jQuery (element accessors): library of shortcuts we download onto our html page. link goes on second to last line of the body (right above javascript)
    <script src="https://ajax.googleapis.com/ajax/libs//jquery/2.1.3/jquery.min.js"></script>

-Event handlers (event listeners): tells the computer to listen to a certain area (often a button) for a click. on the click, the computer is told to perform a function (action)
  define specific area on HTML page using jQuery ($)
    ex: var dareButton = $('.darebutoon');
  area      listen for    action (this line must come on rthe line below the jQuery)
    ex: dareButton.on('click', showDare)
    another ex:
    dareButton.on('hover', showDare)

-Adding elements to a webpage
  1)think of user experience and decide what you want the user to see or do
  2) create an area (<div>) in html page to add the element
  3) use jQuery --$('name of div') to tell computer where to look in html file. acts as a translater btwn the two languages
  4) create a function (action) to add the items to the html area or <div>
    a) .text --> only adds the words without any html formatting (no CSS, boring)
    b) .append --> adds html elements to the html file. MUST use backticks aka ` `
      ex:
      var truthButton = $('.truthbutton');
      truthButton.on('click', showTruth);
      var truthContainer =$('.truthcontainer')

      function showTruth(){
        // truthContainer.text(arrayTruth[2]);
        truthContainer.append(`<h1> ${arrayTruth[4]}</h1>`);
      }
-Conditionals
  1)define the condition (what do you want ot be true?)
  2)determine the action if the user meets the condition
  3)determine the action if the user does not meet the conditon
  4) conditionals exist in functions
  ex:
  if(condition){
    action if user meets condition
  }
  else{
    action if user does not meet condition
  }
  Ex:
  if (userNumber > 7){
    container.append(`<imgsrc=""`)
  }
  else{
    container.append(`<p> That ain't it cheif </p>`)
  }
