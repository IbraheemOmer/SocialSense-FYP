import "./research.css";
import NavBar from "../navbar/NavBar";

export default function Research() {
  return (
    <div>
      <NavBar />
      <ProjectDetails />
      <Categories />
      <Model />
    </div>
  );
}

function ProjectDetails() {
  return (
    <div className="project-details">
      <h1>Our Research Journey</h1>
      <p>
        We proposed the development of an innovative AI model designed to
        revolutionize the analysis of user-generated content across various
        online platforms. Leveraging advanced Natural Language Processing (NLP)
        techniques, our model adeptly sifted through comments and reviews
        sourced from social media platforms, categorizing them into six distinct
        labels: Positive, Neutral, Negative - Respond, Negative – Ignore,
        Negative – Remove, and Crisis. This categorization system, meticulously
        curated through extensive research on critical types of social media
        interactions, promised to offer businesses and organizations
        unparalleled insights into user sentiment and intent. By inclusively
        incorporating content in English, Urdu (Roman Script) and Urdu (Arabic
        Script), we ensured a diverse dataset, facilitating a comprehensive
        understanding of online interactions. This project represented a
        significant stride towards empowering entities to harness the power of
        AI in deciphering the nuanced landscape of user-generated text.
      </p>
    </div>
  );
}

function Model() {
  return (
    <div className="model">
      <h1>GPT-3.5 Turbo</h1>
      <p>
        A cutting-edge GPT-3.5 Turbo model, version 0125, was chosen due to its
        advanced natural language processing capabilities. To mitigate biases in
        the training data, a meticulously curated dataset of 1800 samples was
        assembled, with 100 samples allocated for each label across English,
        Urdu (Roman Script) and Urdu (Arabic Script) . This diverse dataset was
        crucial in ensuring the model's ability to generalize across different
        linguistic contexts. Fine-tuning was conducted on a substantial dataset
        comprising 480,966 tokens, optimizing the model's performance over three
        epochs. Additionally, a separate validation dataset, mirroring the
        composition of the training data, was utilized to assess the model's
        performance during training and validate its generalization across
        various languages and labels. This comprehensive approach to model
        selection, dataset composition, and fine-tuning underscores a commitment
        to achieving robust and reliable performance across a range of natural
        language processing tasks and linguistic domains.
      </p>
    </div>
  );
}

function Categories() {
  return (
    <div className="grid">
      <div className="categories-content-1">
        <h1>Positive</h1>
        <p>
          Positive comments express approval or admiration, highlighting the
          good aspects, achievements, or efforts, fostering a supportive and
          uplifting atmosphere.
        </p>
        <h4>Sample Comments: </h4>
        <ul>
          <li>I actually love this</li>
          <li>Boht payri lg ryii Ma Sha Allah...</li>
          <li>بہت بہت مبارک ہو ❤️</li>
        </ul>
      </div>
      <div className="categories-content-2">
        <h1>Neutral</h1>
        <p>
          Neutral comments provide impartial observations or statements without
          overt positive or negative connotations, aiming to maintain a balanced
          perspective devoid of emotional bias or personal opinion.
        </p>
        <h4>Sample Comments: </h4>
        <ul>
          <li>Charge battery</li>
          <li>Sadi wali Porsche</li>
          <li>ویسے لیول تو کافی صاف نظر آرہا ہے</li>
        </ul>
      </div>
      <div className="categories-content-5">
        <h1>Negative - Respond</h1>
        <p>
          This comment expresses dissatisfaction or disagreement with a specific
          aspect, prompting potential responses to address concerns or engage in
          constructive dialogue for improvement.
        </p>
        <h4>Sample Comments: </h4>
        <ul>
          <li>V.Bad Quality Shoes Not Recommend At all</li>
          <li>Nihayat he ghatiya log hain</li>
          <li>پروڈکٹ کی کوالٹی بہت ہی خراب ہے، بہت بڑی مسئلہ</li>
        </ul>
      </div>
      <div className="categories-content-4">
        <h1>Negative - Ignore</h1>
        <p>
          Troll comments are deliberately inflammatory, lacking constructive
          criticism and aiming to provoke negative reactions, often
          characterized by confrontational tone or disrespectful language,
          hindering productive discourse.
        </p>
        <h4>Sample Comments: </h4>
        <ul>
          <li>
            Can I ever trust someone giving me a small box of cereal now 🤣
          </li>
          <li>Behayai ka word esko dekh kar ijaad hwa Hoga</li>
          <li>برگرز برائی ہیں اور ان لوگوں کو بھی جو انہیں کھاتے ہیں۔</li>
        </ul>
      </div>
      <div className="categories-content-3">
        <h1>Negative - Remove</h1>
        <p>
          Violating comments breach community guidelines with offensive, spammy,
          or harmful content, disrupting respectful dialogue and degrading the
          overall engagement quality.
        </p>
        <h4>Sample Comments: </h4>
        <ul>
          <li>Bitches always show there booty</li>
          <li>Team me chutiyon ko bhara hua ha</li>
          <li>یہاں صرف حرامی اور دھوکے باز ہیں۔</li>
        </ul>
      </div>
      <div className="categories-content-6">
        <h1>Crisis</h1>
        <p>
          Crisis comments pose legal or criminal risks, including threats,
          breaches of confidentiality, defamation, and potential PR disasters,
          requiring immediate action to mitigate harm and prevent further
          consequences.
        </p>
        <h4>Sample Comments: </h4>
        <ul>
          <li>
            We'll tear apart anything that gets in our way. Including you.
          </li>
          <li>
            Is restaurant ko jala do, taake iske malik ko nuksan ka ehsaas ho.
          </li>
          <li>
            آپ کو میری قوت کا اندازہ ہی نہیں، اور میں آپ کو خاک میں ملا دوں گا۔
          </li>
        </ul>
      </div>
    </div>
  );
}
