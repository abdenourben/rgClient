export class RgForet {
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
	valide: boolean;


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
		 }


}
