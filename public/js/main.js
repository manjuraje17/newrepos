console.log("loaded");
$.ajax({
  type:"GET",
  url:"https://code.jquery.com/jquery-3.2.1.min.js",
datatype:"json",
success:function(response){
  var data=formObject(response);
  constructDOM(data);
},
error:function(err){
  console.log("error in get method",err);
}
});
function formObject(response){
  var flags=[],categoryObject=[];
  var length=response.length;
  for(var i=0;i<length;i++){
  var movie=response[i];
  console.log(response[i]);
  var index=flags.indexOf(movie.language);
  if(index>=0)
  {
    categoryObject[index].movie.push(movie);
    continue;

  }
  else {
    flags.push(movie.language);
  }
  var objectSchema=
  {
    "category":movie.language,
    "movies":[]
  }
  objectSchema.movie.push(movie);
  categoryObject.push(objectSchema);
  console.log("categoryObject",categoryObject);
}
  console.log(flags);
  return categoryObject;
}
function constructDOM(data)
{
  var categoryContent=[];
  for(var i=0;i<=data.length;i++){
  var objectScheme=data[i];
  console.log("constructDOM",objectSchema);
  var categoryTitles=$('<h3 class="categoryName">'+objectSchema.category+'</h3>');
  categoryContent.push(categoryTitles);
}
$('section.content').html(categoryContent);
}
