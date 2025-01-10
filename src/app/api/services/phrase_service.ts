

class PhraseService {
    private subjects:string[] = ["The dog", "The turtle", "My friend", "Sebastian"];
    private predicates:string[] = ["runs fast", "is very wise", "loves coding", "sings poorly"];

    constructor(){
        this.subjects = this.subjects;
        this.predicates = this.predicates;
    };
    public getReadomlySubject():string{
        const randomIndex = Math.floor(Math.random() * this.subjects.length);
        const subject = this.subjects[randomIndex];
        if(subject.length > 8){
            return `${subject} intelligent`
        };
        return subject;
    };
    public getReadomlyPredicates():string{
        const randomIndex = Math.floor(Math.random() * this.predicates.length);
        const predicate = this.predicates[randomIndex];
        if(predicate.includes("coding")){
            return `${predicate}!`
        }
        return predicate;
    };
    public getPhrase():string{
        const subject:string = this.getReadomlySubject();
        const predicate:string = this.getReadomlyPredicates();
        return `${subject} ${predicate}`;
    };
}

export default new PhraseService();