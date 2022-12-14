import {fetch_tmdb_info, tmdb_api_key} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/TheMovieDB-API-Wrapper.js/dist/themoviedb-api-wrapper.min.js' 


tmdb_api_key("6b4357c41d9c606e4d7ebe2f4a8850ea")


let ValidfileExts = ["webm", "mkv", "flv", "vob", "ogv", "ogg", "rrc", "gifv", "mng", "mov", "avi", "qt", "wmv", "yuv", "rm", "asf", "amv", "mp4", "m4p", "m4v", "mpg", "mp2", "mpeg", "mpe", "mpv", "m4v", "svi", "3gp", "3g2", "mxf", "roq", "nsv", "flv", "f4v", "f4p", "f4a", "f4b", "mod"]

document.getElementById("folder").addEventListener("change", function(event) {
  var output = document.querySelector("ul");
  var files = event.target.files;

  
  function scanInfo(file){
    fetch_tmdb_info(file.name, "episode", 1).then(function(search_results) {
     if (!search_results.tmdb_api_error){
          var item = document.createElement("li");
    item.innerHTML = `<b>Season</b>: ${search_results[0][0].season_number}, <b>Episode</b>: ${search_results[0][0].episode_number}, <b>Title</b>: ${search_results[0][0].name}, <b>Path_To_File</b>: ${file.webkitRelativePath}`  
    output.appendChild(item);
     }
             });
  }
  
  
  
  function checkIfMediaFile(file){
   // console.log(file)
    let fileEXT = file.split('.').pop();
  
    for (const ext in ValidfileExts){
        if (fileEXT.includes(ValidfileExts[ext])){
      return "isMediaFile"
    }
    }
  
  }
  
  for (var i=0; i<files.length; i++) {
    
    if (checkIfMediaFile(files[i].webkitRelativePath) == "isMediaFile"){
      
    scanInfo(files[i]);
   
      
    }
   
  };
}, false);
