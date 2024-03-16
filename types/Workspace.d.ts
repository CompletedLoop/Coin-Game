interface Workspace extends Model {
	Characters: Folder;
	Camera: Camera;
	Baseplate: Part & {
		["Images/baseplate"]: Texture;
	};
	Coins: Folder;
}
