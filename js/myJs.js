const userModel = document.getElementById("user_model");
const usertable = document.getElementById("users_table");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

let usersData = [];
let editingUserId = null;

const openAddUserModal = () => {
  userModel.style.display = "flex";
  document.getElementById("modalBtn").textContent = "Add";
  clearModalHandler();
  editingUserId = null;
};

const closeAddUserModal = () => {
  if (editingUserId === null) {
    addUserHandler();
  } else {
    updateUserHandler(editingUserId);
  }
  userModel.style.display = "none";
  clearModalHandler();
};

const addUserHandler = () => {
  const user = {
    id: usersData.length,
    name: userName.value,
    email: userEmail.value,
  };
  usersData.push(user);
  renderUsersTable();
};

const updateUserHandler = (id) => {
  const user = usersData.find((user) => user.id === id);
  user.name = userName.value;
  user.email = userEmail.value;
  renderUsersTable();
};

const clearModalHandler = () => {
  userName.value = "";
  userEmail.value = "";
};

const deleteUserHandler = (id) => {
  usersData = usersData.filter((user) => user.id !== id);
  renderUsersTable();
};

const editUserHandler = (id) => {
  const user = usersData.find((user) => user.id === id);
  userName.value = user.name;
  userEmail.value = user.email;
  userModel.style.display = "flex";
  editingUserId = id;
  document.getElementById("modalBtn").textContent = "Update";
};

const renderUsersTable = () => {
  usertable.innerHTML = "";
  usersData.forEach((user, index) => {
    usertable.innerHTML += `
            <tr>
                <td>${user.id + 1}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <div class="btn btn-danger" onclick="deleteUserHandler(${
                      user.id
                    })">delete</div>
                    <div class="btn btn-info text-white" onclick="editUserHandler(${
                      user.id
                    })">edit</div>
                </td>
            </tr>
        `;
  });
};

renderUsersTable();
