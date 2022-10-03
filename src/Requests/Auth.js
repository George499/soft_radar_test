export async function fetchAuth(identifier, password) {
  const user = await fetch(
    "https://soft-radar-test-strapi.herokuapp.com/api/auth/local",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    }
  );
  return await user.json();
}
