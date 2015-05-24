function Level(canvas, input){
	this.room_names = [];
	
	this.player = new GameObject("sprite_sheet.png", 0, 0, 0, 0, 16, 16);
	this.camera = new Camera();
	this.camera.Follow(this.player);
	this.room = new Room();
	this.architect = new LevelArchitect(canvas, input, this);
	this.ctx2d = canvas.getContext("2d");
}

Level.prototype.update = function(delta, input){
	this.detectInput(delta, input);
	this.player.update(delta, this.room);
	this.room.update(delta);
}

Level.prototype.render = function(){
	this.room.render(this.camera, this.player);
	this.architect.render();
}

Level.prototype.detectInput = function(delta, input){
	if (input.IsKeyDown(">", "d")){
		this.player.MoveRight();
	}
	else if (input.IsKeyDown("<", "a")){
		this.player.MoveLeft();
	}
	
	if (input.IsKeyPressed("x")){
		this.player.StartJump(delta);
	}
	else if (input.IsKeyDown("x")){
		this.player.Jump(delta);
	}
	else if (input.IsKeyUp("x")){
		this.player.StopJump(delta);
	}

	if (this.camera.view === "perspective"){
		if (input.IsKeyDown("^", "w")){
			this.player.MoveBack();
		}
		else if (input.IsKeyDown("V", "s")){
			this.player.MoveForward();
		}
	}
}