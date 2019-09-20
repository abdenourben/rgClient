import { Institution } from "./institution"; 


export class RgMarine {
	//attributs communs
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
	//attributs spécifiques
	marine: string;
	

	public constructor
	(
		nomCommunFr: string,
		nomCommunAr: string, 
		nomScientifique: string,
		description: string,
		morphologie: string,
		formuleChimique: string, 
		structure: string,
		environnement: string,
		transmission: string, 
		cycleVie: string,
		//attributs spécifiques
		marine: string,
	

		) {
			this.nomCommunFr = nomCommunFr; 
			this.nomCommunAr = nomCommunAr; 
			this.nomScientifique = nomScientifique; 
			this.description = description; 
			this.morphologie = morphologie; 
			this.formuleChimique = formuleChimique; 
			this.structure = structure; 
			this.environnement = environnement; 
			this.transmission = transmission; 
			this.cycleVie = cycleVie; 
			this.marine = marine; 
		 }

	

	//public constructor(init?: Partial<RgMarine >) {
     //   Object.assign(this, init);
    //}
}