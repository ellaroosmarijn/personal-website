import { CardStack } from "@/components/card-stack/card-stack"
import { CardStackContainer } from "@/components/card-stack/lib/card-stack-container"
import { TextSection } from "@/components/text-section/text-section"
import styles from "./page.module.css"

export default function ProjectsPage() {
  return (
    <div className={styles["projects-page-container"]}>
      <div className={styles.text}>
        <TextSection
          textColor="olive"
          title={"Welcome to my projects showcase!"}
        >
          Here, you'll find a collection that shows some of my most notable
          works, from my first post-study website to the impactful contributions
          I've made in my professional career. These projects showcase my
          growth, skills, and passion for creating meaningful digital
          experiences. Explore them to get a glimpse of my capabilities and the
          value I can bring to any development endeavor.
        </TextSection>
      </div>
      <CardStackContainer>
        <CardStack
          color={"yellow"}
          title={"Tracksuit's Marketing Website"}
          description={
            "At Tracksuit, a brand tracking company, I developed key website pages including the blog, product page, about page, and significant portions of the careers and home pages. I created schemas for content management, allowing easy page restructuring and component reuse within the CMS."
          }
          extraInformation="Built using: Next, React, Typescipt, Jest, Sanity CMS, CSS"
          primaryButton={{
            theme: "ghost",
            text: "See website",
            link: "https://www.gotracksuit.com/au",
          }}
          image={{
            src: "https://placehold.jp/3d4070/ffffff/700x700.png",
            alt: "placholder",
          }}
        />
        <CardStack
          color={"pink"}
          title={"From Student to Developer: My First Website"}
          description={
            "Eager to apply my newly acquired skills from Dev Academy, I built my first personal website to showcase projects, share my developer journey, and connect with fellow developers. The website featured my projects, an about section, and a contact page, demonstrating my passion for web development and continuous learning."
          }
          extraInformation="Built using: Node, React, Typescipt, Emotion CSS, Express"
          primaryButton={{
            theme: "ghost",
            text: "See website",
            link: "https://ellaroosmarijn.com/",
          }}
          secondaryButton={{
            text: "See code",
            link: "https://github.com/ellaroosmarijn/portfolio",
          }}
          image={{
            src: "https://placehold.jp/3d4070/ffffff/700x700.png",
            alt: "placholder",
          }}
        />
        <CardStack
          color={"blue"}
          title={"Let Me In"}
          description={
            "Let Me In is a teacher-led group project developed during Dev Academy Aotearoa's bootcamp. This interactive game seeks to offer participants a meme, specifically designed to be shared with one's teachers when they are late to a Zoom meeting."
          }
          extraInformation={
            "Built using: Express, React, Knex, SCSS, TypeScript, Thunks, Redux, Jest"
          }
          primaryButton={{
            theme: "ghost",
            text: "See code",
            link: "https://github.com/ellaroosmarijn/Let-Me-In",
          }}
          video={{
            src: "/videos/let-me-in-project-recording.mov",
            type: "video/mp4",
          }}
        />
        <CardStack
          color={"yellow"}
          title={"Gallerina"}
          description={
            "Gallerina is an art curation website, similar to Pinterest, where users can explore and save artwork to their collections. Logged-in users can easily add and manage their collected paintings."
          }
          extraInformation={
            "Built using: Tailwind CSS, RestfulAPI, Express, Redux, Knex, Dbdiagram.io, TypeScript, SQLite 3, Thunks, React"
          }
          primaryButton={{
            theme: "ghost",
            text: "See code",
            link: "https://github.com/tohora-2023/Gallerina",
          }}
          video={{
            src: "/videos/gallerina-project-recording.mov",
            type: "video/mp4",
          }}
        />
      </CardStackContainer>
    </div>
  )
}
