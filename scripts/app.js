

//------- organize code -------------
const recipeBank = {};
recipeBank.apiKey = `6ac4003fafcc41b986d32209944cfab4`;


//to run all initial functions
recipeBank.init =() => {
  console.log("Getting recipes");
  //test to determine if i can get info back.
  $.ajax({
    url: "https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=recipeBank&app_key=6ac4003fafcc41b986d32209944cfab4&type=public",
      method: 'GET',
      dataType: 'json',
      data: {
        apiKey: recipeBank.diet,
     }
  }).then(results => {
    console.log(results);
  })
}

