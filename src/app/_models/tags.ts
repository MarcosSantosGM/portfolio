export class Tag{

    static readonly ANGULAR = new Tag('Angular', 'blue');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly JAVA = new Tag('Java', 'red');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
    static readonly SPRINGBOOT = new Tag('SpringBoot', 'green');


    private constructor(private readonly key: string, public readonly color: string){

    }

    toString() {
        return this.key;
    }
}