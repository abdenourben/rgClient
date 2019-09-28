export default class User {
  constructor(
    private image: string,
    private name: string, // used to display full name
    private createdAt: string,
    private role: string,
    private status: string,
    private nom?: string,
    private prenom?: string,
    private password?: string,
    private confirmPassword?: string,
    private id?: string
  ) {}
}
