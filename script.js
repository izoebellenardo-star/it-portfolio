
const glow = document.createElement("div");
glow.className = "cursor-glow";
document.body.appendChild(glow);

const canUseMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canUseMouse && !reduceMotion) {
  document.addEventListener("mousemove", (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
    glow.style.opacity = "1";
  });

  document.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
  });
}

/* Blue ripple when clicking links and buttons */
document.addEventListener("click", (event) => {
  if (reduceMotion || !event.isTrusted) return;

  const target = event.target.closest("a, button, [role='button']");
  if (!target) return;

  const ripple = document.createElement("span");
  ripple.className = "click-ripple";
  ripple.style.left = `${event.clientX}px`;
  ripple.style.top = `${event.clientY}px`;

  document.body.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
});


const certificates = [
  {
    title: "Computer Systems Servicing NC II ",
    image: "https://i.ibb.co/SXSc1WRC/sample-css-nc-ii.png"
  },
  {
    title: "CompTIA A+ Hardware and IT Fundamentals",
    image: "https://i.ibb.co/p8CTDMH/sample-comptia-a-plus.png"
  },
  {
    title: "Cisco Networking Basics",
    image: "https://i.ibb.co/dJGZ76Rq/sample-cisco-networking.png"
  },
  {
    title: "Basic Occupational Safety and Health",
    image: "https://i.ibb.co/pj2mqX0Y/sample-bosh.png"
  },
  {
    title: "IT Customer Service and Helpdesk Best Practices",
    image: "https://i.ibb.co/5WBXMJFW/sample-it-customer-service.png"
  },
  {
    title: "Structured Cabling and Network Setup",
    image: "PASTE_CABLING_IMAGE_URL_HERE"
  }
];

function openCertificate(index) {
  const certificate = certificates[index];

  if (!certificate) return;

  document.getElementById("certificateTitle").textContent =
    certificate.title;

  const image = document.getElementById("certificateImage");
  image.src = certificate.image;
  image.alt = certificate.title + " sample certificate design";

  document.getElementById("certificateModal").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeCertificate() {
  document.getElementById("certificateModal").classList.remove("show");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeCertificate();
  }
});

