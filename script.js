const user = [
  { id: 1, username: "lala", address: "Jakarta" },
  { id: 2, username: "lili", address: "Surabaya" },
];

const transaction = [
  {
    user_id: 1,
    transaction: [
      { id: 1, status: "Selesai" },
      { id: 2, status: "Sedang dikirim" },
    ],
  },
  {
    user_id: 2,
    transaction: [
      { id: 1, status: "Selesai" },
      { id: 2, status: "Dibatalkan" },
    ],
  },
];

const detailTransaction = [
  { id: 1, productName: "Kopi Hitam", qty: 3, totalAmount: 3000 },
  { id: 2, productName: "Gula Pasir", qty: 1, totalAmount: 5000 },
];

function login(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundUser = user.find((u) => u.username === username);
      if (foundUser) {
        resolve(foundUser);
      } else {
        reject("User not found");
      }
    }, 100);
  });
}

function getTransaction(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundTransaction = transaction.find((t) => t.user_id === userId);
      if (foundTransaction) {
        resolve(foundTransaction.transaction);
      } else {
        reject("Transaction not found");
      }
    }, 1000);
  });
}

function getDetailTransaction(transactionId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundDetailTransaction = detailTransaction.find(
        (dt) => dt.id === transactionId
      );
      if (foundDetailTransaction) {
        resolve(foundDetailTransaction);
      } else {
        reject("Detail transaction not found");
      }
    }, 500);
  });
}

// Menggunakan Promise
login("lala")
  .then((user) => {
    console.log(user);
    console.log(user.id);
    return getTransaction(user.id);
  })
  .then((transaction) => {
    console.log(transaction);
    return getDetailTransaction(transaction[0].id);
  })
  .then((detailTransaction) => {
    console.log(detailTransaction);
  })
  .catch((error) => {
    console.log(error);
  });

// Menggunakan async/await
async function fetchData() {
  try {
    const loggedInUser = await login("lala");
    console.log(loggedInUser);
    console.log(loggedInUser.id);

    const userTransaction = await getTransaction(loggedInUser.id);
    console.log(userTransaction);

    const firstTransactionId = userTransaction[0].id;
    const transactionDetail = await getDetailTransaction(firstTransactionId);
    console.log(transactionDetail);
  } catch (error) {
    console.log(error);
  }
}
fetchData();
