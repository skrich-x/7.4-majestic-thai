### Tasks
#### Getting Started
- [x] Setup the scaffolding and install Backbone
- [x] Setup templates for the different dynamic portions of the application
- [x] Produce static data for the menu items
- [x] Produce a functional static mockup

#### Menu
- [x] Fetch and `console.log` the static JSON for the menu items
- [x] Render a template for each menu item, not according to category.
- [x] Define a FoodListView constructor
- [x] Make a view instance responsible instead of just a template for the collection.
- [x] Define a FoodItemView constructor
- [x] Use the `renderChildren` method to render a child view for each food item
- [x] `console.log` the food model when I click on its price button
- [x] Define a Order constructor
- [x] Create an instance of Order
- [ ] Pass the order to the child views
- [ ] `console.log` the order when I click on the foods price
- [ ] Add the food model to the order
- [x] Define a FoodCategoryView constructor
- [ ] Make instances of FoodCategoryView for each category, moving the 'renderChildren' method down a level.
- [ ] Make a instance of FoodCategoryView for popularity

#### Order view
- [ ] Define an OrderView constructor
- [ ] Render an instance of OrderView
- [ ] In OrderView, `console.log` the order
- [ ] In OrderView, `console.log` a food model every time a food model is added to the order
- [ ] Render the data from the order every time the order is updated
- [ ] In Order, define a `subtotal` function that calculates the total price.
- [ ] `console.log`, then render, every time the order is updated

#### Order data
- [ ] Save the order data to Parse when the order is submitted
