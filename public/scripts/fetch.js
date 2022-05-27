let e;

document.addEventListener("DOMContentLoaded", () => {
  const t = document.getElementById("fetchBtn");
  document.getElementById("output"),
    (e = document.getElementById("fetchInput").value),
    t.addEventListener("click", () => {
      c(), (document.getElementById("fetchInput").value = "");
    });
});


const c = async () => {
  try {
    e = document.getElementById("fetchInput").value;
    const n = await (await fetch(e)).json(),
    // The JSON.stringify() method converts a JavaScript object or value to a JSON string
      o = JSON.stringify(n, null, 2);
    output.innerHTML = o;
  } catch {
    console.log(console.error);
  }
};
