      var CustomPrice = {};
      var CustomPricePasta = {};
      var CustomPriceDessert = {};
      var CustomPriceDrinks = {};
      var TotalPrice = {};

      //for the pizza type and size price
      function TypePizzaPrice(){
        var selectSize = document.getElementById('sizePizza');
        var selectType =  document.getElementById('typePizza');
        var valueSize = document.getElementById("sizePizza").selectedIndex;
        var valueType = document.getElementById("typePizza").selectedIndex;
        var price = document.getElementById("priceForPizza");
        
        switch(true){
          case(valueSize == "1" && valueType == "1"):
          document.getElementById("priceForPizza").innerHTML = "5.99" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "5.99";
          break;
          case(valueSize == "2" && valueType == "1"):
          document.getElementById("priceForPizza").innerHTML = "8.99" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "8.99";
          break;
          case(valueSize == "3" && valueType == "1"):
          document.getElementById("priceForPizza").innerHTML = "16.50" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "16.50";
          break;
          case(valueSize == "1" && valueType == "2"):
          document.getElementById("priceForPizza").innerHTML = "6.50" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "6.50";
          break;
          case(valueSize == "2" && valueType == "2"):
          document.getElementById("priceForPizza").innerHTML = "10.99" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "10.99";
          break;
          case(valueSize == "3" && valueType == "2"):
          document.getElementById("priceForPizza").innerHTML = "17.50" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "17.50";
          break;
          case(valueSize == "1" && valueType == "3"):
          document.getElementById("priceForPizza").innerHTML = "6.50" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "6.50";
          break;
          case(valueSize == "2" && valueType == "3"):
          document.getElementById("priceForPizza").innerHTML = "10.99" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "10.99";
          break;
          case(valueSize == "3" && valueType == "3"):
          document.getElementById("priceForPizza").innerHTML = "17.50" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "17.50";
          break;
          case(valueSize == "1" && valueType == "4"):
          document.getElementById("priceForPizza").innerHTML = "7.50" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "7.50";
          break;
          case(valueSize == "2" && valueType == "4"):
          document.getElementById("priceForPizza").innerHTML = "11.99" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "11.99";
          break;
          case(valueSize == "3" && valueType == "4"):
          document.getElementById("priceForPizza").innerHTML = "18.00" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "18.00";
          break;
          case(valueSize == "1" && valueType == "5"):
          document.getElementById("priceForPizza").innerHTML = "7.99" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "7.99";
          break;
          case(valueSize == "2" && valueType == "5"):
          document.getElementById("priceForPizza").innerHTML = "12.50" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "12.50";
          break;
          case(valueSize == "3" && valueType == "5"):
          document.getElementById("priceForPizza").innerHTML = "18.50" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "18.50";
          break;
          case(valueSize == "1" && valueType == "6"):
          document.getElementById("priceForPizza").innerHTML = "8.00" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "8.00";
          break;
          case(valueSize == "2" && valueType == "6"):
          document.getElementById("priceForPizza").innerHTML = "12.50" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "12.50";
          break;
          case(valueSize == "3" && valueType == "6"):
          document.getElementById("priceForPizza").innerHTML = "19.00" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "19.00";
          break;
          case(valueSize == "1" && valueType == "7"):
          document.getElementById("priceForPizza").innerHTML = "8.00" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "8.00";
          break;
          case(valueSize == "2" && valueType == "7"):
          document.getElementById("priceForPizza").innerHTML = "12.50" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "12.50";
          break;
          case(valueSize == "3" && valueType == "7"):
          document.getElementById("priceForPizza").innerHTML = "19.00" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "19.00";
          break;
          case(valueSize == "1" && valueType == "8"):
          document.getElementById("priceForPizza").innerHTML = "8.99" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "8.99";
          break;
          case(valueSize == "2" && valueType == "8"):
          document.getElementById("priceForPizza").innerHTML = "12.99" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "12.99";
          break;
          case(valueSize == "3" && valueType == "8"):
          document.getElementById("priceForPizza").innerHTML = "19.99" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "19.99";
          break;
          case(valueSize == "1" && valueType == "9"):
          document.getElementById("priceForPizza").innerHTML = "8.99" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "8.99";
          break;
          case(valueSize == "2" && valueType == "9"):
          document.getElementById("priceForPizza").innerHTML = "12.99" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "12.99";
          break;
          case(valueSize == "3" && valueType == "9"):
          document.getElementById("priceForPizza").innerHTML = "19.99" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "19.99";
          break;
          case(valueSize == "1" && valueType == "10"):
          document.getElementById("priceForPizza").innerHTML = "8.99" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "8.99";
          break;
          case(valueSize == "2" && valueType == "10"):
          document.getElementById("priceForPizza").innerHTML = "12.99" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "12.99";
          break;
          case(valueSize == "3" && valueType == "10"):
          document.getElementById("priceForPizza").innerHTML = "19.99" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "19.99";
          break;
          case(valueSize == "0" || valueType == "0"):
          document.getElementById("priceForPizza").innerHTML = "0.00" * parseInt(document.getElementById("quantityPizzaText").innerText) + "$";
          CustomPrice.price = "0.00";
          break;
        }
        switch(true){
          case(valueType == "1"):
          document.getElementById("mainImage").src="../Pictures/Pizza images/PizzaOrder/MargharitaOrder.png";
          break;
          case(valueType == "2"):
          document.getElementById("mainImage").src="../Pictures/Pizza images/PizzaOrder/PepperoniOrder.png";
          break;
          case(valueType == "3"):
          document.getElementById("mainImage").src="../Pictures/Pizza images/PizzaOrder/CapricciosaOrder.png";
          break;
          case(valueType == "4"):
          document.getElementById("mainImage").src="../Pictures/Pizza images/PizzaOrder/CalzoneOrder.png";
          break;
          case(valueType == "5"):
          document.getElementById("mainImage").src="../Pictures/Pizza images/PizzaOrder/Cinque formaggiOrder.jpg";
          break;
          case(valueType == "6"):
          document.getElementById("mainImage").src="../Pictures/Pizza images/PizzaOrder/ViennaOrder.jpg";
          break;
          case(valueType == "7"):
          document.getElementById("mainImage").src="../Pictures/Pizza images/PizzaOrder/NapoliOrder.png";
          break;
          case(valueType == "8"):
          document.getElementById("mainImage").src="../Pictures/Pizza images/PizzaOrder/Al TonnoOrder.jpg";
          break;
          case(valueType == "9"):
          document.getElementById("mainImage").src="../Pictures/Pizza images/PizzaOrder/DoubleEggsOrder .png";
          break;
          case(valueType == "10"):
          document.getElementById("mainImage").src="../Pictures/Pizza images/PizzaOrder/LaReginaSpecialOrder.png";
          break;
          case(valueType == "0"):
          document.getElementById("mainImage").src="../Pictures/First picture for slider.jpg";
          break;
        }
      }
      //ingredience
      function Info(){
        var valueType = document.getElementById("typePizza").selectedIndex;
        var heading = document.getElementById("ingredients");
          switch(true){
            case(valueType == "1"):
            document.getElementById("infoPizza").innerHTML = "Tomato sauce, mozzarella, oregano";
            heading.style.display = "block";
            break;
            case(valueType == "2"):
            document.getElementById("infoPizza").innerHTML = "Tomato sauce, mozzarella, spicy pepperoni salami";
            heading.style.display = "block";
            break;
            case(valueType == "3"):
            document.getElementById("infoPizza").innerHTML = "Tomato sauce, mozzarella, corn, ham, oregano";
            heading.style.display = "block";
            break;
            case(valueType == "4"):
            document.getElementById("infoPizza").innerHTML = "Filled with mozzarella, ham, smoked cheese, oregano and tomato base";
            heading.style.display = "block";
            break;
            case(valueType == "5"):
            document.getElementById("infoPizza").innerHTML = "Ricotta, blue cheese, mozzarella, cheddar, ripe goat cheese, cherry tomatoes, white oregano and fresh basil";
            heading.style.display = "block";
            break;
            case(valueType == "6"):
            document.getElementById("infoPizza").innerHTML = "Cream base, mushrooms, olives, red pepper, spinach, mozzarella, savory, garlic paste and a pinch of Maldon";
            heading.style.display = "block";
            break;
            case(valueType == "7"):
            document.getElementById("infoPizza").innerHTML = "Green hot peppers, mushrooms, ham, tomato sauce, mozzarella and oregano";
            heading.style.display = "block";
            break;
            case(valueType == "8"):
            document.getElementById("infoPizza").innerHTML = "Philadelphia base, tuna, capers, cherry tomato mix, mozzarella and devesil";
            heading.style.display = "block";
            break;
            case(valueType == "9"):
            document.getElementById("infoPizza").innerHTML = "Tomato base, ham, mushrooms, mozzarella, two eggs and a pinch of oregano";
            heading.style.display = "block";
            break;
            case(valueType == "10"):
            document.getElementById("infoPizza").innerHTML = "Tomato sauce and carefully arranged: bacon, ham, chicken roll, mushrooms, pickles, mozzarella and oregano";
            heading.style.display = "block";
            break;
            case(valueType == "0"):
            document.getElementById("infoPizza").innerHTML = "";
            heading.style.display = "none";
            break;
         }
      }
      //for the quantity price
      function QuantityMinus(){
        if(document.getElementById("quantityPizzaText").innerHTML > 0){
          var num = parseInt(document.getElementById("quantityPizzaText").innerText);
          num -= 1;
          document.getElementById("quantityPizzaText").innerHTML = num;
          document.getElementById("priceForPizza").innerHTML = (parseFloat(CustomPrice.price) * num).toFixed(2) + "$";
        } else{
          alert("You cannot order less than 1 product!")
        }
      }
        function QuantityPlus(){       
          var num = parseInt(document.getElementById("quantityPizzaText").innerText);
          num += 1;
          document.getElementById("quantityPizzaText").innerHTML = num.toString();
          document.getElementById("priceForPizza").innerHTML = (parseFloat(CustomPrice.price) * num).toFixed(2) + "$";
        }

      function PizzaAdd(){
        var pizzaPrice = document.getElementById("priceForPizza").innerHTML;
        var pizzaTotalPrice = parseFloat(pizzaPrice.slice(0, -1));
        var total = document.getElementById("priceTotal").innerHTML;
        var totalPrice = parseFloat(total.slice(0, -1)) + pizzaTotalPrice;
        var notFixed = totalPrice;
        document.getElementById("priceTotal").innerHTML = (notFixed.toFixed(2)).toString() + "$";
      }
      function PizzaRemove(){
        var pizzaPrice = document.getElementById("priceForPizza").innerHTML;
        var pizzaTotalPrice = parseFloat(pizzaPrice.slice(0, -1));
        var total = document.getElementById("priceTotal").innerHTML;
        if(total !="0.00$"){
          var totalPrice = parseFloat(total.slice(0, -1)) - pizzaTotalPrice;
          var notFixed = totalPrice;
          document.getElementById("priceTotal").innerHTML = (notFixed.toFixed(2)).toString() + "$";
        }
      }

        //PASTA
        function TypePastaPrice(){
          var valueType = document.getElementById("typePasta").selectedIndex;
          var price = document.getElementById("priceForPasta");
          switch(true){
            case(valueType == "1"):
            document.getElementById("priceForPasta").innerHTML = "8.99" * parseInt(document.getElementById("quantityPastaText").innerText) + "$";
            CustomPricePasta.price = "8.99";
            break;
            case( valueType == "2"):
            document.getElementById("priceForPasta").innerHTML = "8.99" * parseInt(document.getElementById("quantityPastaText").innerText) + "$";
            CustomPricePasta.price = "8.99";
            break; 
            case(valueType == "3"):
            document.getElementById("priceForPasta").innerHTML = "10.99" * parseInt(document.getElementById("quantityPastaText").innerText) + "$";
            CustomPricePasta.price = "10.99";
            break;
            case(valueType == "4"):
            document.getElementById("priceForPasta").innerHTML = "11.99" * parseInt(document.getElementById("quantityPastaText").innerText) + "$";
            CustomPricePasta.price = "11.99";
            break;
            case(valueType == "5"):
            document.getElementById("priceForPasta").innerHTML = "12.50" * parseInt(document.getElementById("quantityPastaText").innerText) + "$";
            CustomPricePasta.price = "12.50";
            break;
            case(valueType == "6"):
            document.getElementById("priceForPasta").innerHTML = "13.99" * parseInt(document.getElementById("quantityPastaText").innerText) + "$";
            CustomPricePasta.price = "13.99";
            break;         
            case(valueType == "0"):
            document.getElementById("priceForPasta").innerHTML = "0.00" * parseInt(document.getElementById("quantityPastaText").innerText) + "$";
            CustomPricePasta.price = "0.00";
            break;
          }

          switch(true){
            case(valueType == "1"):
            document.getElementById("mainImage").src="../Pictures/Pasta/PastaOrder/BologneseOrder.jpg";
            break;
            case(valueType == "2"):
            document.getElementById("mainImage").src="../Pictures/Pasta/PastaOrder/CarbonaraOrder.jpg";
            break;
            case(valueType == "3"):
            document.getElementById("mainImage").src="../Pictures/Pasta/PastaOrder/Italian styleOrder.jpg";
            break;
            case(valueType == "4"):
            document.getElementById("mainImage").src="../Pictures/Pasta/PastaOrder/AmsterdamOrder.jpg";
            break;
            case(valueType == "5"):
            document.getElementById("mainImage").src="../Pictures/Pasta/PastaOrder/Spicy chickenOrder.jpg";
            break;
            case(valueType == "6"):
            document.getElementById("mainImage").src="../Pictures/Pasta/PastaOrder/CalamarataOrder.jpg";
            break;
            case(valueType == "0"):
            document.getElementById("mainImage").src="../Pictures/First picture for slider.jpg";
            break;
      }
    }
      function InfoPasta(){
        var valueType = document.getElementById("typePasta").selectedIndex;
        var heading = document.getElementById("ingredientsPasta");
          switch(true){
            case(valueType == "1"):
            document.getElementById("infoPasta").innerHTML = "Chopped pork and beef with tomato sauce, carrot, onion, thyme, celery, garlic, parsley, parmesan, basil and wine";
            heading.style.display = "block";
            break;
            case(valueType == "2"):
            document.getElementById("infoPasta").innerHTML = "Mushrooms, garlic, bacon, butter, olive oil, cream, cognac, egg, parmesan";
            heading.style.display = "block";
            break;
            case(valueType == "3"):
            document.getElementById("infoPasta").innerHTML = "Pork meatballs with onion, garlic, parsley, carrot and basil tomato sugo, fresh onion and parmesan";
            heading.style.display = "block";
            break;
            case(valueType == "4"):
            document.getElementById("infoPasta").innerHTML = "Tomato sauce, ragout of minced pork, mushrooms, prosciutto, ham, pickles, cheese and mozzarella";
            heading.style.display = "block";
            break;
            case(valueType == "5"):
            document.getElementById("infoPasta").innerHTML = "Chicken fillet, bacon, cream, onion, mushrooms, red peppers, fresh onion, garlic, butter, jalapeno peppers, ripe goat cheese and parmesan flakes";
            heading.style.display = "block";
            break;
            case(valueType == "6"):
            document.getElementById("infoPasta").innerHTML = "Squid, sun-dried tomatoes, sour cream, basil, onions, cherry tomatoes, fresh onions and butter";
            heading.style.display = "block";
            break;
            case(valueType == "0"):
            document.getElementById("infoPasta").innerHTML = "";
            heading.style.display = "none";
            break;
         }
      }
      function QuantityMinusPasta(){
        if(document.getElementById("quantityPastaText").innerHTML > 0){
          var num = parseInt(document.getElementById("quantityPastaText").innerText);
          num -= 1;
          document.getElementById("quantityPastaText").innerHTML = num;
          document.getElementById("priceForPasta").innerHTML = (parseFloat(CustomPricePasta.price) * num).toFixed(2) + "$";
        } else{
          alert("You cannot order less than 1 product!")
        }
      }
        function QuantityPlusPasta(){       
          var num = parseInt(document.getElementById("quantityPastaText").innerText);
          num += 1;
          document.getElementById("quantityPastaText").innerHTML = num.toString();
          document.getElementById("priceForPasta").innerHTML = (parseFloat(CustomPricePasta.price) * num).toFixed(2) + "$";
        }
        function PastaAdd(){
          var pastaPrice = document.getElementById("priceForPasta").innerHTML;
          var pastaTotalPrice = parseFloat(pastaPrice.slice(0, -1));
          var total = document.getElementById("priceTotal").innerHTML;
          var totalPrice = parseFloat(total.slice(0, -1)) + pastaTotalPrice;
          var notFixed = totalPrice;
          document.getElementById("priceTotal").innerHTML = (notFixed.toFixed(2)).toString() + "$";
        }
        function PastaRemove(){
          var pastaPrice = document.getElementById("priceForPasta").innerHTML;
          var pastaTotalPrice = parseFloat(pastaPrice.slice(0, -1));
          var total = document.getElementById("priceTotal").innerHTML;
          if(total != "0.00$"){
            var totalPrice = parseFloat(total.slice(0, -1)) - pastaTotalPrice;
            var notFixed = totalPrice;
            document.getElementById("priceTotal").innerHTML = (notFixed.toFixed(2)).toString() + "$";
          }
        }

        //DESSERT

        function TypeDessertPrice(){
          var valueType = document.getElementById("typeDesserts").selectedIndex;
          var price = document.getElementById("priceForDesserts");
          switch(true){
            case(valueType == "1"):
            document.getElementById("priceForDesserts").innerHTML = "2.99" * parseInt(document.getElementById("quantityDessertsText").innerText) + "$";
            CustomPriceDessert.price = "2.99";
            break;
            case( valueType == "2"):
            document.getElementById("priceForDesserts").innerHTML = "4.50" * parseInt(document.getElementById("quantityDessertsText").innerText) + "$";
            CustomPriceDessert.price = "4.50";
            break; 
            case(valueType == "3"):
            document.getElementById("priceForDesserts").innerHTML = "4.50" * parseInt(document.getElementById("quantityDessertsText").innerText) + "$";
            CustomPriceDessert.price = "4.50";
            break;
            case(valueType == "4"):
            document.getElementById("priceForDesserts").innerHTML = "3.50" * parseInt(document.getElementById("quantityDessertsText").innerText) + "$";
            CustomPriceDessert.price = "3.50";
            break;
            case(valueType == "0"):
            document.getElementById("priceForDesserts").innerHTML = "0.00" * parseInt(document.getElementById("quantityDessertsText").innerText) + "$";
            CustomPriceDessert.price = "0.00";
            break;
          }

          switch(true){
            case(valueType == "1"):
            document.getElementById("mainImage").src="../Pictures/Desserts/DessertsOrder/BrownieOrder.jpg";
            break;
            case(valueType == "2"):
            document.getElementById("mainImage").src="../Pictures/Desserts/DessertsOrder/Chocolate cakeOrder.jpg";
            break;
            case(valueType == "3"):
            document.getElementById("mainImage").src="../Pictures/Desserts/DessertsOrder/TiramisuOrder.jpg";
            break;
            case(valueType == "4"):
            document.getElementById("mainImage").src="../Pictures/Desserts/DessertsOrder/CheesecakeOrder.jpg";
            break;
            case(valueType == "0"):
            document.getElementById("mainImage").src="../Pictures/First picture for slider.jpg";
            break;
      }
      }
      function InfoDesserts(){
        var valueType = document.getElementById("typeDesserts").selectedIndex;
        var heading = document.getElementById("ingredientsDesserts");
          switch(true){
            case(valueType == "1"):
            document.getElementById("infoDesserts").innerHTML = "Our classic Choco Chip Brownie is a gooey chocolate brownie loaded with dark chocolate chips";
            heading.style.display = "block";
            break;
            case(valueType == "2"):
            document.getElementById("infoDesserts").innerHTML = "Freshly baked two layer chocolate cake with a delicious chocolate filling";
            heading.style.display = "block";
            break;
            case(valueType == "3"):
            document.getElementById("infoDesserts").innerHTML = "A super fluffy and delectable tiramisu that is loaded up with mascarpone cheese, coffee, and chocolate";
            heading.style.display = "block";
            break;
            case(valueType == "4"):
            document.getElementById("infoDesserts").innerHTML = "A classic cheesecake that combines the delicate taste of cream cheese and cherry jam.";
            heading.style.display = "block";
            break;
            case(valueType == "0"):
            document.getElementById("infoDesserts").innerHTML = "";
            heading.style.display = "none";
            break;
         }
      }
      function QuantityMinusDesserts(){
        if(document.getElementById("quantityDessertsText").innerHTML > 0){
          var num = parseInt(document.getElementById("quantityDessertsText").innerText);
          num -= 1;
          document.getElementById("quantityDessertsText").innerHTML = num;
          document.getElementById("priceForDesserts").innerHTML = (parseFloat(CustomPriceDessert.price) * num).toFixed(2) + "$";
        } else{
          alert("You cannot order less than 1 product!")
        }
      }
        function QuantityPlusDesserts(){       
          var num = parseInt(document.getElementById("quantityDessertsText").innerText);
          num += 1;
          document.getElementById("quantityDessertsText").innerHTML = num.toString();
          document.getElementById("priceForDesserts").innerHTML = (parseFloat(CustomPriceDessert.price) * num).toFixed(2) + "$";
        }
        function DessertAdd(){
          var dessertPrice = document.getElementById("priceForDesserts").innerHTML;
          var dessertTotalPrice = parseFloat(dessertPrice.slice(0, -1));
          var total = document.getElementById("priceTotal").innerHTML;
          var totalPrice = parseFloat(total.slice(0, -1)) + dessertTotalPrice;
          var notFixed = totalPrice;
          document.getElementById("priceTotal").innerHTML = (notFixed.toFixed(2)).toString() + "$";
        }
        function DessertsRemove(){
          var dessertPrice = document.getElementById("priceForDesserts").innerHTML;
          var dessertTotalPrice = parseFloat(dessertPrice.slice(0, -1));
          var total = document.getElementById("priceTotal").innerHTML;
          if(total != "0.00$"){
            var totalPrice = parseFloat(total.slice(0, -1)) - dessertTotalPrice;
            var notFixed = totalPrice;
            document.getElementById("priceTotal").innerHTML = (notFixed.toFixed(2)).toString() + "$";
          }
        }

    //DRINKS

    function TypeDrinksPrice(){
          var valueType = document.getElementById("typeDrinks").selectedIndex;
          var price = document.getElementById("priceForDrinks");
          switch(true){
            case(valueType == "1"):
            document.getElementById("priceForDrinks").innerHTML = "2.50" * parseInt(document.getElementById("quantityDrinksText").innerText) + "$";
            CustomPriceDrinks.price = "2.50";
            break;
            case( valueType == "2"):
            document.getElementById("priceForDrinks").innerHTML = "3.50" * parseInt(document.getElementById("quantityDrinksText").innerText) + "$";
            CustomPriceDrinks.price = "3.50";
            break; 
            case(valueType == "3"):
            document.getElementById("priceForDrinks").innerHTML = "2.00" * parseInt(document.getElementById("quantityDrinksText").innerText) + "$";
            CustomPriceDrinks.price = "2.00";
            break;
            case(valueType == "4"):
            document.getElementById("priceForDrinks").innerHTML = "1.50" * parseInt(document.getElementById("quantityDrinksText").innerText) + "$";
            CustomPriceDrinks.price = "1.50";
            break;
            case(valueType == "5"):
            document.getElementById("priceForDrinks").innerHTML = "2.00" * parseInt(document.getElementById("quantityDrinksText").innerText) + "$";
            CustomPriceDrinks.price = "2.00";
            break;
            case(valueType == "6"):
            document.getElementById("priceForDrinks").innerHTML = "1.50" * parseInt(document.getElementById("quantityDrinksText").innerText) + "$";
            CustomPriceDrinks.price = "1.50";
            break;
            case(valueType == "7"):
            document.getElementById("priceForDrinks").innerHTML = "2.00" * parseInt(document.getElementById("quantityDrinksText").innerText) + "$";
            CustomPriceDrinks.price = "2.00";
            break;
            case(valueType == "8"):
            document.getElementById("priceForDrinks").innerHTML = "1.50" * parseInt(document.getElementById("quantityDrinksText").innerText) + "$";
            CustomPriceDrinks.price = "1.50";
            break;         
            case(valueType == "0"):
            document.getElementById("priceForDrinks").innerHTML = "0.00" * parseInt(document.getElementById("quantityDrinksText").innerText) + "$";
            CustomPriceDrinks.price = "0.00";
            break;
          }

          switch(true){
            case(valueType == "1"):
            document.getElementById("mainImage").src="../Pictures/Drinks/DrinksOrder/Fiji waterOrder.jpg";
            break;
            case(valueType == "2"):
            document.getElementById("mainImage").src="../Pictures/Drinks/DrinksOrder/Orange FreshOrder.jpg";
            break;
            case(valueType == "3"):
            document.getElementById("mainImage").src="../Pictures/Drinks/DrinksOrder/Coca-cola bottleOrder.jpg";
            break;
            case(valueType == "4"):
            document.getElementById("mainImage").src="../Pictures/Drinks/DrinksOrder/Coca-cola canOrder.jpg";
            break;
            case(valueType == "5"):
            document.getElementById("mainImage").src="../Pictures/Drinks/DrinksOrder/Coca-cola zero bottleOrder.jpg";
            break;
            case(valueType == "6"):
            document.getElementById("mainImage").src="../Pictures/Drinks/DrinksOrder/Coca-cola zero canOrder.jpg";
            break;
            case(valueType == "7"):
            document.getElementById("mainImage").src="../Pictures/Drinks/DrinksOrder/fanta bottleOrder.jpg";
            break;
            case(valueType == "8"):
            document.getElementById("mainImage").src="../Pictures/Drinks/DrinksOrder/fanta canOrder.jpg";
            break;
            case(valueType == "0"):
            document.getElementById("mainImage").src="../Pictures/First picture for slider.jpg";
            break;
          }
      }
      //ingredience
      function InfoDrinks(){
        var valueType = document.getElementById("typeDrinks").selectedIndex;
        var heading = document.getElementById("ingredientsDrinks");
          switch(true){
            case(valueType == "1"):
            document.getElementById("infoDrinks").innerHTML = "Fiji water bottle 500ml";
            heading.style.display = "block";
            break;
            case(valueType == "2"):
            document.getElementById("infoDrinks").innerHTML = "Orange Fresh 500ml";
            heading.style.display = "block";
            break;
            case(valueType == "3"):
            document.getElementById("infoDrinks").innerHTML = "Coca-Cola bottle 500ml";
            heading.style.display = "block";
            break;
            case(valueType == "4"):
            document.getElementById("infoDrinks").innerHTML = "Coca-Cola can 330ml";
            heading.style.display = "block";
            break;
            case(valueType == "5"):
            document.getElementById("infoDrinks").innerHTML = "Coca-Cola Zero bottle 500ml";
            heading.style.display = "block";
            break;
            case(valueType == "6"):
            document.getElementById("infoDrinks").innerHTML = "Coca-Cola Zero can 330ml";
            heading.style.display = "block";
            break;
            case(valueType == "7"):
            document.getElementById("infoDrinks").innerHTML = "Fanta bottle 500ml";
            heading.style.display = "block";
            break;
            case(valueType == "8"):
            document.getElementById("infoDrinks").innerHTML = "Fanta 330ml";
            heading.style.display = "block";
            break;
            case(valueType == "0"):
            document.getElementById("infoDrinks").innerHTML = "";
            heading.style.display = "none";
            break;
         }
      }
      //for the quantity price
      function QuantityMinusDrinks(){
        if(document.getElementById("quantityDrinksText").innerHTML > 0){
          var num = parseInt(document.getElementById("quantityDrinksText").innerText);
          num -= 1;
          document.getElementById("quantityDrinksText").innerHTML = num;
          document.getElementById("priceForDrinks").innerHTML = (parseFloat(CustomPriceDrinks.price) * num).toFixed(2) + "$";
        } else{
          alert("You cannot order less than 1 product!")
        }
      }
        function QuantityPlusDrinks(){       
          var num = parseInt(document.getElementById("quantityDrinksText").innerText);
          num += 1;
          document.getElementById("quantityDrinksText").innerHTML = num.toString();
          document.getElementById("priceForDrinks").innerHTML = (parseFloat(CustomPriceDrinks.price) * num).toFixed(2) + "$";
        }
        function ShowPizza(){
          if(document.getElementById("pizzaCheckbox").checked == true){
            document.getElementById("pizza").style.display = "block";
          }else{
            document.getElementById("pizza").style.display = "none";
          }
        }
        function ShowPasta(){
          if(document.getElementById("pastaCheckbox").checked == true){
            document.getElementById("pasta").style.display = "block";
          }else{
            document.getElementById("pasta").style.display = "none";
          }
        }
        function ShowDesserts(){
          if(document.getElementById("dessertsCheckbox").checked == true){
            document.getElementById("desserts").style.display = "block";
          }else{
            document.getElementById("desserts").style.display = "none";
          }
        }
        function ShowDrinks(){
          if(document.getElementById("drinksCheckbox").checked == true){
            document.getElementById("drinks").style.display = "block";
          }else{
            document.getElementById("drinks").style.display = "none";
          }
        }
        function PageLoad(){
          document.getElementById("pizzaCheckbox").checked = true;
          document.getElementById("pizza").style.display = "block";

          var totalPrice = document.getElementById("priceTotal").innerHTML;
          document.getElementById("totalAmount").innerHTML = totalPrice;
        }
        function DriksAdd(){
          var drinksPrice = document.getElementById("priceForDrinks").innerHTML;
          var drinksTotalPrice = parseFloat(drinksPrice.slice(0, -1));
          var total = document.getElementById("priceTotal").innerHTML;
          var totalPrice = parseFloat(total.slice(0, -1)) + drinksTotalPrice;
          var notFixed = totalPrice;
          document.getElementById("priceTotal").innerHTML = (notFixed.toFixed(2)).toString() + "$";
        }
        function DriksRemove(){
          var drinksPrice = document.getElementById("priceForDrinks").innerHTML;
          var drinksTotalPrice = parseFloat(drinksPrice.slice(0, -1));
          var total = document.getElementById("priceTotal").innerHTML;
          if(total != "0.00$"){
            var totalPrice = parseFloat(total.slice(0, -1)) - drinksTotalPrice;
            var notFixed = totalPrice;
            document.getElementById("priceTotal").innerHTML = (notFixed.toFixed(2)).toString() + "$";
          }
        }
        function Close(){
          document.getElementById("form").style.display = "none";
          document.getElementById("form1").reset();
          document.getAnimations("totalAmount").innerHTML = "0.00$";
        }
        function PopUpOrder(){
          document.getElementById("form").style.display = "block";
        }
        function TotalAmountChange(){
          var totalPrice = document.getElementById("priceTotal").innerHTML;
          document.getElementById("totalAmount").innerHTML = totalPrice;
        }
        function Submit(){
         
          if(document.getElementById("totalAmount").innerHTML != "0.00$"){
            if(document.getElementById("name").style.borderColor != "red" && document.getElementById("family").style.borderColor != "red" && document.getElementById("email").style.borderColor != "red" && document.getElementById("address").style.borderColor != "red" && document.getElementById("phone").style.borderColor != "red" && document.getElementById("code").style.borderColor != "red"){            
              var name = document.getElementById("name").value;
              var family = document.getElementById("family").value;
              var amount = document.getElementById("totalAmount").innerHTML;
              alert('Hello ' + name + " " + family + '\nWe are pleased to inform you that your order worth ' + amount + 
              " has been accepted and is traveling to you. \nThank you for ordering from us. \nGreetings, La Regina")
              document.getElementById("form1").reset();
              document.getAnimations("totalAmount").innerHTML = "0.00$";
            }
          }else{
            alert("You should order something first!")
          }
        }
        
        function ClearTotalPrice(){
          document.getElementById("priceTotal").innerHTML = "0.00$";
        }

        // VALIDATION
        
        function Validate(){
          var name1 = document.getElementById("name").value;
          var family = document.getElementById("family").value;
          var email = document.getElementById("email").value;
          var phone = document.getElementById("phone").value;
          var address = document.getElementById("address").value;
          var code = document.getElementById("code").value;
          var hasNumber = /\d/; 
          var onlyNum = /^\d+$/;

          var str = email;
          var after_ = str.substring(str.indexOf('@') + 1);

          if((name1 === "" || name1 == null) || (hasNumber.test(name1) == true) || (name1[0] !== name1[0].toUpperCase()) || (name1.length > 20) ||(name1.split(/\W+/).length !== 1)){
            document.getElementById("name").style.borderColor = "red";
          }else{
            document.getElementById("name").style.borderColor = null;
          }

          if((family === "" || family == null) || (hasNumber.test(family) == true) || (family[0] !== family[0].toUpperCase()) || (family.length > 20) || (name1.length > 20) ||(family.split(/\W+/).length !== 1)){  
            document.getElementById("family").style.borderColor = "red";
          }else{
            document.getElementById("family").style.borderColor = null;
          }
          
          if((after_.includes(".") && email.includes("@"))){
            document.getElementById("email").style.borderColor = null;
          }else{
            
            document.getElementById("email").style.borderColor = "red";
          }

          if((phone.startsWith("088") || phone.startsWith("089") || phone.startsWith("087")) && (phone.length === 10) && (onlyNum.test(phone) == true)){
            document.getElementById("phone").style.borderColor = null;
          }else{
            document.getElementById("phone").style.borderColor = "red";
          }

          if(address === "" || address == null){
            document.getElementById("address").style.borderColor = "red";
          }
          else{
            document.getElementById("address").style.borderColor = null;
          }

          if(code.length != 5){
            document.getElementById("code").style.borderColor = "red";
          }
          else{
            document.getElementById("code").style.borderColor = null;
          }
          
        }

        // Hamburger
        var ham = 0;
        function HamburgerClick(){
          if(ham == 0){
            document.getElementById("right-section").style.display = "block";
            document.getElementById("top-section").style.backgroundColor = "#EFEFEF";
            document.getElementById("top-section").style.backgroundImage = "none";
            ham++;
          }
          else if(ham == 1){
            document.getElementById("right-section").style.display = "none";
            document.getElementById("top-section").style.backgroundImage = "../Pictures/BackgroundNav.jpg";
            document.getElementById("top-section").style.backgroundSize = "cover";
            ham--;
          }
          document.getElementById("hamburger").style.color = "rgb(49, 48, 48)";
        }