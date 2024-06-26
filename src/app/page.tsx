import styles from "./page.module.css"
import { TextSection } from "@/components/text-section/text-section"
import { ScrollingCenteredImage } from "@/components/scrolling-centered-image/scrolling-centered-image"

export default function Home() {
  return (
    <>
      {/* https://placehold.jp/3d4070/ffffff/200x200.jpghttps://placehold.jp/3d4070/ffffff/200x200.jpg */}
      <h1>HOME PAGE </h1>
      {/* <ScrollFeature
        data={{
          title: "test",
          subtitle: "hi",
          pages: [
            {
              image:
                "https://placehold.jp/3d4070/ffffff/200x200.jpghttps://placehold.jp/3d4070/ffffff/200x200.jpg",
              pageName: "history 1",
              pageInformation: "blah blah blah",
            },
            {
              image:
                "https://placehold.jp/3d4070/ffffff/200x200.jpghttps://placehold.jp/3d4070/ffffff/200x200.jpg",
              pageName: "history 2",
              pageInformation: "blah blah blah blah",
            },
            {
              image:
                "https://placehold.jp/3d4070/ffffff/200x200.jpghttps://placehold.jp/3d4070/ffffff/200x200.jpg",
              pageName: "history 3",
              pageInformation: "blah blah blah blah blah",
            },
          ],
        }}
      /> */}

      <ScrollingCenteredImage
        data={[
          {
            image: {
              src: "https://placehold.jp/3d4070/ffffff/200x200.jpghttps://placehold.jp/3d4070/ffffff/200x200.jpg",
              alt: "image 1",
            },
            details: {
              title: "Test 1",
              description: "description bsljhbvjhsbd hjlhaj cajh",
            },
          },
          {
            image: {
              src: "https://placehold.jp/3d4070/ffffff/200x200.jpghttps://placehold.jp/3d4070/ffffff/200x200.jpg",
              alt: "image 2",
            },
            details: {
              title: "Test 2",
              description: "description bsljhbvjhsbd hjlhaj cajh",
            },
          },
          {
            image: {
              src: "https://placehold.jp/3d4070/ffffff/200x200.jpghttps://placehold.jp/3d4070/ffffff/200x200.jpg",
              alt: "image 3",
            },
            details: {
              title: "Test 3",
              description: "description bsljhbvjhsbd hjlhaj cajh",
            },
          },
        ]}
      />

      <p>end scroll feature</p>

      <TextSection textColor={"black"}>
        TESTING THE TEXT SECTION TESTING THE TEXT SECTION TESTING THE TEXT
        SECTION TESTING THE TEXT SECTION TESTING THE TEXT SECTION TESTING THE
        TEXT SECTION TESTING THE TEXT SECTION TESTING THE TEXT SECTION TESTING
        THE TEXT SECTION
      </TextSection>
    </>
  )
}
