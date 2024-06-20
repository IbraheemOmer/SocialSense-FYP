import NavBar from "../navbar/NavBar";
import "./products.css";
import { useState } from "react";

export default function Products() {
  return (
    <>
      <NavBar />
      <Heading />
      <ProductsCatalogue />
    </>
  );
}

function Heading() {
  return (
    <div className="products-heading">
      <h1>Explore Our Range</h1>
    </div>
  );
}

function ProductsCatalogue() {
  const [showCodeSnippet, setShowCodeSnippet] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("node.js");

  return (
    <div>
      <div className="product" onClick={() => setShowCodeSnippet(!showCodeSnippet)}>
  <div className="content-product">
    <div className="image-container">
      <img src="assets/images/Product Icons/gpt.png" alt="Social Sense API" />
    </div>
    <div className="description">
      <h1>SocialSense API</h1>
      <p>
        Introducing our API powered by the cutting-edge GPT-3.5-Turbo model. Seamlessly integrate this advanced API into your projects to effectively classify social media comments or e-commerce reviews into relevant categories. With unparalleled accuracy and efficiency, our API empowers you to streamline content analysis and enhance user experience.
      </p>
      {showCodeSnippet && (
        <div className="code-snippet-container" onClick={(e) => e.stopPropagation()}>
          <div className="code-content">
            <div className="dropdown-container">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value="node.js">Node.js</option>
                <option value="python">Python</option>
              </select>
            </div>
            <pre>
              {selectedLanguage === "node.js"
                ? `async function main() {
  const completion = await openai.chat.completions.create({
  messages: [{ role: "system", content: "You are a text classifier for social media comments. 
  Classify the following comment into one of the following classes: 
  [Positive, Neutral, Negative - Respond, Negative - Ignore, Negative - Remove, Crisis]" }],
  model: "ft:gpt-3.5-turbo-0125:personal:socialsense:96eqMPvL",
  });
  console.log(completion.choices[0]);
}
main();`
                : `from openai import OpenAI
client = OpenAI()
                      
completion = client.chat.completions.create(
  model="ft:gpt-3.5-turbo-0125:personal:socialsense:96eqMPvL",
  messages=[
    {"role": "system", "content": "You are a text classifier for social media comments. 
    Classify the following comment into one of the following classes: 
    [Positive, Neutral, Negative - Respond, Negative - Ignore, Negative - Remove, Crisis]"},
    {"role": "user", "content": "Hello!"}
  ]
)
print(completion.choices[0].message)`}
            </pre>
          </div>
        </div>
      )}
    </div>
  </div>
</div>



      < div className="product">
        <div
          className="content-product"
          onClick={() =>
            window.open(
              "https://chromewebstore.google.com/detail/socialsense-for-facebook/hfngglbbpdcgjipinlgpbkllemaokfej",
              "_blank"
            )
          }
        >
          <div className="image-container">
            <img
              src="assets/images/Product Icons/facebook.png"
              alt="SocialSense For Facebook"
            />
          </div>
          <div className="description">
            <h1>SocialSense For Facebook</h1>
            <p>
              Introducing our Chrome extension tailored specifically for Facebook.
              Featuring the robust SocialSense API integration, this innovative
              tool classifies comments in real-time into six distinct categories,
              providing users with invaluable insights at their fingertips.
              Whether you're monitoring discussions, analyzing feedback, or
              engaging with your audience on Facebook, this extension empowers
              users to generate actionable insights effortlessly.
            </p>
          </div>
        </div>
      </div>

      <div className="product">
      <div
        className="content-product"
        onClick={() =>
          window.open(
            "https://chromewebstore.google.com/detail/socialsense-for-instagram/hkjoggfopokhofccmelocagmgbigoblo",
            "_blank"
          )
        }
      >
        <div className="image-container">
          <img
            src="assets/images/Product Icons/instagram.png"
            alt="SocialSense For Instagram"
          />
        </div>
        <div className="description">
          <h1>SocialSense For Instagram</h1>
          <p>
            Introducing our Chrome extension tailored specifically for
            Instagram. Featuring the robust SocialSense API integration, this
            innovative tool classifies comments in real-time into six distinct
            categories, providing users with invaluable insights at their
            fingertips. Whether you're monitoring discussions, analyzing
            feedback, or engaging with your audience on Instagram, this
            extension empowers users to generate actionable insights
            effortlessly.
          </p>
        </div>
      </div>
      </div> 

      <div className="product 3">
      <div
        className="content-product"
        onClick={() =>
          window.open(
            "https://chromewebstore.google.com/detail/socialsense-for-tiktok/lponlmnipbnahjbhnfhodlfepegbjehh",
            "_blank"
          )
        }
      >
        <div className="image-container">
          <img
            src="assets/images/Product Icons/TikTok.png"
            alt="SocialSense For TikTok"
          />
        </div>
        <div className="description">
          <h1>SocialSense For TikTok</h1>
          <p>
            Introducing our Chrome extension tailored specifically for TikTok.
            Featuring the robust SocialSense API integration, this innovative
            tool classifies comments in real-time into six distinct categories,
            providing users with invaluable insights at their fingertips.
            Whether you're monitoring discussions, analyzing feedback, or
            engaging with your audience on TikTok, this extension empowers users
            to generate actionable insights effortlessly.
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      </div>
    </div>
  );
}
