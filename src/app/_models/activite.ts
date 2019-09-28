export class Activite {

    id: number;
    titre: string;
    date_debut: Date;
    date_fin: Date;
    domaine: string;
    description: string;
    contenu: string;
    piecesActivites: string;
    type: string;
    localisation:  string ;

    public constructor
    (
        id: number,
        titre: string,
        date_debut: Date,
        date_fin: Date,
        domaine: string,
        description: string,
        contenu: string,
        piecesActivites: string,
        type: string,
        localisation: string,
    )
    {
        this.id = id;
        this.titre = titre;
        this.date_debut = date_debut;
        this.date_fin = date_fin;
        this.domaine = domaine;
        this.description = description;
        this.contenu = contenu;
        this.piecesActivites = piecesActivites;
        this.type = type;
        this.localisation = localisation;
    }

}
