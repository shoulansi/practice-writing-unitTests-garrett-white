const {addItem, removeItem, getTotalItems} = require('../cart.js');

describe("addItem", function(){
   test("adds a new item with valid quantity", () => {
        const cart = {};
            addItem(cart, "apple", 3);
            expect(cart.apple).toBe(3);
    });

    test("does not add item with negative quantity", () => {
        const cart = {};
            addItem(cart, "dragonfruit", -2);
            expect(cart.dragonfruit).toBe(undefined);
    });

    test("does not add item with 0 quantity", () => {
        const cart= {};
            addItem(cart, "canteloupe", 0);
            expect(cart.canteloupe).toBe(undefined);
    });
});

describe("removeItem", function(){
    test("removes item from the cart", () => {
        const cart = ["apple"];
            removeItem(cart, "apple");
            expect(cart).toEqual([]);
    });
    
    test("does nothing if item is not in the cart", () => {
        const cart = ["banana", "orange"];
            removeItem(cart, "apple");
            expect(cart).toEqual(["banana", "orange"]);
    });

    test("does not remove items if quantity is negative", () => {
        const cart = ["apple", "apple", "apple"];
            removeItem(cart, "apple", -2);
            expect(cart).toEqual(["apple", "apple", "apple"]);
    });
});

describe("getTotalItems", function(){
    test("shows items currently in cart", () => {
        const cart = { apple: 4, banana: 2, cherry: 1 };
            expect(getTotalItems(cart)).toEqual(7);
    });

    test("does not take negative numbers or zeroes", () => {
        const cart = { apple: 0, banana: -2, orange: -1 };
            expect(getTotalItems(cart)).toBe(0);
    });

    test("only uses numbers", function(){
        const cart = { strawberry: 3, mango: "one", watermelon: undefined };
            expect(getTotalItems(cart)).toBe(3);
    });
});
