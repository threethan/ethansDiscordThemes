//META{"name":"ReduceMinimumSize"}*//

class ReduceMinimumSize {
	getName() { return "ReduceMinimumSize"; }
	getDescription() { return "Removes the minimum window size forced by Discord, and lowers it to the recommended minmum for my 'Better Sclaing' theme."; }
	getVersion() { return "0.0.1e"; }
	getAuthor() { return "Zerebos (Edited by threethan)"; }

	load() {}
	unload() {}

	start() {
		require('electron').remote.getCurrentWindow().setMinimumSize(390,300);
	}

	stop() {
		require('electron').remote.getCurrentWindow().setMinimumSize(940,500);
	}
}
