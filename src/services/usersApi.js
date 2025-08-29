// Fetching all users
export async function fetchUsers({ page = 1, limit }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
  );
  const data = await res.json();

  if (!res.ok) throw new Error("Failed to fetch users");
  const totalUsers = res.headers.get("x-total-count");

  return { data, totalUsers };
}

// Adding User
export async function addUser({ userData }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await res.json();

  if (!res.ok) throw new Error("Failed to add new users");
  return { data };
}

// Updating User Details
export async function updateUser({ updates, userId }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    {
      method: "PUT",
      body: JSON.stringify(updates),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const data = await res.json();

  if (!res.ok) throw new Error("Failed to update users");
  return { data };
}

// Deleting User Details
export async function deleteUser({ userId }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${userId}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) throw new Error("Failed to delete users");
  return;
}
