import Block from "../components/Block";
import reactionSvg from "../images/icon-reaction.svg";
import memorySvg from "../images/icon-memory.svg";
import verbalSvg from "../images/icon-verbal.svg";
import visualSvg from "../images/icon-visual.svg";
import data from "../data.json";

const Aside = () => {
  return (
    <article className="article">
      <h3 className="summary">Summary</h3>
      <div className="block-container">
        <Block
          color="#ff575720"
          colorText="#ff5757"
          text={data[0].category}
          icon={reactionSvg}
          grade={data[0].score}
        />
        <Block
          color="#ffb01f20"
          colorText="#ffb01f"
          text={data[1].category}
          icon={memorySvg}
          grade={data[1].score}
        />
        <Block
          color="#7857ff20"
          colorText="#7857ff"
          text={data[2].category}
          icon={verbalSvg}
          grade={data[2].score}
        />
        <Block
          color="#1125d420"
          colorText="#1125d4"
          text={data[3].category}
          icon={visualSvg}
          grade={data[3].score}
        />
      </div>
      <button className="button-continue">Continue</button>
    </article>
  );
};

export default Aside;
