<template>
  <div class="container">
    <div class="contents">
      <form action="/submit_form" method="POST" class="form">
        <h1>Sign Up</h1>
        <!-- Form fields will go here -->

        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  font-size: large;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.contents {
  background-color: #071630; /* Dark background for the form container */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form {
  display: flex;
  flex-direction: column; /* Stack form items vertically */
  align-items: center; /* Center items horizontally */
}

input[type="text"],
input[type="email"],
input[type="password"],
button {
  width: 100%; /* Make inputs and button full-width */
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; /* Include padding and border in width calculation */
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
