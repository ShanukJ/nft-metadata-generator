const fs = require("fs");
const fs_extra = require("fs-extra");
const metadata_count = 5 //Replace with your value
let count = 0


fs_extra.emptyDirSync("./genericJson")

while (count < metadata_count)  {

  let count_increment = count + 1

  let jstring = fs.readFileSync("./attributes.json", "utf-8")
  let traits = JSON.parse(jstring)
  const metas = {
    "name":  `Replace with Your collection name #${count_increment}`,
    "description": "Replace with Your collection description",
    "image": `ipfs://your_cid/${count_increment}.png`, //You can replace this dynamic URL with a single image URL. EX: 'ipfs://your_cid/image.png'
    "edition": count_increment,
    "attributes": traits[count] //You can remove this if you don't want to include attributes'
  };

  fs.writeFileSync(
    `genericJson/${count_increment+'.json'}`,
    JSON.stringify(metas, null, 2)
  );

  console.log(`${count_increment+'.json'} Created!`);
  count++;
};