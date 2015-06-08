function LevelLoader(){
}

LevelLoader.Import = function(level_name, canvas, input, callback_){
	var path = "./level_files/"+level_name+"/";
	
	var loaded = 0;
	var needs_loading = 0;
	var obj = {};
	
	FileManager.loadFile(path + "etc.json", function(err, json){
		if (err){
			alert("error loading level");
			console.log(err);
			return;
		}
		
		obj.etc = JSON.parse(json);
		needs_loading = obj.etc.room_indices.length;
		
		obj.rooms = [];
		
		for (var i = 0; i < obj.etc.room_indices.length; i++){
			var index = obj.etc.room_indices[i];
			var y = index.y;
			var x = index.x;
			var z = index.z;
			FileManager.loadFile(path + y + "_" + x + "_" + z + ".json", function(error, json){
				if (error){
					alert("error loading level");
					console.log(error);
				}
				
				obj.rooms.push(json);
				loaded++;
				if (loaded === needs_loading){
					callback_(Level.Import(obj, canvas, input));
				}
			});
		}
	});
}

LevelLoader.Export = function(level_name, level, should_alert){
	var path = "./level_files/"+level_name+"/";
	var json = level.Export();
	FileManager.ensureExists(path, function(err){
		try{
			if (!err){
				for (var i = 0; i < json.rooms.length; i++){
					for (var j = 0; j < json.rooms[i].length; j++){
						for (var k = 0; k < json.rooms[i][j].length; k++){
							FileManager.saveFile(path + i + "_" + j + "_" + k + ".json", json.rooms[i][j][k]);
						}
					}
				}
				FileManager.saveFile(path + "etc.json", json.etc);
				if (should_alert)
					alert("level saved to file!");
				return
			}else{
				console.log(err);
			}
		}catch(e){
			console.log(e);
		}
		if (should_alert)
			alert("error saving level!");
	});
}