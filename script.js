const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");
const hoverSign = document.querySelector(".hover-sign");

const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

const videolist = [video1, video2, video3];

videolist.forEach(function(video) {
    video.addEventListener('mouseover', function() {
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener('mouseout', function() {
        video.pause()
        hoverSign.classList.remove("active")
    })
})

menu.addEventListener('click', function() {
    sidebar.classList.remove("close-sidebar")
    sidebar.classList.add("open-sidebar")
})

close.addEventListener('click', function() {
    sidebar.classList.remove("open-sidebar")
    sidebar.classList.add("close-sidebar")
})
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}
document.querySelector("form").addEventListener("submit", function (e) {
    const btn = this.querySelector("button[type='submit']");
    btn.disabled = true;
    btn.innerHTML = `<i class='bx bx-loader-alt bx-spin'></i> Sending...`;

    setTimeout(() => {
        btn.disabled = false; // Re-enable button after 5 seconds (for testing)
        btn.innerHTML = "Send Message";
    }, 5000); // Adjust time based on real-world form processing
});
