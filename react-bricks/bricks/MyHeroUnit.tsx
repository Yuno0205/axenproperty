import { RichText, Text, types } from "react-bricks/rsc";

interface HeroUnitProps {
  title: types.TextValue;
  text: types.TextValue;
}

const MyHeroUnit: types.Brick<HeroUnitProps> = ({ title, text }) => {
  return (
    <div className="max-w-xl mx-auto px-6 py-20 text-center">
      <Text
        propName="title"
        value={title}
        renderBlock={(props) => (
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
            {props.children}
          </h1>
        )}
        placeholder="Type a title..."
      />
      <RichText
        propName="text"
        value={text}
        renderBlock={(props) => (
          <p className="text-xl leading-relaxed text-gray-700">
            {props.children}
          </p>
        )}
        placeholder="Type a text..."
      />
    </div>
  );
};

MyHeroUnit.schema = {
  name: "my-hero-unit",
  label: "Custom Hero Unit",
  getDefaultProps: () => ({
    title: "This is a custom Hero Unit",
    text: "Start building your amazing visually editable website!",
  }),
  sideEditProps: [], // Không có tùy chỉnh ở sidebar cho đơn giản
};

export default MyHeroUnit;
