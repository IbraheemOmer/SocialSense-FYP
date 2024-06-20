import { useState } from "react";
import Hero from "../hero/Hero";
import NavBar from "../navbar/NavBar";
import Result from "../result/Result";
import openai from "openai";

const openaiInstance = new openai({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export default function Main() {
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState(null);

  const handleSendMessage = async (input) => {
    try {
      const response = await openaiInstance.chat.completions.create({
        model: "ft:gpt-3.5-turbo-0125:personal:socialsense:96eqMPvL",
        messages: [
          {
            role: "system",
            content:
              "You are a text classifier for social media comments. Classify the following comment into one of the following classes: [Positive, Neutral, Negative - Respond, Negative - Ignore, Negative - Remove, Crisis]",
          },
          { role: "user", content: input },
        ],
      });

      const predictedCategory = response.choices[0].message.content;

      const categoryPattern =
        /^(Positive|Neutral|Negative\s-\sIgnore|Negative\s-\sRemove|Negative\s-\sRespond|Crisis)$/;

      if (categoryPattern.test(predictedCategory)) {
        console.log(predictedCategory);
        setResultData(predictedCategory);
        setShowResult(true);
      } else {
        console.error("Invalid category:", predictedCategory);
      }
    } catch (error) {
      console.error("Error:", error);
      setResultData("Unable To Predict Category");
      setShowResult(true);
    }
  };

  return (
    <div>
      <NavBar />
      <Hero onSendMessage={handleSendMessage} />
      {showResult && <Result result={resultData} />}
    </div>
  );
}
