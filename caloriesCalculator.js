     // Tworzenie klasy reprezentującej produkt spozywczy
     class FoodItem {
        constructor(name, calories) {
          this.name = name;
          this.calories = calories;
        }
      }
       
      // Tworzenie klasy reprezentującej aplikację do liczenia kalorii
      class CalorieCounter {
        constructor() {
          this.foodItems = [];
          this.totalCalories = 0;
        }
       
        // Metoda do dodawania produktu spozywczego
        addFoodItem(name, calories) {
          const foodItem = new FoodItem(name, calories);
          this.foodItems.push(foodItem);
          this.totalCalories += calories;
        }
       
        // Metoda do usuwania produktu spozywczego
        removeFoodItem(name) {
          const index = this.foodItems.findIndex(item => item.name === name);
          if (index !== -1) {
            const removedItem = this.foodItems.splice(index, 1)[0];
            this.totalCalories -= removedItem.calories;
          }
        }
       
        // Metoda do obliczania Sredniej liczby kalorii na produkt
        calculateAverageCalories() {
          if (this.foodItems.length === 0) {
            return 0;
          }
          return (this.totalCalories / this.foodItems.length).toFixed(0);
        }
       
        // Metoda do wySwietlania wszystkich produktow spozywczych
        displayFoodItems() {
          if (this.foodItems.length === 0) {
            console.log("Brak produktow spozywczych.");
            return;
          }
       
          console.log("Produkty spozywcze:");
          this.foodItems.forEach(item => {
            console.log(`${item.name}: ${item.calories} kalorii`);
          });
        }
      }
       
      // Tworzenie instancji aplikacji do liczenia kalorii
      const calorieCounter = new CalorieCounter();
       
      // Dodawanie przykladowych produktow spozywczych
      calorieCounter.addFoodItem("Jajko", 155);
      calorieCounter.addFoodItem("Chleb pszenny", 80);
      calorieCounter.addFoodItem("Maslo orzechowe", 180);
       
      // WySwietlanie produktow spozywczych i Sredniej liczby kalorii
      calorieCounter.displayFoodItems();
      console.log("Srednia liczba kalorii na produkt:", calorieCounter.calculateAverageCalories());
       
      // Usuwanie produktu spozywczego
      calorieCounter.removeFoodItem("Chleb pszenny");
       
      // WySwietlanie zaktualizowanych produktow spozywczych i Sredniej liczby kalorii
      calorieCounter.displayFoodItems();
      console.log("Srednia liczba kalorii na produkt:", calorieCounter.calculateAverageCalories());
      