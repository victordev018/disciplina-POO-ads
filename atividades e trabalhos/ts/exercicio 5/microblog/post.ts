class Post {

    id: number;
    text: string;
    likes: number;

    constructor(id: number, text: string) {
        this.id = id;
        this.text = text;
        this.likes = 0;
    }

    like() : void {
        this.likes++;
    }

    toString() : string {
        return `content: ${this.text}\nlikes: ${this.likes}`
    }

}

export default Post;