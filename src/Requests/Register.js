export async function fetchRegister(registerInfo) {
  const user = await fetch(
    "https://soft-radar-test-strapi.herokuapp.com/api/auth/local/register",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: registerInfo.firstName,
        email: registerInfo.email,
        password: registerInfo.password,
      }),
    }
  );
  return await user.json();
}
