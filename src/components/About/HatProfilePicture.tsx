import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { scheduleIdle } from "@solid-primitives/scheduled";

// TODO: add arialabel for button

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
        name: "cat with tongue sticking out",
        src: "/hats/cat"
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
        name: "bucket hat",
        src: "/hats/bucket"
    },
    {
        name: "bowler hat",
        src: "/hats/bowler"
    },
    {
        name: "greek leaf crown",
        src: "/hats/crown"
    },
    {
        name: "pink hat with a ribbon",
        src: "/hats/pink-hat"
    },
    {
        name: "beanie",
        src: "/hats/beanie"
    },
    {
        name: "queen elizabeth second crown",
        src: "/hats/crown"
    }
];

const checkAvifSupport = async (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onerror = () => resolve(false);
        image.onload = () => resolve(true);
        image.src =
            "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";

        setTimeout(() => resolve(false), 100);
    });
};

const HatProfilePicture = () => {
    const [currentIndex, setCurrentIndex] = createSignal(0);
    const [currentImageLoaded, setCurrentImageLoaded] = createSignal(false);
    const [supportsAvif, setSupportsAvif] = createSignal(false);

    const preloadNextImage = async () => {
        const nextIndex = (currentIndex() + 1) % hats.length;
        const nextImage = new Image();
        nextImage.src = supportsAvif() ? `${hats[nextIndex].src}.avif` : `${hats[nextIndex].src}.webp`;
    };

    const triggerNextImgPreload = scheduleIdle(preloadNextImage);

    const changeHat = () => {
        setCurrentImageLoaded(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % hats.length);
    };

    createEffect(() => {
        if (currentImageLoaded()) {
            triggerNextImgPreload();
        }
    });

    onMount(async () => {
        const isAvifSupported = await checkAvifSupport();
        setSupportsAvif(isAvifSupported);
    });

    onCleanup(() => triggerNextImgPreload.clear());

    return (
        <div class="relative w-full md:fixed md:bottom-0 md:right-0 md:w-1/2 md:max-w-[660px]">
            <div class="relative max-w-fit">
                <picture>
                    <source srcset="/about-me-profile.avif" type="image/avif" />
                    <img src={"/about-me-profile.webp"} alt="photo of me" width="660" height="700" loading="eager" />
                </picture>
                <button
                    type="button"
                    class="btn-primary absolute bottom-[7%] left-[10%] right-0 z-10 mx-auto max-w-fit bg-light-pink"
                    onClick={changeHat}
                >
                    Next hat
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        class="ml-4 inline-block -rotate-90 fill-ruby-red"
                    >
                        <path d="M7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L15.0711 10.3431C15.4616 9.95262 15.4616 9.31946 15.0711 8.92893C14.6805 8.53841 14.0474 8.53841 13.6569 8.92893L8 14.5858L2.34315 8.92893C1.95262 8.53841 1.31946 8.53841 0.928932 8.92893C0.538407 9.31946 0.538407 9.95262 0.928932 10.3431L7.29289 16.7071ZM7 -4.37114e-08L7 16L9 16L9 4.37114e-08L7 -4.37114e-08Z"></path>
                    </svg>
                </button>
            </div>
            <picture>
                <source srcset={`${hats[currentIndex()].src}.avif`} type="image/avif" />
                <img
                    class="absolute inset-0"
                    width="660"
                    height="700"
                    src={`${hats[currentIndex()].src}.webp`}
                    alt={hats[currentIndex()].name}
                    loading="eager"
                    onLoad={() => setCurrentImageLoaded(true)}
                />
            </picture>
        </div>
    );
};

export default HatProfilePicture;
