import { useState } from "react";
import ShoppingForm from "./compnonents/ShoppingForm";
import ShoppingList from "./compnonents/ShoppingList";
// import "./App.css";

function App() {
    const [shoppingListItems, setShoppingListItems] = useState({});
    const generateList = (listItems) => {
        setShoppingListItems(listItems);
    };

    return (
        <>
            <h1>Time to go Shopping</h1>
            <ShoppingForm generateList={generateList} />
            <ShoppingList items={shoppingListItems} />
        </>
    );
}

export default App;
