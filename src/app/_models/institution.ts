export class Institution {
	id: number;
	nom: string;
	raison: string;
	statut: string;
	logo: string;
	categorie: string;
	type: string;
	creation: Date;
	secteur: string;
	site: string;
	email: string;
	telephone: string;
	fax: string;
	typeApa: string;
	anneeApa: string;
	infoAdd: string;
	adresse: string;
	public constructor(
		id: number,
		nom: string,
		raison: string,
		statut: string,
		categorie: string,
		type: string,
		creation: Date,
		secteur: string,
		site: string,
		email: string,
		telephone: string,
		fax: string,
		typeApa: string,
		anneeApa: string,
		infoAdd: string,
		adresse: string,

	) {
		this.id = id;
		this.nom = nom;
		this.raison = raison;
		this.statut = statut;
		this.categorie = categorie;
		this.type = type;
		this.creation = creation;
		this.secteur = secteur;
		this.site = site;
		this.email = email;
		this.telephone = telephone;
		this.fax = fax;
		this.typeApa = typeApa;
		this.anneeApa = anneeApa;
		this.infoAdd = infoAdd;
		this.adresse = adresse;
	}

	//public constructor(init?: Partial<Institution >) {
	//Object.assign(this, init);

	//}

}
