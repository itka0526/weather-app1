import Image from "next/image";
import styles from "./page.module.css";
import { Weather } from "./weather";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <section>
                    <h1>Setting things up</h1>
                    <p>
                        Initially, I was thinking of picking Django Python framework for this task but the task required a permanent connection and
                        website be ip accessible. Therefore, I picked the NextJS because it has a free hosting on Vercel. And it has additional
                        features and stuff that makes things easier. I said no to almost everything. It asked me if I wanted to use Typescript,
                        Tailwind... and bunch of stuff I don't know.
                    </p>
                    <div className="section-1">
                        <Image src={"/next.svg"} width={256} height={256} alt="NextJS Logo" />
                        <span style={{ fontSize: "4rem" }}>+</span>
                        <Image src={"/vercel.png"} width={256} height={256} alt="Vercel Logo" />
                    </div>
                    <pre>
                        <code>
                            {`
npx create-next-app@latest app-name # Creates a new NextJS app
npm install && npm run dev # Runs a dev server `}
                        </code>
                    </pre>
                </section>
                <section>
                    <h1>Adding fonts</h1>
                    <p>
                        First, I went to fonts.google.com and picked a good looking font. In this example, I picked Tektur font. To add the font I had
                        to read the NextJS's docs. It was bit weird. I had to import the font inside the layout.js and then add to the{" "}
                        <code>body</code> tag's class. There were small quirks like classes are named classNames, and JSX not being same as the HTML.
                        But after reading the errors and some documention I was able to figure it out fairly easily.
                    </p>
                    <code>
                        <pre>
                            {`
import { Tektur } from "next/font/google";
const font = Tektur({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={font.className}>{children}</body>
        </html>
    );
}`}
                        </pre>
                    </code>
                </section>
                <section>
                    <h1>Favicons...</h1>
                    <p>
                        I used my Github account's icon as the favicon for my page. This was done by first converting the PNG image through online PNG
                        to ICO converter. Then I deleted the favicon image from the app folder and added the new image.
                    </p>
                    <div className="section-2">
                        <Image src={"/favicon.png"} alt="Favicon Icon" width={256} height={256} />
                    </div>
                </section>
                <section>
                    <h1>Testing API's </h1>
                    <p>
                        You currently can click the button below to request the current weather. The button will send an GET request to
                        <code>/api</code> and will display the current weather information down below. The API was created by creating a folder named
                        api inside the app folder and then by adding route.js file to it. The API works by sending a request to another external free
                        weather API and then after receiving the response it forwards back to the browser.
                    </p>
                    <Weather />
                    <code>
                        <pre></pre>
                    </code>
                </section>
            </main>
            <footer className={styles.footer}>
                <a href="https://github.com/neffylon" target="_blank" rel="noopener noreferrer">
                    <Image aria-hidden src="/globe.svg" alt="Github Link" width={16} height={16} />
                    neffylon
                </a>
            </footer>
        </div>
    );
}
