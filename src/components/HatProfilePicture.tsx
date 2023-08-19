import { createSignal } from "solid-js";

const hats = [
    {
        name: "space suit",
        src: "/hats/space-suit"
    },
    {
        name: "babushka",
        src: "/hats/babushka"
    },
    {
        name: "beanie",
        src: "/hats/beanie"
    },
    {
        name: "beret",
        src: "/hats/beret"
    },
    {
        name: "bucket hat",
        src: "/hats/bucket"
    },
    {
        name: "cap",
        src: "/hats/cap"
    },
    {
        name: "cat-woman mask",
        src: "/hats/cat-woman"
    },
    {
        name: "crown from flowers",
        src: "/hats/flower-crown"
    },
    {
        name: "pikachu hat",
        src: "/hats/pikachu"
    },
    {
        name: "pink hat with a ribbon",
        src: "/hats/pink-hat"
    }
];

const HatProfilePicture = () => {
    const [currentIndex, setCurrentIndex] = createSignal(0);
    const changeHat = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % hats.length);
    };

    return (
        <div class="relative">
            <picture>
                <source srcset="/about-me-profile.avif" type="image/avif" />
                <img
                    src={"/about-me-profile.webp"}
                    alt="profile picture of me"
                    width="660"
                    height="700"
                    loading="eager"
                />
            </picture>
            <button onClick={changeHat}>arrow</button>
            <picture>
                <source srcset={`${hats[currentIndex()].src}.avif`} type="image/avif" />
                <img
                    class="absolute left-0"
                    width="660"
                    height="700"
                    style={{ position: "absolute", left: 0 }}
                    src={`${hats[currentIndex()].src}.webp`}
                />
            </picture>
        </div>
    );
};

export default HatProfilePicture;
