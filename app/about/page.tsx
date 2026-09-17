import type { Metadata } from "next";
import Image from "next/image";
import { FiImage, FiVideo } from "react-icons/fi";
import MouseGlow from "@/components/MouseGlow";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About Me | Sahil Minhas",
  description:
    "Meet Sahil Minhas, a software developer with interests in content creation, making music, and cars.",
};

// Replace null with the ID after v= in a YouTube link, then write your own caption.
const videos: { youtubeId: string | null; caption: string }[] = [
  { youtubeId: "XCGkqnu2Xfg", caption: "An ad I made for the SpendMe app I am creating. See more at SpendMe.org." },
  { youtubeId: "SaHS3FzNRfM", caption: "A little vlog style video I made for my friends as a gift for a day we went out fishing." },
];

// Put images in public/about, then replace null with "/about/your-photo.jpg".
// Update alt to describe each real photo for people using screen readers.
type HobbyPhoto = {
  src: string | null;
  alt: string;
};

// These two photos appear directly below the introduction.
// Save the files in public/about and replace null with their /about/ paths.
const introductionPhotos: HobbyPhoto[] = [
  { src: "/about/self1.jpg", alt: "Sahil — introduction photo 1" },
  { src: "/about/self2.jpg", alt: "Sahil — introduction photo 2" },
];

const musicPhotos: HobbyPhoto[] = [
  { src: "/about/music1.jpg", alt: "Making music — photo 1" },
  { src: "/about/music2.jpg", alt: "Making music — photo 2" },
];

const carPhotos: HobbyPhoto[] = [
  { src: "/about/car1.jpg", alt: "My 2026 Civic hatchback — photo 1" },
  { src: "/about/car2.jpg", alt: "My 2026 Civic hatchback — photo 2" },
];

// Shared styles keep each hobby's typography and two-column media layout consistent.
const descriptionClassName = "mt-5 text-base leading-8 text-muted sm:text-lg";
const mediaGridClassName = "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2";

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <MouseGlow />
      <Navbar />

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-36 sm:px-8 lg:px-12">
        <header className="mb-12 text-center sm:mb-16">
          <h1 className="text-5xl font-medium tracking-tight sm:text-6xl">
            About Me
          </h1>
        </header>

        {/* A single reading column keeps the page flowing vertically. */}
        <div className="mx-auto max-w-4xl">
          <p className="text-base leading-8 text-muted sm:text-lg">
            I am a Software Developer from Ontario, Canada and I graduated from
            Wilfrid Laurier University. I like creative projects and making
            them look nicer than they probably need to be.
          </p>

          {/* Two square photo spaces, side by side from sm upward and stacked on phones. */}
          <div className={mediaGridClassName}>
            {introductionPhotos.map((photo) => (
              <AboutPhoto key={photo.alt} photo={photo} />
            ))}
          </div>

          <section aria-labelledby="hobbies-heading" className="mt-14 border-t border-line pt-10 sm:mt-16">
            <h2 id="hobbies-heading" className="text-3xl font-medium tracking-tight sm:text-4xl">
              Hobbies &amp; interests
            </h2>

            {/* Only the actual hobby names are subheadings; no extra section labels. */}
            <div className="mt-10 space-y-14 sm:space-y-16">
              <section aria-labelledby="content-heading">
                <h3 id="content-heading" className="text-2xl font-medium tracking-tight">
                  Content Creation
                </h3>
                <p className={descriptionClassName}>
                  I&apos;ve been making content and editing videos for as long as
                  I can remember. Growing up, I was always creating content
                  across different YouTube channels, whether that was skits,
                  gaming content, or just influencer content. I enjoy learning
                  new editing styles and finding ways to turn random ideas into
                  something watchable. I&apos;ve gotten more into it recently,
                  so watch out for more updates on that :)
                </p>

                <div className={mediaGridClassName}>
                  {videos.map((video, index) => (
                    // These are two fixed slots, so their positions identify them.
                    <figure key={index}>
                      <div className="aspect-square overflow-hidden rounded-xl border border-line bg-surface">
                        {video.youtubeId ? (
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                            title={`Content creation video ${index + 1}`}
                            className="h-full w-full border-0"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        ) : (
                          <div className="flex h-full flex-col items-center justify-center gap-3 text-muted">
                            <FiVideo className="text-2xl text-accent" aria-hidden="true" />
                            <p className="text-sm">Video coming soon</p>
                          </div>
                        )}
                      </div>
                      {/* The caption belongs to its video and can be edited in videos above. */}
                      <figcaption className="mt-4 text-sm leading-6 text-muted">
                        {video.caption || "Description coming soon"}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section aria-labelledby="music-heading" className="border-t border-line pt-10">
                <h3 id="music-heading" className="text-2xl font-medium tracking-tight">
                  Making Music
                </h3>
                <p className={descriptionClassName}>
                  I make music in my free time. Most of it will probably never
                  see the light of day. It&apos;s less about releasing anything
                  and more of a way for me to relax, experiment, and make
                  something just for fun, completely unrelated to coding.
                </p>
                <div className={mediaGridClassName}>
                  {musicPhotos.map((photo) => (
                    <AboutPhoto key={photo.alt} photo={photo} />
                  ))}
                </div>
              </section>

              <section aria-labelledby="cars-heading" className="border-t border-line pt-10">
                <h3 id="cars-heading" className="text-2xl font-medium tracking-tight">
                  Cars
                </h3>
                <p className={descriptionClassName}>
                  Recently, I&apos;ve gotten into cars. Mainly my own, because I
                  just got a 2026 Civic hatchback that I&apos;m obsessed with.
                  I&apos;m slowly learning more about how everything works and
                  working on getting some mods done to make the car feel a
                  little more personal.
                </p>
                <div className={mediaGridClassName}>
                  {carPhotos.map((photo) => (
                    <AboutPhoto key={photo.alt} photo={photo} />
                  ))}
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

// Reuse the same square photo slot for the introduction, music, and cars.
function AboutPhoto({ photo }: { photo: HobbyPhoto }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-xl border border-line bg-surface">
      {/* fill fits the positioned parent; object-cover crops rather than stretching.
          sizes helps the browser download an image suited to the displayed width. */}
      {photo.src ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1024px) 436px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted">
          <FiImage className="text-2xl text-accent" aria-hidden="true" />
          <p className="text-sm">Photo coming soon</p>
        </div>
      )}
    </div>
  );
}
