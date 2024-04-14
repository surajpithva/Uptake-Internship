let id = "no";
selectData();
function getCrudData() {
  let arr = JSON.parse(localStorage.getItem("crud"));
  //   console.log(arr);
  return arr;
}
let uid = 1;
function setCrudData(arr) {
  localStorage.setItem("crud", JSON.stringify(arr));
}
let data;
///////////////////////////////////////////////////////////////////
function addData() {
  document.getElementById("msg").innerHTML = "";
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  if (name == "") {
    alert("please enter your name");
  } else {
    if (id == "no") {
      let arr = getCrudData();
      if (arr == null) {
        let data = [{ uid, name, age }];

        setCrudData(data);
      } else {
        uid++;
        data = { uid, name, age };
        arr.push(data);
        // arr.push(data);
        setCrudData(arr);
      }

      document.getElementById("msg").innerHTML = "Data Added";
    } else {
      let arr = getCrudData();
      arr[id] = [{ name, age }];
      setCrudData(arr);
      document.getElementById("msg").innerHTML = "Data Updated";
      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
    }
    selectData();
  }
}
function deleteData(rid) {
  popup = confirm("are you sure delete your data");
  if (popup == true) {
    let arr = getCrudData();
    arr.splice(rid, 1);
    setCrudData(arr);
    selectData();
  }
}
///////////////////////////////////////////////////////////////////////////
function selectData() {
  let arr = getCrudData();
  if (arr != null) {
    let html = "";
    let sno = 1;
    for (let k in arr) {
      // console.log(k);
      html =
        html +
        `<tr><td>${sno}</td><td>${arr[k].name}</td><td>${arr[k].age}</td><td><a href="javascript:void(0)" onclick="editData(${arr[k].uid})">edit</a>&nbsp;<a href="javascript:void(0)" onclick="deleteData(${k})">delete</a></td></tr>`;
      sno++;
    }
    document.getElementById("root").innerHTML = html;
  }
}
///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const addbtn = document.querySelector(".addbtn");
function editData(id) {
  document.getElementById("addbtns").style.visibility = "hidden";
  document.getElementById("updatebtns").style.visibility = "visible";
  document.getElementById("canclebtns").style.visibility = "visible";

  document.getElementById("updatebtns").value = id;

  let getData = getCrudData();
  const filterdata = getData.filter((data) => data.uid === id);
  // console.log(filterdata[0], "FIltered data");
  document.getElementById("name").value = filterdata[0].name;
  document.getElementById("age").value = filterdata[0].age;
}

function updateData() {
  const updateId = document.getElementById("updatebtns").value;
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let getData = getCrudData();
  getData.forEach(function (value, i) {
    // console.log(value.uid, "fvgdffsd", updateId);
    if (value.uid == updateId) {
      value.name = name;
      value.age = age;
      document.getElementById("addbtns").style.visibility = "visible";
      document.getElementById("updatebtns").style.visibility = "hidden";
      document.getElementById("canclebtns").style.visibility = "hidden";
    } else {
      ("not work");
    }
  });
  setCrudData(getData);
  selectData();
}

function cancelData(id) {
  // console.log(id);
  document.getElementById("addbtns").style.visibility = "visible";
  document.getElementById("updatebtns").style.visibility = "hidden";
  document.getElementById("canclebtns").style.visibility = "hidden";
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
}
// function addData() {
//   let crudList = JSON.parse(localStorage.getItem("crud")) ?? [];

//   let item = {
//     name: document.getElementById("name").value,
//     age: document.getElementById("age").value,
//   };

//   crudList.push(item);

//   localStorage.setItem("crud", JSON.stringify(crudList));
//   getData();
// }

// function deleteData() {
//   // popup = confirm("are you sure delete your data");
//   // if(popup = true){}
//   var name = document.getElementById("delId").value;
//   // console.log(name, "kdkajdkjdskljd");
//   contactList = JSON.parse(localStorage.getItem("crud")) ?? [];
//   console.log(contactList, "ssksksksksks");
//   contactList.forEach((element) => {
//     console.log(element.name, "helllo");
//     if (element.name == name) {
//       contactList.splice(element, 1);
//       // console.log(contactList, "contex");
//       // console.log("find");
//     } else {
//       console.log("not find");
//     }
//   });
//   // contactList = contactList.filter(function (value) {
//   //   return value.name != name;
//   // });
//   localStorage.setItem("crud", JSON.stringify(contactList));
//   getData();
// }

// function getData() {
//   let Data = JSON.parse(localStorage.getItem("crud"));
//   // console.log(Data, "get");
//   var table = document.getElementById("root");
//   table.innerHTML = ``;
//   Data.forEach(function (value, i) {
//     var table = document.getElementById("root");
//     table.innerHTML += `
//         <tr>
//           <td>${i + 1}</td>
//           <td>${value.name}</td>
//           <td>${value.age}</td>

//           <td>
//             <button type="button" id="delId" value="${
//               value.name
//             }" onclick="deleteData()">del</button>
//           </td>
//         </tr>
//   `;
//   });
// }
