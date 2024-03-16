interface StarterPlayer extends Instance {
	StarterCharacterScripts: StarterCharacterScripts;
	StarterPlayerScripts: StarterPlayerScripts & {
		TS: Folder & {
			runtime: LocalScript;
			components: Folder;
			network: ModuleScript;
			controllers: Folder;
		};
	};
}
