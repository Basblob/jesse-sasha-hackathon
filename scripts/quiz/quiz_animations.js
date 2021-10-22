

const faders = document.querySelectorAll(".quiz__question");

const appearOptions = {
  root: null, //You don't have to set this. null is same as deafult which is viewport
  threshold: 0.8, // 0 is default. Basically, what % of the element needs to be on page for it to be considered in bounds
  rootMargin: "200px 0px 200px 0px", //p sure "0px" is default. (top right bottom left)acts as a margin for what's considered "viewport"
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      if (entry.target.classList.contains("appear")) {
        entry.target.classList.remove("appear");
      } else {
        return;
      }
    } else {
      entry.target.classList.toggle("appear");
      // appearOnScroll.unobserve(entry.target)
    }
  });
},
appearOptions);

//You can't run .observe() on a list of elements so:
faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
