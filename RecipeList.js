import React from "react";

function RecipeList( { recipes, deleteRecipe}) {
  
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          
        </thead>
        <col width="10%"/>
            <col width="10%"/>
                <col width="10%"/>
                  <col width="30%"/>
                    <col width="30%"/>
                      <col width="10%"/>
        <tbody>{recipes.map(({name, cuisine, photo, ingredients, preparation}, index) => (
  <tr key={index}>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td><img class="scale-down" style={{width: "100%",height: "100%"}}src={photo} alt={photo}/></td>
      <td className="content_td" style={{width: "30%"}}><p>{ingredients}</p></td>
      <td className="content_td" style={{width: "30%"}}><p>{preparation}</p></td>
              <td><button name="delete" onClick={() => deleteRecipe(index)}>Delete</button></td>
      </tr>))}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;

