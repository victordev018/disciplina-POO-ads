import Post from "./post";

class Microblog {
    
    private posts: Post[] = [];

    constructor(){}

    addPost(newPost : Post) : void {
        this.posts.push(newPost);
    }

    deleteById(id : number) {
        const index = this.consultPostById(id);

        if (index != -1) {
            for(let i = index; i < this.posts.length-1; i++) {
                this.posts[i] = this.posts[i+1];
            }
            this.posts.pop();
        }
    }

    getMostLikedPost() : Post | null{

        if (this.postsIsEmpty()) {
            console.log("não possui posts cadatrados");
            return null;
        }

        const postMoreLiked = this.posts.reduce( (postMoreLiked: Post, currentPost: Post) => postMoreLiked = postMoreLiked.likes > currentPost.likes ? postMoreLiked : currentPost, this.posts[0]);

        return postMoreLiked;
    }

    like(id: number) : void {
        const index = this.consultPostById(id);

        if (index != -1) {
            const post = this.posts[index];
            post.like();
        }
    }

    toString() : string {
        let response = '';
        this.posts.forEach(post => {
            response += `${post.toString()}\n`;
        });
        return response;
    }

    private consultPostById(id: number) : number {
        let indexWanted = -1;
        for(let i = 0; i < this.posts.length-1; i++) {
            if(this.posts[i].id == id) {
                indexWanted = i;
                break;
            }
        }
        return indexWanted;
    }

    private postsIsEmpty() : boolean {
        return this.posts.length == 0;
    }

}

export default Microblog;