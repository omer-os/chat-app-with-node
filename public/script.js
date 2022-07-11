const newmsginput = document.querySelector(".new-msg-input");
const chatscontainer = document.querySelector(".chats-container");
const new_msg = (name, message, time) => {
  return `<div
    class="flex md:w-5/6 sm:w-4/6 rounded-xl p-2 justify-between ${name}"
  >
    ${message}
    <div class="date text-gray-400 text-sm relative top-2">
      ${time}
    </div>
  </div>`;
};

const post_msg = () => {
  const id = newmsginput.dataset.id;
  fetch(`/rooms/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "me",
      message: newmsginput.value,
      time: new Date().toLocaleTimeString(),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  chatscontainer.innerHTML += new_msg(
    "me",
    newmsginput.value,
    new Date().toLocaleTimeString()
  );
  newmsginput.value = "";

};

newmsginput.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    post_msg();
  }
});
