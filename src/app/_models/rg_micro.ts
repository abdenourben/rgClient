export class RgMicro { 
    id: number; 
    nomCommunFr: string;
	nomCommunAr: string;  
	nomScientifique: string;
	description: string;
    morphologie: string;
	formuleChimique: string; 
	structure: string;
	environnement: string; 
	transmission: string; 
	cycleVie: string;
	symptome: string; 
	etatRisque: string; 


	public constructor
	(
		nomCommunFr: string,
		nomCommunAr: string, 
		nomScientifique: string,
		description: string,
		morphologie: string,
		formuleChimique: string, 
		structure: string,
		transmission: string,
		environnement: string,
		cycleVie: string,
		symptome: string, 
		etatRisque: string,
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
			this.transmission = transmission; 
			this.symptome = symptome; 
			this.structure = structure
		 }
}