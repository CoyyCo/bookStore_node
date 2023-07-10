class User {
    public username: string | undefined;
    public email: string | undefined;
    public password: string | undefined;
    public getUsername(): string | undefined {
        return this.username;
    }
    public setUsername(username: string): void {
        this.username = username;
    }
    public getEmail(): string | undefined {
        return this.email;
    }
    public setEmail(email: string): void {
        this.email = email;
    }
    public getPassword(): string | undefined {
        return this.username;
    }
    public setPassword(password: string): void {
        this.password = password;
    }
}
export default User;