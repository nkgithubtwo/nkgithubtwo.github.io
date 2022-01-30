let blog_container = document.querySelector(".blog_container");
let post_btn = document.querySelector(".btn_addpost");
let modal = document.querySelector(".modal");
let new_Modal = document.querySelector(".new_Modal");
let close_icon = document.querySelector(".fa-close");
let edit_icon = document.querySelector(".fa-edit");
let del_icon = document.querySelector(".fa-trash");
let add_blogPost = document.querySelector(".add_blogPost");
let edited_blogPost = document.querySelector(".edited_blogPost");
let add_title = document.querySelector(".add_title");
let add_desc = document.querySelector(".add_desc");
let edit_title = document.querySelector(".edit_title");
let edit_desc = document.querySelector(".edit_desc");

let posts;
let val;

const open_modal = () => {
  modal.classList.remove("hide_modal");
  add_title.value = "";
  add_desc.value = "";
};

const close_modal = () => {
  console.log("jv");
  modal.classList.add("hide_modal");
  new_Modal.classList.add("hide_modal");
};

const display_posts = () => {
  let obj_arr = JSON.parse(window.localStorage.getItem("posts"));
  blog_container.innerHTML = "";
  let add_post_ = document.createElement("div");
  add_post_.classList.add("add_post");

  post_btn = document.createElement("button");
  post_btn.classList.add("btn_addpost");
  post_btn.innerText = "ADD POST";

  add_post_.append(post_btn);
  blog_container.append(add_post_);

  post_btn.addEventListener("click", open_modal);

  obj_arr.forEach((post) => {
    let blogpost = document.createElement("div");
    let icons = document.createElement("div");
    let edit_icon = document.createElement("i");
    let del_icon = document.createElement("i");
    let new_title = document.createElement("span");
    let new_desc = document.createElement("span");

    blogpost.classList.add("blogpost");
    icons.classList.add("icons");
    edit_icon.classList.add("fa");
    edit_icon.classList.add("fa-edit");
    edit_icon.setAttribute("id", post.id);

    del_icon.classList.add("fa");
    del_icon.classList.add("fa-trash");
    del_icon.setAttribute("id", post.id);

    new_title.classList.add("title");
    new_desc.classList.add("desc");

    new_title.innerText = post.title;
    new_desc.innerText = post.desc;

    icons.append(edit_icon);
    icons.append(del_icon);
    blogpost.append(icons);
    blogpost.append(new_title);

    blogpost.append(new_desc);

    blog_container.append(blogpost);

    modal.classList.add("hide_modal");

    del_icon.addEventListener("click", delete_post);
    edit_icon.addEventListener("click", edit_post);
  });
};

const addPost = () => {
  if (JSON.parse(window.localStorage.getItem("posts")) != null) {
    posts = JSON.parse(window.localStorage.getItem("posts"));
  } else {
    posts = [];
    val = 1;
  }

  val = posts.length;
  let post = {
    title: add_title.value,
    desc: add_desc.value,
    id: ++val,
  };

  posts.push(post);

  window.localStorage.setItem("posts", JSON.stringify(posts));

  display_posts();
};

const delete_post = (e) => {
  let posts = JSON.parse(window.localStorage.getItem("posts"));

  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    if (post.id == e.target.id) {
      posts.splice(i, 1);
    }
  }

  posts = JSON.stringify(posts);

  localStorage.setItem("posts", posts);

  display_posts();
};

const edit_post = (e) => {
  new_Modal.classList.remove("hide_modal");
  close_icon.addEventListener("click", close_modal);

  let posts = JSON.parse(window.localStorage.getItem("posts"));

  for (let i = 0; i < posts.length; i++) {
    var post = posts[i];
    if (post.id == e.target.id) {
      edit_title.value = post.title;
      edit_desc.value = post.desc;
    }
  }
};

const edit_blogPost = (e) => {
  let posts = JSON.parse(window.localStorage.getItem("posts"));
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];

    if (post.id == e.target.id) {
      posts[id - 1].title.value = edit_title.value;
      posts[id - 1].desc.value = edit_desc.value;
    }
  }

  posts = JSON.stringify(posts);
  localStorage.setItem("posts", posts);

  display_posts();

  new_Modal.classList.add("hide_modal");
};

post_btn.addEventListener("click", open_modal);
close_icon.addEventListener("click", close_modal);
add_blogPost.addEventListener("click", addPost);
edited_blogPost.addEventListener("click", edit_blogPost);
