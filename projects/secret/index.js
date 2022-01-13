let text;
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  const data = new TextEncoder().encode(input.value);
  const hash = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hash));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  console.log(hashHex);
});
