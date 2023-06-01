import Card from "./recipe_card"
const SearchInput =() => {
    return(
        <>
        <div className="SearchContainer">
        <input type="search" id="recipe_input" name="recipe_search" placeholder="Place Ingredients"></input>
        <button type="button" id="search_button">Seach Recipe</button>
        </div>
       
        </>
    )
}
export default SearchInput