; (() => {
    console.log(new Array(100).join(" "));
    console.log("%cHello.", "font-size: 200px;")
    console.log(new Array(100).join(" "));
    fetch("/request", {
        method: "POST"
    })
    const days = [
        {
            name: "Mon", active: false, text: "The usage of how to use renewable and nonrenewable energy.<br />",
            title: "Renewable and nonrenewable"
        },
        { name: "Tues", title: "Solar panel", text: "\nSolar panels are panels with solar infused cells that generate electricity.\nSolar panels, when used in large groups, are a renewable way to generate electricity." },
        { name: "Wens", text: "Today we’re reminding members of the KCD community to recycle! Recycling is necessary to save our planet. It conserves energy and natural resources and reduces air pollution, water pollution, and greenhouse gasses!", title: "Reminder to recycle" },
        { name: "Thurs", title: "Items to conserve energy", text: "These are energy conserving items that are easy to purchase and install in your homes! \nLED Lights \n Motion Sensor Lights \n Smart Thermostat" },
        { name: "Fri", title: "Actions to conserve energy", text: "Today we’re talking about actions that conserve energy!\nYou can carpool to save gas, turn off lights when you don’t need them", }
    ]
const visuals = [
    {
        title: "Renewable Energy",
        text: `Solar Energy: 

        https://www.energy.gov/eere/solar/how-does-solar-work
        
        https://www.seia.org/initiatives/about-solar-energy`,
        badges: [..."Morning Announcements, Morning Meetings, Campaign Visual, Bearcat Weekly".split(",")]
    }, 
    {
        title: "Energy Conserving Items",
        items: [
            { text: "LED lights\n   https://www.energy.gov/energysaver/led-lighting#:~:text=LED%20is%20a%20highly%20energy,times%20longer%2C%20than%20incandescent%20lighting. ", badges: "Social Media, Campaign Visual, Announcements".split(",") },
            { text: "Motion Sensor Lights https://ledlightinginfo.com/motion-sensor-lights-save-electricity", badges: "Announcements".split(" ") }
        ]
    }
].map(e => {
    if(e.text) {
const matches = e.text.match(/([\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#.]?[\w-]+)*\/?/gm);
if(matches) {
    matches.forEach((match) => {
        e.text = e.text.replace(match, `<a href="${match}" target="_blank" class="hover:text-base-900 text-base-700 underline">${match}</a>`)
    })
}
return e;
    } else if("items" in e) {
      e.items.forEach((item) => {
        const matches = item.text.match(/([\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#.]?[\w-]+)*\/?/gm);
if(matches) {
    matches.forEach((match) => {
        item.text = item.text.replace(match, `<a href="${match}" target="_blank" class="hover:text-base-900 text-base-700 underline">${match}</a>`)
    })
}
      })  
    }
     else {
        return e;
    }
})
    const posts = [[

        {
            data: "LED lights save energy compared to regular light bulbs!",
            img: "/images/lights2.jpg"
        }, {
            data: "Carpooling saves gas money and uses less gas that pollutes the earth! It’s a win-win!",
            img: "/images/image3.jpg"
        }],
    [
        {
            data: "Make sure to turn your lights off when you don’t need them!",
            img: "/images/lights.jpg"
        },
        {

            data: "Cold showers save energy by not heating up water and they also have many health benefits! It’s a win-win as well!        ",
            img: "/images/shower.png"
        },
        {
            data: "Avoid buying products such as snacks that use a lot of wasteful packaging!",
            img: "/images/snacks.png"
        }
    ]]
    const energyconserv1 = [[


        {
            data: `These lights turn off when they don't detect motion.\n100% of the time will stop people from leaving the lights on `,
            img: "https://www.ezlo.com/wp-content/uploads/indoor-motion-sensor-light.png",
            name: "Motion Sensor Lights"
        }, {
            data: `lights that use led instead of light bulbs which is more energy efficient.\n Led use less energy than regular bulbs `,
            img: "https://cdn.thewirecutter.com/wp-content/uploads/2019/02/ledlightbulbs-2x1-9885-2.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=1.5",
            name: "LED lights"
        }], [
        {
            data: `Cars that use gasoline, Engine recharges itself while driving, Electric cars don't do this\nHybrids are about 20%-35% more fuel efficient than regular cars        `,
            img: "https://afdc.energy.gov/sp/assets/car_pages/plugin-5a01af8665755060bc644e2c64581a48b309285feae83885cd3bad4d120107df.jpg",
            name: "Hybrid Cars"
        },

        {
            data: ` Keep house cool in the summer and the cold out in the winter.\nWindows are responsible for 25%-30% of a house's heat loss and heat gain        `,
            img: "https://www.energy.gov/sites/default/files/styles/embed_image_large_480px_width_/public/2021-09/071220-BTO-PH-001.JPG?itok=pfa7Mir5",
            name: "Energy Efficient Windows"
        },
        {
            data: `Smart thermostats can adjust the temperature of the house then once the designated temperature is reached it can use any sort of eco mode to use less energy or not turn on while it is not being used.\nThey save 8% of heating each year`,
            img: "/thermostat.png",
            name: "Smart thermostat "
        },
    ],
    [
        {
            name: "Cold Showers",
            data: `Cold showers help you as a human and save energy in your water heating.            `,
            img: "https://www.ourpaleolife.com/wp-content/uploads/2020/06/Science-of-the-Cold-Shower.jpg"
        },
        {
            name: "Hybrid/fuel efficient cars",
            data: `Driving a fuel-efficient car, such as a hybrid\nHybrids are about 20%-35% more fuel efficient than regular cars            `,
            img: "https://afdc.energy.gov/sp/assets/car_pages/plugin-5a01af8665755060bc644e2c64581a48b309285feae83885cd3bad4d120107df.jpg"
        },
    ],
    [
        {
            name: "Carpool",
            data: `Carpooling with other people is a way to save energy and have fun  with your friends             `,
            img: "https://transportation.ucsd.edu/_images/headers/carpool-header.jpg"
        },
        {
            name: "Turn off the lights",
            data: `Turn off you lights when you don't need them\n            Lights account for 20% of your electric bill            `,
            img: "https://media.istockphoto.com/id/1330372099/vector/flat-light-bulbs-turned-on-and-turned-off-with-light-switches-on.jpg?s=612x612&w=0&k=20&c=xIxifwiqwZHMztrFZIsAfCqtJZxbIgJ43l3dc38zTUQ="
        },
        {
            name: "Buy only what you need",
            data: `Buying only what you need is a great way to save money and to save energy.  `,
            img: "https://talenthouse-res.cloudinary.com/image/upload/c_limit,h_1000,q_auto:eco,w_1000/v1/user-1064070/submissions/tk8bmtfqkejt5y0hxjyu.jpg"
        },
    ]
    ]
    const prosandcons = [{
        name: "Pros",
        items: [
            "- renewable energy",
            " - low maintenance cost",
            " -lowers electric bill",
            "- increases house value "
        ]
    }, {
        name: "Cons",
        items: `- only takes in 40% of the energy from the sun
        - very expensive 
        - some of the materials used to build are extremely energy wasteful
        - not available to to everyone around the world`.split("\n")
    }]
    function getImgSrc(obj) {
        if (!"img" in obj) returnnull;
        let url = obj.img;
        if (url.startsWith("/")) url = "https://earthday.saahild.com" + url
        return { url, mla: false };
    }
    const img_sources = [
        ...energyconserv1[0].map(getImgSrc),
        ...energyconserv1[1].map(getImgSrc),
        ...energyconserv1[2].map(getImgSrc),
        ...energyconserv1[3].map(getImgSrc),
        ...posts[0].map(getImgSrc),
        ...posts[1].map(getImgSrc),
    ]
    const sources = [
        ...img_sources,
        { mla: true, text: "Test source" }
    ]
    // alert(img_sources.map(e => e.url).joi"))
    fetch("/requests").then(r => r.json()).then((r) => {
        setTimeout(() => {
            document.getElementById("requests").innerHTML += r.requests
            document.getElementById("s_requests").innerHTML += r.school_people_requests
        }, 500)
    })
    window.addEventListener("load", async () => {
        // const quickAddSpan = data => {
        //     const span = document.createElement("span");
        //     span.innerHTML = data;
        //     return span;
        // }
const theme = localStorage.getItem("secret_theme")
if(theme) {
    document.documentElement.setAttribute("data-theme", theme);
}
        const loadingScreen = await fetch("/views/loading.html").then(e => e.text());
        function render(data, ops = {}) {
            const div = document.getElementById("content");
            div.innerHTML = ejs.render(data, ops)
        }
        switch (window.location.hash) {
            case "":
            case "#/":
                fetch(
                    "/views/main.html"
                ).then(r => r.text()).then(data => {
                    render(data, {})
                })
                break;
            case "#/socialmedia":
                fetch(
                    "/views/socialmedia.html"
                ).then(r => r.text()).then(data => {
                    render(data, { posts })
                })
                break;
            case "#/plan":
                fetch(
                    "/views/plan.html"
                ).then(r => r.text()).then(data => {
                    render(data, {})
                })
                break;
            case "#/prosandcons":
                fetch(
                    "/views/prosandcons.html"
                ).then(r => r.text()).then(data => {
                    render(data, { prosandcons })
                })
                break;
            case "#/creds":
            case "#/c":
            case "#/crds":
            case "#/credits":
            case "#/info":
            case "#/authors":
                fetch(
                    "/views/credits.html"
                ).then(r => r.text()).then(async data => {
                    render(data, { info: await fetch("/requests").then(r => r.json()) })
                    const div = document.getElementById("secret");
                    const coolDiv = document.createElement("div")
                    coolDiv.onclick = e => coolDiv.remove()
                    coolDiv.innerHTML = "Theme toggled!"
                    coolDiv.className = "hero p-5 m-5 font-bold text-xl text-center bg-base-100 mt-20 hover:pointer"
                    let keys = "";
                    window.addEventListener("keypress", (e) => {
                        keys += e.key
                    })
                    setInterval(() => {
                        if (keys.includes("gogaurdian")) {
                            keys = "";
                            div.innerHTML = "";
                            div.append(coolDiv)
if(localStorage.getItem("secret_theme")) {
    localStorage.removeItem("secret_theme")
} else {
    localStorage.setItem("secret_theme", "forest")
}
                            setTimeout(() => {
                                coolDiv.click();
        window.location.reload()

                            }, 2500)
                        }
                    }, 50)
                })
                break;
            case "#/energyConversion":
            case "#/energyconversion":
                fetch(
                    "/views/energyconservtion.html"
                ).then(r => r.text()).then(data => {
                    render(data, { energyconserv1 })
                })
                break;
                case "#/bearcatweekly":
                    fetch(
                        "/views/campaign/bearcatweekly.html"
                    ).then(r => r.text()).then(data => {
                        render(data)
                    })
                    break;
            case "#/weeklyagenda":
                fetch(
                    "/views/dailyagenda.html"
                ).then(r => r.text()).then(data => {
                    // alert(location.search)
                    const params = new URLSearchParams(window.location.search)
                    // days[params.get("q") ].active = true;
                    render(data, {
                        days,
                        activeIndex: parseInt(params.get("q") || "0")
                    })

                    window.setQuery = (name, v) => {
                        params.set(name, v);
                        window.location.search = params.toString()
                    }
                })
                break;
                case "#/mondaymeetingplan": 
                case "#/mondaymeeting": 
                fetch(
                    "/views/mondaymeeting.html"
                ).then(r => r.text()).then(data => {
                    // alert(location.search)
                    // days[params.get("q") ].active = true;
                    render(data);
                })
                break;
                case "#/sources":  
                fetch("/views/sources.html"
                ).then(r => r.text()).then(data => {
                    // alert(location.search)
                    // days[params.get("q") ].active = true;
                    render(data, { sources });
                })
                break;
        }
        const pcBtns = Array.from(document.querySelectorAll(".pros-cons-btn"));
        pcBtns.forEach(pcBtn => {
            pcBtn.addEventListener("mousedown", async () => {
                render(loadingScreen);
                window.location.hash = "#/prosandcons"
                location.reload()
                // fetch(
                //     "/prosandcons.html"
                // ).then(r=>r.text()).then(data => {
                //     render(data, { prosandcons })
                // })
            })
        })
        const ebtns = Array.from(document.querySelectorAll(".ec-btns"));
        ebtns.forEach(pcBtn => {
            pcBtn.addEventListener("mousedown", async () => {
                render(loadingScreen);
                window.location.hash = "#/energyconversion"
                location.reload()
            })
        })
        const wabtns = Array.from(document.querySelectorAll(".wa-btns"));
        wabtns.forEach(pcBtn => {
            pcBtn.addEventListener("mousedown", async () => {
                render(loadingScreen);
                window.location.hash = "#/weeklyagenda"
                location.reload()
            })
        })
        const cbtns = Array.from(document.querySelectorAll(".c-btns"));
        cbtns.forEach(pcBtn => {
            pcBtn.addEventListener("mousedown", async () => {
                render(loadingScreen);
                window.location.hash = "#/creds"
                location.reload()
            })
        })
        const li = Array.from(document.querySelectorAll("a"));
        li.forEach(pcBtn => {
            if (!pcBtn.getAttribute("data-page")) return;
            pcBtn.addEventListener("mousedown", async () => {
                render(loadingScreen);
                window.location.hash = pcBtn.getAttribute("data-page");
                location.reload()
            })
        })


        const btn = document.getElementById("menu-button")
        let open = false;
        const dropdown = document.getElementById("menu-dropdown");
        btn.addEventListener("click", () => {
            // alert("Why " + dropdown.classList)
            if(open) {
                ["transform", "opacity-100"].forEach((e) => {
                    dropdown.className = dropdown.className.replace(e, "");
                    })
                    document.getElementById("menu-dropdown").className += (["transform", "hidden"].join(" "))
            }
            if(!open) {
                ["transform", "hidden", "scale-95"].forEach((e) => {
                    return dropdown.className = dropdown.className.replace(e, "");
                })
                document.getElementById("menu-dropdown").className = (["transform", "opacity-100"].join(" "))           
            }
        open=!open
        })
        btn.addEventListener("onmouseover", () => {
            // alert("foc*us or blur")
            ["transform", "hidden", "scale-95"].forEach((e) => {
                return dropdown.className = dropdown.className.replace(e, "");
            })
            document.getElementById("menu-dropdown").className = (["transform", "opacity-100"].join(" "))
        })
        btn.addEventListener("onmouseleave", () => {
            // alert("focus or blu*r")
            ["transform", "opacity-100"].forEach((e) => {
            dropdown.className = dropdown.className.replace(e, "");
            })
            document.getElementById("menu-dropdown").className += (["transform", "hidden", "scale-95"].join(" "))
        })
        dropdown.addEventListener("onmouseover", () => {
            // alert("foc*us or blur")
            ["transform", "hidden", "scale-95"].forEach((e) => {
                return dropdown.className = dropdown.className.replace(e, "");
            })
            document.getElementById("menu-dropdown").className = (["transform", "opacity-100"].join(" "))
        })
        dropdown.addEventListener("onmouseleave", () => {
            // alert("focus or blu*r")
            ["transform", "hidden", "opacity-100"].forEach((e) => {
                dropdown.className = dropdown.className.replace(e, "");
                })
                document.getElementById("menu-dropdown").className += (["transform", "hidden"].join(" "))  
        })


        // formControl.addEventListener("submit", e => {
        //     e.preventDefault();
        //     window.location.hash = `#/${searchInput.value.split(" ").join("")}`
        //     location.reload()
        // })
        const elements = Array.from(document.querySelectorAll("button.search-results"));
        const input = document.querySelector("input[type=text]")
        let ul = document.querySelector("ul#search-input")
        // input.addEventListener("focus", () => {
        //     // alert("foc*us or blur")
        // })
        // input.addEventListener("blur", () => {
        //     // alert("focus or blu*r")
        // })
        ul.addEventListener("focus", () => {
            // alert("foc*us or blur")
            ul.classList.remove('hidden');
        })
        ul.addEventListener("blur", () => {
            // alert("focus or blu*r")
            ul.classList.add('hidden');
        })
        elements.forEach(e => {
            e.addEventListener("click", () => {
                window.location.hash = e.getAttribute("data-href");
                location.reload()
            })
        })
        let typing = false;
        let inter;
       
        input.addEventListener("input", (ee) => {
            // alert("input")
            ul.classList.remove('hidden');
            typing = true;
            if (inter) clearTimeout(inter)
            const value = ee.target.value
            elements.forEach((e) => {
                if (e.innerHTML.toLowerCase().includes(value.toLowerCase())) {
                    e.classList.remove("hidden")
                } else {
                    e.classList.add("hidden")
                }
            })
            inter = setTimeout(() => {
                typing = false;
            }, 2_500)
        })
        setInterval(() => {
            if (!typing) ul.classList.add('hidden');
        }, 50)
    })

})()
window.onerror = alert;