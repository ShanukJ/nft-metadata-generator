const fs = require("fs");
const metadata_count = 5 //Replace with your value
let count = 1

while (count < metadata_count +1)  {

  const metas = {
    "name":  `Your collection name #${count}`,
    "description": "Your collection description",
    "image": `ipfs://your_cid/${count}.png`
  };

  fs.writeFileSync(
    `genericJson/${count+'.json'}`,
    JSON.stringify(metas, null, 2)
  );

  console.log(`${count+'.json'} Created!`);
  count++;
};