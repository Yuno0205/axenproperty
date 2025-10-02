import { types, RichText } from "react-bricks/frontend";

// Component interface
interface HeroUnitProps {
  title: types.TextValue;
  padding: "big" | "small";
}

// The React Component
const HeroUnit: types.Brick<HeroUnitProps> = ({ title, padding }) => {
  return (
    <div className={`${padding === "big" ? "py-20" : "py-12"}`}>
      <RichText
        propName="title"
        value={title}
        placeholder="Type a title..."
        renderBlock={({ children }) => (
          <h1 className="text-3xl text-center">{children}</h1>
        )}
        allowedFeatures={[types.RichTextFeatures.Bold]}
      />
    </div>
  );
};

// The Brick's Schema
HeroUnit.schema = {
  name: "hero-unit",
  label: "Hero Unit",
  getDefaultProps: () => ({
    padding: "big",
    title: "Thick as a React Brick",
  }),

  // Sidebar Controls Definition
  sideEditProps: [
    {
      name: "padding",
      label: "Padding",
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: "big", label: "Big" },
          { value: "small", label: "Small" },
        ],
      },
    },
  ],
};
export default HeroUnit;
