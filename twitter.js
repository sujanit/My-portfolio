let posts = [];

let users = [];

let following = [];

function createPost(){

    let username = document.getElementById("username").value.trim();

    let content = document.getElementById("content").value.trim();

    if(username=="" || content==""){
        alert("Please enter username and content");
        return;
    }

    posts.unshift({
        user:username,
        text:content
    });

    if(!users.includes(username)){
        users.push(username);
    }

    document.getElementById("content").value="";

    displayUsers();

    showFeed();
}

function displayUsers(){

    let list=document.getElementById("userList");

    list.innerHTML="";

    users.forEach(user=>{

        let div=document.createElement("div");

        div.className="user";

        let btn=document.createElement("button");

        if(following.includes(user)){
            btn.innerHTML="Unfollow";
        }
        else{
            btn.innerHTML="Follow";
        }

        btn.onclick=function(){

            if(following.includes(user)){
                following=following.filter(u=>u!==user);
            }
            else{
                following.push(user);
            }

            displayUsers();

            showFeed();
        };

        div.innerHTML="<span>"+user+"</span>";

        div.appendChild(btn);

        list.appendChild(div);

    });

}

function showFeed(){

    let postArea=document.getElementById("posts");

    postArea.innerHTML="";

    let feed=posts.filter(post=>following.includes(post.user));

    if(feed.length===0){
        postArea.innerHTML="<p>No posts available. Follow someone!</p>";
        return;
    }

    feed.forEach(post=>{

        let div=document.createElement("div");

        div.className="post";

        div.innerHTML=
        "<h3>"+post.user+"</h3>"+
        "<p>"+post.text+"</p>";

        postArea.appendChild(div);

    });

}