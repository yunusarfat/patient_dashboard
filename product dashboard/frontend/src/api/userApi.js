// src/api/userApi.js
export const getUsers = async () => {
  const username = "coalition"; // replace with your actual username
  const password = "skills-test"; // replace with your actual password
  const auth = btoa(`${username}:${password}`); // Base64 encode

  try {
    const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Failed to fetch users");

    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
