export class Taxonomie {
    id: number;
	espece: string;
	genre: string;
	famille: string;
	ordre: string; 
    classe: string;
    
    public constructor(
        espece: string,
        genre: string,
        famille: string,
        ordre: string,
        classe: string, )
        {

            this.espece = espece; 
            this.genre = genre; 
            this.famille = famille; 
            this.ordre = ordre; 
            this.classe = classe
    }
}