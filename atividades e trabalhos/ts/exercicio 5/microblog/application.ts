import Microblog from "./microblog";
import Post from "./post";

function main() {

    const microblog = new Microblog();
    
    const post1 = new Post(1, "good morning");
    const post2 = new Post(2, "good afternoon");
    const post3 = new Post(3, "good night");

    post1.like()
    post1.like()

    microblog.addPost(post1);
    microblog.addPost(post2);
    microblog.addPost(post3);

    console.log(microblog.toString());
    console.log("Post mais curtido", microblog.getMostLikedPost()?.toString());

}

main();