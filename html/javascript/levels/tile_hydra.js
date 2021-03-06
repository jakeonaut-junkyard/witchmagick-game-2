//one manager for all tiles (of a certain texture???)!!!
function TileHydra(room){
	this.initTexture("tile_sheet.png");
	
	this.room = room;
	this.tiles = {};
	//use the following two for rendering tiles !!!
	//placed tiles for rendering tiles not yet aggregated but
	//being placed by the level editor (to prevent lag during placement)
	this.placed_tiles = [];
	//use this to aggregate tiles into fewer visual objects so performance is slightly more efficient (less vertices to render)
	this.aggregated_tiles = [];
	
	this.AggregateTiles();
}

TileHydra.prototype.initTexture = function(img_name){
	//you can do this even though tilehydra isn't a 'child' of GLObject!!
	//javascript oop is so flexible :0
	GLObject.prototype.initTexture.call(this, img_name);
}

TileHydra.prototype.GetTile = function(y_index, x_index, z_index){
	var tile = null;
	if (this.tiles[y_index] !== undefined){
		if (this.tiles[y_index][x_index] !== undefined){
			if (this.tiles[y_index][x_index][z_index] !== undefined)
				tile = this.tiles[y_index][x_index][z_index];
		}
	}
	return tile;
}
TileHydra.prototype.AddTile = function(y_index, x_index, z_index, tile, suppress_aggregation){
	if (this.tiles[y_index] === undefined)
		this.tiles[y_index] = {};
	if (this.tiles[y_index][x_index] === undefined)
		this.tiles[y_index][x_index] = {};
	this.tiles[y_index][x_index][z_index] = tile;
	
	this.placed_tiles.push(tile);
	
	this.TrySuppressAggregation(suppress_aggregation);
}
TileHydra.prototype.RemoveTile = function(y_index, x_index, z_index, suppress_aggregation){
	var tile = false;
	
	if (this.tiles[y_index] !== undefined && this.tiles[y_index][x_index] !== undefined){
		tile = this.tiles[y_index][x_index][z_index];
		delete this.tiles[y_index][x_index][z_index];
		
		if (isEmpty(this.tiles[y_index][x_index])){
			//TODO REMOVE REMOVE
			delete this.tiles[y_index][x_index];
			if (isEmpty(this.tiles[y_index])){
				delete this.tiles[y_index];
			}
		}
	}
	
	
	this.TrySuppressAggregation(suppress_aggregation);
	return tile;
}
TileHydra.prototype.TrySuppressAggregation = function(suppress_aggregation){
	if (suppress_aggregation === undefined || !suppress_aggregation){
		this.aggregateTiles();
	}
}

TileHydra.prototype.deaggregateTiles = function(){
	this.aggregated_tiles = [];
	var i_keys = Object.keys(this.tiles);
	for (var ii = 0; ii < i_keys.length; ii++){
	  var i = i_keys[ii];
	  var j_keys = Object.keys(this.tiles[i]);
		for (var jj = 0; jj < j_keys.length; jj++){
		  var j = j_keys[jj];
		  var k_keys = Object.keys(this.tiles[i][j]);
			for (var kk = 0; kk < k_keys.length; kk++){
			  var k = k_keys[kk];
				this.tiles[i][j][k].has_been_aggregated = false;
			}
		}
	}
}

TileHydra.prototype.AggregateTiles = function(){
	//iterate from top to bottom first
	//left to right next
	//upon finding a tile that is not already part of an aggregate
		//tiles should have an has_aggregated property???
		//that is reset at the beginning of each function call here???
	//begin counting down until you reach a gap
	//then begin count right until you reach a gap
	//create a new aggregate tile of the height and width found
	//and add it to the aggregated tiles dictionary!!
		/*TODO:: if adding tiles with different texture/tilesheet positions, then they are going to have to be in different aggregates???*/
		/*TODO ADDITIONAL:: if tiles have an alpha less than 1 and more than 0 this will aggregate the alpha for overlapping rectangles!!!*/
		/*ADDITIONAL:: aggregate tile's collision types don't matter because the aggregated_tiles only are used for rendering efficiency... the collision checking in GameObject uses the this.tiles dictionary and is already locally efficient*/
	
	this.deaggregateTiles();
	var i2, j2, k2;
	
	var numerically = function(a,b){return a-b;};
	var i_keys = Object.keys(this.tiles).map(Number).sort(numerically);
	
	for (var ii = 0; ii < i_keys.length; ii++){
		i = i_keys[ii];
		var j_keys = Object.keys(this.tiles[i]).map(Number).sort(numerically);
		for (var jj = 0; jj < j_keys.length; jj++){
			j = j_keys[jj];
			var k_keys = Object.keys(this.tiles[i][j]).map(Number).sort(numerically).reverse();
			for (var kk = 0; kk < k_keys.length; kk++){
				k = k_keys[kk];
				//if we already haven't been aggregated!
				if (!this.tiles[i][j][k].has_been_aggregated){
					i2 = i;
					j2 = j;
					k2 = k;
					
					var prev_i2 = i2;
					var min_j2 = 9999;
					var min_k2 = 9999;
					//find the longest unbroken rectangle down
					while (true){
						j2 = j;
						var prev_j2 = j2;
						//find the longest unbroken rectangle right (that is less than minimum)
						while (true){
							k2 = k;
							var prev_k2 = k2;
							//find the longest unbroken rectangle back (that is less than minimum
							while (true){
								if (Math.abs(k2-k)+1 >= min_k2) break;
								k2--;
								if (this.tiles[i2][j2][k2] === undefined){
									k2++;
								}
								if (k2 === prev_k2){
									if (Math.abs(k2-k)+1 < min_k2){
										min_k2 = Math.abs(k2-k)+1;
									}
									break;
								}
								prev_k2 = k2;
							}
							
							if (Math.abs(j2-j)+1 >= min_j2) break;
							j2++;
							if (this.tiles[i2][j2] === undefined || this.tiles[i2][j2][k] === undefined){
								j2--;
							}
							if (j2 === prev_j2){
								if (Math.abs(j2-j)+1 < min_j2){
									min_j2 = Math.abs(j2-j)+1;
								}
								break;
							}
							prev_j2 = j2;
						}
						
						i2++;
						if (this.tiles[i2] === undefined || this.tiles[i2][j] === undefined || this.tiles[i2][j][k] === undefined){
							i2--;
						}
						if (i2 === prev_i2) break;
						prev_i2 = i2;
					}
					k2 = k - (min_k2-1);
					j2 = j + (min_j2-1);
					//once width and height have been calculated, iterate through the tiles and tell them they've been aggregated
					for (var y = i; y <= i2; y++){
						for (var x = j; x <= j2; x++){
							for (var z = k; z >= k2; z--){
								this.tiles[y][x][z].has_been_aggregated = true;
							}
						}
					}
					//finally, create the aggregate visual tile and add it to the array
					var agg_tile = new Tile(j * Game.TILE_SIZE, i * Game.TILE_SIZE, k * Game.TILE_SIZE, (j2 - j + 1) * Game.TILE_SIZE, (i2 - i + 1) * Game.TILE_SIZE, (k - k2 + 1)*Game.TILE_SIZE);
					this.aggregated_tiles.push(agg_tile);
				}
			}
		}
	}
	this.placed_tiles = [];
}

TileHydra.prototype.render_allTiles = function(camera){
	for (var i = 0; i < this.aggregated_tiles.length; i++){
		if (!camera.IsOrthogonal() || this.aggregated_tiles[i].z === camera.z)
			this.aggregated_tiles[i].render(camera, this.texture);
	}
	for (var i = 0; i < this.placed_tiles.length; i++){
		if (!camera.IsOrthogonal() || this.placed_tiles[i].z === camera.z)
			this.placed_tiles[i].render(camera, this.texture);
	}
}
TileHydra.prototype.render_lightsOut = function(camera){
	var p = this.room.player;
	var left_tile = Math.floor((p.x + p.lb + p.vel.x - 1) / Game.TILE_SIZE);
	var top_tile = Math.floor((p.y + p.tb + p.vel.y - 1) / Game.TILE_SIZE);
	var front_tile = Math.floor((p.z + p.fb + p.vel.z - 1) / Game.TILE_SIZE);
	var right_tile = Math.ceil((p.x + p.rb + p.vel.x + 1) / Game.TILE_SIZE);
	var bottom_tile = Math.ceil((p.y + p.bb + p.vel.y + 1) / Game.TILE_SIZE);
	var zback_tile = Math.floor((p.z + p.zb + p.vel.y + 1) / Game.TILE_SIZE);
	
	for (var i = top_tile; i <= bottom_tile; i++){
		for (var j = left_tile; j <= right_tile; j++){
			var tile = this.GetTile(i, j, 0);
			if (tile === null) continue;
			tile.render(camera, this.texture);
		}
	}
}
TileHydra.prototype.render = TileHydra.prototype.render_allTiles;