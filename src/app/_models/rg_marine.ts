export class RgMarine {
	//attributs communs
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
	//attributs spécifiques
	transmission: string;
	

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
		//attributs spécifiques
		transmission: string,
	

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
		 }

	

	//public constructor(init?: Partial<RgMarine >) {
     //   Object.assign(this, init);
    //}
}