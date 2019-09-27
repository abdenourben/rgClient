export class RgAnimale {
    id: number; 
    nomCommunFr: string;
	nomCommunAr: string;  
	nomScientifique: string;
	description: string;
    morphologie: string;
	formuleChimique: string; 
	environnement: string; 
	cycleVie: string;
	etatRisque: string; 
	production: string; 
	elevage: string; 
	systemeProd: string;
	conservation: string; 

	public constructor
	(
		nomCommunFr: string,
		nomCommunAr: string, 
		nomScientifique: string,
		description: string,
		morphologie: string,
		formuleChimique: string, 
		environnement: string,
		cycleVie: string,
		etatRisque: string,
		production: string,
		elevage: string,
		systemeProd: string, 
		conservation: string


		) {
			this.nomCommunFr = nomCommunFr; 
			this.nomCommunAr = nomCommunAr; 
			this.nomScientifique = nomScientifique; 
			this.description = description; 
			this.morphologie = morphologie; 
			this.formuleChimique = formuleChimique; 
			this.environnement = environnement; 
			this.cycleVie = cycleVie; 
			this.etatRisque = etatRisque;
			this.production = production; 
			this.elevage = elevage; 
			this.systemeProd = systemeProd; 
			this.conservation = conservation
		 }
}