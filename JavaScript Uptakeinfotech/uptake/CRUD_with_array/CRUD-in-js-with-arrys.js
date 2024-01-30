let arr = [];

// view data code

function viewdata() {
  var row = "";
  arr.forEach((item, index) => {
    row += `<li> ${index + 1} -  ${item} - <button onclick="editdata(${
      index + 1
    })">Edit</button> - <button onclick="deletdata(${
      index + 1
    })"> delete</button> </li>`;
  });

  document.getElementById("list").innerHTML = row;
}

// add data code
const adddata = () => {
  const helloworld = document.getElementById("helloworld").value;
  console.log(helloworld);
  if (helloworld == "") {
    alert("please give me some text");
  } else {
    arr.push(helloworld);
    viewdata();
    cleardata();
  }
};

// delete code

function deletdata(index) {
  alert("delete your data");
  let result = index - 1;
  arr.splice(result, 1);

  viewdata();
}

// edit code
function editdata(index) {
  let result = index - 1;
  const newData = prompt("Edit data:", arr[result]);
  if (newData !== "") {
    arr[result] = newData;
    viewdata();
  } else {
    alert("value can't be null");
  }
}

//clear form

function cleardata() {
  document.getElementById("helloworld").value = "";
}
