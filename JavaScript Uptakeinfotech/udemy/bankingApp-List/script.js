const account1 = {
  owner: "Sid Soni",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
};
const account2 = {
  owner: "Parth Pithva",
  movements: [5200, 1500, -450, 1120, 1070, 1069, -4000, 920],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
};
const account3 = {
  owner: "Darshan Pithva",
  movements: [1200, -500, 45, -20, 70, 16, -4000, 920],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
  ],
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

//////////////////////////////////////////display data with filter

const displayMoments = function (movements, sort = false) {
  containerMovements.innerHTML = "";
  // sort method use here for sorting
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  console.log(movements, "movements");
  movements.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    console.log(mov, "mveeee");
    // const date = new Date(account1.movementsDates[i]);
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();

    // const displayDate = `${day}/${month}/${year}`;
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${accounts.movementsDates}</div>
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

// console.log(account1.movements);

/////////////////////////////////////calculate incomes , outcomes  and interest////////////////////////////////
const calcDisplaySummery = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}💶`;

  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}`;

  const interst = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interst.toFixed(2)}`;
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

// console.log(accounts);

const now = new Date();
const opetions = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
};
labelDate.textContent = new Intl.DateTimeFormat("en-US", opetions).format(now);

//////////////////////////////////calcucate the balance///////////////////////////////////////////

const calcDisplayBalance = (data) => {
  // console.log(data, "in calc");
  const total_amt = data.reduce((acc, mov) => acc + mov, 0);
  currentAccount.balance = total_amt;
  labelBalance.textContent = `${total_amt} EUR`;
};

//calcDisplayBalance(account1.movements);

///////////////////Event handler/////////////////////////////////////////
///////Global variable
let currentAccount, timer;
////////////////////////////////////////////

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

    //clear input fields(username and pin)
    inputLoginUsername.value = inputLoginPin.value = "";

    // this below code for if you once log in your foucs is not input fidlds
    inputLoginPin.blur();
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    updateUI(currentAccount);
  }
});

// this part is request for loan
btnLoan.addEventListener("click", function (e) {
  e.preventDefault(e);
  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //set time out function
    setTimeout(function () {
      currentAccount.movements.push(amount);
      //Update UI
      updateUI(currentAccount);
    }, 3500);
  }
  inputLoanAmount.value = "";
});

/////////////////////////////////////////////
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Math.floor(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  const checkIf =
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username;
  // console.log(checkIf);

  if (checkIf) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);

    //reset timer
    clearInterval(timer);
    //timer = startLogOutTimer();
  }
});

/////////////////////////////when click on button account delete////////////////////////
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

// ////////////////////////////For sort method start from here///////////////////////////////////

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMoments(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////Pratice for reduce method this code  is not part of game ///////////////////////
const { deposits, withdraws } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdraws += cur);
      // sums[cur > 0 ? "deposits" : "withdraws"] += cur;
      return sums;
    },
    {
      deposits: 0,
      withdraws: 0,
    }
  );
// console.log(deposits, withdraws);

//////////////////////setTimeout//////////////////////////////
const startLogOut = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60));
    //in each call print the reming
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    //decrese is
    time--;
  };
  //set time out
  let time = 10;
  //call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

////////////////////////////////////////preFixed Operator ////////////////////////////////////////
//NOTE:- use ++ operator before console than you  js give original value
let a = 10;
// console.log(a++);
// console.log(a++);
// console.log(a++);

let b = 10;
// console.log(++b);

/////////////////////////Example of convert string into array with function
// const convertTitleCase = function (title) {
//   const expections = ["a", "an", "the", "but", "or", "on", "in", "with"];
//   const tileCase = title
//     .toLowerCase()
//     .split(" ")
//     .map((word) =>
//       expections.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     );
//   return tileCase;
// };
// console.log(convertTitleCase("this is nice title"));
// console.log(convertTitleCase("this is LONG title but  not long TOO"));
// console.log(convertTitleCase(" and here is another title with EXAMPLE"));
