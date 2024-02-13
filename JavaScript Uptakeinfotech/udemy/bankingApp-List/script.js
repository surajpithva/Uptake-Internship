const account1 = {
  owner: "Sid Soni",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};
const account2 = {
  owner: "Parth Pithva",
  movements: [5200, 1500, -450, 1120, 1070, 1069, -4000, 920],
  interestRate: 1.5,
  pin: 2222,
};
const account3 = {
  owner: "Darshan Pithva",
  movements: [1200, -500, 45, -20, 70, 16, -4000, 920],
  interestRate: 0.7,
  pin: 3333,
};
const account4 = {
  owner: "Atul Pithva",
  movements: [200, 50, 50, 150, -170, 156, 400, -520],
  interestRate: 1.0,
  pin: 4444,
};
const accounts = [account1, account2, account3, account4];

///////////////////////////////////////////////////////////////////////////////
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

////////////////////////////////////////////////////////////////////////////
//Display the data with function
// const displayMoments = function (movements, sort = false) {
//   containerMovements.innerHTML = "";

//   //sort method use here for sorting
//   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
//   movs.forEach((mov, i) => {
//     const type = mov > 0 ? "deposit" : "withdrawal";
//     const html = `
//           <div class="movements__row">
//               <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//               <div class="movements__value">${mov}</div>
//           </div>
//       `;
//     containerMovements.insertAdjacentHTML("afterbegin", html);
//   });
// };
// displayMoments(account1.movements);

const displayMoments = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
    </div>
`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//withdraw
function filterWithdraw(movements) {
  const data = movements.map((item, index) => {
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--withdrawal movements__type--  ${index}" >  ${
      index + 1
    } WITHDRAW </div>
          <div class="movements__value">${item}</div>
      </div>
    `;

    return html;
  });

  containerMovements.innerHTML = data;
}
// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

//   labelBalance.textContent = `${acc.balance} EUR`;
// };

//deposits
function filterDeposits(movements) {
  const filtered = movements.filter((item) => item > 0);
  const data = filtered.map((item, index) => {
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--deposit movements__type--${index}">   ${
      index + 1
    } DEPOSIT </div>
          <div class="movements__value">${item}</div>
      </div>
    `;

    return html;
  });

  containerMovements.innerHTML = data;
}

function val() {
  let selectBoxValue = document.getElementById("selected_id").value;

  const filtered_Withdraw_Data = currentAccount.movements.filter(
    (item) => item < 0
  );
  const filtered_Deposit_Data = currentAccount.movements.filter(
    (item) => item > 0
  );

  if (selectBoxValue === "withdrawal") {
    filterWithdraw(filtered_Withdraw_Data);
    calcDisplayBalance(filtered_Withdraw_Data);
  } else if (selectBoxValue === "deposit") {
    filterDeposits(filtered_Deposit_Data);
    calcDisplayBalance(filtered_Deposit_Data);
  } else if (selectBoxValue == "all") {
    displayMoments(account1.movements);
    calcDisplayBalance(account1.movements);
  }
}

console.log(account1.movements);
//Display the data with function
// const displayMoments = function (movements, sort = false) {
//   containerMovements.innerHTML = "";

//   //sort method use here for sorting
//   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
//   movs.forEach((mov, i) => {
//     const type = mov > 0 ? "deposit" : "withdrawal";
//     const html = `
//           <div class="movements__row">
//               <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//               <div class="movements__value">${mov}</div>
//           </div>
//       `;
//     containerMovements.insertAdjacentHTML("afterbegin", html);
//   });
// };
// displayMoments(account1.movements);

/////////////////////////////////////calculate incomes , outcomes  and interest
const calcDisplaySummery = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}💶`;

  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}`;

  const interst = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interst}`;
};
//calcDisplaySummery(account1.movements);
///////////////////////////////////computing User-Name//////////////////////////////////////////////////////////

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

// create function
const updateUI = function (acc) {
  //DISPLAY MOVEMENTS

  displayMoments(acc.movements);

  //DISPLAY BALANCE
  calcDisplayBalance(acc.movements);
  //DISPLAY SUMMARY
  calcDisplaySummery(acc);
};

console.log(accounts);

///////////////////////calcucate the balance////////////////////////

const calcDisplayBalance = (data) => {
  console.log(data, "in calc");
  const total_amt = data.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${total_amt} EUR`;
};

//calcDisplayBalance(account1.movements);

///////////////////Event handler
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  //Prevent form from subbmiting
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //DISPLAY UI AND MESSAGE
    labelWelcome.textContent = `welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    //after successful log in input filed are hide
    // inputLoginUsername.style.display = "none";
    // inputLoginPin.style.display = "none";
    // btnLogin.style.display = "none";

    //clear input fields(username and pin)
    inputLoginUsername.value = inputLoginPin.value = "";

    // this below code for if you once log in your foucs is not input fidlds
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

// this part is request for loan
btnLoan.addEventListener("click", function (e) {
  e.preventDefault(e);
  const amount = Number(inputLoanAmount.value);

  // const isValidate = amount > 0;

  // console.log(isValidate);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

/////////////////////////////////////////////
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

//////when click on button account delete
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    //delete account here
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
    inputCloseUsername.value = inputClosePin.value = " ";
  }
});

// For sort method start from here

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMoments(currentAccount.movements, !sorted);
  sorted = !sorted;
});

////////////////////////

///////////////////////Task ///////
// const displayMoments = function (movements) {
//   containerMovements.innerHTML = "";
//   movements.forEach((mov, i) => {
//     const type = mov > 0 ? "deposit" : "withdrawal";
//     const html = `
//         <div class="movements__row">
//             <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//             <div class="movements__value">${mov}</div>
//         </div>
//     `;
//     containerMovements.insertAdjacentHTML("afterbegin", html);
//   });
// };
