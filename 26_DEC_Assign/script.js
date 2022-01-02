let data = [
  {
    name: "Butterfly",
    age: 2,
    image: "images/butterfly.jpg",
    about:
      "Butterflies are beautiful, flying insects with large scaly wings. Like all insects, they have six jointed legs, 3 body parts, a pair of antennae, compound eyes, and an exoskeleton",
    color: "Orange-black",
    location: "Netherland",
  },
  {
    name: "Fox",
    age: 3,
    image: "images/fox.jpg",
    about:
      "Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. They have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail ",
    color: "Brown-White",
    location: "America",
  },
  {
    name: "Turtle",
    age: 3,
    image: "images/turtle.jpg",
    about:
      "Turtles are reptiles with hard shells that protect them from predators. They are among the oldest and most primitive groups of reptiles, having evolved millions of years ago",
    color: "Brown-white",
    location: "India",
  },
  {
    name: "Panda",
    age: 4,
    image: "images/panda.jpg",
    about:
      "The giant panda, also known as the panda bear, is a bear native to South Central China. It is characterised by its bold black-and-white coat and rotund body",
    color: "White-black",
    location: "China",
  },
  {
    name: "Squirrel",
    age: 1,
    image: "images/squirrel.jpg",
    about:
      "Squirrels are members of the family Sciuridae, a family that includes small or medium-size rodents. The squirrel family includes tree squirrels, ground squirrels, chipmunks,",
    color: "Brown-white",
    location: "India",
  },
  {
    name: "Deer",
    age: 10,
    image: "images/deer.jpg",
    about:
      "Deer or true deer are hoofed ruminant mammals forming the family Cervidae. The two main groups of deer are the Cervinae, including the muntjac, the elk (wapiti)",
    color: "brown - white",
    location: "Thailand",
  },

  {
    name: "Goat",
    age: 4,
    image: "images/goat.jpg",
    about:
      "goat, any ruminant and hollow-horned mammal belonging to the genus Capra. Related to the sheep, the goat is lighter of build, has horns that arch backward, a short tail, and straighter hair",
    color: "white-black",
    color: "white-brown",
    location: "India",
  },

  {
    name: "Tiger",
    age: 5,
    image: "images/tiger.jpg",
    about:
      "The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside",
    color: "White",
    location: "India",
  },
  {
    name: "Sparrow",
    age: 2,
    image: "images/bird.jpg",
    about:
      "A sparrow is a member of the genus Passer. They are small passerine birds which belong to the family Passeridae. They are also known as old-world sparrows.",
    color: "white-brown",
    location: "Nepal",
  },
];

let flex_data = "";
let table_data = "";

let flex_format = true;

let btn = document.getElementById("main_btn");
btn.addEventListener("click", callback);

function callback() {
  data.forEach(function (flex_ele) {
    flex_data =
      flex_data +
      `<article>
          
             <name>Name : ${flex_ele.name}</name>
             <age>Age : ${flex_ele.age}</age>
             Image : <img src="${flex_ele.image}" class="flex_img"/>
             <about>About : ${flex_ele.about}</about>
             <color>Color : ${flex_ele.color}</color>
             <location>Location : ${flex_ele.location}</location>

          </article>`;
  });

  table_data += ` 
  <table>
  <tr>
  <th>Name</th>
  <th>Age</th>
  <th>Color</th>
  <th>Image</th>
 <th>Location</th>
</tr>`;
  data.forEach(function (table_ele) {
    table_data += `<tr>
             <td>${table_ele.name}</td>
             <td>${table_ele.age}</td>
             <td>${table_ele.color}</td>
             <td><img src="${table_ele.image}" class="table_img"/></td>
             <td>${table_ele.location}</td>
           </tr>`;
  });

  table_data += `</table>`;

  let btn = document.getElementById("main_btn");

  const table_container = document.getElementById("table_container");
  const flex_container = document.getElementById("flex_container");

  if (flex_format) {
    flex_format = false;

    table_container.style.display = "none";
    flex_container.style.display = "flex";
    flex_container.innerHTML = flex_data;
    btn.innerHTML = "FLEX Format";
    table_data = "";
  } else {
    flex_format = true;

    flex_container.style.display = "none";
    table_container.style.display = "block";
    table_container.innerHTML = table_data;
    btn.innerHTML = "TABLE Format";

    flex_data = "";
  }
}
