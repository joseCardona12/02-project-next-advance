
class PhraseService{
    public async getPhrase():Promise<{message:string,phrase:string}>{
        const response = await fetch("http://localhost:3001/api/phrase_generators",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.json();
    };
};

export default new PhraseService();