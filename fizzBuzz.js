if (count % 3 === 0 && count % 5 ===0)
   {
   output.push("fizzBuzz");
   }
   else if (count % 3 === 0)
   {
   output.push("Fizz");
   }
   else if (count % 5 === 0)
   {
   output.push("Buzz");
   }
   else {
   output.push(count);

   }
   count++;
      console.log(output);
   }

   ar nameOfList = ["Julia", "Erja", "Asta", "Phil"];

// Second project
   function payBill(nameOfList) {
     var numOfPeople = nameOfList.length;
       var randomPerson = Math.floor(Math.random()* numOfPeople);
       var selectedName = nameOfList[randomPerson];
       return selectedName + " is buying lunch today!";
   }
   payBill();
