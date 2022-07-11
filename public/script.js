const newmsginput = document.querySelector(".new-msg-input");
const chatscontainer = document.querySelector(".chats-container");
const leftarrowbtn = document.querySelector(".left-arrow-btn");
const parent = document.querySelector(".main");
//
//
//
//
//
//
//

const new_msg = (name, message, time) => {
  return `<div
    class="flex md:w-5/6 sm:w-4/6 rounded-xl p-2 justify-between ${name} show"
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
  });
  chatscontainer.innerHTML += new_msg(
    "me",
    newmsginput.value,
    new Date().toLocaleTimeString()
  );

  const last_msg = chatscontainer.lastElementChild;
  last_msg.classList.remove("show");
  chatscontainer.scrollTop = chatscontainer.scrollHeight;
  newmsginput.value = "";
};
newmsginput.addEventListener("keydown", (e) => {
  if (e.keyCode === 13 && newmsginput.value.length > 2) {
    post_msg();
  }
});

//
//
//
//
//
//
//

leftarrowbtn.addEventListener("click", () => {
  parent.classList.toggle("show-menu");
});
