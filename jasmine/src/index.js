
//Create houseHold array 
var houseHold = [];
// creating an id vriable to attach to each new person within a househole
var id = 0;
//Variable for Household Member
var hMember = {};
//variable for age input
var age;
//variable for relatonship input
 var rel;
//var for smoker input
var smoker;
//id for delete
var deleteId;
//create Div for Household data display
var displayDiv = document.createElement("div");
displayDiv.setAttribute('class', 'displayDiv');
//button variable for click event
button = document.getElementsByClassName('add')

var addMember = function(age,rel, smoker){
    button[0].addEventListener('click', function(e){
        e.preventDefault();
        //If statement to validate age
        if (age <= 0 ){
            alert("Household Member age must be greater than 0. Please try again")
        }
        else if (rel === ''){
            alert('Relationship Cannot be left blank')
        } 
        else{
            //Pull value from rel, age and smoker form inputs
            age = document.getElementsByName('age')[0].value;
            rel = document.getElementsByName('rel')[0].value;
            smoker = document.getElementsByName('smoker')[0];
            smokerCheck();//Verify is smoker box is checked;
            //increment id for each household member
            id++;
            hMember = {
                memberId:id,
                memberAge: age,
                memberRel: rel, 
                memberSmoker: smoker
            }
            houseHold.push(hMember);
            addDiv(); 
        }
        return hMember;
    })
}
addMember();

var addDiv = function(){       
        createHeading();
        createButton();
        createMemberSection();
        //append heading to div
        displayDiv.appendChild(heading);
        //append Member info  to div
        displayDiv.appendChild(para); 
        //append new div to body on click;
        document.body.appendChild(displayDiv);
}

var smokerCheck = function(){
    if (smoker.checked){
        smoker = ('yes')
    }
    else{
        smoker = ('no')
    }
}

var relCheck = function(){
    if (rel === ''){
        alert('Relationship cannot be left blank')
    }
}
var createMemberSection = function(){
    for (var key in houseHold){  
        para = document.createElement("P");
        memberText = document.createTextNode( 'Relationship: ' + houseHold[key].memberRel +  ' Age: ' + houseHold[key].memberAge + ' Smoker: ' + houseHold[key].memberSmoker + ' ');
        para.setAttribute('id', key);
        para.appendChild(memberText);
        para.appendChild(deleteButton);
        return key;
    }
}
var createButton = function(){
    for (var key in houseHold){  
        deleteButton = document.createElement('button');
        deleteButton.className += 'delete';
        deleteButton.setAttribute('class', 'display');
        deleteButton.setAttribute('data-id', key);
        buttontext = document.createTextNode("Delete Member");
        deleteButton.appendChild(buttontext); 
        deleteButton.addEventListener('click', function(e){
        deleteMember(key);
        return key;
        }) 
    }   
}
var createHeading = function(){
    for (var key in houseHold){  
        heading = document.createElement('H2');
        memberHeading = document.createTextNode('Household Member' + key); 
        heading.appendChild(memberHeading);  
        return key;
    }
}

var deleteMember = function(key){
    houseHold.splice(key, 1);
    node = document.getElementById(key);
    parent = document.getElementsByClassName('displayDiv');
    node.style.display = 'none';
    return key;
}

var submit  = document.getElementsByTagName("button")[1];
submit.addEventListener('click', function(e){
    e.preventDefault();
    pushObject();
})

var pushObject = function(){
    var displaySection = document.getElementsByClassName('debug')[0];
    houseHouldText = document.createTextNode(houseHold);
    console.log(displaySection);
    displaySection.appendChild(houseHouldText);
    displaySection.style.dislay = 'block';
    displayDiv.style.display = 'none'; 
}    


