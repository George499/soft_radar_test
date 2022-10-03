export async function fetchData() {
  const poloShirtsUrl = await fetch(
    "https://soft-radar-test-strapi.herokuapp.com/api/polo-shirt?populate=*"
  );

  const trousersUrl = await fetch(
    "https://soft-radar-test-strapi.herokuapp.com/api/trousers?populate=*"
  );

  const shortsUrl = await fetch(
    "https://soft-radar-test-strapi.herokuapp.com/api/shorts?populate=*"
  );
  const poloShirts = await poloShirtsUrl.json();
  const trousers = await trousersUrl.json();
  const shorts = await shortsUrl.json();
  return [poloShirts, trousers, shorts];
}
