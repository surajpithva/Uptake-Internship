const account1 = {
  owner: "Suraj Pithva",
  movements: [200, 500, 450, 120, 170, 169, -400, -920],
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
displayMoments(account1.movements);

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
console.log(accounts);

///////////////////////calcucate the balance////////////////////////

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);
