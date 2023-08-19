import { createSignal } from "solid-js";

const hats = [
    {
        name: "babushka",
        src: "/hats/babushka"
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
        name: "space suit",
        src: "/hats/space-suit"
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
        name: "pink hat with a ribbon",
        src: "/hats/pink-hat"
    },
    {
        name: "beanie",
        src: "/hats/beanie"
    }
];

const HatProfilePicture = () => {
    const [currentIndex, setCurrentIndex] = createSignal(0);
    const changeHat = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % hats.length);
    };
    // TODO because container is -z-10 button doesn't work

    return (
        <div class="relative w-full md:fixed md:bottom-0 md:right-0 md:w-1/2 md:max-w-[660px]">
            <picture>
                <source srcset="/about-me-profile.avif" type="image/avif" />
                <img src={"/about-me-profile.webp"} alt="photo of me" width="660" height="700" loading="eager" />
            </picture>
            <button type="button" class="absolute top-0 z-10 w-full text-2xl" onClick={changeHat}>
                Next hat
            </button>
            <picture>
                <source srcset={`${hats[currentIndex()].src}.avif`} type="image/avif" />
                <img
                    class="absolute inset-0"
                    width="660"
                    height="700"
                    style={{ position: "absolute", left: 0 }}
                    src={`${hats[currentIndex()].src}.webp`}
                    alt={hats[currentIndex()].name}
                    loading="eager"
                />
            </picture>
        </div>
    );
};

export default HatProfilePicture;
