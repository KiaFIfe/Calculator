let result = document.querySelector("#display");

let calculate = (number) => {
  // if (number === "." && this.number.includes(".")) return;
  result.value += number;
};

let equal = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("please enter a valid response");
  }
};

function clr() {
  result.value = "";
}

function del() {
  result.value = result.value.slice(0, -1);
}
