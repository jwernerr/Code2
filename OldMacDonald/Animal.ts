namespace Animal{
    class Animal{
        name:string;
        species:string;
        sound:string;
        food:string;
        amount:number=10;

        songtext:string;

        set(_name:string,_species:string,_sound:string,_food:string):void{
            this.name=_name;
            this.species=_species;
            this.sound=_sound;
            this.food=_food;
            this.amount=Math.floor(Math.random()*10)
        }

        sing():void{
            const article:string="a"
            if (this.species.)
            songtext="Old MacDonald had a farm, E-I-E-I-O/br And on that farm he had "
        }
    }
}