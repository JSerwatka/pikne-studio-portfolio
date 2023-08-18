import { createSignal } from "solid-js";

const hats = [
    {
        name: "space suit",
        src: "/hats/space-suit.png"
    },
    {
        name: "babushka",
        src: "/hats/babushka.png"
    },
    {
        name: "beanie",
        src: "/hats/beanie.png"
    },
    {
        name: "beret",
        src: "/hats/beret.png"
    },
    {
        name: "bucket hat",
        src: "/hats/bucket.png"
    },
    {
        name: "cap",
        src: "/hats/cap.png"
    },
    {
        name: "cat-woman mask",
        src: "/hats/cat-woman.png"
    },
    {
        name: "crown from flowers",
        src: "/hats/flower-crown.png"
    },
    {
        name: "pikachu hat",
        src: "/hats/pikachu.png"
    },
    {
        name: "pink hat with a ribbon",
        src: "/hats/pink-hat.png"
    }
];

const HatProfilePicture = () => {
    const [currentIndex, setCurrentIndex] = createSignal(0);
    const changeHat = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % hats.length);
    };

    return (

        <div class="relative">
            <img
                src={"/about-me-profile.png"}
                alt="profile picture of me"
                width="660"
                height="700"
                loading="eager"
            />
            <button onClick={changeHat}>arrow</button>
            <img class="absolute left-0" width="660" height="700"  style={{ position: "absolute", left: 0 }} src={hats[currentIndex()].src}/>
        </div>

    );
}
 
export default HatProfilePicture;