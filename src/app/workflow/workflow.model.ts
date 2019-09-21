export default class Workflow {
  constructor(
    public id: string,
    public dateDemande: Date,
    public status: string,
    public typePermis: string,
    public demandeur: Demandeur
  ) {}
}

interface Demandeur {
  organisation?: string
  email?: string
  pays?: string
  ville?: string
}
