export class RgAlimentaire {
    id: number; 
    nomCommunFr: string;
	nomCommunAr: string;  
	nomScientifique: string;
	description: string;
    morphologie: string;
	formuleChimique: string; 
	environnement: string; 
	etatRisque: string; 
	cycleVie: string; 
	zone: string; 
	exploitation: string; 

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
		zone: string,
		exploitation: string,

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
			this.zone = zone;
			this.exploitation = exploitation; 
		 }

}