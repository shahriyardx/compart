import React from "react";
import Container from "../components/Layout/Container";
import Page from "../components/Layout/Page";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiStripe,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiDocker,
} from "react-icons/si";

const Portfolio = () => {
  return (
    <Page>
      <h1 className="text-3xl text-center font-bold mt-10 mb-20">
        My Portfolio
      </h1>

      <Container>
        <div>
          <h1 className="text-2xl font-bold mb-2">Information</h1>

          <h2 className="text-lg font-normal">
            Name: <span className="font-bold">Md Shahriayr Alam</span>
          </h2>
          <h2 className="text-lg font-normal">
            Email:{" "}
            <span className="font-bold">mdshahriyaralam552@gmail.com</span>
          </h2>
          <h2 className="text-lg font-normal">
            Phone: <span className="font-bold">+8801761333883</span>
          </h2>
          <h2 className="text-lg font-normal">
            Education: <span className="font-bold">Diploma In Engineering</span>
          </h2>

          <h2 className="text-lg font-normal">
            Website:{" "}
            <a
              href="https://shahriyar.dev"
              target="_blank"
              className="text-blue-500 font-bold"
            >
              https://shahriyar.dev
            </a>
          </h2>
        </div>

        <div className="mt-10">
          <h1 className="text-2xl font-bold mb-2">Skills and Technologies</h1>

          <div className="flex gap-3 flex-wrap">
            <div className="px-3 py-2 flex items-center gap-2 rounded-md bg-black/10 text-lg">
              <SiReact className="text-xl" /> <span>React</span>
            </div>

            <div className="px-3 py-2 flex items-center gap-2 rounded-md bg-black/10 text-lg">
              <SiHtml5 className="text-xl" /> <span>HTML</span>
            </div>

            <div className="px-3 py-2 flex items-center gap-2 rounded-md bg-black/10 text-lg">
              <SiTailwindcss className="text-xl" /> <span>Tailwindcss</span>
            </div>

            <div className="px-3 py-2 flex items-center gap-2 rounded-md bg-black/10 text-lg">
              <SiNextdotjs className="text-xl" /> <span>Nextjs</span>
            </div>

            <div className="px-3 py-2 flex items-center gap-2 rounded-md bg-black/10 text-lg">
              <SiStripe className="text-xl" /> <span>Stripe</span>
            </div>

            <div className="px-3 py-2 flex items-center gap-2 rounded-md bg-black/10 text-lg">
              <SiCss3 className="text-xl" /> <span>CSS3</span>
            </div>

            <div className="px-3 py-2 flex items-center gap-2 rounded-md bg-black/10 text-lg">
              <SiJavascript className="text-xl" /> <span>JavaScript</span>
            </div>

            <div className="px-3 py-2 flex items-center gap-2 rounded-md bg-black/10 text-lg">
              <SiDocker className="text-xl" /> <span>Docker</span>
            </div>

            <div className="flex items-center text-lg text-zinc-400">
              And many more...
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-2 mt-10">Recent Projects</h1>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-20">
          <div className="p-5 bg-zinc-200 rounded-lg">
            <img
              src="/images/projects/mac.png"
              className="rounded-md mb-3"
              alt=""
            />

            <a
              href="https://mac-studiox.netlify.app/"
              target="_blank"
              className="text-2xl text-blue-500"
            >
              Mac Studio
            </a>
            <p>Showcasing Mac studio</p>
          </div>
          <div className="p-5 bg-zinc-200 rounded-lg">
            <img
              src="/images/projects/wildie.png"
              className="rounded-md mb-3"
              alt=""
            />

            <a
              href="https://wildie-shahriyardx.web.app/"
              target="_blank"
              className="text-2xl text-blue-500"
            >
              Wildie
            </a>
            <p>Wildie is a good photographer</p>
          </div>
          <div className="p-5 bg-zinc-200 rounded-lg">
            <img
              src="/images/projects/crisis.png"
              className="rounded-md mb-3"
              alt=""
            />

            <a
              href="https://crisisentertainment.com/"
              target="_blank"
              className="text-2xl text-blue-500"
            >
              Crisis Entertainment
            </a>
            <p>Crisis entertainment is a game development company</p>
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default Portfolio;
