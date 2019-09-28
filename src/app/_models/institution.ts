export class Institution {
    id: number; 
    nom: string; 
    raisonSociale: string; 
    statutJuridique: string; 
    natureEtabelissement: string; 
    logoChemin: string; 
    categorie: string; 
    type: string; 
	dateCreation: Date;
	secteurActivite: string;
	siteWeb: string;
	email: string;
	telFixe: string;
	telPortable: string;
	fax: string;
	typeImplicationApa: string;
	anneeImplicationApa: string;
	infoAdditionnelles: string;


	public constructor
	(
		id: number, 
		nom: string,
		raisonSociale: string, 
		statutJuridique: string,
		natureEtabelissement: string,
		logoChemin: string,
		categorie: string,
		type: string,
		dateCreation: Date,
		secteurActivite: string,
		siteWeb: string,
		email: string,
		telFixe: string,
		telPortable: string,
		fax: string,
		typeImplicationApa: string,
		anneeImplicationApa: string,
		infoAdditionnelles: string,
	

		) {
			this.id = id; 
			this.nom = nom; 
			this.raisonSociale = raisonSociale; 
			this.statutJuridique = statutJuridique; 
			this.natureEtabelissement = natureEtabelissement; 
			this.logoChemin = logoChemin; 
			this.categorie = categorie; 
			this.type = type; 
			this.dateCreation = dateCreation; 
			this.secteurActivite = secteurActivite; 
			this.siteWeb = siteWeb; 
			this.email = email; 
			this.telFixe = telFixe; 
			this.telPortable = telPortable; 
			this.fax = fax; 
			this.typeImplicationApa = typeImplicationApa; 
			this.anneeImplicationApa = anneeImplicationApa; 
			this.infoAdditionnelles = infoAdditionnelles; 
		 }

	//public constructor(init?: Partial<Institution >) {
		//Object.assign(this, init);

    //}
  
}
