
let getUser = (id, callback) => {
  let user = {
    id: id,
   name:'Vinod'
  };

  setTimeout(() => {
    callback(user);
}, 3000);
};

getUser(31, (userObj) => {
    console.log(userObj);
});